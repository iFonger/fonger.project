var Dm=Object.defineProperty;var Nm=(e)=>e;function Um(e,t){this[e]=Nm.bind(null,t)}var Fm=(e,t)=>{for(var i in t)Dm(e,i,{get:t[i],enumerable:!0,configurable:!0,set:Um.bind(t,i)})};var Gr={};Fm(Gr,{ArcCurve:()=>Mc,CatmullRomCurve3:()=>wc,CubicBezierCurve:()=>Xo,CubicBezierCurve3:()=>Rc,EllipseCurve:()=>_n,LineCurve:()=>qo,LineCurve3:()=>Yo,QuadraticBezierCurve:()=>Zo,QuadraticBezierCurve3:()=>Jo,SplineCurve:()=>Ko});var Gs="187";var nh=0,kl=1,sh=2;var Ln=1,oh=2,Jr=3,Hi=0,Nt=1,di=2,ki=0,Pr=1,lr=2,Wl=3,Xl=4,ah=5;var Ir=100,lh=101,ch=102,hh=103,uh=104,fh=200,dh=201,ph=202,mh=203,Ma=204,Sa=205,gh=206,xh=207,_h=208,vh=209,yh=210,Mh=211,Sh=212,bh=213,Th=214,Vs=0,Hs=1,ks=2,Lr=3,Ws=4,Xs=5,qs=6,Ys=7,Kr=0,Eh=1,wh=2,Di=0,Dn=1,Nn=2,Un=3,Dr=4,Fn=5,Bn=6,On=7;var ba=300,Wi=301,gr=302,Zs=303,Js=304,zn=1000,ui=1001,Gn=1002,It=1003,ql=1004;var Vn=1005;var Ft=1006,Ks=1007;var bi=1008;var Wt=1009,Ta=1010,Ea=1011,xr=1012,Hn=1013,Kt=1014,Xt=1015,Rt=1016,kn=1017,Wn=1018,tr=1020,wa=35902,Aa=35899,Ra=1021,Ca=1022,ri=1023,Pi=1026,Ni=1027,Xn=1028,Qr=1029,Ui=1030,qn=1031;var Yn=1033,Zn=33776,Jn=33777,Kn=33778,Qn=33779,Qs=35840,$s=35841,js=35842,eo=35843,to=36196,io=37492,ro=37496,no=37488,so=37489,$r=37490,oo=37491,ao=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,xo=37817,_o=37818,vo=37819,yo=37820,Mo=37821,So=36492,bo=36494,To=36495,Eo=36283,wo=36284,jr=36285,Ao=36286;var en=2300,Pa=2301,Ia=2302,Yl=2303,La=2400,Da=2401,Na=2402;var Ah=3200;var ir=0,Rh=1,Xi="",Ct="srgb",tn="srgb-linear",rn="linear",pt="srgb";var Ua=7680;var Ch=519,Ph=512,Ih=513,Lh=514,Fa=515,Dh=516,Nh=517,Ba=518,Oa=519,Ro=35044;var Zl="300 es",ni=2000,cr=2001;function Fh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Jl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function nn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Kl(){let e=nn("canvas");return e.style.display="block",e}var Uh={},$n=null;function sn(...e){let t="THREE."+e.shift();if($n)$n("log",t,...e);else console.log(t,...e)}function Bh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ee(...e){e=Bh(e);let t="THREE."+e.shift();if($n)$n("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Ue(...e){e=Bh(e);let t="THREE."+e.shift();if($n)$n("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function qi(...e){let t=e.join(" ");if(t in Uh)return;Uh[t]=!0,Ee(...e)}function Oh(e,t,i){return new Promise(function(r,n){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var zh={[Vs]:Vs,[ks]:qs,[Ws]:Ws,[Lr]:Xs,[Hs]:Hs,[qs]:ks,[Ys]:Ys,[Xs]:Lr};class Qt{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let n=r.indexOf(t);if(n!==-1)r.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,e);e.target=null}}}var pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jn=Math.PI/180,on=180/Math.PI;function si(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pi[e&255]+pi[e>>8&255]+pi[e>>16&255]+pi[e>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[i&63|128]+pi[i>>8&255]+"-"+pi[i>>16&255]+pi[i>>24&255]+pi[r&255]+pi[r>>8&255]+pi[r>>16&255]+pi[r>>24&255]).toLowerCase()}function rt(e,t,i){return Math.max(t,Math.min(i,e))}function Gh(e,t){return(e%t+t)%t}function za(e,t,i){return(1-i)*e+i*t}function Vh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function es(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ga(e,t){if(t.constructor===Float32Array)return e;let i=es(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Va(e,t){if(t.constructor===Float32Array)return e;let i=es(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class q{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,o){let a=i[r+0],l=i[r+1],c=i[r+2],u=i[r+3],f=n[s+0],h=n[s+1],d=n[s+2],v=n[s+3];if(u!==v||a!==f||l!==h||c!==d){let S=a*f+l*h+c*d+u*v;if(S<0)f=-f,h=-h,d=-d,v=-v,S=-S;let p=1-o;if(S<0.9995){let m=Math.acos(S),A=Math.sin(m);p=Math.sin(p*m)/A,o=Math.sin(o*m)/A,a=a*p+f*o,l=l*p+h*o,c=c*p+d*o,u=u*p+v*o}else{a=a*p+f*o,l=l*p+h*o,c=c*p+d*o,u=u*p+v*o;let m=1/Math.sqrt(a*a+l*l+c*c+u*u);a*=m,l*=m,c*=m,u*=m}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,n,s){let o=i[r],a=i[r+1],l=i[r+2],c=i[r+3],u=n[s],f=n[s+1],h=n[s+2],d=n[s+3];return e[t]=o*d+c*u+a*h-l*f,e[t+1]=a*d+c*f+l*u-o*h,e[t+2]=l*d+c*h+o*f-a*u,e[t+3]=c*d-o*u-a*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:r,_z:n,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(r/2),u=o(n/2),f=a(i/2),h=a(r/2),d=a(n/2);switch(s){case"XYZ":this._x=f*c*u+l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u-f*h*d;break;case"YXZ":this._x=f*c*u+l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u+f*h*d;break;case"ZXY":this._x=f*c*u-l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u-f*h*d;break;case"ZYX":this._x=f*c*u-l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u+f*h*d;break;case"YZX":this._x=f*c*u+l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u-f*h*d;break;case"XZY":this._x=f*c*u-l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u+f*h*d;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10],f=i+o+u;if(f>0){let h=0.5/Math.sqrt(f+1);this._w=0.25/h,this._x=(c-a)*h,this._y=(n-l)*h,this._z=(s-r)*h}else if(i>o&&i>u){let h=2*Math.sqrt(1+i-o-u);this._w=(c-a)/h,this._x=0.25*h,this._y=(r+s)/h,this._z=(n+l)/h}else if(o>u){let h=2*Math.sqrt(1+o-i-u);this._w=(n-l)/h,this._x=(r+s)/h,this._y=0.25*h,this._z=(a+c)/h}else{let h=2*Math.sqrt(1+u-i-o);this._w=(s-r)/h,this._x=(n+l)/h,this._y=(a+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+r*l-n*a,this._y=r*c+s*a+n*o-i*l,this._z=n*c+s*l+i*a-r*o,this._w=s*c-i*o-r*a-n*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,o=this.dot(e);if(o<0)i=-i,r=-r,n=-n,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,{x:n,y:s,z:o,w:a}=e,l=2*(s*r-o*i),c=2*(o*t-n*r),u=2*(n*i-s*t);return this.x=t+a*l+s*u-o*c,this.y=i+a*c+o*l-n*u,this.z=r+a*u+n*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:r,z:n}=e,{x:s,y:o,z:a}=t;return this.x=r*a-n*o,this.y=n*s-i*a,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Ql=new P,Hh=new oi;class Ze{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,n,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l)}set(e,t,i,r,n,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=n,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7],f=i[2],h=i[5],d=i[8],v=r[0],S=r[3],p=r[6],m=r[1],A=r[4],R=r[7],E=r[2],I=r[5],L=r[8];return n[0]=s*v+o*m+a*E,n[3]=s*S+o*A+a*I,n[6]=s*p+o*R+a*L,n[1]=l*v+c*m+u*E,n[4]=l*S+c*A+u*I,n[7]=l*p+c*R+u*L,n[2]=f*v+h*m+d*E,n[5]=f*S+h*A+d*I,n[8]=f*p+h*R+d*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*n*c+i*o*a+r*n*l-r*s*a}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=c*s-o*l,f=o*a-c*n,h=l*n-s*a,d=t*u+i*f+r*h;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/d;return e[0]=u*v,e[1]=(r*l-c*i)*v,e[2]=(o*i-r*s)*v,e[3]=f*v,e[4]=(c*t-r*a)*v,e[5]=(r*n-o*t)*v,e[6]=h*v,e[7]=(i*a-l*t)*v,e[8]=(s*t-i*n)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,o){let a=Math.cos(n),l=Math.sin(n);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-r*l,r*a,-r*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($l.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($l.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var $l=new Ze;var kh=new Ze().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Wh=new Ze().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Bm(){let e={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(n,s,o){if(this.enabled===!1||s===o||!s||!o)return n;if(this.spaces[s].transfer===pt)n.r=rr(n.r),n.g=rr(n.g),n.b=rr(n.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===pt)n.r=an(n.r),n.g=an(n.g),n.b=an(n.b);return n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){if(n===Xi)return rn;return this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],r=[0.3127,0.329];return e.define({[tn]:{primaries:t,whitePoint:r,transfer:rn,toXYZ:kh,fromXYZ:Wh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:t,whitePoint:r,transfer:pt,toXYZ:kh,fromXYZ:Wh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),e}var at=Bm();function rr(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function an(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var ts;class Ha{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(ts===void 0)ts=nn("canvas");ts.width=e.width,ts.height=e.height;let r=ts.getContext("2d");if(e instanceof ImageData)r.putImageData(e,0,0);else r.drawImage(e,0,0,e.width,e.height);i=ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=rr(n[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(rr(t[i]/255)*255);else t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Om=0;class hr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,o=r.length;s<o;s++)if(r[s].isDataTexture)n.push(jl(r[s].image));else n.push(jl(r[s]))}else n=jl(r);i.url=n}if(!t)e.images[this.uuid]=i;return i}}function jl(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Ha.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return Ee("Texture: Unable to serialize Texture."),{}}var zm=0,ec=new P;class St extends Qt{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,i=ui,r=ui,n=Ft,s=bi,o=ri,a=Wt,l=St.DEFAULT_ANISOTROPY,c=Xi){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=si(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}if(r&&i&&(r.isVector2&&i.isVector2))r.copy(i);else if(r&&i&&(r.isVector3&&i.isVector3))r.copy(i);else if(r&&i&&(r.isMatrix3&&i.isMatrix3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ba)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Gn:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Gn:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=ba;St.DEFAULT_ANISOTROPY=1;class xt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,r,n,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],u=a[8],f=a[1],h=a[5],d=a[9],v=a[2],S=a[6],p=a[10];if(Math.abs(c-f)<0.01&&Math.abs(u-v)<0.01&&Math.abs(d-S)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(u+v)<0.1&&Math.abs(d+S)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,R=(h+1)/2,E=(p+1)/2,I=(c+f)/4,L=(u+v)/4,g=(d+S)/4;if(A>R&&A>E)if(A<0.01)i=0,r=0.707106781,n=0.707106781;else i=Math.sqrt(A),r=I/i,n=L/i;else if(R>E)if(R<0.01)i=0.707106781,r=0,n=0.707106781;else r=Math.sqrt(R),i=I/r,n=g/r;else if(E<0.01)i=0.707106781,r=0.707106781,n=0;else n=Math.sqrt(E),i=L/n,r=g/n;return this.set(i,r,n,t),this}let m=Math.sqrt((S-d)*(S-d)+(u-v)*(u-v)+(f-c)*(f-c));if(Math.abs(m)<0.001)m=1;return this.x=(S-d)/m,this.y=(u-v)/m,this.z=(f-c)/m,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Co extends Qt{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let r=i.count;for(let n=0;n<r;n++)this.textures[n]=new St({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)if(this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0)this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new hr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Et extends Co{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class ln extends St{constructor(e=null,t=1,i=1,r=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class is extends St{constructor(e=null,t=1,i=1,r=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class qe{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,n,s,o,a,l,c,u,f,h,d,v,S){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l,c,u,f,h,d,v,S)}set(e,t,i,r,n,s,o,a,l,c,u,f,h,d,v,S){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=n,p[5]=s,p[9]=o,p[13]=a,p[2]=l,p[6]=c,p[10]=u,p[14]=f,p[3]=h,p[7]=d,p[11]=v,p[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),n=1/rs.setFromMatrixColumn(e,1).length(),s=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:r,z:n}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(r),l=Math.sin(r),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){let f=s*c,h=s*u,d=o*c,v=o*u;t[0]=a*c,t[4]=-a*u,t[8]=l,t[1]=h+d*l,t[5]=f-v*l,t[9]=-o*a,t[2]=v-f*l,t[6]=d+h*l,t[10]=s*a}else if(e.order==="YXZ"){let f=a*c,h=a*u,d=l*c,v=l*u;t[0]=f+v*o,t[4]=d*o-h,t[8]=s*l,t[1]=s*u,t[5]=s*c,t[9]=-o,t[2]=h*o-d,t[6]=v+f*o,t[10]=s*a}else if(e.order==="ZXY"){let f=a*c,h=a*u,d=l*c,v=l*u;t[0]=f-v*o,t[4]=-s*u,t[8]=d+h*o,t[1]=h+d*o,t[5]=s*c,t[9]=v-f*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let f=s*c,h=s*u,d=o*c,v=o*u;t[0]=a*c,t[4]=d*l-h,t[8]=f*l+v,t[1]=a*u,t[5]=v*l+f,t[9]=h*l-d,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let f=s*a,h=s*l,d=o*a,v=o*l;t[0]=a*c,t[4]=v-f*u,t[8]=d*u+h,t[1]=u,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=h*u+d,t[10]=f-v*u}else if(e.order==="XZY"){let f=s*a,h=s*l,d=o*a,v=o*l;t[0]=a*c,t[4]=-u,t[8]=l*c,t[1]=f*u+v,t[5]=s*c,t[9]=h*u-d,t[2]=d*u-h,t[6]=o*c,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Vm)}lookAt(e,t,i){let r=this.elements;if(Fi.subVectors(e,t),Fi.lengthSq()===0)Fi.z=1;if(Fi.normalize(),Nr.crossVectors(i,Fi),Nr.lengthSq()===0){if(Math.abs(i.z)===1)Fi.x+=0.0001;else Fi.z+=0.0001;Fi.normalize(),Nr.crossVectors(i,Fi)}return Nr.normalize(),ka.crossVectors(Fi,Nr),r[0]=Nr.x,r[4]=ka.x,r[8]=Fi.x,r[1]=Nr.y,r[5]=ka.y,r[9]=Fi.y,r[2]=Nr.z,r[6]=ka.z,r[10]=Fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],u=i[5],f=i[9],h=i[13],d=i[2],v=i[6],S=i[10],p=i[14],m=i[3],A=i[7],R=i[11],E=i[15],I=r[0],L=r[4],g=r[8],w=r[12],N=r[1],k=r[5],U=r[9],G=r[13],ee=r[2],D=r[6],K=r[10],j=r[14],H=r[3],de=r[7],Z=r[11],ie=r[15];return n[0]=s*I+o*N+a*ee+l*H,n[4]=s*L+o*k+a*D+l*de,n[8]=s*g+o*U+a*K+l*Z,n[12]=s*w+o*G+a*j+l*ie,n[1]=c*I+u*N+f*ee+h*H,n[5]=c*L+u*k+f*D+h*de,n[9]=c*g+u*U+f*K+h*Z,n[13]=c*w+u*G+f*j+h*ie,n[2]=d*I+v*N+S*ee+p*H,n[6]=d*L+v*k+S*D+p*de,n[10]=d*g+v*U+S*K+p*Z,n[14]=d*w+v*G+S*j+p*ie,n[3]=m*I+A*N+R*ee+E*H,n[7]=m*L+A*k+R*D+E*de,n[11]=m*g+A*U+R*K+E*Z,n[15]=m*w+A*G+R*j+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],u=e[6],f=e[10],h=e[14],d=e[3],v=e[7],S=e[11],p=e[15],m=a*h-l*f,A=o*h-l*u,R=o*f-a*u,E=s*h-l*c,I=s*f-a*c,L=s*u-o*c;return t*(v*m-S*A+p*R)-i*(d*m-S*E+p*I)+r*(d*A-v*E+p*L)-n*(d*R-v*I+S*L)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(n*c-o*a)+r*(n*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;if(e.isVector3)r[12]=e.x,r[13]=e.y,r[14]=e.z;else r[12]=e,r[13]=t,r[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],f=e[10],h=e[11],d=e[12],v=e[13],S=e[14],p=e[15],m=t*o-i*s,A=t*a-r*s,R=t*l-n*s,E=i*a-r*o,I=i*l-n*o,L=r*l-n*a,g=c*v-u*d,w=c*S-f*d,N=c*p-h*d,k=u*S-f*v,U=u*p-h*v,G=f*p-h*S,ee=m*G-A*U+R*k+E*N-I*w+L*g;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/ee;return e[0]=(o*G-a*U+l*k)*D,e[1]=(r*U-i*G-n*k)*D,e[2]=(v*L-S*I+p*E)*D,e[3]=(f*I-u*L-h*E)*D,e[4]=(a*N-s*G-l*w)*D,e[5]=(t*G-r*N+n*w)*D,e[6]=(S*R-d*L-p*A)*D,e[7]=(c*L-f*R+h*A)*D,e[8]=(s*U-o*N+l*g)*D,e[9]=(i*N-t*U-n*g)*D,e[10]=(d*I-v*R+p*m)*D,e[11]=(u*R-c*I-h*m)*D,e[12]=(o*w-s*k-a*g)*D,e[13]=(t*k-i*w+r*g)*D,e[14]=(v*A-d*E-S*m)*D,e[15]=(c*E-u*A+f*m)*D,this}scale(e){let t=this.elements,{x:i,y:r,z:n}=e;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),n=1-i,{x:s,y:o,z:a}=e,l=n*s,c=n*o;return this.set(l*s+i,l*o-r*a,l*a+r*o,0,l*o+r*a,c*o+i,c*a-r*s,0,l*a-r*o,c*a+r*s,n*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,{_x:n,_y:s,_z:o,_w:a}=t,l=n+n,c=s+s,u=o+o,f=n*l,h=n*c,d=n*u,v=s*c,S=s*u,p=o*u,m=a*l,A=a*c,R=a*u,{x:E,y:I,z:L}=i;return r[0]=(1-(v+p))*E,r[1]=(h+R)*E,r[2]=(d-A)*E,r[3]=0,r[4]=(h-R)*I,r[5]=(1-(f+p))*I,r[6]=(S+m)*I,r[7]=0,r[8]=(d+A)*L,r[9]=(S-m)*L,r[10]=(1-(f+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let s=rs.set(r[0],r[1],r[2]).length(),o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();if(n<0)s=-s;nr.copy(this);let l=1/s,c=1/o,u=1/a;return nr.elements[0]*=l,nr.elements[1]*=l,nr.elements[2]*=l,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=u,nr.elements[9]*=u,nr.elements[10]*=u,t.setFromRotationMatrix(nr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,s,o=ni,a=!1){let l=this.elements,c=2*n/(t-e),u=2*n/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),d,v;if(a)d=n/(s-n),v=s*n/(s-n);else if(o===ni)d=-(s+n)/(s-n),v=-2*s*n/(s-n);else if(o===cr)d=-s/(s-n),v=-s*n/(s-n);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,n,s,o=ni,a=!1){let l=this.elements,c=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),d,v;if(a)d=1/(s-n),v=s/(s-n);else if(o===ni)d=-2/(s-n),v=-(s+n)/(s-n);else if(o===cr)d=-1/(s-n),v=-n/(s-n);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var rs=new P,nr=new qe,Gm=new P(0,0,0),Vm=new P(1,1,1),Nr=new P,ka=new P,Fi=new P;var Xh=new qe,qh=new oi;class mi{constructor(e=0,t=0,i=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,n=r[0],s=r[4],o=r[8],a=r[1],l=r[5],c=r[9],u=r[2],f=r[6],h=r[10];switch(t){case"XYZ":if(this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,n);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-rt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,h),this._z=Math.atan2(a,l);else this._y=Math.atan2(-u,n),this._z=0;break;case"ZXY":if(this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,n);break;case"ZYX":if(this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(f,h),this._z=Math.atan2(a,n);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(rt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,n);else this._x=0,this._y=Math.atan2(o,h);break;case"XZY":if(this._z=Math.asin(-rt(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,n);else this._x=Math.atan2(-c,h),this._y=0;break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class cn{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Hm=0,Yh=new P,ns=new oi,_r=new qe,Wa=new P,Po=new P,km=new P,Wm=new oi,Zh=new P(1,0,0),Jh=new P(0,1,0),Kh=new P(0,0,1),Qh={type:"added"},Xm={type:"removed"},ss={type:"childadded",child:null},tc={type:"childremoved",child:null};class ct extends Qt{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();let e=new P,t=new mi,i=new oi,r=new P(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ze}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Wa.copy(e);else Wa.set(e,t,i);let r=this.parent;if(this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)_r.lookAt(Po,Wa,this.up);else _r.lookAt(Wa,Po,this.up);if(this.quaternion.setFromRotationMatrix(_r),r)_r.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(_r),this.quaternion.premultiply(ns.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Ue("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qh),ss.child=e,this.dispatchEvent(ss),ss.child=null;else Ue("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xm),tc.child=e,this.dispatchEvent(tc),tc.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld);return e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qh),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let r=this.children;for(let n=0,s=r.length;n<s;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,Wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:r}=e,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*r,n[13]+=i-n[1]*t-n[5]*i-n[9]*r,n[14]+=r-n[2]*t-n[6]*i-n[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null)r.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let r={};if(r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)r.userData=this.userData;if(r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null)r.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)r.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)r.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map((o)=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)r.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)r.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)r.boundingBox=this.boundingBox.toJSON()}function n(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)r.background=this.background.toJSON();else if(this.background.isTexture)r.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)r.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let u=a[l];n(e.shapes,u)}else n(e.shapes,a)}}if(this.isSkinnedMesh){if(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(n(e.materials,this.material[a]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];r.animations.push(n(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),u=s(e.shapes),f=s(e.skeletons),h=s(e.animations),d=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(u.length>0)i.shapes=u;if(f.length>0)i.skeletons=f;if(h.length>0)i.animations=h;if(d.length>0)i.nodes=d}return i.object=r,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ct.DEFAULT_UP=new P(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yi extends ct{constructor(){super();this.isGroup=!0,this.type="Group"}}var qm={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let r=null,n=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let v of e.hand.values()){let S=t.getJointPose(v,i),p=this._getHandJoint(l,v);if(S!==null)p.matrix.fromArray(S.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=S.radius;p.visible=S!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),h=0.02,d=0.005;if(l.inputState.pinching&&f>h+d)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=h-d)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(n=t.getPose(e.gripSpace,i),n!==null){if(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity);else a.hasLinearVelocity=!1;if(n.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null)r=n;if(r!==null){if(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity);else o.hasLinearVelocity=!1;if(r.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(qm)}}}if(o!==null)o.visible=r!==null;if(a!==null)a.visible=n!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function ic(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class he{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;if(r&&r.isColor)this.copy(r);else if(typeof r==="number")this.setHex(r);else if(typeof r==="string")this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Gh(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=0.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=ic(s,n,e+0.3333333333333333),this.g=ic(s,n,e),this.b=ic(s,n,e-0.3333333333333333)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Ct){function i(n){if(n===void 0)return;if(parseFloat(n)<1)Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(n,16),t);else Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=$h[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else Ee("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return at.workingToColorSpace(gi.copy(this),e),Math.round(rt(gi.r*255,0,255))*65536+Math.round(rt(gi.g*255,0,255))*256+Math.round(rt(gi.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(gi.copy(this),t);let{r:i,g:r,b:n}=gi,s=Math.max(i,r,n),o=Math.min(i,r,n),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let u=s-o;switch(l=c<=0.5?u/(s+o):u/(2-s-o),s){case i:a=(r-n)/u+(r<n?6:0);break;case r:a=(n-i)/u+2;break;case n:a=(i-r)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(gi.copy(this),t),e.r=gi.r,e.g=gi.g,e.b=gi.b,e}getStyle(e=Ct){at.workingToColorSpace(gi.copy(this),e);let{r:t,g:i,b:r}=gi;if(e!==Ct)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Xa);let i=za(Ur.h,Xa.h,t),r=za(Ur.s,Xa.s,t),n=za(Ur.l,Xa.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var gi=new he;he.NAMES=$h;class as{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=i}clone(){return new as(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hn extends ct{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var sr=new P,vr=new P,rc=new P,yr=new P,ls=new P,cs=new P,jh=new P,nc=new P,sc=new P,oc=new P,ac=new xt,lc=new xt,cc=new xt;class xi{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sr.subVectors(e,t),r.cross(sr);let n=r.lengthSq();if(n>0)return r.multiplyScalar(1/Math.sqrt(n));return r.set(0,0,0)}static getBarycoord(e,t,i,r,n){sr.subVectors(r,t),vr.subVectors(i,t),rc.subVectors(e,t);let s=sr.dot(sr),o=sr.dot(vr),a=sr.dot(rc),l=vr.dot(vr),c=vr.dot(rc),u=s*l-o*o;if(u===0)return n.set(0,0,0),null;let f=1/u,h=(l*a-o*c)*f,d=(s*c-o*a)*f;return n.set(1-h-d,d,h)}static containsPoint(e,t,i,r){if(this.getBarycoord(e,t,i,r,yr)===null)return!1;return yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,i,r,n,s,o,a){if(this.getBarycoord(e,t,i,r,yr)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(n,yr.x),a.addScaledVector(s,yr.y),a.addScaledVector(o,yr.z),a}static getInterpolatedAttribute(e,t,i,r,n,s){return ac.setScalar(0),lc.setScalar(0),cc.setScalar(0),ac.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,i),cc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ac,n.x),s.addScaledVector(lc,n.y),s.addScaledVector(cc,n.z),s}static isFrontFacing(e,t,i,r){return sr.subVectors(i,t),vr.subVectors(e,t),sr.cross(vr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),sr.cross(vr).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return xi.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,n=this.c,s,o;ls.subVectors(r,i),cs.subVectors(n,i),nc.subVectors(e,i);let a=ls.dot(nc),l=cs.dot(nc);if(a<=0&&l<=0)return t.copy(i);sc.subVectors(e,r);let c=ls.dot(sc),u=cs.dot(sc);if(c>=0&&u<=c)return t.copy(r);let f=a*u-c*l;if(f<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(ls,s);oc.subVectors(e,n);let h=ls.dot(oc),d=cs.dot(oc);if(d>=0&&h<=d)return t.copy(n);let v=h*l-a*d;if(v<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(cs,o);let S=c*d-h*u;if(S<=0&&u-c>=0&&h-d>=0)return jh.subVectors(n,r),o=(u-c)/(u-c+(h-d)),t.copy(r).addScaledVector(jh,o);let p=1/(S+v+f);return s=v*p,o=f*p,t.copy(i).addScaledVector(ls,s).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _i{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=or.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=n.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,or);else or.fromBufferAttribute(n,s);or.applyMatrix4(e.matrixWorld),this.expandByPoint(or)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();qa.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();qa.copy(i.boundingBox)}qa.applyMatrix4(e.matrixWorld),this.union(qa)}}let r=e.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),Ya.subVectors(this.max,Io),hs.subVectors(e.a,Io),us.subVectors(e.b,Io),fs.subVectors(e.c,Io),Fr.subVectors(us,hs),Br.subVectors(fs,us),un.subVectors(hs,fs);let t=[0,-Fr.z,Fr.y,0,-Br.z,Br.y,0,-un.z,un.y,Fr.z,0,-Fr.x,Br.z,0,-Br.x,un.z,0,-un.x,-Fr.y,Fr.x,0,-Br.y,Br.x,0,-un.y,un.x,0];if(!hc(t,hs,us,fs,Ya))return!1;if(t=[1,0,0,0,1,0,0,0,1],!hc(t,hs,us,fs,Ya))return!1;return Za.crossVectors(Fr,Br),t=[Za.x,Za.y,Za.z],hc(t,hs,us,fs,Ya)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(or).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Mr=[new P,new P,new P,new P,new P,new P,new P,new P],or=new P,qa=new _i,hs=new P,us=new P,fs=new P,Fr=new P,Br=new P,un=new P,Io=new P,Ya=new P,Za=new P,fn=new P;function hc(e,t,i,r,n){for(let s=0,o=e.length-3;s<=o;s+=3){fn.fromArray(e,s);let a=n.x*Math.abs(fn.x)+n.y*Math.abs(fn.y)+n.z*Math.abs(fn.z),l=t.dot(fn),c=i.dot(fn),u=r.dot(fn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Zt=new P,Ja=new q,Ym=0;class qt extends Qt{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ro,this.updateRanges=[],this.gpuType=Xt,this.version=0,this._normalizationScale=e!==void 0?es(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ga(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Va(e,this.array)}}class Lo extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Do extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Be extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Zm=new _i,No=new P,uc=new P;class $t{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Zm.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);let t=No.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*0.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(uc)),this.expandByPoint(No.copy(e.center).sub(uc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Jm=0,Zi=new qe,fc=new ct,ds=new P,Bi=new _i,Uo=new _i,ai=new P;class Xe extends Qt{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Fh(e))?Do:Lo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let n=new Ze().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}let r=this.attributes.tangent;if(r!==void 0)r.transformDirection(e),r.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Zi.makeRotationFromQuaternion(e),this.applyMatrix4(Zi),this}rotateX(e){return Zi.makeRotationX(e),this.applyMatrix4(Zi),this}rotateY(e){return Zi.makeRotationY(e),this.applyMatrix4(Zi),this}rotateZ(e){return Zi.makeRotationZ(e),this.applyMatrix4(Zi),this}translate(e,t,i){return Zi.makeTranslation(e,t,i),this.applyMatrix4(Zi),this}scale(e,t,i){return Zi.makeScale(e,t,i),this.applyMatrix4(Zi),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,n=e.length;r<n;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}if(e.length>t.count)Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new _i;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let n=t[i];if(Bi.setFromBufferAttribute(n),this.morphTargetsRelative)ai.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(ai);else this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new $t;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let o=t[n];if(Uo.setFromBufferAttribute(o),this.morphTargetsRelative)ai.addVectors(Bi.min,Uo.min),Bi.expandByPoint(ai),ai.addVectors(Bi.max,Uo.max),Bi.expandByPoint(ai);else Bi.expandByPoint(Uo.min),Bi.expandByPoint(Uo.max)}Bi.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)ai.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(ai));if(t)for(let n=0,s=t.length;n<s;n++){let o=t[n],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(ai.fromBufferAttribute(o,l),a)ds.fromBufferAttribute(e,l),ai.add(ds);r=Math.max(r,i.distanceToSquared(ai))}}if(this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius))Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:r,uv:n}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let w=0;w<i.count;w++)o[w]=new P,a[w]=new P;let c=new P,u=new P,f=new P,h=new q,d=new q,v=new q,S=new P,p=new P;function m(w,N,k){l[w]=l[N]=l[k]=1,c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,k),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,N),v.fromBufferAttribute(n,k),u.sub(c),f.sub(c),d.sub(h),v.sub(h);let U=1/(d.x*v.y-v.x*d.y);if(!isFinite(U))return;S.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(U),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(U),o[w].add(S),o[N].add(S),o[k].add(S),a[w].add(p),a[N].add(p),a[k].add(p)}let A=this.groups;if(A.length===0)A=[{start:0,count:e.count}];for(let w=0,N=A.length;w<N;++w){let k=A[w],{start:U,count:G}=k;for(let ee=U,D=U+G;ee<D;ee+=3)m(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}let R=new P,E=new P,I=new P,L=new P;function g(w){I.fromBufferAttribute(r,w),L.copy(I);let N=o[w];R.copy(N),R.sub(I.multiplyScalar(I.dot(N))).normalize(),E.crossVectors(L,N);let U=E.dot(a[w])<0?-1:1;s.setXYZW(w,R.x,R.y,R.z,U)}for(let w=0,N=i.count;w<N;++w)if(l[w])g(w);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new P,n=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P;if(e)for(let f=0,h=e.count;f<h;f+=3){let d=e.getX(f+0),v=e.getX(f+1),S=e.getX(f+2);r.fromBufferAttribute(t,d),n.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),c.subVectors(s,n),u.subVectors(r,n),c.cross(u),o.fromBufferAttribute(i,d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),o.add(c),a.add(c),l.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),c.subVectors(s,n),u.subVectors(r,n),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ai.fromBufferAttribute(e,t),ai.normalize(),e.setXYZ(t,ai.x,ai.y,ai.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:u}=o,f=new l.constructor(a.length*c),h=0,d=0;for(let v=0,S=a.length;v<S;v++){if(o.isInterleavedBufferAttribute)h=a[v]*o.data.stride+o.offset;else h=a[v]*c;for(let p=0;p<c;p++)f[d++]=l[h++]}return new qt(f,c,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Xe,i=this.index.array,r=this.attributes;for(let o in r){let a=r[o],l=e(a,i);t.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let a=[],l=n[o];for(let c=0,u=l.length;c<u;c++){let f=l[c],h=e(f,i);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let r={},n=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let u=0,f=l.length;u<f;u++){let h=l[u];c.push(h.toJSON(e.data))}if(c.length>0)r[a]=c,n=!0}if(n)e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let r=e.attributes;for(let l in r){let c=r[l];this.setAttribute(l,c.clone(t))}let n=e.morphAttributes;for(let l in n){let c=[],u=n[l];for(let f=0,h=u.length;f<h;f++)c.push(u[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ro,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=eu(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=eu(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function eu(e){if(e.buffer._uuid===void 0)e.buffer._uuid=si();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Ti=new P;class dn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?es(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ti.fromBufferAttribute(this,t),Ti.applyMatrix4(e),this.setXYZ(t,Ti.x,Ti.y,Ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ti.fromBufferAttribute(this,t),Ti.applyNormalMatrix(e),this.setXYZ(t,Ti.x,Ti.y,Ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ti.fromBufferAttribute(this,t),Ti.transformDirection(e),this.setXYZ(t,Ti.x,Ti.y,Ti.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){sn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new dn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){sn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ga(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Va(e,this.data.array)}}var dc=new P,Km=new P,Qm=new Ze;class Ei{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=dc.subVectors(i,t).cross(Km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(dc),n=this.normal.dot(r);if(n===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/n;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Qm.getNormalMatrix(e),r=this.coplanarPoint(dc).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var $m=0;class Lt extends Qt{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Pr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(r&&r.isColor)r.set(i);else if(r&&r.isVector2&&(i&&i.isVector2)||r&&r.isEuler&&(i&&i.isEuler)||r&&r.isVector3&&(i&&i.isVector3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((n)=>n.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function r(n){let s=[];for(let o in n){let a=n[o];delete a.metadata,s.push(a)}return s}if(t){let n=r(e.textures),s=r(e.images);if(n.length>0)i.textures=n;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new he().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Ei().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new q().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Or extends Lt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var ms,Fo=new P,gs=new P,xs=new P,_s=new q,Bo=new q,ru=new qe,Ka=new P,Oo=new P,Qa=new P,tu=new q,pc=new q,iu=new q;class vs extends ct{constructor(e=new Or){super();if(this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Xe;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new ps(t,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new dn(i,3,0,!1)),ms.setAttribute("uv",new dn(i,2,3,!1))}this.geometry=ms,this.material=e,this.center=new q(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(gs.setFromMatrixScale(this.matrixWorld),ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)gs.multiplyScalar(-xs.z);let i=this.material.rotation,r,n;if(i!==0)n=Math.cos(i),r=Math.sin(i);let s=this.center;$a(Ka.set(-0.5,-0.5,0),xs,s,gs,r,n),$a(Oo.set(0.5,-0.5,0),xs,s,gs,r,n),$a(Qa.set(0.5,0.5,0),xs,s,gs,r,n),tu.set(0,0),pc.set(1,0),iu.set(1,1);let o=e.ray.intersectTriangle(Ka,Oo,Qa,!1,Fo);if(o===null){if($a(Oo.set(-0.5,0.5,0),xs,s,gs,r,n),pc.set(0,1),o=e.ray.intersectTriangle(Ka,Qa,Oo,!1,Fo),o===null)return}let a=e.ray.origin.distanceTo(Fo);if(a<e.near||a>e.far)return;t.push({distance:a,point:Fo.clone(),uv:xi.getInterpolation(Fo,Ka,Oo,Qa,tu,pc,iu,new q),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function $a(e,t,i,r,n,s){if(_s.subVectors(e,i).addScalar(0.5).multiply(r),n!==void 0)Bo.x=s*_s.x-n*_s.y,Bo.y=n*_s.x+s*_s.y;else Bo.copy(_s);e.copy(t),e.x+=Bo.x,e.y+=Bo.y,e.applyMatrix4(ru)}var Sr=new P,mc=new P,ja=new P,el=new P;class ur{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e)}distanceSqToSegment(e,t,i,r){mc.copy(e).add(t).multiplyScalar(0.5),ja.copy(t).sub(e).normalize(),el.copy(this.origin).sub(mc);let n=e.distanceTo(t)*0.5,s=-this.direction.dot(ja),o=el.dot(this.direction),a=-el.dot(ja),l=el.lengthSq(),c=Math.abs(1-s*s),u,f,h,d;if(c>0)if(u=s*a-o,f=s*o-a,d=n*c,u>=0)if(f>=-d)if(f<=d){let v=1/c;u*=v,f*=v,h=u*(u+s*f+2*o)+f*(s*u+f+2*a)+l}else f=n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;else f=-n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;else if(f<=-d)u=Math.max(0,-(-s*n+o)),f=u>0?-n:Math.min(Math.max(-n,-a),n),h=-u*u+f*(f+2*a)+l;else if(f<=d)u=0,f=Math.min(Math.max(-n,-a),n),h=f*(f+2*a)+l;else u=Math.max(0,-(s*n+o)),f=u>0?n:Math.min(Math.max(-n,-a),n),h=-u*u+f*(f+2*a)+l;else f=s>0?-n:n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,u);if(r)r.copy(mc).addScaledVector(ja,f);return h}intersectSphere(e,t){if(e.radius<0)return null;Sr.subVectors(e.center,this.origin);let i=Sr.dot(this.direction),r=Sr.dot(Sr)-i*i,n=e.radius*e.radius;if(r>n)return null;let s=Math.sqrt(n-r),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,r,n,s,o,a,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l;if(c>=0)n=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c;else n=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c;if(i>s||n>r)return null;if(n>i||isNaN(i))i=n;if(s<r||isNaN(r))r=s;if(u>=0)o=(e.min.z-f.z)*u,a=(e.max.z-f.z)*u;else o=(e.max.z-f.z)*u,a=(e.min.z-f.z)*u;if(i>a||o>r)return null;if(o>i||i!==i)i=o;if(a<r||r!==r)r=a;if(r<0)return null;return this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,i,r,n){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,u=e.x-s.x,f=e.y-s.y,h=e.z-s.z,d=t.x-s.x,v=t.y-s.y,S=t.z-s.z,p=i.x-s.x,m=i.y-s.y,A=i.z-s.z,R=Math.abs(a),E=Math.abs(l),I=Math.abs(c),L,g,w,N,k,U,G,ee,D,K,j,H;if(R>=E&&R>=I)if(w=a,U=u,D=d,H=p,a>=0)L=l,g=c,N=f,k=h,G=v,ee=S,K=m,j=A;else L=c,g=l,N=h,k=f,G=S,ee=v,K=A,j=m;else if(E>=I)if(w=l,U=f,D=v,H=m,l>=0)L=c,g=a,N=h,k=u,G=S,ee=d,K=A,j=p;else L=a,g=c,N=u,k=h,G=d,ee=S,K=p,j=A;else if(w=c,U=h,D=S,H=A,c>=0)L=a,g=l,N=u,k=f,G=d,ee=v,K=p,j=m;else L=l,g=a,N=f,k=u,G=v,ee=d,K=m,j=p;if(w===0)return null;let de=L/w,Z=g/w,ie=1/w,ae=N-de*U,ye=k-Z*U,re=G-de*D,ce=ee-Z*D,Fe=K-de*H,Ye=j-Z*H,Je=Fe*ce-Ye*re,De=ae*Ye-ye*Fe,mt=re*ye-ce*ae;if(r){if(Je<0||De<0||mt<0)return null}else if((Je<0||De<0||mt<0)&&(Je>0||De>0||mt>0))return null;let et=Je+De+mt;if(et===0)return null;let tt=ie*(Je*U+De*D+mt*H);if(et>0?tt<0:tt>0)return null;return this.at(tt/et,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt extends Lt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Kr,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var nu=new qe,pn=new ur,tl=new $t,su=new P,il=new P,rl=new P,nl=new P,gc=new P,sl=new P,ou=new P,ol=new P;class je extends ct{constructor(e=new Xe,t=new Bt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(n&&o){sl.set(0,0,0);for(let a=0,l=n.length;a<l;a++){let c=o[a],u=n[a];if(c===0)continue;if(gc.fromBufferAttribute(u,e),s)sl.addScaledVector(gc,c);else sl.addScaledVector(gc.sub(t),c)}t.add(sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(tl.copy(i.boundingSphere),tl.applyMatrix4(n),pn.copy(e.ray).recast(e.near),tl.containsPoint(pn.origin)===!1){if(pn.intersectSphere(tl,su)===null)return;if(pn.origin.distanceToSquared(su)>(e.far-e.near)**2)return}if(nu.copy(n).invert(),pn.copy(e.ray).applyMatrix4(nu),i.boundingBox!==null){if(pn.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,pn)}_computeIntersections(e,t,i){let r,n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,u=n.attributes.normal,{groups:f,drawRange:h}=n;if(o!==null)if(Array.isArray(s))for(let d=0,v=f.length;d<v;d++){let S=f[d],p=s[S.materialIndex],m=Math.max(S.start,h.start),A=Math.min(o.count,Math.min(S.start+S.count,h.start+h.count));for(let R=m,E=A;R<E;R+=3){let I=o.getX(R),L=o.getX(R+1),g=o.getX(R+2);if(r=al(this,p,e,i,l,c,u,I,L,g),r)r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,t.push(r)}}else{let d=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let S=d,p=v;S<p;S+=3){let m=o.getX(S),A=o.getX(S+1),R=o.getX(S+2);if(r=al(this,s,e,i,l,c,u,m,A,R),r)r.faceIndex=Math.floor(S/3),t.push(r)}}else if(a!==void 0)if(Array.isArray(s))for(let d=0,v=f.length;d<v;d++){let S=f[d],p=s[S.materialIndex],m=Math.max(S.start,h.start),A=Math.min(a.count,Math.min(S.start+S.count,h.start+h.count));for(let R=m,E=A;R<E;R+=3){let I=R,L=R+1,g=R+2;if(r=al(this,p,e,i,l,c,u,I,L,g),r)r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,t.push(r)}}else{let d=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let S=d,p=v;S<p;S+=3){let m=S,A=S+1,R=S+2;if(r=al(this,s,e,i,l,c,u,m,A,R),r)r.faceIndex=Math.floor(S/3),t.push(r)}}}}function jm(e,t,i,r,n,s,o,a){let l;if(t.side===Nt)l=r.intersectTriangle(o,s,n,!0,a);else l=r.intersectTriangle(n,s,o,t.side===Hi,a);if(l===null)return null;ol.copy(a),ol.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(ol);if(c<i.near||c>i.far)return null;return{distance:c,point:ol.clone(),object:e}}function al(e,t,i,r,n,s,o,a,l,c){e.getVertexPosition(a,il),e.getVertexPosition(l,rl),e.getVertexPosition(c,nl);let u=jm(e,t,i,r,il,rl,nl,ou);if(u){let f=new P;if(xi.getBarycoord(ou,il,rl,nl,f),n)u.uv=xi.getInterpolatedAttribute(n,a,l,c,f,new q);if(s)u.uv1=xi.getInterpolatedAttribute(s,a,l,c,f,new q);if(o){if(u.normal=xi.getInterpolatedAttribute(o,a,l,c,f,new P),u.normal.dot(r.direction)>0)u.normal.multiplyScalar(-1)}let h={a,b:l,c,normal:new P,materialIndex:0};xi.getNormal(il,rl,nl,h.normal),u.face=h,u.barycoord=f}return u}class fr extends St{constructor(e=null,t=1,i=1,r,n,s,o,a,l=It,c=It,u,f){super(null,s,o,a,l,c,r,n,u,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn extends qt{constructor(e,t,i,r=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var ys=new qe,lu=new qe,ll=[],cu=new _i,eg=new qe,zo=new je,Go=new $t;class Vo extends je{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new mn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,eg)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new _i;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),cu.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(cu)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new $t;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),Go.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,s=e*n+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Go.copy(this.boundingSphere),Go.applyMatrix4(i),e.ray.intersectsSphere(Go)===!1)return;for(let n=0;n<r;n++){this.getMatrixAt(n,ys),lu.multiplyMatrices(i,ys),zo.matrixWorld=lu,zo.raycast(e,ll);for(let s=0,o=ll.length;s<o;s++){let a=ll[s];a.instanceId=n,a.object=this,t.push(a)}ll.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new mn(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;if(this.morphTexture===null)this.morphTexture=new fr(new Float32Array(r*this.count),r,this.count,Xn,Xt);let n=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=r*e;return n[a]=o,n.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var gn=new $t,tg=new q(0.5,0.5),cl=new P;class Ji{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,n=new Ei,s=new Ei){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){let r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],d=n[8],v=n[9],S=n[10],p=n[11],m=n[12],A=n[13],R=n[14],E=n[15];if(r[0].setComponents(l-s,h-c,p-d,E-m).normalize(),r[1].setComponents(l+s,h+c,p+d,E+m).normalize(),r[2].setComponents(l+o,h+u,p+v,E+A).normalize(),r[3].setComponents(l-o,h-u,p-v,E-A).normalize(),i)r[4].setComponents(a,f,S,R).normalize(),r[5].setComponents(l-a,h-f,p-S,E-R).normalize();else if(r[4].setComponents(l-a,h-f,p-S,E-R).normalize(),t===ni)r[5].setComponents(l+a,h+f,p+S,E+R).normalize();else if(t===cr)r[5].setComponents(a,f,S,R).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(e){gn.center.set(0,0,0);let t=tg.distanceTo(e.center);return gn.radius=0.7071067811865476+t,gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var hu=new qe;class Ms{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let n=t[r];if(hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),i[r]===void 0)i[r]=new Ji;i[r].setFromProjectionMatrix(hu,n.coordinateSystem,n.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++){if(t[r]===void 0)t[r]=new Ji;t[r].copy(i[r])}return this._count=e._count,this}clone(){return new Ms().copy(this)}}class fi extends Lt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var fl=new P,dl=new P,uu=new qe,Ho=new ur,hl=new $t,xc=new P,fu=new P;class br extends ct{constructor(e=new Xe,t=new fi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)fl.fromBufferAttribute(t,r-1),dl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=fl.distanceTo(dl);e.setAttribute("lineDistance",new Be(i,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=n,e.ray.intersectsSphere(hl)===!1)return;uu.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(uu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let v=h,S=d-1;v<S;v+=l){let p=c.getX(v),m=c.getX(v+1),A=ul(this,e,Ho,a,p,m,v);if(A)t.push(A)}if(this.isLineLoop){let v=c.getX(d-1),S=c.getX(h),p=ul(this,e,Ho,a,v,S,d-1);if(p)t.push(p)}}else{let h=Math.max(0,s.start),d=Math.min(f.count,s.start+s.count);for(let v=h,S=d-1;v<S;v+=l){let p=ul(this,e,Ho,a,v,v+1,v);if(p)t.push(p)}if(this.isLineLoop){let v=ul(this,e,Ho,a,d-1,h,d-1);if(v)t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function ul(e,t,i,r,n,s,o){let a=e.geometry.attributes.position;if(fl.fromBufferAttribute(a,n),dl.fromBufferAttribute(a,s),i.distanceSqToSegment(fl,dl,xc,fu)>r)return;xc.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(xc);if(c<t.near||c>t.far)return;return{distance:c,point:fu.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var du=new P,pu=new P;class Ii extends br{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)du.fromBufferAttribute(t,r),pu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+du.distanceTo(pu);e.setAttribute("lineDistance",new Be(i,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xn extends Lt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var mu=new qe,_c=new ur,pl=new $t,ml=new P;class ko extends ct{constructor(e=new Xe,t=new xn){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=n,e.ray.intersectsSphere(pl)===!1)return;mu.copy(r).invert(),_c.copy(e.ray).applyMatrix4(mu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let d=f,v=h;d<v;d++){let S=l.getX(d);ml.fromBufferAttribute(u,S),gu(ml,S,a,r,e,t,this)}}else{let f=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let d=f,v=h;d<v;d++)ml.fromBufferAttribute(u,d),gu(ml,d,a,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function gu(e,t,i,r,n,s,o){let a=_c.distanceSqToPoint(e);if(a<i){let l=new P;_c.closestPointToPoint(e,l),l.applyMatrix4(r);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class zr extends St{constructor(e=[],t=Wi,i,r,n,s,o,a,l,c){super(e,t,i,r,n,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vi extends St{constructor(e,t,i,r,n,s,o,a,l){super(e,t,i,r,n,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi extends St{constructor(e,t,i=Kt,r,n,s,o=It,a=It,l,c=Pi,u=1){if(c!==Pi&&c!==Ni)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,n,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ss extends Oi{constructor(e,t=Kt,i=Wi,r,n,s=It,o=It,a,l=Pi){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,r,n,s,o,a,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bs extends St{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Li extends Xe{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};let o=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],u=[],f=0,h=0;d("z","y","x",-1,-1,i,t,e,s,n,0),d("z","y","x",1,-1,i,t,-e,s,n,1),d("x","z","y",1,1,e,i,t,r,s,2),d("x","z","y",1,-1,e,i,-t,r,s,3),d("x","y","z",1,-1,e,t,i,r,n,4),d("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2));function d(v,S,p,m,A,R,E,I,L,g,w){let N=R/L,k=E/g,U=R/2,G=E/2,ee=I/2,D=L+1,K=g+1,j=0,H=0,de=new P;for(let Z=0;Z<K;Z++){let ie=Z*k-G;for(let ae=0;ae<D;ae++){let ye=ae*N-U;de[v]=ye*m,de[S]=ie*A,de[p]=ee,l.push(de.x,de.y,de.z),de[v]=0,de[S]=0,de[p]=I>0?1:-1,c.push(de.x,de.y,de.z),u.push(ae/L),u.push(1-Z/g),j+=1}}for(let Z=0;Z<g;Z++)for(let ie=0;ie<L;ie++){let ae=f+ie+D*Z,ye=f+ie+D*(Z+1),re=f+(ie+1)+D*(Z+1),ce=f+(ie+1)+D*Z;a.push(ae,ye,ce),a.push(ye,re,ce),H+=6}o.addGroup(h,H,w),h+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gl extends Xe{constructor(e=1,t=32,i=0,r=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let n=[],s=[],o=[],a=[],l=new P,c=new q;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let u=0,f=3;u<=t;u++,f+=3){let h=i+u/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[f]/e+1)/2,c.y=(s[f+1]/e+1)/2,a.push(c.x,c.y)}for(let u=1;u<=t;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wo extends Xe{constructor(e=1,t=1,i=1,r=32,n=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a};let l=this;r=Math.floor(r),n=Math.floor(n);let c=[],u=[],f=[],h=[],d=0,v=[],S=i/2,p=0;if(m(),s===!1){if(e>0)A(!0);if(t>0)A(!1)}this.setIndex(c),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(h,2));function m(){let R=new P,E=new P,I=0,L=(t-e)/i;for(let g=0;g<=n;g++){let w=[],N=g/n,k=N*(t-e)+e;for(let U=0;U<=r;U++){let G=U/r,ee=G*a+o,D=Math.sin(ee),K=Math.cos(ee);E.x=k*D,E.y=-N*i+S,E.z=k*K,u.push(E.x,E.y,E.z),R.set(D,L,K).normalize(),f.push(R.x,R.y,R.z),h.push(G,1-N),w.push(d++)}v.push(w)}for(let g=0;g<r;g++)for(let w=0;w<n;w++){let N=v[w][g],k=v[w+1][g],U=v[w+1][g+1],G=v[w][g+1];if(e>0||w!==0)c.push(N,k,G),I+=3;if(t>0||w!==n-1)c.push(k,U,G),I+=3}l.addGroup(p,I,0),p+=I}function A(R){let E=d,I=new q,L=new P,g=0,w=R===!0?e:t,N=R===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,S*N,0),f.push(0,N,0),h.push(0.5,0.5),d++;let k=d;for(let U=0;U<=r;U++){let ee=U/r*a+o,D=Math.cos(ee),K=Math.sin(ee);L.x=w*K,L.y=S*N,L.z=w*D,u.push(L.x,L.y,L.z),f.push(0,N,0),I.x=D*0.5+0.5,I.y=K*0.5*N+0.5,h.push(I.x,I.y),d++}for(let U=0;U<r;U++){let G=E+U,ee=k+U;if(R===!0)c.push(ee,ee+1,G);else c.push(ee+1,ee,G);g+=3}l.addGroup(p,g,R===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,n=i.length,s;if(t)s=t;else s=e*i[n-1];let o=0,a=n-1,l;while(o<=a)if(r=Math.floor(o+(a-o)/2),l=i[r]-s,l<0)o=r+1;else if(l>0)a=r-1;else{a=r;break}if(r=a,i[r]===s)return r/(n-1);let c=i[r],f=i[r+1]-c,h=(s-c)/f;return(r+h)/(n-1)}getTangent(e,t){let r=e-0.0001,n=e+0.0001;if(r<0)r=0;if(n>1)n=1;let s=this.getPoint(r),o=this.getPoint(n),a=t||(s.isVector2?new q:new P);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,r=[],n=[],s=[],o=new P,a=new qe;for(let h=0;h<=e;h++){let d=h/e;r[h]=this.getTangentAt(d,new P)}n[0]=new P,s[0]=new P;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);if(c<=l)l=c,i.set(1,0,0);if(u<=l)l=u,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),s[0].crossVectors(r[0],n[0]);for(let h=1;h<=e;h++){if(n[h]=n[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(rt(r[h-1].dot(r[h]),-1,1));n[h].applyMatrix4(a.makeRotationAxis(o,d))}s[h].crossVectors(r[h],n[h])}if(t===!0){let h=Math.acos(rt(n[0].dot(n[e]),-1,1));if(h/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0)h=-h;for(let d=1;d<=e;d++)n[d].applyMatrix4(a.makeRotationAxis(r[d],h*d)),s[d].crossVectors(r[d],n[d])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class _n extends kt{constructor(e=0,t=0,i=1,r=1,n=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new q){let i=t,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,s=Math.abs(n)<Number.EPSILON;while(n<0)n+=r;while(n>r)n-=r;if(n<Number.EPSILON)if(s)n=0;else n=r;if(this.aClockwise===!0&&!s)if(n===r)n=-r;else n=n-r;let o=this.aStartAngle+e*n,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=a-this.aX,h=l-this.aY;a=f*c-h*u+this.aX,l=f*u+h*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mc extends _n{constructor(e,t,i,r,n,s){super(e,t,i,i,r,n,s);this.isArcCurve=!0,this.type="ArcCurve"}}function Ec(){let e=0,t=0,i=0,r=0;function n(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,r=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,n(o,a,h,d)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+r*a}}}var xu=new P,_u=new P,Sc=new Ec,bc=new Ec,Tc=new Ec;class wc extends kt{constructor(e=[],t=!1,i="centripetal",r=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){let i=t,r=this.points,n=r.length,s=(n-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n;else if(a===0&&o===n-1)o=n-2,a=1;let l,c;if(this.closed||o>0)l=r[(o-1)%n];else _u.subVectors(r[0],r[1]).add(r[0]),l=_u;let u=r[o%n],f=r[(o+1)%n];if(this.closed||o+2<n)c=r[(o+2)%n];else xu.subVectors(r[n-1],r[n-2]).add(r[n-1]),c=xu;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,d=Math.pow(l.distanceToSquared(u),h),v=Math.pow(u.distanceToSquared(f),h),S=Math.pow(f.distanceToSquared(c),h);if(v<0.0001)v=1;if(d<0.0001)d=v;if(S<0.0001)S=v;Sc.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,d,v,S),bc.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,d,v,S),Tc.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,d,v,S)}else if(this.curveType==="catmullrom")Sc.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),bc.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),Tc.initCatmullRom(l.z,u.z,f.z,c.z,this.tension);return i.set(Sc.calc(a),bc.calc(a),Tc.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ac(e,t,i,r,n){let s=(r-t)*0.5,o=(n-i)*0.5,a=e*e,l=e*a;return(2*i-2*r+s+o)*l+(-3*i+3*r-2*s-o)*a+s*e+i}function rg(e,t){let i=1-e;return i*i*t}function ng(e,t){return 2*(1-e)*e*t}function sg(e,t){return e*e*t}function vn(e,t,i,r){return rg(e,t)+ng(e,i)+sg(e,r)}function og(e,t){let i=1-e;return i*i*i*t}function ag(e,t){let i=1-e;return 3*i*i*e*t}function lg(e,t){return 3*(1-e)*e*e*t}function cg(e,t){return e*e*e*t}function yn(e,t,i,r,n){return og(e,t)+ag(e,i)+lg(e,r)+cg(e,n)}class Xo extends kt{constructor(e=new q,t=new q,i=new q,r=new q){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new q){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(yn(e,r.x,n.x,s.x,o.x),yn(e,r.y,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rc extends kt{constructor(e=new P,t=new P,i=new P,r=new P){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(yn(e,r.x,n.x,s.x,o.x),yn(e,r.y,n.y,s.y,o.y),yn(e,r.z,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qo extends kt{constructor(e=new q,t=new q){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new q){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yo extends kt{constructor(e=new P,t=new P){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zo extends kt{constructor(e=new q,t=new q,i=new q){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(vn(e,r.x,n.x,s.x),vn(e,r.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jo extends kt{constructor(e=new P,t=new P,i=new P){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(vn(e,r.x,n.x,s.x),vn(e,r.y,n.y,s.y),vn(e,r.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ko extends kt{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new q){let i=t,r=this.points,n=(r.length-1)*e,s=Math.floor(n),o=n-s,a=r[s===0?s:s-1],l=r[s],c=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return i.set(Ac(o,a.x,l.x,c.x,u.x),Ac(o,a.y,l.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new q().fromArray(r))}return this}}class Ts extends kt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),n=0;while(n<r.length){if(r[n]>=i){let s=r[n]-i,o=this.curves[n],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let r=0,n=this.curves;r<n.length;r++){let s=n[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Gr[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class Es extends Ts{constructor(e){super();if(this.type="Path",this.currentPoint=new q,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new qo(this.currentPoint.clone(),new q(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let n=new Zo(this.currentPoint.clone(),new q(e,t),new q(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,s){let o=new Xo(this.currentPoint.clone(),new q(e,t),new q(i,r),new q(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ko(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,r,n,s),this}absarc(e,t,i,r,n,s){return this.absellipse(e,t,i,i,r,n,s),this}ellipse(e,t,i,r,n,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,r,n,s,o,a),this}absellipse(e,t,i,r,n,s,o,a){let l=new _n(e,t,i,r,n,s,o,a);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dr extends Es{constructor(e){super(e);this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Es().fromJSON(r))}return this}}function Ic(e,t,i=2){let r=t&&t.length,n=r?t[0]*i:e.length,s=yu(e,0,n,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(r)s=pg(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let u=a,f=l;for(let h=i;h<n;h+=i){let d=e[h],v=e[h+1];if(d<a)a=d;if(v<l)l=v;if(d>u)u=d;if(v>f)f=v}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return $o(s,o,i,a,l,c,0),o}function yu(e,t,i,r,n){let s;if(n===Eg(e,t,i,r)>0)for(let o=t;o<i;o+=r)s=vu(o/r|0,e[o],e[o+1],s);else for(let o=i-r;o>=t;o-=r)s=vu(o/r|0,e[o],e[o+1],s);if(s&&ws(s,s.next))ea(s),s=s.next;return s}function Mn(e,t){if(!e)return e;if(!t)t=e;let i=e,r;do if(r=!1,!i.steiner&&(ws(i,i.next)||Gt(i.prev,i,i.next)===0)){if(ea(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function $o(e,t,i,r,n,s,o){if(!e)return;if(!o&&s)vg(e,r,n,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?ug(e,r,n,s):hg(e)){t.push(l.i,e.i,c.i),ea(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)$o(Mn(e),t,i,r,n,s,1);else if(o===1)e=fg(Mn(e),t),$o(e,t,i,r,n,s,2);else if(o===2)dg(e,t,i,r,n,s);break}}}function hg(e){let t=e.prev,i=e,r=e.next;if(Gt(t,i,r)>=0)return!1;let n=t.x,s=i.x,o=r.x,a=t.y,l=i.y,c=r.y,u=Math.min(n,s,o),f=Math.min(a,l,c),h=Math.max(n,s,o),d=Math.max(a,l,c),v=r.next;while(v!==t){if(v.x>=u&&v.x<=h&&v.y>=f&&v.y<=d&&Qo(n,a,s,l,o,c,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function ug(e,t,i,r){let n=e.prev,s=e,o=e.next;if(Gt(n,s,o)>=0)return!1;let a=n.x,l=s.x,c=o.x,u=n.y,f=s.y,h=o.y,d=Math.min(a,l,c),v=Math.min(u,f,h),S=Math.max(a,l,c),p=Math.max(u,f,h),m=Cc(d,v,t,i,r),A=Cc(S,p,t,i,r),{prevZ:R,nextZ:E}=e;while(R&&R.z>=m&&E&&E.z<=A){if(R.x>=d&&R.x<=S&&R.y>=v&&R.y<=p&&R!==n&&R!==o&&Qo(a,u,l,f,c,h,R.x,R.y)&&Gt(R.prev,R,R.next)>=0)return!1;if(R=R.prevZ,E.x>=d&&E.x<=S&&E.y>=v&&E.y<=p&&E!==n&&E!==o&&Qo(a,u,l,f,c,h,E.x,E.y)&&Gt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}while(R&&R.z>=m){if(R.x>=d&&R.x<=S&&R.y>=v&&R.y<=p&&R!==n&&R!==o&&Qo(a,u,l,f,c,h,R.x,R.y)&&Gt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}while(E&&E.z<=A){if(E.x>=d&&E.x<=S&&E.y>=v&&E.y<=p&&E!==n&&E!==o&&Qo(a,u,l,f,c,h,E.x,E.y)&&Gt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function fg(e,t){let i=e;do{let r=i.prev,n=i.next.next;if(!ws(r,n)&&Su(r,i,i.next,n)&&jo(r,n)&&jo(n,r))t.push(r.i,i.i,n.i),ea(i),ea(i.next),i=e=n;i=i.next}while(i!==e);return Mn(i)}function dg(e,t,i,r,n,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Sg(o,a)){let l=bu(o,a);o=Mn(o,o.next),l=Mn(l,l.next),$o(o,t,i,r,n,s,0),$o(l,t,i,r,n,s,0);return}a=a.next}o=o.next}while(o!==e)}function pg(e,t,i,r){let n=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*r,l=s<o-1?t[s+1]*r:e.length,c=yu(e,a,l,r,!1);if(c===c.next)c.steiner=!0;n.push(Mg(c))}n.sort(mg);for(let s=0;s<n.length;s++)i=gg(n[s],i);return i}function mg(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let r=(e.next.y-e.y)/(e.next.x-e.x),n=(t.next.y-t.y)/(t.next.x-t.x);i=r-n}}return i}function gg(e,t){let i=xg(e,t);if(!i)return t;let r=bu(i,e);return Mn(r,r.next),Mn(i,i.next)}function xg(e,t){let i=t,{x:r,y:n}=e,s=-1/0,o;if(ws(e,i))return i;do{if(ws(e,i.next))return i.next;else if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let f=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=r&&f>s){if(s=f,o=i.x<i.next.x?i:i.next,f===r)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;i=o;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Mu(n<c?r:s,n,l,c,n<c?s:r,n,i.x,i.y)){let f=Math.abs(n-i.y)/(r-i.x);if(jo(i,e)&&(f<u||f===u&&(i.x>o.x||i.x===o.x&&_g(o,i))))o=i,u=f}i=i.next}while(i!==a);return o}function _g(e,t){return Gt(e.prev,e,t.prev)<0&&Gt(t.next,e,e.next)<0}function vg(e,t,i,r){let n=e;do{if(n.z===0)n.z=Cc(n.x,n.y,t,i,r);n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,yg(n)}function yg(e){let t,i=1;do{let r=e,n;e=null;let s=null;t=0;while(r){t++;let o=r,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||r.z<=o.z))n=r,r=r.nextZ,a--;else n=o,o=o.nextZ,l--;if(s)s.nextZ=n;else e=n;n.prevZ=s,s=n}r=o}s.nextZ=null,i*=2}while(t>1);return e}function Cc(e,t,i,r,n){return e=(e-i)*n|0,t=(t-r)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Mg(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function Mu(e,t,i,r,n,s,o,a){return(n-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(r-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(n-o)*(r-a)}function Qo(e,t,i,r,n,s,o,a){return!(e===o&&t===a)&&Mu(e,t,i,r,n,s,o,a)}function Sg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!bg(e,t)&&(jo(e,t)&&jo(t,e)&&Tg(e,t)&&(Gt(e.prev,e,t.prev)||Gt(e,t.prev,t))||ws(e,t)&&Gt(e.prev,e,e.next)>0&&Gt(t.prev,t,t.next)>0)}function Gt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function ws(e,t){return e.x===t.x&&e.y===t.y}function Su(e,t,i,r){let n=_l(Gt(e,t,i)),s=_l(Gt(e,t,r)),o=_l(Gt(i,r,e)),a=_l(Gt(i,r,t));if(n!==s&&o!==a)return!0;if(n===0&&xl(e,i,t))return!0;if(s===0&&xl(e,r,t))return!0;if(o===0&&xl(i,e,r))return!0;if(a===0&&xl(i,t,r))return!0;return!1}function xl(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function _l(e){return e>0?1:e<0?-1:0}function bg(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Su(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function jo(e,t){return Gt(e.prev,e,e.next)<0?Gt(e,t,e.next)>=0&&Gt(e,e.prev,t)>=0:Gt(e,t,e.prev)<0||Gt(e,e.next,t)<0}function Tg(e,t){let i=e,r=!1,n=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)r=!r;i=i.next}while(i!==e);return r}function bu(e,t){let i=Pc(e.i,e.x,e.y),r=Pc(t.i,t.x,t.y),n=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function vu(e,t,i,r){let n=Pc(e,t,i);if(!r)n.prev=n,n.next=n;else n.next=r.next,n.prev=r,r.next.prev=n,r.next=n;return n}function ea(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Pc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Eg(e,t,i,r){let n=0;for(let s=t,o=i-r;s<i;s+=r)n+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return n}class Lc{static triangulate(e,t,i=2){return Ic(e,t,i)}}class zi{static area(e){let t=e.length,i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*0.5}static isClockWise(e){return zi.area(e)<0}static triangulateShape(e,t){let i=[],r=[],n=[];Tu(e),Eu(i,e);let s=e.length;t.forEach(Tu);for(let a=0;a<t.length;a++)r.push(s),s+=t[a].length,Eu(i,t[a]);let o=Lc.triangulate(i,r);for(let a=0;a<o.length;a+=3)n.push(o.slice(a,a+3));return n}}function Tu(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function Eu(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class vl extends Xe{constructor(e=new dr([new q(0.5,0.5),new q(-0.5,0.5),new q(-0.5,-0.5),new q(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],n=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Be(r,3)),this.setAttribute("uv",new Be(n,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:0.2,d=t.bevelSize!==void 0?t.bevelSize:h-0.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:wg,A,R=!1,E,I,L,g;if(p){A=p.getSpacedPoints(c),R=!0,f=!1;let ne=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(c,ne),I=new P,L=new P,g=new P}if(!f)S=0,h=0,d=0,v=0;let w=o.extractPoints(l),{shape:N,holes:k}=w;if(!zi.isClockWise(N)){N=N.reverse();for(let ne=0,ge=k.length;ne<ge;ne++){let xe=k[ne];if(zi.isClockWise(xe))k[ne]=xe.reverse()}}function G(ne){let Ne=ne[0];for(let _e=1;_e<=ne.length;_e++){let ke=_e%ne.length,Ve=ne[ke],Ge=Ve.x-Ne.x,st=Ve.y-Ne.y,gt=Ge*Ge+st*st,O=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(Ne.x),Math.abs(Ne.y)),Ot=0.000000000000000000010000000000000001*O*O;if(gt<=Ot){ne.splice(ke,1),_e--;continue}Ne=Ve}}G(N),k.forEach(G);let ee=k.length,D=N;for(let ne=0;ne<ee;ne++){let ge=k[ne];N=N.concat(ge)}function K(ne,ge,xe){if(!ge)Ue("ExtrudeGeometry: vec does not exist");return ne.clone().addScaledVector(ge,xe)}let j=N.length;function H(ne,ge,xe){let Ne,_e,ke,Ve=ne.x-ge.x,Ge=ne.y-ge.y,st=xe.x-ne.x,gt=xe.y-ne.y,O=Ve*Ve+Ge*Ge,Ot=Ve*gt-Ge*st;if(Math.abs(Ot)>Number.EPSILON){let lt=Math.sqrt(O),Dt=Math.sqrt(st*st+gt*gt),Ae=ge.x-Ge/lt,yt=ge.y+Ve/lt,Qe=xe.x-gt/Dt,nt=xe.y+st/Dt,ft=((Qe-Ae)*gt-(nt-yt)*st)/(Ve*gt-Ge*st);Ne=Ae+Ve*ft-ne.x,_e=yt+Ge*ft-ne.y;let C=Ne*Ne+_e*_e;if(C<=2)return new q(Ne,_e);else ke=Math.sqrt(C/2)}else{let lt=!1;if(Ve>Number.EPSILON){if(st>Number.EPSILON)lt=!0}else if(Ve<-Number.EPSILON){if(st<-Number.EPSILON)lt=!0}else if(Math.sign(Ge)===Math.sign(gt))lt=!0;if(lt)Ne=-Ge,_e=Ve,ke=Math.sqrt(O);else Ne=Ve,_e=Ge,ke=Math.sqrt(O/2)}return new q(Ne/ke,_e/ke)}let de=[];for(let ne=0,ge=D.length,xe=ge-1,Ne=ne+1;ne<ge;ne++,xe++,Ne++){if(xe===ge)xe=0;if(Ne===ge)Ne=0;de[ne]=H(D[ne],D[xe],D[Ne])}let Z=[],ie,ae=de.concat();for(let ne=0,ge=ee;ne<ge;ne++){let xe=k[ne];ie=[];for(let Ne=0,_e=xe.length,ke=_e-1,Ve=Ne+1;Ne<_e;Ne++,ke++,Ve++){if(ke===_e)ke=0;if(Ve===_e)Ve=0;ie[Ne]=H(xe[Ne],xe[ke],xe[Ve])}Z.push(ie),ae=ae.concat(ie)}let ye;if(S===0)ye=zi.triangulateShape(D,k);else{let ne=[],ge=[];for(let xe=0;xe<S;xe++){let Ne=xe/S,_e=h*Math.cos(Ne*Math.PI/2),ke=d*Math.sin(Ne*Math.PI/2)+v;for(let Ve=0,Ge=D.length;Ve<Ge;Ve++){let st=K(D[Ve],de[Ve],ke);if(De(st.x,st.y,-_e),Ne===0)ne.push(st)}for(let Ve=0,Ge=ee;Ve<Ge;Ve++){let st=k[Ve];ie=Z[Ve];let gt=[];for(let O=0,Ot=st.length;O<Ot;O++){let lt=K(st[O],ie[O],ke);if(De(lt.x,lt.y,-_e),Ne===0)gt.push(lt)}if(Ne===0)ge.push(gt)}}ye=zi.triangulateShape(ne,ge)}let re=ye.length,ce=d+v;for(let ne=0;ne<j;ne++){let ge=f?K(N[ne],ae[ne],ce):N[ne];if(!R)De(ge.x,ge.y,0);else L.copy(E.normals[0]).multiplyScalar(ge.x),I.copy(E.binormals[0]).multiplyScalar(ge.y),g.copy(A[0]).add(L).add(I),De(g.x,g.y,g.z)}for(let ne=1;ne<=c;ne++)for(let ge=0;ge<j;ge++){let xe=f?K(N[ge],ae[ge],ce):N[ge];if(!R)De(xe.x,xe.y,u/c*ne);else L.copy(E.normals[ne]).multiplyScalar(xe.x),I.copy(E.binormals[ne]).multiplyScalar(xe.y),g.copy(A[ne]).add(L).add(I),De(g.x,g.y,g.z)}for(let ne=S-1;ne>=0;ne--){let ge=ne/S,xe=h*Math.cos(ge*Math.PI/2),Ne=d*Math.sin(ge*Math.PI/2)+v;for(let _e=0,ke=D.length;_e<ke;_e++){let Ve=K(D[_e],de[_e],Ne);De(Ve.x,Ve.y,u+xe)}for(let _e=0,ke=k.length;_e<ke;_e++){let Ve=k[_e];ie=Z[_e];for(let Ge=0,st=Ve.length;Ge<st;Ge++){let gt=K(Ve[Ge],ie[Ge],Ne);if(!R)De(gt.x,gt.y,u+xe);else De(gt.x,gt.y+A[c-1].y,A[c-1].x+xe)}}}Fe(),Ye();function Fe(){let ne=r.length/3;if(f){let ge=0,xe=j*ge;for(let Ne=0;Ne<re;Ne++){let _e=ye[Ne];mt(_e[2]+xe,_e[1]+xe,_e[0]+xe)}ge=c+S*2,xe=j*ge;for(let Ne=0;Ne<re;Ne++){let _e=ye[Ne];mt(_e[0]+xe,_e[1]+xe,_e[2]+xe)}}else{for(let ge=0;ge<re;ge++){let xe=ye[ge];mt(xe[2],xe[1],xe[0])}for(let ge=0;ge<re;ge++){let xe=ye[ge];mt(xe[0]+j*c,xe[1]+j*c,xe[2]+j*c)}}i.addGroup(ne,r.length/3-ne,0)}function Ye(){let ne=r.length/3,ge=0;Je(D,ge),ge+=D.length;for(let xe=0,Ne=k.length;xe<Ne;xe++){let _e=k[xe];Je(_e,ge),ge+=_e.length}i.addGroup(ne,r.length/3-ne,1)}function Je(ne,ge){let xe=ne.length;while(--xe>=0){let Ne=xe,_e=xe-1;if(_e<0)_e=ne.length-1;for(let ke=0,Ve=c+S*2;ke<Ve;ke++){let Ge=j*ke,st=j*(ke+1),gt=ge+Ne+Ge,O=ge+_e+Ge,Ot=ge+_e+st,lt=ge+Ne+st;et(gt,O,Ot,lt)}}}function De(ne,ge,xe){a.push(ne),a.push(ge),a.push(xe)}function mt(ne,ge,xe){tt(ne),tt(ge),tt(xe);let Ne=r.length/3,_e=m.generateTopUV(i,r,Ne-3,Ne-2,Ne-1);dt(_e[0]),dt(_e[1]),dt(_e[2])}function et(ne,ge,xe,Ne){tt(ne),tt(ge),tt(Ne),tt(ge),tt(xe),tt(Ne);let _e=r.length/3,ke=m.generateSideWallUV(i,r,_e-6,_e-3,_e-2,_e-1);dt(ke[0]),dt(ke[1]),dt(ke[3]),dt(ke[1]),dt(ke[2]),dt(ke[3])}function tt(ne){r.push(a[ne*3+0]),r.push(a[ne*3+1]),r.push(a[ne*3+2])}function dt(ne){n.push(ne.x),n.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ag(t,i,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let o=t[e.shapes[n]];i.push(o)}let r=e.options.extrudePath;if(r!==void 0)e.options.extrudePath=new Gr[r.type]().fromJSON(r);return new vl(i,e.options)}}var wg={generateTopUV:function(e,t,i,r,n){let s=t[i*3],o=t[i*3+1],a=t[r*3],l=t[r*3+1],c=t[n*3],u=t[n*3+1];return[new q(s,o),new q(a,l),new q(c,u)]},generateSideWallUV:function(e,t,i,r,n,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[r*3],u=t[r*3+1],f=t[r*3+2],h=t[n*3],d=t[n*3+1],v=t[n*3+2],S=t[s*3],p=t[s*3+1],m=t[s*3+2];if(Math.abs(a-u)<Math.abs(o-c))return[new q(o,1-l),new q(c,1-f),new q(h,1-v),new q(S,1-m)];else return[new q(a,1-l),new q(u,1-f),new q(d,1-v),new q(p,1-m)]}};function Ag(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class wi extends Xe{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let n=e/2,s=t/2,o=Math.floor(i),a=Math.floor(r),l=o+1,c=a+1,u=e/o,f=t/a,h=[],d=[],v=[],S=[];for(let p=0;p<c;p++){let m=p*f-s;for(let A=0;A<l;A++){let R=A*u-n;d.push(R,-m,0),v.push(0,0,1),S.push(A/o),S.push(1-p/a)}}for(let p=0;p<a;p++)for(let m=0;m<o;m++){let A=m+l*p,R=m+l*(p+1),E=m+1+l*(p+1),I=m+1+l*p;h.push(A,R,I),h.push(R,E,I)}this.setIndex(h),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class yl extends Xe{constructor(e=new dr([new q(0,0.5),new q(-0.5,-0.5),new q(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],n=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(n,3)),this.setAttribute("uv",new Be(s,2));function l(c){let u=r.length/3,f=c.extractPoints(t),{shape:h,holes:d}=f;if(zi.isClockWise(h)===!1)h=h.reverse();for(let S=0,p=d.length;S<p;S++){let m=d[S];if(zi.isClockWise(m)===!0)d[S]=m.reverse()}let v=zi.triangulateShape(h,d);for(let S=0,p=d.length;S<p;S++){let m=d[S];h=h.concat(m)}for(let S=0,p=h.length;S<p;S++){let m=h[S];r.push(m.x,m.y,0),n.push(0,0,1),s.push(m.x,m.y)}for(let S=0,p=v.length;S<p;S++){let m=v[S],A=m[0]+u,R=m[1]+u,E=m[2]+u;i.push(A,R,E),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Rg(t,e)}static fromJSON(e,t){let i=[];for(let r=0,n=e.shapes.length;r<n;r++){let s=t[e.shapes[r]];i.push(s)}return new yl(i,e.curveSegments)}}function Rg(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let n=e[i];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}class Ml extends Xe{constructor(e=1,t=0.4,i=12,r=48,n=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n,thetaStart:s,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let a=[],l=[],c=[],u=[],f=new P,h=new P,d=new P;for(let v=0;v<=i;v++){let S=s+v/i*o;for(let p=0;p<=r;p++){let m=p/r*n;h.x=(e+t*Math.cos(S))*Math.cos(m),h.y=(e+t*Math.cos(S))*Math.sin(m),h.z=t*Math.sin(S),l.push(h.x,h.y,h.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(p/r),u.push(v/i)}}for(let v=1;v<=i;v++)for(let S=1;S<=r;S++){let p=(r+1)*v+S-1,m=(r+1)*(v-1)+S-1,A=(r+1)*(v-1)+S,R=(r+1)*v+S;a.push(p,m,R),a.push(m,A,R)}this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ta extends Xe{constructor(e=new Jo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,n=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:n};let s=e.computeFrenetFrames(t,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new P,a=new P,l=new q,c=new P,u=[],f=[],h=[],d=[];v(),this.setIndex(d),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(h,2));function v(){for(let A=0;A<t;A++)S(A);S(n===!1?t:0),m(),p()}function S(A){c=e.getPointAt(A/t,c);let R=s.normals[A],E=s.binormals[A];for(let I=0;I<=r;I++){let L=I/r*Math.PI*2,g=Math.sin(L),w=-Math.cos(L);a.x=w*R.x+g*E.x,a.y=w*R.y+g*E.y,a.z=w*R.z+g*E.z,a.normalize(),f.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,u.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=t;A++)for(let R=1;R<=r;R++){let E=(r+1)*(A-1)+(R-1),I=(r+1)*A+(R-1),L=(r+1)*A+R,g=(r+1)*(A-1)+R;d.push(E,I,g),d.push(I,L,g)}}function m(){for(let A=0;A<=t;A++)for(let R=0;R<=r;R++)l.x=A/t,l.y=R/r,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ta(new Gr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Tr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let n=e[i][r];if(wu(n))if(n.isRenderTargetTexture)Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null;else t[i][r]=n.clone();else if(Array.isArray(n))if(wu(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[i][r]=s}else t[i][r]=n.slice();else t[i][r]=n}}return t}function yi(e){let t={};for(let i=0;i<e.length;i++){let r=Tr(e[i]);for(let n in r)t[n]=r[n]}return t}function wu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Au(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Sl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return at.workingColorSpace}var Ki={clone:Tr,merge:yi};var Ru=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Cu=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class wt extends Lt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Au(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;if(s&&s.isTexture)t.uniforms[r]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[r]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[r]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[r]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[r]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[r]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[r]={type:"m4",value:s.toArray()};else t.uniforms[r]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)if(this.extensions[r]===!0)i[r]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new he().setHex(r.value);break;case"v2":this.uniforms[i].value=new q().fromArray(r.value);break;case"v3":this.uniforms[i].value=new P().fromArray(r.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Sn extends wt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jt extends Lt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ia extends jt{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ra extends Lt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Kr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class na extends Lt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sa extends Lt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function As(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class Qi{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=n)){let o=t[1];if(e<o)i=2,n=o;for(let a=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(r=n,n=t[--i-1],e>=n)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class bl extends Qi{constructor(e,t,i,r){super(e,t,i,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:La,endingEnd:La}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,s=e+1,o=r[n],a=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Da:n=e,o=2*t-i;break;case Na:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Da:s=e,a=2*i-t;break;case Na:s=1,a=i+r[1]-r[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=n*c,this._offsetNext=s*c}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,d=(i-t)/(r-t),v=d*d,S=v*d,p=-f*S+2*f*v-f*d,m=(1+f)*S+(-1.5-2*f)*v+(-0.5+f)*d+1,A=(-1-h)*S+(1.5+h)*v+0.5*d,R=h*S-h*v;for(let E=0;E!==o;++E)n[E]=p*s[c+E]+m*s[l+E]+A*s[a+E]+R*s[u+E];return n}}class oa extends Qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(r-t),u=1-c;for(let f=0;f!==o;++f)n[f]=s[l+f]*u+s[a+f]*c;return n}}class Tl extends Qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class El extends Qi{interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,u=this.outTangents;if(!c||!u){let d=(i-t)/(r-t),v=1-d;for(let S=0;S!==o;++S)n[S]=s[l+S]*v+s[a+S]*d;return n}let f=o*2,h=e-1;for(let d=0;d!==o;++d){let v=s[l+d],S=s[a+d],p=h*f+d*2,m=u[p],A=u[p+1],R=e*f+d*2,E=c[R],I=c[R+1],L=Og(i,t,m,E,r);n[d]=Iu(L,v,A,I,S)}return n}}function Iu(e,t,i,r,n){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*r+e*e*e*n}function Bg(e,t,i,r,n){let s=1-e;return 3*s*s*(i-t)+6*s*e*(r-i)+3*e*e*(n-r)}function Og(e,t,i,r,n){let s=(e-t)/(n-t);for(let o=0;o<8;o++){let a=Iu(s,t,i,r,n)-e;if(Math.abs(a)<0.0000000001)break;let l=Bg(s,t,i,r,n);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class ei{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vr(t,this.TimeBufferType),this.values=Vr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vr(e.times,Array),values:Vr(e.values,Array)};let r=e.getInterpolation();if(r!==e.DefaultInterpolation)i.interpolation=r;if(As(e.settings))i.settings={inTangents:Vr(e.settings.inTangents,Array),outTangents:Vr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new El(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case en:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case Ia:t=this.InterpolantFactoryMethodSmooth;break;case Yl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return Ee("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return en;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;if(As(this.settings))Lu(this.settings.inTangents,e),Lu(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;if(As(this.settings))Du(this.settings.inTangents,e),Du(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,r=i.length,n=0,s=r-1;while(n!==r&&i[n]<e)++n;while(s!==-1&&i[s]>t)--s;if(++s,n!==0||s!==r){if(n>=s)s=Math.max(s,1),n=s-1;let o=this.getValueSize();this.times=i.slice(n,s),this.values=this.values.slice(n*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Ue("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,r=this.values,n=i.length;if(n===0)Ue("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==n;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Ue("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Ue("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(r!==void 0){if(Jl(r))for(let o=0,a=r.length;o!==a;++o){let l=r[o];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ia,n=e.length-1,s=1;for(let o=1;o<n;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!r){let u=o*i,f=u-i,h=u+i;for(let d=0;d!==i;++d){let v=t[u+d];if(v!==t[f+d]||v!==t[h+d]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let u=o*i,f=s*i;for(let h=0;h!==i;++h)t[f+h]=t[u+h]}++s}}if(n>0){e[s]=e[n];for(let o=n*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),r=new this.constructor(this.name,e,t);if(r.createInterpolant=this.createInterpolant,As(this.settings))r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return r}}function Lu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function Du(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Pa;class Hr extends ei{constructor(e,t,i){super(e,t,i)}}Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=en;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class wl extends ei{constructor(e,t,i,r){super(e,t,i,r)}}wl.prototype.ValueTypeName="color";class Al extends ei{constructor(e,t,i,r){super(e,t,i,r)}}Al.prototype.ValueTypeName="number";class Rl extends Qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(r-t),l=e*o;for(let c=l+o;l!==c;l+=4)oi.slerpFlat(n,0,s,l-o,s,l,a);return n}}class aa extends ei{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}}aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends ei{constructor(e,t,i){super(e,t,i)}}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=en;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cl extends ei{constructor(e,t,i,r){super(e,t,i,r)}}Cl.prototype.ValueTypeName="vector";class Pl{constructor(e,t,i){let r=this,n=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,n===!1){if(r.onStart!==void 0)r.onStart(c,s,o)}n=!0},this.itemEnd=function(c){if(s++,r.onProgress!==void 0)r.onProgress(c,s,o);if(s===o){if(n=!1,r.onLoad!==void 0)r.onLoad()}},this.itemError=function(c){if(r.onError!==void 0)r.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){let h=l[u],d=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Dc=new Pl;class Ai{constructor(e){if(this.manager=e!==void 0?e:Dc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gi extends ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class la extends Gi{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var Bc=new qe,Uu=new P,Fu=new P;class Wr{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Bc,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,s=r?r.z/n.x:1,o=r?r.w/n.y:1,a=r?r.x/n.x:0,l=r?r.y/n.y:0;if(e.coordinateSystem===cr||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Il=new P,Ll=new oi,pr=new P;class Tn extends ct{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ll,pr),pr.x===1&&pr.y===1&&pr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Il,Ll,pr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Il,Ll,pr),pr.x===1&&pr.y===1&&pr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Il,Ll,pr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Xr=new P,Bu=new q,Ou=new q;class Vt extends Tn{constructor(e=50,t=1,i=0.1,r=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=on*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jn*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return on*2*Math.atan(Math.tan(jn*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,Bu,Ou),t.subVectors(Ou,Bu)}setViewOffset(e,t,i,r,n,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jn*0.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-0.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;n+=s.offsetX*r/a,t-=s.offsetY*i/l,r*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)n+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Oc extends Wr{constructor(){super(new Vt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=on*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;if(i!==t.fov||r!==t.aspect||n!==t.far)t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class ca extends Gi{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new Oc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class zc extends Wr{constructor(){super(new Vt(90,1,0.5,500));this.isPointLightShadow=!0}}class Er extends Gi{constructor(e,t,i=0,r=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class wr extends Tn{constructor(e=-1,t=1,i=1,r=-1,n=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,s=i+e,o=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Gc extends Wr{constructor(){super(new wr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class En extends Gi{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Gc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}var Rs=-90,Cs=1;class wn extends ct{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Vt(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let n=new Vt(Rs,Cs,e,t);n.layers=this.layers,this.add(n);let s=new Vt(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let o=new Vt(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let l=new Vt(Rs,Cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,n,s,o,a]=t;for(let l of t)this.remove(l);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[n,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let S=!1;if(e.isWebGLRenderer===!0)S=e.state.buffers.depth.getReversed();else S=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,r),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,n),e.setRenderTarget(i,1,r),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,r),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,r),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,r),S&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),S&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(u,f,h),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Dl extends Vt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class ha{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=jg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function jg(){if(this._document.hidden===!1)this.reset()}var Vc="\\[\\]\\.:\\/",t0=new RegExp("["+Vc+"]","g"),Hc="[^"+Vc+"]",i0="[^"+Vc.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",Hc),n0=/(WCOD+)?/.source.replace("WCOD",i0),s0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),a0=new RegExp("^"+r0+n0+s0+o0+"$"),l0=["material","materials","bones","map"];class Vu{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];if(r!==void 0)r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Tt{constructor(e,t,i){this.path=t,this.parsedPath=i||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new Tt(e,t,i);else return new Tt.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(e){let t=a0.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let n=i.nodeName.substring(r+1);if(l0.indexOf(n)!==-1)i.nodeName=i.nodeName.substring(0,r),i.objectName=n}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:r,propertyIndex:n}=t;if(!e)e=Tt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[r];if(s===void 0){let l=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[n]!==void 0)n=e.morphTargetDictionary[n]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=r;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=Vu;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DP=new Float32Array(1);class Hu{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=r,this}}function kc(e,t,i,r){let n=f0(r);switch(i){case Ra:return e*t;case Xn:return e*t/n.components*n.byteLength;case Qr:return e*t/n.components*n.byteLength;case Ui:return e*t*2/n.components*n.byteLength;case qn:return e*t*2/n.components*n.byteLength;case Ca:return e*t*3/n.components*n.byteLength;case ri:return e*t*4/n.components*n.byteLength;case Yn:return e*t*4/n.components*n.byteLength;case Zn:case Jn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Kn:case Qn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $s:case eo:return Math.max(e,16)*Math.max(t,8)/4;case Qs:case js:return Math.max(e,8)*Math.max(t,8)/2;case to:case io:case no:case so:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ro:case $r:case oo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case co:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case po:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case mo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case _o:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case vo:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case yo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case So:case bo:case To:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Eo:case wo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case jr:case Ao:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function f0(e){switch(e){case Wt:case Ta:return{byteLength:1,components:1};case xr:case Ea:case Rt:return{byteLength:2,components:1};case kn:case Wn:return{byteLength:2,components:4};case Kt:case Hn:case Xt:return{byteLength:4,components:1};case wa:case Aa:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));if(typeof window<"u")if(window.__THREE__)Ee("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Gs;function Nl(){let e=null,t=!1,i=null,r=null;function n(s,o){r=e.requestAnimationFrame(n),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;r=e.requestAnimationFrame(n),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(r);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function ku(e){let t=new WeakMap;function i(a,l){let{array:c,usage:u}=a,f=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)d=e.HALF_FLOAT;else d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function r(a,l,c){let{array:u,updateRanges:f}=l;if(e.bindBuffer(c,a),f.length===0)e.bufferSubData(c,0,u);else{f.sort((d,v)=>d.start-v.start);let h=0;for(let d=1;d<f.length;d++){let v=f[h],S=f[d];if(S.start<=v.start+v.count+1)v.count=Math.max(v.count,S.start+S.count-v.start);else++h,f[h]=S}f.length=h+1;for(let d=0,v=f.length;d<v;d++){let S=f[d];e.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let u=t.get(a);if(!u||u.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var Wu=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Xu=`
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
`;var qu=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Yu=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Zu=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var Ju=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var Ku=`
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
`;var Qu=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var $u=`
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
`;var ju=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var ef=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var tf=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var rf=`

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

`;var nf=`

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

`;var sf=`
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
`;var of=`
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
`;var af=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var lf=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var cf=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var hf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var uf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var ff=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var df=`
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
`;var pf=`
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
`;var mf=`

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
`;var gf=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var xf=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var _f=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var vf=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var yf=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Mf=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var Sf=`
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
`;var bf=`
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
`;var Tf=`
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
`;var Ef=`
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
`;var wf=`
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
`;var Af=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Rf=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Cf=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var Pf=`
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
`;var If=`

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
`;var Lf=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var Df=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Nf=`
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
`;var Uf=`
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
`;var Ff=`
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
`;var Bf=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var Of=`
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
`;var zf=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var Gf=`
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
`;var Vf=`
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
`;var Hf=`

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
`;var kf=`
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
`;var Wf=`
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
`;var Xf=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var qf=`
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
`;var Yf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Zf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Jf=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Kf=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var Qf=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var $f=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var jf=`
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
`;var ed=`
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
`;var td=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var id=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var rd=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var nd=`
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
`;var sd=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var od=`
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
`;var ad=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var ld=`
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

`;var cd=`

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
`;var hd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var ud=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var fd=`
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
`;var dd=`
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
`;var pd=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var md=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var gd=`

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
`;var xd=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var _d=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var vd=`
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
`;var yd=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Md=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Sd=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var bd=`
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
`;var Td=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Ed=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var wd=`
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
`;var Ad=`

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
`;var Rd=`

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


`;var Cd=`
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
`;var Pd=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Id=`
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
`;var Ld=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var Dd=`
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
`;var Nd=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var Ud=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var Fd=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var Bd=`
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
`;var Od=`
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
`;var zd=`
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
`;var Gd=`
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
`;var Vd=`
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
`;var Hd=`
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
`;var kd=`
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
`;var Wd=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Xd=`
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
`;var qd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Yd=`

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
`;var Zd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Jd=`
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
`;var Kd=`
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
`,Qd=`
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
`;var $d=`
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
`,jd=`
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
`;var ep=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,tp=`
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
`;var ip=`
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
`,rp=`
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
`;var np=`
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
`,sp=`
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
`;var op=`
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
`,ap=`
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
`;var lp=`
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
`,cp=`
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
`;var hp=`
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
`,up=`
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
`;var fp=`
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
`,dp=`
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
`;var pp=`
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
`,mp=`
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
`;var gp=`
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
`,xp=`
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
`;var _p=`
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
`,vp=`
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
`;var yp=`
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
`,Mp=`
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
`;var Sp=`
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
`,bp=`
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
`;var ut={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:Zu,alphatest_pars_fragment:Ju,aomap_fragment:Ku,aomap_pars_fragment:Qu,batching_pars_vertex:$u,batching_vertex:ju,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:rf,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:ff,color_vertex:df,common:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:xf,emissivemap_fragment:_f,emissivemap_pars_fragment:vf,colorspace_fragment:yf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Tf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Ff,envmap_vertex:wf,fog_vertex:Af,fog_pars_vertex:Rf,fog_fragment:Cf,fog_pars_fragment:Pf,gradientmap_pars_fragment:If,lightmap_pars_fragment:Lf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Nf,lights_pars_begin:Uf,lights_toon_fragment:Bf,lights_toon_pars_fragment:Of,lights_phong_fragment:zf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Hf,lights_fragment_begin:kf,lights_fragment_maps:Wf,lights_fragment_end:Xf,lightprobes_pars_fragment:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Kf,map_fragment:Qf,map_pars_fragment:$f,map_particle_fragment:jf,map_particle_pars_fragment:ed,metalnessmap_fragment:td,metalnessmap_pars_fragment:id,morphinstance_vertex:rd,morphcolor_vertex:nd,morphnormal_vertex:sd,morphtarget_pars_vertex:od,morphtarget_vertex:ad,normal_fragment_begin:ld,normal_fragment_maps:cd,normal_pars_fragment:hd,normal_pars_vertex:ud,normal_vertex:fd,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:gd,iridescence_pars_fragment:xd,opaque_fragment:_d,packing:vd,premultiplied_alpha_fragment:yd,project_vertex:Md,dithering_fragment:Sd,dithering_pars_fragment:bd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:wd,shadowmap_pars_vertex:Ad,shadowmap_vertex:Rd,shadowmask_pars_fragment:Cd,skinbase_vertex:Pd,skinning_pars_vertex:Id,skinning_vertex:Ld,skinnormal_vertex:Dd,specularmap_fragment:Nd,specularmap_pars_fragment:Ud,tonemapping_fragment:Fd,tonemapping_pars_fragment:Bd,transmission_fragment:Od,transmission_pars_fragment:zd,uv_pars_fragment:Gd,uv_pars_vertex:Vd,uv_vertex:Hd,worldpos_vertex:kd,background_vert:Wd,background_frag:Xd,backgroundCube_vert:qd,backgroundCube_frag:Yd,cube_vert:Zd,cube_frag:Jd,depth_vert:Kd,depth_frag:Qd,distance_vert:$d,distance_frag:jd,equirect_vert:ep,equirect_frag:tp,linedashed_vert:ip,linedashed_frag:rp,meshbasic_vert:np,meshbasic_frag:sp,meshlambert_vert:op,meshlambert_frag:ap,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:hp,meshnormal_frag:up,meshphong_vert:fp,meshphong_frag:dp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:xp,points_vert:_p,points_frag:vp,shadow_vert:yp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:bp};var Ie={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new q(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}};var Vi={basic:{uniforms:yi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:yi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:yi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:yi([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:yi([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new he(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:yi([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:yi([Ie.points,Ie.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:yi([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:yi([Ie.common,Ie.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:yi([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:yi([Ie.sprite,Ie.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:yi([Ie.common,Ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:yi([Ie.lights,Ie.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Vi.physical={uniforms:yi([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Ul={r:0,b:0,g:0},P0=new qe,Tp=new Ze;Tp.set(-1,0,0,0,1,0,0,0,1);function Ep(e,t,i,r,n,s){let o=new he(0),a=n===!0?0:1,l,c,u=null,f=0,h=null;function d(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let E=A.backgroundBlurriness>0;R=t.get(R,E)}return R}function v(A){let R=!1,E=d(A);if(E===null)p(o,a);else if(E&&E.isColor)p(E,1),R=!0;let I=e.xr.getEnvironmentBlendMode();if(I==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(I==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||R)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function S(A,R){let E=d(R);if(E&&E.isCubeTexture){if(c===void 0)c=new je(new Li(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Tr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,L,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c);if(c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Tp);if(c.material.toneMapped=at.getTransfer(E.colorSpace)!==pt,u!==E||f!==E.version||h!==e.toneMapping)c.material.needsUpdate=!0,u=E,f=E.version,h=e.toneMapping;c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)}else if(E&&E.isTexture){if(l===void 0)l=new je(new wi(2,2),new wt({name:"BackgroundMaterial",uniforms:Tr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l);if(l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=at.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0)E.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(E.matrix),u!==E||f!==E.version||h!==e.toneMapping)l.material.needsUpdate=!0,u=E,f=E.version,h=e.toneMapping;l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)}}function p(A,R){A.getRGB(Ul,Sl(e)),i.buffers.color.setClear(Ul.r,Ul.g,Ul.b,R,s)}function m(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(A,R=1){o.set(A),a=R,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,p(o,a)},render:v,addToRenderList:S,dispose:m}}function wp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},n=h(null),s=n,o=!1;function a(U,G,ee,D,K){let j=!1,H=f(U,D,ee,G);if(s!==H)s=H,c(s.object);if(j=d(U,D,ee,K),j)v(U,D,ee,K);if(K!==null)t.update(K,e.ELEMENT_ARRAY_BUFFER);if(j||o){if(o=!1,E(U,G,ee,D),K!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer)}}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function u(U){return e.deleteVertexArray(U)}function f(U,G,ee,D){let K=D.wireframe===!0,j=r[G.id];if(j===void 0)j={},r[G.id]=j;let H=U.isInstancedMesh===!0?U.id:0,de=j[H];if(de===void 0)de={},j[H]=de;let Z=de[ee.id];if(Z===void 0)Z={},de[ee.id]=Z;let ie=Z[K];if(ie===void 0)ie=h(l()),Z[K]=ie;return ie}function h(U){let G=[],ee=[],D=[];for(let K=0;K<i;K++)G[K]=0,ee[K]=0,D[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ee,attributeDivisors:D,object:U,attributes:{},index:null}}function d(U,G,ee,D){let K=s.attributes,j=G.attributes,H=0,de=ee.getAttributes();for(let Z in de)if(de[Z].location>=0){let ae=K[Z],ye=j[Z];if(ye===void 0){if(Z==="instanceMatrix"&&U.instanceMatrix)ye=U.instanceMatrix;if(Z==="instanceColor"&&U.instanceColor)ye=U.instanceColor}if(ae===void 0)return!0;if(ae.attribute!==ye)return!0;if(ye&&ae.data!==ye.data)return!0;H++}if(s.attributesNum!==H)return!0;if(s.index!==D)return!0;return!1}function v(U,G,ee,D){let K={},j=G.attributes,H=0,de=ee.getAttributes();for(let Z in de)if(de[Z].location>=0){let ae=j[Z];if(ae===void 0){if(Z==="instanceMatrix"&&U.instanceMatrix)ae=U.instanceMatrix;if(Z==="instanceColor"&&U.instanceColor)ae=U.instanceColor}let ye={};if(ye.attribute=ae,ae&&ae.data)ye.data=ae.data;K[Z]=ye,H++}s.attributes=K,s.attributesNum=H,s.index=D}function S(){let U=s.newAttributes;for(let G=0,ee=U.length;G<ee;G++)U[G]=0}function p(U){m(U,0)}function m(U,G){let ee=s.newAttributes,D=s.enabledAttributes,K=s.attributeDivisors;if(ee[U]=1,D[U]===0)e.enableVertexAttribArray(U),D[U]=1;if(K[U]!==G)e.vertexAttribDivisor(U,G),K[U]=G}function A(){let U=s.newAttributes,G=s.enabledAttributes;for(let ee=0,D=G.length;ee<D;ee++)if(G[ee]!==U[ee])e.disableVertexAttribArray(ee),G[ee]=0}function R(U,G,ee,D,K,j,H){if(H===!0)e.vertexAttribIPointer(U,G,ee,K,j);else e.vertexAttribPointer(U,G,ee,D,K,j)}function E(U,G,ee,D){S();let K=D.attributes,j=ee.getAttributes(),H=G.defaultAttributeValues;for(let de in j){let Z=j[de];if(Z.location>=0){let ie=K[de];if(ie===void 0){if(de==="instanceMatrix"&&U.instanceMatrix)ie=U.instanceMatrix;if(de==="instanceColor"&&U.instanceColor)ie=U.instanceColor}if(ie!==void 0){let ae=ie.normalized,ye=ie.itemSize,re=t.get(ie);if(re===void 0)continue;let{buffer:ce,type:Fe,bytesPerElement:Ye}=re,Je=Fe===e.INT||Fe===e.UNSIGNED_INT||ie.gpuType===Hn;if(ie.isInterleavedBufferAttribute){let De=ie.data,mt=De.isInterleavedBuffer===!0?De.stride:De.itemSize,et=ie.offset;if(De.isInstancedInterleavedBuffer||De.isInstancedBufferAttribute){for(let tt=0;tt<Z.locationSize;tt++)m(Z.location+tt,De.meshPerAttribute);if(U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0)D._maxInstanceCount=De.meshPerAttribute*De.count}else for(let tt=0;tt<Z.locationSize;tt++)p(Z.location+tt);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let tt=0;tt<Z.locationSize;tt++)R(Z.location+tt,ye/Z.locationSize,Fe,ae,mt*Ye,(et+ye/Z.locationSize*tt)*Ye,Je)}else{if(ie.isInstancedBufferAttribute){for(let De=0;De<Z.locationSize;De++)m(Z.location+De,ie.meshPerAttribute);if(U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0)D._maxInstanceCount=ie.meshPerAttribute*ie.count}else for(let De=0;De<Z.locationSize;De++)p(Z.location+De);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let De=0;De<Z.locationSize;De++)R(Z.location+De,ye/Z.locationSize,Fe,ae,ye*Ye,ye/Z.locationSize*De*Ye,Je)}}else if(H!==void 0){let ae=H[de];if(ae!==void 0)switch(ae.length){case 2:e.vertexAttrib2fv(Z.location,ae);break;case 3:e.vertexAttrib3fv(Z.location,ae);break;case 4:e.vertexAttrib4fv(Z.location,ae);break;default:e.vertexAttrib1fv(Z.location,ae)}}}}A()}function I(){N();for(let U in r){let G=r[U];for(let ee in G){let D=G[ee];for(let K in D){let j=D[K];for(let H in j)u(j[H].object),delete j[H];delete D[K]}}delete r[U]}}function L(U){if(r[U.id]===void 0)return;let G=r[U.id];for(let ee in G){let D=G[ee];for(let K in D){let j=D[K];for(let H in j)u(j[H].object),delete j[H];delete D[K]}}delete r[U.id]}function g(U){for(let G in r){let ee=r[G];for(let D in ee){let K=ee[D];if(K[U.id]===void 0)continue;let j=K[U.id];for(let H in j)u(j[H].object),delete j[H];delete K[U.id]}}}function w(U){for(let G in r){let ee=r[G],D=U.isInstancedMesh===!0?U.id:0,K=ee[D];if(K===void 0)continue;for(let j in K){let H=K[j];for(let de in H)u(H[de].object),delete H[de];delete K[j]}if(delete ee[D],Object.keys(ee).length===0)delete r[G]}}function N(){if(k(),o=!0,s===n)return;s=n,c(s.object)}function k(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:N,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:p,disableUnusedAttributes:A}}function Ap(e,t,i){let r;function n(l){r=l}function s(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function o(l,c,u){if(u===0)return;e.drawArraysInstanced(r,l,c,u),i.update(c,r,u)}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];i.update(h,r,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Rp(e,t,i,r){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(g){if(g!==ri&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(g){let w=g===Rt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(g!==Wt&&g!==Xt&&!w&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",u=l(c);if(u!==c)Ee("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let f=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.logarithmicDepthBuffer===!0&&f===!1;if(i.reversedDepthBuffer===!0&&f===!1)Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&f===!0)Ee("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),I=e.getParameter(e.MAX_SAMPLES),L=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:E,maxSamples:I,samples:L}}function Cp(e){let t=this,i=null,r=0,n=!1,s=!1,o=new Ei,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||r!==0||n;return n=h,r=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){i=u(f,h,0)},this.setState=function(f,h,d){let{clippingPlanes:v,clipIntersection:S,clipShadows:p}=f,m=e.get(f);if(!n||v===null||v.length===0||s&&!p)if(s)u(null);else c();else{let A=s?0:r,R=A*4,E=m.clippingState||null;l.value=E,E=u(v,h,R,d);for(let I=0;I!==R;++I)E[I]=i[I];m.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=r>0;t.numPlanes=r,t.numIntersection=0}function u(f,h,d,v){let S=f!==null?f.length:0,p=null;if(S!==0){if(p=l.value,v!==!0||p===null){let m=d+S*4,A=h.matrixWorldInverse;if(a.getNormalMatrix(A),p===null||p.length<m)p=new Float32Array(m);for(let R=0,E=d;R!==S;++R,E+=4)o.copy(f[R]).applyMatrix4(A,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}class qr extends Et{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Li(5,5,5),n=new wt({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:ki});n.uniforms.tEquirect.value=t;let s=new je(r,n),o=t.minFilter;if(t.minFilter===bi)t.minFilter=Ft;return new wn(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}var Pp=256,I0=3,L0=20,Np=256,Up=16,D0=3,N0=new P,U0=new he;class Yr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wn(1,10,null),this._boxMesh=new je(new Li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,r=100,n={}){let{size:s=256,position:o=N0}=n,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:u,autoClearColor:f,autoClearDepth:h,autoClearStencil:d}=a,v=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,v===null)e.background=a.getClearColor(U0);let S=new wn(i,r,c);if(S.position.copy(o),S.update(a,e),a.autoClear=u,a.autoClearColor=f,a.autoClearDepth=h,a.autoClearStencil=d,e.background=v,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pp,Vh(e))}_fromTexture(e,t){if(e.mapping===Wi||e.mapping===gr)this._setSize(e.image.length===0?Pp:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Ip(e,!1,!1),i=Math.log2(e)-I0;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Ip(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,n=this._cubeCamera;r.material=i,n.renderTarget=e,n.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),n.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Wi||e.mapping===gr){if(this._cubemapMaterial===null)this._cubemapMaterial=Dp();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Lp();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=F0(),this._integrationMaterial=B0();let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(t/Up);for(let s=0;s<=i;s++){let o=Yr.lodToRoughness(s,i);if(s>i-D0)n.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Np*Math.pow(o,4)))+0.5:0;r.roughness.value=o,r.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=O0();let i=this._blurMaterial,r=i.uniforms,n=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=n.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(n,0,i)}}function Ip(e,t,i){return new qr(e,{minFilter:bi,generateMipmaps:t,type:Rt,colorSpace:tn,depthBuffer:i})}function ua(e,t,i){return new wt({name:e,uniforms:t,vertexShader:ut.cube_vert,fragmentShader:i,side:Nt,blending:ki,depthTest:!1,depthWrite:!1})}function F0(){return ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Np}u

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
	`)}function B0(){return ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Up}},`

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
	`)}function O0(){return ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${L0}
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
	`)}function Lp(){return ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Dp(){return ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fp(e){let t=new WeakMap,i=new WeakMap,r=null;function n(h,d=!1){if(h===null||h===void 0)return null;if(d)return o(h);return s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Zs||d===Js)if(t.has(h)){let v=t.get(h).texture;return a(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let S=new qr(v.height);return S.fromEquirectangularTexture(e,h),t.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,v=d===Zs||d===Js,S=d===Wi||d===gr;if(v||S){let p=i.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m){if(r===null)r=new Yr(e);return p=v?r.fromEquirectangular(h,p):r.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let A=h.image;if(v&&A&&A.height>0||S&&A&&l(A)){if(r===null)r=new Yr(e);return p=v?r.fromEquirectangular(h):r.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),h.addEventListener("dispose",u),p.texture}else return null}}}return h}function a(h,d){if(d===Zs)h.mapping=Wi;else if(d===Js)h.mapping=gr;return h}function l(h){let d=0,v=6;for(let S=0;S<v;S++)if(h[S]!==void 0)d++;return d===v}function c(h){let d=h.target;d.removeEventListener("dispose",c);let v=t.get(d);if(v!==void 0)t.delete(d),v.dispose()}function u(h){let d=h.target;d.removeEventListener("dispose",u);let v=i.get(d);if(v!==void 0)i.delete(d),v.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,r!==null)r.dispose(),r=null}return{get:n,dispose:f}}function Bp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let n=e.getExtension(r);return t[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);if(n===null)qi("WebGLRenderer: "+r+" extension not supported.");return n}}}function Op(e,t,i,r){let n={},s=new WeakMap,o=new FinalizationRegistry((v)=>delete n[v]);function a(v){l(v.target)}function l(v){if(v.index!==null)t.remove(v.index);for(let p in v.attributes)t.remove(v.attributes[p]);v.removeEventListener("dispose",a),delete n[v.id],o.unregister(v);let S=s.get(v);if(S)t.remove(S),s.delete(v);if(r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0)delete v._maxInstanceCount;i.memory.geometries--}function c(v,S){if(n[S.id]!==void 0)return S;return S.addEventListener("dispose",a),n[S.id]=new WeakRef(S),o.register(S,S.id,S),i.memory.geometries++,S}function u(v){let S=v.attributes;for(let p in S)t.update(S[p],e.ARRAY_BUFFER)}function f(v){let S=v.index,p=v.attributes.position,m=0;if(p===void 0)return;let A=S!==null?S.array.length:p.array.length/3-1,E=new(p.count>=65535?Do:Lo)(Math.ceil(A/3)*6,1),I=E.array;if(S!==null){let g=S.array;m=S.version;for(let w=0,N=0;w<A;w+=3){let k=g[w+0],U=g[w+1],G=g[w+2];I[N++]=k,I[N++]=U,I[N++]=U,I[N++]=G,I[N++]=G,I[N++]=k}}else{m=p.version;for(let g=0,w=0;g<A;g+=3){let N=g+0,k=g+1,U=g+2;I[w++]=N,I[w++]=k,I[w++]=k,I[w++]=U,I[w++]=U,I[w++]=N}}E.version=m;let L=s.get(v);if(L)t.remove(L);s.set(v,E)}function h(v){let S=s.get(v);if(S){let p=v.index;if(p!==null){if(S.version<p.version)f(v)}}else f(v);return s.get(v)}function d(){for(let v in n){let S=n[v].deref();if(S!==void 0)l(S)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function zp(e,t,i){let r;function n(f){r=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){e.drawElements(r,h,s,f*o),i.update(h,r,1)}function c(f,h,d){if(d===0)return;e.drawElementsInstanced(r,h,s,f*o,d),i.update(h,r,d)}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,s,f,0,d);let S=0;for(let p=0;p<d;p++)S+=h[p];i.update(S,r,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Gp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Ue("WebGLInfo: Unknown draw mode:",o);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:r}}function Vp(e,t,i){let r=new WeakMap,n=new xt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=r.get(a);if(h===void 0||h.count!==f){let N=function(){g.dispose(),r.delete(a),a.removeEventListener("dispose",N)};if(h!==void 0)h.texture.dispose();let d=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],R=0;if(d===!0)R=1;if(v===!0)R=2;if(S===!0)R=3;let E=a.attributes.position.count*R,I=1;if(E>t.maxTextureSize)I=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize;let L=new Float32Array(E*I*4*f),g=new ln(L,E,I,f);g.type=Xt,g.needsUpdate=!0;let w=R*4;for(let k=0;k<f;k++){let U=p[k],G=m[k],ee=A[k],D=E*I*4*k;for(let K=0;K<U.count;K++){let j=K*w;if(d===!0)n.fromBufferAttribute(U,K),L[D+j+0]=n.x,L[D+j+1]=n.y,L[D+j+2]=n.z,L[D+j+3]=0;if(v===!0)n.fromBufferAttribute(G,K),L[D+j+4]=n.x,L[D+j+5]=n.y,L[D+j+6]=n.z,L[D+j+7]=0;if(S===!0)n.fromBufferAttribute(ee,K),L[D+j+8]=n.x,L[D+j+9]=n.y,L[D+j+10]=n.z,L[D+j+11]=ee.itemSize===4?n.w:1}}h={count:f,texture:g,size:new q(E,I)},r.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let v=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function Hp(e,t,i,r,n){let s=new WeakMap;function o(c){let u=n.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u)t.update(h),s.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==u){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,u)}}if(c.isSkinnedMesh){let d=c.skeleton;if(s.get(d)!==u)d.update(),s.set(d,u)}return h}function a(){s=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null)i.remove(u.instanceColor)}return{update:o,dispose:a}}var z0={[Dn]:"LINEAR_TONE_MAPPING",[Nn]:"REINHARD_TONE_MAPPING",[Un]:"CINEON_TONE_MAPPING",[Dr]:"ACES_FILMIC_TONE_MAPPING",[Bn]:"AGX_TONE_MAPPING",[On]:"NEUTRAL_TONE_MAPPING",[Fn]:"CUSTOM_TONE_MAPPING"};function kp(e,t,i,r,n,s){let o=new Et(t,i,{type:e,depthBuffer:n,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Xe;u.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Be([0,2,0,0,2,0],2));let f=new Sn({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new je(u,f),d=new wr(-1,1,1,-1,0,1),v=null,S=null,p=!1,m,A=null,R=[],E=!1;this.setSize=function(I,L){if(o.setSize(I,L),a!==null)a.setSize(I,L);if(l!==null)l.setSize(I,L);for(let g=0;g<R.length;g++){let w=R[g];if(w.setSize)w.setSize(I,L)}},this.setEffects=function(I){R=I,E=R.length>0&&R[0].isRenderPass===!0;let{width:L,height:g}=o;if(R.length>0&&a===null)a=new Et(L,g,{type:Rt,depthBuffer:!1,stencilBuffer:!1}),l=new Et(L,g,{type:Rt,depthBuffer:!1,stencilBuffer:!1});let w=n===!0&&R.some((N)=>N.needsDepthTexture===!0);if(w!==(o.depthTexture!==null)){if(w===!0&&c===null){if(c=new Oi(L,g),s===!0)c.format=Ni,c.type=tr}o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w}for(let N=0;N<R.length;N++){let k=R[N];if(k.setSize)k.setSize(L,g);if(w&&k.needsDepthTexture===!0&&k.setDepthTexture)k.setDepthTexture(c)}},this.begin=function(I,L){if(p)return!1;if(I.toneMapping===Di&&R.length===0)return!1;if(A=L,L!==null){let{width:g,height:w}=L;if(o.width!==g||o.height!==w)this.setSize(g,w)}if(E===!1)I.setRenderTarget(o);return m=I.toneMapping,I.toneMapping=Di,!0},this.hasRenderPass=function(){return E},this.end=function(I,L){I.toneMapping=m,p=!0;let g=o,w=a;for(let N=0;N<R.length;N++){let k=R[N];if(k.enabled===!1)continue;if(k.render(I,w,g,L),k.needsSwap!==!1)g=w,w=w===a?l:a}if(v!==I.outputColorSpace||S!==I.toneMapping){if(v=I.outputColorSpace,S=I.toneMapping,f.defines={},at.getTransfer(v)===pt)f.defines.SRGB_TRANSFER="";let N=z0[S];if(N)f.defines[N]="";f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,I.setRenderTarget(A),I.render(h,d),A=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();u.dispose(),f.dispose()}}var Kp=new St,Qp=new Oi(1,1),$p=new Ss(1),jp=new ln,em=new is,tm=new zr,Wp=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),Zp=new Float32Array(4);function Ps(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,s=Wp[n];if(s===void 0)s=new Float32Array(n),Wp[n]=s;if(t!==0){r.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function ti(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function ii(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Fl(e,t){let i=Xp[t];if(i===void 0)i=new Int32Array(t),Xp[t]=i;for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function G0(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function V0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ti(i,t))return;e.uniform2fv(this.addr,t),ii(i,t)}}function H0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(ti(i,t))return;e.uniform3fv(this.addr,t),ii(i,t)}}function k0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ti(i,t))return;e.uniform4fv(this.addr,t),ii(i,t)}}function W0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ti(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ii(i,t)}else{if(ti(i,r))return;Zp.set(r),e.uniformMatrix2fv(this.addr,!1,Zp),ii(i,r)}}function X0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ti(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ii(i,t)}else{if(ti(i,r))return;Yp.set(r),e.uniformMatrix3fv(this.addr,!1,Yp),ii(i,r)}}function q0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ti(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ii(i,t)}else{if(ti(i,r))return;qp.set(r),e.uniformMatrix4fv(this.addr,!1,qp),ii(i,r)}}function Y0(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function Z0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ti(i,t))return;e.uniform2iv(this.addr,t),ii(i,t)}}function J0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(ti(i,t))return;e.uniform3iv(this.addr,t),ii(i,t)}}function K0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ti(i,t))return;e.uniform4iv(this.addr,t),ii(i,t)}}function Q0(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function $0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ti(i,t))return;e.uniform2uiv(this.addr,t),ii(i,t)}}function j0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(ti(i,t))return;e.uniform3uiv(this.addr,t),ii(i,t)}}function ex(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ti(i,t))return;e.uniform4uiv(this.addr,t),ii(i,t)}}function Bl(e){if(e.version===0)e.compareFunction=Oa,e.needsUpdate=!0;return e}function tx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Bl(Qp);else s=Kp;i.setTexture2D(t||s,n)}function ix(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture3D(t||em,n)}function rx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Bl($p);else s=tm;i.setTextureCube(t||s,n)}function nx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture2DArray(t||jp,n)}function sx(e){switch(e){case 5126:return G0;case 35664:return V0;case 35665:return H0;case 35666:return k0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return Q0;case 36294:return $0;case 36295:return j0;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return nx}}function ox(e,t){e.uniform1fv(this.addr,t)}function ax(e,t){let i=Ps(t,this.size,2);e.uniform2fv(this.addr,i)}function lx(e,t){let i=Ps(t,this.size,3);e.uniform3fv(this.addr,i)}function cx(e,t){let i=Ps(t,this.size,4);e.uniform4fv(this.addr,i)}function hx(e,t){let i=Ps(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function ux(e,t){let i=Ps(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function fx(e,t){let i=Ps(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function dx(e,t){e.uniform1iv(this.addr,t)}function px(e,t){e.uniform2iv(this.addr,t)}function mx(e,t){e.uniform3iv(this.addr,t)}function gx(e,t){e.uniform4iv(this.addr,t)}function xx(e,t){e.uniform1uiv(this.addr,t)}function _x(e,t){e.uniform2uiv(this.addr,t)}function vx(e,t){e.uniform3uiv(this.addr,t)}function yx(e,t){e.uniform4uiv(this.addr,t)}function Mx(e,t,i){let r=this.cache,n=t.length,s=Fl(i,n);if(!ti(r,s))e.uniform1iv(this.addr,s),ii(r,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Bl(Qp);else o=Kp;for(let a=0;a!==n;++a)i.setTexture2D(t[a]||o,s[a])}function Sx(e,t,i){let r=this.cache,n=t.length,s=Fl(i,n);if(!ti(r,s))e.uniform1iv(this.addr,s),ii(r,s);for(let o=0;o!==n;++o)i.setTexture3D(t[o]||em,s[o])}function bx(e,t,i){let r=this.cache,n=t.length,s=Fl(i,n);if(!ti(r,s))e.uniform1iv(this.addr,s),ii(r,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Bl($p);else o=tm;for(let a=0;a!==n;++a)i.setTextureCube(t[a]||o,s[a])}function Tx(e,t,i){let r=this.cache,n=t.length,s=Fl(i,n);if(!ti(r,s))e.uniform1iv(this.addr,s),ii(r,s);for(let o=0;o!==n;++o)i.setTexture2DArray(t[o]||jp,s[o])}function Ex(e){switch(e){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Tx}}class im{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sx(t.type)}}class rm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}}class nm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let o=r[n];o.setValue(e,t[o.id],i)}}}var Wc=/(\w+)(\])?(\[|\.)?/g;function Jp(e,t){e.seq.push(t),e.map[t.id]=t}function wx(e,t,i){let r=e.name,n=r.length;Wc.lastIndex=0;while(!0){let s=Wc.exec(r),o=Wc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===n){Jp(i,c===void 0?new im(a,e,t):new rm(a,e,t));break}else{let f=i.map[a];if(f===void 0)f=new nm(a),Jp(i,f);i=f}}}class An{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);wx(o,a,this)}let r=[],n=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)r.push(s);else n.push(s);if(r.length>0)this.seq=r.concat(n)}setValue(e,t,i,r){let n=this.map[t];if(n!==void 0)n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];if(r!==void 0)this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){let o=t[n],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let s=e[r];if(s.id in t)i.push(s)}return i}}function Xc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Ax=37297,Rx=0;function Cx(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=n;o<s;o++){let a=o+1;r.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return r.join(`
`)}var sm=new Ze;function Px(e){at._getMatrix(sm,at.workingColorSpace,e);let t=`mat3( ${sm.elements.map((i)=>i.toFixed(4))} )`;switch(at.getTransfer(e)){case rn:return[t,"LinearTransferOETF"];case pt:return[t,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function om(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(r&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+Cx(e.getShaderSource(t),a)}else return s}function Ix(e,t){let i=Px(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Lx={[Dn]:"Linear",[Nn]:"Reinhard",[Un]:"Cineon",[Dr]:"ACESFilmic",[Bn]:"AgX",[On]:"Neutral",[Fn]:"Custom"};function Dx(e,t){let i=Lx[t];if(i===void 0)return Ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ol=new P;function Nx(){at.getLuminanceCoefficients(Ol);let e=Ol.x.toFixed(4),t=Ol.y.toFixed(4),i=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Ux(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function Fx(e){let t=[];for(let i in e){let r=e[i];if(r===!1)continue;t.push("#define "+i+" "+r)}return t.join(`
`)}function Bx(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=e.getActiveAttrib(t,n),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function fa(e){return e!==""}function am(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function lm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(e){return e.replace(Ox,zx)}function zx(e,t){let i=ut[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qc(i)}var Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(e){return e.replace(Gx,Vx)}function Vx(e,t,i,r){let n="";for(let s=parseInt(t);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function hm(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var Hx={[Ln]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function kx(e){return Hx[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wx={[gr]:"ENVMAP_MODE_REFRACTION"};function Xx(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Wx[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qx={[Kr]:"ENVMAP_BLENDING_MULTIPLY",[Eh]:"ENVMAP_BLENDING_MIX",[wh]:"ENVMAP_BLENDING_ADD"};function Yx(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return qx[e.combine]||"ENVMAP_BLENDING_NONE"}function um(e,t,i,r){let n=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=kx(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Xx(i),f=Yx(i),h=Ux(i),d=Fx(s),v=n.createProgram(),S,p,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(fa).join(`
`),S.length>0)S+=`
`;if(p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(fa).join(`
`),p.length>0)p+=`
`}else S=[hm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[hm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Di?"#define TONE_MAPPING":"",i.toneMapping!==Di?ut.tonemapping_pars_fragment:"",i.toneMapping!==Di?Dx("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Ix("linearToOutputTexel",i.outputColorSpace),Nx(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fa).join(`
`);if(o=qc(o),o=am(o,i),o=lm(o,i),a=qc(a),a=am(a,i),a=lm(a,i),o=cm(o),a=cm(a),i.isRawShaderMaterial!==!0)m=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",i.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let A=m+S+o,R=m+p+a,E=Xc(n,n.VERTEX_SHADER,A),I=Xc(n,n.FRAGMENT_SHADER,R);if(n.attachShader(v,E),n.attachShader(v,I),i.index0AttributeName!==void 0)n.bindAttribLocation(v,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)n.bindAttribLocation(v,0,"position");n.linkProgram(v);function L(k){if(e.debug.checkShaderErrors){let U=n.getProgramInfoLog(v)||"",G=n.getShaderInfoLog(E)||"",ee=n.getShaderInfoLog(I)||"",D=U.trim(),K=G.trim(),j=ee.trim(),H=!0,de=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(n,v,E,I);else{let Z=om(n,E,"vertex"),ie=om(n,I,"fragment");Ue("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+D+`
`+Z+`
`+ie)}else if(D!=="")Ee("WebGLProgram: Program Info Log:",D);else if(K===""||j==="")de=!1;if(de)k.diagnostics={runnable:H,programLog:D,vertexShader:{log:K,prefix:S},fragmentShader:{log:j,prefix:p}}}n.deleteShader(E),n.deleteShader(I),g=new An(n,v),w=Bx(n,v)}let g;this.getUniforms=function(){if(g===void 0)L(this);return g};let w;this.getAttributes=function(){if(w===void 0)L(this);return w};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(N===!1)N=n.getProgramParameter(v,Ax);return N},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=I,this}var Zx=0;class Yc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);if(r.has(t)===!1)r.add(t),t.usedTimes++;if(r.has(i)===!1)r.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new fm(e),t.set(e,i);return i}}class fm{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}}function Jx(e){return e===Ui||e===$r||e===jr}function dm(e,t,i,r,n,s){let o=new cn,a=new Yc,l=new Set,c=[],u=new Map,f=r.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function v(g,w,N,k,U,G){let ee=k.fog,D=U.geometry,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?k.environment:null,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=t.get(g.envMap||K,j),de=h[g.type],Z=r.precision;if(g.precision!==null){if(Z=r.getMaxPrecision(g.precision),Z!==g.precision)Ee("WebGLProgram.getParameters:",g.precision,"not supported, using",Z,"instead.")}let ie=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ae=ie!==void 0?ie.length:0,ye=0;if(D.morphAttributes.position!==void 0)ye=1;if(D.morphAttributes.normal!==void 0)ye=2;if(D.morphAttributes.color!==void 0)ye=3;let re,ce,Fe,Ye;if(de){let Le=Vi[de];re=Le.vertexShader,ce=Le.fragmentShader}else{re=g.vertexShader,ce=g.fragmentShader;let Le=a.getVertexShaderStage(g),bt=a.getFragmentShaderStage(g);a.update(g,Le,bt),Fe=Le.id,Ye=bt.id}let Je=e.getRenderTarget(),De=e.state.buffers.depth.getReversed(),mt=U.isInstancedMesh===!0,et=U.isBatchedMesh===!0,tt=!!g.map,dt=!!g.matcap,ne=!!H,ge=ne&&H.isPMREMTexture===!0,xe=!!g.aoMap,Ne=!!g.lightMap,_e=!!g.bumpMap&&g.wireframe===!1,ke=!!g.normalMap,Ve=!!g.displacementMap,Ge=!!g.emissiveMap,st=!!g.metalnessMap,gt=!!g.roughnessMap,O=g.anisotropy>0,Ot=g.clearcoat>0,lt=g.diffuseRoughness>0,Dt=g.dispersion>0,Ae=g.retroreflectivity>0,yt=g.iridescence>0,Qe=g.sheen>0,nt=g.transmission>0,ft=O&&!!g.anisotropyMap,C=Ot&&!!g.clearcoatMap,y=Ot&&!!g.clearcoatNormalMap,V=Ot&&!!g.clearcoatRoughnessMap,oe=lt&&!!g.diffuseRoughnessMap,se=yt&&!!g.iridescenceMap,ve=yt&&!!g.iridescenceThicknessMap,we=Qe&&!!g.sheenColorMap,Y=Qe&&!!g.sheenRoughnessMap,te=!!g.specularMap,Se=!!g.specularColorMap,F=!!g.specularIntensityMap,Q=nt&&!!g.transmissionMap,J=nt&&!!g.thicknessMap,me=!!g.gradientMap,Me=!!g.alphaMap,Re=g.alphaTest>0,Oe=!!g.alphaHash,He=!!g.extensions,Ce=Di;if(g.toneMapped){if(Je===null||Je.isXRRenderTarget===!0)Ce=e.toneMapping}let ze=ge?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ht={shaderID:de,shaderType:g.type,shaderName:g.name,vertexShader:re,fragmentShader:ce,defines:g.defines,customVertexShaderID:Fe,customFragmentShaderID:Ye,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Z,batching:et,batchingColor:et&&U._colorsTexture!==null,instancing:mt,instancingColor:mt&&U.instanceColor!==null,instancingMorph:mt&&U.morphTexture!==null,outputColorSpace:Je===null?e.outputColorSpace:Je.isXRRenderTarget===!0?Je.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:tt,matcap:dt,envMap:ne,envMapMode:ne&&H.mapping,envMapPMREM:ge,envMapMaxLod:ge?ze.length-1:null,envMapSize:ge?ze[0].width:null,aoMap:xe,lightMap:Ne,bumpMap:_e,normalMap:ke,displacementMap:Ve,emissiveMap:Ge,normalMapObjectSpace:ke&&g.normalMapType===Rh,normalMapTangentSpace:ke&&g.normalMapType===ir,packedNormalMap:ke&&g.normalMapType===ir&&Jx(g.normalMap.format),metalnessMap:st,roughnessMap:gt,anisotropy:O,anisotropyMap:ft,clearcoat:Ot,clearcoatMap:C,clearcoatNormalMap:y,clearcoatRoughnessMap:V,diffuseRoughness:lt,diffuseRoughnessMap:oe,dispersion:Dt,retroreflection:Ae,iridescence:yt,iridescenceMap:se,iridescenceThicknessMap:ve,sheen:Qe,sheenColorMap:we,sheenRoughnessMap:Y,specularMap:te,specularColorMap:Se,specularIntensityMap:F,transmission:nt,transmissionMap:Q,thicknessMap:J,gradientMap:me,opaque:g.transparent===!1&&g.blending===Pr&&g.alphaToCoverage===!1,alphaMap:Me,alphaTest:Re,alphaHash:Oe,combine:g.combine,mapUv:tt&&d(g.map.channel),aoMapUv:xe&&d(g.aoMap.channel),lightMapUv:Ne&&d(g.lightMap.channel),bumpMapUv:_e&&d(g.bumpMap.channel),normalMapUv:ke&&d(g.normalMap.channel),displacementMapUv:Ve&&d(g.displacementMap.channel),emissiveMapUv:Ge&&d(g.emissiveMap.channel),metalnessMapUv:st&&d(g.metalnessMap.channel),roughnessMapUv:gt&&d(g.roughnessMap.channel),anisotropyMapUv:ft&&d(g.anisotropyMap.channel),clearcoatMapUv:C&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:se&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:we&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(g.sheenRoughnessMap.channel),specularMapUv:te&&d(g.specularMap.channel),specularColorMapUv:Se&&d(g.specularColorMap.channel),specularIntensityMapUv:F&&d(g.specularIntensityMap.channel),transmissionMapUv:Q&&d(g.transmissionMap.channel),thicknessMapUv:J&&d(g.thicknessMap.channel),alphaMapUv:Me&&d(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ke||O),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(tt||Me),fog:!!ee,useFog:g.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&ke===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:De,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ye,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.filter((Le)=>Le.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:tt&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===pt,decodeVideoTextureEmissive:Ge&&g.emissiveMap.isVideoTexture===!0&&at.getTransfer(g.emissiveMap.colorSpace)===pt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===di,flipSided:g.side===Nt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:He&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&g.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function S(g){let w=[];if(g.shaderID)w.push(g.shaderID);else w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let N in g.defines)w.push(N),w.push(g.defines[N]);if(g.isRawShaderMaterial===!1)p(w,g),m(w,g),w.push(e.outputColorSpace);return w.push(g.customProgramCacheKey),w.join()}function p(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapPMREM),g.push(w.envMapMaxLod),g.push(w.envMapSize),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.diffuseRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.numLightProbeGrids),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function m(g,w){if(o.disableAll(),w.instancing)o.enable(0);if(w.instancingColor)o.enable(1);if(w.instancingMorph)o.enable(2);if(w.matcap)o.enable(3);if(w.envMap)o.enable(4);if(w.normalMapObjectSpace)o.enable(5);if(w.normalMapTangentSpace)o.enable(6);if(w.clearcoat)o.enable(7);if(w.iridescence)o.enable(8);if(w.alphaTest)o.enable(9);if(w.vertexColors)o.enable(10);if(w.vertexAlphas)o.enable(11);if(w.vertexUv1s)o.enable(12);if(w.vertexUv2s)o.enable(13);if(w.vertexUv3s)o.enable(14);if(w.vertexTangents)o.enable(15);if(w.anisotropy)o.enable(16);if(w.alphaHash)o.enable(17);if(w.batching)o.enable(18);if(w.dispersion)o.enable(19);if(w.retroreflection)o.enable(24);if(w.diffuseRoughness)o.enable(25);if(w.batchingColor)o.enable(20);if(w.gradientMap)o.enable(21);if(w.packedNormalMap)o.enable(22);if(w.vertexNormals)o.enable(23);if(g.push(o.mask),o.disableAll(),w.fog)o.enable(0);if(w.useFog)o.enable(1);if(w.flatShading)o.enable(2);if(w.logarithmicDepthBuffer)o.enable(3);if(w.reversedDepthBuffer)o.enable(4);if(w.skinning)o.enable(5);if(w.morphTargets)o.enable(6);if(w.morphNormals)o.enable(7);if(w.morphColors)o.enable(8);if(w.premultipliedAlpha)o.enable(9);if(w.shadowMapEnabled)o.enable(10);if(w.doubleSided)o.enable(11);if(w.flipSided)o.enable(12);if(w.useDepthPacking)o.enable(13);if(w.dithering)o.enable(14);if(w.transmission)o.enable(15);if(w.sheen)o.enable(16);if(w.opaque)o.enable(17);if(w.pointsUvs)o.enable(18);if(w.decodeVideoTexture)o.enable(19);if(w.decodeVideoTextureEmissive)o.enable(20);if(w.alphaToCoverage)o.enable(21);if(w.numLightProbeGrids>0)o.enable(22);if(w.hasPositionAttribute)o.enable(23);g.push(o.mask)}function A(g){let w=h[g.type],N;if(w){let k=Vi[w];N=Ki.clone(k.uniforms)}else N=g.uniforms;return N}function R(g,w){let N=u.get(w);if(N!==void 0)++N.usedTimes;else N=new um(e,w,g,n),c.push(N),u.set(w,N);return N}function E(g){if(--g.usedTimes===0){let w=c.indexOf(g);c[w]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function I(g){a.remove(g)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:S,getUniforms:A,acquireProgram:R,releaseProgram:E,releaseShaderCache:I,programs:c,dispose:L}}function pm(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function r(o){e.delete(o)}function n(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:n,dispose:s}}function Kx(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function mm(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function gm(){let e=[],t=0,i=[],r=[],n=[];function s(){t=0,i.length=0,r.length=0,n.length=0}function o(h){let d=0;if(h.isInstancedMesh)d+=2;if(h.isSkinnedMesh)d+=1;return d}function a(h,d,v,S,p,m){let A=e[t];if(A===void 0)A={id:h.id,object:h,geometry:d,material:v,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:m},e[t]=A;else A.id=h.id,A.object=h,A.geometry=d,A.material=v,A.materialVariant=o(h),A.groupOrder=S,A.renderOrder=h.renderOrder,A.z=p,A.group=m;return t++,A}function l(h,d,v,S,p,m,A){if(A.reversedDepth===!0)p=-p;let R=a(h,d,v,S,p,m);if(v.transmission>0)r.push(R);else if(v.transparent===!0)n.push(R);else i.push(R)}function c(h,d,v,S,p,m){let A=a(h,d,v,S,p,m);if(v.transmission>0)r.unshift(A);else if(v.transparent===!0)n.unshift(A);else i.unshift(A)}function u(h,d){if(i.length>1)i.sort(h||Kx);if(r.length>1)r.sort(d||mm);if(n.length>1)n.sort(d||mm)}function f(){for(let h=t,d=e.length;h<d;h++){let v=e[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:l,unshift:c,finish:f,sort:u}}function xm(){let e=new WeakMap;function t(r,n){let s=e.get(r),o;if(s===void 0)o=new gm,e.set(r,[o]);else if(n>=s.length)o=new gm,s.push(o);else o=s[n];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Qx(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new P,color:new he};break;case"SpotLight":i={position:new P,direction:new P,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new he,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new he,groundColor:new he};break;case"RectAreaLight":i={color:new he,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=i,i}}}function $x(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var jx=0;function e_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function _m(e){let t=new Qx,i=$x(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new P);let n=new P,s=new qe,o=new qe;function a(c){let u=0,f=0,h=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let d=0,v=0,S=0,p=0,m=0,A=0,R=0,E=0,I=0,L=0,g=0,w=0,N=0,k=0;c.sort(e_);for(let G=0,ee=c.length;G<ee;G++){let D=c[G],{color:K,intensity:j,distance:H}=D,de=null;if(D.shadow&&D.shadow.map)if(D.shadow.map.texture.format===Ui)de=D.shadow.map.texture;else de=D.shadow.map.depthTexture||D.shadow.map.texture;if(D.isAmbientLight)u+=K.r*j,f+=K.g*j,h+=K.b*j;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(D.sh.coefficients[Z],j);k++}else if(D.isSunLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,ae=i.get(D);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),r.sunShadow[v]=ae,r.sunShadowMap[v]=de;let ye=ie.getViewportCount();for(let re=0;re<ye;re++)r.sunShadowMatrix[S+re]=ie.getMatrix(re),r.sunShadowCascade[S+re]=ie._cascadeData[re];S+=ye,v++}r.sun[d]=Z,d++}else if(D.isDirectionalLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,ae=i.get(D);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,r.directionalShadow[p]=ae,r.directionalShadowMap[p]=de,r.directionalShadowMatrix[p]=D.shadow.matrix,I++}r.directional[p]=Z,p++}else if(D.isSpotLight){let Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(K).multiplyScalar(j),Z.distance=H,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,r.spot[A]=Z;let ie=D.shadow;if(D.map){if(r.spotLightMap[w]=D.map,w++,ie.updateMatrices(D),D.castShadow)N++}if(r.spotLightMatrix[A]=ie.matrix,D.castShadow){let ae=i.get(D);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,r.spotShadow[A]=ae,r.spotShadowMap[A]=de,g++}A++}else if(D.isRectAreaLight){let Z=t.get(D);Z.color.copy(K).multiplyScalar(j),Z.halfWidth.set(D.width*0.5,0,0),Z.halfHeight.set(0,D.height*0.5,0),r.rectArea[R]=Z,R++}else if(D.isPointLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){let ie=D.shadow,ae=i.get(D);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,r.pointShadow[m]=ae,r.pointShadowMap[m]=de,r.pointShadowMatrix[m]=D.shadow.matrix,L++}r.point[m]=Z,m++}else if(D.isHemisphereLight){let Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(j),Z.groundColor.copy(D.groundColor).multiplyScalar(j),r.hemi[E]=Z,E++}}if(R>0)if(e.has("OES_texture_float_linear")===!0)r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2;else r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2;r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;let U=r.hash;if(U.sunLength!==d||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==A||U.rectAreaLength!==R||U.hemiLength!==E||U.numSunShadows!==v||U.numDirectionalShadows!==I||U.numPointShadows!==L||U.numSpotShadows!==g||U.numSpotMaps!==w||U.numLightProbes!==k)r.sun.length=d,r.directional.length=p,r.spot.length=A,r.rectArea.length=R,r.point.length=m,r.hemi.length=E,r.sunShadow.length=v,r.sunShadowMap.length=v,r.sunShadowMatrix.length=S,r.sunShadowCascade.length=S,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=g,r.spotShadowMap.length=g,r.spotLightMatrix.length=g+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=k,U.sunLength=d,U.directionalLength=p,U.pointLength=m,U.spotLength=A,U.rectAreaLength=R,U.hemiLength=E,U.numSunShadows=v,U.numDirectionalShadows=I,U.numPointShadows=L,U.numSpotShadows=g,U.numSpotMaps=w,U.numLightProbes=k,r.version=jx++}function l(c,u){let f=0,h=0,d=0,v=0,S=0,p=0,m=u.matrixWorldInverse;for(let A=0,R=c.length;A<R;A++){let E=c[A];if(E.isSunLight){let I=r.sun[f];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),f++}else if(E.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(n),I.direction.transformDirection(m),h++}else if(E.isSpotLight){let I=r.spot[v];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(n),I.direction.transformDirection(m),v++}else if(E.isRectAreaLight){let I=r.rectArea[S];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),I.halfWidth.set(E.width*0.5,0,0),I.halfHeight.set(0,E.height*0.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),S++}else if(E.isPointLight){let I=r.point[d];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let I=r.hemi[p];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:r}}function vm(e){let t=new _m(e),i=[],r=[],n=[];function s(f){u.camera=f,i.length=0,r.length=0,n.length=0}function o(f){if(f.isLightProbeGrid)n.push(f);else i.push(f)}function a(f){r.push(f)}function l(){t.setup(i),n.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(i,f)}let u={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ym(e){let t=new WeakMap;function i(n,s=0){let o=t.get(n),a;if(o===void 0)a=new vm(e),t.set(n,[a]);else if(s>=o.length)a=new vm(e),o.push(a);else a=o[s];return a}function r(){t=new WeakMap}return{get:i,dispose:r}}var Mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Sm=`
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
`;var i_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],r_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],bm=new qe,da=new P,Zc=new P;function Tm(e,t,i){let r=new Ji,n=new q,s=new q,o=new xt,a=new na,l=new sa,c={},u=i.maxTextureSize,f={[Hi]:Nt,[Nt]:Hi,[di]:di},h=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let v=new Xe;v.setAttribute("position",new qt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let S=new je(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ln;let m=this.type;this.render=function(L,g,w){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(L.length===0)return;if(this.type===oh)Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ln;let N=e.getRenderTarget(),k=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),G=e.state;if(G.setBlending(ki),G.buffers.depth.getReversed()===!0)G.buffers.color.setClear(0,0,0,0);else G.buffers.color.setClear(1,1,1,1);G.buffers.depth.setTest(!0),G.setScissorTest(!1);let ee=m!==this.type;if(ee)g.traverse(function(D){if(D.material)if(Array.isArray(D.material))D.material.forEach((K)=>K.needsUpdate=!0);else D.material.needsUpdate=!0});for(let D=0,K=L.length;D<K;D++){let j=L[D],H=j.shadow;if(H===void 0){Ee("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let de=H.getFrameExtents();if(n.multiply(de),s.copy(H.mapSize),n.x>u||n.y>u){if(n.x>u)s.x=Math.floor(u/de.x),n.x=s.x*de.x,H.mapSize.x=s.x;if(n.y>u)s.y=Math.floor(u/de.y),n.y=s.y*de.y,H.mapSize.y=s.y}let Z=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||ee===!0){if(H.map!==null){if(H.map.depthTexture!==null)H.map.depthTexture.dispose(),H.map.depthTexture=null;H.map.dispose()}if(this.type===Jr){if(j.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Et(n.x,n.y,{format:Ui,type:Rt,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new Oi(n.x,n.y,Xt),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=Pi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=It,H.map.depthTexture.magFilter=It}else{if(j.isPointLight)H.map=new qr(n.x),H.map.depthTexture=new Ss(n.x,Kt);else H.map=new Et(n.x,n.y),H.map.depthTexture=new Oi(n.x,n.y,Kt);if(H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=Pi,this.type===Ln)H.map.depthTexture.compareFunction=Z?Ba:Fa,H.map.depthTexture.minFilter=Ft,H.map.depthTexture.magFilter=Ft;else H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=It,H.map.depthTexture.magFilter=It}H.camera.updateProjectionMatrix()}if(H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y))H.map.setSize(n.x,n.y);let ie=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();if(j.isPointLight!==!0)H.updateMatrices(j,w);let ae=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:w.layers;for(let ye=0;ye<ie;ye++){let re=H.getCamera(ye);if(j.isPointLight){let{camera:ce,matrix:Fe}=H,Ye=j.distance||ce.far;if(Ye!==ce.far)ce.far=Ye,ce.updateProjectionMatrix();da.setFromMatrixPosition(j.matrixWorld),ce.position.copy(da),Zc.copy(ce.position),Zc.add(i_[ye]),ce.up.copy(r_[ye]),ce.lookAt(Zc),ce.updateMatrixWorld(),Fe.makeTranslation(-da.x,-da.y,-da.z),bm.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),H._frustum.setFromProjectionMatrix(bm,ce.coordinateSystem,ce.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,ye),e.clear();else{if(ye===0)e.setRenderTarget(H.map),e.clear();let ce=H.getViewport(ye);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),G.viewport(o)}r=H.getFrustum(ye),E(g,w,re,j,ae,this.type)}if(H.isPointLightShadow!==!0&&this.type===Jr)A(H,w);H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,e.setRenderTarget(N,k,U)};function A(L,g){let w=t.update(S);if(h.defines.VSM_SAMPLES!==L.blurSamples)h.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new Et(n.x,n.y,{format:Ui,type:Rt});else if(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)L.mapPass.setSize(L.map.width,L.map.height);h.uniforms.shadow_pass.value=L.map.depthTexture,h.uniforms.resolution.value.set(L.map.width,L.map.height),h.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(g,null,w,h,S,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value.set(L.map.width,L.map.height),d.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(g,null,w,d,S,null)}function R(L,g,w,N){let k=null,U=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)k=U;else if(k=w.isPointLight===!0?l:a,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let G=k.uuid,ee=g.uuid,D=c[G];if(D===void 0)D={},c[G]=D;let K=D[ee];if(K===void 0)K=k.clone(),D[ee]=K,g.addEventListener("dispose",I);k=K}if(k.visible=g.visible,k.wireframe=g.wireframe,N===Jr)k.side=g.shadowSide!==null?g.shadowSide:g.side;else k.side=g.shadowSide!==null?g.shadowSide:f[g.side];if(k.alphaMap=g.alphaMap,k.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,k.map=g.map,k.clipShadows=g.clipShadows,k.clippingPlanes=g.clippingPlanes,k.clipIntersection=g.clipIntersection,k.displacementMap=g.displacementMap,k.displacementScale=g.displacementScale,k.displacementBias=g.displacementBias,k.wireframeLinewidth=g.wireframeLinewidth,k.linewidth=g.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let G=e.properties.get(k);G.light=w}return k}function E(L,g,w,N,k,U){if(L.visible===!1)return;if(L.layers.test(k)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&U===Jr)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);let D=t.update(L),K=L.material;if(Array.isArray(K)){let j=D.groups;for(let H=0,de=j.length;H<de;H++){let Z=j[H],ie=K[Z.materialIndex];if(ie&&ie.visible){let ae=R(L,ie,N,U);L.onBeforeShadow(e,L,g,w,D,ae,Z),e.renderBufferDirect(w,null,D,ae,L,Z),L.onAfterShadow(e,L,g,w,D,ae,Z)}}}else if(K.visible){let j=R(L,K,N,U);L.onBeforeShadow(e,L,g,w,D,j,null),e.renderBufferDirect(w,null,D,j,L,null),L.onAfterShadow(e,L,g,w,D,j,null)}}}let ee=L.children;for(let D=0,K=ee.length;D<K;D++)E(ee[D],g,w,N,k,U)}function I(L){L.target.removeEventListener("dispose",I);for(let w in c){let N=c[w],k=L.target.uuid;if(k in N)N[k].dispose(),delete N[k]}}}function Em(e,t){function i(){let F=!1,Q=new xt,J=null,me=new xt(0,0,0,0);return{setMask:function(Me){if(J!==Me&&!F)e.colorMask(Me,Me,Me,Me),J=Me},setLocked:function(Me){F=Me},setClear:function(Me,Re,Oe,He,Ce){if(Ce===!0)Me*=He,Re*=He,Oe*=He;if(Q.set(Me,Re,Oe,He),me.equals(Q)===!1)e.clearColor(Me,Re,Oe,He),me.copy(Q)},reset:function(){F=!1,J=null,me.set(-1,0,0,0)}}}function r(){let F=!1,Q=!1,J=null,me=null,Me=null;return{setReversed:function(Re){if(Q!==Re){let Oe=t.get("EXT_clip_control");if(Re)Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT);else Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);Q=Re;let He=Me;Me=null,this.setClear(He)}},getReversed:function(){return Q},setTest:function(Re){if(Re)De(e.DEPTH_TEST);else mt(e.DEPTH_TEST)},setMask:function(Re){if(J!==Re&&!F)e.depthMask(Re),J=Re},setFunc:function(Re){if(Q)Re=zh[Re];if(me!==Re){switch(Re){case Vs:e.depthFunc(e.NEVER);break;case Hs:e.depthFunc(e.ALWAYS);break;case ks:e.depthFunc(e.LESS);break;case Lr:e.depthFunc(e.LEQUAL);break;case Ws:e.depthFunc(e.EQUAL);break;case Xs:e.depthFunc(e.GEQUAL);break;case qs:e.depthFunc(e.GREATER);break;case Ys:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}me=Re}},setLocked:function(Re){F=Re},setClear:function(Re){if(Me!==Re){if(Me=Re,Q)Re=1-Re;e.clearDepth(Re)}},reset:function(){F=!1,J=null,me=null,Me=null,Q=!1}}}function n(){let F=!1,Q=null,J=null,me=null,Me=null,Re=null,Oe=null,He=null,Ce=null;return{setTest:function(ze){if(!F)if(ze)De(e.STENCIL_TEST);else mt(e.STENCIL_TEST)},setMask:function(ze){if(Q!==ze&&!F)e.stencilMask(ze),Q=ze},setFunc:function(ze,ht,Le){if(J!==ze||me!==ht||Me!==Le)e.stencilFunc(ze,ht,Le),J=ze,me=ht,Me=Le},setOp:function(ze,ht,Le){if(Re!==ze||Oe!==ht||He!==Le)e.stencilOp(ze,ht,Le),Re=ze,Oe=ht,He=Le},setLocked:function(ze){F=ze},setClear:function(ze){if(Ce!==ze)e.clearStencil(ze),Ce=ze},reset:function(){F=!1,Q=null,J=null,me=null,Me=null,Re=null,Oe=null,He=null,Ce=null}}}let s=new i,o=new r,a=new n,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,v=[],S=null,p=!1,m=null,A=null,R=null,E=null,I=null,L=null,g=null,w=new he(0,0,0),N=0,k=!1,U=null,G=null,ee=null,D=null,K=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,de=0,Z=e.getParameter(e.VERSION);if(Z.indexOf("WebGL")!==-1)de=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=de>=1;else if(Z.indexOf("OpenGL ES")!==-1)de=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=de>=2;let ie=null,ae={},ye=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ce=new xt().fromArray(ye),Fe=new xt().fromArray(re);function Ye(F,Q,J,me){let Me=new Uint8Array(4),Re=e.createTexture();e.bindTexture(F,Re),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Oe=0;Oe<J;Oe++)if(F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY)e.texImage3D(Q,0,e.RGBA,1,1,me,0,e.RGBA,e.UNSIGNED_BYTE,Me);else e.texImage2D(Q+Oe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Me);return Re}let Je={};Je[e.TEXTURE_2D]=Ye(e.TEXTURE_2D,e.TEXTURE_2D,1),Je[e.TEXTURE_CUBE_MAP]=Ye(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Je[e.TEXTURE_2D_ARRAY]=Ye(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Je[e.TEXTURE_3D]=Ye(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),De(e.DEPTH_TEST),o.setFunc(Lr),_e(!1),ke(kl),De(e.CULL_FACE),xe(ki);function De(F){if(u[F]!==!0)e.enable(F),u[F]=!0}function mt(F){if(u[F]!==!1)e.disable(F),u[F]=!1}function et(F,Q){if(h[F]!==Q){if(e.bindFramebuffer(F,Q),h[F]=Q,F===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=Q;if(F===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=Q;return!0}return!1}function tt(F,Q){let J=v,me=!1;if(F){if(J=d.get(Q),J===void 0)J=[],d.set(Q,J);let Me=F.textures;if(J.length!==Me.length||J[0]!==e.COLOR_ATTACHMENT0){for(let Re=0,Oe=Me.length;Re<Oe;Re++)J[Re]=e.COLOR_ATTACHMENT0+Re;J.length=Me.length,me=!0}}else if(J[0]!==e.BACK)J[0]=e.BACK,me=!0;if(me)e.drawBuffers(J)}function dt(F){if(S!==F)return e.useProgram(F),S=F,!0;return!1}let ne={[Ir]:e.FUNC_ADD,[lh]:e.FUNC_SUBTRACT,[ch]:e.FUNC_REVERSE_SUBTRACT};ne[hh]=e.MIN,ne[uh]=e.MAX;let ge={[fh]:e.ZERO,[dh]:e.ONE,[ph]:e.SRC_COLOR,[Ma]:e.SRC_ALPHA,[yh]:e.SRC_ALPHA_SATURATE,[_h]:e.DST_COLOR,[gh]:e.DST_ALPHA,[mh]:e.ONE_MINUS_SRC_COLOR,[Sa]:e.ONE_MINUS_SRC_ALPHA,[vh]:e.ONE_MINUS_DST_COLOR,[xh]:e.ONE_MINUS_DST_ALPHA,[Mh]:e.CONSTANT_COLOR,[Sh]:e.ONE_MINUS_CONSTANT_COLOR,[bh]:e.CONSTANT_ALPHA,[Th]:e.ONE_MINUS_CONSTANT_ALPHA};function xe(F,Q,J,me,Me,Re,Oe,He,Ce,ze){if(F===ki){if(p===!0)mt(e.BLEND),p=!1;return}if(p===!1)De(e.BLEND),p=!0;if(F!==ah){if(F!==m||ze!==k){if(A!==Ir||I!==Ir)e.blendEquation(e.FUNC_ADD),A=Ir,I=Ir;if(ze)switch(F){case Pr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case lr:e.blendFunc(e.ONE,e.ONE);break;case Wl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Xl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ue("WebGLState: Invalid blending: ",F);break}else switch(F){case Pr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case lr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Wl:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",F);break}R=null,E=null,L=null,g=null,w.set(0,0,0),N=0,m=F,k=ze}return}if(Me=Me||Q,Re=Re||J,Oe=Oe||me,Q!==A||Me!==I)e.blendEquationSeparate(ne[Q],ne[Me]),A=Q,I=Me;if(J!==R||me!==E||Re!==L||Oe!==g)e.blendFuncSeparate(ge[J],ge[me],ge[Re],ge[Oe]),R=J,E=me,L=Re,g=Oe;if(He.equals(w)===!1||Ce!==N)e.blendColor(He.r,He.g,He.b,Ce),w.copy(He),N=Ce;m=F,k=!1}function Ne(F,Q){F.side===di?mt(e.CULL_FACE):De(e.CULL_FACE);let J=F.side===Nt;if(Q)J=!J;_e(J),F.blending===Pr&&F.transparent===!1?xe(ki):xe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let me=F.stencilWrite;if(a.setTest(me),me)a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass);Ge(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?De(e.SAMPLE_ALPHA_TO_COVERAGE):mt(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(F){if(U!==F){if(F)e.frontFace(e.CW);else e.frontFace(e.CCW);U=F}}function ke(F){if(F!==nh){if(De(e.CULL_FACE),F!==G)if(F===kl)e.cullFace(e.BACK);else if(F===sh)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else mt(e.CULL_FACE);G=F}function Ve(F){if(F!==ee){if(H)e.lineWidth(F);ee=F}}function Ge(F,Q,J){if(F){if(De(e.POLYGON_OFFSET_FILL),D!==Q||K!==J){if(D=Q,K=J,o.getReversed())Q=-Q,J=-J;e.polygonOffset(Q,J)}}else mt(e.POLYGON_OFFSET_FILL)}function st(F){if(F)De(e.SCISSOR_TEST);else mt(e.SCISSOR_TEST)}function gt(F){if(F===void 0)F=e.TEXTURE0+j-1;if(ie!==F)e.activeTexture(F),ie=F}function O(F,Q,J){if(J===void 0)if(ie===null)J=e.TEXTURE0+j-1;else J=ie;let me=ae[J];if(me===void 0)me={type:void 0,texture:void 0},ae[J]=me;if(me.type!==F||me.texture!==Q){if(ie!==J)e.activeTexture(J),ie=J;e.bindTexture(F,Q||Je[F]),me.type=F,me.texture=Q}}function Ot(){let F=ae[ie];if(F!==void 0&&F.type!==void 0)e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0}function lt(){try{e.compressedTexImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function Dt(){try{e.compressedTexImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function yt(){try{e.texSubImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function Qe(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function nt(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function ft(){try{e.texStorage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function C(){try{e.texStorage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function y(){try{e.texImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function V(){try{e.texImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function oe(F){if(f[F]!==void 0)return f[F];else return e.getParameter(F)}function se(F,Q){if(f[F]!==Q)e.pixelStorei(F,Q),f[F]=Q}function ve(F){if(ce.equals(F)===!1)e.scissor(F.x,F.y,F.z,F.w),ce.copy(F)}function we(F){if(Fe.equals(F)===!1)e.viewport(F.x,F.y,F.z,F.w),Fe.copy(F)}function Y(F,Q){let J=c.get(Q);if(J===void 0)J=new WeakMap,c.set(Q,J);let me=J.get(F);if(me===void 0)me=e.getUniformBlockIndex(Q,F.name),e.uniformBlockBinding(Q,me,me),J.set(F,me)}function te(F,Q,J){let Me=c.get(Q).get(F);if(l[Me]!==J)e.bindBufferBase(e.UNIFORM_BUFFER,Me,J),l[Me]=J}function Se(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},ie=null,ae={},h={},l={},d=new WeakMap,v=[],S=null,p=!1,m=null,A=null,R=null,E=null,I=null,L=null,g=null,w=new he(0,0,0),N=0,k=!1,U=null,G=null,ee=null,D=null,K=null,ce.set(0,0,e.canvas.width,e.canvas.height),Fe.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:De,disable:mt,bindFramebuffer:et,drawBuffers:tt,useProgram:dt,setBlending:xe,setMaterial:Ne,setFlipSided:_e,setCullFace:ke,setLineWidth:Ve,setPolygonOffset:Ge,setScissorTest:st,activeTexture:gt,bindTexture:O,unbindTexture:Ot,compressedTexImage2D:lt,compressedTexImage3D:Dt,texImage2D:y,texImage3D:V,pixelStorei:se,getParameter:oe,updateUBOMapping:Y,uniformBlockBinding:te,texStorage2D:ft,texStorage3D:C,texSubImage2D:Ae,texSubImage3D:yt,compressedTexSubImage2D:Qe,compressedTexSubImage3D:nt,scissor:ve,viewport:we,reset:Se}}function wm(e,t,i,r,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new q,u=new WeakMap,f=new Set,h,d=new WeakMap,v=new Set,S=new FinalizationRegistry((C)=>v.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function m(C,y){return p?new OffscreenCanvas(C,y):nn("canvas")}function A(C,y,V){let oe=1,se=ft(C);if(se.width>V||se.height>V)oe=V/Math.max(se.width,se.height);if(oe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ve=Math.floor(oe*se.width),we=Math.floor(oe*se.height);if(h===void 0)h=m(ve,we);let Y=y?m(ve,we):h;return Y.width=ve,Y.height=we,Y.getContext("2d").drawImage(C,0,0,ve,we),Ee("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ve+"x"+we+")."),Y}else{if("data"in C)Ee("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+").");return C}return C}function R(C){return C.generateMipmaps}function E(C){e.generateMipmap(C)}function I(C){if(C.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function L(C,y,V,oe,se,ve=!1){if(C!==null){if(e[C]!==void 0)return e[C];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let we;if(oe){if(we=t.get("EXT_texture_norm16"),!we)Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Y=y;if(y===e.RED){if(V===e.FLOAT)Y=e.R32F;if(V===e.HALF_FLOAT)Y=e.R16F;if(V===e.UNSIGNED_BYTE)Y=e.R8;if(V===e.UNSIGNED_SHORT&&we)Y=we.R16_EXT;if(V===e.SHORT&&we)Y=we.R16_SNORM_EXT}if(y===e.RED_INTEGER){if(V===e.UNSIGNED_BYTE)Y=e.R8UI;if(V===e.UNSIGNED_SHORT)Y=e.R16UI;if(V===e.UNSIGNED_INT)Y=e.R32UI;if(V===e.BYTE)Y=e.R8I;if(V===e.SHORT)Y=e.R16I;if(V===e.INT)Y=e.R32I}if(y===e.RG){if(V===e.FLOAT)Y=e.RG32F;if(V===e.HALF_FLOAT)Y=e.RG16F;if(V===e.UNSIGNED_BYTE)Y=e.RG8;if(V===e.UNSIGNED_SHORT&&we)Y=we.RG16_EXT;if(V===e.SHORT&&we)Y=we.RG16_SNORM_EXT}if(y===e.RG_INTEGER){if(V===e.UNSIGNED_BYTE)Y=e.RG8UI;if(V===e.UNSIGNED_SHORT)Y=e.RG16UI;if(V===e.UNSIGNED_INT)Y=e.RG32UI;if(V===e.BYTE)Y=e.RG8I;if(V===e.SHORT)Y=e.RG16I;if(V===e.INT)Y=e.RG32I}if(y===e.RGB_INTEGER){if(V===e.UNSIGNED_BYTE)Y=e.RGB8UI;if(V===e.UNSIGNED_SHORT)Y=e.RGB16UI;if(V===e.UNSIGNED_INT)Y=e.RGB32UI;if(V===e.BYTE)Y=e.RGB8I;if(V===e.SHORT)Y=e.RGB16I;if(V===e.INT)Y=e.RGB32I}if(y===e.RGBA_INTEGER){if(V===e.UNSIGNED_BYTE)Y=e.RGBA8UI;if(V===e.UNSIGNED_SHORT)Y=e.RGBA16UI;if(V===e.UNSIGNED_INT)Y=e.RGBA32UI;if(V===e.BYTE)Y=e.RGBA8I;if(V===e.SHORT)Y=e.RGBA16I;if(V===e.INT)Y=e.RGBA32I}if(y===e.RGB){if(V===e.UNSIGNED_SHORT&&we)Y=we.RGB16_EXT;if(V===e.SHORT&&we)Y=we.RGB16_SNORM_EXT;if(V===e.UNSIGNED_INT_5_9_9_9_REV)Y=e.RGB9_E5;if(V===e.UNSIGNED_INT_10F_11F_11F_REV)Y=e.R11F_G11F_B10F}if(y===e.RGBA){let te=ve?rn:at.getTransfer(se);if(V===e.FLOAT)Y=e.RGBA32F;if(V===e.HALF_FLOAT)Y=e.RGBA16F;if(V===e.UNSIGNED_BYTE)Y=te===pt?e.SRGB8_ALPHA8:e.RGBA8;if(V===e.UNSIGNED_SHORT&&we)Y=we.RGBA16_EXT;if(V===e.SHORT&&we)Y=we.RGBA16_SNORM_EXT;if(V===e.UNSIGNED_SHORT_4_4_4_4)Y=e.RGBA4;if(V===e.UNSIGNED_SHORT_5_5_5_1)Y=e.RGB5_A1}if(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)t.get("EXT_color_buffer_float");return Y}function g(C,y){let V;if(C){if(y===null||y===Kt||y===tr)V=e.DEPTH24_STENCIL8;else if(y===Xt)V=e.DEPTH32F_STENCIL8;else if(y===xr)V=e.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(y===null||y===Kt||y===tr)V=e.DEPTH_COMPONENT24;else if(y===Xt)V=e.DEPTH_COMPONENT32F;else if(y===xr)V=e.DEPTH_COMPONENT16;return V}function w(C,y){if(R(C)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==Ft)return Math.log2(Math.max(y.width,y.height))+1;else if(C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return y.mipmaps.length;else return 1}function N(C){let y=new WeakRef(C);r.get(C).__ref=y,v.add(y),S.register(C,y,y)}function k(C){let y=r.get(C).__ref;if(y===void 0)return;v.delete(y),S.unregister(y)}function U(C){ee(C.target)}function G(C){D(C.target)}function ee(C){if(C.removeEventListener("dispose",U),k(C),j(C),C.isVideoTexture)u.delete(C);if(C.isHTMLTexture)f.delete(C)}function D(C){C.removeEventListener("dispose",G),k(C),de(C)}function K(){for(let C of v){let y=C.deref();if(y===void 0)continue;if(y.isRenderTarget===!0)D(y);else ee(y)}v.clear(),f.clear()}function j(C){let y=r.get(C);if(y.__webglInit===void 0)return;let V=C.source,oe=d.get(V);if(oe){let se=oe[y.__cacheKey];if(se.usedTimes--,se.usedTimes===0)H(C);if(Object.keys(oe).length===0)d.delete(V)}r.remove(C)}function H(C){let y=r.get(C);e.deleteTexture(y.__webglTexture);let V=C.source,oe=d.get(V);delete oe[y.__cacheKey],o.memory.textures--}function de(C){let y=r.get(C);if(y.__depthDisposeCallback)y.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C)ee(V);if(C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(y.__webglFramebuffer[se]))for(let ve=0;ve<y.__webglFramebuffer[se].length;ve++)e.deleteFramebuffer(y.__webglFramebuffer[se][ve]);else e.deleteFramebuffer(y.__webglFramebuffer[se]);if(y.__webglDepthbuffer)e.deleteRenderbuffer(y.__webglDepthbuffer[se])}else{if(Array.isArray(y.__webglFramebuffer))for(let se=0;se<y.__webglFramebuffer.length;se++)e.deleteFramebuffer(y.__webglFramebuffer[se]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer)e.deleteRenderbuffer(y.__webglDepthbuffer);if(y.__webglMultisampledFramebuffer)e.deleteFramebuffer(y.__webglMultisampledFramebuffer);if(y.__webglColorRenderbuffer){for(let se=0;se<y.__webglColorRenderbuffer.length;se++)if(y.__webglColorRenderbuffer[se])e.deleteRenderbuffer(y.__webglColorRenderbuffer[se])}if(y.__webglDepthRenderbuffer)e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let oe=C.textures;for(let se=0,ve=oe.length;se<ve;se++){let we=r.get(oe[se]);if(we.__webglTexture)e.deleteTexture(we.__webglTexture),o.memory.textures--;r.remove(oe[se])}r.remove(C)}let Z=0;function ie(){Z=0}function ae(){return Z}function ye(C){Z=C}function re(){let C=Z;if(C>=n.maxTextures)Ee("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures);return Z+=1,C}function ce(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.mipmapsAutoUpdate),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Fe(C,y){let V=r.get(C);if(C.isVideoTexture)Qe(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let oe=C.image;if(oe===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(V,C,y);return}}else if(C.isExternalTexture)V.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+y)}function Ye(C,y){let V=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ne(V,C,y);return}else if(C.isExternalTexture)V.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+y)}function Je(C,y){let V=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ne(V,C,y);return}i.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+y)}function De(C,y){let V=r.get(C);if(C.version>0&&V.__version!==C.version){_e(V,C,y);return}i.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+y)}let mt={[zn]:e.REPEAT,[ui]:e.CLAMP_TO_EDGE,[Gn]:e.MIRRORED_REPEAT},et={[It]:e.NEAREST,[ql]:e.NEAREST_MIPMAP_NEAREST,[Vn]:e.NEAREST_MIPMAP_LINEAR,[Ft]:e.LINEAR,[Ks]:e.LINEAR_MIPMAP_NEAREST,[bi]:e.LINEAR_MIPMAP_LINEAR},tt={[Ph]:e.NEVER,[Oa]:e.ALWAYS,[Ih]:e.LESS,[Fa]:e.LEQUAL,[Lh]:e.EQUAL,[Ba]:e.GEQUAL,[Dh]:e.GREATER,[Nh]:e.NOTEQUAL};function dt(C,y){if(y.type===Xt&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ft||y.magFilter===Ks||y.magFilter===Vn||y.magFilter===bi||y.minFilter===Ft||y.minFilter===Ks||y.minFilter===Vn||y.minFilter===bi))Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(C,e.TEXTURE_WRAP_S,mt[y.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,mt[y.wrapT]),C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texParameteri(C,e.TEXTURE_WRAP_R,mt[y.wrapR]);if(e.texParameteri(C,e.TEXTURE_MAG_FILTER,et[y.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,et[y.minFilter]),y.compareFunction)e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,tt[y.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===It)return;if(y.minFilter!==Vn&&y.minFilter!==bi)return;if(y.type===Xt&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function ne(C,y){let V=!1;if(C.__webglInit===void 0)C.__webglInit=!0,y.addEventListener("dispose",U),N(y);let oe=y.source,se=d.get(oe);if(se===void 0)se={},d.set(oe,se);let ve=ce(y);if(ve!==C.__cacheKey){if(se[ve]===void 0)se[ve]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,V=!0;se[ve].usedTimes++;let we=se[C.__cacheKey];if(we!==void 0){if(se[C.__cacheKey].usedTimes--,we.usedTimes===0)H(y)}C.__cacheKey=ve,C.__webglTexture=se[ve].texture}return V}function ge(C,y,V){return Math.floor(Math.floor(C/V)/y)}function xe(C,y,V,oe){let ve=C.updateRanges;if(ve.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,V,oe,y.data);else{ve.sort((F,Q)=>F.start-Q.start);let we=0;for(let F=1;F<ve.length;F++){let Q=ve[we],J=ve[F],me=Q.start+Q.count,Me=ge(J.start,y.width,4),Re=ge(Q.start,y.width,4);if(J.start<=me+1&&Me===Re&&ge(J.start+J.count-1,y.width,4)===Me)Q.count=Math.max(Q.count,J.start+J.count-Q.start);else++we,ve[we]=J}ve.length=we+1;let Y=i.getParameter(e.UNPACK_ROW_LENGTH),te=i.getParameter(e.UNPACK_SKIP_PIXELS),Se=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let F=0,Q=ve.length;F<Q;F++){let J=ve[F],me=Math.floor(J.start/4),Me=Math.ceil(J.count/4),Re=me%y.width,Oe=Math.floor(me/y.width),He=Me,Ce=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(e.UNPACK_SKIP_ROWS,Oe),i.texSubImage2D(e.TEXTURE_2D,0,Re,Oe,He,1,V,oe,y.data)}C.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Y),i.pixelStorei(e.UNPACK_SKIP_PIXELS,te),i.pixelStorei(e.UNPACK_SKIP_ROWS,Se)}}function Ne(C,y,V){let oe=e.TEXTURE_2D;if(y.isDataArrayTexture||y.isCompressedArrayTexture)oe=e.TEXTURE_2D_ARRAY;if(y.isData3DTexture)oe=e.TEXTURE_3D;let se=ne(C,y),ve=y.source;i.bindTexture(oe,C.__webglTexture,e.TEXTURE0+V);let we=r.get(ve);if(ve.version!==we.__version||se===!0){if(i.activeTexture(e.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Ce=at.getPrimaries(at.workingColorSpace),ze=y.colorSpace===Xi?null:at.getPrimaries(y.colorSpace),ht=y.colorSpace===Xi||Ce===ze?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}i.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let te=A(y.image,!1,n.maxTextureSize);te=nt(y,te);let Se=s.convert(y.format,y.colorSpace),F=s.convert(y.type),Q=L(y.internalFormat,Se,F,y.normalized,y.colorSpace,y.isVideoTexture);dt(oe,y);let J,me=y.mipmaps,Me=y.isVideoTexture!==!0,Re=we.__version===void 0||se===!0,Oe=ve.dataReady,He=w(y,te);if(y.isDepthTexture){if(Q=g(y.format===Ni,y.type),Re)if(Me)i.texStorage2D(e.TEXTURE_2D,1,Q,te.width,te.height);else i.texImage2D(e.TEXTURE_2D,0,Q,te.width,te.height,0,Se,F,null)}else if(y.isDataTexture)if(me.length>0){if(Me&&Re)i.texStorage2D(e.TEXTURE_2D,He,Q,me[0].width,me[0].height);for(let Ce=0,ze=me.length;Ce<ze;Ce++)if(J=me[Ce],Me){if(Oe)i.texSubImage2D(e.TEXTURE_2D,Ce,0,0,J.width,J.height,Se,F,J.data)}else i.texImage2D(e.TEXTURE_2D,Ce,Q,J.width,J.height,0,Se,F,J.data);y.generateMipmaps=!1}else if(Me){if(Re)i.texStorage2D(e.TEXTURE_2D,He,Q,te.width,te.height);if(Oe)xe(y,te,Se,F)}else i.texImage2D(e.TEXTURE_2D,0,Q,te.width,te.height,0,Se,F,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){if(Me&&Re)i.texStorage3D(e.TEXTURE_2D_ARRAY,He,Q,me[0].width,me[0].height,te.depth);for(let Ce=0,ze=me.length;Ce<ze;Ce++)if(J=me[Ce],y.format!==ri)if(Se!==null)if(Me){if(Oe)if(y.layerUpdates.size>0){let ht=kc(J.width,J.height,y.format,y.type);for(let Le of y.layerUpdates){let bt=J.data.subarray(Le*ht/J.data.BYTES_PER_ELEMENT,(Le+1)*ht/J.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ce,0,0,Le,J.width,J.height,1,Se,bt)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ce,0,0,0,J.width,J.height,te.depth,Se,J.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Ce,Q,J.width,J.height,te.depth,0,J.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Me){if(Oe)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Ce,0,0,0,J.width,J.height,te.depth,Se,F,J.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Ce,Q,J.width,J.height,te.depth,0,Se,F,J.data);if(y.layerUpdates.size>0)y.clearLayerUpdates()}else{if(Me&&Re)i.texStorage2D(e.TEXTURE_2D,He,Q,me[0].width,me[0].height);for(let Ce=0,ze=me.length;Ce<ze;Ce++)if(J=me[Ce],y.format!==ri)if(Se!==null)if(Me){if(Oe)i.compressedTexSubImage2D(e.TEXTURE_2D,Ce,0,0,J.width,J.height,Se,J.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Ce,Q,J.width,J.height,0,J.data);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Me){if(Oe)i.texSubImage2D(e.TEXTURE_2D,Ce,0,0,J.width,J.height,Se,F,J.data)}else i.texImage2D(e.TEXTURE_2D,Ce,Q,J.width,J.height,0,Se,F,J.data)}else if(y.isDataArrayTexture)if(Me){if(Re)i.texStorage3D(e.TEXTURE_2D_ARRAY,He,Q,te.width,te.height,te.depth);if(Oe)if(y.layerUpdates.size>0){let Ce=kc(te.width,te.height,y.format,y.type);for(let ze of y.layerUpdates){let ht=te.data.subarray(ze*Ce/te.data.BYTES_PER_ELEMENT,(ze+1)*Ce/te.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ze,te.width,te.height,1,Se,F,ht)}y.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Se,F,te.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Q,te.width,te.height,te.depth,0,Se,F,te.data);else if(y.isData3DTexture)if(Me){if(Re)i.texStorage3D(e.TEXTURE_3D,He,Q,te.width,te.height,te.depth);if(Oe)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Se,F,te.data)}else i.texImage3D(e.TEXTURE_3D,0,Q,te.width,te.height,te.depth,0,Se,F,te.data);else if(y.isFramebufferTexture){if(Re)if(Me)i.texStorage2D(e.TEXTURE_2D,He,Q,te.width,te.height);else{let Ce=te.width,ze=te.height;for(let ht=0;ht<He;ht++)i.texImage2D(e.TEXTURE_2D,ht,Q,Ce,ze,0,Se,F,null),Ce>>=1,ze>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let Ce=e.canvas;if(!Ce.hasAttribute("layoutsubtree"))Ce.setAttribute("layoutsubtree","true");if(te.parentNode!==Ce){Ce.appendChild(te),f.add(y),Ce.onpaint=(ze)=>{let ht=ze.changedElements;for(let Le of f)if(ht.includes(Le.image))Le.needsUpdate=!0},Ce.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,te);else{let{RGBA:ht,RGBA:Le,UNSIGNED_BYTE:bt}=e;e.texElementImage2D(e.TEXTURE_2D,0,ht,Le,bt,te)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(me.length>0){if(Me&&Re){let Ce=ft(me[0]);i.texStorage2D(e.TEXTURE_2D,He,Q,Ce.width,Ce.height)}for(let Ce=0,ze=me.length;Ce<ze;Ce++)if(J=me[Ce],Me){if(Oe)i.texSubImage2D(e.TEXTURE_2D,Ce,0,0,Se,F,J)}else i.texImage2D(e.TEXTURE_2D,Ce,Q,Se,F,J);y.generateMipmaps=!1}else if(Me){if(Re){let Ce=ft(te);i.texStorage2D(e.TEXTURE_2D,He,Q,Ce.width,Ce.height)}if(Oe)i.texSubImage2D(e.TEXTURE_2D,0,0,0,Se,F,te)}else i.texImage2D(e.TEXTURE_2D,0,Q,Se,F,te);if(R(y)&&y.mipmapsAutoUpdate===!0)E(oe);if(we.__version=ve.version,y.onUpdate)y.onUpdate(y)}C.__version=y.version}function _e(C,y,V){if(y.image.length!==6)return;let oe=ne(C,y),se=y.source;i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+V);let ve=r.get(se);if(se.version!==ve.__version||oe===!0){i.activeTexture(e.TEXTURE0+V);let we=at.getPrimaries(at.workingColorSpace),Y=y.colorSpace===Xi?null:at.getPrimaries(y.colorSpace),te=y.colorSpace===Xi||we===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Se=y.isCompressedTexture||y.image[0].isCompressedTexture,F=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let Le=0;Le<6;Le++){if(!Se&&!F)Q[Le]=A(y.image[Le],!0,n.maxCubemapSize);else Q[Le]=F?y.image[Le].image:y.image[Le];Q[Le]=nt(y,Q[Le])}let J=Q[0],me=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),Re=L(y.internalFormat,me,Me,y.normalized,y.colorSpace),Oe=y.isVideoTexture!==!0,He=ve.__version===void 0||oe===!0,Ce=se.dataReady,ze=w(y,J);dt(e.TEXTURE_CUBE_MAP,y);let ht;if(y.isDepthTexture){if(Re=g(y.format===Ni,y.type),He)if(Oe)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,Re,J.width,J.height);else for(let Le=0;Le<6;Le++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Re,J.width,J.height,0,me,Me,null)}else if(Se){if(Oe&&He)i.texStorage2D(e.TEXTURE_CUBE_MAP,ze,Re,J.width,J.height);for(let Le=0;Le<6;Le++){ht=Q[Le].mipmaps;for(let bt=0;bt<ht.length;bt++){let Jt=ht[bt];if(y.format!==ri)if(me!==null)if(Oe){if(Ce)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,bt,0,0,Jt.width,Jt.height,me,Jt.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,bt,Re,Jt.width,Jt.height,0,Jt.data);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Oe){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,bt,0,0,Jt.width,Jt.height,me,Me,Jt.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,bt,Re,Jt.width,Jt.height,0,me,Me,Jt.data)}}}else{if(ht=y.mipmaps,Oe&&He){if(ht.length>0)ze++;let Le=ft(Q[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ze,Re,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(F){if(Oe){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Q[Le].width,Q[Le].height,me,Me,Q[Le].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Re,Q[Le].width,Q[Le].height,0,me,Me,Q[Le].data);for(let bt=0;bt<ht.length;bt++){let Mi=ht[bt].image[Le].image;if(Oe){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,bt+1,0,0,Mi.width,Mi.height,me,Me,Mi.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,bt+1,Re,Mi.width,Mi.height,0,me,Me,Mi.data)}}else{if(Oe){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,me,Me,Q[Le])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Re,me,Me,Q[Le]);for(let bt=0;bt<ht.length;bt++){let Jt=ht[bt];if(Oe){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,bt+1,0,0,me,Me,Jt.image[Le])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,bt+1,Re,me,Me,Jt.image[Le])}}}if(R(y)&&y.mipmapsAutoUpdate===!0)E(e.TEXTURE_CUBE_MAP);if(ve.__version=se.version,y.onUpdate)y.onUpdate(y)}C.__version=y.version}function ke(C,y,V,oe,se,ve){let we=s.convert(V.format,V.colorSpace),Y=s.convert(V.type),te=L(V.internalFormat,we,Y,V.normalized,V.colorSpace),Se=r.get(y),F=r.get(V);if(F.__renderTarget=y,!Se.__hasExternalTextures){let Q=Math.max(1,y.width>>ve),J=Math.max(1,y.height>>ve);if(se===e.TEXTURE_3D||se===e.TEXTURE_2D_ARRAY)i.texImage3D(se,ve,te,Q,J,y.depth,0,we,Y,null);else i.texImage2D(se,ve,te,Q,J,0,we,Y,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,C),yt(y))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,se,F.__webglTexture,0,Ae(y));else if(se===e.TEXTURE_2D||se>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,oe,se,F.__webglTexture,ve);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ve(C,y,V){if(e.bindRenderbuffer(e.RENDERBUFFER,C),y.depthBuffer){let oe=y.depthTexture,se=oe&&oe.isDepthTexture?oe.type:null,ve=g(y.stencilBuffer,se),we=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(yt(y))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(y),ve,y.width,y.height);else if(V)e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(y),ve,y.width,y.height);else e.renderbufferStorage(e.RENDERBUFFER,ve,y.width,y.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,we,e.RENDERBUFFER,C)}else{let oe=y.textures;for(let se=0;se<oe.length;se++){let ve=oe[se],we=s.convert(ve.format,ve.colorSpace),Y=s.convert(ve.type),te=L(ve.internalFormat,we,Y,ve.normalized,ve.colorSpace);if(yt(y))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(y),te,y.width,y.height);else if(V)e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(y),te,y.width,y.height);else e.renderbufferStorage(e.RENDERBUFFER,te,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ge(C,y,V){let oe=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=r.get(y.depthTexture);se.__renderTarget=y;let ve=oe?y.depthTexture.image[0]:y.depthTexture.image;if(!se.__webglTexture||ve.width!==y.width||ve.height!==y.height)ve.width=y.width,ve.height=y.height,y.depthTexture.needsUpdate=!0;if(oe)De(y.depthTexture,0);else Fe(y.depthTexture,0);let we=se.__webglTexture,Y=Ae(y),te=oe?e.TEXTURE_CUBE_MAP_POSITIVE_X+V:e.TEXTURE_2D,Se=y.depthTexture.format===Ni?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Pi)if(yt(y))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Se,te,we,0,Y);else e.framebufferTexture2D(e.FRAMEBUFFER,Se,te,we,0);else if(y.depthTexture.format===Ni)if(yt(y))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Se,te,we,0,Y);else e.framebufferTexture2D(e.FRAMEBUFFER,Se,te,we,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(C){let y=r.get(C),V=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let oe=C.depthTexture;if(y.__depthDisposeCallback)y.__depthDisposeCallback();if(oe){let se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,oe.removeEventListener("dispose",se)};oe.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=oe}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let oe=0;oe<6;oe++)Ge(y.__webglFramebuffer[oe],C,oe);else if(C.texture.mipmaps.length>0)Ge(y.__webglFramebuffer[0],C,0);else Ge(y.__webglFramebuffer,C,0);else if(V){y.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[oe]),y.__webglDepthbuffer[oe]===void 0)y.__webglDepthbuffer[oe]=e.createRenderbuffer(),Ve(y.__webglDepthbuffer[oe],C,!1);else{let se=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=y.__webglDepthbuffer[oe];e.bindRenderbuffer(e.RENDERBUFFER,ve),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,ve)}}else{if(C.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer);if(y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Ve(y.__webglDepthbuffer,C,!1);else{let se=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ve),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,ve)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(C,y,V){let oe=r.get(C);if(y!==void 0)ke(oe.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(V!==void 0)st(C)}function O(C){let y=C.texture,V=r.get(C),oe=r.get(y);C.addEventListener("dispose",G),N(C);let se=C.textures,ve=C.isWebGLCubeRenderTarget===!0,we=se.length>1;if(!we){if(oe.__webglTexture===void 0)oe.__webglTexture=e.createTexture();oe.__version=y.version,o.memory.textures++}if(ve){V.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){V.__webglFramebuffer[Y]=[];for(let te=0;te<y.mipmaps.length;te++)V.__webglFramebuffer[Y][te]=e.createFramebuffer()}else V.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(y.mipmaps.length>0){V.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)V.__webglFramebuffer[Y]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(we)for(let Y=0,te=se.length;Y<te;Y++){let Se=r.get(se[Y]);if(Se.__webglTexture===void 0)Se.__webglTexture=e.createTexture(),o.memory.textures++}if(C.samples>0&&yt(C)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Y=0;Y<se.length;Y++){let te=se[Y];V.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[Y]);let Se=s.convert(te.format,te.colorSpace),F=s.convert(te.type),Q=L(te.internalFormat,Se,F,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),J=Ae(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,J,Q,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,V.__webglColorRenderbuffer[Y])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer)V.__webglDepthRenderbuffer=e.createRenderbuffer(),Ve(V.__webglDepthRenderbuffer,C,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ve){i.bindTexture(e.TEXTURE_CUBE_MAP,oe.__webglTexture),dt(e.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)ke(V.__webglFramebuffer[Y][te],C,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te);else ke(V.__webglFramebuffer[Y],C,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);if(R(y))E(e.TEXTURE_CUBE_MAP);else if(y.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,y.mipmaps.length-1);i.unbindTexture()}else if(we){for(let Y=0,te=se.length;Y<te;Y++){let Se=se[Y],F=r.get(Se),Q=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)Q=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(Q,F.__webglTexture),dt(Q,Se),ke(V.__webglFramebuffer,C,Se,e.COLOR_ATTACHMENT0+Y,Q,0),R(Se))E(Q)}i.unbindTexture()}else{let Y=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)Y=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(Y,oe.__webglTexture),dt(Y,y),y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)ke(V.__webglFramebuffer[te],C,y,e.COLOR_ATTACHMENT0,Y,te);else ke(V.__webglFramebuffer,C,y,e.COLOR_ATTACHMENT0,Y,0);if(R(y))E(Y);else if(y.mipmaps.length>0)e.texParameteri(Y,e.TEXTURE_MAX_LEVEL,y.mipmaps.length-1);i.unbindTexture()}if(C.depthBuffer)st(C)}function Ot(C){let y=C.textures;for(let V=0,oe=y.length;V<oe;V++){let se=y[V];if(R(se)&&se.mipmapsAutoUpdate===!0){let ve=I(C),we=r.get(se).__webglTexture;i.bindTexture(ve,we),E(ve),i.unbindTexture()}}}let lt=[];function Dt(C){if(C.samples>0){if(yt(C)===!1){let{textures:y,width:V,height:oe}=C,se=e.COLOR_BUFFER_BIT,ve=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,we=r.get(C),Y=y.length>1;if(Y)for(let Se=0;Se<y.length;Se++)i.bindFramebuffer(e.FRAMEBUFFER,we.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,we.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Se=0;Se<y.length;Se++){if(C.resolveDepthBuffer){if(C.depthBuffer)se|=e.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)se|=e.STENCIL_BUFFER_BIT}if(Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,we.__webglColorRenderbuffer[Se]);let F=r.get(y[Se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,F,0)}if(e.blitFramebuffer(0,0,V,oe,0,0,V,oe,se,e.NEAREST),l===!0){if(lt.length=0,lt.push(e.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)lt.push(ve);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let Se=0;Se<y.length;Se++){i.bindFramebuffer(e.FRAMEBUFFER,we.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,we.__webglColorRenderbuffer[Se]);let F=r.get(y[Se]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,we.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,F,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Ae(C){return Math.min(n.maxSamples,C.samples)}function yt(C){let y=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Qe(C){let y=o.render.frame;if(u.get(C)!==y)u.set(C,y),C.update()}function nt(C,y){let{colorSpace:V,format:oe,type:se}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return y;if(V!==tn&&V!==Xi)if(at.getTransfer(V)===pt){if(oe!==ri||se!==Wt)Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ue("WebGLTextures: Unsupported texture color space:",V);return y}function ft(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)c.width=C.displayWidth,c.height=C.displayHeight;else c.width=C.width,c.height=C.height;return c}this.allocateTextureUnit=re,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=ye,this.setTexture2D=Fe,this.setTexture2DArray=Ye,this.setTexture3D=Je,this.setTextureCube=De,this.rebindTextures=gt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=yt,this.dispose=K}function Jc(e,t){function i(r,n=Xi){let s,o=at.getTransfer(n);if(r===Wt)return e.UNSIGNED_BYTE;if(r===kn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Wn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===wa)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Aa)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ta)return e.BYTE;if(r===Ea)return e.SHORT;if(r===xr)return e.UNSIGNED_SHORT;if(r===Hn)return e.INT;if(r===Kt)return e.UNSIGNED_INT;if(r===Xt)return e.FLOAT;if(r===Rt)return e.HALF_FLOAT;if(r===Ra)return e.ALPHA;if(r===Ca)return e.RGB;if(r===ri)return e.RGBA;if(r===Pi)return e.DEPTH_COMPONENT;if(r===Ni)return e.DEPTH_STENCIL;if(r===Xn)return e.RED;if(r===Qr)return e.RED_INTEGER;if(r===Ui)return e.RG;if(r===qn)return e.RG_INTEGER;if(r===Yn)return e.RGBA_INTEGER;if(r===Zn||r===Jn||r===Kn||r===Qn)if(o===pt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Zn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Zn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qs||r===$s||r===js||r===eo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Qs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===js)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===to||r===io||r===ro||r===no||r===so||r===$r||r===oo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===to||r===io)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===ro)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===no)return s.COMPRESSED_R11_EAC;if(r===so)return s.COMPRESSED_SIGNED_R11_EAC;if(r===$r)return s.COMPRESSED_RG11_EAC;if(r===oo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ao||r===lo||r===co||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===xo||r===_o||r===vo||r===yo||r===Mo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===ao)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===co)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ho)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===po)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===go)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_o)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===So||r===bo||r===To)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===So)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===To)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Eo||r===wo||r===jr||r===Ao)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(r===wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ao)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===tr)return e.UNSIGNED_INT_24_8;return e[r]!==void 0?e[r]:null}return{convert:i}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
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

}`;class Kc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new bs(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new wt({vertexShader:n_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new wi(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qc extends Qt{constructor(e,t){super();let i=this,r=null,n=1,s=null,o="local-floor",a=1,l=null,c=null,u=null,f=null,h=null,d=null,v=typeof XRWebGLBinding<"u",S=new Kc,p={},m=t.getContextAttributes(),A=null,R=null,E=[],I=[],L=new q,g=null,w=null,N=new Vt;N.viewport=new xt;let k=new Vt;k.viewport=new xt;let U=[N,k],G=new Dl,ee=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ce=E[re];if(ce===void 0)ce=new os,E[re]=ce;return ce.getTargetRaySpace()},this.getControllerGrip=function(re){let ce=E[re];if(ce===void 0)ce=new os,E[re]=ce;return ce.getGripSpace()},this.getHand=function(re){let ce=E[re];if(ce===void 0)ce=new os,E[re]=ce;return ce.getHandSpace()};function K(re){let ce=I.indexOf(re.inputSource);if(ce===-1)return;let Fe=E[ce];if(Fe!==void 0)Fe.update(re.inputSource,re.frame,l||s),Fe.dispatchEvent({type:re.type,data:re.inputSource})}function j(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",H);for(let re=0;re<E.length;re++){let ce=I[re];if(ce===null)continue;I[re]=null,E[re].disconnect(ce)}ee=null,D=null,S.reset();for(let re in p)delete p[re];if(e.setRenderTarget(A),h=null,f=null,u=null,r=null,R=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(L.width,L.height,!1),w!==null){let re=w.camera;re.fov=w.fov,re.zoom=w.zoom,re.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){if(n=re,i.isPresenting===!0)Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){if(o=re,i.isPresenting===!0)Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){if(u===null&&v)u=new XRWebGLBinding(r,t);return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",j),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0)await t.makeXRCompatible();if(g=e.getPixelRatio(),e.getSize(L),!(v&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(r,t,Fe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new Et(h.framebufferWidth,h.framebufferHeight,{format:ri,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Fe=null,Ye=null,Je=null;if(m.depth)Je=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=m.stencil?Ni:Pi,Ye=m.stencil?tr:Kt;let De={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:n};u=this.getBinding(),f=u.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Et(f.textureWidth,f.textureHeight,{format:ri,type:Wt,depthTexture:new Oi(f.textureWidth,f.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await r.requestReferenceSpace(o),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(re){for(let ce=0;ce<re.removed.length;ce++){let Fe=re.removed[ce],Ye=I.indexOf(Fe);if(Ye>=0)I[Ye]=null,E[Ye].disconnect(Fe)}for(let ce=0;ce<re.added.length;ce++){let Fe=re.added[ce],Ye=I.indexOf(Fe);if(Ye===-1){for(let De=0;De<E.length;De++)if(De>=I.length){I.push(Fe),Ye=De;break}else if(I[De]===null){I[De]=Fe,Ye=De;break}if(Ye===-1)break}let Je=E[Ye];if(Je)Je.connect(Fe)}}function de(re,ce){if(ce===null)re.matrixWorld.copy(re.matrix);else re.matrixWorld.multiplyMatrices(ce.matrixWorld,re.matrix);re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let{near:ce,far:Fe}=re;if(S.texture!==null){if(S.depthNear>0)ce=S.depthNear;if(S.depthFar>0)Fe=S.depthFar}if(G.near=k.near=N.near=ce,G.far=k.far=N.far=Fe,ee!==G.near||D!==G.far)r.updateRenderState({depthNear:G.near,depthFar:G.far}),ee=G.near,D=G.far;G.layers.mask=re.layers.mask|6,N.layers.mask=G.layers.mask&-5,k.layers.mask=G.layers.mask&-3;let Ye=re.parent,Je=G.cameras;de(G,Ye);for(let De=0;De<Je.length;De++)de(Je[De],Ye);if(G.projectionMatrix.copy(N.projectionMatrix),G.projectionMatrixInverse.copy(N.projectionMatrixInverse),w===null&&re.isPerspectiveCamera)w={camera:re,fov:re.fov,zoom:re.zoom};Z(re,G,Ye)};function Z(re,ce,Fe){if(Fe===null)re.matrix.copy(ce.matrixWorld);else re.matrix.copy(Fe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ce.matrixWorld);if(re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ce.projectionMatrix),re.projectionMatrixInverse.copy(ce.projectionMatrixInverse),re.isPerspectiveCamera)re.fov=on*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1}this.getCamera=function(){return G},this.getFoveation=function(){if(f===null&&h===null)return;return a},this.setFoveation=function(re){if(a=re,f!==null)f.fixedFoveation=re;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=re},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(G)},this.getCameraTexture=function(re){return p[re]};let ie=null;function ae(re,ce){if(c=ce.getViewerPose(l||s),d=ce,c!==null){let Fe=c.views;if(h!==null)e.setRenderTargetFramebuffer(R,h.framebuffer),e.setRenderTarget(R);let Ye=!1;if(Fe.length!==G.cameras.length)G.cameras.length=0,Ye=!0;for(let et=0;et<Fe.length;et++){let tt=Fe[et],dt=null;if(h!==null)dt=h.getViewport(tt);else{let ge=u.getViewSubImage(f,tt);if(dt=ge.viewport,et===0)e.setRenderTargetTextures(R,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(R)}let ne=U[et];if(ne===void 0)ne=new Vt,ne.layers.enable(et),ne.viewport=new xt,U[et]=ne;if(ne.matrix.fromArray(tt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(tt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(dt.x,dt.y,dt.width,dt.height),et===0)G.matrix.copy(ne.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);if(Ye===!0)G.cameras.push(ne)}let Je=r.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let et=u.getDepthInformation(Fe[0]);if(et&&et.isValid&&et.texture)S.init(et,r.renderState)}if(Je&&Je.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let et=0;et<Fe.length;et++){let tt=Fe[et].camera;if(tt){let dt=p[tt];if(!dt)dt=new bs,p[tt]=dt;let ne=u.getCameraImage(tt);dt.sourceTexture=ne}}}}for(let Fe=0;Fe<E.length;Fe++){let Ye=I[Fe],Je=E[Fe];if(Ye!==null&&Je!==void 0)Je.update(Ye,ce,l||s)}if(ie)ie(re,ce);if(ce.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:ce});d=null}let ye=new Nl;ye.setAnimationLoop(ae),this.setAnimationLoop=function(re){ie=re},this.dispose=function(){}}}var o_=new qe,Am=new Ze;Am.set(-1,0,0,0,1,0,0,0,1);function Rm(e,t){function i(p,m){if(p.matrixAutoUpdate===!0)p.updateMatrix();m.value.copy(p.matrix)}function r(p,m){if(m.color.getRGB(p.fogColor.value,Sl(e)),m.isFog)p.fogNear.value=m.near,p.fogFar.value=m.far;else if(m.isFogExp2)p.fogDensity.value=m.density}function n(p,m,A,R,E){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)s(p,m);else if(m.isMeshLambertMaterial){if(s(p,m),m.envMap)p.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)s(p,m),f(p,m);else if(m.isMeshPhongMaterial){if(s(p,m),u(p,m),m.envMap)p.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(s(p,m),h(p,m),m.isMeshPhysicalMaterial)d(p,m,E)}else if(m.isMeshMatcapMaterial)s(p,m),v(p,m);else if(m.isMeshDepthMaterial)s(p,m);else if(m.isMeshDistanceMaterial)s(p,m),S(p,m);else if(m.isMeshNormalMaterial)s(p,m);else if(m.isLineBasicMaterial){if(o(p,m),m.isLineDashedMaterial)a(p,m)}else if(m.isPointsMaterial)l(p,m,A,R);else if(m.isSpriteMaterial)c(p,m);else if(m.isShadowMaterial)p.color.value.copy(m.color),p.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function s(p,m){if(p.opacity.value=m.opacity,m.color)p.diffuse.value.copy(m.color);if(m.emissive)p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)p.map.value=m.map,i(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.bumpMap){if(p.bumpMap.value=m.bumpMap,i(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Nt)p.bumpScale.value*=-1}if(m.normalMap){if(p.normalMap.value=m.normalMap,i(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Nt)p.normalScale.value.negate()}if(m.displacementMap)p.displacementMap.value=m.displacementMap,i(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias;if(m.emissiveMap)p.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,p.emissiveMapTransform);if(m.specularMap)p.specularMap.value=m.specularMap,i(m.specularMap,p.specularMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest;let A=t.get(m),{envMap:R,envMapRotation:E}=A;if(R){if(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(Am);p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio}if(m.lightMap)p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,p.lightMapTransform);if(m.aoMap)p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,p.aoMapTransform)}function o(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map)p.map.value=m.map,i(m.map,p.mapTransform)}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,A,R){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=R*0.5,m.map)p.map.value=m.map,i(m.map,p.uvTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function c(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map)p.map.value=m.map,i(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,0.0001)}function f(p,m){if(m.gradientMap)p.gradientMap.value=m.gradientMap}function h(p,m){if(p.metalness.value=m.metalness,m.metalnessMap)p.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=m.roughness,m.roughnessMap)p.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,p.roughnessMapTransform);if(m.envMap)p.envMapIntensity.value=m.envMapIntensity}function d(p,m,A){if(p.ior.value=m.ior,m.diffuseRoughness>0){if(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap)p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(m.sheen>0){if(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)p.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,p.sheenColorMapTransform);if(m.sheenRoughnessMap)p.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)p.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,p.clearcoatMapTransform);if(m.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(p.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nt)p.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)p.dispersion.value=m.dispersion;if(m.retroreflectivity>0)p.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap)p.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,p.iridescenceMapTransform);if(m.iridescenceThicknessMap)p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(m.transmission>0){if(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap)p.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=m.thickness,m.thicknessMap)p.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)p.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap)p.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,p.specularColorMapTransform);if(m.specularIntensityMap)p.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,p.specularIntensityMapTransform)}function v(p,m){if(m.matcap)p.matcap.value=m.matcap}function S(p,m){let A=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Cm(e,t,i,r){let n={},s={};function o(A,R){let E=R.program;r.uniformBlockBinding(A,E,n[A.id])}function a(A,R){let E=n[A.id];if(E===void 0)v(A),E=l(A),n[A.id]=E,A.addEventListener("dispose",p);let I=R.program;r.updateUBOMapping(A,I);let L=t.render.frame;if(s[A.id]!==L)c(A),s[A.id]=L}function l(A){let R=e.createBuffer(),{__size:E,usage:I}=A;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,E,I),e.bindBuffer(e.UNIFORM_BUFFER,null),R}function c(A){let R=n[A.id],{uniforms:E,__cache:I}=A;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let L=0,g=E.length;L<g;L++){let w=E[L];if(Array.isArray(w))for(let N=0,k=w.length;N<k;N++)u(w[N],L,N,I);else u(w,L,0,I)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(A,R,E,I){if(h(A,R,E,I)===!0){let{__offset:L,value:g}=A;if(Array.isArray(g)){let w=0;for(let N=0;N<g.length;N++){let k=g[N],U=S(k,!0);f(k,A.__data,w),w+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,A.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,L,A.__data)}}function f(A,R,E){if(typeof A==="number"||typeof A==="boolean")R[E]=A;else if(A.isMatrix3)R[E]=A.elements[0],R[E+1]=A.elements[1],R[E+2]=A.elements[2],R[E+3]=0,R[E+4]=A.elements[3],R[E+5]=A.elements[4],R[E+6]=A.elements[5],R[E+7]=0,R[E+8]=A.elements[6],R[E+9]=A.elements[7],R[E+10]=A.elements[8],R[E+11]=0;else if(ArrayBuffer.isView(A))R.set(A.subarray(0,R.length-E),E);else A.toArray(R,E)}function h(A,R,E,I){let L=A.value,g=R+"_"+E;if(Array.isArray(L)){if(I[g]===void 0)I[g]=[];let w=I[g],N=!1;for(let k=0;k<L.length;k++)if(d(L[k],w,k)===!0)N=!0;return N}return d(L,I,g)}function d(A,R,E){if(R[E]===void 0){if(typeof A==="number"||typeof A==="boolean")R[E]=A;else if(ArrayBuffer.isView(A))R[E]=A.slice();else R[E]=A.clone();return!0}else{let I=R[E];if(typeof A==="number"||typeof A==="boolean"){if(I!==A)return R[E]=A,!0}else if(ArrayBuffer.isView(A))return!0;else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function v(A){let R=A.uniforms,E=0,I=16;for(let g=0,w=R.length;g<w;g++){let N=Array.isArray(R[g])?R[g]:[R[g]];for(let k=0,U=N.length;k<U;k++){let G=N[k],ee=Array.isArray(G.value)?G.value:[G.value],D=Array.isArray(R[g])||Array.isArray(G.value),K=E;for(let H=0,de=ee.length;H<de;H++){let Z=ee[H],ie=S(Z,D),ae=E%I,ye=ae%ie.boundary,re=ae+ye;if(E+=ye,re!==0&&I-re<ie.storage)E+=I-re;if(H===0)K=E;E+=ie.storage}let j=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new j((E-K)/Float32Array.BYTES_PER_ELEMENT),G.__offset=K}}let L=E%I;if(L>0)E+=I-L;return A.__size=E,A.__cache={},this}function S(A,R){let E={boundary:0,storage:0};if(typeof A==="number"||typeof A==="boolean")E.boundary=4,E.storage=4;else if(A.isVector2)E.boundary=8,E.storage=8;else if(A.isVector3||A.isColor)E.boundary=16,E.storage=12;else if(A.isVector4)E.boundary=16,E.storage=16;else if(A.isMatrix3)E.boundary=16,E.storage=48;else if(A.isMatrix4)E.boundary=16,E.storage=64;else if(A.isTexture)Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(A))E.boundary=16,E.storage=A.byteLength;else Ee("WebGLRenderer: Unsupported uniform value type.",A);if(R===!0)E.boundary=16,E.storage=Math.ceil(E.storage/16)*16;return E}function p(A){let R=A.target;R.removeEventListener("dispose",p),e.deleteBuffer(n[R.id]),delete n[R.id],delete s[R.id]}function m(){for(let A in n)e.deleteBuffer(n[A]);n={},s={}}return{bind:o,update:a,dispose:m}}var a_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mr=null;function Pm(){if(mr===null)mr=new fr(a_,16,16,Ui,Rt),mr.name="DFG_LUT",mr.minFilter=Ft,mr.magFilter=Ft,mr.wrapS=ui,mr.wrapT=ui,mr.generateMipmaps=!1,mr.needsUpdate=!0;return mr}class zl{constructor(e={}){let{canvas:t=Kl(),context:i=null,depth:r=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Wt}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let v=h,S=new Set([Yn,qn,Qr]),p=new Set([Wt,Kt,xr,tr,kn,Wn]),m=new Uint32Array(4),A=new Int32Array(4),R={textures:[],min:[],max:[],resolution:[]},E=null,I=null,L=[],g=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,k=!1,U=null,G=null,ee=null,D=null;this._outputColorSpace=Ct;let K=0,j=0,H=null,de=-1,Z=null,ie=new xt,ae=new xt,ye=null,re=new he(0),ce=0,{width:Fe,height:Ye}=t,Je=1,De=null,mt=null,et=new xt(0,0,Fe,Ye),tt=new xt(0,0,Fe,Ye),dt=!1,ne=new Ji,ge=new Ms,xe=!1,Ne=!1,_e=new qe,ke=new P,Ve=new xt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function gt(){return H===null?Je:1}let O=i;function Ot(M,_){return t.getContext(M,_)}let lt,Dt,Ae,yt,Qe,nt,ft,C,y,V,oe,se,ve,we,Y,te,Se,F,Q,J,me,Me,Re;try{let M={alpha:!0,depth:r,stencil:n,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Gs}`);if(t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",ht,!1),O===null){if(O=Ot("webgl2",M),O===null)if(Ot("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(M){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Ue("WebGLRenderer: "+M.message),M}function Oe(){if(lt=new Bp(O),lt.init(),me=new Jc(O,lt),Dt=new Rp(O,lt,e,me),Ae=new Em(O,lt),Dt.reversedDepthBuffer&&f)Ae.buffers.depth.setReversed(!0);G=O.createFramebuffer(),ee=O.createFramebuffer(),D=O.createFramebuffer(),yt=new Gp(O),Qe=new pm,nt=new wm(O,lt,Ae,Qe,Dt,me,yt),ft=new Fp(N),C=new ku(O),Me=new wp(O,C),y=new Op(O,C,yt,Me),V=new Hp(O,y,C,Me,yt),F=new Vp(O,Dt,nt),Y=new Cp(Qe),oe=new dm(N,ft,lt,Dt,Me,Y),se=new Rm(N,Qe),ve=new xm,we=new ym(lt),Se=new Ep(N,ft,Ae,V,d,a),te=new Tm(N,V,Dt),Re=new Cm(O,yt,Dt,Ae),Q=new Ap(O,lt,yt),J=new zp(O,lt,yt),yt.programs=oe.programs,N.capabilities=Dt,N.extensions=lt,N.properties=Qe,N.renderLists=ve,N.shadowMap=te,N.state=Ae,N.info=yt}if(v!==Wt)w=new kp(v,t.width,t.height,o,r,n);let He=new Qc(N,O);this.xr=He,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=lt.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=lt.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return Je},this.setPixelRatio=function(M){if(M===void 0)return;Je=M,this.setSize(Fe,Ye,!1)},this.getSize=function(M){return M.set(Fe,Ye)},this.setSize=function(M,_,b=!0){if(He.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Fe=M,Ye=_,t.width=Math.floor(M*Je),t.height=Math.floor(_*Je),b===!0)t.style.width=M+"px",t.style.height=_+"px";if(w!==null)w.setSize(t.width,t.height);this.setViewport(0,0,M,_)},this.getDrawingBufferSize=function(M){return M.set(Fe*Je,Ye*Je).floor()},this.setDrawingBufferSize=function(M,_,b){Fe=M,Ye=_,Je=b,t.width=Math.floor(M*b),t.height=Math.floor(_*b),this.setViewport(0,0,M,_)},this.setEffects=function(M){if(v===Wt){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let _=0;_<M.length;_++)if(M[_].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ie)},this.getViewport=function(M){return M.copy(et)},this.setViewport=function(M,_,b,T){if(M.isVector4)et.set(M.x,M.y,M.z,M.w);else et.set(M,_,b,T);Ae.viewport(ie.copy(et).multiplyScalar(gt()).round())},this.getScissor=function(M){return M.copy(tt)},this.setScissor=function(M,_,b,T){if(M.isVector4)tt.set(M.x,M.y,M.z,M.w);else tt.set(M,_,b,T);Ae.scissor(ae.copy(tt).multiplyScalar(gt()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(M){Ae.setScissorTest(dt=M)},this.setOpaqueSort=function(M){De=M},this.setTransparentSort=function(M){mt=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,_=!0,b=!0){let T=0;if(M){let x=!1;if(H!==null){let z=H.texture.format;x=S.has(z)}if(x){let z=H.texture.type,X=p.has(z),B=Se.getClearColor(),W=Se.getClearAlpha(),{r:ue,g:Te,b:pe}=B;if(X)m[0]=ue,m[1]=Te,m[2]=pe,m[3]=W,O.clearBufferuiv(O.COLOR,0,m);else A[0]=ue,A[1]=Te,A[2]=pe,A[3]=W,O.clearBufferiv(O.COLOR,0,A)}else T|=O.COLOR_BUFFER_BIT}if(_)T|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(b)T|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(T!==0)O.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Se.dispose(),ve.dispose(),we.dispose(),nt.dispose(),Qe.dispose(),ft.dispose(),V.dispose(),y.dispose(),Me.dispose(),Re.dispose(),oe.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ns),He.removeEventListener("sessionend",li),ar.stop()};function Ce(M){M.preventDefault(),sn("WebGLRenderer: Context Lost."),k=!0}function ze(){sn("WebGLRenderer: Context Restored."),k=!1;let M=yt.autoReset,_=te.enabled,b=te.autoUpdate,T=te.needsUpdate,x=te.type;Oe(),yt.autoReset=M,te.enabled=_,te.autoUpdate=b,te.needsUpdate=T,te.type=x}function ht(M){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Le(M){let _=M.target;_.removeEventListener("dispose",Le),bt(_)}function bt(M){Jt(M),Qe.remove(M)}function Jt(M){let _=Qe.get(M).programs;if(_!==void 0){if(_.forEach(function(b){oe.releaseProgram(b)}),M.isShaderMaterial)oe.releaseShaderCache(M)}}this.renderBufferDirect=function(M,_,b,T,x,z){if(_===null)_=Ge;let X=x.isMesh&&x.matrixWorld.determinantAffine()<0,B=Hl(M,_,b,T,x);Ae.setMaterial(T,X);let W=b.index,ue=1;if(T.wireframe===!0){if(W=y.getWireframeAttribute(b),W===void 0)return;ue=2}let Te=b.drawRange,pe=b.attributes.position,le=Te.start*ue,fe=(Te.start+Te.count)*ue;if(z!==null)le=Math.max(le,z.start*ue),fe=Math.min(fe,(z.start+z.count)*ue);if(W!==null)le=Math.max(le,0),fe=Math.min(fe,W.count);else if(pe!==void 0&&pe!==null)le=Math.max(le,0),fe=Math.min(fe,pe.count);let it=fe-le;if(it<0||it===1/0)return;Me.setup(x,T,B,b,W);let Ke,be=Q;if(W!==null)Ke=C.get(W),be=J,be.setIndex(Ke);if(x.isMesh)if(T.wireframe===!0)Ae.setLineWidth(T.wireframeLinewidth*gt()),be.setMode(O.LINES);else be.setMode(O.TRIANGLES);else if(x.isLine){let ot=T.linewidth;if(ot===void 0)ot=1;if(Ae.setLineWidth(ot*gt()),x.isLineSegments)be.setMode(O.LINES);else if(x.isLineLoop)be.setMode(O.LINE_LOOP);else be.setMode(O.LINE_STRIP)}else if(x.isPoints)be.setMode(O.POINTS);else if(x.isSprite)be.setMode(O.TRIANGLES);if(x.isBatchedMesh)if(!lt.get("WEBGL_multi_draw")){let{_multiDrawStarts:ot,_multiDrawCounts:Pe,_multiDrawCount:Pt}=x,$e=W?C.get(W).bytesPerElement:1,ci=Qe.get(T).currentProgram.getUniforms();for(let At=0;At<Pt;At++)ci.setValue(O,"_gl_DrawID",At),be.render(ot[At]/$e,Pe[At])}else be.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)be.renderInstances(le,it,x.count);else if(b.isInstancedBufferGeometry){let ot=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,Pe=Math.min(b.instanceCount,ot);be.renderInstances(le,it,Pe)}else be.render(le,it)};function Mi(M,_,b,T){if(U!==null&&M.isNodeMaterial)U.setObject(T,M);if(xe===!0)Y.setState(M,b,!1);if(M.transparent===!0&&M.side===di&&M.forceSinglePass===!1)M.side=Nt,M.needsUpdate=!0,Ar(M,_,T),M.side=Hi,M.needsUpdate=!0,Ar(M,_,T),M.side=di;else Ar(M,_,T)}this.compile=function(M,_,b=null){if(b===null)b=M;if(U!==null)U.renderStart(M,_,b);if(I=we.get(b),I.init(_),g.push(I),b.traverseVisible(function(x){if(x.isLight&&x.layers.test(_.layers)){if(I.pushLight(x),x.castShadow)I.pushShadow(x)}}),M!==b)M.traverseVisible(function(x){if(x.isLight&&x.layers.test(_.layers)){if(I.pushLight(x),x.castShadow)I.pushShadow(x)}});if(I.setupLights(),U!==null)U.updateLights(I.state.lightsArray);if(Ne=this.localClippingEnabled,xe=Y.init(this.clippingPlanes,Ne),xe===!0)Y.setGlobalState(this.clippingPlanes,_);if(U!==null)te.render(I.state.shadowsArray,b,_);let T=new Set;if(M.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;let z=x.material;if(z)if(Array.isArray(z))for(let X=0;X<z.length;X++){let B=z[X];Mi(B,b,_,x),T.add(B)}else Mi(z,b,_,x),T.add(z)}),I=g.pop(),U!==null)U.renderEnd();return T},this.compileAsync=function(M,_,b=null){let T=this.compile(M,_,b);return new Promise((x)=>{function z(){if(T.forEach(function(X){let W=Qe.get(X).currentProgram;if(W===void 0||W.isReady())T.delete(X)}),T.size===0){x(M);return}setTimeout(z,10)}if(lt.get("KHR_parallel_shader_compile")!==null)z();else setTimeout(z,10)})};let Ds=null;function Vl(M){if(Ds)Ds(M)}function Ns(){ar.stop()}function li(){ar.start()}let ar=new Nl;if(ar.setAnimationLoop(Vl),typeof self<"u")ar.setContext(self);this.setAnimationLoop=function(M){Ds=M,He.setAnimationLoop(M),M===null?ar.stop():ar.start()},He.addEventListener("sessionstart",Ns),He.addEventListener("sessionend",li),this.render=function(M,_){if(_!==void 0&&_.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(U!==null)U.renderStart(M,_);let b=He.enabled===!0&&He.isPresenting===!0,T=w!==null&&(H===null||b)&&w.begin(N,H);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(_.parent===null&&_.matrixWorldAutoUpdate===!0)_.updateMatrixWorld();if(He.enabled===!0&&He.isPresenting===!0&&(w===null||w.isCompositing()===!1)){if(He.cameraAutoUpdate===!0)He.updateCamera(_);_=He.getCamera()}if(M.isScene===!0)M.onBeforeRender(N,M,_,H);if(I=we.get(M,g.length),I.init(_),I.state.textureUnits=nt.getTextureUnits(),g.push(I),_e.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),_.isArrayCamera)ge.setFromArrayCamera(_);else ne.setFromProjectionMatrix(_e,ni,_.reversedDepth);if(Ne=this.localClippingEnabled,xe=Y.init(this.clippingPlanes,Ne),E=ve.get(M,L.length),E.init(),L.push(E),this.info.render.frame++,He.enabled===!0&&He.isPresenting===!0){let X=N.xr.getDepthSensingMesh();if(X!==null)Pn(X,_,-1/0,N.sortObjects)}if(Pn(M,_,0,N.sortObjects),E.finish(),U!==null)U.updateLights(I.state.lightsArray);if(N.sortObjects===!0)E.sort(De,mt);if(st=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,st)Se.addToRenderList(E,M);if(this.info.autoReset===!0)this.info.reset();if(xe===!0)Y.beginShadows();let x=I.state.shadowsArray;if(te.render(x,M,_),xe===!0)Y.endShadows();if((T&&w.hasRenderPass())===!1){let X=E.opaque,B=E.transmissive;if(I.setupLights(),_.isArrayCamera){let W=_.cameras;if(B.length>0)for(let ue=0,Te=W.length;ue<Te;ue++){let pe=W[ue];Fs(X,B,M,pe)}if(st)Se.render(M);for(let ue=0,Te=W.length;ue<Te;ue++){let pe=W[ue];Us(E,M,pe,pe.viewport)}}else{if(B.length>0)Fs(X,B,M,_);if(st)Se.render(M);Us(E,M,_)}}if(H!==null&&j===0)nt.updateMultisampleRenderTarget(H),nt.updateRenderTargetMipmap(H);if(T)w.end(N);if(M.isScene===!0)M.onAfterRender(N,M,_);if(Me.resetDefaultState(),de=-1,Z=null,g.pop(),g.length>0){if(I=g[g.length-1],nt.setTextureUnits(I.state.textureUnits),xe===!0)Y.setGlobalState(N.clippingPlanes,I.state.camera)}else I=null;if(L.pop(),L.length>0)E=L[L.length-1];else E=null;if(U!==null)U.renderEnd()};function Pn(M,_,b,T){if(M.visible===!1)return;if(M.layers.test(_.layers)){if(M.isGroup)b=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(_)}else if(M.isLight){if(I.pushLight(M),M.castShadow)I.pushShadow(M)}else if(M.isSprite){let X=_.isArrayCamera?ge:ne;if(!M.frustumCulled||M.intersectsFrustum(X)){if(T)Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);let B=V.update(M),W=M.material;if(W.visible)E.push(M,B,W,b,Ve.z,null,_)}}else if(M.isMesh||M.isLine||M.isPoints){let X=_.isArrayCamera?ge:ne;if(!M.frustumCulled||M.intersectsFrustum(X)){let B=V.update(M),W=M.material;if(T){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();Ve.copy(M.boundingSphere.center)}else{if(B.boundingSphere===null)B.computeBoundingSphere();Ve.copy(B.boundingSphere.center)}Ve.applyMatrix4(M.matrixWorld).applyMatrix4(_e)}if(Array.isArray(W)){let ue=B.groups;for(let Te=0,pe=ue.length;Te<pe;Te++){let le=ue[Te],fe=W[le.materialIndex];if(fe&&fe.visible)E.push(M,B,fe,b,Ve.z,le,_)}}else if(W.visible)E.push(M,B,W,b,Ve.z,null,_)}}}let z=M.children;for(let X=0,B=z.length;X<B;X++)Pn(z[X],_,b,T)}function Us(M,_,b,T){let{opaque:x,transmissive:z,transparent:X}=M;if(I.setupLightsView(b),xe===!0)Y.setGlobalState(N.clippingPlanes,b);if(T)Ae.viewport(ie.copy(T));if(x.length>0)Zr(x,_,b);if(z.length>0)Zr(z,_,b);if(X.length>0)Zr(X,_,b);Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Fs(M,_,b,T){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[T.id]===void 0){let le=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[T.id]=new Et(1,1,{generateMipmaps:!0,type:le?Rt:Wt,minFilter:bi,samples:Math.max(4,Dt.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let z=I.state.transmissionRenderTarget[T.id],X=T.viewport||ie;z.setSize(X.z*N.transmissionResolutionScale,X.w*N.transmissionResolutionScale);let B=N.getRenderTarget(),W=N.getActiveCubeFace(),ue=N.getActiveMipmapLevel();if(N.setRenderTarget(z),N.getClearColor(re),ce=N.getClearAlpha(),ce<1)N.setClearColor(16777215,0.5);if(N.clear(),st)Se.render(b);let Te=N.toneMapping;N.toneMapping=Di;let pe=T.viewport;if(T.viewport!==void 0)T.viewport=void 0;if(I.setupLightsView(T),xe===!0)Y.setGlobalState(N.clippingPlanes,T);if(Zr(M,b,T),nt.updateMultisampleRenderTarget(z),nt.updateRenderTargetMipmap(z),lt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let fe=0,it=_.length;fe<it;fe++){let Ke=_[fe],{object:be,geometry:ot,material:Pe,group:Pt}=Ke;if(Pe.side===di&&be.layers.test(T.layers)){let $e=Pe.side;Pe.side=Nt,Pe.needsUpdate=!0,Bs(be,b,T,ot,Pe,Pt),Pe.side=$e,Pe.needsUpdate=!0,le=!0}}if(le===!0)nt.updateMultisampleRenderTarget(z),nt.updateRenderTargetMipmap(z)}if(N.setRenderTarget(B,W,ue),N.setClearColor(re,ce),pe!==void 0)T.viewport=pe;N.toneMapping=Te}function Zr(M,_,b){let T=_.isScene===!0?_.overrideMaterial:null;for(let x=0,z=M.length;x<z;x++){let X=M[x],{object:B,geometry:W,group:ue}=X,Te=X.material;if(Te.allowOverride===!0&&T!==null)Te=T;if(B.layers.test(b.layers))Bs(B,_,b,W,Te,ue)}}function Bs(M,_,b,T,x,z){if(U!==null&&x.isNodeMaterial)U.setObject(M,x);if(M.onBeforeRender(N,_,b,T,x,z),M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),x.onBeforeRender(N,_,b,T,M,z),x.transparent===!0&&x.side===di&&x.forceSinglePass===!1)x.side=Nt,x.needsUpdate=!0,N.renderBufferDirect(b,_,T,x,M,z),x.side=Hi,x.needsUpdate=!0,N.renderBufferDirect(b,_,T,x,M,z),x.side=di;else N.renderBufferDirect(b,_,T,x,M,z);M.onAfterRender(N,_,b,T,x,z)}function Os(M){let _=0;for(let b of M)if(b.texture!==null)_++;return _}function Ar(M,_,b){if(_.isScene!==!0)_=Ge;let T=Qe.get(M),x=I.state.lights,z=I.state.shadowsArray,X=x.state.version,B=oe.getParameters(M,x.state,z,_,b,I.state.lightProbeGridArray),W=oe.getProgramCacheKey(B),ue=T.programs;T.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?_.environment:null,T.fog=_.fog;let Te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(T.envMap=ft.get(M.envMap||T.environment,Te),T.envMapRotation=T.environment!==null&&M.envMap===null?_.environmentRotation:M.envMapRotation,ue===void 0)M.addEventListener("dispose",Le),ue=new Map,T.programs=ue,T.programVariants=new Map;let pe=ue.get(W);if(pe!==void 0){if(T.currentProgram===pe&&T.lightsStateVersion===X)return ji(M,B),pe}else{if(B.uniforms=oe.getUniforms(M),U!==null&&M.isNodeMaterial)U.build(M,b,B);M.onBeforeCompile(B,N),pe=oe.acquireProgram(B,W),ue.set(W,pe),T.uniforms=B.uniforms}let le=T.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)le.clippingPlanes=Y.uniform;if(ji(M,B),T.needsLights=xa(M),T.lightsStateVersion=X,T.needsLights)le.ambientLightColor.value=x.state.ambient,le.lightProbe.value=x.state.probe,le.sunLights.value=x.state.sun,le.sunLightShadows.value=x.state.sunShadow,le.directionalLights.value=x.state.directional,le.directionalLightShadows.value=x.state.directionalShadow,le.spotLights.value=x.state.spot,le.spotLightShadows.value=x.state.spotShadow,le.rectAreaLights.value=x.state.rectArea,le.ltc_1.value=x.state.rectAreaLTC1,le.ltc_2.value=x.state.rectAreaLTC2,le.pointLights.value=x.state.point,le.pointLightShadows.value=x.state.pointShadow,le.hemisphereLights.value=x.state.hemi,le.sunShadowMatrix.value=x.state.sunShadowMatrix,le.sunShadowCascade.value=x.state.sunShadowCascade,le.directionalShadowMatrix.value=x.state.directionalShadowMatrix,le.spotLightMatrix.value=x.state.spotLightMatrix,le.spotLightMap.value=x.state.spotLightMap,le.pointShadowMatrix.value=x.state.pointShadowMatrix;return T.numLightProbeGrids=Os(I.state.lightProbeGridArray),T.currentProgram=pe,T.uniformsList=null,pe}function In(M,_,b,T,x){let z=Qe.get(M),X=z.currentProgram.id+","+T+","+x,B=z.programVariants.get(X);if(B===void 0)B=Ar(M,_,b),z.programVariants.set(X,B);else z.currentProgram=B,z.uniformsList=null,z.outputColorSpace=T,z.toneMapping=x;return B}function Rr(M){if(M.uniformsList===null){let _=M.currentProgram.getUniforms();M.uniformsList=An.seqWithValue(_.seq,M.uniforms)}return M.uniformsList}function ji(M,_){let b=Qe.get(M);b.outputColorSpace=_.outputColorSpace,b.batching=_.batching,b.batchingColor=_.batchingColor,b.instancing=_.instancing,b.instancingColor=_.instancingColor,b.instancingMorph=_.instancingMorph,b.skinning=_.skinning,b.morphTargets=_.morphTargets,b.morphNormals=_.morphNormals,b.morphColors=_.morphColors,b.morphTargetsCount=_.morphTargetsCount,b.numClippingPlanes=_.numClippingPlanes,b.numIntersection=_.numClipIntersection,b.vertexAlphas=_.vertexAlphas,b.vertexTangents=_.vertexTangents,b.toneMapping=_.toneMapping}function Hl(M,_,b,T,x){if(_.isScene!==!0)_=Ge;nt.resetTextureUnits();let z=_.fog,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?_.environment:null,B=H===null?N.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:at.workingColorSpace,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ue=ft.get(T.envMap||X,W),Te=T.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pe=!!b.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),le=!!b.morphAttributes.position,fe=!!b.morphAttributes.normal,it=!!b.morphAttributes.color,Ke=Di;if(T.toneMapped){if(H===null||H.isXRRenderTarget===!0)Ke=N.toneMapping}let be=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,ot=be!==void 0?be.length:0,Pe=Qe.get(T),Pt=I.state.lights;if(xe===!0){if(Ne===!0||M!==Z){let vt=M===Z&&T.id===de;Y.setState(T,M,vt)}}let $e=!1,ci=!1;if(T.version===Pe.__version){if(Pe.needsLights&&Pe.lightsStateVersion!==Pt.state.version)$e=!0;else if(x.isBatchedMesh&&Pe.batching===!1)$e=!0;else if(!x.isBatchedMesh&&Pe.batching===!0)$e=!0;else if(x.isBatchedMesh&&Pe.batchingColor===!0&&x._colorsTexture===null)$e=!0;else if(x.isBatchedMesh&&Pe.batchingColor===!1&&x._colorsTexture!==null)$e=!0;else if(x.isInstancedMesh&&Pe.instancing===!1)$e=!0;else if(!x.isInstancedMesh&&Pe.instancing===!0)$e=!0;else if(x.isSkinnedMesh&&Pe.skinning===!1)$e=!0;else if(!x.isSkinnedMesh&&Pe.skinning===!0)$e=!0;else if(x.isInstancedMesh&&Pe.instancingColor===!0&&x.instanceColor===null)$e=!0;else if(x.isInstancedMesh&&Pe.instancingColor===!1&&x.instanceColor!==null)$e=!0;else if(x.isInstancedMesh&&Pe.instancingMorph===!0&&x.morphTexture===null)$e=!0;else if(x.isInstancedMesh&&Pe.instancingMorph===!1&&x.morphTexture!==null)$e=!0;else if(Pe.envMap!==ue)$e=!0;else if(T.fog===!0&&Pe.fog!==z)$e=!0;else if(Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Y.numPlanes||Pe.numIntersection!==Y.numIntersection))$e=!0;else if(Pe.vertexAlphas!==Te)$e=!0;else if(Pe.vertexTangents!==pe)$e=!0;else if(Pe.morphTargets!==le)$e=!0;else if(Pe.morphNormals!==fe)$e=!0;else if(Pe.morphColors!==it)$e=!0;else if(Pe.morphTargetsCount!==ot)$e=!0;else if(Pe.numLightProbeGrids!==Os(I.state.lightProbeGridArray))$e=!0;else if(Pe.outputColorSpace!==B||Pe.toneMapping!==Ke)ci=!0}else $e=!0,Pe.__version=T.version;let At=Pe.currentProgram;if($e===!0||ci===!0){if(At=ci===!0?In(T,_,x,B,Ke):Ar(T,_,x),U&&T.isNodeMaterial)U.onUpdateProgram(T,At,Pe)}let Ht=!1,Ri=!1,Ci=!1,_t=At.getUniforms(),Yt=Pe.uniforms;if(Ae.useProgram(At.program))Ht=!0,Ri=!0,Ci=!0;if(T.id!==de)de=T.id,Ri=!0;if(Ht||Z!==M){if(Ae.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();_t.setValue(O,"projectionMatrix",M.projectionMatrix),_t.setValue(O,"viewMatrix",M.matrixWorldInverse);let Ut=_t.map.cameraPosition;if(Ut!==void 0)Ut.setValue(O,ke.setFromMatrixPosition(M.matrixWorld));if(Dt.logarithmicDepthBuffer)_t.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)_t.setValue(O,"isOrthographic",M.isOrthographicCamera===!0);if(Z!==M)Z=M,Ri=!0,Ci=!0}if(Pe.needsLights){if(Pt.state.sunShadowMap.length>0)_t.setValue(O,"sunShadowMap",Pt.state.sunShadowMap,nt);if(Pt.state.directionalShadowMap.length>0)_t.setValue(O,"directionalShadowMap",Pt.state.directionalShadowMap,nt);if(Pt.state.spotShadowMap.length>0)_t.setValue(O,"spotShadowMap",Pt.state.spotShadowMap,nt);if(Pt.state.pointShadowMap.length>0)_t.setValue(O,"pointShadowMap",Pt.state.pointShadowMap,nt)}if(x.isSkinnedMesh){_t.setOptional(O,x,"bindMatrix"),_t.setOptional(O,x,"bindMatrixInverse");let vt=x.skeleton;if(vt){if(vt.boneTexture===null)vt.computeBoneTexture();_t.setValue(O,"boneTexture",vt.boneTexture,nt)}}if(x.isBatchedMesh){if(_t.setOptional(O,x,"batchingTexture"),_t.setValue(O,"batchingTexture",x._matricesTexture,nt),_t.setOptional(O,x,"batchingIdTexture"),_t.setValue(O,"batchingIdTexture",x._indirectTexture,nt),_t.setOptional(O,x,"batchingColorTexture"),x._colorsTexture!==null)_t.setValue(O,"batchingColorTexture",x._colorsTexture,nt)}let Si=b.morphAttributes;if(Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)F.update(x,b,At);if(Ri||Pe.receiveShadow!==x.receiveShadow)Pe.receiveShadow=x.receiveShadow,_t.setValue(O,"receiveShadow",x.receiveShadow);if((T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial)&&T.envMap===null&&_.environment!==null)Yt.envMapIntensity.value=_.environmentIntensity;if(Yt.dfgLUT!==void 0)Yt.dfgLUT.value=Pm();if(Ri){if(_t.setValue(O,"toneMappingExposure",N.toneMappingExposure),Pe.needsLights)ga(Yt,Ci);if(z&&T.fog===!0)se.refreshFogUniforms(Yt,z);if(se.refreshMaterialUniforms(Yt,T,Je,Ye,I.state.transmissionRenderTarget[M.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let vt=R,Ut=0;for(let We of I.state.lightProbeGridArray){if(We.texture===null)continue;vt.textures[Ut]=We.texture,vt.min[Ut]=We.boundingBox.min,vt.max[Ut]=We.boundingBox.max,vt.resolution[Ut]=We.resolution,Ut++}for(let We in vt)vt[We].length=Ut;Yt.probesSH.value=vt.textures,Yt.probesMin.value=vt.min,Yt.probesMax.value=vt.max,Yt.probesResolution.value=vt.resolution}An.upload(O,Rr(Pe),Yt,nt)}if(T.isShaderMaterial&&T.uniformsNeedUpdate===!0)An.upload(O,Rr(Pe),Yt,nt),T.uniformsNeedUpdate=!1;if(T.isSpriteMaterial)_t.setValue(O,"center",x.center);if(_t.setValue(O,"modelViewMatrix",x.modelViewMatrix),_t.setValue(O,"normalMatrix",x.normalMatrix),_t.setValue(O,"modelMatrix",x.matrixWorld),T.uniformsGroups!==void 0){let vt=T.uniformsGroups;for(let Ut=0,We=vt.length;Ut<We;Ut++){let Mt=vt[Ut];Re.update(Mt,At),Re.bind(Mt,At)}}return At}function ga(M,_){M.ambientLightColor.needsUpdate=_,M.lightProbe.needsUpdate=_,M.sunLights.needsUpdate=_,M.sunLightShadows.needsUpdate=_,M.directionalLights.needsUpdate=_,M.directionalLightShadows.needsUpdate=_,M.pointLights.needsUpdate=_,M.pointLightShadows.needsUpdate=_,M.spotLights.needsUpdate=_,M.spotLightShadows.needsUpdate=_,M.rectAreaLights.needsUpdate=_,M.hemisphereLights.needsUpdate=_}function xa(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,_,b){let T=Qe.get(M);if(T.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,T.__autoAllocateDepthBuffer===!1)T.__useRenderToTexture=!1;Qe.get(M.texture).__webglTexture=_,Qe.get(M.depthTexture).__webglTexture=T.__autoAllocateDepthBuffer?void 0:b,T.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,_){let b=Qe.get(M);b.__webglFramebuffer=_,b.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(M,_=0,b=0){H=M,K=_,j=b;let T=null,x=!1,z=!1;if(M){let B=Qe.get(M);if(B.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(O.FRAMEBUFFER,B.__webglFramebuffer),ie.copy(M.viewport),ae.copy(M.scissor),ye=M.scissorTest,Ae.viewport(ie),Ae.scissor(ae),Ae.setScissorTest(ye),de=-1;return}else if(B.__webglFramebuffer===void 0)nt.setupRenderTarget(M);else if(B.__hasExternalTextures)nt.rebindTextures(M,Qe.get(M.texture).__webglTexture,Qe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Te=M.depthTexture;if(B.__boundDepthTexture!==Te){if(Te!==null&&Qe.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(M)}}let W=M.texture;if(W.isData3DTexture||W.isDataArrayTexture||W.isCompressedArrayTexture)z=!0;let ue=Qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(ue[_]))T=ue[_][b];else T=ue[_];x=!0}else if(M.samples>0&&nt.useMultisampledRTT(M)===!1)T=Qe.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(ue))T=ue[b];else T=ue;ie.copy(M.viewport),ae.copy(M.scissor),ye=M.scissorTest}else ie.copy(et).multiplyScalar(Je).floor(),ae.copy(tt).multiplyScalar(Je).floor(),ye=dt;if(b!==0)T=G;if(Ae.bindFramebuffer(O.FRAMEBUFFER,T))Ae.drawBuffers(M,T);if(Ae.viewport(ie),Ae.scissor(ae),Ae.setScissorTest(ye),x){let B=Qe.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+_,B.__webglTexture,b)}else if(z){let B=_;for(let W=0;W<M.textures.length;W++){let ue=Qe.get(M.textures[W]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+W,ue.__webglTexture,b,B)}}else if(M!==null&&b!==0){let B=Qe.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,B.__webglTexture,b)}de=-1};function _a(M){let _=Qe.get(M);if(_.__readFormat!==M.format||_.__readType!==M.type)_.__readFormat=M.format,_.__readType=M.type,_.__formatReadable=Dt.textureFormatReadable(M.format),_.__typeReadable=Dt.textureTypeReadable(M.type);return _}if(this.readRenderTargetPixels=function(M,_,b,T,x,z,X,B=0){if(!(M&&M.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=Qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&X!==void 0){if(W=W[X],Array.isArray(W))W=W[0]}if(W){Ae.bindFramebuffer(O.FRAMEBUFFER,W);try{let ue=M.textures[B],{format:Te,type:pe}=ue;if(M.textures.length>1)O.readBuffer(O.COLOR_ATTACHMENT0+B);let le=_a(ue);if(le.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(le.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(_>=0&&_<=M.width-T&&(b>=0&&b<=M.height-x))O.readPixels(_,b,T,x,me.convert(Te),me.convert(pe),z)}finally{let ue=H!==null?Qe.get(H).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(M,_,b,T,x,z,X,B=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=Qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&X!==void 0){if(W=W[X],Array.isArray(W))W=W[0]}if(W)if(_>=0&&_<=M.width-T&&(b>=0&&b<=M.height-x)){Ae.bindFramebuffer(O.FRAMEBUFFER,W);let ue=M.textures[B],{format:Te,type:pe}=ue;if(M.textures.length>1)O.readBuffer(O.COLOR_ATTACHMENT0+B);let le=_a(ue);if(le.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(le.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,fe),O.bufferData(O.PIXEL_PACK_BUFFER,z.byteLength,O.STREAM_READ),O.readPixels(_,b,T,x,me.convert(Te),me.convert(pe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let it=H!==null?Qe.get(H).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,it);let Ke=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Oh(O,Ke,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,fe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,z),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(fe),O.deleteSync(Ke),z}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,_=null,b=0){let T=Math.pow(2,-b),x=Math.floor(M.image.width*T),z=Math.floor(M.image.height*T),X=_!==null?_.x:0,B=_!==null?_.y:0;nt.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,b,0,0,X,B,x,z),Ae.unbindTexture()},this.copyTextureToTexture=function(M,_,b=null,T=null,x=0,z=0){let X,B,W,ue,Te,pe,le,fe,it,Ke=M.isCompressedTexture?M.mipmaps[z]:M.image;if(b!==null)X=b.max.x-b.min.x,B=b.max.y-b.min.y,W=b.isBox3?b.max.z-b.min.z:1,ue=b.min.x,Te=b.min.y,pe=b.isBox3?b.min.z:0;else{let _t=Math.pow(2,-x);if(X=Math.floor(M.width*_t),B=Math.floor(M.height*_t),M.isDataArrayTexture)W=Ke.depth;else if(M.isData3DTexture)W=Math.floor(Ke.depth*_t);else W=1;ue=0,Te=0,pe=0}if(T!==null)le=T.x,fe=T.y,it=T.z;else le=0,fe=0,it=0;let be=me.convert(_.format),ot=me.convert(_.type),Pe;if(_.isData3DTexture)nt.setTexture3D(_,0),Pe=O.TEXTURE_3D;else if(_.isDataArrayTexture||_.isCompressedArrayTexture)nt.setTexture2DArray(_,0),Pe=O.TEXTURE_2D_ARRAY;else nt.setTexture2D(_,0),Pe=O.TEXTURE_2D;Ae.activeTexture(O.TEXTURE0),Ae.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,_.flipY),Ae.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),Ae.pixelStorei(O.UNPACK_ALIGNMENT,_.unpackAlignment);let Pt=Ae.getParameter(O.UNPACK_ROW_LENGTH),$e=Ae.getParameter(O.UNPACK_IMAGE_HEIGHT),ci=Ae.getParameter(O.UNPACK_SKIP_PIXELS),At=Ae.getParameter(O.UNPACK_SKIP_ROWS),Ht=Ae.getParameter(O.UNPACK_SKIP_IMAGES);Ae.pixelStorei(O.UNPACK_ROW_LENGTH,Ke.width),Ae.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ke.height),Ae.pixelStorei(O.UNPACK_SKIP_PIXELS,ue),Ae.pixelStorei(O.UNPACK_SKIP_ROWS,Te),Ae.pixelStorei(O.UNPACK_SKIP_IMAGES,pe);let Ri=M.isDataArrayTexture||M.isData3DTexture,Ci=_.isDataArrayTexture||_.isData3DTexture;if(M.isDepthTexture){let _t=Qe.get(M),Yt=Qe.get(_),Si=Qe.get(_t.__renderTarget),vt=Qe.get(Yt.__renderTarget);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,Si.__webglFramebuffer),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ut=0;Ut<W;Ut++){if(Ri)O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qe.get(M).__webglTexture,x,pe+Ut),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qe.get(_).__webglTexture,z,it+Ut);O.blitFramebuffer(ue,Te,ue+X,Te+B,le,fe,le+X,fe+B,O.DEPTH_BUFFER_BIT,O.NEAREST)}Ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(x!==0||M.isRenderTargetTexture||Qe.has(M)){let _t=Qe.get(M),Yt=Qe.get(_);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,ee),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let Si=0;Si<W;Si++){if(Ri)O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_t.__webglTexture,x,pe+Si);else O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_t.__webglTexture,x);if(Ci)O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.__webglTexture,z,it+Si);else O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Yt.__webglTexture,z);if(x!==0)O.blitFramebuffer(ue,Te,ue+X,Te+B,le,fe,le+X,fe+B,O.COLOR_BUFFER_BIT,O.NEAREST);else if(Ci)O.copyTexSubImage3D(Pe,z,le,fe,it+Si,ue,Te,X,B);else O.copyTexSubImage2D(Pe,z,le,fe,ue,Te,X,B)}Ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Ci)if(M.isDataTexture||M.isData3DTexture)O.texSubImage3D(Pe,z,le,fe,it,X,B,W,be,ot,Ke.data);else if(_.isCompressedArrayTexture)O.compressedTexSubImage3D(Pe,z,le,fe,it,Ke.width,Ke.height,W,be,Ke.data);else O.texSubImage3D(Pe,z,le,fe,it,X,B,W,be,ot,Ke);else if(M.isDataTexture)O.texSubImage2D(O.TEXTURE_2D,z,le,fe,X,B,be,ot,Ke.data);else if(M.isCompressedTexture)O.compressedTexSubImage2D(O.TEXTURE_2D,z,le,fe,Ke.width,Ke.height,be,Ke.data);else O.texSubImage2D(O.TEXTURE_2D,z,le,fe,X,B,be,ot,Ke);if(Ae.pixelStorei(O.UNPACK_ROW_LENGTH,Pt),Ae.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$e),Ae.pixelStorei(O.UNPACK_SKIP_PIXELS,ci),Ae.pixelStorei(O.UNPACK_SKIP_ROWS,At),Ae.pixelStorei(O.UNPACK_SKIP_IMAGES,Ht),z===0&&_.generateMipmaps===!0&&_.mipmapsAutoUpdate===!0)O.generateMipmap(Pe);Ae.unbindTexture()},this.initRenderTarget=function(M){if(Qe.get(M).__webglFramebuffer===void 0)nt.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)nt.setTextureCube(M,0);else if(M.isData3DTexture)nt.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)nt.setTexture2DArray(M,0);else nt.setTexture2D(M,0);Ae.unbindTexture()},this.resetState=function(){K=0,j=0,H=null,Ae.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}var Is={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var c_=new wr(-1,1,1,-1,0,1);class Im extends Xe{constructor(){super();this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}var h_=new Im;class Rn{constructor(e){this._mesh=new je(h_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,c_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $c extends $i{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Ki.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new Rn(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Gl extends $i{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class jc extends $i{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class eh{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new q);this._width=i.width,this._height=i.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $c(Is),this.copyPass.material.blending=ki,this.timer=new ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,n=this.passes.length;r<n;r++){let s=this.passes[r];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Gl!==void 0){if(s instanceof Gl)i=!0;else if(s instanceof jc)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class th extends $i{constructor(e,t,i=null,r=null,n=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new he}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let n,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(n);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=r}}var Lm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Cn extends $i{constructor(e,t=1,i,r){super();this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new q(e.x,e.y):new q(256,256),this.clearColor=new he(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(n,s,{type:Rt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let u=new Et(n,s,{type:Rt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Et(n,s,{type:Rt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),n=Math.round(n/2),s=Math.round(s/2)}let o=Lm;this.highPassUniforms=Ki.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ki.clone(Is.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:Is.vertexShader,fragmentShader:Is.fragmentShader,premultipliedAlpha:!0,blending:lr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new he,this._oldClearAlpha=1,this._basic=new Bt,this._fsQuad=new Rn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,r),this.renderTargetsVertical[n].setSize(i,r),this.separableBlurMaterials[n].uniforms.invSize.value=new q(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),n)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=Cn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Cn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let r=[],n=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;r.push((s*o+(s+1)*a)/l),n.push(l)}return new wt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new q(0.5,0.5)},direction:{value:new q(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Cn.BlurDirectionX=new q(1,0);Cn.BlurDirectionY=new q(0,1);var pa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ih extends $i{constructor(){super();this.isOutputPass=!0,this.uniforms=Ki.clone(pa.uniforms),this.material=new Sn({name:pa.name,uniforms:this.uniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader}),this._fsQuad=new Rn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===pt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Dn)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Nn)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Un)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Dr)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Bn)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===On)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===Fn)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class rh extends hn{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Li;e.deleteAttribute("uv");let t=new jt({side:Nt}),i=new jt,r=new Er(16777215,900,28,2);r.position.set(0.418,16.199,0.3),this.add(r);let n=new je(e,t);n.position.set(-0.757,13.219,0.717),n.scale.set(31.713,28.305,28.591),this.add(n);let s=new Vo(e,i,6),o=new ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new je(e,Ls(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new je(e,Ls(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new je(e,Ls(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let u=new je(e,Ls(43));u.position.set(-0.462,8.89,14.52),u.scale.set(4.38,5.441,0.088),this.add(u);let f=new je(e,Ls(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,0.1),this.add(f);let h=new je(e,Ls(100));h.position.set(0,20,0),h.scale.set(1,0.1,1),this.add(h)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function Ls(e){return new ra({color:0,emissive:16777215,emissiveIntensity:e})}class ma extends je{constructor(e,t={}){super(e);this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,r=t.color!==void 0?new he(t.color):new he(8355711),n=t.textureWidth||512,s=t.textureHeight||512,o=t.clipBias||0,a=t.shader||ma.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,c=new Ei,u=new P,f=new P,h=new P,d=new qe,v=new P(0,0,-1),S=new xt,p=new P,m=new P,A=new xt,R=new qe,E=new Et(n,s,{samples:l,type:Rt}),I=new wt({name:a.name!==void 0?a.name:"unspecified",uniforms:Ki.clone(a.uniforms),fragmentShader:a.fragmentShader,vertexShader:a.vertexShader});I.uniforms.tDiffuse.value=E.texture,I.uniforms.color.value=r,I.uniforms.textureMatrix.value=R,this.material=I,this.onBeforeRender=function(L,g,w){let N=this.getReflectionCamera(w);if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(w.matrixWorld),d.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(d),p.subVectors(f,h),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),d.extractRotation(w.matrixWorld),v.set(0,0,-1),v.applyMatrix4(d),v.add(h),m.subVectors(f,v),m.reflect(u).negate(),m.add(f),N.position.copy(p),N.up.set(0,1,0),N.up.applyMatrix4(d),N.up.reflect(u),N.lookAt(m),N.far=w.far,N.updateMatrixWorld(),N.projectionMatrix.copy(w.projectionMatrix),N.projectionMatrix.elements[8]*=-1,N.projectionMatrix.elements[12]*=-1,R.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),R.multiply(N.projectionMatrix),R.multiply(N.matrixWorldInverse),R.multiply(i.matrixWorld),c.setFromNormalAndCoplanarPoint(u,f),c.applyMatrix4(N.matrixWorldInverse),S.set(c.normal.x,c.normal.y,c.normal.z,c.constant);let U=N.projectionMatrix;if(N.isOrthographicCamera)A.x=(Math.sign(S.x)+U.elements[8])/U.elements[0],A.y=(Math.sign(S.y)+U.elements[9])/U.elements[5],A.z=-w.far,A.w=1;else A.x=(Math.sign(S.x)+U.elements[8])/U.elements[0],A.y=(Math.sign(S.y)+U.elements[9])/U.elements[5],A.z=-1,A.w=(1+U.elements[10])/U.elements[14];if(S.multiplyScalar(2/S.dot(A)),U.elements[2]=S.x,U.elements[6]=S.y,N.isOrthographicCamera)U.elements[10]=S.z-o,U.elements[14]=S.w-1;else U.elements[10]=S.z+1-o,U.elements[14]=S.w;i.visible=!1;let G=L.getRenderTarget(),ee=L.xr.enabled,D=L.shadowMap.autoUpdate;if(L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(E),L.state.buffers.depth.setMask(!0),L.autoClear===!1)L.clear();L.render(g,N),L.xr.enabled=ee,L.shadowMap.autoUpdate=D,L.setRenderTarget(G);let K=w.viewport;if(K!==void 0)L.state.viewport(K);i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()},this.getReflectionCamera=function(L){let g=this._reflectionCameras.get(L);if(g===void 0)g=L.clone(),this._reflectionCameras.set(L,g);return g}}}ma.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};(function(){let e=document.documentElement,t=document.getElementById("hall"),i=document.getElementById("hallCv");if(!t||!i)return;let r=(s)=>{try{console.warn("hall",s)}catch(o){}e.classList.remove("hallon"),window.__hall=null};try{n()}catch(s){r(s)}function n(){let s=window.__hallT={t0:performance.now()},o=matchMedia("(pointer: coarse)").matches,a=/[?&]lite=1/.test(location.search),l=o||/[?&]low=1/.test(location.search),c=l?0.5:1,u=matchMedia("(prefers-reduced-motion: reduce)").matches,f=document.body,h=(_)=>document.getElementById(_),d=new zl({canvas:i,antialias:!1,powerPreference:"high-performance"});d.toneMapping=Dr,d.toneMappingExposure=1.1;let v=new hn;if(function(){let _=document.createElement("canvas");_.width=16,_.height=512;let b=_.getContext("2d"),T=b.createLinearGradient(0,0,0,512);T.addColorStop(0,"#05030d"),T.addColorStop(0.55,"#1d0b33"),T.addColorStop(0.72,"#4a1560"),T.addColorStop(1,"#10081c"),b.fillStyle=T,b.fillRect(0,0,16,512);let x=new vi(_);x.colorSpace=Ct,v.background=x}(),!l){let _=new Yr(d);v.environment=_.fromScene(new rh,0.04).texture,v.environmentIntensity=0.5}v.fog=new as(1706542,9,26);let S=new Vt(30,1.7777777777777777,0.1,60);{let _=[];for(let T=0;T<400;T++){let x=Math.random()*Math.PI*2,z=20+Math.random()*10;_.push(Math.cos(x)*z,3+Math.random()*12,-18-Math.random()*8)}let b=new Xe;b.setAttribute("position",new Be(_,3)),v.add(new ko(b,new xn({color:16777215,size:0.05,fog:!1,sizeAttenuation:!0})))}let p=null;if(l){let _=new je(new wi(60,60),new Bt({color:1444390}));_.rotation.x=-Math.PI/2,v.add(_)}else p=new ma(new wi(60,60),{textureWidth:512,textureHeight:512,color:5592422,clipBias:0.003});let m=0,A=!1;if(p){p.rotation.x=-Math.PI/2,v.add(p);let _=p.onBeforeRender;p.onBeforeRender=function(){if(A||m++%4!==0)return;_.apply(this,arguments)}}if(!l){let _=new je(new wi(60,60),new Bt({color:919066,transparent:!0,opacity:0.78,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=0.002,v.add(_)}let R={uAge:{value:-1},uAmp:{value:0.13},uC:{value:new q(0,0)},uCol:{value:new he(16732070)}};{let x=[];for(let W=-26;W<=26.000001;W+=0.5)for(let ue=-26;ue<25.999999;ue+=0.25)x.push(W,0,ue,W,0,ue+0.25),x.push(ue,0,W,ue+0.25,0,W);let z=new Xe;z.setAttribute("position",new Be(x,3));let X=new wt({transparent:!0,depthWrite:!1,uniforms:R,vertexShader:`uniform float uAge,uAmp; uniform vec2 uC; varying float vA; varying float vW;
        void main(){ vec3 p=position; float r=length(p.xz-uC); float x=r-uAge*9.0;
          float env=uAge<0.0?0.0:exp(-x*x/1.6)*exp(-uAge*.9); p.y+=.004+uAmp*env*sin(x*4.5);
          vW=env; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
          float d=length(mv.xyz); vA=1.-smoothstep(9.,26.,d); }`,fragmentShader:`uniform vec3 uCol; varying float vA; varying float vW;
        void main(){ gl_FragColor=vec4(uCol*(1.15+vW*3.),vA*(.7+.6*vW)); }`}),B=new Ii(z,X);B.frustumCulled=!1,v.add(B)}let E={uAge:{value:-1}};{let z=function(pe,le,fe,it){T.push(pe[0],0.012,pe[1],le[0],0.012,le[1]),x.push(fe,it)},X=function(pe,le,fe,it,Ke,be){let ot=pe,Pe=le,Pt=7;for(let $e=0;$e<Pt;$e++){fe+=(b()-0.5)*1.2;let ci=it/Pt,At=ot+Math.cos(fe)*ci,Ht=Pe+Math.sin(fe)*ci,Ri=Ke+$e/Pt*(1-Ke),Ci=Ke+($e+1)/Pt*(1-Ke);if(z([ot,Pe],[At,Ht],Ri,Ci),be<1&&b()<0.5&&$e>1)X(At,Ht,fe+(b()<0.5?-1:1)*(0.5+b()*0.6),it*0.4,Ci,be+1);ot=At,Pe=Ht}},_=7,b=()=>(_=_*16807%2147483647)/2147483647,T=[],x=[],B=17;for(let pe=0;pe<B;pe++)X(0,0,pe/B*Math.PI*2+b()*0.3,1+b()*1.6,0,0);let W=new Xe;W.setAttribute("position",new Be(T,3)),W.setAttribute("along",new Be(x,1));let ue=new wt({transparent:!0,depthWrite:!1,blending:lr,uniforms:E,vertexShader:"attribute float along; varying float vT; void main(){ vT=along; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uAge; varying float vT;
        void main(){ if(uAge<0.) discard; float grow=clamp(uAge/.5,0.,1.); grow=1.-pow(1.-grow,2.); if(vT>grow) discard;
          float fade=1.-smoothstep(1.6,3.8,uAge); float hot=1.-smoothstep(0.,1.,vT);
          vec3 c=mix(vec3(1.,.25,.62),vec3(1.,.9,.97),hot*.8*(1.-smoothstep(0.,1.2,uAge)));
          gl_FragColor=vec4(c*2.2*fade,1.); }`}),Te=new Ii(W,ue);Te.frustumCulled=!1,Te.name="cracks",v.add(Te),window.__cracks=Te}function I(_,b){let T=document.createElement("canvas");T.width=512*c,T.height=512*c;let x=T.getContext("2d");if(x.scale(c,c),x.fillStyle="#070418",x.fillRect(0,0,512,512),_===1)for(let X=0;X<6;X++)for(let B=0;B<4;B++){if((X+B)%3===0)continue;x.fillStyle=b,x.globalAlpha=0.3+0.1*X,x.fillRect(66+B*100,230+X*44,88,36)}if(_===2){x.strokeStyle=b,x.lineWidth=6;for(let X=1;X<6;X++)x.globalAlpha=1-X*0.14,x.beginPath(),x.arc(256,290,X*52,0,7),x.stroke()}if(_===3)x.fillStyle=b,x.fillRect(46,200,18,120),x.fillRect(448,280,18,120),x.fillStyle="#fff",x.beginPath(),x.arc(290,250,11,0,7),x.fill();x.globalAlpha=1,x.fillStyle=b,x.textAlign="center",x.font="800 40px Inter,Arial,sans-serif",x.fillText("COMING SOON",256,100);let z=new vi(T);return z.colorSpace=Ct,z.anisotropy=8,z}function L(_,b){let T=document.createElement("canvas");T.width=1024*c,T.height=256*c;let x=T.getContext("2d");x.scale(c,c),x.fillStyle="#0b0410",x.fillRect(0,0,1024,256);let z=x.createLinearGradient(0,0,0,256);z.addColorStop(0,"rgba(255,255,255,.07)"),z.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=z,x.fillRect(0,0,1024,256),x.font="900 150px Inter,Arial,sans-serif",x.textAlign="center",x.textBaseline="middle",x.shadowColor=b,x.shadowBlur=40,x.fillStyle="#fff",x.letterSpacing="18px",x.fillText(_,521,138),x.shadowBlur=18,x.fillText(_,521,138),x.strokeStyle=b,x.lineWidth=10,x.shadowBlur=24,x.strokeRect(10,10,1004,236);let X=new vi(T);return X.colorSpace=Ct,X.anisotropy=8,X}function g(_,b){let T=document.createElement("canvas");T.width=1024*c,T.height=1024*c;let x=T.getContext("2d");x.scale(c,c),x.clearRect(0,0,1024,1024),x.strokeStyle=_,x.lineWidth=26,x.shadowColor=_,x.shadowBlur=30,x.beginPath(),x.moveTo(-50,760),x.lineTo(1100,360),x.stroke(),x.lineWidth=10,x.beginPath(),x.moveTo(-50,820),x.lineTo(1100,420),x.stroke(),x.shadowBlur=0,x.fillStyle="rgba(255,255,255,.85)",x.font="900 150px Inter,Arial",x.save(),x.translate(120,330),x.rotate(-Math.PI/2),x.fillText(b,0,0),x.restore();let z=new vi(T);return z.colorSpace=Ct,z.anisotropy=8,z}function w(){let _=document.createElement("canvas");_.width=256*c,_.height=256*c;let b=_.getContext("2d");b.scale(c,c);let T=b.createRadialGradient(128,110,10,128,128,128);T.addColorStop(0,"#ff9fd0"),T.addColorStop(0.7,"#ff4fa6"),T.addColorStop(1,"#c21a72"),b.fillStyle=T,b.beginPath(),b.arc(128,128,126,0,7),b.fill(),b.fillStyle="#fff",b.font="900 74px Inter,Arial,sans-serif",b.textAlign="center",b.textBaseline="middle",b.letterSpacing="1px",b.shadowColor="rgba(120,0,60,.6)",b.shadowBlur=6,b.fillText("START",129,134);let x=new vi(_);return x.colorSpace=Ct,x.anisotropy=8,x}let N=function(){let _=document.createElement("canvas");_.width=256,_.height=256;let b=_.getContext("2d"),T=b.createLinearGradient(0,0,256,256);return T.addColorStop(0,"rgba(255,255,255,.20)"),T.addColorStop(0.35,"rgba(255,255,255,.04)"),T.addColorStop(0.36,"rgba(255,255,255,0)"),T.addColorStop(1,"rgba(255,255,255,0)"),b.fillStyle=T,b.fillRect(0,0,256,256),new vi(_)}(),k=function(){let _=document.createElement("canvas");_.width=128,_.height=128;let b=_.getContext("2d"),T=b.createRadialGradient(64,64,4,64,64,64);return T.addColorStop(0,"rgba(0,0,0,.75)"),T.addColorStop(1,"rgba(0,0,0,0)"),b.fillStyle=T,b.fillRect(0,0,128,128),new vi(_)}(),U=document.createElement("canvas");U.width=512*c,U.height=512*c;let G=U.getContext("2d");G.scale(c,c);let ee=new vi(U);ee.colorSpace=Ct,ee.anisotropy=8;let D=[];for(let _=0;_<40;_++)D.push([Math.random()*512,Math.random()*400,Math.random()*2+1,Math.random()*6]);let K=[];for(let _=0;_<9;_++)K.push([30+_*56+Math.random()*20,Math.random()*500,1.6+Math.random()*1.2,_%3]);function j(_){let b=G.createLinearGradient(0,0,0,512);b.addColorStop(0,"#060c1f"),b.addColorStop(1,"#0e1c45"),G.fillStyle=b,G.fillRect(0,0,512,512),D.forEach((z)=>{G.globalAlpha=0.35+0.35*Math.sin(_*1.5+z[3]),G.fillStyle="#8fa8ff",G.fillRect(z[0],z[1],z[2],z[2])}),G.globalAlpha=1;let T=["#c6e4ff","#43c6ff","#b6ff3c"];K.forEach((z)=>{let X=(z[1]+_*55*z[2])%540-20;G.fillStyle=T[z[3]],G.globalAlpha=0.55,G.fillRect(z[0],X-22,3,22),G.globalAlpha=0.9,G.fillRect(z[0]-4,X,11,11)}),G.globalAlpha=1,G.fillStyle="#16264f",G.fillRect(0,452,512,60),G.fillStyle="#4b6fb5",G.fillRect(0,450,512,3);let x=256+Math.sin(_*0.8)*150;if(G.fillStyle="#e0425a",G.fillRect(x-17,430,34,20),G.fillStyle="#ffd1d8",G.fillRect(x-6,420,12,12),G.textAlign="center",G.font="900 70px Inter,Arial,sans-serif",G.fillStyle="#ff7ac2",!l)G.shadowColor="#ff2e93",G.shadowBlur=18;if(G.fillText("READY?",256,200),G.shadowBlur=0,G.font="600 26px Inter,Arial,sans-serif",G.fillStyle="#c9d6ff",G.fillText("Drag to run. Don't get hit.",256,250),Math.floor(_*1.6)%2===0)G.font="800 28px Inter,Arial,sans-serif",G.fillStyle="#ff9fd0",G.fillText("PRESS START",256,312);ee.needsUpdate=!0}j(0);let H=function(){let _=document.createElement("canvas");_.width=_.height=64;let b=_.getContext("2d"),T=b.createRadialGradient(32,32,0,32,32,32);return T.addColorStop(0,"rgba(255,255,255,.9)"),T.addColorStop(1,"rgba(255,255,255,0)"),b.fillStyle=T,b.fillRect(0,0,64,64),new vi(_)}(),de={w:0.74,rough:0.38,metal:0.6,pts:[[-0.42,0],[0.3,0],[0.3,0.62],[0.44,0.66],[0.44,0.74],[0.22,0.94],[0.12,1.56],[0.24,1.58],[0.24,1.95],[-0.2,1.97],[-0.42,1.7]],scr:[[0.21,0.95],[0.12,1.55]],bez:[[0.215,0.9],[0.115,1.6],0.7],mq:[[0.245,1.6],[0.245,1.94],0.72],deck:[[0.44,0.745],[0.22,0.945]],stops:[1708080,722708,722708],neon:16732070};function Z(_,b,T,x,z){let X=b[0]-_[0],B=b[1]-_[1],W=Math.hypot(X,B),ue=B/W,Te=-X/W,pe=new je(new wi(T,W),z);return pe.rotation.x=-Math.atan2(Te,ue),pe.position.set(0,(_[1]+b[1])/2+Te*x,(_[0]+b[0])/2+ue*x),pe.userData={len:W,nz:ue,ny:Te},pe}let ie=(_,b)=>new Bt({color:new he(_).multiplyScalar(b),toneMapped:!1}),ae=1,ye=null,re={1:{stops:[2767516,1516144,593194],rough:0.28,metal:0.4,neon:16732070,door:"chrome",paint:["#2a3a9c","#0c1236"],stripe:"#ff4fa6",grille:"#ff4fa6"},2:{stops:[14690950,10098016,3934764],rough:0.22,metal:0.3,neon:16752592,glow:16727968,door:"chrome",paint:["#e02a86","#6d0f46"],stripe:"#ffffff",grille:"#ffffff"},3:{stops:[1711138,921363,328967],rough:0.3,metal:0.7,neon:3729663,door:"black",paint:["#1a1c22","#08090c"],stripe:"#38e8ff",grille:"#38e8ff"},5:{stops:[1010531,608064,202778],rough:0.28,metal:0.4,neon:2868384,door:"chrome",paint:["#0f6b63","#04201f"],stripe:"#2bc4a0",grille:"#2bc4a0"},4:{stops:[4200554,2755914,918560],rough:0.3,metal:0.45,neon:16738877,door:"chrome",paint:["#40186a","#12062a"],stripe:"#ff6a3d",grille:"#ff4fa6"}};function ce(_,b,T,x,z,X){_.beginPath(),_.moveTo(b+X,T),_.arcTo(b+x,T,b+x,T+z,X),_.arcTo(b+x,T+z,b,T+z,X),_.arcTo(b,T+z,b,T,X),_.arcTo(b,T,b+x,T,X),_.closePath()}function Fe(_,b,T,x,z,X){let B=_.createLinearGradient(b,T,b,T+z);B.addColorStop(0,X[0]),B.addColorStop(0.5,X[1]),B.addColorStop(1,X[2]),_.fillStyle=B,_.fillRect(b,T,x,z);for(let W=0;W<z;W+=2)_.fillStyle=Math.random()<0.5?"#fff":"#000",_.globalAlpha=0.03+Math.random()*0.07,_.fillRect(b,T+W,x,1);_.globalAlpha=1}function Ye(_,b,T,x){let z=_.createRadialGradient(b-x*0.3,T-x*0.3,1,b,T,x);z.addColorStop(0,"#fff"),z.addColorStop(1,"#4a4d5a"),_.fillStyle=z,_.beginPath(),_.arc(b,T,x,0,7),_.fill(),_.strokeStyle="#1a1b22",_.lineWidth=x*0.3,_.beginPath(),_.moveTo(b-x*0.6,T-x*0.3),_.lineTo(b+x*0.6,T+x*0.3),_.stroke()}function Je(){let T="#"+new he(ye.neon).getHexString(),x=()=>{let be=document.createElement("canvas");return be.width=800*c,be.height=740*c,be},z=x(),X=x(),B=z.getContext("2d"),W=X.getContext("2d");B.scale(c,c),W.scale(c,c),W.fillStyle="#000",W.fillRect(0,0,800,740);let ue=B.createLinearGradient(0,0,0,740);if(ue.addColorStop(0,ye.paint[0]),ue.addColorStop(1,ye.paint[1]),B.fillStyle=ue,B.fillRect(0,0,800,740),ae===3)for(let be=0;be<740;be+=8)for(let ot=0;ot<800;ot+=8)B.fillStyle=(be+ot)/8%2?"rgba(255,255,255,.035)":"rgba(0,0,0,.25)",B.fillRect(ot,be,8,8);[45,595].forEach((be)=>{B.fillStyle="#06070a",ce(B,be,70,160,330,16),B.fill();for(let ot=92;ot<390;ot+=16)for(let Pe=be+18;Pe<be+150;Pe+=16)B.fillStyle="#262a38",B.beginPath(),B.arc(Pe,ot,4.2,0,7),B.fill(),B.fillStyle="#05060a",B.beginPath(),B.arc(Pe+1,ot+1,2.6,0,7),B.fill();B.strokeStyle="#3a3e50",B.lineWidth=4,ce(B,be,70,160,330,16),B.stroke(),W.strokeStyle=ye.grille,W.globalAlpha=0.55,W.lineWidth=5,ce(W,be-4,66,168,338,18),W.stroke(),W.globalAlpha=1});let Te=ye.door==="chrome"?["#c9cee2","#6c7390","#b3b9d0"]:["#33353f","#0e0f14","#272932"];B.save(),B.shadowColor="rgba(0,0,0,.7)",B.shadowBlur=24,B.shadowOffsetY=8,B.fillStyle="#000",ce(B,232,52,336,432,24),B.fill(),B.restore(),B.save(),ce(B,232,52,336,432,24),B.clip(),Fe(B,232,52,336,432,Te),B.restore(),B.strokeStyle=ye.door==="chrome"?"#5b6076":"#4b4e5c",B.lineWidth=4,ce(B,232,52,336,432,24),B.stroke(),[[252,72],[548,72],[252,464],[548,464]].forEach((be)=>Ye(B,be[0],be[1],8)),B.fillStyle="#0a0b10",ce(B,262,88,276,190,14),B.fill(),B.strokeStyle="#000",B.lineWidth=3,B.stroke(),[334,466].forEach((be)=>{B.fillStyle="#15171f",ce(B,be-44,104,88,156,12),B.fill(),B.strokeStyle=ye.door==="chrome"?"#c9cee0":"#555a6c",B.lineWidth=5,B.stroke(),B.fillStyle="#000",ce(B,be-8,130,16,80,6),B.fill(),W.fillStyle=T,W.shadowColor=T,W.shadowBlur=18,ce(W,be-5,134,10,72,4),W.fill(),W.shadowBlur=0,W.strokeStyle=T,W.globalAlpha=0.75,W.lineWidth=5,ce(W,be-48,100,96,164,14),W.stroke(),W.globalAlpha=1,B.fillStyle="#9aa0b8",B.font="800 20px Inter,Arial,sans-serif",B.textAlign="center",B.fillText("25¢",be,246)}),B.fillStyle="#06070b",ce(B,276,296,248,44,8),B.fill(),B.font="800 22px Inter,Arial,sans-serif",B.letterSpacing="6px",B.textAlign="center",B.textBaseline="middle",B.fillStyle=T,B.fillText("INSERT COIN",402,319),W.font=B.font,W.letterSpacing="6px",W.textAlign="center",W.textBaseline="middle",W.fillStyle=T,W.globalAlpha=0.9,W.fillText("INSERT COIN",402,319),W.globalAlpha=1,B.letterSpacing="0px",B.textBaseline="alphabetic",B.fillStyle="#0b0c11",ce(B,296,364,208,96,12),B.fill();let pe=B.createLinearGradient(0,380,0,450);pe.addColorStop(0,"#3a3e50"),pe.addColorStop(1,"#14151c"),B.fillStyle=pe,ce(B,312,380,176,66,8),B.fill(),B.fillStyle="#7b8196",B.font="700 16px Inter,Arial,sans-serif",B.textAlign="center",B.fillText("COIN RETURN",400,418),W.fillStyle=T,W.shadowColor=T,W.shadowBlur=14,W.beginPath(),W.arc(400,352,5,0,7),W.fill(),W.shadowBlur=0,B.fillStyle=ye.stripe,B.globalAlpha=0.95,B.fillRect(0,520,800,14),B.globalAlpha=0.5,B.fillRect(0,542,800,5),B.globalAlpha=1,W.fillStyle=ye.stripe,W.globalAlpha=0.55,W.fillRect(0,520,800,14),W.globalAlpha=1,Fe(B,0,568,800,172,ye.door==="chrome"?["#aeb3c8","#5f6580","#8b91aa"]:["#2b2d37","#0d0e12","#1d1f27"]),[[40,600],[760,600],[40,706],[760,706]].forEach((be)=>Ye(B,be[0],be[1],9));let le=B.createLinearGradient(0,0,0,60);le.addColorStop(0,"rgba(0,0,0,.65)"),le.addColorStop(1,"rgba(0,0,0,0)"),B.fillStyle=le,B.fillRect(0,0,800,60);let fe=B.createLinearGradient(0,700,0,740);fe.addColorStop(0,"rgba(0,0,0,0)"),fe.addColorStop(1,"rgba(0,0,0,.6)"),B.fillStyle=fe,B.fillRect(0,700,800,40);let it=new vi(z);it.colorSpace=Ct,it.anisotropy=8;let Ke=new vi(X);return Ke.colorSpace=Ct,{map:it,emi:Ke}}function De(_){let b=1024*c,T=document.createElement("canvas");T.width=T.height=b;let x=T.getContext("2d"),z=b/0.86,X=b/1.97;x.setTransform(z,0,0,-X,0,b);let B=(pe,le,fe,it,Ke)=>{if(x.fillStyle=it,x.beginPath(),x.arc(pe,le,fe,0,7),x.fill(),x.beginPath(),x.moveTo(pe-fe*0.96,le+fe*0.28),x.lineTo(pe,le+fe*2.5),x.lineTo(pe+fe*0.96,le+fe*0.28),x.fill(),Ke)x.globalAlpha=0.35,x.fillRect(pe-fe*0.12,le+fe*2.6,fe*0.24,Ke),x.globalAlpha=1},W=(pe,le,fe,it,Ke,be,ot)=>{if(x.strokeStyle=be,x.lineWidth=Ke,x.lineCap="round",ot)x.shadowColor=be,x.shadowBlur=ot;x.beginPath(),x.moveTo(pe,le),x.lineTo(fe,it),x.stroke(),x.shadowBlur=0},ue=x.createLinearGradient(0,0,0,1.97);if(ue.addColorStop(0,ye.paint[1]),ue.addColorStop(1,ye.paint[0]),x.fillStyle=ue,x.fillRect(0,0,0.86,1.97),ae===1||ae===5)x.save(),x.shadowColor=_,x.shadowBlur=18,x.fillStyle=_,x.beginPath(),x.moveTo(0,0.3),x.lineTo(0.86,1.12),x.lineTo(0.86,1.3),x.lineTo(0,0.52),x.fill(),x.restore(),x.fillStyle="#fff",x.beginPath(),x.moveTo(0,0.55),x.lineTo(0.86,1.33),x.lineTo(0.86,1.345),x.lineTo(0,0.565),x.fill(),W(0,0.22,0.86,1,0.035,"#43c6ff",14),W(0,0.12,0.86,0.9,0.012,"#fff",0),[[0.12,1.74,0.022,"#c6e4ff",0.18],[0.3,1.55,0.03,"#43c6ff",0.26],[0.5,1.82,0.02,"#b6ff3c",0.14],[0.68,1.6,0.028,"#c6e4ff",0.22],[0.2,1.3,0.018,"#b6ff3c",0.1],[0.74,1.9,0.016,"#43c6ff",0.08]].forEach((pe)=>B(pe[0],pe[1],pe[2],pe[3],pe[4]));else if(ae===2)x.fillStyle="#fff",x.beginPath(),x.moveTo(0,0.12),x.lineTo(0.86,0.98),x.lineTo(0.86,1.22),x.lineTo(0,0.36),x.fill(),x.fillStyle="#0b0410",x.beginPath(),x.moveTo(0,0.4),x.lineTo(0.86,1.26),x.lineTo(0.86,1.32),x.lineTo(0,0.46),x.fill(),x.fillStyle="#fff",x.beginPath(),x.moveTo(0,0.5),x.lineTo(0.86,1.36),x.lineTo(0.86,1.4),x.lineTo(0,0.54),x.fill(),B(0.43,1.42,0.09,"#ffffff",0),B(0.43,1.42,0.05,"#c4156f",0),B(0.16,1.72,0.025,"#fff",0.2),B(0.7,1.62,0.03,"#fff",0.24);else if(ae===3){for(let le=0;le<1.97;le+=0.03)for(let fe=0;fe<0.86;fe+=0.03)x.fillStyle=Math.round((le+fe)/0.03)%2?"rgba(255,255,255,.045)":"rgba(0,0,0,.32)",x.fillRect(fe,le,0.03,0.03);let pe="#38e8ff";x.lineJoin="round",x.strokeStyle=pe,x.shadowColor=pe,x.shadowBlur=12,x.lineWidth=0.014,[[[0,0.9],[0.25,0.9],[0.4,1.05],[0.86,1.05]],[[0,1.2],[0.2,1.2],[0.34,1.34],[0.62,1.34],[0.74,1.46],[0.86,1.46]],[[0,0.6],[0.3,0.6],[0.44,0.74],[0.86,0.74]]].forEach((le)=>{x.beginPath(),x.moveTo(le[0][0],le[0][1]);for(let fe=1;fe<le.length;fe++)x.lineTo(le[fe][0],le[fe][1]);x.stroke(),x.fillStyle=pe,le.forEach((fe)=>{x.beginPath(),x.arc(fe[0],fe[1],0.016,0,7),x.fill()})}),x.shadowBlur=0,W(0,0.24,0.86,0.5,0.05,_,18)}else{let pe=x.createLinearGradient(0,0,0,1.97);pe.addColorStop(0,"#12062a"),pe.addColorStop(0.45,"#3a0f5e"),pe.addColorStop(0.62,"#b3207a"),pe.addColorStop(0.72,"#ff5a52"),pe.addColorStop(0.8,"#2a0d4a"),pe.addColorStop(1,"#2a0d4a"),x.fillStyle=pe,x.fillRect(0,0,0.86,1.97);let le=0.43,fe=1.2,it=0.3,Ke=x.createLinearGradient(0,fe-it,0,fe+it);Ke.addColorStop(0,"#ff6a3d"),Ke.addColorStop(1,"#ff2e93"),x.save(),x.shadowColor="#ff2e93",x.shadowBlur=28,x.fillStyle=Ke,x.beginPath(),x.arc(le,fe,it,0,7),x.fill(),x.restore(),x.fillStyle="#2a0d4a";for(let be=0;be<6;be++){let ot=fe-it*0.75+be*0.075;x.fillRect(le-it,ot,it*2,0.008+be*0.006)}x.strokeStyle="#ff4fa6",x.lineWidth=0.006;for(let be=0;be<9;be++){let ot=0.66-be*be*0.0075;x.beginPath(),x.moveTo(0,ot),x.lineTo(0.86,ot),x.stroke()}for(let be=-4;be<=4;be++)x.beginPath(),x.moveTo(0.43+be*0.02,0.66),x.lineTo(0.43+be*0.2,0),x.stroke()}x.fillStyle="rgba(0,0,0,.65)",x.fillRect(0,0,0.86,0.1);let Te=new vi(T);return Te.colorSpace=Ct,Te.anisotropy=8,Te}function mt(_){let b=document.createElement("canvas");b.width=1024,b.height=380;let T=b.getContext("2d");T.strokeStyle=_,T.shadowColor=_,T.shadowBlur=22,T.lineWidth=16,T.lineCap="round",T.lineJoin="round",[[120,1,1],[190,1,0.5],[904,-1,1],[834,-1,0.5]].forEach((z)=>{T.globalAlpha=z[2],T.beginPath(),T.moveTo(z[0]+z[1]*22,120),T.lineTo(z[0]-z[1]*22,190),T.lineTo(z[0]+z[1]*22,260),T.stroke()}),T.globalAlpha=1,T.shadowBlur=0,T.fillStyle="rgba(255,255,255,.55)",T.font="800 30px Inter,Arial,sans-serif",T.letterSpacing="8px",T.textAlign="center",T.fillText("DRAG",150,330),T.fillText("TO RUN",874,330);let x=new vi(b);return x.colorSpace=Ct,x}let et={};function tt(_){ae=_.v||1,ye=re[ae],de.stops=ye.stops,de.rough=ye.rough,de.metal=ye.metal,de.neon=ye.neon;let b=de,T=new Yi,x=new he(_.acc),{pts:z,w:X}=b,B=[],W=(We,Mt)=>(B.push({mat:We,kind:Mt,base:Mt==="color"?We.color.clone():Mt==="opacity"?We.opacity:We.emissiveIntensity}),We),ue=new dr;ue.moveTo(-z[0][0],z[0][1]);for(let We=1;We<z.length;We++)ue.lineTo(-z[We][0],z[We][1]);if(ue.closePath(),!et["geo"+ae]){let We=new vl(ue,{depth:X-0.07,bevelEnabled:!0,bevelThickness:0.035,bevelSize:0.035,bevelOffset:-0.035,bevelSegments:l?2:6,curveSegments:l?8:24});We.translate(0,0,-(X-0.07)/2);let Mt=We.attributes.position,zt=new Float32Array(Mt.count*3),hi=b.stops;for(let er=0;er<Mt.count;er++){let va=Math.min(1,Math.max(0,Mt.getY(er)/2.1)),ya=va*(hi.length-1),zs=Math.min(hi.length-2,Math.floor(ya)),Cr=new he(hi[zs]).lerp(new he(hi[zs+1]),ya-zs);zt[er*3]=Cr.r,zt[er*3+1]=Cr.g,zt[er*3+2]=Cr.b}We.setAttribute("color",new qt(zt,3)),et["geo"+ae]=We}let Te=et["geo"+ae],pe=l?new jt({vertexColors:!0,roughness:0.5,metalness:0.12,envMapIntensity:1.3}):new ia({vertexColors:!0,roughness:b.rough,metalness:b.metal,clearcoat:1,clearcoatRoughness:0.12,envMapIntensity:1.3}),le=new je(Te,W(pe,"color"));le.rotation.y=Math.PI/2,T.add(le);let fe=new je(new wi(2,2),new Bt({map:k,transparent:!0,depthWrite:!1,opacity:0.9}));fe.rotation.x=-Math.PI/2,fe.position.y=0.006,T.add(fe),T.add(Z(b.bez[0],b.bez[1],b.bez[2],0.004,new jt({color:262410,roughness:0.15,metalness:0.8})));let it=0.6,Ke=W(new Bt({map:_.tex,toneMapped:!1}),"color"),be=Z(b.scr[0],b.scr[1],it,0.009,Ke);T.add(be),T.add(Z(b.scr[0],b.scr[1],it,0.013,new Bt({map:N,transparent:!0,opacity:0.9,depthWrite:!1,toneMapped:!1})));let ot=b.scr;[-1,1].forEach((We)=>{let Mt=Z([ot[0][0],ot[0][1]-0.02],[ot[1][0],ot[1][1]+0.02],0.012,0.015,W(ie(5213695,1.6),"color"));Mt.position.x=We*(it/2+0.012),T.add(Mt)}),[ot[0],ot[1]].forEach((We,Mt)=>{let zt=Z([We[0],We[1]-0.006],[We[0],We[1]+0.006],it+0.04,0.015,W(ie(5213695,1.6),"color"));zt.position.set(0,We[1]+(Mt?0.012:-0.012)*0,We[0]+0.015),zt.rotation.x=0,T.add(zt)});let Pe=W(new Bt({map:L(_.title,_.hex),color:12105912,toneMapped:!1}),"color");T.add(Z(b.mq[0],b.mq[1],b.mq[2],0.004,Pe));let Pt=Z(b.deck[0],b.deck[1],0.78,0.004,new jt({color:1708080,roughness:0.3,metalness:l?0.3:0.85}));T.add(Pt);let $e=new Yi;$e.rotation.copy(Pt.rotation),$e.position.copy(Pt.position),T.add($e);let ci=new je(new Ml(0.104,0.009,12,48),new jt({color:14540253,metalness:l?0.3:1,roughness:0.18}));ci.position.z=0.006,$e.add(ci);let At=new Yi;At.position.z=0.01,$e.add(At);let Ht=new je(new Wo(0.09,0.095,0.03,48),new jt({color:x,emissive:x,emissiveIntensity:0.9,roughness:0.25}));Ht.rotation.x=Math.PI/2,Ht.position.z=0,At.add(Ht),W(Ht.material,"emissive");let Ri=_.hero?new Bt({map:w(),toneMapped:!1}):new Bt({color:3814480,toneMapped:!1}),Ci=new je(new gl(0.084,48),Ri);Ci.position.z=0.0165,At.add(Ci),W(Ri,"color");let _t={position:{z:z[1][0]+0.01}};if(!ae){let We=new je(new Li(0.3,0.3,0.02),new jt({color:656914,roughness:0.3,metalness:l?0.3:0.9}));We.position.set(0,0.32,z[1][0]+0.01),T.add(We),[-0.06,0.06].forEach((zt)=>{let hi=new je(new Li(0.02,0.1,0.01),W(ie(_.hex,1.5),"color"));hi.position.set(zt,0.33,We.position.z+0.014),T.add(hi)});let Mt=new je(new Li(0.7,0.09,0.02),new jt({color:8949928,metalness:l?0.2:0.7,roughness:0.35}));Mt.position.set(0,0.07,We.position.z),T.add(Mt)}else{let We=Je(),Mt=new je(new wi(0.668,0.62),new jt({map:We.map,emissiveMap:We.emi,emissive:16777215,emissiveIntensity:1.3,roughness:0.5,metalness:0.3}));Mt.position.set(0,0.31,z[1][0]+0.004),T.add(Mt);let zt=new je(new wi(0.78,0.297),new Bt({map:mt("#"+new he(ye.neon).getHexString()),transparent:!0,depthWrite:!1,toneMapped:!1}));zt.position.z=0.0035,$e.add(zt);let hi=new je(new wi(2.2,1.5),new Bt({map:H,color:ye.glow||ye.neon,transparent:!0,opacity:0.55,blending:lr,depthWrite:!1,toneMapped:!1}));hi.rotation.x=-Math.PI/2,hi.position.set(0,0.012,0.15),T.add(hi),W(hi.material,"opacity")}let Yt=X/2+0.012;[-1,1].forEach((We)=>{let Mt=new Ts;for(let zt=0;zt<z.length;zt++){let hi=z[zt],er=z[(zt+1)%z.length];Mt.add(new Yo(new P(We*Yt,hi[1],hi[0]),new P(We*Yt,er[1],er[0])))}if(!et.tube)et.tube={};if(!et.tube[We])et.tube[We]=new ta(Mt,z.length*(l?3:8),0.007,5,!0);if(ae){if(!et.tube2)et.tube2={};if(!et.tube2[We])et.tube2[We]=new ta(Mt,z.length*(l?3:8),0.016,6,!0);let zt=new je(et.tube2[We],new jt({color:328968,roughness:0.25,metalness:0.6}));zt.position.x=-We*0.004,T.add(zt)}T.add(new je(et.tube[We],W(ie(b.neon,1.7),"color")))});let Si=new yl(ue,24);Si.computeBoundingBox();let vt=Si.boundingBox,Ut=ae?De(_.hex):g(_.hex,_.title);if(Ut.repeat.set(1/(vt.max.x-vt.min.x),1/(vt.max.y-vt.min.y)),Ut.offset.set(-vt.min.x/(vt.max.x-vt.min.x),-vt.min.y/(vt.max.y-vt.min.y)),[-1,1].forEach((We)=>{let Mt=new je(Si,W(ae?new jt({map:Ut,emissiveMap:Ut,emissive:16777215,emissiveIntensity:0.5,roughness:0.32,metalness:0.2,transparent:!0,side:di,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}):new Bt({map:Ut,transparent:!0,side:di,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}),"color"));if(Mt.rotation.y=We*Math.PI/2,We<0)Mt.scale.x=-1;Mt.position.x=We*(X/2+0.004),T.add(Mt)}),l){let We=(Mt,zt,hi,er,va,ya)=>{let zs=W(new Or({map:H,color:Mt,transparent:!0,opacity:ya,blending:lr,depthWrite:!1,fog:!1}),"opacity"),Cr=new vs(zs);return Cr.position.set(zt,hi,er),Cr.scale.set(va,va*0.7,1),T.add(Cr),Cr};We(_.hex,0,1.78,0.3,1.5,0.55),We(_.hex,0,0.86,0.36,0.5,0.6)}return T.userData={hero:!!_.hero,mqBase:new he(12105912),dimMats:B,mqMat:Pe,btnG:At,bt:Ht,decal:Ci,scr:be,deckBd:$e},T}v.add(new la(9075455,3151946,0.9));let dt=new En(12570879,1.1);dt.position.set(-4,6,5),v.add(dt);let ne=new ca(16766704,l?0:60,12,0.5,0.6,1.5);ne.position.set(0,5,3.5),ne.target.position.set(0,1,0);let ge=new Er(16732070,0,7,2);if(ge.position.set(0,0.4,0.3),!l){let _=new Er(16732070,40,9,2);_.position.set(1.6,0.6,2.4),v.add(_);let b=new Er(5213695,30,9,2);b.position.set(-2.2,1.4,2.4),v.add(b),v.add(ne,ne.target,ge)}else{let _=new En(16732070,1.1);_.position.set(4,2,3),v.add(_);let b=new En(5213695,0.9);b.position.set(-4,2,3),v.add(b)}let xe=new vs(new Or({map:H,color:16732070,transparent:!0,opacity:0,blending:lr,depthWrite:!1,fog:!1}));if(xe.scale.set(7,3.5,1),xe.position.set(0,0.5,0.6),l)v.add(xe);let Ne=[["GAME 04",5213695,3,"Coming soon"],["GAME 02",2868384,1,"Coming soon"],["DRIPPY",16732070,0,"Survive the rain"],["GAME 03",11691775,2,"Coming soon"],["GAME 05",2868384,2,"Coming soon"]],_e=2,ke=Ne.map((_,b)=>{let T="#"+_[1].toString(16).padStart(6,"0"),x=tt({acc:_[1],hex:T,title:_[0],tex:_[2]===0?ee:I(_[2],T),hero:b===_e,v:[3,2,1,4,5][b]});return v.add(x),x}),Ve=()=>{let _=t.getBoundingClientRect();return{w:Math.max(2,Math.round(_.width)),h:Math.max(2,Math.round(_.height))}},Ge=Ve();d.setPixelRatio(a||l?1:Math.min(devicePixelRatio||1,1.5)),d.setSize(Ge.w,Ge.h,!1);let st,gt;if(!l){let _=new Et(Ge.w,Ge.h,{type:Rt,samples:0});st=new eh(d,_),st.addPass(new th(v,S)),gt=new Cn(new q(Ge.w/2,Ge.h/2),0.42,0.45,0.92),st.addPass(gt),st.addPass(new ih)}else st={render:()=>d.render(v,S),setSize:()=>{}},gt={strength:0};let O=1.78,Ot=1.95,lt=6.2,Dt=1.2,Ae=1;function yt(){Ge=Ve(),O=Ge.w/Ge.h,d.setSize(Ge.w,Ge.h,!1),st.setSize(Ge.w,Ge.h),S.aspect=O,S.updateProjectionMatrix();let _=Math.min(O,1.7);lt=5.1;let b=lt*0.536*O;if(Ot=Math.max(3.9,b*0.5+1.4),O<1)lt=6.9,Dt=1.1,Ae=0.55,Ot=2.8;else Dt=1.2,Ae=1}yt();let Qe=Ge.w,nt=Ge.h;new ResizeObserver(()=>{let _=Ve();if(Math.abs(_.w-Qe)<3&&Math.abs(_.h-nt)<3)return;Qe=_.w,nt=_.h,yt()}).observe(t);let ft=_e,C=_e,y=0,V=0,oe=null,se=-1,ve=null,we=!1,Y=0,te=0,Se=[0.12,0.12,0.2,0.12,0.12],F=(_)=>Math.max(0.3,1-0.45*Math.abs(_)),Q={hover:!1,press:!1};function J(_){let b=Math.abs(_),T=Math.sign(_);return{x:_*Ot,z:-(0.8*Math.min(b,3)+0.2*Math.max(0,Math.min(b,3)-1)),sc:1-0.08*Math.min(b,3),ry:-0.3*Math.max(0,1-b)-T*Math.min(1,b)*0.2-(b>1?T*0.05*(b-1):0)}}let me=[1,0.2,1,0.55,0.12,1,1,0.4,1,0.7];function Me(_){let b=_%11.7;if(b>9.6&&b<10.5)return me[Math.floor(b*14)%me.length];if(b>4.2&&b<4.34)return 0.3;if(b>4.5&&b<4.58)return 0.5;return 1}function Re(_,b){let T=_.userData,x=Math.abs((T.lastK||-1)-b)>=0.003;if(T.hero&&!u){let z=Me(performance.now()/1000);if(x||z!==T.lastF){if(!x)T.mqMat.color.copy(T.mqBase).multiplyScalar(b*z)}if(T.lastF=z,x)T.lastK=b,T.dimMats.forEach((X)=>{if(X.kind==="color")X.mat.color.copy(X.base).multiplyScalar(b);else if(X.kind==="opacity")X.mat.opacity=X.base*b;else X.mat.emissiveIntensity=X.base*b}),T.mqMat.color.copy(T.mqBase).multiplyScalar(b*z);return}if(!x)return;_.userData.lastK=b,_.userData.dimMats.forEach((z)=>{if(z.kind==="color")z.mat.color.copy(z.base).multiplyScalar(b);else if(z.kind==="opacity")z.mat.opacity=z.base*b;else z.mat.emissiveIntensity=z.base*b})}let Oe=[[0.36,0,1,1],[0.42,0,1.09,0.88],[0.54,0.4,0.98,1.03],[0.66,0,1.03,0.97],[0.8,0.07,1,1],[1,0,1,1]];function He(_){let b=_/1.7;if(b<=0)return{y:12,sx:1,sy:1};if(b<0.36){let X=b/0.36;return{y:12*(1-X*X),sx:1,sy:1}}if(b>=1)return{y:0,sx:1,sy:1};let T=Oe[0],x=Oe[1];for(let X=0;X<Oe.length-1;X++)if(b>=Oe[X][0]&&b<Oe[X+1][0]){T=Oe[X],x=Oe[X+1];break}let z=(b-T[0])/(x[0]-T[0]);return z=z*z*(3-2*z),{y:T[1]+(x[1]-T[1])*z,sx:T[2]+(x[2]-T[2])*z,sy:T[3]+(x[3]-T[3])*z}}let Ce=0.612,ze=0;function ht(_){if(u){for(let b=0;b<5;b++)Se[b]=1;oe=-1e9,se=99;return}oe=_,se=0,ze=0,s.intro=performance.now()}function Le(_,b){let T=_-b*9;return Math.exp(-T*T/1.6)*Math.exp(-b*0.9)}let bt=!0;new IntersectionObserver((_)=>{bt=_[0].isIntersecting}).observe(t);let Jt=new P,Mi=new P,Ds=new P,Vl=new P;function Ns(_,b){return Mi.copy(b),_.localToWorld(Mi),Mi.project(S),[(Mi.x*0.5+0.5)*Ge.w,(-Mi.y*0.5+0.5)*Ge.h]}let li=h("hallStart"),ar=h("hallName"),Pn=h("hallSub"),Us=h("hallIdx"),Fs=h("hallPrevN"),Zr=h("hallNextN"),Bs=h("hallPrev"),Os=h("hallNext"),Ar=h("hallPips");function In(){let _=Ne[ft];if(ar)ar.textContent=_[0];if(Pn)Pn.textContent=_[3];if(Us)Us.textContent="0"+(ft+1)+" / 05";if(Bs){if(Bs.hidden=ft<=0,Fs&&ft>0)Fs.textContent=Ne[ft-1][0]}if(Os){if(Os.hidden=ft>=4,Zr&&ft<4)Zr.textContent=Ne[ft+1][0]}if(Ar)Array.prototype.forEach.call(Ar.children,(b,T)=>b.classList.toggle("on",T===ft));if(li)li.disabled=ft!==_e,li.hidden=ft!==_e;f.dataset.hall=ft===_e?"on":"off";try{window.dispatchEvent(new CustomEvent("hallchange",{detail:{index:ft,name:_[0],hero:ft===_e}}))}catch(b){}}function Rr(_){let b=Math.max(0,Math.min(4,ft+_));if(b!==ft)ft=b,In()}In(),h("hallPrev")&&h("hallPrev").addEventListener("click",()=>Rr(-1)),h("hallNext")&&h("hallNext").addEventListener("click",()=>Rr(1)),h("hallScore")&&h("hallScore").addEventListener("click",()=>document.querySelector('#switch [data-mode="score"]').click()),h("hallRules")&&h("hallRules").addEventListener("click",()=>document.querySelector('#switch [data-mode="rules"]').click()),window.addEventListener("keydown",(_)=>{if(f.classList.contains("big")||f.classList.contains("fs")||_.target.tagName==="INPUT")return;if(document.querySelector(".rmodal:not([hidden])"))return;if(_.key==="ArrowLeft")Rr(-1);if(_.key==="ArrowRight")Rr(1)});let ji=null;if(t.addEventListener("pointerdown",(_)=>{if(_.target.closest("button, a"))return;ji={x:_.clientX,y:_.clientY,m:!1}}),window.addEventListener("pointermove",(_)=>{if(V=(_.clientX/innerWidth-0.5)*2,ji&&Math.abs(_.clientX-ji.x)>8)ji.m=!0}),window.addEventListener("pointerup",(_)=>{if(!ji)return;let b=_.clientX-ji.x,T=ji.m;if(ji=null,T&&Math.abs(b)>40){Rr(b<0?1:-1);return}if(!T){let x=t.getBoundingClientRect(),z=-1,X=1e9;if(ke.forEach((B,W)=>{let ue=Ns(B,new P(0,1,0)),Te=Math.abs(ue[0]+x.left-_.clientX);if(Te<X)X=Te,z=W}),z>=0&&z!==ft&&X<Ge.w*0.12)ft=z,In()}}),li)li.addEventListener("pointerenter",()=>{Q.hover=!0}),li.addEventListener("pointerleave",()=>{Q.hover=!1,Q.press=!1}),li.addEventListener("pointerdown",()=>{Q.press=!0}),window.addEventListener("pointerup",()=>{Q.press=!1}),li.addEventListener("click",()=>h("btnStart").click());function Hl(){let _=ke[_e];_.updateMatrixWorld(!0);let b=[[-0.3,0.95,0.21],[0.3,0.95,0.21],[-0.3,1.55,0.12],[0.3,1.55,0.12]].map((Te)=>Ns(_,new P(Te[0],Te[1],Te[2]))),T=b.map((Te)=>Te[0]),x=b.map((Te)=>Te[1]),z=t.getBoundingClientRect(),X=Math.min(...T)+z.left,B=Math.min(...x)+z.top,W=Math.max(...T)+z.left,ue=Math.max(...x)+z.top;return{left:X,top:B,width:W-X,height:ue-B,right:W,bottom:ue,x:X,y:B}}window.__hall={ready:!0,screenRect:Hl,heroActive:()=>ft===_e,replay:()=>{for(let _=0;_<5;_++)Se[_]=_===_e?0.2:0.12;ht(performance.now())},setActive:(_)=>{ft=_,In()},instant:()=>{C=ft},seek:(_)=>{if(ve=_,oe===null)oe=performance.now()}};let ga=performance.now(),xa=0,_a=0;function M(_){requestAnimationFrame(M);let b=Math.min(0.05,(_-ga)/1000);if(ga=_,!s.f1)s.f1=performance.now();if(document.hidden||!bt||f.classList.contains("big")||f.classList.contains("fs"))return;let T=oe===null||oe!==-1e9&&Y<6||we;if(!T&&_a++&1)return;if(T)A=!1;if(oe===null&&te>2&&f.classList.contains("cabvis"))ht(_);if(oe!==null&&ve===null&&te>2)Y+=b;if(oe===null)Y=0;let x=oe===null?-1:ve!==null?ve:Y;if(se=x,C+=(ft-C)*Math.min(1,b*7),_-xa>(l?120:66))xa=_,j(_/1000);let z=oe===null;ke.forEach((Te,pe)=>{let le=pe-C,fe=J(le),it=0,Ke=1,be=1;if(pe===_e){if(z)it=0,Ke=be=0.001;else if(x<1.7&&!u){let Ht=He(x);it=Ht.y,Ke=Ht.sx,be=Ht.sy}}let ot=0,Pe=Math.hypot(fe.x,fe.z-J(_e-C).z),Pt=J(_e-C).x;if(Pe=Math.hypot(fe.x-Pt,fe.z-J(_e-C).z),!z&&x>Ce&&pe!==_e&&!u)ot=Math.max(0,0.09*Le(Pe,x-Ce)*Math.sin((Pe-(x-Ce)*9)*2));Te.position.set(fe.x,it+ot,fe.z),Te.scale.set(fe.sc*Ke,fe.sc*be,fe.sc*Ke),Te.rotation.y=fe.ry;let $e;if(u||x>6||x<0&&!1)$e=1;else if(z)$e=pe===_e?0.2:0.12;else if(pe===_e){if($e=x<0.6?0.2:Math.min(1,0.2+(x-0.6)/0.5*0.8),x>1.6&&x<2.8){let Ht=x-1.6;$e=[1.5,0.3,1.4,0.4,1,1][Math.min(5,Math.floor(Ht/1.2*6))]}}else{let Ht=Ce+Pe/9;$e=Math.max(0.12,Math.min(1,(x-Ht)/0.5))}Se[pe]=$e,Re(Te,F(le)*$e*(pe===_e?1:1));let ci=Te.userData,At=0.8+0.35*Math.sin(_/420);if(pe===_e)ci.bt.material.emissiveIntensity=(Q.hover?1.2:0.45*At)*F(le)*$e,ci.btnG.position.z=Q.press?0:0.01,ci.decal.material.color.setScalar((Q.hover?0.9:0.7+0.05*Math.sin(_/420))*F(le)*$e)});let X=oe===null||u?-1:x-Ce;R.uAge.value=X<0||X>6?-1:X,E.uAge.value=X<0||X>5?-1:X;let B=J(_e-C);if(R.uC.value.set(B.x,B.z),window.__cracks.position.set(B.x,0,B.z),X>=0&&X<1.2)ge.intensity=110*Math.exp(-X*4.5),xe.material.opacity=0.9*Math.exp(-X*3.5),ze=Math.max(ze,X<0.08?1:ze);else ge.intensity=0,xe.material.opacity=0;ze*=Math.exp(-b*5),gt.strength=0.42+(X>=0&&X<1?0.6*Math.exp(-X*4):0),y+=(V*0.35*(O<1?0.3:1)-y)*Math.min(1,b*3);let W=(Math.random()-0.5)*0.09*ze,ue=(Math.random()-0.5)*0.09*ze;if(S.position.set(y+W,Dt+ue,lt),S.lookAt(y*0.3,Ae+ue,0),ne.position.x=B.x,ne.target.position.x=B.x,xe.position.x=B.x,xe.position.z=B.z+0.6,st.render(),te++,li&&!li.hidden){let Te=ke[_e];Te.updateMatrixWorld(!0);let pe=Te.userData,le=Ds;pe.btnG.getWorldPosition(le),le.project(S);let fe=(le.x*0.5+0.5)*Ge.w,it=(-le.y*0.5+0.5)*Ge.h,Ke=Vl;pe.btnG.getWorldPosition(Ke),Ke.x+=0.1*Te.scale.x*Math.cos(Te.rotation.y),Ke.z-=0.1*Te.scale.x*Math.sin(Te.rotation.y),Ke.project(S);let be=Math.max(18,Math.abs((Ke.x*0.5+0.5)*Ge.w-fe)*1.15);li.style.width=li.style.height=(be*2).toFixed(0)+"px",li.style.transform="translate("+(fe-be).toFixed(1)+"px,"+(it-be).toFixed(1)+"px)",li.style.visibility=z||x<1.9?"hidden":"visible"}}try{v.traverse((_)=>{_.frustumCulled=!1}),ke[_e].scale.setScalar(0.001),d.compile(v,S),st.render(),st.render()}catch(_){}s.compiled=performance.now(),requestAnimationFrame(M),document.dispatchEvent(new Event("hallready"))}})();
