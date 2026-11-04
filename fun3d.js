var Z_=Object.defineProperty;var K_=(e)=>e;function J_(e,t){this[e]=K_.bind(null,t)}var j_=(e,t)=>{for(var i in t)Z_(e,i,{get:t[i],enumerable:!0,configurable:!0,set:J_.bind(t,i)})};var ns={};j_(ns,{ArcCurve:()=>Pu,CatmullRomCurve3:()=>Wo,CubicBezierCurve:()=>Sl,CubicBezierCurve3:()=>Bu,EllipseCurve:()=>zs,LineCurve:()=>bl,LineCurve3:()=>Ou,QuadraticBezierCurve:()=>Tl,QuadraticBezierCurve3:()=>El,SplineCurve:()=>wl});var ua="187";var Jf=0,Jh=1,jf=2;var to=1,$f=2,Ms=3,cn=0,zt=1,It=2,In=0,Vr=1,fa=2,jh=3,$h=4,Qf=5;var Wr=100,ed=101,td=102,id=103,nd=104,rd=200,sd=201,od=202,ad=203,ac=204,lc=205,ld=206,cd=207,hd=208,ud=209,fd=210,dd=211,pd=212,md=213,gd=214,da=0,pa=1,ma=2,Xr=3,ga=4,xa=5,_a=6,ya=7,vs=0,xd=1,_d=2,mn=0,io=1,no=2,ro=3,qr=4,so=5,oo=6,ao=7,Qh="attached",yd="detached",cc=300,Pn=301,Sr=302,Ma=303,va=304,hn=1000,bi=1001,Yr=1002,Ft=1003,Sa=1004;var Zr=1005;var Ot=1006,Ss=1007;var Pi=1008;var hi=1009,hc=1010,uc=1011,br=1012,lo=1013,Ti=1014,oi=1015,jt=1016,co=1017,ho=1018,Zn=1020,fc=35902,dc=35899,pc=1021,mc=1022,Ei=1023,un=1026,gn=1027,uo=1028,bs=1029,xn=1030,fo=1031;var po=1033,mo=33776,go=33777,xo=33778,_o=33779,ba=35840,Ta=35841,Ea=35842,wa=35843,Aa=36196,Ra=37492,Ca=37496,Ia=37488,Pa=37489,Ts=37490,La=37491,Da=37808,Na=37809,Fa=37810,Ua=37811,Ba=37812,Oa=37813,Ha=37814,Ga=37815,za=37816,ka=37817,Va=37818,Wa=37819,Xa=37820,qa=37821,Ya=36492,Za=36494,Ka=36495,Ja=36283,ja=36284,Es=36285,$a=36286;var Tr=2300,ws=2301,gc=2302,eu=2303,xc=2400,_c=2401,yc=2402,Mc=2500;var Md=0,vc=1,Qa=2,vd=3200;var Kn=0,Sd=1,Ln="",xt="srgb",Hi="srgb-linear",As="linear",_t="srgb";var Sc=7680;var bd=519,Td=512,Ed=513,wd=514,bc=515,Ad=516,Rd=517,Tc=518,Ec=519,el=35044;var tu="300 es",Li=2000,or=2001;function Id(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function iu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Kr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function nu(){let e=Kr("canvas");return e.style.display="block",e}var Cd={},yo=null;function Rs(...e){let t="THREE."+e.shift();if(yo)yo("log",t,...e);else console.log(t,...e)}function Pd(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function de(...e){e=Pd(e);let t="THREE."+e.shift();if(yo)yo("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Be(...e){e=Pd(e);let t="THREE."+e.shift();if(yo)yo("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function Dn(...e){let t=e.join(" ");if(t in Cd)return;Cd[t]=!0,de(...e)}function Ld(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var Dd={[da]:da,[ma]:_a,[ga]:ga,[Xr]:xa,[pa]:pa,[_a]:ma,[ya]:ya,[xa]:Xr};class wi{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);if(r!==-1)n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}var Yi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,Er=Math.PI/180,wr=180/Math.PI;function ui(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yi[e&255]+Yi[e>>8&255]+Yi[e>>16&255]+Yi[e>>24&255]+"-"+Yi[t&255]+Yi[t>>8&255]+"-"+Yi[t>>16&15|64]+Yi[t>>24&255]+"-"+Yi[i&63|128]+Yi[i>>8&255]+"-"+Yi[i>>16&255]+Yi[i>>24&255]+Yi[n&255]+Yi[n>>8&255]+Yi[n>>16&255]+Yi[n>>24&255]).toLowerCase()}function tt(e,t,i){return Math.max(t,Math.min(i,e))}function wc(e,t){return(e%t+t)%t}function $_(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function Q_(e,t,i){if(e!==t)return(i-e)/(t-e);else return 0}function Mo(e,t,i){return(1-i)*e+i*t}function ey(e,t,i,n){return Mo(e,t,1-Math.exp(-i*n))}function ty(e,t=1){return t-Math.abs(wc(e,t*2)-t)}function iy(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*(3-2*e)}function ny(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10)}function ry(e,t){return e+Math.floor(Math.random()*(t-e+1))}function sy(e,t){return e+Math.random()*(t-e)}function oy(e){return e*(0.5-Math.random())}function ay(e){if(e!==void 0)Nd=e;let t=Nd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ly(e){return e*Er}function cy(e){return e*wr}function hy(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function uy(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function ru(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function fy(e,t,i,n,r){let{cos:s,sin:o}=Math,a=s(i/2),l=o(i/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":e.set(a*h,l*f,l*u,a*c);break;case"YZY":e.set(l*u,a*h,l*f,a*c);break;case"ZXZ":e.set(l*f,l*u,a*h,a*c);break;case"XZX":e.set(a*h,l*g,l*m,a*c);break;case"YXY":e.set(l*m,a*h,l*g,a*c);break;case"ZYZ":e.set(l*g,l*m,a*h,a*c);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tl(e,t){if(t.constructor===Float32Array)return e;let i=vo(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function il(e,t){if(t.constructor===Float32Array)return e;let i=vo(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}var Ac={DEG2RAD:Er,RAD2DEG:wr,generateUUID:ui,clamp:tt,euclideanModulo:wc,mapLinear:$_,inverseLerp:Q_,lerp:Mo,damp:ey,pingpong:ty,smoothstep:iy,smootherstep:ny,randInt:ry,randFloat:sy,randFloatSpread:oy,seededRandom:ay,degToRad:ly,radToDeg:cy,isPowerOfTwo:hy,ceilPowerOfTwo:uy,floorPowerOfTwo:ru,setQuaternionFromProperEuler:fy,normalize:il,denormalize:tl};class k{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let a=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],f=r[s+0],u=r[s+1],m=r[s+2],g=r[s+3];if(h!==g||a!==f||l!==u||c!==m){let x=a*f+l*u+c*m+h*g;if(x<0)f=-f,u=-u,m=-m,g=-g,x=-x;let d=1-o;if(x<0.9995){let p=Math.acos(x),_=Math.sin(p);d=Math.sin(d*p)/_,o=Math.sin(o*p)/_,a=a*d+f*o,l=l*d+u*o,c=c*d+m*o,h=h*d+g*o}else{a=a*d+f*o,l=l*d+u*o,c=c*d+m*o,h=h*d+g*o;let p=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=p,l*=p,c*=p,h*=p}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){let o=i[n],a=i[n+1],l=i[n+2],c=i[n+3],h=r[s],f=r[s+1],u=r[s+2],m=r[s+3];return e[t]=o*m+c*h+a*u-l*f,e[t+1]=a*m+c*f+l*h-o*u,e[t+2]=l*m+c*u+o*f-a*h,e[t+3]=c*m-o*h-a*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:n,_z:r,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(n/2),h=o(r/2),f=a(i/2),u=a(n/2),m=a(r/2);switch(s){case"XYZ":this._x=f*c*h+l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h-f*u*m;break;case"YXZ":this._x=f*c*h+l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h+f*u*m;break;case"ZXY":this._x=f*c*h-l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h-f*u*m;break;case"ZYX":this._x=f*c*h-l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h+f*u*m;break;case"YZX":this._x=f*c*h+l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h-f*u*m;break;case"XZY":this._x=f*c*h-l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h+f*u*m;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],f=i+o+h;if(f>0){let u=0.5/Math.sqrt(f+1);this._w=0.25/u,this._x=(c-a)*u,this._y=(r-l)*u,this._z=(s-n)*u}else if(i>o&&i>h){let u=2*Math.sqrt(1+i-o-h);this._w=(c-a)/u,this._x=0.25*u,this._y=(n+s)/u,this._z=(r+l)/u}else if(o>h){let u=2*Math.sqrt(1+o-i-h);this._w=(r-l)/u,this._x=(n+s)/u,this._y=0.25*u,this._z=(a+c)/u}else{let u=2*Math.sqrt(1+h-i-o);this._w=(s-n)/u,this._x=(r+l)/u,this._y=(a+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+n*l-r*a,this._y=n*c+s*a+r*o-i*l,this._z=r*c+s*l+i*a-n*o,this._w=s*c-i*o-n*a-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,o=this.dot(e);if(o<0)i=-i,n=-n,r=-r,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,{x:r,y:s,z:o,w:a}=e,l=2*(s*n-o*i),c=2*(o*t-r*n),h=2*(r*i-s*t);return this.x=t+a*l+s*h-o*c,this.y=i+a*c+o*l-r*h,this.z=n+a*h+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:n,z:r}=e,{x:s,y:o,z:a}=t;return this.x=n*a-r*o,this.y=r*s-i*a,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var su=new A,Fd=new $t;class Ke{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l)}set(e,t,i,n,r,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7],f=i[2],u=i[5],m=i[8],g=n[0],x=n[3],d=n[6],p=n[1],_=n[4],M=n[7],v=n[2],b=n[5],w=n[8];return r[0]=s*g+o*p+a*v,r[3]=s*x+o*_+a*b,r[6]=s*d+o*M+a*w,r[1]=l*g+c*p+h*v,r[4]=l*x+c*_+h*b,r[7]=l*d+c*M+h*w,r[2]=f*g+u*p+m*v,r[5]=f*x+u*_+m*b,r[8]=f*d+u*M+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*r*c+i*o*a+n*r*l-n*s*a}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*s-o*l,f=o*a-c*r,u=l*r-s*a,m=t*h+i*f+n*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=h*g,e[1]=(n*l-c*i)*g,e[2]=(o*i-n*s)*g,e[3]=f*g,e[4]=(c*t-n*a)*g,e[5]=(n*r-o*t)*g,e[6]=u*g,e[7]=(i*a-l*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-n*l,n*a,-n*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return Dn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ou.makeScale(e,t)),this}rotate(e){return Dn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return Dn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ou=new Ke;var Ud=new Ke().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Bd=new Ke().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function dy(){let e={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(r,s,o){if(this.enabled===!1||s===o||!s||!o)return r;if(this.spaces[s].transfer===_t)r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===_t)r.r=Cs(r.r),r.g=Cs(r.g),r.b=Cs(r.b);return r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r===Ln)return As;return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],n=[0.3127,0.329];return e.define({[Hi]:{primaries:t,whitePoint:n,transfer:As,toXYZ:Ud,fromXYZ:Bd,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:t,whitePoint:n,transfer:_t,toXYZ:Ud,fromXYZ:Bd,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),e}var rt=dy();function Jn(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Cs(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var So;class Rc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(So===void 0)So=Kr("canvas");So.width=e.width,So.height=e.height;let n=So.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);i=So}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Jn(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(Jn(t[i]/255)*255);else t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var py=0;class ar{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)if(n[s].isDataTexture)r.push(au(n[s].image));else r.push(au(n[s]))}else r=au(n);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function au(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Rc.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return de("Texture: Unable to serialize Texture."),{}}var my=0,lu=new A;class bt extends wi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=bi,n=bi,r=Ot,s=Pi,o=Ei,a=hi,l=bt.DEFAULT_ANISOTROPY,c=Ln){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=ui(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new k(0,0),this.repeat=new k(1,1),this.center=new k(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(lu).x}get height(){return this.source.getSize(lu).y}get depth(){return this.source.getSize(lu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){de(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){de(`Texture.setValues(): property '${t}' does not exist.`);continue}if(n&&i&&(n.isVector2&&i.isVector2))n.copy(i);else if(n&&i&&(n.isVector3&&i.isVector3))n.copy(i);else if(n&&i&&(n.isMatrix3&&i.isMatrix3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Yr:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Yr:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=cc;bt.DEFAULT_ANISOTROPY=1;class yt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],h=a[8],f=a[1],u=a[5],m=a[9],g=a[2],x=a[6],d=a[10];if(Math.abs(c-f)<0.01&&Math.abs(h-g)<0.01&&Math.abs(m-x)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(h+g)<0.1&&Math.abs(m+x)<0.1&&Math.abs(l+u+d-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,M=(u+1)/2,v=(d+1)/2,b=(c+f)/4,w=(h+g)/4,y=(m+x)/4;if(_>M&&_>v)if(_<0.01)i=0,n=0.707106781,r=0.707106781;else i=Math.sqrt(_),n=b/i,r=w/i;else if(M>v)if(M<0.01)i=0.707106781,n=0,r=0.707106781;else n=Math.sqrt(M),i=b/n,r=y/n;else if(v<0.01)i=0.707106781,n=0.707106781,r=0;else r=Math.sqrt(v),i=w/r,n=y/r;return this.set(i,n,r,t),this}let p=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(f-c)*(f-c));if(Math.abs(p)<0.001)p=1;return this.x=(x-m)/p,this.y=(h-g)/p,this.z=(f-c)/p,this.w=Math.acos((l+u+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nl extends wi{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new bt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)if(this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0)this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ar(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zt extends nl{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class Is extends bt{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bo extends bt{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ce{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,s,o,a,l,c,h,f,u,m,g,x){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l,c,h,f,u,m,g,x)}set(e,t,i,n,r,s,o,a,l,c,h,f,u,m,g,x){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=r,d[5]=s,d[9]=o,d[13]=a,d[2]=l,d[6]=c,d[10]=h,d[14]=f,d[3]=u,d[7]=m,d[11]=g,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/To.setFromMatrixColumn(e,0).length(),r=1/To.setFromMatrixColumn(e,1).length(),s=1/To.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:n,z:r}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=s*c,u=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=u+m*l,t[5]=f-g*l,t[9]=-o*a,t[2]=g-f*l,t[6]=m+u*l,t[10]=s*a}else if(e.order==="YXZ"){let f=a*c,u=a*h,m=l*c,g=l*h;t[0]=f+g*o,t[4]=m*o-u,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-o,t[2]=u*o-m,t[6]=g+f*o,t[10]=s*a}else if(e.order==="ZXY"){let f=a*c,u=a*h,m=l*c,g=l*h;t[0]=f-g*o,t[4]=-s*h,t[8]=m+u*o,t[1]=u+m*o,t[5]=s*c,t[9]=g-f*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let f=s*c,u=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=m*l-u,t[8]=f*l+g,t[1]=a*h,t[5]=g*l+f,t[9]=u*l-m,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let f=s*a,u=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=g-f*h,t[8]=m*h+u,t[1]=h,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=u*h+m,t[10]=f-g*h}else if(e.order==="XZY"){let f=s*a,u=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=f*h+g,t[5]=s*c,t[9]=u*h-m,t[2]=m*h-u,t[6]=o*c,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gy,e,xy)}lookAt(e,t,i){let n=this.elements;if(_n.subVectors(e,t),_n.lengthSq()===0)_n.z=1;if(_n.normalize(),Jr.crossVectors(i,_n),Jr.lengthSq()===0){if(Math.abs(i.z)===1)_n.x+=0.0001;else _n.z+=0.0001;_n.normalize(),Jr.crossVectors(i,_n)}return Jr.normalize(),Cc.crossVectors(_n,Jr),n[0]=Jr.x,n[4]=Cc.x,n[8]=_n.x,n[1]=Jr.y,n[5]=Cc.y,n[9]=_n.y,n[2]=Jr.z,n[6]=Cc.z,n[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],h=i[5],f=i[9],u=i[13],m=i[2],g=i[6],x=i[10],d=i[14],p=i[3],_=i[7],M=i[11],v=i[15],b=n[0],w=n[4],y=n[8],S=n[12],R=n[1],U=n[5],P=n[9],H=n[13],ie=n[2],I=n[6],Z=n[10],L=n[14],N=n[3],te=n[7],z=n[11],Y=n[15];return r[0]=s*b+o*R+a*ie+l*N,r[4]=s*w+o*U+a*I+l*te,r[8]=s*y+o*P+a*Z+l*z,r[12]=s*S+o*H+a*L+l*Y,r[1]=c*b+h*R+f*ie+u*N,r[5]=c*w+h*U+f*I+u*te,r[9]=c*y+h*P+f*Z+u*z,r[13]=c*S+h*H+f*L+u*Y,r[2]=m*b+g*R+x*ie+d*N,r[6]=m*w+g*U+x*I+d*te,r[10]=m*y+g*P+x*Z+d*z,r[14]=m*S+g*H+x*L+d*Y,r[3]=p*b+_*R+M*ie+v*N,r[7]=p*w+_*U+M*I+v*te,r[11]=p*y+_*P+M*Z+v*z,r[15]=p*S+_*H+M*L+v*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],f=e[10],u=e[14],m=e[3],g=e[7],x=e[11],d=e[15],p=a*u-l*f,_=o*u-l*h,M=o*f-a*h,v=s*u-l*c,b=s*f-a*c,w=s*h-o*c;return t*(g*p-x*_+d*M)-i*(m*p-x*v+d*b)+n*(m*_-g*v+d*w)-r*(m*M-g*b+x*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(r*c-o*a)+n*(r*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;if(e.isVector3)n[12]=e.x,n[13]=e.y,n[14]=e.z;else n[12]=e,n[13]=t,n[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],f=e[10],u=e[11],m=e[12],g=e[13],x=e[14],d=e[15],p=t*o-i*s,_=t*a-n*s,M=t*l-r*s,v=i*a-n*o,b=i*l-r*o,w=n*l-r*a,y=c*g-h*m,S=c*x-f*m,R=c*d-u*m,U=h*x-f*g,P=h*d-u*g,H=f*d-u*x,ie=p*H-_*P+M*U+v*R-b*S+w*y;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/ie;return e[0]=(o*H-a*P+l*U)*I,e[1]=(n*P-i*H-r*U)*I,e[2]=(g*w-x*b+d*v)*I,e[3]=(f*b-h*w-u*v)*I,e[4]=(a*R-s*H-l*S)*I,e[5]=(t*H-n*R+r*S)*I,e[6]=(x*M-m*w-d*_)*I,e[7]=(c*w-f*M+u*_)*I,e[8]=(s*P-o*R+l*y)*I,e[9]=(i*R-t*P-r*y)*I,e[10]=(m*b-g*M+d*p)*I,e[11]=(h*M-c*b-u*p)*I,e[12]=(o*S-s*U-a*y)*I,e[13]=(t*U-i*S+n*y)*I,e[14]=(g*_-m*v-x*p)*I,e[15]=(c*v-h*_+f*p)*I,this}scale(e){let t=this.elements,{x:i,y:n,z:r}=e;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,{x:s,y:o,z:a}=e,l=r*s,c=r*o;return this.set(l*s+i,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+i,c*a-n*s,0,l*a-n*o,c*a+n*s,r*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,{_x:r,_y:s,_z:o,_w:a}=t,l=r+r,c=s+s,h=o+o,f=r*l,u=r*c,m=r*h,g=s*c,x=s*h,d=o*h,p=a*l,_=a*c,M=a*h,{x:v,y:b,z:w}=i;return n[0]=(1-(g+d))*v,n[1]=(u+M)*v,n[2]=(m-_)*v,n[3]=0,n[4]=(u-M)*b,n[5]=(1-(f+d))*b,n[6]=(x+p)*b,n[7]=0,n[8]=(m+_)*w,n[9]=(x-p)*w,n[10]=(1-(f+g))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=To.set(n[0],n[1],n[2]).length(),o=To.set(n[4],n[5],n[6]).length(),a=To.set(n[8],n[9],n[10]).length();if(r<0)s=-s;jn.copy(this);let l=1/s,c=1/o,h=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=c,jn.elements[5]*=c,jn.elements[6]*=c,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,s,o=Li,a=!1){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),f=(t+e)/(t-e),u=(i+n)/(i-n),m,g;if(a)m=r/(s-r),g=s*r/(s-r);else if(o===Li)m=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===or)m=-s/(s-r),g=-s*r/(s-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=Li,a=!1){let l=this.elements,c=2/(t-e),h=2/(i-n),f=-(t+e)/(t-e),u=-(i+n)/(i-n),m,g;if(a)m=1/(s-r),g=s/(s-r);else if(o===Li)m=-2/(s-r),g=-(s+r)/(s-r);else if(o===or)m=-1/(s-r),g=-r/(s-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var To=new A,jn=new Ce,gy=new A(0,0,0),xy=new A(1,1,1),Jr=new A,Cc=new A,_n=new A;var Od=new Ce,Hd=new $t;class Zi{constructor(e=0,t=0,i=0,n=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],h=n[2],f=n[6],u=n[10];switch(t){case"XYZ":if(this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-s,r);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-tt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,u),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,r);break;case"ZYX":if(this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(f,u),this._z=Math.atan2(a,r);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(tt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r);else this._x=0,this._y=Math.atan2(o,u);break;case"XZY":if(this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-c,u),this._y=0;break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class jr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var _y=0,Gd=new A,Eo=new $t,Ar=new Ce,Ic=new A,rl=new A,yy=new A,My=new $t,zd=new A(1,0,0),kd=new A(0,1,0),Vd=new A(0,0,1),Wd={type:"added"},vy={type:"removed"},wo={type:"childadded",child:null},cu={type:"childremoved",child:null};class it extends wi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();let e=new A,t=new Zi,i=new $t,n=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ke}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.premultiply(Eo),this}rotateX(e){return this.rotateOnAxis(zd,e)}rotateY(e){return this.rotateOnAxis(kd,e)}rotateZ(e){return this.rotateOnAxis(Vd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zd,e)}translateY(e){return this.translateOnAxis(kd,e)}translateZ(e){return this.translateOnAxis(Vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Ic.copy(e);else Ic.set(e,t,i);let n=this.parent;if(this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Ar.lookAt(rl,Ic,this.up);else Ar.lookAt(Ic,rl,this.up);if(this.quaternion.setFromRotationMatrix(Ar),n)Ar.extractRotation(n.matrixWorld),Eo.setFromRotationMatrix(Ar),this.quaternion.premultiply(Eo.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Be("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),wo.child=e,this.dispatchEvent(wo),wo.child=null;else Be("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(vy),cu.child=e,this.dispatchEvent(cu),cu.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld);return e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),wo.child=e,this.dispatchEvent(wo),wo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,My,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:n}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let n={};if(n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)n.userData=this.userData;if(n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null)n.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)n.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)n.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map((o)=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)n.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)n.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)n.boundingBox=this.boundingBox.toJSON()}function r(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)n.background=this.background.toJSON();else if(this.background.isTexture)n.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)n.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];r(e.shapes,h)}else r(e.shapes,a)}}if(this.isSkinnedMesh){if(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];n.animations.push(r(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),f=s(e.skeletons),u=s(e.animations),m=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(h.length>0)i.shapes=h;if(f.length>0)i.skeletons=f;if(u.length>0)i.animations=u;if(m.length>0)i.nodes=m}return i.object=n,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}it.DEFAULT_UP=new A(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends it{constructor(){super();this.isGroup=!0,this.type="Group"}}var Sy={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let n=null,r=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,i),d=this._getHandJoint(l,g);if(x!==null)d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius;d.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),u=0.02,m=0.005;if(l.inputState.pinching&&f>u+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=u-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity);else a.hasLinearVelocity=!1;if(r.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null)n=r;if(n!==null){if(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity);else o.hasLinearVelocity=!1;if(n.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(Sy)}}}if(o!==null)o.visible=n!==null;if(a!==null)a.visible=r!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function hu(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class ce{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;if(n&&n.isColor)this.copy(n);else if(typeof n==="number")this.setHex(n);else if(typeof n==="string")this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=rt.workingColorSpace){if(e=wc(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=hu(s,r,e+0.3333333333333333),this.g=hu(s,r,e),this.b=hu(s,r,e-0.3333333333333333)}return rt.colorSpaceToWorking(this,n),this}setStyle(e,t=xt){function i(r){if(r===void 0)return;if(parseFloat(r)<1)de("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:de("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(r,16),t);else de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let i=Xd[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else de("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return rt.workingToColorSpace(Ki.copy(this),e),Math.round(tt(Ki.r*255,0,255))*65536+Math.round(tt(Ki.g*255,0,255))*256+Math.round(tt(Ki.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ki.copy(this),t);let{r:i,g:n,b:r}=Ki,s=Math.max(i,n,r),o=Math.min(i,n,r),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=0.5?h/(s+o):h/(2-s-o),s){case i:a=(n-r)/h+(n<r?6:0);break;case n:a=(r-i)/h+2;break;case r:a=(i-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ki.copy(this),t),e.r=Ki.r,e.g=Ki.g,e.b=Ki.b,e}getStyle(e=xt){rt.workingToColorSpace(Ki.copy(this),e);let{r:t,g:i,b:n}=Ki;if(e!==xt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Pc);let i=Mo($r.h,Pc.h,t),n=Mo($r.s,Pc.s,t),r=Mo($r.l,Pc.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ki=new ce;ce.NAMES=Xd;class Ro{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=i}clone(){return new Ro(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ps extends it{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var $n=new A,Rr=new A,uu=new A,Cr=new A,Co=new A,Io=new A,qd=new A,fu=new A,du=new A,pu=new A,mu=new yt,gu=new yt,xu=new yt;class Gi{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),$n.subVectors(e,t),n.cross($n);let r=n.lengthSq();if(r>0)return n.multiplyScalar(1/Math.sqrt(r));return n.set(0,0,0)}static getBarycoord(e,t,i,n,r){$n.subVectors(n,t),Rr.subVectors(i,t),uu.subVectors(e,t);let s=$n.dot($n),o=$n.dot(Rr),a=$n.dot(uu),l=Rr.dot(Rr),c=Rr.dot(uu),h=s*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,u=(l*a-o*c)*f,m=(s*c-o*a)*f;return r.set(1-u-m,m,u)}static containsPoint(e,t,i,n){if(this.getBarycoord(e,t,i,n,Cr)===null)return!1;return Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,i,n,r,s,o,a){if(this.getBarycoord(e,t,i,n,Cr)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(r,Cr.x),a.addScaledVector(s,Cr.y),a.addScaledVector(o,Cr.z),a}static getInterpolatedAttribute(e,t,i,n,r,s){return mu.setScalar(0),gu.setScalar(0),xu.setScalar(0),mu.fromBufferAttribute(e,t),gu.fromBufferAttribute(e,i),xu.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(mu,r.x),s.addScaledVector(gu,r.y),s.addScaledVector(xu,r.z),s}static isFrontFacing(e,t,i,n){return $n.subVectors(i,t),Rr.subVectors(e,t),$n.cross(Rr).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),$n.cross(Rr).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Gi.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,s,o;Co.subVectors(n,i),Io.subVectors(r,i),fu.subVectors(e,i);let a=Co.dot(fu),l=Io.dot(fu);if(a<=0&&l<=0)return t.copy(i);du.subVectors(e,n);let c=Co.dot(du),h=Io.dot(du);if(c>=0&&h<=c)return t.copy(n);let f=a*h-c*l;if(f<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(Co,s);pu.subVectors(e,r);let u=Co.dot(pu),m=Io.dot(pu);if(m>=0&&u<=m)return t.copy(r);let g=u*l-a*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(Io,o);let x=c*m-u*h;if(x<=0&&h-c>=0&&u-m>=0)return qd.subVectors(r,n),o=(h-c)/(h-c+(u-m)),t.copy(n).addScaledVector(qd,o);let d=1/(x+g+f);return s=g*d,o=f*d,t.copy(i).addScaledVector(Co,s).addScaledVector(Io,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,Qn);else Qn.fromBufferAttribute(r,s);Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Lc.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Lc.copy(i.boundingBox)}Lc.applyMatrix4(e.matrixWorld),this.union(Lc)}}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),Dc.subVectors(this.max,sl),Po.subVectors(e.a,sl),Lo.subVectors(e.b,sl),Do.subVectors(e.c,sl),Qr.subVectors(Lo,Po),es.subVectors(Do,Lo),Ls.subVectors(Po,Do);let t=[0,-Qr.z,Qr.y,0,-es.z,es.y,0,-Ls.z,Ls.y,Qr.z,0,-Qr.x,es.z,0,-es.x,Ls.z,0,-Ls.x,-Qr.y,Qr.x,0,-es.y,es.x,0,-Ls.y,Ls.x,0];if(!_u(t,Po,Lo,Do,Dc))return!1;if(t=[1,0,0,0,1,0,0,0,1],!_u(t,Po,Lo,Do,Dc))return!1;return Nc.crossVectors(Qr,es),t=[Nc.x,Nc.y,Nc.z],_u(t,Po,Lo,Do,Dc)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Qn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ir),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Ir=[new A,new A,new A,new A,new A,new A,new A,new A],Qn=new A,Lc=new fi,Po=new A,Lo=new A,Do=new A,Qr=new A,es=new A,Ls=new A,sl=new A,Dc=new A,Nc=new A,Ds=new A;function _u(e,t,i,n,r){for(let s=0,o=e.length-3;s<=o;s+=3){Ds.fromArray(e,s);let a=r.x*Math.abs(Ds.x)+r.y*Math.abs(Ds.y)+r.z*Math.abs(Ds.z),l=t.dot(Ds),c=i.dot(Ds),h=n.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gi=new A,Fc=new k,by=0;class kt extends wi{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:by++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=el,this.updateRanges=[],this.gpuType=oi,this.version=0,this._normalizationScale=e!==void 0?vo(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fc.fromBufferAttribute(this,t),Fc.applyMatrix3(e),this.setXY(t,Fc.x,Fc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gi.fromBufferAttribute(this,t),gi.applyMatrix3(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gi.fromBufferAttribute(this,t),gi.applyMatrix4(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gi.fromBufferAttribute(this,t),gi.applyNormalMatrix(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gi.fromBufferAttribute(this,t),gi.transformDirection(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):il(e,this.array)}}class ol extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class al extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _e extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Ty=new fi,ll=new A,yu=new A;class ni{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Ty.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);let t=ll.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*0.5;this.center.addScaledVector(ll,n/i),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(yu)),this.expandByPoint(ll.copy(e.center).sub(yu));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Ey=0,Nn=new Ce,Mu=new it,No=new A,yn=new fi,cl=new fi,Di=new A;class Oe extends wi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Id(e))?al:ol)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;if(n!==void 0)n.transformDirection(e),n.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new _e(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}if(e.length>t.count)de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new fi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];if(yn.setFromBufferAttribute(r),this.morphTargetsRelative)Di.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Di),Di.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Di);else this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ni;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];if(cl.setFromBufferAttribute(o),this.morphTargetsRelative)Di.addVectors(yn.min,cl.min),yn.expandByPoint(Di),Di.addVectors(yn.max,cl.max),yn.expandByPoint(Di);else yn.expandByPoint(cl.min),yn.expandByPoint(cl.max)}yn.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)Di.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Di));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(Di.fromBufferAttribute(o,l),a)No.fromBufferAttribute(e,l),Di.add(No);n=Math.max(n,i.distanceToSquared(Di))}}if(this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius))Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:n,uv:r}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new kt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let S=0;S<i.count;S++)o[S]=new A,a[S]=new A;let c=new A,h=new A,f=new A,u=new k,m=new k,g=new k,x=new A,d=new A;function p(S,R,U){l[S]=l[R]=l[U]=1,c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,R),f.fromBufferAttribute(i,U),u.fromBufferAttribute(r,S),m.fromBufferAttribute(r,R),g.fromBufferAttribute(r,U),h.sub(c),f.sub(c),m.sub(u),g.sub(u);let P=1/(m.x*g.y-g.x*m.y);if(!isFinite(P))return;x.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(P),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[S].add(x),o[R].add(x),o[U].add(x),a[S].add(d),a[R].add(d),a[U].add(d)}let _=this.groups;if(_.length===0)_=[{start:0,count:e.count}];for(let S=0,R=_.length;S<R;++S){let U=_[S],{start:P,count:H}=U;for(let ie=P,I=P+H;ie<I;ie+=3)p(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}let M=new A,v=new A,b=new A,w=new A;function y(S){b.fromBufferAttribute(n,S),w.copy(b);let R=o[S];M.copy(R),M.sub(b.multiplyScalar(b.dot(R))).normalize(),v.crossVectors(w,R);let P=v.dot(a[S])<0?-1:1;s.setXYZW(S,M.x,M.y,M.z,P)}for(let S=0,R=i.count;S<R;++S)if(l[S])y(S);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let n=new A,r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),g=e.getX(f+1),x=e.getX(f+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),o.fromBufferAttribute(i,m),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),o.add(c),a.add(c),l.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Di.fromBufferAttribute(e,t),Di.normalize(),e.setXYZ(t,Di.x,Di.y,Di.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:h}=o,f=new l.constructor(a.length*c),u=0,m=0;for(let g=0,x=a.length;g<x;g++){if(o.isInterleavedBufferAttribute)u=a[g]*o.data.stride+o.offset;else u=a[g]*c;for(let d=0;d<c;d++)f[m++]=l[u++]}return new kt(f,c,h)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Oe,i=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=e(a,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let a=[],l=r[o];for(let c=0,h=l.length;c<h;c++){let f=l[c],u=e(f,i);a.push(u)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let n={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,f=l.length;h<f;h++){let u=l[h];c.push(u.toJSON(e.data))}if(c.length>0)n[a]=c,r=!0}if(r)e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],h=r[l];for(let f=0,u=h.length;f<u;f++)c.push(h[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Yd(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Yd(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Yd(e){if(e.buffer._uuid===void 0)e.buffer._uuid=ui();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var sn=new A;class lr{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?vo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Rs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Rs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):il(e,this.data.array)}}var vu=new A,wy=new A,Ay=new Ke;class Mn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=vu.subVectors(i,t).cross(wy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(vu),r=this.normal.dot(n);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ay.getNormalMatrix(e),n=this.coplanarPoint(vu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Ry=0;class Pt extends wi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Vr,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=lc,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sc,this.stencilZFail=Sc,this.stencilZPass=Sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){de(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){de(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(n&&n.isColor)n.set(i);else if(n&&n.isVector2&&(i&&i.isVector2)||n&&n.isEuler&&(i&&i.isEuler)||n&&n.isVector3&&(i&&i.isVector3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(t){let r=n(e.textures),s=n(e.images);if(r.length>0)i.textures=r;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new ce().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Mn().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new k().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new k().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Ns extends Pt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Fo,hl=new A,Uo=new A,Bo=new A,Oo=new k,ul=new k,Jd=new Ce,Uc=new A,fl=new A,Bc=new A,Zd=new k,Su=new k,Kd=new k;class dl extends it{constructor(e=new Ns){super();if(this.isSprite=!0,this.type="Sprite",Fo===void 0){Fo=new Oe;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new Pr(t,5);Fo.setIndex([0,1,2,0,2,3]),Fo.setAttribute("position",new lr(i,3,0,!1)),Fo.setAttribute("uv",new lr(i,2,3,!1))}this.geometry=Fo,this.material=e,this.center=new k(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Uo.setFromMatrixScale(this.matrixWorld),Jd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Uo.multiplyScalar(-Bo.z);let i=this.material.rotation,n,r;if(i!==0)r=Math.cos(i),n=Math.sin(i);let s=this.center;Oc(Uc.set(-0.5,-0.5,0),Bo,s,Uo,n,r),Oc(fl.set(0.5,-0.5,0),Bo,s,Uo,n,r),Oc(Bc.set(0.5,0.5,0),Bo,s,Uo,n,r),Zd.set(0,0),Su.set(1,0),Kd.set(1,1);let o=e.ray.intersectTriangle(Uc,fl,Bc,!1,hl);if(o===null){if(Oc(fl.set(-0.5,0.5,0),Bo,s,Uo,n,r),Su.set(0,1),o=e.ray.intersectTriangle(Uc,Bc,fl,!1,hl),o===null)return}let a=e.ray.origin.distanceTo(hl);if(a<e.near||a>e.far)return;t.push({distance:a,point:hl.clone(),uv:Gi.getInterpolation(hl,Uc,fl,Bc,Zd,Su,Kd,new k),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Oc(e,t,i,n,r,s){if(Oo.subVectors(e,i).addScalar(0.5).multiply(n),r!==void 0)ul.x=s*Oo.x-r*Oo.y,ul.y=r*Oo.x+s*Oo.y;else ul.copy(Oo);e.copy(t),e.x+=ul.x,e.y+=ul.y,e.applyMatrix4(Jd)}var Lr=new A,bu=new A,Hc=new A,Gc=new A;class Fn{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Lr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e)}distanceSqToSegment(e,t,i,n){bu.copy(e).add(t).multiplyScalar(0.5),Hc.copy(t).sub(e).normalize(),Gc.copy(this.origin).sub(bu);let r=e.distanceTo(t)*0.5,s=-this.direction.dot(Hc),o=Gc.dot(this.direction),a=-Gc.dot(Hc),l=Gc.lengthSq(),c=Math.abs(1-s*s),h,f,u,m;if(c>0)if(h=s*a-o,f=s*o-a,m=r*c,h>=0)if(f>=-m)if(f<=m){let g=1/c;h*=g,f*=g,u=h*(h+s*f+2*o)+f*(s*h+f+2*a)+l}else f=r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;else f=-r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;else if(f<=-m)h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-a),r),u=-h*h+f*(f+2*a)+l;else if(f<=m)h=0,f=Math.min(Math.max(-r,-a),r),u=f*(f+2*a)+l;else h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-a),r),u=-h*h+f*(f+2*a)+l;else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(n)n.copy(bu).addScaledVector(Hc,f);return u}intersectSphere(e,t){if(e.radius<0)return null;Lr.subVectors(e.center,this.origin);let i=Lr.dot(this.direction),n=Lr.dot(Lr)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,n,r,s,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l;if(c>=0)r=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c;else r=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c;if(i>s||r>n)return null;if(r>i||isNaN(i))i=r;if(s<n||isNaN(n))n=s;if(h>=0)o=(e.min.z-f.z)*h,a=(e.max.z-f.z)*h;else o=(e.max.z-f.z)*h,a=(e.min.z-f.z)*h;if(i>a||o>n)return null;if(o>i||i!==i)i=o;if(a<n||n!==n)n=a;if(n<0)return null;return this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,i,n,r){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,h=e.x-s.x,f=e.y-s.y,u=e.z-s.z,m=t.x-s.x,g=t.y-s.y,x=t.z-s.z,d=i.x-s.x,p=i.y-s.y,_=i.z-s.z,M=Math.abs(a),v=Math.abs(l),b=Math.abs(c),w,y,S,R,U,P,H,ie,I,Z,L,N;if(M>=v&&M>=b)if(S=a,P=h,I=m,N=d,a>=0)w=l,y=c,R=f,U=u,H=g,ie=x,Z=p,L=_;else w=c,y=l,R=u,U=f,H=x,ie=g,Z=_,L=p;else if(v>=b)if(S=l,P=f,I=g,N=p,l>=0)w=c,y=a,R=u,U=h,H=x,ie=m,Z=_,L=d;else w=a,y=c,R=h,U=u,H=m,ie=x,Z=d,L=_;else if(S=c,P=u,I=x,N=_,c>=0)w=a,y=l,R=h,U=f,H=m,ie=g,Z=d,L=p;else w=l,y=a,R=f,U=h,H=g,ie=m,Z=p,L=d;if(S===0)return null;let te=w/S,z=y/S,Y=1/S,J=R-te*P,pe=U-z*P,X=H-te*I,ne=ie-z*I,Me=Z-te*N,ve=L-z*N,Ge=Me*ne-ve*X,Ee=J*ve-pe*Me,pt=X*pe-ne*J;if(n){if(Ge<0||Ee<0||pt<0)return null}else if((Ge<0||Ee<0||pt<0)&&(Ge>0||Ee>0||pt>0))return null;let Ne=Ge+Ee+pt;if(Ne===0)return null;let Fe=Y*(Ge*P+Ee*I+pt*N);if(Ne>0?Fe<0:Fe>0)return null;return this.at(Fe/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt extends Pt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=vs,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var jd=new Ce,Fs=new Fn,zc=new ni,$d=new A,kc=new A,Vc=new A,Wc=new A,Tu=new A,Xc=new A,Qd=new A,qc=new A;class ee extends it{constructor(e=new Oe,t=new Tt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Xc.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let c=o[a],h=r[a];if(c===0)continue;if(Tu.fromBufferAttribute(h,e),s)Xc.addScaledVector(Tu,c);else Xc.addScaledVector(Tu.sub(t),c)}t.add(Xc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(zc.copy(i.boundingSphere),zc.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),zc.containsPoint(Fs.origin)===!1){if(Fs.intersectSphere(zc,$d)===null)return;if(Fs.origin.distanceToSquared($d)>(e.far-e.near)**2)return}if(jd.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(jd),i.boundingBox!==null){if(Fs.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,Fs)}_computeIntersections(e,t,i){let n,r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,{groups:f,drawRange:u}=r;if(o!==null)if(Array.isArray(s))for(let m=0,g=f.length;m<g;m++){let x=f[m],d=s[x.materialIndex],p=Math.max(x.start,u.start),_=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let M=p,v=_;M<v;M+=3){let b=o.getX(M),w=o.getX(M+1),y=o.getX(M+2);if(n=Yc(this,d,e,i,l,c,h,b,w,y),n)n.faceIndex=Math.floor(M/3),n.face.materialIndex=x.materialIndex,t.push(n)}}else{let m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let x=m,d=g;x<d;x+=3){let p=o.getX(x),_=o.getX(x+1),M=o.getX(x+2);if(n=Yc(this,s,e,i,l,c,h,p,_,M),n)n.faceIndex=Math.floor(x/3),t.push(n)}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,g=f.length;m<g;m++){let x=f[m],d=s[x.materialIndex],p=Math.max(x.start,u.start),_=Math.min(a.count,Math.min(x.start+x.count,u.start+u.count));for(let M=p,v=_;M<v;M+=3){let b=M,w=M+1,y=M+2;if(n=Yc(this,d,e,i,l,c,h,b,w,y),n)n.faceIndex=Math.floor(M/3),n.face.materialIndex=x.materialIndex,t.push(n)}}else{let m=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let x=m,d=g;x<d;x+=3){let p=x,_=x+1,M=x+2;if(n=Yc(this,s,e,i,l,c,h,p,_,M),n)n.faceIndex=Math.floor(x/3),t.push(n)}}}}function Cy(e,t,i,n,r,s,o,a){let l;if(t.side===zt)l=n.intersectTriangle(o,s,r,!0,a);else l=n.intersectTriangle(r,s,o,t.side===cn,a);if(l===null)return null;qc.copy(a),qc.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(qc);if(c<i.near||c>i.far)return null;return{distance:c,point:qc.clone(),object:e}}function Yc(e,t,i,n,r,s,o,a,l,c){e.getVertexPosition(a,kc),e.getVertexPosition(l,Vc),e.getVertexPosition(c,Wc);let h=Cy(e,t,i,n,kc,Vc,Wc,Qd);if(h){let f=new A;if(Gi.getBarycoord(Qd,kc,Vc,Wc,f),r)h.uv=Gi.getInterpolatedAttribute(r,a,l,c,f,new k);if(s)h.uv1=Gi.getInterpolatedAttribute(s,a,l,c,f,new k);if(o){if(h.normal=Gi.getInterpolatedAttribute(o,a,l,c,f,new A),h.normal.dot(n.direction)>0)h.normal.multiplyScalar(-1)}let u={a,b:l,c,normal:new A,materialIndex:0};Gi.getNormal(kc,Vc,Wc,u.normal),h.face=u,h.barycoord=f}return h}var pl=new yt,ep=new yt,tp=new yt,Iy=new yt,ip=new Ce,Zc=new A,Eu=new ni,np=new Ce,wu=new Fn;class ml extends ee{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qh,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new fi;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Zc),this.boundingBox.expandByPoint(Zc)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new ni;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Zc),this.boundingSphere.expandByPoint(Zc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;if(i===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Eu.copy(this.boundingSphere),Eu.applyMatrix4(n),e.ray.intersectsSphere(Eu)===!1)return;if(np.copy(n).invert(),wu.copy(e.ray).applyMatrix4(np),this.boundingBox!==null){if(wu.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,wu)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();if(r!==1/0)e.multiplyScalar(r);else e.set(1,0,0,0);t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode===Qh)this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode===yd)this.bindMatrixInverse.copy(this.bindMatrix).invert();else de("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;if(ep.fromBufferAttribute(n.attributes.skinIndex,e),tp.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4)pl.copy(t),t.set(0,0,0,0);else pl.set(t.x,t.y,t.z,1),t.set(0,0,0);pl.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let s=tp.getComponent(r);if(s!==0){let o=ep.getComponent(r);ip.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Iy.copy(pl).applyMatrix4(ip),s)}}if(t.isVector4)t.w=pl.w;return t.applyMatrix4(this.bindMatrixInverse)}}class Us extends it{constructor(){super();this.isBone=!0,this.type="Bone"}}class er extends bt{constructor(e=null,t=1,i=1,n,r,s,o,a,l=Ft,c=Ft,h,f){super(null,s,o,a,l,c,n,r,h,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var rp=new Ce,Py=new Ce;class Ho{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){de("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ce;if(this.bones[e])i.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i)i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i){if(i.parent&&i.parent.isBone)i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld);else i.matrix.copy(i.matrixWorld);i.matrix.decompose(i.position,i.quaternion,i.scale)}}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){let o=e[r]?e[r].matrixWorld:Py;rp.multiplyMatrices(o,t[r]),rp.toArray(i,r*16)}if(n!==null)n.needsUpdate=!0}clone(){return new Ho(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new er(t,e,e,Ei,oi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],s=t[r];if(s===void 0)de("Skeleton: No bone found with UUID:",r),s=new Us;this.bones.push(s),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let s=t[n];e.bones.push(s.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}}class tr extends kt{constructor(e,t,i,n=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var Go=new Ce,sp=new Ce,Kc=[],op=new fi,Ly=new Ce,gl=new ee,xl=new ni;class vn extends ee{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ly)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new fi;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Go),op.copy(e.boundingBox).applyMatrix4(Go),this.boundingBox.union(op)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new ni;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Go),xl.copy(e.boundingSphere).applyMatrix4(Go),this.boundingSphere.union(xl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(gl.geometry=this.geometry,gl.material=this.material,gl.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(xl.copy(this.boundingSphere),xl.applyMatrix4(i),e.ray.intersectsSphere(xl)===!1)return;for(let r=0;r<n;r++){this.getMatrixAt(r,Go),sp.multiplyMatrices(i,Go),gl.matrixWorld=sp,gl.raycast(e,Kc);for(let s=0,o=Kc.length;s<o;s++){let a=Kc[s];a.instanceId=r,a.object=this,t.push(a)}Kc.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;if(this.morphTexture===null)this.morphTexture=new er(new Float32Array(n*this.count),n,this.count,uo,oi);let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=n*e;return r[a]=o,r.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Bs=new ni,Dy=new k(0.5,0.5),Jc=new A;class Un{constructor(e=new Mn,t=new Mn,i=new Mn,n=new Mn,r=new Mn,s=new Mn){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li,i=!1){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],u=r[7],m=r[8],g=r[9],x=r[10],d=r[11],p=r[12],_=r[13],M=r[14],v=r[15];if(n[0].setComponents(l-s,u-c,d-m,v-p).normalize(),n[1].setComponents(l+s,u+c,d+m,v+p).normalize(),n[2].setComponents(l+o,u+h,d+g,v+_).normalize(),n[3].setComponents(l-o,u-h,d-g,v-_).normalize(),i)n[4].setComponents(a,f,x,M).normalize(),n[5].setComponents(l-a,u-f,d-x,v-M).normalize();else if(n[4].setComponents(l-a,u-f,d-x,v-M).normalize(),t===Li)n[5].setComponents(l+a,u+f,d+x,v+M).normalize();else if(t===or)n[5].setComponents(a,f,x,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=Dy.distanceTo(e.center);return Bs.radius=0.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Jc.x=n.normal.x>0?e.max.x:e.min.x,Jc.y=n.normal.y>0?e.max.y:e.min.y,Jc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var ap=new Ce;class zo{constructor(){this.coordinateSystem=Li,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];if(ap.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0)i[n]=new Un;i[n].setFromProjectionMatrix(ap,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++){if(t[n]===void 0)t[n]=new Un;t[n].copy(i[n])}return this._count=e._count,this}clone(){return new zo().copy(this)}}class di extends Pt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var Qc=new A,eh=new A,lp=new Ce,_l=new Fn,jc=new ni,Au=new A,cp=new A;class Bn extends it{constructor(e=new Oe,t=new di){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Qc.fromBufferAttribute(t,n-1),eh.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Qc.distanceTo(eh);e.setAttribute("lineDistance",new _e(i,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(jc.copy(i.boundingSphere),jc.applyMatrix4(n),jc.radius+=r,e.ray.intersectsSphere(jc)===!1)return;lp.copy(n).invert(),_l.copy(e.ray).applyMatrix4(lp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=u,x=m-1;g<x;g+=l){let d=c.getX(g),p=c.getX(g+1),_=$c(this,e,_l,a,d,p,g);if(_)t.push(_)}if(this.isLineLoop){let g=c.getX(m-1),x=c.getX(u),d=$c(this,e,_l,a,g,x,m-1);if(d)t.push(d)}}else{let u=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let g=u,x=m-1;g<x;g+=l){let d=$c(this,e,_l,a,g,g+1,g);if(d)t.push(d)}if(this.isLineLoop){let g=$c(this,e,_l,a,m-1,u,m-1);if(g)t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $c(e,t,i,n,r,s,o){let a=e.geometry.attributes.position;if(Qc.fromBufferAttribute(a,r),eh.fromBufferAttribute(a,s),i.distanceSqToSegment(Qc,eh,Au,cp)>n)return;Au.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Au);if(c<t.near||c>t.far)return;return{distance:c,point:cp.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var hp=new A,up=new A;class Ji extends Bn{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)hp.fromBufferAttribute(t,n),up.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+hp.distanceTo(up);e.setAttribute("lineDistance",new _e(i,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yl extends Bn{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class Os extends Pt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var fp=new Ce,Ru=new Fn,th=new ni,ih=new A;class Ml extends it{constructor(e=new Oe,t=new Os){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(th.copy(i.boundingSphere),th.applyMatrix4(n),th.radius+=r,e.ray.intersectsSphere(th)===!1)return;fp.copy(n).invert(),Ru.copy(e.ray).applyMatrix4(fp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,s.start),u=Math.min(l.count,s.start+s.count);for(let m=f,g=u;m<g;m++){let x=l.getX(m);ih.fromBufferAttribute(h,x),dp(ih,x,a,n,e,t,this)}}else{let f=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let m=f,g=u;m<g;m++)ih.fromBufferAttribute(h,m),dp(ih,m,a,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dp(e,t,i,n,r,s,o){let a=Ru.distanceSqToPoint(e);if(a<i){let l=new A;Ru.closestPointToPoint(e,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ts extends bt{constructor(e=[],t=Pn,i,n,r,s,o,a,l,c){super(e,t,i,n,r,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class on extends bt{constructor(e,t,i,n,r,s,o,a,l){super(e,t,i,n,r,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn extends bt{constructor(e,t,i=Ti,n,r,s,o=Ft,a=Ft,l,c=un,h=1){if(c!==un&&c!==gn)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,n,r,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ko extends Sn{constructor(e,t=Ti,i=Pn,n,r,s=Ft,o=Ft,a,l=un){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,o,a,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vo extends bt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yt extends Oe{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let a=[],l=[],c=[],h=[],f=0,u=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2));function m(g,x,d,p,_,M,v,b,w,y,S){let R=M/w,U=v/y,P=M/2,H=v/2,ie=b/2,I=w+1,Z=y+1,L=0,N=0,te=new A;for(let z=0;z<Z;z++){let Y=z*U-H;for(let J=0;J<I;J++){let pe=J*R-P;te[g]=pe*p,te[x]=Y*_,te[d]=ie,l.push(te.x,te.y,te.z),te[g]=0,te[x]=0,te[d]=b>0?1:-1,c.push(te.x,te.y,te.z),h.push(J/w),h.push(1-z/y),L+=1}}for(let z=0;z<y;z++)for(let Y=0;Y<w;Y++){let J=f+Y+I*z,pe=f+Y+I*(z+1),X=f+(Y+1)+I*(z+1),ne=f+(Y+1)+I*z;a.push(J,pe,ne),a.push(pe,X,ne),N+=6}o.addGroup(u,N,S),u+=N,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vl extends Oe{constructor(e=1,t=1,i=4,n=8,r=1){super();this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let s=[],o=[],a=[],l=[],c=t/2,h=Math.PI/2*e,f=t,u=2*h+f,m=i*2+r,g=n+1,x=new A,d=new A;for(let p=0;p<=m;p++){let _=0,M=0,v=0,b=0;if(p<=i){let S=p/i,R=S*Math.PI/2;M=-c-e*Math.cos(R),v=e*Math.sin(R),b=-e*Math.cos(R),_=S*h}else if(p<=i+r){let S=(p-i)/r;M=-c+S*t,v=e,b=0,_=h+S*f}else{let S=(p-i-r)/i,R=S*Math.PI/2;M=c+e*Math.sin(R),v=e*Math.cos(R),b=e*Math.sin(R),_=h+f+S*h}let w=Math.max(0,Math.min(1,_/u)),y=0;if(p===0)y=0.5/n;else if(p===m)y=-0.5/n;for(let S=0;S<=n;S++){let R=S/n,U=R*Math.PI*2,P=Math.sin(U),H=Math.cos(U);d.x=-v*H,d.y=M,d.z=v*P,o.push(d.x,d.y,d.z),x.set(-v*H,b,v*P),x.normalize(),a.push(x.x,x.y,x.z),l.push(R+y,w)}if(p>0){let S=(p-1)*g;for(let R=0;R<n;R++){let U=S+R,P=S+R+1,H=p*g+R,ie=p*g+R+1;s.push(U,P,H),s.push(P,ie,H)}}}this.setIndex(s),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class is extends Oe{constructor(e=1,t=32,i=0,n=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],s=[],o=[],a=[],l=new A,c=new k;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let h=0,f=3;h<=t;h++,f+=3){let u=i+h/t*n;l.x=e*Math.cos(u),l.y=e*Math.sin(u),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[f]/e+1)/2,c.y=(s[f+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lt extends Oe{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};let l=this;n=Math.floor(n),r=Math.floor(r);let c=[],h=[],f=[],u=[],m=0,g=[],x=i/2,d=0;if(p(),s===!1){if(e>0)_(!0);if(t>0)_(!1)}this.setIndex(c),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(u,2));function p(){let M=new A,v=new A,b=0,w=(t-e)/i;for(let y=0;y<=r;y++){let S=[],R=y/r,U=R*(t-e)+e;for(let P=0;P<=n;P++){let H=P/n,ie=H*a+o,I=Math.sin(ie),Z=Math.cos(ie);v.x=U*I,v.y=-R*i+x,v.z=U*Z,h.push(v.x,v.y,v.z),M.set(I,w,Z).normalize(),f.push(M.x,M.y,M.z),u.push(H,1-R),S.push(m++)}g.push(S)}for(let y=0;y<n;y++)for(let S=0;S<r;S++){let R=g[S][y],U=g[S+1][y],P=g[S+1][y+1],H=g[S][y+1];if(e>0||S!==0)c.push(R,U,H),b+=3;if(t>0||S!==r-1)c.push(U,P,H),b+=3}l.addGroup(d,b,0),d+=b}function _(M){let v=m,b=new k,w=new A,y=0,S=M===!0?e:t,R=M===!0?1:-1;for(let P=1;P<=n;P++)h.push(0,x*R,0),f.push(0,R,0),u.push(0.5,0.5),m++;let U=m;for(let P=0;P<=n;P++){let ie=P/n*a+o,I=Math.cos(ie),Z=Math.sin(ie);w.x=S*Z,w.y=x*R,w.z=S*I,h.push(w.x,w.y,w.z),f.push(0,R,0),b.x=I*0.5+0.5,b.y=Z*0.5*R+0.5,u.push(b.x,b.y),m++}for(let P=0;P<n;P++){let H=v+P,ie=U+P;if(M===!0)c.push(ie,ie+1,H);else c.push(ie+1,ie,H);y+=3}l.addGroup(d,y,M===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hs extends Lt{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,n,r,s,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Hs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gs extends Oe{constructor(e=[],t=[],i=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],s=[];if(o(n),l(i),c(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(s,2)),n===0)this.computeVertexNormals();else this.normalizeNormals();function o(p){let _=new A,M=new A,v=new A;for(let b=0;b<t.length;b+=3)u(t[b+0],_),u(t[b+1],M),u(t[b+2],v),a(_,M,v,p)}function a(p,_,M,v){let b=v+1,w=[];for(let y=0;y<=b;y++){w[y]=[];let S=p.clone().lerp(M,y/b),R=_.clone().lerp(M,y/b),U=b-y;for(let P=0;P<=U;P++)if(P===0&&y===b)w[y][P]=S;else w[y][P]=S.clone().lerp(R,P/U)}for(let y=0;y<b;y++)for(let S=0;S<2*(b-y)-1;S++){let R=Math.floor(S/2);if(S%2===0)f(w[y][R+1]),f(w[y+1][R]),f(w[y][R]);else f(w[y][R+1]),f(w[y+1][R+1]),f(w[y+1][R])}}function l(p){let _=new A;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(p),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function c(){let p=new A;for(let _=0;_<r.length;_+=3){p.x=r[_+0],p.y=r[_+1],p.z=r[_+2];let M=x(p)/2/Math.PI+0.5,v=d(p)/Math.PI+0.5;s.push(M,1-v)}m(),h()}function h(){for(let p=0;p<s.length;p+=6){let _=s[p+0],M=s[p+2],v=s[p+4],b=Math.max(_,M,v),w=Math.min(_,M,v);if(b>0.9&&w<0.1){if(_<0.2)s[p+0]+=1;if(M<0.2)s[p+2]+=1;if(v<0.2)s[p+4]+=1}}}function f(p){r.push(p.x,p.y,p.z)}function u(p,_){let M=p*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function m(){let p=new A,_=new A,M=new A,v=new A,b=new k,w=new k,y=new k;for(let S=0,R=0;S<r.length;S+=9,R+=6){p.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),b.set(s[R+0],s[R+1]),w.set(s[R+2],s[R+3]),y.set(s[R+4],s[R+5]),v.copy(p).add(_).add(M).divideScalar(3);let U=x(v);g(b,R+0,p,U),g(w,R+2,_,U),g(y,R+4,M,U)}}function g(p,_,M,v){if(v<0&&p.x===1)s[_]=p.x-1;if(M.x===0&&M.z===0)s[_]=v/2/Math.PI+0.5}function x(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.vertices,e.indices,e.radius,e.detail)}}class nh extends Gs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nh(e.radius,e.detail)}}var rh=new A,sh=new A,Iu=new A,oh=new Gi;class ah extends Oe{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Er*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],h=[,,,],f=new Map,u=[];for(let m=0;m<a;m+=3){if(s)l[0]=s.getX(m),l[1]=s.getX(m+1),l[2]=s.getX(m+2);else l[0]=m,l[1]=m+1,l[2]=m+2;let{a:g,b:x,c:d}=oh;if(g.fromBufferAttribute(o,l[0]),x.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),oh.getNormal(Iu),h[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,h[1]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,h[2]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let p=0;p<3;p++){let _=(p+1)%3,M=h[p],v=h[_],b=oh[c[p]],w=oh[c[_]],y=`${M}_${v}`,S=`${v}_${M}`,R=f.get(S);if(R){if(Iu.dot(R.normal)<=r)u.push(b.x,b.y,b.z),u.push(w.x,w.y,w.z);f.set(S,null)}else if(!f.has(y))f.set(y,{index0:l[p],index1:l[_],normal:Iu.clone()})}}for(let m of f.values())if(m){let{index0:g,index1:x}=m;rh.fromBufferAttribute(o,g),sh.fromBufferAttribute(o,x),u.push(rh.x,rh.y,rh.z),u.push(sh.x,sh.y,sh.z)}this.setAttribute("position",new _e(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,s;if(t)s=t;else s=e*i[r-1];let o=0,a=r-1,l;while(o<=a)if(n=Math.floor(o+(a-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,i[n]===s)return n/(r-1);let c=i[n],f=i[n+1]-c,u=(s-c)/f;return(n+u)/(r-1)}getTangent(e,t){let n=e-0.0001,r=e+0.0001;if(n<0)n=0;if(r>1)r=1;let s=this.getPoint(n),o=this.getPoint(r),a=t||(s.isVector2?new k:new A);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,n=[],r=[],s=[],o=new A,a=new Ce;for(let u=0;u<=e;u++){let m=u/e;n[u]=this.getTangentAt(m,new A)}r[0]=new A,s[0]=new A;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);if(c<=l)l=c,i.set(1,0,0);if(h<=l)l=h,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(tt(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(o,m))}s[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(tt(r[0].dot(r[e]),-1,1));if(u/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0)u=-u;for(let m=1;m<=e;m++)r[m].applyMatrix4(a.makeRotationAxis(n[m],u*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class zs extends ai{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new k){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;while(r<0)r+=n;while(r>n)r-=n;if(r<Number.EPSILON)if(s)r=0;else r=n;if(this.aClockwise===!0&&!s)if(r===n)r=-n;else r=r-n;let o=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=a-this.aX,u=l-this.aY;a=f*c-u*h+this.aX,l=f*h+u*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pu extends zs{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s);this.isArcCurve=!0,this.type="ArcCurve"}}function Fu(){let e=0,t=0,i=0,n=0;function r(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,m*=h,r(o,a,u,m)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+n*a}}}var pp=new A,mp=new A,Lu=new Fu,Du=new Fu,Nu=new Fu;class Wo extends ai{constructor(e=[],t=!1,i="centripetal",n=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){let i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(a===0&&o===r-1)o=r-2,a=1;let l,c;if(this.closed||o>0)l=n[(o-1)%r];else mp.subVectors(n[0],n[1]).add(n[0]),l=mp;let h=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r)c=n[(o+2)%r];else pp.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=pp;if(this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(c),u);if(g<0.0001)g=1;if(m<0.0001)m=g;if(x<0.0001)x=g;Lu.initNonuniformCatmullRom(l.x,h.x,f.x,c.x,m,g,x),Du.initNonuniformCatmullRom(l.y,h.y,f.y,c.y,m,g,x),Nu.initNonuniformCatmullRom(l.z,h.z,f.z,c.z,m,g,x)}else if(this.curveType==="catmullrom")Lu.initCatmullRom(l.x,h.x,f.x,c.x,this.tension),Du.initCatmullRom(l.y,h.y,f.y,c.y,this.tension),Nu.initCatmullRom(l.z,h.z,f.z,c.z,this.tension);return i.set(Lu.calc(a),Du.calc(a),Nu.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uu(e,t,i,n,r){let s=(n-t)*0.5,o=(r-i)*0.5,a=e*e,l=e*a;return(2*i-2*n+s+o)*l+(-3*i+3*n-2*s-o)*a+s*e+i}function Fy(e,t){let i=1-e;return i*i*t}function Uy(e,t){return 2*(1-e)*e*t}function By(e,t){return e*e*t}function ks(e,t,i,n){return Fy(e,t)+Uy(e,i)+By(e,n)}function Oy(e,t){let i=1-e;return i*i*i*t}function Hy(e,t){let i=1-e;return 3*i*i*e*t}function Gy(e,t){return 3*(1-e)*e*e*t}function zy(e,t){return e*e*e*t}function Vs(e,t,i,n,r){return Oy(e,t)+Hy(e,i)+Gy(e,n)+zy(e,r)}class Sl extends ai{constructor(e=new k,t=new k,i=new k,n=new k){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new k){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Vs(e,n.x,r.x,s.x,o.x),Vs(e,n.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bu extends ai{constructor(e=new A,t=new A,i=new A,n=new A){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Vs(e,n.x,r.x,s.x,o.x),Vs(e,n.y,r.y,s.y,o.y),Vs(e,n.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bl extends ai{constructor(e=new k,t=new k){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ou extends ai{constructor(e=new A,t=new A){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tl extends ai{constructor(e=new k,t=new k,i=new k){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(ks(e,n.x,r.x,s.x),ks(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class El extends ai{constructor(e=new A,t=new A,i=new A){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(ks(e,n.x,r.x,s.x),ks(e,n.y,r.y,s.y),ks(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wl extends ai{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new k){let i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),o=r-s,a=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(Uu(o,a.x,l.x,c.x,h.x),Uu(o,a.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new k().fromArray(n))}return this}}class lh extends ai{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ns[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;while(r<n.length){if(n[r]>=i){let s=n[r]-i,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new ns[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class Xo extends lh{constructor(e){super();if(this.type="Path",this.currentPoint=new k,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new bl(this.currentPoint.clone(),new k(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Tl(this.currentPoint.clone(),new k(e,t),new k(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let o=new Sl(this.currentPoint.clone(),new k(e,t),new k(i,n),new k(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,o,a),this}absellipse(e,t,i,n,r,s,o,a){let l=new zs(e,t,i,n,r,s,o,a);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ji extends Xo{constructor(e){super(e);this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Xo().fromJSON(n))}return this}}function zu(e,t,i=2){let n=t&&t.length,r=n?t[0]*i:e.length,s=xp(e,0,r,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n)s=qy(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let h=a,f=l;for(let u=i;u<r;u+=i){let m=e[u],g=e[u+1];if(m<a)a=m;if(g<l)l=g;if(m>h)h=m;if(g>f)f=g}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Rl(s,o,i,a,l,c,0),o}function xp(e,t,i,n,r){let s;if(r===nM(e,t,i,n)>0)for(let o=t;o<i;o+=n)s=gp(o/n|0,e[o],e[o+1],s);else for(let o=i-n;o>=t;o-=n)s=gp(o/n|0,e[o],e[o+1],s);if(s&&qo(s,s.next))Il(s),s=s.next;return s}function Ws(e,t){if(!e)return e;if(!t)t=e;let i=e,n;do if(n=!1,!i.steiner&&(qo(i,i.next)||ri(i.prev,i,i.next)===0)){if(Il(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Rl(e,t,i,n,r,s,o){if(!e)return;if(!o&&s)jy(e,n,r,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?Vy(e,n,r,s):ky(e)){t.push(l.i,e.i,c.i),Il(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)Rl(Ws(e),t,i,n,r,s,1);else if(o===1)e=Wy(Ws(e),t),Rl(e,t,i,n,r,s,2);else if(o===2)Xy(e,t,i,n,r,s);break}}}function ky(e){let t=e.prev,i=e,n=e.next;if(ri(t,i,n)>=0)return!1;let r=t.x,s=i.x,o=n.x,a=t.y,l=i.y,c=n.y,h=Math.min(r,s,o),f=Math.min(a,l,c),u=Math.max(r,s,o),m=Math.max(a,l,c),g=n.next;while(g!==t){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=m&&Al(r,a,s,l,o,c,g.x,g.y)&&ri(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vy(e,t,i,n){let r=e.prev,s=e,o=e.next;if(ri(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,u=o.y,m=Math.min(a,l,c),g=Math.min(h,f,u),x=Math.max(a,l,c),d=Math.max(h,f,u),p=Hu(m,g,t,i,n),_=Hu(x,d,t,i,n),{prevZ:M,nextZ:v}=e;while(M&&M.z>=p&&v&&v.z<=_){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==r&&M!==o&&Al(a,h,l,f,c,u,M.x,M.y)&&ri(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,v.x>=m&&v.x<=x&&v.y>=g&&v.y<=d&&v!==r&&v!==o&&Al(a,h,l,f,c,u,v.x,v.y)&&ri(v.prev,v,v.next)>=0)return!1;v=v.nextZ}while(M&&M.z>=p){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==r&&M!==o&&Al(a,h,l,f,c,u,M.x,M.y)&&ri(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(v&&v.z<=_){if(v.x>=m&&v.x<=x&&v.y>=g&&v.y<=d&&v!==r&&v!==o&&Al(a,h,l,f,c,u,v.x,v.y)&&ri(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wy(e,t){let i=e;do{let n=i.prev,r=i.next.next;if(!qo(n,r)&&yp(n,i,i.next,r)&&Cl(n,r)&&Cl(r,n))t.push(n.i,i.i,r.i),Il(i),Il(i.next),i=e=r;i=i.next}while(i!==e);return Ws(i)}function Xy(e,t,i,n,r,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&eM(o,a)){let l=Mp(o,a);o=Ws(o,o.next),l=Ws(l,l.next),Rl(o,t,i,n,r,s,0),Rl(l,t,i,n,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function qy(e,t,i,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:e.length,c=xp(e,a,l,n,!1);if(c===c.next)c.steiner=!0;r.push(Qy(c))}r.sort(Yy);for(let s=0;s<r.length;s++)i=Zy(r[s],i);return i}function Yy(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let n=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=n-r}}return i}function Zy(e,t){let i=Ky(e,t);if(!i)return t;let n=Mp(i,e);return Ws(n,n.next),Ws(i,i.next)}function Ky(e,t){let i=t,{x:n,y:r}=e,s=-1/0,o;if(qo(e,i))return i;do{if(qo(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let f=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=n&&f>s){if(s=f,o=i.x<i.next.x?i:i.next,f===n)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;i=o;do{if(n>=i.x&&i.x>=l&&n!==i.x&&_p(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){let f=Math.abs(r-i.y)/(n-i.x);if(Cl(i,e)&&(f<h||f===h&&(i.x>o.x||i.x===o.x&&Jy(o,i))))o=i,h=f}i=i.next}while(i!==a);return o}function Jy(e,t){return ri(e.prev,e,t.prev)<0&&ri(t.next,e,e.next)<0}function jy(e,t,i,n){let r=e;do{if(r.z===0)r.z=Hu(r.x,r.y,t,i,n);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,$y(r)}function $y(e){let t,i=1;do{let n=e,r;e=null;let s=null;t=0;while(n){t++;let o=n,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||n.z<=o.z))r=n,n=n.nextZ,a--;else r=o,o=o.nextZ,l--;if(s)s.nextZ=r;else e=r;r.prevZ=s,s=r}n=o}s.nextZ=null,i*=2}while(t>1);return e}function Hu(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Qy(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function _p(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function Al(e,t,i,n,r,s,o,a){return!(e===o&&t===a)&&_p(e,t,i,n,r,s,o,a)}function eM(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!tM(e,t)&&(Cl(e,t)&&Cl(t,e)&&iM(e,t)&&(ri(e.prev,e,t.prev)||ri(e,t.prev,t))||qo(e,t)&&ri(e.prev,e,e.next)>0&&ri(t.prev,t,t.next)>0)}function ri(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function qo(e,t){return e.x===t.x&&e.y===t.y}function yp(e,t,i,n){let r=hh(ri(e,t,i)),s=hh(ri(e,t,n)),o=hh(ri(i,n,e)),a=hh(ri(i,n,t));if(r!==s&&o!==a)return!0;if(r===0&&ch(e,i,t))return!0;if(s===0&&ch(e,n,t))return!0;if(o===0&&ch(i,e,n))return!0;if(a===0&&ch(i,t,n))return!0;return!1}function ch(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function hh(e){return e>0?1:e<0?-1:0}function tM(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&yp(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Cl(e,t){return ri(e.prev,e,e.next)<0?ri(e,t,e.next)>=0&&ri(e,e.prev,t)>=0:ri(e,t,e.prev)<0||ri(e,e.next,t)<0}function iM(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)n=!n;i=i.next}while(i!==e);return n}function Mp(e,t){let i=Gu(e.i,e.x,e.y),n=Gu(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function gp(e,t,i,n){let r=Gu(e,t,i);if(!n)r.prev=r,r.next=r;else r.next=n.next,r.prev=n,n.next.prev=r,n.next=r;return r}function Il(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Gu(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nM(e,t,i,n){let r=0;for(let s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class ku{static triangulate(e,t,i=2){return zu(e,t,i)}}class bn{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*0.5}static isClockWise(e){return bn.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];vp(e),Sp(i,e);let s=e.length;t.forEach(vp);for(let a=0;a<t.length;a++)n.push(s),s+=t[a].length,Sp(i,t[a]);let o=ku.triangulate(i,n);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}}function vp(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function Sp(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class Xs extends Oe{constructor(e=new ji([new k(0.5,0.5),new k(-0.5,0.5),new k(-0.5,-0.5),new k(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new _e(n,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:0.2,m=t.bevelSize!==void 0?t.bevelSize:u-0.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:rM,_,M=!1,v,b,w,y;if(d){_=d.getSpacedPoints(c),M=!0,f=!1;let ae=d.isCatmullRomCurve3?d.closed:!1;v=d.computeFrenetFrames(c,ae),b=new A,w=new A,y=new A}if(!f)x=0,u=0,m=0,g=0;let S=o.extractPoints(l),{shape:R,holes:U}=S;if(!bn.isClockWise(R)){R=R.reverse();for(let ae=0,ue=U.length;ae<ue;ae++){let fe=U[ae];if(bn.isClockWise(fe))U[ae]=fe.reverse()}}function H(ae){let Ie=ae[0];for(let Ue=1;Ue<=ae.length;Ue++){let je=Ue%ae.length,Xe=ae[je],ut=Xe.x-Ie.x,gt=Xe.y-Ie.y,Rt=ut*ut+gt*gt,B=Math.max(Math.abs(Xe.x),Math.abs(Xe.y),Math.abs(Ie.x),Math.abs(Ie.y)),vi=0.000000000000000000010000000000000001*B*B;if(Rt<=vi){ae.splice(je,1),Ue--;continue}Ie=Xe}}H(R),U.forEach(H);let ie=U.length,I=R;for(let ae=0;ae<ie;ae++){let ue=U[ae];R=R.concat(ue)}function Z(ae,ue,fe){if(!ue)Be("ExtrudeGeometry: vec does not exist");return ae.clone().addScaledVector(ue,fe)}let L=R.length;function N(ae,ue,fe){let Ie,Ue,je,Xe=ae.x-ue.x,ut=ae.y-ue.y,gt=fe.x-ae.x,Rt=fe.y-ae.y,B=Xe*Xe+ut*ut,vi=Xe*Rt-ut*gt;if(Math.abs(vi)>Number.EPSILON){let ft=Math.sqrt(B),ci=Math.sqrt(gt*gt+Rt*Rt),Ae=ue.x-ut/ft,Nt=ue.y+Xe/ft,et=fe.x-Rt/ci,at=fe.y+gt/ci,Si=((et-Ae)*Rt-(at-Nt)*gt)/(Xe*Rt-ut*gt);Ie=Ae+Xe*Si-ae.x,Ue=Nt+ut*Si-ae.y;let C=Ie*Ie+Ue*Ue;if(C<=2)return new k(Ie,Ue);else je=Math.sqrt(C/2)}else{let ft=!1;if(Xe>Number.EPSILON){if(gt>Number.EPSILON)ft=!0}else if(Xe<-Number.EPSILON){if(gt<-Number.EPSILON)ft=!0}else if(Math.sign(ut)===Math.sign(Rt))ft=!0;if(ft)Ie=-ut,Ue=Xe,je=Math.sqrt(B);else Ie=Xe,Ue=ut,je=Math.sqrt(B/2)}return new k(Ie/je,Ue/je)}let te=[];for(let ae=0,ue=I.length,fe=ue-1,Ie=ae+1;ae<ue;ae++,fe++,Ie++){if(fe===ue)fe=0;if(Ie===ue)Ie=0;te[ae]=N(I[ae],I[fe],I[Ie])}let z=[],Y,J=te.concat();for(let ae=0,ue=ie;ae<ue;ae++){let fe=U[ae];Y=[];for(let Ie=0,Ue=fe.length,je=Ue-1,Xe=Ie+1;Ie<Ue;Ie++,je++,Xe++){if(je===Ue)je=0;if(Xe===Ue)Xe=0;Y[Ie]=N(fe[Ie],fe[je],fe[Xe])}z.push(Y),J=J.concat(Y)}let pe;if(x===0)pe=bn.triangulateShape(I,U);else{let ae=[],ue=[];for(let fe=0;fe<x;fe++){let Ie=fe/x,Ue=u*Math.cos(Ie*Math.PI/2),je=m*Math.sin(Ie*Math.PI/2)+g;for(let Xe=0,ut=I.length;Xe<ut;Xe++){let gt=Z(I[Xe],te[Xe],je);if(Ee(gt.x,gt.y,-Ue),Ie===0)ae.push(gt)}for(let Xe=0,ut=ie;Xe<ut;Xe++){let gt=U[Xe];Y=z[Xe];let Rt=[];for(let B=0,vi=gt.length;B<vi;B++){let ft=Z(gt[B],Y[B],je);if(Ee(ft.x,ft.y,-Ue),Ie===0)Rt.push(ft)}if(Ie===0)ue.push(Rt)}}pe=bn.triangulateShape(ae,ue)}let X=pe.length,ne=m+g;for(let ae=0;ae<L;ae++){let ue=f?Z(R[ae],J[ae],ne):R[ae];if(!M)Ee(ue.x,ue.y,0);else w.copy(v.normals[0]).multiplyScalar(ue.x),b.copy(v.binormals[0]).multiplyScalar(ue.y),y.copy(_[0]).add(w).add(b),Ee(y.x,y.y,y.z)}for(let ae=1;ae<=c;ae++)for(let ue=0;ue<L;ue++){let fe=f?Z(R[ue],J[ue],ne):R[ue];if(!M)Ee(fe.x,fe.y,h/c*ae);else w.copy(v.normals[ae]).multiplyScalar(fe.x),b.copy(v.binormals[ae]).multiplyScalar(fe.y),y.copy(_[ae]).add(w).add(b),Ee(y.x,y.y,y.z)}for(let ae=x-1;ae>=0;ae--){let ue=ae/x,fe=u*Math.cos(ue*Math.PI/2),Ie=m*Math.sin(ue*Math.PI/2)+g;for(let Ue=0,je=I.length;Ue<je;Ue++){let Xe=Z(I[Ue],te[Ue],Ie);Ee(Xe.x,Xe.y,h+fe)}for(let Ue=0,je=U.length;Ue<je;Ue++){let Xe=U[Ue];Y=z[Ue];for(let ut=0,gt=Xe.length;ut<gt;ut++){let Rt=Z(Xe[ut],Y[ut],Ie);if(!M)Ee(Rt.x,Rt.y,h+fe);else Ee(Rt.x,Rt.y+_[c-1].y,_[c-1].x+fe)}}}Me(),ve();function Me(){let ae=n.length/3;if(f){let ue=0,fe=L*ue;for(let Ie=0;Ie<X;Ie++){let Ue=pe[Ie];pt(Ue[2]+fe,Ue[1]+fe,Ue[0]+fe)}ue=c+x*2,fe=L*ue;for(let Ie=0;Ie<X;Ie++){let Ue=pe[Ie];pt(Ue[0]+fe,Ue[1]+fe,Ue[2]+fe)}}else{for(let ue=0;ue<X;ue++){let fe=pe[ue];pt(fe[2],fe[1],fe[0])}for(let ue=0;ue<X;ue++){let fe=pe[ue];pt(fe[0]+L*c,fe[1]+L*c,fe[2]+L*c)}}i.addGroup(ae,n.length/3-ae,0)}function ve(){let ae=n.length/3,ue=0;Ge(I,ue),ue+=I.length;for(let fe=0,Ie=U.length;fe<Ie;fe++){let Ue=U[fe];Ge(Ue,ue),ue+=Ue.length}i.addGroup(ae,n.length/3-ae,1)}function Ge(ae,ue){let fe=ae.length;while(--fe>=0){let Ie=fe,Ue=fe-1;if(Ue<0)Ue=ae.length-1;for(let je=0,Xe=c+x*2;je<Xe;je++){let ut=L*je,gt=L*(je+1),Rt=ue+Ie+ut,B=ue+Ue+ut,vi=ue+Ue+gt,ft=ue+Ie+gt;Ne(Rt,B,vi,ft)}}}function Ee(ae,ue,fe){a.push(ae),a.push(ue),a.push(fe)}function pt(ae,ue,fe){Fe(ae),Fe(ue),Fe(fe);let Ie=n.length/3,Ue=p.generateTopUV(i,n,Ie-3,Ie-2,Ie-1);lt(Ue[0]),lt(Ue[1]),lt(Ue[2])}function Ne(ae,ue,fe,Ie){Fe(ae),Fe(ue),Fe(Ie),Fe(ue),Fe(fe),Fe(Ie);let Ue=n.length/3,je=p.generateSideWallUV(i,n,Ue-6,Ue-3,Ue-2,Ue-1);lt(je[0]),lt(je[1]),lt(je[3]),lt(je[1]),lt(je[2]),lt(je[3])}function Fe(ae){n.push(a[ae*3+0]),n.push(a[ae*3+1]),n.push(a[ae*3+2])}function lt(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return sM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;if(n!==void 0)e.options.extrudePath=new ns[n.type]().fromJSON(n);return new Xs(i,e.options)}}var rM={generateTopUV:function(e,t,i,n,r){let s=t[i*3],o=t[i*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new k(s,o),new k(a,l),new k(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[r*3],m=t[r*3+1],g=t[r*3+2],x=t[s*3],d=t[s*3+1],p=t[s*3+2];if(Math.abs(a-h)<Math.abs(o-c))return[new k(o,1-l),new k(c,1-f),new k(u,1-g),new k(x,1-p)];else return[new k(a,1-l),new k(h,1-f),new k(m,1-g),new k(d,1-p)]}};function sM(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class Pl extends Oe{constructor(e=[new k(0,-0.5),new k(0.5,0),new k(0,0.5)],t=12,i=0,n=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=tt(n,0,Math.PI*2);let r=[],s=[],o=[],a=[],l=[],c=1/t,h=new A,f=new k,u=new A,m=new A,g=new A,x=0,d=0;for(let p=0;p<=e.length-1;p++)switch(p){case 0:x=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,u.x=d*1,u.y=-x,u.z=d*0,g.copy(u),u.normalize(),a.push(u.x,u.y,u.z);break;case e.length-1:g.normalize(),a.push(g.x,g.y,g.z);break;default:x=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,u.x=d*1,u.y=-x,u.z=d*0,m.copy(u),u.x+=g.x,u.y+=g.y,u.z+=g.z,u.normalize(),a.push(u.x,u.y,u.z),g.copy(m)}for(let p=0;p<=t;p++){let _=i+p*c*n,M=Math.sin(_),v=Math.cos(_);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*M,h.y=e[b].y,h.z=e[b].x*v,s.push(h.x,h.y,h.z),f.x=p/t,f.y=b/(e.length-1),o.push(f.x,f.y);let w=a[3*b+0]*M,y=a[3*b+1],S=a[3*b+0]*v;l.push(w,y,S)}}for(let p=0;p<t;p++)for(let _=0;_<e.length-1;_++){let M=_+p*e.length,v=M,b=M+e.length,w=M+e.length+1,y=M+1;r.push(v,b,y),r.push(w,y,b)}this.setIndex(r),this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(o,2)),this.setAttribute("normal",new _e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.points,e.segments,e.phiStart,e.phiLength)}}class Vt extends Oe{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,o=Math.floor(i),a=Math.floor(n),l=o+1,c=a+1,h=e/o,f=t/a,u=[],m=[],g=[],x=[];for(let d=0;d<c;d++){let p=d*f-s;for(let _=0;_<l;_++){let M=_*h-r;m.push(M,-p,0),g.push(0,0,1),x.push(_/o),x.push(1-d/a)}}for(let d=0;d<a;d++)for(let p=0;p<o;p++){let _=p+l*d,M=p+l*(d+1),v=p+1+l*(d+1),b=p+1+l*d;u.push(_,M,b),u.push(M,v,b)}this.setIndex(u),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yo extends Oe{constructor(e=0.5,t=1,i=32,n=1,r=0,s=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);let o=[],a=[],l=[],c=[],h=e,f=(t-e)/n,u=new A,m=new k;for(let g=0;g<=n;g++){for(let x=0;x<=i;x++){let d=r+x/i*s;u.x=h*Math.cos(d),u.y=h*Math.sin(d),a.push(u.x,u.y,u.z),l.push(0,0,1),m.x=(u.x/t+1)/2,m.y=(u.y/t+1)/2,c.push(m.x,m.y)}h+=f}for(let g=0;g<n;g++){let x=g*(i+1);for(let d=0;d<i;d++){let p=d+x,_=p,M=p+i+1,v=p+i+2,b=p+1;o.push(_,M,b),o.push(M,v,b)}}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zo extends Oe{constructor(e=new ji([new k(0,0.5),new k(-0.5,-0.5),new k(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new _e(n,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(s,2));function l(c){let h=n.length/3,f=c.extractPoints(t),{shape:u,holes:m}=f;if(bn.isClockWise(u)===!1)u=u.reverse();for(let x=0,d=m.length;x<d;x++){let p=m[x];if(bn.isClockWise(p)===!0)m[x]=p.reverse()}let g=bn.triangulateShape(u,m);for(let x=0,d=m.length;x<d;x++){let p=m[x];u=u.concat(p)}for(let x=0,d=u.length;x<d;x++){let p=u[x];n.push(p.x,p.y,0),r.push(0,0,1),s.push(p.x,p.y)}for(let x=0,d=g.length;x<d;x++){let p=g[x],_=p[0]+h,M=p[1]+h,v=p[2]+h;i.push(_,M,v),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return oM(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=t[e.shapes[n]];i.push(s)}return new Zo(i,e.curveSegments)}}function oM(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class an extends Oe{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(s+o,Math.PI),l=0,c=[],h=new A,f=new A,u=[],m=[],g=[],x=[];for(let d=0;d<=i;d++){let p=[],_=d/i,M=s+_*o,v=e*Math.cos(M),b=Math.sqrt(e*e-v*v),w=0;if(d===0&&s===0)w=0.5/t;else if(d===i&&a===Math.PI)w=-0.5/t;for(let y=0;y<=t;y++){let S=y/t,R=n+S*r;h.x=-b*Math.cos(R),h.y=v,h.z=b*Math.sin(R),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),x.push(S+w,1-_),p.push(l++)}c.push(p)}for(let d=0;d<i;d++)for(let p=0;p<t;p++){let _=c[d][p+1],M=c[d][p],v=c[d+1][p],b=c[d+1][p+1];if(d!==0||s>0)u.push(_,M,b);if(d!==i-1||a<Math.PI)u.push(M,v,b)}this.setIndex(u),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ir extends Oe{constructor(e=1,t=0.4,i=12,n=48,r=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let a=[],l=[],c=[],h=[],f=new A,u=new A,m=new A;for(let g=0;g<=i;g++){let x=s+g/i*o;for(let d=0;d<=n;d++){let p=d/n*r;u.x=(e+t*Math.cos(x))*Math.cos(p),u.y=(e+t*Math.cos(x))*Math.sin(p),u.z=t*Math.sin(x),l.push(u.x,u.y,u.z),f.x=e*Math.cos(p),f.y=e*Math.sin(p),m.subVectors(u,f).normalize(),c.push(m.x,m.y,m.z),h.push(d/n),h.push(g/i)}}for(let g=1;g<=i;g++)for(let x=1;x<=n;x++){let d=(n+1)*g+x-1,p=(n+1)*(g-1)+x-1,_=(n+1)*(g-1)+x,M=(n+1)*g+x;a.push(d,p,M),a.push(p,_,M)}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ll extends Oe{constructor(e=new El(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,n=8,r=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new A,a=new A,l=new k,c=new A,h=[],f=[],u=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(u,2));function g(){for(let _=0;_<t;_++)x(_);x(r===!1?t:0),p(),d()}function x(_){c=e.getPointAt(_/t,c);let M=s.normals[_],v=s.binormals[_];for(let b=0;b<=n;b++){let w=b/n*Math.PI*2,y=Math.sin(w),S=-Math.cos(w);a.x=S*M.x+y*v.x,a.y=S*M.y+y*v.y,a.z=S*M.z+y*v.z,a.normalize(),f.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,h.push(o.x,o.y,o.z)}}function d(){for(let _=1;_<=t;_++)for(let M=1;M<=n;M++){let v=(n+1)*(_-1)+(M-1),b=(n+1)*_+(M-1),w=(n+1)*_+M,y=(n+1)*(_-1)+M;m.push(v,b,y),m.push(b,w,y)}}function p(){for(let _=0;_<=t;_++)for(let M=0;M<=n;M++)l.x=_/t,l.y=M/n,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ll(new ns[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Dr(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let r=e[i][n];if(bp(r))if(r.isRenderTargetTexture)de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null;else t[i][n]=r.clone();else if(Array.isArray(r))if(bp(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function $i(e){let t={};for(let i=0;i<e.length;i++){let n=Dr(e[i]);for(let r in n)t[r]=n[r]}return t}function bp(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Tp(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function uh(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return rt.workingColorSpace}var cr={clone:Dr,merge:$i};var Ep=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var wp=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Qt extends Pt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;if(s&&s.isTexture)t.uniforms[n]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[n]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[n]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[n]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[n]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[n]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[n]={type:"m4",value:s.toArray()};else t.uniforms[n]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)if(this.extensions[n]===!0)i[n]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ce().setHex(n.value);break;case"v2":this.uniforms[i].value=new k().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class qs extends Qt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ot extends Pt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ni extends ot{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new k(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return Dn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Dn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dl extends Pt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=vs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nl extends Pt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fl extends Pt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function hr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Ys(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Ap(e){function t(r,s){return e[r]-e[s]}let i=e.length,n=Array(i);for(let r=0;r!==i;++r)n[r]=r;return n.sort(t),n}function Vu(e,t,i){let n=e.length,r=new e.constructor(n);for(let s=0,o=0;o!==n;++s){let a=i[s]*t;for(let l=0;l!==t;++l)r[o++]=e[a+l]}return r}function Rp(e,t,i,n){let r=1,s=e[0];while(s!==void 0&&s[n]===void 0)s=e[r++];if(s===void 0)return;let o=s[n];if(o===void 0)return;if(Array.isArray(o))do{if(o=s[n],o!==void 0)t.push(s.time),i.push(...o);s=e[r++]}while(s!==void 0);else if(o.toArray!==void 0)do{if(o=s[n],o!==void 0)t.push(s.time),o.toArray(i,i.length);s=e[r++]}while(s!==void 0);else do{if(o=s[n],o!==void 0)t.push(s.time),i.push(o);s=e[r++]}while(s!==void 0)}class fn{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class fh extends fn{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case _c:r=e,o=2*t-i;break;case yc:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case _c:s=e,a=2*i-t;break;case yc:s=1,a=i+n[1]-n[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(i-t)/(n-t),g=m*m,x=g*m,d=-f*x+2*f*g-f*m,p=(1+f)*x+(-1.5-2*f)*g+(-0.5+f)*m+1,_=(-1-u)*x+(1.5+u)*g+0.5*m,M=u*x-u*g;for(let v=0;v!==o;++v)r[v]=d*s[c+v]+p*s[l+v]+_*s[a+v]+M*s[h+v];return r}}class Ul extends fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(n-t),h=1-c;for(let f=0;f!==o;++f)r[f]=s[l+f]*h+s[a+f]*c;return r}}class dh extends fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class ph extends fn{interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let m=(i-t)/(n-t),g=1-m;for(let x=0;x!==o;++x)r[x]=s[l+x]*g+s[a+x]*m;return r}let f=o*2,u=e-1;for(let m=0;m!==o;++m){let g=s[l+m],x=s[a+m],d=u*f+m*2,p=h[d],_=h[d+1],M=e*f+m*2,v=c[M],b=c[M+1],w=gM(i,t,p,v,n);r[m]=Ip(w,g,_,b,x)}return r}}function Ip(e,t,i,n,r){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function mM(e,t,i,n,r){let s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function gM(e,t,i,n,r){let s=(e-t)/(r-t);for(let o=0;o<8;o++){let a=Ip(s,t,i,n,r)-e;if(Math.abs(a)<0.0000000001)break;let l=mM(s,t,i,n,r);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class xi{constructor(e,t,i,n){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};let n=e.getInterpolation();if(n!==e.DefaultInterpolation)i.interpolation=n;if(Ys(e.settings))i.settings={inTangents:hr(e.settings.inTangents,Array),outTangents:hr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ph(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case gc:t=this.InterpolantFactoryMethodSmooth;break;case eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return de("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return gc;case this.InterpolantFactoryMethodBezier:return eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;if(Ys(this.settings))Pp(this.settings.inTangents,e),Pp(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;if(Ys(this.settings))Lp(this.settings.inTangents,e),Lp(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;while(r!==n&&i[r]<e)++r;while(s!==-1&&i[s]>t)--s;if(++s,r!==0||s!==n){if(r>=s)s=Math.max(s,1),r=s-1;let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Be("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,n=this.values,r=i.length;if(r===0)Be("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==r;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Be("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Be("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(n!==void 0){if(iu(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===gc,r=e.length-1,s=1;for(let o=1;o<r;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!n){let h=o*i,f=h-i,u=h+i;for(let m=0;m!==i;++m){let g=t[h+m];if(g!==t[f+m]||g!==t[u+m]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let h=o*i,f=s*i;for(let u=0;u!==i;++u)t[f+u]=t[h+u]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);if(n.createInterpolant=this.createInterpolant,Ys(this.settings))n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return n}}function Pp(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function Lp(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=ws;class Nr extends xi{constructor(e,t,i){super(e,t,i)}}Nr.prototype.ValueTypeName="bool";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=Tr;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bl extends xi{constructor(e,t,i,n){super(e,t,i,n)}}Bl.prototype.ValueTypeName="color";class Fr extends xi{constructor(e,t,i,n){super(e,t,i,n)}}Fr.prototype.ValueTypeName="number";class mh extends fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(n-t),l=e*o;for(let c=l+o;l!==c;l+=4)$t.slerpFlat(r,0,s,l-o,s,l,a);return r}}class ur extends xi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}}ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends xi{constructor(e,t,i){super(e,t,i)}}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Tr;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends xi{constructor(e,t,i,n){super(e,t,i,n)}}Br.prototype.ValueTypeName="vector";class rs{constructor(e="",t=-1,i=[],n=Mc){if(this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ui(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(_M(i[s]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(xi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,s=[];for(let o=0;o<r;o++){let a=[],l=[];a.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let c=Ap(a);if(a=Vu(a,1,c),l=Vu(l,1,c),!n&&a[0]===0)a.push(r),l.push(l[0]);s.push(new Fr(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.name.match(r);if(c&&c.length>1){let h=c[1],f=n[h];if(!f)n[h]=f=[];f.push(l)}}let s=[];for(let o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xM(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fr;case"vector":case"vector2":case"vector3":case"vector4":return Br;case"color":return Bl;case"quaternion":return ur;case"bool":case"boolean":return Nr;case"string":return Ur}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function _M(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=xM(e.type);if(e.times===void 0){let n=[],r=[];Rp(e.keys,n,r,"value"),e.times=n,e.values=r}let i;if(t.parse!==void 0)i=t.parse(e);else i=new t(e.name,e.times,e.values,e.interpolation);if(Ys(e.settings))i.settings={inTangents:hr(e.settings.inTangents,Float32Array),outTangents:hr(e.settings.outTangents,Float32Array)};return i}var Tn={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(Dp(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(Dp(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Dp(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class gh{constructor(e,t,i){let n=this,r=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,r===!1){if(n.onStart!==void 0)n.onStart(c,s,o)}r=!0},this.itemEnd=function(c){if(s++,n.onProgress!==void 0)n.onProgress(c,s,o);if(s===o){if(r=!1,n.onLoad!==void 0)n.onLoad()}},this.itemError=function(c){if(n.onError!==void 0)n.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,f=l.length;h<f;h+=2){let u=l[h],m=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Wu=new gh;class pi{constructor(e){if(this.manager=e!==void 0?e:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or={};class Np extends Error{constructor(e,t){super(e);this.response=t}}class On extends pi{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=Tn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{if(t)t(r);this.manager.itemEnd(e)},0);return}if(Or[e]!==void 0){Or[e].push({onLoad:t,onProgress:i,onError:n});return}Or[e]=[],Or[e].push({onLoad:t,onProgress:i,onError:n});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,a=this.responseType;fetch(s).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)de("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=Or[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,m=u!==0,g=0,x=new ReadableStream({start(d){p();function p(){h.read().then(({done:_,value:M})=>{if(_)d.close();else{g+=M.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:u});for(let b=0,w=c.length;b<w;b++){let y=c[b];if(y.onProgress)y.onProgress(v)}d.enqueue(M),p()}},(_)=>{d.error(_)})}}});return new Response(x)}else throw new Np(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((c)=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o==="")return l.text();else{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then((m)=>u.decode(m))}}}).then((l)=>{Tn.add(`file:${e}`,l);let c=Or[e];delete Or[e];for(let h=0,f=c.length;h<f;h++){let u=c[h];if(u.onLoad)u.onLoad(l)}}).catch((l)=>{let c=Or[e];if(c===void 0)throw this.manager.itemError(e),l;delete Or[e];for(let h=0,f=c.length;h<f;h++){let u=c[h];if(u.onError)u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Ko=new WeakMap;class Jo extends pi{constructor(e){super(e)}load(e,t,i,n){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=Tn.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);else{let h=Ko.get(s);if(h===void 0)h=[],Ko.set(s,h);h.push({onLoad:t,onError:n})}return s}let o=Kr("img");function a(){if(c(),t)t(this);let h=Ko.get(this)||[];for(let f=0;f<h.length;f++){let u=h[f];if(u.onLoad)u.onLoad(this)}Ko.delete(this),r.manager.itemEnd(e)}function l(h){if(c(),n)n(h);Tn.remove(`image:${e}`);let f=Ko.get(this)||[];for(let u=0;u<f.length;u++){let m=f[u];if(m.onError)m.onError(h)}Ko.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return Tn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class ss extends pi{constructor(e){super(e)}load(e,t,i,n){let r=new bt,s=new Jo(this.manager);return s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,n),r}}class En extends it{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}var Xu=new Ce,Fp=new A,Up=new A;class os{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new k(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Un,this._frameExtents=new k(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fp),Up.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Up),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,o=n?n.w/r.y:1,a=n?n.x/r.x:0,l=n?n.y/r.y:0;if(e.coordinateSystem===or||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var xh=new A,_h=new $t,fr=new A;class Zs extends it{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(xh,_h,fr),fr.x===1&&fr.y===1&&fr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(xh,_h,fr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(xh,_h,fr),fr.x===1&&fr.y===1&&fr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(xh,_h,fr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var as=new A,Bp=new k,Op=new k;class Kt extends Zs{constructor(e=50,t=1,i=0.1,n=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Er*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Bp,Op),t.subVectors(Op,Bp)}setViewOffset(e,t,i,n,r,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*0.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-0.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;r+=s.offsetX*n/a,t-=s.offsetY*i/l,n*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qu extends os{constructor(){super(new Kt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=wr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;if(i!==t.fov||n!==t.aspect||r!==t.far)t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Ol extends En{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class Yu extends os{constructor(){super(new Kt(90,1,0.5,500));this.isPointLightShadow=!0}}class nr extends En{constructor(e,t,i=0,n=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rr extends Zs{constructor(e=-1,t=1,i=1,n=-1,r=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Zu extends os{constructor(){super(new rr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Hl extends En{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new Zu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gl extends En{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}class Hr{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}var Ku=new WeakMap;class yh extends pi{constructor(e){super(e);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")de("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")de("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=Tn.get(`image-bitmap:${e}`);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then((l)=>{if(Ku.has(s)===!0){if(n)n(Ku.get(s));r.manager.itemError(e),r.manager.itemEnd(e)}else{if(t)t(l);r.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let a=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){if(Tn.add(`image-bitmap:${e}`,l),t)t(l);return r.manager.itemEnd(e),l}).catch(function(l){if(n)n(l);Ku.set(a,l),Tn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Tn.add(`image-bitmap:${e}`,a),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var jo=-90,$o=1;class Ks extends it{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Kt(jo,$o,e,t);n.layers=this.layers,this.add(n);let r=new Kt(jo,$o,e,t);r.layers=this.layers,this.add(r);let s=new Kt(jo,$o,e,t);s.layers=this.layers,this.add(s);let o=new Kt(jo,$o,e,t);o.layers=this.layers,this.add(o);let a=new Kt(jo,$o,e,t);a.layers=this.layers,this.add(a);let l=new Kt(jo,$o,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,a]=t;for(let l of t)this.remove(l);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===or)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,s,o,a,l,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;if(e.isWebGLRenderer===!0)x=e.state.buffers.depth.getReversed();else x=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),x&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(h,f,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Mh extends Kt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class zl{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=CM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function CM(){if(this._document.hidden===!1)this.reset()}var Ju="\\[\\]\\.:\\/",PM=new RegExp("["+Ju+"]","g"),ju="[^"+Ju+"]",LM="[^"+Ju.replace("\\.","")+"]",DM=/((?:WC+[\/:])*)/.source.replace("WC",ju),NM=/(WCOD+)?/.source.replace("WCOD",LM),FM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),UM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),BM=new RegExp("^"+DM+NM+FM+UM+"$"),OM=["material","materials","bones","map"];class zp{constructor(e,t,i){let n=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];if(n!==void 0)n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class wt{constructor(e,t,i){this.path=t,this.parsedPath=i||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new wt(e,t,i);else return new wt.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PM,"")}static parseTrackName(e){let t=BM.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);if(OM.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,n),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:n,propertyIndex:r}=t;if(!e)e=wt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=zp;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q5=new Float32Array(1);var kp=new Ce;class vh{constructor(e,t,i=0,n=1/0){this.ray=new Fn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else Be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kp),this}intersectObject(e,t=!0,i=[]){return $u(e,this,i,t),i.sort(Vp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)$u(e[n],this,i,t);return i.sort(Vp),i}}function Vp(e,t){return e.distance-t.distance}function $u(e,t,i,n){let r=!0;if(e.layers.test(t.layers)){if(e.raycast(t,i)===!1)r=!1}if(r===!0&&n===!0){let s=e.children;for(let o=0,a=s.length;o<a;o++)$u(s[o],t,i,!0)}}class Sh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,de("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class Wp{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}function Qu(e,t,i,n){let r=kM(n);switch(i){case pc:return e*t;case uo:return e*t/r.components*r.byteLength;case bs:return e*t/r.components*r.byteLength;case xn:return e*t*2/r.components*r.byteLength;case fo:return e*t*2/r.components*r.byteLength;case mc:return e*t*3/r.components*r.byteLength;case Ei:return e*t*4/r.components*r.byteLength;case po:return e*t*4/r.components*r.byteLength;case mo:case go:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xo:case _o:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ta:case wa:return Math.max(e,16)*Math.max(t,8)/4;case ba:case Ea:return Math.max(e,8)*Math.max(t,8)/2;case Aa:case Ra:case Ia:case Pa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Ts:case La:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ya:case Za:case Ka:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ja:case ja:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Es:case $a:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function kM(e){switch(e){case hi:case hc:return{byteLength:1,components:1};case br:case uc:case jt:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case Ti:case lo:case oi:return{byteLength:4,components:1};case fc:case dc:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));if(typeof window<"u")if(window.__THREE__)de("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=ua;function bh(){let e=null,t=!1,i=null,n=null;function r(s,o){n=e.requestAnimationFrame(r),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;n=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(n);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Xp(e){let t=new WeakMap;function i(a,l){let{array:c,usage:h}=a,f=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)m=e.HALF_FLOAT;else m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let{array:h,updateRanges:f}=l;if(e.bindBuffer(c,a),f.length===0)e.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){let g=f[u],x=f[m];if(x.start<=g.start+g.count+1)g.count=Math.max(g.count,x.start+x.count-g.start);else++u,f[u]=x}f.length=u+1;for(let m=0,g=f.length;m<g;m++){let x=f[m];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=t.get(a);if(!h||h.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var qp=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Yp=`
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
`;var Zp=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Kp=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Jp=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var jp=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var $p=`
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
`;var Qp=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var em=`
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
`;var tm=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var im=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var nm=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var rm=`

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

`;var sm=`

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

`;var om=`
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
`;var am=`
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
`;var lm=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var cm=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var hm=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var um=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var fm=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var dm=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var pm=`
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
`;var mm=`
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
`;var gm=`

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
`;var xm=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var _m=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var ym=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Mm=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var vm=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Sm=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var bm=`
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
`;var Tm=`
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
`;var Em=`
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
`;var wm=`
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
`;var Am=`
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
`;var Rm=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Cm=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Im=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var Pm=`
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
`;var Lm=`

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
`;var Dm=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var Nm=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Fm=`
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
`;var Um=`
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
`;var Bm=`
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
`;var Om=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var Hm=`
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
`;var Gm=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var zm=`
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
`;var km=`
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
`;var Vm=`

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
`;var Wm=`
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
`;var Xm=`
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
`;var qm=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Ym=`
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
`;var Zm=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Km=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Jm=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var jm=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var $m=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var Qm=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var e0=`
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
`;var t0=`
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
`;var i0=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var n0=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var r0=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var s0=`
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
`;var o0=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var a0=`
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
`;var l0=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var c0=`
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

`;var h0=`

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
`;var u0=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var f0=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var d0=`
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
`;var p0=`
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
`;var m0=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var g0=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var x0=`

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
`;var _0=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var y0=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var M0=`
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
`;var v0=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var S0=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var b0=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var T0=`
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
`;var E0=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var w0=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var A0=`
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
`;var R0=`

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
`;var C0=`

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


`;var I0=`
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
`;var P0=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var L0=`
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
`;var D0=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var N0=`
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
`;var F0=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var U0=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var B0=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var O0=`
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
`;var H0=`
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
`;var G0=`
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
`;var z0=`
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
`;var k0=`
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
`;var V0=`
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
`;var W0=`
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
`;var X0=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,q0=`
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
`;var Y0=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Z0=`

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
`;var K0=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,J0=`
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
`;var j0=`
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
`,$0=`
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
`;var Q0=`
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
`,eg=`
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
`;var tg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,ig=`
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
`;var ng=`
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
`,rg=`
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
`;var sg=`
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
`,og=`
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
`;var ag=`
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
`,lg=`
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
`;var cg=`
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
`,hg=`
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
`;var ug=`
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
`,fg=`
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
`;var dg=`
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
`,pg=`
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
`;var mg=`
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
`,gg=`
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
`;var xg=`
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
`,_g=`
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
`;var yg=`
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
`,Mg=`
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
`;var vg=`
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
`,Sg=`
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
`;var bg=`
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
`,Tg=`
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
`;var ht={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:Kp,alphatest_fragment:Jp,alphatest_pars_fragment:jp,aomap_fragment:$p,aomap_pars_fragment:Qp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:im,beginnormal_vertex:nm,bsdfs:rm,iridescence_fragment:sm,bumpmap_pars_fragment:om,clipping_planes_fragment:am,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:fm,color_pars_vertex:dm,color_vertex:pm,common:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:xm,displacementmap_vertex:_m,emissivemap_fragment:ym,emissivemap_pars_fragment:Mm,colorspace_fragment:vm,colorspace_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Em,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Bm,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Im,fog_pars_fragment:Pm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Dm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Fm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Hm,lights_phong_fragment:Gm,lights_phong_pars_fragment:zm,lights_physical_fragment:km,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:jm,map_fragment:$m,map_pars_fragment:Qm,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:n0,morphinstance_vertex:r0,morphcolor_vertex:s0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:f0,normal_vertex:d0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:_0,opaque_fragment:y0,packing:M0,premultiplied_alpha_fragment:v0,project_vertex:S0,dithering_fragment:b0,dithering_pars_fragment:T0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:I0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:N0,specularmap_fragment:F0,specularmap_pars_fragment:U0,tonemapping_fragment:B0,tonemapping_pars_fragment:O0,transmission_fragment:H0,transmission_pars_fragment:G0,uv_pars_fragment:z0,uv_pars_vertex:k0,uv_vertex:V0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:Z0,cube_vert:K0,cube_frag:J0,depth_vert:j0,depth_frag:$0,distance_vert:Q0,distance_frag:eg,equirect_vert:tg,equirect_frag:ig,linedashed_vert:ng,linedashed_frag:rg,meshbasic_vert:sg,meshbasic_frag:og,meshlambert_vert:ag,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:fg,meshphong_vert:dg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:_g,points_vert:yg,points_frag:Mg,shadow_vert:vg,shadow_frag:Sg,sprite_vert:bg,sprite_frag:Tg};var Re={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new k(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new k(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}};var wn={basic:{uniforms:$i([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:$i([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:$i([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:$i([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:$i([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ce(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:$i([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:$i([Re.points,Re.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:$i([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:$i([Re.common,Re.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:$i([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:$i([Re.sprite,Re.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:$i([Re.common,Re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:$i([Re.lights,Re.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};wn.physical={uniforms:$i([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new k(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new k},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new k},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Th={r:0,b:0,g:0},lv=new Ce,Eg=new Ke;Eg.set(-1,0,0,0,1,0,0,0,1);function wg(e,t,i,n,r,s){let o=new ce(0),a=r===!0?0:1,l,c,h=null,f=0,u=null;function m(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(_){let M=!1,v=m(_);if(v===null)d(o,a);else if(v&&v.isColor)d(v,1),M=!0;let b=e.xr.getEnvironmentBlendMode();if(b==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(b==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||M)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function x(_,M){let v=m(M);if(v&&v.isCubeTexture){if(c===void 0)c=new ee(new Yt(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Dr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Eg);if(c.material.toneMapped=rt.getTransfer(v.colorSpace)!==_t,h!==v||f!==v.version||u!==e.toneMapping)c.material.needsUpdate=!0,h=v,f=v.version,u=e.toneMapping;c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new ee(new Vt(2,2),new Qt({name:"BackgroundMaterial",uniforms:Dr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=rt.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),h!==v||f!==v.version||u!==e.toneMapping)l.material.needsUpdate=!0,h=v,f=v.version,u=e.toneMapping;l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)}}function d(_,M){_.getRGB(Th,uh(e)),i.buffers.color.setClear(Th.r,Th.g,Th.b,M,s)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,d(o,a)},render:g,addToRenderList:x,dispose:p}}function Ag(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(P,H,ie,I,Z){let L=!1,N=f(P,I,ie,H);if(s!==N)s=N,c(s.object);if(L=m(P,I,ie,Z),L)g(P,I,ie,Z);if(Z!==null)t.update(Z,e.ELEMENT_ARRAY_BUFFER);if(L||o){if(o=!1,v(P,H,ie,I),Z!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer)}}function l(){return e.createVertexArray()}function c(P){return e.bindVertexArray(P)}function h(P){return e.deleteVertexArray(P)}function f(P,H,ie,I){let Z=I.wireframe===!0,L=n[H.id];if(L===void 0)L={},n[H.id]=L;let N=P.isInstancedMesh===!0?P.id:0,te=L[N];if(te===void 0)te={},L[N]=te;let z=te[ie.id];if(z===void 0)z={},te[ie.id]=z;let Y=z[Z];if(Y===void 0)Y=u(l()),z[Z]=Y;return Y}function u(P){let H=[],ie=[],I=[];for(let Z=0;Z<i;Z++)H[Z]=0,ie[Z]=0,I[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ie,attributeDivisors:I,object:P,attributes:{},index:null}}function m(P,H,ie,I){let Z=s.attributes,L=H.attributes,N=0,te=ie.getAttributes();for(let z in te)if(te[z].location>=0){let J=Z[z],pe=L[z];if(pe===void 0){if(z==="instanceMatrix"&&P.instanceMatrix)pe=P.instanceMatrix;if(z==="instanceColor"&&P.instanceColor)pe=P.instanceColor}if(J===void 0)return!0;if(J.attribute!==pe)return!0;if(pe&&J.data!==pe.data)return!0;N++}if(s.attributesNum!==N)return!0;if(s.index!==I)return!0;return!1}function g(P,H,ie,I){let Z={},L=H.attributes,N=0,te=ie.getAttributes();for(let z in te)if(te[z].location>=0){let J=L[z];if(J===void 0){if(z==="instanceMatrix"&&P.instanceMatrix)J=P.instanceMatrix;if(z==="instanceColor"&&P.instanceColor)J=P.instanceColor}let pe={};if(pe.attribute=J,J&&J.data)pe.data=J.data;Z[z]=pe,N++}s.attributes=Z,s.attributesNum=N,s.index=I}function x(){let P=s.newAttributes;for(let H=0,ie=P.length;H<ie;H++)P[H]=0}function d(P){p(P,0)}function p(P,H){let ie=s.newAttributes,I=s.enabledAttributes,Z=s.attributeDivisors;if(ie[P]=1,I[P]===0)e.enableVertexAttribArray(P),I[P]=1;if(Z[P]!==H)e.vertexAttribDivisor(P,H),Z[P]=H}function _(){let P=s.newAttributes,H=s.enabledAttributes;for(let ie=0,I=H.length;ie<I;ie++)if(H[ie]!==P[ie])e.disableVertexAttribArray(ie),H[ie]=0}function M(P,H,ie,I,Z,L,N){if(N===!0)e.vertexAttribIPointer(P,H,ie,Z,L);else e.vertexAttribPointer(P,H,ie,I,Z,L)}function v(P,H,ie,I){x();let Z=I.attributes,L=ie.getAttributes(),N=H.defaultAttributeValues;for(let te in L){let z=L[te];if(z.location>=0){let Y=Z[te];if(Y===void 0){if(te==="instanceMatrix"&&P.instanceMatrix)Y=P.instanceMatrix;if(te==="instanceColor"&&P.instanceColor)Y=P.instanceColor}if(Y!==void 0){let J=Y.normalized,pe=Y.itemSize,X=t.get(Y);if(X===void 0)continue;let{buffer:ne,type:Me,bytesPerElement:ve}=X,Ge=Me===e.INT||Me===e.UNSIGNED_INT||Y.gpuType===lo;if(Y.isInterleavedBufferAttribute){let Ee=Y.data,pt=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,Ne=Y.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let Fe=0;Fe<z.locationSize;Fe++)p(z.location+Fe,Ee.meshPerAttribute);if(P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=Ee.meshPerAttribute*Ee.count}else for(let Fe=0;Fe<z.locationSize;Fe++)d(z.location+Fe);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let Fe=0;Fe<z.locationSize;Fe++)M(z.location+Fe,pe/z.locationSize,Me,J,pt*ve,(Ne+pe/z.locationSize*Fe)*ve,Ge)}else{if(Y.isInstancedBufferAttribute){for(let Ee=0;Ee<z.locationSize;Ee++)p(z.location+Ee,Y.meshPerAttribute);if(P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=Y.meshPerAttribute*Y.count}else for(let Ee=0;Ee<z.locationSize;Ee++)d(z.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let Ee=0;Ee<z.locationSize;Ee++)M(z.location+Ee,pe/z.locationSize,Me,J,pe*ve,pe/z.locationSize*Ee*ve,Ge)}}else if(N!==void 0){let J=N[te];if(J!==void 0)switch(J.length){case 2:e.vertexAttrib2fv(z.location,J);break;case 3:e.vertexAttrib3fv(z.location,J);break;case 4:e.vertexAttrib4fv(z.location,J);break;default:e.vertexAttrib1fv(z.location,J)}}}}_()}function b(){R();for(let P in n){let H=n[P];for(let ie in H){let I=H[ie];for(let Z in I){let L=I[Z];for(let N in L)h(L[N].object),delete L[N];delete I[Z]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let H=n[P.id];for(let ie in H){let I=H[ie];for(let Z in I){let L=I[Z];for(let N in L)h(L[N].object),delete L[N];delete I[Z]}}delete n[P.id]}function y(P){for(let H in n){let ie=n[H];for(let I in ie){let Z=ie[I];if(Z[P.id]===void 0)continue;let L=Z[P.id];for(let N in L)h(L[N].object),delete L[N];delete Z[P.id]}}}function S(P){for(let H in n){let ie=n[H],I=P.isInstancedMesh===!0?P.id:0,Z=ie[I];if(Z===void 0)continue;for(let L in Z){let N=Z[L];for(let te in N)h(N[te].object),delete N[te];delete Z[L]}if(delete ie[I],Object.keys(ie).length===0)delete n[H]}}function R(){if(U(),o=!0,s===r)return;s=r,c(s.object)}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:d,disableUnusedAttributes:_}}function Rg(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function o(l,c,h){if(h===0)return;e.drawArraysInstanced(n,l,c,h),i.update(c,n,h)}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];i.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Cg(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){if(y!==Ei&&n.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(y){let S=y===jt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(y!==hi&&y!==oi&&!S&&n.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}if(y==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);if(h!==c)de("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let f=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&f===!1;if(i.reversedDepthBuffer===!0&&f===!1)de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&f===!0)de("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:w}}function Ig(e){let t=this,i=null,n=0,r=!1,s=!1,o=new Mn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){i=h(f,u,0)},this.setState=function(f,u,m){let{clippingPlanes:g,clipIntersection:x,clipShadows:d}=f,p=e.get(f);if(!r||g===null||g.length===0||s&&!d)if(s)h(null);else c();else{let _=s?0:n,M=_*4,v=p.clippingState||null;l.value=v,v=h(g,u,M,m);for(let b=0;b!==M;++b)v[b]=i[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=n>0;t.numPlanes=n,t.numIntersection=0}function h(f,u,m,g){let x=f!==null?f.length:0,d=null;if(x!==0){if(d=l.value,g!==!0||d===null){let p=m+x*4,_=u.matrixWorldInverse;if(a.getNormalMatrix(_),d===null||d.length<p)d=new Float32Array(p);for(let M=0,v=m;M!==x;++M,v+=4)o.copy(f[M]).applyMatrix4(_,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}class ls extends Zt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ts(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Yt(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:In});r.uniforms.tEquirect.value=t;let s=new ee(n,r),o=t.minFilter;if(t.minFilter===Pi)t.minFilter=Ot;return new Ks(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}var Pg=256,cv=3,hv=20,Fg=256,Ug=16,uv=3,fv=new A,dv=new ce;class cs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ks(1,10,null),this._boxMesh=new ee(new Yt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,n=100,r={}){let{size:s=256,position:o=fv}=r,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:f,autoClearDepth:u,autoClearStencil:m}=a,g=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,g===null)e.background=a.getClearColor(dv);let x=new Ks(i,n,c);if(x.position.copy(o),x.update(a,e),a.autoClear=h,a.autoClearColor=f,a.autoClearDepth=u,a.autoClearStencil=m,e.background=g,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pg,ru(e))}_fromTexture(e,t){if(e.mapping===Pn||e.mapping===Sr)this._setSize(e.image.length===0?Pg:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Lg(e,!1,!1),i=Math.log2(e)-cv;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Lg(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Pn||e.mapping===Sr){if(this._cubemapMaterial===null)this._cubemapMaterial=Ng();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Dg();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=pv(),this._integrationMaterial=mv();let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ug);for(let s=0;s<=i;s++){let o=cs.lodToRoughness(s,i);if(s>i-uv)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Fg*Math.pow(o,4)))+0.5:0;n.roughness.value=o,n.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=gv();let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}}function Lg(e,t,i){return new ls(e,{minFilter:Pi,generateMipmaps:t,type:jt,colorSpace:Hi,depthBuffer:i})}function kl(e,t,i){return new Qt({name:e,uniforms:t,vertexShader:ht.cube_vert,fragmentShader:i,side:zt,blending:In,depthTest:!1,depthWrite:!1})}function pv(){return kl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fg}u

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
	`)}function mv(){return kl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ug}},`

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
	`)}function gv(){return kl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hv}
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
	`)}function Dg(){return kl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ng(){return kl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bg(e){let t=new WeakMap,i=new WeakMap,n=null;function r(u,m=!1){if(u===null||u===void 0)return null;if(m)return o(u);return s(u)}function s(u){if(u&&u.isTexture){let m=u.mapping;if(m===Ma||m===va)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new ls(g.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,g=m===Ma||m===va,x=m===Pn||m===Sr;if(g||x){let d=i.get(u),p=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p){if(n===null)n=new cs(e);return d=g?n.fromEquirectangular(u,d):n.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,i.set(u,d),d.texture}else if(d!==void 0)return d.texture;else{let _=u.image;if(g&&_&&_.height>0||x&&_&&l(_)){if(n===null)n=new cs(e);return d=g?n.fromEquirectangular(u):n.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,i.set(u,d),u.addEventListener("dispose",h),d.texture}else return null}}}return u}function a(u,m){if(m===Ma)u.mapping=Pn;else if(m===va)u.mapping=Sr;return u}function l(u){let m=0,g=6;for(let x=0;x<g;x++)if(u[x]!==void 0)m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);if(g!==void 0)t.delete(m),g.dispose()}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=i.get(m);if(g!==void 0)i.delete(m),g.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,n!==null)n.dispose(),n=null}return{get:r,dispose:f}}function Og(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);if(r===null)Dn("WebGLRenderer: "+n+" extension not supported.");return r}}}function Hg(e,t,i,n){let r={},s=new WeakMap,o=new FinalizationRegistry((g)=>delete r[g]);function a(g){l(g.target)}function l(g){if(g.index!==null)t.remove(g.index);for(let d in g.attributes)t.remove(g.attributes[d]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let x=s.get(g);if(x)t.remove(x),s.delete(g);if(n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0)delete g._maxInstanceCount;i.memory.geometries--}function c(g,x){if(r[x.id]!==void 0)return x;return x.addEventListener("dispose",a),r[x.id]=new WeakRef(x),o.register(x,x.id,x),i.memory.geometries++,x}function h(g){let x=g.attributes;for(let d in x)t.update(x[d],e.ARRAY_BUFFER)}function f(g){let x=g.index,d=g.attributes.position,p=0;if(d===void 0)return;let _=x!==null?x.array.length:d.array.length/3-1,v=new(d.count>=65535?al:ol)(Math.ceil(_/3)*6,1),b=v.array;if(x!==null){let y=x.array;p=x.version;for(let S=0,R=0;S<_;S+=3){let U=y[S+0],P=y[S+1],H=y[S+2];b[R++]=U,b[R++]=P,b[R++]=P,b[R++]=H,b[R++]=H,b[R++]=U}}else{p=d.version;for(let y=0,S=0;y<_;y+=3){let R=y+0,U=y+1,P=y+2;b[S++]=R,b[S++]=U,b[S++]=U,b[S++]=P,b[S++]=P,b[S++]=R}}v.version=p;let w=s.get(g);if(w)t.remove(w);s.set(g,v)}function u(g){let x=s.get(g);if(x){let d=g.index;if(d!==null){if(x.version<d.version)f(g)}}else f(g);return s.get(g)}function m(){for(let g in r){let x=r[g].deref();if(x!==void 0)l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function Gg(e,t,i){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){e.drawElements(n,u,s,f*o),i.update(u,n,1)}function c(f,u,m){if(m===0)return;e.drawElementsInstanced(n,u,s,f*o,m),i.update(u,n,m)}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,m);let x=0;for(let d=0;d<m;d++)x+=u[d];i.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zg(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function kg(e,t,i){let n=new WeakMap,r=new yt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let R=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",R)};if(u!==void 0)u.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;if(m===!0)M=1;if(g===!0)M=2;if(x===!0)M=3;let v=a.attributes.position.count*M,b=1;if(v>t.maxTextureSize)b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize;let w=new Float32Array(v*b*4*f),y=new Is(w,v,b,f);y.type=oi,y.needsUpdate=!0;let S=M*4;for(let U=0;U<f;U++){let P=d[U],H=p[U],ie=_[U],I=v*b*4*U;for(let Z=0;Z<P.count;Z++){let L=Z*S;if(m===!0)r.fromBufferAttribute(P,Z),w[I+L+0]=r.x,w[I+L+1]=r.y,w[I+L+2]=r.z,w[I+L+3]=0;if(g===!0)r.fromBufferAttribute(H,Z),w[I+L+4]=r.x,w[I+L+5]=r.y,w[I+L+6]=r.z,w[I+L+7]=0;if(x===!0)r.fromBufferAttribute(ie,Z),w[I+L+8]=r.x,w[I+L+9]=r.y,w[I+L+10]=r.z,w[I+L+11]=ie.itemSize===4?r.w:1}}u={count:f,texture:y,size:new k(v,b)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function Vg(e,t,i,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h)t.update(u),s.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==h){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,h)}}if(c.isSkinnedMesh){let m=c.skeleton;if(s.get(m)!==h)m.update(),s.set(m,h)}return u}function a(){s=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:a}}var xv={[io]:"LINEAR_TONE_MAPPING",[no]:"REINHARD_TONE_MAPPING",[ro]:"CINEON_TONE_MAPPING",[qr]:"ACES_FILMIC_TONE_MAPPING",[oo]:"AGX_TONE_MAPPING",[ao]:"NEUTRAL_TONE_MAPPING",[so]:"CUSTOM_TONE_MAPPING"};function Wg(e,t,i,n,r,s){let o=new Zt(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Oe;h.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _e([0,2,0,0,2,0],2));let f=new qs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ee(h,f),m=new rr(-1,1,1,-1,0,1),g=null,x=null,d=!1,p,_=null,M=[],v=!1;this.setSize=function(b,w){if(o.setSize(b,w),a!==null)a.setSize(b,w);if(l!==null)l.setSize(b,w);for(let y=0;y<M.length;y++){let S=M[y];if(S.setSize)S.setSize(b,w)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;let{width:w,height:y}=o;if(M.length>0&&a===null)a=new Zt(w,y,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new Zt(w,y,{type:jt,depthBuffer:!1,stencilBuffer:!1});let S=r===!0&&M.some((R)=>R.needsDepthTexture===!0);if(S!==(o.depthTexture!==null)){if(S===!0&&c===null){if(c=new Sn(w,y),s===!0)c.format=gn,c.type=Zn}o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S}for(let R=0;R<M.length;R++){let U=M[R];if(U.setSize)U.setSize(w,y);if(S&&U.needsDepthTexture===!0&&U.setDepthTexture)U.setDepthTexture(c)}},this.begin=function(b,w){if(d)return!1;if(b.toneMapping===mn&&M.length===0)return!1;if(_=w,w!==null){let{width:y,height:S}=w;if(o.width!==y||o.height!==S)this.setSize(y,S)}if(v===!1)b.setRenderTarget(o);return p=b.toneMapping,b.toneMapping=mn,!0},this.hasRenderPass=function(){return v},this.end=function(b,w){b.toneMapping=p,d=!0;let y=o,S=a;for(let R=0;R<M.length;R++){let U=M[R];if(U.enabled===!1)continue;if(U.render(b,S,y,w),U.needsSwap!==!1)y=S,S=S===a?l:a}if(g!==b.outputColorSpace||x!==b.toneMapping){if(g=b.outputColorSpace,x=b.toneMapping,f.defines={},rt.getTransfer(g)===_t)f.defines.SRGB_TRANSFER="";let R=xv[x];if(R)f.defines[R]="";f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(_),b.render(u,m),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();h.dispose(),f.dispose()}}var jg=new bt,$g=new Sn(1,1),Qg=new ko(1),ex=new Is,tx=new bo,ix=new ts,Xg=[],qg=[],Yg=new Float32Array(16),Zg=new Float32Array(9),Kg=new Float32Array(4);function Qo(e,t,i){let n=e[0];if(n<=0||n>0)return e;let r=t*i,s=Xg[r];if(s===void 0)s=new Float32Array(r),Xg[r]=s;if(t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function Ai(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Ri(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Eh(e,t){let i=qg[t];if(i===void 0)i=new Int32Array(t),qg[t]=i;for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function _v(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function yv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Ai(i,t))return;e.uniform2fv(this.addr,t),Ri(i,t)}}function Mv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(Ai(i,t))return;e.uniform3fv(this.addr,t),Ri(i,t)}}function vv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Ai(i,t))return;e.uniform4fv(this.addr,t),Ri(i,t)}}function Sv(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Ai(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ri(i,t)}else{if(Ai(i,n))return;Kg.set(n),e.uniformMatrix2fv(this.addr,!1,Kg),Ri(i,n)}}function bv(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Ai(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ri(i,t)}else{if(Ai(i,n))return;Zg.set(n),e.uniformMatrix3fv(this.addr,!1,Zg),Ri(i,n)}}function Tv(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Ai(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ri(i,t)}else{if(Ai(i,n))return;Yg.set(n),e.uniformMatrix4fv(this.addr,!1,Yg),Ri(i,n)}}function Ev(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function wv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Ai(i,t))return;e.uniform2iv(this.addr,t),Ri(i,t)}}function Av(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(Ai(i,t))return;e.uniform3iv(this.addr,t),Ri(i,t)}}function Rv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Ai(i,t))return;e.uniform4iv(this.addr,t),Ri(i,t)}}function Cv(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function Iv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Ai(i,t))return;e.uniform2uiv(this.addr,t),Ri(i,t)}}function Pv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(Ai(i,t))return;e.uniform3uiv(this.addr,t),Ri(i,t)}}function Lv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Ai(i,t))return;e.uniform4uiv(this.addr,t),Ri(i,t)}}function wh(e){if(e.version===0)e.compareFunction=Ec,e.needsUpdate=!0;return e}function Dv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=wh($g);else s=jg;i.setTexture2D(t||s,r)}function Nv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture3D(t||tx,r)}function Fv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=wh(Qg);else s=ix;i.setTextureCube(t||s,r)}function Uv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture2DArray(t||ex,r)}function Bv(e){switch(e){case 5126:return _v;case 35664:return yv;case 35665:return Mv;case 35666:return vv;case 35674:return Sv;case 35675:return bv;case 35676:return Tv;case 5124:case 35670:return Ev;case 35667:case 35671:return wv;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Iv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Ov(e,t){e.uniform1fv(this.addr,t)}function Hv(e,t){let i=Qo(t,this.size,2);e.uniform2fv(this.addr,i)}function Gv(e,t){let i=Qo(t,this.size,3);e.uniform3fv(this.addr,i)}function zv(e,t){let i=Qo(t,this.size,4);e.uniform4fv(this.addr,i)}function kv(e,t){let i=Qo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Vv(e,t){let i=Qo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Wv(e,t){let i=Qo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Xv(e,t){e.uniform1iv(this.addr,t)}function qv(e,t){e.uniform2iv(this.addr,t)}function Yv(e,t){e.uniform3iv(this.addr,t)}function Zv(e,t){e.uniform4iv(this.addr,t)}function Kv(e,t){e.uniform1uiv(this.addr,t)}function Jv(e,t){e.uniform2uiv(this.addr,t)}function jv(e,t){e.uniform3uiv(this.addr,t)}function $v(e,t){e.uniform4uiv(this.addr,t)}function Qv(e,t,i){let n=this.cache,r=t.length,s=Eh(i,r);if(!Ai(n,s))e.uniform1iv(this.addr,s),Ri(n,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=wh($g);else o=jg;for(let a=0;a!==r;++a)i.setTexture2D(t[a]||o,s[a])}function e1(e,t,i){let n=this.cache,r=t.length,s=Eh(i,r);if(!Ai(n,s))e.uniform1iv(this.addr,s),Ri(n,s);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||tx,s[o])}function t1(e,t,i){let n=this.cache,r=t.length,s=Eh(i,r);if(!Ai(n,s))e.uniform1iv(this.addr,s),Ri(n,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=wh(Qg);else o=ix;for(let a=0;a!==r;++a)i.setTextureCube(t[a]||o,s[a])}function i1(e,t,i){let n=this.cache,r=t.length,s=Eh(i,r);if(!Ai(n,s))e.uniform1iv(this.addr,s),Ri(n,s);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||ex,s[o])}function n1(e){switch(e){case 5126:return Ov;case 35664:return Hv;case 35665:return Gv;case 35666:return zv;case 35674:return kv;case 35675:return Vv;case 35676:return Wv;case 5124:case 35670:return Xv;case 35667:case 35671:return qv;case 35668:case 35672:return Yv;case 35669:case 35673:return Zv;case 5125:return Kv;case 36294:return Jv;case 36295:return jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return i1}}class nx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bv(t.type)}}class rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n1(t.type)}}class sx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(e,t[o.id],i)}}}var ef=/(\w+)(\])?(\[|\.)?/g;function Jg(e,t){e.seq.push(t),e.map[t.id]=t}function r1(e,t,i){let n=e.name,r=n.length;ef.lastIndex=0;while(!0){let s=ef.exec(n),o=ef.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===r){Jg(i,c===void 0?new nx(a,e,t):new rx(a,e,t));break}else{let f=i.map[a];if(f===void 0)f=new sx(a),Jg(i,f);i=f}}}class Js{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);r1(o,a,this)}let n=[],r=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)n.push(s);else r.push(s);if(n.length>0)this.seq=n.concat(r)}setValue(e,t,i,n){let r=this.map[t];if(r!==void 0)r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];if(n!==void 0)this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];if(s.id in t)i.push(s)}return i}}function tf(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var s1=37297,o1=0;function a1(e,t){let i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}var ox=new Ke;function l1(e){rt._getMatrix(ox,rt.workingColorSpace,e);let t=`mat3( ${ox.elements.map((i)=>i.toFixed(4))} )`;switch(rt.getTransfer(e)){case As:return[t,"LinearTransferOETF"];case _t:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ax(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+a1(e.getShaderSource(t),a)}else return s}function c1(e,t){let i=l1(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var h1={[io]:"Linear",[no]:"Reinhard",[ro]:"Cineon",[qr]:"ACESFilmic",[oo]:"AgX",[ao]:"Neutral",[so]:"Custom"};function u1(e,t){let i=h1[t];if(i===void 0)return de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ah=new A;function f1(){rt.getLuminanceCoefficients(Ah);let e=Ah.x.toFixed(4),t=Ah.y.toFixed(4),i=Ah.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function d1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}function p1(e){let t=[];for(let i in e){let n=e[i];if(n===!1)continue;t.push("#define "+i+" "+n)}return t.join(`
`)}function m1(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=e.getActiveAttrib(t,r),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function Vl(e){return e!==""}function lx(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cx(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(e){return e.replace(g1,x1)}function x1(e,t){let i=ht[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return nf(i)}var _1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hx(e){return e.replace(_1,y1)}function y1(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ux(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var M1={[to]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function v1(e){return M1[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var S1={[Sr]:"ENVMAP_MODE_REFRACTION"};function b1(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return S1[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var T1={[vs]:"ENVMAP_BLENDING_MULTIPLY",[xd]:"ENVMAP_BLENDING_MIX",[_d]:"ENVMAP_BLENDING_ADD"};function E1(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return T1[e.combine]||"ENVMAP_BLENDING_NONE"}function fx(e,t,i,n){let r=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=v1(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=b1(i),f=E1(i),u=d1(i),m=p1(s),g=r.createProgram(),x,d,p=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(Vl).join(`
`),x.length>0)x+=`
`;if(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(Vl).join(`
`),d.length>0)d+=`
`}else x=[ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),d=[ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==mn?"#define TONE_MAPPING":"",i.toneMapping!==mn?ht.tonemapping_pars_fragment:"",i.toneMapping!==mn?u1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,c1("linearToOutputTexel",i.outputColorSpace),f1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vl).join(`
`);if(o=nf(o),o=lx(o,i),o=cx(o,i),a=nf(a),a=lx(a,i),a=cx(a,i),o=hx(o),a=hx(a),i.isRawShaderMaterial!==!0)p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",i.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d;let _=p+x+o,M=p+d+a,v=tf(r,r.VERTEX_SHADER,_),b=tf(r,r.FRAGMENT_SHADER,M);if(r.attachShader(g,v),r.attachShader(g,b),i.index0AttributeName!==void 0)r.bindAttribLocation(g,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(g,0,"position");r.linkProgram(g);function w(U){if(e.debug.checkShaderErrors){let P=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(v)||"",ie=r.getShaderInfoLog(b)||"",I=P.trim(),Z=H.trim(),L=ie.trim(),N=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,g,v,b);else{let z=ax(r,v,"vertex"),Y=ax(r,b,"fragment");Be("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+I+`
`+z+`
`+Y)}else if(I!=="")de("WebGLProgram: Program Info Log:",I);else if(Z===""||L==="")te=!1;if(te)U.diagnostics={runnable:N,programLog:I,vertexShader:{log:Z,prefix:x},fragmentShader:{log:L,prefix:d}}}r.deleteShader(v),r.deleteShader(b),y=new Js(r,g),S=m1(r,g)}let y;this.getUniforms=function(){if(y===void 0)w(this);return y};let S;this.getAttributes=function(){if(S===void 0)w(this);return S};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(R===!1)R=r.getProgramParameter(g,s1);return R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=o1++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=b,this}var w1=0;class rf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);if(n.has(t)===!1)n.add(t),t.usedTimes++;if(n.has(i)===!1)n.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new dx(e),t.set(e,i);return i}}class dx{constructor(e){this.id=w1++,this.code=e,this.usedTimes=0}}function A1(e){return e===xn||e===Ts||e===Es}function px(e,t,i,n,r,s){let o=new jr,a=new rf,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){if(l.add(y),y===0)return"uv";return`uv${y}`}function g(y,S,R,U,P,H){let ie=U.fog,I=P.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=t.get(y.envMap||Z,L),te=u[y.type],z=n.precision;if(y.precision!==null){if(z=n.getMaxPrecision(y.precision),z!==y.precision)de("WebGLProgram.getParameters:",y.precision,"not supported, using",z,"instead.")}let Y=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=Y!==void 0?Y.length:0,pe=0;if(I.morphAttributes.position!==void 0)pe=1;if(I.morphAttributes.normal!==void 0)pe=2;if(I.morphAttributes.color!==void 0)pe=3;let X,ne,Me,ve;if(te){let Le=wn[te];X=Le.vertexShader,ne=Le.fragmentShader}else{X=y.vertexShader,ne=y.fragmentShader;let Le=a.getVertexShaderStage(y),Bt=a.getFragmentShaderStage(y);a.update(y,Le,Bt),Me=Le.id,ve=Bt.id}let Ge=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),pt=P.isInstancedMesh===!0,Ne=P.isBatchedMesh===!0,Fe=!!y.map,lt=!!y.matcap,ae=!!N,ue=ae&&N.isPMREMTexture===!0,fe=!!y.aoMap,Ie=!!y.lightMap,Ue=!!y.bumpMap&&y.wireframe===!1,je=!!y.normalMap,Xe=!!y.displacementMap,ut=!!y.emissiveMap,gt=!!y.metalnessMap,Rt=!!y.roughnessMap,B=y.anisotropy>0,vi=y.clearcoat>0,ft=y.diffuseRoughness>0,ci=y.dispersion>0,Ae=y.retroreflectivity>0,Nt=y.iridescence>0,et=y.sheen>0,at=y.transmission>0,Si=B&&!!y.anisotropyMap,C=vi&&!!y.clearcoatMap,T=vi&&!!y.clearcoatNormalMap,V=vi&&!!y.clearcoatRoughnessMap,he=ft&&!!y.diffuseRoughnessMap,le=Nt&&!!y.iridescenceMap,xe=Nt&&!!y.iridescenceThicknessMap,Se=et&&!!y.sheenColorMap,j=et&&!!y.sheenRoughnessMap,oe=!!y.specularMap,ye=!!y.specularColorMap,D=!!y.specularIntensityMap,se=at&&!!y.transmissionMap,Q=at&&!!y.thicknessMap,me=!!y.gradientMap,ge=!!y.alphaMap,we=y.alphaTest>0,$e=!!y.alphaHash,Ze=!!y.extensions,Pe=mn;if(y.toneMapped){if(Ge===null||Ge.isXRRenderTarget===!0)Pe=e.toneMapping}let Qe=ue?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,dt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:ne,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:z,batching:Ne,batchingColor:Ne&&P._colorsTexture!==null,instancing:pt,instancingColor:pt&&P.instanceColor!==null,instancingMorph:pt&&P.morphTexture!==null,outputColorSpace:Ge===null?e.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Fe,matcap:lt,envMap:ae,envMapMode:ae&&N.mapping,envMapPMREM:ue,envMapMaxLod:ue?Qe.length-1:null,envMapSize:ue?Qe[0].width:null,aoMap:fe,lightMap:Ie,bumpMap:Ue,normalMap:je,displacementMap:Xe,emissiveMap:ut,normalMapObjectSpace:je&&y.normalMapType===Sd,normalMapTangentSpace:je&&y.normalMapType===Kn,packedNormalMap:je&&y.normalMapType===Kn&&A1(y.normalMap.format),metalnessMap:gt,roughnessMap:Rt,anisotropy:B,anisotropyMap:Si,clearcoat:vi,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:V,diffuseRoughness:ft,diffuseRoughnessMap:he,dispersion:ci,retroreflection:Ae,iridescence:Nt,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:et,sheenColorMap:Se,sheenRoughnessMap:j,specularMap:oe,specularColorMap:ye,specularIntensityMap:D,transmission:at,transmissionMap:se,thicknessMap:Q,gradientMap:me,opaque:y.transparent===!1&&y.blending===Vr&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:we,alphaHash:$e,combine:y.combine,mapUv:Fe&&m(y.map.channel),aoMapUv:fe&&m(y.aoMap.channel),lightMapUv:Ie&&m(y.lightMap.channel),bumpMapUv:Ue&&m(y.bumpMap.channel),normalMapUv:je&&m(y.normalMap.channel),displacementMapUv:Xe&&m(y.displacementMap.channel),emissiveMapUv:ut&&m(y.emissiveMap.channel),metalnessMapUv:gt&&m(y.metalnessMap.channel),roughnessMapUv:Rt&&m(y.roughnessMap.channel),anisotropyMapUv:Si&&m(y.anisotropyMap.channel),clearcoatMapUv:C&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:le&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:j&&m(y.sheenRoughnessMap.channel),specularMapUv:oe&&m(y.specularMap.channel),specularColorMapUv:ye&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:se&&m(y.transmissionMap.channel),thicknessMapUv:Q&&m(y.thicknessMap.channel),alphaMapUv:ge&&m(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(je||B),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Fe||ge),fog:!!ie,useFog:y.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&je===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:pe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:H.filter((Le)=>Le.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Fe&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:ut&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===It,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ze&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&y.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function x(y){let S=[];if(y.shaderID)S.push(y.shaderID);else S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID);if(y.defines!==void 0)for(let R in y.defines)S.push(R),S.push(y.defines[R]);if(y.isRawShaderMaterial===!1)d(S,y),p(S,y),S.push(e.outputColorSpace);return S.push(y.customProgramCacheKey),S.join()}function d(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function p(y,S){if(o.disableAll(),S.instancing)o.enable(0);if(S.instancingColor)o.enable(1);if(S.instancingMorph)o.enable(2);if(S.matcap)o.enable(3);if(S.envMap)o.enable(4);if(S.normalMapObjectSpace)o.enable(5);if(S.normalMapTangentSpace)o.enable(6);if(S.clearcoat)o.enable(7);if(S.iridescence)o.enable(8);if(S.alphaTest)o.enable(9);if(S.vertexColors)o.enable(10);if(S.vertexAlphas)o.enable(11);if(S.vertexUv1s)o.enable(12);if(S.vertexUv2s)o.enable(13);if(S.vertexUv3s)o.enable(14);if(S.vertexTangents)o.enable(15);if(S.anisotropy)o.enable(16);if(S.alphaHash)o.enable(17);if(S.batching)o.enable(18);if(S.dispersion)o.enable(19);if(S.retroreflection)o.enable(24);if(S.diffuseRoughness)o.enable(25);if(S.batchingColor)o.enable(20);if(S.gradientMap)o.enable(21);if(S.packedNormalMap)o.enable(22);if(S.vertexNormals)o.enable(23);if(y.push(o.mask),o.disableAll(),S.fog)o.enable(0);if(S.useFog)o.enable(1);if(S.flatShading)o.enable(2);if(S.logarithmicDepthBuffer)o.enable(3);if(S.reversedDepthBuffer)o.enable(4);if(S.skinning)o.enable(5);if(S.morphTargets)o.enable(6);if(S.morphNormals)o.enable(7);if(S.morphColors)o.enable(8);if(S.premultipliedAlpha)o.enable(9);if(S.shadowMapEnabled)o.enable(10);if(S.doubleSided)o.enable(11);if(S.flipSided)o.enable(12);if(S.useDepthPacking)o.enable(13);if(S.dithering)o.enable(14);if(S.transmission)o.enable(15);if(S.sheen)o.enable(16);if(S.opaque)o.enable(17);if(S.pointsUvs)o.enable(18);if(S.decodeVideoTexture)o.enable(19);if(S.decodeVideoTextureEmissive)o.enable(20);if(S.alphaToCoverage)o.enable(21);if(S.numLightProbeGrids>0)o.enable(22);if(S.hasPositionAttribute)o.enable(23);y.push(o.mask)}function _(y){let S=u[y.type],R;if(S){let U=wn[S];R=cr.clone(U.uniforms)}else R=y.uniforms;return R}function M(y,S){let R=h.get(S);if(R!==void 0)++R.usedTimes;else R=new fx(e,S,y,r),c.push(R),h.set(S,R);return R}function v(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:w}}function mx(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function n(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function R1(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function gx(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function xx(){let e=[],t=0,i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function o(u){let m=0;if(u.isInstancedMesh)m+=2;if(u.isSkinnedMesh)m+=1;return m}function a(u,m,g,x,d,p){let _=e[t];if(_===void 0)_={id:u.id,object:u,geometry:m,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:d,group:p},e[t]=_;else _.id=u.id,_.object=u,_.geometry=m,_.material=g,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=d,_.group=p;return t++,_}function l(u,m,g,x,d,p,_){if(_.reversedDepth===!0)d=-d;let M=a(u,m,g,x,d,p);if(g.transmission>0)n.push(M);else if(g.transparent===!0)r.push(M);else i.push(M)}function c(u,m,g,x,d,p){let _=a(u,m,g,x,d,p);if(g.transmission>0)n.unshift(_);else if(g.transparent===!0)r.unshift(_);else i.unshift(_)}function h(u,m){if(i.length>1)i.sort(u||R1);if(n.length>1)n.sort(m||gx);if(r.length>1)r.sort(m||gx)}function f(){for(let u=t,m=e.length;u<m;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function _x(){let e=new WeakMap;function t(n,r){let s=e.get(n),o;if(s===void 0)o=new xx,e.set(n,[o]);else if(r>=s.length)o=new xx,s.push(o);else o=s[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function C1(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new A,color:new ce};break;case"SpotLight":i={position:new A,direction:new A,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new A,color:new ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new A,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":i={color:new ce,position:new A,halfWidth:new A,halfHeight:new A};break}return e[t.id]=i,i}}}function I1(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var P1=0;function L1(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function yx(e){let t=new C1,i=I1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let r=new A,s=new Ce,o=new Ce;function a(c){let h=0,f=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let m=0,g=0,x=0,d=0,p=0,_=0,M=0,v=0,b=0,w=0,y=0,S=0,R=0,U=0;c.sort(L1);for(let H=0,ie=c.length;H<ie;H++){let I=c[H],{color:Z,intensity:L,distance:N}=I,te=null;if(I.shadow&&I.shadow.map)if(I.shadow.map.texture.format===xn)te=I.shadow.map.texture;else te=I.shadow.map.depthTexture||I.shadow.map.texture;if(I.isAmbientLight)h+=Z.r*L,f+=Z.g*L,u+=Z.b*L;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],L);U++}else if(I.isSunLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,J=i.get(I);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=te;let pe=Y.getViewportCount();for(let X=0;X<pe;X++)n.sunShadowMatrix[x+X]=Y.getMatrix(X),n.sunShadowCascade[x+X]=Y._cascadeData[X];x+=pe,g++}n.sun[m]=z,m++}else if(I.isDirectionalLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,J=i.get(I);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=te,n.directionalShadowMatrix[d]=I.shadow.matrix,b++}n.directional[d]=z,d++}else if(I.isSpotLight){let z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(Z).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[_]=z;let Y=I.shadow;if(I.map){if(n.spotLightMap[S]=I.map,S++,Y.updateMatrices(I),I.castShadow)R++}if(n.spotLightMatrix[_]=Y.matrix,I.castShadow){let J=i.get(I);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=te,y++}_++}else if(I.isRectAreaLight){let z=t.get(I);z.color.copy(Z).multiplyScalar(L),z.halfWidth.set(I.width*0.5,0,0),z.halfHeight.set(0,I.height*0.5,0),n.rectArea[M]=z,M++}else if(I.isPointLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let Y=I.shadow,J=i.get(I);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=I.shadow.matrix,w++}n.point[p]=z,p++}else if(I.isHemisphereLight){let z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(L),z.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[v]=z,v++}}if(M>0)if(e.has("OES_texture_float_linear")===!0)n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2;else n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2;n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;if(P.sunLength!==m||P.directionalLength!==d||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==S||P.numLightProbes!==U)n.sun.length=m,n.directional.length=d,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=U,P.sunLength=m,P.directionalLength=d,P.pointLength=p,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=S,P.numLightProbes=U,n.version=P1++}function l(c,h){let f=0,u=0,m=0,g=0,x=0,d=0,p=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),u++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(v.width*0.5,0,0),b.halfHeight.set(0,v.height*0.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=n.point[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),m++}else if(v.isHemisphereLight){let b=n.hemi[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),d++}}}return{setup:a,setupView:l,state:n}}function Mx(e){let t=new yx(e),i=[],n=[],r=[];function s(f){h.camera=f,i.length=0,n.length=0,r.length=0}function o(f){if(f.isLightProbeGrid)r.push(f);else i.push(f)}function a(f){n.push(f)}function l(){t.setup(i),r.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(i,f)}let h={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vx(e){let t=new WeakMap;function i(r,s=0){let o=t.get(r),a;if(o===void 0)a=new Mx(e),t.set(r,[a]);else if(s>=o.length)a=new Mx(e),o.push(a);else a=o[s];return a}function n(){t=new WeakMap}return{get:i,dispose:n}}var Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,bx=`
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
`;var N1=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],F1=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Tx=new Ce,Wl=new A,sf=new A;function Ex(e,t,i){let n=new Un,r=new k,s=new k,o=new yt,a=new Nl,l=new Fl,c={},h=i.maxTextureSize,f={[cn]:zt,[zt]:cn,[It]:It},u=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new k},radius:{value:4}},vertexShader:Sx,fragmentShader:bx}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new kt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new ee(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let p=this.type;this.render=function(w,y,S){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(w.length===0)return;if(this.type===$f)de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to;let R=e.getRenderTarget(),U=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),H=e.state;if(H.setBlending(In),H.buffers.depth.getReversed()===!0)H.buffers.color.setClear(0,0,0,0);else H.buffers.color.setClear(1,1,1,1);H.buffers.depth.setTest(!0),H.setScissorTest(!1);let ie=p!==this.type;if(ie)y.traverse(function(I){if(I.material)if(Array.isArray(I.material))I.material.forEach((Z)=>Z.needsUpdate=!0);else I.material.needsUpdate=!0});for(let I=0,Z=w.length;I<Z;I++){let L=w[I],N=L.shadow;if(N===void 0){de("WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let te=N.getFrameExtents();if(r.multiply(te),s.copy(N.mapSize),r.x>h||r.y>h){if(r.x>h)s.x=Math.floor(h/te.x),r.x=s.x*te.x,N.mapSize.x=s.x;if(r.y>h)s.y=Math.floor(h/te.y),r.y=s.y*te.y,N.mapSize.y=s.y}let z=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=z,N.map===null||ie===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===Ms){if(L.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Zt(r.x,r.y,{format:xn,type:jt,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),N.map.texture.name=L.name+".shadowMap",N.map.depthTexture=new Sn(r.x,r.y,oi),N.map.depthTexture.name=L.name+".shadowMapDepth",N.map.depthTexture.format=un,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ft,N.map.depthTexture.magFilter=Ft}else{if(L.isPointLight)N.map=new ls(r.x),N.map.depthTexture=new ko(r.x,Ti);else N.map=new Zt(r.x,r.y),N.map.depthTexture=new Sn(r.x,r.y,Ti);if(N.map.depthTexture.name=L.name+".shadowMap",N.map.depthTexture.format=un,this.type===to)N.map.depthTexture.compareFunction=z?Tc:bc,N.map.depthTexture.minFilter=Ot,N.map.depthTexture.magFilter=Ot;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ft,N.map.depthTexture.magFilter=Ft}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y))N.map.setSize(r.x,r.y);let Y=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(L.isPointLight!==!0)N.updateMatrices(L,S);let J=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:S.layers;for(let pe=0;pe<Y;pe++){let X=N.getCamera(pe);if(L.isPointLight){let{camera:ne,matrix:Me}=N,ve=L.distance||ne.far;if(ve!==ne.far)ne.far=ve,ne.updateProjectionMatrix();Wl.setFromMatrixPosition(L.matrixWorld),ne.position.copy(Wl),sf.copy(ne.position),sf.add(N1[pe]),ne.up.copy(F1[pe]),ne.lookAt(sf),ne.updateMatrixWorld(),Me.makeTranslation(-Wl.x,-Wl.y,-Wl.z),Tx.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Tx,ne.coordinateSystem,ne.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,pe),e.clear();else{if(pe===0)e.setRenderTarget(N.map),e.clear();let ne=N.getViewport(pe);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),H.viewport(o)}n=N.getFrustum(pe),v(y,S,X,L,J,this.type)}if(N.isPointLightShadow!==!0&&this.type===Ms)_(N,S);N.needsUpdate=!1}p=this.type,d.needsUpdate=!1,e.setRenderTarget(R,U,P)};function _(w,y){let S=t.update(x);if(u.defines.VSM_SAMPLES!==w.blurSamples)u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new Zt(r.x,r.y,{format:xn,type:jt});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(y,null,S,u,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(y,null,S,m,x,null)}function M(w,y,S,R){let U=null,P=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)U=P;else if(U=S.isPointLight===!0?l:a,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let H=U.uuid,ie=y.uuid,I=c[H];if(I===void 0)I={},c[H]=I;let Z=I[ie];if(Z===void 0)Z=U.clone(),I[ie]=Z,y.addEventListener("dispose",b);U=Z}if(U.visible=y.visible,U.wireframe=y.wireframe,R===Ms)U.side=y.shadowSide!==null?y.shadowSide:y.side;else U.side=y.shadowSide!==null?y.shadowSide:f[y.side];if(U.alphaMap=y.alphaMap,U.alphaTest=y.alphaToCoverage===!0?0.5:y.alphaTest,U.map=y.map,U.clipShadows=y.clipShadows,U.clippingPlanes=y.clippingPlanes,U.clipIntersection=y.clipIntersection,U.displacementMap=y.displacementMap,U.displacementScale=y.displacementScale,U.displacementBias=y.displacementBias,U.wireframeLinewidth=y.wireframeLinewidth,U.linewidth=y.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let H=e.properties.get(U);H.light=S}return U}function v(w,y,S,R,U,P){if(w.visible===!1)return;if(w.layers.test(U)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&P===Ms)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=t.update(w),Z=w.material;if(Array.isArray(Z)){let L=I.groups;for(let N=0,te=L.length;N<te;N++){let z=L[N],Y=Z[z.materialIndex];if(Y&&Y.visible){let J=M(w,Y,R,P);w.onBeforeShadow(e,w,y,S,I,J,z),e.renderBufferDirect(S,null,I,J,w,z),w.onAfterShadow(e,w,y,S,I,J,z)}}}else if(Z.visible){let L=M(w,Z,R,P);w.onBeforeShadow(e,w,y,S,I,L,null),e.renderBufferDirect(S,null,I,L,w,null),w.onAfterShadow(e,w,y,S,I,L,null)}}}let ie=w.children;for(let I=0,Z=ie.length;I<Z;I++)v(ie[I],y,S,R,U,P)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let R=c[S],U=w.target.uuid;if(U in R)R[U].dispose(),delete R[U]}}}function wx(e,t){function i(){let D=!1,se=new yt,Q=null,me=new yt(0,0,0,0);return{setMask:function(ge){if(Q!==ge&&!D)e.colorMask(ge,ge,ge,ge),Q=ge},setLocked:function(ge){D=ge},setClear:function(ge,we,$e,Ze,Pe){if(Pe===!0)ge*=Ze,we*=Ze,$e*=Ze;if(se.set(ge,we,$e,Ze),me.equals(se)===!1)e.clearColor(ge,we,$e,Ze),me.copy(se)},reset:function(){D=!1,Q=null,me.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,Q=null,me=null,ge=null;return{setReversed:function(we){if(se!==we){let $e=t.get("EXT_clip_control");if(we)$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT);else $e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);se=we;let Ze=ge;ge=null,this.setClear(Ze)}},getReversed:function(){return se},setTest:function(we){if(we)Ee(e.DEPTH_TEST);else pt(e.DEPTH_TEST)},setMask:function(we){if(Q!==we&&!D)e.depthMask(we),Q=we},setFunc:function(we){if(se)we=Dd[we];if(me!==we){switch(we){case da:e.depthFunc(e.NEVER);break;case pa:e.depthFunc(e.ALWAYS);break;case ma:e.depthFunc(e.LESS);break;case Xr:e.depthFunc(e.LEQUAL);break;case ga:e.depthFunc(e.EQUAL);break;case xa:e.depthFunc(e.GEQUAL);break;case _a:e.depthFunc(e.GREATER);break;case ya:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}me=we}},setLocked:function(we){D=we},setClear:function(we){if(ge!==we){if(ge=we,se)we=1-we;e.clearDepth(we)}},reset:function(){D=!1,Q=null,me=null,ge=null,se=!1}}}function r(){let D=!1,se=null,Q=null,me=null,ge=null,we=null,$e=null,Ze=null,Pe=null;return{setTest:function(Qe){if(!D)if(Qe)Ee(e.STENCIL_TEST);else pt(e.STENCIL_TEST)},setMask:function(Qe){if(se!==Qe&&!D)e.stencilMask(Qe),se=Qe},setFunc:function(Qe,dt,Le){if(Q!==Qe||me!==dt||ge!==Le)e.stencilFunc(Qe,dt,Le),Q=Qe,me=dt,ge=Le},setOp:function(Qe,dt,Le){if(we!==Qe||$e!==dt||Ze!==Le)e.stencilOp(Qe,dt,Le),we=Qe,$e=dt,Ze=Le},setLocked:function(Qe){D=Qe},setClear:function(Qe){if(Pe!==Qe)e.clearStencil(Qe),Pe=Qe},reset:function(){D=!1,se=null,Q=null,me=null,ge=null,we=null,$e=null,Ze=null,Pe=null}}}let s=new i,o=new n,a=new r,l={},c=new WeakMap,h={},f={},u={},m=new WeakMap,g=[],x=null,d=!1,p=null,_=null,M=null,v=null,b=null,w=null,y=null,S=new ce(0,0,0),R=0,U=!1,P=null,H=null,ie=null,I=null,Z=null,L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,te=0,z=e.getParameter(e.VERSION);if(z.indexOf("WebGL")!==-1)te=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=te>=1;else if(z.indexOf("OpenGL ES")!==-1)te=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=te>=2;let Y=null,J={},pe=e.getParameter(e.SCISSOR_BOX),X=e.getParameter(e.VIEWPORT),ne=new yt().fromArray(pe),Me=new yt().fromArray(X);function ve(D,se,Q,me){let ge=new Uint8Array(4),we=e.createTexture();e.bindTexture(D,we),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let $e=0;$e<Q;$e++)if(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)e.texImage3D(se,0,e.RGBA,1,1,me,0,e.RGBA,e.UNSIGNED_BYTE,ge);else e.texImage2D(se+$e,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return we}let Ge={};Ge[e.TEXTURE_2D]=ve(e.TEXTURE_2D,e.TEXTURE_2D,1),Ge[e.TEXTURE_CUBE_MAP]=ve(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[e.TEXTURE_2D_ARRAY]=ve(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ge[e.TEXTURE_3D]=ve(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ee(e.DEPTH_TEST),o.setFunc(Xr),Ue(!1),je(Jh),Ee(e.CULL_FACE),fe(In);function Ee(D){if(h[D]!==!0)e.enable(D),h[D]=!0}function pt(D){if(h[D]!==!1)e.disable(D),h[D]=!1}function Ne(D,se){if(u[D]!==se){if(e.bindFramebuffer(D,se),u[D]=se,D===e.DRAW_FRAMEBUFFER)u[e.FRAMEBUFFER]=se;if(D===e.FRAMEBUFFER)u[e.DRAW_FRAMEBUFFER]=se;return!0}return!1}function Fe(D,se){let Q=g,me=!1;if(D){if(Q=m.get(se),Q===void 0)Q=[],m.set(se,Q);let ge=D.textures;if(Q.length!==ge.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let we=0,$e=ge.length;we<$e;we++)Q[we]=e.COLOR_ATTACHMENT0+we;Q.length=ge.length,me=!0}}else if(Q[0]!==e.BACK)Q[0]=e.BACK,me=!0;if(me)e.drawBuffers(Q)}function lt(D){if(x!==D)return e.useProgram(D),x=D,!0;return!1}let ae={[Wr]:e.FUNC_ADD,[ed]:e.FUNC_SUBTRACT,[td]:e.FUNC_REVERSE_SUBTRACT};ae[id]=e.MIN,ae[nd]=e.MAX;let ue={[rd]:e.ZERO,[sd]:e.ONE,[od]:e.SRC_COLOR,[ac]:e.SRC_ALPHA,[fd]:e.SRC_ALPHA_SATURATE,[hd]:e.DST_COLOR,[ld]:e.DST_ALPHA,[ad]:e.ONE_MINUS_SRC_COLOR,[lc]:e.ONE_MINUS_SRC_ALPHA,[ud]:e.ONE_MINUS_DST_COLOR,[cd]:e.ONE_MINUS_DST_ALPHA,[dd]:e.CONSTANT_COLOR,[pd]:e.ONE_MINUS_CONSTANT_COLOR,[md]:e.CONSTANT_ALPHA,[gd]:e.ONE_MINUS_CONSTANT_ALPHA};function fe(D,se,Q,me,ge,we,$e,Ze,Pe,Qe){if(D===In){if(d===!0)pt(e.BLEND),d=!1;return}if(d===!1)Ee(e.BLEND),d=!0;if(D!==Qf){if(D!==p||Qe!==U){if(_!==Wr||b!==Wr)e.blendEquation(e.FUNC_ADD),_=Wr,b=Wr;if(Qe)switch(D){case Vr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fa:e.blendFunc(e.ONE,e.ONE);break;case jh:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case $h:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Be("WebGLState: Invalid blending: ",D);break}else switch(D){case Vr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case jh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",D);break}M=null,v=null,w=null,y=null,S.set(0,0,0),R=0,p=D,U=Qe}return}if(ge=ge||se,we=we||Q,$e=$e||me,se!==_||ge!==b)e.blendEquationSeparate(ae[se],ae[ge]),_=se,b=ge;if(Q!==M||me!==v||we!==w||$e!==y)e.blendFuncSeparate(ue[Q],ue[me],ue[we],ue[$e]),M=Q,v=me,w=we,y=$e;if(Ze.equals(S)===!1||Pe!==R)e.blendColor(Ze.r,Ze.g,Ze.b,Pe),S.copy(Ze),R=Pe;p=D,U=!1}function Ie(D,se){D.side===It?pt(e.CULL_FACE):Ee(e.CULL_FACE);let Q=D.side===zt;if(se)Q=!Q;Ue(Q),D.blending===Vr&&D.transparent===!1?fe(In):fe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let me=D.stencilWrite;if(a.setTest(me),me)a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass);ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ee(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){if(P!==D){if(D)e.frontFace(e.CW);else e.frontFace(e.CCW);P=D}}function je(D){if(D!==Jf){if(Ee(e.CULL_FACE),D!==H)if(D===Jh)e.cullFace(e.BACK);else if(D===jf)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else pt(e.CULL_FACE);H=D}function Xe(D){if(D!==ie){if(N)e.lineWidth(D);ie=D}}function ut(D,se,Q){if(D){if(Ee(e.POLYGON_OFFSET_FILL),I!==se||Z!==Q){if(I=se,Z=Q,o.getReversed())se=-se,Q=-Q;e.polygonOffset(se,Q)}}else pt(e.POLYGON_OFFSET_FILL)}function gt(D){if(D)Ee(e.SCISSOR_TEST);else pt(e.SCISSOR_TEST)}function Rt(D){if(D===void 0)D=e.TEXTURE0+L-1;if(Y!==D)e.activeTexture(D),Y=D}function B(D,se,Q){if(Q===void 0)if(Y===null)Q=e.TEXTURE0+L-1;else Q=Y;let me=J[Q];if(me===void 0)me={type:void 0,texture:void 0},J[Q]=me;if(me.type!==D||me.texture!==se){if(Y!==Q)e.activeTexture(Q),Y=Q;e.bindTexture(D,se||Ge[D]),me.type=D,me.texture=se}}function vi(){let D=J[Y];if(D!==void 0&&D.type!==void 0)e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0}function ft(){try{e.compressedTexImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function ci(){try{e.compressedTexImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function Nt(){try{e.texSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function et(){try{e.compressedTexSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function at(){try{e.compressedTexSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function Si(){try{e.texStorage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function C(){try{e.texStorage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function T(){try{e.texImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function V(){try{e.texImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function he(D){if(f[D]!==void 0)return f[D];else return e.getParameter(D)}function le(D,se){if(f[D]!==se)e.pixelStorei(D,se),f[D]=se}function xe(D){if(ne.equals(D)===!1)e.scissor(D.x,D.y,D.z,D.w),ne.copy(D)}function Se(D){if(Me.equals(D)===!1)e.viewport(D.x,D.y,D.z,D.w),Me.copy(D)}function j(D,se){let Q=c.get(se);if(Q===void 0)Q=new WeakMap,c.set(se,Q);let me=Q.get(D);if(me===void 0)me=e.getUniformBlockIndex(se,D.name),e.uniformBlockBinding(se,me,me),Q.set(D,me)}function oe(D,se,Q){let ge=c.get(se).get(D);if(l[ge]!==Q)e.bindBufferBase(e.UNIFORM_BUFFER,ge,Q),l[ge]=Q}function ye(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},f={},Y=null,J={},u={},l={},m=new WeakMap,g=[],x=null,d=!1,p=null,_=null,M=null,v=null,b=null,w=null,y=null,S=new ce(0,0,0),R=0,U=!1,P=null,H=null,ie=null,I=null,Z=null,ne.set(0,0,e.canvas.width,e.canvas.height),Me.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ee,disable:pt,bindFramebuffer:Ne,drawBuffers:Fe,useProgram:lt,setBlending:fe,setMaterial:Ie,setFlipSided:Ue,setCullFace:je,setLineWidth:Xe,setPolygonOffset:ut,setScissorTest:gt,activeTexture:Rt,bindTexture:B,unbindTexture:vi,compressedTexImage2D:ft,compressedTexImage3D:ci,texImage2D:T,texImage3D:V,pixelStorei:le,getParameter:he,updateUBOMapping:j,uniformBlockBinding:oe,texStorage2D:Si,texStorage3D:C,texSubImage2D:Ae,texSubImage3D:Nt,compressedTexSubImage2D:et,compressedTexSubImage3D:at,scissor:xe,viewport:Se,reset:ye}}function Ax(e,t,i,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new k,h=new WeakMap,f=new Set,u,m=new WeakMap,g=new Set,x=new FinalizationRegistry((C)=>g.delete(C)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function p(C,T){return d?new OffscreenCanvas(C,T):Kr("canvas")}function _(C,T,V){let he=1,le=Si(C);if(le.width>V||le.height>V)he=V/Math.max(le.width,le.height);if(he<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let xe=Math.floor(he*le.width),Se=Math.floor(he*le.height);if(u===void 0)u=p(xe,Se);let j=T?p(xe,Se):u;return j.width=xe,j.height=Se,j.getContext("2d").drawImage(C,0,0,xe,Se),de("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+Se+")."),j}else{if("data"in C)de("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+").");return C}return C}function M(C){return C.generateMipmaps}function v(C){e.generateMipmap(C)}function b(C){if(C.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function w(C,T,V,he,le,xe=!1){if(C!==null){if(e[C]!==void 0)return e[C];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Se;if(he){if(Se=t.get("EXT_texture_norm16"),!Se)de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let j=T;if(T===e.RED){if(V===e.FLOAT)j=e.R32F;if(V===e.HALF_FLOAT)j=e.R16F;if(V===e.UNSIGNED_BYTE)j=e.R8;if(V===e.UNSIGNED_SHORT&&Se)j=Se.R16_EXT;if(V===e.SHORT&&Se)j=Se.R16_SNORM_EXT}if(T===e.RED_INTEGER){if(V===e.UNSIGNED_BYTE)j=e.R8UI;if(V===e.UNSIGNED_SHORT)j=e.R16UI;if(V===e.UNSIGNED_INT)j=e.R32UI;if(V===e.BYTE)j=e.R8I;if(V===e.SHORT)j=e.R16I;if(V===e.INT)j=e.R32I}if(T===e.RG){if(V===e.FLOAT)j=e.RG32F;if(V===e.HALF_FLOAT)j=e.RG16F;if(V===e.UNSIGNED_BYTE)j=e.RG8;if(V===e.UNSIGNED_SHORT&&Se)j=Se.RG16_EXT;if(V===e.SHORT&&Se)j=Se.RG16_SNORM_EXT}if(T===e.RG_INTEGER){if(V===e.UNSIGNED_BYTE)j=e.RG8UI;if(V===e.UNSIGNED_SHORT)j=e.RG16UI;if(V===e.UNSIGNED_INT)j=e.RG32UI;if(V===e.BYTE)j=e.RG8I;if(V===e.SHORT)j=e.RG16I;if(V===e.INT)j=e.RG32I}if(T===e.RGB_INTEGER){if(V===e.UNSIGNED_BYTE)j=e.RGB8UI;if(V===e.UNSIGNED_SHORT)j=e.RGB16UI;if(V===e.UNSIGNED_INT)j=e.RGB32UI;if(V===e.BYTE)j=e.RGB8I;if(V===e.SHORT)j=e.RGB16I;if(V===e.INT)j=e.RGB32I}if(T===e.RGBA_INTEGER){if(V===e.UNSIGNED_BYTE)j=e.RGBA8UI;if(V===e.UNSIGNED_SHORT)j=e.RGBA16UI;if(V===e.UNSIGNED_INT)j=e.RGBA32UI;if(V===e.BYTE)j=e.RGBA8I;if(V===e.SHORT)j=e.RGBA16I;if(V===e.INT)j=e.RGBA32I}if(T===e.RGB){if(V===e.UNSIGNED_SHORT&&Se)j=Se.RGB16_EXT;if(V===e.SHORT&&Se)j=Se.RGB16_SNORM_EXT;if(V===e.UNSIGNED_INT_5_9_9_9_REV)j=e.RGB9_E5;if(V===e.UNSIGNED_INT_10F_11F_11F_REV)j=e.R11F_G11F_B10F}if(T===e.RGBA){let oe=xe?As:rt.getTransfer(le);if(V===e.FLOAT)j=e.RGBA32F;if(V===e.HALF_FLOAT)j=e.RGBA16F;if(V===e.UNSIGNED_BYTE)j=oe===_t?e.SRGB8_ALPHA8:e.RGBA8;if(V===e.UNSIGNED_SHORT&&Se)j=Se.RGBA16_EXT;if(V===e.SHORT&&Se)j=Se.RGBA16_SNORM_EXT;if(V===e.UNSIGNED_SHORT_4_4_4_4)j=e.RGBA4;if(V===e.UNSIGNED_SHORT_5_5_5_1)j=e.RGB5_A1}if(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)t.get("EXT_color_buffer_float");return j}function y(C,T){let V;if(C){if(T===null||T===Ti||T===Zn)V=e.DEPTH24_STENCIL8;else if(T===oi)V=e.DEPTH32F_STENCIL8;else if(T===br)V=e.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(T===null||T===Ti||T===Zn)V=e.DEPTH_COMPONENT24;else if(T===oi)V=e.DEPTH_COMPONENT32F;else if(T===br)V=e.DEPTH_COMPONENT16;return V}function S(C,T){if(M(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==Ot)return Math.log2(Math.max(T.width,T.height))+1;else if(C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return T.mipmaps.length;else return 1}function R(C){let T=new WeakRef(C);n.get(C).__ref=T,g.add(T),x.register(C,T,T)}function U(C){let T=n.get(C).__ref;if(T===void 0)return;g.delete(T),x.unregister(T)}function P(C){ie(C.target)}function H(C){I(C.target)}function ie(C){if(C.removeEventListener("dispose",P),U(C),L(C),C.isVideoTexture)h.delete(C);if(C.isHTMLTexture)f.delete(C)}function I(C){C.removeEventListener("dispose",H),U(C),te(C)}function Z(){for(let C of g){let T=C.deref();if(T===void 0)continue;if(T.isRenderTarget===!0)I(T);else ie(T)}g.clear(),f.clear()}function L(C){let T=n.get(C);if(T.__webglInit===void 0)return;let V=C.source,he=m.get(V);if(he){let le=he[T.__cacheKey];if(le.usedTimes--,le.usedTimes===0)N(C);if(Object.keys(he).length===0)m.delete(V)}n.remove(C)}function N(C){let T=n.get(C);e.deleteTexture(T.__webglTexture);let V=C.source,he=m.get(V);delete he[T.__cacheKey],o.memory.textures--}function te(C){let T=n.get(C);if(T.__depthDisposeCallback)T.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C)ie(V);if(C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let xe=0;xe<T.__webglFramebuffer[le].length;xe++)e.deleteFramebuffer(T.__webglFramebuffer[le][xe]);else e.deleteFramebuffer(T.__webglFramebuffer[le]);if(T.__webglDepthbuffer)e.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)e.deleteFramebuffer(T.__webglFramebuffer[le]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer)e.deleteRenderbuffer(T.__webglDepthbuffer);if(T.__webglMultisampledFramebuffer)e.deleteFramebuffer(T.__webglMultisampledFramebuffer);if(T.__webglColorRenderbuffer){for(let le=0;le<T.__webglColorRenderbuffer.length;le++)if(T.__webglColorRenderbuffer[le])e.deleteRenderbuffer(T.__webglColorRenderbuffer[le])}if(T.__webglDepthRenderbuffer)e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let he=C.textures;for(let le=0,xe=he.length;le<xe;le++){let Se=n.get(he[le]);if(Se.__webglTexture)e.deleteTexture(Se.__webglTexture),o.memory.textures--;n.remove(he[le])}n.remove(C)}let z=0;function Y(){z=0}function J(){return z}function pe(C){z=C}function X(){let C=z;if(C>=r.maxTextures)de("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures);return z+=1,C}function ne(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function Me(C,T){let V=n.get(C);if(C.isVideoTexture)et(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let he=C.image;if(he===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(V,C,T);return}}else if(C.isExternalTexture)V.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+T)}function ve(C,T){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ie(V,C,T);return}else if(C.isExternalTexture)V.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+T)}function Ge(C,T){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ie(V,C,T);return}i.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+T)}function Ee(C,T){let V=n.get(C);if(C.version>0&&V.__version!==C.version){Ue(V,C,T);return}i.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+T)}let pt={[hn]:e.REPEAT,[bi]:e.CLAMP_TO_EDGE,[Yr]:e.MIRRORED_REPEAT},Ne={[Ft]:e.NEAREST,[Sa]:e.NEAREST_MIPMAP_NEAREST,[Zr]:e.NEAREST_MIPMAP_LINEAR,[Ot]:e.LINEAR,[Ss]:e.LINEAR_MIPMAP_NEAREST,[Pi]:e.LINEAR_MIPMAP_LINEAR},Fe={[Td]:e.NEVER,[Ec]:e.ALWAYS,[Ed]:e.LESS,[bc]:e.LEQUAL,[wd]:e.EQUAL,[Tc]:e.GEQUAL,[Ad]:e.GREATER,[Rd]:e.NOTEQUAL};function lt(C,T){if(T.type===oi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ot||T.magFilter===Ss||T.magFilter===Zr||T.magFilter===Pi||T.minFilter===Ot||T.minFilter===Ss||T.minFilter===Zr||T.minFilter===Pi))de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(C,e.TEXTURE_WRAP_S,pt[T.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,pt[T.wrapT]),C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texParameteri(C,e.TEXTURE_WRAP_R,pt[T.wrapR]);if(e.texParameteri(C,e.TEXTURE_MAG_FILTER,Ne[T.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Ne[T.minFilter]),T.compareFunction)e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Fe[T.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ft)return;if(T.minFilter!==Zr&&T.minFilter!==Pi)return;if(T.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ae(C,T){let V=!1;if(C.__webglInit===void 0)C.__webglInit=!0,T.addEventListener("dispose",P),R(T);let he=T.source,le=m.get(he);if(le===void 0)le={},m.set(he,le);let xe=ne(T);if(xe!==C.__cacheKey){if(le[xe]===void 0)le[xe]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,V=!0;le[xe].usedTimes++;let Se=le[C.__cacheKey];if(Se!==void 0){if(le[C.__cacheKey].usedTimes--,Se.usedTimes===0)N(T)}C.__cacheKey=xe,C.__webglTexture=le[xe].texture}return V}function ue(C,T,V){return Math.floor(Math.floor(C/V)/T)}function fe(C,T,V,he){let xe=C.updateRanges;if(xe.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,T.width,T.height,V,he,T.data);else{xe.sort((D,se)=>D.start-se.start);let Se=0;for(let D=1;D<xe.length;D++){let se=xe[Se],Q=xe[D],me=se.start+se.count,ge=ue(Q.start,T.width,4),we=ue(se.start,T.width,4);if(Q.start<=me+1&&ge===we&&ue(Q.start+Q.count-1,T.width,4)===ge)se.count=Math.max(se.count,Q.start+Q.count-se.start);else++Se,xe[Se]=Q}xe.length=Se+1;let j=i.getParameter(e.UNPACK_ROW_LENGTH),oe=i.getParameter(e.UNPACK_SKIP_PIXELS),ye=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,T.width);for(let D=0,se=xe.length;D<se;D++){let Q=xe[D],me=Math.floor(Q.start/4),ge=Math.ceil(Q.count/4),we=me%T.width,$e=Math.floor(me/T.width),Ze=ge,Pe=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,we),i.pixelStorei(e.UNPACK_SKIP_ROWS,$e),i.texSubImage2D(e.TEXTURE_2D,0,we,$e,Ze,1,V,he,T.data)}C.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,j),i.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(e.UNPACK_SKIP_ROWS,ye)}}function Ie(C,T,V){let he=e.TEXTURE_2D;if(T.isDataArrayTexture||T.isCompressedArrayTexture)he=e.TEXTURE_2D_ARRAY;if(T.isData3DTexture)he=e.TEXTURE_3D;let le=ae(C,T),xe=T.source;i.bindTexture(he,C.__webglTexture,e.TEXTURE0+V);let Se=n.get(xe);if(xe.version!==Se.__version||le===!0){if(i.activeTexture(e.TEXTURE0+V),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Pe=rt.getPrimaries(rt.workingColorSpace),Qe=T.colorSpace===Ln?null:rt.getPrimaries(T.colorSpace),dt=T.colorSpace===Ln||Pe===Qe?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment);let oe=_(T.image,!1,r.maxTextureSize);oe=at(T,oe);let ye=s.convert(T.format,T.colorSpace),D=s.convert(T.type),se=w(T.internalFormat,ye,D,T.normalized,T.colorSpace,T.isVideoTexture);lt(he,T);let Q,me=T.mipmaps,ge=T.isVideoTexture!==!0,we=Se.__version===void 0||le===!0,$e=xe.dataReady,Ze=S(T,oe);if(T.isDepthTexture){if(se=y(T.format===gn,T.type),we)if(ge)i.texStorage2D(e.TEXTURE_2D,1,se,oe.width,oe.height);else i.texImage2D(e.TEXTURE_2D,0,se,oe.width,oe.height,0,ye,D,null)}else if(T.isDataTexture)if(me.length>0){if(ge&&we)i.texStorage2D(e.TEXTURE_2D,Ze,se,me[0].width,me[0].height);for(let Pe=0,Qe=me.length;Pe<Qe;Pe++)if(Q=me[Pe],ge){if($e)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,Q.width,Q.height,ye,D,Q.data)}else i.texImage2D(e.TEXTURE_2D,Pe,se,Q.width,Q.height,0,ye,D,Q.data);T.generateMipmaps=!1}else if(ge){if(we)i.texStorage2D(e.TEXTURE_2D,Ze,se,oe.width,oe.height);if($e)fe(T,oe,ye,D)}else i.texImage2D(e.TEXTURE_2D,0,se,oe.width,oe.height,0,ye,D,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){if(ge&&we)i.texStorage3D(e.TEXTURE_2D_ARRAY,Ze,se,me[0].width,me[0].height,oe.depth);for(let Pe=0,Qe=me.length;Pe<Qe;Pe++)if(Q=me[Pe],T.format!==Ei)if(ye!==null)if(ge){if($e)if(T.layerUpdates.size>0){let dt=Qu(Q.width,Q.height,T.format,T.type);for(let Le of T.layerUpdates){let Bt=Q.data.subarray(Le*dt/Q.data.BYTES_PER_ELEMENT,(Le+1)*dt/Q.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,Le,Q.width,Q.height,1,ye,Bt)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,0,Q.width,Q.height,oe.depth,ye,Q.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Pe,se,Q.width,Q.height,oe.depth,0,Q.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ge){if($e)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,0,Q.width,Q.height,oe.depth,ye,D,Q.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Pe,se,Q.width,Q.height,oe.depth,0,ye,D,Q.data);if(T.layerUpdates.size>0)T.clearLayerUpdates()}else{if(ge&&we)i.texStorage2D(e.TEXTURE_2D,Ze,se,me[0].width,me[0].height);for(let Pe=0,Qe=me.length;Pe<Qe;Pe++)if(Q=me[Pe],T.format!==Ei)if(ye!==null)if(ge){if($e)i.compressedTexSubImage2D(e.TEXTURE_2D,Pe,0,0,Q.width,Q.height,ye,Q.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Pe,se,Q.width,Q.height,0,Q.data);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ge){if($e)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,Q.width,Q.height,ye,D,Q.data)}else i.texImage2D(e.TEXTURE_2D,Pe,se,Q.width,Q.height,0,ye,D,Q.data)}else if(T.isDataArrayTexture)if(ge){if(we)i.texStorage3D(e.TEXTURE_2D_ARRAY,Ze,se,oe.width,oe.height,oe.depth);if($e)if(T.layerUpdates.size>0){let Pe=Qu(oe.width,oe.height,T.format,T.type);for(let Qe of T.layerUpdates){let dt=oe.data.subarray(Qe*Pe/oe.data.BYTES_PER_ELEMENT,(Qe+1)*Pe/oe.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Qe,oe.width,oe.height,1,ye,D,dt)}T.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,D,oe.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,se,oe.width,oe.height,oe.depth,0,ye,D,oe.data);else if(T.isData3DTexture)if(ge){if(we)i.texStorage3D(e.TEXTURE_3D,Ze,se,oe.width,oe.height,oe.depth);if($e)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,D,oe.data)}else i.texImage3D(e.TEXTURE_3D,0,se,oe.width,oe.height,oe.depth,0,ye,D,oe.data);else if(T.isFramebufferTexture){if(we)if(ge)i.texStorage2D(e.TEXTURE_2D,Ze,se,oe.width,oe.height);else{let Pe=oe.width,Qe=oe.height;for(let dt=0;dt<Ze;dt++)i.texImage2D(e.TEXTURE_2D,dt,se,Pe,Qe,0,ye,D,null),Pe>>=1,Qe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in e){let Pe=e.canvas;if(!Pe.hasAttribute("layoutsubtree"))Pe.setAttribute("layoutsubtree","true");if(oe.parentNode!==Pe){Pe.appendChild(oe),f.add(T),Pe.onpaint=(Qe)=>{let dt=Qe.changedElements;for(let Le of f)if(dt.includes(Le.image))Le.needsUpdate=!0},Pe.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,oe);else{let{RGBA:dt,RGBA:Le,UNSIGNED_BYTE:Bt}=e;e.texElementImage2D(e.TEXTURE_2D,0,dt,Le,Bt,oe)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(me.length>0){if(ge&&we){let Pe=Si(me[0]);i.texStorage2D(e.TEXTURE_2D,Ze,se,Pe.width,Pe.height)}for(let Pe=0,Qe=me.length;Pe<Qe;Pe++)if(Q=me[Pe],ge){if($e)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,ye,D,Q)}else i.texImage2D(e.TEXTURE_2D,Pe,se,ye,D,Q);T.generateMipmaps=!1}else if(ge){if(we){let Pe=Si(oe);i.texStorage2D(e.TEXTURE_2D,Ze,se,Pe.width,Pe.height)}if($e)i.texSubImage2D(e.TEXTURE_2D,0,0,0,ye,D,oe)}else i.texImage2D(e.TEXTURE_2D,0,se,ye,D,oe);if(M(T)&&T.mipmapsAutoUpdate===!0)v(he);if(Se.__version=xe.version,T.onUpdate)T.onUpdate(T)}C.__version=T.version}function Ue(C,T,V){if(T.image.length!==6)return;let he=ae(C,T),le=T.source;i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+V);let xe=n.get(le);if(le.version!==xe.__version||he===!0){i.activeTexture(e.TEXTURE0+V);let Se=rt.getPrimaries(rt.workingColorSpace),j=T.colorSpace===Ln?null:rt.getPrimaries(T.colorSpace),oe=T.colorSpace===Ln||Se===j?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ye=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,se=[];for(let Le=0;Le<6;Le++){if(!ye&&!D)se[Le]=_(T.image[Le],!0,r.maxCubemapSize);else se[Le]=D?T.image[Le].image:T.image[Le];se[Le]=at(T,se[Le])}let Q=se[0],me=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),we=w(T.internalFormat,me,ge,T.normalized,T.colorSpace),$e=T.isVideoTexture!==!0,Ze=xe.__version===void 0||he===!0,Pe=le.dataReady,Qe=S(T,Q);lt(e.TEXTURE_CUBE_MAP,T);let dt;if(T.isDepthTexture){if(we=y(T.format===gn,T.type),Ze)if($e)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,we,Q.width,Q.height);else for(let Le=0;Le<6;Le++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,Q.width,Q.height,0,me,ge,null)}else if(ye){if($e&&Ze)i.texStorage2D(e.TEXTURE_CUBE_MAP,Qe,we,Q.width,Q.height);for(let Le=0;Le<6;Le++){dt=se[Le].mipmaps;for(let Bt=0;Bt<dt.length;Bt++){let Ci=dt[Bt];if(T.format!==Ei)if(me!==null)if($e){if(Pe)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Bt,0,0,Ci.width,Ci.height,me,Ci.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Bt,we,Ci.width,Ci.height,0,Ci.data);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Bt,0,0,Ci.width,Ci.height,me,ge,Ci.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Bt,we,Ci.width,Ci.height,0,me,ge,Ci.data)}}}else{if(dt=T.mipmaps,$e&&Ze){if(dt.length>0)Qe++;let Le=Si(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Qe,we,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(D){if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,se[Le].width,se[Le].height,me,ge,se[Le].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,se[Le].width,se[Le].height,0,me,ge,se[Le].data);for(let Bt=0;Bt<dt.length;Bt++){let Mr=dt[Bt].image[Le].image;if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Bt+1,0,0,Mr.width,Mr.height,me,ge,Mr.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Bt+1,we,Mr.width,Mr.height,0,me,ge,Mr.data)}}else{if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,me,ge,se[Le])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,me,ge,se[Le]);for(let Bt=0;Bt<dt.length;Bt++){let Ci=dt[Bt];if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Bt+1,0,0,me,ge,Ci.image[Le])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Bt+1,we,me,ge,Ci.image[Le])}}}if(M(T)&&T.mipmapsAutoUpdate===!0)v(e.TEXTURE_CUBE_MAP);if(xe.__version=le.version,T.onUpdate)T.onUpdate(T)}C.__version=T.version}function je(C,T,V,he,le,xe){let Se=s.convert(V.format,V.colorSpace),j=s.convert(V.type),oe=w(V.internalFormat,Se,j,V.normalized,V.colorSpace),ye=n.get(T),D=n.get(V);if(D.__renderTarget=T,!ye.__hasExternalTextures){let se=Math.max(1,T.width>>xe),Q=Math.max(1,T.height>>xe);if(le===e.TEXTURE_3D||le===e.TEXTURE_2D_ARRAY)i.texImage3D(le,xe,oe,se,Q,T.depth,0,Se,j,null);else i.texImage2D(le,xe,oe,se,Q,0,Se,j,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,C),Nt(T))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,le,D.__webglTexture,0,Ae(T));else if(le===e.TEXTURE_2D||le>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,he,le,D.__webglTexture,xe);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Xe(C,T,V){if(e.bindRenderbuffer(e.RENDERBUFFER,C),T.depthBuffer){let he=T.depthTexture,le=he&&he.isDepthTexture?he.type:null,xe=y(T.stencilBuffer,le),Se=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(Nt(T))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(T),xe,T.width,T.height);else if(V)e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(T),xe,T.width,T.height);else e.renderbufferStorage(e.RENDERBUFFER,xe,T.width,T.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,C)}else{let he=T.textures;for(let le=0;le<he.length;le++){let xe=he[le],Se=s.convert(xe.format,xe.colorSpace),j=s.convert(xe.type),oe=w(xe.internalFormat,Se,j,xe.normalized,xe.colorSpace);if(Nt(T))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(T),oe,T.width,T.height);else if(V)e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(T),oe,T.width,T.height);else e.renderbufferStorage(e.RENDERBUFFER,oe,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ut(C,T,V){let he=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(T.depthTexture);le.__renderTarget=T;let xe=he?T.depthTexture.image[0]:T.depthTexture.image;if(!le.__webglTexture||xe.width!==T.width||xe.height!==T.height)xe.width=T.width,xe.height=T.height,T.depthTexture.needsUpdate=!0;if(he)Ee(T.depthTexture,0);else Me(T.depthTexture,0);let Se=le.__webglTexture,j=Ae(T),oe=he?e.TEXTURE_CUBE_MAP_POSITIVE_X+V:e.TEXTURE_2D,ye=T.depthTexture.format===gn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(T.depthTexture.format===un)if(Nt(T))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ye,oe,Se,0,j);else e.framebufferTexture2D(e.FRAMEBUFFER,ye,oe,Se,0);else if(T.depthTexture.format===gn)if(Nt(T))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ye,oe,Se,0,j);else e.framebufferTexture2D(e.FRAMEBUFFER,ye,oe,Se,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(C){let T=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let he=C.depthTexture;if(T.__depthDisposeCallback)T.__depthDisposeCallback();if(he){let le=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",le)};he.addEventListener("dispose",le),T.__depthDisposeCallback=le}T.__boundDepthTexture=he}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let he=0;he<6;he++)ut(T.__webglFramebuffer[he],C,he);else if(C.texture.mipmaps.length>0)ut(T.__webglFramebuffer[0],C,0);else ut(T.__webglFramebuffer,C,0);else if(V){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=e.createRenderbuffer(),Xe(T.__webglDepthbuffer[he],C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[he];e.bindRenderbuffer(e.RENDERBUFFER,xe),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,xe)}}else{if(C.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer);if(T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=e.createRenderbuffer(),Xe(T.__webglDepthbuffer,C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,xe),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,xe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Rt(C,T,V){let he=n.get(C);if(T!==void 0)je(he.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(V!==void 0)gt(C)}function B(C){let T=C.texture,V=n.get(C),he=n.get(T);C.addEventListener("dispose",H),R(C);let le=C.textures,xe=C.isWebGLCubeRenderTarget===!0,Se=le.length>1;if(!Se){if(he.__webglTexture===void 0)he.__webglTexture=e.createTexture();he.__version=T.version,o.memory.textures++}if(xe){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(T.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let oe=0;oe<T.mipmaps.length;oe++)V.__webglFramebuffer[j][oe]=e.createFramebuffer()}else V.__webglFramebuffer[j]=e.createFramebuffer()}else{if(T.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<T.mipmaps.length;j++)V.__webglFramebuffer[j]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(Se)for(let j=0,oe=le.length;j<oe;j++){let ye=n.get(le[j]);if(ye.__webglTexture===void 0)ye.__webglTexture=e.createTexture(),o.memory.textures++}if(C.samples>0&&Nt(C)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<le.length;j++){let oe=le[j];V.__webglColorRenderbuffer[j]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[j]);let ye=s.convert(oe.format,oe.colorSpace),D=s.convert(oe.type),se=w(oe.internalFormat,ye,D,oe.normalized,oe.colorSpace,C.isXRRenderTarget===!0),Q=Ae(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Q,se,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+j,e.RENDERBUFFER,V.__webglColorRenderbuffer[j])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer)V.__webglDepthRenderbuffer=e.createRenderbuffer(),Xe(V.__webglDepthRenderbuffer,C,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(xe){i.bindTexture(e.TEXTURE_CUBE_MAP,he.__webglTexture),lt(e.TEXTURE_CUBE_MAP,T);for(let j=0;j<6;j++)if(T.mipmaps.length>0)for(let oe=0;oe<T.mipmaps.length;oe++)je(V.__webglFramebuffer[j][oe],C,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe);else je(V.__webglFramebuffer[j],C,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);if(M(T))v(e.TEXTURE_CUBE_MAP);else if(T.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,T.mipmaps.length-1);i.unbindTexture()}else if(Se){for(let j=0,oe=le.length;j<oe;j++){let ye=le[j],D=n.get(ye),se=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)se=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(se,D.__webglTexture),lt(se,ye),je(V.__webglFramebuffer,C,ye,e.COLOR_ATTACHMENT0+j,se,0),M(ye))v(se)}i.unbindTexture()}else{let j=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)j=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(j,he.__webglTexture),lt(j,T),T.mipmaps.length>0)for(let oe=0;oe<T.mipmaps.length;oe++)je(V.__webglFramebuffer[oe],C,T,e.COLOR_ATTACHMENT0,j,oe);else je(V.__webglFramebuffer,C,T,e.COLOR_ATTACHMENT0,j,0);if(M(T))v(j);else if(T.mipmaps.length>0)e.texParameteri(j,e.TEXTURE_MAX_LEVEL,T.mipmaps.length-1);i.unbindTexture()}if(C.depthBuffer)gt(C)}function vi(C){let T=C.textures;for(let V=0,he=T.length;V<he;V++){let le=T[V];if(M(le)&&le.mipmapsAutoUpdate===!0){let xe=b(C),Se=n.get(le).__webglTexture;i.bindTexture(xe,Se),v(xe),i.unbindTexture()}}}let ft=[];function ci(C){if(C.samples>0){if(Nt(C)===!1){let{textures:T,width:V,height:he}=C,le=e.COLOR_BUFFER_BIT,xe=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=n.get(C),j=T.length>1;if(j)for(let ye=0;ye<T.length;ye++)i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(C.resolveDepthBuffer){if(C.depthBuffer)le|=e.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)le|=e.STENCIL_BUFFER_BIT}if(j){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);let D=n.get(T[ye]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,D,0)}if(e.blitFramebuffer(0,0,V,he,0,0,V,he,le,e.NEAREST),l===!0){if(ft.length=0,ft.push(e.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)ft.push(xe);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ft)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),j)for(let ye=0;ye<T.length;ye++){i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);let D=n.get(T[ye]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,D,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function Ae(C){return Math.min(r.maxSamples,C.samples)}function Nt(C){let T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function et(C){let T=o.render.frame;if(h.get(C)!==T)h.set(C,T),C.update()}function at(C,T){let{colorSpace:V,format:he,type:le}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return T;if(V!==Hi&&V!==Ln)if(rt.getTransfer(V)===_t){if(he!==Ei||le!==hi)de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Be("WebGLTextures: Unsupported texture color space:",V);return T}function Si(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)c.width=C.displayWidth,c.height=C.displayHeight;else c.width=C.width,c.height=C.height;return c}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.getTextureUnits=J,this.setTextureUnits=pe,this.setTexture2D=Me,this.setTexture2DArray=ve,this.setTexture3D=Ge,this.setTextureCube=Ee,this.rebindTextures=Rt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=vi,this.updateMultisampleRenderTarget=ci,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=je,this.useMultisampledRTT=Nt,this.dispose=Z}function of(e,t){function i(n,r=Ln){let s,o=rt.getTransfer(r);if(n===hi)return e.UNSIGNED_BYTE;if(n===co)return e.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return e.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===hc)return e.BYTE;if(n===uc)return e.SHORT;if(n===br)return e.UNSIGNED_SHORT;if(n===lo)return e.INT;if(n===Ti)return e.UNSIGNED_INT;if(n===oi)return e.FLOAT;if(n===jt)return e.HALF_FLOAT;if(n===pc)return e.ALPHA;if(n===mc)return e.RGB;if(n===Ei)return e.RGBA;if(n===un)return e.DEPTH_COMPONENT;if(n===gn)return e.DEPTH_STENCIL;if(n===uo)return e.RED;if(n===bs)return e.RED_INTEGER;if(n===xn)return e.RG;if(n===fo)return e.RG_INTEGER;if(n===po)return e.RGBA_INTEGER;if(n===mo||n===go||n===xo||n===_o)if(o===_t)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Ta||n===Ea||n===wa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===Ts||n===La)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Aa||n===Ra)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ia)return s.COMPRESSED_R11_EAC;if(n===Pa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ts)return s.COMPRESSED_RG11_EAC;if(n===La)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Da||n===Na||n===Fa||n===Ua||n===Ba||n===Oa||n===Ha||n===Ga||n===za||n===ka||n===Va||n===Wa||n===Xa||n===qa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Da)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===Za||n===Ka)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ya)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===ja||n===Es||n===$a)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ja)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Es)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(n===Zn)return e.UNSIGNED_INT_24_8;return e[n]!==void 0?e[n]:null}return{convert:i}}var U1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B1=`
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

}`;class af{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Vo(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Qt({vertexShader:U1,fragmentShader:B1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new Vt(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lf extends wi{constructor(e,t){super();let i=this,n=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,h=null,f=null,u=null,m=null,g=typeof XRWebGLBinding<"u",x=new af,d={},p=t.getContextAttributes(),_=null,M=null,v=[],b=[],w=new k,y=null,S=null,R=new Kt;R.viewport=new yt;let U=new Kt;U.viewport=new yt;let P=[R,U],H=new Mh,ie=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=v[X];if(ne===void 0)ne=new Ao,v[X]=ne;return ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=v[X];if(ne===void 0)ne=new Ao,v[X]=ne;return ne.getGripSpace()},this.getHand=function(X){let ne=v[X];if(ne===void 0)ne=new Ao,v[X]=ne;return ne.getHandSpace()};function Z(X){let ne=b.indexOf(X.inputSource);if(ne===-1)return;let Me=v[ne];if(Me!==void 0)Me.update(X.inputSource,X.frame,l||s),Me.dispatchEvent({type:X.type,data:X.inputSource})}function L(){n.removeEventListener("select",Z),n.removeEventListener("selectstart",Z),n.removeEventListener("selectend",Z),n.removeEventListener("squeeze",Z),n.removeEventListener("squeezestart",Z),n.removeEventListener("squeezeend",Z),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",N);for(let X=0;X<v.length;X++){let ne=b[X];if(ne===null)continue;b[X]=null,v[X].disconnect(ne)}ie=null,I=null,x.reset();for(let X in d)delete d[X];if(e.setRenderTarget(_),u=null,f=null,h=null,n=null,M=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),S!==null){let X=S.camera;X.fov=S.fov,X.zoom=S.zoom,X.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){if(r=X,i.isPresenting===!0)de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){if(o=X,i.isPresenting===!0)de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(n,t);return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",Z),n.addEventListener("selectstart",Z),n.addEventListener("selectend",Z),n.addEventListener("squeeze",Z),n.addEventListener("squeezestart",Z),n.addEventListener("squeezeend",Z),n.addEventListener("end",L),n.addEventListener("inputsourceschange",N),p.xrCompatible!==!0)await t.makeXRCompatible();if(y=e.getPixelRatio(),e.getSize(w),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,Me),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Zt(u.framebufferWidth,u.framebufferHeight,{format:Ei,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me=null,ve=null,Ge=null;if(p.depth)Ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=p.stencil?gn:un,ve=p.stencil?Zn:Ti;let Ee={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ee),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Zt(f.textureWidth,f.textureHeight,{format:Ei,type:hi,depthTexture:new Sn(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await n.requestReferenceSpace(o),pe.setContext(n),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(X){for(let ne=0;ne<X.removed.length;ne++){let Me=X.removed[ne],ve=b.indexOf(Me);if(ve>=0)b[ve]=null,v[ve].disconnect(Me)}for(let ne=0;ne<X.added.length;ne++){let Me=X.added[ne],ve=b.indexOf(Me);if(ve===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=b.length){b.push(Me),ve=Ee;break}else if(b[Ee]===null){b[Ee]=Me,ve=Ee;break}if(ve===-1)break}let Ge=v[ve];if(Ge)Ge.connect(Me)}}function te(X,ne){if(ne===null)X.matrixWorld.copy(X.matrix);else X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix);X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let{near:ne,far:Me}=X;if(x.texture!==null){if(x.depthNear>0)ne=x.depthNear;if(x.depthFar>0)Me=x.depthFar}if(H.near=U.near=R.near=ne,H.far=U.far=R.far=Me,ie!==H.near||I!==H.far)n.updateRenderState({depthNear:H.near,depthFar:H.far}),ie=H.near,I=H.far;H.layers.mask=X.layers.mask|6,R.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let ve=X.parent,Ge=H.cameras;te(H,ve);for(let Ee=0;Ee<Ge.length;Ee++)te(Ge[Ee],ve);if(H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),S===null&&X.isPerspectiveCamera)S={camera:X,fov:X.fov,zoom:X.zoom};z(X,H,ve)};function z(X,ne,Me){if(Me===null)X.matrix.copy(ne.matrixWorld);else X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld);if(X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera)X.fov=wr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1}this.getCamera=function(){return H},this.getFoveation=function(){if(f===null&&u===null)return;return a},this.setFoveation=function(X){if(a=X,f!==null)f.fixedFoveation=X;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=X},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(X){return d[X]};let Y=null;function J(X,ne){if(c=ne.getViewerPose(l||s),m=ne,c!==null){let Me=c.views;if(u!==null)e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M);let ve=!1;if(Me.length!==H.cameras.length)H.cameras.length=0,ve=!0;for(let Ne=0;Ne<Me.length;Ne++){let Fe=Me[Ne],lt=null;if(u!==null)lt=u.getViewport(Fe);else{let ue=h.getViewSubImage(f,Fe);if(lt=ue.viewport,Ne===0)e.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(M)}let ae=P[Ne];if(ae===void 0)ae=new Kt,ae.layers.enable(Ne),ae.viewport=new yt,P[Ne]=ae;if(ae.matrix.fromArray(Fe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Fe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(lt.x,lt.y,lt.width,lt.height),Ne===0)H.matrix.copy(ae.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);if(ve===!0)H.cameras.push(ae)}let Ge=n.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let Ne=h.getDepthInformation(Me[0]);if(Ne&&Ne.isValid&&Ne.texture)x.init(Ne,n.renderState)}if(Ge&&Ge.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let Ne=0;Ne<Me.length;Ne++){let Fe=Me[Ne].camera;if(Fe){let lt=d[Fe];if(!lt)lt=new Vo,d[Fe]=lt;let ae=h.getCameraImage(Fe);lt.sourceTexture=ae}}}}for(let Me=0;Me<v.length;Me++){let ve=b[Me],Ge=v[Me];if(ve!==null&&Ge!==void 0)Ge.update(ve,ne,l||s)}if(Y)Y(X,ne);if(ne.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:ne});m=null}let pe=new bh;pe.setAnimationLoop(J),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}}var O1=new Ce,Rx=new Ke;Rx.set(-1,0,0,0,1,0,0,0,1);function Cx(e,t){function i(d,p){if(d.matrixAutoUpdate===!0)d.updateMatrix();p.value.copy(d.matrix)}function n(d,p){if(p.color.getRGB(d.fogColor.value,uh(e)),p.isFog)d.fogNear.value=p.near,d.fogFar.value=p.far;else if(p.isFogExp2)d.fogDensity.value=p.density}function r(d,p,_,M,v){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)s(d,p);else if(p.isMeshLambertMaterial){if(s(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)s(d,p),f(d,p);else if(p.isMeshPhongMaterial){if(s(d,p),h(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(s(d,p),u(d,p),p.isMeshPhysicalMaterial)m(d,p,v)}else if(p.isMeshMatcapMaterial)s(d,p),g(d,p);else if(p.isMeshDepthMaterial)s(d,p);else if(p.isMeshDistanceMaterial)s(d,p),x(d,p);else if(p.isMeshNormalMaterial)s(d,p);else if(p.isLineBasicMaterial){if(o(d,p),p.isLineDashedMaterial)a(d,p)}else if(p.isPointsMaterial)l(d,p,_,M);else if(p.isSpriteMaterial)c(d,p);else if(p.isShadowMaterial)d.color.value.copy(p.color),d.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function s(d,p){if(d.opacity.value=p.opacity,p.color)d.diffuse.value.copy(p.color);if(p.emissive)d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.bumpMap){if(d.bumpMap.value=p.bumpMap,i(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===zt)d.bumpScale.value*=-1}if(p.normalMap){if(d.normalMap.value=p.normalMap,i(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===zt)d.normalScale.value.negate()}if(p.displacementMap)d.displacementMap.value=p.displacementMap,i(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias;if(p.emissiveMap)d.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,d.emissiveMapTransform);if(p.specularMap)d.specularMap.value=p.specularMap,i(p.specularMap,d.specularMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest;let _=t.get(p),{envMap:M,envMapRotation:v}=_;if(M){if(d.envMap.value=M,d.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)d.envMapRotation.value.premultiply(Rx);d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio}if(p.lightMap)d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,d.lightMapTransform);if(p.aoMap)d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,d.aoMapTransform)}function o(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map)d.map.value=p.map,i(p.map,d.mapTransform)}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,_,M){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=M*0.5,p.map)d.map.value=p.map,i(p.map,d.uvTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function c(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,0.0001)}function f(d,p){if(p.gradientMap)d.gradientMap.value=p.gradientMap}function u(d,p){if(d.metalness.value=p.metalness,p.metalnessMap)d.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,d.metalnessMapTransform);if(d.roughness.value=p.roughness,p.roughnessMap)d.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,d.roughnessMapTransform);if(p.envMap)d.envMapIntensity.value=p.envMapIntensity}function m(d,p,_){if(d.ior.value=p.ior,p.diffuseRoughness>0){if(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap)d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,i(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform)}if(p.sheen>0){if(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)d.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,d.sheenColorMapTransform);if(p.sheenRoughnessMap)d.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,d.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)d.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,d.clearcoatMapTransform);if(p.clearcoatRoughnessMap)d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(d.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt)d.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)d.dispersion.value=p.dispersion;if(p.retroreflectivity>0)d.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap)d.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,d.iridescenceMapTransform);if(p.iridescenceThicknessMap)d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform)}if(p.transmission>0){if(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap)d.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,d.transmissionMapTransform);if(d.thickness.value=p.thickness,p.thicknessMap)d.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,d.thicknessMapTransform);d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)d.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,d.anisotropyMapTransform)}if(d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap)d.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,d.specularColorMapTransform);if(p.specularIntensityMap)d.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,d.specularIntensityMapTransform)}function g(d,p){if(p.matcap)d.matcap.value=p.matcap}function x(d,p){let _=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(_.matrixWorld),d.nearDistance.value=_.shadow.camera.near,d.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ix(e,t,i,n){let r={},s={};function o(_,M){let v=M.program;n.uniformBlockBinding(_,v,r[_.id])}function a(_,M){let v=r[_.id];if(v===void 0)g(_),v=l(_),r[_.id]=v,_.addEventListener("dispose",d);let b=M.program;n.updateUBOMapping(_,b);let w=t.render.frame;if(s[_.id]!==w)c(_),s[_.id]=w}function l(_){let M=e.createBuffer(),{__size:v,usage:b}=_;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,v,b),e.bindBuffer(e.UNIFORM_BUFFER,null),M}function c(_){let M=r[_.id],{uniforms:v,__cache:b}=_;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let w=0,y=v.length;w<y;w++){let S=v[w];if(Array.isArray(S))for(let R=0,U=S.length;R<U;R++)h(S[R],w,R,b);else h(S,w,0,b)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(_,M,v,b){if(u(_,M,v,b)===!0){let{__offset:w,value:y}=_;if(Array.isArray(y)){let S=0;for(let R=0;R<y.length;R++){let U=y[R],P=x(U,!0);f(U,_.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(y,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,_.__data)}}function f(_,M,v){if(typeof _==="number"||typeof _==="boolean")M[v]=_;else if(_.isMatrix3)M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0;else if(ArrayBuffer.isView(_))M.set(_.subarray(0,M.length-v),v);else _.toArray(M,v)}function u(_,M,v,b){let w=_.value,y=M+"_"+v;if(Array.isArray(w)){if(b[y]===void 0)b[y]=[];let S=b[y],R=!1;for(let U=0;U<w.length;U++)if(m(w[U],S,U)===!0)R=!0;return R}return m(w,b,y)}function m(_,M,v){if(M[v]===void 0){if(typeof _==="number"||typeof _==="boolean")M[v]=_;else if(ArrayBuffer.isView(_))M[v]=_.slice();else M[v]=_.clone();return!0}else{let b=M[v];if(typeof _==="number"||typeof _==="boolean"){if(b!==_)return M[v]=_,!0}else if(ArrayBuffer.isView(_))return!0;else if(b.equals(_)===!1)return b.copy(_),!0}return!1}function g(_){let M=_.uniforms,v=0,b=16;for(let y=0,S=M.length;y<S;y++){let R=Array.isArray(M[y])?M[y]:[M[y]];for(let U=0,P=R.length;U<P;U++){let H=R[U],ie=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(M[y])||Array.isArray(H.value),Z=v;for(let N=0,te=ie.length;N<te;N++){let z=ie[N],Y=x(z,I),J=v%b,pe=J%Y.boundary,X=J+pe;if(v+=pe,X!==0&&b-X<Y.storage)v+=b-X;if(N===0)Z=v;v+=Y.storage}let L=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new L((v-Z)/Float32Array.BYTES_PER_ELEMENT),H.__offset=Z}}let w=v%b;if(w>0)v+=b-w;return _.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")v.boundary=4,v.storage=4;else if(_.isVector2)v.boundary=8,v.storage=8;else if(_.isVector3||_.isColor)v.boundary=16,v.storage=12;else if(_.isVector4)v.boundary=16,v.storage=16;else if(_.isMatrix3)v.boundary=16,v.storage=48;else if(_.isMatrix4)v.boundary=16,v.storage=64;else if(_.isTexture)de("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(_))v.boundary=16,v.storage=_.byteLength;else de("WebGLRenderer: Unsupported uniform value type.",_);if(M===!0)v.boundary=16,v.storage=Math.ceil(v.storage/16)*16;return v}function d(_){let M=_.target;M.removeEventListener("dispose",d),e.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let _ in r)e.deleteBuffer(r[_]);r={},s={}}return{bind:o,update:a,dispose:p}}var H1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dr=null;function Px(){if(dr===null)dr=new er(H1,16,16,xn,jt),dr.name="DFG_LUT",dr.minFilter=Ot,dr.magFilter=Ot,dr.wrapS=bi,dr.wrapT=bi,dr.generateMipmaps=!1,dr.needsUpdate=!0;return dr}class Rh{constructor(e={}){let{canvas:t=nu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:u=hi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let g=u,x=new Set([po,fo,bs]),d=new Set([hi,Ti,br,Zn,co,ho]),p=new Uint32Array(4),_=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},v=null,b=null,w=[],y=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,P=null,H=null,ie=null,I=null;this._outputColorSpace=xt;let Z=0,L=0,N=null,te=-1,z=null,Y=new yt,J=new yt,pe=null,X=new ce(0),ne=0,{width:Me,height:ve}=t,Ge=1,Ee=null,pt=null,Ne=new yt(0,0,Me,ve),Fe=new yt(0,0,Me,ve),lt=!1,ae=new Un,ue=new zo,fe=!1,Ie=!1,Ue=new Ce,je=new A,Xe=new yt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Rt(){return N===null?Ge:1}let B=i;function vi(E,F){return t.getContext(E,F)}let ft,ci,Ae,Nt,et,at,Si,C,T,V,he,le,xe,Se,j,oe,ye,D,se,Q,me,ge,we;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${ua}`);if(t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",dt,!1),B===null){if(B=vi("webgl2",E),B===null)if(vi("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(E){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Be("WebGLRenderer: "+E.message),E}function $e(){if(ft=new Og(B),ft.init(),me=new of(B,ft),ci=new Cg(B,ft,e,me),Ae=new wx(B,ft),ci.reversedDepthBuffer&&f)Ae.buffers.depth.setReversed(!0);H=B.createFramebuffer(),ie=B.createFramebuffer(),I=B.createFramebuffer(),Nt=new zg(B),et=new mx,at=new Ax(B,ft,Ae,et,ci,me,Nt),Si=new Bg(R),C=new Xp(B),ge=new Ag(B,C),T=new Hg(B,C,Nt,ge),V=new Vg(B,T,C,ge,Nt),D=new kg(B,ci,at),j=new Ig(et),he=new px(R,Si,ft,ci,ge,j),le=new Cx(R,et),xe=new _x,Se=new vx(ft),ye=new wg(R,Si,Ae,V,m,a),oe=new Ex(R,V,ci),we=new Ix(B,Nt,ci,Ae),se=new Rg(B,ft,Nt),Q=new Gg(B,ft,Nt),Nt.programs=he.programs,R.capabilities=ci,R.extensions=ft,R.properties=et,R.renderLists=xe,R.shadowMap=oe,R.state=Ae,R.info=Nt}if(g!==hi)S=new Wg(g,t.width,t.height,o,n,r);let Ze=new lf(R,B);this.xr=Ze,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=ft.get("WEBGL_lose_context");if(E)E.loseContext()},this.forceContextRestore=function(){let E=ft.get("WEBGL_lose_context");if(E)E.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(E){if(E===void 0)return;Ge=E,this.setSize(Me,ve,!1)},this.getSize=function(E){return E.set(Me,ve)},this.setSize=function(E,F,K=!0){if(Ze.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Me=E,ve=F,t.width=Math.floor(E*Ge),t.height=Math.floor(F*Ge),K===!0)t.style.width=E+"px",t.style.height=F+"px";if(S!==null)S.setSize(t.width,t.height);this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Me*Ge,ve*Ge).floor()},this.setDrawingBufferSize=function(E,F,K){Me=E,ve=F,Ge=K,t.width=Math.floor(E*K),t.height=Math.floor(F*K),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(g===hi){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(Ne)},this.setViewport=function(E,F,K,W){if(E.isVector4)Ne.set(E.x,E.y,E.z,E.w);else Ne.set(E,F,K,W);Ae.viewport(Y.copy(Ne).multiplyScalar(Rt()).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,F,K,W){if(E.isVector4)Fe.set(E.x,E.y,E.z,E.w);else Fe.set(E,F,K,W);Ae.scissor(J.copy(Fe).multiplyScalar(Rt()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){Ae.setScissorTest(lt=E)},this.setOpaqueSort=function(E){Ee=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,K=!0){let W=0;if(E){let q=!1;if(N!==null){let be=N.texture.format;q=x.has(be)}if(q){let be=N.texture.type,ze=d.has(be),Te=ye.getClearColor(),De=ye.getClearAlpha(),{r:qe,g:ct,b:vt}=Te;if(ze)p[0]=qe,p[1]=ct,p[2]=vt,p[3]=De,B.clearBufferuiv(B.COLOR,0,p);else _[0]=qe,_[1]=ct,_[2]=vt,_[3]=De,B.clearBufferiv(B.COLOR,0,_)}else W|=B.COLOR_BUFFER_BIT}if(F)W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(K)W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(W!==0)B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),ye.dispose(),xe.dispose(),Se.dispose(),at.dispose(),et.dispose(),Si.dispose(),V.dispose(),T.dispose(),ge.dispose(),we.dispose(),he.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Gf),Ze.removeEventListener("sessionend",zf),xs.stop()};function Pe(E){E.preventDefault(),Rs("WebGLRenderer: Context Lost."),U=!0}function Qe(){Rs("WebGLRenderer: Context Restored."),U=!1;let E=Nt.autoReset,F=oe.enabled,K=oe.autoUpdate,W=oe.needsUpdate,q=oe.type;$e(),Nt.autoReset=E,oe.enabled=F,oe.autoUpdate=K,oe.needsUpdate=W,oe.type=q}function dt(E){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){let F=E.target;F.removeEventListener("dispose",Le),Bt(F)}function Bt(E){Ci(E),et.remove(E)}function Ci(E){let F=et.get(E).programs;if(F!==void 0){if(F.forEach(function(K){he.releaseProgram(K)}),E.isShaderMaterial)he.releaseShaderCache(E)}}this.renderBufferDirect=function(E,F,K,W,q,be){if(F===null)F=ut;let ze=q.isMesh&&q.matrixWorld.determinantAffine()<0,Te=X_(E,F,K,W,q);Ae.setMaterial(W,ze);let De=K.index,qe=1;if(W.wireframe===!0){if(De=T.getWireframeAttribute(K),De===void 0)return;qe=2}let ct=K.drawRange,vt=K.attributes.position,ke=ct.start*qe,St=(ct.start+ct.count)*qe;if(be!==null)ke=Math.max(ke,be.start*qe),St=Math.min(St,(be.start+be.count)*qe);if(De!==null)ke=Math.max(ke,0),St=Math.min(St,De.count);else if(vt!==void 0&&vt!==null)ke=Math.max(ke,0),St=Math.min(St,vt.count);let mi=St-ke;if(mi<0||mi===1/0)return;ge.setup(q,W,Te,K,De);let qt,Gt=se;if(De!==null)qt=C.get(De),Gt=Q,Gt.setIndex(qt);if(q.isMesh)if(W.wireframe===!0)Ae.setLineWidth(W.wireframeLinewidth*Rt()),Gt.setMode(B.LINES);else Gt.setMode(B.TRIANGLES);else if(q.isLine){let Xi=W.linewidth;if(Xi===void 0)Xi=1;if(Ae.setLineWidth(Xi*Rt()),q.isLineSegments)Gt.setMode(B.LINES);else if(q.isLineLoop)Gt.setMode(B.LINE_LOOP);else Gt.setMode(B.LINE_STRIP)}else if(q.isPoints)Gt.setMode(B.POINTS);else if(q.isSprite)Gt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(!ft.get("WEBGL_multi_draw")){let{_multiDrawStarts:Xi,_multiDrawCounts:Ve,_multiDrawCount:rn}=q,Ct=De?C.get(De).bytesPerElement:1,_s=et.get(W).currentProgram.getUniforms();for(let qi=0;qi<rn;qi++)_s.setValue(B,"_gl_DrawID",qi),Gt.render(Xi[qi]/Ct,Ve[qi])}else Gt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Gt.renderInstances(ke,mi,q.count);else if(K.isInstancedBufferGeometry){let Xi=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ve=Math.min(K.instanceCount,Xi);Gt.renderInstances(ke,mi,Ve)}else Gt.render(ke,mi)};function Mr(E,F,K,W){if(P!==null&&E.isNodeMaterial)P.setObject(W,E);if(fe===!0)j.setState(E,K,!1);if(E.transparent===!0&&E.side===It&&E.forceSinglePass===!1)E.side=zt,E.needsUpdate=!0,ha(E,F,W),E.side=cn,E.needsUpdate=!0,ha(E,F,W),E.side=It;else ha(E,F,W)}this.compile=function(E,F,K=null){if(K===null)K=E;if(P!==null)P.renderStart(E,F,K);if(b=Se.get(K),b.init(F),y.push(b),K.traverseVisible(function(q){if(q.isLight&&q.layers.test(F.layers)){if(b.pushLight(q),q.castShadow)b.pushShadow(q)}}),E!==K)E.traverseVisible(function(q){if(q.isLight&&q.layers.test(F.layers)){if(b.pushLight(q),q.castShadow)b.pushShadow(q)}});if(b.setupLights(),P!==null)P.updateLights(b.state.lightsArray);if(Ie=this.localClippingEnabled,fe=j.init(this.clippingPlanes,Ie),fe===!0)j.setGlobalState(this.clippingPlanes,F);if(P!==null)oe.render(b.state.shadowsArray,K,F);let W=new Set;if(E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let be=q.material;if(be)if(Array.isArray(be))for(let ze=0;ze<be.length;ze++){let Te=be[ze];Mr(Te,K,F,q),W.add(Te)}else Mr(be,K,F,q),W.add(be)}),b=y.pop(),P!==null)P.renderEnd();return W},this.compileAsync=function(E,F,K=null){let W=this.compile(E,F,K);return new Promise((q)=>{function be(){if(W.forEach(function(ze){let De=et.get(ze).currentProgram;if(De===void 0||De.isReady())W.delete(ze)}),W.size===0){q(E);return}setTimeout(be,10)}if(ft.get("KHR_parallel_shader_compile")!==null)be();else setTimeout(be,10)})};let Zh=null;function V_(E){if(Zh)Zh(E)}function Gf(){xs.stop()}function zf(){xs.start()}let xs=new bh;if(xs.setAnimationLoop(V_),typeof self<"u")xs.setContext(self);this.setAnimationLoop=function(E){Zh=E,Ze.setAnimationLoop(E),E===null?xs.stop():xs.start()},Ze.addEventListener("sessionstart",Gf),Ze.addEventListener("sessionend",zf),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P!==null)P.renderStart(E,F);let K=Ze.enabled===!0&&Ze.isPresenting===!0,W=S!==null&&(N===null||K)&&S.begin(R,N);if(E.matrixWorldAutoUpdate===!0)E.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(Ze.enabled===!0&&Ze.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(Ze.cameraAutoUpdate===!0)Ze.updateCamera(F);F=Ze.getCamera()}if(E.isScene===!0)E.onBeforeRender(R,E,F,N);if(b=Se.get(E,y.length),b.init(F),b.state.textureUnits=at.getTextureUnits(),y.push(b),Ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera)ue.setFromArrayCamera(F);else ae.setFromProjectionMatrix(Ue,Li,F.reversedDepth);if(Ie=this.localClippingEnabled,fe=j.init(this.clippingPlanes,Ie),v=xe.get(E,w.length),v.init(),w.push(v),this.info.render.frame++,Ze.enabled===!0&&Ze.isPresenting===!0){let ze=R.xr.getDepthSensingMesh();if(ze!==null)Kh(ze,F,-1/0,R.sortObjects)}if(Kh(E,F,0,R.sortObjects),v.finish(),P!==null)P.updateLights(b.state.lightsArray);if(R.sortObjects===!0)v.sort(Ee,pt);if(gt=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,gt)ye.addToRenderList(v,E);if(this.info.autoReset===!0)this.info.reset();if(fe===!0)j.beginShadows();let q=b.state.shadowsArray;if(oe.render(q,E,F),fe===!0)j.endShadows();if((W&&S.hasRenderPass())===!1){let ze=v.opaque,Te=v.transmissive;if(b.setupLights(),F.isArrayCamera){let De=F.cameras;if(Te.length>0)for(let qe=0,ct=De.length;qe<ct;qe++){let vt=De[qe];Vf(ze,Te,E,vt)}if(gt)ye.render(E);for(let qe=0,ct=De.length;qe<ct;qe++){let vt=De[qe];kf(v,E,vt,vt.viewport)}}else{if(Te.length>0)Vf(ze,Te,E,F);if(gt)ye.render(E);kf(v,E,F)}}if(N!==null&&L===0)at.updateMultisampleRenderTarget(N),at.updateRenderTargetMipmap(N);if(W)S.end(R);if(E.isScene===!0)E.onAfterRender(R,E,F);if(ge.resetDefaultState(),te=-1,z=null,y.pop(),y.length>0){if(b=y[y.length-1],at.setTextureUnits(b.state.textureUnits),fe===!0)j.setGlobalState(R.clippingPlanes,b.state.camera)}else b=null;if(w.pop(),w.length>0)v=w[w.length-1];else v=null;if(P!==null)P.renderEnd()};function Kh(E,F,K,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD){if(E.autoUpdate===!0)E.update(F)}else if(E.isLight){if(b.pushLight(E),E.castShadow)b.pushShadow(E)}else if(E.isSprite){let ze=F.isArrayCamera?ue:ae;if(!E.frustumCulled||E.intersectsFrustum(ze)){if(W)Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);let Te=V.update(E),De=E.material;if(De.visible)v.push(E,Te,De,K,Xe.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let ze=F.isArrayCamera?ue:ae;if(!E.frustumCulled||E.intersectsFrustum(ze)){let Te=V.update(E),De=E.material;if(W){if(E.boundingSphere!==void 0){if(E.boundingSphere===null)E.computeBoundingSphere();Xe.copy(E.boundingSphere.center)}else{if(Te.boundingSphere===null)Te.computeBoundingSphere();Xe.copy(Te.boundingSphere.center)}Xe.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)}if(Array.isArray(De)){let qe=Te.groups;for(let ct=0,vt=qe.length;ct<vt;ct++){let ke=qe[ct],St=De[ke.materialIndex];if(St&&St.visible)v.push(E,Te,St,K,Xe.z,ke,F)}}else if(De.visible)v.push(E,Te,De,K,Xe.z,null,F)}}}let be=E.children;for(let ze=0,Te=be.length;ze<Te;ze++)Kh(be[ze],F,K,W)}function kf(E,F,K,W){let{opaque:q,transmissive:be,transparent:ze}=E;if(b.setupLightsView(K),fe===!0)j.setGlobalState(R.clippingPlanes,K);if(W)Ae.viewport(Y.copy(W));if(q.length>0)sc(q,F,K);if(be.length>0)sc(be,F,K);if(ze.length>0)sc(ze,F,K);Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Vf(E,F,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let ke=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Zt(1,1,{generateMipmaps:!0,type:ke?jt:hi,minFilter:Pi,samples:Math.max(4,ci.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let be=b.state.transmissionRenderTarget[W.id],ze=W.viewport||Y;be.setSize(ze.z*R.transmissionResolutionScale,ze.w*R.transmissionResolutionScale);let Te=R.getRenderTarget(),De=R.getActiveCubeFace(),qe=R.getActiveMipmapLevel();if(R.setRenderTarget(be),R.getClearColor(X),ne=R.getClearAlpha(),ne<1)R.setClearColor(16777215,0.5);if(R.clear(),gt)ye.render(K);let ct=R.toneMapping;R.toneMapping=mn;let vt=W.viewport;if(W.viewport!==void 0)W.viewport=void 0;if(b.setupLightsView(W),fe===!0)j.setGlobalState(R.clippingPlanes,W);if(sc(E,K,W),at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let St=0,mi=F.length;St<mi;St++){let qt=F[St],{object:Gt,geometry:Xi,material:Ve,group:rn}=qt;if(Ve.side===It&&Gt.layers.test(W.layers)){let Ct=Ve.side;Ve.side=zt,Ve.needsUpdate=!0,Wf(Gt,K,W,Xi,Ve,rn),Ve.side=Ct,Ve.needsUpdate=!0,ke=!0}}if(ke===!0)at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be)}if(R.setRenderTarget(Te,De,qe),R.setClearColor(X,ne),vt!==void 0)W.viewport=vt;R.toneMapping=ct}function sc(E,F,K){let W=F.isScene===!0?F.overrideMaterial:null;for(let q=0,be=E.length;q<be;q++){let ze=E[q],{object:Te,geometry:De,group:qe}=ze,ct=ze.material;if(ct.allowOverride===!0&&W!==null)ct=W;if(Te.layers.test(K.layers))Wf(Te,F,K,De,ct,qe)}}function Wf(E,F,K,W,q,be){if(P!==null&&q.isNodeMaterial)P.setObject(E,q);if(E.onBeforeRender(R,F,K,W,q,be),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(R,F,K,W,E,be),q.transparent===!0&&q.side===It&&q.forceSinglePass===!1)q.side=zt,q.needsUpdate=!0,R.renderBufferDirect(K,F,W,q,E,be),q.side=cn,q.needsUpdate=!0,R.renderBufferDirect(K,F,W,q,E,be),q.side=It;else R.renderBufferDirect(K,F,W,q,E,be);E.onAfterRender(R,F,K,W,q,be)}function Xf(E){let F=0;for(let K of E)if(K.texture!==null)F++;return F}function ha(E,F,K){if(F.isScene!==!0)F=ut;let W=et.get(E),q=b.state.lights,be=b.state.shadowsArray,ze=q.state.version,Te=he.getParameters(E,q.state,be,F,K,b.state.lightProbeGridArray),De=he.getProgramCacheKey(Te),qe=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let ct=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;if(W.envMap=Si.get(E.envMap||W.environment,ct),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,qe===void 0)E.addEventListener("dispose",Le),qe=new Map,W.programs=qe,W.programVariants=new Map;let vt=qe.get(De);if(vt!==void 0){if(W.currentProgram===vt&&W.lightsStateVersion===ze)return Yf(E,Te),vt}else{if(Te.uniforms=he.getUniforms(E),P!==null&&E.isNodeMaterial)P.build(E,K,Te);E.onBeforeCompile(Te,R),vt=he.acquireProgram(Te,De),qe.set(De,vt),W.uniforms=Te.uniforms}let ke=W.uniforms;if(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)ke.clippingPlanes=j.uniform;if(Yf(E,Te),W.needsLights=Y_(E),W.lightsStateVersion=ze,W.needsLights)ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.sunLights.value=q.state.sun,ke.sunLightShadows.value=q.state.sunShadow,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.sunShadowMatrix.value=q.state.sunShadowMatrix,ke.sunShadowCascade.value=q.state.sunShadowCascade,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix;return W.numLightProbeGrids=Xf(b.state.lightProbeGridArray),W.currentProgram=vt,W.uniformsList=null,vt}function W_(E,F,K,W,q){let be=et.get(E),ze=be.currentProgram.id+","+W+","+q,Te=be.programVariants.get(ze);if(Te===void 0)Te=ha(E,F,K),be.programVariants.set(ze,Te);else be.currentProgram=Te,be.uniformsList=null,be.outputColorSpace=W,be.toneMapping=q;return Te}function qf(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Js.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Yf(E,F){let K=et.get(E);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function X_(E,F,K,W,q){if(F.isScene!==!0)F=ut;at.resetTextureUnits();let be=F.fog,ze=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Te=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:rt.workingColorSpace,De=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,qe=Si.get(W.envMap||ze,De),ct=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vt=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,mi=!!K.morphAttributes.color,qt=mn;if(W.toneMapped){if(N===null||N.isXRRenderTarget===!0)qt=R.toneMapping}let Gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xi=Gt!==void 0?Gt.length:0,Ve=et.get(W),rn=b.state.lights;if(fe===!0){if(Ie===!0||E!==z){let ii=E===z&&W.id===te;j.setState(W,E,ii)}}let Ct=!1,_s=!1;if(W.version===Ve.__version){if(Ve.needsLights&&Ve.lightsStateVersion!==rn.state.version)Ct=!0;else if(q.isBatchedMesh&&Ve.batching===!1)Ct=!0;else if(!q.isBatchedMesh&&Ve.batching===!0)Ct=!0;else if(q.isBatchedMesh&&Ve.batchingColor===!0&&q._colorsTexture===null)Ct=!0;else if(q.isBatchedMesh&&Ve.batchingColor===!1&&q._colorsTexture!==null)Ct=!0;else if(q.isInstancedMesh&&Ve.instancing===!1)Ct=!0;else if(!q.isInstancedMesh&&Ve.instancing===!0)Ct=!0;else if(q.isSkinnedMesh&&Ve.skinning===!1)Ct=!0;else if(!q.isSkinnedMesh&&Ve.skinning===!0)Ct=!0;else if(q.isInstancedMesh&&Ve.instancingColor===!0&&q.instanceColor===null)Ct=!0;else if(q.isInstancedMesh&&Ve.instancingColor===!1&&q.instanceColor!==null)Ct=!0;else if(q.isInstancedMesh&&Ve.instancingMorph===!0&&q.morphTexture===null)Ct=!0;else if(q.isInstancedMesh&&Ve.instancingMorph===!1&&q.morphTexture!==null)Ct=!0;else if(Ve.envMap!==qe)Ct=!0;else if(W.fog===!0&&Ve.fog!==be)Ct=!0;else if(Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==j.numPlanes||Ve.numIntersection!==j.numIntersection))Ct=!0;else if(Ve.vertexAlphas!==ct)Ct=!0;else if(Ve.vertexTangents!==vt)Ct=!0;else if(Ve.morphTargets!==ke)Ct=!0;else if(Ve.morphNormals!==St)Ct=!0;else if(Ve.morphColors!==mi)Ct=!0;else if(Ve.morphTargetsCount!==Xi)Ct=!0;else if(Ve.numLightProbeGrids!==Xf(b.state.lightProbeGridArray))Ct=!0;else if(Ve.outputColorSpace!==Te||Ve.toneMapping!==qt)_s=!0}else Ct=!0,Ve.__version=W.version;let qi=Ve.currentProgram;if(Ct===!0||_s===!0){if(qi=_s===!0?W_(W,F,q,Te,qt):ha(W,F,q),P&&W.isNodeMaterial)P.onUpdateProgram(W,qi,Ve)}let oc=!1,kr=!1,ys=!1,Et=qi.getUniforms(),Oi=Ve.uniforms;if(Ae.useProgram(qi.program))oc=!0,kr=!0,ys=!0;if(W.id!==te)te=W.id,kr=!0;if(oc||z!==E){if(Ae.buffers.depth.getReversed()&&E.reversedDepth!==!0)E._reversedDepth=!0,E.updateProjectionMatrix();Et.setValue(B,"projectionMatrix",E.projectionMatrix),Et.setValue(B,"viewMatrix",E.matrixWorldInverse);let Ii=Et.map.cameraPosition;if(Ii!==void 0)Ii.setValue(B,je.setFromMatrixPosition(E.matrixWorld));if(ci.logarithmicDepthBuffer)Et.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2));if(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)Et.setValue(B,"isOrthographic",E.isOrthographicCamera===!0);if(z!==E)z=E,kr=!0,ys=!0}if(Ve.needsLights){if(rn.state.sunShadowMap.length>0)Et.setValue(B,"sunShadowMap",rn.state.sunShadowMap,at);if(rn.state.directionalShadowMap.length>0)Et.setValue(B,"directionalShadowMap",rn.state.directionalShadowMap,at);if(rn.state.spotShadowMap.length>0)Et.setValue(B,"spotShadowMap",rn.state.spotShadowMap,at);if(rn.state.pointShadowMap.length>0)Et.setValue(B,"pointShadowMap",rn.state.pointShadowMap,at)}if(q.isSkinnedMesh){Et.setOptional(B,q,"bindMatrix"),Et.setOptional(B,q,"bindMatrixInverse");let ii=q.skeleton;if(ii){if(ii.boneTexture===null)ii.computeBoneTexture();Et.setValue(B,"boneTexture",ii.boneTexture,at)}}if(q.isBatchedMesh){if(Et.setOptional(B,q,"batchingTexture"),Et.setValue(B,"batchingTexture",q._matricesTexture,at),Et.setOptional(B,q,"batchingIdTexture"),Et.setValue(B,"batchingIdTexture",q._indirectTexture,at),Et.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null)Et.setValue(B,"batchingColorTexture",q._colorsTexture,at)}let Yn=K.morphAttributes;if(Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)D.update(q,K,qi);if(kr||Ve.receiveShadow!==q.receiveShadow)Ve.receiveShadow=q.receiveShadow,Et.setValue(B,"receiveShadow",q.receiveShadow);if((W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null)Oi.envMapIntensity.value=F.environmentIntensity;if(Oi.dfgLUT!==void 0)Oi.dfgLUT.value=Px();if(kr){if(Et.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ve.needsLights)q_(Oi,ys);if(be&&W.fog===!0)le.refreshFogUniforms(Oi,be);if(le.refreshMaterialUniforms(Oi,W,Ge,ve,b.state.transmissionRenderTarget[E.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let ii=M,Ii=0;for(let vr of b.state.lightProbeGridArray){if(vr.texture===null)continue;ii.textures[Ii]=vr.texture,ii.min[Ii]=vr.boundingBox.min,ii.max[Ii]=vr.boundingBox.max,ii.resolution[Ii]=vr.resolution,Ii++}for(let vr in ii)ii[vr].length=Ii;Oi.probesSH.value=ii.textures,Oi.probesMin.value=ii.min,Oi.probesMax.value=ii.max,Oi.probesResolution.value=ii.resolution}Js.upload(B,qf(Ve),Oi,at)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0)Js.upload(B,qf(Ve),Oi,at),W.uniformsNeedUpdate=!1;if(W.isSpriteMaterial)Et.setValue(B,"center",q.center);if(Et.setValue(B,"modelViewMatrix",q.modelViewMatrix),Et.setValue(B,"normalMatrix",q.normalMatrix),Et.setValue(B,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let ii=W.uniformsGroups;for(let Ii=0,vr=ii.length;Ii<vr;Ii++){let Kf=ii[Ii];we.update(Kf,qi),we.bind(Kf,qi)}}return qi}function q_(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Y_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,F,K){let W=et.get(E);if(W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1)W.__useRenderToTexture=!1;et.get(E.texture).__webglTexture=F,et.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let K=et.get(E);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,K=0){N=E,Z=F,L=K;let W=null,q=!1,be=!1;if(E){let Te=et.get(E);if(Te.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),Y.copy(E.viewport),J.copy(E.scissor),pe=E.scissorTest,Ae.viewport(Y),Ae.scissor(J),Ae.setScissorTest(pe),te=-1;return}else if(Te.__webglFramebuffer===void 0)at.setupRenderTarget(E);else if(Te.__hasExternalTextures)at.rebindTextures(E,et.get(E.texture).__webglTexture,et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ct=E.depthTexture;if(Te.__boundDepthTexture!==ct){if(ct!==null&&et.has(ct)&&(E.width!==ct.image.width||E.height!==ct.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(E)}}let De=E.texture;if(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)be=!0;let qe=et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget){if(Array.isArray(qe[F]))W=qe[F][K];else W=qe[F];q=!0}else if(E.samples>0&&at.useMultisampledRTT(E)===!1)W=et.get(E).__webglMultisampledFramebuffer;else if(Array.isArray(qe))W=qe[K];else W=qe;Y.copy(E.viewport),J.copy(E.scissor),pe=E.scissorTest}else Y.copy(Ne).multiplyScalar(Ge).floor(),J.copy(Fe).multiplyScalar(Ge).floor(),pe=lt;if(K!==0)W=H;if(Ae.bindFramebuffer(B.FRAMEBUFFER,W))Ae.drawBuffers(E,W);if(Ae.viewport(Y),Ae.scissor(J),Ae.setScissorTest(pe),q){let Te=et.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,K)}else if(be){let Te=F;for(let De=0;De<E.textures.length;De++){let qe=et.get(E.textures[De]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+De,qe.__webglTexture,K,Te)}}else if(E!==null&&K!==0){let Te=et.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,K)}te=-1};function Zf(E){let F=et.get(E);if(F.__readFormat!==E.format||F.__readType!==E.type)F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=ci.textureFormatReadable(E.format),F.__typeReadable=ci.textureTypeReadable(E.type);return F}if(this.readRenderTargetPixels=function(E,F,K,W,q,be,ze,Te=0){if(!(E&&E.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0){if(De=De[ze],Array.isArray(De))De=De[0]}if(De){Ae.bindFramebuffer(B.FRAMEBUFFER,De);try{let qe=E.textures[Te],{format:ct,type:vt}=qe;if(E.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+Te);let ke=Zf(qe);if(ke.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=E.width-W&&(K>=0&&K<=E.height-q))B.readPixels(F,K,W,q,me.convert(ct),me.convert(vt),be)}finally{let qe=N!==null?et.get(N).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,F,K,W,q,be,ze,Te=0){if(!(E&&E.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0){if(De=De[ze],Array.isArray(De))De=De[0]}if(De)if(F>=0&&F<=E.width-W&&(K>=0&&K<=E.height-q)){Ae.bindFramebuffer(B.FRAMEBUFFER,De);let qe=E.textures[Te],{format:ct,type:vt}=qe;if(E.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+Te);let ke=Zf(qe);if(ke.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,St),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),B.readPixels(F,K,W,q,me.convert(ct),me.convert(vt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let mi=N!==null?et.get(N).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,mi);let qt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ld(B,qt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,St),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(St),B.deleteSync(qt),be}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,K=0){let W=Math.pow(2,-K),q=Math.floor(E.image.width*W),be=Math.floor(E.image.height*W),ze=F!==null?F.x:0,Te=F!==null?F.y:0;at.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,ze,Te,q,be),Ae.unbindTexture()},this.copyTextureToTexture=function(E,F,K=null,W=null,q=0,be=0){let ze,Te,De,qe,ct,vt,ke,St,mi,qt=E.isCompressedTexture?E.mipmaps[be]:E.image;if(K!==null)ze=K.max.x-K.min.x,Te=K.max.y-K.min.y,De=K.isBox3?K.max.z-K.min.z:1,qe=K.min.x,ct=K.min.y,vt=K.isBox3?K.min.z:0;else{let Et=Math.pow(2,-q);if(ze=Math.floor(E.width*Et),Te=Math.floor(E.height*Et),E.isDataArrayTexture)De=qt.depth;else if(E.isData3DTexture)De=Math.floor(qt.depth*Et);else De=1;qe=0,ct=0,vt=0}if(W!==null)ke=W.x,St=W.y,mi=W.z;else ke=0,St=0,mi=0;let Gt=me.convert(F.format),Xi=me.convert(F.type),Ve;if(F.isData3DTexture)at.setTexture3D(F,0),Ve=B.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)at.setTexture2DArray(F,0),Ve=B.TEXTURE_2D_ARRAY;else at.setTexture2D(F,0),Ve=B.TEXTURE_2D;Ae.activeTexture(B.TEXTURE0),Ae.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),Ae.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Ae.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let rn=Ae.getParameter(B.UNPACK_ROW_LENGTH),Ct=Ae.getParameter(B.UNPACK_IMAGE_HEIGHT),_s=Ae.getParameter(B.UNPACK_SKIP_PIXELS),qi=Ae.getParameter(B.UNPACK_SKIP_ROWS),oc=Ae.getParameter(B.UNPACK_SKIP_IMAGES);Ae.pixelStorei(B.UNPACK_ROW_LENGTH,qt.width),Ae.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qt.height),Ae.pixelStorei(B.UNPACK_SKIP_PIXELS,qe),Ae.pixelStorei(B.UNPACK_SKIP_ROWS,ct),Ae.pixelStorei(B.UNPACK_SKIP_IMAGES,vt);let kr=E.isDataArrayTexture||E.isData3DTexture,ys=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let Et=et.get(E),Oi=et.get(F),Yn=et.get(Et.__renderTarget),ii=et.get(Oi.__renderTarget);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,Yn.__webglFramebuffer),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Ii=0;Ii<De;Ii++){if(kr)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.get(E).__webglTexture,q,vt+Ii),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.get(F).__webglTexture,be,mi+Ii);B.blitFramebuffer(qe,ct,qe+ze,ct+Te,ke,St,ke+ze,St+Te,B.DEPTH_BUFFER_BIT,B.NEAREST)}Ae.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||et.has(E)){let Et=et.get(E),Oi=et.get(F);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,ie),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let Yn=0;Yn<De;Yn++){if(kr)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.__webglTexture,q,vt+Yn);else B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Et.__webglTexture,q);if(ys)B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oi.__webglTexture,be,mi+Yn);else B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oi.__webglTexture,be);if(q!==0)B.blitFramebuffer(qe,ct,qe+ze,ct+Te,ke,St,ke+ze,St+Te,B.COLOR_BUFFER_BIT,B.NEAREST);else if(ys)B.copyTexSubImage3D(Ve,be,ke,St,mi+Yn,qe,ct,ze,Te);else B.copyTexSubImage2D(Ve,be,ke,St,qe,ct,ze,Te)}Ae.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ys)if(E.isDataTexture||E.isData3DTexture)B.texSubImage3D(Ve,be,ke,St,mi,ze,Te,De,Gt,Xi,qt.data);else if(F.isCompressedArrayTexture)B.compressedTexSubImage3D(Ve,be,ke,St,mi,qt.width,qt.height,De,Gt,qt.data);else B.texSubImage3D(Ve,be,ke,St,mi,ze,Te,De,Gt,Xi,qt);else if(E.isDataTexture)B.texSubImage2D(B.TEXTURE_2D,be,ke,St,ze,Te,Gt,Xi,qt.data);else if(E.isCompressedTexture)B.compressedTexSubImage2D(B.TEXTURE_2D,be,ke,St,qt.width,qt.height,Gt,qt.data);else B.texSubImage2D(B.TEXTURE_2D,be,ke,St,ze,Te,Gt,Xi,qt);if(Ae.pixelStorei(B.UNPACK_ROW_LENGTH,rn),Ae.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ct),Ae.pixelStorei(B.UNPACK_SKIP_PIXELS,_s),Ae.pixelStorei(B.UNPACK_SKIP_ROWS,qi),Ae.pixelStorei(B.UNPACK_SKIP_IMAGES,oc),be===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0)B.generateMipmap(Ve);Ae.unbindTexture()},this.initRenderTarget=function(E){if(et.get(E).__webglFramebuffer===void 0)at.setupRenderTarget(E)},this.initTexture=function(E){if(E.isCubeTexture)at.setTextureCube(E,0);else if(E.isData3DTexture)at.setTexture3D(E,0);else if(E.isDataArrayTexture||E.isCompressedArrayTexture)at.setTexture2DArray(E,0);else at.setTexture2D(E,0);Ae.unbindTexture()},this.resetState=function(){Z=0,L=0,N=null,Ae.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function Dx(e,t=!1){let i=e[0].index!==null,n=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},o={},a=e[0].morphTargetsRelative,l=new Oe;l.morphTargetsRelative=a;let c=0;for(let h=0;h<e.length;++h){let f=e[h],u=0,m=0;if(i!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;if(s[g]===void 0)s[g]=[];s[g].push(f.attributes[g]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==e[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;if(o[g]===void 0)o[g]=[];o[g].push(f.morphAttributes[g]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(i)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(i){let h=0,f=[];for(let u=0;u<e.length;++u){let m=e[u].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=e[u].attributes.position.count}l.setIndex(f)}for(let h in s){let f=Lx(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let m=[];for(let x=0;x<o[h].length;++x)m.push(o[h][x][u]);let g=Lx(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Lx(e){let t,i,n,r=-1,s=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=h.itemSize;if(i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0)n=h.normalized;if(n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=h.gpuType;if(r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*i}let o=new t(s),a=new kt(o,i,n),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let f=l/i;for(let u=0,m=h.count;u<m;u++)for(let g=0;g<i;g++){let x=h.getComponent(u,g);a.setComponent(u+f,g,x)}}else o.set(h.array,l);l+=h.count*i}if(r!==void 0)a.gpuType=r;return a}function cf(e,t){if(t===Md)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Qa||t===vc){let i=e.getIndex();if(i===null){let s=[],o=e.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);e.setIndex(s),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let n=i.count-2,r=[];if(t===Qa)for(let s=1;s<=n;s++)r.push(i.getX(0)),r.push(i.getX(s)),r.push(i.getX(s+1));else for(let s=0;s<n;s++)if(s%2===0)r.push(i.getX(s)),r.push(i.getX(s+1)),r.push(i.getX(s+2));else r.push(i.getX(s+2)),r.push(i.getX(s+1)),r.push(i.getX(s));if(r.length/3!==n)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return e.setIndex(r),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function Nx(e){let t=new Map,i=new Map,n=e.clone();return Fx(e,n,function(r,s){t.set(s,r),i.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=t.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return i.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Fx(e,t,i){i(e,t);for(let n=0;n<e.children.length;n++)Fx(e.children[n],t.children[n],i)}class gf extends pi{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new df(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new df(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new n_(t)})}load(e,t,i,n){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=Hr.extractUrlBase(e);s=Hr.resolveURL(l,this.path)}else s=Hr.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){if(n)n(l);else console.error(l);r.manager.itemError(e),r.manager.itemEnd(e)},a=new On(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{r.parse(l,s,function(c){t(c),r.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,i,n){let r,s={},o={},a=new TextDecoder;if(typeof e==="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===r_){try{s[mt.KHR_BINARY_GLTF]=new s_(e)}catch(h){if(n)n(h);return}r=JSON.parse(s[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){if(n)n(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new h_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](l);if(!h.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){let h=r.extensionsUsed[c],f=r.extensionsRequired||[];switch(h){case mt.KHR_MATERIALS_UNLIT:s[h]=new zx;break;case mt.KHR_DRACO_MESH_COMPRESSION:s[h]=new o_(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:s[h]=new a_;break;case mt.KHR_MESH_QUANTIZATION:s[h]=new l_;break;default:if(f.indexOf(h)>=0&&o[h]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function z1(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function si(e,t,i){let n=e.json.materials[t];if(n.extensions&&n.extensions[i])return n.extensions[i];return null}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gx{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,c=new ce(16777215);if(a.color!==void 0)c.setRGB(a.color[0],a.color[1],a.color[2],Hi);let h=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Hl(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new nr(c),l.distance=h;break;case"spot":l=new Ol(c),l.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}if(l.position.set(0,0,0),pr(l,a),a.intensity!==void 0)l.intensity=a.intensity;return l.name=t.createUniqueName(a.name||"light_"+e),n=Promise.resolve(l),t.cache.add(i,n),n}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;if(o===void 0)return null;return this._loadLight(o).then(function(a){return i._getNodeRef(t.cache,o,a)})}}class zx{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Tt}extendParams(e,t,i){let n=[];e.color=new ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Hi),e.opacity=s[3]}if(r.baseColorTexture!==void 0)n.push(i.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(n)}}class kx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();if(i.emissiveStrength!==void 0)t.emissiveIntensity=i.emissiveStrength;return Promise.resolve()}}class Vx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0)t.clearcoat=i.clearcoatFactor;if(i.clearcoatTexture!==void 0)n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture));if(i.clearcoatRoughnessFactor!==void 0)t.clearcoatRoughness=i.clearcoatRoughnessFactor;if(i.clearcoatRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture));if(i.clearcoatNormalTexture!==void 0){if(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new k(r,r)}}return Promise.all(n)}}class Wx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture));return Promise.all(n)}}class Xx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class qx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.iridescenceFactor!==void 0)t.iridescence=i.iridescenceFactor;if(i.iridescenceTexture!==void 0)n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture));if(i.iridescenceIor!==void 0)t.iridescenceIOR=i.iridescenceIor;if(i.iridescenceThicknessMinimum!==void 0)t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum;if(i.iridescenceThicknessMaximum!==void 0)t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum;if(i.iridescenceThicknessTexture!==void 0)n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture));return Promise.all(n)}}class Yx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new ce(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Hi)}if(i.sheenRoughnessFactor!==void 0)t.sheenRoughness=i.sheenRoughnessFactor;if(i.sheenColorTexture!==void 0)n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,xt));if(i.sheenRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture));return Promise.all(n)}}class Zx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.transmissionFactor!==void 0)t.transmission=i.transmissionFactor;if(i.transmissionTexture!==void 0)n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture));return Promise.all(n)}}class Kx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0)n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture));t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new ce().setRGB(r[0],r[1],r[2],Hi),Promise.all(n)}}class Jx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();if(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class jx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0)n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];if(t.specularColor=new ce().setRGB(r[0],r[1],r[2],Hi),i.specularColorTexture!==void 0)n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,xt));return Promise.all(n)}}class $x{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0)n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture));return Promise.all(n)}}class Qx{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return si(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){let i=si(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.anisotropyStrength!==void 0)t.anisotropy=i.anisotropyStrength;if(i.anisotropyRotation!==void 0)t.anisotropyRotation=i.anisotropyRotation;if(i.anisotropyTexture!==void 0)n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture));return Promise.all(n)}}class e_{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s)if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,r.source,s)}}class t_{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],a=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)a=l}return i.loadTextureImage(e,s.source,a)}}class i_{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],a=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)a=l}return i.loadTextureImage(e,s.source,a)}}class df{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(o){let a=n.byteOffset||0,l=n.byteLength||0,{count:c,byteStride:h}=n,f=new Uint8Array(o,a,l);if(s.decodeGltfBufferAsync)return s.decodeGltfBufferAsync(c,h,f,n.mode,n.filter).then(function(u){return u.buffer});else return s.ready.then(function(){let u=new ArrayBuffer(c*h);return s.decodeGltfBuffer(new Uint8Array(u),c,h,f,n.mode,n.filter),u})})}else return null}}class n_{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let l of n.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=i.extensions[this.name].attributes,o=[],a={};for(let l in s)o.push(this.parser.getDependency("accessor",s[l]).then((c)=>(a[l]=c,a[l])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((l)=>{let c=l.pop(),h=c.isGroup?c.children:[c],f=l[0].count,u=[];for(let m of h){let g=new Ce,x=new A,d=new $t,p=new A(1,1,1),_=new vn(m.geometry,m.material,f);for(let v=0;v<f;v++){if(a.TRANSLATION)x.fromBufferAttribute(a.TRANSLATION,v);if(a.ROTATION)d.fromBufferAttribute(a.ROTATION,v);if(a.SCALE)p.fromBufferAttribute(a.SCALE,v);_.setMatrixAt(v,g.compose(x,d,p))}let M=null;for(let v in a)if(v==="_COLOR_0"){let b=a[v];_.instanceColor=new tr(b.array,b.itemSize,b.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(M===null){let w=_.geometry;M=new Oe,M.name=w.name;for(let y in w.attributes)M.setAttribute(y,w.attributes[y]);for(let y in w.morphAttributes)M.morphAttributes[y]=w.morphAttributes[y];if(w.index!==null)M.setIndex(w.index);M.morphTargetsRelative=w.morphTargetsRelative;for(let y of w.groups)M.addGroup(y.start,y.count,y.materialIndex);if(w.boundingBox!==null)M.boundingBox=w.boundingBox.clone();if(w.boundingSphere!==null)M.boundingSphere=w.boundingSphere.clone();M.drawRange.start=w.drawRange.start,M.drawRange.count=w.drawRange.count,M.userData=Object.assign({},w.userData),_.geometry=M}let b=a[v];M.setAttribute(v,new tr(b.array,b.itemSize,b.normalized))}it.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),u.push(_)}if(c.isGroup)return c.clear(),c.add(...u),c;return u[0]})}}var r_="glTF",Xl=12,Ux={JSON:1313821514,BIN:5130562};class s_{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==r_)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Xl,r=new DataView(e,Xl),s=0;while(s<n){let o=r.getUint32(s,!0);s+=4;let a=r.getUint32(s,!0);if(s+=4,a===Ux.JSON){let l=new Uint8Array(e,Xl+s,o);this.content=i.decode(l)}else if(a===Ux.BIN){let l=Xl+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class o_{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},a={},l={};for(let c in s){let h=pf[c]||c.toLowerCase();o[h]=s[c]}for(let c in e.attributes){let h=pf[c]||c.toLowerCase();if(s[c]!==void 0){let f=i.accessors[e.attributes[c]],u=ea[f.componentType];l[h]=u.name,a[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(h,f){n.decodeDracoFile(c,function(u){for(let m in u.attributes){let g=u.attributes[m],x=a[m];if(x!==void 0)g.normalized=x}h(u)},o,l,Hi,f)})})}}class a_{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0)e.channel=t.texCoord;if(t.offset!==void 0)e.offset.fromArray(t.offset);if(t.rotation!==void 0)e.rotation=t.rotation;if(t.scale!==void 0)e.repeat.fromArray(t.scale);if(t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class l_{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class xf extends fn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-t,h=(i-t)/c,f=h*h,u=f*h,m=e*l,g=m-l,x=-2*u+3*f,d=u-f,p=1-x,_=d-f+h;for(let M=0;M!==o;M++){let v=s[g+M+o],b=s[g+M+a]*c,w=s[m+M+o],y=s[m+M]*c;r[M]=p*v+_*b+x*w+d*y}return r}}var k1=new $t;class c_ extends xf{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return k1.fromArray(r).normalize().toArray(r),r}}var Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bx={9728:Ft,9729:Ot,9984:Sa,9985:Ss,9986:Zr,9987:Pi},Ox={33071:bi,33648:Yr,10497:hn},hf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},V1={CUBICSPLINE:void 0,LINEAR:ws,STEP:Tr},uf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function W1(e){if(e.DefaultMaterial===void 0)e.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cn});return e.DefaultMaterial}function js(e,t,i){for(let n in i.extensions)if(e[n]===void 0)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=i.extensions[n]}function pr(e,t){if(t.extras!==void 0)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function X1(e,t,i){let n=!1,r=!1,s=!1;for(let c=0,h=t.length;c<h;c++){let f=t[c];if(f.POSITION!==void 0)n=!0;if(f.NORMAL!==void 0)r=!0;if(f.COLOR_0!==void 0)s=!0;if(n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(e);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let f=t[c];if(n){let u=f.POSITION!==void 0?i.getDependency("accessor",f.POSITION):e.attributes.position;o.push(u)}if(r){let u=f.NORMAL!==void 0?i.getDependency("accessor",f.NORMAL):e.attributes.normal;a.push(u)}if(s){let u=f.COLOR_0!==void 0?i.getDependency("accessor",f.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],u=c[2];if(n)e.morphAttributes.position=h;if(r)e.morphAttributes.normal=f;if(s)e.morphAttributes.color=u;return e.morphTargetsRelative=!0,e})}function q1(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,n=t.weights.length;i<n;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++)e.morphTargetDictionary[i[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Y1(e){let t,i=e.extensions&&e.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(i)t="draco:"+i.bufferView+":"+i.indices+":"+ff(i.attributes);else t=e.indices+":"+ff(e.attributes)+":"+e.mode;if(e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=":"+ff(e.targets[n]);return t}function ff(e){let t="",i=Object.keys(e).sort();for(let n=0,r=i.length;n<r;n++)t+=i[n]+":"+e[i[n]]+";";return t}function mf(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z1(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var K1=new Ce;class h_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new z1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,s=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let a=o.match(/Version\/(\d+)/);n=i&&a?parseInt(a[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||i&&n<17||r&&s<98)this.textureLoader=new ss(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new yh(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new On(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){let o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return js(r,o,n),pr(o,n),Promise.all(i._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){for(let a of o.scenes)a.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n].joints;for(let o=0,a=s.length;o<a;o++)e[s[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let s=e[n];if(s.mesh!==void 0){if(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0)i[s.mesh].isSkinnedMesh=!0}if(s.camera!==void 0)this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){if(t===void 0)return;if(e.refs[t]===void 0)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(s,o)=>{let a=this.associations.get(s);if(a!=null)this.associations.set(o,a);for(let[l,c]of s.children.entries())r(c,o.children[l])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,s){i.load(Hr.resolveURL(t.uri,n.path),r,void 0,function(){s(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let s=hf[n.type],o=ea[n.componentType],a=n.normalized===!0,l=new o(n.count*s);return Promise.resolve(new kt(l,s,a))}let r=[];if(n.bufferView!==void 0)r.push(this.getDependency("bufferView",n.bufferView));else r.push(null);if(n.sparse!==void 0)r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView));return Promise.all(r).then(function(s){let o=s[0],a=hf[n.type],l=ea[n.componentType],c=l.BYTES_PER_ELEMENT,h=c*a,f=n.byteOffset||0,u=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,g,x;if(u&&u!==h){let d=Math.floor(f/u),p="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+d+":"+n.count,_=t.cache.get(p);if(!_)g=new l(o,d*u,n.count*u/c),_=new Pr(g,u/c),t.cache.add(p,_);x=new lr(_,a,f%u/c,m)}else{if(o===null)g=new l(n.count*a);else g=new l(o,f,n.count*a);x=new kt(g,a,m)}if(n.sparse!==void 0){let d=hf.SCALAR,p=ea[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,v=new p(s[1],_,n.sparse.count*d),b=new l(s[2],M,n.sparse.count*a);if(o!==null)x=new kt(x.array.slice(),x.itemSize,x.normalized);x.normalized=!1;for(let w=0,y=v.length;w<y;w++){let S=v[w];if(x.setX(S,b[w*a]),a>=2)x.setY(S,b[w*a+1]);if(a>=3)x.setZ(S,b[w*a+2]);if(a>=4)x.setW(S,b[w*a+3]);if(a>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r],o=this.textureLoader;if(s.uri){let a=i.manager.getHandler(s.uri);if(a!==null)o=a}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,s=r.textures[e],o=r.images[t],a=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[a])return this.textureCache[a];let l=this.loadImageSource(t,i).then(function(c){if(c.flipY=!1,c.name=s.name||o.name||"",c.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===!1)c.name=o.uri;let f=(r.samplers||{})[s.sampler]||{};return c.magFilter=Bx[f.magFilter]||Ot,c.minFilter=Bx[f.minFilter]||Pi,c.wrapS=Ox[f.wrapS]||hn,c.wrapT=Ox[f.wrapT]||hn,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Ft&&c.minFilter!==Ot,n.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then((f)=>f.clone());let s=n.images[e],o=self.URL||self.webkitURL,a=s.uri||"",l=!1,c;if(t.isKTX2Loader===!0&&s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(f){return new Promise(function(u,m){t.parse(f,u,m)})});else{if(s.bufferView!==void 0)a=i.getDependency("bufferView",s.bufferView).then(function(f){l=!0;let u=new Blob([f],{type:s.mimeType});return a=o.createObjectURL(u),a});else if(s.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");c=Promise.resolve(a).then(function(f){return new Promise(function(u,m){let g=u;if(t.isImageBitmapLoader===!0)g=function(x){let d=new bt(x);d.needsUpdate=!0,u(d)};t.load(Hr.resolveURL(f,r.path),g,void 0,m)})})}let h=c.then(function(f){if(l===!0)o.revokeObjectURL(a);return pr(f,s),f.userData.mimeType=s.mimeType||Z1(s.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0)s=s.clone(),s.channel=i.texCoord;if(r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let a=r.associations.get(s);s=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,a)}}if(n!==void 0)s.colorSpace=n;return e[t]=s,s})}assignFinalMaterial(e){let{geometry:t,material:i}=e,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,a=this.cache.get(o);if(!a)a=new Os,Pt.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,a.sizeAttenuation=!1,this.cache.add(o,a);i=a}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,a=this.cache.get(o);if(!a)a=new di,Pt.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,this.cache.add(o,a);i=a}if(n||r||s){let o="ClonedMaterial:"+i.uuid+":";if(n)o+="derivative-tangents:";if(r)o+="vertex-colors:";if(s)o+="flat-shading:";let a=this.cache.get(o);if(!a){if(a=i.clone(),r)a.vertexColors=!0;if(s)a.flatShading=!0;if(n){if(a.normalScale)a.normalScale.y*=-1;if(a.clearcoatNormalScale)a.clearcoatNormalScale.y*=-1}this.cache.add(o,a),this.associations.set(a,this.associations.get(i))}i=a}e.material=i}getMaterialType(){return ot}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],s,o={},a=r.extensions||{},l=[];if(a[mt.KHR_MATERIALS_UNLIT]){let h=n[mt.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new ce(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Hi),o.opacity=f[3]}if(h.baseColorTexture!==void 0)l.push(t.assignTexture(o,"map",h.baseColorTexture,xt));if(o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0)l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture));s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}if(r.doubleSided===!0)o.side=It;let c=r.alphaMode||uf.OPAQUE;if(c===uf.BLEND)o.transparent=!0,o.depthWrite=!1;else if(o.transparent=!1,c===uf.MASK)o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&s!==Tt){if(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new k(1,1),r.normalTexture.scale!==void 0){let h=r.normalTexture.scale;o.normalScale.set(h,h)}}if(r.occlusionTexture!==void 0&&s!==Tt){if(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)o.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&s!==Tt){let h=r.emissiveFactor;o.emissive=new ce().setRGB(h[0],h[1],h[2],Hi)}if(r.emissiveTexture!==void 0&&s!==Tt)l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,xt));return Promise.all(l).then(function(){let h=new s(o);if(r.name)h.name=r.name;if(pr(h,r),t.associations.set(h,{materials:e}),r.extensions)js(n,h,r);return h})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return Hx(a,o,t)})}let s=[];for(let o=0,a=e.length;o<a;o++){let l=e[o],c=Y1(l),h=n[c];if(h)s.push(h.promise);else{let f;if(l.extensions&&l.extensions[mt.KHR_DRACO_MESH_COMPRESSION])f=r(l);else f=Hx(new Oe,l,t);if(l.mode===Hn.TRIANGLE_STRIP)f=f.then((u)=>cf(u,vc));else if(l.mode===Hn.TRIANGLE_FAN)f=f.then((u)=>cf(u,Qa));n[c]={primitive:l,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,o=[];for(let a=0,l=s.length;a<l;a++){let c=s[a].material===void 0?W1(this.cache):this.getDependency("material",s[a].material);o.push(c)}return o.push(t.loadGeometries(s)),Promise.all(o).then(async function(a){let l=a.slice(0,a.length-1),c=a[a.length-1],h=[];for(let u=0,m=c.length;u<m;u++){let g=c[u],x=s[u],d,p=l[u];if(x.mode===Hn.TRIANGLES||x.mode===Hn.TRIANGLE_STRIP||x.mode===Hn.TRIANGLE_FAN||x.mode===void 0){let _=r.isSkinnedMesh===!0,M=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");if(_&&M===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(d=_&&M?new ml(g,p):new ee(g,p),d.isSkinnedMesh===!0)d.normalizeSkinWeights()}else if(x.mode===Hn.LINES)d=new Ji(g,p);else if(x.mode===Hn.LINE_STRIP)d=new Bn(g,p);else if(x.mode===Hn.LINE_LOOP)d=new yl(g,p);else if(x.mode===Hn.POINTS)d=new Ml(g,p);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);if(Object.keys(d.geometry.morphAttributes).length>0)q1(d,r);if(d.name=t.createUniqueName(r.name||"mesh_"+e),pr(d,r),x.extensions)js(n,d,x);t.assignFinalMaterial(d),h.push(d)}for(let u=0,m=h.length;u<m;u++)t.associations.set(h[u],{meshes:e,primitives:u});if(h.length===1){if(r.extensions)js(n,h[0],r);return h[0]}let f=new Je;if(r.extensions)js(n,f,r);t.associations.set(f,{meshes:e});for(let u=0,m=h.length;u<m;u++)f.add(h[u]);return f})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(i.type==="perspective")t=new Kt(Ac.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2000000);else if(i.type==="orthographic")t=new rr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar);if(i.name)t.name=this.createUniqueName(i.name);return pr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));if(t.inverseBindMatrices!==void 0)i.push(this.getDependency("accessor",t.inverseBindMatrices));else i.push(null);return Promise.all(i).then(function(n){let r=n.pop(),s=n,o=[],a=[];for(let l=0,c=s.length;l<c;l++){let h=s[l];if(h){o.push(h);let f=new Ce;if(r!==null)f.fromArray(r.array,l*16);a.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ho(o,a)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],a=[],l=[],c=[];for(let h=0,f=n.channels.length;h<f;h++){let u=n.channels[h],m=n.samplers[u.sampler],g=u.target,x=g.node,d=n.parameters!==void 0?n.parameters[m.input]:m.input,p=n.parameters!==void 0?n.parameters[m.output]:m.output;if(g.node===void 0)continue;s.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",d)),a.push(this.getDependency("accessor",p)),l.push(m),c.push(g)}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){let f=h[0],u=h[1],m=h[2],g=h[3],x=h[4],d=[];for(let _=0,M=f.length;_<M;_++){let v=f[_],b=u[_],w=m[_],y=g[_],S=x[_];if(v===void 0)continue;if(v.updateMatrix)v.updateMatrix();let R=i._createAnimationTracks(v,b,w,y,S);if(R)for(let U=0;U<R.length;U++)d.push(R[U])}let p=new rs(r,void 0,d);return pr(p,n),p})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];if(n.mesh===void 0)return null;return i.getDependency("mesh",n.mesh).then(function(r){let s=i._getNodeRef(i.meshCache,n.mesh,r);if(n.weights!==void 0)s.traverse(function(o){if(!o.isMesh)return;for(let a=0,l=n.weights.length;a<l;a++)o.morphTargetInfluences[a]=n.weights[a]});return s})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],o=n.children||[];for(let l=0,c=o.length;l<c;l++)s.push(i.getDependency("node",o[l]));let a=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),a]).then(function(l){let c=l[0],h=l[1],f=l[2];if(f!==null)c.traverse(function(u){if(!u.isSkinnedMesh)return;u.bind(f,K1)});for(let u=0,m=h.length;u<m;u++)c.add(h[u]);if(c.userData.pivot!==void 0&&h.length>0){let u=c.userData.pivot,m=h[0];c.pivot=new A().fromArray(u),c.position.x-=u[0],c.position.y-=u[1],c.position.z-=u[2],m.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",o=[],a=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});if(a)o.push(a);if(r.camera!==void 0)o.push(n.getDependency("camera",r.camera).then(function(l){return n._getNodeRef(n.cameraCache,r.camera,l)}));return n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let c;if(r.isBone===!0)c=new Us;else if(l.length>1)c=new Je;else if(l.length===1)c=l[0];else c=new it;if(c!==l[0])for(let h=0,f=l.length;h<f;h++)c.add(l[h]);if(r.name)c.userData.name=r.name,c.name=s;if(pr(c,r),r.extensions)js(i,c,r);if(r.matrix!==void 0){let h=new Ce;h.fromArray(r.matrix),c.applyMatrix4(h)}else{if(r.translation!==void 0)c.position.fromArray(r.translation);if(r.rotation!==void 0)c.quaternion.fromArray(r.rotation);if(r.scale!==void 0)c.scale.fromArray(r.scale)}if(!n.associations.has(c))n.associations.set(c,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let h=n.associations.get(c);n.associations.set(c,{...h})}return n.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new Je;if(i.name)r.name=n.createUniqueName(i.name);if(pr(r,i),i.extensions)js(t,r,i);let s=i.nodes||[],o=[];for(let a=0,l=s.length;a<l;a++)o.push(n.getDependency("node",s[a]));return Promise.all(o).then(function(a){for(let c=0,h=a.length;c<h;c++){let f=a[c];if(f.parent!==null)r.add(Nx(f));else r.add(f)}let l=(c)=>{let h=new Map;for(let[f,u]of n.associations)if(f instanceof Pt||f instanceof bt)h.set(f,u);return c.traverse((f)=>{let u=n.associations.get(f);if(u!=null)h.set(f,u)}),h};return n.associations=l(r),r})}_createAnimationTracks(e,t,i,n,r){let s=[],o=e.name?e.name:e.uuid,a=[];function l(u){if(u.morphTargetInfluences)a.push(u.name?u.name:u.uuid)}if(hs[r.path]===hs.weights){if(l(e),e.isGroup)e.children.forEach(l)}else a.push(o);let c;switch(hs[r.path]){case hs.weights:c=Fr;break;case hs.rotation:c=ur;break;case hs.translation:case hs.scale:c=Br;break;default:switch(i.itemSize){case 1:c=Fr;break;case 2:case 3:default:c=Br;break}break}let h=n.interpolation!==void 0?V1[n.interpolation]:ws,f=this._getArrayFromAccessor(i);for(let u=0,m=a.length;u<m;u++){let g=new c(a[u]+"."+hs[r.path],t.array,f,h);if(n.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(g);s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=mf(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){return new(this instanceof ur?c_:xf)(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function J1(e,t,i){let n=t.attributes,r=new fi;if(n.POSITION!==void 0){let a=i.json.accessors[n.POSITION],{min:l,max:c}=a;if(l!==void 0&&c!==void 0){if(r.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){let h=mf(ea[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new A,l=new A;for(let c=0,h=s.length;c<h;c++){let f=s[c];if(f.POSITION!==void 0){let u=i.json.accessors[f.POSITION],{min:m,max:g}=u;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),u.normalized){let x=mf(ea[u.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}e.boundingBox=r;let o=new ni;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function Hx(e,t,i){let n=t.attributes,r=[];function s(o,a){return i.getDependency("accessor",o).then(function(l){e.setAttribute(a,l)})}for(let o in n){let a=pf[o]||o.toLowerCase();if(a in e.attributes)continue;r.push(s(n[o],a))}if(t.indices!==void 0&&!e.index){let o=i.getDependency("accessor",t.indices).then(function(a){e.setIndex(a)});r.push(o)}if(rt.workingColorSpace!==Hi&&"COLOR_0"in n)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`);return pr(e,t),J1(e,t,i),Promise.all(r).then(function(){return t.targets!==void 0?X1(e,t.targets,i):e})}var ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var j1=new rr(-1,1,1,-1,0,1);class u_ extends Oe{constructor(){super();this.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _e([0,2,0,0,2,0],2))}}var $1=new u_;class $s{constructor(e){this._mesh=new ee($1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,j1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _f extends Gn{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qt)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=cr.clone(e.uniforms),this.material=new Qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new $s(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ch extends Gn{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class yf extends Gn{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Mf{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new k);this._width=i.width,this._height=i.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _f(ta),this.copyPass.material.blending=In,this.timer=new zl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let s=this.passes[n];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Ch!==void 0){if(s instanceof Ch)i=!0;else if(s instanceof yf)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new k);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vf extends Gn{constructor(e,t,i=null,n=null,r=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ce}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=n}}var f_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Qs extends Gn{constructor(e,t=1,i,n){super();this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new k(e.x,e.y):new k(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,s,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Zt(r,s,{type:jt,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Zt(r,s,{type:jt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),s=Math.round(s/2)}let o=f_;this.highPassUniforms=cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new k(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cr.clone(ta.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,premultipliedAlpha:!0,blending:fa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new Tt,this._fsQuad=new $s(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new k(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),r)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=Qs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Qs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let n=[],r=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;n.push((s*o+(s+1)*a)/l),r.push(l)}return new Qt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new k(0.5,0.5)},direction:{value:new k(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Qs.BlurDirectionX=new k(1,0);Qs.BlurDirectionY=new k(0,1);var ql={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Sf extends Gn{constructor(){super();this.isOutputPass=!0,this.uniforms=cr.clone(ql.uniforms),this.material=new qs({name:ql.name,uniforms:this.uniforms,vertexShader:ql.vertexShader,fragmentShader:ql.fragmentShader}),this._fsQuad=new $s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===_t)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===io)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===no)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===ro)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===qr)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===oo)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===ao)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===so)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class bf extends Ps{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Yt;e.deleteAttribute("uv");let t=new ot({side:zt}),i=new ot,n=new nr(16777215,900,28,2);n.position.set(0.418,16.199,0.3),this.add(n);let r=new ee(e,t);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let s=new vn(e,i,6),o=new it;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new ee(e,ia(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new ee(e,ia(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ee(e,ia(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let h=new ee(e,ia(43));h.position.set(-0.462,8.89,14.52),h.scale.set(4.38,5.441,0.088),this.add(h);let f=new ee(e,ia(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,0.1),this.add(f);let u=new ee(e,ia(100));u.position.set(0,20,0),u.scale.set(1,0.1,1),this.add(u)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function ia(e){return new Dl({color:0,emissive:16777215,emissiveIntensity:e})}var Yl=new A;function zn(e,t,i,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Yl.copy(t),Yl[n]=0,Yl.normalize();let c=0.5*o/(o+a),h=1-Yl.angleTo(e)/l;if(Math.sign(Yl[i])===1)return h*c;else return a/(o+a)+c+c*(1-h)}class Qi extends Yt{constructor(e=1,t=1,i=1,n=2,r=0.1){let s=n*2+1;r=Math.min(e/2,t/2,i/2,r);super(1,1,1,s,s,s);if(this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,m=h.length/6,g=new A,x=0.5/s;for(let d=0,p=0;d<h.length;d+=3,p+=2)switch(a.fromArray(h,d),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[d+0]=c.x*Math.sign(a.x)+l.x*r,h[d+1]=c.y*Math.sign(a.y)+l.y*r,h[d+2]=c.z*Math.sign(a.z)+l.z*r,f[d+0]=l.x,f[d+1]=l.y,f[d+2]=l.z,Math.floor(d/m)){case 0:g.set(1,0,0),u[p+0]=zn(g,l,"z","y",r,i),u[p+1]=1-zn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[p+0]=1-zn(g,l,"z","y",r,i),u[p+1]=1-zn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[p+0]=1-zn(g,l,"x","z",r,e),u[p+1]=zn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),u[p+0]=1-zn(g,l,"x","z",r,e),u[p+1]=1-zn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),u[p+0]=1-zn(g,l,"x","y",r,e),u[p+1]=1-zn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[p+0]=zn(g,l,"x","y",r,e),u[p+1]=1-zn(g,l,"y","x",r,t);break}}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.segments,e.radius)}}var Wn=window.FUNUI,Xn=(e)=>document.querySelector(e),ds=matchMedia("(pointer:coarse)").matches||innerWidth<820;if(ds)document.body.classList.add("touch");var Rn=Xn("#c"),ps=new Rh({canvas:Rn,antialias:!ds,powerPreference:"high-performance"});ps.setPixelRatio(Math.min(devicePixelRatio||1,ds?1.5:2));ps.toneMapping=qr;ps.toneMappingExposure=1.05;var Ui=new Ps;Ui.background=new ce(329498);Ui.fog=new Ro(329498,40,95);var Q1=new cs(ps);Ui.environment=Q1.fromScene(new bf,0.04).texture;Ui.environmentIntensity=0.18;var dn=new Kt(68,1,0.05,120),us=null;function x_(){let e=innerWidth,t=innerHeight;if(ps.setSize(e,t,!1),dn.aspect=e/t,dn.fov=e/t<1?80:68,dn.updateProjectionMatrix(),us)us.setSize(e,t)}if(!ds)us=new Mf(ps),us.addPass(new vf(Ui,dn)),us.addPass(new Qs(new k(innerWidth,innerHeight),0.2,0.45,1)),us.addPass(new Sf);addEventListener("resize",x_);x_();var He=(()=>{let e=7;return()=>(e=e*16807%2147483647)/2147483647})();function Xt(e,t){let i=document.createElement("canvas");return i.width=e,i.height=t,i}function Vh(e,t=1,i=1,n=!0){let r=new on(e);if(r.wrapS=r.wrapT=hn,r.repeat.set(t,i),r.anisotropy=8,n)r.colorSpace=xt;return r}function Mi(e,t,i,n){let r=e.getImageData(0,0,t,i),s=r.data;for(let o=0;o<s.length;o+=4){let a=(He()-0.5)*n;s[o]+=a,s[o+1]+=a,s[o+2]+=a}e.putImageData(r,0,0)}var ti={};ti.concrete=(()=>{let e=Xt(512,512),t=e.getContext("2d");t.fillStyle="#7d7e82",t.fillRect(0,0,512,512);for(let i=0;i<40;i++){let n=t.createRadialGradient(He()*512,He()*512,5,He()*512,He()*512,120),r=He()*512,s=He()*512,o=t.createRadialGradient(r,s,5,r,s,90+He()*90);o.addColorStop(0,He()>0.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.09)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,512,512)}return Mi(t,512,512,22),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2,t.strokeRect(1,1,510,510),e})();ti.parquet=(()=>{let e=Xt(512,512),t=e.getContext("2d"),i=256,n=42;for(let r=0;r<12;r++){let s=r%3*85;for(let o=-1;o<3;o++){let a=24+He()*6,l=28+He()*12;t.fillStyle=`hsl(${a},48%,${l}%)`,t.fillRect(o*256+s,r*42,254,40);for(let c=0;c<14;c++){t.strokeStyle=`rgba(30,12,0,${0.05+He()*0.1})`,t.lineWidth=1,t.beginPath();let h=r*42+He()*42;t.moveTo(o*256+s,h),t.lineTo(o*256+s+256,h+(He()-0.5)*3),t.stroke()}}}return Mi(t,512,512,10),e})();ti.brick=(()=>{let e=Xt(512,512),t=e.getContext("2d");t.fillStyle="#3a2c28",t.fillRect(0,0,512,512);let i=128,n=42;for(let r=0;r<12;r++)for(let s=-1;s<5;s++){let o=r%2*64,a=8+He()*8,l=30+He()*14;t.fillStyle=`hsl(${a},${48+He()*14}%,${l}%)`,t.fillRect(s*i+o+3,r*n+3,i-6,n-6)}return Mi(t,512,512,26),e})();ti.carpet=(()=>{let e=Xt(256,256),t=e.getContext("2d");return t.fillStyle="#857f76",t.fillRect(0,0,256,256),Mi(t,256,256,26),e})();ti.slats=(()=>{let e=Xt(512,512),t=e.getContext("2d");for(let i=0;i<16;i++)t.fillStyle=`hsl(${28+He()*5},38%,${24+He()*8}%)`,t.fillRect(i*32,0,28,512),t.fillStyle="#0c0b0b",t.fillRect(i*32+28,0,4,512);return Mi(t,512,512,10),e})();ti.oak=(()=>{let e=Xt(512,512),t=e.getContext("2d"),i=512,n=128;for(let r=0;r<4;r++){let s=r%2*200;for(let o=-1;o<2;o++){t.fillStyle=`hsl(${32+He()*4},${28+He()*6}%,${66+He()*6}%)`,t.fillRect(o*512+s,r*128,510,126);for(let a=0;a<26;a++){t.strokeStyle=`rgba(90,60,30,${0.04+He()*0.08})`,t.beginPath();let l=r*128+He()*128;t.moveTo(o*512+s,l),t.lineTo(o*512+s+512,l+(He()-0.5)*6),t.stroke()}}}return Mi(t,512,512,8),e})();ti.greige=(()=>{let e=Xt(256,256),t=e.getContext("2d");return t.fillStyle="#a3a5ab",t.fillRect(0,0,256,256),Mi(t,256,256,8),e})();ti.graphite=(()=>{let e=Xt(256,256),t=e.getContext("2d");return t.fillStyle="#26272c",t.fillRect(0,0,256,256),Mi(t,256,256,10),e})();ti.plaster=(()=>{let e=Xt(256,256),t=e.getContext("2d");return t.fillStyle="#d9d8d4",t.fillRect(0,0,256,256),Mi(t,256,256,10),e})();ti.darkwall=(()=>{let e=Xt(256,256),t=e.getContext("2d");return t.fillStyle="#25252c",t.fillRect(0,0,256,256),Mi(t,256,256,12),e})();ti.pvc=(()=>{let e=Xt(256,256),t=e.getContext("2d");return t.fillStyle="#2f6b4f",t.fillRect(0,0,256,256),Mi(t,256,256,12),e})();ti.rubber=(()=>{let e=Xt(256,256),t=e.getContext("2d");return t.fillStyle="#23262f",t.fillRect(0,0,256,256),Mi(t,256,256,30),e})();ti.tile=(()=>{let e=Xt(256,256),t=e.getContext("2d");return t.fillStyle="#e4e4e2",t.fillRect(0,0,256,256),t.strokeStyle="#a9a9a6",t.lineWidth=3,t.strokeRect(0,0,256,256),Mi(t,256,256,8),e})();function _r(e,t,i=0.85,n=0,r=1,s=1,o={}){let a=Vh(ti[e],r/t,s/t);return new ot(Object.assign({map:a,bumpMap:a,bumpScale:e==="brick"?3:0.8,roughness:i,metalness:n},o))}var G=(e,t=0.6,i=0,n)=>new ot(Object.assign({color:e,roughness:t,metalness:i},n||{})),Ut=(e,t=1)=>new ot({color:0,emissive:e,emissiveIntensity:t,toneMapped:!0});function Uf(e,t,i,n=0,r=0,s=0,o=0,a=!0){let l=new ee(t,i);return l.position.set(n,r,s),l.rotation.y=o,l.castShadow=a,l.receiveShadow=!0,e.add(l),l}var O=(e,t,i,n,r,s,o,a,l=0)=>Uf(e,new Yt(t,i,n),r,s,o,a,l);var nt=(e,t,i,n,r,s,o,a,l=24)=>Uf(e,new Lt(t,i,n,l),r,s,o,a);function nn(e,t,i,n,r,s,o,a,l=0,c="bold 120px Arial Black, Arial",h,f=!0){let u=Xt(1024,Math.round(1024*n/i)),m=u.getContext("2d");if(h)m.fillStyle=h,m.fillRect(0,0,u.width,u.height);m.font=c,m.textAlign="center",m.textBaseline="middle",m.shadowColor=r,m.shadowBlur=28,m.fillStyle=r,m.fillText(t,u.width/2,u.height/2),m.shadowBlur=8,m.fillText(t,u.width/2,u.height/2);let g=new on(u);g.colorSpace=xt;let x=new ee(new Vt(i,n),new Tt({map:g,transparent:!h,toneMapped:!1}));if(x.position.set(s,o,a),x.rotation.y=l,e.add(x),!f)return x;let d=new nr(new ce(r),3,4,2);return d.position.set(s,o,a),d.position.add(new A(Math.sin(l),0,Math.cos(l)).multiplyScalar(0.4)),e.add(d),x}function Bi(e,t,i,n,r,s,o=12){let a=new nr(r,s,o,2);return a.position.set(t,i,n),e.add(a),a}var tn=new Je;Ui.add(tn);var Vi=new Je;tn.add(Vi);var ic=[];function qn(e,t,i,n,r,s,o,a=[],l=0.25,c=!1){let h=n-t,f=r-i,u=Math.hypot(h,f),m=-Math.atan2(f,h),g=[],x=0;a.sort((p,_)=>p[0]-_[0]);for(let[p,_]of a){if(p>x)g.push([x,p,0]);g.push([p,_,1]),x=_}if(x<u)g.push([x,u,0]);for(let[p,_,M]of g){let v=_-p,b=t+h/u*(p+_)/2,w=i+f/u*(p+_)/2,y=M?2.2:0,S=M?s-2.2:s;if(S>0.01){let R=new ee(new Yt(v,S,l),o(v,S));if(R.position.set(b,y+S/2,w),R.rotation.y=m,R.castShadow=R.receiveShadow=!0,e.add(R),c)ic.push(R)}if(M)for(let R of[p,_]){let U=t+h/u*R,P=i+f/u*R,H=new ee(new Yt(0.1,2.2,l+0.06),G(1842208,0.6));H.position.set(U,1.1,P),H.rotation.y=m,e.add(H)}}let d=new ee(new Yt(u,0.12,l+0.03),G(1381658,0.7));d.position.set((t+n)/2,0.06,(i+r)/2),d.rotation.y=m,e.add(d)}function rc(e,t,i){let n=new ji(t.map((o)=>new k(o[0],-o[1]))),r=new Zo(n);r.rotateX(-Math.PI/2);let s=new ee(r,i);return s.receiveShadow=!0,e.add(s),s}function ca(e,t,i){let n=new ji(e.map((o)=>new k(o[0],-o[1]))),r=new Zo(n);r.rotateX(-Math.PI/2),i.side=It;let s=new ee(r,i);s.position.y=t,Vi.add(s)}ti.carpetDark=(()=>{let e=Xt(256,256),t=e.getContext("2d");t.fillStyle="#1b1c22",t.fillRect(0,0,256,256);for(let i=0;i<6000;i++){let n=20+He()*22;t.fillStyle=`rgba(${n},${n},${n+7},.5)`,t.fillRect(He()*256,He()*256,1+He()*1.4,1+He()*2.2)}return Mi(t,256,256,12),e})();ti.fabric=(()=>{let e=Xt(256,256),t=e.getContext("2d");t.fillStyle="#3b3e46",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=1;for(let i=0;i<256;i+=4)t.beginPath(),t.moveTo(i,0),t.lineTo(i,256),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();return Mi(t,256,256,14),e})();ti.plywood=(()=>{let e=Xt(512,1024),t=e.getContext("2d"),i=t.createLinearGradient(0,0,512,0);i.addColorStop(0,"#c7a368"),i.addColorStop(0.5,"#d2b077"),i.addColorStop(1,"#c39d62"),t.fillStyle=i,t.fillRect(0,0,512,1024);for(let r=0;r<380;r++){let s=He()*512,o=He()*1024;t.strokeStyle=`rgba(${95+He()*40},${60+He()*30},25,${0.05+He()*0.12})`,t.lineWidth=0.6+He()*1.6,t.beginPath(),t.moveTo(s,o),t.bezierCurveTo(s+He()*16-8,o+120,s+He()*16-8,o+260,s+He()*10-5,o+380+He()*200),t.stroke()}for(let r=0;r<4;r++){let s=He()*512,o=He()*1024;for(let a=3;a<22;a+=4)t.strokeStyle=`rgba(90,55,20,${0.25-a/120})`,t.lineWidth=1.5,t.beginPath(),t.ellipse(s,o,a*0.7,a*1.5,0,0,7),t.stroke()}let n=83.9344262295082;for(let r=0;r<6;r++)for(let s=0;s<12;s++){let o=38+r*n,a=40+s*n;if(o>500)continue;t.fillStyle="rgba(30,18,8,.85)",t.beginPath(),t.arc(o,a,5,0,7),t.fill(),t.fillStyle="rgba(255,230,190,.35)",t.beginPath(),t.arc(o-1,a-1,1.6,0,7),t.fill()}return t.strokeStyle="rgba(40,24,10,.7)",t.lineWidth=3,t.strokeRect(1,1,510,1022),Mi(t,512,1024,10),e})();ti.matBlue=(()=>{let e=Xt(256,512),t=e.getContext("2d");return t.fillStyle="#244f9e",t.fillRect(0,0,256,512),Mi(t,256,512,26),t.strokeStyle="rgba(8,16,40,.9)",t.lineWidth=6,t.strokeRect(2,2,252,508),t.strokeStyle="rgba(160,190,255,.35)",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(12,12,232,488),e})();ti.steel=(()=>{let e=Xt(128,128),t=e.getContext("2d");return t.fillStyle="#5b6068",t.fillRect(0,0,128,128),Mi(t,128,128,18),e})();var Mt=new Je;tn.add(Mt);var Wi=3.2,__=[[-8.8,-3.85],[8.8,-3.85],[8.8,3.85],[-8.8,3.85]],y_=[[-3.9,-9.4],[4.3,-9.4],[4.3,-3.85],[-3.9,-3.85]],ms;function Wh(e,t,i){let n=_r(e,t,i,0,1,1);return n.map.repeat.set(1/t,1/t),n.bumpMap=n.map,n}var eo=(e,t)=>_r("darkwall",1.4,0.9,0,e,t),eS=(e,t)=>_r("graphite",1.4,0.85,0,e,t),tS=(e,t)=>_r("slats",1,0.7,0,e,t),M_=Wh("carpetDark",0.6,1);rc(Mt,__,M_);rc(Mt,y_,M_);qn(Mt,-8.8,-3.85,-3.9,-3.85,Wi,eo);qn(Mt,-3.9,-3.85,-3.9,-9.4,Wi,eo);qn(Mt,-3.9,-9.4,4.3,-9.4,Wi,tS);qn(Mt,4.3,-9.4,4.3,-3.85,Wi,eo);qn(Mt,4.3,-3.85,8.8,-3.85,Wi,eo);qn(Mt,8.8,-3.85,8.8,3.85,Wi,eS);qn(Mt,8.8,3.85,-8.8,3.85,Wi,eo,[[9.8,11.6]],0.25,!0);qn(Mt,-8.8,3.85,-8.8,-3.85,Wi,eo,[[2.65,4.85]]);for(let[e,t]of[[-3.9,-3.85],[4.3,-3.85]])O(Mt,0.5,Wi,0.5,G(2763569,0.7),e,Wi/2,t),O(Mt,0.54,0.12,0.54,G(855312,0.6),e,0.06,t);var v_=()=>G(1908260,0.9);ca(__,Wi,v_());ca(y_,Wi,v_());O(Vi,8.6,0.34,0.55,G(1381914,0.85),0.2,Wi-0.17,-3.85);for(let[e,t,i,n,r]of[[0,-3.62,17.2,0.06,6966527],[0,3.62,17.2,0.06,6966527],[-8.58,0,0.06,7.2,6966527],[8.58,0,0.06,7.2,6966527],[0.2,-9.18,8,0.06,16762512],[-3.68,-6.6,0.06,5.2,16762512],[4.08,-6.6,0.06,5.2,16762512]])O(Vi,i,0.025,n,Ut(r,3.5),e,Wi-0.015,t);for(let e=0;e<6;e++)for(let t of[-1.8,1.8])nt(Vi,0.07,0.07,0.02,Ut(16773856,8),-7+e*2.8+1,Wi-0.02,t);for(let e=0;e<3;e++)for(let t of[-5.5,-8])nt(Vi,0.07,0.07,0.02,Ut(16773856,8),-2.4+e*2.6+0.2,Wi-0.02,t);Ui.add(new Gl(16777215,0.34));ps.toneMappingExposure=0.8;Ui.environmentIntensity=0.3;Bi(Mt,0.2,2.8,0,16773598,14,14);Bi(Mt,-6.2,2.8,-2.2,16773340,10,9);Bi(Mt,-6.2,2.8,2.2,16773340,10,9);Bi(Mt,0.2,2.9,-6.6,16774116,16,10);Bi(Mt,2.9,2.5,2.5,16761466,10,8);Bi(Mt,2.9,0.35,1.6,11554047,3,4);Bi(Mt,7.3,2.6,0,9071871,5,7);Bi(Mt,-0.6,2.7,0.4,3725567,3,6);var ra=(e,t,i,n,r=0,s=0,o=0,a=tn)=>{let l=new ee(new Yt(e,t,i),n);return l.position.set(r,s,o),a.add(l),l};function S_(e,t,i,n){let r=document.createElement("canvas");r.width=e,r.height=t,i(r.getContext("2d"),e,t);let s=new on(r);if(s.colorSpace=xt,s.anisotropy=8,n)s.wrapS=s.wrapT=hn,s.repeat.set(n[0],n[1]);return s}var Xh=(e,t={})=>new ot({color:e,roughness:t.r??0.6,metalness:t.m??0.1,emissive:t.e??0,emissiveIntensity:t.ei??1,side:t.side}),b_=(e,t=1)=>new Tt({color:new ce(e).multiplyScalar(t),toneMapped:!1});function T_(e,t,i,n,r,s,o,a=0){let l=new ee(new Vt(e,t),new Tt({map:i,transparent:!0,toneMapped:!1}));return l.position.set(r,s,o),l.rotation.y=a,n.add(l),l}var la=S_,iS=Xh;var Bf=T_,E_=[];function nS(e,{w:t=1024,h:i=384,font:n="900 250px Inter,Arial,sans-serif",color:r="#3dff9a",fill:s="#c8ffe2",lw:o=10,blur:a=30}={}){return la(t,i,(l,c,h)=>{l.clearRect(0,0,c,h),l.font=n,l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=a,l.lineWidth=o,l.strokeStyle=r,l.lineJoin="round",l.strokeText(e,c/2,h/2+6),l.shadowBlur=0,l.fillStyle=s,l.fillText(e,c/2,h/2+6)})}function rS(e,t="#3dff9a",i=1){let n=nS(e,{w:768,h:192,font:"800 96px Inter,Arial,sans-serif",color:t,fill:"#ffffff",lw:6,blur:18}),r=new dl(new Ns({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.scale.set(2.4*i,0.6*i,1),r}(function(){let e=ra,t=S_,i=Xh,n=b_,r=T_,s={games:[["VAL","Valorant","#ff4655","#fff"],["LoL","League","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]},o=new Je;o.position.set(8.19,0,0),o.rotation.y=-Math.PI/2,Mt.add(o),ms=o;let a=i(790562,{r:0.4,m:0.4});e(1.9,0.05,0.85,a,0,0.75,0,o),[[-0.9,-0.38],[0.9,-0.38],[-0.9,0.38],[0.9,0.38]].forEach(([L,N])=>e(0.05,0.75,0.05,a,L,0.375,N,o)),e(1.9,0.015,0.02,n(3824895,1.4),0,0.72,0.43,o);let l=t(512,300,(L,N,te)=>{L.fillStyle="#12062a",L.fillRect(0,0,N,te),L.strokeStyle="#ff4fa6",L.globalAlpha=0.5,L.lineWidth=2,L.beginPath(),L.moveTo(20,40),L.quadraticCurveTo(70,80,40,140),L.moveTo(490,30),L.quadraticCurveTo(440,90,470,150),L.stroke(),L.globalAlpha=1,L.font="900 100px Inter,Arial",L.textAlign="center",L.shadowColor="#ff4f8a",L.shadowBlur=24,L.lineWidth=6,L.strokeStyle="#ff4f8a",L.strokeText("FONGER",N/2,180),L.shadowBlur=0,L.fillStyle="#2a0a2e",L.fillText("FONGER",N/2,180)}),c=s&&s.games||[],h=t(512,300,(L,N,te)=>{let z=L.createLinearGradient(0,0,N,te);z.addColorStop(0,"#10163f"),z.addColorStop(0.55,"#2a1a6e"),z.addColorStop(1,"#5a1f78"),L.fillStyle=z,L.fillRect(0,0,N,te),c.forEach((Y,J)=>{let pe=60+J%3*150,X=40+Math.floor(J/3)*110;L.fillStyle=Y[2],L.beginPath(),L.roundRect(pe,X,90,90,20),L.fill(),L.fillStyle=Y[3],L.font="900 30px Inter,Arial",L.textAlign="center",L.fillText(Y[0],pe+45,X+56)}),L.fillStyle="rgba(5,6,15,.9)",L.fillRect(0,te-26,N,26),L.fillStyle="#38e8ff",L.fillRect(10,te-20,14,14)});function f(L,N,te,z,Y,J,pe,X=0,ne=0,Me=0){new ss().load(L,(ve)=>{ve.colorSpace=xt,ve.anisotropy=8;let Ge=new ee(new Vt(N,te*(ve.image.height/ve.image.width)/(te/N)),new Tt({map:ve,transparent:!0,toneMapped:!1}));Ge.position.set(Y,J,pe),Ge.rotation.set(X,ne,Me),z.add(Ge)},void 0,()=>{})}let u=i(460814,{r:0.55,m:0.25}),m=i(724246,{r:0.28,m:0.6}),g=i(15329774,{r:0.45,m:0.05}),x=i(1382175,{m:0.8,r:0.35});function d(L,N,te){let J=new Je;J.position.set(L,0.775,-0.2),J.rotation.y=N,o.add(J);let pe=new ee(new Qi(0.56,0.32,0.025,3,0.006),m);pe.position.y=0.3,J.add(pe),r(0.542,0.3,te,J,0,0.3,0.0135),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.146,0.0135,J);let X=new ee(new is(0.0035,8),n(4063130,2));X.position.set(0.2,0.145,0.0135),J.add(X);let ne=new ee(new Lt(0.012,0.014,0.17,12),g);ne.position.set(0,0.2,-0.03),J.add(ne);let Me=new ee(new Lt(0.11,0.115,0.012,40),g);Me.position.set(0,0.006,-0.02),J.add(Me)}function p(L,N,te){let J=new Je;J.position.set(L,0.775,-0.2),J.rotation.y=N,o.add(J);let pe=new ee(new Qi(0.62,0.355,0.028,3,0.006),m);pe.position.y=0.36,J.add(pe),e(0.28,0.2,0.03,u,0,0.36,-0.028,J),r(0.604,0.33699999999999997,te,J,0,0.36,0.0155),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.1875,0.0155,J);let X=new Je;X.position.set(L,0.775,-0.405),o.add(X),e(0.06,0.05,0.05,x,0,-0.012,0,X),e(0.05,0.012,0.085,x,0,-0.035,0,X);let ne=new ee(new Lt(0.014,0.014,0.42,16),x);ne.position.set(0,0.21,0),X.add(ne);let Me=new ee(new Lt(0.02,0.02,0.03,16),x);Me.position.set(0,0.4,0),X.add(Me),e(0.03,0.022,0.12,x,0,0.4,0.06,X);let ve=new ee(new Lt(0.017,0.017,0.03,16),x);ve.position.set(0,0.4,0.12),X.add(ve),e(0.03,0.02,0.06,x,0,0.4,0.15,X),e(0.1,0.1,0.012,x,0,0.36,-0.05,J)}d(-0.52,0.3,l),p(0.12,-0.04,h);{let L=new ee(new Lt(0.045,0.047,0.01,32),g);L.position.set(-0.02,0.78,-0.08),o.add(L);let N=new ee(new Yo(0.028,0.033,32),n(8019199,1.2));N.rotation.x=-Math.PI/2,N.position.set(-0.02,0.7855,-0.08),o.add(N);let te=new ee(new Lt(0.03,0.03,0.15,24),i(657933,{r:0.4,m:0.6}));te.position.set(0.5,0.85,-0.14),o.add(te);let z=new ee(new Lt(0.031,0.031,0.012,24),x);z.position.set(0.5,0.92,-0.14),o.add(z)}let _=t(1024,440,(L,N,te)=>{L.fillStyle="#0c0d11",L.fillRect(0,0,N,te),L.strokeStyle="#2b2e3a",L.lineWidth=4,L.setLineDash([12,9]),L.strokeRect(12,12,N-24,te-24),L.setLineDash([]),L.font="700 64px Inter,Arial",L.fillStyle="#9aa0b4",L.textAlign="right",L.fillText("Logitech G",N-52,te-44)}),M=new ee(new Vt(0.9,0.38),new ot({map:_,roughness:0.95}));M.rotation.x=-Math.PI/2,M.position.set(-0.1,0.7765,0.2),o.add(M);let v=t(1480,570,(L,N,te)=>{L.fillStyle="#0a0b10",L.fillRect(0,0,N,te);let z=76,Y=40,J=40,pe="#6a4cff",X=(ve,Ge,Ee,pt,Ne=1)=>{let Fe=Y+ve*z+3,lt=J+Ge*z+3,ae=Ee*z-6,ue=Ne*z-6;L.shadowColor=pe,L.shadowBlur=16,L.fillStyle="#12141c",L.beginPath(),L.roundRect(Fe,lt,ae,ue,10),L.fill(),L.shadowBlur=0,L.strokeStyle="rgba(106,76,255,.65)",L.lineWidth=2,L.stroke(),L.fillStyle="#c4b8ff",L.font="600 21px Inter,Arial",L.textAlign="center",L.textBaseline="middle",L.fillText(pt,Fe+ae/2,lt+ue/2+1)},ne=(ve,Ge,Ee=0)=>{let pt=Ee;Ge.forEach(([Ne,Fe])=>{if(Ne!==null)X(pt,ve,Fe,Ne);pt+=Fe})};ne(0,[["Esc",1],[null,1],["F1",1],["F2",1],["F3",1],["F4",1],[null,0.5],["F5",1],["F6",1],["F7",1],["F8",1],[null,0.5],["F9",1],["F10",1],["F11",1],["F12",1],[null,0.25],["Prt",1],["Scr",1],["Pau",1]]);let Me="1234567890".split("");ne(1.5,[["`",1],...Me.map((ve)=>[ve,1]),["-",1],["=",1],["⌫",2],[null,0.25],["Ins",1],["Hm",1],["Pg↑",1]]),ne(2.5,[["Tab",1.5],..."QWERTYUIOP".split("").map((ve)=>[ve,1]),["[",1],["]",1],["\\",1.5],[null,0.25],["Del",1],["End",1],["Pg↓",1]]),ne(3.5,[["Caps",1.75],..."ASDFGHJKL".split("").map((ve)=>[ve,1]),[";",1],["'",1],["Enter",2.25]]),ne(4.5,[["Shift",2.25],..."ZXCVBNM".split("").map((ve)=>[ve,1]),[",",1],[".",1],["/",1],["Shift",2.75],[null,1.25],["↑",1]]),ne(5.5,[["Ctrl",1.25],["Win",1.25],["Alt",1.25],["",6.25],["Alt",1.25],["Fn",1.25],["Menu",1.25],["Ctrl",1.25],[null,0.25],["←",1],["↓",1],["→",1]])}),b=new Je;b.position.set(-0.2,0.7765,0.22),o.add(b);let w=new ee(new Qi(0.365,0.016,0.142,3,0.006),i(789778,{r:0.4,m:0.55}));w.position.y=0.008,b.add(w);let y=new ee(new Vt(0.352,0.13285621621621618),new ot({map:v,emissiveMap:v,emissive:16777215,emissiveIntensity:0.55,roughness:0.6}));y.rotation.x=-Math.PI/2,y.position.y=0.0166,b.add(y),f("logos/razer.png",0.03,0.03,b,0.14,0.0168,-0.06,-Math.PI/2);let S=new Je;S.position.set(0.27,0.7775,0.21),S.rotation.y=0.12,o.add(S);{let L=new an(1,40,28),N=L.attributes.position;for(let Y=0;Y<N.count;Y++){let J=N.getX(Y),pe=N.getY(Y),X=N.getZ(Y);pe=Math.max(pe,0);let ne=X*0.5+0.5,Me=0.0225+0.0095*ne;N.setXYZ(Y,J*Me*(1-0.18*Math.max(0,pe)),pe*(0.0115+0.013*ne),X*0.0635)}L.computeVertexNormals(),S.add(new ee(L,i(657932,{r:0.62,m:0.1}))),e(0.0014,0.0008,0.034,i(0),0,0.0185,-0.028,S);let te=new ee(new Lt(0.0045,0.0045,0.006,14),i(2763830,{r:0.5,m:0.5}));te.rotation.z=Math.PI/2,te.position.set(0,0.0215,-0.026),S.add(te);let z=new ee(new is(0.0025,10),n(4063130,0.9));z.rotation.x=-Math.PI/2,z.position.set(0,0.0195,0.01),S.add(z),f("logos/logitech-g.png",0.012,0.012,S,0,0.0245,0.032,-Math.PI/2)}let R=new Je;R.position.set(-0.7,0.775,0.26),R.rotation.y=0.5,o.add(R);let U=i(14252331,{r:0.28,m:0.85}),P=i(789518,{r:0.9});{let L=new Je;L.position.y=0.05,L.rotation.x=Math.PI/2-0.15,R.add(L);let N=new ee(new ir(0.088,0.0085,10,40,Math.PI),i(657932,{r:0.7}));N.position.y=0.02,L.add(N),[-1,1].forEach((te)=>{let z=new ee(new Lt(0.047,0.044,0.03,36),U);z.rotation.z=Math.PI/2,z.position.set(te*0.093,-0.06,0),L.add(z);let Y=new ee(new ir(0.04,0.005,8,32),i(789518,{m:0.7,r:0.35}));Y.rotation.y=Math.PI/2,Y.position.set(te*0.108,-0.06,0),L.add(Y);let J=new ee(new Lt(0.048,0.048,0.022,36),P);J.rotation.z=Math.PI/2,J.position.set(te*0.075,-0.06,0),L.add(J)})}let H=E_,ie="n",I=new Je;I.position.set(0.83,1.025,-0.15),I.rotation.y=0.28,o.add(I);{let z=i(658194,{r:0.4,m:0.55});e(0.22,0.014,0.46,i(658194,{r:0.6,m:0.4}),0,0.243,0,I),e(0.22,0.012,0.46,z,0,-0.244,0,I),e(0.01,0.5,0.46,z,0.105,0,0,I),e(0.22,0.5,0.01,i(460813),0,0,-0.225,I),[-1,1].forEach((Ne)=>e(0.012,0.5,0.012,z,-0.104,0,Ne*0.224,I)),e(0.22,0.5,0.012,i(723988,{r:0.5,m:0.4}),0,0,0.224,I);let Y=t(256,256,(Ne,Fe,lt)=>{Ne.fillStyle="#17104a",Ne.fillRect(0,0,Fe,lt);let ae=Ne.createRadialGradient(Fe/2,lt/2,10,Fe/2,lt/2,Fe/2);ae.addColorStop(0,"#9a7bff"),ae.addColorStop(1,"#4a2cff"),Ne.fillStyle=ae,Ne.fillRect(0,0,Fe,lt),Ne.strokeStyle="#1a0f5a",Ne.lineWidth=3;let ue=14;for(let fe=-1;fe<14;fe++)for(let Ie=-1;Ie<14;Ie++){let Ue=Ie*ue*1.75+fe%2*ue*0.87,je=fe*ue*1.5;Ne.beginPath();for(let Xe=0;Xe<6;Xe++){let ut=Math.PI/3*Xe+Math.PI/6;Ne.lineTo(Ue+Math.cos(ut)*ue,je+Math.sin(ut)*ue)}Ne.closePath(),Ne.stroke()}Ne.fillStyle="#05061a",Ne.beginPath();for(let fe=0;fe<6;fe++){let Ie=Math.PI/3*fe;Ne.lineTo(Fe/2+Math.cos(Ie)*34,lt/2+Math.sin(Ie)*34)}Ne.closePath(),Ne.fill()});e(0.13,0.46,0.004,i(526618),0.02,0,0.2305,I),[0.155,0,-0.155].forEach((Ne)=>{let Fe=new ee(new is(0.064,40),new Tt({map:Y,toneMapped:!1,color:new ce(1.1,1.1,1.4)}));Fe.position.set(0.02,Ne,0.23320000000000002),I.add(Fe)});let J=-0.08,pe=e(0.006,0.44,0.36,i(1053471,{r:0.6,m:0.3}),0.08,0,-0.03,I),X=new ee(new Lt(0.036,0.036,0.03,32),i(658194,{r:0.3,m:0.7}));X.rotation.z=Math.PI/2,X.position.set(J+0.03,0.09,0.07),I.add(X);let ne=new ee(new Yo(0.019,0.03,32),n(4877567,1.8));ne.rotation.y=-Math.PI/2,ne.position.set(J+0.0125,0.09,0.07),I.add(ne);let Me=(Ne)=>I.add(new ee(new Ll(new Wo(Ne.map((Fe)=>new A(...Fe))),16,0.0075,8),i(14672878,{r:0.5})));Me([[J+0.03,0.12,0.09],[J+0.03,0.2,0.1],[J+0.03,0.235,0.05]]),Me([[J+0.03,0.12,0.05],[J+0.03,0.2,0],[J+0.03,0.235,-0.04]]);let ve=new ee(new Qi(0.04,0.05,0.3,2,0.006),i(658192,{r:0.35,m:0.7}));ve.position.set(J+0.03,-0.06,0.02),I.add(ve),e(0.004,0.004,0.26,n(16054015,0.9),J+0.008,-0.06,0.02,I),[0,0.016].forEach((Ne)=>e(0.012,0.11,0.008,n(6966527,1.2),J+0.03,0.13,-0.09-Ne,I));let Ge=e(0.04,0.03,0.3,i(723986,{r:0.5,m:0.5}),0,0.22,-0.02,I),Ee=new ee(new Vt(0.44,0.48),new Ni({color:659488,transparent:!0,opacity:0.2,roughness:0.04,clearcoat:1,side:It,depthWrite:!1}));Ee.rotation.y=-Math.PI/2,Ee.position.set(-0.108,0,0),I.add(Ee),((Ne,Fe)=>e(0.006,Fe,0.46,z,-0.107,Ne,0,I))(0.245,0.012)}{let L=new nr(5913855,3.2,3,1.6);L.position.set(0.85,1.2,-0.6),o.add(L)}let Z=new Je;Z.position.set(0.05,0,0.9),Z.rotation.y=0.22,o.add(Z);{let L=i(856356,{r:0.55,m:0.05}),N=i(1716106,{r:0.5,e:662118,ei:0.12}),te=i(460813,{r:0.4,m:0.7}),z=new ee(new Qi(0.52,0.09,0.5,4,0.04),L);z.position.y=0.5,Z.add(z),[-1,1].forEach((X)=>{let ne=new ee(new Qi(0.06,0.1,0.46,3,0.025),N);ne.position.set(X*0.25,0.54,0),Z.add(ne)});let Y=new ee(new Qi(0.5,0.72,0.09,4,0.04),L);Y.position.set(0,0.92,0.26),Y.rotation.x=-0.12,Z.add(Y),[-1,1].forEach((X)=>{let ne=new ee(new Qi(0.07,0.5,0.1,3,0.03),N);ne.position.set(X*0.235,0.88,0.235),ne.rotation.x=-0.12,Z.add(ne)});let J=new ee(new Qi(0.26,0.17,0.08,3,0.04),N);J.position.set(0,1.28,0.3),J.rotation.x=-0.12,Z.add(J),[-1,1].forEach((X)=>{e(0.04,0.2,0.04,te,X*0.3,0.68,0.02,Z);let ne=new ee(new Qi(0.07,0.03,0.26,2,0.012),L);ne.position.set(X*0.3,0.79,-0.03),Z.add(ne)});let pe=new ee(new Lt(0.03,0.035,0.34,12),te);pe.position.y=0.3,Z.add(pe);for(let X=0;X<5;X++){let ne=X/5*Math.PI*2,Me=e(0.3,0.03,0.045,te,0,0.06,0,Z);Me.position.set(Math.sin(ne)*0.15,0.07,Math.cos(ne)*0.15),Me.rotation.y=ne-Math.PI/2;let ve=new ee(new an(0.028,10,8),i(1118744,{r:0.8}));ve.position.set(Math.sin(ne)*0.31,0.03,Math.cos(ne)*0.31),Z.add(ve)}}{let L=new ee(new is(1.5,64),new ot({map:t(512,512,(N,te,z)=>{let Y=N.createRadialGradient(te/2,z/2,20,te/2,z/2,te/2);Y.addColorStop(0,"#1a1f4e"),Y.addColorStop(1,"#0c0f2a"),N.fillStyle=Y,N.fillRect(0,0,te,z),N.strokeStyle="#3a5cff",N.globalAlpha=0.6,N.lineWidth=8,N.beginPath(),N.arc(te/2,z/2,te/2-14,0,7),N.stroke()}),roughness:1}));L.rotation.x=-Math.PI/2,L.position.set(0.1,0.006,0.75),o.add(L)}})();function sS(){let e=new Je,t=ra,i=Xh;{let o=i(723984,{r:0.38,m:0.65}),a=i(328966,{r:0.9}),l=new ss().load("fun-print.jpg");l.colorSpace=xt,l.anisotropy=8;let c=new ee(new Qi(2.4,0.042,0.6,4,0.014),o);c.position.y=0.6789999999999999,e.add(c);let h=new ee(new Vt(2.364,0.564),new Ni({map:l,roughness:0.5,clearcoat:0.35,clearcoatRoughness:0.35}));h.rotation.x=-Math.PI/2,h.position.y=0.7011999999999999,e.add(h);let f=i(460812);[-0.6,0,0.6].forEach((d)=>t(0.005,0.0012,0.58,f,d,0.7016,0,e)),[-1,1].forEach((d)=>t(2.3,0.03,0.02,o,0,0.6399999999999999,d*0.255,e));let u=1.0999999999999999,m=0.255,g=(d,p,_,M,v,b)=>{let w=new ee(new Lt(d,d,p,16),_);return w.position.set(M,v,b),e.add(w),w};[-1,0,1].forEach((d)=>[-1,1].forEach((p)=>{let _=d*u,M=p*m;g(0.0175,0.38,o,_,0.47,M),g(0.024,0.05,o,_,0.36,M),g(0.0145,0.36,o,_,0.18,M),g(0.019,0.02,a,_,0.01,M)}));let x=(d,p,_)=>{let M=new A(...d),v=new A(...p),b=v.clone().sub(M),w=new ee(new Lt(_,_,b.length(),10),o);w.position.copy(M.clone().add(v).multiplyScalar(0.5)),w.quaternion.setFromUnitVectors(new A(0,1,0),b.normalize()),e.add(w)};[-u,0,u].forEach((d)=>x([d,0.2,-m],[d,0.2,m],0.011)),[-u,u].forEach((d)=>x([d,0.56,-m],[d,0.56,m],0.009))}return e}function oS(e,t,i,n,r){nt(e,0.045,0.034,0.11,new ot({color:r,roughness:0.4,side:It}),t,i+0.055,n,16)}function If(e,t,i,n,r=1,s=13936170){let o=[[0.001,0],[0.07,0],[0.07,0.015],[0.03,0.03],[0.02,0.12],[0.05,0.15],[0.07,0.17],[0.09,0.26],[0.1,0.34],[0.08,0.36],[0.075,0.34],[0.07,0.25],[0.05,0.18],[0.001,0.17]].map((l)=>new k(l[0],l[1])),a=Uf(e,new Pl(o,24),new ot({color:s,roughness:0.18,metalness:1}),t,i,n);return a.scale.setScalar(r),a}function aS(e,t,i){O(e,t,i,0.03,G(921104,0.5),0,i/2+0.2,-0.18);for(let r of[-1,1])O(e,0.05,i,0.4,G(921104,0.5),r*(t/2-0.025),i/2+0.2,0);O(e,t,0.06,0.4,G(921104,0.5),0,i+0.2,0),O(e,t,0.2,0.4,G(921104,0.5),0,0.1,0),O(e,t-0.12,i-0.2,0.02,new ot({color:12577023,transparent:!0,opacity:0.12,roughness:0.02}),0,i/2+0.2,0.2);let n=4;for(let r=0;r<n;r++){let s=0.45+r*((i-0.5)/n);O(e,t-0.1,0.02,0.34,G(3816000,0.3,0.4),0,s,0),O(e,t-0.1,0.01,0.01,Ut(14674687,5),0,s-0.015,0.14);for(let o=0;o<4;o++)if((r+o)%3===0)If(e,-t/2+0.25+o*(t-0.5)/3,s+0.01,0,0.3+He()*0.12,[13936170,12633288][o%2]);else O(e,0.16,0.12+He()*0.05,0.14,G([2838527,16726843,2007130,13206586][o],0.5),-t/2+0.25+o*(t-0.5)/3,s+0.07,0)}}(function(){let e=new Je;e.position.set(-8.675,0,-2.6),e.rotation.y=Math.PI/2,Mt.add(e),O(e,1,1,0.1,G(1908258,0.6),0,1.73,0),O(e,0.08,1,0.25,G(1908258,0.6),-0.5,1.73,0.09),O(e,0.08,1,0.25,G(1908258,0.6),0.5,1.73,0.09);let t=Xt(512,512),i=t.getContext("2d");i.translate(256,256);let n=["#e8e1c0","#111"];for(let a=0;a<20;a++)for(let[l,c,h,f]of[[240,215,"#d12","#093"],[215,150,"#e8e1c0","#111"],[150,135,"#d12","#093"],[135,40,"#e8e1c0","#111"]])i.beginPath(),i.moveTo(0,0),i.arc(0,0,l,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?h:f,i.fill(),i.beginPath(),i.moveTo(0,0),i.arc(0,0,c,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?c==215||c==135?"#e8e1c0":n[1]:n[0];i.setTransform(1,0,0,1,0,0),i.fillStyle="#111",i.fillRect(0,0,512,512),i.translate(256,256);let r=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];for(let a=0;a<20;a++){let l=(a-0.5)*Math.PI/10-Math.PI/2,c=l+Math.PI/10,h=a%2===0,f=[[250,220,h?"#c8202a":"#0b8a3e"],[220,150,h?"#111":"#e8e1c0"],[150,125,h?"#c8202a":"#0b8a3e"],[125,40,h?"#111":"#e8e1c0"]];for(let[u,m,g]of f)i.beginPath(),i.arc(0,0,u,l,c),i.arc(0,0,m,c,l,!0),i.closePath(),i.fillStyle=g,i.fill()}i.beginPath(),i.arc(0,0,40,0,7),i.fillStyle="#0b8a3e",i.fill(),i.beginPath(),i.arc(0,0,16,0,7),i.fillStyle="#c8202a",i.fill();let s=new on(t);s.colorSpace=xt;let o=new ee(new is(0.225,48),new ot({map:s,roughness:0.8}));o.position.set(0,1.73,0.06),e.add(o),nn(e,"DARTS",0.8,0.28,"#ff3b3b",0,2.45,0.05,0,"bold 180px Arial Black"),O(e,0.6,0.45,0.04,G(1448984,0.8),0.95,1.6,0.05),O(e,0.01,0.01,0.01,G(0)),O(e,0.9,0.012,0.04,G(15658734,0.5),0,0.007,2.37),O(e,0.9,0.012,0.01,Ut(16726843,3),0,0.012,2.35),Bi(e,0,2.5,0.5,16771522,4,5)})();var Ih=(e,t=0.95)=>_r("fabric",0.5,t,0,1,1,{color:e}),Wt=(e,t,i,n,r,s,o,a,l=0.07,c=0,h=0)=>{let f=new ee(new Qi(t,i,n,4,l),r);return f.position.set(s,o,a),f.rotation.x=c,f.rotation.z=h,f.castShadow=f.receiveShadow=!0,e.add(f),f},Uh;function lS(){let e=new Je;e.position.set(0.2,0,-4.3),e.rotation.y=Math.PI,Mt.add(e);let t=Ih(4869462),i=Ih(6843512),n=Ih(7567493),s=new ji([[-2.7,0],[2.7,0],[2.7,2.6],[1.7,2.6],[1.7,1],[-1.7,1],[-1.7,2.6],[-2.7,2.6]].map((p)=>new k(p[0],-p[1]))),o=new Xs(s,{depth:0.24,bevelEnabled:!0,bevelThickness:0.05,bevelSize:0.05,bevelSegments:4,curveSegments:4});o.rotateX(-Math.PI/2);let a=new ee(o,t);a.position.y=0.1,a.castShadow=a.receiveShadow=!0,e.add(a);for(let[p,_]of[[-2.6,0.1],[2.6,0.1],[-2.6,2.5],[2.6,2.5],[-1.8,0.9],[1.8,0.9]])nt(e,0.03,0.03,0.08,G(723725,0.4,0.6),p,0.04,_,10);let l=Ut(6966527,0.9);O(e,5.2,0.012,0.02,l,0,0.075,0.03),Wt(e,5.4,0.58,0.28,t,0,0.67,0.14,0.09);for(let p of[-1,1])Wt(e,0.28,0.58,2.32,t,p*2.56,0.67,1.44,0.09);for(let p=0;p<3;p++)Wt(e,1.1,0.17,0.7,i,-1.13+p*1.13,0.5,0.65,0.07);for(let p of[-1,1])Wt(e,0.72,0.17,0.7,n,p*2.06,0.5,0.65,0.07),Wt(e,0.72,0.17,0.78,i,p*2.06,0.5,1.4,0.07),Wt(e,0.72,0.17,0.78,i,p*2.06,0.5,2.2,0.07),Wt(e,0.22,0.46,0.9,i,p*2.27,0.9,1.2,0.09,0,-p*0.16),Wt(e,0.22,0.46,0.9,i,p*2.27,0.9,2.1,0.09,0,-p*0.16);for(let p=0;p<5;p++)Wt(e,0.95,0.5,0.2,i,-1.9+p*0.95,0.88,0.37,0.09,-0.2);let c=[13208108,2781048,15130834,8007498,2781048,13208108];[[-2.1,0.75,0.98,0.45,-0.5],[-1.3,0.72,0.55,0.4,0.3],[2.15,0.75,0.97,0.45,0.5],[1.3,0.72,0.55,0.4,-0.3],[-2.2,0.72,2.35,0.4,1.4],[2.2,0.72,2.35,0.4,-1.4]].forEach(([p,_,M,v,b],w)=>{let y=Wt(e,v,v,0.13,Ih(c[w],1),p,_,M,0.05,-0.3);y.rotation.y=b});let h=_r("slats",1,0.45,0,1.6,0.9,{color:4862754});Wt(e,1.5,0.1,0.85,h,0,0.44,1.75,0.03),Wt(e,1.2,0.3,0.6,G(1182986,0.6),0,0.24,1.75,0.02),Wt(e,1.4,0.04,0.8,G(1708557,0.7),0,0.1,1.75,0.01),O(e,0.32,0.05,0.22,G(2775690,0.6),-0.35,0.51,1.7),O(e,0.3,0.04,0.2,G(12599338,0.6),-0.35,0.555,1.7),nt(e,0.12,0.09,0.08,G(2369067,0.4,0.3),0.35,0.53,1.8,24);let f=Xt(1024,700),u=f.getContext("2d"),m=u.createLinearGradient(0,0,1024,700);m.addColorStop(0,"#16182a"),m.addColorStop(1,"#2a1740"),u.fillStyle=m,u.fillRect(0,0,1024,700),u.strokeStyle="#7a5cff",u.lineWidth=8,u.setLineDash([26,16]),u.strokeRect(40,40,944,620),u.setLineDash([]),u.fillStyle="#9aa0c8",u.textAlign="center",u.textBaseline="middle",u.font="bold 74px Arial",u.fillText("GAME RUG",512,300),u.font="38px Arial",u.fillText('placeholder – window.setRugTexture("moje.jpg")',512,380);let g=new on(f);g.colorSpace=xt,g.anisotropy=8,Uh=new ot({map:g,roughness:1});let x=new ee(new Vt(3.8,2.6),Uh);x.rotation.set(-Math.PI/2,0,Math.PI),x.position.set(0,0.014,1.75),x.receiveShadow=!0,e.add(x);let d=new ee(new Vt(3.86,2.66),G(921362,1));d.rotation.x=-Math.PI/2,d.position.set(0,0.011,1.75),e.add(d)}lS();window.setRugTexture=(e)=>new ss().load(e,(t)=>{t.colorSpace=xt,t.anisotropy=8,Uh.map=t,Uh.needsUpdate=!0});(function(){let t=new Je;t.position.set(0.2,0,-9.2),Mt.add(t),O(t,2.5,1.45,0.05,G(328966,0.3,0.5),0,1.65,0);let i=Xt(640,360),n=i.getContext("2d"),r=n.createLinearGradient(0,0,640,360);r.addColorStop(0,"#0b2a4a"),r.addColorStop(0.5,"#4a1f8f"),r.addColorStop(1,"#e8602e"),n.fillStyle=r,n.fillRect(0,0,640,360),n.fillStyle="rgba(255,255,255,.9)",n.font="bold 54px Arial",n.textAlign="center",n.fillText("MAN CAVE",320,190);let s=new on(i);s.colorSpace=xt;let o=new ee(new Vt(2.42,1.36),new Tt({map:s,toneMapped:!1}));o.position.set(0,1.65,0.03),t.add(o),O(t,2.8,0.5,0.42,G(1381914,0.55),0,0.3,0.17),O(t,2.8,0.03,0.44,G(4862754,0.45),0,0.565,0.17),O(t,1.2,0.07,0.1,G(723725,0.4,0.5),0,0.62,0.17);for(let a of[-1.75,1.75])O(t,0.3,1.5,0.22,G(1052948,0.5),a,0.78,0.12),O(t,0.22,0.22,0.02,G(657932,0.3,0.6),a,1.2,0.24),nt(t,0.09,0.09,0.02,G(1908258,0.5),a,0.6,0.235,24).rotation.x=Math.PI/2;O(t,2.6,0.03,0.03,Ut(16734920,3),0,0.9,0.01).visible=!1,O(t,2.6,0.02,0.02,Ut(6966527,3.5),0,0.88,-0),O(t,2.7,0.012,0.01,Ut(16734920,3),0,0.5,0.39),nn(t,"MAN CAVE",1.9,0.34,"#ff4fa6",0,2.75,0.03,0,"bold 130px Arial Black",void 0,!1)})();function cS(){let e=ms,t=Xh(790562,{r:0.4,m:0.4});for(let l of[-1,1]){let c=l*1.775;ra(1.65,0.05,0.85,t,c,0.75,0,e),ra(0.05,0.75,0.05,t,l*2.575,0.375,-0.38,e),ra(0.05,0.75,0.05,t,l*2.575,0.375,0.38,e),ra(1.65,0.015,0.02,b_(3824895,1.4),c,0.72,0.43,e)}let i=new ee(new Vt(5.3,0.9),new Tt({color:2768127,transparent:!0,opacity:0.16,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(0,0.012,0.05),e.add(i);let n=(l,c)=>{nt(e,0.012,0.012,0.22,G(855570,0.4,0.8),l,0.86,-0.28,12),O(e,0.2,0.01,0.16,G(855570,0.4,0.8),l,0.78,-0.2)},r=(l,c,h)=>{let f=Xt(1024,Math.round(1024*h/c));l(f.getContext("2d"),f.width,f.height);let u=new on(f);return u.colorSpace=xt,u.anisotropy=8,u},s=r((l,c,h)=>{let f=l.createLinearGradient(0,0,c,0);f.addColorStop(0,"#05103a"),f.addColorStop(0.5,"#4a1f8f"),f.addColorStop(1,"#ff4f6a"),l.fillStyle=f,l.fillRect(0,0,c,h),l.fillStyle="rgba(255,255,255,.12)";for(let u=0;u<40;u++)l.fillRect(He()*c,He()*h*0.7,40+He()*120,3);l.fillStyle="#fff",l.font="bold 70px Arial",l.fillText('ULTRAWIDE 49"',60,h-70),l.strokeStyle="#38e8ff",l.lineWidth=4,l.beginPath(),l.arc(c/2,h/2,40,0,7),l.stroke()},1.2,0.34),o=r((l,c,h)=>{l.fillStyle="#0b0d1c",l.fillRect(0,0,c,h),l.fillStyle="#38e8ff";for(let f=0;f<14;f++)l.fillRect(40,60+f*110,200+He()*600,18);l.fillStyle="#ff4f8a",l.font="bold 56px Arial",l.fillText("STATS",40,46)},0.34,0.6);{let f=new Lt(1.1,1.1,0.34,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),u=new ee(f,new Tt({map:s,toneMapped:!1,side:zt}));u.scale.x=-1,u.position.set(-1.78,1.12,0.8500000000000001),e.add(u);let m=new ee(new Lt(1.12,1.12,0.37,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),G(526605,0.4,0.5));m.material.side=It,m.scale.x=-1,m.position.copy(u.position),e.add(m),n(-1.78,0),O(e,1.24,0.012,0.03,Ut(6966527,3),-1.78,0.94,-0.3)}for(let[l,c]of[[1.45,0.35],[2.1,0.7]]){let h=new Je;h.position.set(l,0.775,-0.18),h.rotation.y=c,e.add(h),Wt(h,0.36,0.62,0.025,G(460811,0.4,0.5),0,0.5,0,0.006);let f=new ee(new Vt(0.34,0.6),new Tt({map:o,toneMapped:!1}));f.position.set(0,0.5,0.0135),h.add(f),nt(h,0.012,0.012,0.25,G(855570,0.4,0.8),0,0.1,-0.03,12),O(h,0.18,0.01,0.14,G(855570,0.4,0.8),0,0.004,-0.02),O(h,0.36,0.012,0.02,Ut(16732042,3),0,0.19,-0.02)}let a=(l,c)=>{let h=new ee(new Vt(0.9,1.6),new Tt({color:new ce(c).multiplyScalar(0.5),transparent:!0,opacity:0.9,toneMapped:!1}));h.position.set(8.665,1.9,l),h.rotation.y=-Math.PI/2,Mt.add(h)};[[-2.1,6966527],[-1.05,3717375],[0,16732070],[1.05,3717375],[2.1,6966527]].forEach(([l,c])=>a(l,c)),O(Mt,0.03,0.03,5.4,Ut(6966527,3.5),8.66,1.2,0),O(Mt,0.03,0.03,5.4,Ut(16732070,3.5),8.66,2.7,0),nn(Mt,"FONGER",2.4,0.5,"#ff4fa6",8.64,2.95,0,-Math.PI/2,"bold 150px Arial Black",void 0,!1)}cS();var Tf=[];function hS(e){if(!Tf[e]){let i=[],n=(h,f,u,m,g,x=1,d=1,p=1,_=0,M=0)=>{h.scale(x,d,p),h.rotateX(_),h.rotateZ(M),h.translate(u,m,g);let v=h.attributes.position.count,b=new Float32Array(v*3),w=new ce(f);for(let y=0;y<v;y++)b[y*3]=w.r,b[y*3+1]=w.g,b[y*3+2]=w.b;h.setAttribute("color",new kt(b,3)),i.push(h)},r=15780000,s=(h,f,u)=>new Yt(h,f,u),o=(h)=>new an(h,12,10),a=(h,f)=>new Hs(h,f,8),l=(h,f)=>new Lt(h,h,f,12);if(n(l(0.05,0.012),1381658,0,0.006,0),e===0){n(s(0.024,0.07,0.03),1849994,-0.016,0.047,0),n(s(0.024,0.07,0.03),1849994,0.016,0.047,0),n(s(0.07,0.075,0.04),15763996,0,0.12,0),n(s(0.02,0.07,0.02),15763996,-0.045,0.12,0),n(s(0.02,0.07,0.02),15763996,0.045,0.12,0),n(o(0.036),15780000,0,0.19,0),n(s(0.07,0.014,0.04),2767466,0,0.2,0.005);for(let h=0;h<7;h++){let f=h/7*Math.PI*2;n(a(0.014,0.05),16765498,Math.sin(f)*0.026,0.225,Math.cos(f)*0.022,1,1,1,Math.cos(f)*0.5,-Math.sin(f)*0.5)}}else if(e===1)n(s(0.07,0.08,0.04),2772688,0,0.1,0),n(s(0.024,0.06,0.03),1382778,-0.016,0.04,0),n(s(0.024,0.06,0.03),1382778,0.016,0.04,0),n(s(0.09,0.12,0.008),13638698,0,0.1,-0.026,1,1,1,0.1),n(o(0.034),15780000,0,0.17,0),n(o(0.036),1315866,0,0.18,-0.006,1,0.8,1),n(s(0.03,0.03,0.01),16765498,0,0.11,0.022);else if(e===2)n(a(0.05,0.14),6959024,0,0.08,0),n(o(0.032),15780000,0,0.17,0),n(a(0.044,0.1),2757744,0,0.245,0,1,1,1,-0.15),n(l(0.056,0.008),2757744,0,0.2,0),n(l(0.004,0.24),5913120,0.06,0.12,0.02),n(o(0.014),3729663,0.06,0.25,0.02);else if(e===3)n(s(0.07,0.08,0.05),12106952,0,0.1,0),n(s(0.03,0.06,0.035),5922412,-0.02,0.04,0),n(s(0.03,0.06,0.035),5922412,0.02,0.04,0),n(s(0.05,0.045,0.045),15132910,0,0.17,0),n(s(0.036,0.01,0.01),3729663,0,0.175,0.024),n(s(0.025,0.07,0.025),13638698,-0.05,0.11,0),n(s(0.025,0.07,0.025),13638698,0.05,0.11,0),n(a(0.008,0.04),16765498,0,0.215,0);else if(e===4){n(s(0.07,0.085,0.04),1381916,0,0.1,0),n(s(0.024,0.06,0.03),735778,-0.016,0.04,0),n(s(0.024,0.06,0.03),735778,0.016,0.04,0),n(o(0.034),15780000,0,0.17,0);for(let h=0;h<6;h++){let f=h/6*Math.PI*2;n(a(0.012,0.04),3072096,Math.sin(f)*0.022,0.2,Math.cos(f)*0.02,1,1,1,Math.cos(f)*0.6,-Math.sin(f)*0.6)}n(s(0.008,0.2,0.012),14673648,0.06,0.13,0.02,1,1,1,0,-0.25)}else if(e===5)n(s(0.04,0.05,0.03),15755944,0,0.04,0),n(o(0.055),15780000,0,0.12,0),n(o(0.058),15755944,0,0.135,-0.008,1,0.85,1),n(o(0.01),1118481,-0.02,0.12,0.05),n(o(0.01),1118481,0.02,0.12,0.05);else n(s(0.09,0.12,0.06),1908520,0,0.07,0),n(s(0.07,0.07,0.005),16765498,0,0.08,0.031),n(o(0.025),13638698,0,0.08,0.034,1,1,0.3),n(s(0.09,0.015,0.062),3729663,0,0.14,0);let c=Dx(i,!1);i.forEach((h)=>h.dispose()),Tf[e]=new ee(c,new ot({vertexColors:!0,roughness:0.5,metalness:0.05}))}let t=Tf[e].clone();return t.castShadow=!0,t}function w_(e,t){let i=new Je;i.position.set(e,0,t),i.rotation.y=-Math.PI/2,Mt.add(i);let n=3,r=6,s=0.36,o=0.028,a=0.39,l=n*s+o,c=r*s+o,h=G(2367260,0.55,0.05),f=G(1052173,0.8);for(let u=0;u<=n;u++)O(i,o,c,a,h,-l/2+o/2+u*s,c/2,0);for(let u=0;u<=r;u++)O(i,l,o,a,h,0,o/2+u*s,0);O(i,l,c,0.01,f,0,c/2,-a/2+0.01);for(let u=1;u<=r;u++)O(i,l-2*o,0.006,0.014,Ut(16767400,2.2),0,u*s-0.004,a/2-0.05);for(let u=0;u<r;u++)for(let m=0;m<n;m++){let g=-l/2+o/2+(m+0.5)*s,x=o+u*s+(u===0?0:0),d=He()<0.55?2:1;for(let p=0;p<d;p++){let _=hS(Math.floor(He()*7));_.position.set(g+(d===2?p?0.08:-0.08:0),x,0.03+(He()-0.5)*0.06),_.rotation.y=(He()-0.5)*0.8,_.scale.setScalar(0.95+He()*0.25),i.add(_)}if(He()<0.25)O(i,0.1,0.02,0.07,G([2838527,16726843,2007130][Math.floor(He()*3)],0.6),g,x+0.2+0,-0.12).visible=!1}}w_(8.475,3.17);w_(8.475,-3.17);function uS(){let t=0.092*Math.sqrt(3)/2;for(let i of[-6.95,-5.75]){let n=new Je;n.position.set(i,0,0),n.rotation.y=Math.PI/2,Mt.add(n),n.add(sS());for(let r of[-1,1]){let s=r<0?14692399:3107801;for(let o=0;o<4;o++){let a=4-o;for(let l=0;l<a;l++)oS(n,r*(1.08-o*t),0.702,(l-(a-1)/2)*0.092,s)}}for(let r of[-0.3,0.3])nt(n,0.017,0.017,0.002,G(16777215,0.3),0,0.703,r,12).visible=!1}Bi(Mt,-6.35,2.6,0,16773336,4,5),O(Mt,2.2,0.012,0.012,Ut(16763210,2.5),-6.35,Wi-0.35,0).visible=!0}uS();(function(){let e=new Je;e.position.set(-6.4,0,3.725),e.rotation.y=Math.PI,Mt.add(e),O(e,3.3,2.5,0.06,G(1381143,0.8),0,1.5,0.03);for(let t=0;t<12;t++)O(e,0.02,2.4,0.03,G(2761760,0.5),-1.6+t*0.29,1.5,0.075);for(let t=0;t<3;t++)for(let i=0;i<8;i++){let n=-1.4+i*0.4,r=2.2-t*0.38,s=[13936170,12633288,11692597][(i+t)%3];O(e,0.05,0.22,0.01,G([2838527,16726843,2007130][(i*2+t)%3],0.6),n,r+0.15,0.09),nt(e,0.07,0.07,0.015,new ot({color:s,roughness:0.22,metalness:1}),n,r,0.1).rotation.x=Math.PI/2}O(e,3.2,0.03,0.18,G(3812642,0.4),0,1.05,0.14);for(let t=0;t<6;t++)If(e,-1.3+t*0.5,1.065,0.14,0.38+t%2*0.08,[13936170,12633288,11692597][t%3]);nn(e,"HALL OF FAME",2.6,0.38,"#ffc94a",0,2.78,0.08,0,"bold 125px Arial Black",void 0,!1);for(let t of[-8.35,-4.45]){let i=new Je;i.position.set(t,0,3.35),Mt.add(i),O(i,0.5,1,0.5,G(1052690,0.4),0,0.5,0),O(i,0.5,0.01,0.5,Ut(11462399,3),0,1,0),If(i,0,1.01,0,1),O(i,0.5,0.7,0.5,new ot({color:12577023,transparent:!0,opacity:0.13,roughness:0.02,metalness:0}),0,1.36,0)}for(let[t,i,n]of[[-7.7,-3.55,0],[-6.15,-3.55,0],[-3.59,-6.6,Math.PI/2],[4,-6.6,-Math.PI/2]]){let r=new Je;r.position.set(t,0,i),r.rotation.y=n,Mt.add(r),aS(r,1.3,2.1)}})();function fS(){let e=new Je;e.position.set(2.9,0,3.725),e.rotation.y=Math.PI,Mt.add(e);let t=G(1447707,0.85,0.1),i=_r("slats",1,0.6,0,3.6,1,{color:11569754}),n=_r("slats",1,0.35,0,4.2,0.9,{color:5978660}),r=G(13225170,0.22,1);Wt(e,3.4,1,0.6,t,-0.3,0.5,1.65,0.02);let s=new ee(new Yt(3.3,0.9,0.04),i);s.position.set(-0.3,0.5,1.97),e.add(s),Wt(e,3.8,0.06,0.95,n,-0.3,1.06,1.83,0.02),O(e,3.3,0.014,0.014,Ut(16732120,4),-0.3,1.02,2.28),O(e,3.3,0.02,0.02,Ut(3725567,4),-0.3,0.06,2),O(e,3.4,0.08,0.03,G(723725,0.5),-0.3,0.04,1.96);let o=nt(e,0.022,0.022,3.2,r,-0.3,0.22,2.3,12);o.rotation.z=Math.PI/2;for(let R of[-1.7,1.1])nt(e,0.018,0.018,0.2,r,R,0.12,2.3,10);Wt(e,3.6,0.9,0.5,t,0,0.45,0.27,0.02);let a=new ee(new Yt(3.5,0.8,0.03),i);a.position.set(0,0.45,0.535),e.add(a),O(e,3.7,0.05,0.56,n,0,0.925,0.28),O(e,3.5,0.012,0.012,Ut(6966527,4),0,0.03,0.55);let l=(()=>{let R=Xt(512,256),U=R.getContext("2d"),P=U.createLinearGradient(0,0,512,0);P.addColorStop(0,"#ff3ea0"),P.addColorStop(0.5,"#7a4cff"),P.addColorStop(1,"#2ab8ff"),U.fillStyle=P,U.fillRect(0,0,512,256);let H=new on(R);return H.colorSpace=xt,H})();O(e,3.6,1.7,0.05,G(723725,0.6),0,1.85,0.03);let c=new ee(new Vt(3.4,1.55),new Tt({map:l,toneMapped:!1,color:13421772}));c.position.set(0,1.85,0.06),e.add(c);for(let R of[-1,1])O(e,0.04,1.7,0.34,G(723725,0.5),R*1.8,1.85,0.2);O(e,3.64,0.04,0.34,G(723725,0.5),0,2.72,0.2);let h=new Lt(0.036,0.036,0.2,10),f=new Lt(0.012,0.02,0.1,10),u=new Lt(0.036,0.026,0.1,12,1,!0),m=48,g=new vn(h,new ot({roughness:0.15,metalness:0.1,transparent:!0,opacity:0.88}),m),x=new vn(f,g.material,m),d=new vn(u,new ot({color:14674687,roughness:0.05,transparent:!0,opacity:0.45,side:It}),20),p=new Ce,_=[2787898,8010258,13213738,3824335,12066847,1710618,14673642,9054858],M=0,v=0;for(let R=0;R<3;R++){let U=1.4+R*0.5;O(e,3.4,0.025,0.3,G(855312,0.3,0.3),0,U,0.2),O(e,3.4,0.008,0.01,Ut(16777215,4),0,U-0.02,0.34);for(let P=0;P<16&&M<m;P++){let H=-1.55+P*0.206;if(R===0&&P>9){p.makeTranslation(H,U+0.05,0.2),d.setMatrixAt(v++,p);continue}p.makeTranslation(H,U+0.113,0.2),g.setMatrixAt(M,p),g.setColorAt(M,new ce(_[(P+R*3)%_.length])),p.makeTranslation(H,U+0.263,0.2),x.setMatrixAt(M,p),x.setColorAt(M,new ce(_[(P+R*3)%_.length])),M++}}g.count=M,x.count=M,d.count=v,e.add(g,x,d);let b=new Je;b.position.set(1.2,0.95,0.3),e.add(b),nt(b,0.05,0.05,0.3,r,0,0.15,0,20);let w=nt(b,0.014,0.014,0.16,r,0,0.3,0.07,10);w.rotation.x=Math.PI/2;for(let[R,U]of[[-0.025,16763210],[0.025,16726843]])nt(b,0.007,0.007,0.1,G(U,0.4,0.4),R,0.38,0,8),nt(b,0.01,0.01,0.025,r,R,0.26,0.14,8);O(b,0.3,0.02,0.2,r,0,0,0.18),O(b,0.26,0.004,0.16,G(1381914,0.4),0,0.012,0.18),nn(e,"BAR",0.9,0.3,"#38d8ff",-0.3,2.95,0.05,0,"bold 170px Arial Black",void 0,!1);let y=G(1908001,0.55,0.1),S=G(13619928,0.2,1);for(let R of[-1.6,-0.75,0.1,0.95]){let U=new Je;U.position.set(R,0,2.85),U.rotation.y=Math.PI+(He()-0.5)*0.3,e.add(U),nt(U,0.22,0.2,0.08,y,0,0.74,0,28),nt(U,0.21,0.21,0.025,G(723725,0.5),0,0.69,0,24),nt(U,0.025,0.025,0.66,S,0,0.35,0,10),nt(U,0.2,0.22,0.03,S,0,0.015,0,24);let P=new ee(new ir(0.17,0.012,8,24),S);P.rotation.x=Math.PI/2,P.position.set(0,0.3,0),U.add(P),Wt(U,0.34,0.22,0.06,y,0,1,-0.2,0.03,-0.12);for(let H of[-1,1]){nt(U,0.01,0.01,0.26,S,H*0.16,0.86,-0.18,8);let ie=Wt(U,0.04,0.03,0.26,y,H*0.18,0.99,-0.06,0.012)}}}fS();var Ye={cx:-10.8,cz:-11.5,R:7,H:6},ki=new Je;tn.add(ki);var gr=[...Array(6)].map((e,t)=>{let i=t*Math.PI/3;return[Ye.cx+Ye.R*Math.cos(i),Ye.cz+Ye.R*Math.sin(i)]}),Fi=(e,t,i)=>new A(e,t,i),A_=(e=16777215)=>{let t=Vh(ti.plywood,1,1);return new ot({map:t,bumpMap:t,bumpScale:0.6,roughness:0.72,metalness:0,side:It,color:e})},Bh=A_(15917768),d_=A_(14731684);function Fh(e,t,i){let n=[],r=[];for(let a of e){let[l,c,h,f]=a.p,u=l.distanceTo(c)/1.22,m=l.distanceTo(h)/2.44,g=h.distanceTo(f)/1.22,x=a.ou||0,d=a.ov||0,p=Math.max(u,g);n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z,l.x,l.y,l.z,f.x,f.y,f.z,h.x,h.y,h.z),r.push(x,d,x+u,d,x+g,d+m,x,d,x+g,d+m,x,d+m)}let s=new Oe;s.setAttribute("position",new _e(n,3)),s.setAttribute("uv",new _e(r,2)),s.computeVertexNormals();let o=new ee(s,t);return o.receiveShadow=!0,i.add(o),o}var Gr=Math.tan(Math.PI/6);function Ph(e,t,i){let n=gr[e],r=gr[(e+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o={x:(r[0]-n[0])/s,z:(r[1]-n[1])/s},a={x:-o.z,z:o.x},l=(n[0]+r[0])/2,c=(n[1]+r[1])/2;if(a.x*(Ye.cx-l)+a.z*(Ye.cz-c)<0)a={x:-a.x,z:-a.z};let[h,f]=i||[0,s],u=(d,p,_)=>Fi(n[0]+o.x*p+a.x*d,_,n[1]+o.z*p+a.z*d),m=[],g=[],x=[];for(let d=0;d<t.length-1;d++){let[p,_]=t[d],[M,v]=t[d+1],b={p:[u(p,h+p*Gr,_),u(p,f-p*Gr,_),u(M,h+M*Gr,v),u(M,f-M*Gr,v)],ou:(h+p*Gr)/1.22,ov:t.slice(0,d).reduce((w,y,S)=>w+Math.hypot(t[S+1][0]-y[0],t[S+1][1]-y[1]),0)/2.44};if(m.push(b),!i)g.push({p:[Fi(n[0],_,n[1]),u(p,p*Gr,_),Fi(n[0],v,n[1]),u(M,M*Gr,v)]}),x.push({p:[Fi(r[0],_,r[1]),u(p,s-p*Gr,_),Fi(r[0],v,r[1]),u(M,s-M*Gr,v)]})}return{quads:m,caps:[...g,...x],P:u,L:s,n:a,t:o,A:n,prof:t}}var dS=[[[1,0],[0,3.6],[0,6]],null,[[0,0],[0,1.2],[1.6,3.4],[1.6,4.6],[0.9,6]],[[0,0],[0,1],[0.9,2.4],[0.9,3.4],[2,5],[0.4,6]],[[0,0],[0,0.8],[2,3.6],[2,6]],[[0,0],[0,3],[0.8,4.2],[0.8,6]]],Lh=[15213098,2845695,16765482,2273370,16742940,10632432,16736176,15921906,1381658,2806996],R_=[[],[],[],[],[],[],[]],na=new it;function jl(e,t,i){let[n,r,s,o]=e.p,a=n.clone().lerp(r,t),l=s.clone().lerp(o,t);return a.lerp(l,i)}function $l(e,t){let[i,n,r]=e.p,s=n.clone().sub(i).cross(r.clone().sub(i)).normalize();if(s.dot(t)<0)s.negate();return s}function Oh(e,t,i,n,r){na.position.copy(t).addScaledVector(i,0.004),na.lookAt(t.clone().add(i)),na.rotateZ(r),na.scale.setScalar(1),na.updateMatrix(),R_[e].push({m:na.matrix.clone(),c:new ce(n)})}function Pf(e,t,i,n,r=0.55){let s=e.p[0].distanceTo(e.p[2]);if(s<0.5)return;let o=Math.max(2,Math.round(s/r)),a=$l(e,n);for(let l=0;l<t;l++)for(let c=0;c<o;c++){let h=Math.sin((c+l*1.7)*1.1)*0.5/t,f=(l+0.5)/t+h*0.55,u=(c+0.45)/o,m=jl(e,f,u),g=(c*3+l*5)%7,x=c<1?5:g===6?4:g===5?5:g%5;if(Oh(x===5&&c>0?1:x,m,a,Lh[(i+l)%Lh.length],(He()-0.5)*1.6),(c+l)%3===0){let d=jl(e,Math.min(0.97,Math.max(0.03,f+0.07)),Math.min(0.98,u+0.5/o));Oh(5,d,a,Lh[(i+l)%Lh.length],He()*3)}}}function pS(){let e=[()=>{let i=new an(0.07,12,9);return i.scale(1,0.8,0.65),i.translate(0,0,0.035),i},()=>{let i=new Qi(0.11,0.03,0.05,2,0.012);return i.translate(0,0,0.025),i},()=>{let i=new an(0.1,14,10);return i.scale(1,1,0.38),i},()=>{let i=new vl(0.028,0.09,4,8);return i.rotateZ(Math.PI/2),i.translate(0,0,0.04),i},()=>{let i=new ir(0.05,0.022,8,14);return i.translate(0,0,0.02),i},()=>{let i=new Hs(0.032,0.04,6);return i.rotateX(Math.PI/2),i.translate(0,0,0.02),i},()=>{let i=new nh(0.2);return i.scale(1,1,0.5),i}],t=new ot({color:16777215,roughness:0.5,metalness:0});e.forEach((i,n)=>{let r=R_[n];if(!r.length)return;let s=new vn(i(),t,r.length);r.forEach((o,a)=>{s.setMatrixAt(a,o.m),s.setColorAt(a,o.c)}),s.castShadow=!0,ki.add(s)})}(function(){let t=(i,n)=>Fi(Ye.cx-n.p[0].x,0,Ye.cz-n.p[0].z);for(let i=0;i<6;i++){if(i===1){let r=Ph(1,[[0,0],[0,6]],[0,2.5]),s=Ph(1,[[0,0],[0,6]],[4.1,7]),o=Ph(1,[[0,2.3],[0,6]],[2.5,4.1]);for(let h of[r,s,o])Fh(h.quads,Bh,ki),h.quads.forEach((f)=>Pf(f,h===o?2:2,0,t(h,f),0.6));let a=gr[1],l=-1,c=(h)=>a[0]+l*h;for(let h of[2.5,4.1])O(ki,0.1,2.3,0.3,G(1381914,0.5),c(h),1.15,a[1]+0.02);O(ki,1.7,0.1,0.3,G(1381914,0.5),c(3.3),2.3,a[1]+0.02);continue}let n=Ph(i,dS[i]);Fh(n.quads,i%2?d_:Bh,ki),Fh(n.caps,d_,ki),n.quads.forEach((r)=>Pf(r,4,i*2,$l(r,Fi(Ye.cx-r.p[0].x,0,Ye.cz-r.p[0].z)).add(Fi(0,0,0)),0.55))}for(let i=0;i<6;i++){let n=gr[i],r=gr[(i+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o=new ee(new Yt(s+0.3,Ye.H,0.2),G(1513500,0.9)),a=(n[0]+r[0])/2,l=(n[1]+r[1])/2,c=Fi(a-Ye.cx,0,l-Ye.cz).normalize();if(o.position.set(a+c.x*0.12,Ye.H/2,l+c.z*0.12),o.rotation.y=-Math.atan2(r[1]-n[1],r[0]-n[0]),i!==1)ki.add(o)}})();(function(){let i=[{y:0,r:1.75},{y:2.1,r:2.45},{y:4.7,r:1.45}],n=[];i.forEach((h,f)=>{let u=[];for(let m=0;m<7;m++){let g=m/7*Math.PI*2+f*0.12,x=0.9+(m*37+f*11)%10/50;u.push(Fi(Ye.cx+Math.sin(g)*h.r*x,h.y,Ye.cz+Math.cos(g)*h.r*x))}n.push(u)});let r=[];for(let h=0;h<2;h++)for(let f=0;f<7;f++){let u=(f+1)%7;r.push({p:[n[h][f],n[h][u],n[h+1][f],n[h+1][u]],ou:f*0.37,ov:h*0.9})}let s=Fh(r,new ot({map:Bh.map,bumpMap:Bh.map,bumpScale:0.6,roughness:0.72,side:It,color:15652528,flatShading:!0}),ki);s.castShadow=!0;let o=n[2].map((h)=>new k(h.x,-h.z)),a=new Zo(new ji(o));a.rotateX(-Math.PI/2);let l=new ee(a,G(13216376,0.8));l.position.y=4.7,ki.add(l),r.forEach((h,f)=>{let u=jl(h,0.5,0.5),m=Fi(u.x-Ye.cx,0,u.z-Ye.cz).normalize(),g=$l(h,m);Pf(h,f<7?2:2,3+f,g,0.55)});let c=r[0];{let h=jl(c,0.5,0.22),f=$l(c,Fi(h.x-Ye.cx,0,h.z-Ye.cz));Oh(6,h,f,2845695,0);let u=jl(r[3],0.5,0.3);Oh(6,u,$l(r[3],Fi(u.x-Ye.cx,0,u.z-Ye.cz)),15213098,1)}})();pS();(function(){let i=[...Array(6)].map((h,f)=>{let u=f*Math.PI/3;return[Ye.cx+6.99*Math.cos(u),Ye.cz+6.99*Math.sin(u)]}),n=i[1][1]+0.1,r=[i[0],i[1],[-9.7,n],[-9.7,n-0.95],[-11.5,n-0.95],[-11.5,n],i[2],i[3],i[4],i[5]],s=new ji(r.map((h)=>new k(h[0],-h[1]))),o=new Xs(s,{depth:0.26,bevelEnabled:!0,bevelThickness:0.04,bevelSize:0.04,bevelSegments:3});o.rotateX(-Math.PI/2);let a=Vh(ti.matBlue,1,0.5),l=new ee(o,new ot({map:a,bumpMap:a,bumpScale:1.2,roughness:0.85}));l.position.y=0,l.receiveShadow=!0,ki.add(l),rc(ki,[...Array(6)].map((h,f)=>gr[f]),Wh("concrete",1.5,0.9));for(let h=0;h<6;h++){if(h===1)continue;let f=gr[h],u=gr[(h+1)%6],m=Math.hypot(u[0]-f[0],u[1]-f[1]),g=new ee(new Yt(m-0.3,0.03,0.05),G(16765482,0.5)),x=(f[0]+u[0])/2,d=(f[1]+u[1])/2,p=Fi(Ye.cx-x,0,Ye.cz-d).normalize();g.position.set(x+p.x*0.07,0.32,d+p.z*0.07),g.rotation.y=-Math.atan2(u[1]-f[1],u[0]-f[0]),ki.add(g)}let c=new ee(new Lt(3.3,3.4,0.14,7),new ot({map:a,color:6988543,roughness:0.9}));c.position.set(Ye.cx,0.33,Ye.cz),ki.add(c)})();(function(){ca(gr,Ye.H,G(1776673,0.9));for(let t=0;t<3;t++){let i=t*Math.PI/3,n=new ee(new Yt(Ye.R*2-0.3,0.36,0.28),G(5067356,0.45,0.8));n.position.set(Ye.cx,Ye.H-0.2,Ye.cz),n.rotation.y=-i,Vi.add(n);let r=new ee(new Yt(Ye.R*2-1.2,0.03,0.06),Ut(16773594,7));r.position.set(Ye.cx,Ye.H-0.4,Ye.cz),r.rotation.y=-i,Vi.add(r)}for(let t=0;t<6;t++){let i=t*Math.PI/3+Math.PI/6,n=Ye.cx+Math.cos(i)*4.6,r=Ye.cz+Math.sin(i)*4.6;nt(Vi,0.12,0.12,0.14,G(855312,0.4,0.5),n,Ye.H-0.1,r,14),nt(Vi,0.1,0.1,0.01,Ut(16774888,9),n,Ye.H-0.18,r,14)}for(let t=0;t<3;t++){let i=t*Math.PI*2/3+0.5;Bi(ki,Ye.cx+Math.cos(i)*4.2,Ye.H-0.6,Ye.cz+Math.sin(i)*4.2,16774372,22,14)}Bi(ki,Ye.cx,Ye.H-0.8,Ye.cz,16777215,18,12),nn(ki,"BOULDER",2.6,0.5,"#ffb42a",-10.6,4.4,gr[1][1]-0.12,Math.PI,"bold 170px Arial Black",void 0,!1),O(Vi,14,0.02,0.02,Ut(16757802,2.5),Ye.cx,Ye.H-0.02,Ye.cz+5).visible=!1})();var re=new Je;tn.add(re);var pn=3,C_=(e,t)=>_r("tile",0.6,0.35,0,e,t),qh=(e,t)=>_r("plaster",1.2,0.9,0,e,t);rc(re,[[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],Wh("tile",0.6,0.35));rc(re,[[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],Wh("graphite",1,0.6));ca([[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-12.4,3.85]],pn,G(15000802,0.9));ca([[-12.4,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],pn,G(15000802,0.9));ca([[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],pn,G(2434604,0.9));qn(re,-12.4,-5.37,-12.4,7.7,pn,qh);qn(re,-8.8,-5.37,-8.8,-3.85,pn,qh);qn(re,-3.6,3.85,-3.6,7.7,pn,C_);qn(re,0.4,3.85,0.4,7.7,pn,eo);for(let[e,t,i,n]of[[-10.6,-1,3.4,0.08],[-10.6,2.6,3.4,0.08],[-8.2,5.8,0.08,3.4],[-6.2,5.8,3.4,0.08]])O(Vi,i,0.03,n,Ut(16054527,6),e,pn-0.02,t);var Dt=G(14212064,0.14,1),Zl=G(16053489,0.12,0.02),Ef=G(11449275,0.3,0.9),SX=G(1447707,0.8),p_=(e,t)=>{let i=parseInt(e.slice(1),16),n=Math.min(255,(i>>16&255)*t)|0,r=Math.min(255,(i>>8&255)*t)|0,s=Math.min(255,(i&255)*t)|0;return`rgb(${n},${r},${s})`},At=(e,t,i,n,r,s,o=0,a=0,l=0)=>{let c=new ee(t,i);return c.position.set(n,r,s),c.rotation.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c},ei=(e,t,i,n=20)=>new Lt(e,t,i,n);(function(){let s=(x,d,p)=>la(160,480,(_,M,v)=>{let b=_.createLinearGradient(0,0,M,0);b.addColorStop(0,p_(d,1.18)),b.addColorStop(0.5,d),b.addColorStop(1,p_(d,0.82)),_.fillStyle=b,_.fillRect(0,0,M,v),_.strokeStyle="rgba(0,0,0,.5)",_.lineWidth=5,_.strokeRect(3,3,M-6,v-6),_.strokeStyle="rgba(255,255,255,.07)",_.lineWidth=2,_.strokeRect(9,9,M-18,v-18),_.fillStyle="rgba(0,0,0,.7)";for(let w=0;w<8;w++)_.fillRect(24,30+w*13,M-48,5);for(let w=0;w<6;w++)_.fillRect(24,v-118+w*13,M-48,5);_.fillStyle="#dfe2e7",_.fillRect(M/2-27,156,54,28),_.fillStyle="#12151c",_.font="bold 22px Arial",_.textAlign="center",_.fillText(String(x),M/2,178),_.fillStyle="#c9ccd2",_.fillRect(M-40,222,11,96),_.fillStyle="#7d818a",_.fillRect(M-41,222,2,96),_.fillStyle="#b9bdc5",_.beginPath(),_.arc(M-34,344,9,0,7),_.fill(),_.fillStyle="#1a1a1a",_.fillRect(M-35,338,2.5,12),_.fillStyle="rgba(255,255,255,.05)",_.fillRect(0,0,14,v)}),o=la(160,480,(x,d,p)=>{let _=x.createLinearGradient(0,0,0,p);_.addColorStop(0,"#2a2f3b"),_.addColorStop(1,"#0f1116"),x.fillStyle=_,x.fillRect(0,0,d,p),x.fillStyle="#4b5160",x.fillRect(8,90,d-16,6),x.fillStyle="#9aa0ab",x.fillRect(8,60,d-16,4),x.fillStyle="#c2c6cf",x.fillRect(d/2-3,60,6,3),x.fillStyle="#c0392b",x.beginPath(),x.moveTo(d/2-40,66),x.lineTo(d/2+40,66),x.lineTo(d/2+50,300),x.lineTo(d/2-50,300),x.closePath(),x.fill(),x.fillStyle="rgba(0,0,0,.25)",x.fillRect(d/2-4,90,8,210),x.fillStyle="#2a2d35",x.fillRect(14,p-90,d-28,50)}),a=G(1449002,0.45,0.4),l=G(2765124,0.4,0.5),c=G(790036,0.6),h=0.46,f=-12.045;for(let x=0;x<14;x++){let d=-4.7+x*0.5,p=x===3||x===9;O(re,0.46,1.9,0.488,a,-12.045,1.05,d);let _=s(x+1,x%2?"#1f3052":"#27406e",p),M=new ot({map:_,roughness:0.4,metalness:0.35,side:It});if(!p)At(re,new Vt(0.472,1.88),M,-11.794,1.05,d,0,Math.PI/2,0);else{At(re,new Vt(0.46,1.86),new ot({map:o,roughness:0.7}),-11.796000000000001,1.05,d,0,Math.PI/2,0);let v=new Je;if(v.position.set(-11.790000000000001,1.05,d-0.236),v.rotation.y=x===3?1.15:1.5,re.add(v),At(v,new Vt(0.472,1.88),M,0,0,0.236,0,Math.PI/2,0),O(v,0.012,1.88,0.012,Dt,0,0,0),x===9)O(re,0.2,0.32,0.26,G(2059076,0.8),-11.985,0.34,d+0.02),O(re,0.2,0.04,0.2,G(1448482,0.6),-11.985,0.52,d+0.02)}O(re,0.012,1.9,0.012,Dt,-11.797,1.05,d-0.25)}let u=-1.4500000000000002,m=7;O(re,0.5,0.05,m+0.04,l,-12.03,2.03,u),O(re,0.48000000000000004,0.1,m,c,-12.035,0.05,u),O(re,0.46,1.9,0.02,a,-12.045,1.05,-4.955),O(re,0.46,1.9,0.02,a,-12.045,1.05,2.0549999999999997),O(re,0.5,0.88,m+0.04,G(2304829,0.6),-12.03,2.51,u).visible=!1;let g=G(10121026,0.5);for(let x of[-2.6,1.9]){for(let d=0;d<4;d++)O(re,0.1,0.035,2.6,g,-11.05+d*0.105,0.46,x);for(let d of[-1.2,0,1.2]){O(re,0.42,0.035,0.05,Ef,-10.9,0.43,x+d);for(let p of[-0.19,0.19])O(re,0.04,0.43,0.04,Ef,-10.9+p,0.215,x+d)}O(re,0.34,0.02,2.4,G(5724511,0.5,0.5),-10.9,0.16,x);for(let d=0;d<4;d++){let p=-10.9+(d%2?0.05:-0.05),_=x-0.9+d*0.55,M=[15263976,14239787,2846681,3092275][d];Wt(re,0.11,0.07,0.29,G(M,0.6),p,0.205,_,0.025),Wt(re,0.09,0.03,0.14,G(14342874,0.7),p,0.245,_-0.07,0.01)}}Wt(re,0.3,0.28,0.5,G(2106413,0.7),-10.88,0.62,-2,0.07),O(re,0.02,0.03,0.46,G(14239787,0.5),-10.74,0.7,-2),nt(re,0.035,0.035,0.19,new ot({color:6735615,transparent:!0,opacity:0.6,roughness:0.1}),-10.9,0.58,-3.25,14),nt(re,0.036,0.036,0.04,G(15263976,0.4),-10.9,0.69,-3.25,14),O(re,0.34,0.05,0.46,G(15921906,0.95),-10.9,0.5,1.3),O(re,0.34,0.16,0.05,G(15921906,0.95),-10.9,0.43,1.52),O(re,0.04,0.05,1.5,Ef,-8.92,1.78,-4.65),[[-5.25,12597547],[-4.95,2842536],[-4.3,3092275],[-4.05,15263976]].forEach(([x,d])=>{nt(re,0.012,0.012,0.06,Dt,-8.88,1.74,x,8).rotation.z=Math.PI/2,Wt(re,0.1,0.62,0.34,G(d,0.9),-8.84,1.4,x,0.04)}),O(re,0.03,1.4,1.2,new ot({color:13625855,roughness:0.04,metalness:0.85}),-8.93,1.4,-2.55),O(re,0.036,1.48,0.05,G(1119000,0.5),-8.925,1.4,-1.97),O(re,0.036,1.48,0.05,G(1119000,0.5),-8.925,1.4,-3.13),O(re,0.036,0.05,1.24,G(1119000,0.5),-8.925,2.12,-2.55),O(re,0.036,0.05,1.24,G(1119000,0.5),-8.925,0.68,-2.55),nn(re,"ŠATNA",1.5,0.4,"#7fd0ff",-8.93,2.6,0.1,-Math.PI/2,"bold 170px Arial Black",void 0,!1),Bi(re,-10.6,2.6,-2,16054527,7,8),Bi(re,-10.6,2.6,2.4,16054527,6,8)})();(function(){let e=new ot({color:14939135,transparent:!0,opacity:0.34,roughness:0.12,side:It,depthWrite:!1}),t=(l)=>new ot({color:l,roughness:0.35}),i=G(13620185,0.35),n=G(3159098,0.5,0.8);O(re,5.2,0.14,0.012,G(2781048,0.35),-6.2,1.08,3.99);for(let l=0;l<4;l++){let c=-8+l*1.1,h=l===1||l===3;O(re,1.04,0.04,1.02,i,c,0.02,4.5),nt(re,0.07,0.07,0.012,n,c,0.046,4.5,18);for(let u=0;u<3;u++)O(re,0.1,0.004,0.012,G(10133672,0.4,1),c,0.053,4.47+u*0.03);O(re,1.04,0.012,0.03,G(16762926,0.6),c,0.046,5),nt(re,0.012,0.012,0.36,Dt,c,2.12,4.17,12).rotation.x=Math.PI/2,At(re,ei(0.115,0.115,0.018,28),Dt,c,2.1,4.38),At(re,ei(0.096,0.096,0.004,28),G(2106410,0.5,0.6),c,2.09,4.38);for(let u=0;u<8;u++){let m=u*Math.PI/4;At(re,ei(0.007,0.007,0.006,6),G(9146521,0.3,1),c+Math.cos(m)*0.06,2.088,4.38+Math.sin(m)*0.06)}O(re,0.2,0.13,0.025,Dt,c,1.15,4.012),At(re,ei(0.03,0.03,0.03,16),Dt,c-0.05,1.15,4.04,Math.PI/2),At(re,ei(0.022,0.022,0.03,16),Dt,c+0.055,1.15,4.04,Math.PI/2),O(re,0.012,0.05,0.012,G(14036269,0.4),c+0.055,1.18,4.06),O(re,0.012,0.05,0.012,G(3107801,0.4),c-0.05,1.18,4.06),O(re,0.04,0.4,0.04,Dt,c+0.28,1.5,4.03),At(re,ei(0.014,0.014,0.16,8),Dt,c+0.28,1.65,4.12,Math.PI/2-0.5),At(re,ei(0.03,0.022,0.2,10),G(1776930,0.5),c+0.28,1.42,4.12,Math.PI/2-0.5),At(re,ei(0.025,0.025,0.14,10),t([14239787,3107801,4042346,15263976][l]),c-0.36,1.37,4.07),At(re,ei(0.028,0.028,0.18,10),t(15921906),c-0.3,1.39,4.07),O(re,0.3,0.012,0.1,G(13625855,0.1,0.3),c-0.33,1.27,4.05),O(re,0.26,0.012,0.14,G(2781048,0.5),c+0.27,0.75,4.065).visible=!1,O(re,0.026,1.9,0.96,e,c+0.55,1.07,4.5),O(re,0.03,0.03,0.98,Dt,c+0.55,2.04,4.5),O(re,0.03,1.95,0.03,Dt,c+0.55,1.05,4.99),O(re,0.03,0.03,0.04,Dt,c+0.55,2,4);let f=new Je;f.position.set(c-0.5,1.05,5),f.rotation.y=h?l===1?-1.2:-0.7:0,re.add(f),O(f,0.98,1.9,0.022,e,0.5,0,0),O(f,0.98,0.03,0.03,Dt,0.5,0.94,0),O(f,0.03,0.1,0.1,Dt,0.88,0,0.03).visible=!0;for(let u of[-0.7,0.7])O(f,0.04,0.08,0.04,Dt,0,u,0)}O(re,0.026,1.9,0.96,e,-8.55,1.07,4.5),O(re,0.03,0.03,0.98,Dt,-8.55,2.04,4.5);let r=G(8826550,0.5),s=G(4943992,0.5);[4.15,5.15,6.15,7.15].forEach((l)=>{O(re,1.5,1.75,0.04,r,-11.53,1.03,l),O(re,1.52,0.03,0.05,Dt,-11.53,1.92,l),nt(re,0.014,0.014,0.16,Dt,-10.85,0.08,l,8)});let a=(l)=>{O(re,0.22,0.42,0.4,Zl,-12.16,0.64,l),O(re,0.24,0.035,0.42,Zl,-12.16,0.86,l),At(re,ei(0.028,0.028,0.014,14),Dt,-12.16,0.885,l);let c=[[0,0],[0.08,0],[0.1,0.12],[0.17,0.28],[0.2,0.4],[0.19,0.43],[0.165,0.43],[0.15,0.36],[0,0.3]].map((g)=>new k(g[0],g[1]));At(re,new Pl(c,28),new ot({color:16053489,roughness:0.12,side:It}),-11.86,0,l).scale.set(1.45,1,1),At(re,new ir(0.155,0.022,10,28),G(1711395,0.35),-11.86,0.452,l,Math.PI/2).scale.set(1.45,1,1);let u=new Je;u.position.set(-12.01,0.46,l),u.rotation.z=1.38,re.add(u),At(u,ei(0.17,0.17,0.02,24),G(1711395,0.35),0.27,0,0).scale.set(1.5,1,1),O(re,0.1,0.12,0.12,Dt,-11.56,0.7,l+0.46),nt(re,0.045,0.045,0.1,G(16777215,0.9),-11.56,0.7,l+0.46,14).rotation.x=Math.PI/2};[4.65,5.65,6.65].forEach((l,c)=>{a(l);let h=new Je;h.position.set(-10.83,1,l-0.45),h.rotation.y=[1.15,0,0.8][c],re.add(h),O(h,0.03,1.72,0.9,s,0,0,0.45),O(h,0.032,0.05,0.1,Dt,0.002,0,0.78),O(h,0.034,0.03,0.06,G(c===1?14036269:4042346,0.4),-0.002,0.07,0.78),O(h,0.032,0.03,0.9,Dt,0,0.86,0.45);for(let f of[-0.6,0.6])O(h,0.04,0.07,0.03,Dt,0,f,0.01);nt(re,0.04,0.04,0.02,G(15263976,0.5),-12.25,1.6,l,14).rotation.z=Math.PI/2}),O(re,0.2,0.34,0.2,G(7041144,0.5,0.6),-11,0.17,6.95),[-10.2,-9.6,-9].forEach((l)=>{At(re,new vl(0.12,0.24,6,14),Zl,l,1,7.46).scale.set(1,1,0.55),O(re,0.2,0.34,0.06,Zl,l,0.78,7.52),At(re,ei(0.012,0.012,0.5,8),Dt,l,1.45,7.55),O(re,0.1,0.07,0.03,Dt,l,1.3,7.55),At(re,ei(0.012,0.012,0.06,8),G(3159098,0.6),l,0.7,7.425),nt(re,0.06,0.06,0.012,G(3159098,0.5,0.7),l,0.007,7.3,14)}),[-10.5,-9.9,-9.3,-8.7].forEach((l)=>O(re,0.03,0.78,0.34,r,l,1.05,7.38)),[-6,-5.1,-4.2].forEach((l)=>{O(re,0.52,0.1,0.42,Zl,l,0.86,7.36),O(re,0.4,0.02,0.3,G(13620442,0.2),l,0.915,7.37),nt(re,0.025,0.025,0.004,G(3159098,0.5,0.8),l,0.926,7.4,12),At(re,ei(0.014,0.014,0.14,10),Dt,l,0.99,7.52),At(re,ei(0.012,0.012,0.12,10),Dt,l,1.05,7.46,Math.PI/2),O(re,0.03,0.03,0.03,Dt,l+0.07,0.95,7.52),O(re,0.7,0.9,0.02,new ot({color:14676479,roughness:0.03,metalness:0.9}),l,1.62,7.56),O(re,0.74,0.94,0.012,G(1382172,0.5),l,1.62,7.572),O(re,0.66,0.012,0.012,Ut(15398143,3),l,2.12,7.55)}),[-5.55,-4.65].forEach((l)=>{O(re,0.07,0.17,0.07,G(16250871,0.3),l,1.14,7.53),At(re,ei(0.012,0.012,0.05,8),Dt,l,1.25,7.5,Math.PI/2)}),Wt(re,0.14,0.36,0.26,G(12106948,0.25,0.9),-3.82,1.42,6.75,0.03),O(re,0.016,0.02,0.18,G(1382172,0.4),-3.74,1.28,6.75),Wt(re,0.16,0.28,0.24,G(15264236,0.3,0.5),-3.82,1.35,5.95,0.05),At(re,ei(0.035,0.03,0.08,14),G(2106410,0.4),-3.82,1.2,5.95),nt(re,0.15,0.13,0.55,G(7041144,0.35,0.85),-3.95,0.28,7.2,18),nt(re,0.155,0.155,0.03,G(3159098,0.5),-3.95,0.57,7.2,18);for(let[l,c]of[[-7.3,6.2],[-5,5.8]]){nt(re,0.1,0.1,0.008,G(6975351,0.4,0.8),l,0.006,c,18);for(let h=0;h<3;h++)O(re,0.14,0.004,0.012,G(3159098,0.5),l,0.011,c-0.04+h*0.04)}nn(re,"SPRCHY · WC",2.4,0.4,"#7fd0ff",-6.2,2.6,4,0,"bold 140px Arial Black",void 0,!1),Bi(re,-6.2,2.6,5.7,15398143,7,8)})();(function(){O(re,0.45,0.42,2,G(2763827,0.6),0.15,0.21,6),O(re,0.5,0.06,2,G(8018488,0.45),0.15,0.45,6),nn(re,"BADMINTON  ›",2.2,0.36,"#6fd0ff",-1.9,2.6,7.45,Math.PI,"bold 140px Arial Black",void 0,!1);for(let e of[-3.3,0.1]){nt(re,0.2,0.15,0.4,G(2369067,0.6),e,0.2,4.2,16),nt(re,0.03,0.03,0.6,G(2780986,0.8),e,0.7,4.2,6);let t=new ee(new an(0.28,12,9),G(2058804,0.8));t.scale.y=1.2,t.position.set(e,1.15,4.2),re.add(t)}Bi(re,-1.6,2.6,5.8,16771276,6,7)})();O(re,5.2,pn,0.03,C_(5.2,pn),-6.2,pn/2,3.99);O(re,0.03,2.85,2.85,qh(2.85,2.85),-8.94,1.425,-2.425);O(re,0.03,pn,2.65,qh(2.65,pn),-8.94,pn/2,2.525);O(re,0.03,0.15,2.2,G(1381914,0.6),-8.94,0.075,0.1).visible=!1;(function(){let e=new Je;e.position.set(-0.6,0,0.4),e.rotation.y=Math.PI/2,Mt.add(e);let t=1.2,i=0.68,n=0.93,r=la(1200,680,(d,p,_)=>{for(let M=0;M<12;M++)d.fillStyle=M%2?"#2d8a40":"#34964a",d.fillRect(M*p/12,0,p/12+1,_);Mi(d,p,_,10),d.strokeStyle="rgba(255,255,255,.92)",d.lineWidth=6,d.strokeRect(12,12,p-24,_-24),d.beginPath(),d.moveTo(p/2,12),d.lineTo(p/2,_-12),d.stroke(),d.beginPath(),d.arc(p/2,_/2,82,0,7),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(p/2,_/2,9,0,7),d.fill();for(let M of[0,1]){let v=M?p-12:12,b=M?-1:1;d.strokeRect(M?p-12-150:12,_/2-170,150,340),d.strokeRect(M?p-12-62:12,_/2-92,62,184),d.beginPath(),d.arc(v+b*150,_/2,72,-Math.PI/2,Math.PI/2,M===1),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(v+b*105,_/2,7,0,7),d.fill()}}),s=G(1381914,0.42,0.1),o=G(1974310,0.55),a=14036269,l=3106518;O(e,1.36,0.14,0.72,s,0,n-0.1,0);let c=new ee(new Vt(t,i),new ot({map:r,roughness:0.55}));c.rotation.x=-Math.PI/2,c.position.y=n,e.add(c);for(let d of[-1,1])Wt(e,1.44,0.14,0.07,s,0,n+0.035,d*0.375,0.02),O(e,1.46,0.012,0.075,G(14212064,0.2,1),0,n+0.108,d*0.375);for(let d of[-1,1]){for(let _ of[-1,1])Wt(e,0.07,0.14,0.27,s,d*0.665,n+0.035,_*0.2+_*0.02,0.02);O(e,0.07,0.05,0.22,o,d*0.665,n+0.075,0),O(e,0.2,0.012,0.19,G(460810,0.8),d*0.74,n-0.032,0);let p=O(e,0.16,0.02,0.2,G(2763827,0.5),d*0.8,n-0.07,0);p.rotation.z=-d*0.22,O(e,0.012,0.045,0.2,G(2763827,0.5),d*0.875,n-0.04,0),O(e,0.14,0.045,0.012,G(2763827,0.5),d*0.8,n-0.045,0.098),O(e,0.14,0.045,0.012,G(2763827,0.5),d*0.8,n-0.045,-0.098);for(let _ of[-1,1]){let M=O(e,0.12,0.05,0.12,o,d*0.6,n+0.025,_*0.3);M.rotation.y=Math.PI/4}O(e,0.016,0.02,0.6,Ut(d>0?14036269:3106518,1.6),d*0.69,n-0.17,0)}O(e,1.3,0.01,0.01,Ut(3725567,2.2),0,n-0.175,0.365),O(e,1.3,0.01,0.01,Ut(3725567,2.2),0,n-0.175,-0.365);for(let[d,p]of[[-0.6,-0.31],[0.6,-0.31],[-0.6,0.31],[0.6,0.31]])nt(e,0.036,0.026,0.82,s,d,0.41,p,14),nt(e,0.02,0.026,0.03,G(13159378,0.2,1),d,0.014,p,12),O(e,0.07,0.04,0.07,G(2763827,0.5),d,0.84,p);O(e,1.2,0.035,0.03,s,0,0.3,0.31),O(e,1.2,0.035,0.03,s,0,0.3,-0.31),O(e,0.03,0.035,0.62,s,-0.6,0.3,0),O(e,0.03,0.035,0.62,s,0.6,0.3,0);let h=[["A",1],["A",2],["B",3],["A",5],["B",5],["A",3],["B",2],["B",1]],f={1:0,2:0.24,3:0.2,5:0.115},u=n+0.075,m=G(14212064,0.15,1),g=G(789776,0.6);h.forEach(([d,p],_)=>{let M=-0.518+_*0.148,v=d==="A"?a:l,b=d==="A"?1:-1,w=new Je;w.position.set(M,u,(_*37%7-3)*0.012),e.add(w);let y=0.7,S=0.5,R=d==="A"?1:-1;At(w,ei(0.0075,0.0075,y+S,10),m,0,0,R*(y-S)/2,Math.PI/2),At(w,ei(0.0205,0.0205,0.16,14),g,0,0,R*(y-0.05),Math.PI/2),At(w,ei(0.022,0.022,0.012,14),G(15263976,0.4),0,0,R*(y-0.135),Math.PI/2),At(w,ei(0.0215,0.0215,0.012,14),m,0,0,R*y,Math.PI/2),At(w,ei(0.014,0.014,0.02,12),g,0,0,-R*0.4,Math.PI/2);let U=(_%3-1)*0.35;for(let P=0;P<p;P++){let H=p===1?0:(P-(p-1)/2)*f[p],ie=new Je;ie.position.set(0,0,H),ie.rotation.z=U*b*0.5,w.add(ie),O(ie,0.03,0.058,0.04,G(v,0.55),0,-0.02,0),O(ie,0.026,0.034,0.03,G(x(v),0.6),0,-0.067,0),O(ie,0.04,0.012,0.05,g,b*0.008,-0.088,0),At(ie,new an(0.014,10,8),G(15782832,0.6),0,0.02,0)}});function x(d){return(d>>16&255)*0.55<<16|(d>>8&255)*0.55<<8|(d&255)*0.55}At(e,new an(0.019,14,10),G(16250871,0.35),0.08,n+0.02,0.06);for(let[d,p,_]of[[0.44,a,3],[-0.44,l,5]]){At(e,ei(0.005,0.005,0.6,8),m,0,n+0.19,d,0,0,Math.PI/2);for(let M of[-1,1])O(e,0.014,0.19,0.014,m,M*0.3,n+0.095,d);for(let M=0;M<10;M++){let v=M<_;At(e,ei(0.013,0.013,0.025,12),G(v?p:15263976,0.4),(v?-0.27:0.27)+(v?M:M-10)*0.028+(v?0:0),n+0.19,d,0,0,Math.PI/2)}}for(let[d,p]of[[-0.74,0.34],[0.74,-0.34]])nt(e,0.04,0.032,0.09,G(13620186,0.25,0.9),d,n-0.015,p,14),nt(e,0.034,0.034,0.004,G(1381914,0.5),d,n+0.031,p,14)})();var nc=new Je;tn.add(nc);var _i=new Je;tn.add(_i);var aa=new Je;Vi.add(aa);var Ql=[],Lf=[],st=-3.4,zi=7.7,Cn=29.7,yi=zi+11,li=12.05,zr=2.6,mS=10.5,I_=mS-zr,ec={x0:st-li,x1:st+li,z0:zi,z1:Cn,cx:st,Hs:zr};nc.position.set(st,0,yi);nc.rotation.y=Math.PI;var mr=[st+6.6,st-1.4],sa=yi,gS=[[ec.x0-1,st-12+5,12.5,24.9]],tc=(e,t=0)=>{let i=li-t,n=(e-st)/i;return zr+(I_-t)*Math.sqrt(Math.max(0,1-n*n))};ti.hallwood=(()=>{let e=Xt(512,512),t=e.getContext("2d");for(let r=0;r<24;r++){t.fillStyle=`hsl(${32+He()*6},${52+He()*10}%,${46+He()*12}%)`,t.fillRect(0,r*21.333333333333332,512,21.333333333333332);for(let o=0;o<7;o++){t.strokeStyle=`rgba(60,28,8,${0.05+He()*0.1})`,t.lineWidth=1;let a=r*21.333333333333332+2+He()*17.333333333333332;t.beginPath(),t.moveTo(0,a);for(let l=0;l<=512;l+=64)t.lineTo(l,a+(He()-0.5)*3);t.stroke()}t.fillStyle="rgba(30,14,4,.55)",t.fillRect(0,r*21.333333333333332,512,1.5);let s=He()*512;t.fillRect(s,r*21.333333333333332,1.5,21.333333333333332)}return Mi(t,512,512,12),e})();var fs=new on(ti.hallwood);fs.colorSpace=xt;fs.wrapS=fs.wrapT=hn;fs.repeat.set(0.25,0.25);fs.anisotropy=8;var wf=new ot({map:fs,roughness:0.62,metalness:0,side:It});function Af(e,t,i,n,r=0){let s=[],o=[],a=[],l=r;e.forEach((h,f)=>{if(f)l+=Math.hypot(h[0]-e[f-1][0],h[1]-e[f-1][1]);if(s.push(h[0],h[1],t,h[0],h[1],i),o.push(l,t,l,i),f){let u=(f-1)*2;a.push(u,u+1,u+2,u+1,u+3,u+2)}});let c=new Oe;return c.setAttribute("position",new _e(s,3)),c.setAttribute("uv",new _e(o,2)),c.setIndex(a),c.computeVertexNormals(),new ee(c,n)}(function(){let i=[];for(let p=0;p<=72;p++){let _=Math.PI-Math.PI*p/72;i.push([st+li*Math.cos(_),zr+I_*Math.sin(_)])}let n=zr;_i.add(Af([[st-li,0],[st-li,zr]],zi,Cn,wf,0)),_i.add(Af([[st+li,zr],[st+li,0]],zi,Cn,wf,n+40)),aa.add(Af(i,zi,Cn,wf,n));let r=72,s=(p,_)=>{let M=[];for(let v=r;v>=0;v--){let b=p+(_-p)*v/r;M.push([b,tc(b)])}return M},o=[[-8.2,-6.8],[-2.8,-1]],a=[[st-li,0]];for(let[p,_]of o)a.push([p,0],[p,2.2],[_,2.2],[_,0]);a.push([st+li,0]),a.push(...s(st-li,st+li));let l=new ot({map:fs,roughness:0.65}),c=new ee(new Xs(new ji(a.map((p)=>new k(p[0],p[1]))),{depth:0.22,bevelEnabled:!1}),l);c.position.z=zi-0.11,_i.add(c),ic.push(c),Lf.push(c);let h=[[st-li,0],[st+li,0],...s(st-li,st+li)],f=new ee(new Xs(new ji(h.map((p)=>new k(p[0],p[1]))),{depth:0.22,bevelEnabled:!1}),l);f.position.z=Cn,_i.add(f),ic.push(f),Lf.push(f);let u=G(1381914,0.5);for(let[p,_]of o)O(_i,0.1,2.2,0.3,u,p,1.1,zi),O(_i,0.1,2.2,0.3,u,_,1.1,zi),O(_i,_-p,0.1,0.3,u,(p+_)/2,2.2,zi);let m=Xt(2048,512),g=m.getContext("2d");g.fillStyle="#ee7d1c",g.fillRect(0,0,2048,512);for(let p=0;p<40;p++)g.fillStyle=`rgba(${p%2?"255,255,255":"120,50,0"},.035)`,g.fillRect(p*52,0,26,512);g.fillStyle="#fff",g.font="bold 250px Arial Black, Arial",g.textAlign="center",g.textBaseline="middle",g.fillText("VAŠE LIGA",1024,270);let x=new on(m);x.colorSpace=xt,x.anisotropy=8;let d=new ee(new Vt(18,4.5),new ot({map:x,roughness:0.9,emissiveMap:x,emissive:16777215,emissiveIntensity:0.45}));d.position.set(st,2.35,Cn-0.02),d.rotation.y=Math.PI,_i.add(d)})();(function(){let n=new ot({map:Vh(ti.steel,2,2),color:11844292,roughness:0.55,metalness:0.15}),r=[],s=[];for(let x=0;x<=40;x++){let d=st-li+0.15+(2*li-0.3)*x/40;r.push([d,tc(d,0.18)-0.05]),s.push([d,tc(d,0.18)-0.75+Math.abs(x-20)/20*0.25])}let o=[],a=Fi(0,1,0),l=new Ce,c=new $t,h=new A,f=new A,u=(x,d,p)=>{let _=Fi(x[0],x[1],p),M=Fi(d[0],d[1],p),v=M.clone().sub(_),b=v.length();c.setFromUnitVectors(a,v.normalize()),h.copy(_).add(M).multiplyScalar(0.5),f.set(1,b,1),l.compose(h,c,f),o.push(l.clone())};Ql.length=0;for(let x=0;x<9;x++){let d=zi+1+x*(Cn-zi-2)/8;Ql.push(d);for(let p of[r,s]){let _=new Wo(p.map((M)=>Fi(M[0],M[1],d)));aa.add(new ee(new Ll(_,80,0.07,8,!1),n))}for(let p=0;p<40;p++)u(r[p],s[p],d),u(s[p],r[p+1],d);u(r[40],s[40],d);for(let p of[st-li+0.14,st+li-0.14])O(_i,0.28,zr+0.1,0.28,n,p,(zr+0.1)/2,d),O(_i,0.4,0.04,0.4,G(3158842,0.5,0.6),p,0.02,d)}let m=new Lt(0.026,0.026,1,6),g=new vn(m,n,o.length);o.forEach((x,d)=>g.setMatrixAt(d,x)),aa.add(g);for(let x=0;x<=12;x++){let d=st-li+0.2+(2*li-0.4)*x/12,p=tc(d,0.18)-0.05,_=nt(aa,0.045,0.045,Cn-zi-1.4,n,d,p,(zi+Cn)/2,8);_.rotation.x=Math.PI/2}})();var xS=[st+11,st+2.6,st-6,st-9.8];for(let e of xS)for(let t=0;t<Ql.length-1;t++){let i=(Ql[t]+Ql[t+1])/2,n=tc(e,0.18)-0.05,r=n-1.05;O(_i,0.2,0.07,2.2,G(13225170,0.35,0.6),e,r,i),O(_i,0.15,0.015,2.1,Ut(16774886,2.6),e,r-0.045,i);for(let s of[-0.9,0.9])O(_i,0.012,n-r-0.04,0.012,G(2237480,0.5,0.6),e,(n+r)/2,i+s)}for(let e of[st+11,st+2.6,st-6])for(let t of[zi+3,yi,Cn-3])Bi(tn,e,7.6,t,16774114,9,30);Bi(tn,st-9.8,6.2,yi,16774114,4,18);function Rf(e,t,{blot:i=0.1,bs:n=0.5,grain:r=0.05,gs:s=90,sheen:o=0}={}){e.customProgramCacheKey=()=>"sd"+t,e.onBeforeCompile=(a)=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP=(modelMatrix*vec4(transformed,1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
float h3(vec3 p){p=fract(p*0.3183099+.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.0-2.0*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}`).replace("#include <color_fragment>",`#include <color_fragment>
{ float b=vn(vWP/${n.toFixed(3)})*0.6+vn(vWP/${(n*0.35).toFixed(3)})*0.4; float g=vn(vWP*${s.toFixed(1)}); float gl=smoothstep(0.0,1.0,1.0-min(1.0,length(fwidth(vWP))*${s.toFixed(1)}*0.6));
  diffuseColor.rgb *= 1.0 + (b-0.5)*${(i*2).toFixed(3)} + (g-0.5)*${(r*2).toFixed(3)}*gl; }`)}}var Hh=G(13214826,0.6),en=G(2763825,0.5,0.6),An=G(12106948,0.3,0.85);function _S(e,t){let i=new Je;i.position.set(e,0,t),_i.add(i),nt(i,0.026,0.026,1.62,en,0,0.81,0,12),nt(i,0.26,0.28,0.045,en,0,0.022,0,28),nt(i,0.07,0.09,0.12,en,0,0.1,0,16),nt(i,0.03,0.03,0.22,An,0.05,0.5,0,8).rotation.z=Math.PI/2}for(let e of mr)for(let t of[-1,1])_S(e+t*3.09,yi);function Of(e,t,i,n,r){let s=new Je;s.position.set(e,0,t),s.rotation.y=i,_i.add(s);for(let o of[-1,0,1])O(s,n,0.035,0.115,Hh,0,0.45,o*0.125);for(let o of[-1,1]){let a=o*(n/2-0.14);for(let l of[-1,1])O(s,0.045,0.45,0.045,en,a,0.225,l*0.19);O(s,0.04,0.04,0.42,en,a,0.2,0),O(s,0.04,0.04,0.42,en,a,0.425,0)}if(O(s,n-0.2,0.03,0.03,en,0,0.2,0),r){for(let o of[-1,1])O(s,0.045,0.5,0.045,en,o*(n/2-0.14),0.7,-0.19);for(let o of[0.68,0.84])O(s,n,0.12,0.03,Hh,0,o,-0.215)}return s}for(let e of[-6,-2,2,6])Of(st+11.3,yi+e,-Math.PI/2,2,!0);Of(mr[0],yi-9.3,0,1.5,!0);for(let e of mr)Of(e,yi+9.3,Math.PI,1.5,!0);function P_(e,t,i){let n=new Je;n.position.set(e,0,t),_i.add(n);let r=G(2050728,0.45),s=1.5;for(let o of[-1,1])for(let a of[-1,1]){let l=nt(n,0.022,0.022,s,An,o*0.3,s/2,a*0.27,10);l.rotation.z=-o*0.07,l.rotation.x=a*0.07}for(let o of[0.35,0.8,1.2])O(n,0.6,0.025,0.025,An,0,o,0.27),O(n,0.6,0.025,0.025,An,0,o,-0.27),O(n,0.025,0.025,0.54,An,0.3,o,0),O(n,0.025,0.025,0.54,An,-0.3,o,0);O(n,0.58,0.05,0.58,r,0,s+0.02,0),O(n,0.05,0.55,0.52,r,i*0.27,s+0.33,0).rotation.z=i*0.08;for(let o of[-1,1])O(n,0.45,0.04,0.05,An,0,s+0.28,o*0.3),O(n,0.04,0.26,0.04,An,-i*0.18,s+0.15,o*0.3);O(n,0.32,0.02,0.5,G(15329770,0.6),-i*0.42,s+0.48,0);for(let o of[-1,1])O(n,0.03,0.5,0.03,An,-i*0.4,s+0.24,o*0.24);for(let o of[0,1,2,3])O(n,0.05,0.03,0.5,An,-i*(0.33+o*0.045),0.28+o*0.32,0);return O(n,0.03,s,0.03,An,-i*0.44,s/2,-0.25).rotation.z=i*0.06,O(n,0.03,s,0.03,An,-i*0.44,s/2,0.25).rotation.z=i*0.06,n}P_(st+10.4,yi,1);P_(st-5.4,yi,-1);var Jt=ec.x0+0.1;(function(){let t=[2864038,9395160,15228303,15764004],i=new Je;_i.add(i);for(let c=0;c<3;c++){let h=Jt+0.04+c*0.95;for(let f of[0,0.88])O(i,0.05,2.5,0.05,Hh,Jt,1.25,8.4+c*0.95+f);for(let f=0;f<15;f++){let u=nt(i,0.016,0.016,0.88,Hh,Jt+0.02,0.2+f*0.155,8.84+c*0.95,8);u.rotation.x=Math.PI/2}}let n=Xt(256,128),r=n.getContext("2d"),s=r.createLinearGradient(0,0,256,128);s.addColorStop(0,"#9db6c8"),s.addColorStop(0.5,"#cfe0ec"),s.addColorStop(1,"#8fa8bb"),r.fillStyle=s,r.fillRect(0,0,256,128),r.fillStyle="rgba(255,255,255,.28)",r.beginPath(),r.moveTo(40,0),r.lineTo(90,0),r.lineTo(40,128),r.lineTo(0,128),r.fill();let o=new on(n);o.colorSpace=xt;let a=new ee(new Vt(3.6,1.7),new Tt({map:o,toneMapped:!1,color:12303291}));a.position.set(st-6.6,1.5,zi+0.13),i.add(a),O(i,3.7,0.05,0.03,en,st-6.6,2.37,zi+0.13),O(i,3.7,0.05,0.03,en,st-6.6,0.63,zi+0.13),t.forEach((c,h)=>O(i,0.62,0.014,1.75,G(c,0.85),st-10.2+h*0.75,0.008,10,0));for(let c=0;c<3;c++){let h=nt(i,0.075,0.075,0.6,G([2763310,2450411,14709803][c],0.8),-10.9+c*0.25,0.075,9.1+c%2*0.15,20);h.rotation.z=Math.PI/2}for(let[c,h,f]of[[-10.6,11.3,2920447],[-9.9,11,16747052],[-9.3,11.6,4247930]]){let u=new ee(new an(0.32,20,16),G(f,0.45));u.position.set(c,0.32,h),i.add(u)}nn(i,"WARM-UP · STRETCH",3.4,0.42,"#7be3ff",Jt+0.1,3.1,10.2,Math.PI/2,"bold 100px Arial Black, Arial",void 0,!1);let l=new Je;_i.add(l),O(l,0.5,0.05,2.4,en,Jt+0.3,0.55,27.3),O(l,0.5,0.05,2.4,en,Jt+0.3,1,27.3);for(let c of[-1.15,1.15])O(l,0.5,1.05,0.05,en,Jt+0.3,0.52,27.3+c);for(let c=0;c<6;c++)for(let h of[0.6,1.05]){let f=26.4+c*0.36,u=nt(l,0.012,0.012,0.2,An,Jt+0.3,h+0.04,f,8);u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/2;for(let m of[-1,1])nt(l,0.055,0.055,0.05,en,Jt+0.3+m*0.11,h+0.04,f,14).rotation.z=Math.PI/2}for(let c=0;c<5;c++){let h=25.7+c*0.5,f=new ee(new an(0.1,16,12),G([1381914,1381914,12597547,1381914,1381914][c],0.5,0.4));f.position.set(Jt+1.55,0.1,h),l.add(f);let u=new ee(new ir(0.06,0.012,8,14,Math.PI),G(1381914,0.5,0.4));u.position.set(Jt+1.55,0.2,h),u.rotation.y=Math.PI/2,l.add(u)}[[0.5,0.45],[0.6,0.6],[0.75,0.75]].forEach(([c,h],f)=>O(l,h,c,h,G(13935466,0.7),Jt+2.9+f*0.95,c/2,28.8));for(let c=0;c<9;c++)O(l,0.5,0.012,0.04,G(16765498,0.6),Jt+2.4,0.007,25.6+c*0.4);for(let c of[-1,1])O(l,0.03,0.012,3.6,G(16765498,0.6),Jt+2.4+c*0.25,0.007,27.4);for(let c=0;c<6;c++){let h=new ee(new Hs(0.09,0.2,14),G(16742938,0.6));h.position.set(Jt+4.1,0.1,25.7+c*0.7),l.add(h)}for(let[c,h,f]of[[-14.5,29.1,2780986],[-14,29.2,9054762],[-13.5,29,2772874]]){let u=new ee(new an(0.13,16,12),G(f,0.6));u.position.set(c,0.13,h),l.add(u)}for(let c of[27,27.5])O(l,0.03,0.9,0.012,G(16765498,0.7),Jt+0.05,1.8,c),O(l,0.05,0.12,0.05,en,Jt+0.05,1.3,c);O(l,0.05,0.06,0.6,en,Jt+0.05,2.3,27.25),nn(l,"CONDITIONING · FOOTWORK",3.8,0.42,"#ffb15a",Jt+0.1,3.1,27.2,Math.PI/2,"bold 90px Arial Black, Arial",void 0,!1)})();function yS(){for(let e of mr)Ht(e-3.05,sa,e+3.05,sa,0.22);sr.push([st+10.4,sa,0.5],[st-5.4,sa,0.5]);for(let e of[-6,-2,2,6])Ht(st+11.3,yi+e-0.9,st+11.3,yi+e+0.9,0.3);Ht(mr[0]-0.6,yi-9.3,mr[0]+0.6,yi-9.3,0.3);for(let e of mr)Ht(e-0.6,yi+9.3,e+0.6,yi+9.3,0.3);for(let e of[-4,1.5])sr.push([st-e,yi-9.4,0.45]);Ht(Jt+0.3,26.2,Jt+0.3,28.5,0.3),Ht(Jt+2.9,28.8,Jt+4.6,28.8,0.35),Ht(Jt+1.55,25.7,Jt+1.55,27.5,0.12),sr.push([-10.6,11.3,0.36],[-9.9,11,0.36],[-9.3,11.6,0.36])}var bX=new Promise((e)=>{new gf().load("badminton_hala.glb?v=2",(t)=>{let i=t.scene,n=[],r=[],s=!i.getObjectByName("Hala_Klenba_Drevo"),o=/^(Hala_Stena_.*|Hala_Obklad_.*|Hala_Okna_.*|Hala_Sloupy_.*|Hala_Strecha_Plech|Hala_Vaznik_\d+|Hala_Vaznice|Hala_Dvere|Hala_Nouzovy_.*|Kamera_Cil|Svetla_LED_.*|Vybaveni_Lavicky_.*|Vybaveni_Rozhodci_.*|Kurt\d_Sloupky|.*_Skore|.*_Nazev)$/,a=/^(Kamera_Cil|.*_Skore|.*_Nazev|Hala_Banner_Text|Zona_.*_Napis)$/;if(i.traverse((c)=>{let h=c.name||"";if((s?o:a).test(h))n.push(c);if(!s&&/^(Hala_Klenba_Drevo|Hala_Vaznik_\d+|Hala_Vaznice|Svetla_LED_.*)$/.test(h))r.push(c);if(c.isMesh){let f=c.material,u={MAT_PU_Podlaha:[0.36,0.075,0.04],MAT_PVC_Podlozka:[0.075,0.17,0.46],MAT_Pohledovy_Beton:[0.27,0.27,0.28],MAT_BWF_Cary:[0.85,0.85,0.83]};if(f&&u[f.name])f.color.setRGB(...u[f.name]);if(f&&f.name==="MAT_PU_Podlaha")f.roughness=0.36,Rf(f,"floor",{blot:0.16,bs:1.1,grain:0.07,gs:70});if(f&&f.name==="MAT_PVC_Podlozka")f.roughness=0.5,Rf(f,"mat",{blot:0.07,bs:0.8,grain:0.09,gs:160});if(f&&f.name==="MAT_Pohledovy_Beton")f.roughness=0.85,Rf(f,"conc",{blot:0.28,bs:0.35,grain:0.12,gs:55});if(f&&f.name==="MAT_Ukazatel_LED")f.emissiveIntensity=2.2;if(f&&f.name==="MAT_LED_Zarivka_Emise")f.emissiveIntensity=2.6;if(f&&f.name==="MAT_Drevo_Klenba")f.map=fs,f.color.setRGB(1,1,1),f.roughness=0.62,f.side=It,f.needsUpdate=!0;if(f&&f.name==="MAT_Zrcadlo")c.material=new Tt({color:11453654,toneMapped:!1});if(f&&f.name==="MAT_Banner_Oranzovy")f.emissive=new ce(15620624),f.emissiveIntensity=0.35;if(f&&f.name==="MAT_Sit_Pruhledna"){let m=document.createElement("canvas");m.width=1220,m.height=152;let g=m.getContext("2d");g.strokeStyle="#0c0c0e",g.lineWidth=2.2;for(let d=0;d<=1220;d+=10)g.beginPath(),g.moveTo(d,0),g.lineTo(d,152),g.stroke();for(let d=0;d<=152;d+=10)g.beginPath(),g.moveTo(0,d),g.lineTo(1220,d),g.stroke();let x=new on(m);x.colorSpace=xt,x.anisotropy=8,c.material=new Tt({map:x,transparent:!0,alphaTest:0.3,side:It})}}}),n.forEach((c)=>c.parent&&c.parent.remove(c)),s)i.traverse((c)=>{if(/^Vybaveni_Ukazatel_Stojan_K2_/.test(c.name))c.position.x-=2.5});else{tn.remove(_i),Vi.remove(aa);for(let c of Lf)ic.splice(ic.indexOf(c),1);nn(tn,"VAŠE LIGA",11,2,"#ffffff",st,2.55,Cn-0.07,Math.PI,"bold 150px Arial Black, Arial",void 0,!1)}nc.add(i),nc.updateMatrixWorld(!0),r.forEach((c)=>Vi.attach(c));let l=()=>(window.FUNUI?FUNUI.summary("bad").k[0][0]:"0–0").replace("–"," : ");[[-4,"KURT 1"],[1.5,"KURT 2"]].forEach(([c,h])=>{nn(tn,l(),1.15,0.36,"#ffcf3a",st-c,1.5,yi-9.4+0.06,0,"bold 280px Arial Black","#0b0b0b",!1),nn(tn,h,0.9,0.14,"#ffcf3a",st-c,1.74,yi-9.4+0.06,0,"bold 120px Arial Black","#0b0b0b",!1)}),mr.forEach((c,h)=>{nn(tn,l(),2.3,0.62,"#ffcf3a",c,3.3,Cn-0.16,Math.PI,"bold 280px Arial Black","#0b0b0b",!1),nn(tn,"KURT "+(h+1),1.2,0.17,"#ffcf3a",c,3.78,Cn-0.16,Math.PI,"bold 120px Arial Black","#0b0b0b",!1)}),e()},void 0,(t)=>{console.error("badminton_hala.glb failed",t),e()})}),gs=new Je;gs.position.set(6.5,1.85,-3.6);gs.rotation.y=0;Ui.add(gs);var L_=window.FUNUI?window.FUNUI.summary("strava").k:[["12/20"],["9 400"]],[D_,N_]=L_[0][0].split("/").map(Number);gs.add(new ee(new ir(0.85,0.1,16,72),iS(2761296,{r:0.6})));var F_=2*Math.PI*D_/N_,U_=new ee(new ir(0.85,0.1,16,160,F_),new Tt({color:new ce(16534530).multiplyScalar(1.5),toneMapped:!1}));U_.rotation.z=Math.PI/2-F_;gs.add(U_);var MS=la(512,384,(e,t,i)=>{e.textAlign="center",e.fillStyle="#fff",e.font="800 140px Inter,Arial",e.fillText(D_+"",t/2-40,190),e.fillStyle="#b8a9c9",e.font="700 70px Inter,Arial",e.fillText("/"+N_,t/2+90,190),e.font="600 34px Inter,Arial",e.fillText("A C T I V E   D A Y S",t/2,250)});Bf(1.5,1.12,MS,gs,0,0,0.02);var B_=(e,t)=>la(768,96,(i,n,r)=>{i.fillStyle="rgba(10,15,44,.85)",i.beginPath(),i.roundRect(4,4,n-8,r-8,44),i.fill(),i.strokeStyle=t,i.lineWidth=4,i.stroke(),i.fillStyle=t,i.textAlign="center",i.font="700 40px Inter,Arial",i.fillText(e,n/2,62)});Bf(1.9,0.24,B_("\uD83D\uDC63  "+L_[1][0]+" STEPS / DAY","#3dff9a"),gs,0,-1.3,0.02);Bf(1.9,0.24,B_("GYM 3× · YOGA 2× · WALKS","#8a96c4"),gs,0,-1.62,0.02);var m_=(mr[0]+mr[1])/2,Gh=[{k:"bad",x:m_,z:sa,r:9.5,c:"#3dff9a",label:"BADMINTON",pos:[m_,3.4,sa],sc:1.5},{k:"climb",x:Ye.cx,z:Ye.cz,r:6.4,c:"#38e8ff",label:"CLIMBING",pos:[-10.8,3.7,-5.95],sc:1.2,ring:!1},{k:"strava",x:6.5,z:-2.3,r:2.3,c:"#ff7a2a",label:"STRAVA",pos:[6.5,3,-3.5],sc:0.8},{k:"games",x:6.6,z:-0.6,r:2.8,c:"#6d86ff",label:"GAMES",pos:[8.2,2.5,-1.8],sc:1},{k:"beer",x:-6.35,z:0,r:2.6,c:"#ff6a80",label:"BEER PONG",pos:[-6.35,2.55,0],sc:1}];Gh.forEach((e)=>{let t=rS(e.label,e.c,e.sc);if(t.position.set(...e.pos),Ui.add(t),e.ring!==!1&&e.k!=="bad"){let i=new ee(new Yo(e.r*0.55,e.r*0.55+0.05,64),new Tt({color:new ce(e.c).multiplyScalar(1.5),transparent:!0,opacity:0.55,side:It,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(e.x,0.02,e.z),Ui.add(i),e.ring=i}});var Df=[],O_=new Map;function yr(e,t,i,n,r,s,o,a,l,c=5.5,h=!0){let f=new Yt(t,i,n),u=new ee(f,new Tt({visible:!1}));u.position.set(r,s,o),u.userData.isHit=!0,l.add(u);let m=new di({color:new ce(a).multiplyScalar(2),transparent:!0,opacity:0,toneMapped:!1,depthTest:!1}),g={id:e,hit:u,hits:[u],mat:m,outline:h,far:c};if(h){l.updateMatrixWorld(!0);let x=new Ce().copy(l.matrixWorld).invert(),d=new fi(new A(r-t/2,s-i/2,o-n/2),new A(r+t/2,s+i/2,o+n/2)),p=Math.max(t,i,n)*1.25,_=[];if(l.traverse((M)=>{if(!M.isMesh||M.isInstancedMesh||M.userData.isHit||M.userData.itemLine||!M.geometry)return;if(!M.geometry.boundingBox)M.geometry.computeBoundingBox();let v=new Ce().multiplyMatrices(x,M.matrixWorld),b=M.geometry.boundingBox.clone().applyMatrix4(v),w=b.getSize(new A);if(Math.max(w.x,w.y,w.z)>p||!d.containsPoint(b.getCenter(new A)))return;_.push([M,v])}),_.forEach(([M,v])=>{let b=new Ji(new ah(M.geometry,28),m);b.matrixAutoUpdate=!1,b.matrix.copy(v),b.userData.itemLine=!0,b.renderOrder=5,l.add(b),g.hits.push(M)}),!_.length){let M=new Ji(new ah(f),m);M.position.copy(u.position),M.userData.itemLine=!0,l.add(M)}}g.hits.forEach((x)=>O_.set(x,g)),Df.push(g)}yr("pc",0.3,0.52,0.5,0.83,1.03,-0.15,7177983,ms);yr("kb",0.39,0.04,0.16,-0.2,0.8,0.22,7177983,ms);yr("ms",0.075,0.04,0.14,0.27,0.8,0.21,4063130,ms);yr("hp",0.26,0.12,0.2,-0.7,0.84,0.26,16751178,ms);yr("mon",0.62,0.36,0.05,0.12,1.135,-0.2,3729663,ms,5.5,!1);yr("st:games",1.3,0.42,0.3,-1.78,1.12,-0.1,3729663,ms,7,!1);for(let e of[-4,1.5])yr("st:bad",1.4,0.8,0.3,st-e,1.55,yi-9.38,4063130,Ui,24,!1);yr("st:strava",2.2,2.4,0.3,6.5,1.7,-3.55,16742954,Ui,9,!1);yr("st:climb",5,5,5,Ye.cx,2.5,Ye.cz,3729663,Ui,16,!1);yr("st:beer",1.9,0.9,2.7,-6.35,0.7,0,16738944,Ui,9,!1);var We={x:-1.9,z:2.8,yaw:0,pitch:0,vx:0,vz:0},vS=1.65,Kl=0.3,SS=[[-8.8,8.8,-3.85,3.85],[-3.9,4.3,-9.4,-3.85],[-12.4,-8.8,-5.45,7.7],[-12.4,-3.6,3.85,7.7],[-3.6,0.4,3.85,7.7],[ec.x0,ec.x1,7.7,ec.z1]],bS=[[-3.62,4.02,-4.3,-3.4],[-11.3,-9.9,-5.8,-5.1],[-9.25,-8.35,-0.9,1.1],[-2.7,-1.1,3.5,4.2],[-2.7,-1.1,7.35,8.05],[-8.1,-6.9,7.35,8.05]];function TS(e,t){let i=e-Ye.cx,n=t-Ye.cz,r=Ye.R*Math.cos(Math.PI/6)-Kl;for(let s=0;s<6;s++){let o=Math.PI/6+s*Math.PI/3;if(i*Math.cos(o)+n*Math.sin(o)>r)return!1}return!0}function Jl(e,t){for(let i of gS)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!1;for(let i of SS)if(e>i[0]+Kl&&e<i[1]-Kl&&t>i[2]+Kl&&t<i[3]-Kl)return!0;for(let i of bS)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!0;return TS(e,t)}var sr=[],Ht=(e,t,i,n,r)=>{let s=Math.max(1,Math.ceil(Math.hypot(i-e,n-t)/(r*0.9)));for(let o=0;o<=s;o++)sr.push([e+(i-e)*o/s,t+(n-t)*o/s,r])};Ht(-1.95,-4.6,-1.95,-6.9,0.35);Ht(2.35,-4.6,2.35,-6.9,0.35);Ht(-1.9,-4.6,2.3,-4.6,0.4);sr.push([0.2,-6.05,0.5]);Ht(8.25,-2.65,8.25,2.65,0.4);Ht(8.35,2.65,8.35,3.7,0.3);Ht(8.35,-3.7,8.35,-2.65,0.3);Ht(1.5,1.85,4.9,1.85,0.5);Ht(1.1,3.45,4.9,3.45,0.3);[4.5,3.65,2.8,1.95].forEach((e)=>sr.push([e,0.875,0.25]));Ht(-6.95,-1,-6.95,1,0.42);Ht(-5.75,-1,-5.75,1,0.42);Ht(-0.6,-0.15,-0.6,0.95,0.42);sr.push([-8.35,3.35,0.32],[-4.45,3.35,0.32],[-3.9,-3.85,0.3],[4.3,-3.85,0.3]);Ht(-8.3,-3.45,-5.5,-3.45,0.22);Ht(-3.55,-7.2,-3.55,-6,0.15);Ht(3.9,-7.2,3.9,-6,0.15);sr.push([Ye.cx,Ye.cz,2.15]);Ht(-11.95,-4.7,-11.95,2.3,0.12);Ht(-10.9,-3.6,-10.9,-1,0.25);Ht(-10.9,0.9,-10.9,3.5,0.25);Ht(-8.5,4.35,-4.1,4.35,0.55);Ht(-6.4,7.4,-4,7.4,0.3);Ht(-11.9,4.4,-11.9,7.4,0.5);Ht(0.15,5.1,0.15,6.9,0.3);sr.push([-3.3,4.2,0.3],[0.1,4.2,0.3]);yS();function H_(e,t){if(!Jl(We.x,We.z))if(Jl(We.x,t))We.z=t;else if(Jl(e,We.z))We.x=e;else We.x=e,We.z=t;sr.forEach(([i,n,r])=>{let s=We.x-i,o=We.z-n,a=Math.hypot(s,o),l=r+0.28;if(a<l&&a>0.0001){let c=i+s/a*l,h=n+o/a*l;if(Jl(c,h))We.x=c,We.z=h;else We.x=e,We.z=t}})}var kn={},xr=!1,zh=!1,oa={x:0,y:0};addEventListener("keydown",(e)=>{if(!xr||Wn.isOpen())return;if(kn[e.code]=!0,e.code==="KeyE"||e.code==="Enter")Yh();if(e.code.startsWith("Arrow")||e.code==="Space")e.preventDefault()});addEventListener("keyup",(e)=>{kn[e.code]=!1});var Nf=Xn("#start"),kh=Nf.querySelector(".go"),TX=kh?kh.textContent:"",G_=document.createElement("style");G_.textContent='#start[data-paused="1"] .keys,#start[data-paused="1"] p{display:none!important}#start[data-paused="1"] h1{opacity:.55}';document.head.appendChild(G_);function z_(){if(Nf.classList.add("on"),Nf.dataset.paused="1",kh)kh.textContent="POKRAČOVAT · KLIKNI"}function ES(){if(ds||!Rn.requestPointerLock)return;try{let e=Rn.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}setTimeout(()=>{if(xr&&!Wn.isOpen()&&document.pointerLockElement!==Rn)z_()},350)}document.addEventListener("pointerlockchange",()=>{if(zh=document.pointerLockElement===Rn,!zh&&xr&&!Wn.isOpen()&&!ds)z_()});addEventListener("mousemove",(e)=>{if(!xr||Wn.isOpen())return;if(zh||Hf)We.yaw-=e.movementX*0.0022,We.pitch=Math.max(-1.2,Math.min(1.2,We.pitch-e.movementY*0.0022))});var Hf=!1;Rn.addEventListener("mousedown",()=>{if(Hf=!0,zh&&ln&&(ln==="mon"||ln.startsWith("st:")))return Yh()});addEventListener("mouseup",()=>{Hf=!1});function wS(){if(xr=!0,Xn("#start").classList.remove("on"),Xn("#hud").classList.add("on"),!ds&&Rn.requestPointerLock)try{let e=Rn.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}}Xn("#start").addEventListener("click",wS);Wn.setOnClose(()=>{kn.KeyE=!1,ES()});if(ds){let e=Xn("#joy"),t=Xn("#knob"),i=null,n=null,r=0,s=0,o=(c)=>{let h=e.getBoundingClientRect(),f=h.left+h.width/2,u=h.top+h.height/2,m=(c.clientX-f)/(h.width/2),g=(c.clientY-u)/(h.height/2),x=Math.hypot(m,g);if(x>1)m/=x,g/=x;oa.x=m,oa.y=g,t.style.transform=`translate(${m*34}px,${g*34}px)`};e.addEventListener("pointerdown",(c)=>{i=c.pointerId,e.setPointerCapture(i),o(c)}),e.addEventListener("pointermove",(c)=>{if(c.pointerId===i)o(c)});let a=(c)=>{if(c.pointerId===i)i=null,oa.x=oa.y=0,t.style.transform=""};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),Rn.addEventListener("pointerdown",(c)=>{if(!xr||Wn.isOpen()||n!==null)return;n=c.pointerId,r=c.clientX,s=c.clientY,Rn.setPointerCapture(n)}),Rn.addEventListener("pointermove",(c)=>{if(c.pointerId!==n)return;We.yaw-=(c.clientX-r)*0.005,We.pitch=Math.max(-1.1,Math.min(1.1,We.pitch-(c.clientY-s)*0.005)),r=c.clientX,s=c.clientY});let l=(c)=>{if(c.pointerId===n)n=null};Rn.addEventListener("pointerup",l),Rn.addEventListener("pointercancel",l),Xn("#act").addEventListener("click",()=>Yh())}var Vn=null,ln=null,Ff=new vh;Ff.far=26;var Dh=Xn("#prompt"),Nh=Xn("#sum");function AS(e){if(e===(Vn&&Vn.k))return;if(Vn=e?Gh.find((i)=>i.k===e):null,!Vn){Dh.classList.remove("on"),Nh.classList.remove("on");return}let t=Wn.summary(e);Dh.querySelector("b").textContent=t.t,Dh.style.setProperty("--c",Vn.c),Nh.style.setProperty("--c",Vn.c),Nh.innerHTML=`<h4>${t.t}</h4><p>${t.s}</p><div>${t.k.map((i)=>`<span><b>${i[0]}</b><i>${i[1]}</i></span>`).join("")}</div>`,Dh.classList.add("on"),Nh.classList.add("on")}function Yh(){if(Wn.isOpen())return;if(document.pointerLockElement)document.exitPointerLock();if(ln==="mon"||ln==="st:games")return Wn.open("games");if(ln&&ln.startsWith("st:"))return Wn.open(ln.slice(3));if(Vn)Wn.open(Vn.k)}function g_(e){if(e===ln)return;ln=e,["pc","hp","kb","ms"].forEach((t)=>document.body.classList.toggle(t,t===e))}Ui.traverse((e)=>{if(e.isPointLight)e.intensity*=0.56});var RS=new Sh,Cf=0;function k_(){let e=Math.min(RS.getDelta(),0.05);Cf+=e;let t=Wn.isOpen();if(xr&&!t){let r=(kn.ArrowLeft?1:0)-(kn.ArrowRight?1:0);We.yaw+=r*1.9*e;let s=(kn.KeyW||kn.ArrowUp?1:0)-(kn.KeyS||kn.ArrowDown?1:0)-oa.y,o=(kn.KeyD?1:0)-(kn.KeyA?1:0)+oa.x,a=kn.ShiftLeft?5.2:3.2,l=(-Math.sin(We.yaw)*s+Math.cos(We.yaw)*o)*a,c=(-Math.cos(We.yaw)*s-Math.sin(We.yaw)*o)*a,h=Math.hypot(l,c);if(h>a)l*=a/h,c*=a/h;let f=1-Math.exp(-10*e);We.vx+=(l-We.vx)*f,We.vz+=(c-We.vz)*f;let{x:u,z:m}=We;We.x+=We.vx*e,We.z+=We.vz*e,H_(u,m)}if(!window.__camLock)dn.position.set(We.x,vS,We.z),dn.rotation.order="YXZ",dn.rotation.set(We.pitch,We.yaw,0);if(xr&&!t){Ff.setFromCamera(new k(0,0),dn);let r=Ff.intersectObjects(Df.flatMap((o)=>o.hits),!1),s=null;for(let o of r){let a=O_.get(o.object);if(a&&o.distance<=a.far){s=a.id;break}}g_(s)}else g_(null);let i=null,n=9;if(Gh.forEach((r)=>{let s=Math.hypot(We.x-r.x,We.z-r.z)/r.r;if(s<1&&s<n)n=s,i=r.k}),ln&&ln.startsWith("st:"))i=ln.slice(3);else if(ln==="mon")i="games";if(AS(i&&xr&&!t?i:t?Vn&&Vn.k:null),Df.forEach((r)=>{if(r.outline)r.mat.opacity=ln===r.id?1:0}),Gh.forEach((r)=>{if(r.ring)r.ring.material.opacity=Vn&&Vn.k===r.k?0.95:0.35+0.15*Math.sin(Cf*2)}),E_.forEach((r)=>r(Cf)),us)us.render();else ps.render(Ui,dn);requestAnimationFrame(k_)}requestAnimationFrame(k_);window.__scene=Ui;window.__fun={go(e,t,i=0,n=0){We.x=e,We.z=t,We.yaw=i,We.pitch=n,We.vx=We.vz=0},pos(){return[We.x,We.z]},blocked(e,t){if(!Jl(e,t))return!0;for(let[i,n,r]of sr)if(Math.hypot(e-i,t-n)<r+0.28)return!0;return!1},sim(e,t,i,n,r=400){We.x=e,We.z=t;for(let s=0;s<r;s++){let{x:o,z:a}=We;We.x+=Math.sign(i-We.x)*Math.min(0.05,Math.abs(i-We.x)),We.z+=Math.sign(n-We.z)*Math.min(0.05,Math.abs(n-We.z)),H_(o,a)}return[+We.x.toFixed(2),+We.z.toFixed(2)]},start(){xr=!0,Xn("#start").classList.remove("on"),Xn("#hud").classList.add("on")},interact:Yh,view(e,t,i,n,r,s,o=68,a=!0){window.__camLock=!0,Vi.visible=a,dn.fov=o,dn.updateProjectionMatrix(),dn.position.set(e,t,i),dn.up.set(0,1,0),dn.lookAt(n,r,s)},free(){window.__camLock=!1,Vi.visible=!0}};
