// Slopestyle source fingerprint: c364cac745958b212ab716678226eec68ef95856af9a1b92bdc4c2e03dbb6792
(()=>{var Vm=Object.defineProperty;var kn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var Wm=(n,e)=>{for(var t in e)Vm(n,t,{get:e[t],enumerable:!0})};function Ku(n){return Yo(n)}function qm(n,e){let t=Math.max(0,Number.isFinite(n)?n:0),i=Math.max(0,Number.isFinite(e)?e:0);return 1+.07*(Math.sin((t+i)*.046+.3)-Math.sin(t*.046+.3))}function qo(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.11)*.45+Math.sin(e*.38)*.18}function Zm(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.min(3,Math.floor(e/72))}function Sc(n){let e=Math.floor(Math.max(0,Number.isFinite(n)?n:0)/36);return Ju[Math.floor(e/4)%Ju.length]}function Yo(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.035-.5)*2.8+Math.sin(e*.082+.7)}function Jm(n,{halfWidth:e=24,seed:t=1}={}){if(!Number.isInteger(n)||n<0)throw new RangeError("Chunk index must be a non-negative integer");if(!Number.isFinite(e)||e<=0)throw new RangeError("Slope half-width must be positive and finite");let i=Zm(n*36),s=Sc(n*36),o={summit:7,forest:15,rocky:10,glow:9}[s]+i*2,a=Array.from({length:o},(l,c)=>{let h=Lr(t,n,c,4)<.5?-1:1,u=36/o,d=n*36+(c+.3+Lr(t,n,c,0)*.4)*u,f=2.2+Lr(t,n,c,1)*17,p={summit:.46,forest:.1,rocky:.68,glow:.22}[s];return Object.freeze({kind:Lr(t,n,c,2)<p?"rock":"pine",size:.72+Lr(t,n,c,3)*.75,x:h*(e+f),z:d})});return Object.freeze({biome:s,index:n,tier:i,scenery:Object.freeze(a)})}function Zo(n,e,t={}){if(!Number.isFinite(e)||e<0)throw new RangeError("View distance must be non-negative and finite");let i=Math.max(0,Number.isFinite(n)?n:0),s=Math.floor(i/36),r=Math.floor((i+e)/36);return Array.from({length:r-s+1},(o,a)=>Ym(s+a,t))}function Fr(n,e){let t=Dr((e/n.height-.36)/.64,0,1);return n.width*(.058+.285*t**1.16)}function $u(n,e,t,i=1,s=24){let r=(e-t)*14*Dr(i||1,.82,1),o=Math.max(1,Fr(n,n.height*.78));return e-r*s/o}function ri(n,e,t,{halfWidth:i=24,travel:s=0,viewDistance:r=44}={}){let o=Dr(t.z,0,r),a=1-o/r,l=a*a*(3-2*a),c=n.height*(.36+l*(.78-.36)),h=.23+l*.77,u=Dr(o/7,0,1),d=u*u*(3-2*u),f=(qo(s+o)-qo(s))*d,p=c-f*h*n.height*.045,y=Fr(n,p)*(1+(qm(s,o)-1)*d),m=(Ku(s+o)-Ku(s))*d;return Object.freeze({alpha:Dr(l*1.6+.2,0,1),pathHalf:y,scale:h,x:n.width/2+(t.x-e+m)/i*y,y:p})}var Ju,Dr,Xm,Lr,Nr,Ym,Jo=kn(()=>{Ju=Object.freeze(["summit","forest","rocky","glow"]),Dr=(n,e,t)=>Math.min(t,Math.max(e,n)),Xm=n=>{let e=n|0;return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),(e^e>>>16)>>>0},Lr=(n,e,t,i)=>Xm(n^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507)^i)/4294967296;Nr=new Map,Ym=(n,e)=>{let t=[n,e.halfWidth??24,e.seed??1].join(":"),i=Nr.get(t);return i||(i=Jm(n,e),Nr.set(t,i),Nr.size>32&&Nr.delete(Nr.keys().next().value)),i}});function Km(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $m(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pf(){let n=Zr("canvas");return n.style.display="block",n}function Ph(...n){let e="THREE."+n.shift();hr?hr("log",e,...n):console.log(e,...n)}function mf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=mf(n);let e="THREE."+n.shift();if(hr)hr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=mf(n);let e="THREE."+n.shift();if(hr)hr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Gr(...n){let e=n.join(" ");e in ju||(ju[e]=!0,je(...n))}function gf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Sr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function jm(n,e){return(n%e+e)%e}function wc(n,e,t){return(1-t)*n+t*e}function xf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qm(n,e){if(e.constructor===Float32Array)return n;let t=Lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function e0(n,e){if(e.constructor===Float32Array)return n;let t=Lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}function t0(){let n={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===It&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qr]:{primaries:e,whitePoint:i,transfer:Yr,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:It,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),n}function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Da.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}function Ic(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Bc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function _0(n,e,t,i,s,r,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ds,a),l===null)return null;ha.copy(a),ha.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:n}}function ua(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,oa),n.getVertexPosition(l,aa),n.getVertexPosition(c,la);let h=_0(n,e,t,i,oa,aa,la,dd);if(h){let u=new O;ss.getBarycoord(dd,oa,aa,la,u),s&&(h.uv=ss.getInterpolatedAttribute(s,a,l,c,u,new Ue)),r&&(h.uv1=ss.getInterpolatedAttribute(r,a,l,c,u,new Ue)),o&&(h.normal=ss.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};ss.getNormal(oa,aa,la,d.normal),h.face=d,h.barycoord=u}return h}function pa(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(za.fromBufferAttribute(a,s),ka.fromBufferAttribute(a,r),t.distanceSqToSegment(za,ka,Wc,md)>i)return;Wc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wc);if(!(c<e.near||c>e.far))return{distance:c,point:md.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}function yd(n,e,t,i,s,r,o){let a=Qc.distanceSqToPoint(n);if(a<t){let l=new O;Qc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Nh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Sd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function y0(n,e){let t=1-n;return t*t*e}function v0(n,e){return 2*(1-n)*n*e}function M0(n,e){return n*n*e}function Vr(n,e,t,i){return y0(n,e)+v0(n,t)+M0(n,i)}function S0(n,e){let t=1-n;return t*t*t*e}function b0(n,e){let t=1-n;return 3*t*t*n*e}function w0(n,e){return 3*(1-n)*n*n*e}function E0(n,e){return n*n*n*e}function Wr(n,e,t,i,s){return S0(n,e)+b0(n,t)+w0(n,i)+E0(n,s)}function T0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=vf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=P0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return po(r,o,t,a,l,c,0),o}function vf(n,e,t,i,s){let r;if(s===G0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=wd(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=wd(o/i|0,n[o],n[o+1],r);return r&&gr(r,r.next)&&(go(r),r=r.next),r}function Es(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(gr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(go(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function po(n,e,t,i,s,r,o){if(!n)return;!o&&r&&O0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?R0(n,i,s,r):A0(n)){e.push(l.i,n.i,c.i),go(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=C0(Es(n),e),po(n,e,t,i,s,r,2)):o===2&&I0(n,e,t,i,s,r):po(Es(n),e,t,i,s,r,1);break}}}function A0(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Hr(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function R0(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),y=Math.max(a,l,c),m=Math.max(h,u,d),g=eh(f,p,e,t,i),v=eh(y,m,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=v;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Hr(a,h,l,u,c,d,S.x,S.y)&&Wt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=y&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Hr(a,h,l,u,c,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Hr(a,h,l,u,c,d,S.x,S.y)&&Wt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=y&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Hr(a,h,l,u,c,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function C0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!gr(i,s)&&Sf(i,t,t.next,s)&&mo(i,s)&&mo(s,i)&&(e.push(i.i,t.i,s.i),go(t),go(t.next),t=n=s),t=t.next}while(t!==n);return Es(t)}function I0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&z0(o,a)){let l=bf(o,a);o=Es(o,o.next),l=Es(l,l.next),po(o,e,t,i,s,r,0),po(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function P0(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=vf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(B0(c))}s.sort(L0);for(let r=0;r<s.length;r++)t=N0(s[r],t);return t}function L0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function N0(n,e){let t=D0(n,e);if(!t)return e;let i=bf(t,n);return Es(i,i.next),Es(t,t.next)}function D0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(gr(n,t))return t;do{if(gr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Mf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);mo(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&F0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function F0(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function O0(n,e,t,i){let s=n;do s.z===0&&(s.z=eh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,U0(s)}function U0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function eh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function B0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Mf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Hr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Mf(n,e,t,i,s,r,o,a)}function z0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!k0(n,e)&&(mo(n,e)&&mo(e,n)&&H0(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||gr(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gr(n,e){return n.x===e.x&&n.y===e.y}function Sf(n,e,t,i){let s=xa(Wt(n,e,t)),r=xa(Wt(n,e,i)),o=xa(Wt(t,i,n)),a=xa(Wt(t,i,e));return!!(s!==r&&o!==a||s===0&&_a(n,t,e)||r===0&&_a(n,i,e)||o===0&&_a(t,n,i)||a===0&&_a(t,e,i))}function _a(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xa(n){return n>0?1:n<0?-1:0}function k0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Sf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function mo(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function H0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function bf(n,e){let t=th(n.i,n.x,n.y),i=th(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function wd(n,e,t,i){let s=th(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function go(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function th(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function Ed(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Td(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function V0(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function Ps(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Ad(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ad(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function An(n){let e={};for(let t=0;t<n.length;t++){let i=Ps(n[t]);for(let s in i)e[s]=i[s]}return e}function Ad(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function W0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}function ir(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ya(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Ef(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Y0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Z0(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Ef(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Y0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Rd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Cd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function Uh(n,e,t,i){let s=ig(i);switch(t){case wh:return n*e;case Th:return n*e/s.components*s.byteLength;case xl:return n*e/s.components*s.byteLength;case fs:return n*e*2/s.components*s.byteLength;case yl:return n*e*2/s.components*s.byteLength;case Eh:return n*e*3/s.components*s.byteLength;case mi:return n*e*4/s.components*s.byteLength;case vl:return n*e*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case wl:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case bl:return Math.max(n,8)*Math.max(e,8)/2;case El:case Tl:case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Al:case Po:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lo:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ig(n){switch(n){case On:case vh:return{byteLength:1,components:1};case Mr:case Mh:case pi:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case di:case ml:case fi:return{byteLength:4,components:1};case Sh:case bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Dd,oh,Fd,Ts,Od,xr,ds,Sn,tn,As,yr,ah,lh,ch,Ud,Rs,Bd,zd,kd,Hd,Gd,Vd,Wd,Xd,hh,uh,qd,Yd,Zd,Jd,Kd,$d,jd,Qd,ef,wa,Ea,Ta,lr,Aa,Ra,Ca,Ia,dh,tf,nf,wi,fh,ph,mh,Eo,gh,_h,xh,yh,Cs,vr,dl,fl,ws,Mi,Pa,_n,sf,To,Cn,pl,ki,On,vh,Mh,Mr,ml,di,fi,pi,gl,_l,Is,Sh,bh,wh,Eh,mi,Oi,Hi,Th,xl,fs,yl,vl,Ao,Ro,Co,Io,Ml,Sl,bl,wl,El,Tl,Al,Rl,Cl,Po,Il,Pl,Ll,Nl,Dl,Fl,Ol,Ul,Bl,zl,kl,Hl,Gl,Vl,Wl,Xl,ql,Yl,Zl,Jl,Lo,Kl,Xr,La,Sa,Jc,Kc,$c,jc,rf,$l,of,Gi,Tn,qr,Yr,It,ba,af,lf,cf,hf,Ah,uf,df,Rh,Ch,ff,Ih,Qn,cr,ju,hr,_f,Si,wn,bc,Na,Bh,Ue,Vn,zh,O,Ec,Qu,kh,lt,Tc,ed,td,St,Ys,Da,n0,ur,i0,Rc,In,Hh,Gt,Fa,Wn,Jr,Oa,ul,Ct,Zs,oi,s0,r0,Qi,Ko,Hn,nd,id,hi,Kr,o0,sd,Js,Ii,$o,Or,a0,l0,rd,od,ad,ld,c0,Ks,Cc,en,Ft,h0,dr,yf,es,jo,$e,En,$r,jr,ai,Pi,Pc,Li,$s,js,cd,Lc,Nc,Dc,Fc,Oc,Uc,ss,rs,Ni,li,Qo,Qs,er,tr,ts,ns,vs,Ur,ea,ta,Ms,Qt,na,u0,ln,Qr,eo,ft,d0,Br,zc,os,f0,jn,kc,nr,Gn,zr,gn,Ut,Hc,p0,m0,ci,g0,bi,Di,Gc,ia,sa,fr,Fn,hd,Ss,ra,ud,oa,aa,la,Vc,ca,dd,ha,jt,Ua,bs,x0,da,as,fd,Ba,pr,za,ka,pd,kr,fa,Wc,md,Ha,gd,_d,to,Ga,xd,Qc,ma,ga,no,io,so,Ui,ro,oo,Pt,ao,ei,Bi,Va,ui,Xn,mr,Wa,vd,Md,Xc,qc,Yc,Xa,lo,qa,co,Ya,ho,Za,uo,bd,Ja,fo,zi,nh,ar,_o,ls,xo,wf,X0,q0,ti,Ka,Mn,$a,ja,cs,Qa,el,tl,nl,qn,hs,il,sl,rl,yo,us,ol,al,Tf,ll,vo,Mo,Zc,Id,Pd,cl,va,Ma,vi,So,is,Ld,Nd,Rn,bo,ih,wo,sr,rr,_r,hl,Fh,J0,Oh,K0,$0,j0,Q0,eg,tg,ng,sh,Ht,Zb,Gh,rh,Vh=kn(()=>{Dd=0,oh=1,Fd=2,Ts=1,Od=2,xr=3,ds=0,Sn=1,tn=2,As=0,yr=1,ah=2,lh=3,ch=4,Ud=5,Rs=100,Bd=101,zd=102,kd=103,Hd=104,Gd=200,Vd=201,Wd=202,Xd=203,hh=204,uh=205,qd=206,Yd=207,Zd=208,Jd=209,Kd=210,$d=211,jd=212,Qd=213,ef=214,wa=0,Ea=1,Ta=2,lr=3,Aa=4,Ra=5,Ca=6,Ia=7,dh=0,tf=1,nf=2,wi=0,fh=1,ph=2,mh=3,Eo=4,gh=5,_h=6,xh=7,yh=300,Cs=301,vr=302,dl=303,fl=304,ws=1e3,Mi=1001,Pa=1002,_n=1003,sf=1004,To=1005,Cn=1006,pl=1007,ki=1008,On=1009,vh=1010,Mh=1011,Mr=1012,ml=1013,di=1014,fi=1015,pi=1016,gl=1017,_l=1018,Is=1020,Sh=35902,bh=35899,wh=1021,Eh=1022,mi=1023,Oi=1026,Hi=1027,Th=1028,xl=1029,fs=1030,yl=1031,vl=1033,Ao=33776,Ro=33777,Co=33778,Io=33779,Ml=35840,Sl=35841,bl=35842,wl=35843,El=36196,Tl=37492,Al=37496,Rl=37488,Cl=37489,Po=37490,Il=37491,Pl=37808,Ll=37809,Nl=37810,Dl=37811,Fl=37812,Ol=37813,Ul=37814,Bl=37815,zl=37816,kl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,Zl=36283,Jl=36284,Lo=36285,Kl=36286,Xr=2300,La=2301,Sa=2302,Jc=2303,Kc=2400,$c=2401,jc=2402,rf=3200,$l=0,of=1,Gi="",Tn="srgb",qr="srgb-linear",Yr="linear",It="srgb",ba=7680,af=519,lf=512,cf=513,hf=514,Ah=515,uf=516,df=517,Rh=518,Ch=519,ff=35044,Ih="300 es",Qn=2e3,cr=2001;ju={},hr=null;_f={[wa]:wa,[Ta]:Ca,[Aa]:Aa,[lr]:Ra,[Ea]:Ea,[Ca]:Ta,[Ia]:Ia,[Ra]:lr},Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,Na=180/Math.PI;Bh=class Bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bh.prototype.isVector2=!0;Ue=Bh,Vn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(u!==y||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*y;m<0&&(d=-d,f=-f,p=-p,y=-y,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);g=Math.sin(g*v)/S,a=Math.sin(a*v)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+y*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+y*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zh=class zh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;O=zh,Ec=new O,Qu=new Vn,kh=class kh{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],y=s[0],m=s[3],g=s[6],v=s[1],S=s[4],M=s[7],T=s[2],x=s[5],_=s[8];return r[0]=o*y+a*v+l*T,r[3]=o*m+a*S+l*x,r[6]=o*g+a*M+l*_,r[1]=c*y+h*v+u*T,r[4]=c*m+h*S+u*x,r[7]=c*g+h*M+u*_,r[2]=d*y+f*v+p*T,r[5]=d*m+f*S+p*x,r[8]=d*g+f*M+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kh.prototype.isMatrix3=!0;lt=kh,Tc=new lt,ed=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St=t0();Da=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=Zr("canvas")),Ys.width=e.width,Ys.height=e.height;let s=Ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n0=0,ur=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ac(s[o].image)):r.push(Ac(s[o]))}else r=Ac(s);i.url=r}return t||(e.images[this.uuid]=i),i}};i0=0,Rc=new O,In=class n extends Si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Mi,s=Mi,r=Cn,o=ki,a=mi,l=On,c=n.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Sr(),this.name="",this.source=new ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=yh;In.DEFAULT_ANISOTROPY=1;Hh=class Hh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,T=(g+1)/2,x=(h+d)/4,_=(u+y)/4,w=(p+m)/4;return S>M&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=x/i,r=_/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=x/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=_/r,s=w/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hh.prototype.isVector4=!0;Gt=Hh,Fa=class extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ur(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Fa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jr=class extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Oa=class extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ul=class ul{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,y,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ul().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,y=c*u;t[0]=d+y*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,r0)}lookAt(e,t,i){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Qi.crossVectors(i,Hn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Qi.crossVectors(i,Hn)),Qi.normalize(),Ko.crossVectors(Hn,Qi),s[0]=Qi.x,s[4]=Ko.x,s[8]=Hn.x,s[1]=Qi.y,s[5]=Ko.y,s[9]=Hn.y,s[2]=Qi.z,s[6]=Ko.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],y=i[6],m=i[10],g=i[14],v=i[3],S=i[7],M=i[11],T=i[15],x=s[0],_=s[4],w=s[8],R=s[12],C=s[1],I=s[5],P=s[9],B=s[13],L=s[2],G=s[6],Z=s[10],H=s[14],se=s[3],X=s[7],Y=s[11],le=s[15];return r[0]=o*x+a*C+l*L+c*se,r[4]=o*_+a*I+l*G+c*X,r[8]=o*w+a*P+l*Z+c*Y,r[12]=o*R+a*B+l*H+c*le,r[1]=h*x+u*C+d*L+f*se,r[5]=h*_+u*I+d*G+f*X,r[9]=h*w+u*P+d*Z+f*Y,r[13]=h*R+u*B+d*H+f*le,r[2]=p*x+y*C+m*L+g*se,r[6]=p*_+y*I+m*G+g*X,r[10]=p*w+y*P+m*Z+g*Y,r[14]=p*R+y*B+m*H+g*le,r[3]=v*x+S*C+M*L+T*se,r[7]=v*_+S*I+M*G+T*X,r[11]=v*w+S*P+M*Z+T*Y,r[15]=v*R+S*B+M*H+T*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],y=e[7],m=e[11],g=e[15],v=l*f-c*d,S=a*f-c*u,M=a*d-l*u,T=o*f-c*h,x=o*d-l*h,_=o*u-a*h;return t*(y*v-m*S+g*M)-i*(p*v-m*T+g*x)+s*(p*S-y*T+g*_)-r*(p*M-y*x+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],y=e[13],m=e[14],g=e[15],v=t*a-i*o,S=t*l-s*o,M=t*c-r*o,T=i*l-s*a,x=i*c-r*a,_=s*c-r*l,w=h*y-u*p,R=h*m-d*p,C=h*g-f*p,I=u*m-d*y,P=u*g-f*y,B=d*g-f*m,L=v*B-S*P+M*I+T*C-x*R+_*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return e[0]=(a*B-l*P+c*I)*G,e[1]=(s*P-i*B-r*I)*G,e[2]=(y*_-m*x+g*T)*G,e[3]=(d*x-u*_-f*T)*G,e[4]=(l*C-o*B-c*R)*G,e[5]=(t*B-s*C+r*R)*G,e[6]=(m*M-p*_-g*S)*G,e[7]=(h*_-d*M+f*S)*G,e[8]=(o*P-a*C+c*w)*G,e[9]=(i*C-t*P-r*w)*G,e[10]=(p*x-y*M+g*v)*G,e[11]=(u*M-h*x-f*v)*G,e[12]=(a*R-o*I-l*w)*G,e[13]=(t*I-i*R+s*w)*G,e[14]=(y*S-p*T-m*v)*G,e[15]=(h*T-u*S+d*v)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,y=o*h,m=o*u,g=a*u,v=l*c,S=l*h,M=l*u,T=i.x,x=i.y,_=i.z;return s[0]=(1-(y+g))*T,s[1]=(f+M)*T,s[2]=(p-S)*T,s[3]=0,s[4]=(f-M)*x,s[5]=(1-(d+g))*x,s[6]=(m+v)*x,s[7]=0,s[8]=(p+S)*_,s[9]=(m-v)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let c=1/o,h=1/a,u=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,y;if(l)p=r/(o-r),y=o*r/(o-r);else if(a===Qn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===cr)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Qn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,y;if(l)p=1/(o-r),y=o/(o-r);else if(a===Qn)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===cr)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ul.prototype.isMatrix4=!0;Ct=ul,Zs=new O,oi=new Ct,s0=new O(0,0,0),r0=new O(1,1,1),Qi=new O,Ko=new O,Hn=new O,nd=new Ct,id=new Vn,hi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},o0=0,sd=new O,Js=new Vn,Ii=new Ct,$o=new O,Or=new O,a0=new O,l0=new Vn,rd=new O(1,0,0),od=new O(0,1,0),ad=new O(0,0,1),ld={type:"added"},c0={type:"removed"},Ks={type:"childadded",child:null},Cc={type:"childremoved",child:null},en=class n extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new hi,i=new Vn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new lt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$o.copy(e):$o.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Or,$o,this.up):Ii.lookAt($o,Or,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Ii),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ft=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},h0={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},jo={h:0,s:0,l:0};$e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=jm(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ic(o,r,e+1/3),this.g=Ic(o,r,e),this.b=Ic(o,r,e-1/3)}return St.colorSpaceToWorking(this,s),this}setStyle(e,t=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){let i=yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return St.workingToColorSpace(En.copy(this),e),Math.round(Mt(En.r*255,0,255))*65536+Math.round(Mt(En.g*255,0,255))*256+Math.round(Mt(En.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(En.copy(this),t);let i=En.r,s=En.g,r=En.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Tn){St.workingToColorSpace(En.copy(this),e);let t=En.r,i=En.g,s=En.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(jo);let i=wc(es.h,jo.h,t),s=wc(es.s,jo.s,t),r=wc(es.l,jo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new $e;$e.NAMES=yf;$r=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jr=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ai=new O,Pi=new O,Pc=new O,Li=new O,$s=new O,js=new O,cd=new O,Lc=new O,Nc=new O,Dc=new O,Fc=new Gt,Oc=new Gt,Uc=new Gt,ss=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ai.subVectors(e,t),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ai.subVectors(s,t),Pi.subVectors(i,t),Pc.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(Pi),l=ai.dot(Pc),c=Pi.dot(Pi),h=Pi.dot(Pc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Fc.setScalar(0),Oc.setScalar(0),Uc.setScalar(0),Fc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,i),Uc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fc,r.x),o.addScaledVector(Oc,r.y),o.addScaledVector(Uc,r.z),o}static isFrontFacing(e,t,i,s){return ai.subVectors(i,t),Pi.subVectors(e,t),ai.cross(Pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ai.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,i),js.subVectors(r,i),Lc.subVectors(e,i);let l=$s.dot(Lc),c=js.dot(Lc);if(l<=0&&c<=0)return t.copy(i);Nc.subVectors(e,s);let h=$s.dot(Nc),u=js.dot(Nc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector($s,o);Dc.subVectors(e,r);let f=$s.dot(Dc),p=js.dot(Dc);if(p>=0&&f<=p)return t.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(js,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return cd.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(cd,a);let g=1/(m+y+d);return o=y*g,a=d*g,t.copy(i).addScaledVector($s,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rs=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),ea.subVectors(this.max,Ur),Qs.subVectors(e.a,Ur),er.subVectors(e.b,Ur),tr.subVectors(e.c,Ur),ts.subVectors(er,Qs),ns.subVectors(tr,er),vs.subVectors(Qs,tr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-vs.z,vs.y,ts.z,0,-ts.x,ns.z,0,-ns.x,vs.z,0,-vs.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-vs.y,vs.x,0];return!Bc(t,Qs,er,tr,ea)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Qs,er,tr,ea))?!1:(ta.crossVectors(ts,ns),t=[ta.x,ta.y,ta.z],Bc(t,Qs,er,tr,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new O,new O,new O,new O,new O,new O,new O,new O],li=new O,Qo=new rs,Qs=new O,er=new O,tr=new O,ts=new O,ns=new O,vs=new O,Ur=new O,ea=new O,ta=new O,Ms=new O;Qt=new O,na=new Ue,u0=0,ln=class extends Si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ff,this.updateRanges=[],this.gpuType=fi,this.version=0,this._normalizationScale=e!==void 0?Lh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qm(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):e0(e,this.array)}},Qr=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}},eo=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ft=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},d0=new rs,Br=new O,zc=new O,os=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):d0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(zc)),this.expandByPoint(Br.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},f0=0,jn=new Ct,kc=new en,nr=new O,Gn=new rs,zr=new rs,gn=new O,Ut=class n extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?eo:Qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Gn.min,zr.min),Gn.expandByPoint(gn),gn.addVectors(Gn.max,zr.max),Gn.expandByPoint(gn)):(Gn.expandByPoint(zr.min),Gn.expandByPoint(zr.max))}Gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),gn.add(nr)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)a[R]=new O,l[R]=new O;let h=new O,u=new O,d=new O,f=new Ue,p=new Ue,y=new Ue,m=new O,g=new O;function v(R,C,I){c[R]=c[C]=c[I]=1,h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,I),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,C),y.fromBufferAttribute(r,I),u.sub(h),d.sub(h),p.sub(f),y.sub(f);let P=1/(p.x*y.y-y.x*p.y);isFinite(P)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(P),a[R].add(m),a[C].add(m),a[I].add(m),l[R].add(g),l[C].add(g),l[I].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,C=S.length;R<C;++R){let I=S[R],P=I.start,B=I.count;for(let L=P,G=P+B;L<G;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let M=new O,T=new O,x=new O,_=new O;function w(R){x.fromBufferAttribute(s,R),_.copy(x);let C=a[R];M.copy(C),M.sub(x.multiplyScalar(x.dot(C))).normalize(),T.crossVectors(_,C);let P=T.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,C=i.count;R<C;++R)c[R]&&w(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new ln(d,h,u)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hc=new O,p0=new O,m0=new lt,ci=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Hc.subVectors(i,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Hc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||m0.getNormalMatrix(e),s=this.coplanarPoint(Hc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},g0=0,bi=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=yr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Di=new O,Gc=new O,ia=new O,sa=new O,fr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gc.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),sa.copy(this.origin).sub(Gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=sa.dot(this.direction),l=-sa.dot(ia),c=sa.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gc).addScaledVector(ia,d),f}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),s=Di.dot(Di)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,y=t.y-o.y,m=t.z-o.z,g=i.x-o.x,v=i.y-o.y,S=i.z-o.z,M=Math.abs(l),T=Math.abs(c),x=Math.abs(h),_,w,R,C,I,P,B,L,G,Z,H,se;if(M>=T&&M>=x?(R=l,P=u,G=p,se=g,l>=0?(_=c,w=h,C=d,I=f,B=y,L=m,Z=v,H=S):(_=h,w=c,C=f,I=d,B=m,L=y,Z=S,H=v)):T>=x?(R=c,P=d,G=y,se=v,c>=0?(_=h,w=l,C=f,I=u,B=m,L=p,Z=S,H=g):(_=l,w=h,C=u,I=f,B=p,L=m,Z=g,H=S)):(R=h,P=f,G=m,se=S,h>=0?(_=l,w=c,C=u,I=d,B=p,L=y,Z=g,H=v):(_=c,w=l,C=d,I=u,B=y,L=p,Z=v,H=g)),R===0)return null;let X=_/R,Y=w/R,le=1/R,re=C-X*P,He=I-Y*P,j=B-X*G,de=L-Y*G,Te=Z-X*se,K=H-Y*se,U=Te*de-K*j,q=re*K-He*Te,$=j*He-de*re;if(s){if(U<0||q<0||$<0)return null}else if((U<0||q<0||$<0)&&(U>0||q>0||$>0))return null;let Q=U+q+$;if(Q===0)return null;let ce=le*(U*P+q*G+$*se);return(Q>0?ce<0:ce>0)?null:this.at(ce/Q,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new Ct,Ss=new fr,ra=new os,ud=new O,oa=new O,aa=new O,la=new O,Vc=new O,ca=new O,dd=new O,ha=new O,jt=class extends en{constructor(e=new Ut,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Vc.fromBufferAttribute(u,e),o?ca.addScaledVector(Vc,h):ca.addScaledVector(Vc.sub(t),h))}t.add(ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(ra.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(ra,ud)===null||Ss.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(hd.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(hd),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,T=S;M<T;M+=3){let x=a.getX(M),_=a.getX(M+1),w=a.getX(M+2);s=ua(this,g,e,i,c,h,u,x,_,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let v=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=ua(this,o,e,i,c,h,u,v,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,T=S;M<T;M+=3){let x=M,_=M+1,w=M+2;s=ua(this,g,e,i,c,h,u,x,_,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let v=m,S=m+1,M=m+2;s=ua(this,o,e,i,c,h,u,v,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ua=class extends In{constructor(e=null,t=1,i=1,s,r,o,a,l,c=_n,h=_n,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bs=new os,x0=new Ue(.5,.5),da=new O,as=class{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],v=r[12],S=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,g-p,T-v).normalize(),s[1].setComponents(c+o,f+h,g+p,T+v).normalize(),s[2].setComponents(c+a,f+u,g+y,T+S).normalize(),s[3].setComponents(c-a,f-u,g-y,T-S).normalize(),i)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,g-m,T-M).normalize();else if(s[4].setComponents(c-l,f-d,g-m,T-M).normalize(),t===Qn)s[5].setComponents(c+l,f+d,g+m,T+M).normalize();else if(t===cr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=x0.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fd=new Ct,Ba=class n{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];fd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new as),i[s].setFromProjectionMatrix(fd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new as),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}},pr=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},za=new O,ka=new O,pd=new Ct,kr=new fr,fa=new os,Wc=new O,md=new O,Ha=class extends en{constructor(e=new Ut,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),ka.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=za.distanceTo(ka);e.setAttribute("lineDistance",new ft(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;pd.copy(s).invert(),kr.copy(e.ray).applyMatrix4(pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=f,m=p-1;y<m;y+=c){let g=h.getX(y),v=h.getX(y+1),S=pa(this,e,kr,l,g,v,y);S&&t.push(S)}if(this.isLineLoop){let y=h.getX(p-1),m=h.getX(f),g=pa(this,e,kr,l,y,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let y=f,m=p-1;y<m;y+=c){let g=pa(this,e,kr,l,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=pa(this,e,kr,l,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};gd=new O,_d=new O,to=class extends Ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)gd.fromBufferAttribute(t,s),_d.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gd.distanceTo(_d);e.setAttribute("lineDistance",new ft(i,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ga=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xd=new Ct,Qc=new fr,ma=new os,ga=new O,no=class extends en{constructor(e=new Ut,t=new Ga){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;xd.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,y=f;p<y;p++){let m=c.getX(p);ga.fromBufferAttribute(u,m),yd(ga,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,y=f;p<y;p++)ga.fromBufferAttribute(u,p),yd(ga,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};io=class extends In{constructor(e=[],t=Cs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},so=class extends In{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ui=class extends In{constructor(e,t,i=di,s,r,o,a=_n,l=_n,c,h=Oi,u=1){if(h!==Oi&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ro=class extends Ui{constructor(e,t=di,i=Cs,s,r,o=_n,a=_n,l,c=Oi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oo=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pt=class n extends Ut{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function p(y,m,g,v,S,M,T,x,_,w,R){let C=M/_,I=T/w,P=M/2,B=T/2,L=x/2,G=_+1,Z=w+1,H=0,se=0,X=new O;for(let Y=0;Y<Z;Y++){let le=Y*I-B;for(let re=0;re<G;re++){let He=re*C-P;X[y]=He*v,X[m]=le*S,X[g]=L,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[g]=x>0?1:-1,h.push(X.x,X.y,X.z),u.push(re/_),u.push(1-Y/w),H+=1}}for(let Y=0;Y<w;Y++)for(let le=0;le<_;le++){let re=d+le+G*Y,He=d+le+G*(Y+1),j=d+(le+1)+G*(Y+1),de=d+(le+1)+G*Y;l.push(re,He,de),l.push(He,j,de),se+=6}a.addGroup(f,se,R),f+=se,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ao=class n extends Ut{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,h=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ei=class n extends Ut{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,y=[],m=i/2,g=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function v(){let M=new O,T=new O,x=0,_=(t-e)/i;for(let w=0;w<=r;w++){let R=[],C=w/r,I=C*(t-e)+e;for(let P=0;P<=s;P++){let B=P/s,L=B*l+a,G=Math.sin(L),Z=Math.cos(L);T.x=I*G,T.y=-C*i+m,T.z=I*Z,u.push(T.x,T.y,T.z),M.set(G,_,Z).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-C),R.push(p++)}y.push(R)}for(let w=0;w<s;w++)for(let R=0;R<r;R++){let C=y[R][w],I=y[R+1][w],P=y[R+1][w+1],B=y[R][w+1];(e>0||R!==0)&&(h.push(C,I,B),x+=3),(t>0||R!==r-1)&&(h.push(I,P,B),x+=3)}c.addGroup(g,x,0),g+=x}function S(M){let T=p,x=new Ue,_=new O,w=0,R=M===!0?e:t,C=M===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),p++;let I=p;for(let P=0;P<=s;P++){let L=P/s*l+a,G=Math.cos(L),Z=Math.sin(L);_.x=R*Z,_.y=m*C,_.z=R*G,u.push(_.x,_.y,_.z),d.push(0,C,0),x.x=G*.5+.5,x.y=Z*.5*C+.5,f.push(x.x,x.y),p++}for(let P=0;P<s;P++){let B=T+P,L=I+P;M===!0?h.push(L,L+1,B):h.push(L+1,L,B),w+=3}c.addGroup(g,w,M===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bi=class n extends ei{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Va=class n extends Ut{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new O,M=new O,T=new O;for(let x=0;x<t.length;x+=3)f(t[x+0],S),f(t[x+1],M),f(t[x+2],T),l(S,M,T,v)}function l(v,S,M,T){let x=T+1,_=[];for(let w=0;w<=x;w++){_[w]=[];let R=v.clone().lerp(M,w/x),C=S.clone().lerp(M,w/x),I=x-w;for(let P=0;P<=I;P++)P===0&&w===x?_[w][P]=R:_[w][P]=R.clone().lerp(C,P/I)}for(let w=0;w<x;w++)for(let R=0;R<2*(x-w)-1;R++){let C=Math.floor(R/2);R%2===0?(d(_[w][C+1]),d(_[w+1][C]),d(_[w][C])):(d(_[w][C+1]),d(_[w+1][C+1]),d(_[w+1][C]))}}function c(v){let S=new O;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let v=new O;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let M=m(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;o.push(M,1-T)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let S=o[v+0],M=o[v+2],T=o[v+4],x=Math.max(S,M,T),_=Math.min(S,M,T);x>.9&&_<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function p(){let v=new O,S=new O,M=new O,T=new O,x=new Ue,_=new Ue,w=new Ue;for(let R=0,C=0;R<r.length;R+=9,C+=6){v.set(r[R+0],r[R+1],r[R+2]),S.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),x.set(o[C+0],o[C+1]),_.set(o[C+2],o[C+3]),w.set(o[C+4],o[C+5]),T.copy(v).add(S).add(M).divideScalar(3);let I=m(T);y(x,C+0,v,I),y(_,C+2,S,I),y(w,C+4,M,I)}}function y(v,S,M,T){T<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},ui=class n extends Va{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ue:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new O,s=[],r=[],o=[],a=new O,l=new Ct;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Mt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Mt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},mr=class extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wa=class extends mr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};vd=new O,Md=new O,Xc=new Nh,qc=new Nh,Yc=new Nh,Xa=class extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Md.subVectors(s[0],s[1]).add(s[0]),c=Md);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Xc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,y,m),qc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,y,m),Yc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Yc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Xc.calc(l),qc.calc(l),Yc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};lo=class extends Xn{constructor(e=new Ue,t=new Ue,i=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(e,s.x,r.x,o.x,a.x),Wr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends Xn{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(e,s.x,r.x,o.x,a.x),Wr(e,s.y,r.y,o.y,a.y),Wr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},co=class extends Xn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Xn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends Xn{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(e,s.x,r.x,o.x),Vr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Xn{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(e,s.x,r.x,o.x),Vr(e,s.y,r.y,o.y),Vr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Sd(a,l.x,c.x,h.x,u.x),Sd(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}},bd=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:Xa,CubicBezierCurve:lo,CubicBezierCurve3:qa,EllipseCurve:mr,LineCurve:co,LineCurve3:Ya,QuadraticBezierCurve:ho,QuadraticBezierCurve3:Za,SplineCurve:uo}),Ja=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new bd[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},fo=class extends Ja{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new co(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ho(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new lo(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s),new Ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new uo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new mr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zi=class extends fo{constructor(e){super(e),this.uuid=Sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new fo().fromJSON(s))}return this}};nh=class{static triangulate(e,t,i=2){return T0(e,t,i)}},ar=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ed(e),Td(i,e);let o=e.length;t.forEach(Ed);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Td(i,t[l]);let a=nh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};_o=class n extends Ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let v=g*d-o;for(let S=0;S<c;S++){let M=S*u-r;p.push(M,-v,0),y.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let S=v+c*g,M=v+c*(g+1),T=v+1+c*(g+1),x=v+1+c*g;f.push(S,M,x),f.push(M,T,x)}this.setIndex(f),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ls=class n extends Ut{constructor(e=new zi([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;ar.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];ar.isClockWise(v)===!0&&(p[m]=v.reverse())}let y=ar.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];f=f.concat(v)}for(let m=0,g=f.length;m<g;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=y.length;m<g;m++){let v=y[m],S=v[0]+u,M=v[1]+u,T=v[2]+u;i.push(S,M,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return V0(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};xo=class n extends Ut{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new O,d=new O,f=[],p=[],y=[],m=[];for(let g=0;g<=i;g++){let v=[],S=g/i,M=o+S*a,T=e*Math.cos(M),x=Math.sqrt(e*e-T*T),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let R=w/t,C=s+R*r;u.x=-x*Math.cos(C),u.y=T,u.z=x*Math.sin(C),p.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(R+_,1-S),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let S=h[g][v+1],M=h[g][v],T=h[g+1][v],x=h[g+1][v+1];(g!==0||o>0)&&f.push(S,M,x),(g!==i-1||l<Math.PI)&&f.push(M,T,x)}this.setIndex(f),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};wf={clone:Ps,merge:An},X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ka=class extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mn=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$a=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ja=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $c:r=e,a=2*t-i;break;case jc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:o=e,l=2*i-t;break;case jc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),y=p*p,m=y*p,g=-d*m+2*d*y-d*p,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*y+.5*p,M=f*m-f*y;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+S*o[l+T]+M*o[u+T];return r}},el=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},tl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nl=class extends cs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),y=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let y=o[c+p],m=o[l+p],g=f*d+p*2,v=u[g],S=u[g+1],M=e*d+p*2,T=h[M],x=h[M+1],_=Z0(i,t,v,T,s);r[p]=Ef(_,y,S,x,m)}return r}};qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ya(e.settings)&&(i.settings={inTangents:ir(e.settings.inTangents,Array),outTangents:ir(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case Sa:t=this.InterpolantFactoryMethodSmooth;break;case Jc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Sa;case this.InterpolantFactoryMethodBezier:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ya(this.settings)&&(Rd(this.settings.inTangents,e),Rd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ya(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){rt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$m(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let y=t[u+p];if(y!==t[d+p]||y!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ya(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=La;hs=class extends qn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Xr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;il=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};il.prototype.ValueTypeName="color";sl=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};sl.prototype.ValueTypeName="number";rl=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Vn.slerpFlat(r,0,o,c-a,o,c,l);return r}},yo=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;us=class extends qn{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Xr;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;ol=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};ol.prototype.ValueTypeName="vector";al=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tf=new al,ll=class{constructor(e){this.manager=e!==void 0?e:Tf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";vo=class extends en{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mo=class extends vo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zc=new Ct,Id=new O,Pd=new O,cl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Zc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===cr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},va=new O,Ma=new Vn,vi=new O,So=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(va,Ma,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,Ma,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(va,Ma,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,Ma,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new O,Ld=new Ue,Nd=new Ue,Rn=class extends So{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,Ld,Nd),t.subVectors(Nd,Ld)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bo=class extends So{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=class extends cl{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wo=class extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},sr=-90,rr=1,_r=class extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new Rn(sr,rr,e,t);r.layers=this.layers,this.add(r);let o=new Rn(sr,rr,e,t);o.layers=this.layers,this.add(o);let a=new Rn(sr,rr,e,t);a.layers=this.layers,this.add(a);let l=new Rn(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new Rn(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},hl=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Fh="\\[\\]\\.:\\/",J0=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",K0="[^"+Fh.replace("\\.","")+"]",$0=/((?:WC+[\/:])*)/.source.replace("WC",Oh),j0=/(WCOD+)?/.source.replace("WCOD",K0),Q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),tg=new RegExp("^"+$0+j0+Q0+eg+"$"),ng=["material","materials","bones","map"],sh=class{constructor(e,t,i){let s=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(e){let t=tg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ng.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=sh;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Zb=new Float32Array(1),Gh=class Gh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Gh.prototype.isMatrix2=!0;rh=Gh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Zf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function rg(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function kx(n,e,t,i,s,r){let o=new $e(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(v){let S=!1,M=f(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,S){let M=f(S);M&&M.isCubeTexture?(c===void 0&&(c=new jt(new Pt(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Ps(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,x,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zx.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jf),c.material.toneMapped=St.getTransfer(M.colorSpace)!==It,(h!==M||u!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new jt(new _o(2,2),new ti({name:"BackgroundMaterial",uniforms:Ps(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=St.getTransfer(M.colorSpace)!==It,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(jl,Dh(n)),t.buffers.color.setClear(jl.r,jl.g,jl.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:y,dispose:g}}function Hx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(I,P,B,L,G){let Z=!1,H=u(I,L,B,P);r!==H&&(r=H,c(r.object)),Z=f(I,L,B,G),Z&&p(I,L,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(I,P,B,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function u(I,P,B,L){let G=L.wireframe===!0,Z=i[P.id];Z===void 0&&(Z={},i[P.id]=Z);let H=I.isInstancedMesh===!0?I.id:0,se=Z[H];se===void 0&&(se={},Z[H]=se);let X=se[B.id];X===void 0&&(X={},se[B.id]=X);let Y=X[G];return Y===void 0&&(Y=d(l()),X[G]=Y),Y}function d(I){let P=[],B=[],L=[];for(let G=0;G<t;G++)P[G]=0,B[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,P,B,L){let G=r.attributes,Z=P.attributes,H=0,se=B.getAttributes();for(let X in se)if(se[X].location>=0){let le=G[X],re=Z[X];if(re===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),le===void 0||le.attribute!==re||re&&le.data!==re.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function p(I,P,B,L){let G={},Z=P.attributes,H=0,se=B.getAttributes();for(let X in se)if(se[X].location>=0){let le=Z[X];le===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(le=I.instanceColor));let re={};re.attribute=le,le&&le.data&&(re.data=le.data),G[X]=re,H++}r.attributes=G,r.attributesNum=H,r.index=L}function y(){let I=r.newAttributes;for(let P=0,B=I.length;P<B;P++)I[P]=0}function m(I){g(I,0)}function g(I,P){let B=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;B[I]=1,L[I]===0&&(n.enableVertexAttribArray(I),L[I]=1),G[I]!==P&&(n.vertexAttribDivisor(I,P),G[I]=P)}function v(){let I=r.newAttributes,P=r.enabledAttributes;for(let B=0,L=P.length;B<L;B++)P[B]!==I[B]&&(n.disableVertexAttribArray(B),P[B]=0)}function S(I,P,B,L,G,Z,H){H===!0?n.vertexAttribIPointer(I,P,B,G,Z):n.vertexAttribPointer(I,P,B,L,G,Z)}function M(I,P,B,L){y();let G=L.attributes,Z=B.getAttributes(),H=P.defaultAttributeValues;for(let se in Z){let X=Z[se];if(X.location>=0){let Y=G[se];if(Y===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let le=Y.normalized,re=Y.itemSize,He=e.get(Y);if(He===void 0)continue;let j=He.buffer,de=He.type,Te=He.bytesPerElement,K=de===n.INT||de===n.UNSIGNED_INT||Y.gpuType===ml;if(Y.isInterleavedBufferAttribute){let U=Y.data,q=U.isInterleavedBuffer===!0?U.stride:U.itemSize,$=Y.offset;if(U.isInstancedInterleavedBuffer||U.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)g(X.location+Q,U.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Q=0;Q<X.locationSize;Q++)S(X.location+Q,re/X.locationSize,de,le,q*Te,($+re/X.locationSize*Q)*Te,K)}else{if(Y.isInstancedBufferAttribute){for(let U=0;U<X.locationSize;U++)g(X.location+U,Y.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let U=0;U<X.locationSize;U++)m(X.location+U);n.bindBuffer(n.ARRAY_BUFFER,j);for(let U=0;U<X.locationSize;U++)S(X.location+U,re/X.locationSize,de,le,re*Te,re/X.locationSize*U*Te,K)}}else if(H!==void 0){let le=H[se];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(X.location,le);break;case 3:n.vertexAttrib3fv(X.location,le);break;case 4:n.vertexAttrib4fv(X.location,le);break;default:n.vertexAttrib1fv(X.location,le)}}}}v()}function T(){R();for(let I in i){let P=i[I];for(let B in P){let L=P[B];for(let G in L){let Z=L[G];for(let H in Z)h(Z[H].object),delete Z[H];delete L[G]}}delete i[I]}}function x(I){if(i[I.id]===void 0)return;let P=i[I.id];for(let B in P){let L=P[B];for(let G in L){let Z=L[G];for(let H in Z)h(Z[H].object),delete Z[H];delete L[G]}}delete i[I.id]}function _(I){for(let P in i){let B=i[P];for(let L in B){let G=B[L];if(G[I.id]===void 0)continue;let Z=G[I.id];for(let H in Z)h(Z[H].object),delete Z[H];delete G[I.id]}}}function w(I){for(let P in i){let B=i[P],L=I.isInstancedMesh===!0?I.id:0,G=B[L];if(G!==void 0){for(let Z in G){let H=G[Z];for(let se in H)h(H[se].object),delete H[se];delete G[Z]}delete B[L],Object.keys(B).length===0&&delete i[P]}}}function R(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:x,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Gx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Vx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==mi&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let w=_===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==On&&_!==fi&&!w&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),x=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:T,samples:x}}function Wx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ci,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,S=v*4,M=g.clippingState||null;l.value=M,M=h(p,d,S,f);for(let T=0;T!==S;++T)M[T]=t[T];g.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,M=f;S!==y;++S,M+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Rf(n,e,t){return new Fo(n,{minFilter:ki,generateMipmaps:e,type:pi,colorSpace:qr,depthBuffer:t})}function Oo(n,e,t){return new ti({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:Sn,blending:As,depthTest:!1,depthWrite:!1})}function Kx(){return Oo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kf}u

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
	`)}function $x(){return Oo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$f}},`

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
	`)}function jx(){return Oo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qx}
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
	`)}function Cf(){return Oo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function If(){return Oo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===dl||f===fl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new Fo(p.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===dl||f===fl,y=f===Cs||f===vr;if(p||y){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new ec(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new ec(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===dl?d.mapping=Cs:f===fl&&(d.mapping=vr),d}function l(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function ey(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Gr("WebGLRenderer: "+i+" extension not supported."),s}}}function ty(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(p){let y=p.attributes;for(let m in y)e.update(y[m],n.ARRAY_BUFFER)}function u(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=y!==null?y.array.length:m.array.length/3-1,S=m.count>=65535?eo:Qr,M=new S(Math.ceil(v/3)*6,1),T=M.array;if(y!==null){let _=y.array;g=y.version;for(let w=0,R=0;w<v;w+=3){let C=_[w+0],I=_[w+1],P=_[w+2];T[R++]=C,T[R++]=I,T[R++]=I,T[R++]=P,T[R++]=P,T[R++]=C}}else{g=m.version;for(let _=0,w=0;_<v;_+=3){let R=_+0,C=_+1,I=_+2;T[w++]=R,T[w++]=C,T[w++]=C,T[w++]=I,T[w++]=I,T[w++]=R}}M.version=g;let x=r.get(p);x&&e.remove(x),r.set(p,M)}function d(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let y=s[p].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function ny(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function iy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function sy(n,e,t){let i=new WeakMap,s=new Gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let R=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),y===!0&&(S=3);let M=a.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let x=new Float32Array(M*T*4*u),_=new Jr(x,M,T,u);_.type=fi,_.needsUpdate=!0;let w=S*4;for(let C=0;C<u;C++){let I=m[C],P=g[C],B=v[C],L=M*T*4*C;for(let G=0;G<I.count;G++){let Z=G*w;f===!0&&(s.fromBufferAttribute(I,G),x[L+Z+0]=s.x,x[L+Z+1]=s.y,x[L+Z+2]=s.z,x[L+Z+3]=0),p===!0&&(s.fromBufferAttribute(P,G),x[L+Z+4]=s.x,x[L+Z+5]=s.y,x[L+Z+6]=s.z,x[L+Z+7]=0),y===!0&&(s.fromBufferAttribute(B,G),x[L+Z+8]=s.x,x[L+Z+9]=s.y,x[L+Z+10]=s.z,x[L+Z+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Ue(M,T)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ry(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function ay(n,e,t,i,s,r){let o=new Wn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ut;h.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ft([0,2,0,0,2,0],2));let u=new Ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new jt(h,u),f=new bo(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,v=null,S=[],M=!1;this.setSize=function(T,x){o.setSize(T,x),a!==null&&a.setSize(T,x),l!==null&&l.setSize(T,x);for(let _=0;_<S.length;_++){let w=S[_];w.setSize&&w.setSize(T,x)}},this.setEffects=function(T){S=T,M=S.length>0&&S[0].isRenderPass===!0;let x=o.width,_=o.height;S.length>0&&a===null&&(a=new Wn(x,_,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new Wn(x,_,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&S.some(R=>R.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Ui(x,_),r===!0&&(c.format=Hi,c.type=Is)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let R=0;R<S.length;R++){let C=S[R];C.setSize&&C.setSize(x,_),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,x){if(m||T.toneMapping===wi&&S.length===0)return!1;if(v=x,x!==null){let _=x.width,w=x.height;(o.width!==_||o.height!==w)&&this.setSize(_,w)}return M===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=wi,!0},this.hasRenderPass=function(){return M},this.end=function(T,x){T.toneMapping=g,m=!0;let _=o,w=a;for(let R=0;R<S.length;R++){let C=S[R];C.enabled!==!1&&(C.render(T,w,_,x),C.needsSwap!==!1&&(_=w,w=w===a?l:a))}if(p!==T.outputColorSpace||y!==T.toneMapping){p=T.outputColorSpace,y=T.toneMapping,u.defines={},St.getTransfer(p)===It&&(u.defines.SRGB_TRANSFER="");let R=oy[y];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function wr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Pf[s];if(r===void 0&&(r=new Float32Array(s),Pf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function nc(n,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ly(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function hy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function dy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),hn(t,i)}}function fy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,i))return;Df.set(i),n.uniformMatrix3fv(this.addr,!1,Df),hn(t,i)}}function py(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,i))return;Nf.set(i),n.uniformMatrix4fv(this.addr,!1,Nf),hn(t,i)}}function my(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function yy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function My(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function ic(n){return n.version===0&&(n.compareFunction=Ch,n.needsUpdate=!0),n}function by(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ic(Qf):r=jf,t.setTexture2D(e||r,s)}function wy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||np,s)}function Ey(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ic(ep):r=ip,t.setTextureCube(e||r,s)}function Ty(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tp,s)}function Ay(n){switch(n){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return uy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return _y;case 35669:case 35673:return xy;case 5125:return yy;case 36294:return vy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ty}}function Ry(n,e){n.uniform1fv(this.addr,e)}function Cy(n,e){let t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function Iy(n,e){let t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function Py(n,e){let t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ly(n,e){let t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ny(n,e){let t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){let t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fy(n,e){n.uniform1iv(this.addr,e)}function Oy(n,e){n.uniform2iv(this.addr,e)}function Uy(n,e){n.uniform3iv(this.addr,e)}function By(n,e){n.uniform4iv(this.addr,e)}function zy(n,e){n.uniform1uiv(this.addr,e)}function ky(n,e){n.uniform2uiv(this.addr,e)}function Hy(n,e){n.uniform3uiv(this.addr,e)}function Gy(n,e){n.uniform4uiv(this.addr,e)}function Vy(n,e,t){let i=this.cache,s=e.length,r=nc(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ic(Qf):o=jf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Wy(n,e,t){let i=this.cache,s=e.length,r=nc(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||np,r[o])}function Xy(n,e,t){let i=this.cache,s=e.length,r=nc(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ic(ep):o=ip;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function qy(n,e,t){let i=this.cache,s=e.length,r=nc(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tp,r[o])}function Yy(n){switch(n){case 5126:return Ry;case 35664:return Cy;case 35665:return Iy;case 35666:return Py;case 35674:return Ly;case 35675:return Ny;case 35676:return Dy;case 5124:case 35670:return Fy;case 35667:case 35671:return Oy;case 35668:case 35672:return Uy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return ky;case 36295:return Hy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}function Of(n,e){n.seq.push(e),n.map[e.id]=e}function Zy(n,e,t){let i=n.name,s=i.length;for(Wh.lastIndex=0;;){let r=Wh.exec(i),o=Wh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Of(t,c===void 0?new qh(a,n,e):new Yh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Zh(a),Of(t,u)),t=u}}}function Uf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function $y(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function jy(n){St._getMatrix(Bf,St.workingColorSpace,n);let e=`mat3( ${Bf.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case Yr:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+$y(n.getShaderSource(e),a)}else return r}function Qy(n,e){let t=jy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function tv(n,e){let t=ev[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nv(){St.getLuminanceCoefficients(Ql);let n=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function sv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Do(n){return n!==""}function kf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Jh(n){return n.replace(ov,av)}function av(n,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Jh(t)}function Gf(n){return n.replace(lv,cv)}function cv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function uv(n){return hv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function fv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function mv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pv[n.combine]||"ENVMAP_BLENDING_NONE"}function gv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=uv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=fv(t),u=mv(t),d=iv(t),f=sv(r),p=s.createProgram(),y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Do).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Do).join(`
`),m.length>0&&(m+=`
`)):(y=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),m=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?gt.tonemapping_pars_fragment:"",t.toneMapping!==wi?tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Qy("linearToOutputTexel",t.outputColorSpace),nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),o=Jh(o),o=kf(o,t),o=Hf(o,t),a=Jh(a),a=kf(a,t),a=Hf(a,t),o=Gf(o),a=Gf(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+y+o,S=g+m+a,M=Uf(s,s.VERTEX_SHADER,v),T=Uf(s,s.FRAGMENT_SHADER,S);s.attachShader(p,M),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function x(C){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",P=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(T)||"",L=I.trim(),G=P.trim(),Z=B.trim(),H=!0,se=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,T);else{let X=zf(s,M,"vertex"),Y=zf(s,T,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+X+`
`+Y)}else L!==""?je("WebGLProgram: Program Info Log:",L):(G===""||Z==="")&&(se=!1);se&&(C.diagnostics={runnable:H,programLog:L,vertexShader:{log:G,prefix:y},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(M),s.deleteShader(T),_=new br(s,p),w=rv(s,p)}let _;this.getUniforms=function(){return _===void 0&&x(this),_};let w;this.getAttributes=function(){return w===void 0&&x(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,Jy)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ky++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}function xv(n){return n===fs||n===Po||n===Lo}function yv(n,e,t,i,s,r){let o=new Kr,a=new Kh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,w,R,C,I,P){let B=C.fog,L=I.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||G,Z),se=d[_.type],X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,le=Y!==void 0?Y.length:0,re=0;L.morphAttributes.position!==void 0&&(re=1),L.morphAttributes.normal!==void 0&&(re=2),L.morphAttributes.color!==void 0&&(re=3);let He,j,de,Te;if(se){let Ae=Ti[se];He=Ae.vertexShader,j=Ae.fragmentShader}else{He=_.vertexShader,j=_.fragmentShader;let Ae=a.getVertexShaderStage(_),vt=a.getFragmentShaderStage(_);a.update(_,Ae,vt),de=Ae.id,Te=vt.id}let K=n.getRenderTarget(),U=n.state.buffers.depth.getReversed(),q=I.isInstancedMesh===!0,$=I.isBatchedMesh===!0,Q=!!_.map,ce=!!_.matcap,xe=!!H,he=xe&&H.isPMREMTexture===!0,Ie=!!_.aoMap,Me=!!_.lightMap,Xe=!!_.bumpMap&&_.wireframe===!1,ke=!!_.normalMap,qe=!!_.displacementMap,Ge=!!_.emissiveMap,yt=!!_.metalnessMap,ht=!!_.roughnessMap,_t=_.anisotropy>0,D=_.clearcoat>0,ae=_.diffuseRoughness>0,ut=_.dispersion>0,st=_.retroreflectivity>0,me=_.iridescence>0,Tt=_.sheen>0,Ne=_.transmission>0,Ye=_t&&!!_.anisotropyMap,A=D&&!!_.clearcoatMap,b=D&&!!_.clearcoatNormalMap,z=D&&!!_.clearcoatRoughnessMap,ue=ae&&!!_.diffuseRoughnessMap,oe=me&&!!_.iridescenceMap,ve=me&&!!_.iridescenceThicknessMap,Ee=Tt&&!!_.sheenColorMap,ne=Tt&&!!_.sheenRoughnessMap,ie=!!_.specularMap,Se=!!_.specularColorMap,N=!!_.specularIntensityMap,ee=Ne&&!!_.transmissionMap,W=Ne&&!!_.thicknessMap,_e=!!_.gradientMap,ge=!!_.alphaMap,fe=_.alphaTest>0,De=!!_.alphaHash,Ke=!!_.extensions,pe=wi;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(pe=n.toneMapping);let Ze=he?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,tt={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:He,fragmentShader:j,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:$,batchingColor:$&&I._colorsTexture!==null,instancing:q,instancingColor:q&&I.instanceColor!==null,instancingMorph:q&&I.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Q,matcap:ce,envMap:xe,envMapMode:xe&&H.mapping,envMapPMREM:he,envMapMaxLod:he?Ze.length-1:null,envMapSize:he?Ze[0].width:null,aoMap:Ie,lightMap:Me,bumpMap:Xe,normalMap:ke,displacementMap:qe,emissiveMap:Ge,normalMapObjectSpace:ke&&_.normalMapType===of,normalMapTangentSpace:ke&&_.normalMapType===$l,packedNormalMap:ke&&_.normalMapType===$l&&xv(_.normalMap.format),metalnessMap:yt,roughnessMap:ht,anisotropy:_t,anisotropyMap:Ye,clearcoat:D,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:z,diffuseRoughness:ae,diffuseRoughnessMap:ue,dispersion:ut,retroreflection:st,iridescence:me,iridescenceMap:oe,iridescenceThicknessMap:ve,sheen:Tt,sheenColorMap:Ee,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:Se,specularIntensityMap:N,transmission:Ne,transmissionMap:ee,thicknessMap:W,gradientMap:_e,opaque:_.transparent===!1&&_.blending===yr&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:fe,alphaHash:De,combine:_.combine,mapUv:Q&&f(_.map.channel),aoMapUv:Ie&&f(_.aoMap.channel),lightMapUv:Me&&f(_.lightMap.channel),bumpMapUv:Xe&&f(_.bumpMap.channel),normalMapUv:ke&&f(_.normalMap.channel),displacementMapUv:qe&&f(_.displacementMap.channel),emissiveMapUv:Ge&&f(_.emissiveMap.channel),metalnessMapUv:yt&&f(_.metalnessMap.channel),roughnessMapUv:ht&&f(_.roughnessMap.channel),anisotropyMapUv:Ye&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(_.sheenRoughnessMap.channel),specularMapUv:ie&&f(_.specularMap.channel),specularColorMapUv:Se&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:W&&f(_.thicknessMap.channel),alphaMapUv:ge&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ke||_t),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Q||ge),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ke===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:U,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:re,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:P.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:Q&&_.map.isVideoTexture===!0&&St.getTransfer(_.map.colorSpace)===It,decodeVideoTextureEmissive:Ge&&_.emissiveMap.isVideoTexture===!0&&St.getTransfer(_.emissiveMap.colorSpace)===It,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ke&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&_.extensions.multiDraw===!0||$)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function y(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(w,_),g(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let w=d[_.type],R;if(w){let C=Ti[w];R=wf.clone(C.uniforms)}else R=_.uniforms;return R}function S(_,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new gv(n,w,_,s),c.push(R),h.set(w,R)),R}function M(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function x(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:x}}function vv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Mv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,y,m,g){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:g},n[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function l(d,f,p,y,m,g,v){v.reversedDepth===!0&&(m=-m);let S=a(d,f,p,y,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(d,f,p,y,m,g){let v=a(d,f,p,y,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Mv),i.length>1&&i.sort(f||Wf),s.length>1&&s.sort(f||Wf)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Sv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Xf,n.set(i,[o])):s>=r.length?(o=new Xf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function wv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Tv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Av(n){let e=new bv,t=wv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new Ct,o=new Ct;function a(c){let h=0,u=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,v=0,S=0,M=0,T=0,x=0,_=0,w=0,R=0,C=0;c.sort(Tv);for(let P=0,B=c.length;P<B;P++){let L=c[P],G=L.color,Z=L.intensity,H=L.distance,se=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===fs?se=L.shadow.map.texture:se=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*Z,u+=G.g*Z,d+=G.b*Z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],Z);C++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,le=t.get(L);le.shadowIntensity=Y.intensity,le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[p]=le,i.sunShadowMap[p]=se;let re=Y.getViewportCount();for(let He=0;He<re;He++)i.sunShadowMatrix[y+He]=Y.getMatrix(He),i.sunShadowCascade[y+He]=Y._cascadeData[He];y+=re,p++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,le=t.get(L);le.shadowIntensity=Y.intensity,le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,i.directionalShadow[m]=le,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=X,m++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(G).multiplyScalar(Z),X.distance=H,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;let Y=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[v]=Y.matrix,L.castShadow){let le=t.get(L);le.shadowIntensity=Y.intensity,le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,i.spotShadow[v]=le,i.spotShadowMap[v]=se,_++}v++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(G).multiplyScalar(Z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=X,S++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Y=L.shadow,le=t.get(L);le.shadowIntensity=Y.intensity,le.shadowBias=Y.bias,le.shadowNormalBias=Y.normalBias,le.shadowRadius=Y.radius,le.shadowMapSize=Y.mapSize,le.shadowCameraNear=Y.camera.near,le.shadowCameraFar=Y.camera.far,i.pointShadow[g]=le,i.pointShadowMap[g]=se,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=X,g++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(Z),X.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[M]=X,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==S||I.hemiLength!==M||I.numSunShadows!==p||I.numDirectionalShadows!==T||I.numPointShadows!==x||I.numSpotShadows!==_||I.numSpotMaps!==w||I.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.pointShadowMatrix.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=S,I.hemiLength=M,I.numSunShadows=p,I.numDirectionalShadows=T,I.numPointShadows=x,I.numSpotShadows=_,I.numSpotMaps=w,I.numLightProbes=C,i.version=Ev++)}function l(c,h){let u=0,d=0,f=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(M.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function qf(n){let e=new Av(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Rv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new qf(n),e.set(s,[a])):r>=o.length?(a=new qf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function Nv(n,e,t){let i=new as,s=new Ue,r=new Ue,o=new Gt,a=new $a,l=new ja,c={},h=t.maxTextureSize,u={[ds]:Sn,[Sn]:ds,[tn]:tn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Cv,fragmentShader:Iv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new jt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let g=this.type;this.render=function(x,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Od&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let R=n.getRenderTarget(),C=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),P=n.state;P.setBlending(As),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let B=g!==this.type;B&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=x.length;L<G;L++){let Z=x[L],H=Z.shadow;if(H===void 0){je("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let se=H.getFrameExtents();s.multiply(se),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,H.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===xr){if(Z.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wn(s.x,s.y,{format:fs,type:pi,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new Ui(s.x,s.y,fi),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=Oi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=_n,H.map.depthTexture.magFilter=_n}else Z.isPointLight?(H.map=new Fo(s.x),H.map.depthTexture=new ro(s.x,di)):(H.map=new Wn(s.x,s.y),H.map.depthTexture=new Ui(s.x,s.y,di)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=Oi,this.type===Ts?(H.map.depthTexture.compareFunction=X?Rh:Ah,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=_n,H.map.depthTexture.magFilter=_n);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Y=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Z.isPointLight!==!0&&H.updateMatrices(Z,w);let le=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:w.layers;for(let re=0;re<Y;re++){let He=H.getCamera(re);if(Z.isPointLight){let j=H.camera,de=H.matrix,Te=Z.distance||j.far;Te!==j.far&&(j.far=Te,j.updateProjectionMatrix()),No.setFromMatrixPosition(Z.matrixWorld),j.position.copy(No),Xh.copy(j.position),Xh.add(Pv[re]),j.up.copy(Lv[re]),j.lookAt(Xh),j.updateMatrixWorld(),de.makeTranslation(-No.x,-No.y,-No.z),Yf.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Yf,j.coordinateSystem,j.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,re),n.clear();else{re===0&&(n.setRenderTarget(H.map),n.clear());let j=H.getViewport(re);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),P.viewport(o)}i=H.getFrustum(re),M(_,w,He,Z,le,this.type)}H.isPointLightShadow!==!0&&this.type===xr&&v(H,w),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(R,C,I)};function v(x,_){let w=e.update(y);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new Wn(s.x,s.y,{format:fs,type:pi}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(_,null,w,d,y,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(_,null,w,f,y,null)}function S(x,_,w,R){let C=null,I=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(I!==void 0)C=I;else if(C=w.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let P=C.uuid,B=_.uuid,L=c[P];L===void 0&&(L={},c[P]=L);let G=L[B];G===void 0&&(G=C.clone(),L[B]=G,_.addEventListener("dispose",T)),C=G}if(C.visible=_.visible,C.wireframe=_.wireframe,R===xr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=n.properties.get(C);P.light=w}return C}function M(x,_,w,R,C,I){if(x.visible===!1)return;if(x.layers.test(C)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&I===xr)&&(!x.frustumCulled||x.intersectsFrustum(i))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);let L=e.update(x),G=x.material;if(Array.isArray(G)){let Z=L.groups;for(let H=0,se=Z.length;H<se;H++){let X=Z[H],Y=G[X.materialIndex];if(Y&&Y.visible){let le=S(x,Y,R,I);x.onBeforeShadow(n,x,_,w,L,le,X),n.renderBufferDirect(w,null,L,le,x,X),x.onAfterShadow(n,x,_,w,L,le,X)}}}else if(G.visible){let Z=S(x,G,R,I);x.onBeforeShadow(n,x,_,w,L,Z,null),n.renderBufferDirect(w,null,L,Z,x,null),x.onAfterShadow(n,x,_,w,L,Z,null)}}let B=x.children;for(let L=0,G=B.length;L<G;L++)M(B[L],_,w,R,C,I)}function T(x){x.target.removeEventListener("dispose",T);for(let w in c){let R=c[w],C=x.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function Dv(n,e){function t(){let N=!1,ee=new Gt,W=null,_e=new Gt(0,0,0,0);return{setMask:function(ge){W!==ge&&!N&&(n.colorMask(ge,ge,ge,ge),W=ge)},setLocked:function(ge){N=ge},setClear:function(ge,fe,De,Ke,pe){pe===!0&&(ge*=Ke,fe*=Ke,De*=Ke),ee.set(ge,fe,De,Ke),_e.equals(ee)===!1&&(n.clearColor(ge,fe,De,Ke),_e.copy(ee))},reset:function(){N=!1,W=null,_e.set(-1,0,0,0)}}}function i(){let N=!1,ee=!1,W=null,_e=null,ge=null;return{setReversed:function(fe){if(ee!==fe){let De=e.get("EXT_clip_control");fe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ee=fe;let Ke=ge;ge=null,this.setClear(Ke)}},getReversed:function(){return ee},setTest:function(fe){fe?U(n.DEPTH_TEST):q(n.DEPTH_TEST)},setMask:function(fe){W!==fe&&!N&&(n.depthMask(fe),W=fe)},setFunc:function(fe){if(ee&&(fe=_f[fe]),_e!==fe){switch(fe){case wa:n.depthFunc(n.NEVER);break;case Ea:n.depthFunc(n.ALWAYS);break;case Ta:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Aa:n.depthFunc(n.EQUAL);break;case Ra:n.depthFunc(n.GEQUAL);break;case Ca:n.depthFunc(n.GREATER);break;case Ia:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=fe}},setLocked:function(fe){N=fe},setClear:function(fe){ge!==fe&&(ge=fe,ee&&(fe=1-fe),n.clearDepth(fe))},reset:function(){N=!1,W=null,_e=null,ge=null,ee=!1}}}function s(){let N=!1,ee=null,W=null,_e=null,ge=null,fe=null,De=null,Ke=null,pe=null;return{setTest:function(Ze){N||(Ze?U(n.STENCIL_TEST):q(n.STENCIL_TEST))},setMask:function(Ze){ee!==Ze&&!N&&(n.stencilMask(Ze),ee=Ze)},setFunc:function(Ze,tt,Ae){(W!==Ze||_e!==tt||ge!==Ae)&&(n.stencilFunc(Ze,tt,Ae),W=Ze,_e=tt,ge=Ae)},setOp:function(Ze,tt,Ae){(fe!==Ze||De!==tt||Ke!==Ae)&&(n.stencilOp(Ze,tt,Ae),fe=Ze,De=tt,Ke=Ae)},setLocked:function(Ze){N=Ze},setClear:function(Ze){pe!==Ze&&(n.clearStencil(Ze),pe=Ze)},reset:function(){N=!1,ee=null,W=null,_e=null,ge=null,fe=null,De=null,Ke=null,pe=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],y=null,m=!1,g=null,v=null,S=null,M=null,T=null,x=null,_=null,w=new $e(0,0,0),R=0,C=!1,I=null,P=null,B=null,L=null,G=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,se=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=se>=2);let Y=null,le={},re=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),j=new Gt().fromArray(re),de=new Gt().fromArray(He);function Te(N,ee,W,_e){let ge=new Uint8Array(4),fe=n.createTexture();n.bindTexture(N,fe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<W;De++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ee+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return fe}let K={};K[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(lr),Xe(!1),ke(oh),U(n.CULL_FACE),Ie(As);function U(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function q(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function $(N,ee){return d[N]!==ee?(n.bindFramebuffer(N,ee),d[N]=ee,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ee),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Q(N,ee){let W=p,_e=!1;if(N){W=f.get(ee),W===void 0&&(W=[],f.set(ee,W));let ge=N.textures;if(W.length!==ge.length||W[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,De=ge.length;fe<De;fe++)W[fe]=n.COLOR_ATTACHMENT0+fe;W.length=ge.length,_e=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,_e=!0);_e&&n.drawBuffers(W)}function ce(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let xe={[Rs]:n.FUNC_ADD,[Bd]:n.FUNC_SUBTRACT,[zd]:n.FUNC_REVERSE_SUBTRACT};xe[kd]=n.MIN,xe[Hd]=n.MAX;let he={[Gd]:n.ZERO,[Vd]:n.ONE,[Wd]:n.SRC_COLOR,[hh]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[qd]:n.DST_ALPHA,[Xd]:n.ONE_MINUS_SRC_COLOR,[uh]:n.ONE_MINUS_SRC_ALPHA,[Jd]:n.ONE_MINUS_DST_COLOR,[Yd]:n.ONE_MINUS_DST_ALPHA,[$d]:n.CONSTANT_COLOR,[jd]:n.ONE_MINUS_CONSTANT_COLOR,[Qd]:n.CONSTANT_ALPHA,[ef]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(N,ee,W,_e,ge,fe,De,Ke,pe,Ze){if(N===As){m===!0&&(q(n.BLEND),m=!1);return}if(m===!1&&(U(n.BLEND),m=!0),N!==Ud){if(N!==g||Ze!==C){if((v!==Rs||T!==Rs)&&(n.blendEquation(n.FUNC_ADD),v=Rs,T=Rs),Ze)switch(N){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFunc(n.ONE,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",N);break}else switch(N){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lh:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",N);break}S=null,M=null,x=null,_=null,w.set(0,0,0),R=0,g=N,C=Ze}return}ge=ge||ee,fe=fe||W,De=De||_e,(ee!==v||ge!==T)&&(n.blendEquationSeparate(xe[ee],xe[ge]),v=ee,T=ge),(W!==S||_e!==M||fe!==x||De!==_)&&(n.blendFuncSeparate(he[W],he[_e],he[fe],he[De]),S=W,M=_e,x=fe,_=De),(Ke.equals(w)===!1||pe!==R)&&(n.blendColor(Ke.r,Ke.g,Ke.b,pe),w.copy(Ke),R=pe),g=N,C=!1}function Me(N,ee){N.side===tn?q(n.CULL_FACE):U(n.CULL_FACE);let W=N.side===Sn;ee&&(W=!W),Xe(W),N.blending===yr&&N.transparent===!1?Ie(As):Ie(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let _e=N.stencilWrite;a.setTest(_e),_e&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):q(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(N){I!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),I=N)}function ke(N){N!==Dd?(U(n.CULL_FACE),N!==P&&(N===oh?n.cullFace(n.BACK):N===Fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):q(n.CULL_FACE),P=N}function qe(N){N!==B&&(H&&n.lineWidth(N),B=N)}function Ge(N,ee,W){N?(U(n.POLYGON_OFFSET_FILL),(L!==ee||G!==W)&&(L=ee,G=W,o.getReversed()&&(ee=-ee,W=-W),n.polygonOffset(ee,W))):q(n.POLYGON_OFFSET_FILL)}function yt(N){N?U(n.SCISSOR_TEST):q(n.SCISSOR_TEST)}function ht(N){N===void 0&&(N=n.TEXTURE0+Z-1),Y!==N&&(n.activeTexture(N),Y=N)}function _t(N,ee,W){W===void 0&&(Y===null?W=n.TEXTURE0+Z-1:W=Y);let _e=le[W];_e===void 0&&(_e={type:void 0,texture:void 0},le[W]=_e),(_e.type!==N||_e.texture!==ee)&&(Y!==W&&(n.activeTexture(W),Y=W),n.bindTexture(N,ee||K[N]),_e.type=N,_e.texture=ee)}function D(){let N=le[Y];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ae(){try{n.compressedTexImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function ut(){try{n.compressedTexImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function st(){try{n.texSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function me(){try{n.texSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function Tt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function Ne(){try{n.compressedTexSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function Ye(){try{n.texStorage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function A(){try{n.texStorage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function b(){try{n.texImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function z(){try{n.texImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function ue(N){return u[N]!==void 0?u[N]:n.getParameter(N)}function oe(N,ee){u[N]!==ee&&(n.pixelStorei(N,ee),u[N]=ee)}function ve(N){j.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function Ee(N){de.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),de.copy(N))}function ne(N,ee){let W=c.get(ee);W===void 0&&(W=new WeakMap,c.set(ee,W));let _e=W.get(N);_e===void 0&&(_e=n.getUniformBlockIndex(ee,N.name),n.uniformBlockBinding(ee,_e,_e),W.set(N,_e))}function ie(N,ee,W){let ge=c.get(ee).get(N);l[ge]!==W&&(n.bindBufferBase(n.UNIFORM_BUFFER,ge,W),l[ge]=W)}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,le={},d={},l={},f=new WeakMap,p=[],y=null,m=!1,g=null,v=null,S=null,M=null,T=null,x=null,_=null,w=new $e(0,0,0),R=0,C=!1,I=null,P=null,B=null,L=null,G=null,j.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:q,bindFramebuffer:$,drawBuffers:Q,useProgram:ce,setBlending:Ie,setMaterial:Me,setFlipSided:Xe,setCullFace:ke,setLineWidth:qe,setPolygonOffset:Ge,setScissorTest:yt,activeTexture:ht,bindTexture:_t,unbindTexture:D,compressedTexImage2D:ae,compressedTexImage3D:ut,texImage2D:b,texImage3D:z,pixelStorei:oe,getParameter:ue,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Ye,texStorage3D:A,texSubImage2D:st,texSubImage3D:me,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Ne,scissor:ve,viewport:Ee,reset:Se}}function Fv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,y=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return m?new OffscreenCanvas(A,b):Zr("canvas")}function v(A,b,z){let ue=1,oe=Ye(A);if((oe.width>z||oe.height>z)&&(ue=z/Math.max(oe.width,oe.height)),ue<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ve=Math.floor(ue*oe.width),Ee=Math.floor(ue*oe.height);d===void 0&&(d=g(ve,Ee));let ne=b?g(ve,Ee):d;return ne.width=ve,ne.height=Ee,ne.getContext("2d").drawImage(A,0,0,ve,Ee),je("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ve+"x"+Ee+")."),ne}else return"data"in A&&je("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),A;return A}function S(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,b,z,ue,oe,ve=!1){if(A!==null){if(n[A]!==void 0)return n[A];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Ee;ue&&(Ee=e.get("EXT_texture_norm16"),Ee||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===n.RED&&(z===n.FLOAT&&(ne=n.R32F),z===n.HALF_FLOAT&&(ne=n.R16F),z===n.UNSIGNED_BYTE&&(ne=n.R8),z===n.UNSIGNED_SHORT&&Ee&&(ne=Ee.R16_EXT),z===n.SHORT&&Ee&&(ne=Ee.R16_SNORM_EXT)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.R8UI),z===n.UNSIGNED_SHORT&&(ne=n.R16UI),z===n.UNSIGNED_INT&&(ne=n.R32UI),z===n.BYTE&&(ne=n.R8I),z===n.SHORT&&(ne=n.R16I),z===n.INT&&(ne=n.R32I)),b===n.RG&&(z===n.FLOAT&&(ne=n.RG32F),z===n.HALF_FLOAT&&(ne=n.RG16F),z===n.UNSIGNED_BYTE&&(ne=n.RG8),z===n.UNSIGNED_SHORT&&Ee&&(ne=Ee.RG16_EXT),z===n.SHORT&&Ee&&(ne=Ee.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.RG8UI),z===n.UNSIGNED_SHORT&&(ne=n.RG16UI),z===n.UNSIGNED_INT&&(ne=n.RG32UI),z===n.BYTE&&(ne=n.RG8I),z===n.SHORT&&(ne=n.RG16I),z===n.INT&&(ne=n.RG32I)),b===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),z===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),z===n.UNSIGNED_INT&&(ne=n.RGB32UI),z===n.BYTE&&(ne=n.RGB8I),z===n.SHORT&&(ne=n.RGB16I),z===n.INT&&(ne=n.RGB32I)),b===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),z===n.UNSIGNED_INT&&(ne=n.RGBA32UI),z===n.BYTE&&(ne=n.RGBA8I),z===n.SHORT&&(ne=n.RGBA16I),z===n.INT&&(ne=n.RGBA32I)),b===n.RGB&&(z===n.UNSIGNED_SHORT&&Ee&&(ne=Ee.RGB16_EXT),z===n.SHORT&&Ee&&(ne=Ee.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),b===n.RGBA){let ie=ve?Yr:St.getTransfer(oe);z===n.FLOAT&&(ne=n.RGBA32F),z===n.HALF_FLOAT&&(ne=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ne=ie===It?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&Ee&&(ne=Ee.RGBA16_EXT),z===n.SHORT&&Ee&&(ne=Ee.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(A,b){let z;return A?b===null||b===di||b===Is?z=n.DEPTH24_STENCIL8:b===fi?z=n.DEPTH32F_STENCIL8:b===Mr&&(z=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===di||b===Is?z=n.DEPTH_COMPONENT24:b===fi?z=n.DEPTH_COMPONENT32F:b===Mr&&(z=n.DEPTH_COMPONENT16),z}function w(A,b){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==_n&&A.minFilter!==Cn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){let b=new WeakRef(A);i.get(A).__ref=b,p.add(b),y.register(A,b,b)}function C(A){let b=i.get(A).__ref;b!==void 0&&(p.delete(b),y.unregister(b))}function I(A){B(A.target)}function P(A){L(A.target)}function B(A){A.removeEventListener("dispose",I),C(A),Z(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function L(A){A.removeEventListener("dispose",P),C(A),se(A)}function G(){for(let A of p){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):B(b))}p.clear(),u.clear()}function Z(A){let b=i.get(A);if(b.__webglInit===void 0)return;let z=A.source,ue=f.get(z);if(ue){let oe=ue[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&H(A),Object.keys(ue).length===0&&f.delete(z)}i.remove(A)}function H(A){let b=i.get(A);n.deleteTexture(b.__webglTexture);let z=A.source,ue=f.get(z);delete ue[b.__cacheKey],o.memory.textures--}function se(A){let b=i.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&B(z),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let ve=0;ve<b.__webglFramebuffer[oe].length;ve++)n.deleteFramebuffer(b.__webglFramebuffer[oe][ve]);else n.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)n.deleteFramebuffer(b.__webglFramebuffer[oe]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ue=A.textures;for(let oe=0,ve=ue.length;oe<ve;oe++){let Ee=i.get(ue[oe]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(ue[oe])}i.remove(A)}let X=0;function Y(){X=0}function le(){return X}function re(A){X=A}function He(){let A=X;return A>=s.maxTextures&&je("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function j(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function de(A,b){let z=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let ue=A.image;if(ue===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(z,A,b);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function Te(A,b){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Me(z,A,b);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function K(A,b){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Me(z,A,b);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function U(A,b){let z=i.get(A);if(A.version>0&&z.__version!==A.version){Xe(z,A,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}let q={[ws]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[Pa]:n.MIRRORED_REPEAT},$={[_n]:n.NEAREST,[sf]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},Q={[lf]:n.NEVER,[Ch]:n.ALWAYS,[cf]:n.LESS,[Ah]:n.LEQUAL,[hf]:n.EQUAL,[Rh]:n.GEQUAL,[uf]:n.GREATER,[df]:n.NOTEQUAL};function ce(A,b){if(b.type===fi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Cn||b.magFilter===pl||b.magFilter===To||b.magFilter===ki||b.minFilter===Cn||b.minFilter===pl||b.minFilter===To||b.minFilter===ki)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,q[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,q[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,q[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,$[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,$[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_n||b.minFilter!==To&&b.minFilter!==ki||b.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function xe(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",I),R(b));let ue=b.source,oe=f.get(ue);oe===void 0&&(oe={},f.set(ue,oe));let ve=j(b);if(ve!==A.__cacheKey){oe[ve]===void 0&&(oe[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),oe[ve].usedTimes++;let Ee=oe[A.__cacheKey];Ee!==void 0&&(oe[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&H(b)),A.__cacheKey=ve,A.__webglTexture=oe[ve].texture}return z}function he(A,b,z){return Math.floor(Math.floor(A/z)/b)}function Ie(A,b,z,ue){let ve=A.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,z,ue,b.data);else{ve.sort((N,ee)=>N.start-ee.start);let Ee=0;for(let N=1;N<ve.length;N++){let ee=ve[Ee],W=ve[N],_e=ee.start+ee.count,ge=he(W.start,b.width,4),fe=he(ee.start,b.width,4);W.start<=_e+1&&ge===fe&&he(W.start+W.count-1,b.width,4)===ge?ee.count=Math.max(ee.count,W.start+W.count-ee.start):(++Ee,ve[Ee]=W)}ve.length=Ee+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),ie=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let N=0,ee=ve.length;N<ee;N++){let W=ve[N],_e=Math.floor(W.start/4),ge=Math.ceil(W.count/4),fe=_e%b.width,De=Math.floor(_e/b.width),Ke=ge,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,De),t.texSubImage2D(n.TEXTURE_2D,0,fe,De,Ke,pe,z,ue,b.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function Me(A,b,z){let ue=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=n.TEXTURE_3D);let oe=xe(A,b),ve=b.source;t.bindTexture(ue,A.__webglTexture,n.TEXTURE0+z);let Ee=i.get(ve);if(ve.version!==Ee.__version||oe===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let pe=St.getPrimaries(St.workingColorSpace),Ze=b.colorSpace===Gi?null:St.getPrimaries(b.colorSpace),tt=b.colorSpace===Gi||pe===Ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let ie=v(b.image,!1,s.maxTextureSize);ie=Ne(b,ie);let Se=r.convert(b.format,b.colorSpace),N=r.convert(b.type),ee=x(b.internalFormat,Se,N,b.normalized,b.colorSpace,b.isVideoTexture);ce(ue,b);let W,_e=b.mipmaps,ge=b.isVideoTexture!==!0,fe=Ee.__version===void 0||oe===!0,De=ve.dataReady,Ke=w(b,ie);if(b.isDepthTexture)ee=_(b.format===Hi,b.type),fe&&(ge?t.texStorage2D(n.TEXTURE_2D,1,ee,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ee,ie.width,ie.height,0,Se,N,null));else if(b.isDataTexture)if(_e.length>0){ge&&fe&&t.texStorage2D(n.TEXTURE_2D,Ke,ee,_e[0].width,_e[0].height);for(let pe=0,Ze=_e.length;pe<Ze;pe++)W=_e[pe],ge?De&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,W.width,W.height,Se,N,W.data):t.texImage2D(n.TEXTURE_2D,pe,ee,W.width,W.height,0,Se,N,W.data);b.generateMipmaps=!1}else ge?(fe&&t.texStorage2D(n.TEXTURE_2D,Ke,ee,ie.width,ie.height),De&&Ie(b,ie,Se,N)):t.texImage2D(n.TEXTURE_2D,0,ee,ie.width,ie.height,0,Se,N,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,ee,_e[0].width,_e[0].height,ie.depth);for(let pe=0,Ze=_e.length;pe<Ze;pe++)if(W=_e[pe],b.format!==mi)if(Se!==null)if(ge){if(De)if(b.layerUpdates.size>0){let tt=Uh(W.width,W.height,b.format,b.type);for(let Ae of b.layerUpdates){let vt=W.data.subarray(Ae*tt/W.data.BYTES_PER_ELEMENT,(Ae+1)*tt/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Ae,W.width,W.height,1,Se,vt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,W.width,W.height,ie.depth,Se,W.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,ee,W.width,W.height,ie.depth,0,W.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?De&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,W.width,W.height,ie.depth,Se,N,W.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,ee,W.width,W.height,ie.depth,0,Se,N,W.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&fe&&t.texStorage2D(n.TEXTURE_2D,Ke,ee,_e[0].width,_e[0].height);for(let pe=0,Ze=_e.length;pe<Ze;pe++)W=_e[pe],b.format!==mi?Se!==null?ge?De&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,W.width,W.height,Se,W.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,ee,W.width,W.height,0,W.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?De&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,W.width,W.height,Se,N,W.data):t.texImage2D(n.TEXTURE_2D,pe,ee,W.width,W.height,0,Se,N,W.data)}else if(b.isDataArrayTexture)if(ge){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,ee,ie.width,ie.height,ie.depth),De)if(b.layerUpdates.size>0){let pe=Uh(ie.width,ie.height,b.format,b.type);for(let Ze of b.layerUpdates){let tt=ie.data.subarray(Ze*pe/ie.data.BYTES_PER_ELEMENT,(Ze+1)*pe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ze,ie.width,ie.height,1,Se,N,tt)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,N,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,ie.width,ie.height,ie.depth,0,Se,N,ie.data);else if(b.isData3DTexture)ge?(fe&&t.texStorage3D(n.TEXTURE_3D,Ke,ee,ie.width,ie.height,ie.depth),De&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,N,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ee,ie.width,ie.height,ie.depth,0,Se,N,ie.data);else if(b.isFramebufferTexture){if(fe)if(ge)t.texStorage2D(n.TEXTURE_2D,Ke,ee,ie.width,ie.height);else{let pe=ie.width,Ze=ie.height;for(let tt=0;tt<Ke;tt++)t.texImage2D(n.TEXTURE_2D,tt,ee,pe,Ze,0,Se,N,null),pe>>=1,Ze>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ie.parentNode!==pe){pe.appendChild(ie),u.add(b),pe.onpaint=Ze=>{let tt=Ze.changedElements;for(let Ae of u)tt.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ie);else{let tt=n.RGBA,Ae=n.RGBA,vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,tt,Ae,vt,ie)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(_e.length>0){if(ge&&fe){let pe=Ye(_e[0]);t.texStorage2D(n.TEXTURE_2D,Ke,ee,pe.width,pe.height)}for(let pe=0,Ze=_e.length;pe<Ze;pe++)W=_e[pe],ge?De&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Se,N,W):t.texImage2D(n.TEXTURE_2D,pe,ee,Se,N,W);b.generateMipmaps=!1}else if(ge){if(fe){let pe=Ye(ie);t.texStorage2D(n.TEXTURE_2D,Ke,ee,pe.width,pe.height)}De&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,N,ie)}else t.texImage2D(n.TEXTURE_2D,0,ee,Se,N,ie);S(b)&&b.mipmapsAutoUpdate===!0&&M(ue),Ee.__version=ve.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Xe(A,b,z){if(b.image.length!==6)return;let ue=xe(A,b),oe=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let ve=i.get(oe);if(oe.version!==ve.__version||ue===!0){t.activeTexture(n.TEXTURE0+z);let Ee=St.getPrimaries(St.workingColorSpace),ne=b.colorSpace===Gi?null:St.getPrimaries(b.colorSpace),ie=b.colorSpace===Gi||Ee===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Se=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let Ae=0;Ae<6;Ae++)!Se&&!N?ee[Ae]=v(b.image[Ae],!0,s.maxCubemapSize):ee[Ae]=N?b.image[Ae].image:b.image[Ae],ee[Ae]=Ne(b,ee[Ae]);let W=ee[0],_e=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),fe=x(b.internalFormat,_e,ge,b.normalized,b.colorSpace),De=b.isVideoTexture!==!0,Ke=ve.__version===void 0||ue===!0,pe=oe.dataReady,Ze=w(b,W);ce(n.TEXTURE_CUBE_MAP,b);let tt;if(b.isDepthTexture){if(fe=_(b.format===Hi,b.type),Ke)if(De)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,fe,W.width,W.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,fe,W.width,W.height,0,_e,ge,null)}else if(Se){De&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,fe,W.width,W.height);for(let Ae=0;Ae<6;Ae++){tt=ee[Ae].mipmaps;for(let vt=0;vt<tt.length;vt++){let Nt=tt[vt];b.format!==mi?_e!==null?De?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,vt,0,0,Nt.width,Nt.height,_e,Nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,vt,fe,Nt.width,Nt.height,0,Nt.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,vt,0,0,Nt.width,Nt.height,_e,ge,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,vt,fe,Nt.width,Nt.height,0,_e,ge,Nt.data)}}}else{if(tt=b.mipmaps,De&&Ke){tt.length>0&&Ze++;let Ae=Ye(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,fe,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(N){De?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ee[Ae].width,ee[Ae].height,_e,ge,ee[Ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,fe,ee[Ae].width,ee[Ae].height,0,_e,ge,ee[Ae].data);for(let vt=0;vt<tt.length;vt++){let Un=tt[vt].image[Ae].image;De?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,vt+1,0,0,Un.width,Un.height,_e,ge,Un.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,vt+1,fe,Un.width,Un.height,0,_e,ge,Un.data)}}else{De?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,_e,ge,ee[Ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,fe,_e,ge,ee[Ae]);for(let vt=0;vt<tt.length;vt++){let Nt=tt[vt];De?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,vt+1,0,0,_e,ge,Nt.image[Ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,vt+1,fe,_e,ge,Nt.image[Ae])}}}S(b)&&b.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ve.__version=oe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ke(A,b,z,ue,oe,ve){let Ee=r.convert(z.format,z.colorSpace),ne=r.convert(z.type),ie=x(z.internalFormat,Ee,ne,z.normalized,z.colorSpace),Se=i.get(b),N=i.get(z);if(N.__renderTarget=b,!Se.__hasExternalTextures){let ee=Math.max(1,b.width>>ve),W=Math.max(1,b.height>>ve);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ve,ie,ee,W,b.depth,0,Ee,ne,null):t.texImage2D(oe,ve,ie,ee,W,0,Ee,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),me(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,oe,N.__webglTexture,0,st(b)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,oe,N.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(A,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){let ue=b.depthTexture,oe=ue&&ue.isDepthTexture?ue.type:null,ve=_(b.stencilBuffer,oe),Ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(b),ve,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(b),ve,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,A)}else{let ue=b.textures;for(let oe=0;oe<ue.length;oe++){let ve=ue[oe],Ee=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),ie=x(ve.internalFormat,Ee,ne,ve.normalized,ve.colorSpace);me(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(b),ie,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(b),ie,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ie,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(A,b,z){let ue=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=i.get(b.depthTexture);oe.__renderTarget=b;let ve=ue?b.depthTexture.image[0]:b.depthTexture.image;(!oe.__webglTexture||ve.width!==b.width||ve.height!==b.height)&&(ve.width=b.width,ve.height=b.height,b.depthTexture.needsUpdate=!0),ue?U(b.depthTexture,0):de(b.depthTexture,0);let Ee=oe.__webglTexture,ne=st(b),ie=ue?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,Se=b.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Oi)me(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ie,Ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,Se,ie,Ee,0);else if(b.depthTexture.format===Hi)me(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ie,Ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,Se,ie,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yt(A){let b=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let ue=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ue){let oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ue.removeEventListener("dispose",oe)};ue.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=ue}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let ue=0;ue<6;ue++)Ge(b.__webglFramebuffer[ue],A,ue);else A.texture.mipmaps.length>0?Ge(b.__webglFramebuffer[0],A,0):Ge(b.__webglFramebuffer,A,0);else if(z){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]===void 0)b.__webglDepthbuffer[ue]=n.createRenderbuffer(),qe(b.__webglDepthbuffer[ue],A,!1);else{let oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ve)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),qe(b.__webglDepthbuffer,A,!1);else{let oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(A,b,z){let ue=i.get(A);b!==void 0&&ke(ue.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&yt(A)}function _t(A){let b=A.texture,z=i.get(A),ue=i.get(b);A.addEventListener("dispose",P),R(A);let oe=A.textures,ve=A.isWebGLCubeRenderTarget===!0,Ee=oe.length>1;if(Ee||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=b.version,o.memory.textures++),ve){z.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps.length>0){z.__webglFramebuffer[ne]=[];for(let ie=0;ie<b.mipmaps.length;ie++)z.__webglFramebuffer[ne][ie]=n.createFramebuffer()}else z.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)z.__webglFramebuffer[ne]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ne=0,ie=oe.length;ne<ie;ne++){let Se=i.get(oe[ne]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&me(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ne=0;ne<oe.length;ne++){let ie=oe[ne];z.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);let Se=r.convert(ie.format,ie.colorSpace),N=r.convert(ie.type),ee=x(ie.internalFormat,Se,N,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),W=st(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,ee,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,z.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),qe(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),ce(n.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)ke(z.__webglFramebuffer[ne][ie],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else ke(z.__webglFramebuffer[ne],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);S(b)?M(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let ne=0,ie=oe.length;ne<ie;ne++){let Se=oe[ne],N=i.get(Se),ee=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,N.__webglTexture),ce(ee,Se),ke(z.__webglFramebuffer,A,Se,n.COLOR_ATTACHMENT0+ne,ee,0),S(Se)&&M(ee)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,ue.__webglTexture),ce(ne,b),b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)ke(z.__webglFramebuffer[ie],A,b,n.COLOR_ATTACHMENT0,ne,ie);else ke(z.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,ne,0);S(b)?M(ne):b.mipmaps.length>0&&n.texParameteri(ne,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&yt(A)}function D(A){let b=A.textures;for(let z=0,ue=b.length;z<ue;z++){let oe=b[z];if(S(oe)&&oe.mipmapsAutoUpdate===!0){let ve=T(A),Ee=i.get(oe).__webglTexture;t.bindTexture(ve,Ee),M(ve),t.unbindTexture()}}}let ae=[];function ut(A){if(A.samples>0){if(me(A)===!1){let b=A.textures,z=A.width,ue=A.height,oe=n.COLOR_BUFFER_BIT,ve=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(A),ne=b.length>1;if(ne)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);let N=i.get(b[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,z,ue,0,0,z,ue,oe,n.NEAREST),l===!0&&(ae.length=0,ae.push(n.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ae.push(ve),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);let N=i.get(b[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function me(A){let b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Ne(A,b){let z=A.colorSpace,ue=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==qr&&z!==Gi&&(St.getTransfer(z)===It?(ue!==mi||oe!==On)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",z)),b}function Ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=He,this.resetTextureUnits=Y,this.getTextureUnits=le,this.setTextureUnits=re,this.setTexture2D=de,this.setTexture2DArray=Te,this.setTexture3D=K,this.setTextureCube=U,this.rebindTextures=ht,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=me,this.dispose=G}function Ov(n,e){function t(i,s=Gi){let r,o=St.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_l)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vh)return n.BYTE;if(i===Mh)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===ml)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===wh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===mi)return n.RGBA;if(i===Oi)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===Th)return n.RED;if(i===xl)return n.RED_INTEGER;if(i===fs)return n.RG;if(i===yl)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===Ao||i===Ro||i===Co||i===Io)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===Sl||i===bl||i===wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Po||i===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===El||i===Tl)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Al)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rl)return r.COMPRESSED_R11_EAC;if(i===Cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Po)return r.COMPRESSED_RG11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pl||i===Ll||i===Nl||i===Dl||i===Fl||i===Ol||i===Ul||i===Bl||i===zl||i===kl||i===Hl||i===Gl||i===Vl||i===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===ql||i===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Xl)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Jl||i===Lo||i===Kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function kv(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Dh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),S=v.envMap,M=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(zv.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hv(n,e,t,i){let s={},r={};function o(v,S){let M=S.program;i.uniformBlockBinding(v,M,s[v.id])}function a(v,S){let M=s[v.id];M===void 0&&(p(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",m));let T=S.program;i.updateUBOMapping(v,T);let x=e.render.frame;r[v.id]!==x&&(c(v),r[v.id]=x)}function l(v){let S=n.createBuffer(),M=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(v){let S=s[v.id],M=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let x=0,_=M.length;x<_;x++){let w=M[x];if(Array.isArray(w))for(let R=0,C=w.length;R<C;R++)h(w[R],x,R,T);else h(w,x,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,S,M,T){if(d(v,S,M,T)===!0){let x=v.__offset,_=v.value;if(Array.isArray(_)){let w=0;for(let R=0;R<_.length;R++){let C=_[R],I=y(C,!0);u(C,v.__data,w),w+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function u(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}function d(v,S,M,T){let x=v.value,_=S+"_"+M;if(Array.isArray(x)){T[_]===void 0&&(T[_]=[]);let w=T[_],R=!1;for(let C=0;C<x.length;C++)f(x[C],w,C)===!0&&(R=!0);return R}return f(x,T,_)}function f(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let T=S[M];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let S=v.uniforms,M=0,T=16;for(let _=0,w=S.length;_<w;_++){let R=Array.isArray(S[_])?S[_]:[S[_]];for(let C=0,I=R.length;C<I;C++){let P=R[C],B=Array.isArray(P.value)?P.value:[P.value],L=Array.isArray(S[_])||Array.isArray(P.value),G=M;for(let H=0,se=B.length;H<se;H++){let X=B[H],Y=y(X,L),le=M%T,re=le%Y.boundary,He=le+re;M+=re,He!==0&&T-He<Y.storage&&(M+=T-He),H===0&&(G=M),M+=Y.storage}let Z=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new Z((M-G)/Float32Array.BYTES_PER_ELEMENT),P.__offset=G}}let x=M%T;return x>0&&(M+=T-x),v.__size=M,v.__cache={},this}function y(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):je("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(v){let S=v.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}function Vv(){return Ei===null&&(Ei=new Ua(Gv,16,16,fs,pi),Ei.name="DFG_LUT",Ei.minFilter=Cn,Ei.magFilter=Cn,Ei.wrapS=Mi,Ei.wrapT=Mi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,yg,vg,Mg,Sg,bg,wg,Eg,Tg,Ag,Rg,Cg,Ig,Pg,Lg,Ng,Dg,Fg,Og,Ug,Bg,zg,kg,Hg,Gg,Vg,Wg,Xg,qg,Yg,Zg,Jg,Kg,$g,jg,Qg,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,x_,y_,v_,M_,S_,b_,w_,E_,T_,A_,R_,C_,I_,P_,L_,N_,D_,F_,O_,U_,B_,z_,k_,H_,G_,V_,W_,X_,q_,Y_,Z_,J_,K_,$_,j_,Q_,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,_x,xx,yx,vx,Mx,Sx,bx,wx,Ex,Tx,Ax,Rx,Cx,Ix,Px,Lx,Nx,Dx,Fx,Ox,Ux,Bx,gt,Le,Ti,jl,zx,Jf,Fo,Af,Xx,qx,Kf,$f,Yx,Zx,Jx,ec,oy,jf,Qf,ep,tp,np,ip,Pf,Lf,Nf,Df,Ff,qh,Yh,Zh,Wh,br,Jy,Ky,Bf,ev,Ql,ov,lv,hv,dv,pv,_v,Kh,$h,Ev,Cv,Iv,Pv,Lv,Yf,No,Xh,Uv,Bv,jh,Qh,zv,sp,Gv,Ei,tc,eu=kn(()=>{Vh();Vh();og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
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
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,vg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Ig=`vec3 transformedNormal = objectNormal;
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
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$g=`#ifdef USE_ENVMAP
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
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
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
#endif`,i_=`uniform sampler2D dfgLUT;
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
}`,s_=`
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m_=`#if defined( USE_POINTS_UV )
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
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
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
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W_=`float getShadowMask() {
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,J_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ox=`uniform sampler2D t2D;
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform float backgroundBlurriness;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
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
}`,dx=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,px=`#define DISTANCE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
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
}`,xx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,vx=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define LAMBERT
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
}`,bx=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,Tx=`#define NORMAL
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
}`,Ax=`#define PHONG
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
}`,Rx=`#define PHONG
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
}`,Cx=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Nx=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:dg,aomap_pars_fragment:fg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:_g,bsdfs:xg,iridescence_fragment:yg,bumpmap_pars_fragment:vg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:wg,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Pg,displacementmap_vertex:Lg,emissivemap_fragment:Ng,emissivemap_pars_fragment:Dg,colorspace_fragment:Fg,colorspace_pars_fragment:Og,envmap_fragment:Ug,envmap_common_pars_fragment:Bg,envmap_pars_fragment:zg,envmap_pars_vertex:kg,envmap_physical_pars_fragment:$g,envmap_vertex:Hg,fog_vertex:Gg,fog_pars_vertex:Vg,fog_fragment:Wg,fog_pars_fragment:Xg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Yg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Kg,lights_toon_fragment:jg,lights_toon_pars_fragment:Qg,lights_phong_fragment:e_,lights_phong_pars_fragment:t_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:s_,lights_fragment_maps:r_,lights_fragment_end:o_,lightprobes_pars_fragment:a_,logdepthbuf_fragment:l_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:u_,map_fragment:d_,map_pars_fragment:f_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:__,morphinstance_vertex:x_,morphcolor_vertex:y_,morphnormal_vertex:v_,morphtarget_pars_vertex:M_,morphtarget_vertex:S_,normal_fragment_begin:b_,normal_fragment_maps:w_,normal_pars_fragment:E_,normal_pars_vertex:T_,normal_vertex:A_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:L_,opaque_fragment:N_,packing:D_,premultiplied_alpha_fragment:F_,project_vertex:O_,dithering_fragment:U_,dithering_pars_fragment:B_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:k_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:G_,shadowmap_vertex:V_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:Z_,specularmap_fragment:J_,specularmap_pars_fragment:K_,tonemapping_fragment:$_,tonemapping_pars_fragment:j_,transmission_fragment:Q_,transmission_pars_fragment:ex,uv_pars_fragment:tx,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:sx,background_vert:rx,background_frag:ox,backgroundCube_vert:ax,backgroundCube_frag:lx,cube_vert:cx,cube_frag:hx,depth_vert:ux,depth_frag:dx,distance_vert:fx,distance_frag:px,equirect_vert:mx,equirect_frag:gx,linedashed_vert:_x,linedashed_frag:xx,meshbasic_vert:yx,meshbasic_frag:vx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:bx,meshmatcap_frag:wx,meshnormal_vert:Ex,meshnormal_frag:Tx,meshphong_vert:Ax,meshphong_frag:Rx,meshphysical_vert:Cx,meshphysical_frag:Ix,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Nx,points_frag:Dx,shadow_vert:Fx,shadow_frag:Ox,sprite_vert:Ux,sprite_frag:Bx},Le={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ti={basic:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:An([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:An([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new $e(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:An([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:An([Le.points,Le.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:An([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:An([Le.common,Le.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:An([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:An([Le.sprite,Le.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:An([Le.common,Le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:An([Le.lights,Le.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ti.physical={uniforms:An([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};jl={r:0,b:0,g:0},zx=new Ct,Jf=new lt;Jf.set(-1,0,0,0,1,0,0,0,1);Fo=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pt(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:As});r.uniforms.tEquirect.value=t;let o=new jt(s,r),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=Cn),new _r(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Af=256,Xx=3,qx=20,Kf=256,$f=16,Yx=3,Zx=new O,Jx=new $e,ec=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _r(1,10,null),this._boxMesh=new jt(new Pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Zx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(Jx));let m=new _r(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Af,xf(e))}_fromTexture(e,t){e.mapping===Cs||e.mapping===vr?this._setSize(e.image.length===0?Af:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Rf(e,!1,!1),i=Math.log2(e)-Xx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Rf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Cs||e.mapping===vr?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Kx(),this._integrationMaterial=$x());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/$f);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Yx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Kf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=jx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};oy={[fh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[Eo]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};jf=new In,Qf=new Ui(1,1),ep=new ro(1),tp=new Jr,np=new Oa,ip=new io,Pf=[],Lf=[],Nf=new Float32Array(16),Df=new Float32Array(9),Ff=new Float32Array(4);qh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ay(t.type)}},Yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yy(t.type)}},Zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Wh=/(\w+)(\])?(\[|\.)?/g;br=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Zy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};Jy=37297,Ky=0;Bf=new lt;ev={[fh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[Eo]:"ACESFilmic",[_h]:"AgX",[xh]:"Neutral",[gh]:"Custom"};Ql=new O;ov=/^[ \t]*#include +<([\w\d./]+)>/gm;lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;hv={[Ts]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};dv={[vr]:"ENVMAP_MODE_REFRACTION"};pv={[dh]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};_v=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $h(e),t.set(e,i)),i}},$h=class{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}};Ev=0;Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
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
}`,Pv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Lv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Yf=new Ct,No=new O,Xh=new O;Uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`,jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ti({vertexShader:Uv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends Si{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new jh,g={},v=t.getContextAttributes(),S=null,M=null,T=[],x=[],_=new Ue,w=null,R=null,C=new Rn;C.viewport=new Gt;let I=new Rn;I.viewport=new Gt;let P=[C,I],B=new hl,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=T[j];return de===void 0&&(de=new dr,T[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=T[j];return de===void 0&&(de=new dr,T[j]=de),de.getGripSpace()},this.getHand=function(j){let de=T[j];return de===void 0&&(de=new dr,T[j]=de),de.getHandSpace()};function Z(j){let de=x.indexOf(j.inputSource);if(de===-1)return;let Te=T[de];Te!==void 0&&(Te.update(j.inputSource,j.frame,c||o),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",se);for(let j=0;j<T.length;j++){let de=x[j];de!==null&&(x[j]=null,T[j].disconnect(de))}L=null,G=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,M=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),R!==null){let j=R.camera;j.fov=R.fov,j.zoom=R.zoom,j.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,K=null,U=null;v.depth&&(U=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=v.stencil?Hi:Oi,K=v.stencil?Is:di);let q={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(q),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Wn(d.textureWidth,d.textureHeight,{format:mi,type:On,depthTexture:new Ui(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Wn(f.framebufferWidth,f.framebufferHeight,{format:mi,type:On,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(j){for(let de=0;de<j.removed.length;de++){let Te=j.removed[de],K=x.indexOf(Te);K>=0&&(x[K]=null,T[K].disconnect(Te))}for(let de=0;de<j.added.length;de++){let Te=j.added[de],K=x.indexOf(Te);if(K===-1){for(let q=0;q<T.length;q++)if(q>=x.length){x.push(Te),K=q;break}else if(x[q]===null){x[q]=Te,K=q;break}if(K===-1)break}let U=T[K];U&&U.connect(Te)}}function X(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let de=j.near,Te=j.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),B.near=I.near=C.near=de,B.far=I.far=C.far=Te,(L!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,G=B.far),B.layers.mask=j.layers.mask|6,C.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let K=j.parent,U=B.cameras;X(B,K);for(let q=0;q<U.length;q++)X(U[q],K);B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&j.isPerspectiveCamera&&(R={camera:j,fov:j.fov,zoom:j.zoom}),Y(j,B,K)};function Y(j,de,Te){Te===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Na*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return g[j]};let le=null;function re(j,de){if(h=de.getViewerPose(c||o),p=de,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let K=!1;Te.length!==B.cameras.length&&(B.cameras.length=0,K=!0);for(let Q=0;Q<Te.length;Q++){let ce=Te[Q],xe=null;if(f!==null)xe=f.getViewport(ce);else{let Ie=u.getViewSubImage(d,ce);xe=Ie.viewport,Q===0&&(e.setRenderTargetTextures(M,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(M))}let he=P[Q];he===void 0&&(he=new Rn,he.layers.enable(Q),he.viewport=new Gt,P[Q]=he),he.matrix.fromArray(ce.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ce.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(xe.x,xe.y,xe.width,xe.height),Q===0&&(B.matrix.copy(he.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),K===!0&&B.cameras.push(he)}let U=s.enabledFeatures;if(U&&U.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let Q=u.getDepthInformation(Te[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,s.renderState)}if(U&&U.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let Q=0;Q<Te.length;Q++){let ce=Te[Q].camera;if(ce){let xe=g[ce];xe||(xe=new oo,g[ce]=xe);let he=u.getCameraImage(ce);xe.sourceTexture=he}}}}for(let Te=0;Te<T.length;Te++){let K=x[Te],U=T[Te];K!==null&&U!==void 0&&U.update(K,de,c||o)}le&&le(j,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),p=null}let He=new Zf;He.setAnimationLoop(re),this.setAnimationLoop=function(j){le=j},this.dispose=function(){}}},zv=new Ct,sp=new lt;sp.set(-1,0,0,0,1,0,0,0,1);Gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;tc=class{constructor(e={}){let{canvas:t=pf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let y=f,m=new Set([vl,yl,xl]),g=new Set([On,di,Mr,Is,gl,_l]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,x=null,_=[],w=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,P=null,B=null,L=null,G=null;this._outputColorSpace=Tn;let Z=0,H=0,se=null,X=-1,Y=null,le=new Gt,re=new Gt,He=null,j=new $e(0),de=0,Te=t.width,K=t.height,U=1,q=null,$=null,Q=new Gt(0,0,Te,K),ce=new Gt(0,0,Te,K),xe=!1,he=new as,Ie=new Ba,Me=!1,Xe=!1,ke=new Ct,qe=new O,Ge=new Gt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function _t(){return se===null?U:1}let D=i;function ae(E,F){return t.getContext(E,F)}let ut,st,me,Tt,Ne,Ye,A,b,z,ue,oe,ve,Ee,ne,ie,Se,N,ee,W,_e,ge,fe,De;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),D===null){let F="webgl2";if(D=ae(F,E),D===null)throw ae(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(E){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),rt("WebGLRenderer: "+E.message),E}function Ke(){ut=new ey(D),ut.init(),ge=new Ov(D,ut),st=new Vx(D,ut,e,ge),me=new Dv(D,ut),st.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),B=D.createFramebuffer(),L=D.createFramebuffer(),G=D.createFramebuffer(),Tt=new iy(D),Ne=new vv,Ye=new Fv(D,ut,me,Ne,st,ge,Tt),A=new Qx(C),b=new rg(D),fe=new Hx(D,b),z=new ty(D,b,Tt,fe),ue=new ry(D,z,b,fe,Tt),ee=new sy(D,st,Ye),ie=new Wx(Ne),oe=new yv(C,A,ut,st,fe,ie),ve=new kv(C,Ne),Ee=new Sv,ne=new Rv(ut),N=new kx(C,A,me,ue,p,l),Se=new Nv(C,ue,st),De=new Hv(D,Tt,st,me),W=new Gx(D,ut,Tt),_e=new ny(D,ut,Tt),Tt.programs=oe.programs,C.capabilities=st,C.extensions=ut,C.properties=Ne,C.renderLists=Ee,C.shadowMap=Se,C.state=me,C.info=Tt}y!==On&&(R=new ay(y,t.width,t.height,a,s,r));let pe=new Qh(C,D);this.xr=pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(Te,K,!1))},this.getSize=function(E){return E.set(Te,K)},this.setSize=function(E,F,J=!0){if(pe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=E,K=F,t.width=Math.floor(E*U),t.height=Math.floor(F*U),J===!0&&(t.style.width=E+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Te*U,K*U).floor()},this.setDrawingBufferSize=function(E,F,J){Te=E,K=F,U=J,t.width=Math.floor(E*J),t.height=Math.floor(F*J),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(y===On){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(le)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,F,J,k){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,F,J,k),me.viewport(le.copy(Q).multiplyScalar(_t()).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,F,J,k){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,F,J,k),me.scissor(re.copy(ce).multiplyScalar(_t()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){me.setScissorTest(xe=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,J=!0){let k=0;if(E){let V=!1;if(se!==null){let we=se.texture.format;V=m.has(we)}if(V){let we=se.texture.type,Pe=g.has(we),be=N.getClearColor(),Re=N.getClearAlpha(),Be=be.r,et=be.g,ot=be.b;Pe?(v[0]=Be,v[1]=et,v[2]=ot,v[3]=Re,D.clearBufferuiv(D.COLOR,0,v)):(S[0]=Be,S[1]=et,S[2]=ot,S[3]=Re,D.clearBufferiv(D.COLOR,0,S))}else k|=D.COLOR_BUFFER_BIT}F&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),N.dispose(),Ee.dispose(),ne.dispose(),Ye.dispose(),Ne.dispose(),A.dispose(),ue.dispose(),z.dispose(),fe.dispose(),De.dispose(),oe.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ci),pe.removeEventListener("sessionend",We),pt.stop()};function Ze(E){E.preventDefault(),Ph("WebGLRenderer: Context Lost."),I=!0}function tt(){Ph("WebGLRenderer: Context Restored."),I=!1;let E=Tt.autoReset,F=Se.enabled,J=Se.autoUpdate,k=Se.needsUpdate,V=Se.type;Ke(),Tt.autoReset=E,Se.enabled=F,Se.autoUpdate=J,Se.needsUpdate=k,Se.type=V}function Ae(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function vt(E){let F=E.target;F.removeEventListener("dispose",vt),Nt(F)}function Nt(E){Un(E),Ne.remove(E)}function Un(E){let F=Ne.get(E).programs;F!==void 0&&(F.forEach(function(J){oe.releaseProgram(J)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,J,k,V,we){F===null&&(F=yt);let Pe=V.isMesh&&V.matrixWorld.determinantAffine()<0,be=Rt(E,F,J,k,V);me.setMaterial(k,Pe);let Re=J.index,Be=1;if(k.wireframe===!0){if(Re=z.getWireframeAttribute(J),Re===void 0)return;Be=2}let et=J.drawRange,ot=J.attributes.position,Fe=et.start*Be,at=(et.start+et.count)*Be;we!==null&&(Fe=Math.max(Fe,we.start*Be),at=Math.min(at,(we.start+we.count)*Be)),Re!==null?(Fe=Math.max(Fe,0),at=Math.min(at,Re.count)):ot!=null&&(Fe=Math.max(Fe,0),at=Math.min(at,ot.count));let dt=at-Fe;if(dt<0||dt===1/0)return;fe.setup(V,k,be,J,Re);let mt,bt=W;if(Re!==null&&(mt=b.get(Re),bt=_e,bt.setIndex(mt)),V.isMesh)k.wireframe===!0?(me.setLineWidth(k.wireframeLinewidth*_t()),bt.setMode(D.LINES)):bt.setMode(D.TRIANGLES);else if(V.isLine){let pn=k.linewidth;pn===void 0&&(pn=1),me.setLineWidth(pn*_t()),V.isLineSegments?bt.setMode(D.LINES):V.isLineLoop?bt.setMode(D.LINE_LOOP):bt.setMode(D.LINE_STRIP)}else V.isPoints?bt.setMode(D.POINTS):V.isSprite&&bt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))bt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let pn=V._multiDrawStarts,ze=V._multiDrawCounts,on=V._multiDrawCount,At=Re?b.get(Re).bytesPerElement:1,_i=Ne.get(k).currentProgram.getUniforms();for(let mn=0;mn<on;mn++)_i.setValue(D,"_gl_DrawID",mn),bt.render(pn[mn]/At,ze[mn])}else if(V.isInstancedMesh)bt.renderInstances(Fe,dt,V.count);else if(J.isInstancedBufferGeometry){let pn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ze=Math.min(J.instanceCount,pn);bt.renderInstances(Fe,dt,ze)}else bt.render(Fe,dt)};function ji(E,F,J,k){P!==null&&E.isNodeMaterial&&P.setObject(k,E),Me===!0&&ie.setState(E,J,!1),E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=Sn,E.needsUpdate=!0,zn(E,F,k),E.side=ds,E.needsUpdate=!0,zn(E,F,k),E.side=tn):zn(E,F,k)}this.compile=function(E,F,J=null){J===null&&(J=E),P!==null&&P.renderStart(E,F,J),x=ne.get(J),x.init(F),w.push(x),J.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(x.pushLight(V),V.castShadow&&x.pushShadow(V))}),E!==J&&E.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(x.pushLight(V),V.castShadow&&x.pushShadow(V))}),x.setupLights(),P!==null&&P.updateLights(x.state.lightsArray),Xe=this.localClippingEnabled,Me=ie.init(this.clippingPlanes,Xe),Me===!0&&ie.setGlobalState(this.clippingPlanes,F),P!==null&&Se.render(x.state.shadowsArray,J,F);let k=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let we=V.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let be=we[Pe];ji(be,J,F,V),k.add(be)}else ji(we,J,F,V),k.add(we)}),x=w.pop(),P!==null&&P.renderEnd(),k},this.compileAsync=function(E,F,J=null){let k=this.compile(E,F,J);return new Promise(V=>{function we(){if(k.forEach(function(Pe){let Re=Ne.get(Pe).currentProgram;(Re===void 0||Re.isReady())&&k.delete(Pe)}),k.size===0){V(E);return}setTimeout(we,10)}ut.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let gi=null;function Bn(E){gi&&gi(E)}function Ci(){pt.stop()}function We(){pt.start()}let pt=new Zf;pt.setAnimationLoop(Bn),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(E){gi=E,pe.setAnimationLoop(E),E===null?pt.stop():pt.start()},pe.addEventListener("sessionstart",Ci),pe.addEventListener("sessionend",We),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(E,F);let J=pe.enabled===!0&&pe.isPresenting===!0,k=R!==null&&(se===null||J)&&R.begin(C,se);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,F,se),x=ne.get(E,w.length),x.init(F),x.state.textureUnits=Ye.getTextureUnits(),w.push(x),ke.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Ie.setFromArrayCamera(F):he.setFromProjectionMatrix(ke,Qn,F.reversedDepth),Xe=this.localClippingEnabled,Me=ie.init(this.clippingPlanes,Xe),T=Ee.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Pe=C.xr.getDepthSensingMesh();Pe!==null&&Ot(Pe,F,-1/0,C.sortObjects)}Ot(E,F,0,C.sortObjects),T.finish(),P!==null&&P.updateLights(x.state.lightsArray),C.sortObjects===!0&&T.sort(q,$),ht=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ht&&N.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),Me===!0&&ie.beginShadows();let V=x.state.shadowsArray;if(Se.render(V,E,F),Me===!0&&ie.endShadows(),(k&&R.hasRenderPass())===!1){let Pe=T.opaque,be=T.transmissive;if(x.setupLights(),F.isArrayCamera){let Re=F.cameras;if(be.length>0)for(let Be=0,et=Re.length;Be<et;Be++){let ot=Re[Be];bn(Pe,be,E,ot)}ht&&N.render(E);for(let Be=0,et=Re.length;Be<et;Be++){let ot=Re[Be];yn(T,E,ot,ot.viewport)}}else be.length>0&&bn(Pe,be,E,F),ht&&N.render(E),yn(T,E,F)}se!==null&&H===0&&(Ye.updateMultisampleRenderTarget(se),Ye.updateRenderTargetMipmap(se)),k&&R.end(C),E.isScene===!0&&E.onAfterRender(C,E,F),fe.resetDefaultState(),X=-1,Y=null,w.pop(),w.length>0?(x=w[w.length-1],Ye.setTextureUnits(x.state.textureUnits),Me===!0&&ie.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,P!==null&&P.renderEnd()};function Ot(E,F,J,k){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)x.pushLight(E),E.castShadow&&x.pushShadow(E);else if(E.isSprite){let Pe=F.isArrayCamera?Ie:he;if(!E.frustumCulled||E.intersectsFrustum(Pe)){k&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);let be=ue.update(E),Re=E.material;Re.visible&&T.push(E,be,Re,J,Ge.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Pe=F.isArrayCamera?Ie:he;if(!E.frustumCulled||E.intersectsFrustum(Pe)){let be=ue.update(E),Re=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ge.copy(be.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(ke)),Array.isArray(Re)){let Be=be.groups;for(let et=0,ot=Be.length;et<ot;et++){let Fe=Be[et],at=Re[Fe.materialIndex];at&&at.visible&&T.push(E,be,at,J,Ge.z,Fe,F)}}else Re.visible&&T.push(E,be,Re,J,Ge.z,null,F)}}}let we=E.children;for(let Pe=0,be=we.length;Pe<be;Pe++)Ot(we[Pe],F,J,k)}function yn(E,F,J,k){let{opaque:V,transmissive:we,transparent:Pe}=E;x.setupLightsView(J),Me===!0&&ie.setGlobalState(C.clippingPlanes,J),k&&me.viewport(le.copy(k)),V.length>0&&fn(V,F,J),we.length>0&&fn(we,F,J),Pe.length>0&&fn(Pe,F,J),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function bn(E,F,J,k){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[k.id]===void 0){let Fe=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[k.id]=new Wn(1,1,{generateMipmaps:!0,type:Fe?pi:On,minFilter:ki,samples:Math.max(4,st.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:St.workingColorSpace})}let we=x.state.transmissionRenderTarget[k.id],Pe=k.viewport||le;we.setSize(Pe.z*C.transmissionResolutionScale,Pe.w*C.transmissionResolutionScale);let be=C.getRenderTarget(),Re=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(we),C.getClearColor(j),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),ht&&N.render(J);let et=C.toneMapping;C.toneMapping=wi;let ot=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),x.setupLightsView(k),Me===!0&&ie.setGlobalState(C.clippingPlanes,k),fn(E,J,k),Ye.updateMultisampleRenderTarget(we),Ye.updateRenderTargetMipmap(we),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let at=0,dt=F.length;at<dt;at++){let mt=F[at],{object:bt,geometry:pn,material:ze,group:on}=mt;if(ze.side===tn&&bt.layers.test(k.layers)){let At=ze.side;ze.side=Sn,ze.needsUpdate=!0,qt(bt,J,k,pn,ze,on),ze.side=At,ze.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ye.updateMultisampleRenderTarget(we),Ye.updateRenderTargetMipmap(we))}C.setRenderTarget(be,Re,Be),C.setClearColor(j,de),ot!==void 0&&(k.viewport=ot),C.toneMapping=et}function fn(E,F,J){let k=F.isScene===!0?F.overrideMaterial:null;for(let V=0,we=E.length;V<we;V++){let Pe=E[V],{object:be,geometry:Re,group:Be}=Pe,et=Pe.material;et.allowOverride===!0&&k!==null&&(et=k),be.layers.test(J.layers)&&qt(be,F,J,Re,et,Be)}}function qt(E,F,J,k,V,we){P!==null&&V.isNodeMaterial&&P.setObject(E,V),E.onBeforeRender(C,F,J,k,V,we),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(C,F,J,k,E,we),V.transparent===!0&&V.side===tn&&V.forceSinglePass===!1?(V.side=Sn,V.needsUpdate=!0,C.renderBufferDirect(J,F,k,V,E,we),V.side=ds,V.needsUpdate=!0,C.renderBufferDirect(J,F,k,V,E,we),V.side=tn):C.renderBufferDirect(J,F,k,V,E,we),E.onAfterRender(C,F,J,k,V,we)}function Ln(E){let F=0;for(let J of E)J.texture!==null&&F++;return F}function zn(E,F,J){F.isScene!==!0&&(F=yt);let k=Ne.get(E),V=x.state.lights,we=x.state.shadowsArray,Pe=V.state.version,be=oe.getParameters(E,V.state,we,F,J,x.state.lightProbeGridArray),Re=oe.getProgramCacheKey(be),Be=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let et=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=A.get(E.envMap||k.environment,et),k.envMapRotation=k.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",vt),Be=new Map,k.programs=Be,k.programVariants=new Map);let ot=Be.get(Re);if(ot!==void 0){if(k.currentProgram===ot&&k.lightsStateVersion===Pe)return vn(E,be),ot}else be.uniforms=oe.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,J,be),E.onBeforeCompile(be,C),ot=oe.acquireProgram(be,Re),Be.set(Re,ot),k.uniforms=be.uniforms;let Fe=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=ie.uniform),vn(E,be),k.needsLights=Nn(E),k.lightsStateVersion=Pe,k.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.sunLights.value=V.state.sun,Fe.sunLightShadows.value=V.state.sunShadow,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.sunShadowMatrix.value=V.state.sunShadowMatrix,Fe.sunShadowCascade.value=V.state.sunShadowCascade,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),k.numLightProbeGrids=Ln(x.state.lightProbeGridArray),k.currentProgram=ot,k.uniformsList=null,ot}function Vs(E,F,J,k,V){let we=Ne.get(E),Pe=we.currentProgram.id+","+k+","+V,be=we.programVariants.get(Pe);return be===void 0?(be=zn(E,F,J),we.programVariants.set(Pe,be)):(we.currentProgram=be,we.uniformsList=null,we.outputColorSpace=k,we.toneMapping=V),be}function Kt(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=br.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function vn(E,F){let J=Ne.get(E);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function Rt(E,F,J,k,V){F.isScene!==!0&&(F=yt),Ye.resetTextureUnits();let we=F.fog,Pe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,be=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:St.workingColorSpace,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Be=A.get(k.envMap||Pe,Re),et=k.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ot=!!J.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Fe=!!J.morphAttributes.position,at=!!J.morphAttributes.normal,dt=!!J.morphAttributes.color,mt=wi;k.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(mt=C.toneMapping);let bt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pn=bt!==void 0?bt.length:0,ze=Ne.get(k),on=x.state.lights;if(Me===!0&&(Xe===!0||E!==Y)){let kt=E===Y&&k.id===X;ie.setState(k,E,kt)}let At=!1,_i=!1;k.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==on.state.version||V.isBatchedMesh&&ze.batching===!1||!V.isBatchedMesh&&ze.batching===!0||V.isBatchedMesh&&ze.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ze.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ze.instancing===!1||!V.isInstancedMesh&&ze.instancing===!0||V.isSkinnedMesh&&ze.skinning===!1||!V.isSkinnedMesh&&ze.skinning===!0||V.isInstancedMesh&&ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ze.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ze.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ze.instancingMorph===!1&&V.morphTexture!==null||ze.envMap!==Be||k.fog===!0&&ze.fog!==we||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ie.numPlanes||ze.numIntersection!==ie.numIntersection)||ze.vertexAlphas!==et||ze.vertexTangents!==ot||ze.morphTargets!==Fe||ze.morphNormals!==at||ze.morphColors!==dt||ze.morphTargetsCount!==pn||ze.numLightProbeGrids!==Ln(x.state.lightProbeGridArray)?At=!0:(ze.outputColorSpace!==be||ze.toneMapping!==mt)&&(_i=!0):(At=!0,ze.__version=k.version);let mn=ze.currentProgram;(At===!0||_i===!0)&&(mn=_i===!0?Vs(k,F,V,be,mt):zn(k,F,V),P&&k.isNodeMaterial&&P.onUpdateProgram(k,mn,ze));let Ws=!1,xi=!1,yi=!1,wt=mn.getUniforms(),an=ze.uniforms;if(me.useProgram(mn.program)&&(Ws=!0,xi=!0,yi=!0),k.id!==X&&(X=k.id,xi=!0),Ws||Y!==E){me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),wt.setValue(D,"projectionMatrix",E.projectionMatrix),wt.setValue(D,"viewMatrix",E.matrixWorldInverse);let nt=wt.map.cameraPosition;nt!==void 0&&nt.setValue(D,qe.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&wt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&wt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,xi=!0,yi=!0)}if(ze.needsLights&&(on.state.sunShadowMap.length>0&&wt.setValue(D,"sunShadowMap",on.state.sunShadowMap,Ye),on.state.directionalShadowMap.length>0&&wt.setValue(D,"directionalShadowMap",on.state.directionalShadowMap,Ye),on.state.spotShadowMap.length>0&&wt.setValue(D,"spotShadowMap",on.state.spotShadowMap,Ye),on.state.pointShadowMap.length>0&&wt.setValue(D,"pointShadowMap",on.state.pointShadowMap,Ye)),V.isSkinnedMesh){wt.setOptional(D,V,"bindMatrix"),wt.setOptional(D,V,"bindMatrixInverse");let kt=V.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),wt.setValue(D,"boneTexture",kt.boneTexture,Ye))}V.isBatchedMesh&&(wt.setOptional(D,V,"batchingTexture"),wt.setValue(D,"batchingTexture",V._matricesTexture,Ye),wt.setOptional(D,V,"batchingIdTexture"),wt.setValue(D,"batchingIdTexture",V._indirectTexture,Ye),wt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&wt.setValue(D,"batchingColorTexture",V._colorsTexture,Ye));let Dn=J.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&ee.update(V,J,mn),(xi||ze.receiveShadow!==V.receiveShadow)&&(ze.receiveShadow=V.receiveShadow,wt.setValue(D,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(an.envMapIntensity.value=F.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=Vv()),xi){if(wt.setValue(D,"toneMappingExposure",C.toneMappingExposure),ze.needsLights&&$t(an,yi),we&&k.fog===!0&&ve.refreshFogUniforms(an,we),ve.refreshMaterialUniforms(an,k,U,K,x.state.transmissionRenderTarget[E.id]),ze.needsLights&&ze.numLightProbeGrids>0){let kt=M,nt=0;for(let Dt of x.state.lightProbeGridArray)Dt.texture!==null&&(kt.textures[nt]=Dt.texture,kt.min[nt]=Dt.boundingBox.min,kt.max[nt]=Dt.boundingBox.max,kt.resolution[nt]=Dt.resolution,nt++);for(let Dt in kt)kt[Dt].length=nt;an.probesSH.value=kt.textures,an.probesMin.value=kt.min,an.probesMax.value=kt.max,an.probesResolution.value=kt.resolution}br.upload(D,Kt(ze),an,Ye)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(br.upload(D,Kt(ze),an,Ye),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&wt.setValue(D,"center",V.center),wt.setValue(D,"modelViewMatrix",V.modelViewMatrix),wt.setValue(D,"normalMatrix",V.normalMatrix),wt.setValue(D,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let kt=k.uniformsGroups;for(let nt=0,Dt=kt.length;nt<Dt;nt++){let si=kt[nt];De.update(si,mn),De.bind(si,mn)}}return mn}function $t(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Nn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(E,F,J){let k=Ne.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ne.get(E.texture).__webglTexture=F,Ne.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:J,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let J=Ne.get(E);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,J=0){se=E,Z=F,H=J;let k=null,V=!1,we=!1;if(E){let be=Ne.get(E);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(D.FRAMEBUFFER,be.__webglFramebuffer),le.copy(E.viewport),re.copy(E.scissor),He=E.scissorTest,me.viewport(le),me.scissor(re),me.setScissorTest(He),X=-1;return}else if(be.__webglFramebuffer===void 0)Ye.setupRenderTarget(E);else if(be.__hasExternalTextures)Ye.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let et=E.depthTexture;if(be.__boundDepthTexture!==et){if(et!==null&&Ne.has(et)&&(E.width!==et.image.width||E.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(E)}}let Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(we=!0);let Be=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?k=Be[F][J]:k=Be[F],V=!0):E.samples>0&&Ye.useMultisampledRTT(E)===!1?k=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[J]:k=Be,le.copy(E.viewport),re.copy(E.scissor),He=E.scissorTest}else le.copy(Q).multiplyScalar(U).floor(),re.copy(ce).multiplyScalar(U).floor(),He=xe;if(J!==0&&(k=B),me.bindFramebuffer(D.FRAMEBUFFER,k)&&me.drawBuffers(E,k),me.viewport(le),me.scissor(re),me.setScissorTest(He),V){let be=Ne.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,J)}else if(we){let be=F;for(let Re=0;Re<E.textures.length;Re++){let Be=Ne.get(E.textures[Re]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Re,Be.__webglTexture,J,be)}}else if(E!==null&&J!==0){let be=Ne.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,J)}X=-1};function ii(E){let F=Ne.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=st.textureFormatReadable(E.format),F.__typeReadable=st.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,J,k,V,we,Pe,be=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe],Array.isArray(Re)&&(Re=Re[0])),Re){me.bindFramebuffer(D.FRAMEBUFFER,Re);try{let Be=E.textures[be],et=Be.format,ot=Be.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be);let Fe=ii(Be);if(Fe.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-k&&J>=0&&J<=E.height-V&&D.readPixels(F,J,k,V,ge.convert(et),ge.convert(ot),we)}finally{let Be=se!==null?Ne.get(se).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,F,J,k,V,we,Pe,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe],Array.isArray(Re)&&(Re=Re[0])),Re)if(F>=0&&F<=E.width-k&&J>=0&&J<=E.height-V){me.bindFramebuffer(D.FRAMEBUFFER,Re);let Be=E.textures[be],et=Be.format,ot=Be.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be);let Fe=ii(Be);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,at),D.bufferData(D.PIXEL_PACK_BUFFER,we.byteLength,D.STREAM_READ),D.readPixels(F,J,k,V,ge.convert(et),ge.convert(ot),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let dt=se!==null?Ne.get(se).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,dt);let mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await gf(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,at),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,we),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(at),D.deleteSync(mt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,J=0){let k=Math.pow(2,-J),V=Math.floor(E.image.width*k),we=Math.floor(E.image.height*k),Pe=F!==null?F.x:0,be=F!==null?F.y:0;Ye.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Pe,be,V,we),me.unbindTexture()},this.copyTextureToTexture=function(E,F,J=null,k=null,V=0,we=0){let Pe,be,Re,Be,et,ot,Fe,at,dt,mt=E.isCompressedTexture?E.mipmaps[we]:E.image;if(J!==null)Pe=J.max.x-J.min.x,be=J.max.y-J.min.y,Re=J.isBox3?J.max.z-J.min.z:1,Be=J.min.x,et=J.min.y,ot=J.isBox3?J.min.z:0;else{let wt=Math.pow(2,-V);Pe=Math.floor(mt.width*wt),be=Math.floor(mt.height*wt),E.isDataArrayTexture?Re=mt.depth:E.isData3DTexture?Re=Math.floor(mt.depth*wt):Re=1,Be=0,et=0,ot=0}k!==null?(Fe=k.x,at=k.y,dt=k.z):(Fe=0,at=0,dt=0);let bt=ge.convert(F.format),pn=ge.convert(F.type),ze;F.isData3DTexture?(Ye.setTexture3D(F,0),ze=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ye.setTexture2DArray(F,0),ze=D.TEXTURE_2D_ARRAY):(Ye.setTexture2D(F,0),ze=D.TEXTURE_2D),me.activeTexture(D.TEXTURE0),me.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),me.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),me.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let on=me.getParameter(D.UNPACK_ROW_LENGTH),At=me.getParameter(D.UNPACK_IMAGE_HEIGHT),_i=me.getParameter(D.UNPACK_SKIP_PIXELS),mn=me.getParameter(D.UNPACK_SKIP_ROWS),Ws=me.getParameter(D.UNPACK_SKIP_IMAGES);me.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),me.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),me.pixelStorei(D.UNPACK_SKIP_ROWS,et),me.pixelStorei(D.UNPACK_SKIP_IMAGES,ot);let xi=E.isDataArrayTexture||E.isData3DTexture,yi=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let wt=Ne.get(E),an=Ne.get(F),Dn=Ne.get(wt.__renderTarget),kt=Ne.get(an.__renderTarget);me.bindFramebuffer(D.READ_FRAMEBUFFER,Dn.__webglFramebuffer),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let nt=0;nt<Re;nt++)xi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(E).__webglTexture,V,ot+nt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,we,dt+nt)),D.blitFramebuffer(Be,et,Be+Pe,et+be,Fe,at,Fe+Pe,at+be,D.DEPTH_BUFFER_BIT,D.NEAREST);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||Ne.has(E)){let wt=Ne.get(E),an=Ne.get(F);me.bindFramebuffer(D.READ_FRAMEBUFFER,L),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let Dn=0;Dn<Re;Dn++)xi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,V,ot+Dn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,V),yi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,we,dt+Dn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,we),V!==0?D.blitFramebuffer(Be,et,Be+Pe,et+be,Fe,at,Fe+Pe,at+be,D.COLOR_BUFFER_BIT,D.NEAREST):yi?D.copyTexSubImage3D(ze,we,Fe,at,dt+Dn,Be,et,Pe,be):D.copyTexSubImage2D(ze,we,Fe,at,Be,et,Pe,be);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else yi?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(ze,we,Fe,at,dt,Pe,be,Re,bt,pn,mt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ze,we,Fe,at,dt,Pe,be,Re,bt,mt.data):D.texSubImage3D(ze,we,Fe,at,dt,Pe,be,Re,bt,pn,mt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,we,Fe,at,Pe,be,bt,pn,mt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,we,Fe,at,mt.width,mt.height,bt,mt.data):D.texSubImage2D(D.TEXTURE_2D,we,Fe,at,Pe,be,bt,pn,mt);me.pixelStorei(D.UNPACK_ROW_LENGTH,on),me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At),me.pixelStorei(D.UNPACK_SKIP_PIXELS,_i),me.pixelStorei(D.UNPACK_SKIP_ROWS,mn),me.pixelStorei(D.UNPACK_SKIP_IMAGES,Ws),we===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&D.generateMipmap(ze),me.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&Ye.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ye.setTextureCube(E,0):E.isData3DTexture?Ye.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ye.setTexture2DArray(E,0):Ye.setTexture2D(E,0),me.unbindTexture()},this.resetState=function(){Z=0,H=0,se=null,me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}});function Vi(n,e,t){let i=0;for(let s=0;s<tu;s+=1)i+=n(e,t+((s+.5)/tu-.5)*Xv);return i/tu}function ap(n,e,t={},i=0){let s=Math.max(0,Ls(i,0)),r=ps(Ls(t.soak,0),0,1),o=ps(Ls(t.airTarget,nu),-xn,Yn),a=!!n.onSnow,l=Ls(n.velocity,0),c=ps(Ls(n.leg,0),-xn,Yn),h=a?ps(e.carryFrom+Ls(n.ride,0),e.snowFrom-xn,e.snowFrom+Yn):Ls(n.height,e.snowFrom),u=e.snowFrom,d=e.carryFrom,f=0,p=!1,y=null,m=s>0?Math.max(1,Math.ceil(s/Wv-1e-9)):0,g=m>0?s/m:0,v=s>0?(e.snowTo-e.snowFrom)/s:0,S=s>0?(e.carryTo-e.carryFrom)/s:0,M=x=>Math.min(x,S+Jv),T=(x,_)=>ps(_,x-qv,x+Yv);for(let x=0;x<m;x+=1){let _=T(u,d),w=(x+1)/m;if(u=e.snowFrom+(e.snowTo-e.snowFrom)*w,d=e.carryFrom+(e.carryTo-e.carryFrom)*w,a){let R=T(u,d),C=M((R-_)/g),I=op**2*(_-h)+2*Kv*op*(C-l),P=I<=-9.81;I=Math.max(I,-9.81),l+=I*g,h+=l*g;let B=I+9.81;if(h-u<-xn){let G=l;h=u-xn,l=Math.max(l,M(v)),B+=(l-G)/g}f+=Math.max(0,B)/9.81;let L=P&&l>C&&h-R>Zv;(h-u>Yn||L)&&(a=!1,p=!0,c=ps(h-u,-xn,Yn),l>S&&(l=S+(l-S)*(1-$v*r)))}else{l-=9.81*g,h+=l*g,c=Qv(c,o,jv*g);let R=h-u<-xn;(R||h-c<=u&&l<=S)&&(a=!0,y??(y={closing:Math.max(0,S-l)}),R&&(h=u-xn,l=Math.max(l,M(v))))}}return{air:a?0:Math.max(0,h-c-u),height:h,leg:a?ps(h-u,-xn,Yn):c,liftoff:p,load:m>0?f/m:a?1:0,onSnow:a,ride:h-d,touchdown:y,velocity:l}}var Wv,xn,Yn,Xv,tu,qv,Yv,Zv,Jv,op,Kv,$v,jv,nu,ps,Ls,Qv,Uo=kn(()=>{Wv=.008333333333333333,xn=.42,Yn=.45,Xv=16.5,tu=12,qv=.32,Yv=.38,Zv=.25,Jv=3.5,op=9,Kv=.7,$v=.85,jv=2.5,nu=-.12,ps=(n,e,t)=>Math.min(t,Math.max(e,n)),Ls=(n,e)=>Number.isFinite(n)?n:e,Qv=(n,e,t)=>n+ps(e-n,-t,t)});var ms,iu=kn(()=>{ms=Object.freeze([Object.freeze({x:.2,y:-.57,out:.23}),Object.freeze({x:-.02,y:-.6,out:.21})])});function wp(){let n=new Ft,e=new Ft;n.add(e);let{board:t,tips:i}=mM(e),s=new Ft;s.rotation.order="YXZ",e.add(s);let r=new Ft;s.add(r);let o=new Ft;o.position.set(0,hp,0),o.rotation.order="XZY",s.add(o),Et(rc([{y:.535,x:.088,z:.102,shift:-.004},{y:.578,x:.078,z:.088,shift:-.002}]),it.sleeve,o,[0,0,0],"shirt-collar"),Et(new ei(.066,.072,.12,6),it.face,o,[.004,.61,0],"neck");let a=new zi;a.moveTo(0,.06),a.lineTo(.056,0),a.lineTo(0,-.06),a.lineTo(-.056,0),a.closePath(),Et(new ls(a),it.sleeve,o,[-.193,.22,0],"back-print").rotation.y=-Math.PI/2;let l=xM(o),c=Ns(e,7,8,it.tee,"oversized-tee"),h=Ns(e,2,8,it.sleeve,"undershirt-hem"),u=Ns(e,5,8,it.pants,"pant-seat"),d=[0,1].map(()=>({cloth:Ns(e,11,8,it.pants,"baggy-pant-leg"),cuff:Ns(e,3,8,it.pantsShade,"stacked-pant-cuff"),pocket:Et(new Pt(.16,.19,.04),it.pantsShade,e,[0,0,0],"cargo-pocket"),trail:Array.from({length:11},()=>new O)})),f=[0,1].map(()=>{let I=Et(new Pt(.075,.19,.115),it.mitt,e,[0,0,0],"mitten");return Et(new Pt(.05,.085,.05),it.mitt,I,[.04,-.02,0],"mitten-thumb"),{tee:Ns(e,3,6,it.tee,"tee-sleeve"),sleeve:Ns(e,7,6,it.sleeve,"long-sleeve"),mitt:I}}),p=new en;p.position.set(.18,.12,.08),t.add(p);let y=new jt(new ao(.82,24),new Fn({color:3893368,transparent:!0,opacity:.2,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.scale.y=.48,n.add(y);let m=Object.freeze({hips:Er(),knees:Er(),ankles:Er(),shoulders:Er(),elbows:Er(),hands:Er()}),g=-.35,v=0,S=.35,M,T=new Vn,x=Object.fromEntries(["anchor","back","crease","down","drag","front","hang","limb","point","thrown","tumble","nose","offset","pelvisFront","pelvisUp","pole","reach","right","shin","side","thigh","toe","travel","upright","waist","wind","wrist"].map(I=>[I,new O])),_=Object.fromEntries(["chest","fall","hips","lean","look","middle","pelvis","slope","spin","turn","yaw"].map(I=>[I,new Vn])),w=new hi,R=(I,P,B,L,G,Z)=>{let H=I.path[P];return H.center.copy(B),H.rx=L,H.rz=G,H.framed=!!Z,Z&&(H.forward.copy(Wi).applyQuaternion(Z),H.normal.copy(Tr).applyQuaternion(Z)),H.center},C=(I={},P={},B=0,L={x:0,y:1,z:-.35},G=void 0)=>{let Z=Ve(I.position?.across),H=Ve(I.position?.downhill),se=Math.max(0,Ve(I.air)),X=Ve(I.heading),Y=Ve(P.boardYaw,Ve(I.boardYaw,X)),le=se>.02?xt(Ve(P.boardTweak),-1.35,1.35):0,re=xt(Ve(P.styleYaw),-.4,.4),He=Ve(P.bodyYaw,Ve(I.torsoYaw,X)),j=xt(Ve(P.jumpStretch),0,1),de=xt(Ve(P.grab),0,1)*(1-Ve(P.fall)),Te=xt(Ve(P.stumble),0,1),K=xt(Ve(P.fall),0,1),U=["back","sit"].includes(P.fallKind)?P.fallKind:"front",q=K*K*(3-2*K),$=xt(Math.cos(pp(Y-X))*3,-1,1),Q=xt(Ve(P.crouch,.3),0,1),ce=Q+((U==="sit"?1:.55)-Q)*q,xe=xt(Ve(P.bodyTilt,Ve(P.lean)*.55),-.8,.8)*(1-q),he=Math.sign(xe)||1,Ie=$<0?0:1,Me=xe*$>0?1:0,Xe=se<=.05?xt(Ve(P.handDrag),0,1)*(1-q):0,ke=xt(Ve(P.legOffset),-xn,Yn),qe=xt(-ke/xn,0,1),Ge=xt(Ve(P.snowResponse),0,1),yt=xt(eM-tM(ce)+j*.22-Ge*(se>0?0:.08)-de*.18-Xe*.06+xt(Ve(P.spray),0,1)*.05,lp,cp),ht=B+se,_t=Math.max(.2,Ve(L.y,1)),D=Number.isFinite(G?.height),ae=-Ve(L.x)/_t,ut=-Ve(L.z,-.35)/_t,st=D?Ve(G.pitch):Math.atan(ae*Math.sin(Y)-ut*Math.cos(Y)),me=D?Ve(G.roll):Math.atan(ae*Math.cos(Y)+ut*Math.sin(Y)),Tt=se<=.02&&I.surface==="powder"?xt(Ve(I.speed)/18,0,1)*.045:0;se<=.02&&(g=st,v=me,S=Ve(I.slopeGrade,-Ve(L.z,-.35)/_t));let Ne=Ve(I.elapsed,NaN),Ye=Ne-M;M=Ne;let A=Ye>0&&Ye<.1?Ye:0;n.position.set(Z,0,-H),e.position.set(0,0,0),e.quaternion.identity();let b=se>.02?0:-Math.sin(Y+re-X)*.42*xt(Ve(I.speed)/10,0,1),z=xt(se/.3,0,1);t.position.set(0,(D?G.height+se+(B-G.height)*z:ht)+.035,0),t.rotation.set(xt((se>.02?g:st)+$*(Tt+Ve(P.boardPitch)+Ve(P.press)*.15+xt(Ve(P.stylePitch),-.25,.25)),-.8,.8),-Y-le-re,xt(-Ve(P.boardRoll)*$+b-xt(Ve(P.styleRoll),-.3,.3)+(se>.02?v:me),-1.1,1.1));let ue=xt(Ve(P.boardFlex),0,1);i[0].rotation.x=ue*.1,i[1].rotation.x=-ue*.1,x.toe.copy(Wi).applyQuaternion(t.quaternion),x.nose.copy(cu).negate().applyQuaternion(t.quaternion);for(let We of[0,1])m.ankles[We].set(0,sc.height,(We?1:-1)*sc.stance).applyQuaternion(t.quaternion).add(t.position);let oe=aM*$-He+Ve(P.upperBodyTwist)*.09;x.travel.set(Math.sin(X),0,-Math.cos(X)),x.right.set(Math.cos(X),0,Math.sin(X));let ve=Math.atan(S);_.slope.setFromAxisAngle(Wi,-ve*cM),_.lean.setFromAxisAngle(x.travel,xe*hM+he*Xe*.1),_.turn.setFromEuler(w.set($*(-Math.max(0,ce-.3)*.06-Ve(P.foreAft)*.04+Ve(P.press)*.1)+Te*.07,oe,0,"YXZ")),s.quaternion.copy(_.lean).multiply(_.slope).multiply(_.turn),_.hips.setFromAxisAngle(Wi,-ve*su).premultiply(_.lean).multiply(_.turn),x.upright.set(0,Math.cos(ve*su),-Math.sin(ve*su));let Ee=We=>{s.position.copy(x.upright).multiplyScalar(We/x.upright.y).applyQuaternion(_.lean).addScaledVector(x.offset.copy(x.nose).setY(0),Ve(P.foreAft)*.08*$),s.position.y+=ht};Ee(yt);let ne=Number.isFinite(P.hipTwist)?P.hipTwist:xt(pp(Y+le+re-He)*.68,-1,1),ie=-Ve(P.spineTwist),Se=xt(xe*$/.6,0,1),N=xt(-xe*$/.6,0,1),ee=xt(Ve(P.spray),0,1)*(1-q),W=xt((.08+ce*.4+Math.max(0,ce-.7)+qe*.14-ee*.08)*(1-Se*.7)-Se*.12+N*.38+de*.6+Xe*.1*Me-j*.16+Te*.12*(1-q)+Ve(P.spineHinge),-.3,1.35);W+=((U==="sit"?1.25:U==="back"?.12:.3)-W)*q;let _e=de*.34+Ve(P.spineSide)+$*W*.45*(1-q)*(1-xt(se/.3,0,1)),ge=()=>{r.rotation.set(0,xt(-lM*$-ne*.9,ie-dp,ie+dp),-W*.3),o.rotation.set(_e,ie,-W),_.pelvis.copy(_.hips).multiply(r.quaternion),_.chest.copy(s.quaternion).multiply(o.quaternion),x.waist.set(0,hp,0).applyQuaternion(s.quaternion).add(s.position);for(let We of[0,1]){let pt=We?1:-1;m.hips[We].set(0,0,pt*sM).applyQuaternion(_.pelvis).add(s.position),m.shoulders[We].set(0,rM,pt*.258).applyQuaternion(_.chest).add(x.waist)}};ge();let fe=()=>{let We=0;for(let pt=0;pt<4;pt+=1){let Ot=Math.max(m.hips[0].distanceTo(m.ankles[0]),m.hips[1].distanceTo(m.ankles[1]))-dM*(se>.3?iM:nM);if(Ot<=0)break;x.offset.copy(t.position).setY(t.position.y+sc.height).sub(s.position),s.position.addScaledVector(x.offset.normalize(),Ot*1.05),We+=Ot*1.05,ge()}return We},De=yt-fe();if(ke!==0&&(Ee(xt(De+ke,lp,cp)),ge(),fe()),de>0){x.anchor.copy(p.position).applyQuaternion(t.quaternion).add(t.position);for(let We=0;We<4;We+=1){let pt=m.shoulders[1].distanceTo(x.anchor)-ou*ru*.99;if(pt<=0||W>=1.5)break;W=Math.min(1.5,W+pt*1.8*de),ge()}}let Ke=We=>B-(Ve(L.x)*We.x+Ve(L.z,-.35)*We.z)/_t,pe=xt((Xe-.7)/.3,0,1)*Me;if(pe>0){let We=Ie,pt=W;for(let Ot=0;Ot<4;Ot+=1){x.drag.copy(m.shoulders[We]).addScaledVector(x.right,he*.15),x.drag.y=Ke(x.drag)+.06;let yn=m.shoulders[We].distanceTo(x.drag)-ou*ru*.99;if(yn<=0||W>=pt+.8*pe)break;W=Math.min(pt+.8*pe,W+yn*1.6*pe),ge()}}x.front.copy(Wi).applyQuaternion(s.quaternion),x.pelvisFront.copy(Wi).applyQuaternion(_.pelvis),x.pelvisUp.copy(Tr).applyQuaternion(_.pelvis),x.down.set(0,-1,0);let Ze=X+xt(Ve(P.headLook),-1,1)*.4;_.look.setFromEuler(w.set(0,Math.PI/2-Ze,-.1,"YZX")),_.look.premultiply(_.yaw.copy(_.chest).invert());let tt=2*Math.acos(xt(Math.abs(_.look.w),0,1));tt>up?_.yaw.identity().slerp(_.look,up/tt):_.yaw.copy(_.look),A>0?T.slerp(_.yaw,1-Math.exp(-uM*A)):T.copy(_.yaw),l.quaternion.copy(I.crashed?T.identity():T),_.yaw.setFromAxisAngle(Tr,oe+ie);let Ae=xt(Ve(I.speed)/28,0,1),vt=Ve(I.elapsed),Nt=(We,pt)=>x.hang.copy(pt).addScaledVector(We,-pt.dot(We));for(let We of[0,1]){let pt=We?1:-1,Ot=d[We],yn=m.hips[We],bn=m.knees[We],fn=m.ankles[We];x.pole.copy(x.toe).addScaledVector(x.nose,-pt*.3).addScaledVector(x.front,.2),gp(bn,yn,fn,xp,yp,x.pole),x.thigh.subVectors(bn,yn).normalize(),x.shin.subVectors(fn,bn).normalize();let{path:qt}=Ot.cloth,Ln=Math.acos(xt(x.thigh.dot(x.shin),-1,1));x.crease.subVectors(x.shin,x.thigh),x.crease.lengthSq()>1e-8&&x.crease.normalize(),[["waist",0,.14,.13,0,0,0],["hip",0,.166,.152,0,0,0],[x.thigh,.34,.17,.16,.04,.012,.3],[x.thigh,.66,.168,.16,.034,.014,.5],["above",0,.166,.164,.02,.014,.6],["knee",0,.164,.168,.012,.016,.65],["below",0,.168,.166,.016,.02,.75],[x.shin,.45,.174,.168,.02,.03,.9],[x.shin,.7,.176,.17,.012,.04,1],[x.shin,.95,.178,.172,0,.034,.85],[x.shin,1.03,.176,.17,0,.03,.8]].forEach(([Pe,be,Re,Be,et,ot,Fe],at)=>{let dt=qt[at].center,mt=null;Pe==="waist"?dt.copy(yn).addScaledVector(x.pelvisUp,.1):Pe==="hip"?dt.copy(yn).addScaledVector(x.pelvisFront,-.03):Pe==="above"?dt.copy(bn).addScaledVector(mt=x.thigh,-au):Pe==="below"?dt.copy(bn).addScaledVector(mt=x.shin,au):Pe==="knee"?(mt=x.shin,dt.copy(bn).addScaledVector(x.crease,au*Math.tan(Ln/4)-.015)):(mt=Pe,mt===x.thigh?dt.copy(yn).lerp(bn,be):dt.copy(bn).lerp(fn,be)),mt&&(dt.addScaledVector(Nt(mt,x.down),et),dt.addScaledVector(Nt(mt,x.travel),-ot*Ae));let bt=Ot.trail[at];A>0?(x.offset.copy(dt),bt.lerp(dt,1-Math.exp(-A*22)),x.limb.subVectors(bt,dt).multiplyScalar(Fe),x.limb.length()>.08&&x.limb.setLength(.08),dt.add(x.limb),bt.sub(x.offset).clampLength(0,.3).add(x.offset)):bt.copy(dt),mt&&(x.side.crossVectors(x.travel,mt),dt.addScaledVector(x.side,Math.sin(vt*11-at*.9+We*2.4)*.006*Ae*Fe)),qt[at].rx=Re,qt[at].rz=Be,qt[at].framed=!1}),Ds(Ot.cloth,x.toe),R(Ot.cuff,0,x.offset.copy(qt[8].center).lerp(qt[9].center,.5),.186,.18),R(Ot.cuff,1,qt[10].center,.2,.192),R(Ot.cuff,2,x.offset.copy(qt[10].center).addScaledVector(x.shin,.075),.194,.184),Ds(Ot.cuff,x.toe);let Vs=Ot.pocket.scale.y;mp(Ot.pocket,yn,bn,x.toe),Ot.pocket.scale.y=Vs,Ot.pocket.position.copy(qt[2].center).lerp(qt[3].center,.6).add(x.offset.set(0,0,pt*.162).applyQuaternion(Ot.pocket.quaternion));let Kt=f[We],vn=m.shoulders[We],Rt=m.elbows[We],$t=m.hands[We],Nn=P.arms?.[We]??ms[We],ii=U==="back"?{x:-.2,y:-.12,out:.44}:U==="sit"?{x:-.12,y:-.5,out:.32}:{x:.4,y:.1,out:.24},E=q>0?{x:Ve(Nn.x)+(ii.x-Ve(Nn.x))*q,y:Ve(Nn.y)+(ii.y-Ve(Nn.y))*q,out:Ve(Nn.out)+(ii.out-Ve(Nn.out))*q}:Nn,F=We===1?de:0,J=We===Ie?Xe:0,k=(We===0?de:0)*.26+(We===Ie?0:Xe)*.18;$t.set(Ve(E.x,ms[We].x),Ve(E.y,ms[We].y)+k,pt*(Ve(E.out,ms[We].out)+k*.4)).applyQuaternion(_.yaw).add(vn),J>0&&(Me?x.drag.copy(vn).addScaledVector(x.right,he*.15):x.drag.copy(s.position).addScaledVector(x.right,he*.55).lerp(vn,.25),x.drag.y=Ke(x.drag)+.06,$t.lerp(x.drag,J*.9)),F>0&&$t.lerp(x.anchor,F);let V=ou*(fp+(ru-fp)*Math.max(J,F));x.reach.subVectors($t,vn),x.reach.length()>V&&$t.copy(vn).addScaledVector(x.reach.normalize(),V),x.pole.set(-.85,-.25,pt*.25).applyQuaternion(_.yaw),gp(Rt,vn,$t,vp,Mp+lu,x.pole),x.limb.subVectors(Rt,vn).normalize(),x.reach.subVectors($t,Rt).normalize(),x.wrist.copy($t).addScaledVector(x.reach,-lu),R(Kt.tee,0,x.offset.copy(vn).addScaledVector(x.limb,-.05),.098,.098),R(Kt.tee,1,x.offset.copy(vn).addScaledVector(x.limb,.09),.104,.104),R(Kt.tee,2,x.offset.copy(vn).addScaledVector(x.limb,.2).addScaledVector(Nt(x.limb,x.down),.012),.112,.112),Ds(Kt.tee,x.front),R(Kt.sleeve,0,x.offset.copy(vn).addScaledVector(x.limb,.14),.08,.08),R(Kt.sleeve,1,x.offset.copy(vn).addScaledVector(x.limb,.29),.078,.078),x.crease.subVectors(x.reach,x.limb),x.crease.lengthSq()>1e-8&&x.crease.normalize(),R(Kt.sleeve,2,x.offset.copy(Rt).addScaledVector(x.crease,.11*Math.tan(Math.acos(xt(x.limb.dot(x.reach),-1,1))/4)),.08,.08),R(Kt.sleeve,3,x.offset.copy(Rt).addScaledVector(x.reach,.11).addScaledVector(Nt(x.reach,x.down),.01),.077,.077),R(Kt.sleeve,4,x.offset.copy(Rt).lerp(x.wrist,.6).addScaledVector(Nt(x.reach,x.down),.014),.071,.071),R(Kt.sleeve,5,x.offset.copy(x.wrist).addScaledVector(x.reach,-.04),.064,.064),R(Kt.sleeve,6,x.wrist,.058,.058),Ds(Kt.sleeve,x.front);let we=Kt.mitt.scale.y;mp(Kt.mitt,Rt,$t,x.front),Kt.mitt.scale.y=we,Kt.mitt.position.copy($t)}let Un=We=>x.offset.copy(m.hips[0]).lerp(m.knees[0],We).add(x.limb.copy(m.hips[1]).lerp(m.knees[1],We)).multiplyScalar(.5);R(u,0,x.wrist.copy(s.position).addScaledVector(x.pelvisUp,.13),.14,.19,_.pelvis),R(u,1,x.wrist.copy(s.position).addScaledVector(x.pelvisUp,.05),.16,.215,_.pelvis),R(u,2,x.wrist.copy(s.position).addScaledVector(x.pelvisUp,-.05).addScaledVector(x.pelvisFront,-.015),.18,.236,_.pelvis),R(u,3,Un(.22),.16,.15),R(u,4,Un(.36).addScaledVector(x.down,.03),.1,.07),Ds(u,x.pelvisFront);let ji=xt((x.thigh.dot(x.pelvisUp)+.75)/.6,0,1);_.middle.copy(_.pelvis).slerp(_.chest,.5);let gi=-.2+ji*.12,Bn=(We,pt=0)=>x.wrist.copy(s.position).addScaledVector(x.pelvisUp,We).addScaledVector(x.pelvisFront,pt),Ci=(We,pt=0)=>x.wrist.set(pt,We,0).applyQuaternion(_.chest).add(x.waist);if(R(c,0,Bn(gi),.24,.305,_.pelvis),R(c,1,Bn(.04),.232,.296,_.pelvis),R(c,2,x.waist,.208,.274,_.middle),R(c,3,Ci(.13),.186,.25,_.chest),R(c,4,Ci(.3,.008),.19,.262,_.chest),R(c,5,Ci(.455),.166,.26,_.chest),R(c,6,Ci(.548,-.008),.1,.168,_.chest),Ds(c,x.front),R(h,0,Bn(gi-.06),.234,.299,_.pelvis),R(h,1,Bn(gi+.02),.234,.299,_.pelvis),Ds(h,x.front),q>0){let We=Ve(P.fallHeading,X);x.thrown.set(Math.sin(We),0,-Math.cos(We)),x.point.copy(x.front).setY(0).normalize(),U==="sit"&&x.thrown.copy(x.toe).setY(0).normalize().negate();let pt=U==="back"?-1:1,Ot=U==="sit"?0:Math.atan2(x.point.z*x.thrown.x*pt-x.point.x*x.thrown.z*pt,(x.point.x*x.thrown.x+x.point.z*x.thrown.z)*pt);_.spin.setFromAxisAngle(Tr,Ot*q);let yn=-(Ve(L.x)*x.thrown.x+Ve(L.z,-.35)*x.thrown.z)/_t,bn=U==="sit"?1.15-Math.atan(yn):Math.PI/2-Math.atan(yn)-.1;x.tumble.crossVectors(Tr,x.thrown).normalize(),_.fall.setFromAxisAngle(x.tumble,bn*q).multiply(_.spin),e.quaternion.copy(_.fall),e.position.copy(t.position).applyQuaternion(_.fall).negate().add(t.position);let fn=1/0;for(let qt of Object.values(m))for(let Ln of qt)x.point.copy(Ln).applyQuaternion(_.fall).add(e.position),fn=Math.min(fn,x.point.y-Ke(x.point));for(let[qt,Ln]of[[.2,.97],[-.2,.97],[.2,-.97],[-.2,-.97]])x.point.set(qt,.07,Ln).applyQuaternion(t.quaternion).add(t.position).applyQuaternion(_.fall).add(e.position),fn=Math.min(fn,x.point.y-Ke(x.point)+.3);e.position.y+=Math.max(.03-fn,(.12-fn)*q)}y.position.set(.13,B+.024,.13),y.scale.set(1+se*.18,.48+se*.08,1),y.material.opacity=.22/(1+se*.9)};return C(),Object.freeze({board:t,body:s,grabAnchor:p,grabHand:f[1].mitt,group:n,hands:Object.freeze(f.map(I=>I.mitt)),head:l,joints:m,rig:e,shadow:y,update:C})}var Yt,it,lp,cp,eM,tM,nM,iM,xp,yp,vp,Mp,lu,sM,hp,rM,oM,sc,aM,lM,su,cM,hM,up,uM,dp,fp,ru,ou,au,dM,xt,Ve,pp,Tr,Wi,cu,Et,gs,Sp,fM,rc,Ar,mp,gp,Zt,pM,bp,_p,mM,Bo,gM,_M,xM,yM,Ns,vM,Ds,Er,Ep=kn(()=>{eu();Uo();iu();Yt=(n,e=.92,t=0)=>new Mn({color:n,roughness:e,metalness:t,flatShading:!0}),it=Object.freeze({board:Yt(15165e3,.48),boardBase:Yt(15165e3,.5),boardDeck:Yt(2303790,.55),boardGraphic:Yt(15919316,.6),boardEdge:Yt(13226966,.4),bootSole:Yt(15000284,.8),boot:Yt(1447964,.94),binding:Yt(3356477,.74),face:Yt(12750704,.98),goggles:Yt(921361,.35),goggleStrap:Yt(2764081,.9),lens:Object.assign(Yt(12896203,.3,.45),{emissive:new $e(2895667)}),lensTint:Object.assign(Yt(8686225,.26,.6),{emissive:new $e(1842979)}),helmet:Yt(2435117,.5),helmetTrim:Yt(855568,.8),mitt:Yt(1908772,.97),pants:Yt(15790318,1),pantsShade:Yt(13948632,1),pantsFold:Yt(14935268,1),sleeve:Yt(15921644,.98),sleeveShade:Yt(14539731,.98),tee:Yt(2829875,.95)}),lp=.6,cp=1.6,eM=1.56,tM=n=>Math.max(0,n-.22)**1.15,nM=.97,iM=.995,xp=.705,yp=.685,vp=.4,Mp=.36,lu=.09,sM=.12,hp=.17,rM=.5,oM=.63,sc=Object.freeze({height:.2,stance:.42}),aM=.48,lM=.2,su=0,cM=0,hM=.62,up=1.25,uM=12,dp=.8,fp=.94,ru=.985,ou=vp+Mp+lu,au=.16,dM=xp+yp,xt=(n,e,t)=>Math.min(t,Math.max(e,n)),Ve=(n,e=0)=>Number.isFinite(n)?n:e,pp=n=>Math.atan2(Math.sin(n),Math.cos(n)),Tr=new O(0,1,0),Wi=new O(1,0,0),cu=new O(0,0,1),Et=(n,e,t,i=[0,0,0],s="")=>{let r=new jt(n,e);return r.position.set(...i),r.castShadow=!["back-print","binding-strap","board-chevron","boot-sole","boot-cuff","chin-strap","goggle-nose","goggle-outrigger","goggle-strap-mark","goggle-tint","helmet-sticker","helmet-vent","cargo-pocket","goggle-frame","goggle-lens","goggle-strap","helmet-brim","shirt-collar","topsheet-stripe"].includes(s),r.receiveShadow=!0,r.userData.part=s,t.add(r),r},gs=.6,Sp=[[1,-gs],[1,gs],[gs,1],[-gs,1],[-1,gs],[-1,-gs],[-gs,-1],[gs,-1]],fM=(n,e)=>{let t=n.shift??0;return e===8?Sp.map(([i,s])=>[i*n.x+t,n.y,s*n.z]):Array.from({length:e},(i,s)=>{let r=(s+.5)/e*Math.PI*2;return[Math.cos(r)*n.x+t,n.y,Math.sin(r)*n.z]})},rc=(n,e=8)=>{let t=n.map(r=>fM(r,e)),i=[];for(let r=0;r<t.length-1;r+=1)for(let o=0;o<e;o+=1){let a=(o+1)%e,l=t[r],c=t[r+1];i.push(...l[o],...c[o],...l[a],...l[a],...c[o],...c[a])}for(let[r,o,a]of[[n[0],t[0],!1],[n.at(-1),t.at(-1),!0]]){let l=[r.shift??0,r.y,0];for(let c=0;c<e;c+=1){let h=(c+1)%e;i.push(...l,...o[a?h:c],...o[a?c:h])}}let s=new Ut;return s.setAttribute("position",new ft(i,3)),s.computeVertexNormals(),s},Ar={axis:new O,bend:new O,cross:new O,basis:new Ct},mp=(n,e,t,i)=>{let s=Ar.axis.subVectors(t,e),r=Math.max(.01,s.length());s.divideScalar(r);let o=n.userData.facing??(n.userData.facing=i.clone());return o.addScaledVector(s,-o.dot(s)),o.lengthSq()<1e-6&&(o.copy(Math.abs(s.x)<.9?Wi:cu),o.addScaledVector(s,-o.dot(s))),o.normalize(),Ar.cross.crossVectors(o,s),n.quaternion.setFromRotationMatrix(Ar.basis.makeBasis(o,s,Ar.cross)),n.position.copy(e).add(t).multiplyScalar(.5),n.scale.y=r,r},gp=(n,e,t,i,s,r)=>{let o=Ar.axis.subVectors(t,e),a=Math.max(1e-4,o.length());o.divideScalar(a);let l=Math.max(1,a/((i+s)*.999)),c=i*l,h=s*l,u=xt((c*c-h*h+a*a)/(2*a),-c,c),d=Ar.bend.copy(r).addScaledVector(o,-r.dot(o));return d.lengthSq()<1e-8&&d.copy(Math.abs(o.y)<.9?Tr:Wi),d.normalize(),n.copy(e).addScaledVector(o,u).addScaledVector(d,Math.sqrt(Math.max(0,c*c-u*u)))},Zt=Object.freeze({half:.97,flat:.7,widest:.75,waist:.176,tip:.208,kick:.095,top:.1,thick:.034}),pM=n=>{let e=Math.abs(n);if(e<=Zt.widest)return Zt.waist+(Zt.tip-Zt.waist)*(e/Zt.widest)**2;let t=(e-Zt.widest)/(Zt.half-Zt.widest);return Zt.tip*Math.sqrt(Math.max(.08,1-t*t))},bp=n=>{let e=Math.abs(n);return e<=Zt.flat?0:Zt.kick*((e-Zt.flat)/(Zt.half-Zt.flat))**1.7},_p=(n,e,t,i)=>{let s=[it.boardBase,it.boardEdge,...new Set(n.slice(1).map((h,u)=>t((h+n[u])/2)))],r=s.map(()=>[]),o=(h,u,d)=>[u*pM(h),Zt.top-(d?0:Zt.thick)+bp(h),h-e],a=(h,u,d,f,p)=>r[s.indexOf(h)].push(...u,...d,...f,...u,...f,...p);for(let h=1;h<n.length;h+=1){let u=n[h-1],d=n[h];a(t((u+d)/2),o(u,-1,!0),o(d,-1,!0),o(d,1,!0),o(u,1,!0)),a(it.boardBase,o(u,1,!1),o(d,1,!1),o(d,-1,!1),o(u,-1,!1)),a(it.boardEdge,o(u,1,!0),o(d,1,!0),o(d,1,!1),o(u,1,!1)),a(it.boardEdge,o(u,-1,!1),o(d,-1,!1),o(d,-1,!0),o(u,-1,!0))}for(let[h,u]of i){let[d,f,p,y]=[o(h,-1,!0),o(h,1,!0),o(h,1,!1),o(h,-1,!1)];u>0?a(it.boardEdge,d,f,p,y):a(it.boardEdge,y,p,f,d)}let l=new Ut;l.setAttribute("position",new ft(r.flat(),3));let c=0;return r.forEach((h,u)=>{l.addGroup(c,h.length/3,u),c+=h.length/3}),l.computeVertexNormals(),{geometry:l,surfaces:s}},mM=n=>{let e=new Ft;e.rotation.order="YXZ",n.add(e);let t=o=>{let a=Math.abs(o);return a>.66?it.board:a>.6?it.boardGraphic:it.boardDeck},i=_p([-.7,-.66,-.6,-.3,0,.3,.6,.66,.7],0,t,[]);Et(i.geometry,i.surfaces,e,[0,0,0],"snowboard");let s=new zi;s.moveTo(0,.11),s.lineTo(.07,0),s.lineTo(0,-.11),s.lineTo(-.07,0),s.closePath(),Et(new ls(s),it.boardGraphic,e,[0,Zt.top+.002,0],"topsheet-stripe").rotation.x=-Math.PI/2;let r=[];for(let o of[-1,1]){let a=new Ft;a.position.z=o*Zt.flat,e.add(a);let l=[.7,.75,.82,.89,.94,.97].map(f=>o*f),c=_p(o>0?l:[...l].reverse(),o*Zt.flat,t,[[o*Zt.half,o]]);Et(c.geometry,c.surfaces,a,[0,0,0],"snowboard"),r.push(a);let h=Et(new Pt(.2,.006,.035),it.boardGraphic,a,[0,Zt.top+bp(o*.79)+.004,o*.09],"board-chevron");h.rotation.x=-o*.16;let u=new Ft;u.position.set(0,Zt.top,o*sc.stance),u.rotation.y=-o*.2,e.add(u),Et(new Pt(.34,.022,.21),it.binding,u,[0,.011,0],"binding-disc");let d=Et(new Pt(.035,.24,.17),it.binding,u,[-.165,.14,0],"binding-highback");d.rotation.z=-.2,Et(new Pt(.37,.02,.2),it.bootSole,u,[.012,.032,0],"boot-sole"),Et(new Pt(.36,.13,.185),it.boot,u,[.012,.107,0],"boot"),Et(new Pt(.19,.16,.175),it.boot,u,[-.07,.24,0],"boot-cuff").rotation.z=-.12,Et(new Pt(.07,.03,.215),it.board,u,[.02,.185,0],"binding-strap"),Et(new Pt(.06,.028,.215),it.board,u,[.15,.135,0],"binding-strap")}return{board:e,tips:r}},Bo=(n,e,t,i,s=Math.PI/2,r=!1,o=4)=>new ei(n,e,t,o,1,r,s-i,i*2),gM=Math.PI/2,_M=Math.PI*1.5,xM=n=>{let e=new Ft;e.position.set(.012,oM,0),n.add(e),Et(rc([{y:-.02,x:.058,z:.052,shift:.03},{y:.045,x:.094,z:.088,shift:.016},{y:.125,x:.11,z:.1,shift:.004},{y:.2,x:.108,z:.1}],6),it.face,e,[0,0,0],"face"),Et(rc([{y:.19,x:.166,z:.156,shift:-.012},{y:.25,x:.16,z:.15,shift:-.014},{y:.298,x:.13,z:.122,shift:-.016},{y:.33,x:.076,z:.07,shift:-.018}]),it.helmet,e,[0,0,0],"helmet-shell"),Et(Bo(.162,.154,.14,2,_M,!0,7),it.helmet,e,[-.012,.125,0],"helmet-skirt").scale.set(1.04,1,.965),Et(Bo(.2,.2,.014,.55,gM,!1,3),it.helmetTrim,e,[-.012,.2,0],"helmet-brim");for(let[i,s]of[[.085,0],[.06,.052],[.06,-.052]])Et(new Pt(.046,.008,.014),it.helmetTrim,e,[i,.31-Math.abs(s)*.25,s],"helmet-vent").rotation.z=-.5;for(let i of[-1,1]){Et(new Pt(.1,.1,.028),it.helmetTrim,e,[-.005,.03,i*.142],"helmet-ear-pad");let s=Et(new Pt(.014,.014,.1),it.helmetTrim,e,[.03,-.018,i*.09],"chin-strap");s.rotation.x=i*.42,s.rotation.y=i*.3}Et(new Pt(.055,.036,.005),it.board,e,[-.04,.145,.153],"helmet-sticker"),Et(new Pt(.005,.03,.05),it.boardGraphic,e,[-.179,.15,-.035],"helmet-sticker"),Et(Bo(.166,.166,.1,1.2),it.goggles,e,[0,.142,0],"goggle-frame"),Et(Bo(.176,.176,.05,1.05),it.lens,e,[0,.158,0],"goggle-lens"),Et(Bo(.176,.173,.034,1.05),it.lensTint,e,[0,.117,0],"goggle-tint"),Et(new Pt(.02,.03,.046),it.goggles,e,[.162,.098,0],"goggle-nose"),Et(rc([{y:.12,x:.172,z:.163,shift:-.012},{y:.172,x:.172,z:.163,shift:-.012}]),it.goggleStrap,e,[0,0,0],"goggle-strap");for(let i of[-1,1])Et(new Pt(.034,.052,.02),it.goggles,e,[.062,.143,i*.158],"goggle-outrigger"),Et(new Pt(.06,.028,.005),it.boardGraphic,e,[-.045,.146,i*.166],"goggle-strap-mark");return e},yM=Array.from({length:6},(n,e)=>{let t=(e+.5)/6*Math.PI*2;return[Math.cos(t),Math.sin(t)]}),Ns=(n,e,t,i,s)=>{let r=e*t,o=[];for(let c=0;c<e-1;c+=1)for(let h=0;h<t;h+=1){let u=c*t+h,d=c*t+(h+1)%t;o.push(u,u+t,d,d,u+t,d+t)}for(let c=0;c<t;c+=1){let h=(c+1)%t;o.push(r,c,h,r+1,r-t+h,r-t+c)}let a=new Ut;a.setIndex(o),a.setAttribute("position",new ln(new Float32Array((r+2)*3),3));let l=Et(a,i,n,[0,0,0],s);return l.frustumCulled=!1,{mesh:l,sides:t,shape:t===8?Sp:yM,path:Array.from({length:e},()=>({center:new O,rx:.1,rz:.1,framed:!1,forward:new O,normal:new O}))}},vM=Object.fromEntries(["into","out","side","bend","corner"].map(n=>[n,new O])),Ds=(n,e)=>{let{path:t,shape:i,sides:s}=n,{into:r,out:o,side:a,bend:l,corner:c}=vM,h=n.mesh.geometry.attributes.position,u=t.length-1;for(let f=0;f<=u;f+=1){let p=t[f],y=1;p.framed||(r.subVectors(p.center,t[Math.max(0,f-1)].center),o.subVectors(t[Math.min(u,f+1)].center,p.center),r.lengthSq()<1e-10&&r.copy(o),o.lengthSq()<1e-10&&o.copy(r),r.normalize(),o.normalize(),p.normal.addVectors(r,o),p.normal.lengthSq()<1e-8&&p.normal.copy(o),p.normal.normalize(),l.subVectors(o,r),l.lengthSq()>1e-6&&(l.normalize(),y=1/Math.max(.82,p.normal.dot(r))),p.forward.copy(f===0?e:t[f-1].forward),p.forward.addScaledVector(p.normal,-p.forward.dot(p.normal)),p.forward.lengthSq()<1e-8&&(p.forward.copy(Math.abs(p.normal.x)<.9?Wi:cu),p.forward.addScaledVector(p.normal,-p.forward.dot(p.normal))),p.forward.normalize()),a.crossVectors(p.forward,p.normal);for(let m=0;m<s;m+=1)c.set(0,0,0).addScaledVector(p.forward,i[m][0]*p.rx).addScaledVector(a,i[m][1]*p.rz),y>1&&c.addScaledVector(l,c.dot(l)*(y-1)),c.add(p.center),h.setXYZ(f*s+m,c.x,c.y,c.z)}let d=t.length*s;h.setXYZ(d,t[0].center.x,t[0].center.y,t[0].center.z),h.setXYZ(d+1,t[u].center.x,t[u].center.y,t[u].center.z),h.needsUpdate=!0,n.mesh.geometry.boundingBox=null,n.mesh.geometry.boundingSphere=null},Er=()=>[new O,new O]});function Tp(n,e,t,i=0){let s=Math.sin(i),r=Math.cos(i),o=0,a=0,l=0;for(let d of ac){let f=e+s*d,p=t+r*d,y=n(f,p);o+=y/ac.length,a+=y*d,l+=(n(f+r*zo,p-s*zo)-n(f-r*zo,p+s*zo))/(zo*2)/ac.length}let c=o-SM,h=n(e,t)+bM,u=(c+h-Math.hypot(c-h,wM))/2;return Object.freeze({height:u,pitch:Math.atan(a/MM),roll:Math.atan(l)})}var ac,MM,zo,SM,bM,wM,Ap=kn(()=>{ac=Object.freeze([-2.4,-1.2,0,1.2,2.4]),MM=ac.reduce((n,e)=>n+e*e,0),zo=.45,SM=.05,bM=.05,wM=.06});function Rp(n){let e=Number(n.radius)||2.5,t=Number(n.id)||0,i=[],s=(a,l,c,h)=>{let u=(a==="pine"?EM:TM)*l,d=Math.max(0,e-u)*c;i.push(Object.freeze({type:a,size:l,turn:nn(t,i.length+20)*Math.PI*2,x:Math.cos(h)*d,z:Math.sin(h)*d*.85}))},r=(a,l)=>(a>0?0:Math.PI)+(nn(t,l)-.5)*1.1,o=nn(t,0)*Math.PI*2;return n.variant==="rock-garden"?(s("rock",.7+nn(t,1)*.15,.15,o),s("rock",.42+nn(t,2)*.3,1,r(1,3)),s("rock",.42+nn(t,4)*.3,1,r(-1,5)),s("rock",.36+nn(t,6)*.26,.8,Math.PI/2+(nn(t,7)-.5)),nn(t,8)>.45&&s("rock",.34+nn(t,9)*.22,.85,-Math.PI/2+(nn(t,10)-.5))):(s("pine",1.1+nn(t,1)*.22,.12,o),s("pine",.58+nn(t,2)*.3,1,r(1,3)),s("pine",.58+nn(t,4)*.3,1,r(-1,5)),nn(t,6)>.4&&s("pine",.5+nn(t,7)*.22,.9,Math.PI/2*(nn(t,8)>.5?1:-1)),s("rock",.48+nn(t,9)*.26,.95,(nn(t,10)>.5?1:-1)*(.9+nn(t,11)*.5))),Object.freeze(i)}var ko,lc,hu,uu,EM,TM,nn,du=kn(()=>{ko=Object.freeze({halfLength:Object.freeze([5,6]),clearance:.5,rootPlate:Object.freeze({width:.7,clearance:1.15})}),lc=Object.freeze({halfLength:Object.freeze([4,5]),stumpWidth:.8,restWidth:1.9}),hu=Object.freeze({radius:Object.freeze([2.5,3.1]),clearance:6}),uu=Object.freeze({radius:Object.freeze([2,2.5]),clearance:1}),EM=1.16,TM=1.09,nn=(n,e)=>{let t=Math.sin(n*127.1+e*311.7+31.37)*43758.5453;return t-Math.floor(t)}});function PM(n={},e=void 0){let t=Jt(n.heading),i=Jt(e,Jt(n.boardYaw,t)),s=Jt(n.speed),r=Jt(n.velocity?.across,Math.sin(t)*s),o=Jt(n.velocity?.downhill,Math.cos(t)*s),a=Object.freeze([Math.sin(i),Math.cos(i)]),l=Object.freeze([Math.cos(i),-Math.sin(i)]);return Object.freeze({along:r*a[0]+o*a[1],sideways:r*l[0]+o*l[1],nose:a,toe:l})}function fu(n={},e={}){let t=Cp[n.surface]??Cp.groomed;if(Jt(n.air)>.08||n.crashed||t.amount<=0)return LM;let i=PM(n,e.boardYaw),s=Jt(e.boardRoll),r=Math.abs(s)>.06?-Math.sign(s)*Xi(Jt(n.skid),0,1)*Math.abs(i.along)*.3:0,o=i.sideways+r,a=Math.abs(o),l=Xi((a-AM)/RM,0,1),c=Xi(Math.max(Math.abs(s),l*.5)/.9,0,1),h=Math.sign(o)||1,u=Math.abs(s)>.06?Math.sign(s):-h,d=Xi((Math.abs(s)-.25)/.6,0,1)*Xi((Math.abs(i.along)-8)/18,0,1)*(1-l);return Object.freeze({rate:CM*t.amount*l*(.45+c*.55),tailRate:IM*t.amount*d,edge:u,way:h,tailEnd:i.along<0?-1:1,lift:(a*(.06+c*.2)+l*.5+Math.abs(i.along)*Xi(Math.abs(s)/.9,0,1)*.1*(d+Math.min(1,Math.abs(r)/3)))*t.lift,throwSpeed:a*(.35+c*.25),carry:.06+.34*Xi(Math.abs(r)/Math.max(a,.01),0,1),life:.3+t.hang*.8,size:.08+t.grain*.26,along:i.along,nose:i.nose,toe:i.toe})}function Pp(n,e=Math.random){let t=n.rate+n.tailRate,i=t>0&&e()<n.tailRate/t,s=()=>e()*2-1,r,o,a,l;return i?(r=[n.edge*Fs.width/2,.07,n.tailEnd*(Fs.length/2-e()*.37)],o=-n.edge*(1.2+e()*2.4)*(.5+Math.abs(n.along)/25),a=n.along*(.35+e()*.3),l=n.lift*(.5+e()*.9)):(r=[n.edge*Fs.width/2,.07,s()*(Fs.length/2-.05)],o=n.way*n.throwSpeed*(.6+e()*.7),a=n.along*(n.carry??.06)*(.5+e())+s()*n.throwSpeed*.12,l=n.lift*(.45+e()*1.1)+.2),Object.freeze({local:Object.freeze(r),velocity:Object.freeze({across:n.toe[0]*o+n.nose[0]*a,up:l,downhill:n.toe[1]*o+n.nose[1]*a}),...DM(n,e(),e(),e())})}function Lp(n=700){let e=[],t=0;return Object.freeze({emit(i,s,r){t=Math.min(t+Math.max(0,i)*Math.max(0,s),n);let o=0;for(;t>=1-1e-9&&e.length<n;){let a=r();e.push({...a,age:0,floor:Jt(a.floor,a.y-.2)}),t-=1,o+=1}return e.length>=n&&(t=Math.min(t,1)),o},particles:()=>e,reset(){e=[],t=0},step(i){if(!(i>0))return;let s=[];for(let r of e){if(r.age+=i,r.age>=r.life)continue;let o=r.heavy?Ip.clump:Ip.fine,a=Math.exp(-o.drag*i);r.vx*=a,r.vz*=a,r.vy=r.vy*a-FM*o.weight*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,!(r.y<r.floor&&r.vy<0)&&s.push(r)}e=s}})}function OM(n,e){let t=Jt(n)-Jt(e);return(Fs.width*Math.abs(Math.cos(t))+Fs.length*Math.abs(Math.sin(t)))/2}function Np({reach:n=150,spacing:e=.3}={}){let t=[],i=!0,s=-1/0;return Object.freeze({points:()=>t,reset(){t=[],i=!0,s=-1/0},update(r={},o=void 0){let a=Jt(r.position?.across),l=Jt(r.position?.downhill);if(l<s-5&&(t=[]),s=l,Jt(r.air)>.05||r.crashed){i=!0;return}let c=t.at(-1);if(c&&!i&&Math.hypot(a-c.across,l-c.downhill)<e)return;let h=Jt(r.heading),u=Jt(r.speed),d=Math.atan2(Jt(r.velocity?.across,Math.sin(h)*u),Jt(r.velocity?.downhill,Math.cos(h)*u));t.push(Object.freeze({across:a,downhill:l,halfWidth:OM(Jt(o,Jt(r.boardYaw,h)),d),deep:UM[r.surface]??.3,starts:i||!c})),i=!1;let f=0;for(;f<t.length&&t[f].downhill<l-n;)f+=1;f>0&&(t=t.slice(f))}})}function pu(n){let e=Math.max(.05,Jt(n,Fs.width/2)),t=i=>[{at:i*e*.45,lift:.02,tone:"floor",alpha:.6},{at:i*e,lift:.022,tone:"wall",alpha:.58},{at:i*(e+.16),lift:.06,tone:"berm",alpha:.42},{at:i*(e+.37),lift:.03,tone:"snow",alpha:0}];return Object.freeze([...t(-1).reverse(),...t(1)].map(i=>Object.freeze(i)))}function Dp(n,e,t,i,s,r){let o=Xi(s,0,1),a=Xi(r,0,1);return o+a<=1?n+(e-n)*o+(t-n)*a:i+(t-i)*(1-o)+(e-i)*(1-a)}var Fs,Xi,Jt,Cp,AM,RM,CM,IM,LM,NM,DM,FM,Ip,UM,Fp=kn(()=>{Fs=Object.freeze({length:1.94,width:.4}),Xi=(n,e,t)=>Math.min(t,Math.max(e,n)),Jt=(n,e=0)=>Number.isFinite(n)?n:e,Cp=Object.freeze({powder:Object.freeze({amount:1,hang:1,lift:1,grain:1}),chop:Object.freeze({amount:.75,hang:.8,lift:.9,grain:.9}),slush:Object.freeze({amount:.6,hang:.45,lift:.6,grain:1.1}),groomed:Object.freeze({amount:.32,hang:.4,lift:.5,grain:.55}),ice:Object.freeze({amount:.05,hang:.2,lift:.3,grain:.3}),rail:Object.freeze({amount:0,hang:0,lift:0,grain:0})}),AM=.8,RM=9,CM=320,IM=150;LM=Object.freeze({rate:0,tailRate:0,edge:1,way:1,tailEnd:1,lift:0,throwSpeed:0,carry:0,life:0,size:0,along:0,nose:Object.freeze([0,1]),toe:Object.freeze([1,0])});NM=.32,DM=(n,e,t,i)=>i<NM?{heavy:!0,life:n.life*(.28+e*.3),size:n.size*(.2+t*.22)}:{heavy:!1,life:n.life*(.7+e*.8),size:n.size*(.7+t*.8)},FM=9.81,Ip=Object.freeze({clump:Object.freeze({drag:.5,weight:1}),fine:Object.freeze({drag:2.5,weight:.5})});UM=Object.freeze({powder:1,chop:.7,slush:.55,groomed:.3,ice:.05,rail:0})});function Op({misalign:n,impact:e,meter:t}){return t>=100||n>hc&&e>BM?"crash":n>=cc&&e>mu?"sketchy":"clean"}var cc,hc,mu,BM,uc,gu=kn(()=>{cc=Math.PI/9,hc=Math.PI*7/18,mu=1.2,BM=3.3,uc=.45});function Os(n){let e=Zp(n)*kM;return Object.freeze({min:zM+e,max:xu+e})}function Mu(n){let e=ye(n,0),t=Ce(e,0,dc),i=Wp*(t**2/(2*dc)+Math.max(0,e-dc));return-.36*e-i+.2/.024*(Math.cos(e*.024-.3)-Math.cos(-.3))+.03/.061*(Math.cos(e*.061)-1)}function xs(n={},e="groomed"){let t=ye(n.across,0),i=ye(n.downhill,0),s=Gp[e]??Gp.groomed,r=(h,u)=>lS(h,u)*s.amplitude,o=.08,a=r(t,i),l=(r(t,i+o)-r(t,i-o))/(o*2),c=(r(t+o,i)-r(t-o,i))/(o*2);return Object.freeze({height:a,roll:c,roughness:s.roughness*(.65+Ce((Math.abs(l)+Math.abs(c))*.9,0,.35)),slope:l})}function Us(n={}){let e=n.position??{},t=ye(n.heading,0),i=Math.max(0,ye(n.speed,8)),s=n.velocity,r=s?{across:ye(s.across,0),downhill:ye(s.downhill,i)}:cS(i,t),o=Math.hypot(r.across,r.downhill),a=s?Math.atan2(r.across,r.downhill):t,l=!!n.switchRiding,c=ye(n.boardYaw,a+(l?Math.PI:0)),h=vu[n.surface]?n.surface:"groomed",u=xs(e,h),d=n.grounded===void 0?ye(n.air,0)<=0:!!n.grounded;return pc({air:Math.max(0,ye(n.air,0)),airtime:Math.max(0,ye(n.airtime,0)),boardLightness:Ce(ye(n.boardLightness,0),0,1),boardOffset:ye(n.boardOffset,un(c-a-(l?Math.PI:0))),boardRotation:ye(n.boardRotation,c),boardYaw:c,bodyHeave:ye(n.bodyHeave,u.height),bumpImpact:Ce(ye(n.bumpImpact,0),0,1),butter:Ce(ye(n.butter,0),0,1),butterHold:Math.max(0,ye(n.butterHold,0)),carveQuality:Ce(ye(n.carveQuality,0),0,1),chatter:Ce(ye(n.chatter,0),0,1),compression:Ce(ye(n.compression,0),0,1),crouchAmount:Ce(ye(n.crouchAmount,0),0,1),crouchHeld:!!n.crouchHeld,crouchPressedAge:Math.max(0,ye(n.crouchPressedAge,10)),crashed:!!n.crashed,crashReason:n.crashReason??null,crashSpin:ye(n.crashSpin,0),crashTimer:Math.max(0,ye(n.crashTimer,0)),edge:Ce(ye(n.edge,0),-1,1),elapsed:Math.max(0,ye(n.elapsed,0)),flickBrake:Math.max(0,ye(n.flickBrake,0)),flickRecovery:Math.max(0,ye(n.flickRecovery,0)),frontEdge:Ce(ye(n.frontEdge,n.edge??0),-1,1),frontFootPressure:Ce(ye(n.frontFootPressure,.58),0,1),gForce:Math.max(0,ye(n.gForce,0)),gripLoad:Ce(ye(n.gripLoad,1),qp,Yp),grounded:d,heading:a,hillRate:Number.isFinite(n.hillRate)?n.hillRate:null,impactMeter:Ce(ye(n.impactMeter,0),0,100),landingImpact:Math.max(0,ye(n.landingImpact,0)),lean:Ce(ye(n.lean,n.edge??0),-1,1),legOffset:Ce(ye(n.legOffset,0),-xn,Yn),load:Math.max(0,ye(n.load,d?1:0)),noseFloat:Ce(ye(n.noseFloat,0),0,1),popCharge:Ce(ye(n.preload,n.popCharge??0),0,1),popArcVelocity:Math.max(0,ye(n.popArcVelocity,0)),popElapsed:Math.max(0,ye(n.popElapsed,0)),popped:!!n.popped,position:{across:ye(e.across,0),downhill:ye(e.downhill,0)},pressAmount:Ce(ye(n.pressAmount,0),-1,1),preload:Ce(ye(n.preload,n.popCharge??0),0,1),preloadReleaseAge:Math.max(0,ye(n.preloadReleaseAge,Xp+1)),rearEdge:Ce(ye(n.rearEdge,n.edge??0),-1,1),ride:ye(n.ride,0),skid:Ce(ye(n.skid,0),0,1),slash:Ce(ye(n.slash,0),0,1),slideSpin:ye(n.slideSpin,0),slipAngle:ye(n.slipAngle,un(c-a)),slopeGrade:Ce(ye(n.slopeGrade,GM),0,.78),speed:o,spinVelocity:ye(n.spinVelocity,0),angularMomentum:ye(n.angularMomentum,ye(n.spinVelocity,0)*1),stanceHeight:Ce(ye(n.stanceHeight,1-Ce(ye(n.crouchAmount,0),0,1)*(1-fc)),0,1),stance:n.stance==="goofy"?"goofy":"regular",steer:Ce(ye(n.steer,0),-1,1),steerHold:Math.max(0,ye(n.steerHold,0)),stumble:Math.max(0,ye(n.stumble,0)),surface:h,switchRiding:l,takeoffSlip:Ce(ye(n.takeoffSlip,0),0,Math.PI/2),turnRate:ye(n.turnRate,0),tweak:Ce(ye(n.tweak,0),-1,1),terrainHeight:ye(n.terrainHeight,u.height),terrainLaunchCooldown:Math.max(0,ye(n.terrainLaunchCooldown,0)),terrainPitch:ye(n.terrainPitch,u.slope),terrainRoll:ye(n.terrainRoll,u.roll),torsoYaw:ye(n.torsoYaw,a+(l?Math.PI:0)),torsoRotation:ye(n.torsoRotation,a+(l?Math.PI:0)),velocity:r,verticalVelocity:ye(n.verticalVelocity,0),worldHeight:ye(n.worldHeight,Jp({across:ye(e.across,0),downhill:ye(e.downhill,0)},h)+Math.max(0,ye(n.air,0))),worldVerticalVelocity:ye(n.worldVerticalVelocity,ye(n.verticalVelocity,0)+r.downhill*(u.slope-jp(ye(e.downhill,0)))+r.across*u.roll),washout:Ce(ye(n.washout,0),0,1)})}function $p(n,e={}){if(n.crashed)return n;let t=Math.sign(n.velocity.across||e.x-n.position.across||n.edge||1);return Us({...n,air:0,angularMomentum:0,compression:1,crashed:!0,crashReason:"hazard",crashSpin:t,crashTimer:yu,grounded:!0,hillRate:null,legOffset:0,load:1,popArcVelocity:0,popElapsed:0,popped:!1,ride:0,slideSpin:0,stumble:0,takeoffSlip:0,velocity:{across:n.velocity.across*.45,downhill:n.velocity.downhill*.45}})}function Qp(n,e={},t=0,i={}){let s=Ce(ye(t,0),0,HM),r=Os(n.position.downhill),o=Ce(ye(i.slopeGrade,jp(n.position.downhill)),0,.78),a=vu[i.surface]?i.surface:n.surface,l=vu[a];if(n.crashed)return hS(n,s,o,a,i);let c=Ce(ye(e.carve,0),-1,1),h=Ce(ye(e.steer,0),-1,1),u=Ce(ye(e.crouch,0),0,1),d=Ce(ye(e.stretch,0),0,1),f=Ce(ye(e.press,0),-1,1),p=n.grounded??n.air<=0,y=u>.5,m=y&&!n.crouchHeld?0:n.crouchPressedAge+s,g=y?0:n.crouchHeld?s:n.preloadReleaseAge+s,v=Vp(n.stanceHeight,p?1-(1-fc)*u:y?0:d>.5?1:n.stanceHeight,(p?1-fc:1)*s/VM),S=Ce((1-v)/(1-fc),0,1),M=p?Ce(n.preload+s*(y?1/WM:g<=Xp?0:-1/XM),0,1):n.preload,T=n.pressAmount+(f-n.pressAmount)*Zn(7,s),x=p&&n.stumble>0,_=n.lean+(c-n.lean)*Zn(x?3.15:6.3,s),w=_*(.75+S*.25),R=w*(n.stance==="goofy"?-1:1)>=0,C=n.frontEdge+(w-n.frontEdge)*Zn(R?10.8:8.8,s),I=n.rearEdge+(w-n.rearEdge)*Zn(R?6.1:5.1,s),P=C*.58+I*.42,B=Math.abs(P),L=Math.sign(P)!==Math.sign(n.edge)&&Math.abs(n.edge)>.015&&B>.015,G={across:Math.cos(n.boardYaw),downhill:-Math.sin(n.boardYaw)},Z=n.velocity.across*G.across+n.velocity.downhill*G.downhill,H=p&&a!=="powder"&&a!=="rail"&&(L&&Math.sign(P)===Math.sign(Z)||Math.sign(c)!==Math.sign(n.edge)&&Math.sign(c)===Math.sign(Z)&&Math.abs(n.edge)>.15)&&Math.abs(Z)>3.8&&n.speed>16&&Math.abs(h)<.05&&n.flickRecovery<=0,se=p&&a==="rail"&&B>.22;if(H||se){let nt={across:n.velocity.across*.62,downhill:n.velocity.downhill*.62};return pc({...n,compression:1,crashed:!0,crashReason:se?"rail-edge":"edge-catch",crashSpin:Math.sign(Z||P)||1,crashTimer:yu,edge:P,elapsed:n.elapsed+s,frontEdge:C,gForce:1.6,lean:_,position:{across:n.position.across+nt.across*s,downhill:n.position.downhill+nt.downhill*s},rearEdge:I,skid:1,slopeGrade:o,speed:Math.hypot(nt.across,nt.downhill),surface:a,velocity:nt})}let X={across:n.position.across+n.velocity.across*s,downhill:n.position.downhill+n.velocity.downhill*s},Y=xs(X,a),le=s>0?(Y.height-n.terrainHeight)/s:0,re=p?Ce(Math.abs(le)*(.09+n.speed*.004)*Y.roughness*(1-S*.8),0,1):0,He=n.bumpImpact+(re-n.bumpImpact)*Zn(re>n.bumpImpact?18:9,s),j=Ce(Y.height,n.bodyHeave-.4,n.bodyHeave+.4),de=n.bodyHeave+(j-n.bodyHeave)*Zn(3.4,s),Te=Ce((a==="powder"?.43:.54)-T*.24+Math.abs(c-n.lean)*.17,.16,.84),K=a==="powder"&&p?Ce(n.speed/24*.7+(1-Te)*.9-.24,0,1):0,U=Math.abs(h)>.05?Math.sign(h)===Math.sign(n.steer)?n.steerHold+s:s:0,q=p&&u>.62&&Math.abs(h)>.3,$=n.butter>.5&&Math.abs(n.steer)>.3,Q=q?n.butterHold+s:0,ce=q?1:0,xe=n.butter+(ce-n.butter)*Zn(ce>n.butter?12:10,s),he=p&&!q&&Math.abs(h)>.05&&Math.sign(h)!==Math.sign(n.steer),Ie=he?.1:n.flickBrake,Me=Math.min(s,Ie);Ie=Math.max(0,Ie-s);let Xe=he?1:n.boardLightness*Math.exp(-5*s),ke=Math.max(0,n.flickRecovery-s);Math.abs(h)<.05&&Math.abs(n.steer)>.05&&(ke=.3);let qe=n.boardOffset,Ge=n.switchRiding,yt=p?n.slideSpin*Math.exp(-oS*s):0;p&&(qe+=n.slideSpin*s);let ht=(x?eS:QM)*(1-Ce(Math.abs(n.slideSpin),0,1))*s;if(p&&q){let nt=Math.sign(h)*(Q<iS?nS:Math.PI),Dt=(4.2+Math.abs(T)*.5)*s;qe+=Ce(nt-qe,-Dt,Dt)}else if(p&&$&&Math.abs(h)<.05){let nt=Math.round(qe/Math.PI);Math.abs(nt)%2===1&&(Ge=!Ge),qe-=nt*Math.PI,qe-=Ce(qe,-9.2*s,9.2*s)}else if(p&&Math.abs(h)>.05){let nt=Ce((U-.08)/.22,0,1),Dt=Math.sign(h)*(n.stance==="goofy"?-1:1)*(Ge?-1:1)<0,si=h*(.92+nt*.48)*(Dt?rS:1),$n=2.1+7.1*Xe*(1-B*.55-S*.35);qe+=Ce(si-qe,-$n*s,$n*s)}else p&&(qe-=Ce(qe,-ht,ht));let _t=Math.max(n.speed,.001),D={across:n.velocity.across/_t,downhill:n.velocity.downhill/_t},ae={across:D.downhill,downhill:-D.across},ut=18-B*12,st=B*_t**2/ut*(1+S*.3)*(n.impactMeter>70?.72:1),me=p?n.gripLoad:1,Tt=_s*l.edgeGrip*(.6+B*1.6)*(1+S*.3)*Math.max(1,me),Ne=p&&a!=="rail"&&st>0?Ce((st-Tt)/st,0,1):0,Ye=1-Ce((Math.abs(n.heading)-1.05)/.38,0,1),A=p&&a!=="rail"?Math.sign(P)*Math.min(st,Tt)*Ye:0,b=p&&!q&&a!=="rail"?Ce(-Z*l.baseGrip*(.12+Ce((U-.16)/.32,0,1)*.08)*(1+S*.3),-2.6,2.6):0,z=Ce((U-.14)/.3,0,1),ue=p&&!q?z*(1.4+Math.abs(qe)*1.5)*l.skid:0,oe=a==="powder"?1-K:0,ve=p&&Y.slope<-.05&&n.crouchAmount>S&&!q?(n.crouchAmount-S)*1.4*Ce(-Y.slope/.15,0,1):0,Ee=p?l.drag*(.22+oe*.24+Math.abs(T)*.05)*me:0,ne=p?n.speed**2*.0032*(1-S*.35):0,ie=p&&!q&&Me>0&&s>0?n.speed*.06*Me/(.1*s):0,Se=Ee+ne+ue+ie,N=p?{across:ae.across*A+G.across*b-D.across*Se-_s*Y.roll*.18,downhill:_s*Math.sin(o)+ae.downhill*A+G.downhill*b-D.downhill*Se}:{across:0,downhill:0},ee=p?{across:n.velocity.across+N.across*s+D.across*ve,downhill:n.velocity.downhill+N.downhill*s+D.downhill*ve}:{...n.velocity},W=Math.hypot(ee.across,ee.downhill);if(p&&(W<r.min||W>r.max*(1-S*.1))){let nt=Ce(W,r.min,r.max*(1-S*.1)),Dt=nt/Math.max(W,.001);ee={across:ee.across*Dt,downhill:ee.downhill*Dt},W=nt}let _e=Math.atan2(ee.across,ee.downhill),ge=p&&s>0?un(_e-n.heading)/s:n.turnRate,fe=p?un(_e+(Ge?Math.PI:0)+qe):n.boardYaw,De=p?0:n.angularMomentum,Ke=p?0:n.spinVelocity,pe=ye(e.jump,0)>0,Ze=!p&&!n.popped&&n.airtime>0&&n.airtime<_u,tt=pe&&(p||Ze),Ae={across:n.position.across+ee.across*s,downhill:n.position.downhill+ee.downhill*s},vt=(nt,Dt)=>Kp({across:nt,downhill:Dt},a,i),Nt=vt(n.position.across,n.position.downhill),Un=vt(Ae.across,Ae.downhill),ji=Vi(vt,n.position.across,n.position.downhill),gi=Vi(vt,Ae.across,Ae.downhill),Bn=s>0?(gi-ji)/s:ye(n.hillRate,0),Ci=Bn/Math.max(W,.001),We=ye(i.timeToLip,1/0),pt=ye(i.lipDistance,1/0),Ot=We>=0&&We<=.1||pt>=0&&pt<=W*.1,yn=We>=0&&We<1/0||pt>=0&&pt<1/0,bn=p&&Ot?1.15:1,fn=n.preload,qt=tt?(Up+(YM-Up)*fn)*bn:0,Ln=n.popped,zn=p?{leg:n.legOffset,onSnow:!0,ride:n.ride,velocity:Number.isFinite(n.hillRate)?n.worldVerticalVelocity:Bn}:{height:n.worldHeight,leg:n.legOffset,onSnow:!1,velocity:n.worldVerticalVelocity};if(tt){let nt=p?Ce(ji+ye(n.ride,0),Nt-xn,Nt+Yn):n.worldHeight,Dt=ZM*2*qt/_s,si=(Vi(vt,n.position.across+ee.across*Dt,n.position.downhill+ee.downhill*Dt)-nt)/Dt,$n=p?yn?qt:0:n.airtime<=qM?qt*.5:0;zn={height:nt,leg:p?nt-Nt:n.legOffset,onSnow:!1,velocity:Math.max(si+qt,zn.velocity+$n)};let Xs=Math.abs(h)>.05?h:c*sS;De=Ce(Xs*(2.6+fn*1.5)+ge*.12,-6,6),M=0,Ln=!0}let Vs=Bn-zn.velocity,Kt=!zn.onSnow&&!y&&Vs>.5&&n.air<Vs*aS,vn=Ln||n.airtime>=_u,Rt=ap(zn,{carryFrom:ji,carryTo:gi,snowFrom:Nt,snowTo:Un},{airTarget:Kt?.2:vn?y?jM:nu:zn.leg,soak:y?1:0},s),$t=!p,Nn=$t&&!!Rt.touchdown,ii=Rt.air,E=Rt.onSnow?0:$t?n.airtime+s:s,F=Rt.height,J=Rt.velocity,k=Rt.onSnow?0:Rt.velocity-Bn,V=Vp(n.compression,Rt.onSnow?Ce(-Rt.leg/xn,0,1):0,KM*s),we=n.landingImpact*Math.exp(-4*s),Pe=Math.max(0,n.impactMeter-(5+8*(1-Ce(W/xu,0,1)))*s+(p?He*2.4*s:0)),be=!1,Re=null,Be=0,et=0,ot=n.skid;if($t||tt||Rt.liftoff){$t&&Math.abs(h)>.05&&Math.sign(h)!==Math.sign(n.steer)&&(De=Ce(De+h*.22,-6,6)),$t&&(De=Ce(De+c*.08*s,-6,6));let nt=.6+v*.4,Dt=Bn-n.worldVerticalVelocity,si=(Math.sqrt(Dt**2+2*_s*n.air)-Dt)/_s;if($t&&Dt>0&&si<JM&&Math.abs(h)<.05){let $n=Math.max(si,.05),Xs=De/nt+c*Hp,qs=un(fe+Xs*$n-_e),Xo=Math.abs(qs)>Math.PI/2?qs-Math.sign(qs)*Math.PI:qs;De=Ce(De+Ce(-Xo/$n,-Bp*s,Bp*s)*nt,-6,6)}Ke=De/nt,fe=un(fe+(Ke+($t?c*Hp:0))*s)}let Fe=Rt.onSnow?Math.max(0,n.stumble-s):0,at=0,dt=Nn?Rt.touchdown.closing/Math.hypot(1,Ci):0,mt=Nn&&!n.popped&&n.airtime<_u&&dt<mu;if(Nn&&!mt){let nt=Math.abs(un(fe+n.tweak*1.35-_e)),Dt=Math.min(nt,Math.PI-nt),si=n.popped?0:n.takeoffSlip,$n=Ce(Math.max(0,Dt-si)+Math.abs(Ke)*.04,0,Math.PI/2),Xs=y&&m<=.12,qs=Xs?.4:y?.15:0;we=dt*kp*(1+1.5*Math.sin($n))*(1-qs),Pe=Ce(Pe+Math.max(0,we-zp*kp),0,100),Ge=nt>Math.PI/2;let Xo=Op({impact:dt,meter:Pe,misalign:$n});if(Xo==="crash")be=!0,Re=$n>hc?"landing-edge":"impact-overload",Be=Math.sign(un(fe-_e))||1,et=yu;else{let Xu=1-Ce($M*l.drag*Math.max(0,dt-zp)/Math.max(W,.001),0,.5);if(Xo==="sketchy"){let Zu=Ce(($n-cc)/(hc-cc),0,1);ot=Math.max(ot,.35+Zu*.45),ke=.3,Fe=uc,Xu*=1-Zu*.24}else Xs&&(M=.5);let Gm=Os(Ae.downhill).min,qu=Math.max(Math.min(W,Gm),W*Xu),Yu=qu/Math.max(W,.001);ee={across:ee.across*Yu,downhill:ee.downhill*Yu},W=qu,at=Ce(Ke*tS,-1.5,1.5)}qe=un(fe-_e-(Ge?Math.PI:0))}let bt=Math.abs(un(fe-_e)),pn=Rt.onSnow?0:$t?n.takeoffSlip:Math.min(bt,Math.PI-bt);Rt.onSnow&&(De=0,Ke=0,Ln=!1);let ze=un(fe-_e),on=p?Ce(Math.abs(qe)/1.5*(.3+z*.4)*(1-(Math.sign(P)===Math.sign(h)?B*.35:0))+Ne*.6,0,.95):0;ot=Math.max(ot,n.skid+(on-n.skid)*Zn(10,s)),p&&on<n.skid&&(ot=Math.max(0,n.skid+(on-n.skid)*Zn(10,s)));let At=p&&a!=="rail"?Ce(B*1.6*(1-Ne*.7)*(1-Ce(Math.abs(qe)/.7,0,1)*.85),0,1):0,_i=p?Ce((he?1:0)+Math.abs(h)*ot*.5,0,1):0,mn=he?1:n.slash+(_i-n.slash)*Zn(_i>n.slash?28:11,s),Ws=p?Ce(Y.roughness*(.12+W/xu*.38)+B*(1-l.edgeGrip)*.55,0,1):0,xi=un(ii>0?fe-Ke*.1:_e+(Ge?Math.PI:0)),yi=un(n.torsoYaw+un(xi-n.torsoYaw)*Zn(ii>0?12:5,s)),wt=n.boardRotation+un(fe-n.boardYaw),an=n.torsoRotation+un(yi-n.torsoYaw),Dn=ii>0&&(Ln||U<=E+1e-9)?h:0,kt=n.tweak+(Dn-n.tweak)*Zn(Math.abs(Dn)>Math.abs(n.tweak)?18:14,s);return pc({air:ii,airtime:E,boardLightness:Xe,boardOffset:qe,boardRotation:wt,boardYaw:fe,bodyHeave:de,bumpImpact:He,butter:xe,carveQuality:At,chatter:Ws,compression:V,crouchAmount:S,crouchHeld:y,crouchPressedAge:m,crashed:be,crashReason:Re,crashSpin:Be,crashTimer:et,edge:P,elapsed:n.elapsed+s,flickBrake:Ie,flickRecovery:ke,frontEdge:C,frontFootPressure:Te,gForce:Ce(Math.abs(A)/_s,0,1.8),gripLoad:Rt.onSnow?Ce(n.gripLoad+(Rt.load-n.gripLoad)*Zn(10,s),qp,Yp):1,grounded:Rt.onSnow,heading:_e,hillRate:Rt.onSnow?s>0?Bn:n.hillRate:null,impactMeter:Pe,landingImpact:we,lean:_,legOffset:Rt.leg,load:Rt.load,noseFloat:K,popCharge:M,popArcVelocity:0,popElapsed:0,popped:Ln,position:Ae,pressAmount:T,preload:M,preloadReleaseAge:g,rearEdge:I,ride:Rt.onSnow?Rt.ride:0,skid:ot,slash:mn,slideSpin:Nn&&!mt?at:yt,slipAngle:ze,slopeGrade:o,speed:W,angularMomentum:De,spinVelocity:Ke,stance:n.stance,stanceHeight:v,steer:h,steerHold:U,butterHold:Q,stumble:Fe,surface:a,switchRiding:Ge,takeoffSlip:pn,turnRate:ge,tweak:kt,terrainHeight:Y.height,terrainLaunchCooldown:0,terrainPitch:Y.slope,terrainRoll:Y.roll,torsoYaw:yi,torsoRotation:an,velocity:ee,verticalVelocity:k,worldHeight:F,worldVerticalVelocity:J,washout:Ne})}var zM,xu,dc,kM,Wp,HM,_s,GM,yu,fc,VM,WM,XM,Xp,qM,Up,YM,ZM,_u,JM,Bp,KM,qp,Yp,zp,$M,kp,jM,Hp,QM,eS,tS,nS,iS,sS,rS,oS,aS,vu,Gp,Ce,ye,Zp,un,Zn,Vp,lS,pc,cS,Jp,Kp,jp,hS,mc=kn(()=>{gu();Uo();zM=12,xu=34,dc=1200,kM=10,Wp=.12,HM=1/20,_s=9.81,GM=.34,yu=2,fc=.45,VM=.15,WM=.5,XM=.15,Xp=1,qM=.08,Up=4,YM=6.4,ZM=.7,_u=.25,JM=.4,Bp=10,KM=12,qp=.6,Yp=1.6,zp=4.5,$M=.08,kp=2.5,jM=-.3,Hp=.35,QM=9.2,eS=3.2,tS=.5,nS=1.15,iS=1.8,sS=.5,rS=.84,oS=8,aS=.28,vu=Object.freeze({groomed:Object.freeze({baseGrip:1,drag:1,edgeGrip:1,skid:1}),ice:Object.freeze({baseGrip:.16,drag:.45,edgeGrip:.25,skid:.7}),powder:Object.freeze({baseGrip:.7,drag:1.85,edgeGrip:.76,skid:1.12}),slush:Object.freeze({baseGrip:.85,drag:1.8,edgeGrip:.74,skid:1.35}),chop:Object.freeze({baseGrip:.82,drag:1.3,edgeGrip:.82,skid:1.2}),rail:Object.freeze({baseGrip:.02,drag:.3,edgeGrip:.02,skid:.3})}),Gp=Object.freeze({groomed:Object.freeze({amplitude:.055,roughness:.2}),ice:Object.freeze({amplitude:.012,roughness:.07}),powder:Object.freeze({amplitude:.34,roughness:.95}),slush:Object.freeze({amplitude:.14,roughness:.55}),chop:Object.freeze({amplitude:.24,roughness:.9}),rail:Object.freeze({amplitude:0,roughness:0})}),Ce=(n,e,t)=>Math.min(t,Math.max(e,n)),ye=(n,e)=>Number.isFinite(n)?n:e,Zp=n=>Ce(Math.max(0,ye(n,0))/dc,0,1);un=n=>Math.atan2(Math.sin(n),Math.cos(n)),Zn=(n,e)=>1-Math.exp(-n*e),Vp=(n,e,t)=>n+Ce(e-n,-t,t),lS=(n,e)=>Math.sin(e*.38+n*.17)*.45+Math.sin(e*1.07-n*.42+.8)*.3+Math.sin(e*2.31+n*.77+1.7)*.15+Math.sin(e*.11+n*1.6)*.1;pc=n=>Object.freeze({...n,position:Object.freeze({...n.position}),velocity:Object.freeze({...n.velocity})}),cS=(n,e)=>({across:Math.sin(e)*n,downhill:Math.cos(e)*n}),Jp=(n,e)=>{let t=n.downhill;return Mu(t)+xs(n,e).height},Kp=(n,e,t)=>typeof t.surfaceHeight=="function"?t.surfaceHeight(n.across,n.downhill,e):Jp(n,e);jp=n=>.36+Wp*Zp(n)+Math.sin(n*.024-.3)*.2+Math.sin(n*.061)*.03,hS=(n,e,t,i,s)=>{let o=Math.exp(-(i==="ice"?.5:i==="powder"?3.4:1.9)*e),a={across:n.velocity.across*o,downhill:n.velocity.downhill*o+_s*Math.sin(t)*e},l={across:n.position.across+a.across*e,downhill:n.position.downhill+a.downhill*e},c=xs(l,i),h=(g,v)=>Kp({across:g,downhill:v},i,s),u=h(l.across,l.downhill),d=Math.hypot(a.across,a.downhill),f=Math.atan2(a.across,a.downhill),p=Math.max(0,n.crashTimer-e),y=p<=0,m=y?f+(n.switchRiding?Math.PI:0):un(n.boardYaw+n.crashSpin*2.3*e);return pc({...n,air:0,airtime:0,boardRotation:n.boardRotation+un(m-n.boardYaw),boardYaw:m,boardOffset:0,butter:n.butter*Math.exp(-9*e),bumpImpact:n.bumpImpact*Math.exp(-10*e),carveQuality:0,chatter:n.chatter*Math.exp(-8*e),compression:n.compression*Math.exp(-5*e),crashed:!y,crashReason:y?null:n.crashReason,crashSpin:y?0:n.crashSpin,crashTimer:p,edge:y?0:n.edge*Math.exp(-6*e),elapsed:n.elapsed+e,flickBrake:0,flickRecovery:0,gForce:0,gripLoad:1,grounded:!0,heading:f,hillRate:null,impactMeter:Math.max(0,n.impactMeter-25*e),landingImpact:n.landingImpact*Math.exp(-3*e),lean:y?0:n.lean*Math.exp(-4*e),legOffset:0,load:1,position:l,popArcVelocity:0,popElapsed:0,popped:!1,angularMomentum:0,pressAmount:0,ride:u-Vi(h,l.across,l.downhill),skid:y?0:1,slash:n.slash*Math.exp(-8*e),slideSpin:0,slipAngle:y?0:un(n.boardYaw-f),slopeGrade:t,speed:d,stumble:0,surface:i,takeoffSlip:0,terrainHeight:c.height,terrainPitch:c.slope,terrainRoll:c.roll,torsoYaw:n.torsoYaw,velocity:a,verticalVelocity:0,washout:0,worldHeight:u,worldVerticalVelocity:0})}});function ks(n){let e=Math.max(0,Math.floor(zs(n)));if(Rr.has(e))return Rr.get(e);let t=qi+e*Yi,i=e%2===0?-1:1,s=i*(24-dS+Math.sin(e*1.7)*.25),r=1.2+Math.sin(e*1.7)*.14,o=Object.freeze({id:e,lip:t,start:t-Bs,landingEnd:t+Su,centerX:s,side:i,height:r});return Rr.set(e,o),Rr.size>32&&Rr.delete(Rr.keys().next().value),o}function bu(n,e=0,t=0){if(!Number.isFinite(n)||!Number.isFinite(e)||n<0)return null;let i=Math.max(0,Math.round((n-qi)/Yi)),s=ks(i);return Math.abs(n-s.lip)<=t&&Math.abs(e-s.centerX)<=2.4?s:null}function em(n,e){let t=bu(e,n,12);return t&&e<=t.lip?t.lip-e:1/0}function wu(n,e){if(!Number.isFinite(n)||!Number.isFinite(e))return 0;let t=Math.max(0,Math.floor((e-qi+Bs)/Yi)),i=ks(t),s=e-i.lip,r=Math.abs(n-i.centerX);if(s<-Bs||s>=Su||r>=gc)return 0;let o=1-Cr((r-.9)/(gc-.9)),a;return s<0?a=i.height*((s+Bs)/Bs)**2.35:s<6?a=i.height+(-.35-i.height)*Cr(s/6):s<18?a=-.35:a=-.35*(1-Cr((s-18)/12)),a*o}function tm(n,e,t,i){let s=Math.max(.05,zs(t,.5)),r=Math.max(0,zs(i,0)),o=Math.hypot(n,e*.55),a=s*.85,l=s*1.8;return o<=a?-r*(1-(o/a)**2):o>=l?0:r*.22*Math.sin(Math.PI*(o-a)/(l-a))}function pS(n,e,t="powder"){let i=zs(n),s=zs(e),r=Mu(s),o=Math.max(0,Math.abs(i)-24),a=o**1.8*.021+Math.sin(s*.065+i*.12)*o*.025,l=Math.sin(s*.075+i*.095)*.22+Math.sin(s*.19-i*.16)*.085,c=xs({across:i,downhill:s},t).height;return r+qo(s)*.48+a+l+c}function zt(n,e,t="powder"){let i=zs(n),s=zs(e),r=fS(i,s),o=r>0?(xs({across:i,downhill:s},"groomed").height-xs({across:i,downhill:s},t).height)*r:0;return pS(i,s,t)+o+wu(i,s)}function nm(n,e,t="powder"){let s=(zt(n+.25,e,t)-zt(n-.25,e,t))/.5,r=(zt(n,e-.25,t)-zt(n,e+.25,t))/(.25*2),o=Math.hypot(s,1,r);return Object.freeze({x:-s/o,y:1/o,z:-r/o})}var zs,uS,Cr,qi,Yi,Bs,Su,gc,dS,Rr,fS,Ho=kn(()=>{mc();Jo();zs=(n,e=0)=>Number.isFinite(n)?n:e,uS=(n,e,t)=>Math.min(t,Math.max(e,n)),Cr=n=>{let e=uS(n,0,1);return e*e*(3-2*e)},qi=90,Yi=82,Bs=28,Su=30,gc=3.6,dS=4,Rr=new Map;fS=(n,e)=>{let t=Math.max(0,Math.floor((e-qi+Bs+3)/Yi)),i=ks(t),s=Math.abs(n-i.centerX);if(s>=gc)return 0;let r=e-i.lip;return(1-Cr((s-.9)/(gc-.9)))*Cr((r+Bs+3)/4)*(1-Cr((r-Su+5)/8))}});var cm={};Wm(cm,{createMountainWorld:()=>NS,makeCourseEdges:()=>om,makeHazard:()=>lm,makeTerrain:()=>rm});function NS(n){let e=new tc({canvas:n,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=Tn,e.toneMapping=Eo,e.toneMappingExposure=1.03,e.shadowMap.enabled=!0,e.shadowMap.type=Ts,e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),n.dataset.renderMode="webgl",Tu.map=SS(),Tu.needsUpdate=!0;let t=new jr;t.background=new $e(11193305),t.fog=new $r(11849433,220,480);let i=PS();t.add(i);let s=LS();t.add(s),t.add(new Mo(15333375,8559787,1.25));let r=new wo(16774629,2.15);r.position.set(-40,90,35),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.left=-48,r.shadow.camera.right=48,r.shadow.camera.top=62,r.shadow.camera.bottom=-30,r.shadow.camera.near=.5,r.shadow.camera.far=185,r.shadow.bias=-3e-4,r.target.position.set(0,0,-25),t.add(r,r.target);let o=new Rn(64,1,.08,980);o.rotation.order="YXZ";let a=wp();t.add(a.group);let l=new Map,c=new Map,h=new Map,u=new Map,d=Np(),f=420,p=pu(.2),y=Object.freeze({floor:[.3,.47,.59],wall:[.38,.55,.66],berm:[.97,.995,1],snow:[.93,.965,.975]}),m=new WeakMap,g=new Ut;g.setAttribute("position",new ln(new Float32Array(f*p.length*3),3)),g.setAttribute("color",new ln(new Float32Array(f*p.length*4),4)),g.setIndex(new ln(new Uint32Array((f-1)*(p.length-1)*6),1)),g.setDrawRange(0,0);let v=new jt(g,new Fn({vertexColors:!0,transparent:!0,depthWrite:!1,side:tn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));v.frustumCulled=!1,v.renderOrder=1,t.add(v);let S=700,M=Lp(S),T=new Ut;T.setAttribute("position",new ln(new Float32Array(S*3),3)),T.setAttribute("size",new ln(new Float32Array(S),1)),T.setAttribute("fade",new ln(new Float32Array(S),1)),T.setDrawRange(0,0);let x=new no(T,new ti({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:`
      attribute float size;
      attribute float fade;
      uniform float scale;
      varying float vFade;
      void main() {
        vec4 seen = modelViewMatrix * vec4(position, 1.0);
        // Snow hanging right in front of the lens thins out instead of blinding it.
        vFade = fade * smoothstep(1.0, 4.5, -seen.z);
        gl_PointSize = size * scale / max(0.1, -seen.z);
        gl_Position = projectionMatrix * seen;
      }`,fragmentShader:`
      varying float vFade;
      void main() {
        vec2 off = gl_PointCoord - 0.5;
        float edge = dot(off, off) * 4.0;
        if (edge > 1.0) discard;
        // Lit from above: bright on top, the blue of snow shadow underneath.
        vec3 lit = mix(vec3(0.78, 0.86, 0.93), vec3(0.985, 0.995, 1.0),
          smoothstep(0.75, 0.2, gl_PointCoord.y));
        gl_FragColor = vec4(lit, (1.0 - edge) * vFade);
      }`}));x.frustumCulled=!1,x.renderOrder=2,t.add(x);let _=new O,w=!1,R={hazards:[],phase:"idle"},C=0,I=null,P=()=>{let K=Math.max(1,n.clientWidth||window.innerWidth),U=Math.max(1,n.clientHeight||window.innerHeight);e.setSize(K,U,!1),o.aspect=K/U,o.updateProjectionMatrix()};window.addEventListener("resize",P),P();let B=K=>{let U=Math.floor((K-mS)/sn),q=Math.ceil((K+Eu)/sn);for(let $=U;$<=q;$+=1){if(l.has($))continue;let Q=rm($),ce=bS($),xe=om($);t.add(Q.mesh,ce,...xe),l.set($,{...Q,grooves:ce,edges:xe})}for(let[$,Q]of l)if(!($>=U&&$<=q)){t.remove(Q.mesh,Q.grooves,...Q.edges),Q.mesh.geometry.dispose(),Q.grooves.geometry.dispose(),Q.grooves.material.dispose();for(let ce of Q.edges)ce.geometry.dispose();l.delete($)}},L=K=>{let U=Math.max(0,Math.floor((K-50-qi)/Yi)),q=Math.max(0,Math.ceil((K+Eu-qi)/Yi));for(let $=U;$<=q;$+=1){if(u.has($))continue;let Q=IS(ks($));t.add(Q),u.set($,Q)}for(let[$,Q]of u)$>=U&&$<=q||(t.remove(Q),Q.traverse(ce=>ce.geometry?.dispose()),u.delete($))},G=(K,U)=>{let q=Math.floor(U/sn),$=l.get(q);if(!$)return 0;let Q=$.acrossSamples,ce=0;for(;ce<Q.length-2&&Q[ce+1]<K;)ce+=1;let xe=dn((K-Q[ce])/(Q[ce+1]-Q[ce]),0,1),he=dn((U-q*sn)/sn*$.rows,0,$.rows),Ie=Math.min($.rows-1,Math.floor(he)),Me=he-Ie,Xe=Q.length,ke=(yt,ht)=>$.rutOffsets[yt*Xe+ht],qe=ke(Ie,ce)*(1-xe)+ke(Ie,ce+1)*xe,Ge=ke(Ie+1,ce)*(1-xe)+ke(Ie+1,ce+1)*xe;return qe*(1-Me)+Ge*Me},Z=(K,U,q)=>{let $=Math.floor(U/sn),Q=l.get($);if(!Q)return zt(K,U,q);let ce=Q.acrossSamples,xe=0;for(;xe<ce.length-2&&ce[xe+1]<K;)xe+=1;let he=dn((U-$*sn)/sn*Q.rows,0,Q.rows),Ie=Math.min(Q.rows-1,Math.floor(he)),Me=(Xe,ke)=>Q.baseHeights[Xe*ce.length+ke]+Q.rutOffsets[Xe*ce.length+ke];return Dp(Me(Ie,xe),Me(Ie,xe+1),Me(Ie+1,xe),Me(Ie+1,xe+1),(K-ce[xe])/(ce[xe+1]-ce[xe]),he-Ie)},H=()=>{I=null;for(let K of l.values()){let U=K.mesh.geometry.getAttribute("position"),q=K.mesh.geometry.getAttribute("color");for(let $=0;$<K.baseHeights.length;$+=1)K.rutOffsets[$]!==0&&(U.setY($,K.baseHeights[$]),q.setXYZ($,K.baseColors[$*3],K.baseColors[$*3+1],K.baseColors[$*3+2]));K.rutOffsets.fill(0),U.needsUpdate=!0,q.needsUpdate=!0,K.mesh.geometry.computeVertexNormals()}},se=K=>({powder:.16,chop:.095,slush:.075,groomed:.045,ice:.008,rail:0}[K.surface]??.08)*(.7+dn(K.compression||0,0,1)*.22+dn(K.gForce||0,0,1.5)*.12),X=(K,U)=>{if(R.phase!=="running"||K.air>.08||K.crashed)return;let q=K.position.across,$=K.position.downhill;if(I&&Math.hypot(q-I.across,$-I.downhill)<.34)return;I={across:q,downhill:$};let Q=se(K),ce=U?Math.sin(U.yaw):0,xe=U?Math.cos(U.yaw):1,he=.6+dn(K.skid||0,0,1)*.3;for(let[Ie,Me]of l){if($<Ie*sn-2||$>(Ie+1)*sn+2)continue;let Xe=Me.mesh.geometry.getAttribute("position"),ke=Me.mesh.geometry.getAttribute("color"),qe=Me.acrossSamples,Ge=!1;for(let yt=0;yt<=Me.rows;yt+=1){let ht=Ie*sn+yt/Me.rows*sn;if(!(Math.abs(ht-$)>he*3.4))for(let _t=0;_t<qe.length;_t+=1){let D=qe[_t];if(Math.abs(D-q)>he*1.8)continue;let ae=tm(D-q,ht-$,he,Q),ut=yt*qe.length+_t,st=Me.rutOffsets[ut],me=ae<0?Math.min(st,ae):st<0?st:Math.max(st,ae);if(U){let Ye=D-q,A=ht-$,b=Ye*ce+A*xe,z=Ye*xe-A*ce;if(Math.abs(b)<1.3&&Math.abs(z)<.55){let ue=U.height-.02+Math.tan(U.pitch)*b+Math.tan(U.roll)*z-Me.baseHeights[ut];ue<me&&(me=Math.max(ue,-.45))}}if(me===st)continue;Me.rutOffsets[ut]=me,Xe.setY(ut,Me.baseHeights[ut]+me);let Tt=dn(-me/.16,0,1),Ne=dn(me/.04,0,1);ke.setXYZ(ut,Me.baseColors[ut*3]*(1-Tt*.13+Ne*.035),Me.baseColors[ut*3+1]*(1-Tt*.08+Ne*.025),Me.baseColors[ut*3+2]*(1-Tt*.04+Ne*.02)),Ge=!0}}Ge&&(Xe.needsUpdate=!0,ke.needsUpdate=!0,Me.mesh.geometry.computeVertexNormals())}},Y=K=>{let U=Zo(Math.max(0,K-20),Eu,{halfWidth:Pr}),q=new Set(U.map($=>$.index));for(let $ of U){if(c.has($.index))continue;let Q=new Ft;for(let ce of $.scenery){let xe=ce.kind==="rock"?Lu(ce.size):Pu(ce.size);xe.position.set(ce.x,zt(ce.x,ce.z),-ce.z),xe.rotation.y=Iu(ce.z+ce.x)*Math.PI*2,Q.add(xe)}t.add(Q),c.set($.index,Q)}for(let[$,Q]of c)q.has($)||(t.remove(Q),c.delete($))},le=()=>{let K=new Set(R.hazards.map(U=>U.id));for(let U of R.hazards){let q=U.variant==="rolling-boulder",$=h.get(U.id),Q=zt(U.x,U.worldDownhill);if(!$)$=lm(U,(xe,he)=>zt(U.x+xe,U.worldDownhill-he)-Q),t.add($),h.set(U.id,$);else if(!q)continue;let ce=q?U.radius*.93:0;$.position.set(U.x,Q+ce,-U.worldDownhill),q&&($.rotation.z=-U.roll)}for(let[U,q]of h)K.has(U)||(t.remove(q),q.traverse($=>$.geometry?.dispose()),h.delete(U))},re=(K,U,q)=>{let $=K[U],Q=$.starts?$:K[U-1],ce=K[U+1],xe=ce&&!ce.starts?ce:$,he=xe.across-Q.across,Ie=xe.downhill-Q.downhill,Me=Math.hypot(he,Ie);Me<1e-6?(he=0,Ie=1):(he/=Me,Ie/=Me);let Xe=pu($.halfWidth),ke=new Float32Array(Xe.length*3);return Xe.forEach((qe,Ge)=>{let yt=$.across+Ie*qe.at,ht=$.downhill-he*qe.at;ke[Ge*3]=yt,ke[Ge*3+1]=Z(yt,ht,q)+qe.lift,ke[Ge*3+2]=-ht}),ke},He=(K,U)=>{d.update(K,U);let q=d.points(),$=Math.max(0,q.length-f);for(;$<q.length&&!l.has(Math.floor(q[$].downhill/sn));)$+=1;let Q=g.attributes.position,ce=g.attributes.color,xe=g.index,he=p.length,Ie=K.position.downhill,Me=0;for(let Xe=$;Xe<q.length;Xe+=1){let ke=q[Xe],qe=Xe-$,Ge=m.get(ke);(!Ge||Xe>=q.length-8)&&(Ge=re(q,Xe,K.surface),m.set(ke,Ge)),Q.array.set(Ge,qe*he*3);let yt=(1-dn((Ie-ke.downhill)/150,0,1)**1.6)*(.35+ke.deep*.65);if(p.forEach((ht,_t)=>{let D=y[ht.tone];ce.setXYZW(qe*he+_t,D[0],D[1],D[2],ht.alpha*yt)}),qe>0&&!ke.starts)for(let ht=0;ht<he-1;ht+=1){let _t=(qe-1)*he+ht,D=qe*he+ht;xe.array.set([_t,D,_t+1,_t+1,D,D+1],Me),Me+=6}}Q.needsUpdate=!0,ce.needsUpdate=!0,xe.needsUpdate=!0,g.setDrawRange(0,Me)},j=(K,U,q)=>{let $=Pp(K);_.set($.local[0],$.local[1],$.local[2]).applyQuaternion(a.board.quaternion).add(a.board.position).add(a.group.position);let Q=Math.random()*q;return{x:_.x-(Number(U.velocity?.across)||0)*Q,y:_.y,z:_.z+(Number(U.velocity?.downhill)||0)*Q,vx:$.velocity.across,vy:$.velocity.up,vz:-$.velocity.downhill,life:$.life,size:$.size,heavy:$.heavy,floor:_.y-.3}},de=(K,U,q)=>{M.step(q);let $=(Number(K.air)||0)>.08;if(R.phase==="running"&&q>0){let Ie=fu(K,U),Me=Ie.rate+Ie.tailRate;if(Me>0&&M.emit(Me,q,()=>j(Ie,K,q)),w&&!$&&!K.crashed){let Xe=fu({...K,air:0},U),ke=dn((Number(K.landingImpact)||0)/6,.25,1),qe=70*ke*(Xe.size>0?Xe.size/.34:0),Ge=1;M.emit(qe/q,q,()=>(Ge=-Ge,j({...Xe,rate:1,tailRate:0,edge:Ge,way:Ge,throwSpeed:2.2+ke*3,lift:1.6+ke*2.6},K,q)))}}w=$;let Q=T.attributes.position,ce=T.attributes.size,xe=T.attributes.fade,he=M.particles();for(let Ie=0;Ie<he.length;Ie+=1){let Me=he[Ie],Xe=Me.age/Me.life;Q.setXYZ(Ie,Me.x,Me.y,Me.z),ce.setX(Ie,Me.heavy?Me.size:Me.size*(.8+Xe*1.8)),xe.setX(Ie,Me.heavy?Math.min(1,Me.age/.02)*(1-Xe)**.6*.95:Math.min(1,Me.age/.05)*(1-Xe)**1.4*.42)}Q.needsUpdate=!0,ce.needsUpdate=!0,xe.needsUpdate=!0,T.setDrawRange(0,he.length),x.material.uniforms.scale.value=e.domElement.height/(2*Math.tan(o.fov*Math.PI/360))};return Object.freeze({render:({camera:K={},pose:U={},state:q={}}={})=>{let $=q.position??{across:0,downhill:0},Q=Number.isFinite($.downhill)?$.downhill:0,ce=Number.isFinite($.across)?$.across:0,xe=Number.isFinite(q.elapsed)?q.elapsed:0,he=xe<C||xe===0,Ie=xe<C?0:dn(xe-C,0,.05);C=xe,he&&(d.reset(),M.reset(),w=!1,H()),B(Q),L(Q),Y(Q),le();let Me=zt(ce,Q,q.surface),Xe=Number.isFinite(U.boardYaw)?U.boardYaw:Number(q.boardYaw)||0,ke=Tp((A,b)=>zt(A,b,q.surface),ce,Q,Xe),qe=se(q);X(q,{...ke,height:ke.height-qe,yaw:Xe});let Ge=Math.max(G(ce,Q),-qe),yt=Me+Ge;a.update(q,U,yt,nm(ce,Q,q.surface),{...ke,height:ke.height+Ge}),He(q,Xe),de(q,U,Ie);let ht=Number.isFinite(K.position?.across)?K.position.across:ce,_t=dn((Number(q.air)||0)/2,0,1),D=6.2+_t*2.3,ae=zt(ht-1.3,Q-D,q.surface),ut=Number.isFinite(q.worldHeight)?q.worldHeight:yt+(Number(q.air)||0),st=Number.isFinite(q.heading)?q.heading:0,me=ce+3+Math.sin(st)*5.8,Tt=Q+15+_t*20,Ne=K.rig;Ne?(o.position.set(Ne.position.x,Ne.position.y,Ne.position.z),o.lookAt(Ne.target.x,Ne.target.y,Ne.target.z)):(o.position.set(ht-1.3,Math.max(ae+2.55,ut+_t*3.8)-dn(K.dip||0,0,1)*.25,-Q+D),o.lookAt(me,zt(me,Tt,q.surface)+3.7,-Tt)),o.rotateZ(dn(K.roll||0,-.06,.06));let Ye=60+(1-dn(K.zoom||1,.8,1))*20;Math.abs(o.fov-Ye)>.04&&(o.fov=Ye,o.updateProjectionMatrix()),i.position.copy(o.position),s.position.set(ce*.14,zt(0,Q+315)+14,-Q-315),r.position.set(ce-42,yt+85,-Q+38),r.target.position.set(ce,yt-10,-Q-28),r.target.updateMatrixWorld(),e.render(t,o)},setCourse(K={}){R={hazards:Array.isArray(K.hazards)?K.hazards:[],phase:K.phase??"idle"}}})}var sn,_c,Eu,mS,Pr,gS,Tu,Ai,RT,xc,_S,Au,ys,Ru,Cu,xS,yS,vS,MS,dn,Iu,rn,SS,rm,bS,im,om,Pu,Lu,wS,am,ES,Zi,Xt,Jn,sm,TS,AS,RS,CS,lm,IS,PS,LS,hm=kn(()=>{eu();Ep();Ap();Jo();du();Fp();Ho();sn=36,_c=48,Eu=246,mS=24,Pr=24,gS=31,Tu=new Mn({vertexColors:!0,roughness:.98,metalness:0,side:tn}),Ai=new Mn({color:6641737,roughness:1}),RT=new Mn({color:9533795,roughness:1}),xc=new Mn({color:12756350,roughness:1,flatShading:!0}),_S=new Mn({color:4866103,roughness:1,flatShading:!0}),Au=[1788994,2645070,3501400].map(n=>new Mn({color:n,roughness:1,flatShading:!0})),ys=new Mn({color:15397875,roughness:.98}),Ru=new Mn({color:6912899,roughness:.98,flatShading:!0}),Cu=new Mn({color:5137004,roughness:1,flatShading:!0}),xS=new Mn({color:14249040,roughness:.83,side:tn,flatShading:!0}),yS=new Mn({color:4032403,roughness:.86,side:tn,flatShading:!0}),vS=new Fn({color:7974328,opacity:.65,transparent:!0,depthWrite:!1,side:tn}),MS=new Fn({color:16777215,opacity:.9,transparent:!0,depthWrite:!1,side:tn}),dn=(n,e,t)=>Math.min(t,Math.max(e,n)),Iu=n=>{let e=Math.sin(n*127.1+31.37)*43758.5453;return e-Math.floor(e)},rn=(n,e,t,i=0,s=0,r=0)=>{let o=new jt(n,e);return o.position.set(i,s,r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o},SS=()=>{let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256),i=58291,s=()=>(i=Math.imul(i,1664525)+1013904223|0,(i>>>0)/4294967296);for(let o=0;o<t.data.length;o+=4){let a=Math.floor(236+s()*19);t.data[o]=a,t.data[o+1]=Math.min(255,a+3),t.data[o+2]=Math.min(255,a+5),t.data[o+3]=255}e.putImageData(t,0,0);for(let o=0;o<115;o+=1){let a=s()*256,l=s()*256;e.strokeStyle=`rgba(94, 139, 157, ${.025+s()*.055})`,e.lineWidth=.6+s()*1.3,e.beginPath(),e.moveTo(a,l),e.quadraticCurveTo(a+9,l-1,a+18+s()*18,l+1),e.stroke()}let r=new so(n);return r.wrapS=ws,r.wrapT=ws,r.colorSpace=Tn,r.anisotropy=4,r},rm=n=>{let e=new Ut,t=[],i=[],s=[],r=[],o=[],a=Math.ceil(Pr*2)/2,l=a+gS;for(let v=a+2.5;v<l;v+=2.5)o.unshift(-v);o.unshift(-l);for(let v=-a;v<=a+1e-8;v+=.5)o.push(v);for(let v=a+2.5;v<l;v+=2.5)o.push(v);o.push(l);let c=o.length-1,h=_c,u=new $e(15397361),d=new $e(13164002),f=new $e,p=new $e(13887977),y=new $e(12048095),m=[];for(let v=0;v<=h;v+=1){let S=n*sn+v/h*sn;for(let M=0;M<=c;M+=1){let T=o[M],x=zt(T,S);t.push(T,x,-S),m.push(x),s.push(T/8,S/8);let _=dn((Math.abs(T)-7.7)/8,0,1),w=(Math.sin(S*.33+T*.47)+Math.sin(S*.12-T*.81))*.019;f.copy(u).lerp(d,_).offsetHSL(0,0,w);let R=wu(T,S);R>.15&&f.lerp(p,dn(R/1.1,0,1)*.3),R<-.1&&f.lerp(y,dn(-R/.35,0,1)*.14),i.push(f.r,f.g,f.b)}}for(let v=0;v<h;v+=1)for(let S=0;S<c;S+=1){let M=v*(c+1)+S,T=M+1,x=M+c+1,_=x+1;r.push(M,T,x,T,_,x)}e.setIndex(r),e.setAttribute("position",new ft(t,3)),e.setAttribute("color",new ft(i,3)),e.setAttribute("uv",new ft(s,2)),e.computeVertexNormals();let g=new jt(e,Tu);return g.receiveShadow=!0,g.frustumCulled=!1,{mesh:g,acrossSamples:o,baseHeights:Float32Array.from(m),baseColors:Float32Array.from(i),rutOffsets:new Float32Array(m.length),rows:h}},bS=n=>{let e=[],t=Math.floor((Pr-1.1)/.76);for(let r=-t;r<=t;r+=1){let o=r*.76;for(let a=0;a<12;a+=1){let l=n*sn+a*3,c=l+3;e.push(o,zt(o,l)+.018,-l,o,zt(o,c)+.018,-c)}}let i=new Ut;i.setAttribute("position",new ft(e,3));let s=new to(i,new pr({color:8826552,transparent:!0,opacity:.09,depthWrite:!1}));return s.frustumCulled=!1,s},im=(n,e,t,i)=>{let s=[];for(let a of[-1,1])for(let l=0;l<_c;l+=1){let c=n*sn+l/_c*sn,h=n*sn+(l+1)/_c*sn,u=a*Pr-e/2,d=a*Pr+e/2,f=[u,zt(u,c)+t,-c],p=[d,zt(d,c)+t,-c],y=[u,zt(u,h)+t,-h],m=[d,zt(d,h)+t,-h];s.push(...f,...p,...y,...p,...m,...y)}let r=new Ut;r.setAttribute("position",new ft(s,3));let o=new jt(r,i);return o.frustumCulled=!1,o},om=n=>[im(n,.34,.025,vS),im(n,.16,.03,MS)],Pu=(n=1)=>{let e=new Ft,t=3.9*n;rn(new ei(.09*n,.17*n,t*.38,7),Ai,e,0,t*.19,0);for(let i=0;i<3;i+=1){let s=(1.15-i*.22)*n,r=(2.2-i*.15)*n,o=(1.5+i*.8)*n;rn(new Bi(s,r,7),Au[i],e,0,o,0);let a=rn(new Bi(s*.54,r*.42,7),ys,e,0,o+r*.3,0);a.castShadow=!1}return e},Lu=(n=1)=>{let e=new Ft,t=rn(new ui(.86*n,0),Ru,e,0,.48*n,0);t.scale.set(1.2,.68,.92),t.rotation.set(.18,.47,-.11);let i=rn(new ui(.47*n,0),Cu,e,.52*n,.28*n,.2*n);i.scale.y=.66;let s=rn(new Bi(.52*n,.22*n,5),ys,e,-.1*n,.96*n,-.1*n);return s.rotation.z=-.18,e},wS=n=>{let e=new Ft;rn(new ui(n,0),Ru,e);let t=rn(new ui(n*.43,0),ys,e,-n*.13,n*.74,n*.12);return t.scale.y=.65,e},am=new O(0,1,0),ES=()=>0,Zi=(n,e)=>Iu(n*7.13+e*3.71),Xt=(n,e,t)=>new O(n,e,t),Jn=(n,e,t,i,s,r,o=8)=>{let a=new O().subVectors(i,t),l=rn(new ei(r,s,a.length(),o),e,n);return l.position.copy(t).add(i).multiplyScalar(.5),l.quaternion.setFromUnitVectors(am,a.normalize()),l},sm=(n,e,t,i,s,r)=>{let o=new O().subVectors(i,t),a=o.length();o.normalize();let l=new Bi(s,a,6);l.scale(1,1,r/s);let c=rn(l,e,n),h=new O().crossVectors(o,am).normalize();return c.quaternion.setFromRotationMatrix(new Ct().makeBasis(h,o,new O().crossVectors(h,o))),c.position.copy(t).add(i).multiplyScalar(.5),c},TS=(n,e)=>{let t=new Ft,i=Number(n.radius)||5.5,s=n.rootEnd===-1?-1:1,r=Number(n.id)||0,o=Xt(s*(i-.3),0,0),a=Xt(-s*(i-.03),0,0);o.y=e(o.x,0)+.12,a.y=e(a.x,0)+.05;let l=m=>.36-m*.23,c=m=>o.clone().lerp(a,m);Jn(t,Ai,o,a,l(0),l(1),9);let h=s*(i-.15),u=e(h,0)+.26;rn(new ei(.8,.72,.26,7),_S,t,h,u,0).rotation.set(Zi(r,1)*.6,0,Math.PI/2);for(let[m,g]of[-1.9,-.75,.35,1.5].entries()){let v=g+(Zi(r,2+m)-.5)*.4;Jn(t,Ai,Xt(h-s*.08,u+Math.cos(v)*.4,Math.sin(v)*.4),Xt(s*(i-.04),u+Math.cos(v)*.8,Math.sin(v)*.95),.075,.02,5)}let f=rn(new Pt(.24,.07,.95),ys,t,h,u+.8,0);f.castShadow=!1;let p=6;for(let m=0;m<p;m+=1){let g=.1+(m+Zi(r,10+m)*.6)/p*.72,v=m%2===0?1:-1,S=c(g).add(Xt(0,l(g)*.45,v*l(g)*.6)),M=.24+Zi(r,20+m)*.2,T=S.clone().add(Xt(-s*.22,.32,v).normalize().multiplyScalar(M));Jn(t,Ai,S,T,.06,.04,5),Jn(t,xc,T,T.clone().add(Xt(-s*.22,.32,v).normalize().multiplyScalar(.04)),.04,.03,5)}for(let[m,g]of[.56,.68,.8,.9].entries()){let v=m%2===0?1:-1,S=c(g),M=1.5-m*.12,T=Xt(S.x-s*.4,0,v*M);S.y=e(S.x,0)+.22,T.y=e(T.x,T.z)+.16,sm(t,Au[m%3],S,T,.5,.16);let x=sm(t,ys,S.clone().add(Xt(0,.11,0)),S.clone().lerp(T,.5).add(Xt(0,.11,0)),.14,.07);x.castShadow=!1}let y=Math.atan2(a.y-o.y,a.x-o.x);for(let[m,g]of[[.06,.34],[.42,.62],[.7,.97]]){let v=c((m+g)/2),S=rn(new Pt((g-m)*o.distanceTo(a),.05,l((m+g)/2)*1.3),ys,t,v.x,v.y+l((m+g)/2)+.012,0);S.rotation.z=y,S.castShadow=!1}return t},AS=(n,e)=>{let t=new Ft,i=Number(n.radius)||4.5,s=n.stumpEnd===1?1:-1,r=Number(n.id)||0,o=s*(i-.42),a=-s*(i-.95),l=e(o,0),c=e(a,0);Jn(t,Ai,Xt(o,l-.3,0),Xt(o,l+.5,0),.4,.34,9),Jn(t,Ai,Xt(o,l+.5,0),Xt(o,l+2.42,0),.34,.29,9);for(let T=0;T<5;T+=1){let x=T*1.26+Zi(r,T)*.5,_=Xt(o+Math.cos(x)*.18,l+2.38,Math.sin(x)*.18);Jn(t,xc,_,_.clone().add(Xt(Math.cos(x)*.05,.3+Zi(r,10+T)*.4,Math.sin(x)*.05)),.07,.012,4)}let h=rn(new ui(.9,0),Ru,t,a,c+.98,.05);h.scale.set(.98,1.32,1.08),h.rotation.set(.3,Zi(r,20)*3,.2);let u=rn(new ui(.42,0),Cu,t,a+s*.25,e(a,.95)+.18,.95);u.scale.y=.7;let d=Xt(o-s*.12,l+2.37,.1),p=Xt(a,c+2.16,.1).clone().sub(d),y=-s*(i-.12),m=d.clone().addScaledVector(p,(y-d.x)/p.x),g=T=>.23-T*.1,v=T=>d.clone().lerp(m,T);Jn(t,Ai,d,m,g(0),g(1),9),Jn(t,xc,Xt(o,l+2.3,.16),d.clone().add(Xt(-s*.25,.1,.06)),.11,.07,4);for(let T=0;T<5;T+=1){let x=.16+(T+Zi(r,30+T)*.5)/5*.7,_=T%2===0?1:-1,w=Xt(-s*.2,.55,_).normalize(),R=v(x).addScaledVector(w,g(x)*.6),C=R.clone().addScaledVector(w,.25+Zi(r,40+T)*.25);Jn(t,Ai,R,C,.055,.035,5),Jn(t,xc,C,C.clone().addScaledVector(w,.04),.035,.028,5)}for(let[T,x]of[.55,.85].entries())rn(new Bi(.34-T*.06,.9,6),Au[T+1],t,m.x+s*(.42+T*.3),m.y-x*.5,.1+(T?-.3:.25)).rotation.set(T?-.5:.5,0,Math.PI+s*.35);let S=Math.atan2(m.y-d.y,m.x-d.x);for(let[T,x]of[[.08,.42],[.5,.86]]){let _=v((T+x)/2),w=rn(new Pt((x-T)*d.distanceTo(m),.05,g((T+x)/2)*1.3),ys,t,_.x,_.y+g((T+x)/2)+.012,_.z);w.rotation.z=S,w.castShadow=!1}let M=rn(new ui(.4,0),ys,t,a-s*.2,c+1.42,-.42);return M.scale.y=.4,M.castShadow=!1,t},RS=(n,e)=>{let t=new Ft;for(let i of Rp(n)){let s=i.type==="rock"?Lu(i.size):Pu(i.size);s.position.set(i.x,e(i.x,i.z),i.z),s.rotation.y=i.turn,t.add(s)}return t},CS=(n,e)=>{let t=new Ft,i=n.kind==="duck",s=i?2.1:.19,r=Math.ceil(n.radius),o=a=>Xt(a,e(a,0)+s,0);for(let a=0;a<r;a+=1){let l=n.radius*(2*a/r-1),c=n.radius*(2*(a+1)/r-1);Jn(t,Ai,o(l),o(c),.31,.31,9)}if(i)for(let a of[-n.radius,n.radius])Jn(t,Ai,Xt(a,e(a,0),0),o(a),.28,.23,8);return t},lm=(n,e=ES)=>n.variant==="full-width-log"?CS(n,e):n.kind==="jump"?TS(n,e):n.kind==="duck"?AS(n,e):n.variant==="rolling-boulder"?wS(n.radius):n.variant==="tree-island"||n.variant==="rock-garden"?RS(n,e):n.variant==="rock"?Lu(1.15):Pu(1.25),IS=n=>{let e=new Ft;for(let[t,i,s]of[[n.lip-3,xS,1.75],[n.lip+26,yS,1.2]]){let r=n.side*(Pr+1.2),o=new Ft;o.position.set(r,zt(r,t),-t),rn(new ei(.025,.035,s,6),Cu,o,0,s*.5,0);let a=new zi;a.moveTo(0,0),a.lineTo(0,.35),a.lineTo(-n.side*.48,.22),a.closePath(),rn(new ls(a),i,o,0,s-.38,0),e.add(o)}return e},PS=()=>{let n=new xo(900,24,16),e=n.getAttribute("position"),t=[],i=new $e(13163749),s=new $e(6461626),r=new $e;for(let a=0;a<e.count;a+=1){let l=dn((e.getY(a)/900+.08)*1.45,0,1);r.copy(i).lerp(s,l),t.push(r.r,r.g,r.b)}n.setAttribute("color",new ft(t,3));let o=new jt(n,new Fn({vertexColors:!0,side:Sn,fog:!1,depthWrite:!1,toneMapped:!1}));return o.renderOrder=-1,o},LS=()=>{let n=new Ft,e=[new Fn({color:8625834,side:tn,fog:!0}),new Fn({color:10664900,side:tn,fog:!0}),new Fn({color:14477802,side:tn,fog:!0})];for(let t=0;t<2;t+=1){let i=[],s=[],r=[];for(let c=0;c<=22;c+=1)r.push({x:-480+c*44,y:28+Iu(c*7+t*19)*43+Math.sin(c*.87+t)*20});let o=-t*80;for(let c=0;c<r.length-1;c+=1){let h=r[c],u=r[c+1];i.push(h.x,-70,o,h.x,h.y,o-8,u.x,u.y,o-8,h.x,-70,o,u.x,u.y,o-8,u.x,-70,o),s.push(h.x,h.y,o-8,u.x,u.y,o-8,h.x+7,h.y-13,o-5,u.x,u.y,o-8,u.x-8,u.y-16,o-5,h.x+7,h.y-13,o-5)}let a=new Ut;a.setAttribute("position",new ft(i,3));let l=new Ut;l.setAttribute("position",new ft(s,3)),n.add(new jt(a,e[t])),n.add(new jt(l,e[2]))}return n}});Jo();var Je=Object.freeze({halfWidth:24,spawnDistance:44}),Kn=(n,e,t)=>Math.min(t,Math.max(e,n)),Go=n=>Kn(Math.min(n.width/1100,n.height/700),.72,1.75),DS=(n,e)=>{let t=Kn((e/n.height-.36)/(.78-.36),0,1),i=0,s=1;for(let r=0;r<12;r+=1){let o=(i+s)/2;o*o*(3-2*o)<t?i=o:s=o}return(i+s)/2},Fu=(n,e,t,i,s)=>{let r=(1-DS(n,e))*Je.spawnDistance,o=1+.09*Math.sin((s+r)/34)*r/Je.spawnDistance,a=Fr(n,e)*o,l=Yo(s+r)-Yo(s);return n.width/2+(i+(l-t)/Je.halfWidth)*a},yc=(n,e,t,i,s)=>{for(let r=0;r<=48;r+=1){let o=e.height*(.36+(1-.36)*r/48),a=Fu(e,o,t,i,s);r===0?n.moveTo(a,o):n.lineTo(a,o)}},FS=(n,e,t,i,s)=>{n.beginPath(),yc(n,e,t,i,s);for(let r=48;r>=0;r-=1){let o=e.height*(.36+(1-.36)*r/48),a=r/48,l=Math.sin(r*.72+s*.12)*a*e.width*.002,c=e.width*(.003+a*a*.018)+l;n.lineTo(Fu(e,o,t,i,s)+i*c,o)}n.closePath(),n.fillStyle="#b9dbe8",n.fill(),n.beginPath(),yc(n,e,t,i,s),n.strokeStyle="#f8ffff",n.lineWidth=Math.max(5,e.width*.006),n.stroke(),n.beginPath(),yc(n,e,t,i,s),n.strokeStyle="#61cfe0",n.lineWidth=Math.max(1.5,e.width*.0013),n.stroke()},Du=(n,e,t,i,s,r,o,a)=>{for(let[l,c,h,u]of t){let d=e.width*l+a,f=e.height*c,p=e.height*i,y=e.width*h*.5,m=d-y,g=d+y,v=(p-f)*.28;n.fillStyle=s,n.beginPath(),n.moveTo(m,p),n.lineTo(d-y*.53,f+v*1.4),n.lineTo(d-y*.22,f+v*.58),n.lineTo(d+u*y,f),n.lineTo(d+y*.27,f+v*.74),n.lineTo(d+y*.62,f+v*1.6),n.lineTo(g,p),n.closePath(),n.fill(),n.fillStyle=r,n.beginPath(),n.moveTo(d+u*y,f),n.lineTo(d+y*.27,f+v*.74),n.lineTo(g,p),n.lineTo(d+y*.1,p),n.lineTo(d-y*.09,f+v*1.6),n.closePath(),n.fill(),n.fillStyle=o,n.beginPath(),n.moveTo(d-y*.22,f+v*.58),n.lineTo(d+u*y,f),n.lineTo(d+y*.27,f+v*.74),n.lineTo(d+y*.08,f+v*.9),n.lineTo(d-y*.02,f+v*.72),n.lineTo(d-y*.11,f+v*1.05),n.closePath(),n.fill(),n.fillStyle="rgba(121, 177, 197, 0.2)",n.beginPath(),n.moveTo(d-y*.23,f+(p-f)*.23),n.lineTo(d,f),n.lineTo(d-y*.04,f+(p-f)*.23),n.closePath(),n.fill()}},OS=(n,e,t,i)=>{let s=n.createLinearGradient(0,0,0,e.height*.6);s.addColorStop(0,"#58a7cc"),s.addColorStop(.62,"#b9e4ef"),s.addColorStop(1,"#effaff"),n.fillStyle=s,n.fillRect(0,0,e.width,e.height);let r=e.width*.76-t*4,o=e.height*.13,a=n.createRadialGradient(r,o,2,r,o,e.height*.28);a.addColorStop(0,"rgba(255,250,222,0.68)"),a.addColorStop(1,"rgba(255,250,222,0)"),n.fillStyle=a,n.fillRect(0,0,e.width,e.height*.48),n.fillStyle="#fff9e4",n.beginPath(),n.arc(r,o,e.height*.029,0,Math.PI*2),n.fill(),Du(n,e,[[-.06,.17,.31,-.08],[.17,.08,.35,.04],[.43,.19,.34,-.1],[.7,.09,.37,.08],[1.04,.16,.36,-.06]],.42,"#c8dbe1","#a9c8d2","#f5fbfa",-t*2.5),Du(n,e,[[-.07,.29,.27,.09],[.16,.2,.34,-.07],[.48,.27,.3,.06],[.78,.2,.35,-.08],[1.08,.27,.31,.07]],.51,"#9bbbc7","#739bac","#eff9fa",-t*5),Du(n,e,[[-.11,.39,.33,.08],[.24,.32,.32,-.06],[.53,.38,.28,.07],[.87,.31,.34,-.08],[1.13,.4,.3,.04]],.59,"#6f9baa","#4c7d91","#d9eef1",-t*8);let l=n.createLinearGradient(0,e.height*.45,0,e.height);l.addColorStop(0,"#e3f5f6"),l.addColorStop(1,"#c3e0e8"),n.fillStyle=l,n.beginPath(),n.moveTo(0,e.height*.56),n.bezierCurveTo(e.width*.13,e.height*.46,e.width*.23,e.height*.56,e.width*.39,e.height*.5),n.bezierCurveTo(e.width*.57,e.height*.43,e.width*.65,e.height*.57,e.width*.79,e.height*.48),n.bezierCurveTo(e.width*.88,e.height*.44,e.width*.95,e.height*.54,e.width,e.height*.52),n.lineTo(e.width,e.height),n.lineTo(0,e.height),n.closePath(),n.fill();let c=n.createLinearGradient(0,e.height*.36,0,e.height);c.addColorStop(0,"#f6fcfc"),c.addColorStop(.55,"#ffffff"),c.addColorStop(1,"#f7fcff"),n.fillStyle=c,n.beginPath(),yc(n,e,t,-1,i);for(let h=48;h>=0;h-=1){let u=e.height*(.36+(1-.36)*h/48);n.lineTo(Fu(e,u,t,1,i),u)}n.closePath(),n.fill();for(let h of[-1,1])FS(n,e,t,h,i)},US=(n,e,t,i,s,r)=>{let o=s==="powder"?4.8:2.8,a=Math.floor(i/o)*o,l=s==="ice"?.05:s==="powder"?.075:.11;n.save(),n.strokeStyle=s==="ice"?"#81c9d7":"#9bcbd4";for(let c=a;c<i+Je.spawnDistance;c+=o){let h=c-i;if(h<.5||h>Je.spawnDistance)continue;let u={...Je,travel:i},d=ri(e,t,{x:-Je.halfWidth*.86,z:h},u),f=ri(e,t,{x:Je.halfWidth*.86,z:h},u),p=Math.sin(c*.75)*5*d.scale;n.globalAlpha=l*d.alpha*(.65+Math.min(r/34,1)*.35),n.lineWidth=Math.max(.7,d.scale*(s==="powder"?2.5:1.4)),n.beginPath(),n.moveTo(d.x,d.y),n.quadraticCurveTo((d.x+f.x)/2,d.y-4*d.scale,f.x,f.y),n.stroke()}n.restore()},BS=(n,e,t,i,s)=>{let r=.58+.42*Math.sin(i*.14+.8)**2,o=Kn((s-14)/20,0,1)*r;if(!(o<.1)){n.save(),n.strokeStyle="#ffffff",n.lineCap="round";for(let a=0;a<14;a+=1){let l=(a*8+i*(.65+a%3*.09))%Je.spawnDistance,c=a%2?1:-1,h=ri(e,t,{x:c*(Je.halfWidth+3.5+a%3*2),z:l},{...Je,travel:i}),u=(11+h.scale*42)*Go(e);n.globalAlpha=h.alpha*o*.28,n.lineWidth=Math.max(1,h.scale*2.2),n.beginPath(),n.moveTo(h.x-u*.5,h.y),n.quadraticCurveTo(h.x,h.y-4*h.scale,h.x+u,h.y-2*h.scale),n.stroke()}n.restore()}},zS=(n,e,t,i)=>{let r=Math.floor(i/7.5)*7.5;n.save(),n.lineCap="round";for(let o=r;o<i+Je.spawnDistance;o+=7.5){let a=o-i;if(!(a<1||a>Je.spawnDistance))for(let l of[-1,1]){let c=ri(e,t,{x:l*(Je.halfWidth+1.8),z:a},{...Je,travel:i}),h=ri(e,t,{x:l*(Je.halfWidth+9),z:a},{...Je,travel:i});n.globalAlpha=c.alpha*.34,n.strokeStyle="#8bbac9",n.lineWidth=Math.max(1,c.scale*3.5),n.beginPath(),n.moveTo(c.x,c.y),n.quadraticCurveTo((c.x+h.x)/2,c.y-8*c.scale,h.x,h.y-3*c.scale),n.stroke()}}n.restore()},kS=(n,e,t,i)=>{let s=Math.max(0,t-i.downhill),r=n.height*.78+s*Math.max(3.5,n.height*.006);return{x:n.width/2+(i.across-e)/Je.halfWidth*Fr(n,r),y:r,behind:s}},HS=(n,e,t,i,s)=>{if(s.length<2)return;let r=s.map(a=>({...kS(e,t,i,a),speed:a.speed})).filter(a=>a.y<=e.height+25);if(r.length<2)return;let o=Go(e);n.lineCap="round",n.lineJoin="round";for(let[a,l,c]of[[-10,9,"rgba(85,150,166,0.32)"],[10,9,"rgba(85,150,166,0.32)"],[-10,4,"rgba(255,255,255,0.92)"],[10,4,"rgba(255,255,255,0.92)"]]){n.beginPath(),n.moveTo(r[0].x+a*o,r[0].y);for(let h of r.slice(1))n.lineTo(h.x+a*o,h.y);n.strokeStyle=c,n.lineWidth=l*o,n.stroke()}for(let a=0;a<r.length;a+=3){let l=r[a],c=Kn(1-l.behind/28,0,1),h=Kn((l.speed||16)/25,.7,1.45),u=(20+a%4*5)*o,d=(8+a%5*2.1)*o*c*h;if(!(d<.5))for(let f of[-1,1])n.globalAlpha=c,n.fillStyle="rgba(93,151,166,0.27)",n.beginPath(),n.ellipse(l.x+f*u,l.y+d*.55,d*1.65,d*.65,0,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(l.x+f*u,l.y,d*1.2,d*.8,0,0,Math.PI*2),n.fill()}n.globalAlpha=1},GS=(n,e,t,i,s=0,r=16,o=e.width/2)=>{let a=Go(e),l=e.height*.78,c=Kn(Math.abs(t),0,1),h=Kn(s/8,0,1);if(c<.05&&h<.08)return;let u=Kn(r/24,.75,1.5);for(let d of[-1,1]){let f=(.52+(d*t>0?c*1.1:c*.35)+h*.8)*u;for(let p=0;p<12;p+=1){let y=(i*2.7+p*.8)%11,m=o+d*(28+y*(5.2+c*3.4))*a,g=l+(y*2.3+Math.sin(p*2.1)*6)*a,v=(5+(11-y)*.95)*a*f;n.fillStyle="rgba(85,151,174,0.24)",n.beginPath(),n.ellipse(m,g+v*.45,v*1.42,v*.72,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.96)",n.beginPath(),n.ellipse(m,g,v*1.12,v*.8,0,0,Math.PI*2),n.fill()}}},VS=(n,e,t)=>{if(t<=0)return;let i=Go(e),s=1-Kn(t/.8,0,1),r=e.width/2,o=e.height*.78;n.save(),n.globalAlpha=Kn(t*1.2,0,1);for(let a=0;a<18;a+=1){let l=a*Math.PI*2/18,c=(18+s*110+a%3*11)*i,h=(6+a%4*2.4)*i*(1-s*.55);n.fillStyle=a%3===0?"#b5e3e9":"#ffffff",n.beginPath(),n.ellipse(r+Math.cos(l)*c,o+Math.sin(l)*c*.45,h*1.3,h*.8,0,0,Math.PI*2),n.fill()}n.restore()},dm=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.28)":"rgba(45,104,114,0.16)",n.beginPath(),n.ellipse(e+i*.15,t+i*.06,i*.52,i*.13,0,0,Math.PI*2),n.fill(),n.fillStyle="#624535",n.fillRect(e-i*.06,t-i*.3,i*.12,i*.32);for(let r=0;r<3;r+=1){let o=t-i*(1-r*.24),a=t-i*(.32-r*.13),l=i*(.25+r*.105);n.fillStyle=s?r===1?"#17664e":"#0a463d":r===1?"#2a8b6b":"#176c57",n.beginPath(),n.moveTo(e,o),n.lineTo(e-l,a),n.lineTo(e+i*.04,a),n.closePath(),n.fill(),n.fillStyle=r===1?"#269976":"#1a856a",n.beginPath(),n.moveTo(e,o),n.lineTo(e+i*.04,a),n.lineTo(e+l,a),n.closePath(),n.fill(),n.fillStyle=s?"#0d4d43":"#1d765f",n.beginPath(),n.moveTo(e,o),n.lineTo(e+l,a),n.lineTo(e+l*.06,a),n.closePath(),n.fill(),n.strokeStyle="#e6f6f5",n.lineWidth=Math.max(1,i*.027),n.beginPath(),n.moveTo(e-l*.13,o+i*.08),n.lineTo(e-l*.45,o+(a-o)*.63),n.lineTo(e-l*.67,o+(a-o)*.68),n.stroke()}s&&(n.strokeStyle="rgba(229,106,65,0.8)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.ellipse(e,t+i*.02,i*.43,i*.1,0,0,Math.PI*2),n.stroke())},fm=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.26)":"rgba(45,104,114,0.15)",n.beginPath(),n.ellipse(e+i*.14,t+i*.06,i*.59,i*.15,0,0,Math.PI*2),n.fill(),n.fillStyle=s?"#374859":"#627889",n.beginPath(),n.moveTo(e-i*.44,t),n.lineTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.39,t-i*.25),n.lineTo(e+i*.46,t),n.closePath(),n.fill(),n.strokeStyle=s?"#273746":"#536d7b",n.lineWidth=Math.max(1.5,i*.025),n.stroke(),n.fillStyle=s?"#708b99":"#9bb9c2",n.beginPath(),n.moveTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.16,t-i*.31),n.lineTo(e-i*.21,t-i*.23),n.closePath(),n.fill(),n.strokeStyle="#effbfb",n.lineWidth=Math.max(2,i*.055),n.beginPath(),n.moveTo(e-i*.21,t-i*.32),n.lineTo(e+i*.03,t-i*.42),n.lineTo(e+i*.16,t-i*.33),n.stroke(),s&&(n.strokeStyle="rgba(229,106,65,0.85)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.moveTo(e-i*.43,t+i*.02),n.quadraticCurveTo(e,t+i*.16,e+i*.43,t+i*.02),n.stroke())},WS=(n,e,t,i)=>{let s=Zo(i,Je.spawnDistance,{halfWidth:Je.halfWidth}),r=s.flatMap(o=>o.scenery);r.sort((o,a)=>a.z-o.z);for(let o of r){let a=o.z-i;if(a<0||a>Je.spawnDistance)continue;let l=ri(e,t,{x:o.x,z:a},{...Je,travel:i}),c=l.pathHalf/Je.halfWidth*2.35*o.size;n.save(),n.globalAlpha=l.alpha*.92,Sc(o.z)==="glow"&&(n.fillStyle="rgba(54,218,225,0.18)",n.beginPath(),n.ellipse(l.x,l.y,c*.65,c*.13,0,0,Math.PI*2),n.fill()),o.kind==="rock"?fm(n,l.x,l.y,c):dm(n,l.x,l.y,c),n.restore()}for(let o of s){if(o.index%8!==3)continue;let a=o.index*36+36/2-i;if(a<0||a>Je.spawnDistance)continue;let l=o.index%16===3?-1:1,c=ri(e,t,{x:l*(Je.halfWidth+10),z:a},{...Je,travel:i}),h=c.pathHalf/Je.halfWidth;n.save(),n.globalAlpha=c.alpha*.8,n.fillStyle="#284f61",n.fillRect(c.x-h*.7,c.y-h*2.5,h*1.4,h*2.5),n.fillStyle="#e6f5f6",n.beginPath(),n.moveTo(c.x-h,c.y-h*2.5),n.lineTo(c.x,c.y-h*3.5),n.lineTo(c.x+h,c.y-h*2.5),n.closePath(),n.fill(),n.fillStyle="#ef9d65",n.fillRect(c.x-h*.2,c.y-h*1.2,h*.4,h*1.2),n.restore()}for(let o of s){if(o.biome!=="glow"||o.index%4!==0)continue;let a=o.index*36+3-i;if(!(a<0||a>Je.spawnDistance))for(let l of[-1,1]){let c=ri(e,t,{x:l*(Je.halfWidth+4.5),z:a},{...Je,travel:i}),h=c.pathHalf/Je.halfWidth;n.save(),n.globalAlpha=c.alpha,n.fillStyle="rgba(53,219,222,0.25)",n.beginPath(),n.ellipse(c.x,c.y,h*1.3,h*.32,0,0,Math.PI*2),n.fill(),n.fillStyle="#24485c",n.fillRect(c.x-h*.16,c.y-h*2.5,h*.32,h*2.5),n.fillStyle="#55e2df",n.beginPath(),n.arc(c.x,c.y-h*2.55,h*.45,0,Math.PI*2),n.fill(),n.restore()}}},XS=(n,e,t,i)=>{let s=Math.floor(i/10)*10;for(let r=s;r<i+Je.spawnDistance;r+=10){let o=r-i;if(!(o<1||o>Je.spawnDistance-1))for(let a of[-1,1]){let l=ri(e,t,{x:a*(Je.halfWidth+.55),z:o},{halfWidth:Je.halfWidth,viewDistance:Je.spawnDistance,travel:i}),c=Go(e)*l.scale,h=38*c,{x:u,y:d}=l;n.save(),n.globalAlpha=l.alpha,n.strokeStyle="rgba(55, 103, 123, 0.22)",n.lineWidth=Math.max(1,2*c),n.beginPath(),n.moveTo(u,d),n.lineTo(u+a*16*c,d+3*c),n.stroke(),n.strokeStyle="#e15f50",n.lineWidth=Math.max(1.5,3*c),n.beginPath(),n.moveTo(u,d),n.lineTo(u,d-h),n.stroke(),n.strokeStyle="#f58e71",n.lineWidth=Math.max(.8,c),n.beginPath(),n.moveTo(u-c*.75,d-2*c),n.lineTo(u-c*.75,d-h),n.stroke(),n.fillStyle="#c6b9aa",n.beginPath(),n.moveTo(u+2*c,d-h+c),n.lineTo(u-a*13*c+2*c,d-h+6*c),n.lineTo(u+2*c,d-h+11*c),n.closePath(),n.fill(),n.fillStyle="#f4e9d8",n.beginPath(),n.moveTo(u,d-h),n.lineTo(u-a*15*c,d-h+5*c),n.lineTo(u,d-h+10*c),n.closePath(),n.fill(),n.restore()}}},qS=(n,e,t,i=1.04)=>{let s=t.pathHalf*i*2,r=Math.max(7,t.pathHalf/Je.halfWidth*.72),{x:o,y:a}=t;n.fillStyle="rgba(25,53,63,0.22)",n.beginPath(),n.ellipse(o,a+r*.7,s*.52,r*.7,0,0,Math.PI*2),n.fill(),n.fillStyle="#a9d7db",n.beginPath(),n.moveTo(o-s*.43,a+r*1.6),n.lineTo(o-s*.4,a-r*.6),n.lineTo(o+s*.4,a-r*.6),n.lineTo(o+s*.43,a+r*1.6),n.closePath(),n.fill(),n.fillStyle="#523929",n.fillRect(o-s/2,a-r,s,r*1.12),n.fillStyle="#ac7044",n.fillRect(o-s/2,a-r,s,r*.3),n.fillStyle="#f2f9f5",n.fillRect(o-s*.48,a-r*1.12,s*.96,r*.2),n.strokeStyle="#2d2928",n.lineWidth=Math.max(2,r*.12),n.strokeRect(o-s/2,a-r,s,r*1.12),n.strokeStyle="rgba(35,28,24,0.45)",n.lineWidth=Math.max(1,r*.07);for(let l of[-.32,-.08,.22])n.beginPath(),n.moveTo(o+s*l,a-r*.52),n.lineTo(o+s*(l+.12),a-r*.2),n.stroke();for(let l of[-1,1])n.fillStyle="#cf9c6f",n.beginPath(),n.ellipse(o+l*s*.49,a-r*.42,r*.35,r*.49,0,0,Math.PI*2),n.fill()},YS=(n,e,t)=>{let i=t.pathHalf/Je.halfWidth/32,s=t.x,r=t.y-90*i,o=t.pathHalf*1.04;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(s,t.y+3*i,o*.6,8*i,0,0,Math.PI*2),n.fill(),n.fillStyle="#222b43",n.beginPath(),n.ellipse(s,r,22*i,13*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#222b43",n.lineCap="round",n.lineWidth=Math.max(3,10*i),n.beginPath(),n.moveTo(s-8*i,r),n.quadraticCurveTo(s-o*.58,r-45*i,s-o,r+5*i),n.moveTo(s+8*i,r),n.quadraticCurveTo(s+o*.58,r-45*i,s+o,r+5*i),n.stroke(),n.fillStyle="#f0a65c",n.beginPath(),n.moveTo(s,r+2*i),n.lineTo(s-4*i,r+10*i),n.lineTo(s+4*i,r+10*i),n.closePath(),n.fill()},ZS=(n,e,t,i=1.04)=>{let s=t.pathHalf/Je.halfWidth/32,r=t.y-83*s,o=t.pathHalf*i,a=t.x;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(a,t.y+3*s,o*.68,8*s,0,0,Math.PI*2),n.fill(),n.strokeStyle="#52382e",n.lineCap="round",n.lineWidth=Math.max(5,15*s),n.beginPath(),n.moveTo(a-o,r-9*s),n.quadraticCurveTo(a,r+9*s,a+o,r-9*s),n.stroke(),n.fillStyle="#1b624f";for(let l of[-.72,-.36,.08,.47,.77]){let c=a+o*l,h=r-10*s;n.fillStyle="#0b584e",n.beginPath(),n.moveTo(c-16*s,h+5*s),n.lineTo(c+2*s,h-12*s),n.lineTo(c+16*s,h+5*s),n.closePath(),n.fill(),n.fillStyle="#249575",n.beginPath(),n.moveTo(c+2*s,h-12*s),n.lineTo(c+16*s,h+5*s),n.lineTo(c+2*s,h+5*s),n.closePath(),n.fill()}},um=(n,e,t)=>{let i=Kn(e.pathHalf*.12,9,31),s=e.y-(t==="jump"?i*3:e.pathHalf/Je.halfWidth*3.5+i*1.5);n.globalAlpha=e.alpha,n.fillStyle=t==="jump"?"#dc754e":"#684f90",n.beginPath(),n.arc(e.x,s,i,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=Math.max(2,i*.16),n.lineCap="round",n.lineJoin="round",n.beginPath();let r=t==="jump"?-1:1;n.moveTo(e.x,s-r*i*.42),n.lineTo(e.x,s+r*i*.42),n.moveTo(e.x-i*.32,s+r*i*.1),n.lineTo(e.x,s+r*i*.42),n.lineTo(e.x+i*.32,s+r*i*.1),n.stroke()},JS=(n,e,t)=>{let{x:i,y:s,pathHalf:r}=e,o=r/Je.halfWidth*t.radius;n.fillStyle="rgba(21,48,61,0.26)",n.beginPath(),n.ellipse(i,s,o,o*.25,0,0,Math.PI*2),n.fill(),n.translate(i,s-o*.92),n.rotate(t.roll),n.fillStyle="#374859",n.beginPath(),n.moveTo(-o,0),n.lineTo(-o*.72,-o*.7),n.lineTo(0,-o),n.lineTo(o*.76,-o*.58),n.lineTo(o,o*.18),n.lineTo(o*.52,o*.84),n.lineTo(-o*.28,o*.94),n.lineTo(-o*.81,o*.57),n.closePath(),n.fill(),n.strokeStyle="#273746",n.lineWidth=Math.max(1.5,o*.06),n.stroke(),n.fillStyle="#c3dbe1",n.beginPath(),n.moveTo(-o*.72,-o*.7),n.lineTo(0,-o),n.lineTo(o*.49,-o*.73),n.lineTo(o*.16,-o*.54),n.lineTo(-o*.43,-o*.44),n.closePath(),n.fill()},KS=(n,e,t,i,s)=>{for(let r of[...s].sort((o,a)=>a.z-o.z)){if(r.z<-2||r.z>Je.spawnDistance)continue;let o=ri(e,t,r,{...Je,travel:i});n.save(),n.globalAlpha=o.alpha;let a=r.radius===void 0?void 0:r.radius/Je.halfWidth;if(r.kind==="jump")qS(n,e,o,a),r.z>3&&um(n,o,"jump");else if(r.kind==="duck")r.variant==="bird"?YS(n,e,o):ZS(n,e,o,a),r.z>3&&um(n,o,"duck");else if(r.variant==="rolling-boulder")JS(n,o,r);else{let l=o.pathHalf/Je.halfWidth*2.35;r.variant==="rock"||r.variant==="rock-garden"?fm(n,o.x,o.y,l,!0):dm(n,o.x,o.y,l,!0)}n.restore()}};async function Ou(n){if(n.worldCanvas&&n.runtime)try{let{createMountainWorld:r}=await Promise.resolve().then(()=>(hm(),cm)),o=r(n.worldCanvas);n.runtime.world3d=o,n.canvas.style.visibility="hidden",n.events.addEventListener("course:update",a=>{o.setCourse(a.detail)}),n.events.addEventListener("rider:update",a=>{o.render(a.detail)});return}catch(r){console.warn("3D mountain renderer unavailable; using the canvas view",r),n.worldCanvas.style.display="none"}let e=n.canvas.getContext("2d");if(!e)throw new Error("Mountain rendering requires a 2D canvas context");let t=0,i=[],s={crashFx:0,distance:0,hazards:[],phase:"idle"};n.events.addEventListener("course:update",r=>{s={crashFx:Number(r.detail?.crashFx)||0,distance:Number(r.detail?.distance)||0,hazards:Array.isArray(r.detail?.hazards)?r.detail.hazards:[],phase:r.detail?.phase??"idle"}}),n.events.addEventListener("rider:update",r=>{let o=r.detail?.state,a=r.detail?.camera,l=Number(o?.position?.across)||0,c=Number(a?.position?.across)||0,h=Kn(Number(a?.zoom)||1,.82,1),u=$u(n.canvas,l,c,h,Je.halfWidth),d=s.phase==="idle"?0:Number(o?.position?.downhill)||s.distance;if(s.phase==="idle"?(t=0,i=[]):s.phase==="running"&&(t=Math.max(0,d),(o?.air??0)<.08&&(i.length===0||t-i.at(-1).downhill>=.45)&&i.push({across:l,downhill:t,speed:Number(o?.speed)||16}),i=i.filter(f=>t-f.downhill<42)),e.save(),e.translate(n.canvas.width/2,n.canvas.height/2),e.rotate(-(Number(a?.roll)||0)),e.translate(-n.canvas.width/2,-n.canvas.height/2),OS(e,n.canvas,u,d),US(e,n.canvas,u,d,o?.surface??"powder",Number(o?.speed)||0),zS(e,n.canvas,u,d),HS(e,n.canvas,u,t,i),s.phase==="running"&&(o?.air??0)<.08){let f=o?.surface==="ice"?0:Kn((Number(o?.slash)||0)*.85+(Number(o?.skid)||0)*.5+(Number(o?.washout)||0)*.35,0,1),p=Math.sign(o?.slipAngle||o?.edge||r.detail?.input?.carve||1),y=n.canvas.width/2+(l-c)*14*h;o?.surface!=="ice"&&GS(e,n.canvas,p*f,t,Number(o?.landingImpact)||0,Number(o?.speed)||16,y)}BS(e,n.canvas,u,d,Number(o?.speed)||0),WS(e,n.canvas,u,d),XS(e,n.canvas,u,d),KS(e,n.canvas,u,d,s.hazards),VS(e,n.canvas,s.crashFx),e.restore()})}du();Ho();mc();Ho();var Ki=(n,e=0)=>Number.isFinite(n)?n:e,Uu=()=>Object.freeze({active:null});function pm(n,e,t,i={}){let s=!!(e?.grounded??e?.air<=0),r=!!(t?.grounded??t?.air<=0),o=n?.active??null,a=null;if(s&&!r){let l=bu(Ki(t?.position?.downhill),Ki(t?.position?.across),6);o=l?{featureId:l.id,takeoffRotation:Ki(t?.boardRotation),peakAir:Ki(t?.air),maxRotation:0,grabTime:0}:null}if(o&&!r){let l=Math.max(0,Math.min(.1,Ki(t?.elapsed)-Ki(e?.elapsed)));o={...o,peakAir:Math.max(o.peakAir,Ki(t?.air)),maxRotation:Math.max(o.maxRotation,Math.abs(Ki(t?.boardRotation)-o.takeoffRotation)),grabTime:o.grabTime+(Ki(i.grab)>.5?l:0)}}if(o&&!s&&r){if(!t.crashed&&o.peakAir>=.45){let l=Math.floor((o.maxRotation+.32)/Math.PI),c=o.grabTime>=.12,h=Math.round(150+l*140+(c?80:0)+Math.min(100,o.peakAir*15));a=Object.freeze({featureId:o.featureId,label:["SIDE HIT",l?`${l*180}\xB0`:null,c?"GRAB":null].filter(Boolean).join(" \xB7 "),points:h})}o=null}return t?.crashed&&(o=null),Object.freeze({tracker:Object.freeze({active:o}),award:a})}var mm="slopestyle.bestDistance",gm="slopestyle.bestScore",_m=16,$S=44,Sm=1.25,jS=1.15,Hs=(n,e,t)=>Math.min(t,Math.max(e,n)),QS=n=>{let e=Number.isFinite(n?.velocity?.downhill)?n.velocity.downhill:Number(n?.speed)||0;return n?.crashed?Math.max(0,e):Math.max(Os(n?.position?.downhill).min,e)},eb=n=>Math.abs(n?.position?.across??0)>Je.halfWidth,xm=(n,e,t=0)=>n.map(i=>{let s=i.worldDownhill-e;if(i.variant!=="rolling-boulder")return{...i,z:s};let r=i.acrossSpeed*t;return{...i,x:i.x+r,z:s,roll:i.roll+r/i.radius}}),Bu=.25,tb=(n,e,t={})=>{if(n.passed||Math.abs(n.z)>Sm)return!1;let i=e.position.across-n.x,s=Math.abs(i),r=Number(e.air)||0;if(n.kind==="jump"){let o=n.radius??Je.halfWidth*.94;if(s>=o-Bu)return!1;let a=n.rootEnd&&i*n.rootEnd>o-ko.rootPlate.width;return r<(a?ko.rootPlate.clearance:ko.clearance)}if(n.kind==="duck"){let o=n.variant==="bird"?.86:.88,a=n.radius??Je.halfWidth*o;if(s>=a)return!1;if(n.stumpEnd){let l=i*n.stumpEnd;if(l>a-lc.stumpWidth||l<lc.restWidth-a)return!0}return(Number(t.crouch)||0)<.75}return n.variant==="rolling-boulder"?r<n.radius*1.85&&s<n.radius-Bu:r<(n.clearance??.35)&&s<(n.radius??1.05)-Bu},nb=(n,e)=>n+Math.random()*(e-n),ym=(n,e=0)=>{try{let t=localStorage.getItem(n),i=Number(t);return t!==null&&Number.isFinite(i)?Math.max(0,Math.floor(i)):e}catch{return e}},vm=(n,e)=>{try{localStorage.setItem(n,String(Math.floor(e)))}catch{}},ib=()=>{if(document.querySelector("[data-slopestyle-styles]"))return;let n=document.createElement("style");n.dataset.slopestyleStyles="true",n.textContent=`
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
    .high-score-guide { position: fixed; left: 50%; bottom: max(18px, env(safe-area-inset-bottom)); width: min(480px, 54vw); transform: translateX(-50%); color: #f7faf9; }
    .high-score-guide[hidden] { display: none; }
    .high-score-guide-label { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; text-shadow: 0 2px 8px #172b36; text-transform: uppercase; }
    .high-score-guide-track { position: relative; height: 4px; border-radius: 4px; background: rgba(247, 250, 249, 0.5); box-shadow: 0 1px 7px #172b36; }
    .high-score-guide-fill { display: block; width: var(--progress); height: 100%; border-radius: inherit; background: #fff0a4; }
    .high-score-guide-marker { position: absolute; top: 50%; right: 0; width: 4px; height: 18px; transform: translateY(-50%); border-radius: 2px; background: #fff0a4; box-shadow: 0 0 8px #fff0a4; }
    .high-score-guide.is-passed .high-score-guide-track { background: #fff0a4; box-shadow: 0 0 12px #fff0a4; }
    .high-score-celebration { position: fixed; inset: 0; overflow: hidden; }
    .high-score-banner { position: absolute; top: 24%; left: 0; right: 0; text-align: center; color: #fff0a4; font-size: clamp(2rem, 8vw, 5rem); font-weight: 800; text-shadow: 0 2px 12px #172b36; animation: high-score-flash 500ms ease-in-out 3; }
    .high-score-confetti { position: absolute; top: -16px; left: var(--left); width: 8px; height: 13px; background: var(--color); animation: confetti-fall var(--duration) var(--delay) ease-in both; }
    @keyframes high-score-flash { 50% { opacity: 0.5; } }
    @keyframes confetti-fall { to { transform: translate(var(--drift), 105vh) rotate(var(--spin)); } }
    @media (prefers-reduced-motion: reduce) {
      .high-score-banner { animation: none; }
      .high-score-confetti { display: none; }
    }
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
    @media (max-width: 560px) { #hud-root { inset: 12px 12px auto 12px; } .hud-card { min-width: 90px; padding: 8px 10px; } .high-score-guide { width: calc(100vw - 32px); } .overlay-panel { padding: 25px; } }
    @keyframes fallaway {
      0% { opacity: 1; transform: translateY(-8vh) scale(1); }
      100% { opacity: 0; transform: translateY(28vh) scale(0.34); }
    }
  `,document.head.append(n)},sb=()=>{let n,e,t,i=0,s=0,r=()=>(n||(n=new(window.AudioContext||window.webkitAudioContext)),n.state==="suspended"&&n.resume(),n),o=c=>{if(t)return t;let h=Math.floor(c.sampleRate*2);t=c.createBuffer(1,h,c.sampleRate);let u=t.getChannelData(0),d=19341;for(let f=0;f<h;f+=1)d=Math.imul(d,1664525)+1013904223|0,u[f]=d/2147483648*.5;return t},a=(c,h,u)=>{let d=r(),f=d.createBufferSource(),p=d.createBiquadFilter(),y=d.createGain();f.buffer=o(d),p.type="bandpass",p.frequency.value=h,p.Q.value=.5,y.gain.setValueAtTime(.001,d.currentTime),y.gain.linearRampToValueAtTime(u,d.currentTime+.012),y.gain.exponentialRampToValueAtTime(.001,d.currentTime+c),f.connect(p),p.connect(y),y.connect(d.destination),f.start(d.currentTime,0,c)},l=()=>{if(e)return;let c=r(),h=c.createBufferSource();h.buffer=o(c),h.loop=!0;let u=(d,f)=>{let p=c.createBiquadFilter();p.type=d,p.frequency.value=f;let y=c.createGain();return y.gain.value=0,h.connect(p),p.connect(y),y.connect(c.destination),{filter:p,gain:y}};e={source:h,snow:u("highpass",1600),skid:u("bandpass",900),wind:u("lowpass",420)},h.start()};return Object.freeze({startRide(){l(),i=0,s=0},stopRide(){if(!e)return;let c=r();if(e){for(let h of[e.snow,e.skid,e.wind])h.gain.gain.setTargetAtTime(1e-4,c.currentTime,.06);e.source.stop(c.currentTime+.2),e=void 0}},ride(c){if(!e)return;let h=r(),u=Hs(c.speed/$S,0,1),d=c.air<=0&&!c.crashed?1:0,f={groomed:.034,powder:.014,ice:.048,slush:.036,chop:.042,rail:.02}[c.surface]??.03,p=c.surface==="ice"?2500:c.surface==="powder"?900:1600;e.snow.filter.frequency.setTargetAtTime(p+u*700,h.currentTime,.07),e.snow.gain.gain.setTargetAtTime(d*f*(.25+u*.75),h.currentTime,.04),e.skid.gain.gain.setTargetAtTime(d*(c.skid*.046+c.slash*.016),h.currentTime,.035),e.wind.gain.gain.setTargetAtTime((.005+u*u*.045)*(1-(c.crouchAmount??0)*.2),h.currentTime,.09),c.slash>.42&&i<=.42&&a(.14,750,.02),c.landingImpact>1.5&&s<=1.5&&a(.2,280,.04),i=c.slash,s=c.landingImpact},jump(){a(.09,1200,.015)},crash(){a(.32,220,.09)},fall(){a(.3,330,.035)}})},rb=n=>{n.innerHTML=`
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
    <div class="high-score-guide" data-high-score-guide hidden>
      <div class="high-score-guide-label"><span data-high-score-label>High score</span><span data-high-score></span></div>
      <div class="high-score-guide-track" aria-hidden="true">
        <span class="high-score-guide-fill"></span><span class="high-score-guide-marker"></span>
      </div>
    </div>
    <div class="high-score-celebration" data-celebration></div>
  `;let e=n.querySelector("[data-high-score-guide]"),t=n.querySelector("[data-high-score-label]"),i=n.querySelector("[data-high-score]"),s=n.querySelector("[data-celebration]"),r;return Object.freeze({celebrateHighScore(){let o=["#fff0a4","#ff9e80","#a4e8e0","#c3b5ff"];s.innerHTML=`<div class="high-score-banner" role="status">HIGH SCORE</div>
        ${Array.from({length:32},(a,l)=>{let c=l*37%100,h=l*53%181-90,u=l%2?540:-420;return`<span aria-hidden="true" class="high-score-confetti" style="--left:${c}%;--drift:${h}px;--spin:${u}deg;--color:${o[l%o.length]};--duration:${1.5+l%7*.1}s;--delay:${l%9*.05}s"></span>`}).join("")}`,window.clearTimeout(r),r=window.setTimeout(()=>{s.replaceChildren()},2600)},update({distance:o,phase:a,runHighScore:l,score:c,speed:h,trickNotice:u,trickNoticeTimer:d}){n.querySelector("[data-distance]").textContent=`${Math.floor(o)} m`,n.querySelector("[data-speed]").innerHTML=`${Math.round(h*3.6)}<span class="hud-unit">km/h</span>`,n.querySelector("[data-score]").textContent=String(Math.floor(c)),e.hidden=a!=="running"||l===null;let f=l!==null&&c>l,p=String(l??0);t.textContent=f?"New high score":"High score",i.textContent!==p&&(i.textContent=p),e.style.setProperty("--progress",`${l>0?Math.min(100,c/l*100):f?100:0}%`),e.classList.toggle("is-passed",f);let y=n.querySelector("[data-trick]");if(y.classList.toggle("is-hidden",!u||d<=0),u&&d>0){y.textContent=u.label;let m=document.createElement("strong");m.textContent=`+${u.points}`,y.append(m)}}})},ob=Object.freeze([-.81,-.54,-.27,0,.27,.54,.81]),ab=7,lb=16,cb=(n,e,t)=>{let i=n.map(({x:r})=>1/(1+((r-e)/ab)**2)),s=t()*i.reduce((r,o)=>r+o,0);for(let r=0;r<n.length;r+=1)if(s-=i[r],s<=0)return n[r];return n.at(-1)},hb=(n,e,t,i=0,s=Math.random)=>{let r=Je.halfWidth,o=([v,S])=>v+s()*(S-v),a=e+Je.spawnDistance,l={id:n.nextHazardId,passed:!1,worldDownhill:a,z:Je.spawnDistance};if(n.nextHazardId===n.nextBoulderId){n.nextBoulderId+=5+Math.floor(s()*3);let v=s()<.5?1:-1,S=Hs(Number(i)||0,-r+3,r-3)+v*o([.15,1.5]),M=Hs(S-v*lb,-r*.86,r*.86);return{...l,kind:"steer",variant:"rolling-boulder",radius:jS,acrossSpeed:(S-M)*t/Je.spawnDistance,roll:0,x:M}}let c=ks(Math.max(0,Math.round((a-qi)/Yi))),h=a>=c.start-4&&a<=c.lip+42;if(!h&&n.nextHazardId>=n.nextLongLogId){let v=n.nextLongLogKind;return n.nextLongLogId=n.nextHazardId+8+Math.floor(s()*5),n.nextLongLogKind=v==="jump"?"duck":"jump",{...l,kind:v,variant:"full-width-log",radius:r+.75,x:0}}let u=s(),d="steer";n.dodged>4&&u>.82?d="duck":n.dodged>2&&u>.64&&(d="jump");let f=d==="jump"?{variant:"fallen-tree",radius:o(ko.halfLength),rootEnd:s()<.5?-1:1}:d==="duck"?{variant:"snapped-tree",radius:o(lc.halfLength),stumpEnd:s()<.5?-1:1}:s()>.38?{variant:"tree-island",radius:o(hu.radius),clearance:hu.clearance}:{variant:"rock-garden",radius:o(uu.radius),clearance:uu.clearance},p=r-f.radius-1.5,y=h?0:1.2,m=ob.map((v,S)=>({lane:S,x:Hs(v*r+(s()*2-1)*y,-p,p)})).filter(({lane:v,x:S})=>v!==n.lastLane&&(!h||Math.abs(S-c.centerX)>=f.radius+3.9)),g=cb(m,Number(i)||0,s);return n.lastLane=g.lane,{...l,kind:d,...f,x:g.x}},ub=n=>nb(Hs(40-n*.25,28,40),Hs(58-n*.35,37,55)),Mm=(n,e)=>({best:n,bestScore:e,runHighScore:e,celebratedHighScore:!1,crashFx:0,distance:0,score:0,trickPoints:0,trickNotice:null,trickNoticeTimer:0,dodged:0,fallTimer:0,finalDistance:0,hazards:[],lastLane:-1,lastRiderDownhill:0,nextBoulderId:4+Math.floor(Math.random()*3),nextHazardId:1,nextLongLogId:6+Math.floor(Math.random()*3),nextLongLogKind:Math.random()<.5?"jump":"duck",phase:"idle",spawnLeft:12,speed:0});async function zu(n){ib();let e=sb(),t=rb(n.hudRoot),i=Mm(ym(mm),ym(gm,null)),s,r=0,o,a=Uu(),l=()=>{let S=n.canvas.getBoundingClientRect(),M=Math.min(window.devicePixelRatio||1,2);n.canvas.width=Math.max(1,Math.floor(S.width*M)),n.canvas.height=Math.max(1,Math.floor(S.height*M))},c=()=>{n.events.dispatchEvent(new CustomEvent("course:update",{detail:Object.freeze({crashFx:i.crashFx,distance:i.distance,hazards:Object.freeze(i.hazards.map(S=>Object.freeze({...S}))),phase:i.phase})}))},h=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel">
        <p class="overlay-kicker">An endless descent</p>
        <h1>Slopestyle</h1>
        <p>Read the terrain, set an edge, and find a line through the mountain. Cut toward the flagged side hits, grab or spin, and land clean for trick points. The pace builds as you descend.</p>
        <button class="primary-action" type="button" data-start>Drop in</button>
        <p class="run-note">A/D carve \xB7 \u2190/\u2192 flick or skid \xB7 \u2193 crouch or grab \xB7 W/S shift weight \xB7 Space or \u2191 jump<br>Best run: ${Math.floor(i.best)} m \xB7 Best score: ${Math.floor(i.bestScore)}</p>
      </div>
    `,n.overlayRoot.querySelector("[data-start]").addEventListener("click",f,{once:!0})},u=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel">
        <p class="overlay-kicker">Run ended</p>
        <h1>Back to the top</h1>
        <p class="run-stat">${Math.floor(i.score)} points</p>
        <p>${Math.floor(i.finalDistance)} m ridden \xB7 Best run: ${Math.floor(i.best)} m \xB7 Best score: ${Math.floor(i.bestScore)}</p>
        <button class="primary-action" type="button" data-restart>Ride again</button>
      </div>
    `,n.overlayRoot.querySelector("[data-restart]").addEventListener("click",f,{once:!0})},d=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel fall-callout">
        <h1>Off the mountain</h1>
      </div>
    `},f=()=>{i={...Mm(i.best,i.bestScore),phase:"running",spawnLeft:4,speed:_m},s=void 0,r=0,o=void 0,a=Uu(),n.overlayRoot.innerHTML="",n.events.dispatchEvent(new CustomEvent("rider:reset",{detail:{speed:_m}})),c(),e.startRide()},p=()=>{i.score<=(i.bestScore??0)||(i.bestScore=i.score,!i.celebratedHighScore&&(i.celebratedHighScore=!0,t.celebrateHighScore()))},y=(S,M)=>{if(i.finalDistance=i.distance,i.crashFx=.8,i.best=Math.max(i.best,Math.floor(i.distance)),p(),i.bestScore??(i.bestScore=i.score),vm(mm,i.best),vm(gm,i.bestScore),e.stopRide(),S==="cliff"){n.events.dispatchEvent(new CustomEvent("rider:impact",{detail:M})),i.phase="falling",i.fallTimer=1.35,e.fall(),d();return}i.phase="crashed",S==="hazard"&&n.events.dispatchEvent(new CustomEvent("rider:impact",{detail:M})),e.crash(),u()},m=()=>{i.dodged+=1},g=(S,M)=>{let{input:T,state:x}=S,_=QS(x),w=Number.isFinite(x.position.downhill)?x.position.downhill:i.lastRiderDownhill,R=Math.max(0,w-i.lastRiderDownhill);if(i.lastRiderDownhill=w,e.ride(x),eb(x)){y("cliff",{kind:"course-edge",x:x.position.across});return}if(T.jump>0&&r<=0&&e.jump(),r=T.jump,i.speed=x.speed,i.distance+=Math.max(R,_*M),i.score=Math.floor(i.distance)+i.trickPoints,i.trickNoticeTimer=Math.max(0,i.trickNoticeTimer-M),i.spawnLeft-=R,i.hazards=xm(i.hazards,w,M),i.spawnLeft<=0){let I=hb(i,w,_,x.position.across);I&&(i.hazards.push(I),i.nextHazardId+=1),i.spawnLeft=ub(i.speed)}for(let I of i.hazards){if(tb(I,x,T)){y("hazard",I);return}!I.passed&&I.z<-Sm&&(I.passed=!0,m())}i.hazards=i.hazards.filter(I=>I.z>-5);let C=pm(a,o??x,x,S.pose);a=C.tracker,o=x,C.award&&(i.trickPoints+=C.award.points,i.score=Math.floor(i.distance)+i.trickPoints,i.trickNotice=C.award,i.trickNoticeTimer=1.9),i.bestScore!==null&&p()},v=S=>{i.fallTimer-=S,i.fallTimer<=0&&(i.phase="crashed",e.crash(),u())};n.events.addEventListener("rider:update",S=>{let M=performance.now(),T=s===void 0?0:Hs((M-s)/1e3,0,.05);s=M,i.crashFx=Math.max(0,i.crashFx-T),i.phase==="running"?g(S.detail,T):i.phase==="falling"&&v(T),i.phase!=="running"&&(i.hazards=xm(i.hazards,Number(S.detail?.state?.position?.downhill)||0)),t.update(i),c()}),window.addEventListener("resize",l),l(),t.update(i),c(),h()}gu();Uo();iu();var db=(n,e,t)=>Math.min(t,Math.max(e,n)),Vo=n=>Math.sin(Math.PI*db(n,0,1))**2;function ku({airborne:n=0,airOpen:e=0,airStyle:t=0,collapse:i=0,crouch:s=.3,drift:r=0,elapsed:o=0,float:a=0,lead:l,lift:c=0,speed:h=0,stumble:u=0,sway:d=0,swing:f=0,switchRiding:p=!1,tilt:y=0,trail:m}={}){let g={...ms[0]},v={...ms[1]},S=Math.max(0,s-.3),M=Math.max(0,y),T=Math.max(0,-y),x=S*(1-n*.7);for(let _ of[g,v])_.x+=x*.16+T*.22-d*.3,_.y+=x*.18+n*.08+e*.06+c*.08+i*.3,_.out+=x*.07+n*.07+e*.1-h*.03+i*.3;g.y+=a,v.y+=a*.85,v.x+=M*.12-h*.06,v.y-=M*.2+T*.05,v.out+=M*.1+T*.12,g.x+=n*.1,g.y+=M*.12+T*.08,v.x-=n*.08,g.out+=M*.08,g.x+=t*.12,g.y-=t*.06,v.x-=t*.12,v.y+=t*.12,v.out+=t*.08,g.x+=r*.012,g.y+=r*.02,v.y-=r*.016,g.x-=u*.05,g.y+=u*(.3+Math.sin(o*13)*.1),g.out+=u*.22,v.x-=u*.12,v.y+=u*(.24+Math.sin(o*13+2.1)*.1),v.out+=u*.26;for(let[_,w]of[[g,l],[v,m]])w&&(_.x+=w.x??0,_.y+=w.y??0,_.out+=w.out??0);if(f){let _=Math.cos(f),w=Math.sin(f);for(let[R,C]of p?[[g,1],[v,-1]]:[[g,-1],[v,1]]){let I=C*(.258+R.out),P=R.x*_-I*w;R.out=C*(R.x*w+I*_)-.258,R.x=P}}return Object.freeze(p?[Object.freeze(v),Object.freeze(g)]:[Object.freeze(g),Object.freeze(v)])}var Hu=Object.freeze({shimmy:Object.freeze({seconds:.9,at(n){let e=Math.sin(2*Math.PI*n)*Math.sin(Math.PI*n);return{styleYaw:e*.22,styleRoll:e*.06,crouch:Vo(n)*.03}}}),pump:Object.freeze({seconds:.85,at(n){let e=Vo((n-.5)/.5);return{crouch:Vo(n/.62)*.13-e*.05,stylePitch:e*.04}}}),press:Object.freeze({seconds:.95,at(n){let e=Vo(n);return{stylePitch:e*.09,foreAft:-e*.5,spineSide:e*.09,crouch:e*.05}}}),reach:Object.freeze({seconds:1.2,at(n){let e=Vo(n);return{crouch:e*.1,spineSide:e*.1,headLook:e*.12,trail:{x:-e*.1,y:-e*.17,out:e*.1}}}})}),bm=Object.freeze(["shimmy","pump","reach","press","pump","shimmy","press","reach"]),wm=n=>bm[n%bm.length],Gu=n=>{let e=Math.sin(n*127.1+311.7)*43758.5453;return 2.2+(e-Math.floor(e))*2.1};var Oe=(n,e,t)=>Math.min(t,Math.max(e,n)),Qe=(n,e=0)=>Number.isFinite(n)?n:e,Em=n=>Math.atan2(Math.sin(n),Math.cos(n));function fb(n,e={}){let t=Math.abs(n.edge),i=Oe((Qe(n.speed,8)-8)/22,0,1),s=Math.sign(n.edge||n.lean||1),r=Qe(n.elapsed),o=n.surface!=="rail"&&t<.12&&(n.air??0)<=0?(Math.sin(r*1.8+.15)*.05+Math.sin(r*.77+.8)*.02)*(1-t/.12):0,a=(Math.sin(r*1.3)+Math.sin(r*.47+.8)*.35)*.022*(1-i*.65)*(1-t),l=Oe((n.air??0)/.25,0,1),c=Oe((n.verticalVelocity??0)/7.8,-1,1),h=l*Math.max(0,c),u=l*(1-Math.abs(c)),d=c<0?l*Oe((.8-Qe(n.air))/.8,0,1):0,f=Oe(n.compression??0,0,1),p=Oe(n.gForce??0,0,1.6),y=Oe(n.skid??0,0,1),m=Oe(n.slash??0,0,1),g=Oe(n.bumpImpact??0,0,1),v=Oe(n.chatter??0,0,1),S=Oe((Qe(n.impactMeter)-70)/30,0,1),M=Math.sin(r*11.5)*S*.055,T=Oe(Number.isFinite(e.crouch)?e.crouch:0,0,1),x=Oe(Number.isFinite(e.stretch)?e.stretch:0,0,1),_=Number.isFinite(n.terrainHeight)?n.terrainHeight:0,w=n.elapsed*n.speed*1.7,R=Oe(n.boardLightness??0,0,1),C=m*(1-R),I=Oe(n.crouchAmount??0,0,1),P=Oe(Qe(n.lean,n.edge)*(.2+i*.58)*(1-l*.6)+s*p*.055+a+M,-.8,.8),B=Em(Qe(n.boardRotation,Qe(n.boardYaw,n.heading))-Qe(n.torsoRotation,Qe(n.torsoYaw,n.heading)))+l*Qe(n.tweak)*1.35,L=1+Math.sin(r*17.3+.4)*.08*m,G=n.air>0?Oe(1-Qe(n.airtime)/.18,0,1):0,Z=(n.edge??0)*(n.stance==="goofy"?-1:1)>=0,H=l?0:_*1.35+Math.sin(w)*v*.045-R*.075,se=l?0:(Number.isFinite(n.bodyHeave)?n.bodyHeave:_)*1.35-R*.035,X=n.crashed&&Qe(n.crashTimer)<=0?2:Qe(n.crashTimer),Y=n.crashed?Oe(2-X,0,2):0,le=n.crashed?Oe(Y/.12,0,1)*(1-Oe((Y-1.15)/.85,0,1)):0,re=n.crashed?Oe((Y-.55)/.4,0,1)*(1-Oe((Y-1.35)/.5,0,1)):0,He=Me=>{let Xe=Oe(Me,0,1);return Xe*Xe*(3-2*Xe)},j=n.crashed?Y<.24?He(Y/.24):Y<1.05?1:Y<1.45?1-He((Y-1.05)/.4)*.5:(1-He((Y-1.45)/.5))*.5:0,de=n.switchRiding?-1:1,Te=Math.sign(Qe(n.crashSpin))||1,K=n.crashed?n.crashReason==="impact-overload"?"sit":n.crashReason==="hazard"||Te===de?"front":"back":"",U=Qe(n.heading),q=Qe(n.boardYaw,U)-Te*2.3*Y,$=U+(n.switchRiding?Math.PI:0),Q=q+Em($-q)*He((Y-1.3)/.6),ce=Y<.4?1.1+Y/.4*1.1:Y<.75?2.2:Y<1.3?2.2-(Y-.75)/.55*1.3:.9*(1-Oe((Y-1.3)/.7,0,1)),xe=Oe(.26+i*.02+t*.2+I*.52+T*.22+l*.26+u*.16-d*.2-h*.1+g*.14+p*.08+C*.1-y*.07,0,1),he=Math.sin(r*1.09)+Math.sin(r*.73+.8)*.4,Ie=Oe(le+Qe(n.washout)*.2+Oe(Qe(n.stumble)/uc,0,1)*.6+Math.max(0,Qe(n.landingImpact)-3)*.1+Qe(n.bumpImpact)*.05+S*.28,0,1);return Object.freeze({arms:ku({airborne:l,airOpen:d,collapse:le,crouch:xe,drift:he,elapsed:r,lift:h,speed:i,stumble:Ie,switchRiding:!!n.switchRiding,tilt:P*de}),boardRoll:Oe(Qe(n.edge)*(.26+i*.79)*(n.surface==="rail"?.1:1-l*.7)+o+Qe(n.terrainRoll)*.18+Math.sin(w*3.1)*v*.012+M*.5,-1.08,1.08),bodyTilt:P,boardSwing:B*L,boardFlex:Oe(Math.abs(Qe(n.pressAmount))*.55+p*.22+Qe(n.popCharge)*.35+f*.45+g*.16,0,1),snowResponse:Oe(f*.55+g*.5+v*.12,0,1),boardYaw:n.crashed?Q:n.boardYaw??n.heading,bodyYaw:n.torsoYaw??n.heading,bodySpin:(n.torsoRotation??n.torsoYaw??n.heading)-(n.heading??0)-(n.switchRiding?Math.PI:0),boardBodyRotation:(n.boardRotation??n.boardYaw??n.heading)-(n.torsoRotation??n.torsoYaw??n.heading),bob:se,boardBob:H,airborne:l,airOpen:d,flickBite:C,boardPitch:l*c*.18+G*.34+(n.terrainPitch??0)*.1+(n.noseFloat??0)*.12+(n.pressAmount??0)*.15,boardSlip:Oe(n.slipAngle??0,-.75,.75),boardTweak:Oe(n.tweak??0,-1,1)*1.35,butter:Oe(n.butter??0,0,1),press:Oe((n.pressAmount??0)+(n.butter??0)*.7,-1,1),crouch:xe,fall:j,fallHeading:U+(n.crashed&&n.crashReason!=="hazard"?Te*.7:0),fallKind:K,fallRotation:n.crashed?(Math.sign(n.crashSpin)||1)*ce:0,crashCollapse:le,crashSit:re,crashRecovery:n.crashed?Oe((1.25-X)/1.25,0,1):0,foreAft:Oe(((n.frontFootPressure??.5)-.5)*2-(n.noseFloat??0)*.24,-1,1),handDrag:Oe((Math.abs(n.lean??0)-.62)*1.4+T*.5+(n.washout??0)*.15,0,1),grab:l*T,jumpStretch:Oe(h+G*.58+d*.33+l*x*.32,0,1),lean:Oe(P/.78,-1.04,1.04),legOffset:Oe(Qe(n.legOffset),-xn,Yn),spray:l?0:Oe((n.crashed?1:0)+m*.92+y*.24+t*.025+g*(n.surface==="powder"?.24:.08)+Oe((n.landingImpact??0)/9,0,.35),0,1),scarfFlutter:Oe((n.speed??0)/34,0,1)*Math.sin((Number(n.elapsed)||0)*(5+(n.speed??0)*.18)),stance:n.stance??"regular",switchRiding:!!n.switchRiding,toeSide:Z,headLook:Oe(Qe(e.carve)*.7+Qe(n.turnRate)*.08+Math.sin(r*.43+Math.sin(r*.19))*.05*(1-t),-1,1),handDrift:he,clothFlutter:Oe(Qe(n.speed)/34,0,1)*(Math.sin(r*Qe(n.speed)*1.7)*.6+Math.sin(r*Qe(n.speed)*2.63+.5)*.25),breath:Math.sin(r*1.67)*.5,hipTwist:Oe(B*.68,-1,1),shoulderTwist:Oe(-B*.16-Qe(n.edge)*.08,-.45,.45),armLag:0,clothLag:0,stumble:Ie,airStyle:0,flourish:"",spineHinge:0,spineSide:0,spineTwist:0,stylePitch:0,styleRoll:0,styleYaw:0,upperBodyTwist:n.edge*-.22-Math.sign(n.edge)*y*.08+Oe(e.steer??0,-1,1)*.025})}var pb=()=>({value:0,velocity:0}),Pn=(n,e,t,i,s=.74)=>{let r=Math.max(1,Math.ceil(i*120)),o=i/r,a=t*Math.PI*2;for(let l=0;l<r;l+=1){let c=(e-n.value)*a**2-2*s*a*n.velocity;n.velocity+=c*o,n.value+=n.velocity*o}return n.value},mb=(n,e,t,i,s)=>{let r=Math.max(1,Math.ceil(i*120)),o=i/r,a=t*Math.PI*2;for(let l=0;l<r;l+=1){let c=-e-n.value*a**2-2*s*a*n.velocity;n.velocity+=c*o,n.value+=n.velocity*o}return n.value},gb=["airStyle","arm","cloth","crouch","float","grab","head","hinge","hips","lean","shoulders","side","stumble","sway","swing","twist"],Tm=()=>Object.fromEntries(gb.map(n=>[n,pb()])),Am=()=>({active:"",age:0,calm:0,count:0,ease:0,gap:Gu(0),jumps:0,rising:void 0,wasAirborne:!1});function Rm(){let n=Tm(),e=Am(),t=!1,i=0,s=0,r=1/0,o=0;return Object.freeze({reset(){n=Tm(),e=Am(),t=!1,i=0,s=0,r=1/0,o=0},step(a,l={},c=0){let h=fb(a,l),u=Oe(Qe(c),0,.1),d=Oe(Qe(l.steer),-1,1),f=Oe(Qe(l.carve),-1,1),p=Oe(Qe(l.crouch),0,1),y=Qe(a.elapsed),m=Qe(a.speed),g=Oe((m-8)/22,0,1),v=Math.abs(d)>.05&&h.butter<.5?Math.sign(d):0;v!==0&&v!==i?(s=0,r=1/0):v!==0&&(s+=u),v===0&&i!==0&&(r=0,o=i),v===0&&r<.3&&(r+=u),i=v;let S=h.boardSwing;v!==0&&s<.05&&(S*=.45+s/.05*.55),v===0&&r<.3&&(S-=o*.12*Math.sin(Math.PI*r/.3)),t||(n.crouch.value=h.crouch,n.lean.value=h.bodyTilt,n.sway.value=h.bodyTilt,t=!0);let M=Qe(a.air)<.3&&!a.crashed&&m>6&&Math.abs(d)<.1&&Math.abs(f)<.15&&p<.1&&Math.abs(Qe(a.edge))<.22&&Qe(a.slash)<.1&&h.stumble<.25;e.ease+=(Number(M)-e.ease)*(1-Math.exp(-u*(M?2.5:9)));let T=e.ease*(1-g*.45);e.calm=M?e.calm+u:0,!e.active&&e.calm>=e.gap&&h.airborne<=0&&(e.active=wm(e.count),e.age=0);let x={};if(e.active){e.age+=u;let Me=e.age/Hu[e.active].seconds;Me<1?x=Hu[e.active].at(Me):(e.active="",e.calm=0,e.count+=1,e.gap=Gu(e.count))}let _=Me=>Qe(x[Me])*T;h.airborne>0&&!e.wasAirborne&&(e.jumps+=1),e.wasAirborne=h.airborne>0;let R=Qe(a.verticalVelocity)<0?Oe(1-(Qe(a.air)-.25)/.7,0,1):0,C=(1-Oe(Math.abs(Qe(a.tweak))*3,0,1))*(1-p)*(1-Math.abs(d))*(1-Oe(Math.abs(Qe(a.spinVelocity))/2.5,0,1)),I=Oe(Pn(n.airStyle,a.crashed?0:h.airborne*C*(1-R)*Oe((Qe(a.airtime)-.1)/.25,0,1),3.2,u,.85),0,1),P=e.jumps%2===0?-1:1,B=_("styleYaw")+P*I*.24,L=_("styleRoll")-P*I*.07,G=_("stylePitch")-I*.05,Z=Math.sin(y*1.8+.15)**2*.03*e.ease,H=Pn(n.head,h.headLook+_("headLook"),5.5,u),se=Pn(n.hips,(S+B)*.68,4,u,.5),X=Pn(n.shoulders,h.shoulderTwist+se*.12,1.5,u),Y=Pn(n.arm,-S*.23-X*.4,1.7,u),le=Pn(n.cloth,-S*.9-se*.22,1.8,u,.68),re=Pn(n.lean,h.bodyTilt,3,u),He=Oe(h.crouch+Z+_("crouch")+I*.07,0,1),j=Oe(Pn(n.crouch,He,He>n.crouch.value?6.5:1.9,u,.7),0,1),de=Pn(n.stumble,h.stumble,2.4,u),Te=Pn(n.grab,h.grab,h.grab>n.grab.value?5.5:4,u,.86),K=Pn(n.twist,Oe(f*.2-S*.18-P*I*.2,-.6,.6),2.4,u,.8),U=Pn(n.hinge,Oe(Qe(a.compression),0,1)*.2+Oe(Qe(a.bumpImpact),0,1)*.12+h.flickBite*.1+g*.05+h.breath*.012*e.ease+_("spineHinge"),3.4,u,.7),q=Pn(n.side,Math.max(0,re)*.12+Math.min(0,re)*.06+h.press*.14+P*I*.08+_("spineSide"),2.6,u,.8),$=Qe(a.worldVerticalVelocity,Qe(a.verticalVelocity))-n.crouch.velocity*.8,Q=u>0&&e.rising!==void 0?Oe(($-e.rising)/u,-35,35):0;u>0&&(e.rising=$);let ce=Oe(mb(n.float,Q,2,u,.45),-.28,.28),xe=re-Pn(n.sway,re,1.9,u,.5),he=Pn(n.swing,-(S+B)*.5,3,u,.42),Ie=ku({airborne:h.airborne,airOpen:h.airOpen,airStyle:I,collapse:h.crashCollapse,crouch:j,drift:h.handDrift*e.ease,elapsed:y,float:ce,lead:x.lead&&{x:x.lead.x*T,y:x.lead.y*T,out:x.lead.out*T},lift:h.jumpStretch,speed:g,stumble:Oe(de,0,1),sway:xe,swing:he,switchRiding:!!a.switchRiding,tilt:re*(a.switchRiding?-1:1),trail:x.trail&&{x:x.trail.x*T,y:x.trail.y*T,out:x.trail.out*T}});return Object.freeze({...h,airStyle:I,armLag:Y,arms:Ie,bodyTilt:re,boardSwing:S,clothLag:le,crouch:j,flourish:T>.5?e.active:"",foreAft:Oe(h.foreAft+_("foreAft"),-1,1),grab:Oe(Te,0,1),headLook:H,hipTwist:se,lean:Oe(re/.78,-1.04,1.04),shoulderTwist:X,spineHinge:U,spineSide:q,spineTwist:K,stumble:de,stylePitch:G,styleRoll:L,styleYaw:B,upperBodyTwist:X})}})}Uo();var _b=1/20,xb=4,yb=8,vb=6.2,Mb=2.3,Sb=1.3,bb=2.55,wb=3.8,Eb=1,Tb=.25,Ab=15,Rb=20,Cb=3,Ib=5.8,Pb=3.7,Lb=.35,Gs=(n,e,t)=>Math.min(t,Math.max(e,n)),Vt=(n,e=0)=>Number.isFinite(n)?n:e,Cm=(n,e=0,t=1,i=0)=>Object.freeze({dip:i,position:Object.freeze(n),roll:e,zoom:t});function Vu(n={}){let e=n.position??{};return Cm({across:Vt(e.across),downhill:Vt(e.downhill)},Vt(n.roll),Vt(n.zoom,1),Vt(n.dip))}function Im(n,e,t=0,i=void 0){let s=Gs(Vt(t),0,_b),r=1-Math.exp(-xb*s),o=Vt(e.heading),a=Vt(e.position?.across)+Math.sin(o)*2,l=Vt(e.position?.downhill)+yb,c=Cm({across:n.position.across+(a-n.position.across)*r,downhill:n.position.downhill+(l+Gs(Vt(e.air),0,2)*1.5-n.position.downhill)*r},Vt(n.roll)+(Gs(Vt(e.lean)*.04,-.045,.045)-Vt(n.roll))*(1-Math.exp(-2.8*s)),Vt(n.zoom,1)+(1-Gs(Vt(e.speed)/34,0,1)*.14-Vt(n.zoom,1))*(1-Math.exp(-2*s)),Vt(n.dip)+(Gs(Vt(e.landingImpact)/9,0,1)-Vt(n.dip))*(1-Math.exp(-8*s)));if(typeof i?.height!="function")return c;let h=Vt(e.position?.across),u=Vt(e.position?.downhill),d=(I,P)=>i.height(I,P),f=Vi(d,h,u),p=Gs(Vt(e.air)/2,0,1),y=c.position.across-Sb,m=u-vb-p*Mb,g=h+Cb+Math.sin(o)*Ib,v=u+Ab+p*Rb,S=Vt(e.worldHeight,f+Vt(e.air)),M=Math.max(Vi(d,y,m)+bb,S+p*wb)-f,T=Vi(d,g,v)+Pb-f,x=1-Math.exp(-s/Lb),_=Number.isFinite(n.rise)?n.rise+(M-n.rise)*x:M,w=Number.isFinite(n.lookRise)?n.lookRise+(T-n.lookRise)*x:T,R=Math.max(f+_-Gs(c.dip,0,1)*Tb,i.height(y,m)+Eb),C=f+w;return Object.freeze({...c,height:R,lookHeight:C,lookRise:w,rig:Object.freeze({position:Object.freeze({x:y,y:R,z:-m}),target:Object.freeze({x:g,y:C,z:-v})}),rise:_})}var Pm=new Set(["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","KeyA","KeyD","KeyS","KeyW","Space"]),Nb=new Set(["ArrowUp","Space"]);function Lm(n=window){let e=new Set,t=!1,i=o=>{Pm.has(o.code)&&(o.preventDefault(),Nb.has(o.code)&&!e.has(o.code)&&(t=!0),e.add(o.code))},s=o=>{Pm.has(o.code)&&(o.preventDefault(),e.delete(o.code))},r=()=>{t=!1,e.clear()};return n.addEventListener("keydown",i),n.addEventListener("keyup",s),n.addEventListener("blur",r),Object.freeze({destroy(){t=!1,e.clear(),n.removeEventListener("keydown",i),n.removeEventListener("keyup",s),n.removeEventListener("blur",r)},read(){let o=e.has("ArrowLeft"),a=e.has("ArrowRight"),l=e.has("KeyA"),c=e.has("KeyD"),h=e.has("ArrowDown"),u=e.has("KeyW"),d=e.has("KeyS"),f=e.has("ArrowUp"),p=t;return t=!1,Object.freeze({carve:Number(c)-Number(l),crouch:Number(h),jump:Number(p),press:Number(d)-Number(u),steer:Number(a)-Number(o),stretch:Number(f)})}})}mc();var Bt=(n,e,t)=>Math.min(t,Math.max(e,n)),Lt=(n,e=0)=>Number.isFinite(n)?n:e,te=(n,e)=>Object.freeze({x:n,y:e}),ct=(n,e,t)=>Object.freeze({part:n,points:Object.freeze(t),tone:e}),Ri=(n,e,t,i,s)=>{let r=Math.cos(s),o=Math.sin(s);return[[-t/2,-i/2],[t/2,-i/2],[t/2,i/2],[-t/2,i/2]].map(([a,l])=>te(n+a*r-l*o,e+a*o+l*r))},Nm=(n,e,t,i)=>[te(n.x-i,n.y),te(e.x-i,e.y),te(t.x-i,t.y),te(t.x+i,t.y),te(e.x+i,e.y),te(n.x+i,n.y)],Dm=(n,e,t)=>[te(n.x-10,n.y),te(n.x-12,n.y-6),te(e.x-15,e.y+5),te(e.x-14,e.y-6),te(t.x-12,t.y-4),te(t.x+12,t.y-4),te(e.x+14,e.y-6),te(e.x+15,e.y+5),te(n.x+12,n.y-6),te(n.x+10,n.y)],Fm=(n,e,t,i)=>[te(n.x-t,n.y-2),te(n.x+t,n.y-2),te(e.x+i,e.y+2),te(e.x-i,e.y+2)],Om=(n,e,t)=>te(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t),Db=(n,e,t)=>{let i=n.x-e.x,s=n.y-e.y,r=Math.cos(t),o=Math.sin(t);return te(e.x+i*r-s*o,e.y+i*o+s*r)},Um=(n,e,t,i)=>{let s=e.x-n.x,r=e.y-n.y,o=Math.max(.001,Math.hypot(s,r)),a=Math.min(34,o),l=Math.sqrt(Math.max(0,18**2-(a/2)**2))*(.7+t*.13)*i;return te((n.x+e.x)/2-r/o*l,(n.y+e.y)/2+s/o*l)};function Bm(n={}){let e=Bt(Lt(n.crouch),0,1),t=Bt(Lt(n.airborne),0,1),i=Bt(Lt(n.foreAft),-1,1),s=Bt(Lt(n.jumpStretch),0,1),r=Bt(Lt(n.lean),-1,1),o=n.toeSide!==!1,a=Bt(Lt(n.upperBodyTwist),-1,1),l=Bt(Lt(n.boardRoll),-1.08,1.08),c=Bt(Lt(n.boardSwing),-1.8,1.8),h=Bt(Lt(n.bodyTilt),-.8,.8),u=Bt(Lt(n.hipTwist),-1.2,1.2),d=Bt(Lt(n.shoulderTwist,a),-.7,.7),f=Bt(Lt(n.headLook),-1,1),p=Bt(Lt(n.armLag),-1,1),y=Bt(Lt(n.clothLag),-1.5,1.5),m=Bt(Lt(n.clothFlutter),-1,1),g=Bt(Lt(n.handDrift),-1.5,1.5),v=Bt(Lt(n.breath),-1,1),S=Bt(Lt(n.stumble),0,1),M=Bt(Lt(n.crashCollapse),0,1),T=Bt(Lt(n.crashSit),0,1),x=Bt(Lt(n.boardFlex),0,1),_=Bt(Lt(n.boardPitch),-.6,.6),w=Bt(Lt(n.butter),0,1),R=Bt(Lt(n.press),-1,1),C=Math.max(0,R)*18,I=Math.max(0,-R)*18,P=Bt(Lt(n.handDrag),0,1),B=Bt(Lt(n.grab),0,1),L=Bt(Lt(n.scarfFlutter),-1,1),G=Lt(n.bob)*20,Z=Lt(n.boardBob,Lt(n.bob))*20,H=Math.sign(l)||1,se=H*13,X=Math.cos(Math.abs(l)),Y=t>.1?0:w>.5?R>=0?43:-43:n.switchRiding?24:-23,le=te(se+(0-se)*X,Y+Z),re=(ut,st)=>{let me=se+(ut-se)*X,Tt=st<0?C*(-st/58):I*(st/55),Ne=Math.sin((st+58)/113*Math.PI)*x*2,Ye=te(me,st+_*st*.28-Tt+Ne+Z);return Db(Ye,le,c)},He=Math.sin(Math.abs(l))*9,j=-H,de=(n.stance==="goofy"?-1:1)*(n.switchRiding?-1:1),Te=de,K=te(r*(o?16:11)+h*4+u*2,-2+e*14-s*5-i*5+w*4+(o?0:Math.abs(r)*3)+G+M*12+T*7),U=re(-6,-23),q=re(2,31),$=te(K.x-7+u*2,K.y-2-u*3),Q=te(K.x+7+u*2,K.y+2+u*3),ce=Um(U,$,e,o?1.08:.92),xe=Um(q,Q,e,o?.94:1.12),he=te(K.x+r*(o?13:7)+d*5,K.y-29+e*14-s*8+(o?Math.abs(r)*2:0)+M*9+v),Ie=te(he.x-15,he.y+3-d*5),Me=te(he.x+15,he.y-3+d*5),Xe=r<0?P:0,ke=r>=0?P:0,qe=te(K.x-21+d*8+p*8-T*11+g,K.y+12+e*9-t*3+Xe*22-S*21+T*9+g*.6),Ge=te(K.x+21+d*8+p*11-B*10+T*5-g*.7,K.y+12+e*9-t*3+ke*22+B*9-S*28-T*4-g*.4),yt=te((Ie.x+qe.x)/2-3,(Ie.y+qe.y)/2-2),ht=te((Me.x+Ge.x)/2+4,(Me.y+Ge.y)/2-1),_t=Om(Ie,yt,.68),D=Om(Me,ht,.68),ae=te(he.x+r*4+f*5-h*2,he.y-15-s*3+M*4);return Object.freeze([ct("board","board",[re(-8,-58),re(8,-58),re(12,-52),re(13,44),re(9,54),re(-9,54),re(-13,44),re(-12,-52)]),ct("board-side","boardSide",[re(8,-58),te(re(8,-58).x+4,re(8,-58).y+4),te(re(13,44).x+4,re(13,44).y+4),re(13,44)]),ct("board-tail-side","boardBase",[re(-9,54),re(9,54),te(re(9,54).x+3,re(9,54).y+4),te(re(-9,54).x+3,re(-9,54).y+4)]),ct("board-underside","boardBase",[re(j*(11+He/X),-49),re(j*11,-49),re(j*13,45),re(j*(13+He/X),45)]),ct("board-edge","boardEdge",[re(H*12.2,-48),re(H*13.2,-45),re(H*13.2,42),re(H*12.2,45)]),ct("board-inset","boardShadow",[re(0,-46),re(5,-41),re(6,41),re(-6,41),re(-5,-41)]),ct("board-nose-graphic","boardAccent",[re(-9,-47),re(6,-38),re(7,-34),re(-9,-43)]),ct("board-tail-graphic","boardAccent",[re(9,38),re(-7,47),re(-9,51),re(9,42)]),ct("board-mark","board",[re(-3,-15),re(3,-11),re(3,12),re(-3,16)]),ct("left-leg","pantsShadow",Dm(U,ce,$)),ct("left-pant-side","pantsSide",[te(ce.x-14,ce.y-6),te(ce.x-15,ce.y+5),te(U.x-10,U.y),te(U.x-4,U.y-6)]),ct("left-pant-fold","pantsFold",[te(ce.x-9,ce.y-4),te(ce.x+4,ce.y+2),te(U.x-5,U.y-8)]),ct("right-leg","pants",Dm(q,xe,Q)),ct("right-pant-side","pantsSide",[te(xe.x+14,xe.y-6),te(xe.x+15,xe.y+5),te(q.x+10,q.y),te(q.x+4,q.y-6)]),ct("right-pant-fold","pantsFold",[te(xe.x+9,xe.y-5),te(xe.x-2,xe.y+3),te(q.x+6,q.y-8)]),ct("left-boot","boots",Ri(U.x,U.y,29,9,-.28*de+c)),ct("right-boot","boots",Ri(q.x,q.y,29,9,.28*de+c)),ct("left-boot-top","bootsTop",Ri(U.x,U.y-2,24,4,-.28*de+c)),ct("right-boot-top","bootsTop",Ri(q.x,q.y-2,24,4,.28*de+c)),ct("left-pant-cuff","pantCuff",Ri(U.x,U.y-5,25,7,-.28*de+c)),ct("right-pant-cuff","pantCuff",Ri(q.x,q.y-5,25,7,.28*de+c)),ct("torso","tee",[te(Ie.x-4,Ie.y-2),te(Me.x+4,Me.y-2),te(Q.x+9,Q.y+2),te($.x-9,$.y+2)]),ct("shirt-light-panel","teeLight",[te(Ie.x-4,Ie.y-2),te(he.x+2,he.y-3),te(K.x-2,K.y+2),te($.x-9,$.y+2)]),ct("shirt-side-panel","teeShadow",[te(he.x+7,he.y),te(Me.x+4,Me.y-1),te(Q.x+9,Q.y+2),te(K.x+8,K.y+2)]),ct("shirt-hem","tee",[te($.x-9,$.y),te(Q.x+9,Q.y),te(Q.x+11+y*7,Q.y+5+m*3),te(K.x+y*8,K.y+7+m*3),te($.x-10+y*5,$.y+5+m*2)]),ct("shirt-graphic","board",[te(he.x-8,he.y+14),te(he.x-1,he.y+7),te(he.x+6,he.y+14),te(he.x+2,he.y+14),te(he.x-1,he.y+11),te(he.x-5,he.y+16)]),ct("left-arm","sleeveShadow",Nm(qe,yt,Ie,5)),ct("right-arm","sleeve",Nm(Ge,ht,Me,5)),ct("right-sleeve-light","sleeveLight",[te(ht.x-2,ht.y-1),te(ht.x+2,ht.y-1),te(Ge.x+2,Ge.y-5),te(Ge.x-1,Ge.y-5)]),ct("left-tee-sleeve","teeShadow",Fm(Ie,_t,8,7)),ct("right-tee-sleeve","tee",Fm(Me,D,8,7)),ct("left-sleeve-cuff","sleeve",Ri(qe.x,qe.y-5,11,5,-.2)),ct("right-sleeve-cuff","sleeveShadow",Ri(Ge.x,Ge.y-5,11,5,.2)),ct("left-mitt","mitts",Ri(qe.x,qe.y,8,10,-.18)),ct("right-mitt","mitts",Ri(Ge.x,Ge.y,8,10,.18)),ct("head","helmet",[te(ae.x-9,ae.y-5),te(ae.x-5,ae.y-10),te(ae.x+5,ae.y-10),te(ae.x+10,ae.y-5),te(ae.x+10,ae.y+5),te(ae.x+5,ae.y+9),te(ae.x-5,ae.y+9),te(ae.x-10,ae.y+5)]),ct("helmet-side","helmetSide",[te(ae.x+5,ae.y-10),te(ae.x+10,ae.y-5),te(ae.x+10,ae.y+5),te(ae.x+5,ae.y+9),te(ae.x+4,ae.y+2)]),ct("helmet-panel","helmetShadow",[te(ae.x-8,ae.y-5),te(ae.x-4,ae.y-9),te(ae.x+5,ae.y-9),te(ae.x+8,ae.y-5),te(ae.x+3,ae.y-1),te(ae.x-5,ae.y-1)]),ct("helmet-highlight","helmetHighlight",[te(ae.x-5,ae.y-5),te(ae.x,ae.y-9),te(ae.x+1,ae.y-6),te(ae.x-2,ae.y-3)]),ct("face","skin",[te(ae.x-6,ae.y+2),te(ae.x+6,ae.y+2),te(ae.x+5,ae.y+8),te(ae.x,ae.y+10),te(ae.x-5,ae.y+8)]),ct("helmet-band","helmetBand",[te(ae.x-9,ae.y-2),te(ae.x+9,ae.y-2),te(ae.x+9,ae.y+1),te(ae.x-9,ae.y+1)]),ct("goggles","goggles",[te(ae.x+Te*1+f*2,ae.y-3),te(ae.x+Te*8+f*2,ae.y-2),te(ae.x+Te*8+f*2,ae.y+3),te(ae.x+Te*1+f*2,ae.y+3)]),ct("goggle-lens","goggleLens",[te(ae.x+Te*3+f*2,ae.y-2),te(ae.x+Te*7+f*2,ae.y-1),te(ae.x+Te*7+f*2,ae.y+1),te(ae.x+Te*3+f*2,ae.y+1)]),ct("goggle-strap","goggleStrap",[te(ae.x-9,ae.y-1),te(ae.x+9,ae.y-1),te(ae.x+8,ae.y+3),te(ae.x-8,ae.y+3)]),ct("goggle-lens","goggleLens",[te(ae.x-6,ae.y-2),te(ae.x+7,ae.y-2),te(ae.x+5,ae.y+2),te(ae.x-5,ae.y+2)]),ct("scarf","scarf",[te(he.x+7,he.y-10),te(he.x+15,he.y-8),te(he.x+21+r*4+L*5,he.y+10-t*5-Math.abs(L)*4),te(he.x+11,he.y+2)])])}var Wo=Object.freeze({board:"#f16e50",boardAccent:"#f4e9d8",boardBase:"#a8453f",boardEdge:"#f8fafc",boardSide:"#a94b40",boardShadow:"#29354e",boots:"#202a40",bootsTop:"#46536d",carveTrace:"rgba(71, 125, 148, 0.58)",flatTrace:"rgba(116, 174, 194, 0.18)",goggles:"#182438",goggleLens:"#8ed4d9",goggleStrap:"#29354e",helmet:"#f16e50",helmetBand:"#29354e",helmetHighlight:"#ff9b78",helmetSide:"#d75b49",helmetShadow:"#b74840",mitts:"#202a40",pantCuff:"#26324b",pants:"#657391",pantsFold:"#35415c",pantsSide:"#3c4967",pantsShadow:"#4c5a78",powderTrace:"rgba(85, 159, 185, 0.24)",pressTrace:"rgba(71, 125, 148, 0.32)",scarf:"#f6cd75",shadow:"rgba(15, 42, 58, 0.24)",skidTrace:"rgba(116, 174, 194, 0.3)",skin:"#dca67f",sleeve:"#f16e50",sleeveLight:"#ff9d77",sleeveShadow:"#bc4d42",snowSpray:"#b9e9f5",tee:"#f4e9d8",teeLight:"#fff9ec",teeShadow:"#d7c8b9"}),$i=(n,e,t)=>Math.min(t,Math.max(e,n)),Fb=n=>Math.atan2(Math.sin(n),Math.cos(n));function Ob(n,e=0){let t=n.getBoundingClientRect?.().height||n.height,i=$i(n.height/Math.max(1,t),1,2);return Math.max(0,e)*42*i}function Ub(n=1500){let e=[],t=-1,i=-1/0,s=0;return Object.freeze({points(){return Object.freeze([...e])},reset(){e=[],t=-1,i=-1/0,s=0},update(r){let o=Number(r?.elapsed)||0,a=Number(r?.position?.downhill)||0;(o<t||a<i-1)&&(e=[],s=0),t=o,i=a;let l=Number(r?.edge)||0,c=$i(Number(r?.skid)||0,0,1),h=Number(r?.landingImpact)||0;if(r?.air>0||r?.crashed){s=h;return}let u=Number(r?.boardYaw)||0,d=Math.sign(l||r?.slipAngle||1),f=(Number(r?.position?.across)||0)+Math.cos(u)*d*.12,p=e.at(-1),y=h>1.5&&s<=1.5;if(s=h,p&&Math.hypot(f-p.across,a-p.downhill)<.1&&!y)return;let m=$i(Number(r?.carveQuality)||0,0,1),g=y?"landing":(Number(r?.butter)||0)>.55?"butter":Math.abs(Number(r?.pressAmount)||0)>.45&&c<.2?"press":m>=.45&&c<.36?"carve":c>=.12||Math.abs(l)>=.08?"skid":r?.surface==="powder"?"powder":"flat";e.push(Object.freeze({across:f,downhill:a,kind:g,width:g==="carve"?.9:g==="press"?.85:g==="flat"?1.5:g==="powder"?2.5:g==="landing"?4+h*.5:2.2+c*5.8})),e.length>n&&(e=e.slice(-n))}})}function Bb(n,e,t={}){let{cameraAcross:i=0,currentDownhill:s=0,groundY:r=0,palette:o=Wo,scale:a=1,viewportCenter:l=0}=t;if(!Array.isArray(e)||e.length<2)return;let c=h=>({x:l+(h.across-i)*14,y:r+(s-h.downhill)*10*a});n.save(),n.lineCap="round";for(let h=1;h<e.length;h+=1){let u=e[h-1],d=e[h],f=s-u.downhill,p=s-d.downhill;if(f<-.2||p<-.2||f>22||p>22)continue;let y=c(u),m=c(d),g=1-$i(Math.max(f,p)/22,0,.82);if(n.globalAlpha=g,n.strokeStyle=d.kind==="carve"?o.carveTrace:d.kind==="flat"?o.flatTrace:d.kind==="powder"?o.powderTrace??o.flatTrace:d.kind==="press"?o.pressTrace??o.flatTrace:o.skidTrace,d.kind==="landing"){n.fillStyle=o.skidTrace,n.beginPath(),n.ellipse(m.x,m.y,d.width*a,d.width*a*.35,0,0,Math.PI*2),n.fill();continue}n.lineWidth=Math.max(.8,d.width*a),n.beginPath(),n.moveTo(y.x,y.y),n.lineTo(m.x,m.y),n.stroke()}n.restore()}function zb(n,e={}){let{direction:t=1,intensity:i=0,palette:s=Wo,scale:r=1,surface:o="groomed",x:a=0,y:l=0}=e;if(i<.05)return;n.save(),n.translate(a,l),n.scale(r,r),n.fillStyle=s.snowSpray;let c=o==="powder"?12:o==="ice"?4:7,h=o==="powder"?1.65:o==="slush"?1.3:1;for(let u=0;u<c;u+=1){let d=(u+1)/c,f=(7+u*5)*t;n.globalAlpha=i*(.72-d*.42),n.beginPath(),n.ellipse(f,8+u*2.4,(2.5+i*4*(1-d*.45))*h,(1.6+i*2.5*(1-d*.5))*h,t*-.28,0,Math.PI*2),n.fill()}n.restore()}function kb(n,e={}){let{edge:t=0,palette:i=Wo,quality:s=0,scale:r=1,x:o=0,y:a=0}=e;if(Math.abs(t)<.12||s<.35)return;let l=Math.sign(t)||1;n.save(),n.globalAlpha=$i(s,0,1)*.82,n.strokeStyle=i.carveTrace,n.lineWidth=Math.max(1,r*.9),n.beginPath(),n.moveTo(o-l*4*r,a+7*r),n.lineTo(o-l*15*r,a+54*r),n.stroke(),n.restore()}function Hb(n,e,t={}){let{boardTweak:i=0,palette:s=Wo,rotation:r=0,scale:o=1,x:a=0,y:l=0}=t;n.save(),n.translate(a,l),n.rotate(r),n.scale(o,o);for(let c of e){let h=c.part.startsWith("board")||c.part.endsWith("boot"),u=c.part.endsWith("leg"),d=h?i:u?i*.45:0,[f,...p]=c.points;n.save(),n.rotate(d),n.beginPath(),n.moveTo(f.x,f.y);for(let y of p)n.lineTo(y.x,y.y);n.closePath(),n.fillStyle=s[c.tone]??s.board,n.fill(),n.restore()}n.restore()}function zm(n,e=Wo){let t=n.getContext("2d");if(!t)throw new Error("Rider rendering requires a 2D canvas context");let i=Ub();return Object.freeze({beginFrame(){t.clearRect(0,0,n.width,n.height)},draw({camera:s,pose:r,state:o}){let a=$i(Number(s.zoom)||1,.82,1),l=$i(Math.min(n.width/700,n.height/500),1.1,2.4)*a,c=(o.position.across-s.position.across)*14*a,h=Ob(n,o.air),u=n.width/2+c,d=n.height*.78+(Number(s.dip)||0)*9,f=1-$i((o.air??0)/3.5,0,.55);if(t.save(),t.translate(n.width/2,n.height/2),t.rotate(-(Number(s.roll)||0)),t.translate(-n.width/2,-n.height/2),i.update(o),Bb(t,i.points(),{cameraAcross:s.position.across,currentDownhill:o.position.downhill,groundY:d,palette:e,scale:l,surface:o.surface,viewportCenter:n.width/2}),r.handDrag>.55){let p=Math.sign(r.lean||o.edge||1);kb(t,{edge:p,palette:e,quality:r.handDrag,scale:l,x:u+p*28*l,y:d+5*l})}zb(t,{direction:-Math.sign(o.slipAngle||o.edge||1),intensity:r.spray,palette:e,scale:l,surface:o.surface,x:u,y:d+4*l}),t.save(),t.translate(u+9*l,d+11*l),t.rotate((Number(r.boardSwing)||0)*.7),t.scale(l*f,l*f),t.fillStyle="rgba(26, 65, 83, 0.13)",t.beginPath(),t.moveTo(-8,-51),t.lineTo(8,-51),t.lineTo(12,-44),t.lineTo(12,43),t.lineTo(8,51),t.lineTo(-8,51),t.lineTo(-12,43),t.lineTo(-12,-44),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=e.shadow,t.beginPath(),t.ellipse(u+9*l,d+14*l,28*l*f,9*l*f,0,0,Math.PI*2),t.fill(),t.restore(),Hb(t,Bm(r),{palette:e,rotation:(r.airborne>0?r.bodySpin:$i(Fb(r.bodyYaw)*.12+r.lean*.08,-.4,.4))+r.fallRotation,scale:l,x:u,y:d-h}),t.restore()}})}Ho();var Gb=1/120,Vb=1,ni=(n,e,t)=>Math.min(t,Math.max(e,n)),Wb=n=>{if(!(n>0))return Object.freeze({count:0,step:0});let e=Math.ceil(n/Gb-1e-6);return Object.freeze({count:e,step:n/e})},km=(n,e)=>{if(!Number.isFinite(e)||e<=0||n.crashed)return n;let t=Os(n.position.downhill),i=ni(e,t.min,t.max),s=Math.hypot(n.velocity.across,n.velocity.downhill),r=i/Math.max(s,.001),o=n.grounded&&Number.isFinite(n.hillRate);return Us({...n,hillRate:o?n.hillRate*r:null,worldVerticalVelocity:o?n.worldVerticalVelocity+n.hillRate*(r-1):n.worldVerticalVelocity,velocity:{across:n.velocity.across*r,downhill:n.velocity.downhill*r}})};async function Wu(n){let e=Lm(window),t=n.runtime?.world3d?{beginFrame(){},draw(){}}:zm(n.canvas),i=Rm(),s=Object.freeze({surface:"powder",surfaceHeight:zt}),r=Object.freeze({height:(S,M)=>zt(S,M,s.surface)}),o="regular",a=Vu(),l=Object.freeze({carve:0,crouch:0,press:0,steer:0,stretch:0}),c=!1,h=0,u,d=0,f=0,p,y=Us({surface:s.surface}),m,g=0;n.events.addEventListener("course:update",S=>{m=S.detail?.phase}),n.events.addEventListener("rider:input",S=>{Number(S.detail?.jump)>0&&(c=!0),l=Object.freeze({carve:ni(Number(S.detail?.carve)||0,-1,1),crouch:ni(Number(S.detail?.crouch)||0,0,1),press:ni(Number(S.detail?.press)||0,-1,1),steer:ni(Number(S.detail?.steer)||0,-1,1),stretch:ni(Number(S.detail?.stretch)||0,0,1)})}),n.events.addEventListener("rider:surface",S=>{s=Object.freeze({slopeGrade:Number.isFinite(S.detail?.slopeGrade)?S.detail.slopeGrade:void 0,surface:S.detail?.surface??s.surface,surfaceHeight:zt})}),n.events.addEventListener("rider:pace",S=>{if(!Number.isFinite(S.detail?.targetSpeed))return;let M=Os(y.position.downhill);u={holdSeconds:Math.max(0,Number(S.detail?.holdSeconds)||0),targetSpeed:ni(S.detail.targetSpeed,M.min,M.max)}}),n.events.addEventListener("rider:stance",S=>{o=S.detail?.stance==="goofy"?"goofy":"regular",y=Us({...y,stance:o})}),n.events.addEventListener("rider:reset",S=>{i.reset(),a=Vu(),p=void 0,c=!1,h=0,u=void 0,d=0,f=0,y=Us({speed:Number(S.detail?.speed)||16,stance:o,surface:s.surface})}),n.events.addEventListener("rider:impact",S=>{y=$p(y,S.detail),h=0,c=!1});let v=S=>{let M=e.read(),T=Object.freeze({carve:ni(M.carve+l.carve,-1,1),crouch:Math.max(M.crouch,l.crouch),jump:Math.max(M.jump,Number(c)),press:ni(M.press+l.press,-1,1),steer:ni(M.steer+l.steer,-1,1),stretch:Math.max(M.stretch,l.stretch)});c=!1;let x=p===void 0?0:ni((S-p)/1e3,0,.1);p=S,u&&y.air<=.08&&(y=km(y,u.targetSpeed),f=u.targetSpeed,d=u.holdSeconds,u=void 0);let _=y.crashed,w=m==="idle",R=m==="crashed"&&(!y.crashed||y.crashTimer<=Vb);g=w?g+x:0,h=w||R?0:Math.max(h,T.jump);let C=w||R?Object.freeze({count:0,step:0}):Wb(x),I=0;for(let se=0;se<C.count;se+=1)I=Math.max(I,h),y=Qp(y,{...T,jump:h},C.step,{...s,lipDistance:em(y.position.across,y.position.downhill)}),d>0&&y.speed>f&&(y=km(y,f)),d=Math.max(0,d-C.step),h=0;let P=Object.freeze({...T,jump:I});!_&&y.crashed&&(n.events.dispatchEvent(new CustomEvent("rider:crash",{detail:y})),y.crashReason==="edge-catch"&&n.events.dispatchEvent(new CustomEvent("rider:edge-catch",{detail:y})));let B=()=>w?Us({...y,elapsed:y.elapsed+g,speed:0,velocity:{across:0,downhill:0}}):y;a=Im(a,y,x,r);let L=i.step(B(),P,x),G=ni((y.impactMeter-70)/30,0,1),Z=G>0?`saturate(${1-G*.78}) contrast(${1+G*.08})`:"";n.worldCanvas?.style&&(n.worldCanvas.style.filter=Z),n.canvas?.style&&(n.canvas.style.filter=Z),t.beginFrame();let H=y;n.events.dispatchEvent(new CustomEvent("rider:update",{detail:Object.freeze({camera:a,input:P,pose:L,state:B()})})),y!==H&&(L=i.step(B(),P,0)),t.draw({camera:a,pose:L,state:B()}),requestAnimationFrame(v)};n.events.addEventListener("ready",()=>requestAnimationFrame(v),{once:!0})}var Mc=n=>{let e=document.querySelector(n);if(!e)throw new Error(`Shared game mount is missing: ${n}`);return e},Hm=Object.freeze({canvas:Mc("#game-canvas"),worldCanvas:Mc("#world-canvas"),runtime:{world3d:null},events:new EventTarget,hudRoot:Mc("#hud-root"),overlayRoot:Mc("#overlay-root")}),Xb=async()=>{for(let n of[zu,Ou,Wu])await n(Hm);Hm.events.dispatchEvent(new Event("ready"))};Xb();})();
