// Slopestyle source fingerprint: 99fb3d12d14e826c1294d6210d96cd2d9e8c17a700cc374c44624535f5caac30
(()=>{var vm=Object.defineProperty;var Pn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var Mm=(n,e)=>{for(var t in e)vm(n,t,{get:e[t],enumerable:!0})};function Wu(n){return Xo(n)}function bm(n,e){let t=Math.max(0,Number.isFinite(n)?n:0),i=Math.max(0,Number.isFinite(e)?e:0);return 1+.07*(Math.sin((t+i)*.046+.3)-Math.sin(t*.046+.3))}function Wo(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.11)*.45+Math.sin(e*.38)*.18}function Em(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.min(3,Math.floor(e/72))}function gc(n){let e=Math.floor(Math.max(0,Number.isFinite(n)?n:0)/36);return Vu[Math.floor(e/4)%Vu.length]}function Xo(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.035-.5)*2.8+Math.sin(e*.082+.7)}function Tm(n,{halfWidth:e=24,seed:t=1}={}){if(!Number.isInteger(n)||n<0)throw new RangeError("Chunk index must be a non-negative integer");if(!Number.isFinite(e)||e<=0)throw new RangeError("Slope half-width must be positive and finite");let i=Em(n*36),s=gc(n*36),o={summit:7,forest:15,rocky:10,glow:9}[s]+i*2,a=Array.from({length:o},(l,c)=>{let h=Ar(t,n,c,4)<.5?-1:1,d=36/o,u=n*36+(c+.3+Ar(t,n,c,0)*.4)*d,f=2.2+Ar(t,n,c,1)*17,p={summit:.46,forest:.1,rocky:.68,glow:.22}[s];return Object.freeze({kind:Ar(t,n,c,2)<p?"rock":"pine",size:.72+Ar(t,n,c,3)*.75,x:h*(e+f),z:u})});return Object.freeze({biome:s,index:n,tier:i,scenery:Object.freeze(a)})}function qo(n,e,t={}){if(!Number.isFinite(e)||e<0)throw new RangeError("View distance must be non-negative and finite");let i=Math.max(0,Number.isFinite(n)?n:0),s=Math.floor(i/36),r=Math.floor((i+e)/36);return Array.from({length:r-s+1},(o,a)=>wm(s+a,t))}function Pr(n,e){let t=Cr((e/n.height-.36)/.64,0,1);return n.width*(.058+.285*t**1.16)}function Xu(n,e,t,i=1,s=24){let r=(e-t)*14*Cr(i||1,.82,1),o=Math.max(1,Pr(n,n.height*.78));return e-r*s/o}function Yn(n,e,t,{halfWidth:i=24,travel:s=0,viewDistance:r=44}={}){let o=Cr(t.z,0,r),a=1-o/r,l=a*a*(3-2*a),c=n.height*(.36+l*(.78-.36)),h=.23+l*.77,d=Cr(o/7,0,1),u=d*d*(3-2*d),f=(Wo(s+o)-Wo(s))*u,p=c-f*h*n.height*.045,x=Pr(n,p)*(1+(bm(s,o)-1)*u),g=(Wu(s+o)-Wu(s))*u;return Object.freeze({alpha:Cr(l*1.6+.2,0,1),pathHalf:x,scale:h,x:n.width/2+(t.x-e+g)/i*x,y:p})}var Vu,Cr,Sm,Ar,Rr,wm,Yo=Pn(()=>{Vu=Object.freeze(["summit","forest","rocky","glow"]),Cr=(n,e,t)=>Math.min(t,Math.max(e,n)),Sm=n=>{let e=n|0;return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),(e^e>>>16)>>>0},Ar=(n,e,t,i)=>Sm(n^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507)^i)/4294967296;Rr=new Map,wm=(n,e)=>{let t=[n,e.halfWidth??24,e.seed??1].join(":"),i=Rr.get(t);return i||(i=Tm(n,e),Rr.set(t,i),Rr.size>32&&Rr.delete(Rr.keys().next().value)),i}});function Am(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function af(){let n=Vr("canvas");return n.style.display="block",n}function Th(...n){let e="THREE."+n.shift();nr?nr("log",e,...n):console.log(e,...n)}function lf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ke(...n){n=lf(n);let e="THREE."+n.shift();if(nr)nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=lf(n);let e="THREE."+n.shift();if(nr)nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Or(...n){let e=n.join(" ");e in qu||(qu[e]=!0,Ke(...n))}function cf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function mr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function Cm(n,e){return(n%e+e)%e}function xc(n,e,t){return(1-t)*n+t*e}function uf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ah(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pm(n,e){if(e.constructor===Float32Array)return n;let t=Ah(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Im(n,e){if(e.constructor===Float32Array)return n;let t=Ah(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}function Lm(){let n={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hr]:{primaries:e,whitePoint:i,transfer:Gr,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?La.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Lc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fs.fromArray(n,r);let a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=i.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Zm(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ts,a),l===null)return null;la.copy(a),la.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:n}}function ca(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,sa),n.getVertexPosition(l,ra),n.getVertexPosition(c,oa);let h=Zm(n,e,t,i,sa,ra,oa,od);if(h){let d=new U;Zi.getBarycoord(od,sa,ra,oa,d),s&&(h.uv=Zi.getInterpolatedAttribute(s,a,l,c,d,new Ae)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,a,l,c,d,new Ae)),o&&(h.normal=Zi.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Zi.getNormal(sa,ra,oa,u.normal),h.face=u,h.barycoord=d}return h}function da(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Oa.fromBufferAttribute(a,s),Ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Oa,Ba,Bc,cd)>i)return;Bc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Bc);if(!(c<e.near||c>e.far))return{distance:c,point:cd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}function fd(n,e,t,i,s,r,o){let a=Yc.distanceSqToPoint(n);if(a<t){let l=new U;Yc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Rh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function gd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Km(n,e){let t=1-n;return t*t*e}function $m(n,e){return 2*(1-n)*n*e}function jm(n,e){return n*n*e}function Br(n,e,t,i){return Km(n,e)+$m(n,t)+jm(n,i)}function Qm(n,e){let t=1-n;return t*t*t*e}function e0(n,e){let t=1-n;return 3*t*t*n*e}function t0(n,e){return 3*(1-n)*n*n*e}function n0(n,e){return n*n*n*e}function zr(n,e,t,i,s){return Qm(n,e)+e0(n,t)+t0(n,i)+n0(n,s)}function i0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ff(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=l0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=n[u],p=n[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return lo(r,o,t,a,l,c,0),o}function ff(n,e,t,i,s){let r;if(s===y0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=_d(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=_d(o/i|0,n[o],n[o+1],r);return r&&cr(r,r.next)&&(ho(r),r=r.next),r}function _s(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(cr(t,t.next)||zt(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function lo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&f0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?r0(n,i,s,r):s0(n)){e.push(l.i,n.i,c.i),ho(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=o0(_s(n),e),lo(n,e,t,i,s,r,2)):o===2&&a0(n,e,t,i,s,r):lo(_s(n),e,t,i,s,r,1);break}}}function s0(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Ur(s,a,r,l,o,c,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function r0(n,e,t,i){let s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),g=Math.max(h,d,u),m=Jc(f,p,e,t,i),v=Jc(x,g,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=m&&M&&M.z<=v;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Ur(a,h,l,d,c,u,S.x,S.y)&&zt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Ur(a,h,l,d,c,u,M.x,M.y)&&zt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Ur(a,h,l,d,c,u,S.x,S.y)&&zt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Ur(a,h,l,d,c,u,M.x,M.y)&&zt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function o0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!cr(i,s)&&mf(i,t,t.next,s)&&co(i,s)&&co(s,i)&&(e.push(i.i,t.i,s.i),ho(t),ho(t.next),t=n=s),t=t.next}while(t!==n);return _s(t)}function a0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g0(o,a)){let l=gf(o,a);o=_s(o,o.next),l=_s(l,l.next),lo(o,e,t,i,s,r,0),lo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function l0(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ff(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(m0(c))}s.sort(c0);for(let r=0;r<s.length;r++)t=h0(s[r],t);return t}function c0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function h0(n,e){let t=u0(n,e);if(!t)return e;let i=gf(t,n);return _s(i,i.next),_s(t,t.next)}function u0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(cr(n,t))return t;do{if(cr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&pf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);co(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&d0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function d0(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function f0(n,e,t,i){let s=n;do s.z===0&&(s.z=Jc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,p0(s)}function p0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Jc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function m0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function pf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ur(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&pf(n,e,t,i,s,r,o,a)}function g0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!_0(n,e)&&(co(n,e)&&co(e,n)&&x0(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||cr(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function cr(n,e){return n.x===e.x&&n.y===e.y}function mf(n,e,t,i){let s=ga(zt(n,e,t)),r=ga(zt(n,e,i)),o=ga(zt(t,i,n)),a=ga(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&ma(n,t,e)||r===0&&ma(n,i,e)||o===0&&ma(t,n,i)||a===0&&ma(t,e,i))}function ma(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ga(n){return n>0?1:n<0?-1:0}function _0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&mf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function co(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function x0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function gf(n,e){let t=Kc(n.i,n.x,n.y),i=Kc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function _d(n,e,t,i){let s=Kc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ho(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function y0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function xd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function M0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function S0(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(vd(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(vd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=ws(n[t]);for(let s in i)e[s]=i[s]}return e}function vd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function b0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ch(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}function Ks(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _a(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function xf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function T0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function A0(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=xf(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=T0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Md(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Sd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function Lh(n,e,t,i){let s=U0(i);switch(t){case yh:return n*e;case Mh:return n*e/s.components*s.byteLength;case ml:return n*e/s.components*s.byteLength;case ns:return n*e*2/s.components*s.byteLength;case gl:return n*e*2/s.components*s.byteLength;case vh:return n*e*3/s.components*s.byteLength;case ii:return n*e*4/s.components*s.byteLength;case _l:return n*e*4/s.components*s.byteLength;case bo:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:case Ml:return Math.max(n,16)*Math.max(e,8)/4;case xl:case vl:return Math.max(n,8)*Math.max(e,8)/2;case Sl:case bl:case El:case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wl:case Ao:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Vl:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ro:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U0(n){switch(n){case Rn:case mh:return{byteLength:1,components:1};case pr:case gh:case ni:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case ei:case dl:case ti:return{byteLength:4,components:1};case _h:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Ad,th,Rd,ys,Cd,ur,ts,cn,qt,vs,dr,nh,ih,sh,Pd,Ms,Id,Ld,Nd,Dd,Fd,Ud,Od,Bd,rh,oh,zd,kd,Hd,Gd,Vd,Wd,Xd,qd,Yd,Sa,ba,wa,er,Ea,Ta,Aa,Ra,ah,Zd,Jd,mi,lh,ch,hh,Mo,uh,dh,fh,ph,Ss,fr,cl,hl,gs,ci,Ca,rn,Kd,So,Mn,ul,Li,Rn,mh,gh,pr,dl,ei,ti,ni,fl,pl,bs,_h,xh,yh,vh,ii,Ci,Ni,Mh,ml,ns,gl,_l,bo,wo,Eo,To,xl,yl,vl,Ml,Sl,bl,wl,El,Tl,Ao,Al,Rl,Cl,Pl,Il,Ll,Nl,Dl,Fl,Ul,Ol,Bl,zl,kl,Hl,Gl,Vl,Wl,Xl,ql,Ro,Yl,kr,Pa,va,Vc,Wc,Xc,qc,$d,Zl,jd,Di,mn,Hr,Gr,Tt,Ma,Qd,ef,tf,nf,Sh,sf,rf,bh,wh,of,Eh,Vn,tr,qu,nr,hf,ui,fn,_c,Ia,Nh,Ae,Nn,Dh,U,yc,Yu,Fh,ot,vc,Zu,Ju,gt,ks,La,Nm,ir,Dm,Sc,Sn,Uh,Ft,Na,Dn,Wr,Da,ll,St,Hs,Zn,Fm,Um,Vi,Zo,In,Ku,$u,jn,Xr,Om,ju,Gs,bi,Jo,Ir,Bm,zm,Qu,ed,td,nd,km,Vs,bc,Xt,Lt,Hm,sr,df,Wi,Ko,$e,pn,qr,Yr,Jn,wi,Ec,Ei,Ws,Xs,id,Tc,Ac,Rc,Cc,Pc,Ic,Zi,Ji,Ti,Kn,$o,qs,Ys,Zs,Xi,qi,ds,Lr,jo,Qo,fs,Wt,ea,Gm,En,Zr,Jr,ht,Vm,Nr,Nc,Ki,Wm,Gn,Dc,Js,Ln,Dr,sn,Pt,Fc,Xm,qm,$n,Ym,di,Ai,Uc,ta,na,rr,Tn,sd,ps,ia,rd,sa,ra,oa,Oc,aa,od,la,Ht,Fa,ms,Jm,ha,$i,ad,Ua,or,Oa,Ba,ld,Fr,ua,Bc,cd,za,hd,ud,Kr,ar,dd,Yc,fa,pa,$r,jr,Qr,Pi,eo,to,kt,no,An,Ii,ka,Qn,Fn,lr,Ha,pd,md,zc,kc,Hc,Ga,io,Va,so,Wa,ro,Xa,oo,Zc,qa,ao,fi,$c,hi,uo,v0,fo,xs,po,_f,w0,E0,pi,Ya,ln,Za,Ja,ji,Ka,$a,ja,Qa,Un,Qi,el,tl,nl,mo,es,il,sl,yf,rl,go,_o,Gc,bd,wd,ol,xa,ya,li,xo,Yi,Ed,Td,vn,yo,jc,vo,$s,js,hr,al,Ph,R0,Ih,C0,P0,I0,L0,N0,D0,F0,Qc,Dt,ib,Oh,eh,Bh=Pn(()=>{Ad=0,th=1,Rd=2,ys=1,Cd=2,ur=3,ts=0,cn=1,qt=2,vs=0,dr=1,nh=2,ih=3,sh=4,Pd=5,Ms=100,Id=101,Ld=102,Nd=103,Dd=104,Fd=200,Ud=201,Od=202,Bd=203,rh=204,oh=205,zd=206,kd=207,Hd=208,Gd=209,Vd=210,Wd=211,Xd=212,qd=213,Yd=214,Sa=0,ba=1,wa=2,er=3,Ea=4,Ta=5,Aa=6,Ra=7,ah=0,Zd=1,Jd=2,mi=0,lh=1,ch=2,hh=3,Mo=4,uh=5,dh=6,fh=7,ph=300,Ss=301,fr=302,cl=303,hl=304,gs=1e3,ci=1001,Ca=1002,rn=1003,Kd=1004,So=1005,Mn=1006,ul=1007,Li=1008,Rn=1009,mh=1010,gh=1011,pr=1012,dl=1013,ei=1014,ti=1015,ni=1016,fl=1017,pl=1018,bs=1020,_h=35902,xh=35899,yh=1021,vh=1022,ii=1023,Ci=1026,Ni=1027,Mh=1028,ml=1029,ns=1030,gl=1031,_l=1033,bo=33776,wo=33777,Eo=33778,To=33779,xl=35840,yl=35841,vl=35842,Ml=35843,Sl=36196,bl=37492,wl=37496,El=37488,Tl=37489,Ao=37490,Al=37491,Rl=37808,Cl=37809,Pl=37810,Il=37811,Ll=37812,Nl=37813,Dl=37814,Fl=37815,Ul=37816,Ol=37817,Bl=37818,zl=37819,kl=37820,Hl=37821,Gl=36492,Vl=36494,Wl=36495,Xl=36283,ql=36284,Ro=36285,Yl=36286,kr=2300,Pa=2301,va=2302,Vc=2303,Wc=2400,Xc=2401,qc=2402,$d=3200,Zl=0,jd=1,Di="",mn="srgb",Hr="srgb-linear",Gr="linear",Tt="srgb",Ma=7680,Qd=519,ef=512,tf=513,nf=514,Sh=515,sf=516,rf=517,bh=518,wh=519,of=35044,Eh="300 es",Vn=2e3,tr=2001;qu={},nr=null;hf={[Sa]:Sa,[wa]:Aa,[Ea]:Ea,[er]:Ta,[ba]:ba,[Aa]:wa,[Ra]:Ra,[Ta]:er},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Ia=180/Math.PI;Nh=class Nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;Ae=Nh,Nn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let v=Math.acos(g),S=Math.sin(v);m=Math.sin(m*v)/S,a=Math.sin(a*v)/S,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dh=class Dh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;U=Dh,yc=new U,Yu=new Nn,Fh=class Fh{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],v=s[1],S=s[4],M=s[7],_=s[2],w=s[5],y=s[8];return r[0]=o*x+a*v+l*_,r[3]=o*g+a*S+l*w,r[6]=o*m+a*M+l*y,r[1]=c*x+h*v+d*_,r[4]=c*g+h*S+d*w,r[7]=c*m+h*M+d*y,r[2]=u*x+f*v+p*_,r[5]=u*g+f*S+p*w,r[8]=u*m+f*M+p*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(e,t)),this}rotate(e){return Or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return Or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;ot=Fh,vc=new ot,Zu=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt=Lm();La=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ks===void 0&&(ks=Vr("canvas")),ks.width=e.width,ks.height=e.height;let s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nm=0,ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mc(s[o].image)):r.push(Mc(s[o]))}else r=Mc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Dm=0,Sc=new U,Sn=class n extends ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ci,s=ci,r=Mn,o=Li,a=ii,l=Rn,c=n.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=mr(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gs:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gs:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=ph;Sn.DEFAULT_ANISOTROPY=1;Uh=class Uh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,_=(m+1)/2,w=(h+u)/4,y=(d+x)/4,b=(p+g)/4;return S>M&&S>_?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=y/i):M>_?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=b/s):_<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),i=y/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uh.prototype.isVector4=!0;Ft=Uh,Na=class extends ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Sn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ir(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Na{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wr=class extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Da=class extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ll=class ll{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ll().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fm,e,Um)}lookAt(e,t,i){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Vi.crossVectors(i,In),Vi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Vi.crossVectors(i,In)),Vi.normalize(),Zo.crossVectors(In,Vi),s[0]=Vi.x,s[4]=Zo.x,s[8]=In.x,s[1]=Vi.y,s[5]=Zo.y,s[9]=In.y,s[2]=Vi.z,s[6]=Zo.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],S=i[7],M=i[11],_=i[15],w=s[0],y=s[4],b=s[8],I=s[12],A=s[1],P=s[5],z=s[9],V=s[13],L=s[2],W=s[6],D=s[10],F=s[14],J=s[3],N=s[7],k=s[11],H=s[15];return r[0]=o*w+a*A+l*L+c*J,r[4]=o*y+a*P+l*W+c*N,r[8]=o*b+a*z+l*D+c*k,r[12]=o*I+a*V+l*F+c*H,r[1]=h*w+d*A+u*L+f*J,r[5]=h*y+d*P+u*W+f*N,r[9]=h*b+d*z+u*D+f*k,r[13]=h*I+d*V+u*F+f*H,r[2]=p*w+x*A+g*L+m*J,r[6]=p*y+x*P+g*W+m*N,r[10]=p*b+x*z+g*D+m*k,r[14]=p*I+x*V+g*F+m*H,r[3]=v*w+S*A+M*L+_*J,r[7]=v*y+S*P+M*W+_*N,r[11]=v*b+S*z+M*D+_*k,r[15]=v*I+S*V+M*F+_*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],v=l*f-c*u,S=a*f-c*d,M=a*u-l*d,_=o*f-c*h,w=o*u-l*h,y=o*d-a*h;return t*(x*v-g*S+m*M)-i*(p*v-g*_+m*w)+s*(p*S-x*_+m*y)-r*(p*M-x*w+g*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=t*a-i*o,S=t*l-s*o,M=t*c-r*o,_=i*l-s*a,w=i*c-r*a,y=s*c-r*l,b=h*x-d*p,I=h*g-u*p,A=h*m-f*p,P=d*g-u*x,z=d*m-f*x,V=u*m-f*g,L=v*V-S*z+M*P+_*A-w*I+y*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(a*V-l*z+c*P)*W,e[1]=(s*z-i*V-r*P)*W,e[2]=(x*y-g*w+m*_)*W,e[3]=(u*w-d*y-f*_)*W,e[4]=(l*A-o*V-c*I)*W,e[5]=(t*V-s*A+r*I)*W,e[6]=(g*M-p*y-m*S)*W,e[7]=(h*y-u*M+f*S)*W,e[8]=(o*z-a*A+c*b)*W,e[9]=(i*A-t*z-r*b)*W,e[10]=(p*w-x*M+m*v)*W,e[11]=(d*M-h*w-f*v)*W,e[12]=(a*I-o*P-l*b)*W,e[13]=(t*P-i*I+s*b)*W,e[14]=(x*S-p*_-g*v)*W,e[15]=(h*_-d*S+u*v)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,g=o*d,m=a*d,v=l*c,S=l*h,M=l*d,_=i.x,w=i.y,y=i.z;return s[0]=(1-(x+m))*_,s[1]=(f+M)*_,s[2]=(p-S)*_,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(u+m))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(p+S)*y,s[9]=(g-v)*y,s[10]=(1-(u+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),l=Hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Zn.copy(this);let c=1/o,h=1/a,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,t.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Vn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Vn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===tr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Vn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Vn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===tr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ll.prototype.isMatrix4=!0;St=ll,Hs=new U,Zn=new St,Fm=new U(0,0,0),Um=new U(1,1,1),Vi=new U,Zo=new U,In=new U,Ku=new St,$u=new Nn,jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $u.setFromEuler(this),this.setFromQuaternion($u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Om=0,ju=new U,Gs=new Nn,bi=new St,Jo=new U,Ir=new U,Bm=new U,zm=new Nn,Qu=new U(1,0,0),ed=new U(0,1,0),td=new U(0,0,1),nd={type:"added"},km={type:"removed"},Vs={type:"childadded",child:null},bc={type:"childremoved",child:null},Xt=class n extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new jn,i=new Nn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new ot}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(ed,e)}rotateZ(e){return this.rotateOnAxis(td,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(ed,e)}translateZ(e){return this.translateOnAxis(td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jo.copy(e):Jo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ir,Jo,this.up):bi.lookAt(Jo,Ir,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(bi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new U(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Lt=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hm={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};$e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=Cm(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=wc(o,r,e+1/3),this.g=wc(o,r,e),this.b=wc(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){let i=df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return gt.workingToColorSpace(pn.copy(this),e),Math.round(mt(pn.r*255,0,255))*65536+Math.round(mt(pn.g*255,0,255))*256+Math.round(mt(pn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=mn){gt.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Ko);let i=xc(Wi.h,Ko.h,t),s=xc(Wi.s,Ko.s,t),r=xc(Wi.l,Ko.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new $e;$e.NAMES=df;qr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yr=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new U,wi=new U,Ec=new U,Ei=new U,Ws=new U,Xs=new U,id=new U,Tc=new U,Ac=new U,Rc=new U,Cc=new Ft,Pc=new Ft,Ic=new Ft,Zi=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),wi.subVectors(i,t),Ec.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(wi),l=Jn.dot(Ec),c=wi.dot(wi),h=wi.dot(Ec),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Cc.setScalar(0),Pc.setScalar(0),Ic.setScalar(0),Cc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,i),Ic.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Cc,r.x),o.addScaledVector(Pc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),wi.subVectors(e,t),Jn.cross(wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Jn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),Tc.subVectors(e,i);let l=Ws.dot(Tc),c=Xs.dot(Tc);if(l<=0&&c<=0)return t.copy(i);Ac.subVectors(e,s);let h=Ws.dot(Ac),d=Xs.dot(Ac);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Ws,o);Rc.subVectors(e,r);let f=Ws.dot(Rc),p=Xs.dot(Rc);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Xs,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return id.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(id,a);let m=1/(g+x+u);return o=x*m,a=u*m,t.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ji=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),jo.subVectors(this.max,Lr),qs.subVectors(e.a,Lr),Ys.subVectors(e.b,Lr),Zs.subVectors(e.c,Lr),Xi.subVectors(Ys,qs),qi.subVectors(Zs,Ys),ds.subVectors(qs,Zs);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-ds.z,ds.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,ds.z,0,-ds.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-ds.y,ds.x,0];return!Lc(t,qs,Ys,Zs,jo)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,qs,Ys,Zs,jo))?!1:(Qo.crossVectors(Xi,qi),t=[Qo.x,Qo.y,Qo.z],Lc(t,qs,Ys,Zs,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new U,new U,new U,new U,new U,new U,new U,new U],Kn=new U,$o=new Ji,qs=new U,Ys=new U,Zs=new U,Xi=new U,qi=new U,ds=new U,Lr=new U,jo=new U,Qo=new U,fs=new U;Wt=new U,ea=new Ae,Gm=0,En=class extends ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=of,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=e!==void 0?Ah(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Pm(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Im(e,this.array)}},Zr=class extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Jr=class extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ht=class extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}},Vm=new Ji,Nr=new U,Nc=new U,Ki=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Nc)),this.expandByPoint(Nr.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wm=0,Gn=new St,Dc=new Xt,Js=new U,Ln=new Ji,Dr=new Ji,sn=new U,Pt=class n extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?Jr:Zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Ln.min,Dr.min),Ln.expandByPoint(sn),sn.addVectors(Ln.max,Dr.max),Ln.expandByPoint(sn)):(Ln.expandByPoint(Dr.min),Ln.expandByPoint(Dr.max))}Ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(e,c),sn.add(Js)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new En(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)a[I]=new U,l[I]=new U;let h=new U,d=new U,u=new U,f=new Ae,p=new Ae,x=new Ae,g=new U,m=new U;function v(I,A,P){c[I]=c[A]=c[P]=1,h.fromBufferAttribute(i,I),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,P),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,P),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let z=1/(p.x*x.y-x.x*p.y);isFinite(z)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(z),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(z),a[I].add(g),a[A].add(g),a[P].add(g),l[I].add(m),l[A].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,A=S.length;I<A;++I){let P=S[I],z=P.start,V=P.count;for(let L=z,W=z+V;L<W;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let M=new U,_=new U,w=new U,y=new U;function b(I){w.fromBufferAttribute(s,I),y.copy(w);let A=a[I];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),_.crossVectors(y,A);let z=_.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,z)}for(let I=0,A=i.count;I<A;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new En(u,h,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fc=new U,Xm=new U,qm=new ot,$n=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Fc.subVectors(i,t).cross(Xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qm.getNormalMatrix(e),s=this.coplanarPoint(Fc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ym=0,di=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=dr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new $n().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ai=new U,Uc=new U,ta=new U,na=new U,rr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Uc.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),na.copy(this.origin).sub(Uc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=na.dot(this.direction),l=-na.dot(ta),c=na.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Uc).addScaledVector(ta,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=i.x-o.x,v=i.y-o.y,S=i.z-o.z,M=Math.abs(l),_=Math.abs(c),w=Math.abs(h),y,b,I,A,P,z,V,L,W,D,F,J;if(M>=_&&M>=w?(I=l,z=d,W=p,J=m,l>=0?(y=c,b=h,A=u,P=f,V=x,L=g,D=v,F=S):(y=h,b=c,A=f,P=u,V=g,L=x,D=S,F=v)):_>=w?(I=c,z=u,W=x,J=v,c>=0?(y=h,b=l,A=f,P=d,V=g,L=p,D=S,F=m):(y=l,b=h,A=d,P=f,V=p,L=g,D=m,F=S)):(I=h,z=f,W=g,J=S,h>=0?(y=l,b=c,A=d,P=u,V=p,L=x,D=m,F=v):(y=c,b=l,A=u,P=d,V=x,L=p,D=v,F=m)),I===0)return null;let N=y/I,k=b/I,H=1/I,G=A-N*z,he=P-k*z,X=V-N*W,oe=L-k*W,pe=D-N*J,xe=F-k*J,re=pe*oe-xe*X,me=G*xe-he*pe,Ye=X*he-oe*G;if(s){if(re<0||me<0||Ye<0)return null}else if((re<0||me<0||Ye<0)&&(re>0||me>0||Ye>0))return null;let Ie=re+me+Ye;if(Ie===0)return null;let Ve=H*(re*z+me*W+Ye*J);return(Ie>0?Ve<0:Ve>0)?null:this.at(Ve/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sd=new St,ps=new rr,ia=new Ki,rd=new U,sa=new U,ra=new U,oa=new U,Oc=new U,aa=new U,od=new U,la=new U,Ht=class extends Xt{constructor(e=new Pt,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Oc.fromBufferAttribute(d,e),o?aa.addScaledVector(Oc,h):aa.addScaledVector(Oc.sub(t),h))}t.add(aa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(ia.containsPoint(ps.origin)===!1&&(ps.intersectSphere(ia,rd)===null||ps.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(sd.copy(r).invert(),ps.copy(e.ray).applyMatrix4(sd),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,_=S;M<_;M+=3){let w=a.getX(M),y=a.getX(M+1),b=a.getX(M+2);s=ca(this,m,e,i,c,h,d,w,y,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),S=a.getX(g+1),M=a.getX(g+2);s=ca(this,o,e,i,c,h,d,v,S,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,_=S;M<_;M+=3){let w=M,y=M+1,b=M+2;s=ca(this,m,e,i,c,h,d,w,y,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,S=g+1,M=g+2;s=ca(this,o,e,i,c,h,d,v,S,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};Fa=class extends Sn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,h=rn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ms=new Ki,Jm=new Ae(.5,.5),ha=new U,$i=class{constructor(e=new $n,t=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],S=r[13],M=r[14],_=r[15];if(s[0].setComponents(c-o,f-h,m-p,_-v).normalize(),s[1].setComponents(c+o,f+h,m+p,_+v).normalize(),s[2].setComponents(c+a,f+d,m+x,_+S).normalize(),s[3].setComponents(c-a,f-d,m-x,_-S).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,f-u,m-g,_-M).normalize();else if(s[4].setComponents(c-l,f-u,m-g,_-M).normalize(),t===Vn)s[5].setComponents(c+l,f+u,m+g,_+M).normalize();else if(t===tr)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=Jm.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ad=new St,Ua=class n{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ad.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new $i),i[s].setFromProjectionMatrix(ad,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new $i),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}},or=class extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oa=new U,Ba=new U,ld=new St,Fr=new rr,ua=new Ki,Bc=new U,cd=new U,za=class extends Xt{constructor(e=new Pt,t=new or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Oa.fromBufferAttribute(t,s-1),Ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Oa.distanceTo(Ba);e.setAttribute("lineDistance",new ht(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;ld.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),v=h.getX(x+1),S=da(this,e,Fr,l,m,v,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=da(this,e,Fr,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=da(this,e,Fr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=da(this,e,Fr,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};hd=new U,ud=new U,Kr=class extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)hd.fromBufferAttribute(t,s),ud.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hd.distanceTo(ud);e.setAttribute("lineDistance",new ht(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ar=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dd=new St,Yc=new rr,fa=new Ki,pa=new U,$r=class extends Xt{constructor(e=new Pt,t=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;dd.copy(s).invert(),Yc.copy(e.ray).applyMatrix4(dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);pa.fromBufferAttribute(d,g),fd(pa,g,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)pa.fromBufferAttribute(d,p),fd(pa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};jr=class extends Sn{constructor(e=[],t=Ss,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qr=class extends Sn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pi=class extends Sn{constructor(e,t,i=ei,s,r,o,a=rn,l=rn,c,h=Ci,d=1){if(h!==Ci&&h!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},eo=class extends Pi{constructor(e,t=ei,i=Ss,s,r,o=rn,a=rn,l,c=Ci){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},to=class extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kt=class n extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(d,2));function p(x,g,m,v,S,M,_,w,y,b,I){let A=M/y,P=_/b,z=M/2,V=_/2,L=w/2,W=y+1,D=b+1,F=0,J=0,N=new U;for(let k=0;k<D;k++){let H=k*P-V;for(let G=0;G<W;G++){let he=G*A-z;N[x]=he*v,N[g]=H*S,N[m]=L,c.push(N.x,N.y,N.z),N[x]=0,N[g]=0,N[m]=w>0?1:-1,h.push(N.x,N.y,N.z),d.push(G/y),d.push(1-k/b),F+=1}}for(let k=0;k<b;k++)for(let H=0;H<y;H++){let G=u+H+W*k,he=u+H+W*(k+1),X=u+(H+1)+W*(k+1),oe=u+(H+1)+W*k;l.push(G,he,oe),l.push(he,X,oe),J+=6}a.addGroup(f,J,I),f+=J,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},no=class n extends Pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},An=class n extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=i/2,m=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2));function v(){let M=new U,_=new U,w=0,y=(t-e)/i;for(let b=0;b<=r;b++){let I=[],A=b/r,P=A*(t-e)+e;for(let z=0;z<=s;z++){let V=z/s,L=V*l+a,W=Math.sin(L),D=Math.cos(L);_.x=P*W,_.y=-A*i+g,_.z=P*D,d.push(_.x,_.y,_.z),M.set(W,y,D).normalize(),u.push(M.x,M.y,M.z),f.push(V,1-A),I.push(p++)}x.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let A=x[I][b],P=x[I+1][b],z=x[I+1][b+1],V=x[I][b+1];(e>0||I!==0)&&(h.push(A,P,V),w+=3),(t>0||I!==r-1)&&(h.push(P,z,V),w+=3)}c.addGroup(m,w,0),m+=w}function S(M){let _=p,w=new Ae,y=new U,b=0,I=M===!0?e:t,A=M===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*A,0),u.push(0,A,0),f.push(.5,.5),p++;let P=p;for(let z=0;z<=s;z++){let L=z/s*l+a,W=Math.cos(L),D=Math.sin(L);y.x=I*D,y.y=g*A,y.z=I*W,d.push(y.x,y.y,y.z),u.push(0,A,0),w.x=W*.5+.5,w.y=D*.5*A+.5,f.push(w.x,w.y),p++}for(let z=0;z<s;z++){let V=_+z,L=P+z;M===!0?h.push(L,L+1,V):h.push(L+1,L,V),b+=3}c.addGroup(m,b,M===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class n extends An{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ka=class n extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new U,M=new U,_=new U;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],M),f(t[w+2],_),l(S,M,_,v)}function l(v,S,M,_){let w=_+1,y=[];for(let b=0;b<=w;b++){y[b]=[];let I=v.clone().lerp(M,b/w),A=S.clone().lerp(M,b/w),P=w-b;for(let z=0;z<=P;z++)z===0&&b===w?y[b][z]=I:y[b][z]=I.clone().lerp(A,z/P)}for(let b=0;b<w;b++)for(let I=0;I<2*(w-b)-1;I++){let A=Math.floor(I/2);I%2===0?(u(y[b][A+1]),u(y[b+1][A]),u(y[b][A])):(u(y[b][A+1]),u(y[b+1][A+1]),u(y[b+1][A]))}}function c(v){let S=new U;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let v=new U;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let M=g(v)/2/Math.PI+.5,_=m(v)/Math.PI+.5;o.push(M,1-_)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){let S=o[v+0],M=o[v+2],_=o[v+4],w=Math.max(S,M,_),y=Math.min(S,M,_);w>.9&&y<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),_<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function p(){let v=new U,S=new U,M=new U,_=new U,w=new Ae,y=new Ae,b=new Ae;for(let I=0,A=0;I<r.length;I+=9,A+=6){v.set(r[I+0],r[I+1],r[I+2]),S.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),w.set(o[A+0],o[A+1]),y.set(o[A+2],o[A+3]),b.set(o[A+4],o[A+5]),_.copy(v).add(S).add(M).divideScalar(3);let P=g(_);x(w,A+0,v,P),x(y,A+2,S,P),x(b,A+4,M,P)}}function x(v,S,M,_){_<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=_/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Qn=class n extends ka{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new U,s=[],r=[],o=[],a=new U,l=new St;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(mt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(mt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},lr=class extends Fn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ha=class extends lr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};pd=new U,md=new U,zc=new Rh,kc=new Rh,Hc=new Rh,Ga=class extends Fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(md.subVectors(s[0],s[1]).add(s[0]),c=md);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),zc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),kc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),Hc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),kc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Hc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(zc.calc(l),kc.calc(l),Hc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};io=class extends Fn{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,s.x,r.x,o.x,a.x),zr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Fn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,s.x,r.x,o.x,a.x),zr(e,s.y,r.y,o.y,a.y),zr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},so=class extends Fn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Fn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends Fn{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Fn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y),Br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(gd(a,l.x,c.x,h.x,d.x),gd(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},Zc=Object.freeze({__proto__:null,ArcCurve:Ha,CatmullRomCurve3:Ga,CubicBezierCurve:io,CubicBezierCurve3:Va,EllipseCurve:lr,LineCurve:so,LineCurve3:Wa,QuadraticBezierCurve:ro,QuadraticBezierCurve3:Xa,SplineCurve:oo}),qa=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Zc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ao=class extends qa{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new so(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ro(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new io(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new oo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new lr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fi=class extends ao{constructor(e){super(e),this.uuid=mr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ao().fromJSON(s))}return this}};$c=class{static triangulate(e,t,i=2){return i0(e,t,i)}},hi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];xd(e),yd(i,e);let o=e.length;t.forEach(xd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,yd(i,t[l]);let a=$c.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};uo=class n extends Pt{constructor(e=new fi([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:v0,S,M=!1,_,w,y,b;if(m){S=m.getSpacedPoints(h),M=!0,u=!1;let q=m.isCatmullRomCurve3?m.closed:!1;_=m.computeFrenetFrames(h,q),w=new U,y=new U,b=new U}u||(g=0,f=0,p=0,x=0);let I=a.extractPoints(c),A=I.shape,P=I.holes;if(!hi.isClockWise(A)){A=A.reverse();for(let q=0,ae=P.length;q<ae;q++){let ce=P[q];hi.isClockWise(ce)&&(P[q]=ce.reverse())}}function V(q){let ce=10000000000000001e-36,Re=q[0];for(let ue=1;ue<=q.length;ue++){let He=ue%q.length,Ce=q[He],rt=Ce.x-Re.x,Qe=Ce.y-Re.y,ct=rt*rt+Qe*Qe,O=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(Re.x),Math.abs(Re.y)),se=ce*O*O;if(ct<=se){q.splice(He,1),ue--;continue}Re=Ce}}V(A),P.forEach(V);let L=P.length,W=A;for(let q=0;q<L;q++){let ae=P[q];A=A.concat(ae)}function D(q,ae,ce){return ae||tt("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(ae,ce)}let F=A.length;function J(q,ae,ce){let Re,ue,He,Ce=q.x-ae.x,rt=q.y-ae.y,Qe=ce.x-q.x,ct=ce.y-q.y,O=Ce*Ce+rt*rt,se=Ce*ct-rt*Qe;if(Math.abs(se)>Number.EPSILON){let nt=Math.sqrt(O),it=Math.sqrt(Qe*Qe+ct*ct),be=ae.x-rt/nt,vt=ae.y+Ce/nt,We=ce.x-ct/it,qe=ce.y+Qe/it,C=((We-be)*ct-(qe-vt)*Qe)/(Ce*ct-rt*Qe);Re=be+Ce*C-q.x,ue=vt+rt*C-q.y;let E=Re*Re+ue*ue;if(E<=2)return new Ae(Re,ue);He=Math.sqrt(E/2)}else{let nt=!1;Ce>Number.EPSILON?Qe>Number.EPSILON&&(nt=!0):Ce<-Number.EPSILON?Qe<-Number.EPSILON&&(nt=!0):Math.sign(rt)===Math.sign(ct)&&(nt=!0),nt?(Re=-rt,ue=Ce,He=Math.sqrt(O)):(Re=Ce,ue=rt,He=Math.sqrt(O/2))}return new Ae(Re/He,ue/He)}let N=[];for(let q=0,ae=W.length,ce=ae-1,Re=q+1;q<ae;q++,ce++,Re++)ce===ae&&(ce=0),Re===ae&&(Re=0),N[q]=J(W[q],W[ce],W[Re]);let k=[],H,G=N.concat();for(let q=0,ae=L;q<ae;q++){let ce=P[q];H=[];for(let Re=0,ue=ce.length,He=ue-1,Ce=Re+1;Re<ue;Re++,He++,Ce++)He===ue&&(He=0),Ce===ue&&(Ce=0),H[Re]=J(ce[Re],ce[He],ce[Ce]);k.push(H),G=G.concat(H)}let he;if(g===0)he=hi.triangulateShape(W,P);else{let q=[],ae=[];for(let ce=0;ce<g;ce++){let Re=ce/g,ue=f*Math.cos(Re*Math.PI/2),He=p*Math.sin(Re*Math.PI/2)+x;for(let Ce=0,rt=W.length;Ce<rt;Ce++){let Qe=D(W[Ce],N[Ce],He);me(Qe.x,Qe.y,-ue),Re===0&&q.push(Qe)}for(let Ce=0,rt=L;Ce<rt;Ce++){let Qe=P[Ce];H=k[Ce];let ct=[];for(let O=0,se=Qe.length;O<se;O++){let nt=D(Qe[O],H[O],He);me(nt.x,nt.y,-ue),Re===0&&ct.push(nt)}Re===0&&ae.push(ct)}}he=hi.triangulateShape(q,ae)}let X=he.length,oe=p+x;for(let q=0;q<F;q++){let ae=u?D(A[q],G[q],oe):A[q];M?(y.copy(_.normals[0]).multiplyScalar(ae.x),w.copy(_.binormals[0]).multiplyScalar(ae.y),b.copy(S[0]).add(y).add(w),me(b.x,b.y,b.z)):me(ae.x,ae.y,0)}for(let q=1;q<=h;q++)for(let ae=0;ae<F;ae++){let ce=u?D(A[ae],G[ae],oe):A[ae];M?(y.copy(_.normals[q]).multiplyScalar(ce.x),w.copy(_.binormals[q]).multiplyScalar(ce.y),b.copy(S[q]).add(y).add(w),me(b.x,b.y,b.z)):me(ce.x,ce.y,d/h*q)}for(let q=g-1;q>=0;q--){let ae=q/g,ce=f*Math.cos(ae*Math.PI/2),Re=p*Math.sin(ae*Math.PI/2)+x;for(let ue=0,He=W.length;ue<He;ue++){let Ce=D(W[ue],N[ue],Re);me(Ce.x,Ce.y,d+ce)}for(let ue=0,He=P.length;ue<He;ue++){let Ce=P[ue];H=k[ue];for(let rt=0,Qe=Ce.length;rt<Qe;rt++){let ct=D(Ce[rt],H[rt],Re);M?me(ct.x,ct.y+S[h-1].y,S[h-1].x+ce):me(ct.x,ct.y,d+ce)}}}pe(),xe();function pe(){let q=s.length/3;if(u){let ae=0,ce=F*ae;for(let Re=0;Re<X;Re++){let ue=he[Re];Ye(ue[2]+ce,ue[1]+ce,ue[0]+ce)}ae=h+g*2,ce=F*ae;for(let Re=0;Re<X;Re++){let ue=he[Re];Ye(ue[0]+ce,ue[1]+ce,ue[2]+ce)}}else{for(let ae=0;ae<X;ae++){let ce=he[ae];Ye(ce[2],ce[1],ce[0])}for(let ae=0;ae<X;ae++){let ce=he[ae];Ye(ce[0]+F*h,ce[1]+F*h,ce[2]+F*h)}}i.addGroup(q,s.length/3-q,0)}function xe(){let q=s.length/3,ae=0;re(W,ae),ae+=W.length;for(let ce=0,Re=P.length;ce<Re;ce++){let ue=P[ce];re(ue,ae),ae+=ue.length}i.addGroup(q,s.length/3-q,1)}function re(q,ae){let ce=q.length;for(;--ce>=0;){let Re=ce,ue=ce-1;ue<0&&(ue=q.length-1);for(let He=0,Ce=h+g*2;He<Ce;He++){let rt=F*He,Qe=F*(He+1),ct=ae+Re+rt,O=ae+ue+rt,se=ae+ue+Qe,nt=ae+Re+Qe;Ie(ct,O,se,nt)}}}function me(q,ae,ce){l.push(q),l.push(ae),l.push(ce)}function Ye(q,ae,ce){Ve(q),Ve(ae),Ve(ce);let Re=s.length/3,ue=v.generateTopUV(i,s,Re-3,Re-2,Re-1);Fe(ue[0]),Fe(ue[1]),Fe(ue[2])}function Ie(q,ae,ce,Re){Ve(q),Ve(ae),Ve(Re),Ve(ae),Ve(ce),Ve(Re);let ue=s.length/3,He=v.generateSideWallUV(i,s,ue-6,ue-3,ue-2,ue-1);Fe(He[0]),Fe(He[1]),Fe(He[3]),Fe(He[1]),Fe(He[2]),Fe(He[3])}function Ve(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function Fe(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return M0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Zc[s.type]().fromJSON(s)),new n(i,e.options)}},v0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-d),new Ae(u,1-p),new Ae(x,1-m)]:[new Ae(a,1-l),new Ae(h,1-d),new Ae(f,1-p),new Ae(g,1-m)]}};fo=class n extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*u-o;for(let S=0;S<c;S++){let M=S*d-r;p.push(M,-v,0),x.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let S=v+c*m,M=v+c*(m+1),_=v+1+c*(m+1),w=v+1+c*m;f.push(S,M,w),f.push(M,_,w)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},xs=class n extends Pt{constructor(e=new fi([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;hi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let v=p[g];hi.isClockWise(v)===!0&&(p[g]=v.reverse())}let x=hi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){let v=x[g],S=v[0]+d,M=v[1]+d,_=v[2]+d;i.push(S,M,_),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return S0(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};po=class n extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new U,u=new U,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let v=[],S=m/i,M=o+S*a,_=e*Math.cos(M),w=Math.sqrt(e*e-_*_),y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){let I=b/t,A=s+I*r;d.x=-w*Math.cos(A),d.y=_,d.z=w*Math.sin(A),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(I+y,1-S),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let S=h[m][v+1],M=h[m][v],_=h[m+1][v],w=h[m+1][v+1];(m!==0||o>0)&&f.push(S,M,w),(m!==i-1||l<Math.PI)&&f.push(M,_,w)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};_f={clone:ws,merge:gn},w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[i].value=new St().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ya=class extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ln=class extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ji=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends ji{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xc:r=e,a=2*t-i;break;case qc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:o=e,l=2*i-t;break;case qc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*x+.5*p,M=f*g-f*x;for(let _=0;_!==a;++_)r[_]=m*o[h+_]+v*o[c+_]+S*o[l+_]+M*o[d+_];return r}},$a=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ja=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends ji{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-t)/(s-t),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*u+p*2,v=d[m],S=d[m+1],M=e*u+p*2,_=h[M],w=h[M+1],y=A0(i,t,v,_,s);r[p]=xf(y,x,S,w,g)}return r}};Un=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),_a(e.settings)&&(i.settings={inTangents:Ks(e.settings.inTangents,Array),outTangents:Ks(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case va:t=this.InterpolantFactoryMethodSmooth;break;case Vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;_a(this.settings)&&(Md(this.settings.inTangents,e),Md(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;_a(this.settings)&&(Sd(this.settings.inTangents,e),Sd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){tt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Rm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,_a(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Pa;Qi=class extends Un{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=kr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;el=class extends Un{constructor(e,t,i,s){super(e,t,i,s)}};el.prototype.ValueTypeName="color";tl=class extends Un{constructor(e,t,i,s){super(e,t,i,s)}};tl.prototype.ValueTypeName="number";nl=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},mo=class extends Un{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;es=class extends Un{constructor(e,t,i){super(e,t,i)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=kr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;il=class extends Un{constructor(e,t,i,s){super(e,t,i,s)}};il.prototype.ValueTypeName="vector";sl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yf=new sl,rl=class{constructor(e){this.manager=e!==void 0?e:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};rl.DEFAULT_MATERIAL_NAME="__DEFAULT";go=class extends Xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_o=class extends go{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Gc=new St,bd=new U,wd=new U,ol=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Gc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===tr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xa=new U,ya=new Nn,li=new U,xo=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xa,ya,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(xa,ya,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new U,Ed=new Ae,Td=new Ae,vn=class extends xo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,Td),t.subVectors(Td,Ed)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_c*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yo=class extends xo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jc=class extends ol{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vo=class extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new jc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},$s=-90,js=1,hr=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn($s,js,e,t);s.layers=this.layers,this.add(s);let r=new vn($s,js,e,t);r.layers=this.layers,this.add(r);let o=new vn($s,js,e,t);o.layers=this.layers,this.add(o);let a=new vn($s,js,e,t);a.layers=this.layers,this.add(a);let l=new vn($s,js,e,t);l.layers=this.layers,this.add(l);let c=new vn($s,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},al=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ph="\\[\\]\\.:\\/",R0=new RegExp("["+Ph+"]","g"),Ih="[^"+Ph+"]",C0="[^"+Ph.replace("\\.","")+"]",P0=/((?:WC+[\/:])*)/.source.replace("WC",Ih),I0=/(WCOD+)?/.source.replace("WCOD",C0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),N0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),D0=new RegExp("^"+P0+I0+L0+N0+"$"),F0=["material","materials","bones","map"],Qc=class{constructor(e,t,i){let s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(R0,"")}static parseTrackName(e){let t=D0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);F0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Qc;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];ib=new Float32Array(1),Oh=class Oh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Oh.prototype.isMatrix2=!0;eh=Oh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Hf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function B0(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function yx(n,e,t,i,s,r){let o=new $e(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(v){let S=!1,M=f(v);M===null?g(o,a):M&&M.isColor&&(g(M,1),S=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,S){let M=f(S);M&&M.isCubeTexture?(c===void 0&&(c=new Ht(new kt(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:ws(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xx.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gf),c.material.toneMapped=gt.getTransfer(M.colorSpace)!==Tt,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ht(new fo(2,2),new pi({name:"BackgroundMaterial",uniforms:ws(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=gt.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(Jl,Ch(n)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:p,addToRenderList:x,dispose:m}}function vx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(P,z,V,L,W){let D=!1,F=d(P,L,V,z);r!==F&&(r=F,c(r.object)),D=f(P,L,V,W),D&&p(P,L,V,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,M(P,z,V,L),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,z,V,L){let W=L.wireframe===!0,D=i[z.id];D===void 0&&(D={},i[z.id]=D);let F=P.isInstancedMesh===!0?P.id:0,J=D[F];J===void 0&&(J={},D[F]=J);let N=J[V.id];N===void 0&&(N={},J[V.id]=N);let k=N[W];return k===void 0&&(k=u(l()),N[W]=k),k}function u(P){let z=[],V=[],L=[];for(let W=0;W<t;W++)z[W]=0,V[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,z,V,L){let W=r.attributes,D=z.attributes,F=0,J=V.getAttributes();for(let N in J)if(J[N].location>=0){let H=W[N],G=D[N];if(G===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),H===void 0||H.attribute!==G||G&&H.data!==G.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function p(P,z,V,L){let W={},D=z.attributes,F=0,J=V.getAttributes();for(let N in J)if(J[N].location>=0){let H=D[N];H===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let G={};G.attribute=H,H&&H.data&&(G.data=H.data),W[N]=G,F++}r.attributes=W,r.attributesNum=F,r.index=L}function x(){let P=r.newAttributes;for(let z=0,V=P.length;z<V;z++)P[z]=0}function g(P){m(P,0)}function m(P,z){let V=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;V[P]=1,L[P]===0&&(n.enableVertexAttribArray(P),L[P]=1),W[P]!==z&&(n.vertexAttribDivisor(P,z),W[P]=z)}function v(){let P=r.newAttributes,z=r.enabledAttributes;for(let V=0,L=z.length;V<L;V++)z[V]!==P[V]&&(n.disableVertexAttribArray(V),z[V]=0)}function S(P,z,V,L,W,D,F){F===!0?n.vertexAttribIPointer(P,z,V,W,D):n.vertexAttribPointer(P,z,V,L,W,D)}function M(P,z,V,L){x();let W=L.attributes,D=V.getAttributes(),F=z.defaultAttributeValues;for(let J in D){let N=D[J];if(N.location>=0){let k=W[J];if(k===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let H=k.normalized,G=k.itemSize,he=e.get(k);if(he===void 0)continue;let X=he.buffer,oe=he.type,pe=he.bytesPerElement,xe=oe===n.INT||oe===n.UNSIGNED_INT||k.gpuType===dl;if(k.isInterleavedBufferAttribute){let re=k.data,me=re.isInterleavedBuffer===!0?re.stride:re.itemSize,Ye=k.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Ie=0;Ie<N.locationSize;Ie++)m(N.location+Ie,re.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ie=0;Ie<N.locationSize;Ie++)g(N.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,X);for(let Ie=0;Ie<N.locationSize;Ie++)S(N.location+Ie,G/N.locationSize,oe,H,me*pe,(Ye+G/N.locationSize*Ie)*pe,xe)}else{if(k.isInstancedBufferAttribute){for(let re=0;re<N.locationSize;re++)m(N.location+re,k.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let re=0;re<N.locationSize;re++)g(N.location+re);n.bindBuffer(n.ARRAY_BUFFER,X);for(let re=0;re<N.locationSize;re++)S(N.location+re,G/N.locationSize,oe,H,G*pe,G/N.locationSize*re*pe,xe)}}else if(F!==void 0){let H=F[J];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(N.location,H);break;case 3:n.vertexAttrib3fv(N.location,H);break;case 4:n.vertexAttrib4fv(N.location,H);break;default:n.vertexAttrib1fv(N.location,H)}}}}v()}function _(){I();for(let P in i){let z=i[P];for(let V in z){let L=z[V];for(let W in L){let D=L[W];for(let F in D)h(D[F].object),delete D[F];delete L[W]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let z=i[P.id];for(let V in z){let L=z[V];for(let W in L){let D=L[W];for(let F in D)h(D[F].object),delete D[F];delete L[W]}}delete i[P.id]}function y(P){for(let z in i){let V=i[z];for(let L in V){let W=V[L];if(W[P.id]===void 0)continue;let D=W[P.id];for(let F in D)h(D[F].object),delete D[F];delete W[P.id]}}}function b(P){for(let z in i){let V=i[z],L=P.isInstancedMesh===!0?P.id:0,W=V[L];if(W!==void 0){for(let D in W){let F=W[D];for(let J in F)h(F[J].object),delete F[J];delete W[D]}delete V[L],Object.keys(V).length===0&&delete i[z]}}}function I(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Mx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==ii&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let b=y===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Rn&&y!==ti&&!b&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:_,samples:w}}function bx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new $n,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,S=v*4,M=m.clippingState||null;l.value=M,M=h(p,u,S,f);for(let _=0;_!==S;++_)M[_]=t[_];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,M=f;S!==x;++S,M+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Mf(n,e,t){return new Io(n,{minFilter:Li,generateMipmaps:e,type:ni,colorSpace:Hr,depthBuffer:t})}function Lo(n,e,t){return new pi({name:n,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:cn,blending:vs,depthTest:!1,depthWrite:!1})}function Cx(){return Lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vf}u

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
	`)}function Px(){return Lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wf}},`

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
	`)}function Ix(){return Lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function Sf(){return Lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function bf(){return Lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Lx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===cl||f===hl)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Io(p.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===cl||f===hl,x=f===Ss||f===fr;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new $l(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new $l(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===cl?u.mapping=Ss:f===hl&&(u.mapping=fr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Nx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Or("WebGLRenderer: "+i+" extension not supported."),s}}}function Dx(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let g in x)e.update(x[g],n.ARRAY_BUFFER)}function d(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let v=x!==null?x.array.length:g.array.length/3-1,S=g.count>=65535?Jr:Zr,M=new S(Math.ceil(v/3)*6,1),_=M.array;if(x!==null){let y=x.array;m=x.version;for(let b=0,I=0;b<v;b+=3){let A=y[b+0],P=y[b+1],z=y[b+2];_[I++]=A,_[I++]=P,_[I++]=P,_[I++]=z,_[I++]=z,_[I++]=A}}else{m=g.version;for(let y=0,b=0;y<v;y+=3){let I=y+0,A=y+1,P=y+2;_[b++]=I,_[b++]=A,_[b++]=A,_[b++]=P,_[b++]=P,_[b++]=I}}M.version=m;let w=r.get(p);w&&e.remove(w),r.set(p,M)}function u(p){let x=r.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Fx(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ux(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ox(n,e,t){let i=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let I=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,_=1;M>e.maxTextureSize&&(_=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*_*4*d),y=new Wr(w,M,_,d);y.type=ti,y.needsUpdate=!0;let b=S*4;for(let A=0;A<d;A++){let P=g[A],z=m[A],V=v[A],L=M*_*4*A;for(let W=0;W<P.count;W++){let D=W*b;f===!0&&(s.fromBufferAttribute(P,W),w[L+D+0]=s.x,w[L+D+1]=s.y,w[L+D+2]=s.z,w[L+D+3]=0),p===!0&&(s.fromBufferAttribute(z,W),w[L+D+4]=s.x,w[L+D+5]=s.y,w[L+D+6]=s.z,w[L+D+7]=0),x===!0&&(s.fromBufferAttribute(V,W),w[L+D+8]=s.x,w[L+D+9]=s.y,w[L+D+10]=s.z,w[L+D+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:y,size:new Ae(M,_)},i.set(a,u),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Bx(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function kx(n,e,t,i,s,r){let o=new Dn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Pt;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let d=new Ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ht(h,d),f=new yo(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,v=null,S=[],M=!1;this.setSize=function(_,w){o.setSize(_,w),a!==null&&a.setSize(_,w),l!==null&&l.setSize(_,w);for(let y=0;y<S.length;y++){let b=S[y];b.setSize&&b.setSize(_,w)}},this.setEffects=function(_){S=_,M=S.length>0&&S[0].isRenderPass===!0;let w=o.width,y=o.height;S.length>0&&a===null&&(a=new Dn(w,y,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(w,y,{type:ni,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(I=>I.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Pi(w,y),r===!0&&(c.format=Ni,c.type=bs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let I=0;I<S.length;I++){let A=S[I];A.setSize&&A.setSize(w,y),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(_,w){if(g||_.toneMapping===mi&&S.length===0)return!1;if(v=w,w!==null){let y=w.width,b=w.height;(o.width!==y||o.height!==b)&&this.setSize(y,b)}return M===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=mi,!0},this.hasRenderPass=function(){return M},this.end=function(_,w){_.toneMapping=m,g=!0;let y=o,b=a;for(let I=0;I<S.length;I++){let A=S[I];A.enabled!==!1&&(A.render(_,b,y,w),A.needsSwap!==!1&&(y=b,b=b===a?l:a))}if(p!==_.outputColorSpace||x!==_.toneMapping){p=_.outputColorSpace,x=_.toneMapping,d.defines={},gt.getTransfer(p)===Tt&&(d.defines.SRGB_TRANSFER="");let I=zx[x];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,_.setRenderTarget(v),_.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function _r(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ql(n,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function Vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function Wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function Xx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if($t(t,i))return;Rf.set(i),n.uniformMatrix2fv(this.addr,!1,Rf),jt(t,i)}}function qx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if($t(t,i))return;Af.set(i),n.uniformMatrix3fv(this.addr,!1,Af),jt(t,i)}}function Yx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if($t(t,i))return;Tf.set(i),n.uniformMatrix4fv(this.addr,!1,Tf),jt(t,i)}}function Zx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function Kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function $x(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function jx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function ec(n){return n.version===0&&(n.compareFunction=wh,n.needsUpdate=!0),n}function ny(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ec(qf):r=Xf,t.setTexture2D(e||r,s)}function iy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jf,s)}function sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ec(Yf):r=Kf,t.setTextureCube(e||r,s)}function ry(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zf,s)}function oy(n){switch(n){case 5126:return Hx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Kx;case 35669:case 35673:return $x;case 5125:return jx;case 36294:return Qx;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}function ay(n,e){n.uniform1fv(this.addr,e)}function ly(n,e){let t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function cy(n,e){let t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function hy(n,e){let t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function uy(n,e){let t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dy(n,e){let t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fy(n,e){let t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function py(n,e){n.uniform1iv(this.addr,e)}function my(n,e){n.uniform2iv(this.addr,e)}function gy(n,e){n.uniform3iv(this.addr,e)}function _y(n,e){n.uniform4iv(this.addr,e)}function xy(n,e){n.uniform1uiv(this.addr,e)}function yy(n,e){n.uniform2uiv(this.addr,e)}function vy(n,e){n.uniform3uiv(this.addr,e)}function My(n,e){n.uniform4uiv(this.addr,e)}function Sy(n,e,t){let i=this.cache,s=e.length,r=Ql(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ec(qf):o=Xf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function by(n,e,t){let i=this.cache,s=e.length,r=Ql(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jf,r[o])}function wy(n,e,t){let i=this.cache,s=e.length,r=Ql(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ec(Yf):o=Kf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Ey(n,e,t){let i=this.cache,s=e.length,r=Ql(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zf,r[o])}function Ty(n){switch(n){case 5126:return ay;case 35664:return ly;case 35665:return cy;case 35666:return hy;case 35674:return uy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return xy;case 36294:return yy;case 36295:return vy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ey}}function Cf(n,e){n.seq.push(e),n.map[e.id]=e}function Ay(n,e,t){let i=n.name,s=i.length;for(zh.lastIndex=0;;){let r=zh.exec(i),o=zh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cf(t,c===void 0?new Hh(a,n,e):new Gh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Vh(a),Cf(t,d)),t=d}}}function Pf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Py(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Iy(n){gt._getMatrix(If,gt.workingColorSpace,n);let e=`mat3( ${If.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Gr:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Py(n.getShaderSource(e),a)}else return r}function Ly(n,e){let t=Iy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Dy(n,e){let t=Ny[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fy(){gt.getLuminanceCoefficients(Kl);let n=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Oy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function By(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Po(n){return n!==""}function Nf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Wh(n){return n.replace(zy,ky)}function ky(n,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wh(t)}function Ff(n){return n.replace(Hy,Gy)}function Gy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wy(n){return Vy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function qy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Xy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Zy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Yy[n.combine]||"ENVMAP_BLENDING_NONE"}function Jy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Wy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qy(t),d=Zy(t),u=Uy(t),f=Oy(r),p=s.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Po).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Po).join(`
`),g.length>0&&(g+=`
`)):(x=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),g=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ft.tonemapping_pars_fragment:"",t.toneMapping!==mi?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=Wh(o),o=Nf(o,t),o=Df(o,t),a=Wh(a),a=Nf(a,t),a=Df(a,t),o=Ff(o),a=Ff(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+x+o,S=m+g+a,M=Pf(s,s.VERTEX_SHADER,v),_=Pf(s,s.FRAGMENT_SHADER,S);s.attachShader(p,M),s.attachShader(p,_),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(A){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(_)||"",L=P.trim(),W=z.trim(),D=V.trim(),F=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,_);else{let N=Lf(s,M,"vertex"),k=Lf(s,_,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+N+`
`+k)}else L!==""?Ke("WebGLProgram: Program Info Log:",L):(W===""||D==="")&&(J=!1);J&&(A.diagnostics={runnable:F,programLog:L,vertexShader:{log:W,prefix:x},fragmentShader:{log:D,prefix:g}})}s.deleteShader(M),s.deleteShader(_),y=new gr(s,p),b=By(s,p)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(p,Ry)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=_,this}function $y(n){return n===ns||n===Ao||n===Ro}function jy(n,e,t,i,s,r){let o=new Xr,a=new Xh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,b,I,A,P,z){let V=A.fog,L=P.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||W,D),J=u[y.type],N=i.precision;y.precision!==null&&(N=i.getMaxPrecision(y.precision),N!==y.precision&&Ke("WebGLProgram.getParameters:",y.precision,"not supported, using",N,"instead."));let k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,H=k!==void 0?k.length:0,G=0;L.morphAttributes.position!==void 0&&(G=1),L.morphAttributes.normal!==void 0&&(G=2),L.morphAttributes.color!==void 0&&(G=3);let he,X,oe,pe;if(J){let ye=_i[J];he=ye.vertexShader,X=ye.fragmentShader}else{he=y.vertexShader,X=y.fragmentShader;let ye=a.getVertexShaderStage(y),ut=a.getFragmentShaderStage(y);a.update(y,ye,ut),oe=ye.id,pe=ut.id}let xe=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),me=P.isInstancedMesh===!0,Ye=P.isBatchedMesh===!0,Ie=!!y.map,Ve=!!y.matcap,Fe=!!F,q=Fe&&F.isPMREMTexture===!0,ae=!!y.aoMap,ce=!!y.lightMap,Re=!!y.bumpMap&&y.wireframe===!1,ue=!!y.normalMap,He=!!y.displacementMap,Ce=!!y.emissiveMap,rt=!!y.metalnessMap,Qe=!!y.roughnessMap,ct=y.anisotropy>0,O=y.clearcoat>0,se=y.diffuseRoughness>0,nt=y.dispersion>0,it=y.retroreflectivity>0,be=y.iridescence>0,vt=y.sheen>0,We=y.transmission>0,qe=ct&&!!y.anisotropyMap,C=O&&!!y.clearcoatMap,E=O&&!!y.clearcoatNormalMap,Y=O&&!!y.clearcoatRoughnessMap,fe=se&&!!y.diffuseRoughnessMap,ie=be&&!!y.iridescenceMap,Se=be&&!!y.iridescenceThicknessMap,Ee=vt&&!!y.sheenColorMap,te=vt&&!!y.sheenRoughnessMap,ne=!!y.specularMap,Me=!!y.specularColorMap,R=!!y.specularIntensityMap,K=We&&!!y.transmissionMap,j=We&&!!y.thicknessMap,ge=!!y.gradientMap,le=!!y.alphaMap,de=y.alphaTest>0,Le=!!y.alphaHash,lt=!!y.extensions,_e=mi;y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(_e=n.toneMapping);let Xe=q?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,ke={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:he,fragmentShader:X,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:N,batching:Ye,batchingColor:Ye&&P._colorsTexture!==null,instancing:me,instancingColor:me&&P.instanceColor!==null,instancingMorph:me&&P.morphTexture!==null,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:Ve,envMap:Fe,envMapMode:Fe&&F.mapping,envMapPMREM:q,envMapMaxLod:q?Xe.length-1:null,envMapSize:q?Xe[0].width:null,aoMap:ae,lightMap:ce,bumpMap:Re,normalMap:ue,displacementMap:He,emissiveMap:Ce,normalMapObjectSpace:ue&&y.normalMapType===jd,normalMapTangentSpace:ue&&y.normalMapType===Zl,packedNormalMap:ue&&y.normalMapType===Zl&&$y(y.normalMap.format),metalnessMap:rt,roughnessMap:Qe,anisotropy:ct,anisotropyMap:qe,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:Y,diffuseRoughness:se,diffuseRoughnessMap:fe,dispersion:nt,retroreflection:it,iridescence:be,iridescenceMap:ie,iridescenceThicknessMap:Se,sheen:vt,sheenColorMap:Ee,sheenRoughnessMap:te,specularMap:ne,specularColorMap:Me,specularIntensityMap:R,transmission:We,transmissionMap:K,thicknessMap:j,gradientMap:ge,opaque:y.transparent===!1&&y.blending===dr&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Le,combine:y.combine,mapUv:Ie&&f(y.map.channel),aoMapUv:ae&&f(y.aoMap.channel),lightMapUv:ce&&f(y.lightMap.channel),bumpMapUv:Re&&f(y.bumpMap.channel),normalMapUv:ue&&f(y.normalMap.channel),displacementMapUv:He&&f(y.displacementMap.channel),emissiveMapUv:Ce&&f(y.emissiveMap.channel),metalnessMapUv:rt&&f(y.metalnessMap.channel),roughnessMapUv:Qe&&f(y.roughnessMap.channel),anisotropyMapUv:qe&&f(y.anisotropyMap.channel),clearcoatMapUv:C&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:te&&f(y.sheenRoughnessMap.channel),specularMapUv:ne&&f(y.specularMap.channel),specularColorMapUv:Me&&f(y.specularColorMap.channel),specularIntensityMapUv:R&&f(y.specularIntensityMap.channel),transmissionMapUv:K&&f(y.transmissionMap.channel),thicknessMapUv:j&&f(y.thicknessMap.channel),alphaMapUv:le&&f(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ue||ct),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Ie||le),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&ue===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:G,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ce&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)b.push(I),b.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(g(b,y),m(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function g(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function m(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){let b=u[y.type],I;if(b){let A=_i[b];I=_f.clone(A.uniforms)}else I=y.uniforms;return I}function S(y,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new Jy(n,b,y,s),c.push(I),h.set(b,I)),I}function M(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function _(y){a.remove(y)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:_,programs:c,dispose:w}}function Qy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Of(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,g,m){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},n[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),e++,v}function l(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let S=a(u,f,p,x,g,m);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(u,f,p,x,g,m){let v=a(u,f,p,x,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||ev),i.length>1&&i.sort(f||Of),s.length>1&&s.sort(f||Of)}function d(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function tv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Bf,n.set(i,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new $e};break;case"SpotLight":t={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function iv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ov(n){let e=new nv,t=iv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new St,o=new St;function a(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,S=0,M=0,_=0,w=0,y=0,b=0,I=0,A=0;c.sort(rv);for(let z=0,V=c.length;z<V;z++){let L=c[z],W=L.color,D=L.intensity,F=L.distance,J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ns?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*D,d+=W.g*D,u+=W.b*D;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],D);A++}else if(L.isSunLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,H=t.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[p]=H,i.sunShadowMap[p]=J;let G=k.getViewportCount();for(let he=0;he<G;he++)i.sunShadowMatrix[x+he]=k.getMatrix(he),i.sunShadowCascade[x+he]=k._cascadeData[he];x+=G,p++}i.sun[f]=N,f++}else if(L.isDirectionalLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,H=t.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=L.shadow.matrix,_++}i.directional[g]=N,g++}else if(L.isSpotLight){let N=e.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(W).multiplyScalar(D),N.distance=F,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[v]=N;let k=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,k.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[v]=k.matrix,L.castShadow){let H=t.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=J,y++}v++}else if(L.isRectAreaLight){let N=e.get(L);N.color.copy(W).multiplyScalar(D),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=N,S++}else if(L.isPointLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){let k=L.shadow,H=t.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=L.shadow.matrix,w++}i.point[m]=N,m++}else if(L.isHemisphereLight){let N=e.get(L);N.skyColor.copy(L.color).multiplyScalar(D),N.groundColor.copy(L.groundColor).multiplyScalar(D),i.hemi[M]=N,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==S||P.hemiLength!==M||P.numSunShadows!==p||P.numDirectionalShadows!==_||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==b||P.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=S,i.point.length=m,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=A,P.sunLength=f,P.directionalLength=g,P.pointLength=m,P.spotLength=v,P.rectAreaLength=S,P.hemiLength=M,P.numSunShadows=p,P.numDirectionalShadows=_,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=b,P.numLightProbes=A,i.version=sv++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let _=i.sun[d];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),d++}else if(M.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=i.rectArea[x];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let _=i.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function zf(n){let e=new ov(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function av(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new zf(n),e.set(s,[a])):r>=o.length?(a=new zf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function dv(n,e,t){let i=new $i,s=new Ae,r=new Ae,o=new Ft,a=new Za,l=new Ja,c={},h=t.maxTextureSize,d={[ts]:cn,[cn]:ts,[qt]:qt},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:lv,fragmentShader:cv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Pt;p.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ht(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let m=this.type;this.render=function(w,y,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Cd&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let I=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(vs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=m!==this.type;V&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=w.length;L<W;L++){let D=w[L],F=D.shadow;if(F===void 0){Ke("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let J=F.getFrameExtents();s.multiply(J),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,F.mapSize.y=r.y));let N=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=N,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ur){if(D.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Dn(s.x,s.y,{format:ns,type:ni,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new Pi(s.x,s.y,ti),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=Ci,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=rn,F.map.depthTexture.magFilter=rn}else D.isPointLight?(F.map=new Io(s.x),F.map.depthTexture=new eo(s.x,ei)):(F.map=new Dn(s.x,s.y),F.map.depthTexture=new Pi(s.x,s.y,ei)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=Ci,this.type===ys?(F.map.depthTexture.compareFunction=N?bh:Sh,F.map.depthTexture.minFilter=Mn,F.map.depthTexture.magFilter=Mn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=rn,F.map.depthTexture.magFilter=rn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let k=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();D.isPointLight!==!0&&F.updateMatrices(D,b);let H=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let G=0;G<k;G++){let he=F.getCamera(G);if(D.isPointLight){let X=F.camera,oe=F.matrix,pe=D.distance||X.far;pe!==X.far&&(X.far=pe,X.updateProjectionMatrix()),Co.setFromMatrixPosition(D.matrixWorld),X.position.copy(Co),kh.copy(X.position),kh.add(hv[G]),X.up.copy(uv[G]),X.lookAt(kh),X.updateMatrixWorld(),oe.makeTranslation(-Co.x,-Co.y,-Co.z),kf.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),F._frustum.setFromProjectionMatrix(kf,X.coordinateSystem,X.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,G),n.clear();else{G===0&&(n.setRenderTarget(F.map),n.clear());let X=F.getViewport(G);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),z.viewport(o)}i=F.getFrustum(G),M(y,b,he,D,H,this.type)}F.isPointLightShadow!==!0&&this.type===ur&&v(F,b),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(I,A,P)};function v(w,y){let b=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Dn(s.x,s.y,{format:ns,type:ni}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(y,null,b,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(y,null,b,f,x,null)}function S(w,y,b,I){let A=null,P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)A=P;else if(A=b.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let z=A.uuid,V=y.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let W=L[V];W===void 0&&(W=A.clone(),L[V]=W,y.addEventListener("dispose",_)),A=W}if(A.visible=y.visible,A.wireframe=y.wireframe,I===ur?A.side=y.shadowSide!==null?y.shadowSide:y.side:A.side=y.shadowSide!==null?y.shadowSide:d[y.side],A.alphaMap=y.alphaMap,A.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,A.map=y.map,A.clipShadows=y.clipShadows,A.clippingPlanes=y.clippingPlanes,A.clipIntersection=y.clipIntersection,A.displacementMap=y.displacementMap,A.displacementScale=y.displacementScale,A.displacementBias=y.displacementBias,A.wireframeLinewidth=y.wireframeLinewidth,A.linewidth=y.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=n.properties.get(A);z.light=b}return A}function M(w,y,b,I,A,P){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===ur)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let L=e.update(w),W=w.material;if(Array.isArray(W)){let D=L.groups;for(let F=0,J=D.length;F<J;F++){let N=D[F],k=W[N.materialIndex];if(k&&k.visible){let H=S(w,k,I,P);w.onBeforeShadow(n,w,y,b,L,H,N),n.renderBufferDirect(b,null,L,H,w,N),w.onAfterShadow(n,w,y,b,L,H,N)}}}else if(W.visible){let D=S(w,W,I,P);w.onBeforeShadow(n,w,y,b,L,D,null),n.renderBufferDirect(b,null,L,D,w,null),w.onAfterShadow(n,w,y,b,L,D,null)}}let V=w.children;for(let L=0,W=V.length;L<W;L++)M(V[L],y,b,I,A,P)}function _(w){w.target.removeEventListener("dispose",_);for(let b in c){let I=c[b],A=w.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function fv(n,e){function t(){let R=!1,K=new Ft,j=null,ge=new Ft(0,0,0,0);return{setMask:function(le){j!==le&&!R&&(n.colorMask(le,le,le,le),j=le)},setLocked:function(le){R=le},setClear:function(le,de,Le,lt,_e){_e===!0&&(le*=lt,de*=lt,Le*=lt),K.set(le,de,Le,lt),ge.equals(K)===!1&&(n.clearColor(le,de,Le,lt),ge.copy(K))},reset:function(){R=!1,j=null,ge.set(-1,0,0,0)}}}function i(){let R=!1,K=!1,j=null,ge=null,le=null;return{setReversed:function(de){if(K!==de){let Le=e.get("EXT_clip_control");de?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),K=de;let lt=le;le=null,this.setClear(lt)}},getReversed:function(){return K},setTest:function(de){de?re(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(de){j!==de&&!R&&(n.depthMask(de),j=de)},setFunc:function(de){if(K&&(de=hf[de]),ge!==de){switch(de){case Sa:n.depthFunc(n.NEVER);break;case ba:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Ea:n.depthFunc(n.EQUAL);break;case Ta:n.depthFunc(n.GEQUAL);break;case Aa:n.depthFunc(n.GREATER);break;case Ra:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=de}},setLocked:function(de){R=de},setClear:function(de){le!==de&&(le=de,K&&(de=1-de),n.clearDepth(de))},reset:function(){R=!1,j=null,ge=null,le=null,K=!1}}}function s(){let R=!1,K=null,j=null,ge=null,le=null,de=null,Le=null,lt=null,_e=null;return{setTest:function(Xe){R||(Xe?re(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(Xe){K!==Xe&&!R&&(n.stencilMask(Xe),K=Xe)},setFunc:function(Xe,ke,ye){(j!==Xe||ge!==ke||le!==ye)&&(n.stencilFunc(Xe,ke,ye),j=Xe,ge=ke,le=ye)},setOp:function(Xe,ke,ye){(de!==Xe||Le!==ke||lt!==ye)&&(n.stencilOp(Xe,ke,ye),de=Xe,Le=ke,lt=ye)},setLocked:function(Xe){R=Xe},setClear:function(Xe){_e!==Xe&&(n.clearStencil(Xe),_e=Xe)},reset:function(){R=!1,K=null,j=null,ge=null,le=null,de=null,Le=null,lt=null,_e=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,S=null,M=null,_=null,w=null,y=null,b=new $e(0,0,0),I=0,A=!1,P=null,z=null,V=null,L=null,W=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,J=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(N)[1]),F=J>=1):N.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),F=J>=2);let k=null,H={},G=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),X=new Ft().fromArray(G),oe=new Ft().fromArray(he);function pe(R,K,j,ge){let le=new Uint8Array(4),de=n.createTexture();n.bindTexture(R,de),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<j;Le++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(K+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return de}let xe={};xe[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(er),Re(!1),ue(th),re(n.CULL_FACE),ae(vs);function re(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function me(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Ye(R,K){return u[R]!==K?(n.bindFramebuffer(R,K),u[R]=K,R===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),R===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function Ie(R,K){let j=p,ge=!1;if(R){j=f.get(K),j===void 0&&(j=[],f.set(K,j));let le=R.textures;if(j.length!==le.length||j[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Le=le.length;de<Le;de++)j[de]=n.COLOR_ATTACHMENT0+de;j.length=le.length,ge=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ge=!0);ge&&n.drawBuffers(j)}function Ve(R){return x!==R?(n.useProgram(R),x=R,!0):!1}let Fe={[Ms]:n.FUNC_ADD,[Id]:n.FUNC_SUBTRACT,[Ld]:n.FUNC_REVERSE_SUBTRACT};Fe[Nd]=n.MIN,Fe[Dd]=n.MAX;let q={[Fd]:n.ZERO,[Ud]:n.ONE,[Od]:n.SRC_COLOR,[rh]:n.SRC_ALPHA,[Vd]:n.SRC_ALPHA_SATURATE,[Hd]:n.DST_COLOR,[zd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[oh]:n.ONE_MINUS_SRC_ALPHA,[Gd]:n.ONE_MINUS_DST_COLOR,[kd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(R,K,j,ge,le,de,Le,lt,_e,Xe){if(R===vs){g===!0&&(me(n.BLEND),g=!1);return}if(g===!1&&(re(n.BLEND),g=!0),R!==Pd){if(R!==m||Xe!==A){if((v!==Ms||_!==Ms)&&(n.blendEquation(n.FUNC_ADD),v=Ms,_=Ms),Xe)switch(R){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nh:n.blendFunc(n.ONE,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",R);break}else switch(R){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ih:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",R);break}S=null,M=null,w=null,y=null,b.set(0,0,0),I=0,m=R,A=Xe}return}le=le||K,de=de||j,Le=Le||ge,(K!==v||le!==_)&&(n.blendEquationSeparate(Fe[K],Fe[le]),v=K,_=le),(j!==S||ge!==M||de!==w||Le!==y)&&(n.blendFuncSeparate(q[j],q[ge],q[de],q[Le]),S=j,M=ge,w=de,y=Le),(lt.equals(b)===!1||_e!==I)&&(n.blendColor(lt.r,lt.g,lt.b,_e),b.copy(lt),I=_e),m=R,A=!1}function ce(R,K){R.side===qt?me(n.CULL_FACE):re(n.CULL_FACE);let j=R.side===cn;K&&(j=!j),Re(j),R.blending===dr&&R.transparent===!1?ae(vs):ae(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let ge=R.stencilWrite;a.setTest(ge),ge&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ce(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(R){P!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),P=R)}function ue(R){R!==Ad?(re(n.CULL_FACE),R!==z&&(R===th?n.cullFace(n.BACK):R===Rd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),z=R}function He(R){R!==V&&(F&&n.lineWidth(R),V=R)}function Ce(R,K,j){R?(re(n.POLYGON_OFFSET_FILL),(L!==K||W!==j)&&(L=K,W=j,o.getReversed()&&(K=-K,j=-j),n.polygonOffset(K,j))):me(n.POLYGON_OFFSET_FILL)}function rt(R){R?re(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Qe(R){R===void 0&&(R=n.TEXTURE0+D-1),k!==R&&(n.activeTexture(R),k=R)}function ct(R,K,j){j===void 0&&(k===null?j=n.TEXTURE0+D-1:j=k);let ge=H[j];ge===void 0&&(ge={type:void 0,texture:void 0},H[j]=ge),(ge.type!==R||ge.texture!==K)&&(k!==j&&(n.activeTexture(j),k=j),n.bindTexture(R,K||xe[R]),ge.type=R,ge.texture=K)}function O(){let R=H[k];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function se(){try{n.compressedTexImage2D(...arguments)}catch(R){tt("WebGLState:",R)}}function nt(){try{n.compressedTexImage3D(...arguments)}catch(R){tt("WebGLState:",R)}}function it(){try{n.texSubImage2D(...arguments)}catch(R){tt("WebGLState:",R)}}function be(){try{n.texSubImage3D(...arguments)}catch(R){tt("WebGLState:",R)}}function vt(){try{n.compressedTexSubImage2D(...arguments)}catch(R){tt("WebGLState:",R)}}function We(){try{n.compressedTexSubImage3D(...arguments)}catch(R){tt("WebGLState:",R)}}function qe(){try{n.texStorage2D(...arguments)}catch(R){tt("WebGLState:",R)}}function C(){try{n.texStorage3D(...arguments)}catch(R){tt("WebGLState:",R)}}function E(){try{n.texImage2D(...arguments)}catch(R){tt("WebGLState:",R)}}function Y(){try{n.texImage3D(...arguments)}catch(R){tt("WebGLState:",R)}}function fe(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function ie(R,K){d[R]!==K&&(n.pixelStorei(R,K),d[R]=K)}function Se(R){X.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),X.copy(R))}function Ee(R){oe.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),oe.copy(R))}function te(R,K){let j=c.get(K);j===void 0&&(j=new WeakMap,c.set(K,j));let ge=j.get(R);ge===void 0&&(ge=n.getUniformBlockIndex(K,R.name),n.uniformBlockBinding(K,ge,ge),j.set(R,ge))}function ne(R,K,j){let le=c.get(K).get(R);l[le]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,j),l[le]=j)}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},k=null,H={},u={},l={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,S=null,M=null,_=null,w=null,y=null,b=new $e(0,0,0),I=0,A=!1,P=null,z=null,V=null,L=null,W=null,X.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:me,bindFramebuffer:Ye,drawBuffers:Ie,useProgram:Ve,setBlending:ae,setMaterial:ce,setFlipSided:Re,setCullFace:ue,setLineWidth:He,setPolygonOffset:Ce,setScissorTest:rt,activeTexture:Qe,bindTexture:ct,unbindTexture:O,compressedTexImage2D:se,compressedTexImage3D:nt,texImage2D:E,texImage3D:Y,pixelStorei:ie,getParameter:fe,updateUBOMapping:te,uniformBlockBinding:ne,texStorage2D:qe,texStorage3D:C,texSubImage2D:it,texSubImage3D:be,compressedTexSubImage2D:vt,compressedTexSubImage3D:We,scissor:Se,viewport:Ee,reset:Me}}function pv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,E){return g?new OffscreenCanvas(C,E):Vr("canvas")}function v(C,E,Y){let fe=1,ie=qe(C);if((ie.width>Y||ie.height>Y)&&(fe=Y/Math.max(ie.width,ie.height)),fe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Se=Math.floor(fe*ie.width),Ee=Math.floor(fe*ie.height);u===void 0&&(u=m(Se,Ee));let te=E?m(Se,Ee):u;return te.width=Se,te.height=Ee,te.getContext("2d").drawImage(C,0,0,Se,Ee),Ke("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Se+"x"+Ee+")."),te}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function S(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,E,Y,fe,ie,Se=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ee;fe&&(Ee=e.get("EXT_texture_norm16"),Ee||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=E;if(E===n.RED&&(Y===n.FLOAT&&(te=n.R32F),Y===n.HALF_FLOAT&&(te=n.R16F),Y===n.UNSIGNED_BYTE&&(te=n.R8),Y===n.UNSIGNED_SHORT&&Ee&&(te=Ee.R16_EXT),Y===n.SHORT&&Ee&&(te=Ee.R16_SNORM_EXT)),E===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.R8UI),Y===n.UNSIGNED_SHORT&&(te=n.R16UI),Y===n.UNSIGNED_INT&&(te=n.R32UI),Y===n.BYTE&&(te=n.R8I),Y===n.SHORT&&(te=n.R16I),Y===n.INT&&(te=n.R32I)),E===n.RG&&(Y===n.FLOAT&&(te=n.RG32F),Y===n.HALF_FLOAT&&(te=n.RG16F),Y===n.UNSIGNED_BYTE&&(te=n.RG8),Y===n.UNSIGNED_SHORT&&Ee&&(te=Ee.RG16_EXT),Y===n.SHORT&&Ee&&(te=Ee.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RG8UI),Y===n.UNSIGNED_SHORT&&(te=n.RG16UI),Y===n.UNSIGNED_INT&&(te=n.RG32UI),Y===n.BYTE&&(te=n.RG8I),Y===n.SHORT&&(te=n.RG16I),Y===n.INT&&(te=n.RG32I)),E===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGB16UI),Y===n.UNSIGNED_INT&&(te=n.RGB32UI),Y===n.BYTE&&(te=n.RGB8I),Y===n.SHORT&&(te=n.RGB16I),Y===n.INT&&(te=n.RGB32I)),E===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),Y===n.UNSIGNED_INT&&(te=n.RGBA32UI),Y===n.BYTE&&(te=n.RGBA8I),Y===n.SHORT&&(te=n.RGBA16I),Y===n.INT&&(te=n.RGBA32I)),E===n.RGB&&(Y===n.UNSIGNED_SHORT&&Ee&&(te=Ee.RGB16_EXT),Y===n.SHORT&&Ee&&(te=Ee.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),E===n.RGBA){let ne=Se?Gr:gt.getTransfer(ie);Y===n.FLOAT&&(te=n.RGBA32F),Y===n.HALF_FLOAT&&(te=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(te=ne===Tt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Ee&&(te=Ee.RGBA16_EXT),Y===n.SHORT&&Ee&&(te=Ee.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(C,E){let Y;return C?E===null||E===ei||E===bs?Y=n.DEPTH24_STENCIL8:E===ti?Y=n.DEPTH32F_STENCIL8:E===pr&&(Y=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ei||E===bs?Y=n.DEPTH_COMPONENT24:E===ti?Y=n.DEPTH_COMPONENT32F:E===pr&&(Y=n.DEPTH_COMPONENT16),Y}function b(C,E){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){let E=new WeakRef(C);i.get(C).__ref=E,p.add(E),x.register(C,E,E)}function A(C){let E=i.get(C).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function P(C){V(C.target)}function z(C){L(C.target)}function V(C){C.removeEventListener("dispose",P),A(C),D(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function L(C){C.removeEventListener("dispose",z),A(C),J(C)}function W(){for(let C of p){let E=C.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):V(E))}p.clear(),d.clear()}function D(C){let E=i.get(C);if(E.__webglInit===void 0)return;let Y=C.source,fe=f.get(Y);if(fe){let ie=fe[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(C),Object.keys(fe).length===0&&f.delete(Y)}i.remove(C)}function F(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let Y=C.source,fe=f.get(Y);delete fe[E.__cacheKey],o.memory.textures--}function J(C){let E=i.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();let Y=C.depthTexture;if(Y&&Y.renderTarget===C&&V(Y),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let Se=0;Se<E.__webglFramebuffer[ie].length;Se++)n.deleteFramebuffer(E.__webglFramebuffer[ie][Se]);else n.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)n.deleteFramebuffer(E.__webglFramebuffer[ie]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let fe=C.textures;for(let ie=0,Se=fe.length;ie<Se;ie++){let Ee=i.get(fe[ie]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(fe[ie])}i.remove(C)}let N=0;function k(){N=0}function H(){return N}function G(C){N=C}function he(){let C=N;return C>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function X(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function oe(C,E){let Y=i.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let fe=C.image;if(fe===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Y,C,E);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+E)}function pe(C,E){let Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){ce(Y,C,E);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+E)}function xe(C,E){let Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){ce(Y,C,E);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+E)}function re(C,E){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Re(Y,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+E)}let me={[gs]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Ca]:n.MIRRORED_REPEAT},Ye={[rn]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[So]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[ul]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},Ie={[ef]:n.NEVER,[wh]:n.ALWAYS,[tf]:n.LESS,[Sh]:n.LEQUAL,[nf]:n.EQUAL,[bh]:n.GEQUAL,[sf]:n.GREATER,[rf]:n.NOTEQUAL};function Ve(C,E){if(E.type===ti&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===ul||E.magFilter===So||E.magFilter===Li||E.minFilter===Mn||E.minFilter===ul||E.minFilter===So||E.minFilter===Li)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,me[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,me[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,me[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ye[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ye[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===rn||E.minFilter!==So&&E.minFilter!==Li||E.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Fe(C,E){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",P),I(E));let fe=E.source,ie=f.get(fe);ie===void 0&&(ie={},f.set(fe,ie));let Se=X(E);if(Se!==C.__cacheKey){ie[Se]===void 0&&(ie[Se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ie[Se].usedTimes++;let Ee=ie[C.__cacheKey];Ee!==void 0&&(ie[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&F(E)),C.__cacheKey=Se,C.__webglTexture=ie[Se].texture}return Y}function q(C,E,Y){return Math.floor(Math.floor(C/Y)/E)}function ae(C,E,Y,fe){let Se=C.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Y,fe,E.data);else{Se.sort((R,K)=>R.start-K.start);let Ee=0;for(let R=1;R<Se.length;R++){let K=Se[Ee],j=Se[R],ge=K.start+K.count,le=q(j.start,E.width,4),de=q(K.start,E.width,4);j.start<=ge+1&&le===de&&q(j.start+j.count-1,E.width,4)===le?K.count=Math.max(K.count,j.start+j.count-K.start):(++Ee,Se[Ee]=j)}Se.length=Ee+1;let te=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let R=0,K=Se.length;R<K;R++){let j=Se[R],ge=Math.floor(j.start/4),le=Math.ceil(j.count/4),de=ge%E.width,Le=Math.floor(ge/E.width),lt=le,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(n.TEXTURE_2D,0,de,Le,lt,_e,Y,fe,E.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function ce(C,E,Y){let fe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=n.TEXTURE_3D);let ie=Fe(C,E),Se=E.source;t.bindTexture(fe,C.__webglTexture,n.TEXTURE0+Y);let Ee=i.get(Se);if(Se.version!==Ee.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let _e=gt.getPrimaries(gt.workingColorSpace),Xe=E.colorSpace===Di?null:gt.getPrimaries(E.colorSpace),ke=E.colorSpace===Di||_e===Xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ne=v(E.image,!1,s.maxTextureSize);ne=We(E,ne);let Me=r.convert(E.format,E.colorSpace),R=r.convert(E.type),K=w(E.internalFormat,Me,R,E.normalized,E.colorSpace,E.isVideoTexture);Ve(fe,E);let j,ge=E.mipmaps,le=E.isVideoTexture!==!0,de=Ee.__version===void 0||ie===!0,Le=Se.dataReady,lt=b(E,ne);if(E.isDepthTexture)K=y(E.format===Ni,E.type),de&&(le?t.texStorage2D(n.TEXTURE_2D,1,K,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,K,ne.width,ne.height,0,Me,R,null));else if(E.isDataTexture)if(ge.length>0){le&&de&&t.texStorage2D(n.TEXTURE_2D,lt,K,ge[0].width,ge[0].height);for(let _e=0,Xe=ge.length;_e<Xe;_e++)j=ge[_e],le?Le&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,j.width,j.height,Me,R,j.data):t.texImage2D(n.TEXTURE_2D,_e,K,j.width,j.height,0,Me,R,j.data);E.generateMipmaps=!1}else le?(de&&t.texStorage2D(n.TEXTURE_2D,lt,K,ne.width,ne.height),Le&&ae(E,ne,Me,R)):t.texImage2D(n.TEXTURE_2D,0,K,ne.width,ne.height,0,Me,R,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){le&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,K,ge[0].width,ge[0].height,ne.depth);for(let _e=0,Xe=ge.length;_e<Xe;_e++)if(j=ge[_e],E.format!==ii)if(Me!==null)if(le){if(Le)if(E.layerUpdates.size>0){let ke=Lh(j.width,j.height,E.format,E.type);for(let ye of E.layerUpdates){let ut=j.data.subarray(ye*ke/j.data.BYTES_PER_ELEMENT,(ye+1)*ke/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,ye,j.width,j.height,1,Me,ut)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,j.width,j.height,ne.depth,Me,j.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,K,j.width,j.height,ne.depth,0,j.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,j.width,j.height,ne.depth,Me,R,j.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,K,j.width,j.height,ne.depth,0,Me,R,j.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{le&&de&&t.texStorage2D(n.TEXTURE_2D,lt,K,ge[0].width,ge[0].height);for(let _e=0,Xe=ge.length;_e<Xe;_e++)j=ge[_e],E.format!==ii?Me!==null?le?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,j.width,j.height,Me,j.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,K,j.width,j.height,0,j.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Le&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,j.width,j.height,Me,R,j.data):t.texImage2D(n.TEXTURE_2D,_e,K,j.width,j.height,0,Me,R,j.data)}else if(E.isDataArrayTexture)if(le){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,K,ne.width,ne.height,ne.depth),Le)if(E.layerUpdates.size>0){let _e=Lh(ne.width,ne.height,E.format,E.type);for(let Xe of E.layerUpdates){let ke=ne.data.subarray(Xe*_e/ne.data.BYTES_PER_ELEMENT,(Xe+1)*_e/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Xe,ne.width,ne.height,1,Me,R,ke)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Me,R,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,K,ne.width,ne.height,ne.depth,0,Me,R,ne.data);else if(E.isData3DTexture)le?(de&&t.texStorage3D(n.TEXTURE_3D,lt,K,ne.width,ne.height,ne.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Me,R,ne.data)):t.texImage3D(n.TEXTURE_3D,0,K,ne.width,ne.height,ne.depth,0,Me,R,ne.data);else if(E.isFramebufferTexture){if(de)if(le)t.texStorage2D(n.TEXTURE_2D,lt,K,ne.width,ne.height);else{let _e=ne.width,Xe=ne.height;for(let ke=0;ke<lt;ke++)t.texImage2D(n.TEXTURE_2D,ke,K,_e,Xe,0,Me,R,null),_e>>=1,Xe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ne.parentNode!==_e){_e.appendChild(ne),d.add(E),_e.onpaint=Xe=>{let ke=Xe.changedElements;for(let ye of d)ke.includes(ye.image)&&(ye.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{let ke=n.RGBA,ye=n.RGBA,ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,ye,ut,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ge.length>0){if(le&&de){let _e=qe(ge[0]);t.texStorage2D(n.TEXTURE_2D,lt,K,_e.width,_e.height)}for(let _e=0,Xe=ge.length;_e<Xe;_e++)j=ge[_e],le?Le&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Me,R,j):t.texImage2D(n.TEXTURE_2D,_e,K,Me,R,j);E.generateMipmaps=!1}else if(le){if(de){let _e=qe(ne);t.texStorage2D(n.TEXTURE_2D,lt,K,_e.width,_e.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,R,ne)}else t.texImage2D(n.TEXTURE_2D,0,K,Me,R,ne);S(E)&&E.mipmapsAutoUpdate===!0&&M(fe),Ee.__version=Se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Re(C,E,Y){if(E.image.length!==6)return;let fe=Fe(C,E),ie=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);let Se=i.get(ie);if(ie.version!==Se.__version||fe===!0){t.activeTexture(n.TEXTURE0+Y);let Ee=gt.getPrimaries(gt.workingColorSpace),te=E.colorSpace===Di?null:gt.getPrimaries(E.colorSpace),ne=E.colorSpace===Di||Ee===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Me=E.isCompressedTexture||E.image[0].isCompressedTexture,R=E.image[0]&&E.image[0].isDataTexture,K=[];for(let ye=0;ye<6;ye++)!Me&&!R?K[ye]=v(E.image[ye],!0,s.maxCubemapSize):K[ye]=R?E.image[ye].image:E.image[ye],K[ye]=We(E,K[ye]);let j=K[0],ge=r.convert(E.format,E.colorSpace),le=r.convert(E.type),de=w(E.internalFormat,ge,le,E.normalized,E.colorSpace),Le=E.isVideoTexture!==!0,lt=Se.__version===void 0||fe===!0,_e=ie.dataReady,Xe=b(E,j);Ve(n.TEXTURE_CUBE_MAP,E);let ke;if(E.isDepthTexture){if(de=y(E.format===Ni,E.type),lt)if(Le)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,de,j.width,j.height);else for(let ye=0;ye<6;ye++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,j.width,j.height,0,ge,le,null)}else if(Me){Le&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,de,j.width,j.height);for(let ye=0;ye<6;ye++){ke=K[ye].mipmaps;for(let ut=0;ut<ke.length;ut++){let Mt=ke[ut];E.format!==ii?ge!==null?Le?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut,0,0,Mt.width,Mt.height,ge,Mt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut,de,Mt.width,Mt.height,0,Mt.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut,0,0,Mt.width,Mt.height,ge,le,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut,de,Mt.width,Mt.height,0,ge,le,Mt.data)}}}else{if(ke=E.mipmaps,Le&&lt){ke.length>0&&Xe++;let ye=qe(K[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,de,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(R){Le?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,K[ye].width,K[ye].height,ge,le,K[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,K[ye].width,K[ye].height,0,ge,le,K[ye].data);for(let ut=0;ut<ke.length;ut++){let un=ke[ut].image[ye].image;Le?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut+1,0,0,un.width,un.height,ge,le,un.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut+1,de,un.width,un.height,0,ge,le,un.data)}}else{Le?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ge,le,K[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,ge,le,K[ye]);for(let ut=0;ut<ke.length;ut++){let Mt=ke[ut];Le?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut+1,0,0,ge,le,Mt.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut+1,de,ge,le,Mt.image[ye])}}}S(E)&&E.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),Se.__version=ie.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ue(C,E,Y,fe,ie,Se){let Ee=r.convert(Y.format,Y.colorSpace),te=r.convert(Y.type),ne=w(Y.internalFormat,Ee,te,Y.normalized,Y.colorSpace),Me=i.get(E),R=i.get(Y);if(R.__renderTarget=E,!Me.__hasExternalTextures){let K=Math.max(1,E.width>>Se),j=Math.max(1,E.height>>Se);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Se,ne,K,j,E.depth,0,Ee,te,null):t.texImage2D(ie,Se,ne,K,j,0,Ee,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ie,R.__webglTexture,0,it(E)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,ie,R.__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,E,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){let fe=E.depthTexture,ie=fe&&fe.isDepthTexture?fe.type:null,Se=y(E.stencilBuffer,ie),Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it(E),Se,E.width,E.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,it(E),Se,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,C)}else{let fe=E.textures;for(let ie=0;ie<fe.length;ie++){let Se=fe[ie],Ee=r.convert(Se.format,Se.colorSpace),te=r.convert(Se.type),ne=w(Se.internalFormat,Ee,te,Se.normalized,Se.colorSpace);be(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it(E),ne,E.width,E.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,it(E),ne,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ne,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(C,E,Y){let fe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(E.depthTexture);ie.__renderTarget=E;let Se=fe?E.depthTexture.image[0]:E.depthTexture.image;(!ie.__webglTexture||Se.width!==E.width||Se.height!==E.height)&&(Se.width=E.width,Se.height=E.height,E.depthTexture.needsUpdate=!0),fe?re(E.depthTexture,0):oe(E.depthTexture,0);let Ee=ie.__webglTexture,te=it(E),ne=fe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,Me=E.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ci)be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,ne,Ee,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,Me,ne,Ee,0);else if(E.depthTexture.format===Ni)be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,ne,Ee,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,Me,ne,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){let E=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let fe=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){let ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",ie)};fe.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=fe}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let fe=0;fe<6;fe++)Ce(E.__webglFramebuffer[fe],C,fe);else C.texture.mipmaps.length>0?Ce(E.__webglFramebuffer[0],C,0):Ce(E.__webglFramebuffer,C,0);else if(Y){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=n.createRenderbuffer(),He(E.__webglDepthbuffer[fe],C,!1);else{let ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer[fe];n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Se)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),He(E.__webglDepthbuffer,C,!1);else{let ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(C,E,Y){let fe=i.get(C);E!==void 0&&ue(fe.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&rt(C)}function ct(C){let E=C.texture,Y=i.get(C),fe=i.get(E);C.addEventListener("dispose",z),I(C);let ie=C.textures,Se=C.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=E.version,o.memory.textures++),Se){Y.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps.length>0){Y.__webglFramebuffer[te]=[];for(let ne=0;ne<E.mipmaps.length;ne++)Y.__webglFramebuffer[te][ne]=n.createFramebuffer()}else Y.__webglFramebuffer[te]=n.createFramebuffer()}else{if(E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)Y.__webglFramebuffer[te]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let te=0,ne=ie.length;te<ne;te++){let Me=i.get(ie[te]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&be(C)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let te=0;te<ie.length;te++){let ne=ie[te];Y.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[te]);let Me=r.convert(ne.format,ne.colorSpace),R=r.convert(ne.type),K=w(ne.internalFormat,Me,R,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),j=it(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,K,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,Y.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),He(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)ue(Y.__webglFramebuffer[te][ne],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne);else ue(Y.__webglFramebuffer[te],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);S(E)?M(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let te=0,ne=ie.length;te<ne;te++){let Me=ie[te],R=i.get(Me),K=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,R.__webglTexture),Ve(K,Me),ue(Y.__webglFramebuffer,C,Me,n.COLOR_ATTACHMENT0+te,K,0),S(Me)&&M(K)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,fe.__webglTexture),Ve(te,E),E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)ue(Y.__webglFramebuffer[ne],C,E,n.COLOR_ATTACHMENT0,te,ne);else ue(Y.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,te,0);S(E)?M(te):E.mipmaps.length>0&&n.texParameteri(te,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&rt(C)}function O(C){let E=C.textures;for(let Y=0,fe=E.length;Y<fe;Y++){let ie=E[Y];if(S(ie)&&ie.mipmapsAutoUpdate===!0){let Se=_(C),Ee=i.get(ie).__webglTexture;t.bindTexture(Se,Ee),M(Se),t.unbindTexture()}}}let se=[];function nt(C){if(C.samples>0){if(be(C)===!1){let E=C.textures,Y=C.width,fe=C.height,ie=n.COLOR_BUFFER_BIT,Se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(C),te=E.length>1;if(te)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);let R=i.get(E[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,Y,fe,0,0,Y,fe,ie,n.NEAREST),l===!0&&(se.length=0,se.push(n.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&se.push(Se),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);let R=i.get(E[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function it(C){return Math.min(s.maxSamples,C.samples)}function be(C){let E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function We(C,E){let Y=C.colorSpace,fe=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Hr&&Y!==Di&&(gt.getTransfer(Y)===Tt?(fe!==ii||ie!==Rn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",Y)),E}function qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=he,this.resetTextureUnits=k,this.getTextureUnits=H,this.setTextureUnits=G,this.setTexture2D=oe,this.setTexture2DArray=pe,this.setTexture3D=xe,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=be,this.dispose=W}function mv(n,e){function t(i,s=Di){let r,o=gt.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===fl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===vh)return n.RGB;if(i===ii)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Mh)return n.RED;if(i===ml)return n.RED_INTEGER;if(i===ns)return n.RG;if(i===gl)return n.RG_INTEGER;if(i===_l)return n.RGBA_INTEGER;if(i===bo||i===wo||i===Eo||i===To)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xl||i===yl||i===vl||i===Ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===bl||i===wl||i===El||i===Tl||i===Ao||i===Al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sl||i===bl)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===El)return r.COMPRESSED_R11_EAC;if(i===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ao)return r.COMPRESSED_RG11_EAC;if(i===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Nl||i===Dl||i===Fl||i===Ul||i===Ol||i===Bl||i===zl||i===kl||i===Hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ll)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===Vl||i===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gl)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xl||i===ql||i===Ro||i===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function yv(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ch(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,S,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===cn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===cn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),S=v.envMap,M=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($f),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vv(n,e,t,i){let s={},r={};function o(v,S){let M=S.program;i.uniformBlockBinding(v,M,s[v.id])}function a(v,S){let M=s[v.id];M===void 0&&(p(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",g));let _=S.program;i.updateUBOMapping(v,_);let w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let S=n.createBuffer(),M=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,_),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(v){let S=s[v.id],M=v.uniforms,_=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,y=M.length;w<y;w++){let b=M[w];if(Array.isArray(b))for(let I=0,A=b.length;I<A;I++)h(b[I],w,I,_);else h(b,w,0,_)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,S,M,_){if(u(v,S,M,_)===!0){let w=v.__offset,y=v.value;if(Array.isArray(y)){let b=0;for(let I=0;I<y.length;I++){let A=y[I],P=x(A,!0);d(A,v.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,v.__data)}}function d(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}function u(v,S,M,_){let w=v.value,y=S+"_"+M;if(Array.isArray(w)){_[y]===void 0&&(_[y]=[]);let b=_[y],I=!1;for(let A=0;A<w.length;A++)f(w[A],b,A)===!0&&(I=!0);return I}return f(w,_,y)}function f(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let _=S[M];if(typeof v=="number"||typeof v=="boolean"){if(_!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(_.equals(v)===!1)return _.copy(v),!0}}return!1}function p(v){let S=v.uniforms,M=0,_=16;for(let y=0,b=S.length;y<b;y++){let I=Array.isArray(S[y])?S[y]:[S[y]];for(let A=0,P=I.length;A<P;A++){let z=I[A],V=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(S[y])||Array.isArray(z.value),W=M;for(let F=0,J=V.length;F<J;F++){let N=V[F],k=x(N,L),H=M%_,G=H%k.boundary,he=H+G;M+=G,he!==0&&_-he<k.storage&&(M+=_-he),F===0&&(W=M),M+=k.storage}let D=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new D((M-W)/Float32Array.BYTES_PER_ELEMENT),z.__offset=W}}let w=M%_;return w>0&&(M+=_-w),v.__size=M,v.__cache={},this}function x(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){let S=v.target;S.removeEventListener("dispose",g),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:m}}function Sv(){return gi===null&&(gi=new Fa(Mv,16,16,ns,ni),gi.name="DFG_LUT",gi.minFilter=Mn,gi.magFilter=Mn,gi.wrapS=ci,gi.wrapT=ci,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var z0,k0,H0,G0,V0,W0,X0,q0,Y0,Z0,J0,K0,$0,j0,Q0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,yg,vg,Mg,Sg,bg,wg,Eg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Ng,Dg,Fg,Ug,Og,Bg,zg,kg,Hg,Gg,Vg,Wg,Xg,qg,Yg,Zg,Jg,Kg,$g,jg,Qg,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,x_,y_,v_,M_,S_,b_,w_,E_,T_,A_,R_,C_,P_,I_,L_,N_,D_,F_,U_,O_,B_,z_,k_,H_,G_,V_,W_,X_,q_,Y_,Z_,J_,K_,$_,j_,Q_,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,_x,ft,De,_i,Jl,xx,Gf,Io,vf,wx,Ex,Vf,Wf,Tx,Ax,Rx,$l,zx,Xf,qf,Yf,Zf,Jf,Kf,wf,Ef,Tf,Af,Rf,Hh,Gh,Vh,zh,gr,Ry,Cy,If,Ny,Kl,zy,Hy,Vy,Xy,Yy,Ky,Xh,qh,sv,lv,cv,hv,uv,kf,Co,kh,gv,_v,Yh,Zh,xv,$f,Mv,gi,jl,Jh=Pn(()=>{Bh();Bh();z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y0=`#ifdef USE_BATCHING
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
#endif`,Z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$0=`float G_BlinnPhong_Implicit( ) {
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
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
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
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
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
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
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
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
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
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
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
#include <lightprobes_pars_fragment>`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ug=`uniform sampler2D dfgLUT;
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
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
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
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
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
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
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
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
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
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
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
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
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
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
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
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Og=`
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
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
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
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zg=`#if defined( USE_POINTS_UV )
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
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
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
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
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
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,p_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,__=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
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
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
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
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
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
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
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
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
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
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
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
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
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
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
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
#endif
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
#endif`,b_=`float getShadowMask() {
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
	#endif
	return shadow;
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,T_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
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
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#ifdef USE_TRANSMISSION
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
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
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
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform float backgroundBlurriness;
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q_=`#define DISTANCE
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
}`,Y_=`#define DISTANCE
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
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,$_=`uniform vec3 diffuse;
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
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
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
}`,Q_=`uniform vec3 diffuse;
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
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define LAMBERT
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define MATCAP
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
}`,ix=`#define MATCAP
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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,ox=`#define PHONG
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
}`,ax=`#define PHONG
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
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define STANDARD
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
}`,cx=`#define STANDARD
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
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
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
}`,hx=`#define TOON
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
}`,ux=`#define TOON
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
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`uniform float size;
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 color;
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
}`,gx=`uniform float rotation;
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
}`,_x=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:z0,alphahash_pars_fragment:k0,alphamap_fragment:H0,alphamap_pars_fragment:G0,alphatest_fragment:V0,alphatest_pars_fragment:W0,aomap_fragment:X0,aomap_pars_fragment:q0,batching_pars_vertex:Y0,batching_vertex:Z0,begin_vertex:J0,beginnormal_vertex:K0,bsdfs:$0,iridescence_fragment:j0,bumpmap_pars_fragment:Q0,clipping_planes_fragment:eg,clipping_planes_pars_fragment:tg,clipping_planes_pars_vertex:ng,clipping_planes_vertex:ig,color_fragment:sg,color_pars_fragment:rg,color_pars_vertex:og,color_vertex:ag,common:lg,defaultnormal_vertex:cg,displacementmap_pars_vertex:hg,displacementmap_vertex:ug,emissivemap_fragment:dg,emissivemap_pars_fragment:fg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:gg,envmap_common_pars_fragment:_g,envmap_pars_fragment:xg,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Pg,envmap_vertex:vg,fog_vertex:Mg,fog_pars_vertex:Sg,fog_fragment:bg,fog_pars_fragment:wg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Tg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Lg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Dg,lights_physical_fragment:Fg,lights_physical_pars_fragment:Ug,lights_fragment_begin:Og,lights_fragment_maps:Bg,lights_fragment_end:zg,lightprobes_pars_fragment:kg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Gg,logdepthbuf_pars_vertex:Vg,logdepthbuf_vertex:Wg,map_fragment:Xg,map_pars_fragment:qg,map_particle_fragment:Yg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:$g,morphcolor_vertex:jg,morphnormal_vertex:Qg,morphtarget_pars_vertex:e_,morphtarget_vertex:t_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:s_,normal_pars_vertex:r_,normal_vertex:o_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:u_,opaque_fragment:d_,packing:f_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:g_,dithering_pars_fragment:__,roughnessmap_fragment:x_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:M_,shadowmap_vertex:S_,shadowmask_pars_fragment:b_,skinbase_vertex:w_,skinning_pars_vertex:E_,skinning_vertex:T_,skinnormal_vertex:A_,specularmap_fragment:R_,specularmap_pars_fragment:C_,tonemapping_fragment:P_,tonemapping_pars_fragment:I_,transmission_fragment:L_,transmission_pars_fragment:N_,uv_pars_fragment:D_,uv_pars_vertex:F_,uv_vertex:U_,worldpos_vertex:O_,background_vert:B_,background_frag:z_,backgroundCube_vert:k_,backgroundCube_frag:H_,cube_vert:G_,cube_frag:V_,depth_vert:W_,depth_frag:X_,distance_vert:q_,distance_frag:Y_,equirect_vert:Z_,equirect_frag:J_,linedashed_vert:K_,linedashed_frag:$_,meshbasic_vert:j_,meshbasic_frag:Q_,meshlambert_vert:ex,meshlambert_frag:tx,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:sx,meshnormal_frag:rx,meshphong_vert:ox,meshphong_frag:ax,meshphysical_vert:lx,meshphysical_frag:cx,meshtoon_vert:hx,meshtoon_frag:ux,points_vert:dx,points_frag:fx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:_x},De={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:gn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:gn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new $e(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:gn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:gn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:gn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:gn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:gn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:gn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:gn([De.common,De.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:gn([De.lights,De.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};_i.physical={uniforms:gn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};Jl={r:0,b:0,g:0},xx=new St,Gf=new ot;Gf.set(-1,0,0,0,1,0,0,0,1);Io=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:vs});r.uniforms.tEquirect.value=t;let o=new Ht(s,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=Mn),new hr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},vf=256,wx=3,Ex=20,Vf=256,Wf=16,Tx=3,Ax=new U,Rx=new $e,$l=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hr(1,10,null),this._boxMesh=new Ht(new kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Ax}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Rx));let g=new hr(i,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vf,uf(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===fr?this._setSize(e.image.length===0?vf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Mf(e,!1,!1),i=Math.log2(e)-wx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Mf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Cx(),this._integrationMaterial=Px());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Wf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Tx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Vf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ix());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};zx={[lh]:"LINEAR_TONE_MAPPING",[ch]:"REINHARD_TONE_MAPPING",[hh]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[fh]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};Xf=new Sn,qf=new Pi(1,1),Yf=new eo(1),Zf=new Wr,Jf=new Da,Kf=new jr,wf=[],Ef=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oy(t.type)}},Gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ty(t.type)}},Vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},zh=/(\w+)(\])?(\[|\.)?/g;gr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Ay(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};Ry=37297,Cy=0;If=new ot;Ny={[lh]:"Linear",[ch]:"Reinhard",[hh]:"Cineon",[Mo]:"ACESFilmic",[dh]:"AgX",[fh]:"Neutral",[uh]:"Custom"};Kl=new U;zy=/^[ \t]*#include +<([\w\d./]+)>/gm;Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Vy={[ys]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};Xy={[fr]:"ENVMAP_MODE_REFRACTION"};Yy={[ah]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};Ky=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qh(e),t.set(e,i)),i}},qh=class{constructor(e){this.id=Ky++,this.code=e,this.usedTimes=0}};sv=0;lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`,hv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],uv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],kf=new St,Co=new U,kh=new U;gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`,Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new to(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new pi({vertexShader:gv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new fo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zh=class extends ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Yh,m={},v=t.getContextAttributes(),S=null,M=null,_=[],w=[],y=new Ae,b=null,I=null,A=new vn;A.viewport=new Ft;let P=new vn;P.viewport=new Ft;let z=[A,P],V=new al,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=_[X];return oe===void 0&&(oe=new sr,_[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=_[X];return oe===void 0&&(oe=new sr,_[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=_[X];return oe===void 0&&(oe=new sr,_[X]=oe),oe.getHandSpace()};function D(X){let oe=w.indexOf(X.inputSource);if(oe===-1)return;let pe=_[oe];pe!==void 0&&(pe.update(X.inputSource,X.frame,c||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",J);for(let X=0;X<_.length;X++){let oe=w[X];oe!==null&&(w[X]=null,_[X].disconnect(oe))}L=null,W=null,g.reset();for(let X in m)delete m[X];if(e.setRenderTarget(S),f=null,u=null,d=null,s=null,M=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),I!==null){let X=I.camera;X.fov=I.fov,X.zoom=I.zoom,X.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,xe=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?Ni:Ci,xe=v.stencil?bs:ei);let me={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(me),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Dn(u.textureWidth,u.textureHeight,{format:ii,type:Rn,depthTexture:new Pi(u.textureWidth,u.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Dn(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(X){for(let oe=0;oe<X.removed.length;oe++){let pe=X.removed[oe],xe=w.indexOf(pe);xe>=0&&(w[xe]=null,_[xe].disconnect(pe))}for(let oe=0;oe<X.added.length;oe++){let pe=X.added[oe],xe=w.indexOf(pe);if(xe===-1){for(let me=0;me<_.length;me++)if(me>=w.length){w.push(pe),xe=me;break}else if(w[me]===null){w[me]=pe,xe=me;break}if(xe===-1)break}let re=_[xe];re&&re.connect(pe)}}function N(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let oe=X.near,pe=X.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),V.near=P.near=A.near=oe,V.far=P.far=A.far=pe,(L!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,W=V.far),V.layers.mask=X.layers.mask|6,A.layers.mask=V.layers.mask&-5,P.layers.mask=V.layers.mask&-3;let xe=X.parent,re=V.cameras;N(V,xe);for(let me=0;me<re.length;me++)N(re[me],xe);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&X.isPerspectiveCamera&&(I={camera:X,fov:X.fov,zoom:X.zoom}),k(X,V,xe)};function k(X,oe,pe){pe===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ia*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(X){return m[X]};let H=null;function G(X,oe){if(h=oe.getViewerPose(c||o),p=oe,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let xe=!1;pe.length!==V.cameras.length&&(V.cameras.length=0,xe=!0);for(let Ie=0;Ie<pe.length;Ie++){let Ve=pe[Ie],Fe=null;if(f!==null)Fe=f.getViewport(Ve);else{let ae=d.getViewSubImage(u,Ve);Fe=ae.viewport,Ie===0&&(e.setRenderTargetTextures(M,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(M))}let q=z[Ie];q===void 0&&(q=new vn,q.layers.enable(Ie),q.viewport=new Ft,z[Ie]=q),q.matrix.fromArray(Ve.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Ve.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ie===0&&(V.matrix.copy(q.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),xe===!0&&V.cameras.push(q)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Ie=d.getDepthInformation(pe[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(Ie,s.renderState)}if(re&&re.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Ie=0;Ie<pe.length;Ie++){let Ve=pe[Ie].camera;if(Ve){let Fe=m[Ve];Fe||(Fe=new to,m[Ve]=Fe);let q=d.getCameraImage(Ve);Fe.sourceTexture=q}}}}for(let pe=0;pe<_.length;pe++){let xe=w[pe],re=_[pe];xe!==null&&re!==void 0&&re.update(xe,oe,c||o)}H&&H(X,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),p=null}let he=new Hf;he.setAnimationLoop(G),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}},xv=new St,$f=new ot;$f.set(-1,0,0,0,1,0,0,0,1);Mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;jl=class{constructor(e={}){let{canvas:t=af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,g=new Set([_l,gl,ml]),m=new Set([Rn,ei,pr,bs,fl,pl]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},_=null,w=null,y=[],b=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,z=null,V=null,L=null,W=null;this._outputColorSpace=mn;let D=0,F=0,J=null,N=-1,k=null,H=new Ft,G=new Ft,he=null,X=new $e(0),oe=0,pe=t.width,xe=t.height,re=1,me=null,Ye=null,Ie=new Ft(0,0,pe,xe),Ve=new Ft(0,0,pe,xe),Fe=!1,q=new $i,ae=new Ua,ce=!1,Re=!1,ue=new St,He=new U,Ce=new Ft,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function ct(){return J===null?re:1}let O=i;function se(T,B){return t.getContext(T,B)}let nt,it,be,vt,We,qe,C,E,Y,fe,ie,Se,Ee,te,ne,Me,R,K,j,ge,le,de,Le;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ye,!1),O===null){let B="webgl2";if(O=se(B,T),O===null)throw se(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(T){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),tt("WebGLRenderer: "+T.message),T}function lt(){nt=new Nx(O),nt.init(),le=new mv(O,nt),it=new Sx(O,nt,e,le),be=new fv(O,nt),it.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),V=O.createFramebuffer(),L=O.createFramebuffer(),W=O.createFramebuffer(),vt=new Ux(O),We=new Qy,qe=new pv(O,nt,be,We,it,le,vt),C=new Lx(A),E=new B0(O),de=new vx(O,E),Y=new Dx(O,E,vt,de),fe=new Bx(O,Y,E,de,vt),K=new Ox(O,it,qe),ne=new bx(We),ie=new jy(A,C,nt,it,de,ne),Se=new yv(A,We),Ee=new tv,te=new av(nt),R=new yx(A,C,be,fe,p,l),Me=new dv(A,fe,it),Le=new vv(O,vt,it,be),j=new Mx(O,nt,vt),ge=new Fx(O,nt,vt),vt.programs=ie.programs,A.capabilities=it,A.extensions=nt,A.properties=We,A.renderLists=Ee,A.shadowMap=Me,A.state=be,A.info=vt}x!==Rn&&(I=new kx(x,t.width,t.height,a,s,r));let _e=new Zh(A,O);this.xr=_e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(pe,xe,!1))},this.getSize=function(T){return T.set(pe,xe)},this.setSize=function(T,B,Q=!0){if(_e.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=T,xe=B,t.width=Math.floor(T*re),t.height=Math.floor(B*re),Q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(pe*re,xe*re).floor()},this.setDrawingBufferSize=function(T,B,Q){pe=T,xe=B,re=Q,t.width=Math.floor(T*Q),t.height=Math.floor(B*Q),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===Rn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(Ie)},this.setViewport=function(T,B,Q,Z){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,B,Q,Z),be.viewport(H.copy(Ie).multiplyScalar(ct()).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,B,Q,Z){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,B,Q,Z),be.scissor(G.copy(Ve).multiplyScalar(ct()).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(T){be.setScissorTest(Fe=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){Ye=T},this.getClearColor=function(T){return T.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Q=!0){let Z=0;if(T){let $=!1;if(J!==null){let we=J.texture.format;$=g.has(we)}if($){let we=J.texture.type,Oe=m.has(we),Te=R.getClearColor(),Ne=R.getClearAlpha(),Ge=Te.r,Je=Te.g,pt=Te.b;Oe?(v[0]=Ge,v[1]=Je,v[2]=pt,v[3]=Ne,O.clearBufferuiv(O.COLOR,0,v)):(S[0]=Ge,S[1]=Je,S[2]=pt,S[3]=Ne,O.clearBufferiv(O.COLOR,0,S))}else Z|=O.COLOR_BUFFER_BIT}B&&(Z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),R.dispose(),Ee.dispose(),te.dispose(),qe.dispose(),We.dispose(),C.dispose(),fe.dispose(),Y.dispose(),de.dispose(),Le.dispose(),ie.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ri),_e.removeEventListener("sessionend",vi),dn.stop()};function Xe(T){T.preventDefault(),Th("WebGLRenderer: Context Lost."),P=!0}function ke(){Th("WebGLRenderer: Context Restored."),P=!1;let T=vt.autoReset,B=Me.enabled,Q=Me.autoUpdate,Z=Me.needsUpdate,$=Me.type;lt(),vt.autoReset=T,Me.enabled=B,Me.autoUpdate=Q,Me.needsUpdate=Z,Me.type=$}function ye(T){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){let B=T.target;B.removeEventListener("dispose",ut),Mt(B)}function Mt(T){un(T),We.remove(T)}function un(T){let B=We.get(T).programs;B!==void 0&&(B.forEach(function(Q){ie.releaseProgram(Q)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Q,Z,$,we){B===null&&(B=rt);let Oe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Te=ai(T,B,Q,Z,$);be.setMaterial(Z,Oe);let Ne=Q.index,Ge=1;if(Z.wireframe===!0){if(Ne=Y.getWireframeAttribute(Q),Ne===void 0)return;Ge=2}let Je=Q.drawRange,pt=Q.attributes.position,ze=Je.start*Ge,dt=(Je.start+Je.count)*Ge;we!==null&&(ze=Math.max(ze,we.start*Ge),dt=Math.min(dt,(we.start+we.count)*Ge)),Ne!==null?(ze=Math.max(ze,0),dt=Math.min(dt,Ne.count)):pt!=null&&(ze=Math.max(ze,0),dt=Math.min(dt,pt.count));let Bt=dt-ze;if(Bt<0||Bt===1/0)return;de.setup($,Z,Te,Q,Ne);let Rt,Ct=j;if(Ne!==null&&(Rt=E.get(Ne),Ct=ge,Ct.setIndex(Rt)),$.isMesh)Z.wireframe===!0?(be.setLineWidth(Z.wireframeLinewidth*ct()),Ct.setMode(O.LINES)):Ct.setMode(O.TRIANGLES);else if($.isLine){let tn=Z.linewidth;tn===void 0&&(tn=1),be.setLineWidth(tn*ct()),$.isLineSegments?Ct.setMode(O.LINES):$.isLineLoop?Ct.setMode(O.LINE_LOOP):Ct.setMode(O.LINE_STRIP)}else $.isPoints?Ct.setMode(O.POINTS):$.isSprite&&Ct.setMode(O.TRIANGLES);if($.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Ct.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let tn=$._multiDrawStarts,Be=$._multiDrawCounts,an=$._multiDrawCount,yt=Ne?E.get(Ne).bytesPerElement:1,Mi=We.get(Z).currentProgram.getUniforms();for(let nn=0;nn<an;nn++)Mi.setValue(O,"_gl_DrawID",nn),Ct.render(tn[nn]/yt,Be[nn])}else if($.isInstancedMesh)Ct.renderInstances(ze,Bt,$.count);else if(Q.isInstancedBufferGeometry){let tn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Be=Math.min(Q.instanceCount,tn);Ct.renderInstances(ze,Bt,Be)}else Ct.render(ze,Bt)};function yi(T,B,Q,Z){z!==null&&T.isNodeMaterial&&z.setObject(Z,T),ce===!0&&ne.setState(T,Q,!1),T.transparent===!0&&T.side===qt&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,xn(T,B,Z),T.side=ts,T.needsUpdate=!0,xn(T,B,Z),T.side=qt):xn(T,B,Z)}this.compile=function(T,B,Q=null){Q===null&&(Q=T),z!==null&&z.renderStart(T,B,Q),w=te.get(Q),w.init(B),b.push(w),Q.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),T!==Q&&T.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Re=this.localClippingEnabled,ce=ne.init(this.clippingPlanes,Re),ce===!0&&ne.setGlobalState(this.clippingPlanes,B),z!==null&&Me.render(w.state.shadowsArray,Q,B);let Z=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let we=$.material;if(we)if(Array.isArray(we))for(let Oe=0;Oe<we.length;Oe++){let Te=we[Oe];yi(Te,Q,B,$),Z.add(Te)}else yi(we,Q,B,$),Z.add(we)}),w=b.pop(),z!==null&&z.renderEnd(),Z},this.compileAsync=function(T,B,Q=null){let Z=this.compile(T,B,Q);return new Promise($=>{function we(){if(Z.forEach(function(Oe){let Ne=We.get(Oe).currentProgram;(Ne===void 0||Ne.isReady())&&Z.delete(Oe)}),Z.size===0){$(T);return}setTimeout(we,10)}nt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let wn=null;function Ds(T){wn&&wn(T)}function ri(){dn.stop()}function vi(){dn.start()}let dn=new Hf;dn.setAnimationLoop(Ds),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(T){wn=T,_e.setAnimationLoop(T),T===null?dn.stop():dn.start()},_e.addEventListener("sessionstart",ri),_e.addEventListener("sessionend",vi),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;z!==null&&z.renderStart(T,B);let Q=_e.enabled===!0&&_e.isPresenting===!0,Z=I!==null&&(J===null||Q)&&I.begin(A,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,B,J),w=te.get(T,b.length),w.init(B),w.state.textureUnits=qe.getTextureUnits(),b.push(w),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ae.setFromArrayCamera(B):q.setFromProjectionMatrix(ue,Vn,B.reversedDepth),Re=this.localClippingEnabled,ce=ne.init(this.clippingPlanes,Re),_=Ee.get(T,y.length),_.init(),y.push(_),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let Oe=A.xr.getDepthSensingMesh();Oe!==null&&Gi(Oe,B,-1/0,A.sortObjects)}Gi(T,B,0,A.sortObjects),_.finish(),z!==null&&z.updateLights(w.state.lightsArray),A.sortObjects===!0&&_.sort(me,Ye),Qe=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Qe&&R.addToRenderList(_,T),this.info.autoReset===!0&&this.info.reset(),ce===!0&&ne.beginShadows();let $=w.state.shadowsArray;if(Me.render($,T,B),ce===!0&&ne.endShadows(),(Z&&I.hasRenderPass())===!1){let Oe=_.opaque,Te=_.transmissive;if(w.setupLights(),B.isArrayCamera){let Ne=B.cameras;if(Te.length>0)for(let Ge=0,Je=Ne.length;Ge<Je;Ge++){let pt=Ne[Ge];us(Oe,Te,T,pt)}Qe&&R.render(T);for(let Ge=0,Je=Ne.length;Ge<Je;Ge++){let pt=Ne[Ge];Fs(_,T,pt,pt.viewport)}}else Te.length>0&&us(Oe,Te,T,B),Qe&&R.render(T),Fs(_,T,B)}J!==null&&F===0&&(qe.updateMultisampleRenderTarget(J),qe.updateRenderTargetMipmap(J)),Z&&I.end(A),T.isScene===!0&&T.onAfterRender(A,T,B),de.resetDefaultState(),N=-1,k=null,b.pop(),b.length>0?(w=b[b.length-1],qe.setTextureUnits(w.state.textureUnits),ce===!0&&ne.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?_=y[y.length-1]:_=null,z!==null&&z.renderEnd()};function Gi(T,B,Q,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Oe=B.isArrayCamera?ae:q;if(!T.frustumCulled||T.intersectsFrustum(Oe)){Z&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);let Te=fe.update(T),Ne=T.material;Ne.visible&&_.push(T,Te,Ne,Q,Ce.z,null,B)}}else if(T.isMesh||T.isLine||T.isPoints){let Oe=B.isArrayCamera?ae:q;if(!T.frustumCulled||T.intersectsFrustum(Oe)){let Te=fe.update(T),Ne=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ce.copy(Te.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Ne)){let Ge=Te.groups;for(let Je=0,pt=Ge.length;Je<pt;Je++){let ze=Ge[Je],dt=Ne[ze.materialIndex];dt&&dt.visible&&_.push(T,Te,dt,Q,Ce.z,ze,B)}}else Ne.visible&&_.push(T,Te,Ne,Q,Ce.z,null,B)}}}let we=T.children;for(let Oe=0,Te=we.length;Oe<Te;Oe++)Gi(we[Oe],B,Q,Z)}function Fs(T,B,Q,Z){let{opaque:$,transmissive:we,transparent:Oe}=T;w.setupLightsView(Q),ce===!0&&ne.setGlobalState(A.clippingPlanes,Q),Z&&be.viewport(H.copy(Z)),$.length>0&&Xn($,B,Q),we.length>0&&Xn(we,B,Q),Oe.length>0&&Xn(Oe,B,Q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function us(T,B,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){let ze=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new Dn(1,1,{generateMipmaps:!0,type:ze?ni:Rn,minFilter:Li,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let we=w.state.transmissionRenderTarget[Z.id],Oe=Z.viewport||H;we.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);let Te=A.getRenderTarget(),Ne=A.getActiveCubeFace(),Ge=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(X),oe=A.getClearAlpha(),oe<1&&A.setClearColor(16777215,.5),A.clear(),Qe&&R.render(Q);let Je=A.toneMapping;A.toneMapping=mi;let pt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),ce===!0&&ne.setGlobalState(A.clippingPlanes,Z),Xn(T,Q,Z),qe.updateMultisampleRenderTarget(we),qe.updateRenderTargetMipmap(we),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let dt=0,Bt=B.length;dt<Bt;dt++){let Rt=B[dt],{object:Ct,geometry:tn,material:Be,group:an}=Rt;if(Be.side===qt&&Ct.layers.test(Z.layers)){let yt=Be.side;Be.side=cn,Be.needsUpdate=!0,oi(Ct,Q,Z,tn,Be,an),Be.side=yt,Be.needsUpdate=!0,ze=!0}}ze===!0&&(qe.updateMultisampleRenderTarget(we),qe.updateRenderTargetMipmap(we))}A.setRenderTarget(Te,Ne,Ge),A.setClearColor(X,oe),pt!==void 0&&(Z.viewport=pt),A.toneMapping=Je}function Xn(T,B,Q){let Z=B.isScene===!0?B.overrideMaterial:null;for(let $=0,we=T.length;$<we;$++){let Oe=T[$],{object:Te,geometry:Ne,group:Ge}=Oe,Je=Oe.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Te.layers.test(Q.layers)&&oi(Te,B,Q,Ne,Je,Ge)}}function oi(T,B,Q,Z,$,we){z!==null&&$.isNodeMaterial&&z.setObject(T,$),T.onBeforeRender(A,B,Q,Z,$,we),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(A,B,Q,Z,T,we),$.transparent===!0&&$.side===qt&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,A.renderBufferDirect(Q,B,Z,$,T,we),$.side=ts,$.needsUpdate=!0,A.renderBufferDirect(Q,B,Z,$,T,we),$.side=qt):A.renderBufferDirect(Q,B,Z,$,T,we),T.onAfterRender(A,B,Q,Z,$,we)}function kn(T){let B=0;for(let Q of T)Q.texture!==null&&B++;return B}function xn(T,B,Q){B.isScene!==!0&&(B=rt);let Z=We.get(T),$=w.state.lights,we=w.state.shadowsArray,Oe=$.state.version,Te=ie.getParameters(T,$.state,we,B,Q,w.state.lightProbeGridArray),Ne=ie.getProgramCacheKey(Te),Ge=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,Z.fog=B.fog;let Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=C.get(T.envMap||Z.environment,Je),Z.envMapRotation=Z.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",ut),Ge=new Map,Z.programs=Ge,Z.programVariants=new Map);let pt=Ge.get(Ne);if(pt!==void 0){if(Z.currentProgram===pt&&Z.lightsStateVersion===Oe)return Et(T,Te),pt}else Te.uniforms=ie.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,Q,Te),T.onBeforeCompile(Te,A),pt=ie.acquireProgram(Te,Ne),Ge.set(Ne,pt),Z.uniforms=Te.uniforms;let ze=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=ne.uniform),Et(T,Te),Z.needsLights=Os(T),Z.lightsStateVersion=Oe,Z.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.sunLights.value=$.state.sun,ze.sunLightShadows.value=$.state.sunShadow,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.sunShadowMatrix.value=$.state.sunShadowMatrix,ze.sunShadowCascade.value=$.state.sunShadowCascade,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.numLightProbeGrids=kn(w.state.lightProbeGridArray),Z.currentProgram=pt,Z.uniformsList=null,pt}function Jt(T,B,Q,Z,$){let we=We.get(T),Oe=we.currentProgram.id+","+Z+","+$,Te=we.programVariants.get(Oe);return Te===void 0?(Te=xn(T,B,Q),we.programVariants.set(Oe,Te)):(we.currentProgram=Te,we.uniformsList=null,we.outputColorSpace=Z,we.toneMapping=$),Te}function yn(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=gr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Et(T,B){let Q=We.get(T);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function ai(T,B,Q,Z,$){B.isScene!==!0&&(B=rt),qe.resetTextureUnits();let we=B.fog,Oe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?B.environment:null,Te=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:gt.workingColorSpace,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ge=C.get(Z.envMap||Oe,Ne),Je=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pt=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!Q.morphAttributes.position,dt=!!Q.morphAttributes.normal,Bt=!!Q.morphAttributes.color,Rt=mi;Z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Rt=A.toneMapping);let Ct=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,tn=Ct!==void 0?Ct.length:0,Be=We.get(Z),an=w.state.lights;if(ce===!0&&(Re===!0||T!==k)){let je=T===k&&Z.id===N;ne.setState(Z,T,je)}let yt=!1,Mi=!1;Z.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==an.state.version||$.isBatchedMesh&&Be.batching===!1||!$.isBatchedMesh&&Be.batching===!0||$.isBatchedMesh&&Be.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Be.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||$.isInstancedMesh&&Be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Be.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Be.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Be.instancingMorph===!1&&$.morphTexture!==null||Be.envMap!==Ge||Z.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ne.numPlanes||Be.numIntersection!==ne.numIntersection)||Be.vertexAlphas!==Je||Be.vertexTangents!==pt||Be.morphTargets!==ze||Be.morphNormals!==dt||Be.morphColors!==Bt||Be.morphTargetsCount!==tn||Be.numLightProbeGrids!==kn(w.state.lightProbeGridArray)?yt=!0:(Be.outputColorSpace!==Te||Be.toneMapping!==Rt)&&(Mi=!0):(yt=!0,Be.__version=Z.version);let nn=Be.currentProgram;(yt===!0||Mi===!0)&&(nn=Mi===!0?Jt(Z,B,$,Te,Rt):xn(Z,B,$),z&&Z.isNodeMaterial&&z.onUpdateProgram(Z,nn,Be));let Bs=!1,qn=!1,Si=!1,_t=nn.getUniforms(),Vt=Be.uniforms;if(be.useProgram(nn.program)&&(Bs=!0,qn=!0,Si=!0),Z.id!==N&&(N=Z.id,qn=!0),Bs||k!==T){be.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(O,"projectionMatrix",T.projectionMatrix),_t.setValue(O,"viewMatrix",T.matrixWorldInverse);let xt=_t.map.cameraPosition;xt!==void 0&&xt.setValue(O,He.setFromMatrixPosition(T.matrixWorld)),it.logarithmicDepthBuffer&&_t.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_t.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,qn=!0,Si=!0)}if(Be.needsLights&&(an.state.sunShadowMap.length>0&&_t.setValue(O,"sunShadowMap",an.state.sunShadowMap,qe),an.state.directionalShadowMap.length>0&&_t.setValue(O,"directionalShadowMap",an.state.directionalShadowMap,qe),an.state.spotShadowMap.length>0&&_t.setValue(O,"spotShadowMap",an.state.spotShadowMap,qe),an.state.pointShadowMap.length>0&&_t.setValue(O,"pointShadowMap",an.state.pointShadowMap,qe)),$.isSkinnedMesh){_t.setOptional(O,$,"bindMatrix"),_t.setOptional(O,$,"bindMatrixInverse");let je=$.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),_t.setValue(O,"boneTexture",je.boneTexture,qe))}$.isBatchedMesh&&(_t.setOptional(O,$,"batchingTexture"),_t.setValue(O,"batchingTexture",$._matricesTexture,qe),_t.setOptional(O,$,"batchingIdTexture"),_t.setValue(O,"batchingIdTexture",$._indirectTexture,qe),_t.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&_t.setValue(O,"batchingColorTexture",$._colorsTexture,qe));let Cn=Q.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&K.update($,Q,nn),(qn||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,_t.setValue(O,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&B.environment!==null&&(Vt.envMapIntensity.value=B.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Sv()),qn){if(_t.setValue(O,"toneMappingExposure",A.toneMappingExposure),Be.needsLights&&Us(Vt,Si),we&&Z.fog===!0&&Se.refreshFogUniforms(Vt,we),Se.refreshMaterialUniforms(Vt,Z,re,xe,w.state.transmissionRenderTarget[T.id]),Be.needsLights&&Be.numLightProbeGrids>0){let je=M,xt=0;for(let Kt of w.state.lightProbeGridArray)Kt.texture!==null&&(je.textures[xt]=Kt.texture,je.min[xt]=Kt.boundingBox.min,je.max[xt]=Kt.boundingBox.max,je.resolution[xt]=Kt.resolution,xt++);for(let Kt in je)je[Kt].length=xt;Vt.probesSH.value=je.textures,Vt.probesMin.value=je.min,Vt.probesMax.value=je.max,Vt.probesResolution.value=je.resolution}gr.upload(O,yn(Be),Vt,qe)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(gr.upload(O,yn(Be),Vt,qe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_t.setValue(O,"center",$.center),_t.setValue(O,"modelViewMatrix",$.modelViewMatrix),_t.setValue(O,"normalMatrix",$.normalMatrix),_t.setValue(O,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let je=Z.uniformsGroups;for(let xt=0,Kt=je.length;xt<Kt;xt++){let Hn=je[xt];Le.update(Hn,nn),Le.bind(Hn,nn)}}return nn}function Us(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Os(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,B,Q){let Z=We.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),We.get(T.texture).__webglTexture=B,We.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let Q=We.get(T);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Q=0){J=T,D=B,F=Q;let Z=null,$=!1,we=!1;if(T){let Te=We.get(T);if(Te.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(O.FRAMEBUFFER,Te.__webglFramebuffer),H.copy(T.viewport),G.copy(T.scissor),he=T.scissorTest,be.viewport(H),be.scissor(G),be.setScissorTest(he),N=-1;return}else if(Te.__webglFramebuffer===void 0)qe.setupRenderTarget(T);else if(Te.__hasExternalTextures)qe.rebindTextures(T,We.get(T.texture).__webglTexture,We.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Je=T.depthTexture;if(Te.__boundDepthTexture!==Je){if(Je!==null&&We.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(T)}}let Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);let Ge=We.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?Z=Ge[B][Q]:Z=Ge[B],$=!0):T.samples>0&&qe.useMultisampledRTT(T)===!1?Z=We.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?Z=Ge[Q]:Z=Ge,H.copy(T.viewport),G.copy(T.scissor),he=T.scissorTest}else H.copy(Ie).multiplyScalar(re).floor(),G.copy(Ve).multiplyScalar(re).floor(),he=Fe;if(Q!==0&&(Z=V),be.bindFramebuffer(O.FRAMEBUFFER,Z)&&be.drawBuffers(T,Z),be.viewport(H),be.scissor(G),be.setScissorTest(he),$){let Te=We.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,Q)}else if(we){let Te=B;for(let Ne=0;Ne<T.textures.length;Ne++){let Ge=We.get(T.textures[Ne]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ne,Ge.__webglTexture,Q,Te)}}else if(T!==null&&Q!==0){let Te=We.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Te.__webglTexture,Q)}N=-1};function Tr(T){let B=We.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=it.textureFormatReadable(T.format),B.__typeReadable=it.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,Q,Z,$,we,Oe,Te=0){if(!(T&&T.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ne=Ne[Oe],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){be.bindFramebuffer(O.FRAMEBUFFER,Ne);try{let Ge=T.textures[Te],Je=Ge.format,pt=Ge.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te);let ze=Tr(Ge);if(ze.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&Q>=0&&Q<=T.height-$&&O.readPixels(B,Q,Z,$,le.convert(Je),le.convert(pt),we)}finally{let Ge=J!==null?We.get(J).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,B,Q,Z,$,we,Oe,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ne=Ne[Oe],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(B>=0&&B<=T.width-Z&&Q>=0&&Q<=T.height-$){be.bindFramebuffer(O.FRAMEBUFFER,Ne);let Ge=T.textures[Te],Je=Ge.format,pt=Ge.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te);let ze=Tr(Ge);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(B,Q,Z,$,le.convert(Je),le.convert(pt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Bt=J!==null?We.get(J).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Bt);let Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cf(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(dt),O.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Q=0){let Z=Math.pow(2,-Q),$=Math.floor(T.image.width*Z),we=Math.floor(T.image.height*Z),Oe=B!==null?B.x:0,Te=B!==null?B.y:0;qe.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Oe,Te,$,we),be.unbindTexture()},this.copyTextureToTexture=function(T,B,Q=null,Z=null,$=0,we=0){let Oe,Te,Ne,Ge,Je,pt,ze,dt,Bt,Rt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(Q!==null)Oe=Q.max.x-Q.min.x,Te=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,Je=Q.min.y,pt=Q.isBox3?Q.min.z:0;else{let _t=Math.pow(2,-$);Oe=Math.floor(Rt.width*_t),Te=Math.floor(Rt.height*_t),T.isDataArrayTexture?Ne=Rt.depth:T.isData3DTexture?Ne=Math.floor(Rt.depth*_t):Ne=1,Ge=0,Je=0,pt=0}Z!==null?(ze=Z.x,dt=Z.y,Bt=Z.z):(ze=0,dt=0,Bt=0);let Ct=le.convert(B.format),tn=le.convert(B.type),Be;B.isData3DTexture?(qe.setTexture3D(B,0),Be=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(qe.setTexture2DArray(B,0),Be=O.TEXTURE_2D_ARRAY):(qe.setTexture2D(B,0),Be=O.TEXTURE_2D),be.activeTexture(O.TEXTURE0),be.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),be.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),be.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let an=be.getParameter(O.UNPACK_ROW_LENGTH),yt=be.getParameter(O.UNPACK_IMAGE_HEIGHT),Mi=be.getParameter(O.UNPACK_SKIP_PIXELS),nn=be.getParameter(O.UNPACK_SKIP_ROWS),Bs=be.getParameter(O.UNPACK_SKIP_IMAGES);be.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),be.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),be.pixelStorei(O.UNPACK_SKIP_ROWS,Je),be.pixelStorei(O.UNPACK_SKIP_IMAGES,pt);let qn=T.isDataArrayTexture||T.isData3DTexture,Si=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let _t=We.get(T),Vt=We.get(B),Cn=We.get(_t.__renderTarget),je=We.get(Vt.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,Cn.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let xt=0;xt<Ne;xt++)qn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(T).__webglTexture,$,pt+xt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(B).__webglTexture,we,Bt+xt)),O.blitFramebuffer(Ge,Je,Ge+Oe,Je+Te,ze,dt,ze+Oe,dt+Te,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||We.has(T)){let _t=We.get(T),Vt=We.get(B);be.bindFramebuffer(O.READ_FRAMEBUFFER,L),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,W);for(let Cn=0;Cn<Ne;Cn++)qn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_t.__webglTexture,$,pt+Cn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_t.__webglTexture,$),Si?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vt.__webglTexture,we,Bt+Cn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Vt.__webglTexture,we),$!==0?O.blitFramebuffer(Ge,Je,Ge+Oe,Je+Te,ze,dt,ze+Oe,dt+Te,O.COLOR_BUFFER_BIT,O.NEAREST):Si?O.copyTexSubImage3D(Be,we,ze,dt,Bt+Cn,Ge,Je,Oe,Te):O.copyTexSubImage2D(Be,we,ze,dt,Ge,Je,Oe,Te);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Si?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Be,we,ze,dt,Bt,Oe,Te,Ne,Ct,tn,Rt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Be,we,ze,dt,Bt,Oe,Te,Ne,Ct,Rt.data):O.texSubImage3D(Be,we,ze,dt,Bt,Oe,Te,Ne,Ct,tn,Rt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,ze,dt,Oe,Te,Ct,tn,Rt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,ze,dt,Rt.width,Rt.height,Ct,Rt.data):O.texSubImage2D(O.TEXTURE_2D,we,ze,dt,Oe,Te,Ct,tn,Rt);be.pixelStorei(O.UNPACK_ROW_LENGTH,an),be.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),be.pixelStorei(O.UNPACK_SKIP_PIXELS,Mi),be.pixelStorei(O.UNPACK_SKIP_ROWS,nn),be.pixelStorei(O.UNPACK_SKIP_IMAGES,Bs),we===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&O.generateMipmap(Be),be.unbindTexture()},this.initRenderTarget=function(T){We.get(T).__webglFramebuffer===void 0&&qe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?qe.setTextureCube(T,0):T.isData3DTexture?qe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?qe.setTexture2DArray(T,0):qe.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){D=0,F=0,J=null,be.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}});function Fi(n,e,t){let i=0;for(let s=0;s<Kh;s+=1)i+=n(e,t+((s+.5)/Kh-.5)*wv);return i/Kh}function ep(n,e,t={},i=0){let s=Math.max(0,Es(i,0)),r=is(Es(t.soak,0),0,1),o=is(Es(t.airTarget,$h),-on,On),a=!!n.onSnow,l=Es(n.velocity,0),c=is(Es(n.leg,0),-on,On),h=a?is(e.carryFrom+Es(n.ride,0),e.snowFrom-on,e.snowFrom+On):Es(n.height,e.snowFrom),d=e.snowFrom,u=e.carryFrom,f=0,p=!1,x=null,g=s>0?Math.max(1,Math.ceil(s/bv-1e-9)):0,m=g>0?s/g:0,v=s>0?(e.snowTo-e.snowFrom)/s:0,S=s>0?(e.carryTo-e.carryFrom)/s:0,M=w=>Math.min(w,S+Rv),_=(w,y)=>is(y,w-Ev,w+Tv);for(let w=0;w<g;w+=1){let y=_(d,u),b=(w+1)/g;if(d=e.snowFrom+(e.snowTo-e.snowFrom)*b,u=e.carryFrom+(e.carryTo-e.carryFrom)*b,a){let I=_(d,u),A=M((I-y)/m),P=Qf**2*(y-h)+2*Cv*Qf*(A-l),z=P<=-9.81;P=Math.max(P,-9.81),l+=P*m,h+=l*m;let V=P+9.81;if(h-d<-on){let W=l;h=d-on,l=Math.max(l,M(v)),V+=(l-W)/m}f+=Math.max(0,V)/9.81;let L=z&&l>A&&h-I>Av;(h-d>On||L)&&(a=!1,p=!0,c=is(h-d,-on,On),l>S&&(l=S+(l-S)*(1-Pv*r)))}else{l-=9.81*m,h+=l*m,c=Lv(c,o,Iv*m);let I=h-d<-on;(I||h-c<=d&&l<=S)&&(a=!0,x??(x={closing:Math.max(0,S-l)}),I&&(h=d-on,l=Math.max(l,M(v))))}}return{air:a?0:Math.max(0,h-c-d),height:h,leg:a?is(h-d,-on,On):c,liftoff:p,load:g>0?f/g:a?1:0,onSnow:a,ride:h-u,touchdown:x,velocity:l}}var bv,on,On,wv,Kh,Ev,Tv,Av,Rv,Qf,Cv,Pv,Iv,$h,is,Es,Lv,No=Pn(()=>{bv=.008333333333333333,on=.42,On=.45,wv=16.5,Kh=12,Ev=.32,Tv=.38,Av=.25,Rv=3.5,Qf=9,Cv=.7,Pv=.85,Iv=2.5,$h=-.12,is=(n,e,t)=>Math.min(t,Math.max(e,n)),Es=(n,e)=>Number.isFinite(n)?n:e,Lv=(n,e,t)=>n+is(e-n,-t,t)});var ss,jh=Pn(()=>{ss=Object.freeze([Object.freeze({x:.2,y:-.57,out:.23}),Object.freeze({x:-.02,y:-.6,out:.21})])});function dp(){let n=new Lt,{board:e,tips:t}=Yv(n),i=new Lt;i.rotation.order="YXZ",n.add(i);let s=new Lt;i.add(s);let r=new Lt;r.position.set(0,tp,0),r.rotation.order="XZY",i.add(r),Ut(Fo([{y:.535,x:.088,z:.102,shift:-.004},{y:.578,x:.078,z:.088,shift:-.002}]),wt.sleeve,r,[0,0,0],"shirt-collar"),Ut(new An(.066,.072,.12,6),wt.face,r,[.004,.61,0],"neck");let o=new fi;o.moveTo(0,.06),o.lineTo(.056,0),o.lineTo(0,-.06),o.lineTo(-.056,0),o.closePath(),Ut(new xs(o),wt.sleeve,r,[-.193,.22,0],"back-print").rotation.y=-Math.PI/2;let a=Zv(r),l=Ts(n,7,8,wt.tee,"oversized-tee"),c=Ts(n,2,8,wt.sleeve,"undershirt-hem"),h=Ts(n,5,8,wt.pants,"pant-seat"),d=[0,1].map(()=>({cloth:Ts(n,11,8,wt.pants,"baggy-pant-leg"),cuff:Ts(n,3,8,wt.pantsShade,"stacked-pant-cuff"),pocket:Ut(new kt(.16,.19,.04),wt.pantsShade,n,[0,0,0],"cargo-pocket"),trail:Array.from({length:11},()=>new U)})),u=[0,1].map(()=>{let A=Ut(new kt(.075,.19,.115),wt.mitt,n,[0,0,0],"mitten");return Ut(new kt(.05,.085,.05),wt.mitt,A,[.04,-.02,0],"mitten-thumb"),{tee:Ts(n,3,6,wt.tee,"tee-sleeve"),sleeve:Ts(n,7,6,wt.sleeve,"long-sleeve"),mitt:A}}),f=new Xt;f.position.set(.18,.12,.08),e.add(f);let p=new Ht(new no(.82,24),new Tn({color:3893368,transparent:!0,opacity:.2,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.scale.y=.48,n.add(p);let x=Object.freeze({hips:xr(),knees:xr(),ankles:xr(),shoulders:xr(),elbows:xr(),hands:xr()}),g=-.35,m=0,v=.35,S,M=new Nn,_=Object.fromEntries(["anchor","back","crease","down","drag","front","hang","limb","nose","offset","pelvisFront","pelvisUp","pole","reach","right","shin","side","thigh","toe","travel","upright","waist","wind","wrist"].map(A=>[A,new U])),w=Object.fromEntries(["chest","lean","look","middle","pelvis","slope","turn","yaw"].map(A=>[A,new Nn])),y=new jn,b=(A,P,z,V,L,W)=>{let D=A.path[P];return D.center.copy(z),D.rx=V,D.rz=L,D.framed=!!W,W&&(D.forward.copy(os).applyQuaternion(W),D.normal.copy(Do).applyQuaternion(W)),D.center},I=(A={},P={},z=0,V={x:0,y:1,z:-.35})=>{let L=et(A.position?.across),W=et(A.position?.downhill),D=Math.max(0,et(A.air)),F=et(A.heading),J=et(P.boardYaw,et(A.boardYaw,F)),N=D>.02?bt(et(P.boardTweak),-1.35,1.35):0,k=bt(et(P.styleYaw),-.4,.4),H=et(P.bodyYaw,et(A.torsoYaw,F)),G=bt(et(P.crouch,.3),0,1),he=bt(et(P.jumpStretch),0,1),X=bt(et(P.grab),0,1),oe=bt(et(P.bodyTilt,et(P.lean)*.55),-.8,.8),pe=bt(et(P.stumble),0,1),xe=bt(et(P.crashCollapse),0,1),re=Math.sign(oe)||1,me=D<=.05?bt(et(P.handDrag),0,1):0,Ye=bt(et(P.legOffset),-on,On),Ie=bt(-Ye/on,0,1),Ve=bt(et(P.snowResponse),0,1),Fe=bt(Fv-G*.6+he*.22+Ye-Ve*(D>0?0:.08)-X*.18-me*.06-xe*.3,Nv,Dv),q=z+D,ae=Math.max(.2,et(V.y,1)),ce=Math.atan2(et(V.z,-.35),et(V.y,1)),Re=-et(V.x)/ae*.36;D<=.02&&(g=ce,m=Re,v=et(A.slopeGrade,-et(V.z,-.35)/ae));let ue=et(A.elapsed,NaN),He=ue-S;S=ue;let Ce=He>0&&He<.1?He:0;n.position.set(L,0,-W),e.position.set(0,q+.035,0),e.rotation.set(bt((D>.02?g:ce)+et(P.boardPitch)+et(P.press)*.15+bt(et(P.stylePitch),-.25,.25),-.8,.55),-J-N-k,bt(-et(P.boardRoll)-bt(et(P.styleRoll),-.3,.3)+(D>.02?m:Re),-1.1,1.1));let rt=bt(et(P.boardFlex),0,1);t[0].rotation.x=-.12-rt*.12,t[1].rotation.x=.12+rt*.12,_.toe.copy(os).applyQuaternion(e.quaternion),_.nose.copy(iu).negate().applyQuaternion(e.quaternion);for(let R of[0,1])x.ankles[R].set(0,vr.height,(R?1:-1)*vr.stance).applyQuaternion(e.quaternion).add(e.position);let Qe=zv-H+et(P.upperBodyTwist)*.09;_.travel.set(Math.sin(F),0,-Math.cos(F)),_.right.set(Math.cos(F),0,Math.sin(F)),w.slope.setFromAxisAngle(os,-Math.atan(v)*Hv),w.lean.setFromAxisAngle(_.travel,oe*Gv+re*me*.1),w.turn.setFromEuler(y.set(-Math.max(0,G-.3)*.06-et(P.foreAft)*.04+et(P.press)*.1+pe*.07,Qe,et(P.fallRotation)*.6,"YXZ")),i.quaternion.copy(w.lean).multiply(w.slope).multiply(w.turn),_.upright.copy(Do).applyQuaternion(w.slope),i.position.copy(_.upright).multiplyScalar(Fe/_.upright.y).applyQuaternion(w.lean).addScaledVector(_.offset.copy(_.nose).setY(0),et(P.foreAft)*.08),i.position.y+=q;let ct=Number.isFinite(P.hipTwist)?P.hipTwist:bt(Xv(J+N+k-H)*.68,-1,1),O=-et(P.spineTwist),se=bt(oe/.6,0,1),nt=bt(-oe/.6,0,1),it=bt((.14+G*.46+Ie*.14)*(1-se*.7)-se*.12+nt*.38+X*.6+me*.1-he*.16+pe*.12+xe*.4+et(P.spineHinge),-.3,1.35),be=X*.34+et(P.spineSide),vt=()=>{s.rotation.set(0,bt(-kv-ct*.9,O-ip,O+ip),-it*.3),r.rotation.set(be,O,-it),w.pelvis.copy(i.quaternion).multiply(s.quaternion),w.chest.copy(i.quaternion).multiply(r.quaternion),_.waist.set(0,tp,0).applyQuaternion(i.quaternion).add(i.position);for(let R of[0,1]){let K=R?1:-1;x.hips[R].set(0,0,K*Uv).applyQuaternion(w.pelvis).add(i.position),x.shoulders[R].set(0,Ov,K*.258).applyQuaternion(w.chest).add(_.waist)}};vt();for(let R=0;R<3;R+=1){let K=Math.max(x.hips[0].distanceTo(x.ankles[0]),x.hips[1].distanceTo(x.ankles[1]))-Wv*.995;if(K<=0)break;_.offset.copy(e.position).setY(e.position.y+vr.height).sub(i.position),i.position.addScaledVector(_.offset.normalize(),K*1.05),vt()}if(X>0){_.anchor.copy(f.position).applyQuaternion(e.quaternion).add(e.position);for(let R=0;R<4;R+=1){let K=x.shoulders[1].distanceTo(_.anchor)-eu*Qh*.99;if(K<=0||it>=1.5)break;it=Math.min(1.5,it+K*1.8*X),vt()}}let We=R=>z-(et(V.x)*R.x+et(V.z,-.35)*R.z)/ae,qe=bt((me-.7)/.3,0,1);if(qe>0){let R=re>0?1:0,K=it;for(let j=0;j<4;j+=1){_.drag.copy(x.shoulders[R]).addScaledVector(_.right,re*.15),_.drag.y=We(_.drag)+.06;let ge=x.shoulders[R].distanceTo(_.drag)-eu*Qh*.99;if(ge<=0||it>=K+.45*qe)break;it=Math.min(K+.45*qe,it+ge*1.6*qe),vt()}}_.front.copy(os).applyQuaternion(i.quaternion),_.pelvisFront.copy(os).applyQuaternion(w.pelvis),_.pelvisUp.copy(Do).applyQuaternion(w.pelvis),_.down.set(0,-1,0);let C=F+bt(et(P.headLook),-1,1)*.4;w.look.setFromEuler(y.set(0,Math.PI/2-C,-.1,"YZX")),w.look.premultiply(w.yaw.copy(w.chest).invert());let E=2*Math.acos(bt(Math.abs(w.look.w),0,1));E>np?w.yaw.identity().slerp(w.look,np/E):w.yaw.copy(w.look),Ce>0?M.slerp(w.yaw,1-Math.exp(-Vv*Ce)):M.copy(w.yaw),a.quaternion.copy(A.crashed?M.identity():M),w.yaw.setFromAxisAngle(Do,Qe+O);let Y=bt(et(A.speed)/28,0,1),fe=et(A.elapsed),ie=(R,K)=>_.hang.copy(K).addScaledVector(R,-K.dot(R));for(let R of[0,1]){let K=R?1:-1,j=d[R],ge=x.hips[R],le=x.knees[R],de=x.ankles[R];_.pole.copy(_.toe).addScaledVector(_.nose,-K*.3).addScaledVector(_.front,.2),op(le,ge,de,ap,lp,_.pole),_.thigh.subVectors(le,ge).normalize(),_.shin.subVectors(de,le).normalize();let{path:Le}=j.cloth,lt=Math.acos(bt(_.thigh.dot(_.shin),-1,1));_.crease.subVectors(_.shin,_.thigh),_.crease.lengthSq()>1e-8&&_.crease.normalize(),[["waist",0,.14,.13,0,0,0],["hip",0,.166,.152,0,0,0],[_.thigh,.34,.17,.16,.04,.012,.3],[_.thigh,.66,.168,.16,.034,.014,.5],["above",0,.166,.164,.02,.014,.6],["knee",0,.164,.168,.012,.016,.65],["below",0,.168,.166,.016,.02,.75],[_.shin,.45,.174,.168,.02,.03,.9],[_.shin,.7,.176,.17,.012,.04,1],[_.shin,.95,.178,.172,0,.034,.85],[_.shin,1.03,.176,.17,0,.03,.8]].forEach(([dn,Gi,Fs,us,Xn,oi,kn],xn)=>{let Jt=Le[xn].center,yn=null;dn==="waist"?Jt.copy(ge).addScaledVector(_.pelvisUp,.1):dn==="hip"?Jt.copy(ge).addScaledVector(_.pelvisFront,-.03):dn==="above"?Jt.copy(le).addScaledVector(yn=_.thigh,-tu):dn==="below"?Jt.copy(le).addScaledVector(yn=_.shin,tu):dn==="knee"?(yn=_.shin,Jt.copy(le).addScaledVector(_.crease,tu*Math.tan(lt/4)-.015)):(yn=dn,yn===_.thigh?Jt.copy(ge).lerp(le,Gi):Jt.copy(le).lerp(de,Gi)),yn&&(Jt.addScaledVector(ie(yn,_.down),Xn),Jt.addScaledVector(ie(yn,_.travel),-oi*Y));let Et=j.trail[xn];Ce>0?(_.offset.copy(Jt),Et.lerp(Jt,1-Math.exp(-Ce*22)),_.limb.subVectors(Et,Jt).multiplyScalar(kn),_.limb.length()>.08&&_.limb.setLength(.08),Jt.add(_.limb),Et.sub(_.offset).clampLength(0,.3).add(_.offset)):Et.copy(Jt),yn&&(_.side.crossVectors(_.travel,yn),Jt.addScaledVector(_.side,Math.sin(fe*11-xn*.9+R*2.4)*.006*Y*kn)),Le[xn].rx=Fs,Le[xn].rz=us,Le[xn].framed=!1}),As(j.cloth,_.toe),b(j.cuff,0,_.offset.copy(Le[8].center).lerp(Le[9].center,.5),.186,.18),b(j.cuff,1,Le[10].center,.2,.192),b(j.cuff,2,_.offset.copy(Le[10].center).addScaledVector(_.shin,.075),.194,.184),As(j.cuff,_.toe);let Xe=j.pocket.scale.y;rp(j.pocket,ge,le,_.toe),j.pocket.scale.y=Xe,j.pocket.position.copy(Le[2].center).lerp(Le[3].center,.6).add(_.offset.set(0,0,K*.162).applyQuaternion(j.pocket.quaternion));let ke=u[R],ye=x.shoulders[R],ut=x.elbows[R],Mt=x.hands[R],un=P.arms?.[R]??ss[R],yi=R===1?X:0,wn=K===re?me:0,Ds=(R===0?X:0)*.26+(K===re?0:me)*.18;Mt.set(et(un.x,ss[R].x),et(un.y,ss[R].y)+Ds,K*(et(un.out,ss[R].out)+Ds*.4)).applyQuaternion(w.yaw).add(ye),wn>0&&(_.drag.copy(ye).addScaledVector(_.right,re*.15),_.drag.y=We(_.drag)+.06,Mt.lerp(_.drag,wn*.9)),yi>0&&Mt.lerp(_.anchor,yi);let ri=eu*(sp+(Qh-sp)*Math.max(wn,yi));_.reach.subVectors(Mt,ye),_.reach.length()>ri&&Mt.copy(ye).addScaledVector(_.reach.normalize(),ri),_.pole.set(-.85,-.25,K*.25).applyQuaternion(w.yaw),op(ut,ye,Mt,cp,hp+nu,_.pole),_.limb.subVectors(ut,ye).normalize(),_.reach.subVectors(Mt,ut).normalize(),_.wrist.copy(Mt).addScaledVector(_.reach,-nu),b(ke.tee,0,_.offset.copy(ye).addScaledVector(_.limb,-.05),.098,.098),b(ke.tee,1,_.offset.copy(ye).addScaledVector(_.limb,.09),.104,.104),b(ke.tee,2,_.offset.copy(ye).addScaledVector(_.limb,.2).addScaledVector(ie(_.limb,_.down),.012),.112,.112),As(ke.tee,_.front),b(ke.sleeve,0,_.offset.copy(ye).addScaledVector(_.limb,.14),.08,.08),b(ke.sleeve,1,_.offset.copy(ye).addScaledVector(_.limb,.29),.078,.078),_.crease.subVectors(_.reach,_.limb),_.crease.lengthSq()>1e-8&&_.crease.normalize(),b(ke.sleeve,2,_.offset.copy(ut).addScaledVector(_.crease,.11*Math.tan(Math.acos(bt(_.limb.dot(_.reach),-1,1))/4)),.08,.08),b(ke.sleeve,3,_.offset.copy(ut).addScaledVector(_.reach,.11).addScaledVector(ie(_.reach,_.down),.01),.077,.077),b(ke.sleeve,4,_.offset.copy(ut).lerp(_.wrist,.6).addScaledVector(ie(_.reach,_.down),.014),.071,.071),b(ke.sleeve,5,_.offset.copy(_.wrist).addScaledVector(_.reach,-.04),.064,.064),b(ke.sleeve,6,_.wrist,.058,.058),As(ke.sleeve,_.front);let vi=ke.mitt.scale.y;rp(ke.mitt,ut,Mt,_.front),ke.mitt.scale.y=vi,ke.mitt.position.copy(Mt)}let Se=R=>_.offset.copy(x.hips[0]).lerp(x.knees[0],R).add(_.limb.copy(x.hips[1]).lerp(x.knees[1],R)).multiplyScalar(.5);b(h,0,_.wrist.copy(i.position).addScaledVector(_.pelvisUp,.13),.14,.19,w.pelvis),b(h,1,_.wrist.copy(i.position).addScaledVector(_.pelvisUp,.05),.16,.215,w.pelvis),b(h,2,_.wrist.copy(i.position).addScaledVector(_.pelvisUp,-.05).addScaledVector(_.pelvisFront,-.015),.18,.236,w.pelvis),b(h,3,Se(.22),.16,.15),b(h,4,Se(.36).addScaledVector(_.down,.03),.1,.07),As(h,_.pelvisFront);let Ee=bt((_.thigh.dot(_.pelvisUp)+.75)/.6,0,1);w.middle.copy(w.pelvis).slerp(w.chest,.5);let te=-.2+Ee*.12,ne=(R,K=0)=>_.wrist.copy(i.position).addScaledVector(_.pelvisUp,R).addScaledVector(_.pelvisFront,K),Me=(R,K=0)=>_.wrist.set(K,R,0).applyQuaternion(w.chest).add(_.waist);b(l,0,ne(te),.24,.305,w.pelvis),b(l,1,ne(.04),.232,.296,w.pelvis),b(l,2,_.waist,.208,.274,w.middle),b(l,3,Me(.13),.186,.25,w.chest),b(l,4,Me(.3,.008),.19,.262,w.chest),b(l,5,Me(.455),.166,.26,w.chest),b(l,6,Me(.548,-.008),.1,.168,w.chest),As(l,_.front),b(c,0,ne(te-.06),.234,.299,w.pelvis),b(c,1,ne(te+.02),.234,.299,w.pelvis),As(c,_.front),p.position.set(.13,z+.024,.13),p.scale.set(1+D*.18,.48+D*.08,1),p.material.opacity=.22/(1+D*.9)};return I(),Object.freeze({board:e,body:i,grabAnchor:f,grabHand:u[1].mitt,group:n,hands:Object.freeze(u.map(A=>A.mitt)),head:a,joints:x,shadow:p,update:I})}var Qt,wt,Nv,Dv,Fv,ap,lp,cp,hp,nu,Uv,tp,Ov,Bv,vr,zv,kv,Hv,Gv,np,Vv,ip,sp,Qh,eu,tu,Wv,bt,et,Xv,Do,os,iu,Ut,rs,up,qv,Fo,yr,rp,op,Yv,Zv,Jv,Ts,Kv,As,xr,fp=Pn(()=>{Jh();No();jh();Qt=(n,e=.92,t=0)=>new ln({color:n,roughness:e,metalness:t,flatShading:!0}),wt=Object.freeze({board:Qt(15165e3,.48),boardBase:Qt(2635591,.58),boardGraphic:Qt(15919316,.6),boardEdge:Qt(12177620,.42),boot:Qt(1447964,.94),binding:Qt(3356477,.74),face:Qt(12750704,.98),goggles:Qt(921361,.35),goggleStrap:Qt(2764081,.9),lens:Object.assign(Qt(12896203,.3,.45),{emissive:new $e(2895667)}),helmet:Qt(2435117,.5),helmetTrim:Qt(855568,.8),mitt:Qt(1908772,.97),pants:Qt(15790318,1),pantsShade:Qt(13948632,1),pantsFold:Qt(14935268,1),sleeve:Qt(15921644,.98),sleeveShade:Qt(14539731,.98),tee:Qt(2829875,.95)}),Nv=.6,Dv=1.44,Fv=1.32,ap=.675,lp=.655,cp=.4,hp=.36,nu=.09,Uv=.12,tp=.17,Ov=.5,Bv=.63,vr=Object.freeze({height:.2,stance:.42}),zv=.48,kv=.2,Hv=.8,Gv=.62,np=1.25,Vv=12,ip=.8,sp=.94,Qh=.985,eu=cp+hp+nu,tu=.16,Wv=ap+lp,bt=(n,e,t)=>Math.min(t,Math.max(e,n)),et=(n,e=0)=>Number.isFinite(n)?n:e,Xv=n=>Math.atan2(Math.sin(n),Math.cos(n)),Do=new U(0,1,0),os=new U(1,0,0),iu=new U(0,0,1),Ut=(n,e,t,i=[0,0,0],s="")=>{let r=new Ht(n,e);return r.position.set(...i),r.castShadow=!["back-print","binding-strap","board-chevron","boot-sole","cargo-pocket","goggle-frame","goggle-lens","goggle-strap","helmet-brim","shirt-collar","topsheet-stripe"].includes(s),r.receiveShadow=!0,r.userData.part=s,t.add(r),r},rs=.6,up=[[1,-rs],[1,rs],[rs,1],[-rs,1],[-1,rs],[-1,-rs],[-rs,-1],[rs,-1]],qv=(n,e)=>{let t=n.shift??0;return e===8?up.map(([i,s])=>[i*n.x+t,n.y,s*n.z]):Array.from({length:e},(i,s)=>{let r=(s+.5)/e*Math.PI*2;return[Math.cos(r)*n.x+t,n.y,Math.sin(r)*n.z]})},Fo=(n,e=8)=>{let t=n.map(r=>qv(r,e)),i=[];for(let r=0;r<t.length-1;r+=1)for(let o=0;o<e;o+=1){let a=(o+1)%e,l=t[r],c=t[r+1];i.push(...l[o],...c[o],...l[a],...l[a],...c[o],...c[a])}for(let[r,o,a]of[[n[0],t[0],!1],[n.at(-1),t.at(-1),!0]]){let l=[r.shift??0,r.y,0];for(let c=0;c<e;c+=1){let h=(c+1)%e;i.push(...l,...o[a?h:c],...o[a?c:h])}}let s=new Pt;return s.setAttribute("position",new ht(i,3)),s.computeVertexNormals(),s},yr={axis:new U,bend:new U,cross:new U,basis:new St},rp=(n,e,t,i)=>{let s=yr.axis.subVectors(t,e),r=Math.max(.01,s.length());s.divideScalar(r);let o=n.userData.facing??(n.userData.facing=i.clone());return o.addScaledVector(s,-o.dot(s)),o.lengthSq()<1e-6&&(o.copy(Math.abs(s.x)<.9?os:iu),o.addScaledVector(s,-o.dot(s))),o.normalize(),yr.cross.crossVectors(o,s),n.quaternion.setFromRotationMatrix(yr.basis.makeBasis(o,s,yr.cross)),n.position.copy(e).add(t).multiplyScalar(.5),n.scale.y=r,r},op=(n,e,t,i,s,r)=>{let o=yr.axis.subVectors(t,e),a=Math.max(1e-4,o.length());o.divideScalar(a);let l=Math.max(1,a/((i+s)*.999)),c=i*l,h=s*l,d=bt((c*c-h*h+a*a)/(2*a),-c,c),u=yr.bend.copy(r).addScaledVector(o,-r.dot(o));return u.lengthSq()<1e-8&&u.copy(Math.abs(o.y)<.9?Do:os),u.normalize(),n.copy(e).addScaledVector(o,d).addScaledVector(u,Math.sqrt(Math.max(0,c*c-d*d)))},Yv=n=>{let e=new Lt;e.rotation.order="YXZ",n.add(e);let t=new fi;t.moveTo(-.12,-.97);for(let[r,o]of[[-.19,-.9],[-.2,-.68],[-.2,.68],[-.19,.9],[-.12,.97],[.12,.97],[.19,.9],[.2,.68],[.2,-.68],[.19,-.9],[.12,-.97]])t.lineTo(r,o);t.closePath();let i=new uo(t,{depth:.05,bevelEnabled:!1,curveSegments:1});i.rotateX(Math.PI/2),Ut(i,[wt.board,wt.boardEdge],e,[0,.095,0],"snowboard"),Ut(new kt(.075,.01,1.34),wt.boardGraphic,e,[0,.103,0],"topsheet-stripe");let s=[];for(let r of[-1,1]){let o=new Lt;o.position.z=r*.77,e.add(o),Ut(new kt(.31,.018,.27),wt.board,o,[0,.099,r*.065],"upturned-tip"),s.push(o),Ut(new kt(.23,.016,.2),wt.boardGraphic,e,[0,.111,r*.65],"board-chevron").rotation.y=r*.25,Ut(new An(.13,.13,.025,8),wt.binding,e,[0,.128,r*vr.stance],"binding-disc"),Ut(new kt(.35,.025,.2),wt.boardBase,e,[0,.14,r*vr.stance],"boot-sole");let a=Ut(new kt(.36,.15,.185),wt.boot,e,[.012,.215,r*vr.stance],"boot");a.rotation.y=-r*.2,Ut(new kt(.11,.07,.19),wt.binding,a,[-.15,.06,0],"binding-highback"),Ut(new kt(.06,.03,.2),wt.boardGraphic,a,[.07,.085,0],"binding-strap")}return{board:e,tips:s}},Zv=n=>{let e=new Lt;e.position.set(.012,Bv,0),n.add(e),Ut(Fo([{y:-.02,x:.058,z:.052,shift:.03},{y:.045,x:.094,z:.088,shift:.016},{y:.125,x:.11,z:.1,shift:.004},{y:.2,x:.108,z:.1}],6),wt.face,e,[0,0,0],"face"),Ut(Fo([{y:.105,x:.158,z:.148,shift:-.012},{y:.2,x:.162,z:.151,shift:-.012},{y:.278,x:.134,z:.124,shift:-.014},{y:.325,x:.078,z:.072,shift:-.016}]),wt.helmet,e,[0,0,0],"helmet-shell"),Ut(Fo([{y:.085,x:.163,z:.153,shift:-.012},{y:.112,x:.163,z:.153,shift:-.012}]),wt.helmetTrim,e,[0,0,0],"helmet-rim"),Ut(new kt(.05,.014,.19),wt.helmetTrim,e,[.158,.2,0],"helmet-brim");for(let t of[-1,1])Ut(new kt(.11,.1,.03),wt.helmetTrim,e,[-.005,.06,t*.137],"helmet-ear-pad");return Ut(Fo([{y:.118,x:.167,z:.157,shift:-.012},{y:.166,x:.167,z:.157,shift:-.012}]),wt.goggleStrap,e,[0,0,0],"goggle-strap"),Ut(new An(.166,.166,.092,5,1,!1,Math.PI/2-1.05,2.1),wt.goggles,e,[0,.142,0],"goggle-frame"),Ut(new An(.171,.171,.06,4,1,!1,Math.PI/2-.9,1.8),wt.lens,e,[0,.144,0],"goggle-lens"),e},Jv=Array.from({length:6},(n,e)=>{let t=(e+.5)/6*Math.PI*2;return[Math.cos(t),Math.sin(t)]}),Ts=(n,e,t,i,s)=>{let r=e*t,o=[];for(let c=0;c<e-1;c+=1)for(let h=0;h<t;h+=1){let d=c*t+h,u=c*t+(h+1)%t;o.push(d,d+t,u,u,d+t,u+t)}for(let c=0;c<t;c+=1){let h=(c+1)%t;o.push(r,c,h,r+1,r-t+h,r-t+c)}let a=new Pt;a.setIndex(o),a.setAttribute("position",new En(new Float32Array((r+2)*3),3));let l=Ut(a,i,n,[0,0,0],s);return l.frustumCulled=!1,{mesh:l,sides:t,shape:t===8?up:Jv,path:Array.from({length:e},()=>({center:new U,rx:.1,rz:.1,framed:!1,forward:new U,normal:new U}))}},Kv=Object.fromEntries(["into","out","side","bend","corner"].map(n=>[n,new U])),As=(n,e)=>{let{path:t,shape:i,sides:s}=n,{into:r,out:o,side:a,bend:l,corner:c}=Kv,h=n.mesh.geometry.attributes.position,d=t.length-1;for(let f=0;f<=d;f+=1){let p=t[f],x=1;p.framed||(r.subVectors(p.center,t[Math.max(0,f-1)].center),o.subVectors(t[Math.min(d,f+1)].center,p.center),r.lengthSq()<1e-10&&r.copy(o),o.lengthSq()<1e-10&&o.copy(r),r.normalize(),o.normalize(),p.normal.addVectors(r,o),p.normal.lengthSq()<1e-8&&p.normal.copy(o),p.normal.normalize(),l.subVectors(o,r),l.lengthSq()>1e-6&&(l.normalize(),x=1/Math.max(.82,p.normal.dot(r))),p.forward.copy(f===0?e:t[f-1].forward),p.forward.addScaledVector(p.normal,-p.forward.dot(p.normal)),p.forward.lengthSq()<1e-8&&(p.forward.copy(Math.abs(p.normal.x)<.9?os:iu),p.forward.addScaledVector(p.normal,-p.forward.dot(p.normal))),p.forward.normalize()),a.crossVectors(p.forward,p.normal);for(let g=0;g<s;g+=1)c.set(0,0,0).addScaledVector(p.forward,i[g][0]*p.rx).addScaledVector(a,i[g][1]*p.rz),x>1&&c.addScaledVector(l,c.dot(l)*(x-1)),c.add(p.center),h.setXYZ(f*s+g,c.x,c.y,c.z)}let u=t.length*s;h.setXYZ(u,t[0].center.x,t[0].center.y,t[0].center.z),h.setXYZ(u+1,t[d].center.x,t[d].center.y,t[d].center.z),h.needsUpdate=!0,n.mesh.geometry.boundingBox=null,n.mesh.geometry.boundingSphere=null},xr=()=>[new U,new U]});function yp(n={}){let e=It(At(n.crouch),0,1),t=It(At(n.airborne),0,1),i=It(At(n.foreAft),-1,1),s=It(At(n.jumpStretch),0,1),r=It(At(n.lean),-1,1),o=n.toeSide!==!1,a=It(At(n.upperBodyTwist),-1,1),l=It(At(n.boardRoll),-1.08,1.08),c=It(At(n.boardSwing),-1.8,1.8),h=It(At(n.bodyTilt),-.8,.8),d=It(At(n.hipTwist),-1.2,1.2),u=It(At(n.shoulderTwist,a),-.7,.7),f=It(At(n.headLook),-1,1),p=It(At(n.armLag),-1,1),x=It(At(n.clothLag),-1.5,1.5),g=It(At(n.clothFlutter),-1,1),m=It(At(n.handDrift),-1.5,1.5),v=It(At(n.breath),-1,1),S=It(At(n.stumble),0,1),M=It(At(n.crashCollapse),0,1),_=It(At(n.crashSit),0,1),w=It(At(n.boardFlex),0,1),y=It(At(n.boardPitch),-.6,.6),b=It(At(n.butter),0,1),I=It(At(n.press),-1,1),A=Math.max(0,I)*18,P=Math.max(0,-I)*18,z=It(At(n.handDrag),0,1),V=It(At(n.grab),0,1),L=It(At(n.scarfFlutter),-1,1),W=At(n.bob)*20,D=At(n.boardBob,At(n.bob))*20,F=Math.sign(l)||1,J=F*13,N=Math.cos(Math.abs(l)),k=t>.1?0:b>.5?I>=0?43:-43:n.switchRiding?24:-23,H=ee(J+(0-J)*N,k+D),G=(nt,it)=>{let be=J+(nt-J)*N,vt=it<0?A*(-it/58):P*(it/55),We=Math.sin((it+58)/113*Math.PI)*w*2,qe=ee(be,it+y*it*.28-vt+We+D);return $v(qe,H,c)},he=Math.sin(Math.abs(l))*9,X=-F,oe=(n.stance==="goofy"?-1:1)*(n.switchRiding?-1:1),pe=oe,xe=ee(r*(o?16:11)+h*4+d*2,-2+e*14-s*5-i*5+b*4+(o?0:Math.abs(r)*3)+W+M*12+_*7),re=G(-6,-23),me=G(2,31),Ye=ee(xe.x-7+d*2,xe.y-2-d*3),Ie=ee(xe.x+7+d*2,xe.y+2+d*3),Ve=xp(re,Ye,e,o?1.08:.92),Fe=xp(me,Ie,e,o?.94:1.12),q=ee(xe.x+r*(o?13:7)+u*5,xe.y-29+e*14-s*8+(o?Math.abs(r)*2:0)+M*9+v),ae=ee(q.x-15,q.y+3-u*5),ce=ee(q.x+15,q.y-3+u*5),Re=r<0?z:0,ue=r>=0?z:0,He=ee(xe.x-21+u*8+p*8-_*11+m,xe.y+12+e*9-t*3+Re*22-S*21+_*9+m*.6),Ce=ee(xe.x+21+u*8+p*11-V*10+_*5-m*.7,xe.y+12+e*9-t*3+ue*22+V*9-S*28-_*4-m*.4),rt=ee((ae.x+He.x)/2-3,(ae.y+He.y)/2-2),Qe=ee((ce.x+Ce.x)/2+4,(ce.y+Ce.y)/2-1),ct=_p(ae,rt,.68),O=_p(ce,Qe,.68),se=ee(q.x+r*4+f*5-h*2,q.y-15-s*3+M*4);return Object.freeze([at("board","board",[G(-8,-58),G(8,-58),G(12,-52),G(13,44),G(9,54),G(-9,54),G(-13,44),G(-12,-52)]),at("board-side","boardSide",[G(8,-58),ee(G(8,-58).x+4,G(8,-58).y+4),ee(G(13,44).x+4,G(13,44).y+4),G(13,44)]),at("board-tail-side","boardBase",[G(-9,54),G(9,54),ee(G(9,54).x+3,G(9,54).y+4),ee(G(-9,54).x+3,G(-9,54).y+4)]),at("board-underside","boardBase",[G(X*(11+he/N),-49),G(X*11,-49),G(X*13,45),G(X*(13+he/N),45)]),at("board-edge","boardEdge",[G(F*12.2,-48),G(F*13.2,-45),G(F*13.2,42),G(F*12.2,45)]),at("board-inset","boardShadow",[G(0,-46),G(5,-41),G(6,41),G(-6,41),G(-5,-41)]),at("board-nose-graphic","boardAccent",[G(-9,-47),G(6,-38),G(7,-34),G(-9,-43)]),at("board-tail-graphic","boardAccent",[G(9,38),G(-7,47),G(-9,51),G(9,42)]),at("board-mark","board",[G(-3,-15),G(3,-11),G(3,12),G(-3,16)]),at("left-leg","pantsShadow",mp(re,Ve,Ye)),at("left-pant-side","pantsSide",[ee(Ve.x-14,Ve.y-6),ee(Ve.x-15,Ve.y+5),ee(re.x-10,re.y),ee(re.x-4,re.y-6)]),at("left-pant-fold","pantsFold",[ee(Ve.x-9,Ve.y-4),ee(Ve.x+4,Ve.y+2),ee(re.x-5,re.y-8)]),at("right-leg","pants",mp(me,Fe,Ie)),at("right-pant-side","pantsSide",[ee(Fe.x+14,Fe.y-6),ee(Fe.x+15,Fe.y+5),ee(me.x+10,me.y),ee(me.x+4,me.y-6)]),at("right-pant-fold","pantsFold",[ee(Fe.x+9,Fe.y-5),ee(Fe.x-2,Fe.y+3),ee(me.x+6,me.y-8)]),at("left-boot","boots",xi(re.x,re.y,29,9,-.28*oe+c)),at("right-boot","boots",xi(me.x,me.y,29,9,.28*oe+c)),at("left-boot-top","bootsTop",xi(re.x,re.y-2,24,4,-.28*oe+c)),at("right-boot-top","bootsTop",xi(me.x,me.y-2,24,4,.28*oe+c)),at("left-pant-cuff","pantCuff",xi(re.x,re.y-5,25,7,-.28*oe+c)),at("right-pant-cuff","pantCuff",xi(me.x,me.y-5,25,7,.28*oe+c)),at("torso","tee",[ee(ae.x-4,ae.y-2),ee(ce.x+4,ce.y-2),ee(Ie.x+9,Ie.y+2),ee(Ye.x-9,Ye.y+2)]),at("shirt-light-panel","teeLight",[ee(ae.x-4,ae.y-2),ee(q.x+2,q.y-3),ee(xe.x-2,xe.y+2),ee(Ye.x-9,Ye.y+2)]),at("shirt-side-panel","teeShadow",[ee(q.x+7,q.y),ee(ce.x+4,ce.y-1),ee(Ie.x+9,Ie.y+2),ee(xe.x+8,xe.y+2)]),at("shirt-hem","tee",[ee(Ye.x-9,Ye.y),ee(Ie.x+9,Ie.y),ee(Ie.x+11+x*7,Ie.y+5+g*3),ee(xe.x+x*8,xe.y+7+g*3),ee(Ye.x-10+x*5,Ye.y+5+g*2)]),at("shirt-graphic","board",[ee(q.x-8,q.y+14),ee(q.x-1,q.y+7),ee(q.x+6,q.y+14),ee(q.x+2,q.y+14),ee(q.x-1,q.y+11),ee(q.x-5,q.y+16)]),at("left-arm","sleeveShadow",pp(He,rt,ae,5)),at("right-arm","sleeve",pp(Ce,Qe,ce,5)),at("right-sleeve-light","sleeveLight",[ee(Qe.x-2,Qe.y-1),ee(Qe.x+2,Qe.y-1),ee(Ce.x+2,Ce.y-5),ee(Ce.x-1,Ce.y-5)]),at("left-tee-sleeve","teeShadow",gp(ae,ct,8,7)),at("right-tee-sleeve","tee",gp(ce,O,8,7)),at("left-sleeve-cuff","sleeve",xi(He.x,He.y-5,11,5,-.2)),at("right-sleeve-cuff","sleeveShadow",xi(Ce.x,Ce.y-5,11,5,.2)),at("left-mitt","mitts",xi(He.x,He.y,8,10,-.18)),at("right-mitt","mitts",xi(Ce.x,Ce.y,8,10,.18)),at("head","helmet",[ee(se.x-9,se.y-5),ee(se.x-5,se.y-10),ee(se.x+5,se.y-10),ee(se.x+10,se.y-5),ee(se.x+10,se.y+5),ee(se.x+5,se.y+9),ee(se.x-5,se.y+9),ee(se.x-10,se.y+5)]),at("helmet-side","helmetSide",[ee(se.x+5,se.y-10),ee(se.x+10,se.y-5),ee(se.x+10,se.y+5),ee(se.x+5,se.y+9),ee(se.x+4,se.y+2)]),at("helmet-panel","helmetShadow",[ee(se.x-8,se.y-5),ee(se.x-4,se.y-9),ee(se.x+5,se.y-9),ee(se.x+8,se.y-5),ee(se.x+3,se.y-1),ee(se.x-5,se.y-1)]),at("helmet-highlight","helmetHighlight",[ee(se.x-5,se.y-5),ee(se.x,se.y-9),ee(se.x+1,se.y-6),ee(se.x-2,se.y-3)]),at("face","skin",[ee(se.x-6,se.y+2),ee(se.x+6,se.y+2),ee(se.x+5,se.y+8),ee(se.x,se.y+10),ee(se.x-5,se.y+8)]),at("helmet-band","helmetBand",[ee(se.x-9,se.y-2),ee(se.x+9,se.y-2),ee(se.x+9,se.y+1),ee(se.x-9,se.y+1)]),at("goggles","goggles",[ee(se.x+pe*1+f*2,se.y-3),ee(se.x+pe*8+f*2,se.y-2),ee(se.x+pe*8+f*2,se.y+3),ee(se.x+pe*1+f*2,se.y+3)]),at("goggle-lens","goggleLens",[ee(se.x+pe*3+f*2,se.y-2),ee(se.x+pe*7+f*2,se.y-1),ee(se.x+pe*7+f*2,se.y+1),ee(se.x+pe*3+f*2,se.y+1)]),at("goggle-strap","goggleStrap",[ee(se.x-9,se.y-1),ee(se.x+9,se.y-1),ee(se.x+8,se.y+3),ee(se.x-8,se.y+3)]),at("goggle-lens","goggleLens",[ee(se.x-6,se.y-2),ee(se.x+7,se.y-2),ee(se.x+5,se.y+2),ee(se.x-5,se.y+2)]),at("scarf","scarf",[ee(q.x+7,q.y-10),ee(q.x+15,q.y-8),ee(q.x+21+r*4+L*5,q.y+10-t*5-Math.abs(L)*4),ee(q.x+11,q.y+2)])])}var It,At,ee,at,xi,pp,mp,gp,_p,$v,xp,vp=Pn(()=>{It=(n,e,t)=>Math.min(t,Math.max(e,n)),At=(n,e=0)=>Number.isFinite(n)?n:e,ee=(n,e)=>Object.freeze({x:n,y:e}),at=(n,e,t)=>Object.freeze({part:n,points:Object.freeze(t),tone:e}),xi=(n,e,t,i,s)=>{let r=Math.cos(s),o=Math.sin(s);return[[-t/2,-i/2],[t/2,-i/2],[t/2,i/2],[-t/2,i/2]].map(([a,l])=>ee(n+a*r-l*o,e+a*o+l*r))},pp=(n,e,t,i)=>[ee(n.x-i,n.y),ee(e.x-i,e.y),ee(t.x-i,t.y),ee(t.x+i,t.y),ee(e.x+i,e.y),ee(n.x+i,n.y)],mp=(n,e,t)=>[ee(n.x-10,n.y),ee(n.x-12,n.y-6),ee(e.x-15,e.y+5),ee(e.x-14,e.y-6),ee(t.x-12,t.y-4),ee(t.x+12,t.y-4),ee(e.x+14,e.y-6),ee(e.x+15,e.y+5),ee(n.x+12,n.y-6),ee(n.x+10,n.y)],gp=(n,e,t,i)=>[ee(n.x-t,n.y-2),ee(n.x+t,n.y-2),ee(e.x+i,e.y+2),ee(e.x-i,e.y+2)],_p=(n,e,t)=>ee(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t),$v=(n,e,t)=>{let i=n.x-e.x,s=n.y-e.y,r=Math.cos(t),o=Math.sin(t);return ee(e.x+i*r-s*o,e.y+i*o+s*r)},xp=(n,e,t,i)=>{let s=e.x-n.x,r=e.y-n.y,o=Math.max(.001,Math.hypot(s,r)),a=Math.min(34,o),l=Math.sqrt(Math.max(0,18**2-(a/2)**2))*(.7+t*.13)*i;return ee((n.x+e.x)/2-r/o*l,(n.y+e.y)/2+s/o*l)}});function Qv(n,e=0){let t=n.getBoundingClientRect?.().height||n.height,i=Ui(n.height/Math.max(1,t),1,2);return Math.max(0,e)*42*i}function su(n=1500){let e=[],t=-1,i=-1/0,s=0;return Object.freeze({points(){return Object.freeze([...e])},reset(){e=[],t=-1,i=-1/0,s=0},update(r){let o=Number(r?.elapsed)||0,a=Number(r?.position?.downhill)||0;(o<t||a<i-1)&&(e=[],s=0),t=o,i=a;let l=Number(r?.edge)||0,c=Ui(Number(r?.skid)||0,0,1),h=Number(r?.landingImpact)||0;if(r?.air>0||r?.crashed){s=h;return}let d=Number(r?.boardYaw)||0,u=Math.sign(l||r?.slipAngle||1),f=(Number(r?.position?.across)||0)+Math.cos(d)*u*.12,p=e.at(-1),x=h>1.5&&s<=1.5;if(s=h,p&&Math.hypot(f-p.across,a-p.downhill)<.1&&!x)return;let g=Ui(Number(r?.carveQuality)||0,0,1),m=x?"landing":(Number(r?.butter)||0)>.55?"butter":Math.abs(Number(r?.pressAmount)||0)>.45&&c<.2?"press":g>=.45&&c<.36?"carve":c>=.12||Math.abs(l)>=.08?"skid":r?.surface==="powder"?"powder":"flat";e.push(Object.freeze({across:f,downhill:a,kind:m,width:m==="carve"?.9:m==="press"?.85:m==="flat"?1.5:m==="powder"?2.5:m==="landing"?4+h*.5:2.2+c*5.8})),e.length>n&&(e=e.slice(-n))}})}function eM(n,e,t={}){let{cameraAcross:i=0,currentDownhill:s=0,groundY:r=0,palette:o=Uo,scale:a=1,viewportCenter:l=0}=t;if(!Array.isArray(e)||e.length<2)return;let c=h=>({x:l+(h.across-i)*14,y:r+(s-h.downhill)*10*a});n.save(),n.lineCap="round";for(let h=1;h<e.length;h+=1){let d=e[h-1],u=e[h],f=s-d.downhill,p=s-u.downhill;if(f<-.2||p<-.2||f>22||p>22)continue;let x=c(d),g=c(u),m=1-Ui(Math.max(f,p)/22,0,.82);if(n.globalAlpha=m,n.strokeStyle=u.kind==="carve"?o.carveTrace:u.kind==="flat"?o.flatTrace:u.kind==="powder"?o.powderTrace??o.flatTrace:u.kind==="press"?o.pressTrace??o.flatTrace:o.skidTrace,u.kind==="landing"){n.fillStyle=o.skidTrace,n.beginPath(),n.ellipse(g.x,g.y,u.width*a,u.width*a*.35,0,0,Math.PI*2),n.fill();continue}n.lineWidth=Math.max(.8,u.width*a),n.beginPath(),n.moveTo(x.x,x.y),n.lineTo(g.x,g.y),n.stroke()}n.restore()}function tM(n,e={}){let{direction:t=1,intensity:i=0,palette:s=Uo,scale:r=1,surface:o="groomed",x:a=0,y:l=0}=e;if(i<.05)return;n.save(),n.translate(a,l),n.scale(r,r),n.fillStyle=s.snowSpray;let c=o==="powder"?12:o==="ice"?4:7,h=o==="powder"?1.65:o==="slush"?1.3:1;for(let d=0;d<c;d+=1){let u=(d+1)/c,f=(7+d*5)*t;n.globalAlpha=i*(.72-u*.42),n.beginPath(),n.ellipse(f,8+d*2.4,(2.5+i*4*(1-u*.45))*h,(1.6+i*2.5*(1-u*.5))*h,t*-.28,0,Math.PI*2),n.fill()}n.restore()}function nM(n,e={}){let{edge:t=0,palette:i=Uo,quality:s=0,scale:r=1,x:o=0,y:a=0}=e;if(Math.abs(t)<.12||s<.35)return;let l=Math.sign(t)||1;n.save(),n.globalAlpha=Ui(s,0,1)*.82,n.strokeStyle=i.carveTrace,n.lineWidth=Math.max(1,r*.9),n.beginPath(),n.moveTo(o-l*4*r,a+7*r),n.lineTo(o-l*15*r,a+54*r),n.stroke(),n.restore()}function iM(n,e,t={}){let{boardTweak:i=0,palette:s=Uo,rotation:r=0,scale:o=1,x:a=0,y:l=0}=t;n.save(),n.translate(a,l),n.rotate(r),n.scale(o,o);for(let c of e){let h=c.part.startsWith("board")||c.part.endsWith("boot"),d=c.part.endsWith("leg"),u=h?i:d?i*.45:0,[f,...p]=c.points;n.save(),n.rotate(u),n.beginPath(),n.moveTo(f.x,f.y);for(let x of p)n.lineTo(x.x,x.y);n.closePath(),n.fillStyle=s[c.tone]??s.board,n.fill(),n.restore()}n.restore()}function Mp(n,e=Uo){let t=n.getContext("2d");if(!t)throw new Error("Rider rendering requires a 2D canvas context");let i=su();return Object.freeze({beginFrame(){t.clearRect(0,0,n.width,n.height)},draw({camera:s,pose:r,state:o}){let a=Ui(Number(s.zoom)||1,.82,1),l=Ui(Math.min(n.width/700,n.height/500),1.1,2.4)*a,c=(o.position.across-s.position.across)*14*a,h=Qv(n,o.air),d=n.width/2+c,u=n.height*.78+(Number(s.dip)||0)*9,f=1-Ui((o.air??0)/3.5,0,.55);if(t.save(),t.translate(n.width/2,n.height/2),t.rotate(-(Number(s.roll)||0)),t.translate(-n.width/2,-n.height/2),i.update(o),eM(t,i.points(),{cameraAcross:s.position.across,currentDownhill:o.position.downhill,groundY:u,palette:e,scale:l,surface:o.surface,viewportCenter:n.width/2}),r.handDrag>.55){let p=Math.sign(r.lean||o.edge||1);nM(t,{edge:p,palette:e,quality:r.handDrag,scale:l,x:d+p*28*l,y:u+5*l})}tM(t,{direction:-Math.sign(o.slipAngle||o.edge||1),intensity:r.spray,palette:e,scale:l,surface:o.surface,x:d,y:u+4*l}),t.save(),t.translate(d+9*l,u+11*l),t.rotate((Number(r.boardSwing)||0)*.7),t.scale(l*f,l*f),t.fillStyle="rgba(26, 65, 83, 0.13)",t.beginPath(),t.moveTo(-8,-51),t.lineTo(8,-51),t.lineTo(12,-44),t.lineTo(12,43),t.lineTo(8,51),t.lineTo(-8,51),t.lineTo(-12,43),t.lineTo(-12,-44),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=e.shadow,t.beginPath(),t.ellipse(d+9*l,u+14*l,28*l*f,9*l*f,0,0,Math.PI*2),t.fill(),t.restore(),iM(t,yp(r),{palette:e,rotation:(r.airborne>0?r.bodySpin:Ui(jv(r.bodyYaw)*.12+r.lean*.08,-.4,.4))+r.fallRotation,scale:l,x:d,y:u-h}),t.restore()}})}var Uo,Ui,jv,ru=Pn(()=>{vp();Uo=Object.freeze({board:"#f16e50",boardAccent:"#f4e9d8",boardBase:"#a8453f",boardEdge:"#f8fafc",boardSide:"#a94b40",boardShadow:"#29354e",boots:"#202a40",bootsTop:"#46536d",carveTrace:"rgba(71, 125, 148, 0.58)",flatTrace:"rgba(116, 174, 194, 0.18)",goggles:"#182438",goggleLens:"#8ed4d9",goggleStrap:"#29354e",helmet:"#f16e50",helmetBand:"#29354e",helmetHighlight:"#ff9b78",helmetSide:"#d75b49",helmetShadow:"#b74840",mitts:"#202a40",pantCuff:"#26324b",pants:"#657391",pantsFold:"#35415c",pantsSide:"#3c4967",pantsShadow:"#4c5a78",powderTrace:"rgba(85, 159, 185, 0.24)",pressTrace:"rgba(71, 125, 148, 0.32)",scarf:"#f6cd75",shadow:"rgba(15, 42, 58, 0.24)",skidTrace:"rgba(116, 174, 194, 0.3)",skin:"#dca67f",sleeve:"#f16e50",sleeveLight:"#ff9d77",sleeveShadow:"#bc4d42",snowSpray:"#b9e9f5",tee:"#f4e9d8",teeLight:"#fff9ec",teeShadow:"#d7c8b9"}),Ui=(n,e,t)=>Math.min(t,Math.max(e,n)),jv=n=>Math.atan2(Math.sin(n),Math.cos(n))});function Sp(n){let e=Number(n.radius)||2.5,t=Number(n.id)||0,i=[],s=(a,l,c,h)=>{let d=(a==="pine"?sM:rM)*l,u=Math.max(0,e-d)*c;i.push(Object.freeze({type:a,size:l,turn:Yt(t,i.length+20)*Math.PI*2,x:Math.cos(h)*u,z:Math.sin(h)*u*.85}))},r=(a,l)=>(a>0?0:Math.PI)+(Yt(t,l)-.5)*1.1,o=Yt(t,0)*Math.PI*2;return n.variant==="rock-garden"?(s("rock",.7+Yt(t,1)*.15,.15,o),s("rock",.42+Yt(t,2)*.3,1,r(1,3)),s("rock",.42+Yt(t,4)*.3,1,r(-1,5)),s("rock",.36+Yt(t,6)*.26,.8,Math.PI/2+(Yt(t,7)-.5)),Yt(t,8)>.45&&s("rock",.34+Yt(t,9)*.22,.85,-Math.PI/2+(Yt(t,10)-.5))):(s("pine",1.1+Yt(t,1)*.22,.12,o),s("pine",.58+Yt(t,2)*.3,1,r(1,3)),s("pine",.58+Yt(t,4)*.3,1,r(-1,5)),Yt(t,6)>.4&&s("pine",.5+Yt(t,7)*.22,.9,Math.PI/2*(Yt(t,8)>.5?1:-1)),s("rock",.48+Yt(t,9)*.26,.95,(Yt(t,10)>.5?1:-1)*(.9+Yt(t,11)*.5))),Object.freeze(i)}var Oo,nc,ou,au,sM,rM,Yt,lu=Pn(()=>{Oo=Object.freeze({halfLength:Object.freeze([5,6]),clearance:.5,rootPlate:Object.freeze({width:.7,clearance:1.15})}),nc=Object.freeze({halfLength:Object.freeze([4,5]),stumpWidth:.8,restWidth:1.9}),ou=Object.freeze({radius:Object.freeze([2.5,3.1]),clearance:6}),au=Object.freeze({radius:Object.freeze([2,2.5]),clearance:1}),sM=1.16,rM=1.09,Yt=(n,e)=>{let t=Math.sin(n*127.1+e*311.7+31.37)*43758.5453;return t-Math.floor(t)}});function bp({misalign:n,impact:e,meter:t}){return t>=100||n>sc&&e>oM?"crash":n>=ic&&e>cu?"sketchy":"clean"}var ic,sc,cu,oM,rc,hu=Pn(()=>{ic=Math.PI/9,sc=Math.PI/3,cu=1.2,oM=2.5,rc=.45});function Rs(n){let e=Fp(n)*lM;return Object.freeze({min:aM+e,max:du+e})}function mu(n){let e=ve(n,0),t=Pe(e,0,oc),i=Ip*(t**2/(2*oc)+Math.max(0,e-oc));return-.36*e-i+.2/.024*(Math.cos(e*.024-.3)-Math.cos(-.3))+.03/.061*(Math.cos(e*.061)-1)}function ls(n={},e="groomed"){let t=ve(n.across,0),i=ve(n.downhill,0),s=Cp[e]??Cp.groomed,r=(h,d)=>TM(h,d)*s.amplitude,o=.08,a=r(t,i),l=(r(t,i+o)-r(t,i-o))/(o*2),c=(r(t+o,i)-r(t-o,i))/(o*2);return Object.freeze({height:a,roll:c,roughness:s.roughness*(.65+Pe((Math.abs(l)+Math.abs(c))*.9,0,.35)),slope:l})}function Mr(n={}){let e=n.position??{},t=ve(n.heading,0),i=Math.max(0,ve(n.speed,8)),s=n.velocity,r=s?{across:ve(s.across,0),downhill:ve(s.downhill,i)}:AM(i,t),o=Math.hypot(r.across,r.downhill),a=s?Math.atan2(r.across,r.downhill):t,l=!!n.switchRiding,c=ve(n.boardYaw,a+(l?Math.PI:0)),h=pu[n.surface]?n.surface:"groomed",d=ls(e,h),u=n.grounded===void 0?ve(n.air,0)<=0:!!n.grounded;return lc({air:Math.max(0,ve(n.air,0)),airtime:Math.max(0,ve(n.airtime,0)),boardLightness:Pe(ve(n.boardLightness,0),0,1),boardOffset:ve(n.boardOffset,en(c-a-(l?Math.PI:0))),boardRotation:ve(n.boardRotation,c),boardYaw:c,bodyHeave:ve(n.bodyHeave,d.height),bumpImpact:Pe(ve(n.bumpImpact,0),0,1),butter:Pe(ve(n.butter,0),0,1),carveQuality:Pe(ve(n.carveQuality,0),0,1),chatter:Pe(ve(n.chatter,0),0,1),compression:Pe(ve(n.compression,0),0,1),crouchAmount:Pe(ve(n.crouchAmount,0),0,1),crouchHeld:!!n.crouchHeld,crouchPressedAge:Math.max(0,ve(n.crouchPressedAge,10)),crashed:!!n.crashed,crashReason:n.crashReason??null,crashSpin:ve(n.crashSpin,0),crashTimer:Math.max(0,ve(n.crashTimer,0)),edge:Pe(ve(n.edge,0),-1,1),elapsed:Math.max(0,ve(n.elapsed,0)),flickBrake:Math.max(0,ve(n.flickBrake,0)),flickRecovery:Math.max(0,ve(n.flickRecovery,0)),frontEdge:Pe(ve(n.frontEdge,n.edge??0),-1,1),frontFootPressure:Pe(ve(n.frontFootPressure,.58),0,1),gForce:Math.max(0,ve(n.gForce,0)),gripLoad:Pe(ve(n.gripLoad,1),Np,Dp),grounded:u,heading:a,hillRate:Number.isFinite(n.hillRate)?n.hillRate:null,impactMeter:Pe(ve(n.impactMeter,0),0,100),landingImpact:Math.max(0,ve(n.landingImpact,0)),lean:Pe(ve(n.lean,n.edge??0),-1,1),legOffset:Pe(ve(n.legOffset,0),-on,On),load:Math.max(0,ve(n.load,u?1:0)),noseFloat:Pe(ve(n.noseFloat,0),0,1),popCharge:Pe(ve(n.preload,n.popCharge??0),0,1),popArcVelocity:Math.max(0,ve(n.popArcVelocity,0)),popElapsed:Math.max(0,ve(n.popElapsed,0)),popped:!!n.popped,position:{across:ve(e.across,0),downhill:ve(e.downhill,0)},pressAmount:Pe(ve(n.pressAmount,0),-1,1),preload:Pe(ve(n.preload,n.popCharge??0),0,1),preloadReleaseAge:Math.max(0,ve(n.preloadReleaseAge,Lp+1)),rearEdge:Pe(ve(n.rearEdge,n.edge??0),-1,1),ride:ve(n.ride,0),skid:Pe(ve(n.skid,0),0,1),slash:Pe(ve(n.slash,0),0,1),slideSpin:ve(n.slideSpin,0),slipAngle:ve(n.slipAngle,en(c-a)),slopeGrade:Pe(ve(n.slopeGrade,hM),0,.78),speed:o,spinVelocity:ve(n.spinVelocity,0),angularMomentum:ve(n.angularMomentum,ve(n.spinVelocity,0)*1),stanceHeight:Pe(ve(n.stanceHeight,1-Pe(ve(n.crouchAmount,0),0,1)*(1-ac)),0,1),stance:n.stance==="goofy"?"goofy":"regular",steer:Pe(ve(n.steer,0),-1,1),steerHold:Math.max(0,ve(n.steerHold,0)),stumble:Math.max(0,ve(n.stumble,0)),surface:h,switchRiding:l,takeoffSlip:Pe(ve(n.takeoffSlip,0),0,Math.PI/2),turnRate:ve(n.turnRate,0),tweak:Pe(ve(n.tweak,0),-1,1),terrainHeight:ve(n.terrainHeight,d.height),terrainLaunchCooldown:Math.max(0,ve(n.terrainLaunchCooldown,0)),terrainPitch:ve(n.terrainPitch,d.slope),terrainRoll:ve(n.terrainRoll,d.roll),torsoYaw:ve(n.torsoYaw,a+(l?Math.PI:0)),torsoRotation:ve(n.torsoRotation,a+(l?Math.PI:0)),velocity:r,verticalVelocity:ve(n.verticalVelocity,0),worldHeight:ve(n.worldHeight,Up({across:ve(e.across,0),downhill:ve(e.downhill,0)},h)+Math.max(0,ve(n.air,0))),worldVerticalVelocity:ve(n.worldVerticalVelocity,ve(n.verticalVelocity,0)+r.downhill*(d.slope-zp(ve(e.downhill,0)))+r.across*d.roll),washout:Pe(ve(n.washout,0),0,1)})}function Bp(n,e={}){if(n.crashed)return n;let t=Math.sign(n.velocity.across||e.x-n.position.across||n.edge||1);return Mr({...n,air:0,angularMomentum:0,compression:1,crashed:!0,crashReason:"hazard",crashSpin:t,crashTimer:fu,grounded:!0,hillRate:null,legOffset:0,load:1,popArcVelocity:0,popElapsed:0,popped:!1,ride:0,slideSpin:0,stumble:0,takeoffSlip:0,velocity:{across:n.velocity.across*.45,downhill:n.velocity.downhill*.45}})}function kp(n,e={},t=0,i={}){let s=Pe(ve(t,0),0,cM),r=Rs(n.position.downhill),o=Pe(ve(i.slopeGrade,zp(n.position.downhill)),0,.78),a=pu[i.surface]?i.surface:n.surface,l=pu[a];if(n.crashed)return RM(n,s,o,a,i);let c=Pe(ve(e.carve,0),-1,1),h=Pe(ve(e.steer,0),-1,1),d=Pe(ve(e.crouch,0),0,1),u=Pe(ve(e.stretch,0),0,1),f=Pe(ve(e.press,0),-1,1),p=n.grounded??n.air<=0,x=d>.5,g=x&&!n.crouchHeld?0:n.crouchPressedAge+s,m=x?0:n.crouchHeld?s:n.preloadReleaseAge+s,v=Pp(n.stanceHeight,p?1-(1-ac)*d:x?0:u>.5?1:n.stanceHeight,(p?1-ac:1)*s/uM),S=Pe((1-v)/(1-ac),0,1),M=p?Pe(n.preload+s*(x?1/dM:m<=Lp?0:-1/fM),0,1):n.preload,_=n.pressAmount+(f-n.pressAmount)*Bn(7,s),w=p&&n.stumble>0,y=n.lean+(c-n.lean)*Bn(w?3.15:6.3,s),b=y*(.75+S*.25),I=b*(n.stance==="goofy"?-1:1)>=0,A=n.frontEdge+(b-n.frontEdge)*Bn(I?10.8:8.8,s),P=n.rearEdge+(b-n.rearEdge)*Bn(I?6.1:5.1,s),z=A*.58+P*.42,V=Math.abs(z),L=Math.sign(z)!==Math.sign(n.edge)&&Math.abs(n.edge)>.015&&V>.015,W={across:Math.cos(n.boardYaw),downhill:-Math.sin(n.boardYaw)},D=n.velocity.across*W.across+n.velocity.downhill*W.downhill,F=p&&a!=="powder"&&a!=="rail"&&(L&&Math.sign(z)===Math.sign(D)||Math.sign(c)!==Math.sign(n.edge)&&Math.sign(c)===Math.sign(D)&&Math.abs(n.edge)>.15)&&Math.abs(D)>3.8&&n.speed>16&&Math.abs(h)<.05&&n.flickRecovery<=0,J=p&&a==="rail"&&V>.22;if(F||J){let je={across:n.velocity.across*.62,downhill:n.velocity.downhill*.62};return lc({...n,compression:1,crashed:!0,crashReason:J?"rail-edge":"edge-catch",crashSpin:Math.sign(D||z)||1,crashTimer:fu,edge:z,elapsed:n.elapsed+s,frontEdge:A,gForce:1.6,lean:y,position:{across:n.position.across+je.across*s,downhill:n.position.downhill+je.downhill*s},rearEdge:P,skid:1,slopeGrade:o,speed:Math.hypot(je.across,je.downhill),surface:a,velocity:je})}let N={across:n.position.across+n.velocity.across*s,downhill:n.position.downhill+n.velocity.downhill*s},k=ls(N,a),H=s>0?(k.height-n.terrainHeight)/s:0,G=p?Pe(Math.abs(H)*(.09+n.speed*.004)*k.roughness*(1-S*.8),0,1):0,he=n.bumpImpact+(G-n.bumpImpact)*Bn(G>n.bumpImpact?18:9,s),X=Pe(k.height,n.bodyHeave-.4,n.bodyHeave+.4),oe=n.bodyHeave+(X-n.bodyHeave)*Bn(3.4,s),pe=Pe((a==="powder"?.43:.54)-_*.24+Math.abs(c-n.lean)*.17,.16,.84),xe=a==="powder"&&p?Pe(n.speed/24*.7+(1-pe)*.9-.24,0,1):0,re=Math.abs(h)>.05?Math.sign(h)===Math.sign(n.steer)?n.steerHold+s:s:0,me=p&&d>.62&&Math.abs(h)>.3,Ye=n.butter>.5&&Math.abs(n.steer)>.3,Ie=me?1:0,Ve=n.butter+(Ie-n.butter)*Bn(Ie>n.butter?12:10,s),Fe=p&&!me&&Math.abs(h)>.05&&Math.sign(h)!==Math.sign(n.steer),q=Fe?.1:n.flickBrake,ae=Math.min(s,q);q=Math.max(0,q-s);let ce=Fe?1:n.boardLightness*Math.exp(-5*s),Re=Math.max(0,n.flickRecovery-s);Math.abs(h)<.05&&Math.abs(n.steer)>.05&&(Re=.3);let ue=n.boardOffset,He=n.switchRiding,Ce=p?n.slideSpin*Math.exp(-wM*s):0;p&&(ue+=n.slideSpin*s);let rt=(w?SM:MM)*(1-Pe(Math.abs(n.slideSpin),0,1))*s;if(p&&me)ue+=h*(4.2+Math.abs(_)*.5)*s;else if(p&&Ye&&Math.abs(h)<.05){let je=Math.round(ue/Math.PI);Math.abs(je)%2===1&&(He=!He),ue-=je*Math.PI,ue-=Pe(ue,-9.2*s,9.2*s)}else if(p&&Math.abs(h)>.05){let je=Pe((re-.08)/.22,0,1),xt=h*(.92+je*.48),Kt=2.1+7.1*ce*(1-V*.55-S*.35);ue+=Pe(xt-ue,-Kt*s,Kt*s)}else p&&(ue-=Pe(ue,-rt,rt));let Qe=Math.max(n.speed,.001),ct={across:n.velocity.across/Qe,downhill:n.velocity.downhill/Qe},O={across:ct.downhill,downhill:-ct.across},se=18-V*12,nt=V*Qe**2/se*(1+S*.3)*(n.impactMeter>70?.72:1),it=p?n.gripLoad:1,be=as*l.edgeGrip*(.6+V*1.6)*(1+S*.3)*Math.max(1,it),vt=p&&a!=="rail"&&nt>0?Pe((nt-be)/nt,0,1):0,We=1-Pe((Math.abs(n.heading)-1.05)/.38,0,1),qe=p&&a!=="rail"?Math.sign(z)*Math.min(nt,be)*We:0,C=p&&!me&&a!=="rail"?Pe(-D*l.baseGrip*(.12+Pe((re-.16)/.32,0,1)*.08)*(1+S*.3),-2.6,2.6):0,E=Pe((re-.14)/.3,0,1),Y=p&&!me?E*(1.4+Math.abs(ue)*1.5)*l.skid:0,fe=a==="powder"?1-xe:0,ie=p&&k.slope<-.05&&n.crouchAmount>S&&!me?(n.crouchAmount-S)*1.4*Pe(-k.slope/.15,0,1):0,Se=p?l.drag*(.22+fe*.24+Math.abs(_)*.05)*it:0,Ee=p?n.speed**2*.0032*(1-S*.35):0,te=p&&!me&&ae>0&&s>0?n.speed*.06*ae/(.1*s):0,ne=Se+Ee+Y+te,Me=p?{across:O.across*qe+W.across*C-ct.across*ne-as*k.roll*.18,downhill:as*Math.sin(o)+O.downhill*qe+W.downhill*C-ct.downhill*ne}:{across:0,downhill:0},R=p?{across:n.velocity.across+Me.across*s+ct.across*ie,downhill:n.velocity.downhill+Me.downhill*s+ct.downhill*ie}:{...n.velocity},K=Math.hypot(R.across,R.downhill);if(p&&(K<r.min||K>r.max*(1-S*.1))){let je=Pe(K,r.min,r.max*(1-S*.1)),xt=je/Math.max(K,.001);R={across:R.across*xt,downhill:R.downhill*xt},K=je}let j=Math.atan2(R.across,R.downhill),ge=p&&s>0?en(j-n.heading)/s:n.turnRate,le=p?en(j+(He?Math.PI:0)+ue):n.boardYaw,de=p?0:n.angularMomentum,Le=p?0:n.spinVelocity,lt=ve(e.jump,0)>0,_e=!p&&!n.popped&&n.airtime>0&&n.airtime<uu,Xe=lt&&(p||_e),ke={across:n.position.across+R.across*s,downhill:n.position.downhill+R.downhill*s},ye=(je,xt)=>Op({across:je,downhill:xt},a,i),ut=ye(n.position.across,n.position.downhill),Mt=ye(ke.across,ke.downhill),un=Fi(ye,n.position.across,n.position.downhill),yi=Fi(ye,ke.across,ke.downhill),wn=s>0?(yi-un)/s:ve(n.hillRate,0),Ds=wn/Math.max(K,.001),ri=ve(i.timeToLip,1/0),vi=ve(i.lipDistance,1/0),dn=ri>=0&&ri<=.1||vi>=0&&vi<=K*.1,Gi=ri>=0&&ri<1/0||vi>=0&&vi<1/0,Fs=p&&dn?1.15:1,us=n.preload,Xn=Xe?(wp+(mM-wp)*us)*Fs:0,oi=n.popped,kn=p?{leg:n.legOffset,onSnow:!0,ride:n.ride,velocity:Number.isFinite(n.hillRate)?n.worldVerticalVelocity:wn}:{height:n.worldHeight,leg:n.legOffset,onSnow:!1,velocity:n.worldVerticalVelocity};if(Xe){let je=p?Pe(un+ve(n.ride,0),ut-on,ut+On):n.worldHeight,xt=gM*2*Xn/as,Kt=(Fi(ye,n.position.across+R.across*xt,n.position.downhill+R.downhill*xt)-je)/xt,Hn=p?Gi?Xn:0:n.airtime<=pM?Xn*.5:0;kn={height:je,leg:p?je-ut:n.legOffset,onSnow:!1,velocity:Math.max(Kt+Xn,kn.velocity+Hn)},de=Pe(h*(2.6+us*1.5)+ge*.12,-6,6),M=0,oi=!0}let xn=wn-kn.velocity,Jt=!kn.onSnow&&!x&&xn>.5&&n.air<xn*EM,yn=oi||n.airtime>=uu,Et=ep(kn,{carryFrom:un,carryTo:yi,snowFrom:ut,snowTo:Mt},{airTarget:Jt?.2:yn?x?vM:$h:kn.leg,soak:x?1:0},s),ai=!p,Us=ai&&!!Et.touchdown,Os=Et.air,Tr=Et.onSnow?0:ai?n.airtime+s:s,T=Et.height,B=Et.velocity,Q=Et.onSnow?0:Et.velocity-wn,Z=Pp(n.compression,Et.onSnow?Pe(-Et.leg/on,0,1):0,xM*s),$=n.landingImpact*Math.exp(-4*s),we=Math.max(0,n.impactMeter-(5+8*(1-Pe(K/du,0,1)))*s+(p?he*2.4*s:0)),Oe=!1,Te=null,Ne=0,Ge=0,Je=n.skid;if(ai||Xe||Et.liftoff){ai&&Math.abs(h)>.05&&Math.sign(h)!==Math.sign(n.steer)&&(de=Pe(de+h*.22,-6,6)),ai&&(de=Pe(de+c*.08*s,-6,6));let je=.6+v*.4,xt=wn-n.worldVerticalVelocity,Kt=(Math.sqrt(xt**2+2*as*n.air)-xt)/as;if(ai&&xt>0&&Kt<_M&&Math.abs(h)<.05){let Hn=Math.max(Kt,.05),Go=de/je+c*Rp,zs=en(le+Go*Hn-j),Vo=Math.abs(zs)>Math.PI/2?zs-Math.sign(zs)*Math.PI:zs;de=Pe(de+Pe(-Vo/Hn,-Ep*s,Ep*s)*je,-6,6)}Le=de/je,le=en(le+(Le+(ai?c*Rp:0))*s)}let pt=Et.onSnow?Math.max(0,n.stumble-s):0,ze=0,dt=Us?Et.touchdown.closing/Math.hypot(1,Ds):0,Bt=Us&&!n.popped&&n.airtime<uu&&dt<cu;if(Us&&!Bt){let je=Math.abs(en(le+n.tweak*1.35-j)),xt=Math.min(je,Math.PI-je),Kt=n.popped?0:n.takeoffSlip,Hn=Pe(Math.max(0,xt-Kt)+Math.abs(Le)*.04,0,Math.PI/2),Go=x&&g<=.12,zs=Go?.4:x?.15:0;$=dt*Ap*(1+1.5*Math.sin(Hn))*(1-zs),we=Pe(we+Math.max(0,$-Tp*Ap),0,100),He=je>Math.PI/2;let Vo=bp({impact:dt,meter:we,misalign:Hn});if(Vo==="crash")Oe=!0,Te=Hn>sc?"landing-edge":"impact-overload",Ne=Math.sign(en(le-j))||1,Ge=fu;else{let zu=1-Pe(yM*l.drag*Math.max(0,dt-Tp)/Math.max(K,.001),0,.5);if(Vo==="sketchy"){let Gu=Pe((Hn-ic)/(sc-ic),0,1);Je=Math.max(Je,.35+Gu*.45),Re=.3,pt=rc,zu*=1-Gu*.24}else Go&&(M=.5);let ym=Rs(ke.downhill).min,ku=Math.max(Math.min(K,ym),K*zu),Hu=ku/Math.max(K,.001);R={across:R.across*Hu,downhill:R.downhill*Hu},K=ku,ze=Pe(Le*bM,-1.5,1.5)}ue=en(le-j-(He?Math.PI:0))}let Rt=Math.abs(en(le-j)),Ct=Et.onSnow?0:ai?n.takeoffSlip:Math.min(Rt,Math.PI-Rt);Et.onSnow&&(de=0,Le=0,oi=!1);let tn=en(le-j),Be=p?Pe(Math.abs(ue)/1.5*(.3+E*.4)*(1-(Math.sign(z)===Math.sign(h)?V*.35:0))+vt*.6,0,.95):0;Je=Math.max(Je,n.skid+(Be-n.skid)*Bn(10,s)),p&&Be<n.skid&&(Je=Math.max(0,n.skid+(Be-n.skid)*Bn(10,s)));let an=p&&a!=="rail"?Pe(V*1.6*(1-vt*.7)*(1-Pe(Math.abs(ue)/.7,0,1)*.85),0,1):0,yt=p?Pe((Fe?1:0)+Math.abs(h)*Je*.5,0,1):0,Mi=Fe?1:n.slash+(yt-n.slash)*Bn(yt>n.slash?28:11,s),nn=p?Pe(k.roughness*(.12+K/du*.38)+V*(1-l.edgeGrip)*.55,0,1):0,Bs=en(Os>0?le-Le*.1:j+(He?Math.PI:0)),qn=en(n.torsoYaw+en(Bs-n.torsoYaw)*Bn(Os>0?12:5,s)),Si=n.boardRotation+en(le-n.boardYaw),_t=n.torsoRotation+en(qn-n.torsoYaw),Vt=Os>0&&(oi||re<=Tr+1e-9)?h:0,Cn=n.tweak+(Vt-n.tweak)*Bn(Math.abs(Vt)>Math.abs(n.tweak)?18:14,s);return lc({air:Os,airtime:Tr,boardLightness:ce,boardOffset:ue,boardRotation:Si,boardYaw:le,bodyHeave:oe,bumpImpact:he,butter:Ve,carveQuality:an,chatter:nn,compression:Z,crouchAmount:S,crouchHeld:x,crouchPressedAge:g,crashed:Oe,crashReason:Te,crashSpin:Ne,crashTimer:Ge,edge:z,elapsed:n.elapsed+s,flickBrake:q,flickRecovery:Re,frontEdge:A,frontFootPressure:pe,gForce:Pe(Math.abs(qe)/as,0,1.8),gripLoad:Et.onSnow?Pe(n.gripLoad+(Et.load-n.gripLoad)*Bn(10,s),Np,Dp):1,grounded:Et.onSnow,heading:j,hillRate:Et.onSnow?s>0?wn:n.hillRate:null,impactMeter:we,landingImpact:$,lean:y,legOffset:Et.leg,load:Et.load,noseFloat:xe,popCharge:M,popArcVelocity:0,popElapsed:0,popped:oi,position:ke,pressAmount:_,preload:M,preloadReleaseAge:m,rearEdge:P,ride:Et.onSnow?Et.ride:0,skid:Je,slash:Mi,slideSpin:Us&&!Bt?ze:Ce,slipAngle:tn,slopeGrade:o,speed:K,angularMomentum:de,spinVelocity:Le,stance:n.stance,stanceHeight:v,steer:h,steerHold:re,stumble:pt,surface:a,switchRiding:He,takeoffSlip:Ct,turnRate:ge,tweak:Cn,terrainHeight:k.height,terrainLaunchCooldown:0,terrainPitch:k.slope,terrainRoll:k.roll,torsoYaw:qn,torsoRotation:_t,velocity:R,verticalVelocity:Q,worldHeight:T,worldVerticalVelocity:B,washout:vt})}var aM,du,oc,lM,Ip,cM,as,hM,fu,ac,uM,dM,fM,Lp,pM,wp,mM,gM,uu,_M,Ep,xM,Np,Dp,Tp,yM,Ap,vM,Rp,MM,SM,bM,wM,EM,pu,Cp,Pe,ve,Fp,en,Bn,Pp,TM,lc,AM,Up,Op,zp,RM,cc=Pn(()=>{hu();No();aM=12,du=34,oc=1200,lM=10,Ip=.12,cM=1/20,as=9.81,hM=.34,fu=2,ac=.45,uM=.15,dM=.5,fM=.15,Lp=1,pM=.08,wp=4,mM=6.4,gM=.7,uu=.25,_M=.4,Ep=10,xM=12,Np=.6,Dp=1.6,Tp=4.5,yM=.08,Ap=2.5,vM=-.3,Rp=.35,MM=9.2,SM=3.2,bM=.5,wM=8,EM=.28,pu=Object.freeze({groomed:Object.freeze({baseGrip:1,drag:1,edgeGrip:1,skid:1}),ice:Object.freeze({baseGrip:.16,drag:.45,edgeGrip:.25,skid:.7}),powder:Object.freeze({baseGrip:.7,drag:1.85,edgeGrip:.76,skid:1.12}),slush:Object.freeze({baseGrip:.85,drag:1.8,edgeGrip:.74,skid:1.35}),chop:Object.freeze({baseGrip:.82,drag:1.3,edgeGrip:.82,skid:1.2}),rail:Object.freeze({baseGrip:.02,drag:.3,edgeGrip:.02,skid:.3})}),Cp=Object.freeze({groomed:Object.freeze({amplitude:.055,roughness:.2}),ice:Object.freeze({amplitude:.012,roughness:.07}),powder:Object.freeze({amplitude:.34,roughness:.95}),slush:Object.freeze({amplitude:.14,roughness:.55}),chop:Object.freeze({amplitude:.24,roughness:.9}),rail:Object.freeze({amplitude:0,roughness:0})}),Pe=(n,e,t)=>Math.min(t,Math.max(e,n)),ve=(n,e)=>Number.isFinite(n)?n:e,Fp=n=>Pe(Math.max(0,ve(n,0))/oc,0,1);en=n=>Math.atan2(Math.sin(n),Math.cos(n)),Bn=(n,e)=>1-Math.exp(-n*e),Pp=(n,e,t)=>n+Pe(e-n,-t,t),TM=(n,e)=>Math.sin(e*.38+n*.17)*.45+Math.sin(e*1.07-n*.42+.8)*.3+Math.sin(e*2.31+n*.77+1.7)*.15+Math.sin(e*.11+n*1.6)*.1;lc=n=>Object.freeze({...n,position:Object.freeze({...n.position}),velocity:Object.freeze({...n.velocity})}),AM=(n,e)=>({across:Math.sin(e)*n,downhill:Math.cos(e)*n}),Up=(n,e)=>{let t=n.downhill;return mu(t)+ls(n,e).height},Op=(n,e,t)=>typeof t.surfaceHeight=="function"?t.surfaceHeight(n.across,n.downhill,e):Up(n,e);zp=n=>.36+Ip*Fp(n)+Math.sin(n*.024-.3)*.2+Math.sin(n*.061)*.03,RM=(n,e,t,i,s)=>{let o=Math.exp(-(i==="ice"?.5:i==="powder"?3.4:1.9)*e),a={across:n.velocity.across*o,downhill:n.velocity.downhill*o+as*Math.sin(t)*e},l={across:n.position.across+a.across*e,downhill:n.position.downhill+a.downhill*e},c=ls(l,i),h=(m,v)=>Op({across:m,downhill:v},i,s),d=h(l.across,l.downhill),u=Math.hypot(a.across,a.downhill),f=Math.atan2(a.across,a.downhill),p=Math.max(0,n.crashTimer-e),x=p<=0,g=x?f+(n.switchRiding?Math.PI:0):en(n.boardYaw+n.crashSpin*2.3*e);return lc({...n,air:0,airtime:0,boardRotation:n.boardRotation+en(g-n.boardYaw),boardYaw:g,boardOffset:0,butter:n.butter*Math.exp(-9*e),bumpImpact:n.bumpImpact*Math.exp(-10*e),carveQuality:0,chatter:n.chatter*Math.exp(-8*e),compression:n.compression*Math.exp(-5*e),crashed:!x,crashReason:x?null:n.crashReason,crashSpin:x?0:n.crashSpin,crashTimer:p,edge:x?0:n.edge*Math.exp(-6*e),elapsed:n.elapsed+e,flickBrake:0,flickRecovery:0,gForce:0,gripLoad:1,grounded:!0,heading:f,hillRate:null,impactMeter:Math.max(0,n.impactMeter-25*e),landingImpact:n.landingImpact*Math.exp(-3*e),lean:x?0:n.lean*Math.exp(-4*e),legOffset:0,load:1,position:l,popArcVelocity:0,popElapsed:0,popped:!1,angularMomentum:0,pressAmount:0,ride:d-Fi(h,l.across,l.downhill),skid:x?0:1,slash:n.slash*Math.exp(-8*e),slideSpin:0,slipAngle:x?0:en(n.boardYaw-f),slopeGrade:t,speed:u,stumble:0,surface:i,takeoffSlip:0,terrainHeight:c.height,terrainPitch:c.slope,terrainRoll:c.roll,torsoYaw:n.torsoYaw,velocity:a,verticalVelocity:0,washout:0,worldHeight:d,worldVerticalVelocity:0})}});function Is(n){let e=Math.max(0,Math.floor(Ps(n)));if(Sr.has(e))return Sr.get(e);let t=Oi+e*Bi,i=e%2===0?-1:1,s=i*(24-PM+Math.sin(e*1.7)*.25),r=1.2+Math.sin(e*1.7)*.14,o=Object.freeze({id:e,lip:t,start:t-Cs,landingEnd:t+gu,centerX:s,side:i,height:r});return Sr.set(e,o),Sr.size>32&&Sr.delete(Sr.keys().next().value),o}function _u(n,e=0,t=0){if(!Number.isFinite(n)||!Number.isFinite(e)||n<0)return null;let i=Math.max(0,Math.round((n-Oi)/Bi)),s=Is(i);return Math.abs(n-s.lip)<=t&&Math.abs(e-s.centerX)<=2.4?s:null}function Hp(n,e){let t=_u(e,n,12);return t&&e<=t.lip?t.lip-e:1/0}function xu(n,e){if(!Number.isFinite(n)||!Number.isFinite(e))return 0;let t=Math.max(0,Math.floor((e-Oi+Cs)/Bi)),i=Is(t),s=e-i.lip,r=Math.abs(n-i.centerX);if(s<-Cs||s>=gu||r>=hc)return 0;let o=1-br((r-.9)/(hc-.9)),a;return s<0?a=i.height*((s+Cs)/Cs)**2.35:s<6?a=i.height+(-.35-i.height)*br(s/6):s<18?a=-.35:a=-.35*(1-br((s-18)/12)),a*o}function Gp(n,e,t,i){let s=Math.max(.05,Ps(t,.5)),r=Math.max(0,Ps(i,0)),o=Math.hypot(n,e*.55),a=s*.85,l=s*1.8;return o<=a?-r*(1-(o/a)**2):o>=l?0:r*.22*Math.sin(Math.PI*(o-a)/(l-a))}function LM(n,e,t="powder"){let i=Ps(n),s=Ps(e),r=mu(s),o=Math.max(0,Math.abs(i)-24),a=o**1.8*.021+Math.sin(s*.065+i*.12)*o*.025,l=Math.sin(s*.075+i*.095)*.22+Math.sin(s*.19-i*.16)*.085,c=ls({across:i,downhill:s},t).height;return r+Wo(s)*.48+a+l+c}function Nt(n,e,t="powder"){let i=Ps(n),s=Ps(e),r=IM(i,s),o=r>0?(ls({across:i,downhill:s},"groomed").height-ls({across:i,downhill:s},t).height)*r:0;return LM(i,s,t)+o+xu(i,s)}function Vp(n,e,t="powder"){let s=(Nt(n+.25,e,t)-Nt(n-.25,e,t))/.5,r=(Nt(n,e-.25,t)-Nt(n,e+.25,t))/(.25*2),o=Math.hypot(s,1,r);return Object.freeze({x:-s/o,y:1/o,z:-r/o})}var Ps,CM,br,Oi,Bi,Cs,gu,hc,PM,Sr,IM,Bo=Pn(()=>{cc();Yo();Ps=(n,e=0)=>Number.isFinite(n)?n:e,CM=(n,e,t)=>Math.min(t,Math.max(e,n)),br=n=>{let e=CM(n,0,1);return e*e*(3-2*e)},Oi=90,Bi=82,Cs=28,gu=30,hc=3.6,PM=4,Sr=new Map;IM=(n,e)=>{let t=Math.max(0,Math.floor((e-Oi+Cs+3)/Bi)),i=Is(t),s=Math.abs(n-i.centerX);if(s>=hc)return 0;let r=e-i.lip;return(1-br((s-.9)/(hc-.9)))*br((r+Cs+3)/4)*(1-br((r-gu+5)/8))}});var Kp={};Mm(Kp,{createMountainWorld:()=>KM,makeCourseEdges:()=>Yp,makeHazard:()=>Jp,makeTerrain:()=>qp});function KM(n){let e=new jl({canvas:n,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=mn,e.toneMapping=Mo,e.toneMappingExposure=1.03,e.shadowMap.enabled=!0,e.shadowMap.type=ys,e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),n.dataset.renderMode="webgl",vu.map=kM(),vu.needsUpdate=!0;let t=new Yr;t.background=new $e(11193305),t.fog=new qr(11849433,220,480);let i=ZM();t.add(i);let s=JM();t.add(s),t.add(new _o(15333375,8559787,1.25));let r=new vo(16774629,2.15);r.position.set(-40,90,35),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.left=-48,r.shadow.camera.right=48,r.shadow.camera.top=62,r.shadow.camera.bottom=-30,r.shadow.camera.near=.5,r.shadow.camera.far=185,r.shadow.bias=-3e-4,r.target.position.set(0,0,-25),t.add(r,r.target);let o=new vn(64,1,.08,980);o.rotation.order="YXZ";let a=dp();t.add(a.group);let l=new Map,c=new Map,h=new Map,d=new Map,u=su(750),f=new Ht(new Pt,new Tn({color:7576491,transparent:!0,opacity:.18,depthWrite:!1,side:qt}));f.renderOrder=1,t.add(f);let p=[],x=new Pt,g=new Float32Array(420);x.setAttribute("position",new En(g,3)),x.setDrawRange(0,0);let m=new $r(x,new ar({color:15399419,size:.16,transparent:!0,opacity:.8,depthWrite:!1,sizeAttenuation:!0}));t.add(m);let v={hazards:[],phase:"idle"},S=0,M=null,_=()=>{let D=Math.max(1,n.clientWidth||window.innerWidth),F=Math.max(1,n.clientHeight||window.innerHeight);e.setSize(D,F,!1),o.aspect=D/F,o.updateProjectionMatrix()};window.addEventListener("resize",_),_();let w=D=>{let F=Math.floor((D-NM)/_n),J=Math.ceil((D+yu)/_n);for(let N=F;N<=J;N+=1){if(l.has(N))continue;let k=qp(N),H=HM(N),G=Yp(N);t.add(k.mesh,H,...G),l.set(N,{...k,grooves:H,edges:G})}for(let[N,k]of l)if(!(N>=F&&N<=J)){t.remove(k.mesh,k.grooves,...k.edges),k.mesh.geometry.dispose(),k.grooves.geometry.dispose(),k.grooves.material.dispose();for(let H of k.edges)H.geometry.dispose();l.delete(N)}},y=D=>{let F=Math.max(0,Math.floor((D-50-Oi)/Bi)),J=Math.max(0,Math.ceil((D+yu-Oi)/Bi));for(let N=F;N<=J;N+=1){if(d.has(N))continue;let k=YM(Is(N));t.add(k),d.set(N,k)}for(let[N,k]of d)N>=F&&N<=J||(t.remove(k),k.traverse(H=>H.geometry?.dispose()),d.delete(N))},b=(D,F)=>{let J=Math.floor(F/_n),N=l.get(J);if(!N)return 0;let k=N.acrossSamples,H=0;for(;H<k.length-2&&k[H+1]<D;)H+=1;let G=hn((D-k[H])/(k[H+1]-k[H]),0,1),he=hn((F-J*_n)/_n*N.rows,0,N.rows),X=Math.min(N.rows-1,Math.floor(he)),oe=he-X,pe=k.length,xe=(Ye,Ie)=>N.rutOffsets[Ye*pe+Ie],re=xe(X,H)*(1-G)+xe(X,H+1)*G,me=xe(X+1,H)*(1-G)+xe(X+1,H+1)*G;return re*(1-oe)+me*oe},I=()=>{M=null;for(let D of l.values()){let F=D.mesh.geometry.getAttribute("position"),J=D.mesh.geometry.getAttribute("color");for(let N=0;N<D.baseHeights.length;N+=1)D.rutOffsets[N]!==0&&(F.setY(N,D.baseHeights[N]),J.setXYZ(N,D.baseColors[N*3],D.baseColors[N*3+1],D.baseColors[N*3+2]));D.rutOffsets.fill(0),F.needsUpdate=!0,J.needsUpdate=!0,D.mesh.geometry.computeVertexNormals()}},A=D=>{if(v.phase!=="running"||D.air>.08||D.crashed)return;let F=D.position.across,J=D.position.downhill;if(M&&Math.hypot(F-M.across,J-M.downhill)<.34)return;M={across:F,downhill:J};let k=({powder:.16,chop:.095,slush:.075,groomed:.045,ice:.008,rail:0}[D.surface]??.08)*(.7+hn(D.compression||0,0,1)*.22+hn(D.gForce||0,0,1.5)*.12),H=.6+hn(D.skid||0,0,1)*.3;for(let[G,he]of l){if(J<G*_n-2||J>(G+1)*_n+2)continue;let X=he.mesh.geometry.getAttribute("position"),oe=he.mesh.geometry.getAttribute("color"),pe=he.acrossSamples,xe=!1;for(let re=0;re<=he.rows;re+=1){let me=G*_n+re/he.rows*_n;if(!(Math.abs(me-J)>H*3.4))for(let Ye=0;Ye<pe.length;Ye+=1){let Ie=pe[Ye];if(Math.abs(Ie-F)>H*1.8)continue;let Ve=Gp(Ie-F,me-J,H,k),Fe=re*pe.length+Ye,q=he.rutOffsets[Fe],ae=Ve<0?Math.min(q,Ve):q<0?q:Math.max(q,Ve);if(ae===q)continue;he.rutOffsets[Fe]=ae,X.setY(Fe,he.baseHeights[Fe]+ae);let ce=hn(-ae/.16,0,1),Re=hn(ae/.04,0,1);oe.setXYZ(Fe,he.baseColors[Fe*3]*(1-ce*.13+Re*.035),he.baseColors[Fe*3+1]*(1-ce*.08+Re*.025),he.baseColors[Fe*3+2]*(1-ce*.04+Re*.02)),xe=!0}}xe&&(X.needsUpdate=!0,oe.needsUpdate=!0,he.mesh.geometry.computeVertexNormals())}},P=D=>{let F=qo(Math.max(0,D-20),yu,{halfWidth:Er}),J=new Set(F.map(N=>N.index));for(let N of F){if(c.has(N.index))continue;let k=new Lt;for(let H of N.scenery){let G=H.kind==="rock"?Eu(H.size):wu(H.size);G.position.set(H.x,Nt(H.x,H.z),-H.z),G.rotation.y=zo(H.z+H.x)*Math.PI*2,k.add(G)}t.add(k),c.set(N.index,k)}for(let[N,k]of c)J.has(N)||(t.remove(k),c.delete(N))},z=()=>{let D=new Set(v.hazards.map(F=>F.id));for(let F of v.hazards){let J=F.variant==="rolling-boulder",N=h.get(F.id),k=Nt(F.x,F.worldDownhill);if(!N)N=Jp(F,(G,he)=>Nt(F.x+G,F.worldDownhill-he)-k),t.add(N),h.set(F.id,N);else if(!J)continue;let H=J?F.radius*.93:0;N.position.set(F.x,k+H,-F.worldDownhill),J&&(N.rotation.z=-F.roll)}for(let[F,J]of h)D.has(F)||(t.remove(J),J.traverse(N=>N.geometry?.dispose()),h.delete(F))},V=D=>{u.update(D);let F=[],J=D.position.downhill,N=u.points();for(let H=1;H<N.length;H+=1){let G=N[H-1],he=N[H];if(J-G.downhill>5||he.downhill>J+.2||he.downhill-G.downhill>1.8)continue;let X=he.kind==="carve"?.035:he.kind==="skid"?.14:.07,oe=G.across-X,pe=G.across+X,xe=he.across-X,re=he.across+X,me=Nt(G.across,G.downhill)+b(G.across,G.downhill)+.022,Ye=Nt(he.across,he.downhill)+b(he.across,he.downhill)+.022;F.push(oe,me,-G.downhill,pe,me,-G.downhill,xe,Ye,-he.downhill,pe,me,-G.downhill,re,Ye,-he.downhill,xe,Ye,-he.downhill)}let k=new Pt;k.setAttribute("position",new ht(F,3)),f.geometry.dispose(),f.geometry=k},L=(D,F,J,N)=>{for(let H=p.length-1;H>=0;H-=1){let G=p[H];if(G.life-=N,G.life<=0){p.splice(H,1);continue}G.x+=G.vx*N,G.y+=G.vy*N,G.z+=G.vz*N,G.vy-=5.8*N}let k=hn(Number(F.spray)||0,0,1);if(v.phase==="running"&&D.air<.08&&k>.12){let H=Math.min(10,Math.ceil(k*7)),G=Math.sign(D.slipAngle||D.edge||1);for(let he=0;he<H&&p.length<140;he+=1){let X=zo(D.elapsed*113+he*23);p.push({x:D.position.across+G*(.15+X*.22),y:J+.09,z:-D.position.downhill+.2,vx:G*(.7+X*2.9),vy:1.2+X*2.9,vz:1.2+zo(X*17)*3.5,life:.3+X*.45})}}for(let H=0;H<p.length;H+=1){let G=p[H];g[H*3]=G.x,g[H*3+1]=G.y,g[H*3+2]=G.z}x.attributes.position.needsUpdate=!0,x.setDrawRange(0,p.length)};return Object.freeze({render:({camera:D={},pose:F={},state:J={}}={})=>{let N=J.position??{across:0,downhill:0},k=Number.isFinite(N.downhill)?N.downhill:0,H=Number.isFinite(N.across)?N.across:0,G=Number.isFinite(J.elapsed)?J.elapsed:0,he=G<S||G===0,X=G<S?0:hn(G-S,0,.05);S=G,he&&(u.reset(),p.length=0,I()),w(k),y(k),P(k),z(),A(J);let oe=Nt(H,k,J.surface)+b(H,k);a.update(J,F,oe,Vp(H,k,J.surface)),V(J),L(J,F,oe,X);let pe=Number.isFinite(D.position?.across)?D.position.across:H,xe=hn((Number(J.air)||0)/2,0,1),re=6.2+xe*2.3,me=Nt(pe-1.3,k-re,J.surface),Ye=Number.isFinite(J.worldHeight)?J.worldHeight:oe+(Number(J.air)||0),Ie=Number.isFinite(J.heading)?J.heading:0,Ve=H+3+Math.sin(Ie)*5.8,Fe=k+15+xe*20,q=D.rig;q?(o.position.set(q.position.x,q.position.y,q.position.z),o.lookAt(q.target.x,q.target.y,q.target.z)):(o.position.set(pe-1.3,Math.max(me+2.55,Ye+xe*3.8)-hn(D.dip||0,0,1)*.25,-k+re),o.lookAt(Ve,Nt(Ve,Fe,J.surface)+3.7,-Fe)),o.rotateZ(hn(D.roll||0,-.06,.06));let ae=60+(1-hn(D.zoom||1,.8,1))*20;Math.abs(o.fov-ae)>.04&&(o.fov=ae,o.updateProjectionMatrix()),i.position.copy(o.position),s.position.set(H*.14,Nt(0,k+315)+14,-k-315),r.position.set(H-42,oe+85,-k+38),r.target.position.set(H,oe-10,-k-28),r.target.updateMatrixWorld(),e.render(t,o)},setCourse(D={}){v={hazards:Array.isArray(D.hazards)?D.hazards:[],phase:D.phase??"idle"}}})}var _n,uc,yu,NM,Er,DM,vu,cs,UE,dc,FM,Mu,hs,Su,bu,UM,OM,BM,zM,hn,zo,Zt,kM,qp,HM,Wp,Yp,wu,Eu,GM,Zp,VM,zi,Gt,si,Xp,WM,XM,qM,Jp,YM,ZM,JM,$p=Pn(()=>{Jh();fp();ru();Yo();lu();Bo();_n=36,uc=48,yu=246,NM=24,Er=24,DM=31,vu=new ln({vertexColors:!0,roughness:.98,metalness:0,side:qt}),cs=new ln({color:6641737,roughness:1}),UE=new ln({color:9533795,roughness:1}),dc=new ln({color:12756350,roughness:1,flatShading:!0}),FM=new ln({color:4866103,roughness:1,flatShading:!0}),Mu=[1788994,2645070,3501400].map(n=>new ln({color:n,roughness:1,flatShading:!0})),hs=new ln({color:15397875,roughness:.98}),Su=new ln({color:6912899,roughness:.98,flatShading:!0}),bu=new ln({color:5137004,roughness:1,flatShading:!0}),UM=new ln({color:14249040,roughness:.83,side:qt,flatShading:!0}),OM=new ln({color:4032403,roughness:.86,side:qt,flatShading:!0}),BM=new Tn({color:7974328,opacity:.65,transparent:!0,depthWrite:!1,side:qt}),zM=new Tn({color:16777215,opacity:.9,transparent:!0,depthWrite:!1,side:qt}),hn=(n,e,t)=>Math.min(t,Math.max(e,n)),zo=n=>{let e=Math.sin(n*127.1+31.37)*43758.5453;return e-Math.floor(e)},Zt=(n,e,t,i=0,s=0,r=0)=>{let o=new Ht(n,e);return o.position.set(i,s,r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o},kM=()=>{let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256),i=58291,s=()=>(i=Math.imul(i,1664525)+1013904223|0,(i>>>0)/4294967296);for(let o=0;o<t.data.length;o+=4){let a=Math.floor(236+s()*19);t.data[o]=a,t.data[o+1]=Math.min(255,a+3),t.data[o+2]=Math.min(255,a+5),t.data[o+3]=255}e.putImageData(t,0,0);for(let o=0;o<115;o+=1){let a=s()*256,l=s()*256;e.strokeStyle=`rgba(94, 139, 157, ${.025+s()*.055})`,e.lineWidth=.6+s()*1.3,e.beginPath(),e.moveTo(a,l),e.quadraticCurveTo(a+9,l-1,a+18+s()*18,l+1),e.stroke()}let r=new Qr(n);return r.wrapS=gs,r.wrapT=gs,r.colorSpace=mn,r.anisotropy=4,r},qp=n=>{let e=new Pt,t=[],i=[],s=[],r=[],o=[],a=Math.ceil(Er*2)/2,l=a+DM;for(let v=a+2.5;v<l;v+=2.5)o.unshift(-v);o.unshift(-l);for(let v=-a;v<=a+1e-8;v+=.5)o.push(v);for(let v=a+2.5;v<l;v+=2.5)o.push(v);o.push(l);let c=o.length-1,h=uc,d=new $e(15397361),u=new $e(13164002),f=new $e,p=new $e(13887977),x=new $e(12048095),g=[];for(let v=0;v<=h;v+=1){let S=n*_n+v/h*_n;for(let M=0;M<=c;M+=1){let _=o[M],w=Nt(_,S);t.push(_,w,-S),g.push(w),s.push(_/8,S/8);let y=hn((Math.abs(_)-7.7)/8,0,1),b=(Math.sin(S*.33+_*.47)+Math.sin(S*.12-_*.81))*.019;f.copy(d).lerp(u,y).offsetHSL(0,0,b);let I=xu(_,S);I>.15&&f.lerp(p,hn(I/1.1,0,1)*.3),I<-.1&&f.lerp(x,hn(-I/.35,0,1)*.14),i.push(f.r,f.g,f.b)}}for(let v=0;v<h;v+=1)for(let S=0;S<c;S+=1){let M=v*(c+1)+S,_=M+1,w=M+c+1,y=w+1;r.push(M,_,w,_,y,w)}e.setIndex(r),e.setAttribute("position",new ht(t,3)),e.setAttribute("color",new ht(i,3)),e.setAttribute("uv",new ht(s,2)),e.computeVertexNormals();let m=new Ht(e,vu);return m.receiveShadow=!0,m.frustumCulled=!1,{mesh:m,acrossSamples:o,baseHeights:Float32Array.from(g),baseColors:Float32Array.from(i),rutOffsets:new Float32Array(g.length),rows:h}},HM=n=>{let e=[],t=Math.floor((Er-1.1)/.76);for(let r=-t;r<=t;r+=1){let o=r*.76;for(let a=0;a<12;a+=1){let l=n*_n+a*3,c=l+3;e.push(o,Nt(o,l)+.018,-l,o,Nt(o,c)+.018,-c)}}let i=new Pt;i.setAttribute("position",new ht(e,3));let s=new Kr(i,new or({color:8826552,transparent:!0,opacity:.09,depthWrite:!1}));return s.frustumCulled=!1,s},Wp=(n,e,t,i)=>{let s=[];for(let a of[-1,1])for(let l=0;l<uc;l+=1){let c=n*_n+l/uc*_n,h=n*_n+(l+1)/uc*_n,d=a*Er-e/2,u=a*Er+e/2,f=[d,Nt(d,c)+t,-c],p=[u,Nt(u,c)+t,-c],x=[d,Nt(d,h)+t,-h],g=[u,Nt(u,h)+t,-h];s.push(...f,...p,...x,...p,...g,...x)}let r=new Pt;r.setAttribute("position",new ht(s,3));let o=new Ht(r,i);return o.frustumCulled=!1,o},Yp=n=>[Wp(n,.34,.025,BM),Wp(n,.16,.03,zM)],wu=(n=1)=>{let e=new Lt,t=3.9*n;Zt(new An(.09*n,.17*n,t*.38,7),cs,e,0,t*.19,0);for(let i=0;i<3;i+=1){let s=(1.15-i*.22)*n,r=(2.2-i*.15)*n,o=(1.5+i*.8)*n;Zt(new Ii(s,r,7),Mu[i],e,0,o,0);let a=Zt(new Ii(s*.54,r*.42,7),hs,e,0,o+r*.3,0);a.castShadow=!1}return e},Eu=(n=1)=>{let e=new Lt,t=Zt(new Qn(.86*n,0),Su,e,0,.48*n,0);t.scale.set(1.2,.68,.92),t.rotation.set(.18,.47,-.11);let i=Zt(new Qn(.47*n,0),bu,e,.52*n,.28*n,.2*n);i.scale.y=.66;let s=Zt(new Ii(.52*n,.22*n,5),hs,e,-.1*n,.96*n,-.1*n);return s.rotation.z=-.18,e},GM=n=>{let e=new Lt;Zt(new Qn(n,0),Su,e);let t=Zt(new Qn(n*.43,0),hs,e,-n*.13,n*.74,n*.12);return t.scale.y=.65,e},Zp=new U(0,1,0),VM=()=>0,zi=(n,e)=>zo(n*7.13+e*3.71),Gt=(n,e,t)=>new U(n,e,t),si=(n,e,t,i,s,r,o=8)=>{let a=new U().subVectors(i,t),l=Zt(new An(r,s,a.length(),o),e,n);return l.position.copy(t).add(i).multiplyScalar(.5),l.quaternion.setFromUnitVectors(Zp,a.normalize()),l},Xp=(n,e,t,i,s,r)=>{let o=new U().subVectors(i,t),a=o.length();o.normalize();let l=new Ii(s,a,6);l.scale(1,1,r/s);let c=Zt(l,e,n),h=new U().crossVectors(o,Zp).normalize();return c.quaternion.setFromRotationMatrix(new St().makeBasis(h,o,new U().crossVectors(h,o))),c.position.copy(t).add(i).multiplyScalar(.5),c},WM=(n,e)=>{let t=new Lt,i=Number(n.radius)||5.5,s=n.rootEnd===-1?-1:1,r=Number(n.id)||0,o=Gt(s*(i-.3),0,0),a=Gt(-s*(i-.03),0,0);o.y=e(o.x,0)+.12,a.y=e(a.x,0)+.05;let l=g=>.36-g*.23,c=g=>o.clone().lerp(a,g);si(t,cs,o,a,l(0),l(1),9);let h=s*(i-.15),d=e(h,0)+.26;Zt(new An(.8,.72,.26,7),FM,t,h,d,0).rotation.set(zi(r,1)*.6,0,Math.PI/2);for(let[g,m]of[-1.9,-.75,.35,1.5].entries()){let v=m+(zi(r,2+g)-.5)*.4;si(t,cs,Gt(h-s*.08,d+Math.cos(v)*.4,Math.sin(v)*.4),Gt(s*(i-.04),d+Math.cos(v)*.8,Math.sin(v)*.95),.075,.02,5)}let f=Zt(new kt(.24,.07,.95),hs,t,h,d+.8,0);f.castShadow=!1;let p=6;for(let g=0;g<p;g+=1){let m=.1+(g+zi(r,10+g)*.6)/p*.72,v=g%2===0?1:-1,S=c(m).add(Gt(0,l(m)*.45,v*l(m)*.6)),M=.24+zi(r,20+g)*.2,_=S.clone().add(Gt(-s*.22,.32,v).normalize().multiplyScalar(M));si(t,cs,S,_,.06,.04,5),si(t,dc,_,_.clone().add(Gt(-s*.22,.32,v).normalize().multiplyScalar(.04)),.04,.03,5)}for(let[g,m]of[.56,.68,.8,.9].entries()){let v=g%2===0?1:-1,S=c(m),M=1.5-g*.12,_=Gt(S.x-s*.4,0,v*M);S.y=e(S.x,0)+.22,_.y=e(_.x,_.z)+.16,Xp(t,Mu[g%3],S,_,.5,.16);let w=Xp(t,hs,S.clone().add(Gt(0,.11,0)),S.clone().lerp(_,.5).add(Gt(0,.11,0)),.14,.07);w.castShadow=!1}let x=Math.atan2(a.y-o.y,a.x-o.x);for(let[g,m]of[[.06,.34],[.42,.62],[.7,.97]]){let v=c((g+m)/2),S=Zt(new kt((m-g)*o.distanceTo(a),.05,l((g+m)/2)*1.3),hs,t,v.x,v.y+l((g+m)/2)+.012,0);S.rotation.z=x,S.castShadow=!1}return t},XM=(n,e)=>{let t=new Lt,i=Number(n.radius)||4.5,s=n.stumpEnd===1?1:-1,r=Number(n.id)||0,o=s*(i-.42),a=-s*(i-.95),l=e(o,0),c=e(a,0);si(t,cs,Gt(o,l-.3,0),Gt(o,l+.5,0),.4,.34,9),si(t,cs,Gt(o,l+.5,0),Gt(o,l+2.42,0),.34,.29,9);for(let _=0;_<5;_+=1){let w=_*1.26+zi(r,_)*.5,y=Gt(o+Math.cos(w)*.18,l+2.38,Math.sin(w)*.18);si(t,dc,y,y.clone().add(Gt(Math.cos(w)*.05,.3+zi(r,10+_)*.4,Math.sin(w)*.05)),.07,.012,4)}let h=Zt(new Qn(.9,0),Su,t,a,c+.98,.05);h.scale.set(.98,1.32,1.08),h.rotation.set(.3,zi(r,20)*3,.2);let d=Zt(new Qn(.42,0),bu,t,a+s*.25,e(a,.95)+.18,.95);d.scale.y=.7;let u=Gt(o-s*.12,l+2.37,.1),p=Gt(a,c+2.16,.1).clone().sub(u),x=-s*(i-.12),g=u.clone().addScaledVector(p,(x-u.x)/p.x),m=_=>.23-_*.1,v=_=>u.clone().lerp(g,_);si(t,cs,u,g,m(0),m(1),9),si(t,dc,Gt(o,l+2.3,.16),u.clone().add(Gt(-s*.25,.1,.06)),.11,.07,4);for(let _=0;_<5;_+=1){let w=.16+(_+zi(r,30+_)*.5)/5*.7,y=_%2===0?1:-1,b=Gt(-s*.2,.55,y).normalize(),I=v(w).addScaledVector(b,m(w)*.6),A=I.clone().addScaledVector(b,.25+zi(r,40+_)*.25);si(t,cs,I,A,.055,.035,5),si(t,dc,A,A.clone().addScaledVector(b,.04),.035,.028,5)}for(let[_,w]of[.55,.85].entries())Zt(new Ii(.34-_*.06,.9,6),Mu[_+1],t,g.x+s*(.42+_*.3),g.y-w*.5,.1+(_?-.3:.25)).rotation.set(_?-.5:.5,0,Math.PI+s*.35);let S=Math.atan2(g.y-u.y,g.x-u.x);for(let[_,w]of[[.08,.42],[.5,.86]]){let y=v((_+w)/2),b=Zt(new kt((w-_)*u.distanceTo(g),.05,m((_+w)/2)*1.3),hs,t,y.x,y.y+m((_+w)/2)+.012,y.z);b.rotation.z=S,b.castShadow=!1}let M=Zt(new Qn(.4,0),hs,t,a-s*.2,c+1.42,-.42);return M.scale.y=.4,M.castShadow=!1,t},qM=(n,e)=>{let t=new Lt;for(let i of Sp(n)){let s=i.type==="rock"?Eu(i.size):wu(i.size);s.position.set(i.x,e(i.x,i.z),i.z),s.rotation.y=i.turn,t.add(s)}return t},Jp=(n,e=VM)=>n.kind==="jump"?WM(n,e):n.kind==="duck"?XM(n,e):n.variant==="rolling-boulder"?GM(n.radius):n.variant==="tree-island"||n.variant==="rock-garden"?qM(n,e):n.variant==="rock"?Eu(1.15):wu(1.25),YM=n=>{let e=new Lt;for(let[t,i,s]of[[n.lip-3,UM,1.75],[n.lip+26,OM,1.2]]){let r=n.side*(Er+1.2),o=new Lt;o.position.set(r,Nt(r,t),-t),Zt(new An(.025,.035,s,6),bu,o,0,s*.5,0);let a=new fi;a.moveTo(0,0),a.lineTo(0,.35),a.lineTo(-n.side*.48,.22),a.closePath(),Zt(new xs(a),i,o,0,s-.38,0),e.add(o)}return e},ZM=()=>{let n=new po(900,24,16),e=n.getAttribute("position"),t=[],i=new $e(13163749),s=new $e(6461626),r=new $e;for(let a=0;a<e.count;a+=1){let l=hn((e.getY(a)/900+.08)*1.45,0,1);r.copy(i).lerp(s,l),t.push(r.r,r.g,r.b)}n.setAttribute("color",new ht(t,3));let o=new Ht(n,new Tn({vertexColors:!0,side:cn,fog:!1,depthWrite:!1,toneMapped:!1}));return o.renderOrder=-1,o},JM=()=>{let n=new Lt,e=[new Tn({color:8625834,side:qt,fog:!0}),new Tn({color:10664900,side:qt,fog:!0}),new Tn({color:14477802,side:qt,fog:!0})];for(let t=0;t<2;t+=1){let i=[],s=[],r=[];for(let c=0;c<=22;c+=1)r.push({x:-480+c*44,y:28+zo(c*7+t*19)*43+Math.sin(c*.87+t)*20});let o=-t*80;for(let c=0;c<r.length-1;c+=1){let h=r[c],d=r[c+1];i.push(h.x,-70,o,h.x,h.y,o-8,d.x,d.y,o-8,h.x,-70,o,d.x,d.y,o-8,d.x,-70,o),s.push(h.x,h.y,o-8,d.x,d.y,o-8,h.x+7,h.y-13,o-5,d.x,d.y,o-8,d.x-8,d.y-16,o-5,h.x+7,h.y-13,o-5)}let a=new Pt;a.setAttribute("position",new ht(i,3));let l=new Pt;l.setAttribute("position",new ht(s,3)),n.add(new Ht(a,e[t])),n.add(new Ht(l,e[2]))}return n}});Yo();var Ze=Object.freeze({halfWidth:24,spawnDistance:44}),zn=(n,e,t)=>Math.min(t,Math.max(e,n)),ko=n=>zn(Math.min(n.width/1100,n.height/700),.72,1.75),$M=(n,e)=>{let t=zn((e/n.height-.36)/(.78-.36),0,1),i=0,s=1;for(let r=0;r<12;r+=1){let o=(i+s)/2;o*o*(3-2*o)<t?i=o:s=o}return(i+s)/2},Ru=(n,e,t,i,s)=>{let r=(1-$M(n,e))*Ze.spawnDistance,o=1+.09*Math.sin((s+r)/34)*r/Ze.spawnDistance,a=Pr(n,e)*o,l=Xo(s+r)-Xo(s);return n.width/2+(i+(l-t)/Ze.halfWidth)*a},fc=(n,e,t,i,s)=>{for(let r=0;r<=48;r+=1){let o=e.height*(.36+(1-.36)*r/48),a=Ru(e,o,t,i,s);r===0?n.moveTo(a,o):n.lineTo(a,o)}},jM=(n,e,t,i,s)=>{n.beginPath(),fc(n,e,t,i,s);for(let r=48;r>=0;r-=1){let o=e.height*(.36+(1-.36)*r/48),a=r/48,l=Math.sin(r*.72+s*.12)*a*e.width*.002,c=e.width*(.003+a*a*.018)+l;n.lineTo(Ru(e,o,t,i,s)+i*c,o)}n.closePath(),n.fillStyle="#b9dbe8",n.fill(),n.beginPath(),fc(n,e,t,i,s),n.strokeStyle="#f8ffff",n.lineWidth=Math.max(5,e.width*.006),n.stroke(),n.beginPath(),fc(n,e,t,i,s),n.strokeStyle="#61cfe0",n.lineWidth=Math.max(1.5,e.width*.0013),n.stroke()},Au=(n,e,t,i,s,r,o,a)=>{for(let[l,c,h,d]of t){let u=e.width*l+a,f=e.height*c,p=e.height*i,x=e.width*h*.5,g=u-x,m=u+x,v=(p-f)*.28;n.fillStyle=s,n.beginPath(),n.moveTo(g,p),n.lineTo(u-x*.53,f+v*1.4),n.lineTo(u-x*.22,f+v*.58),n.lineTo(u+d*x,f),n.lineTo(u+x*.27,f+v*.74),n.lineTo(u+x*.62,f+v*1.6),n.lineTo(m,p),n.closePath(),n.fill(),n.fillStyle=r,n.beginPath(),n.moveTo(u+d*x,f),n.lineTo(u+x*.27,f+v*.74),n.lineTo(m,p),n.lineTo(u+x*.1,p),n.lineTo(u-x*.09,f+v*1.6),n.closePath(),n.fill(),n.fillStyle=o,n.beginPath(),n.moveTo(u-x*.22,f+v*.58),n.lineTo(u+d*x,f),n.lineTo(u+x*.27,f+v*.74),n.lineTo(u+x*.08,f+v*.9),n.lineTo(u-x*.02,f+v*.72),n.lineTo(u-x*.11,f+v*1.05),n.closePath(),n.fill(),n.fillStyle="rgba(121, 177, 197, 0.2)",n.beginPath(),n.moveTo(u-x*.23,f+(p-f)*.23),n.lineTo(u,f),n.lineTo(u-x*.04,f+(p-f)*.23),n.closePath(),n.fill()}},QM=(n,e,t,i)=>{let s=n.createLinearGradient(0,0,0,e.height*.6);s.addColorStop(0,"#58a7cc"),s.addColorStop(.62,"#b9e4ef"),s.addColorStop(1,"#effaff"),n.fillStyle=s,n.fillRect(0,0,e.width,e.height);let r=e.width*.76-t*4,o=e.height*.13,a=n.createRadialGradient(r,o,2,r,o,e.height*.28);a.addColorStop(0,"rgba(255,250,222,0.68)"),a.addColorStop(1,"rgba(255,250,222,0)"),n.fillStyle=a,n.fillRect(0,0,e.width,e.height*.48),n.fillStyle="#fff9e4",n.beginPath(),n.arc(r,o,e.height*.029,0,Math.PI*2),n.fill(),Au(n,e,[[-.06,.17,.31,-.08],[.17,.08,.35,.04],[.43,.19,.34,-.1],[.7,.09,.37,.08],[1.04,.16,.36,-.06]],.42,"#c8dbe1","#a9c8d2","#f5fbfa",-t*2.5),Au(n,e,[[-.07,.29,.27,.09],[.16,.2,.34,-.07],[.48,.27,.3,.06],[.78,.2,.35,-.08],[1.08,.27,.31,.07]],.51,"#9bbbc7","#739bac","#eff9fa",-t*5),Au(n,e,[[-.11,.39,.33,.08],[.24,.32,.32,-.06],[.53,.38,.28,.07],[.87,.31,.34,-.08],[1.13,.4,.3,.04]],.59,"#6f9baa","#4c7d91","#d9eef1",-t*8);let l=n.createLinearGradient(0,e.height*.45,0,e.height);l.addColorStop(0,"#e3f5f6"),l.addColorStop(1,"#c3e0e8"),n.fillStyle=l,n.beginPath(),n.moveTo(0,e.height*.56),n.bezierCurveTo(e.width*.13,e.height*.46,e.width*.23,e.height*.56,e.width*.39,e.height*.5),n.bezierCurveTo(e.width*.57,e.height*.43,e.width*.65,e.height*.57,e.width*.79,e.height*.48),n.bezierCurveTo(e.width*.88,e.height*.44,e.width*.95,e.height*.54,e.width,e.height*.52),n.lineTo(e.width,e.height),n.lineTo(0,e.height),n.closePath(),n.fill();let c=n.createLinearGradient(0,e.height*.36,0,e.height);c.addColorStop(0,"#f6fcfc"),c.addColorStop(.55,"#ffffff"),c.addColorStop(1,"#f7fcff"),n.fillStyle=c,n.beginPath(),fc(n,e,t,-1,i);for(let h=48;h>=0;h-=1){let d=e.height*(.36+(1-.36)*h/48);n.lineTo(Ru(e,d,t,1,i),d)}n.closePath(),n.fill();for(let h of[-1,1])jM(n,e,t,h,i)},eS=(n,e,t,i,s,r)=>{let o=s==="powder"?4.8:2.8,a=Math.floor(i/o)*o,l=s==="ice"?.05:s==="powder"?.075:.11;n.save(),n.strokeStyle=s==="ice"?"#81c9d7":"#9bcbd4";for(let c=a;c<i+Ze.spawnDistance;c+=o){let h=c-i;if(h<.5||h>Ze.spawnDistance)continue;let d={...Ze,travel:i},u=Yn(e,t,{x:-Ze.halfWidth*.86,z:h},d),f=Yn(e,t,{x:Ze.halfWidth*.86,z:h},d),p=Math.sin(c*.75)*5*u.scale;n.globalAlpha=l*u.alpha*(.65+Math.min(r/34,1)*.35),n.lineWidth=Math.max(.7,u.scale*(s==="powder"?2.5:1.4)),n.beginPath(),n.moveTo(u.x,u.y),n.quadraticCurveTo((u.x+f.x)/2,u.y-4*u.scale,f.x,f.y),n.stroke()}n.restore()},tS=(n,e,t,i,s)=>{let r=.58+.42*Math.sin(i*.14+.8)**2,o=zn((s-14)/20,0,1)*r;if(!(o<.1)){n.save(),n.strokeStyle="#ffffff",n.lineCap="round";for(let a=0;a<14;a+=1){let l=(a*8+i*(.65+a%3*.09))%Ze.spawnDistance,c=a%2?1:-1,h=Yn(e,t,{x:c*(Ze.halfWidth+3.5+a%3*2),z:l},{...Ze,travel:i}),d=(11+h.scale*42)*ko(e);n.globalAlpha=h.alpha*o*.28,n.lineWidth=Math.max(1,h.scale*2.2),n.beginPath(),n.moveTo(h.x-d*.5,h.y),n.quadraticCurveTo(h.x,h.y-4*h.scale,h.x+d,h.y-2*h.scale),n.stroke()}n.restore()}},nS=(n,e,t,i)=>{let r=Math.floor(i/7.5)*7.5;n.save(),n.lineCap="round";for(let o=r;o<i+Ze.spawnDistance;o+=7.5){let a=o-i;if(!(a<1||a>Ze.spawnDistance))for(let l of[-1,1]){let c=Yn(e,t,{x:l*(Ze.halfWidth+1.8),z:a},{...Ze,travel:i}),h=Yn(e,t,{x:l*(Ze.halfWidth+9),z:a},{...Ze,travel:i});n.globalAlpha=c.alpha*.34,n.strokeStyle="#8bbac9",n.lineWidth=Math.max(1,c.scale*3.5),n.beginPath(),n.moveTo(c.x,c.y),n.quadraticCurveTo((c.x+h.x)/2,c.y-8*c.scale,h.x,h.y-3*c.scale),n.stroke()}}n.restore()},iS=(n,e,t,i)=>{let s=Math.max(0,t-i.downhill),r=n.height*.78+s*Math.max(3.5,n.height*.006);return{x:n.width/2+(i.across-e)/Ze.halfWidth*Pr(n,r),y:r,behind:s}},sS=(n,e,t,i,s)=>{if(s.length<2)return;let r=s.map(a=>({...iS(e,t,i,a),speed:a.speed})).filter(a=>a.y<=e.height+25);if(r.length<2)return;let o=ko(e);n.lineCap="round",n.lineJoin="round";for(let[a,l,c]of[[-10,9,"rgba(85,150,166,0.32)"],[10,9,"rgba(85,150,166,0.32)"],[-10,4,"rgba(255,255,255,0.92)"],[10,4,"rgba(255,255,255,0.92)"]]){n.beginPath(),n.moveTo(r[0].x+a*o,r[0].y);for(let h of r.slice(1))n.lineTo(h.x+a*o,h.y);n.strokeStyle=c,n.lineWidth=l*o,n.stroke()}for(let a=0;a<r.length;a+=3){let l=r[a],c=zn(1-l.behind/28,0,1),h=zn((l.speed||16)/25,.7,1.45),d=(20+a%4*5)*o,u=(8+a%5*2.1)*o*c*h;if(!(u<.5))for(let f of[-1,1])n.globalAlpha=c,n.fillStyle="rgba(93,151,166,0.27)",n.beginPath(),n.ellipse(l.x+f*d,l.y+u*.55,u*1.65,u*.65,0,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(l.x+f*d,l.y,u*1.2,u*.8,0,0,Math.PI*2),n.fill()}n.globalAlpha=1},rS=(n,e,t,i,s=0,r=16,o=e.width/2)=>{let a=ko(e),l=e.height*.78,c=zn(Math.abs(t),0,1),h=zn(s/8,0,1);if(c<.05&&h<.08)return;let d=zn(r/24,.75,1.5);for(let u of[-1,1]){let f=(.52+(u*t>0?c*1.1:c*.35)+h*.8)*d;for(let p=0;p<12;p+=1){let x=(i*2.7+p*.8)%11,g=o+u*(28+x*(5.2+c*3.4))*a,m=l+(x*2.3+Math.sin(p*2.1)*6)*a,v=(5+(11-x)*.95)*a*f;n.fillStyle="rgba(85,151,174,0.24)",n.beginPath(),n.ellipse(g,m+v*.45,v*1.42,v*.72,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.96)",n.beginPath(),n.ellipse(g,m,v*1.12,v*.8,0,0,Math.PI*2),n.fill()}}},oS=(n,e,t)=>{if(t<=0)return;let i=ko(e),s=1-zn(t/.8,0,1),r=e.width/2,o=e.height*.78;n.save(),n.globalAlpha=zn(t*1.2,0,1);for(let a=0;a<18;a+=1){let l=a*Math.PI*2/18,c=(18+s*110+a%3*11)*i,h=(6+a%4*2.4)*i*(1-s*.55);n.fillStyle=a%3===0?"#b5e3e9":"#ffffff",n.beginPath(),n.ellipse(r+Math.cos(l)*c,o+Math.sin(l)*c*.45,h*1.3,h*.8,0,0,Math.PI*2),n.fill()}n.restore()},Qp=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.28)":"rgba(45,104,114,0.16)",n.beginPath(),n.ellipse(e+i*.15,t+i*.06,i*.52,i*.13,0,0,Math.PI*2),n.fill(),n.fillStyle="#624535",n.fillRect(e-i*.06,t-i*.3,i*.12,i*.32);for(let r=0;r<3;r+=1){let o=t-i*(1-r*.24),a=t-i*(.32-r*.13),l=i*(.25+r*.105);n.fillStyle=s?r===1?"#17664e":"#0a463d":r===1?"#2a8b6b":"#176c57",n.beginPath(),n.moveTo(e,o),n.lineTo(e-l,a),n.lineTo(e+i*.04,a),n.closePath(),n.fill(),n.fillStyle=r===1?"#269976":"#1a856a",n.beginPath(),n.moveTo(e,o),n.lineTo(e+i*.04,a),n.lineTo(e+l,a),n.closePath(),n.fill(),n.fillStyle=s?"#0d4d43":"#1d765f",n.beginPath(),n.moveTo(e,o),n.lineTo(e+l,a),n.lineTo(e+l*.06,a),n.closePath(),n.fill(),n.strokeStyle="#e6f6f5",n.lineWidth=Math.max(1,i*.027),n.beginPath(),n.moveTo(e-l*.13,o+i*.08),n.lineTo(e-l*.45,o+(a-o)*.63),n.lineTo(e-l*.67,o+(a-o)*.68),n.stroke()}s&&(n.strokeStyle="rgba(229,106,65,0.8)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.ellipse(e,t+i*.02,i*.43,i*.1,0,0,Math.PI*2),n.stroke())},em=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.26)":"rgba(45,104,114,0.15)",n.beginPath(),n.ellipse(e+i*.14,t+i*.06,i*.59,i*.15,0,0,Math.PI*2),n.fill(),n.fillStyle=s?"#374859":"#627889",n.beginPath(),n.moveTo(e-i*.44,t),n.lineTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.39,t-i*.25),n.lineTo(e+i*.46,t),n.closePath(),n.fill(),n.strokeStyle=s?"#273746":"#536d7b",n.lineWidth=Math.max(1.5,i*.025),n.stroke(),n.fillStyle=s?"#708b99":"#9bb9c2",n.beginPath(),n.moveTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.16,t-i*.31),n.lineTo(e-i*.21,t-i*.23),n.closePath(),n.fill(),n.strokeStyle="#effbfb",n.lineWidth=Math.max(2,i*.055),n.beginPath(),n.moveTo(e-i*.21,t-i*.32),n.lineTo(e+i*.03,t-i*.42),n.lineTo(e+i*.16,t-i*.33),n.stroke(),s&&(n.strokeStyle="rgba(229,106,65,0.85)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.moveTo(e-i*.43,t+i*.02),n.quadraticCurveTo(e,t+i*.16,e+i*.43,t+i*.02),n.stroke())},aS=(n,e,t,i)=>{let s=qo(i,Ze.spawnDistance,{halfWidth:Ze.halfWidth}),r=s.flatMap(o=>o.scenery);r.sort((o,a)=>a.z-o.z);for(let o of r){let a=o.z-i;if(a<0||a>Ze.spawnDistance)continue;let l=Yn(e,t,{x:o.x,z:a},{...Ze,travel:i}),c=l.pathHalf/Ze.halfWidth*2.35*o.size;n.save(),n.globalAlpha=l.alpha*.92,gc(o.z)==="glow"&&(n.fillStyle="rgba(54,218,225,0.18)",n.beginPath(),n.ellipse(l.x,l.y,c*.65,c*.13,0,0,Math.PI*2),n.fill()),o.kind==="rock"?em(n,l.x,l.y,c):Qp(n,l.x,l.y,c),n.restore()}for(let o of s){if(o.index%8!==3)continue;let a=o.index*36+36/2-i;if(a<0||a>Ze.spawnDistance)continue;let l=o.index%16===3?-1:1,c=Yn(e,t,{x:l*(Ze.halfWidth+10),z:a},{...Ze,travel:i}),h=c.pathHalf/Ze.halfWidth;n.save(),n.globalAlpha=c.alpha*.8,n.fillStyle="#284f61",n.fillRect(c.x-h*.7,c.y-h*2.5,h*1.4,h*2.5),n.fillStyle="#e6f5f6",n.beginPath(),n.moveTo(c.x-h,c.y-h*2.5),n.lineTo(c.x,c.y-h*3.5),n.lineTo(c.x+h,c.y-h*2.5),n.closePath(),n.fill(),n.fillStyle="#ef9d65",n.fillRect(c.x-h*.2,c.y-h*1.2,h*.4,h*1.2),n.restore()}for(let o of s){if(o.biome!=="glow"||o.index%4!==0)continue;let a=o.index*36+3-i;if(!(a<0||a>Ze.spawnDistance))for(let l of[-1,1]){let c=Yn(e,t,{x:l*(Ze.halfWidth+4.5),z:a},{...Ze,travel:i}),h=c.pathHalf/Ze.halfWidth;n.save(),n.globalAlpha=c.alpha,n.fillStyle="rgba(53,219,222,0.25)",n.beginPath(),n.ellipse(c.x,c.y,h*1.3,h*.32,0,0,Math.PI*2),n.fill(),n.fillStyle="#24485c",n.fillRect(c.x-h*.16,c.y-h*2.5,h*.32,h*2.5),n.fillStyle="#55e2df",n.beginPath(),n.arc(c.x,c.y-h*2.55,h*.45,0,Math.PI*2),n.fill(),n.restore()}}},lS=(n,e,t,i)=>{let s=Math.floor(i/10)*10;for(let r=s;r<i+Ze.spawnDistance;r+=10){let o=r-i;if(!(o<1||o>Ze.spawnDistance-1))for(let a of[-1,1]){let l=Yn(e,t,{x:a*(Ze.halfWidth+.55),z:o},{halfWidth:Ze.halfWidth,viewDistance:Ze.spawnDistance,travel:i}),c=ko(e)*l.scale,h=38*c,{x:d,y:u}=l;n.save(),n.globalAlpha=l.alpha,n.strokeStyle="rgba(55, 103, 123, 0.22)",n.lineWidth=Math.max(1,2*c),n.beginPath(),n.moveTo(d,u),n.lineTo(d+a*16*c,u+3*c),n.stroke(),n.strokeStyle="#e15f50",n.lineWidth=Math.max(1.5,3*c),n.beginPath(),n.moveTo(d,u),n.lineTo(d,u-h),n.stroke(),n.strokeStyle="#f58e71",n.lineWidth=Math.max(.8,c),n.beginPath(),n.moveTo(d-c*.75,u-2*c),n.lineTo(d-c*.75,u-h),n.stroke(),n.fillStyle="#c6b9aa",n.beginPath(),n.moveTo(d+2*c,u-h+c),n.lineTo(d-a*13*c+2*c,u-h+6*c),n.lineTo(d+2*c,u-h+11*c),n.closePath(),n.fill(),n.fillStyle="#f4e9d8",n.beginPath(),n.moveTo(d,u-h),n.lineTo(d-a*15*c,u-h+5*c),n.lineTo(d,u-h+10*c),n.closePath(),n.fill(),n.restore()}}},cS=(n,e,t)=>{let i=t.pathHalf*2.08,s=Math.max(7,t.pathHalf/Ze.halfWidth*.72),{x:r,y:o}=t;n.fillStyle="rgba(25,53,63,0.22)",n.beginPath(),n.ellipse(r,o+s*.7,i*.52,s*.7,0,0,Math.PI*2),n.fill(),n.fillStyle="#a9d7db",n.beginPath(),n.moveTo(r-i*.43,o+s*1.6),n.lineTo(r-i*.4,o-s*.6),n.lineTo(r+i*.4,o-s*.6),n.lineTo(r+i*.43,o+s*1.6),n.closePath(),n.fill(),n.fillStyle="#523929",n.fillRect(r-i/2,o-s,i,s*1.12),n.fillStyle="#ac7044",n.fillRect(r-i/2,o-s,i,s*.3),n.fillStyle="#f2f9f5",n.fillRect(r-i*.48,o-s*1.12,i*.96,s*.2),n.strokeStyle="#2d2928",n.lineWidth=Math.max(2,s*.12),n.strokeRect(r-i/2,o-s,i,s*1.12),n.strokeStyle="rgba(35,28,24,0.45)",n.lineWidth=Math.max(1,s*.07);for(let a of[-.32,-.08,.22])n.beginPath(),n.moveTo(r+i*a,o-s*.52),n.lineTo(r+i*(a+.12),o-s*.2),n.stroke();for(let a of[-1,1])n.fillStyle="#cf9c6f",n.beginPath(),n.ellipse(r+a*i*.49,o-s*.42,s*.35,s*.49,0,0,Math.PI*2),n.fill()},hS=(n,e,t)=>{let i=t.pathHalf/Ze.halfWidth/32,s=t.x,r=t.y-90*i,o=t.pathHalf*1.04;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(s,t.y+3*i,o*.6,8*i,0,0,Math.PI*2),n.fill(),n.fillStyle="#222b43",n.beginPath(),n.ellipse(s,r,22*i,13*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#222b43",n.lineCap="round",n.lineWidth=Math.max(3,10*i),n.beginPath(),n.moveTo(s-8*i,r),n.quadraticCurveTo(s-o*.58,r-45*i,s-o,r+5*i),n.moveTo(s+8*i,r),n.quadraticCurveTo(s+o*.58,r-45*i,s+o,r+5*i),n.stroke(),n.fillStyle="#f0a65c",n.beginPath(),n.moveTo(s,r+2*i),n.lineTo(s-4*i,r+10*i),n.lineTo(s+4*i,r+10*i),n.closePath(),n.fill()},uS=(n,e,t)=>{let i=t.pathHalf/Ze.halfWidth/32,s=t.y-83*i,r=t.pathHalf*1.04,o=t.x;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(o,t.y+3*i,r*.68,8*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#52382e",n.lineCap="round",n.lineWidth=Math.max(5,15*i),n.beginPath(),n.moveTo(o-r,s-9*i),n.quadraticCurveTo(o,s+9*i,o+r,s-9*i),n.stroke(),n.fillStyle="#1b624f";for(let a of[-.72,-.36,.08,.47,.77]){let l=o+r*a,c=s-10*i;n.fillStyle="#0b584e",n.beginPath(),n.moveTo(l-16*i,c+5*i),n.lineTo(l+2*i,c-12*i),n.lineTo(l+16*i,c+5*i),n.closePath(),n.fill(),n.fillStyle="#249575",n.beginPath(),n.moveTo(l+2*i,c-12*i),n.lineTo(l+16*i,c+5*i),n.lineTo(l+2*i,c+5*i),n.closePath(),n.fill()}},jp=(n,e,t)=>{let i=zn(e.pathHalf*.12,9,31),s=e.y-(t==="jump"?i*3:e.pathHalf/Ze.halfWidth*3.5+i*1.5);n.globalAlpha=e.alpha,n.fillStyle=t==="jump"?"#dc754e":"#684f90",n.beginPath(),n.arc(e.x,s,i,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=Math.max(2,i*.16),n.lineCap="round",n.lineJoin="round",n.beginPath();let r=t==="jump"?-1:1;n.moveTo(e.x,s-r*i*.42),n.lineTo(e.x,s+r*i*.42),n.moveTo(e.x-i*.32,s+r*i*.1),n.lineTo(e.x,s+r*i*.42),n.lineTo(e.x+i*.32,s+r*i*.1),n.stroke()},dS=(n,e,t)=>{let{x:i,y:s,pathHalf:r}=e,o=r/Ze.halfWidth*t.radius;n.fillStyle="rgba(21,48,61,0.26)",n.beginPath(),n.ellipse(i,s,o,o*.25,0,0,Math.PI*2),n.fill(),n.translate(i,s-o*.92),n.rotate(t.roll),n.fillStyle="#374859",n.beginPath(),n.moveTo(-o,0),n.lineTo(-o*.72,-o*.7),n.lineTo(0,-o),n.lineTo(o*.76,-o*.58),n.lineTo(o,o*.18),n.lineTo(o*.52,o*.84),n.lineTo(-o*.28,o*.94),n.lineTo(-o*.81,o*.57),n.closePath(),n.fill(),n.strokeStyle="#273746",n.lineWidth=Math.max(1.5,o*.06),n.stroke(),n.fillStyle="#c3dbe1",n.beginPath(),n.moveTo(-o*.72,-o*.7),n.lineTo(0,-o),n.lineTo(o*.49,-o*.73),n.lineTo(o*.16,-o*.54),n.lineTo(-o*.43,-o*.44),n.closePath(),n.fill()},fS=(n,e,t,i,s)=>{for(let r of[...s].sort((o,a)=>a.z-o.z)){if(r.z<-2||r.z>Ze.spawnDistance)continue;let o=Yn(e,t,r,{...Ze,travel:i});if(n.save(),n.globalAlpha=o.alpha,r.kind==="jump")cS(n,e,o),r.z>3&&jp(n,o,"jump");else if(r.kind==="duck")r.variant==="bird"?hS(n,e,o):uS(n,e,o),r.z>3&&jp(n,o,"duck");else if(r.variant==="rolling-boulder")dS(n,o,r);else{let a=o.pathHalf/Ze.halfWidth*2.35;r.variant==="rock"||r.variant==="rock-garden"?em(n,o.x,o.y,a,!0):Qp(n,o.x,o.y,a,!0)}n.restore()}};async function Cu(n){if(n.worldCanvas&&n.runtime)try{let{createMountainWorld:r}=await Promise.resolve().then(()=>($p(),Kp)),o=r(n.worldCanvas);n.runtime.world3d=o,n.canvas.style.visibility="hidden",n.events.addEventListener("course:update",a=>{o.setCourse(a.detail)}),n.events.addEventListener("rider:update",a=>{o.render(a.detail)});return}catch(r){console.warn("3D mountain renderer unavailable; using the canvas view",r),n.worldCanvas.style.display="none"}let e=n.canvas.getContext("2d");if(!e)throw new Error("Mountain rendering requires a 2D canvas context");let t=0,i=[],s={crashFx:0,distance:0,hazards:[],phase:"idle"};n.events.addEventListener("course:update",r=>{s={crashFx:Number(r.detail?.crashFx)||0,distance:Number(r.detail?.distance)||0,hazards:Array.isArray(r.detail?.hazards)?r.detail.hazards:[],phase:r.detail?.phase??"idle"}}),n.events.addEventListener("rider:update",r=>{let o=r.detail?.state,a=r.detail?.camera,l=Number(o?.position?.across)||0,c=Number(a?.position?.across)||0,h=zn(Number(a?.zoom)||1,.82,1),d=Xu(n.canvas,l,c,h,Ze.halfWidth),u=s.phase==="idle"?0:Number(o?.position?.downhill)||s.distance;if(s.phase==="idle"?(t=0,i=[]):s.phase==="running"&&(t=Math.max(0,u),(o?.air??0)<.08&&(i.length===0||t-i.at(-1).downhill>=.45)&&i.push({across:l,downhill:t,speed:Number(o?.speed)||16}),i=i.filter(f=>t-f.downhill<42)),e.save(),e.translate(n.canvas.width/2,n.canvas.height/2),e.rotate(-(Number(a?.roll)||0)),e.translate(-n.canvas.width/2,-n.canvas.height/2),QM(e,n.canvas,d,u),eS(e,n.canvas,d,u,o?.surface??"powder",Number(o?.speed)||0),nS(e,n.canvas,d,u),sS(e,n.canvas,d,t,i),s.phase==="running"&&(o?.air??0)<.08){let f=o?.surface==="ice"?0:zn((Number(o?.slash)||0)*.85+(Number(o?.skid)||0)*.5+(Number(o?.washout)||0)*.35,0,1),p=Math.sign(o?.slipAngle||o?.edge||r.detail?.input?.carve||1),x=n.canvas.width/2+(l-c)*14*h;o?.surface!=="ice"&&rS(e,n.canvas,p*f,t,Number(o?.landingImpact)||0,Number(o?.speed)||16,x)}tS(e,n.canvas,d,u,Number(o?.speed)||0),aS(e,n.canvas,d,u),lS(e,n.canvas,d,u),fS(e,n.canvas,d,u,s.hazards),oS(e,n.canvas,s.crashFx),e.restore()})}lu();Bo();cc();Bo();var Hi=(n,e=0)=>Number.isFinite(n)?n:e,Pu=()=>Object.freeze({active:null});function tm(n,e,t,i={}){let s=!!(e?.grounded??e?.air<=0),r=!!(t?.grounded??t?.air<=0),o=n?.active??null,a=null;if(s&&!r){let l=_u(Hi(t?.position?.downhill),Hi(t?.position?.across),6);o=l?{featureId:l.id,takeoffRotation:Hi(t?.boardRotation),peakAir:Hi(t?.air),maxRotation:0,grabTime:0}:null}if(o&&!r){let l=Math.max(0,Math.min(.1,Hi(t?.elapsed)-Hi(e?.elapsed)));o={...o,peakAir:Math.max(o.peakAir,Hi(t?.air)),maxRotation:Math.max(o.maxRotation,Math.abs(Hi(t?.boardRotation)-o.takeoffRotation)),grabTime:o.grabTime+(Hi(i.grab)>.5?l:0)}}if(o&&!s&&r){if(!t.crashed&&o.peakAir>=.45){let l=Math.floor((o.maxRotation+.32)/Math.PI),c=o.grabTime>=.12,h=Math.round(150+l*140+(c?80:0)+Math.min(100,o.peakAir*15));a=Object.freeze({featureId:o.featureId,label:["SIDE HIT",l?`${l*180}\xB0`:null,c?"GRAB":null].filter(Boolean).join(" \xB7 "),points:h})}o=null}return t?.crashed&&(o=null),Object.freeze({tracker:Object.freeze({active:o}),award:a})}var nm="slopestyle.bestDistance",Iu="slopestyle.bestScore",im=16,pS=44,am=1.25,mS=1.15,Ls=(n,e,t)=>Math.min(t,Math.max(e,n)),gS=n=>{let e=Number.isFinite(n?.velocity?.downhill)?n.velocity.downhill:Number(n?.speed)||0;return n?.crashed?Math.max(0,e):Math.max(Rs(n?.position?.downhill).min,e)},_S=n=>Math.abs(n?.position?.across??0)>Ze.halfWidth,sm=(n,e,t=0)=>n.map(i=>{let s=i.worldDownhill-e;if(i.variant!=="rolling-boulder")return{...i,z:s};let r=i.acrossSpeed*t;return{...i,x:i.x+r,z:s,roll:i.roll+r/i.radius}}),xS=(n,e,t={})=>{if(n.passed||Math.abs(n.z)>am)return!1;let i=e.position.across-n.x,s=Math.abs(i),r=Number(e.air)||0;if(n.kind==="jump"){let o=n.radius??Ze.halfWidth*.94;if(s>=o)return!1;let a=n.rootEnd&&i*n.rootEnd>o-Oo.rootPlate.width;return r<(a?Oo.rootPlate.clearance:Oo.clearance)}if(n.kind==="duck"){let o=n.variant==="bird"?.86:.88,a=n.radius??Ze.halfWidth*o;if(s>=a)return!1;if(n.stumpEnd){let l=i*n.stumpEnd;if(l>a-nc.stumpWidth||l<nc.restWidth-a)return!0}return(Number(t.crouch)||0)<.75}return n.variant==="rolling-boulder"?r<n.radius*1.85&&s<n.radius:r<(n.clearance??.35)&&s<(n.radius??1.05)},yS=(n,e)=>n+Math.random()*(e-n),rm=n=>{try{return Math.max(0,Number(localStorage.getItem(n))||0)}catch{return 0}},Lu=(n,e)=>{try{localStorage.setItem(n,String(Math.floor(e)))}catch{}},vS=()=>{if(document.querySelector("[data-slopestyle-styles]"))return;let n=document.createElement("style");n.dataset.slopestyleStyles="true",n.textContent=`
    * { box-sizing: border-box; }
    html, body { margin: 0; min-height: 100%; overflow: hidden; background: #8baab9; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    #game-root { position: relative; width: 100vw; height: 100vh; overflow: hidden; color: #f2f6f5; }
    #world-canvas, #game-canvas { position: absolute; inset: 0; display: block; width: 100%; height: 100%; }
    #game-canvas { pointer-events: none; }
    #hud-root { position: absolute; inset: 22px 26px auto 26px; display: flex; justify-content: space-between; pointer-events: none; }
    .hud-card { min-width: 122px; border: 1px solid rgba(237, 249, 251, 0.18); border-radius: 5px; padding: 10px 14px; background: rgba(15, 34, 43, 0.42); box-shadow: 0 8px 28px rgba(28, 56, 67, 0.12); backdrop-filter: blur(12px); }
    .hud-label { display: block; color: rgba(238, 248, 249, 0.68); font-size: 0.66rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
    .hud-value { display: block; margin-top: 4px; color: #f7faf9; font-size: clamp(1.25rem, 2.3vw, 1.8rem); font-weight: 650; line-height: 1; font-variant-numeric: tabular-nums; }
    .hud-unit { margin-left: 3px; font-size: 0.75rem; font-weight: 600; opacity: 0.68; }
    #overlay-root { position: absolute; inset: 0; display: grid; place-items: center; padding: 24px; pointer-events: none; }
    .overlay-panel { width: min(540px, 92vw); border: 1px solid rgba(234, 247, 248, 0.16); border-radius: 6px; padding: clamp(26px, 4vw, 42px); background: rgba(18, 39, 49, 0.82); box-shadow: 0 22px 75px rgba(17, 36, 46, 0.28); backdrop-filter: blur(18px); text-align: left; pointer-events: auto; }
    .overlay-panel h1 { margin: 0 0 12px; font-size: clamp(2.6rem, 6vw, 4.2rem); font-weight: 680; line-height: 0.96; letter-spacing: -0.055em; color: #f5f8f6; }
    .overlay-panel p { margin: 12px 0 0; color: #cedfdf; line-height: 1.48; }
    .overlay-kicker { margin: 0 0 12px !important; color: #a6c7cf !important; font-size: 0.72rem; font-weight: 750; letter-spacing: 0.2em; text-transform: uppercase; }
    .primary-action { min-width: 170px; margin-top: 25px; border: 0; border-radius: 4px; padding: 13px 23px; background: #e9f0ed; color: #203d46; cursor: pointer; font: inherit; font-size: 0.88rem; font-weight: 750; letter-spacing: 0.06em; text-transform: uppercase; }
    .primary-action:hover { background: #ffffff; }
    .primary-action:focus-visible { outline: 3px solid #b5dce3; outline-offset: 3px; }
    .run-note { margin-top: 23px !important; color: #a7c0c4 !important; font-size: 0.78rem; }
    .run-stat { margin-top: 22px !important; color: #f6faf9 !important; font-size: 2.4rem; font-weight: 650; line-height: 1; font-variant-numeric: tabular-nums; }
    .trick-callout { position: absolute; left: 50%; top: 75px; transform: translateX(-50%); color: #fff7e8; font-size: clamp(0.8rem, 1.6vw, 1rem); font-weight: 800; letter-spacing: 0.11em; text-align: center; text-shadow: 0 2px 12px #1d3946; white-space: nowrap; }
    .trick-callout strong { display: block; margin-top: 3px; font-size: clamp(1.4rem, 3vw, 2.2rem); letter-spacing: 0; }
    .fall-callout { border: 0; background: transparent; box-shadow: none; color: white; text-align: center; animation: fallaway 1.35s ease-in forwards; }
    .fall-callout h1 { font-size: clamp(2.6rem, 7vw, 5rem); }
    .is-hidden { display: none !important; }
    @media (max-width: 560px) { #hud-root { inset: 12px 12px auto 12px; } .hud-card { min-width: 90px; padding: 8px 10px; } .overlay-panel { padding: 25px; } }
    @keyframes fallaway {
      0% { opacity: 1; transform: translateY(-8vh) scale(1); }
      100% { opacity: 0; transform: translateY(28vh) scale(0.34); }
    }
  `,document.head.append(n)},MS=()=>{let n,e,t,i=0,s=0,r=()=>(n||(n=new(window.AudioContext||window.webkitAudioContext)),n.state==="suspended"&&n.resume(),n),o=c=>{if(t)return t;let h=Math.floor(c.sampleRate*2);t=c.createBuffer(1,h,c.sampleRate);let d=t.getChannelData(0),u=19341;for(let f=0;f<h;f+=1)u=Math.imul(u,1664525)+1013904223|0,d[f]=u/2147483648*.5;return t},a=(c,h,d)=>{let u=r(),f=u.createBufferSource(),p=u.createBiquadFilter(),x=u.createGain();f.buffer=o(u),p.type="bandpass",p.frequency.value=h,p.Q.value=.5,x.gain.setValueAtTime(.001,u.currentTime),x.gain.linearRampToValueAtTime(d,u.currentTime+.012),x.gain.exponentialRampToValueAtTime(.001,u.currentTime+c),f.connect(p),p.connect(x),x.connect(u.destination),f.start(u.currentTime,0,c)},l=()=>{if(e)return;let c=r(),h=c.createBufferSource();h.buffer=o(c),h.loop=!0;let d=(u,f)=>{let p=c.createBiquadFilter();p.type=u,p.frequency.value=f;let x=c.createGain();return x.gain.value=0,h.connect(p),p.connect(x),x.connect(c.destination),{filter:p,gain:x}};e={source:h,snow:d("highpass",1600),skid:d("bandpass",900),wind:d("lowpass",420)},h.start()};return Object.freeze({startRide(){l(),i=0,s=0},stopRide(){if(!e)return;let c=r();if(e){for(let h of[e.snow,e.skid,e.wind])h.gain.gain.setTargetAtTime(1e-4,c.currentTime,.06);e.source.stop(c.currentTime+.2),e=void 0}},ride(c){if(!e)return;let h=r(),d=Ls(c.speed/pS,0,1),u=c.air<=0&&!c.crashed?1:0,f={groomed:.034,powder:.014,ice:.048,slush:.036,chop:.042,rail:.02}[c.surface]??.03,p=c.surface==="ice"?2500:c.surface==="powder"?900:1600;e.snow.filter.frequency.setTargetAtTime(p+d*700,h.currentTime,.07),e.snow.gain.gain.setTargetAtTime(u*f*(.25+d*.75),h.currentTime,.04),e.skid.gain.gain.setTargetAtTime(u*(c.skid*.046+c.slash*.016),h.currentTime,.035),e.wind.gain.gain.setTargetAtTime((.005+d*d*.045)*(1-(c.crouchAmount??0)*.2),h.currentTime,.09),c.slash>.42&&i<=.42&&a(.14,750,.02),c.landingImpact>1.5&&s<=1.5&&a(.2,280,.04),i=c.slash,s=c.landingImpact},jump(){a(.09,1200,.015)},crash(){a(.32,220,.09)},fall(){a(.3,330,.035)}})},SS=n=>(n.innerHTML=`
    <div class="hud-card" aria-live="polite">
      <span class="hud-label">Distance</span>
      <strong class="hud-value" data-distance>0 m</strong>
    </div>
    <div class="hud-card" aria-live="polite">
      <span class="hud-label">Speed</span>
      <strong class="hud-value" data-speed>0<span class="hud-unit">km/h</span></strong>
    </div>
    <div class="hud-card" aria-live="polite">
      <span class="hud-label">Score</span>
      <strong class="hud-value" data-score>0</strong>
    </div>
    <div class="trick-callout is-hidden" data-trick></div>
  `,Object.freeze({update({distance:e,score:t,speed:i,trickNotice:s,trickNoticeTimer:r}){n.querySelector("[data-distance]").textContent=`${Math.floor(e)} m`,n.querySelector("[data-speed]").innerHTML=`${Math.round(i*3.6)}<span class="hud-unit">km/h</span>`,n.querySelector("[data-score]").textContent=String(Math.floor(t));let o=n.querySelector("[data-trick]");if(o.classList.toggle("is-hidden",!s||r<=0),s&&r>0){o.textContent=s.label;let a=document.createElement("strong");a.textContent=`+${s.points}`,o.append(a)}}})),bS=Object.freeze([-.81,-.54,-.27,0,.27,.54,.81]),wS=7,ES=16,TS=(n,e,t)=>{let i=n.map(({x:r})=>1/(1+((r-e)/wS)**2)),s=t()*i.reduce((r,o)=>r+o,0);for(let r=0;r<n.length;r+=1)if(s-=i[r],s<=0)return n[r];return n.at(-1)},AS=(n,e,t,i=0,s=Math.random)=>{let r=Ze.halfWidth,o=([v,S])=>v+s()*(S-v),a=e+Ze.spawnDistance,l={id:n.nextHazardId,passed:!1,worldDownhill:a,z:Ze.spawnDistance};if(n.nextHazardId===n.nextBoulderId){n.nextBoulderId+=5+Math.floor(s()*3);let v=s()<.5?1:-1,S=Ls(Number(i)||0,-r+3,r-3)+v*o([.15,1.5]),M=Ls(S-v*ES,-r*.86,r*.86);return{...l,kind:"steer",variant:"rolling-boulder",radius:mS,acrossSpeed:(S-M)*t/Ze.spawnDistance,roll:0,x:M}}let c=s(),h="steer",d=Is(Math.max(0,Math.round((a-Oi)/Bi))),u=a>=d.start-4&&a<=d.lip+42;n.dodged>4&&c>.82?h="duck":n.dodged>2&&c>.64&&(h="jump");let f=h==="jump"?{variant:"fallen-tree",radius:o(Oo.halfLength),rootEnd:s()<.5?-1:1}:h==="duck"?{variant:"snapped-tree",radius:o(nc.halfLength),stumpEnd:s()<.5?-1:1}:s()>.38?{variant:"tree-island",radius:o(ou.radius),clearance:ou.clearance}:{variant:"rock-garden",radius:o(au.radius),clearance:au.clearance},p=r-f.radius-1.5,x=u?0:1.2,g=bS.map((v,S)=>({lane:S,x:Ls(v*r+(s()*2-1)*x,-p,p)})).filter(({lane:v,x:S})=>v!==n.lastLane&&(!u||Math.abs(S-d.centerX)>=f.radius+3.9)),m=TS(g,Number(i)||0,s);return n.lastLane=m.lane,{...l,kind:h,...f,x:m.x}},RS=n=>yS(Ls(40-n*.25,28,40),Ls(58-n*.35,37,55)),om=(n,e=0)=>({best:n,bestScore:e,crashFx:0,distance:0,score:0,trickPoints:0,trickNotice:null,trickNoticeTimer:0,dodged:0,fallTimer:0,finalDistance:0,hazards:[],lastLane:-1,lastRiderDownhill:0,nextBoulderId:4+Math.floor(Math.random()*3),nextHazardId:1,phase:"idle",spawnLeft:12,speed:0});async function Nu(n){vS();let e=MS(),t=SS(n.hudRoot),i=om(rm(nm),rm(Iu)),s,r=0,o,a=Pu(),l=()=>{let v=n.canvas.getBoundingClientRect(),S=Math.min(window.devicePixelRatio||1,2);n.canvas.width=Math.max(1,Math.floor(v.width*S)),n.canvas.height=Math.max(1,Math.floor(v.height*S))},c=()=>{n.events.dispatchEvent(new CustomEvent("course:update",{detail:Object.freeze({crashFx:i.crashFx,distance:i.distance,hazards:Object.freeze(i.hazards.map(v=>Object.freeze({...v}))),phase:i.phase})}))},h=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel">
        <p class="overlay-kicker">An endless descent</p>
        <h1>Slopestyle</h1>
        <p>Read the terrain, set an edge, and find a line through the mountain. Cut toward the flagged side hits, grab or spin, and land clean for trick points. The pace builds as you descend.</p>
        <button class="primary-action" type="button" data-start>Drop in</button>
        <p class="run-note">A/D carve \xB7 \u2190/\u2192 flick or skid \xB7 \u2193 crouch or grab \xB7 W/S shift weight \xB7 Space or \u2191 jump<br>Best run: ${Math.floor(i.best)} m \xB7 Best score: ${Math.floor(i.bestScore)}</p>
      </div>
    `,n.overlayRoot.querySelector("[data-start]").addEventListener("click",f,{once:!0})},d=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel">
        <p class="overlay-kicker">Run ended</p>
        <h1>Back to the top</h1>
        <p class="run-stat">${Math.floor(i.score)} points</p>
        <p>${Math.floor(i.finalDistance)} m ridden \xB7 Best run: ${Math.floor(i.best)} m \xB7 Best score: ${Math.floor(i.bestScore)}</p>
        <button class="primary-action" type="button" data-restart>Ride again</button>
      </div>
    `,n.overlayRoot.querySelector("[data-restart]").addEventListener("click",f,{once:!0})},u=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel fall-callout">
        <h1>Off the mountain</h1>
      </div>
    `},f=()=>{i={...om(i.best,i.bestScore),phase:"running",spawnLeft:4,speed:im},s=void 0,r=0,o=void 0,a=Pu(),n.overlayRoot.innerHTML="",n.events.dispatchEvent(new CustomEvent("rider:reset",{detail:{speed:im}})),c(),e.startRide()},p=(v,S)=>{if(i.finalDistance=i.distance,i.crashFx=.8,i.best=Math.max(i.best,Math.floor(i.distance)),i.bestScore=Math.max(i.bestScore,Math.floor(i.score)),Lu(nm,i.best),Lu(Iu,i.bestScore),e.stopRide(),v==="cliff"){n.events.dispatchEvent(new CustomEvent("rider:impact",{detail:S})),i.phase="falling",i.fallTimer=1.35,e.fall(),u();return}i.phase="crashed",v==="hazard"&&n.events.dispatchEvent(new CustomEvent("rider:impact",{detail:S})),e.crash(),d()},x=()=>{i.dodged+=1},g=(v,S)=>{let{input:M,state:_}=v,w=gS(_),y=Number.isFinite(_.position.downhill)?_.position.downhill:i.lastRiderDownhill,b=Math.max(0,y-i.lastRiderDownhill);if(i.lastRiderDownhill=y,e.ride(_),_S(_)){p("cliff",{kind:"course-edge",x:_.position.across});return}if(M.jump>0&&r<=0&&e.jump(),r=M.jump,i.speed=_.speed,i.distance+=Math.max(b,w*S),i.score=Math.floor(i.distance)+i.trickPoints,i.trickNoticeTimer=Math.max(0,i.trickNoticeTimer-S),i.spawnLeft-=b,i.hazards=sm(i.hazards,y,S),i.spawnLeft<=0){let A=AS(i,y,w,_.position.across);A&&(i.hazards.push(A),i.nextHazardId+=1),i.spawnLeft=RS(i.speed)}for(let A of i.hazards){if(xS(A,_,M)){p("hazard",A);return}!A.passed&&A.z<-am&&(A.passed=!0,x())}i.hazards=i.hazards.filter(A=>A.z>-5);let I=tm(a,o??_,_,v.pose);a=I.tracker,o=_,I.award&&(i.trickPoints+=I.award.points,i.score=Math.floor(i.distance)+i.trickPoints,i.trickNotice=I.award,i.trickNoticeTimer=1.9,i.bestScore=Math.max(i.bestScore,i.score),Lu(Iu,i.bestScore))},m=v=>{i.fallTimer-=v,i.fallTimer<=0&&(i.phase="crashed",e.crash(),d())};n.events.addEventListener("rider:update",v=>{let S=performance.now(),M=s===void 0?0:Ls((S-s)/1e3,0,.05);s=S,i.crashFx=Math.max(0,i.crashFx-M),i.phase==="running"?g(v.detail,M):i.phase==="falling"&&m(M),i.phase!=="running"&&(i.hazards=sm(i.hazards,Number(v.detail?.state?.position?.downhill)||0)),t.update(i),c()}),window.addEventListener("resize",l),l(),t.update(i),c(),h()}hu();No();jh();var CS=(n,e,t)=>Math.min(t,Math.max(e,n)),Ho=n=>Math.sin(Math.PI*CS(n,0,1))**2;function Du({airborne:n=0,airOpen:e=0,airStyle:t=0,collapse:i=0,crouch:s=.3,drift:r=0,elapsed:o=0,float:a=0,lead:l,lift:c=0,speed:h=0,stumble:d=0,sway:u=0,swing:f=0,tilt:p=0,trail:x}={}){let g={...ss[0]},m={...ss[1]},v=Math.max(0,s-.3),S=Math.max(0,p),M=Math.max(0,-p),_=v*(1-n*.7);for(let w of[g,m])w.x+=_*.16+M*.22-u*.3,w.y+=_*.18+n*.08+e*.06+c*.08+i*.3,w.out+=_*.07+n*.07+e*.1-h*.03+i*.3;g.y+=a,m.y+=a*.85,m.x+=S*.12-h*.06,m.y-=S*.2+M*.05,m.out+=S*.1+M*.12,g.x+=n*.1,g.y+=S*.12+M*.08,m.x-=n*.08,g.out+=S*.08,g.x+=t*.12,g.y-=t*.06,m.x-=t*.12,m.y+=t*.12,m.out+=t*.08,g.x+=r*.012,g.y+=r*.02,m.y-=r*.016,g.x-=d*.05,g.y+=d*(.3+Math.sin(o*13)*.1),g.out+=d*.22,m.x-=d*.12,m.y+=d*(.24+Math.sin(o*13+2.1)*.1),m.out+=d*.26;for(let[w,y]of[[g,l],[m,x]])y&&(w.x+=y.x??0,w.y+=y.y??0,w.out+=y.out??0);if(f){let w=Math.cos(f),y=Math.sin(f);for(let[b,I]of[[g,-1],[m,1]]){let A=I*(.258+b.out),P=b.x*w-A*y;b.out=I*(b.x*y+A*w)-.258,b.x=P}}return Object.freeze([Object.freeze(g),Object.freeze(m)])}var Fu=Object.freeze({shimmy:Object.freeze({seconds:.9,at(n){let e=Math.sin(2*Math.PI*n)*Math.sin(Math.PI*n);return{styleYaw:e*.22,styleRoll:e*.06,crouch:Ho(n)*.03}}}),pump:Object.freeze({seconds:.85,at(n){let e=Ho((n-.5)/.5);return{crouch:Ho(n/.62)*.13-e*.05,stylePitch:e*.04}}}),press:Object.freeze({seconds:.95,at(n){let e=Ho(n);return{stylePitch:e*.09,foreAft:-e*.5,spineSide:e*.09,crouch:e*.05}}}),reach:Object.freeze({seconds:1.2,at(n){let e=Ho(n);return{crouch:e*.1,spineSide:e*.1,headLook:e*.12,trail:{x:-e*.1,y:-e*.17,out:e*.1}}}})}),lm=Object.freeze(["shimmy","pump","reach","press","pump","shimmy","press","reach"]),cm=n=>lm[n%lm.length],Uu=n=>{let e=Math.sin(n*127.1+311.7)*43758.5453;return 2.2+(e-Math.floor(e))*2.1};var Ue=(n,e,t)=>Math.min(t,Math.max(e,n)),st=(n,e=0)=>Number.isFinite(n)?n:e,PS=n=>Math.atan2(Math.sin(n),Math.cos(n));function IS(n,e={}){let t=Math.abs(n.edge),i=Ue((st(n.speed,8)-8)/22,0,1),s=Math.sign(n.edge||n.lean||1),r=st(n.elapsed),o=n.surface!=="rail"&&t<.12&&(n.air??0)<=0?(Math.sin(r*1.8+.15)*.05+Math.sin(r*.77+.8)*.02)*(1-t/.12):0,a=(Math.sin(r*1.3)+Math.sin(r*.47+.8)*.35)*.022*(1-i*.65)*(1-t),l=Ue((n.air??0)/.25,0,1),c=Ue((n.verticalVelocity??0)/7.8,-1,1),h=l*Math.max(0,c),d=l*(1-Math.abs(c)),u=c<0?l*Ue((.8-st(n.air))/.8,0,1):0,f=Ue(n.compression??0,0,1),p=Ue(n.gForce??0,0,1.6),x=Ue(n.skid??0,0,1),g=Ue(n.slash??0,0,1),m=Ue(n.bumpImpact??0,0,1),v=Ue(n.chatter??0,0,1),S=Ue((st(n.impactMeter)-70)/30,0,1),M=Math.sin(r*11.5)*S*.055,_=Ue(Number.isFinite(e.crouch)?e.crouch:0,0,1),w=Ue(Number.isFinite(e.stretch)?e.stretch:0,0,1),y=Number.isFinite(n.terrainHeight)?n.terrainHeight:0,b=n.elapsed*n.speed*1.7,I=Ue(n.boardLightness??0,0,1),A=g*(1-I),P=Ue(n.crouchAmount??0,0,1),z=Ue(st(n.lean,n.edge)*(.2+i*.58)*(1-l*.6)+s*p*.055+a+M,-.8,.8),V=PS(st(n.boardRotation,st(n.boardYaw,n.heading))-st(n.torsoRotation,st(n.torsoYaw,n.heading)))+l*st(n.tweak)*1.35,L=1+Math.sin(r*17.3+.4)*.08*g,W=n.air>0?Ue(1-st(n.airtime)/.18,0,1):0,D=(n.edge??0)*(n.stance==="goofy"?-1:1)>=0,F=l?0:y*1.35+Math.sin(b)*v*.045-I*.075,J=l?0:(Number.isFinite(n.bodyHeave)?n.bodyHeave:y)*1.35-I*.035,N=n.crashed&&st(n.crashTimer)<=0?2:st(n.crashTimer),k=n.crashed?Ue(2-N,0,2):0,H=n.crashed?Ue(k/.12,0,1)*(1-Ue((k-1.15)/.85,0,1)):0,G=n.crashed?Ue((k-.55)/.4,0,1)*(1-Ue((k-1.35)/.5,0,1)):0,he=k<.4?1.1+k/.4*1.1:k<.75?2.2:k<1.3?2.2-(k-.75)/.55*1.3:.9*(1-Ue((k-1.3)/.7,0,1)),X=Ue(.28+i*.05+t*.2+P*.52+_*.22+l*.26+d*.16-u*.2-h*.1+m*.14+p*.08+A*.18,0,1),oe=Math.sin(r*1.09)+Math.sin(r*.73+.8)*.4,pe=Ue(H+st(n.washout)*.2+Ue(st(n.stumble)/rc,0,1)*.6+Math.max(0,st(n.landingImpact)-3)*.1+st(n.bumpImpact)*.05+S*.28,0,1);return Object.freeze({arms:Du({airborne:l,airOpen:u,collapse:H,crouch:X,drift:oe,elapsed:r,lift:h,speed:i,stumble:pe,tilt:z}),boardRoll:Ue(st(n.edge)*(.26+i*.79)*(n.surface==="rail"?.1:1-l*.7)+o+st(n.terrainRoll)*.18+Math.sin(b*3.1)*v*.012+M*.5,-1.08,1.08),bodyTilt:z,boardSwing:V*L,boardFlex:Ue(Math.abs(st(n.pressAmount))*.55+p*.22+st(n.popCharge)*.35+f*.45+m*.16,0,1),snowResponse:Ue(f*.55+m*.5+v*.12,0,1),boardYaw:n.boardYaw??n.heading,bodyYaw:n.torsoYaw??n.heading,bodySpin:(n.torsoRotation??n.torsoYaw??n.heading)-(n.heading??0)-(n.switchRiding?Math.PI:0),boardBodyRotation:(n.boardRotation??n.boardYaw??n.heading)-(n.torsoRotation??n.torsoYaw??n.heading),bob:J,boardBob:F,airborne:l,airOpen:u,flickBite:A,boardPitch:l*c*.18+W*.34+(n.terrainPitch??0)*.6+(n.noseFloat??0)*.12+(n.pressAmount??0)*.15,boardSlip:Ue(n.slipAngle??0,-.75,.75),boardTweak:Ue(n.tweak??0,-1,1)*1.35,butter:Ue(n.butter??0,0,1),press:Ue((n.pressAmount??0)+(n.butter??0)*.7,-1,1),crouch:X,fallRotation:n.crashed?(Math.sign(n.crashSpin)||1)*he:0,crashCollapse:H,crashSit:G,crashRecovery:n.crashed?Ue((1.25-N)/1.25,0,1):0,foreAft:Ue(((n.frontFootPressure??.5)-.5)*2-(n.noseFloat??0)*.24,-1,1),handDrag:Ue((Math.abs(n.lean??0)-.62)*1.4+_*.5+(n.washout??0)*.15,0,1),grab:l*_,jumpStretch:Ue(h+W*.58+u*.33+l*w*.32,0,1),lean:Ue(z/.78,-1.04,1.04),legOffset:Ue(st(n.legOffset),-on,On),spray:l?0:Ue((n.crashed?1:0)+g*.92+x*.24+t*.025+m*(n.surface==="powder"?.24:.08)+Ue((n.landingImpact??0)/9,0,.35),0,1),scarfFlutter:Ue((n.speed??0)/34,0,1)*Math.sin((Number(n.elapsed)||0)*(5+(n.speed??0)*.18)),stance:n.stance??"regular",switchRiding:!!n.switchRiding,toeSide:D,headLook:Ue(st(e.carve)*.7+st(n.turnRate)*.08+Math.sin(r*.43+Math.sin(r*.19))*.05*(1-t),-1,1),handDrift:oe,clothFlutter:Ue(st(n.speed)/34,0,1)*(Math.sin(r*st(n.speed)*1.7)*.6+Math.sin(r*st(n.speed)*2.63+.5)*.25),breath:Math.sin(r*1.67)*.5,hipTwist:Ue(V*.68,-1,1),shoulderTwist:Ue(-V*.16-st(n.edge)*.08,-.45,.45),armLag:0,clothLag:0,stumble:pe,airStyle:0,flourish:"",spineHinge:0,spineSide:0,spineTwist:0,stylePitch:0,styleRoll:0,styleYaw:0,upperBodyTwist:n.edge*-.22-Math.sign(n.edge)*x*.08+Ue(e.steer??0,-1,1)*.025})}var LS=()=>({value:0,velocity:0}),bn=(n,e,t,i,s=.74)=>{let r=Math.max(1,Math.ceil(i*120)),o=i/r,a=t*Math.PI*2;for(let l=0;l<r;l+=1){let c=(e-n.value)*a**2-2*s*a*n.velocity;n.velocity+=c*o,n.value+=n.velocity*o}return n.value},NS=(n,e,t,i,s)=>{let r=Math.max(1,Math.ceil(i*120)),o=i/r,a=t*Math.PI*2;for(let l=0;l<r;l+=1){let c=-e-n.value*a**2-2*s*a*n.velocity;n.velocity+=c*o,n.value+=n.velocity*o}return n.value},DS=["airStyle","arm","cloth","crouch","float","grab","head","hinge","hips","lean","shoulders","side","stumble","sway","swing","twist"],hm=()=>Object.fromEntries(DS.map(n=>[n,LS()])),um=()=>({active:"",age:0,calm:0,count:0,ease:0,gap:Uu(0),jumps:0,rising:void 0,wasAirborne:!1});function dm(){let n=hm(),e=um(),t=!1,i=0,s=0,r=1/0,o=0;return Object.freeze({reset(){n=hm(),e=um(),t=!1,i=0,s=0,r=1/0,o=0},step(a,l={},c=0){let h=IS(a,l),d=Ue(st(c),0,.1),u=Ue(st(l.steer),-1,1),f=Ue(st(l.carve),-1,1),p=Ue(st(l.crouch),0,1),x=st(a.elapsed),g=st(a.speed),m=Ue((g-8)/22,0,1),v=Math.abs(u)>.05&&h.butter<.5?Math.sign(u):0;v!==0&&v!==i?(s=0,r=1/0):v!==0&&(s+=d),v===0&&i!==0&&(r=0,o=i),v===0&&r<.3&&(r+=d),i=v;let S=h.boardSwing;v!==0&&s<.05&&(S*=.45+s/.05*.55),v===0&&r<.3&&(S-=o*.12*Math.sin(Math.PI*r/.3)),t||(n.crouch.value=h.crouch,n.lean.value=h.bodyTilt,n.sway.value=h.bodyTilt,t=!0);let M=st(a.air)<.3&&!a.crashed&&g>6&&Math.abs(u)<.1&&Math.abs(f)<.15&&p<.1&&Math.abs(st(a.edge))<.22&&st(a.slash)<.1&&h.stumble<.25;e.ease+=(Number(M)-e.ease)*(1-Math.exp(-d*(M?2.5:9)));let _=e.ease*(1-m*.45);e.calm=M?e.calm+d:0,!e.active&&e.calm>=e.gap&&h.airborne<=0&&(e.active=cm(e.count),e.age=0);let w={};if(e.active){e.age+=d;let ce=e.age/Fu[e.active].seconds;ce<1?w=Fu[e.active].at(ce):(e.active="",e.calm=0,e.count+=1,e.gap=Uu(e.count))}let y=ce=>st(w[ce])*_;h.airborne>0&&!e.wasAirborne&&(e.jumps+=1),e.wasAirborne=h.airborne>0;let I=st(a.verticalVelocity)<0?Ue(1-(st(a.air)-.25)/.7,0,1):0,A=(1-Ue(Math.abs(st(a.tweak))*3,0,1))*(1-p)*(1-Math.abs(u))*(1-Ue(Math.abs(st(a.spinVelocity))/2.5,0,1)),P=Ue(bn(n.airStyle,a.crashed?0:h.airborne*A*(1-I)*Ue((st(a.airtime)-.1)/.25,0,1),3.2,d,.85),0,1),z=e.jumps%2===0?-1:1,V=y("styleYaw")+z*P*.24,L=y("styleRoll")-z*P*.07,W=y("stylePitch")-P*.05,D=Math.sin(x*1.8+.15)**2*.04*e.ease,F=bn(n.head,h.headLook+y("headLook"),5.5,d),J=bn(n.hips,(S+V)*.68,4,d,.5),N=bn(n.shoulders,h.shoulderTwist+J*.12,1.5,d),k=bn(n.arm,-S*.23-N*.4,1.7,d),H=bn(n.cloth,-S*.9-J*.22,1.8,d,.68),G=bn(n.lean,h.bodyTilt,3,d),he=Ue(h.crouch+D+y("crouch")+P*.07,0,1),X=Ue(bn(n.crouch,he,he>n.crouch.value?6.5:1.9,d,.7),0,1),oe=bn(n.stumble,h.stumble,2.4,d),pe=bn(n.grab,h.grab,h.grab>n.grab.value?5.5:4,d,.86),xe=bn(n.twist,Ue(f*.2-S*.18-z*P*.2,-.6,.6),2.4,d,.8),re=bn(n.hinge,Ue(st(a.compression),0,1)*.2+Ue(st(a.bumpImpact),0,1)*.12+h.flickBite*.1+m*.05+h.breath*.012*e.ease+y("spineHinge"),3.4,d,.7),me=bn(n.side,Math.max(0,G)*.12+Math.min(0,G)*.06+h.press*.14+z*P*.08+y("spineSide"),2.6,d,.8),Ye=st(a.worldVerticalVelocity,st(a.verticalVelocity))-n.crouch.velocity*.8,Ie=d>0&&e.rising!==void 0?Ue((Ye-e.rising)/d,-35,35):0;d>0&&(e.rising=Ye);let Ve=Ue(NS(n.float,Ie,2,d,.45),-.28,.28),Fe=G-bn(n.sway,G,1.9,d,.5),q=bn(n.swing,-(S+V)*.5,3,d,.42),ae=Du({airborne:h.airborne,airOpen:h.airOpen,airStyle:P,collapse:h.crashCollapse,crouch:X,drift:h.handDrift*e.ease,elapsed:x,float:Ve,lead:w.lead&&{x:w.lead.x*_,y:w.lead.y*_,out:w.lead.out*_},lift:h.jumpStretch,speed:m,stumble:Ue(oe,0,1),sway:Fe,swing:q,tilt:G,trail:w.trail&&{x:w.trail.x*_,y:w.trail.y*_,out:w.trail.out*_}});return Object.freeze({...h,airStyle:P,armLag:k,arms:ae,bodyTilt:G,boardSwing:S,clothLag:H,crouch:X,flourish:_>.5?e.active:"",foreAft:Ue(h.foreAft+y("foreAft"),-1,1),grab:Ue(pe,0,1),headLook:F,hipTwist:J,lean:Ue(G/.78,-1.04,1.04),shoulderTwist:N,spineHinge:re,spineSide:me,spineTwist:xe,stumble:oe,stylePitch:W,styleRoll:L,styleYaw:V,upperBodyTwist:N})}})}No();var FS=1/20,US=4,OS=8,BS=6.2,zS=2.3,kS=1.3,HS=2.55,GS=3.8,VS=1,WS=.25,XS=15,qS=20,YS=3,ZS=5.8,JS=3.7,KS=.35,Ns=(n,e,t)=>Math.min(t,Math.max(e,n)),Ot=(n,e=0)=>Number.isFinite(n)?n:e,fm=(n,e=0,t=1,i=0)=>Object.freeze({dip:i,position:Object.freeze(n),roll:e,zoom:t});function Ou(n={}){let e=n.position??{};return fm({across:Ot(e.across),downhill:Ot(e.downhill)},Ot(n.roll),Ot(n.zoom,1),Ot(n.dip))}function pm(n,e,t=0,i=void 0){let s=Ns(Ot(t),0,FS),r=1-Math.exp(-US*s),o=Ot(e.heading),a=Ot(e.position?.across)+Math.sin(o)*2,l=Ot(e.position?.downhill)+OS,c=fm({across:n.position.across+(a-n.position.across)*r,downhill:n.position.downhill+(l+Ns(Ot(e.air),0,2)*1.5-n.position.downhill)*r},Ot(n.roll)+(Ns(Ot(e.lean)*.04,-.045,.045)-Ot(n.roll))*(1-Math.exp(-2.8*s)),Ot(n.zoom,1)+(1-Ns(Ot(e.speed)/34,0,1)*.14-Ot(n.zoom,1))*(1-Math.exp(-2*s)),Ot(n.dip)+(Ns(Ot(e.landingImpact)/9,0,1)-Ot(n.dip))*(1-Math.exp(-8*s)));if(typeof i?.height!="function")return c;let h=Ot(e.position?.across),d=Ot(e.position?.downhill),u=(P,z)=>i.height(P,z),f=Fi(u,h,d),p=Ns(Ot(e.air)/2,0,1),x=c.position.across-kS,g=d-BS-p*zS,m=h+YS+Math.sin(o)*ZS,v=d+XS+p*qS,S=Ot(e.worldHeight,f+Ot(e.air)),M=Math.max(Fi(u,x,g)+HS,S+p*GS)-f,_=Fi(u,m,v)+JS-f,w=1-Math.exp(-s/KS),y=Number.isFinite(n.rise)?n.rise+(M-n.rise)*w:M,b=Number.isFinite(n.lookRise)?n.lookRise+(_-n.lookRise)*w:_,I=Math.max(f+y-Ns(c.dip,0,1)*WS,i.height(x,g)+VS),A=f+b;return Object.freeze({...c,height:I,lookHeight:A,lookRise:b,rig:Object.freeze({position:Object.freeze({x,y:I,z:-g}),target:Object.freeze({x:m,y:A,z:-v})}),rise:y})}var mm=new Set(["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","KeyA","KeyD","KeyS","KeyW","Space"]),$S=new Set(["ArrowUp","Space"]);function gm(n=window){let e=new Set,t=!1,i=o=>{mm.has(o.code)&&(o.preventDefault(),$S.has(o.code)&&!e.has(o.code)&&(t=!0),e.add(o.code))},s=o=>{mm.has(o.code)&&(o.preventDefault(),e.delete(o.code))},r=()=>{t=!1,e.clear()};return n.addEventListener("keydown",i),n.addEventListener("keyup",s),n.addEventListener("blur",r),Object.freeze({destroy(){t=!1,e.clear(),n.removeEventListener("keydown",i),n.removeEventListener("keyup",s),n.removeEventListener("blur",r)},read(){let o=e.has("ArrowLeft"),a=e.has("ArrowRight"),l=e.has("KeyA"),c=e.has("KeyD"),h=e.has("ArrowDown"),d=e.has("KeyW"),u=e.has("KeyS"),f=e.has("ArrowUp"),p=t;return t=!1,Object.freeze({carve:Number(c)-Number(l),crouch:Number(h),jump:Number(p),press:Number(u)-Number(d),steer:Number(a)-Number(o),stretch:Number(f)})}})}cc();ru();Bo();var jS=1/120,Wn=(n,e,t)=>Math.min(t,Math.max(e,n)),QS=n=>{if(!(n>0))return Object.freeze({count:0,step:0});let e=Math.ceil(n/jS-1e-6);return Object.freeze({count:e,step:n/e})},_m=(n,e)=>{if(!Number.isFinite(e)||e<=0||n.crashed)return n;let t=Rs(n.position.downhill),i=Wn(e,t.min,t.max),s=Math.hypot(n.velocity.across,n.velocity.downhill),r=i/Math.max(s,.001),o=n.grounded&&Number.isFinite(n.hillRate);return Mr({...n,hillRate:o?n.hillRate*r:null,worldVerticalVelocity:o?n.worldVerticalVelocity+n.hillRate*(r-1):n.worldVerticalVelocity,velocity:{across:n.velocity.across*r,downhill:n.velocity.downhill*r}})};async function Bu(n){let e=gm(window),t=n.runtime?.world3d?{beginFrame(){},draw(){}}:Mp(n.canvas),i=dm(),s=Object.freeze({surface:"powder",surfaceHeight:Nt}),r=Object.freeze({height:(m,v)=>Nt(m,v,s.surface)}),o="regular",a=Ou(),l=Object.freeze({carve:0,crouch:0,press:0,steer:0,stretch:0}),c=!1,h=0,d,u=0,f=0,p,x=Mr({surface:s.surface});n.events.addEventListener("rider:input",m=>{Number(m.detail?.jump)>0&&(c=!0),l=Object.freeze({carve:Wn(Number(m.detail?.carve)||0,-1,1),crouch:Wn(Number(m.detail?.crouch)||0,0,1),press:Wn(Number(m.detail?.press)||0,-1,1),steer:Wn(Number(m.detail?.steer)||0,-1,1),stretch:Wn(Number(m.detail?.stretch)||0,0,1)})}),n.events.addEventListener("rider:surface",m=>{s=Object.freeze({slopeGrade:Number.isFinite(m.detail?.slopeGrade)?m.detail.slopeGrade:void 0,surface:m.detail?.surface??s.surface,surfaceHeight:Nt})}),n.events.addEventListener("rider:pace",m=>{if(!Number.isFinite(m.detail?.targetSpeed))return;let v=Rs(x.position.downhill);d={holdSeconds:Math.max(0,Number(m.detail?.holdSeconds)||0),targetSpeed:Wn(m.detail.targetSpeed,v.min,v.max)}}),n.events.addEventListener("rider:stance",m=>{o=m.detail?.stance==="goofy"?"goofy":"regular",x=Mr({...x,stance:o})}),n.events.addEventListener("rider:reset",m=>{i.reset(),a=Ou(),p=void 0,c=!1,h=0,d=void 0,u=0,f=0,x=Mr({speed:Number(m.detail?.speed)||16,stance:o,surface:s.surface})}),n.events.addEventListener("rider:impact",m=>{x=Bp(x,m.detail),h=0,c=!1});let g=m=>{let v=e.read(),S=Object.freeze({carve:Wn(v.carve+l.carve,-1,1),crouch:Math.max(v.crouch,l.crouch),jump:Math.max(v.jump,Number(c)),press:Wn(v.press+l.press,-1,1),steer:Wn(v.steer+l.steer,-1,1),stretch:Math.max(v.stretch,l.stretch)});c=!1;let M=p===void 0?0:Wn((m-p)/1e3,0,.1);p=m,d&&x.air<=.08&&(x=_m(x,d.targetSpeed),f=d.targetSpeed,u=d.holdSeconds,d=void 0);let _=x.crashed;h=Math.max(h,S.jump);let w=QS(M),y=0;for(let V=0;V<w.count;V+=1)y=Math.max(y,h),x=kp(x,{...S,jump:h},w.step,{...s,lipDistance:Hp(x.position.across,x.position.downhill)}),u>0&&x.speed>f&&(x=_m(x,f)),u=Math.max(0,u-w.step),h=0;let b=Object.freeze({...S,jump:y});!_&&x.crashed&&(n.events.dispatchEvent(new CustomEvent("rider:crash",{detail:x})),x.crashReason==="edge-catch"&&n.events.dispatchEvent(new CustomEvent("rider:edge-catch",{detail:x}))),a=pm(a,x,M,r);let I=i.step(x,b,M),A=Wn((x.impactMeter-70)/30,0,1),P=A>0?`saturate(${1-A*.78}) contrast(${1+A*.08})`:"";n.worldCanvas?.style&&(n.worldCanvas.style.filter=P),n.canvas?.style&&(n.canvas.style.filter=P),t.beginFrame();let z=x;n.events.dispatchEvent(new CustomEvent("rider:update",{detail:Object.freeze({camera:a,input:b,pose:I,state:x})})),x!==z&&(I=i.step(x,b,0)),t.draw({camera:a,pose:I,state:x}),requestAnimationFrame(g)};n.events.addEventListener("ready",()=>requestAnimationFrame(g),{once:!0})}var mc=n=>{let e=document.querySelector(n);if(!e)throw new Error(`Shared game mount is missing: ${n}`);return e},xm=Object.freeze({canvas:mc("#game-canvas"),worldCanvas:mc("#world-canvas"),runtime:{world3d:null},events:new EventTarget,hudRoot:mc("#hud-root"),overlayRoot:mc("#overlay-root")}),eb=async()=>{for(let n of[Nu,Cu,Bu])await n(xm);xm.events.dispatchEvent(new Event("ready"))};eb();})();
