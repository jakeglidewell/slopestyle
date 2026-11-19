// Slopestyle source fingerprint: f7542f473cd244d1dad0c3a863a7a6c32b5bdf3298c9bc1fd821b883ad2b11b8
(()=>{var Bf=Object.defineProperty;var oi=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var zf=(n,e)=>{for(var t in e)Bf(n,t,{get:e[t],enumerable:!0})};function kh(n){return _a(n)}function Hf(n,e){let t=Math.max(0,Number.isFinite(n)?n:0),i=Math.max(0,Number.isFinite(e)?e:0);return 1+.07*(Math.sin((t+i)*.046+.3)-Math.sin(t*.046+.3))}function ga(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.11)*.45+Math.sin(e*.38)*.18}function Vf(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.min(3,Math.floor(e/72))}function Bl(n){let e=Math.floor(Math.max(0,Number.isFinite(n)?n:0)/36);return zh[Math.floor(e/4)%zh.length]}function _a(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.035-.5)*2.8+Math.sin(e*.082+.7)}function Wf(n,{halfWidth:e=9.5,seed:t=1}={}){if(!Number.isInteger(n)||n<0)throw new RangeError("Chunk index must be a non-negative integer");if(!Number.isFinite(e)||e<=0)throw new RangeError("Slope half-width must be positive and finite");let i=Vf(n*36),s=Bl(n*36),a={summit:7,forest:15,rocky:10,glow:9}[s]+i*2,o=Array.from({length:a},(c,l)=>{let h=nr(t,n,l,4)<.5?-1:1,d=36/a,u=n*36+(l+.3+nr(t,n,l,0)*.4)*d,f=2.2+nr(t,n,l,1)*17,p={summit:.46,forest:.1,rocky:.68,glow:.22}[s];return Object.freeze({kind:nr(t,n,l,2)<p?"rock":"pine",size:.72+nr(t,n,l,3)*.75,x:h*(e+f),z:u})});return Object.freeze({biome:s,index:n,tier:i,scenery:Object.freeze(o)})}function xa(n,e,t={}){if(!Number.isFinite(e)||e<0)throw new RangeError("View distance must be non-negative and finite");let i=Math.max(0,Number.isFinite(n)?n:0),s=Math.floor(i/36),r=Math.floor((i+e)/36);return Array.from({length:r-s+1},(a,o)=>Gf(s+o,t))}function rr(n,e){let t=sr((e/n.height-.36)/.64,0,1);return n.width*(.058+.285*t**1.16)}function Hh(n,e,t,i=1,s=9.5){let r=(e-t)*14*sr(i||1,.82,1),a=Math.max(1,rr(n,n.height*.78));return e-r*s/a}function On(n,e,t,{halfWidth:i=9.5,travel:s=0,viewDistance:r=44}={}){let a=sr(t.z,0,r),o=1-a/r,c=o*o*(3-2*o),l=n.height*(.36+c*(.78-.36)),h=.23+c*.77,d=sr(a/7,0,1),u=d*d*(3-2*d),f=(ga(s+a)-ga(s))*u,p=l-f*h*n.height*.045,x=rr(n,p)*(1+(Hf(s,a)-1)*u),g=(kh(s+a)-kh(s))*u;return Object.freeze({alpha:sr(c*1.6+.2,0,1),pathHalf:x,scale:h,x:n.width/2+(t.x-e+g)/i*x,y:p})}var zh,sr,kf,nr,ir,Gf,ya=oi(()=>{zh=Object.freeze(["summit","forest","rocky","glow"]),sr=(n,e,t)=>Math.min(t,Math.max(e,n)),kf=n=>{let e=n|0;return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),(e^e>>>16)>>>0},nr=(n,e,t,i)=>kf(n^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507)^i)/4294967296;ir=new Map,Gf=(n,e)=>{let t=[n,e.halfWidth??9.5,e.seed??1].join(":"),i=ir.get(t);return i||(i=Wf(n,e),ir.set(t,i),ir.size>32&&ir.delete(ir.keys().next().value)),i}});function Xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nd(){let n=xr("canvas");return n.style.display="block",n}function Zc(...n){let e="THREE."+n.shift();Is?Is("log",e,...n):console.log(e,...n)}function id(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=id(n);let e="THREE."+n.shift();if(Is)Is("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=id(n);let e="THREE."+n.shift();if(Is)Is("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function dr(...n){let e=n.join(" ");e in Gh||(Gh[e]=!0,Ye(...n))}function sd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Xs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Yf(n,e){return(n%e+e)%e}function kl(n,e,t){return(1-t)*n+t*e}function ad(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zf(n,e){if(e.constructor===Float32Array)return n;let t=Jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Jf(n,e){if(e.constructor===Float32Array)return n;let t=Jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}function $f(){let n={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gr]:{primaries:e,whitePoint:i,transfer:_r,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?so.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ec(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ki.fromArray(n,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),h=i.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function dp(n,e,t,i,s,r,a,o){let c;if(e.side===en?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Vi,o),c===null)return null;Na.copy(o),Na.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Na);return l<t.near||l>t.far?null:{distance:l,point:Na.clone(),object:n}}function Ua(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Pa),n.getVertexPosition(c,Ia),n.getVertexPosition(l,La);let h=dp(n,e,t,i,Pa,Ia,La,nu);if(h){let d=new F;Fi.getBarycoord(nu,Pa,Ia,La,d),s&&(h.uv=Fi.getInterpolatedAttribute(s,o,c,l,d,new Re)),r&&(h.uv1=Fi.getInterpolatedAttribute(r,o,c,l,d,new Re)),a&&(h.normal=Fi.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new F,materialIndex:0};Fi.getNormal(Pa,Ia,La,u.normal),h.face=u,h.barycoord=d}return h}function Ba(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(co.fromBufferAttribute(o,s),ho.fromBufferAttribute(o,r),t.distanceSqToSegment(co,ho,ac,ru)>i)return;ac.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ac);if(!(l<e.near||l>e.far))return{distance:l,point:ru.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}function cu(n,e,t,i,s,r,a){let o=mc.distanceSqToPoint(n);if(o<t){let c=new F;mc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function $c(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function du(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function pp(n,e){let t=1-n;return t*t*e}function mp(n,e){return 2*(1-n)*n*e}function gp(n,e){return n*n*e}function fr(n,e,t,i){return pp(n,e)+mp(n,t)+gp(n,i)}function _p(n,e){let t=1-n;return t*t*t*e}function xp(n,e){let t=1-n;return 3*t*t*n*e}function yp(n,e){return 3*(1-n)*n*n*e}function vp(n,e){return n*n*n*e}function pr(n,e,t,i,s){return _p(n,e)+xp(n,t)+yp(n,i)+vp(n,s)}function Mp(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ld(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Ep(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let h=o,d=c;for(let u=t;u<s;u+=t){let f=n[u],p=n[u+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Or(r,a,t,o,c,l,0),a}function ld(n,e,t,i,s){let r;if(s===Op(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=fu(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=fu(a/i|0,n[a],n[a+1],r);return r&&Bs(r,r.next)&&(zr(r),r=r.next),r}function ns(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Bs(t,t.next)||Lt(t.prev,t,t.next)===0)){if(zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Or(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Ip(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?bp(n,i,s,r):Sp(n)){e.push(c.i,n.i,l.i),zr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=wp(ns(n),e),Or(n,e,t,i,s,r,2)):a===2&&Tp(n,e,t,i,s,r):Or(ns(n),e,t,i,s,r,1);break}}}function Sp(n){let e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&ur(s,o,r,c,a,l,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function bp(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Lt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),p=Math.min(h,d,u),x=Math.max(o,c,l),g=Math.max(h,d,u),m=_c(f,p,e,t,i),y=_c(x,g,e,t,i),b=n.prevZ,v=n.nextZ;for(;b&&b.z>=m&&v&&v.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&ur(o,h,c,d,l,u,b.x,b.y)&&Lt(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&ur(o,h,c,d,l,u,v.x,v.y)&&Lt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&ur(o,h,c,d,l,u,b.x,b.y)&&Lt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&ur(o,h,c,d,l,u,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wp(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Bs(i,s)&&hd(i,t,t.next,s)&&Br(i,s)&&Br(s,i)&&(e.push(i.i,t.i,s.i),zr(t),zr(t.next),t=n=s),t=t.next}while(t!==n);return ns(t)}function Tp(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Np(a,o)){let c=ud(a,o);a=ns(a,a.next),c=ns(c,c.next),Or(a,e,t,i,s,r,0),Or(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Ep(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=ld(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Dp(l))}s.sort(Ap);for(let r=0;r<s.length;r++)t=Rp(s[r],t);return t}function Ap(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Rp(n,e){let t=Cp(n,e);if(!t)return e;let i=ud(t,n);return ns(i,i.next),ns(t,t.next)}function Cp(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Bs(n,t))return t;do{if(Bs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&cd(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Br(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Pp(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Pp(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function Ip(n,e,t,i){let s=n;do s.z===0&&(s.z=_c(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Lp(s)}function Lp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function _c(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Dp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function cd(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function ur(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&cd(n,e,t,i,s,r,a,o)}function Np(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Up(n,e)&&(Br(n,e)&&Br(e,n)&&Fp(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||Bs(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Bs(n,e){return n.x===e.x&&n.y===e.y}function hd(n,e,t,i){let s=Ga(Lt(n,e,t)),r=Ga(Lt(n,e,i)),a=Ga(Lt(t,i,n)),o=Ga(Lt(t,i,e));return!!(s!==r&&a!==o||s===0&&Ha(n,t,e)||r===0&&Ha(n,i,e)||a===0&&Ha(t,n,i)||o===0&&Ha(t,e,i))}function Ha(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ga(n){return n>0?1:n<0?-1:0}function Up(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Br(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function Fp(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ud(n,e){let t=xc(n.i,n.x,n.y),i=xc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function fu(n,e,t,i){let s=xc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function xc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Op(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function pu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function mu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function zp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function kp(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function cs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(gu(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(gu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=cs(n[t]);for(let s in i)e[s]=i[s]}return e}function gu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}function Ts(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Va(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function fd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Wp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Xp(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=fd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Wp(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function _u(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function xu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function eh(n,e,t,i){let s=em(i);switch(t){case Hc:return n*e;case Vc:return n*e/s.components*s.byteLength;case Go:return n*e/s.components*s.byteLength;case Wi:return n*e*2/s.components*s.byteLength;case Vo:return n*e*2/s.components*s.byteLength;case Gc:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case Wo:return n*e*4/s.components*s.byteLength;case $r:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:case Zo:return Math.max(n,16)*Math.max(e,8)/4;case Xo:case Yo:return Math.max(n,8)*Math.max(e,8)/2;case Jo:case $o:case jo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case ea:case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xl:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ta:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function em(n){switch(n){case pn:case Oc:return{byteLength:1,components:1};case Ws:case Bc:case Wn:return{byteLength:2,components:1};case ko:case Ho:return{byteLength:2,components:4};case Gn:case zo:case Vn:return{byteLength:4,components:1};case zc:case kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var bu,bc,wu,ss,Tu,Hs,Vi,en,Kt,rs,Gs,wc,Tc,Ec,Eu,as,Au,Ru,Cu,Pu,Iu,Lu,Du,Nu,Ac,Rc,Uu,Fu,Ou,Bu,zu,ku,Hu,Gu,Vu,Za,Ja,$a,Cs,Ka,ja,Qa,eo,Cc,Wu,Xu,ni,Pc,Ic,Lc,Zr,Dc,Nc,Uc,Fc,os,Vs,Fo,Oo,es,Jn,to,Jt,qu,Jr,ln,Bo,yi,pn,Oc,Bc,Ws,zo,Gn,Vn,Wn,ko,Ho,ls,zc,kc,Hc,Gc,Xn,pi,vi,Vc,Go,Wi,Vo,Wo,$r,Kr,jr,Qr,Xo,qo,Yo,Zo,Jo,$o,Ko,jo,Qo,ea,el,tl,nl,il,sl,rl,al,ol,ll,cl,hl,ul,dl,fl,pl,ml,gl,_l,xl,yl,ta,vl,mr,no,qa,uc,dc,fc,pc,Yu,Ml,Zu,Mi,rn,gr,_r,vt,Ya,Ju,$u,Ku,ju,Wc,Qu,ed,Xc,qc,td,Yc,wn,Ps,Gh,Is,rd,Kn,nn,zl,io,th,Re,jn,nh,F,Hl,Vh,ih,it,Gl,Wh,Xh,pt,ms,so,Kf,Ls,jf,Wl,cn,sh,Pt,ro,_n,yr,ao,Uo,Et,gs,Bn,Qf,ep,Ii,va,mn,qh,Yh,mi,vr,tp,Zh,_s,li,Ma,ar,np,ip,Jh,$h,Kh,jh,sp,xs,Xl,Ot,Dt,rp,Ds,od,Li,Sa,Je,sn,Mr,Sr,zn,ci,Yl,hi,ys,vs,Qh,Zl,Jl,$l,Kl,jl,Ql,Fi,Oi,ui,kn,ba,Ms,Ss,bs,Di,Ni,$i,or,wa,Ta,Ki,Ft,Ea,ap,Tn,br,wr,nt,op,lr,tc,Bi,lp,bn,nc,ws,gn,cr,Zt,bt,ic,cp,hp,Hn,up,Qn,di,sc,Aa,Ra,Ns,En,eu,ji,Ca,tu,Pa,Ia,La,rc,Da,nu,Na,Bt,oo,Qi,fp,Fa,zi,iu,lo,Us,co,ho,su,hr,Oa,ac,ru,uo,au,ou,Tr,Fs,lu,mc,za,ka,Er,Ar,Rr,gi,Cr,Pr,hn,Ir,$t,ts,fo,_i,xn,Os,po,hu,uu,oc,lc,cc,mo,Lr,go,Dr,_o,Nr,xo,Ur,gc,yo,Fr,ei,yc,$n,kr,Bp,Hr,is,xi,zs,dd,Gp,Vp,ti,vo,un,Mo,So,ki,bo,wo,To,Eo,yn,Hi,Ao,Ro,Co,Gr,Gi,Po,Io,pd,Lo,Vr,Wr,hc,yu,vu,Do,Wa,Xa,Zn,Xr,Ui,Mu,Su,on,qr,vc,Yr,Es,As,ks,No,jc,qp,Qc,Yp,Zp,Jp,$p,Kp,jp,Qp,Mc,Ct,Ky,rh,Sc,ah=oi(()=>{bu=0,bc=1,wu=2,ss=1,Tu=2,Hs=3,Vi=0,en=1,Kt=2,rs=0,Gs=1,wc=2,Tc=3,Ec=4,Eu=5,as=100,Au=101,Ru=102,Cu=103,Pu=104,Iu=200,Lu=201,Du=202,Nu=203,Ac=204,Rc=205,Uu=206,Fu=207,Ou=208,Bu=209,zu=210,ku=211,Hu=212,Gu=213,Vu=214,Za=0,Ja=1,$a=2,Cs=3,Ka=4,ja=5,Qa=6,eo=7,Cc=0,Wu=1,Xu=2,ni=0,Pc=1,Ic=2,Lc=3,Zr=4,Dc=5,Nc=6,Uc=7,Fc=300,os=301,Vs=302,Fo=303,Oo=304,es=1e3,Jn=1001,to=1002,Jt=1003,qu=1004,Jr=1005,ln=1006,Bo=1007,yi=1008,pn=1009,Oc=1010,Bc=1011,Ws=1012,zo=1013,Gn=1014,Vn=1015,Wn=1016,ko=1017,Ho=1018,ls=1020,zc=35902,kc=35899,Hc=1021,Gc=1022,Xn=1023,pi=1026,vi=1027,Vc=1028,Go=1029,Wi=1030,Vo=1031,Wo=1033,$r=33776,Kr=33777,jr=33778,Qr=33779,Xo=35840,qo=35841,Yo=35842,Zo=35843,Jo=36196,$o=37492,Ko=37496,jo=37488,Qo=37489,ea=37490,el=37491,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,xl=36283,yl=36284,ta=36285,vl=36286,mr=2300,no=2301,qa=2302,uc=2303,dc=2400,fc=2401,pc=2402,Yu=3200,Ml=0,Zu=1,Mi="",rn="srgb",gr="srgb-linear",_r="linear",vt="srgb",Ya=7680,Ju=519,$u=512,Ku=513,ju=514,Wc=515,Qu=516,ed=517,Xc=518,qc=519,td=35044,Yc="300 es",wn=2e3,Ps=2001;Gh={},Is=null;rd={[Za]:Za,[$a]:Qa,[Ka]:Ka,[Cs]:ja,[Ja]:Ja,[Qa]:$a,[eo]:eo,[ja]:Cs},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zl=Math.PI/180,io=180/Math.PI;th=class th{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;Re=th,jn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==f||h!==p){let g=c*u+l*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),b=Math.sin(y);m=Math.sin(m*y)/b,o=Math.sin(o*y)/b,c=c*m+u*o,l=l*m+f*o,h=h*m+p*o,d=d*m+x*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+p*o,d=d*m+x*o;let y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+c*f-l*u,e[t+1]=c*p+h*u+l*d-o*f,e[t+2]=l*p+h*f+o*u-c*d,e[t+3]=h*p-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nh=class nh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nh.prototype.isVector3=!0;F=nh,Hl=new F,Vh=new jn,ih=class ih{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],y=s[1],b=s[4],v=s[7],E=s[2],T=s[5],_=s[8];return r[0]=a*x+o*y+c*E,r[3]=a*g+o*b+c*T,r[6]=a*m+o*v+c*_,r[1]=l*x+h*y+d*E,r[4]=l*g+h*b+d*T,r[7]=l*m+h*v+d*_,r[2]=u*x+f*y+p*E,r[5]=u*g+f*b+p*T,r[8]=u*m+f*v+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,p=t*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*l-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ih.prototype.isMatrix3=!0;it=ih,Gl=new it,Wh=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt=$f();so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=xr("canvas")),ms.width=e.width,ms.height=e.height;let s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kf=0,Ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vl(s[a].image)):r.push(Vl(s[a]))}else r=Vl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};jf=0,Wl=new F,cn=class n extends Kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=ln,a=yi,o=Xn,c=pn,l=n.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Xs(),this.name="",this.source=new Ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Fc;cn.DEFAULT_ANISOTROPY=1;sh=class sh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(f+1)/2,E=(m+1)/2,T=(h+u)/4,_=(d+x)/4,w=(p+g)/4;return b>v&&b>E?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=_/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=_/r,s=w/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sh.prototype.isVector4=!0;Pt=sh,ro=class extends Kn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ls(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends ro{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},yr=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ao=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Uo=class Uo{constructor(e,t,i,s,r,a,o,c,l,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,d,u,f,p,x,g)}set(e,t,i,s,r,a,o,c,l,h,d,u,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=l*h,x=l*d;t[0]=u+x*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=l*h,x=l*d;t[0]=u-x*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=c*h,t[4]=p*l-f,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*c,f=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qf,e,ep)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ii.crossVectors(i,mn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ii.crossVectors(i,mn)),Ii.normalize(),va.crossVectors(mn,Ii),s[0]=Ii.x,s[4]=va.x,s[8]=mn.x,s[1]=Ii.y,s[5]=va.y,s[9]=mn.y,s[2]=Ii.z,s[6]=va.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],b=i[7],v=i[11],E=i[15],T=s[0],_=s[4],w=s[8],D=s[12],R=s[1],C=s[5],z=s[9],$=s[13],I=s[2],W=s[6],U=s[10],O=s[14],J=s[3],L=s[7],k=s[11],H=s[15];return r[0]=a*T+o*R+c*I+l*J,r[4]=a*_+o*C+c*W+l*L,r[8]=a*w+o*z+c*U+l*k,r[12]=a*D+o*$+c*O+l*H,r[1]=h*T+d*R+u*I+f*J,r[5]=h*_+d*C+u*W+f*L,r[9]=h*w+d*z+u*U+f*k,r[13]=h*D+d*$+u*O+f*H,r[2]=p*T+x*R+g*I+m*J,r[6]=p*_+x*C+g*W+m*L,r[10]=p*w+x*z+g*U+m*k,r[14]=p*D+x*$+g*O+m*H,r[3]=y*T+b*R+v*I+E*J,r[7]=y*_+b*C+v*W+E*L,r[11]=y*w+b*z+v*U+E*k,r[15]=y*D+b*$+v*O+E*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=c*f-l*u,b=o*f-l*d,v=o*u-c*d,E=a*f-l*h,T=a*u-c*h,_=a*d-o*h;return t*(x*y-g*b+m*v)-i*(p*y-g*E+m*T)+s*(p*b-x*E+m*_)-r*(p*v-x*T+g*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*o-i*a,b=t*c-s*a,v=t*l-r*a,E=i*c-s*o,T=i*l-r*o,_=s*l-r*c,w=h*x-d*p,D=h*g-u*p,R=h*m-f*p,C=d*g-u*x,z=d*m-f*x,$=u*m-f*g,I=y*$-b*z+v*C+E*R-T*D+_*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/I;return e[0]=(o*$-c*z+l*C)*W,e[1]=(s*z-i*$-r*C)*W,e[2]=(x*_-g*T+m*E)*W,e[3]=(u*T-d*_-f*E)*W,e[4]=(c*R-a*$-l*D)*W,e[5]=(t*$-s*R+r*D)*W,e[6]=(g*v-p*_-m*b)*W,e[7]=(h*_-u*v+f*b)*W,e[8]=(a*z-o*R+l*w)*W,e[9]=(i*R-t*z-r*w)*W,e[10]=(p*T-x*v+m*y)*W,e[11]=(d*v-h*T-f*y)*W,e[12]=(o*D-a*C-c*w)*W,e[13]=(t*C-i*D+s*w)*W,e[14]=(x*b-p*E-g*y)*W,e[15]=(h*E-d*b+u*y)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,y=c*l,b=c*h,v=c*d,E=i.x,T=i.y,_=i.z;return s[0]=(1-(x+m))*E,s[1]=(f+v)*E,s[2]=(p-b)*E,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+b)*_,s[9]=(g-y)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),c=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);let l=1/a,h=1/o,d=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=wn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(c)p=r/(a-r),x=a*r/(a-r);else if(o===wn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ps)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=wn,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(c)p=1/(a-r),x=a/(a-r);else if(o===wn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ps)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Uo.prototype.isMatrix4=!0;Et=Uo,gs=new F,Bn=new Et,Qf=new F(0,0,0),ep=new F(1,1,1),Ii=new F,va=new F,mn=new F,qh=new Et,Yh=new jn,mi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tp=0,Zh=new F,_s=new jn,li=new Et,Ma=new F,ar=new F,np=new F,ip=new jn,Jh=new F(1,0,0),$h=new F(0,1,0),Kh=new F(0,0,1),jh={type:"added"},sp={type:"removed"},xs={type:"childadded",child:null},Xl={type:"childremoved",child:null},Ot=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new mi,i=new jn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new it}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ma.copy(e):Ma.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ar,Ma,this.up):li.lookAt(Ma,ar,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(li),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),xs.child=e,this.dispatchEvent(xs),xs.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,np),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,ip,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new F(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Dt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},rp={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Sa={h:0,s:0,l:0};Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=Yf(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ql(a,r,e+1/3),this.g=ql(a,r,e),this.b=ql(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let i=od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return pt.workingToColorSpace(sn.copy(this),e),Math.round(dt(sn.r*255,0,255))*65536+Math.round(dt(sn.g*255,0,255))*256+Math.round(dt(sn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(sn.copy(this),t);let i=sn.r,s=sn.g,r=sn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=rn){pt.workingToColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,s=sn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Sa);let i=kl(Li.h,Sa.h,t),s=kl(Li.s,Sa.s,t),r=kl(Li.l,Sa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Je;Je.NAMES=od;Mr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new F,ci=new F,Yl=new F,hi=new F,ys=new F,vs=new F,Qh=new F,Zl=new F,Jl=new F,$l=new F,Kl=new Pt,jl=new Pt,Ql=new Pt,Fi=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),ci.subVectors(i,t),Yl.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(ci),c=zn.dot(Yl),l=ci.dot(ci),h=ci.dot(Yl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,p=(a*h-o*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(a,hi.y),c.addScaledVector(o,hi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Kl.setScalar(0),jl.setScalar(0),Ql.setScalar(0),Kl.fromBufferAttribute(e,t),jl.fromBufferAttribute(e,i),Ql.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kl,r.x),a.addScaledVector(jl,r.y),a.addScaledVector(Ql,r.z),a}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),ci.subVectors(e,t),zn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),zn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,i),vs.subVectors(r,i),Zl.subVectors(e,i);let c=ys.dot(Zl),l=vs.dot(Zl);if(c<=0&&l<=0)return t.copy(i);Jl.subVectors(e,s);let h=ys.dot(Jl),d=vs.dot(Jl);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(i).addScaledVector(ys,a);$l.subVectors(e,r);let f=ys.dot($l),p=vs.dot($l);if(p>=0&&f<=p)return t.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(vs,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Qh.subVectors(r,s),o=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Qh,o);let m=1/(g+x+u);return a=x*m,o=u*m,t.copy(i).addScaledVector(ys,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Oi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),wa.subVectors(this.max,or),Ms.subVectors(e.a,or),Ss.subVectors(e.b,or),bs.subVectors(e.c,or),Di.subVectors(Ss,Ms),Ni.subVectors(bs,Ss),$i.subVectors(Ms,bs);let t=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-$i.z,$i.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,$i.z,0,-$i.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-$i.y,$i.x,0];return!ec(t,Ms,Ss,bs,wa)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,Ms,Ss,bs,wa))?!1:(Ta.crossVectors(Di,Ni),t=[Ta.x,Ta.y,Ta.z],ec(t,Ms,Ss,bs,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new F,new F,new F,new F,new F,new F,new F,new F],kn=new F,ba=new Oi,Ms=new F,Ss=new F,bs=new F,Di=new F,Ni=new F,$i=new F,or=new F,wa=new F,Ta=new F,Ki=new F;Ft=new F,Ea=new Re,ap=0,Tn=class extends Kn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=td,this.updateRanges=[],this.gpuType=Vn,this.version=0,this._normalizationScale=e!==void 0?Jc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jf(e,this.array)}},br=class extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},wr=class extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},nt=class extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},op=new Oi,lr=new F,tc=new F,Bi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):op.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(tc)),this.expandByPoint(lr.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lp=0,bn=new Et,nc=new Ot,ws=new F,gn=new Oi,cr=new Oi,Zt=new F,bt=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?wr:br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(gn.min,cr.min),gn.expandByPoint(Zt),Zt.addVectors(gn.max,cr.max),gn.expandByPoint(Zt)):(gn.expandByPoint(cr.min),gn.expandByPoint(cr.max))}gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zt.fromBufferAttribute(o,l),c&&(ws.fromBufferAttribute(e,l),Zt.add(ws)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new F,c[D]=new F;let h=new F,d=new F,u=new F,f=new Re,p=new Re,x=new Re,g=new F,m=new F;function y(D,R,C){l[D]=l[R]=l[C]=1,h.fromBufferAttribute(i,D),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,C),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let z=1/(p.x*x.y-x.x*p.y);isFinite(z)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(z),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(z),o[D].add(g),o[R].add(g),o[C].add(g),c[D].add(m),c[R].add(m),c[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,R=b.length;D<R;++D){let C=b[D],z=C.start,$=C.count;for(let I=z,W=z+$;I<W;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new F,E=new F,T=new F,_=new F;function w(D){T.fromBufferAttribute(s,D),_.copy(T);let R=o[D];v.copy(R),v.sub(T.multiplyScalar(T.dot(R))).normalize(),E.crossVectors(_,R);let z=E.dot(c[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,z)}for(let D=0,R=i.count;D<R;++D)l[D]&&w(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let m=0;m<h;m++)u[p++]=l[f++]}return new Tn(u,h,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ic=new F,cp=new F,hp=new it,Hn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ic.subVectors(i,t).cross(cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||hp.getNormalMatrix(e),s=this.coplanarPoint(ic).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},up=0,Qn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Gs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Hn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},di=new F,sc=new F,Aa=new F,Ra=new F,Ns=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){sc.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Ra.copy(this.origin).sub(sc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Ra.dot(this.direction),c=-Ra.dot(Aa),l=Ra.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*c-o,u=a*o-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sc).addScaledVector(Aa,u),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=i.x-a.x,y=i.y-a.y,b=i.z-a.z,v=Math.abs(c),E=Math.abs(l),T=Math.abs(h),_,w,D,R,C,z,$,I,W,U,O,J;if(v>=E&&v>=T?(D=c,z=d,W=p,J=m,c>=0?(_=l,w=h,R=u,C=f,$=x,I=g,U=y,O=b):(_=h,w=l,R=f,C=u,$=g,I=x,U=b,O=y)):E>=T?(D=l,z=u,W=x,J=y,l>=0?(_=h,w=c,R=f,C=d,$=g,I=p,U=b,O=m):(_=c,w=h,R=d,C=f,$=p,I=g,U=m,O=b)):(D=h,z=f,W=g,J=b,h>=0?(_=c,w=l,R=d,C=u,$=p,I=x,U=m,O=y):(_=l,w=c,R=u,C=d,$=x,I=p,U=y,O=m)),D===0)return null;let L=_/D,k=w/D,H=1/D,G=R-L*z,he=C-k*z,Z=$-L*W,ce=I-k*W,_e=U-L*J,pe=O-k*J,ae=_e*ce-pe*Z,we=G*pe-he*_e,We=Z*he-ce*G;if(s){if(ae<0||we<0||We<0)return null}else if((ae<0||we<0||We<0)&&(ae>0||we>0||We>0))return null;let xe=ae+we+We;if(xe===0)return null;let De=H*(ae*z+we*W+We*J);return(xe>0?De<0:De>0)?null:this.at(De/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eu=new Et,ji=new Ns,Ca=new Bi,tu=new F,Pa=new F,Ia=new F,La=new F,rc=new F,Da=new F,nu=new F,Na=new F,Bt=class extends Ot{constructor(e=new bt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Da.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(rc.fromBufferAttribute(d,e),a?Da.addScaledVector(rc,h):Da.addScaledVector(rc.sub(t),h))}t.add(Da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Ca.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Ca,tu)===null||ji.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(r).invert(),ji.copy(e.ray).applyMatrix4(eu),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,E=b;v<E;v+=3){let T=o.getX(v),_=o.getX(v+1),w=o.getX(v+2);s=Ua(this,m,e,i,l,h,d,T,_,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),b=o.getX(g+1),v=o.getX(g+2);s=Ua(this,a,e,i,l,h,d,y,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,E=b;v<E;v+=3){let T=v,_=v+1,w=v+2;s=Ua(this,m,e,i,l,h,d,T,_,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,b=g+1,v=g+2;s=Ua(this,a,e,i,l,h,d,y,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};oo=class extends cn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Jt,h=Jt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qi=new Bi,fp=new Re(.5,.5),Fa=new F,zi=class{constructor(e=new Hn,t=new Hn,i=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],b=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,m-p,E-y).normalize(),s[1].setComponents(l+a,f+h,m+p,E+y).normalize(),s[2].setComponents(l+o,f+d,m+x,E+b).normalize(),s[3].setComponents(l-o,f-d,m-x,E-b).normalize(),i)s[4].setComponents(c,u,g,v).normalize(),s[5].setComponents(l-c,f-u,m-g,E-v).normalize();else if(s[4].setComponents(l-c,f-u,m-g,E-v).normalize(),t===wn)s[5].setComponents(l+c,f+u,m+g,E+v).normalize();else if(t===Ps)s[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let t=fp.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Fa.x=s.normal.x>0?e.max.x:e.min.x,Fa.y=s.normal.y>0?e.max.y:e.min.y,Fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},iu=new Et,lo=class n{constructor(){this.coordinateSystem=wn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new zi),i[s].setFromProjectionMatrix(iu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new zi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}},Us=class extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},co=new F,ho=new F,su=new Et,hr=new Ns,Oa=new Bi,ac=new F,ru=new F,uo=class extends Ot{constructor(e=new bt,t=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)co.fromBufferAttribute(t,s-1),ho.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=co.distanceTo(ho);e.setAttribute("lineDistance",new nt(i,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;su.copy(s).invert(),hr.copy(e.ray).applyMatrix4(su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){let m=h.getX(x),y=h.getX(x+1),b=Ba(this,e,hr,c,m,y,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Ba(this,e,hr,c,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){let m=Ba(this,e,hr,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ba(this,e,hr,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};au=new F,ou=new F,Tr=class extends uo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)au.fromBufferAttribute(t,s),ou.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+au.distanceTo(ou);e.setAttribute("lineDistance",new nt(i,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fs=class extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lu=new Et,mc=new Ns,za=new Bi,ka=new F,Er=class extends Ot{constructor(e=new bt,t=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;lu.copy(s).invert(),mc.copy(e.ray).applyMatrix4(lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=l.getX(p);ka.fromBufferAttribute(d,g),cu(ka,g,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)ka.fromBufferAttribute(d,p),cu(ka,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ar=class extends cn{constructor(e=[],t=os,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rr=class extends cn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class extends cn{constructor(e,t,i=Gn,s,r,a,o=Jt,c=Jt,l,h=pi,d=1){if(h!==pi&&h!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cr=class extends gi{constructor(e,t=Gn,i=os,s,r,a=Jt,o=Jt,c,l=pi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pr=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hn=class n extends bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function p(x,g,m,y,b,v,E,T,_,w,D){let R=v/_,C=E/w,z=v/2,$=E/2,I=T/2,W=_+1,U=w+1,O=0,J=0,L=new F;for(let k=0;k<U;k++){let H=k*C-$;for(let G=0;G<W;G++){let he=G*R-z;L[x]=he*y,L[g]=H*b,L[m]=I,l.push(L.x,L.y,L.z),L[x]=0,L[g]=0,L[m]=T>0?1:-1,h.push(L.x,L.y,L.z),d.push(G/_),d.push(1-k/w),O+=1}}for(let k=0;k<w;k++)for(let H=0;H<_;H++){let G=u+H+W*k,he=u+H+W*(k+1),Z=u+(H+1)+W*(k+1),ce=u+(H+1)+W*k;c.push(G,he,ce),c.push(he,Z,ce),J+=6}o.addGroup(f,J,D),f+=J,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ir=class n extends bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new F,h=new Re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$t=class n extends bt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=i/2,m=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function y(){let v=new F,E=new F,T=0,_=(t-e)/i;for(let w=0;w<=r;w++){let D=[],R=w/r,C=R*(t-e)+e;for(let z=0;z<=s;z++){let $=z/s,I=$*c+o,W=Math.sin(I),U=Math.cos(I);E.x=C*W,E.y=-R*i+g,E.z=C*U,d.push(E.x,E.y,E.z),v.set(W,_,U).normalize(),u.push(v.x,v.y,v.z),f.push($,1-R),D.push(p++)}x.push(D)}for(let w=0;w<s;w++)for(let D=0;D<r;D++){let R=x[D][w],C=x[D+1][w],z=x[D+1][w+1],$=x[D][w+1];(e>0||D!==0)&&(h.push(R,C,$),T+=3),(t>0||D!==r-1)&&(h.push(C,z,$),T+=3)}l.addGroup(m,T,0),m+=T}function b(v){let E=p,T=new Re,_=new F,w=0,D=v===!0?e:t,R=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;let C=p;for(let z=0;z<=s;z++){let I=z/s*c+o,W=Math.cos(I),U=Math.sin(I);_.x=D*U,_.y=g*R,_.z=D*W,d.push(_.x,_.y,_.z),u.push(0,R,0),T.x=W*.5+.5,T.y=U*.5*R+.5,f.push(T.x,T.y),p++}for(let z=0;z<s;z++){let $=E+z,I=C+z;v===!0?h.push(I,I+1,$):h.push(I+1,I,$),w+=3}l.addGroup(m,w,v===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ts=class n extends $t{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fo=class n extends bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new F,v=new F,E=new F;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],v),f(t[T+2],E),c(b,v,E,y)}function c(y,b,v,E){let T=E+1,_=[];for(let w=0;w<=T;w++){_[w]=[];let D=y.clone().lerp(v,w/T),R=b.clone().lerp(v,w/T),C=T-w;for(let z=0;z<=C;z++)z===0&&w===T?_[w][z]=D:_[w][z]=D.clone().lerp(R,z/C)}for(let w=0;w<T;w++)for(let D=0;D<2*(T-w)-1;D++){let R=Math.floor(D/2);D%2===0?(u(_[w][R+1]),u(_[w+1][R]),u(_[w][R])):(u(_[w][R+1]),u(_[w+1][R+1]),u(_[w+1][R]))}}function l(y){let b=new F;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(y),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){let y=new F;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let v=g(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;a.push(v,1-E)}p(),d()}function d(){for(let y=0;y<a.length;y+=6){let b=a[y+0],v=a[y+2],E=a[y+4],T=Math.max(b,v,E),_=Math.min(b,v,E);T>.9&&_<.1&&(b<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,b){let v=y*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function p(){let y=new F,b=new F,v=new F,E=new F,T=new Re,_=new Re,w=new Re;for(let D=0,R=0;D<r.length;D+=9,R+=6){y.set(r[D+0],r[D+1],r[D+2]),b.set(r[D+3],r[D+4],r[D+5]),v.set(r[D+6],r[D+7],r[D+8]),T.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),w.set(a[R+4],a[R+5]),E.copy(y).add(b).add(v).divideScalar(3);let C=g(E);x(T,R+0,y,C),x(_,R+2,b,C),x(w,R+4,v,C)}}function x(y,b,v,E){E<0&&y.x===1&&(a[b]=y.x-1),v.x===0&&v.z===0&&(a[b]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},_i=class n extends fo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Re:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new F,s=[],r=[],a=[],o=new F,c=new Et;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Os=class extends xn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},po=class extends Os{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};hu=new F,uu=new F,oc=new $c,lc=new $c,cc=new $c,mo=class extends xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(uu.subVectors(s[0],s[1]).add(s[0]),l=uu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),oc.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,x,g),lc.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,x,g),cc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),lc.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),cc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(oc.calc(c),lc.calc(c),cc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Lr=class extends xn{constructor(e=new Re,t=new Re,i=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Re){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(pr(e,s.x,r.x,a.x,o.x),pr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},go=class extends xn{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(pr(e,s.x,r.x,a.x,o.x),pr(e,s.y,r.y,a.y,o.y),pr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dr=class extends xn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends xn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends xn{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(fr(e,s.x,r.x,a.x),fr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends xn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(fr(e,s.x,r.x,a.x),fr(e,s.y,r.y,a.y),fr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(du(o,c.x,l.x,h.x,d.x),du(o,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Re().fromArray(s))}return this}},gc=Object.freeze({__proto__:null,ArcCurve:po,CatmullRomCurve3:mo,CubicBezierCurve:Lr,CubicBezierCurve3:go,EllipseCurve:Os,LineCurve:Dr,LineCurve3:_o,QuadraticBezierCurve:Nr,QuadraticBezierCurve3:xo,SplineCurve:Ur}),yo=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new gc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Fr=class extends yo{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Dr(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Nr(this.currentPoint.clone(),new Re(e,t),new Re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Lr(this.currentPoint.clone(),new Re(e,t),new Re(i,s),new Re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ur(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new Os(e,t,i,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ei=class extends Fr{constructor(e){super(e),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Fr().fromJSON(s))}return this}};yc=class{static triangulate(e,t,i=2){return Mp(e,t,i)}},$n=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];pu(e),mu(i,e);let a=e.length;t.forEach(pu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,mu(i,t[c]);let o=yc.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};kr=class n extends bt{constructor(e=new ei([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Bp,b,v=!1,E,T,_,w;if(m){b=m.getSpacedPoints(h),v=!0,u=!1;let X=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,X),T=new F,_=new F,w=new F}u||(g=0,f=0,p=0,x=0);let D=o.extractPoints(l),R=D.shape,C=D.holes;if(!$n.isClockWise(R)){R=R.reverse();for(let X=0,oe=C.length;X<oe;X++){let le=C[X];$n.isClockWise(le)&&(C[X]=le.reverse())}}function $(X){let le=10000000000000001e-36,ue=X[0];for(let me=1;me<=X.length;me++){let Ge=me%X.length,Te=X[Ge],rt=Te.x-ue.x,Ke=Te.y-ue.y,lt=rt*rt+Ke*Ke,B=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(ue.x),Math.abs(ue.y)),ie=le*B*B;if(lt<=ie){X.splice(Ge,1),me--;continue}ue=Te}}$(R),C.forEach($);let I=C.length,W=R;for(let X=0;X<I;X++){let oe=C[X];R=R.concat(oe)}function U(X,oe,le){return oe||je("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(oe,le)}let O=R.length;function J(X,oe,le){let ue,me,Ge,Te=X.x-oe.x,rt=X.y-oe.y,Ke=le.x-X.x,lt=le.y-X.y,B=Te*Te+rt*rt,ie=Te*lt-rt*Ke;if(Math.abs(ie)>Number.EPSILON){let at=Math.sqrt(B),ht=Math.sqrt(Ke*Ke+lt*lt),Me=oe.x-rt/at,Tt=oe.y+Te/at,Ve=le.x-lt/ht,Ze=le.y+Ke/ht,A=((Ve-Me)*lt-(Ze-Tt)*Ke)/(Te*lt-rt*Ke);ue=Me+Te*A-X.x,me=Tt+rt*A-X.y;let M=ue*ue+me*me;if(M<=2)return new Re(ue,me);Ge=Math.sqrt(M/2)}else{let at=!1;Te>Number.EPSILON?Ke>Number.EPSILON&&(at=!0):Te<-Number.EPSILON?Ke<-Number.EPSILON&&(at=!0):Math.sign(rt)===Math.sign(lt)&&(at=!0),at?(ue=-rt,me=Te,Ge=Math.sqrt(B)):(ue=Te,me=rt,Ge=Math.sqrt(B/2))}return new Re(ue/Ge,me/Ge)}let L=[];for(let X=0,oe=W.length,le=oe-1,ue=X+1;X<oe;X++,le++,ue++)le===oe&&(le=0),ue===oe&&(ue=0),L[X]=J(W[X],W[le],W[ue]);let k=[],H,G=L.concat();for(let X=0,oe=I;X<oe;X++){let le=C[X];H=[];for(let ue=0,me=le.length,Ge=me-1,Te=ue+1;ue<me;ue++,Ge++,Te++)Ge===me&&(Ge=0),Te===me&&(Te=0),H[ue]=J(le[ue],le[Ge],le[Te]);k.push(H),G=G.concat(H)}let he;if(g===0)he=$n.triangulateShape(W,C);else{let X=[],oe=[];for(let le=0;le<g;le++){let ue=le/g,me=f*Math.cos(ue*Math.PI/2),Ge=p*Math.sin(ue*Math.PI/2)+x;for(let Te=0,rt=W.length;Te<rt;Te++){let Ke=U(W[Te],L[Te],Ge);we(Ke.x,Ke.y,-me),ue===0&&X.push(Ke)}for(let Te=0,rt=I;Te<rt;Te++){let Ke=C[Te];H=k[Te];let lt=[];for(let B=0,ie=Ke.length;B<ie;B++){let at=U(Ke[B],H[B],Ge);we(at.x,at.y,-me),ue===0&&lt.push(at)}ue===0&&oe.push(lt)}}he=$n.triangulateShape(X,oe)}let Z=he.length,ce=p+x;for(let X=0;X<O;X++){let oe=u?U(R[X],G[X],ce):R[X];v?(_.copy(E.normals[0]).multiplyScalar(oe.x),T.copy(E.binormals[0]).multiplyScalar(oe.y),w.copy(b[0]).add(_).add(T),we(w.x,w.y,w.z)):we(oe.x,oe.y,0)}for(let X=1;X<=h;X++)for(let oe=0;oe<O;oe++){let le=u?U(R[oe],G[oe],ce):R[oe];v?(_.copy(E.normals[X]).multiplyScalar(le.x),T.copy(E.binormals[X]).multiplyScalar(le.y),w.copy(b[X]).add(_).add(T),we(w.x,w.y,w.z)):we(le.x,le.y,d/h*X)}for(let X=g-1;X>=0;X--){let oe=X/g,le=f*Math.cos(oe*Math.PI/2),ue=p*Math.sin(oe*Math.PI/2)+x;for(let me=0,Ge=W.length;me<Ge;me++){let Te=U(W[me],L[me],ue);we(Te.x,Te.y,d+le)}for(let me=0,Ge=C.length;me<Ge;me++){let Te=C[me];H=k[me];for(let rt=0,Ke=Te.length;rt<Ke;rt++){let lt=U(Te[rt],H[rt],ue);v?we(lt.x,lt.y+b[h-1].y,b[h-1].x+le):we(lt.x,lt.y,d+le)}}}_e(),pe();function _e(){let X=s.length/3;if(u){let oe=0,le=O*oe;for(let ue=0;ue<Z;ue++){let me=he[ue];We(me[2]+le,me[1]+le,me[0]+le)}oe=h+g*2,le=O*oe;for(let ue=0;ue<Z;ue++){let me=he[ue];We(me[0]+le,me[1]+le,me[2]+le)}}else{for(let oe=0;oe<Z;oe++){let le=he[oe];We(le[2],le[1],le[0])}for(let oe=0;oe<Z;oe++){let le=he[oe];We(le[0]+O*h,le[1]+O*h,le[2]+O*h)}}i.addGroup(X,s.length/3-X,0)}function pe(){let X=s.length/3,oe=0;ae(W,oe),oe+=W.length;for(let le=0,ue=C.length;le<ue;le++){let me=C[le];ae(me,oe),oe+=me.length}i.addGroup(X,s.length/3-X,1)}function ae(X,oe){let le=X.length;for(;--le>=0;){let ue=le,me=le-1;me<0&&(me=X.length-1);for(let Ge=0,Te=h+g*2;Ge<Te;Ge++){let rt=O*Ge,Ke=O*(Ge+1),lt=oe+ue+rt,B=oe+me+rt,ie=oe+me+Ke,at=oe+ue+Ke;xe(lt,B,ie,at)}}}function we(X,oe,le){c.push(X),c.push(oe),c.push(le)}function We(X,oe,le){De(X),De(oe),De(le);let ue=s.length/3,me=y.generateTopUV(i,s,ue-3,ue-2,ue-1);Ne(me[0]),Ne(me[1]),Ne(me[2])}function xe(X,oe,le,ue){De(X),De(oe),De(ue),De(oe),De(le),De(ue);let me=s.length/3,Ge=y.generateSideWallUV(i,s,me-6,me-3,me-2,me-1);Ne(Ge[0]),Ne(Ge[1]),Ne(Ge[3]),Ne(Ge[1]),Ne(Ge[2]),Ne(Ge[3])}function De(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function Ne(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return zp(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gc[s.type]().fromJSON(s)),new n(i,e.options)}},Bp={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new Re(r,a),new Re(o,c),new Re(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Re(a,1-c),new Re(l,1-d),new Re(u,1-p),new Re(x,1-m)]:[new Re(o,1-c),new Re(h,1-d),new Re(f,1-p),new Re(g,1-m)]}};Hr=class n extends bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*u-a;for(let b=0;b<l;b++){let v=b*d-r;p.push(v,-y,0),x.push(0,0,1),g.push(b/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){let b=y+l*m,v=y+l*(m+1),E=y+1+l*(m+1),T=y+1+l*m;f.push(b,v,T),f.push(v,E,T)}this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},is=class n extends bt{constructor(e=new ei([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(a,2));function l(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;$n.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];$n.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=$n.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){let y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],b=y[0]+d,v=y[1]+d,E=y[2]+d;i.push(b,v,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return kp(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};xi=class n extends bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new F,u=new F,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],b=m/i,v=a+b*o,E=e*Math.cos(v),T=Math.sqrt(e*e-E*E),_=0;m===0&&a===0?_=.5/t:m===i&&c===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let D=w/t,R=s+D*r;d.x=-T*Math.cos(R),d.y=E,d.z=T*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(D+_,1-b),y.push(l++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let b=h[m][y+1],v=h[m][y],E=h[m+1][y],T=h[m+1][y+1];(m!==0||a>0)&&f.push(b,v,T),(m!==i-1||c<Math.PI)&&f.push(v,E,T)}this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},zs=class n extends bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new F,f=new F,p=new F;for(let x=0;x<=i;x++){let g=a+x/i*o;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,v=(s+1)*x+g;c.push(m,y,v),c.push(y,b,v)}this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};dd={clone:cs,merge:an},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(s.value);break;case"v2":this.uniforms[i].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new it().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vo=class extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},un=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mo=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},So=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bo=class extends ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fc:r=e,o=2*t-i;break;case pc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fc:a=e,c=2*i-t;break;case pc:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,b=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+y*a[l+E]+b*a[c+E]+v*a[d+E];return r}},wo=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},To=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Eo=class extends ki{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-t)/(s-t),x=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[l+p],g=a[c+p],m=f*u+p*2,y=d[m],b=d[m+1],v=e*u+p*2,E=h[v],T=h[v+1],_=Xp(i,t,y,E,s);r[p]=fd(_,x,b,T,g)}return r}};yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Va(e.settings)&&(i.settings={inTangents:Ts(e.settings.inTangents,Array),outTangents:Ts(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Eo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break;case uc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Va(this.settings)&&(_u(this.settings.inTangents,e),_u(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Va(this.settings)&&(xu(this.settings.inTangents,e),xu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){je("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&qf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Va(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=no;Hi=class extends yn{constructor(e,t,i){super(e,t,i)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=mr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;Ao=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Ao.prototype.ValueTypeName="color";Ro=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Ro.prototype.ValueTypeName="number";Co=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)jn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Gr=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;Gi=class extends yn{constructor(e,t,i){super(e,t,i)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=mr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;Po=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Po.prototype.ValueTypeName="vector";Io=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pd=new Io,Lo=class{constructor(e){this.manager=e!==void 0?e:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";Vr=class extends Ot{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wr=class extends Vr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hc=new Et,yu=new F,vu=new F,Do=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wa=new F,Xa=new jn,Zn=new F,Xr=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wa,Xa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wa,Xa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new F,Mu=new Re,Su=new Re,on=class extends Xr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qr=class extends Xr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vc=class extends Do{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new vc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Es=-90,As=1,ks=class extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Es,As,e,t);s.layers=this.layers,this.add(s);let r=new on(Es,As,e,t);r.layers=this.layers,this.add(r);let a=new on(Es,As,e,t);a.layers=this.layers,this.add(a);let o=new on(Es,As,e,t);o.layers=this.layers,this.add(o);let c=new on(Es,As,e,t);c.layers=this.layers,this.add(c);let l=new on(Es,As,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},No=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},jc="\\[\\]\\.:\\/",qp=new RegExp("["+jc+"]","g"),Qc="[^"+jc+"]",Yp="[^"+jc.replace("\\.","")+"]",Zp=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Jp=/(WCOD+)?/.source.replace("WCOD",Yp),$p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),jp=new RegExp("^"+Zp+Jp+$p+Kp+"$"),Qp=["material","materials","bones","map"],Mc=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qp,"")}static parseTrackName(e){let t=jp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Mc;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Ky=new Float32Array(1),rh=class rh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};rh.prototype.isMatrix2=!0;Sc=rh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Fd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function nm(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function Og(n,e,t,i,s,r){let a=new Je(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=e.get(b,v)}return b}function p(y){let b=!1,v=f(y);v===null?g(a,o):v&&v.isColor&&(g(v,1),b=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,b){let v=f(b);v&&v.isCubeTexture?(l===void 0&&(l=new Bt(new hn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:cs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Od),l.material.toneMapped=pt.getTransfer(v.colorSpace)!==vt,(h!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Bt(new Hr(2,2),new ti({name:"BackgroundMaterial",uniforms:cs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,b){y.getRGB(Sl,Kc(n)),t.buffers.color.setClear(Sl.r,Sl.g,Sl.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:x,dispose:m}}function Bg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(C,z,$,I,W){let U=!1,O=d(C,I,$,z);r!==O&&(r=O,l(r.object)),U=f(C,I,$,W),U&&p(C,I,$,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,v(C,z,$,I),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function d(C,z,$,I){let W=I.wireframe===!0,U=i[z.id];U===void 0&&(U={},i[z.id]=U);let O=C.isInstancedMesh===!0?C.id:0,J=U[O];J===void 0&&(J={},U[O]=J);let L=J[$.id];L===void 0&&(L={},J[$.id]=L);let k=L[W];return k===void 0&&(k=u(c()),L[W]=k),k}function u(C){let z=[],$=[],I=[];for(let W=0;W<t;W++)z[W]=0,$[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:I,object:C,attributes:{},index:null}}function f(C,z,$,I){let W=r.attributes,U=z.attributes,O=0,J=$.getAttributes();for(let L in J)if(J[L].location>=0){let H=W[L],G=U[L];if(G===void 0&&(L==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),L==="instanceColor"&&C.instanceColor&&(G=C.instanceColor)),H===void 0||H.attribute!==G||G&&H.data!==G.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function p(C,z,$,I){let W={},U=z.attributes,O=0,J=$.getAttributes();for(let L in J)if(J[L].location>=0){let H=U[L];H===void 0&&(L==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),L==="instanceColor"&&C.instanceColor&&(H=C.instanceColor));let G={};G.attribute=H,H&&H.data&&(G.data=H.data),W[L]=G,O++}r.attributes=W,r.attributesNum=O,r.index=I}function x(){let C=r.newAttributes;for(let z=0,$=C.length;z<$;z++)C[z]=0}function g(C){m(C,0)}function m(C,z){let $=r.newAttributes,I=r.enabledAttributes,W=r.attributeDivisors;$[C]=1,I[C]===0&&(n.enableVertexAttribArray(C),I[C]=1),W[C]!==z&&(n.vertexAttribDivisor(C,z),W[C]=z)}function y(){let C=r.newAttributes,z=r.enabledAttributes;for(let $=0,I=z.length;$<I;$++)z[$]!==C[$]&&(n.disableVertexAttribArray($),z[$]=0)}function b(C,z,$,I,W,U,O){O===!0?n.vertexAttribIPointer(C,z,$,W,U):n.vertexAttribPointer(C,z,$,I,W,U)}function v(C,z,$,I){x();let W=I.attributes,U=$.getAttributes(),O=z.defaultAttributeValues;for(let J in U){let L=U[J];if(L.location>=0){let k=W[J];if(k===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){let H=k.normalized,G=k.itemSize,he=e.get(k);if(he===void 0)continue;let Z=he.buffer,ce=he.type,_e=he.bytesPerElement,pe=ce===n.INT||ce===n.UNSIGNED_INT||k.gpuType===zo;if(k.isInterleavedBufferAttribute){let ae=k.data,we=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,We=k.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let xe=0;xe<L.locationSize;xe++)m(L.location+xe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<L.locationSize;xe++)g(L.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let xe=0;xe<L.locationSize;xe++)b(L.location+xe,G/L.locationSize,ce,H,we*_e,(We+G/L.locationSize*xe)*_e,pe)}else{if(k.isInstancedBufferAttribute){for(let ae=0;ae<L.locationSize;ae++)m(L.location+ae,k.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ae=0;ae<L.locationSize;ae++)g(L.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let ae=0;ae<L.locationSize;ae++)b(L.location+ae,G/L.locationSize,ce,H,G*_e,G/L.locationSize*ae*_e,pe)}}else if(O!==void 0){let H=O[J];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(L.location,H);break;case 3:n.vertexAttrib3fv(L.location,H);break;case 4:n.vertexAttrib4fv(L.location,H);break;default:n.vertexAttrib1fv(L.location,H)}}}}y()}function E(){D();for(let C in i){let z=i[C];for(let $ in z){let I=z[$];for(let W in I){let U=I[W];for(let O in U)h(U[O].object),delete U[O];delete I[W]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;let z=i[C.id];for(let $ in z){let I=z[$];for(let W in I){let U=I[W];for(let O in U)h(U[O].object),delete U[O];delete I[W]}}delete i[C.id]}function _(C){for(let z in i){let $=i[z];for(let I in $){let W=$[I];if(W[C.id]===void 0)continue;let U=W[C.id];for(let O in U)h(U[O].object),delete U[O];delete W[C.id]}}}function w(C){for(let z in i){let $=i[z],I=C.isInstancedMesh===!0?C.id:0,W=$[I];if(W!==void 0){for(let U in W){let O=W[U];for(let J in O)h(O[J].object),delete O[J];delete W[U]}delete $[I],Object.keys($).length===0&&delete i[z]}}}function D(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function zg(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Xn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==pn&&_!==Vn&&!w&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ye("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:E,samples:T}}function Hg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Hn,o=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let y=r?0:i,b=y*4,v=m.clippingState||null;c.value=v,v=h(p,u,b,f);for(let E=0;E!==b;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,v=f;b!==x;++b,v+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function gd(n,e,t){return new sa(n,{minFilter:yi,generateMipmaps:e,type:Wn,colorSpace:gr,depthBuffer:t})}function ra(n,e,t){return new ti({name:n,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:en,blending:rs,depthTest:!1,depthWrite:!1})}function Yg(){return ra("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bd}u

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
	`)}function Zg(){return ra("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zd}},`

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
	`)}function Jg(){return ra("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vg}
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
	`)}function _d(){return ra("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function xd(){return ra("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $g(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Fo||f===Oo)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new sa(p.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Fo||f===Oo,x=f===os||f===Vs;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new wl(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&c(y)?(i===null&&(i=new wl(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Fo?u.mapping=os:f===Oo&&(u.mapping=Vs),u}function c(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Kg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&dr("WebGLRenderer: "+i+" extension not supported."),s}}}function jg(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let g in x)e.update(x[g],n.ARRAY_BUFFER)}function d(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,b=g.count>=65535?wr:br,v=new b(Math.ceil(y/3)*6,1),E=v.array;if(x!==null){let _=x.array;m=x.version;for(let w=0,D=0;w<y;w+=3){let R=_[w+0],C=_[w+1],z=_[w+2];E[D++]=R,E[D++]=C,E[D++]=C,E[D++]=z,E[D++]=z,E[D++]=R}}else{m=g.version;for(let _=0,w=0;_<y;_+=3){let D=_+0,R=_+1,C=_+2;E[w++]=D,E[w++]=R,E[w++]=R,E[w++]=C,E[w++]=C,E[w++]=D}}v.version=m;let T=r.get(p);T&&e.remove(T),r.set(p,v)}function u(p){let x=r.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function Qg(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function l(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function e_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function t_(n,e,t){let i=new WeakMap,s=new Pt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let D=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let v=o.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*d),_=new yr(T,v,E,d);_.type=Vn,_.needsUpdate=!0;let w=b*4;for(let R=0;R<d;R++){let C=g[R],z=m[R],$=y[R],I=v*E*4*R;for(let W=0;W<C.count;W++){let U=W*w;f===!0&&(s.fromBufferAttribute(C,W),T[I+U+0]=s.x,T[I+U+1]=s.y,T[I+U+2]=s.z,T[I+U+3]=0),p===!0&&(s.fromBufferAttribute(z,W),T[I+U+4]=s.x,T[I+U+5]=s.y,T[I+U+6]=s.z,T[I+U+7]=0),x===!0&&(s.fromBufferAttribute($,W),T[I+U+8]=s.x,T[I+U+9]=s.y,T[I+U+10]=s.z,T[I+U+11]=$.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Re(v,E)},i.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function n_(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function s_(n,e,t,i,s,r){let a=new _n(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new bt;h.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new nt([0,2,0,0,2,0],2));let d=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Bt(h,d),f=new qr(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,y=null,b=[],v=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),c!==null&&c.setSize(E,T);for(let _=0;_<b.length;_++){let w=b[_];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){b=E,v=b.length>0&&b[0].isRenderPass===!0;let T=a.width,_=a.height;b.length>0&&o===null&&(o=new _n(T,_,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(T,_,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&b.some(D=>D.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&l===null&&(l=new gi(T,_),r===!0&&(l.format=vi,l.type=ls)),a.dispose(),a.depthTexture=w?l:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let D=0;D<b.length;D++){let R=b[D];R.setSize&&R.setSize(T,_),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(E,T){if(g||E.toneMapping===ni&&b.length===0)return!1;if(y=T,T!==null){let _=T.width,w=T.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return v===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=ni,!0},this.hasRenderPass=function(){return v},this.end=function(E,T){E.toneMapping=m,g=!0;let _=a,w=o;for(let D=0;D<b.length;D++){let R=b[D];R.enabled!==!1&&(R.render(E,w,_,T),R.needsSwap!==!1&&(_=w,w=w===o?c:o))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,d.defines={},pt.getTransfer(p)===vt&&(d.defines.SRGB_TRANSFER="");let D=i_[x];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(y),E.render(u,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}function Ys(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function o_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function l_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function c_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;bd.set(i),n.uniformMatrix2fv(this.addr,!1,bd),Wt(t,i)}}function h_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Sd.set(i),n.uniformMatrix3fv(this.addr,!1,Sd),Wt(t,i)}}function u_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Md.set(i),n.uniformMatrix4fv(this.addr,!1,Md),Wt(t,i)}}function d_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function m_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function g_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function Al(n){return n.version===0&&(n.compareFunction=qc,n.needsUpdate=!0),n}function v_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Al(Hd):r=kd,t.setTexture2D(e||r,s)}function M_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wd,s)}function S_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Al(Gd):r=Xd,t.setTextureCube(e||r,s)}function b_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Vd,s)}function w_(n){switch(n){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function T_(n,e){n.uniform1fv(this.addr,e)}function E_(n,e){let t=Ys(e,this.size,2);n.uniform2fv(this.addr,t)}function A_(n,e){let t=Ys(e,this.size,3);n.uniform3fv(this.addr,t)}function R_(n,e){let t=Ys(e,this.size,4);n.uniform4fv(this.addr,t)}function C_(n,e){let t=Ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P_(n,e){let t=Ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I_(n,e){let t=Ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L_(n,e){n.uniform1iv(this.addr,e)}function D_(n,e){n.uniform2iv(this.addr,e)}function N_(n,e){n.uniform3iv(this.addr,e)}function U_(n,e){n.uniform4iv(this.addr,e)}function F_(n,e){n.uniform1uiv(this.addr,e)}function O_(n,e){n.uniform2uiv(this.addr,e)}function B_(n,e){n.uniform3uiv(this.addr,e)}function z_(n,e){n.uniform4uiv(this.addr,e)}function k_(n,e,t){let i=this.cache,s=e.length,r=El(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Al(Hd):a=kd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function H_(n,e,t){let i=this.cache,s=e.length,r=El(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wd,r[a])}function G_(n,e,t){let i=this.cache,s=e.length,r=El(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Al(Gd):a=Xd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function V_(n,e,t){let i=this.cache,s=e.length,r=El(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vd,r[a])}function W_(n){switch(n){case 5126:return T_;case 35664:return E_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return V_}}function wd(n,e){n.seq.push(e),n.map[e.id]=e}function X_(n,e,t){let i=n.name,s=i.length;for(oh.lastIndex=0;;){let r=oh.exec(i),a=oh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){wd(t,l===void 0?new ch(o,n,e):new hh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new uh(o),wd(t,d)),t=d}}}function Td(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Z_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function J_(n){pt._getMatrix(Ed,pt.workingColorSpace,n);let e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case _r:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ad(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Z_(n.getShaderSource(e),o)}else return r}function $_(n,e){let t=J_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function j_(n,e){let t=K_[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q_(){pt.getLuminanceCoefficients(bl);let n=bl.x.toFixed(4),e=bl.y.toFixed(4),t=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function tx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ia(n){return n!==""}function Rd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Cd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function dh(n){return n.replace(ix,sx)}function sx(n,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return dh(t)}function Pd(n){return n.replace(rx,ax)}function ax(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Id(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function lx(n){return ox[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function hx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function dx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ux[n.combine]||"ENVMAP_BLENDING_NONE"}function fx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=lx(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=hx(t),d=dx(t),u=ex(t),f=tx(r),p=s.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ia).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ia).join(`
`),g.length>0&&(g+=`
`)):(x=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),g=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ot.tonemapping_pars_fragment:"",t.toneMapping!==ni?j_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,$_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=dh(a),a=Rd(a,t),a=Cd(a,t),o=dh(o),o=Rd(o,t),o=Cd(o,t),a=Pd(a),o=Pd(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+x+a,b=m+g+o,v=Td(s,s.VERTEX_SHADER,y),E=Td(s,s.FRAGMENT_SHADER,b);s.attachShader(p,v),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(R){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(v)||"",$=s.getShaderInfoLog(E)||"",I=C.trim(),W=z.trim(),U=$.trim(),O=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,E);else{let L=Ad(s,v,"vertex"),k=Ad(s,E,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+L+`
`+k)}else I!==""?Ye("WebGLProgram: Program Info Log:",I):(W===""||U==="")&&(J=!1);J&&(R.diagnostics={runnable:O,programLog:I,vertexShader:{log:W,prefix:x},fragmentShader:{log:U,prefix:g}})}s.deleteShader(v),s.deleteShader(E),_=new qs(s,p),w=nx(s,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,q_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}function mx(n){return n===Wi||n===ea||n===ta}function gx(n,e,t,i,s,r){let a=new vr,o=new fh,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,w,D,R,C,z){let $=R.fog,I=C.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||W,U),J=u[_.type],L=i.precision;_.precision!==null&&(L=i.getMaxPrecision(_.precision),L!==_.precision&&Ye("WebGLProgram.getParameters:",_.precision,"not supported, using",L,"instead."));let k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,H=k!==void 0?k.length:0,G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let he,Z,ce,_e;if(J){let Pe=si[J];he=Pe.vertexShader,Z=Pe.fragmentShader}else{he=_.vertexShader,Z=_.fragmentShader;let Pe=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,Pe,xt),ce=Pe.id,_e=xt.id}let pe=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),we=C.isInstancedMesh===!0,We=C.isBatchedMesh===!0,xe=!!_.map,De=!!_.matcap,Ne=!!O,X=Ne&&O.isPMREMTexture===!0,oe=!!_.aoMap,le=!!_.lightMap,ue=!!_.bumpMap&&_.wireframe===!1,me=!!_.normalMap,Ge=!!_.displacementMap,Te=!!_.emissiveMap,rt=!!_.metalnessMap,Ke=!!_.roughnessMap,lt=_.anisotropy>0,B=_.clearcoat>0,ie=_.diffuseRoughness>0,at=_.dispersion>0,ht=_.retroreflectivity>0,Me=_.iridescence>0,Tt=_.sheen>0,Ve=_.transmission>0,Ze=lt&&!!_.anisotropyMap,A=B&&!!_.clearcoatMap,M=B&&!!_.clearcoatNormalMap,q=B&&!!_.clearcoatRoughnessMap,de=ie&&!!_.diffuseRoughnessMap,se=Me&&!!_.iridescenceMap,ye=Me&&!!_.iridescenceThicknessMap,re=Tt&&!!_.sheenColorMap,j=Tt&&!!_.sheenRoughnessMap,ee=!!_.specularMap,Se=!!_.specularColorMap,P=!!_.specularIntensityMap,ne=Ve&&!!_.transmissionMap,Q=Ve&&!!_.thicknessMap,Ee=!!_.gradientMap,ge=!!_.alphaMap,ve=_.alphaTest>0,ze=!!_.alphaHash,Qe=!!_.extensions,fe=ni;_.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(fe=n.toneMapping);let He=X?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,et={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:he,fragmentShader:Z,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:L,batching:We,batchingColor:We&&C._colorsTexture!==null,instancing:we,instancingColor:we&&C.instanceColor!==null,instancingMorph:we&&C.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:xe,matcap:De,envMap:Ne,envMapMode:Ne&&O.mapping,envMapPMREM:X,envMapMaxLod:X?He.length-1:null,envMapSize:X?He[0].width:null,aoMap:oe,lightMap:le,bumpMap:ue,normalMap:me,displacementMap:Ge,emissiveMap:Te,normalMapObjectSpace:me&&_.normalMapType===Zu,normalMapTangentSpace:me&&_.normalMapType===Ml,packedNormalMap:me&&_.normalMapType===Ml&&mx(_.normalMap.format),metalnessMap:rt,roughnessMap:Ke,anisotropy:lt,anisotropyMap:Ze,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:q,diffuseRoughness:ie,diffuseRoughnessMap:de,dispersion:at,retroreflection:ht,iridescence:Me,iridescenceMap:se,iridescenceThicknessMap:ye,sheen:Tt,sheenColorMap:re,sheenRoughnessMap:j,specularMap:ee,specularColorMap:Se,specularIntensityMap:P,transmission:Ve,transmissionMap:ne,thicknessMap:Q,gradientMap:Ee,opaque:_.transparent===!1&&_.blending===Gs&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:ve,alphaHash:ze,combine:_.combine,mapUv:xe&&f(_.map.channel),aoMapUv:oe&&f(_.aoMap.channel),lightMapUv:le&&f(_.lightMap.channel),bumpMapUv:ue&&f(_.bumpMap.channel),normalMapUv:me&&f(_.normalMap.channel),displacementMapUv:Ge&&f(_.displacementMap.channel),emissiveMapUv:Te&&f(_.emissiveMap.channel),metalnessMapUv:rt&&f(_.metalnessMap.channel),roughnessMapUv:Ke&&f(_.roughnessMap.channel),anisotropyMapUv:Ze&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:re&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(_.sheenRoughnessMap.channel),specularMapUv:ee&&f(_.specularMap.channel),specularColorMapUv:Se&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:ne&&f(_.transmissionMap.channel),thicknessMapUv:Q&&f(_.thicknessMap.channel),alphaMapUv:ge&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(me||lt),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(xe||ge),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:G,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:Te&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Kt,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&_.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(g(w,_),m(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function g(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function m(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let w=u[_.type],D;if(w){let R=si[w];D=dd.clone(R.uniforms)}else D=_.uniforms;return D}function b(_,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new fx(n,w,_,s),l.push(D),h.set(w,D)),D}function v(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:E,programs:l,dispose:T}}function _x(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function xx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},n[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=m),e++,y}function c(u,f,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let b=o(u,f,p,x,g,m);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(u,f,p,x,g,m){let y=o(u,f,p,x,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||xx),i.length>1&&i.sort(f||Ld),s.length>1&&s.sort(f||Ld)}function d(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function yx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Dd,n.set(i,[a])):s>=r.length?(a=new Dd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function vx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Je};break;case"SpotLight":t={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Mx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function bx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wx(n){let e=new vx,t=Mx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let s=new F,r=new Et,a=new Et;function o(l){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,b=0,v=0,E=0,T=0,_=0,w=0,D=0,R=0;l.sort(bx);for(let z=0,$=l.length;z<$;z++){let I=l[z],W=I.color,U=I.intensity,O=I.distance,J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Wi?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=W.r*U,d+=W.g*U,u+=W.b*U;else if(I.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(I.sh.coefficients[L],U);R++}else if(I.isSunLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,H=t.get(I);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[p]=H,i.sunShadowMap[p]=J;let G=k.getViewportCount();for(let he=0;he<G;he++)i.sunShadowMatrix[x+he]=k.getMatrix(he),i.sunShadowCascade[x+he]=k._cascadeData[he];x+=G,p++}i.sun[f]=L,f++}else if(I.isDirectionalLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,H=t.get(I);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=I.shadow.matrix,E++}i.directional[g]=L,g++}else if(I.isSpotLight){let L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(W).multiplyScalar(U),L.distance=O,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,i.spot[y]=L;let k=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,k.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[y]=k.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=J,_++}y++}else if(I.isRectAreaLight){let L=e.get(I);L.color.copy(W).multiplyScalar(U),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=L,b++}else if(I.isPointLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){let k=I.shadow,H=t.get(I);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=I.shadow.matrix,T++}i.point[m]=L,m++}else if(I.isHemisphereLight){let L=e.get(I);L.skyColor.copy(I.color).multiplyScalar(U),L.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[v]=L,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;(C.sunLength!==f||C.directionalLength!==g||C.pointLength!==m||C.spotLength!==y||C.rectAreaLength!==b||C.hemiLength!==v||C.numSunShadows!==p||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==_||C.numSpotMaps!==w||C.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=y,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,C.sunLength=f,C.directionalLength=g,C.pointLength=m,C.spotLength=y,C.rectAreaLength=b,C.hemiLength=v,C.numSunShadows=p,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=_,C.numSpotMaps=w,C.numLightProbes=R,i.version=Sx++)}function c(l,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,b=l.length;y<b;y++){let v=l[y];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(v.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:i}}function Nd(n){let e=new wx(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Tx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Nd(n),e.set(s,[o])):r>=a.length?(o=new Nd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Px(n,e,t){let i=new zi,s=new Re,r=new Re,a=new Pt,o=new Mo,c=new So,l={},h=t.maxTextureSize,d={[Vi]:en,[en]:Vi,[Kt]:Kt},u=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Ex,fragmentShader:Ax}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new bt;p.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Bt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let m=this.type;this.render=function(T,_,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Tu&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let D=n.getRenderTarget(),R=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(rs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let $=m!==this.type;$&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(W=>W.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,W=T.length;I<W;I++){let U=T[I],O=U.shadow;if(O===void 0){Ye("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let J=O.getFrameExtents();s.multiply(J),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,O.mapSize.y=r.y));let L=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=L,O.map===null||$===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Hs){if(U.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new _n(s.x,s.y,{format:Wi,type:Wn,minFilter:ln,magFilter:ln,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new gi(s.x,s.y,Vn),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=pi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Jt,O.map.depthTexture.magFilter=Jt}else U.isPointLight?(O.map=new sa(s.x),O.map.depthTexture=new Cr(s.x,Gn)):(O.map=new _n(s.x,s.y),O.map.depthTexture=new gi(s.x,s.y,Gn)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=pi,this.type===ss?(O.map.depthTexture.compareFunction=L?Xc:Wc,O.map.depthTexture.minFilter=ln,O.map.depthTexture.magFilter=ln):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Jt,O.map.depthTexture.magFilter=Jt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let k=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,w);let H=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:w.layers;for(let G=0;G<k;G++){let he=O.getCamera(G);if(U.isPointLight){let Z=O.camera,ce=O.matrix,_e=U.distance||Z.far;_e!==Z.far&&(Z.far=_e,Z.updateProjectionMatrix()),na.setFromMatrixPosition(U.matrixWorld),Z.position.copy(na),lh.copy(Z.position),lh.add(Rx[G]),Z.up.copy(Cx[G]),Z.lookAt(lh),Z.updateMatrixWorld(),ce.makeTranslation(-na.x,-na.y,-na.z),Ud.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ud,Z.coordinateSystem,Z.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,G),n.clear();else{G===0&&(n.setRenderTarget(O.map),n.clear());let Z=O.getViewport(G);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),z.viewport(a)}i=O.getFrustum(G),v(_,w,he,U,H,this.type)}O.isPointLightShadow!==!0&&this.type===Hs&&y(O,w),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(D,R,C)};function y(T,_){let w=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new _n(s.x,s.y,{format:Wi,type:Wn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,w,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,w,f,x,null)}function b(T,_,w,D){let R=null,C=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)R=C;else if(R=w.isPointLight===!0?c:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=R.uuid,$=_.uuid,I=l[z];I===void 0&&(I={},l[z]=I);let W=I[$];W===void 0&&(W=R.clone(),I[$]=W,_.addEventListener("dispose",E)),R=W}if(R.visible=_.visible,R.wireframe=_.wireframe,D===Hs?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=n.properties.get(R);z.light=w}return R}function v(T,_,w,D,R,C){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Hs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let I=e.update(T),W=T.material;if(Array.isArray(W)){let U=I.groups;for(let O=0,J=U.length;O<J;O++){let L=U[O],k=W[L.materialIndex];if(k&&k.visible){let H=b(T,k,D,C);T.onBeforeShadow(n,T,_,w,I,H,L),n.renderBufferDirect(w,null,I,H,T,L),T.onAfterShadow(n,T,_,w,I,H,L)}}}else if(W.visible){let U=b(T,W,D,C);T.onBeforeShadow(n,T,_,w,I,U,null),n.renderBufferDirect(w,null,I,U,T,null),T.onAfterShadow(n,T,_,w,I,U,null)}}let $=T.children;for(let I=0,W=$.length;I<W;I++)v($[I],_,w,D,R,C)}function E(T){T.target.removeEventListener("dispose",E);for(let w in l){let D=l[w],R=T.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function Ix(n,e){function t(){let P=!1,ne=new Pt,Q=null,Ee=new Pt(0,0,0,0);return{setMask:function(ge){Q!==ge&&!P&&(n.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){P=ge},setClear:function(ge,ve,ze,Qe,fe){fe===!0&&(ge*=Qe,ve*=Qe,ze*=Qe),ne.set(ge,ve,ze,Qe),Ee.equals(ne)===!1&&(n.clearColor(ge,ve,ze,Qe),Ee.copy(ne))},reset:function(){P=!1,Q=null,Ee.set(-1,0,0,0)}}}function i(){let P=!1,ne=!1,Q=null,Ee=null,ge=null;return{setReversed:function(ve){if(ne!==ve){let ze=e.get("EXT_clip_control");ve?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ne=ve;let Qe=ge;ge=null,this.setClear(Qe)}},getReversed:function(){return ne},setTest:function(ve){ve?ae(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ve){Q!==ve&&!P&&(n.depthMask(ve),Q=ve)},setFunc:function(ve){if(ne&&(ve=rd[ve]),Ee!==ve){switch(ve){case Za:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case Ka:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=ve}},setLocked:function(ve){P=ve},setClear:function(ve){ge!==ve&&(ge=ve,ne&&(ve=1-ve),n.clearDepth(ve))},reset:function(){P=!1,Q=null,Ee=null,ge=null,ne=!1}}}function s(){let P=!1,ne=null,Q=null,Ee=null,ge=null,ve=null,ze=null,Qe=null,fe=null;return{setTest:function(He){P||(He?ae(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(He){ne!==He&&!P&&(n.stencilMask(He),ne=He)},setFunc:function(He,et,Pe){(Q!==He||Ee!==et||ge!==Pe)&&(n.stencilFunc(He,et,Pe),Q=He,Ee=et,ge=Pe)},setOp:function(He,et,Pe){(ve!==He||ze!==et||Qe!==Pe)&&(n.stencilOp(He,et,Pe),ve=He,ze=et,Qe=Pe)},setLocked:function(He){P=He},setClear:function(He){fe!==He&&(n.clearStencil(He),fe=He)},reset:function(){P=!1,ne=null,Q=null,Ee=null,ge=null,ve=null,ze=null,Qe=null,fe=null}}}let r=new t,a=new i,o=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,b=null,v=null,E=null,T=null,_=null,w=new Je(0,0,0),D=0,R=!1,C=null,z=null,$=null,I=null,W=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,J=0,L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(L)[1]),O=J>=1):L.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),O=J>=2);let k=null,H={},G=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Z=new Pt().fromArray(G),ce=new Pt().fromArray(he);function _e(P,ne,Q,Ee){let ge=new Uint8Array(4),ve=n.createTexture();n.bindTexture(P,ve),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<Q;ze++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ne+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ve}let pe={};pe[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(Cs),ue(!1),me(bc),ae(n.CULL_FACE),oe(rs);function ae(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function we(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function We(P,ne){return u[P]!==ne?(n.bindFramebuffer(P,ne),u[P]=ne,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function xe(P,ne){let Q=p,Ee=!1;if(P){Q=f.get(ne),Q===void 0&&(Q=[],f.set(ne,Q));let ge=P.textures;if(Q.length!==ge.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,ze=ge.length;ve<ze;ve++)Q[ve]=n.COLOR_ATTACHMENT0+ve;Q.length=ge.length,Ee=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(Q)}function De(P){return x!==P?(n.useProgram(P),x=P,!0):!1}let Ne={[as]:n.FUNC_ADD,[Au]:n.FUNC_SUBTRACT,[Ru]:n.FUNC_REVERSE_SUBTRACT};Ne[Cu]=n.MIN,Ne[Pu]=n.MAX;let X={[Iu]:n.ZERO,[Lu]:n.ONE,[Du]:n.SRC_COLOR,[Ac]:n.SRC_ALPHA,[zu]:n.SRC_ALPHA_SATURATE,[Ou]:n.DST_COLOR,[Uu]:n.DST_ALPHA,[Nu]:n.ONE_MINUS_SRC_COLOR,[Rc]:n.ONE_MINUS_SRC_ALPHA,[Bu]:n.ONE_MINUS_DST_COLOR,[Fu]:n.ONE_MINUS_DST_ALPHA,[ku]:n.CONSTANT_COLOR,[Hu]:n.ONE_MINUS_CONSTANT_COLOR,[Gu]:n.CONSTANT_ALPHA,[Vu]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(P,ne,Q,Ee,ge,ve,ze,Qe,fe,He){if(P===rs){g===!0&&(we(n.BLEND),g=!1);return}if(g===!1&&(ae(n.BLEND),g=!0),P!==Eu){if(P!==m||He!==R){if((y!==as||E!==as)&&(n.blendEquation(n.FUNC_ADD),y=as,E=as),He)switch(P){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFunc(n.ONE,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",P);break}else switch(P){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tc:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",P);break}b=null,v=null,T=null,_=null,w.set(0,0,0),D=0,m=P,R=He}return}ge=ge||ne,ve=ve||Q,ze=ze||Ee,(ne!==y||ge!==E)&&(n.blendEquationSeparate(Ne[ne],Ne[ge]),y=ne,E=ge),(Q!==b||Ee!==v||ve!==T||ze!==_)&&(n.blendFuncSeparate(X[Q],X[Ee],X[ve],X[ze]),b=Q,v=Ee,T=ve,_=ze),(Qe.equals(w)===!1||fe!==D)&&(n.blendColor(Qe.r,Qe.g,Qe.b,fe),w.copy(Qe),D=fe),m=P,R=!1}function le(P,ne){P.side===Kt?we(n.CULL_FACE):ae(n.CULL_FACE);let Q=P.side===en;ne&&(Q=!Q),ue(Q),P.blending===Gs&&P.transparent===!1?oe(rs):oe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Ee=P.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(P){C!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),C=P)}function me(P){P!==bu?(ae(n.CULL_FACE),P!==z&&(P===bc?n.cullFace(n.BACK):P===wu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),z=P}function Ge(P){P!==$&&(O&&n.lineWidth(P),$=P)}function Te(P,ne,Q){P?(ae(n.POLYGON_OFFSET_FILL),(I!==ne||W!==Q)&&(I=ne,W=Q,a.getReversed()&&(ne=-ne,Q=-Q),n.polygonOffset(ne,Q))):we(n.POLYGON_OFFSET_FILL)}function rt(P){P?ae(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Ke(P){P===void 0&&(P=n.TEXTURE0+U-1),k!==P&&(n.activeTexture(P),k=P)}function lt(P,ne,Q){Q===void 0&&(k===null?Q=n.TEXTURE0+U-1:Q=k);let Ee=H[Q];Ee===void 0&&(Ee={type:void 0,texture:void 0},H[Q]=Ee),(Ee.type!==P||Ee.texture!==ne)&&(k!==Q&&(n.activeTexture(Q),k=Q),n.bindTexture(P,ne||pe[P]),Ee.type=P,Ee.texture=ne)}function B(){let P=H[k];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ie(){try{n.compressedTexImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function at(){try{n.compressedTexImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function ht(){try{n.texSubImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function Me(){try{n.texSubImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function Tt(){try{n.compressedTexSubImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function Ze(){try{n.texStorage2D(...arguments)}catch(P){je("WebGLState:",P)}}function A(){try{n.texStorage3D(...arguments)}catch(P){je("WebGLState:",P)}}function M(){try{n.texImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function q(){try{n.texImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function de(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function se(P,ne){d[P]!==ne&&(n.pixelStorei(P,ne),d[P]=ne)}function ye(P){Z.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function re(P){ce.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function j(P,ne){let Q=l.get(ne);Q===void 0&&(Q=new WeakMap,l.set(ne,Q));let Ee=Q.get(P);Ee===void 0&&(Ee=n.getUniformBlockIndex(ne,P.name),n.uniformBlockBinding(ne,Ee,Ee),Q.set(P,Ee))}function ee(P,ne,Q){let ge=l.get(ne).get(P);c[ge]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ge,Q),c[ge]=Q)}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},k=null,H={},u={},c={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,b=null,v=null,E=null,T=null,_=null,w=new Je(0,0,0),D=0,R=!1,C=null,z=null,$=null,I=null,W=null,Z.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:we,bindFramebuffer:We,drawBuffers:xe,useProgram:De,setBlending:oe,setMaterial:le,setFlipSided:ue,setCullFace:me,setLineWidth:Ge,setPolygonOffset:Te,setScissorTest:rt,activeTexture:Ke,bindTexture:lt,unbindTexture:B,compressedTexImage2D:ie,compressedTexImage3D:at,texImage2D:M,texImage3D:q,pixelStorei:se,getParameter:de,updateUBOMapping:j,uniformBlockBinding:ee,texStorage2D:Ze,texStorage3D:A,texSubImage2D:ht,texSubImage3D:Me,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Ve,scissor:ye,viewport:re,reset:Se}}function Lx(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(A=>p.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return g?new OffscreenCanvas(A,M):xr("canvas")}function y(A,M,q){let de=1,se=Ze(A);if((se.width>q||se.height>q)&&(de=q/Math.max(se.width,se.height)),de<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ye=Math.floor(de*se.width),re=Math.floor(de*se.height);u===void 0&&(u=m(ye,re));let j=M?m(ye,re):u;return j.width=ye,j.height=re,j.getContext("2d").drawImage(A,0,0,ye,re),Ye("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ye+"x"+re+")."),j}else return"data"in A&&Ye("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function b(A){return A.generateMipmaps}function v(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,M,q,de,se,ye=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re;de&&(re=e.get("EXT_texture_norm16"),re||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===n.RED&&(q===n.FLOAT&&(j=n.R32F),q===n.HALF_FLOAT&&(j=n.R16F),q===n.UNSIGNED_BYTE&&(j=n.R8),q===n.UNSIGNED_SHORT&&re&&(j=re.R16_EXT),q===n.SHORT&&re&&(j=re.R16_SNORM_EXT)),M===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.R8UI),q===n.UNSIGNED_SHORT&&(j=n.R16UI),q===n.UNSIGNED_INT&&(j=n.R32UI),q===n.BYTE&&(j=n.R8I),q===n.SHORT&&(j=n.R16I),q===n.INT&&(j=n.R32I)),M===n.RG&&(q===n.FLOAT&&(j=n.RG32F),q===n.HALF_FLOAT&&(j=n.RG16F),q===n.UNSIGNED_BYTE&&(j=n.RG8),q===n.UNSIGNED_SHORT&&re&&(j=re.RG16_EXT),q===n.SHORT&&re&&(j=re.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RG8UI),q===n.UNSIGNED_SHORT&&(j=n.RG16UI),q===n.UNSIGNED_INT&&(j=n.RG32UI),q===n.BYTE&&(j=n.RG8I),q===n.SHORT&&(j=n.RG16I),q===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RGB8UI),q===n.UNSIGNED_SHORT&&(j=n.RGB16UI),q===n.UNSIGNED_INT&&(j=n.RGB32UI),q===n.BYTE&&(j=n.RGB8I),q===n.SHORT&&(j=n.RGB16I),q===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),q===n.UNSIGNED_INT&&(j=n.RGBA32UI),q===n.BYTE&&(j=n.RGBA8I),q===n.SHORT&&(j=n.RGBA16I),q===n.INT&&(j=n.RGBA32I)),M===n.RGB&&(q===n.UNSIGNED_SHORT&&re&&(j=re.RGB16_EXT),q===n.SHORT&&re&&(j=re.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),M===n.RGBA){let ee=ye?_r:pt.getTransfer(se);q===n.FLOAT&&(j=n.RGBA32F),q===n.HALF_FLOAT&&(j=n.RGBA16F),q===n.UNSIGNED_BYTE&&(j=ee===vt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&re&&(j=re.RGBA16_EXT),q===n.SHORT&&re&&(j=re.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(A,M){let q;return A?M===null||M===Gn||M===ls?q=n.DEPTH24_STENCIL8:M===Vn?q=n.DEPTH32F_STENCIL8:M===Ws&&(q=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===ls?q=n.DEPTH_COMPONENT24:M===Vn?q=n.DEPTH_COMPONENT32F:M===Ws&&(q=n.DEPTH_COMPONENT16),q}function w(A,M){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function D(A){let M=new WeakRef(A);i.get(A).__ref=M,p.add(M),x.register(A,M,M)}function R(A){let M=i.get(A).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function C(A){$(A.target)}function z(A){I(A.target)}function $(A){A.removeEventListener("dispose",C),R(A),U(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",z),R(A),J(A)}function W(){for(let A of p){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):$(M))}p.clear(),d.clear()}function U(A){let M=i.get(A);if(M.__webglInit===void 0)return;let q=A.source,de=f.get(q);if(de){let se=de[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(A),Object.keys(de).length===0&&f.delete(q)}i.remove(A)}function O(A){let M=i.get(A);n.deleteTexture(M.__webglTexture);let q=A.source,de=f.get(q);delete de[M.__cacheKey],a.memory.textures--}function J(A){let M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let q=A.depthTexture;if(q&&q.renderTarget===A&&$(q),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ye=0;ye<M.__webglFramebuffer[se].length;ye++)n.deleteFramebuffer(M.__webglFramebuffer[se][ye]);else n.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)n.deleteFramebuffer(M.__webglFramebuffer[se]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let de=A.textures;for(let se=0,ye=de.length;se<ye;se++){let re=i.get(de[se]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(de[se])}i.remove(A)}let L=0;function k(){L=0}function H(){return L}function G(A){L=A}function he(){let A=L;return A>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function Z(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ce(A,M){let q=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){let de=A.image;if(de===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{le(q,A,M);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+M)}function _e(A,M){let q=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){le(q,A,M);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+M)}function pe(A,M){let q=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){le(q,A,M);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+M)}function ae(A,M){let q=i.get(A);if(A.version>0&&q.__version!==A.version){ue(q,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+M)}let we={[es]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[to]:n.MIRRORED_REPEAT},We={[Jt]:n.NEAREST,[qu]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},xe={[$u]:n.NEVER,[qc]:n.ALWAYS,[Ku]:n.LESS,[Wc]:n.LEQUAL,[ju]:n.EQUAL,[Xc]:n.GEQUAL,[Qu]:n.GREATER,[ed]:n.NOTEQUAL};function De(A,M){if(M.type===Vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===Bo||M.magFilter===Jr||M.magFilter===yi||M.minFilter===ln||M.minFilter===Bo||M.minFilter===Jr||M.minFilter===yi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,we[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,we[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,we[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,We[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,We[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==Jr&&M.minFilter!==yi||M.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ne(A,M){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C),D(M));let de=M.source,se=f.get(de);se===void 0&&(se={},f.set(de,se));let ye=Z(M);if(ye!==A.__cacheKey){se[ye]===void 0&&(se[ye]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),se[ye].usedTimes++;let re=se[A.__cacheKey];re!==void 0&&(se[A.__cacheKey].usedTimes--,re.usedTimes===0&&O(M)),A.__cacheKey=ye,A.__webglTexture=se[ye].texture}return q}function X(A,M,q){return Math.floor(Math.floor(A/q)/M)}function oe(A,M,q,de){let ye=A.updateRanges;if(ye.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,q,de,M.data);else{ye.sort((P,ne)=>P.start-ne.start);let re=0;for(let P=1;P<ye.length;P++){let ne=ye[re],Q=ye[P],Ee=ne.start+ne.count,ge=X(Q.start,M.width,4),ve=X(ne.start,M.width,4);Q.start<=Ee+1&&ge===ve&&X(Q.start+Q.count-1,M.width,4)===ge?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++re,ye[re]=Q)}ye.length=re+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let P=0,ne=ye.length;P<ne;P++){let Q=ye[P],Ee=Math.floor(Q.start/4),ge=Math.ceil(Q.count/4),ve=Ee%M.width,ze=Math.floor(Ee/M.width),Qe=ge,fe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(n.TEXTURE_2D,0,ve,ze,Qe,fe,q,de,M.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function le(A,M,q){let de=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=n.TEXTURE_3D);let se=Ne(A,M),ye=M.source;t.bindTexture(de,A.__webglTexture,n.TEXTURE0+q);let re=i.get(ye);if(ye.version!==re.__version||se===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let fe=pt.getPrimaries(pt.workingColorSpace),He=M.colorSpace===Mi?null:pt.getPrimaries(M.colorSpace),et=M.colorSpace===Mi||fe===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=y(M.image,!1,s.maxTextureSize);ee=Ve(M,ee);let Se=r.convert(M.format,M.colorSpace),P=r.convert(M.type),ne=T(M.internalFormat,Se,P,M.normalized,M.colorSpace,M.isVideoTexture);De(de,M);let Q,Ee=M.mipmaps,ge=M.isVideoTexture!==!0,ve=re.__version===void 0||se===!0,ze=ye.dataReady,Qe=w(M,ee);if(M.isDepthTexture)ne=_(M.format===vi,M.type),ve&&(ge?t.texStorage2D(n.TEXTURE_2D,1,ne,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ne,ee.width,ee.height,0,Se,P,null));else if(M.isDataTexture)if(Ee.length>0){ge&&ve&&t.texStorage2D(n.TEXTURE_2D,Qe,ne,Ee[0].width,Ee[0].height);for(let fe=0,He=Ee.length;fe<He;fe++)Q=Ee[fe],ge?ze&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Q.width,Q.height,Se,P,Q.data):t.texImage2D(n.TEXTURE_2D,fe,ne,Q.width,Q.height,0,Se,P,Q.data);M.generateMipmaps=!1}else ge?(ve&&t.texStorage2D(n.TEXTURE_2D,Qe,ne,ee.width,ee.height),ze&&oe(M,ee,Se,P)):t.texImage2D(n.TEXTURE_2D,0,ne,ee.width,ee.height,0,Se,P,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ge&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,ne,Ee[0].width,Ee[0].height,ee.depth);for(let fe=0,He=Ee.length;fe<He;fe++)if(Q=Ee[fe],M.format!==Xn)if(Se!==null)if(ge){if(ze)if(M.layerUpdates.size>0){let et=eh(Q.width,Q.height,M.format,M.type);for(let Pe of M.layerUpdates){let xt=Q.data.subarray(Pe*et/Q.data.BYTES_PER_ELEMENT,(Pe+1)*et/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Pe,Q.width,Q.height,1,Se,xt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Q.width,Q.height,ee.depth,Se,Q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,ne,Q.width,Q.height,ee.depth,0,Q.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Q.width,Q.height,ee.depth,Se,P,Q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,ne,Q.width,Q.height,ee.depth,0,Se,P,Q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ge&&ve&&t.texStorage2D(n.TEXTURE_2D,Qe,ne,Ee[0].width,Ee[0].height);for(let fe=0,He=Ee.length;fe<He;fe++)Q=Ee[fe],M.format!==Xn?Se!==null?ge?ze&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Q.width,Q.height,Se,Q.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,ne,Q.width,Q.height,0,Q.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?ze&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Q.width,Q.height,Se,P,Q.data):t.texImage2D(n.TEXTURE_2D,fe,ne,Q.width,Q.height,0,Se,P,Q.data)}else if(M.isDataArrayTexture)if(ge){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,ne,ee.width,ee.height,ee.depth),ze)if(M.layerUpdates.size>0){let fe=eh(ee.width,ee.height,M.format,M.type);for(let He of M.layerUpdates){let et=ee.data.subarray(He*fe/ee.data.BYTES_PER_ELEMENT,(He+1)*fe/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,He,ee.width,ee.height,1,Se,P,et)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Se,P,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,ee.width,ee.height,ee.depth,0,Se,P,ee.data);else if(M.isData3DTexture)ge?(ve&&t.texStorage3D(n.TEXTURE_3D,Qe,ne,ee.width,ee.height,ee.depth),ze&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Se,P,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ne,ee.width,ee.height,ee.depth,0,Se,P,ee.data);else if(M.isFramebufferTexture){if(ve)if(ge)t.texStorage2D(n.TEXTURE_2D,Qe,ne,ee.width,ee.height);else{let fe=ee.width,He=ee.height;for(let et=0;et<Qe;et++)t.texImage2D(n.TEXTURE_2D,et,ne,fe,He,0,Se,P,null),fe>>=1,He>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let fe=n.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ee.parentNode!==fe){fe.appendChild(ee),d.add(M),fe.onpaint=He=>{let et=He.changedElements;for(let Pe of d)et.includes(Pe.image)&&(Pe.needsUpdate=!0)},fe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let et=n.RGBA,Pe=n.RGBA,xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,et,Pe,xt,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(ge&&ve){let fe=Ze(Ee[0]);t.texStorage2D(n.TEXTURE_2D,Qe,ne,fe.width,fe.height)}for(let fe=0,He=Ee.length;fe<He;fe++)Q=Ee[fe],ge?ze&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Se,P,Q):t.texImage2D(n.TEXTURE_2D,fe,ne,Se,P,Q);M.generateMipmaps=!1}else if(ge){if(ve){let fe=Ze(ee);t.texStorage2D(n.TEXTURE_2D,Qe,ne,fe.width,fe.height)}ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,P,ee)}else t.texImage2D(n.TEXTURE_2D,0,ne,Se,P,ee);b(M)&&M.mipmapsAutoUpdate===!0&&v(de),re.__version=ye.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ue(A,M,q){if(M.image.length!==6)return;let de=Ne(A,M),se=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+q);let ye=i.get(se);if(se.version!==ye.__version||de===!0){t.activeTexture(n.TEXTURE0+q);let re=pt.getPrimaries(pt.workingColorSpace),j=M.colorSpace===Mi?null:pt.getPrimaries(M.colorSpace),ee=M.colorSpace===Mi||re===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Se=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let Pe=0;Pe<6;Pe++)!Se&&!P?ne[Pe]=y(M.image[Pe],!0,s.maxCubemapSize):ne[Pe]=P?M.image[Pe].image:M.image[Pe],ne[Pe]=Ve(M,ne[Pe]);let Q=ne[0],Ee=r.convert(M.format,M.colorSpace),ge=r.convert(M.type),ve=T(M.internalFormat,Ee,ge,M.normalized,M.colorSpace),ze=M.isVideoTexture!==!0,Qe=ye.__version===void 0||de===!0,fe=se.dataReady,He=w(M,Q);De(n.TEXTURE_CUBE_MAP,M);let et;if(M.isDepthTexture){if(ve=_(M.format===vi,M.type),Qe)if(ze)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ve,Q.width,Q.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,Q.width,Q.height,0,Ee,ge,null)}else if(Se){ze&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,He,ve,Q.width,Q.height);for(let Pe=0;Pe<6;Pe++){et=ne[Pe].mipmaps;for(let xt=0;xt<et.length;xt++){let Nt=et[xt];M.format!==Xn?Ee!==null?ze?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt,0,0,Nt.width,Nt.height,Ee,Nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt,ve,Nt.width,Nt.height,0,Nt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt,0,0,Nt.width,Nt.height,Ee,ge,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt,ve,Nt.width,Nt.height,0,Ee,ge,Nt.data)}}}else{if(et=M.mipmaps,ze&&Qe){et.length>0&&He++;let Pe=Ze(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,He,ve,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(P){ze?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ne[Pe].width,ne[Pe].height,Ee,ge,ne[Pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,ne[Pe].width,ne[Pe].height,0,Ee,ge,ne[Pe].data);for(let xt=0;xt<et.length;xt++){let Ln=et[xt].image[Pe].image;ze?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt+1,0,0,Ln.width,Ln.height,Ee,ge,Ln.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt+1,ve,Ln.width,Ln.height,0,Ee,ge,Ln.data)}}else{ze?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Ee,ge,ne[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ve,Ee,ge,ne[Pe]);for(let xt=0;xt<et.length;xt++){let Nt=et[xt];ze?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt+1,0,0,Ee,ge,Nt.image[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt+1,ve,Ee,ge,Nt.image[Pe])}}}b(M)&&M.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),ye.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function me(A,M,q,de,se,ye){let re=r.convert(q.format,q.colorSpace),j=r.convert(q.type),ee=T(q.internalFormat,re,j,q.normalized,q.colorSpace),Se=i.get(M),P=i.get(q);if(P.__renderTarget=M,!Se.__hasExternalTextures){let ne=Math.max(1,M.width>>ye),Q=Math.max(1,M.height>>ye);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ye,ee,ne,Q,M.depth,0,re,j,null):t.texImage2D(se,ye,ee,ne,Q,0,re,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,se,P.__webglTexture,0,ht(M)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,se,P.__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(A,M,q){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){let de=M.depthTexture,se=de&&de.isDepthTexture?de.type:null,ye=_(M.stencilBuffer,se),re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Me(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(M),ye,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(M),ye,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ye,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,A)}else{let de=M.textures;for(let se=0;se<de.length;se++){let ye=de[se],re=r.convert(ye.format,ye.colorSpace),j=r.convert(ye.type),ee=T(ye.internalFormat,re,j,ye.normalized,ye.colorSpace);Me(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(M),ee,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(M),ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(A,M,q){let de=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=i.get(M.depthTexture);se.__renderTarget=M;let ye=de?M.depthTexture.image[0]:M.depthTexture.image;(!se.__webglTexture||ye.width!==M.width||ye.height!==M.height)&&(ye.width=M.width,ye.height=M.height,M.depthTexture.needsUpdate=!0),de?ae(M.depthTexture,0):ce(M.depthTexture,0);let re=se.__webglTexture,j=ht(M),ee=de?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,Se=M.depthTexture.format===vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===pi)Me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ee,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,Se,ee,re,0);else if(M.depthTexture.format===vi)Me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ee,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,Se,ee,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(A){let M=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let de=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){let se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",se)};de.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=de}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let de=0;de<6;de++)Te(M.__webglFramebuffer[de],A,de);else A.texture.mipmaps.length>0?Te(M.__webglFramebuffer[0],A,0):Te(M.__webglFramebuffer,A,0);else if(q){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=n.createRenderbuffer(),Ge(M.__webglDepthbuffer[de],A,!1);else{let se=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=M.__webglDepthbuffer[de];n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ye)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ge(M.__webglDepthbuffer,A,!1);else{let se=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ye)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(A,M,q){let de=i.get(A);M!==void 0&&me(de.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&rt(A)}function lt(A){let M=A.texture,q=i.get(A),de=i.get(M);A.addEventListener("dispose",z),D(A);let se=A.textures,ye=A.isWebGLCubeRenderTarget===!0,re=se.length>1;if(re||(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=M.version,a.memory.textures++),ye){q.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps.length>0){q.__webglFramebuffer[j]=[];for(let ee=0;ee<M.mipmaps.length;ee++)q.__webglFramebuffer[j][ee]=n.createFramebuffer()}else q.__webglFramebuffer[j]=n.createFramebuffer()}else{if(M.mipmaps.length>0){q.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)q.__webglFramebuffer[j]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(re)for(let j=0,ee=se.length;j<ee;j++){let Se=i.get(se[j]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Me(A)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let j=0;j<se.length;j++){let ee=se[j];q.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[j]);let Se=r.convert(ee.format,ee.colorSpace),P=r.convert(ee.type),ne=T(ee.internalFormat,Se,P,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),Q=ht(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,ne,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,q.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),De(n.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)me(q.__webglFramebuffer[j][ee],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else me(q.__webglFramebuffer[j],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);b(M)?v(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(re){for(let j=0,ee=se.length;j<ee;j++){let Se=se[j],P=i.get(Se),ne=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,P.__webglTexture),De(ne,Se),me(q.__webglFramebuffer,A,Se,n.COLOR_ATTACHMENT0+j,ne,0),b(Se)&&v(ne)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,de.__webglTexture),De(j,M),M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)me(q.__webglFramebuffer[ee],A,M,n.COLOR_ATTACHMENT0,j,ee);else me(q.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,j,0);b(M)?v(j):M.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&rt(A)}function B(A){let M=A.textures;for(let q=0,de=M.length;q<de;q++){let se=M[q];if(b(se)&&se.mipmapsAutoUpdate===!0){let ye=E(A),re=i.get(se).__webglTexture;t.bindTexture(ye,re),v(ye),t.unbindTexture()}}}let ie=[];function at(A){if(A.samples>0){if(Me(A)===!1){let M=A.textures,q=A.width,de=A.height,se=n.COLOR_BUFFER_BIT,ye=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(A),j=M.length>1;if(j)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[Se]);let P=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,q,de,0,0,q,de,se,n.NEAREST),c===!0&&(ie.length=0,ie.push(n.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ie.push(ye),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,re.__webglColorRenderbuffer[Se]);let P=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function Me(A){let M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ve(A,M){let q=A.colorSpace,de=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==gr&&q!==Mi&&(pt.getTransfer(q)===vt?(de!==Xn||se!==pn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",q)),M}function Ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=he,this.resetTextureUnits=k,this.getTextureUnits=H,this.setTextureUnits=G,this.setTexture2D=ce,this.setTexture2DArray=_e,this.setTexture3D=pe,this.setTextureCube=ae,this.rebindTextures=Ke,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Me,this.dispose=W}function Dx(n,e){function t(i,s=Mi){let r,a=pt.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===ko)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ho)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oc)return n.BYTE;if(i===Bc)return n.SHORT;if(i===Ws)return n.UNSIGNED_SHORT;if(i===zo)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===Hc)return n.ALPHA;if(i===Gc)return n.RGB;if(i===Xn)return n.RGBA;if(i===pi)return n.DEPTH_COMPONENT;if(i===vi)return n.DEPTH_STENCIL;if(i===Vc)return n.RED;if(i===Go)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===Vo)return n.RG_INTEGER;if(i===Wo)return n.RGBA_INTEGER;if(i===$r||i===Kr||i===jr||i===Qr)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===qo||i===Yo||i===Zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jo||i===$o||i===Ko||i===jo||i===Qo||i===ea||i===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jo||i===$o)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ko)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===jo)return r.COMPRESSED_R11_EAC;if(i===Qo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return r.COMPRESSED_RG11_EAC;if(i===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===al)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ml||i===gl||i===_l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ml)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===yl||i===ta||i===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function Ox(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Kc(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,b,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,y,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),b=y.envMap,v=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bx(n,e,t,i){let s={},r={};function a(y,b){let v=b.program;i.uniformBlockBinding(y,v,s[y.id])}function o(y,b){let v=s[y.id];v===void 0&&(p(y),v=c(y),s[y.id]=v,y.addEventListener("dispose",g));let E=b.program;i.updateUBOMapping(y,E);let T=e.render.frame;r[y.id]!==T&&(l(y),r[y.id]=T)}function c(y){let b=n.createBuffer(),v=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,v,E),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function l(y){let b=s[y.id],v=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,_=v.length;T<_;T++){let w=v[T];if(Array.isArray(w))for(let D=0,R=w.length;D<R;D++)h(w[D],T,D,E);else h(w,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,b,v,E){if(u(y,b,v,E)===!0){let T=y.__offset,_=y.value;if(Array.isArray(_)){let w=0;for(let D=0;D<_.length;D++){let R=_[D],C=x(R,!0);d(R,y.__data,w),w+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}function d(y,b,v){typeof y=="number"||typeof y=="boolean"?b[v]=y:y.isMatrix3?(b[v]=y.elements[0],b[v+1]=y.elements[1],b[v+2]=y.elements[2],b[v+3]=0,b[v+4]=y.elements[3],b[v+5]=y.elements[4],b[v+6]=y.elements[5],b[v+7]=0,b[v+8]=y.elements[6],b[v+9]=y.elements[7],b[v+10]=y.elements[8],b[v+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-v),v):y.toArray(b,v)}function u(y,b,v,E){let T=y.value,_=b+"_"+v;if(Array.isArray(T)){E[_]===void 0&&(E[_]=[]);let w=E[_],D=!1;for(let R=0;R<T.length;R++)f(T[R],w,R)===!0&&(D=!0);return D}return f(T,E,_)}function f(y,b,v){if(b[v]===void 0)return typeof y=="number"||typeof y=="boolean"?b[v]=y:ArrayBuffer.isView(y)?b[v]=y.slice():b[v]=y.clone(),!0;{let E=b[v];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return b[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let b=y.uniforms,v=0,E=16;for(let _=0,w=b.length;_<w;_++){let D=Array.isArray(b[_])?b[_]:[b[_]];for(let R=0,C=D.length;R<C;R++){let z=D[R],$=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(b[_])||Array.isArray(z.value),W=v;for(let O=0,J=$.length;O<J;O++){let L=$[O],k=x(L,I),H=v%E,G=H%k.boundary,he=H+G;v+=G,he!==0&&E-he<k.storage&&(v+=E-he),O===0&&(W=v),v+=k.storage}let U=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new U((v-W)/Float32Array.BYTES_PER_ELEMENT),z.__offset=W}}let T=v%E;return T>0&&(v+=E-T),y.__size=v,y.__cache={},this}function x(y,b){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(y){let b=y.target;b.removeEventListener("dispose",g),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:m}}function kx(){return ii===null&&(ii=new oo(zx,16,16,Wi,Wn),ii.name="DFG_LUT",ii.minFilter=ln,ii.magFilter=ln,ii.wrapS=Jn,ii.wrapT=Jn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var im,sm,rm,am,om,lm,cm,hm,um,dm,fm,pm,mm,gm,_m,xm,ym,vm,Mm,Sm,bm,wm,Tm,Em,Am,Rm,Cm,Pm,Im,Lm,Dm,Nm,Um,Fm,Om,Bm,zm,km,Hm,Gm,Vm,Wm,Xm,qm,Ym,Zm,Jm,$m,Km,jm,Qm,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,h0,u0,d0,f0,p0,m0,g0,_0,x0,y0,v0,M0,S0,b0,w0,T0,E0,A0,R0,C0,P0,I0,L0,D0,N0,U0,F0,O0,B0,z0,k0,H0,G0,V0,W0,X0,q0,Y0,Z0,J0,$0,K0,j0,Q0,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,yg,vg,Mg,Sg,bg,wg,Tg,Eg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ng,Ug,ot,Le,si,Sl,Fg,Od,sa,md,Gg,Vg,Bd,zd,Wg,Xg,qg,wl,i_,kd,Hd,Gd,Vd,Wd,Xd,yd,vd,Md,Sd,bd,ch,hh,uh,oh,qs,q_,Y_,Ed,K_,bl,ix,rx,ox,cx,ux,px,fh,ph,Sx,Ex,Ax,Rx,Cx,Ud,na,lh,Nx,Ux,mh,gh,Fx,qd,zx,ii,Tl,_h=oi(()=>{ah();ah();im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Em=`#define PI 3.141592653589793
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
} // validated`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,e0=`uniform sampler2D dfgLUT;
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
}`,t0=`
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
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
#endif`,_0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform float backgroundBlurriness;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Cg=`#define TOON
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
}`,Pg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:xm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:vm,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:wm,color_vertex:Tm,common:Em,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Zm,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:km,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Jm,lights_toon_pars_fragment:$m,lights_phong_fragment:Km,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:e0,lights_fragment_begin:t0,lights_fragment_maps:n0,lights_fragment_end:i0,lightprobes_pars_fragment:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:_0,morphtarget_pars_vertex:x0,morphtarget_vertex:y0,normal_fragment_begin:v0,normal_fragment_maps:M0,normal_pars_fragment:S0,normal_pars_vertex:b0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:P0,packing:I0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:N0,dithering_pars_fragment:U0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:z0,shadowmap_vertex:k0,shadowmask_pars_fragment:H0,skinbase_vertex:G0,skinning_pars_vertex:V0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:$0,transmission_pars_fragment:K0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:eg,worldpos_vertex:tg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distance_vert:hg,distance_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:_g,meshlambert_vert:xg,meshlambert_frag:yg,meshmatcap_vert:vg,meshmatcap_frag:Mg,meshnormal_vert:Sg,meshnormal_frag:bg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Eg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Pg,points_frag:Ig,shadow_vert:Lg,shadow_frag:Dg,sprite_vert:Ng,sprite_frag:Ug},Le={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},si={basic:{uniforms:an([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:an([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:an([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:an([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:an([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Je(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:an([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:an([Le.points,Le.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:an([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:an([Le.common,Le.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:an([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:an([Le.sprite,Le.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:an([Le.common,Le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:an([Le.lights,Le.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};si.physical={uniforms:an([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};Sl={r:0,b:0,g:0},Fg=new Et,Od=new it;Od.set(-1,0,0,0,1,0,0,0,1);sa=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ar(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:rs});r.uniforms.tEquirect.value=t;let a=new Bt(s,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=ln),new ks(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},md=256,Gg=3,Vg=20,Bd=256,zd=16,Wg=3,Xg=new F,qg=new Je,wl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ks(1,10,null),this._boxMesh=new Bt(new hn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Xg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(qg));let g=new ks(i,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(md,ad(e))}_fromTexture(e,t){e.mapping===os||e.mapping===Vs?this._setSize(e.image.length===0?md:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=gd(e,!1,!1),i=Math.log2(e)-Gg;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=gd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===os||e.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_d()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Yg(),this._integrationMaterial=Zg());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/zd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Wg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Bd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Jg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};i_={[Pc]:"LINEAR_TONE_MAPPING",[Ic]:"REINHARD_TONE_MAPPING",[Lc]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Uc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};kd=new cn,Hd=new gi(1,1),Gd=new Cr(1),Vd=new yr,Wd=new ao,Xd=new Ar,yd=[],vd=[],Md=new Float32Array(16),Sd=new Float32Array(9),bd=new Float32Array(4);ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w_(t.type)}},hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W_(t.type)}},uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},oh=/(\w+)(\])?(\[|\.)?/g;qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);X_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};q_=37297,Y_=0;Ed=new it;K_={[Pc]:"Linear",[Ic]:"Reinhard",[Lc]:"Cineon",[Zr]:"ACESFilmic",[Nc]:"AgX",[Uc]:"Neutral",[Dc]:"Custom"};bl=new F;ix=/^[ \t]*#include +<([\w\d./]+)>/gm;rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;ox={[ss]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};cx={[Vs]:"ENVMAP_MODE_REFRACTION"};ux={[Cc]:"ENVMAP_BLENDING_MULTIPLY",[Wu]:"ENVMAP_BLENDING_MIX",[Xu]:"ENVMAP_BLENDING_ADD"};px=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ph(e),t.set(e,i)),i}},ph=class{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}};Sx=0;Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`,Rx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Cx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ud=new Et,na=new F,lh=new F;Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Pr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ti({vertexShader:Nx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Kn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new mh,m={},y=t.getContextAttributes(),b=null,v=null,E=[],T=[],_=new Re,w=null,D=null,R=new on;R.viewport=new Pt;let C=new on;C.viewport=new Pt;let z=[R,C],$=new No,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=E[Z];return ce===void 0&&(ce=new Ds,E[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=E[Z];return ce===void 0&&(ce=new Ds,E[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=E[Z];return ce===void 0&&(ce=new Ds,E[Z]=ce),ce.getHandSpace()};function U(Z){let ce=T.indexOf(Z.inputSource);if(ce===-1)return;let _e=E[ce];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,l||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<E.length;Z++){let ce=T[Z];ce!==null&&(T[Z]=null,E[Z].disconnect(ce))}I=null,W=null,g.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(b),f=null,u=null,d=null,s=null,v=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),D!==null){let Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,pe=null,ae=null;y.depth&&(ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?vi:pi,pe=y.stencil?ls:Gn);let we={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(we),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new _n(u.textureWidth,u.textureHeight,{format:Xn,type:pn,depthTexture:new gi(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new _n(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Z){for(let ce=0;ce<Z.removed.length;ce++){let _e=Z.removed[ce],pe=T.indexOf(_e);pe>=0&&(T[pe]=null,E[pe].disconnect(_e))}for(let ce=0;ce<Z.added.length;ce++){let _e=Z.added[ce],pe=T.indexOf(_e);if(pe===-1){for(let we=0;we<E.length;we++)if(we>=T.length){T.push(_e),pe=we;break}else if(T[we]===null){T[we]=_e,pe=we;break}if(pe===-1)break}let ae=E[pe];ae&&ae.connect(_e)}}function L(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ce=Z.near,_e=Z.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),$.near=C.near=R.near=ce,$.far=C.far=R.far=_e,(I!==$.near||W!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),I=$.near,W=$.far),$.layers.mask=Z.layers.mask|6,R.layers.mask=$.layers.mask&-5,C.layers.mask=$.layers.mask&-3;let pe=Z.parent,ae=$.cameras;L($,pe);for(let we=0;we<ae.length;we++)L(ae[we],pe);$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),k(Z,$,pe)};function k(Z,ce,_e){_e===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=io*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(Z){return m[Z]};let H=null;function G(Z,ce){if(h=ce.getViewerPose(l||a),p=ce,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let pe=!1;_e.length!==$.cameras.length&&($.cameras.length=0,pe=!0);for(let xe=0;xe<_e.length;xe++){let De=_e[xe],Ne=null;if(f!==null)Ne=f.getViewport(De);else{let oe=d.getViewSubImage(u,De);Ne=oe.viewport,xe===0&&(e.setRenderTargetTextures(v,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(v))}let X=z[xe];X===void 0&&(X=new on,X.layers.enable(xe),X.viewport=new Pt,z[xe]=X),X.matrix.fromArray(De.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(De.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),xe===0&&($.matrix.copy(X.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),pe===!0&&$.cameras.push(X)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let xe=d.getDepthInformation(_e[0]);xe&&xe.isValid&&xe.texture&&g.init(xe,s.renderState)}if(ae&&ae.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let xe=0;xe<_e.length;xe++){let De=_e[xe].camera;if(De){let Ne=m[De];Ne||(Ne=new Pr,m[De]=Ne);let X=d.getCameraImage(De);Ne.sourceTexture=X}}}}for(let _e=0;_e<E.length;_e++){let pe=T[_e],ae=E[_e];pe!==null&&ae!==void 0&&ae.update(pe,ce,l||a)}H&&H(Z,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),p=null}let he=new Fd;he.setAnimationLoop(G),this.setAnimationLoop=function(Z){H=Z},this.dispose=function(){}}},Fx=new Et,qd=new it;qd.set(-1,0,0,0,1,0,0,0,1);zx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;Tl=class{constructor(e={}){let{canvas:t=nd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Wo,Vo,Go]),m=new Set([pn,Gn,Ws,ls,ko,Ho]),y=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,T=null,_=[],w=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,z=null,$=null,I=null,W=null;this._outputColorSpace=rn;let U=0,O=0,J=null,L=-1,k=null,H=new Pt,G=new Pt,he=null,Z=new Je(0),ce=0,_e=t.width,pe=t.height,ae=1,we=null,We=null,xe=new Pt(0,0,_e,pe),De=new Pt(0,0,_e,pe),Ne=!1,X=new zi,oe=new lo,le=!1,ue=!1,me=new Et,Ge=new F,Te=new Pt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function lt(){return J===null?ae:1}let B=i;function ie(S,N){return t.getContext(S,N)}let at,ht,Me,Tt,Ve,Ze,A,M,q,de,se,ye,re,j,ee,Se,P,ne,Q,Ee,ge,ve,ze;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),B===null){let N="webgl2";if(B=ie(N,S),B===null)throw ie(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(S){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),je("WebGLRenderer: "+S.message),S}function Qe(){at=new Kg(B),at.init(),ge=new Dx(B,at),ht=new kg(B,at,e,ge),Me=new Ix(B,at),ht.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),$=B.createFramebuffer(),I=B.createFramebuffer(),W=B.createFramebuffer(),Tt=new e_(B),Ve=new _x,Ze=new Lx(B,at,Me,Ve,ht,ge,Tt),A=new $g(R),M=new nm(B),ve=new Bg(B,M),q=new jg(B,M,Tt,ve),de=new n_(B,q,M,ve,Tt),ne=new t_(B,ht,Ze),ee=new Hg(Ve),se=new gx(R,A,at,ht,ve,ee),ye=new Ox(R,Ve),re=new yx,j=new Tx(at),P=new Og(R,A,Me,de,p,c),Se=new Px(R,de,ht),ze=new Bx(B,Tt,ht,Me),Q=new zg(B,at,Tt),Ee=new Qg(B,at,Tt),Tt.programs=se.programs,R.capabilities=ht,R.extensions=at,R.properties=Ve,R.renderLists=re,R.shadowMap=Se,R.state=Me,R.info=Tt}x!==pn&&(D=new s_(x,t.width,t.height,o,s,r));let fe=new gh(R,B);this.xr=fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=at.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=at.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(S){S!==void 0&&(ae=S,this.setSize(_e,pe,!1))},this.getSize=function(S){return S.set(_e,pe)},this.setSize=function(S,N,K=!0){if(fe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=S,pe=N,t.width=Math.floor(S*ae),t.height=Math.floor(N*ae),K===!0&&(t.style.width=S+"px",t.style.height=N+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(_e*ae,pe*ae).floor()},this.setDrawingBufferSize=function(S,N,K){_e=S,pe=N,ae=K,t.width=Math.floor(S*K),t.height=Math.floor(N*K),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===pn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(H)},this.getViewport=function(S){return S.copy(xe)},this.setViewport=function(S,N,K,V){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,N,K,V),Me.viewport(H.copy(xe).multiplyScalar(lt()).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,N,K,V){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,N,K,V),Me.scissor(G.copy(De).multiplyScalar(lt()).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(S){Me.setScissorTest(Ne=S)},this.setOpaqueSort=function(S){we=S},this.setTransparentSort=function(S){We=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,K=!0){let V=0;if(S){let Y=!1;if(J!==null){let Ce=J.texture.format;Y=g.has(Ce)}if(Y){let Ce=J.texture.type,Fe=m.has(Ce),Ae=P.getClearColor(),Ie=P.getClearAlpha(),ke=Ae.r,tt=Ae.g,ct=Ae.b;Fe?(y[0]=ke,y[1]=tt,y[2]=ct,y[3]=Ie,B.clearBufferuiv(B.COLOR,0,y)):(b[0]=ke,b[1]=tt,b[2]=ct,b[3]=Ie,B.clearBufferiv(B.COLOR,0,b))}else V|=B.COLOR_BUFFER_BIT}N&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),P.dispose(),re.dispose(),j.dispose(),Ze.dispose(),Ve.dispose(),A.dispose(),de.dispose(),q.dispose(),ve.dispose(),ze.dispose(),se.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ci),fe.removeEventListener("sessionend",Yi),dn.stop()};function He(S){S.preventDefault(),Zc("WebGLRenderer: Context Lost."),C=!0}function et(){Zc("WebGLRenderer: Context Restored."),C=!1;let S=Tt.autoReset,N=Se.enabled,K=Se.autoUpdate,V=Se.needsUpdate,Y=Se.type;Qe(),Tt.autoReset=S,Se.enabled=N,Se.autoUpdate=K,Se.needsUpdate=V,Se.type=Y}function Pe(S){je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function xt(S){let N=S.target;N.removeEventListener("dispose",xt),Nt(N)}function Nt(S){Ln(S),Ve.remove(S)}function Ln(S){let N=Ve.get(S).programs;N!==void 0&&(N.forEach(function(K){se.releaseProgram(K)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,K,V,Y,Ce){N===null&&(N=rt);let Fe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ae=er(S,N,K,V,Y);Me.setMaterial(V,Fe);let Ie=K.index,ke=1;if(V.wireframe===!0){if(Ie=q.getWireframeAttribute(K),Ie===void 0)return;ke=2}let tt=K.drawRange,ct=K.attributes.position,Oe=tt.start*ke,Xe=(tt.start+tt.count)*ke;Ce!==null&&(Oe=Math.max(Oe,Ce.start*ke),Xe=Math.min(Xe,(Ce.start+Ce.count)*ke)),Ie!==null?(Oe=Math.max(Oe,0),Xe=Math.min(Xe,Ie.count)):ct!=null&&(Oe=Math.max(Oe,0),Xe=Math.min(Xe,ct.count));let St=Xe-Oe;if(St<0||St===1/0)return;ve.setup(Y,V,Ae,K,Ie);let ft,yt=Q;if(Ie!==null&&(ft=M.get(Ie),yt=Ee,yt.setIndex(ft)),Y.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*lt()),yt.setMode(B.LINES)):yt.setMode(B.TRIANGLES);else if(Y.isLine){let qt=V.linewidth;qt===void 0&&(qt=1),Me.setLineWidth(qt*lt()),Y.isLineSegments?yt.setMode(B.LINES):Y.isLineLoop?yt.setMode(B.LINE_LOOP):yt.setMode(B.LINE_STRIP)}else Y.isPoints?yt.setMode(B.POINTS):Y.isSprite&&yt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(at.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let qt=Y._multiDrawStarts,Be=Y._multiDrawCounts,Ht=Y._multiDrawCount,_t=Ie?M.get(Ie).bytesPerElement:1,fn=Ve.get(V).currentProgram.getUniforms();for(let Gt=0;Gt<Ht;Gt++)fn.setValue(B,"_gl_DrawID",Gt),yt.render(qt[Gt]/_t,Be[Gt])}else if(Y.isInstancedMesh)yt.renderInstances(Oe,St,Y.count);else if(K.isInstancedBufferGeometry){let qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Be=Math.min(K.instanceCount,qt);yt.renderInstances(Oe,St,Be)}else yt.render(Oe,St)};function ua(S,N,K,V){z!==null&&S.isNodeMaterial&&z.setObject(V,S),le===!0&&ee.setState(S,K,!1),S.transparent===!0&&S.side===Kt&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,Nn(S,N,V),S.side=Vi,S.needsUpdate=!0,Nn(S,N,V),S.side=Kt):Nn(S,N,V)}this.compile=function(S,N,K=null){K===null&&(K=S),z!==null&&z.renderStart(S,N,K),T=j.get(K),T.init(N),w.push(T),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),S!==K&&S.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),ue=this.localClippingEnabled,le=ee.init(this.clippingPlanes,ue),le===!0&&ee.setGlobalState(this.clippingPlanes,N),z!==null&&Se.render(T.state.shadowsArray,K,N);let V=new Set;return S.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Fe=0;Fe<Ce.length;Fe++){let Ae=Ce[Fe];ua(Ae,K,N,Y),V.add(Ae)}else ua(Ce,K,N,Y),V.add(Ce)}),T=w.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(S,N,K=null){let V=this.compile(S,N,K);return new Promise(Y=>{function Ce(){if(V.forEach(function(Fe){let Ie=Ve.get(Fe).currentProgram;(Ie===void 0||Ie.isReady())&&V.delete(Fe)}),V.size===0){Y(S);return}setTimeout(Ce,10)}at.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let js=null;function da(S){js&&js(S)}function Ci(){dn.stop()}function Yi(){dn.start()}let dn=new Fd;dn.setAnimationLoop(da),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(S){js=S,fe.setAnimationLoop(S),S===null?dn.stop():dn.start()},fe.addEventListener("sessionstart",Ci),fe.addEventListener("sessionend",Yi),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;z!==null&&z.renderStart(S,N);let K=fe.enabled===!0&&fe.isPresenting===!0,V=D!==null&&(J===null||K)&&D.begin(R,J);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,J),T=j.get(S,w.length),T.init(N),T.state.textureUnits=Ze.getTextureUnits(),w.push(T),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?oe.setFromArrayCamera(N):X.setFromProjectionMatrix(me,wn,N.reversedDepth),ue=this.localClippingEnabled,le=ee.init(this.clippingPlanes,ue),E=re.get(S,_.length),E.init(),_.push(E),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){let Fe=R.xr.getDepthSensingMesh();Fe!==null&&Dn(Fe,N,-1/0,R.sortObjects)}Dn(S,N,0,R.sortObjects),E.finish(),z!==null&&z.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(we,We),Ke=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Ke&&P.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),le===!0&&ee.beginShadows();let Y=T.state.shadowsArray;if(Se.render(Y,S,N),le===!0&&ee.endShadows(),(V&&D.hasRenderPass())===!1){let Fe=E.opaque,Ae=E.transmissive;if(T.setupLights(),N.isArrayCamera){let Ie=N.cameras;if(Ae.length>0)for(let ke=0,tt=Ie.length;ke<tt;ke++){let ct=Ie[ke];Mn(Fe,Ae,S,ct)}Ke&&P.render(S);for(let ke=0,tt=Ie.length;ke<tt;ke++){let ct=Ie[ke];Pi(E,S,ct,ct.viewport)}}else Ae.length>0&&Mn(Fe,Ae,S,N),Ke&&P.render(S),Pi(E,S,N)}J!==null&&O===0&&(Ze.updateMultisampleRenderTarget(J),Ze.updateRenderTargetMipmap(J)),V&&D.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),ve.resetDefaultState(),L=-1,k=null,w.pop(),w.length>0?(T=w[w.length-1],Ze.setTextureUnits(T.state.textureUnits),le===!0&&ee.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,z!==null&&z.renderEnd()};function Dn(S,N,K,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){let Fe=N.isArrayCamera?oe:X;if(!S.frustumCulled||S.intersectsFrustum(Fe)){V&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);let Ae=de.update(S),Ie=S.material;Ie.visible&&E.push(S,Ae,Ie,K,Te.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){let Fe=N.isArrayCamera?oe:X;if(!S.frustumCulled||S.intersectsFrustum(Fe)){let Ae=de.update(S),Ie=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Te.copy(Ae.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Ie)){let ke=Ae.groups;for(let tt=0,ct=ke.length;tt<ct;tt++){let Oe=ke[tt],Xe=Ie[Oe.materialIndex];Xe&&Xe.visible&&E.push(S,Ae,Xe,K,Te.z,Oe,N)}}else Ie.visible&&E.push(S,Ae,Ie,K,Te.z,null,N)}}}let Ce=S.children;for(let Fe=0,Ae=Ce.length;Fe<Ae;Fe++)Dn(Ce[Fe],N,K,V)}function Pi(S,N,K,V){let{opaque:Y,transmissive:Ce,transparent:Fe}=S;T.setupLightsView(K),le===!0&&ee.setGlobalState(R.clippingPlanes,K),V&&Me.viewport(H.copy(V)),Y.length>0&&qn(Y,N,K),Ce.length>0&&qn(Ce,N,K),Fe.length>0&&qn(Fe,N,K),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Mn(S,N,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Oe=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new _n(1,1,{generateMipmaps:!0,type:Oe?Wn:pn,minFilter:yi,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Ce=T.state.transmissionRenderTarget[V.id],Fe=V.viewport||H;Ce.setSize(Fe.z*R.transmissionResolutionScale,Fe.w*R.transmissionResolutionScale);let Ae=R.getRenderTarget(),Ie=R.getActiveCubeFace(),ke=R.getActiveMipmapLevel();R.setRenderTarget(Ce),R.getClearColor(Z),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),Ke&&P.render(K);let tt=R.toneMapping;R.toneMapping=ni;let ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),le===!0&&ee.setGlobalState(R.clippingPlanes,V),qn(S,K,V),Ze.updateMultisampleRenderTarget(Ce),Ze.updateRenderTargetMipmap(Ce),at.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Xe=0,St=N.length;Xe<St;Xe++){let ft=N[Xe],{object:yt,geometry:qt,material:Be,group:Ht}=ft;if(Be.side===Kt&&yt.layers.test(V.layers)){let _t=Be.side;Be.side=en,Be.needsUpdate=!0,fa(yt,K,V,qt,Be,Ht),Be.side=_t,Be.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ze.updateMultisampleRenderTarget(Ce),Ze.updateRenderTargetMipmap(Ce))}R.setRenderTarget(Ae,Ie,ke),R.setClearColor(Z,ce),ct!==void 0&&(V.viewport=ct),R.toneMapping=tt}function qn(S,N,K){let V=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,Ce=S.length;Y<Ce;Y++){let Fe=S[Y],{object:Ae,geometry:Ie,group:ke}=Fe,tt=Fe.material;tt.allowOverride===!0&&V!==null&&(tt=V),Ae.layers.test(K.layers)&&fa(Ae,N,K,Ie,tt,ke)}}function fa(S,N,K,V,Y,Ce){z!==null&&Y.isNodeMaterial&&z.setObject(S,Y),S.onBeforeRender(R,N,K,V,Y,Ce),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(R,N,K,V,S,Ce),Y.transparent===!0&&Y.side===Kt&&Y.forceSinglePass===!1?(Y.side=en,Y.needsUpdate=!0,R.renderBufferDirect(K,N,V,Y,S,Ce),Y.side=Vi,Y.needsUpdate=!0,R.renderBufferDirect(K,N,V,Y,S,Ce),Y.side=Kt):R.renderBufferDirect(K,N,V,Y,S,Ce),S.onAfterRender(R,N,K,V,Y,Ce)}function Sn(S){let N=0;for(let K of S)K.texture!==null&&N++;return N}function Nn(S,N,K){N.isScene!==!0&&(N=rt);let V=Ve.get(S),Y=T.state.lights,Ce=T.state.shadowsArray,Fe=Y.state.version,Ae=se.getParameters(S,Y.state,Ce,N,K,T.state.lightProbeGridArray),Ie=se.getProgramCacheKey(Ae),ke=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let tt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=A.get(S.envMap||V.environment,tt),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",xt),ke=new Map,V.programs=ke,V.programVariants=new Map);let ct=ke.get(Ie);if(ct!==void 0){if(V.currentProgram===ct&&V.lightsStateVersion===Fe)return Ji(S,Ae),ct}else Ae.uniforms=se.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,K,Ae),S.onBeforeCompile(Ae,R),ct=se.acquireProgram(Ae,Ie),ke.set(Ie,ct),V.uniforms=Ae.uniforms;let Oe=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=ee.uniform),Ji(S,Ae),V.needsLights=ma(S),V.lightsStateVersion=Fe,V.needsLights&&(Oe.ambientLightColor.value=Y.state.ambient,Oe.lightProbe.value=Y.state.probe,Oe.sunLights.value=Y.state.sun,Oe.sunLightShadows.value=Y.state.sunShadow,Oe.directionalLights.value=Y.state.directional,Oe.directionalLightShadows.value=Y.state.directionalShadow,Oe.spotLights.value=Y.state.spot,Oe.spotLightShadows.value=Y.state.spotShadow,Oe.rectAreaLights.value=Y.state.rectArea,Oe.ltc_1.value=Y.state.rectAreaLTC1,Oe.ltc_2.value=Y.state.rectAreaLTC2,Oe.pointLights.value=Y.state.point,Oe.pointLightShadows.value=Y.state.pointShadow,Oe.hemisphereLights.value=Y.state.hemi,Oe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Oe.sunShadowCascade.value=Y.state.sunShadowCascade,Oe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Oe.spotLightMatrix.value=Y.state.spotLightMatrix,Oe.spotLightMap.value=Y.state.spotLightMap,Oe.pointShadowMatrix.value=Y.state.pointShadowMatrix),V.numLightProbeGrids=Sn(T.state.lightProbeGridArray),V.currentProgram=ct,V.uniformsList=null,ct}function Qs(S,N,K,V,Y){let Ce=Ve.get(S),Fe=Ce.currentProgram.id+","+V+","+Y,Ae=Ce.programVariants.get(Fe);return Ae===void 0?(Ae=Nn(S,N,K),Ce.programVariants.set(Fe,Ae)):(Ce.currentProgram=Ae,Ce.uniformsList=null,Ce.outputColorSpace=V,Ce.toneMapping=Y),Ae}function Zi(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=qs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ji(S,N){let K=Ve.get(S);K.outputColorSpace=N.outputColorSpace,K.batching=N.batching,K.batchingColor=N.batchingColor,K.instancing=N.instancing,K.instancingColor=N.instancingColor,K.instancingMorph=N.instancingMorph,K.skinning=N.skinning,K.morphTargets=N.morphTargets,K.morphNormals=N.morphNormals,K.morphColors=N.morphColors,K.morphTargetsCount=N.morphTargetsCount,K.numClippingPlanes=N.numClippingPlanes,K.numIntersection=N.numClipIntersection,K.vertexAlphas=N.vertexAlphas,K.vertexTangents=N.vertexTangents,K.toneMapping=N.toneMapping}function er(S,N,K,V,Y){N.isScene!==!0&&(N=rt),Ze.resetTextureUnits();let Ce=N.fog,Fe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,Ae=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:pt.workingColorSpace,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,ke=A.get(V.envMap||Fe,Ie),tt=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ct=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!K.morphAttributes.position,Xe=!!K.morphAttributes.normal,St=!!K.morphAttributes.color,ft=ni;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ft=R.toneMapping);let yt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,qt=yt!==void 0?yt.length:0,Be=Ve.get(V),Ht=T.state.lights;if(le===!0&&(ue===!0||S!==k)){let It=S===k&&V.id===L;ee.setState(V,S,It)}let _t=!1,fn=!1;V.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Ht.state.version||Y.isBatchedMesh&&Be.batching===!1||!Y.isBatchedMesh&&Be.batching===!0||Y.isBatchedMesh&&Be.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Be.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Be.instancing===!1||!Y.isInstancedMesh&&Be.instancing===!0||Y.isSkinnedMesh&&Be.skinning===!1||!Y.isSkinnedMesh&&Be.skinning===!0||Y.isInstancedMesh&&Be.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Be.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Be.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Be.instancingMorph===!1&&Y.morphTexture!==null||Be.envMap!==ke||V.fog===!0&&Be.fog!==Ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ee.numPlanes||Be.numIntersection!==ee.numIntersection)||Be.vertexAlphas!==tt||Be.vertexTangents!==ct||Be.morphTargets!==Oe||Be.morphNormals!==Xe||Be.morphColors!==St||Be.morphTargetsCount!==qt||Be.numLightProbeGrids!==Sn(T.state.lightProbeGridArray)?_t=!0:(Be.outputColorSpace!==Ae||Be.toneMapping!==ft)&&(fn=!0):(_t=!0,Be.__version=V.version);let Gt=Be.currentProgram;(_t===!0||fn===!0)&&(Gt=fn===!0?Qs(V,N,Y,Ae,ft):Nn(V,N,Y),z&&V.isNodeMaterial&&z.onUpdateProgram(V,Gt,Be));let ps=!1,Un=!1,Yn=!1,ut=Gt.getUniforms(),Ut=Be.uniforms;if(Me.useProgram(Gt.program)&&(ps=!0,Un=!0,Yn=!0),V.id!==L&&(L=V.id,Un=!0),ps||k!==S){Me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ut.setValue(B,"projectionMatrix",S.projectionMatrix),ut.setValue(B,"viewMatrix",S.matrixWorldInverse);let Yt=ut.map.cameraPosition;Yt!==void 0&&Yt.setValue(B,Ge.setFromMatrixPosition(S.matrixWorld)),ht.logarithmicDepthBuffer&&ut.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,Un=!0,Yn=!0)}if(Be.needsLights&&(Ht.state.sunShadowMap.length>0&&ut.setValue(B,"sunShadowMap",Ht.state.sunShadowMap,Ze),Ht.state.directionalShadowMap.length>0&&ut.setValue(B,"directionalShadowMap",Ht.state.directionalShadowMap,Ze),Ht.state.spotShadowMap.length>0&&ut.setValue(B,"spotShadowMap",Ht.state.spotShadowMap,Ze),Ht.state.pointShadowMap.length>0&&ut.setValue(B,"pointShadowMap",Ht.state.pointShadowMap,Ze)),Y.isSkinnedMesh){ut.setOptional(B,Y,"bindMatrix"),ut.setOptional(B,Y,"bindMatrixInverse");let It=Y.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(B,"boneTexture",It.boneTexture,Ze))}Y.isBatchedMesh&&(ut.setOptional(B,Y,"batchingTexture"),ut.setValue(B,"batchingTexture",Y._matricesTexture,Ze),ut.setOptional(B,Y,"batchingIdTexture"),ut.setValue(B,"batchingIdTexture",Y._indirectTexture,Ze),ut.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ut.setValue(B,"batchingColorTexture",Y._colorsTexture,Ze));let Fn=K.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&ne.update(Y,K,Gt),(Un||Be.receiveShadow!==Y.receiveShadow)&&(Be.receiveShadow=Y.receiveShadow,ut.setValue(B,"receiveShadow",Y.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Ut.envMapIntensity.value=N.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=kx()),Un){if(ut.setValue(B,"toneMappingExposure",R.toneMappingExposure),Be.needsLights&&pa(Ut,Yn),Ce&&V.fog===!0&&ye.refreshFogUniforms(Ut,Ce),ye.refreshMaterialUniforms(Ut,V,ae,pe,T.state.transmissionRenderTarget[S.id]),Be.needsLights&&Be.numLightProbeGrids>0){let It=v,Yt=0;for(let ai of T.state.lightProbeGridArray)ai.texture!==null&&(It.textures[Yt]=ai.texture,It.min[Yt]=ai.boundingBox.min,It.max[Yt]=ai.boundingBox.max,It.resolution[Yt]=ai.resolution,Yt++);for(let ai in It)It[ai].length=Yt;Ut.probesSH.value=It.textures,Ut.probesMin.value=It.min,Ut.probesMax.value=It.max,Ut.probesResolution.value=It.resolution}qs.upload(B,Zi(Be),Ut,Ze)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qs.upload(B,Zi(Be),Ut,Ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(B,"center",Y.center),ut.setValue(B,"modelViewMatrix",Y.modelViewMatrix),ut.setValue(B,"normalMatrix",Y.normalMatrix),ut.setValue(B,"modelMatrix",Y.matrixWorld),V.uniformsGroups!==void 0){let It=V.uniformsGroups;for(let Yt=0,ai=It.length;Yt<ai;Yt++){let Bh=It[Yt];ze.update(Bh,Gt),ze.bind(Bh,Gt)}}return Gt}function pa(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function ma(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(S,N,K){let V=Ve.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ve.get(S.texture).__webglTexture=N,Ve.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:K,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let K=Ve.get(S);K.__webglFramebuffer=N,K.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,K=0){J=S,U=N,O=K;let V=null,Y=!1,Ce=!1;if(S){let Ae=Ve.get(S);if(Ae.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(B.FRAMEBUFFER,Ae.__webglFramebuffer),H.copy(S.viewport),G.copy(S.scissor),he=S.scissorTest,Me.viewport(H),Me.scissor(G),Me.setScissorTest(he),L=-1;return}else if(Ae.__webglFramebuffer===void 0)Ze.setupRenderTarget(S);else if(Ae.__hasExternalTextures)Ze.rebindTextures(S,Ve.get(S.texture).__webglTexture,Ve.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let tt=S.depthTexture;if(Ae.__boundDepthTexture!==tt){if(tt!==null&&Ve.has(tt)&&(S.width!==tt.image.width||S.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(S)}}let Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ce=!0);let ke=Ve.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?V=ke[N][K]:V=ke[N],Y=!0):S.samples>0&&Ze.useMultisampledRTT(S)===!1?V=Ve.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[K]:V=ke,H.copy(S.viewport),G.copy(S.scissor),he=S.scissorTest}else H.copy(xe).multiplyScalar(ae).floor(),G.copy(De).multiplyScalar(ae).floor(),he=Ne;if(K!==0&&(V=$),Me.bindFramebuffer(B.FRAMEBUFFER,V)&&Me.drawBuffers(S,V),Me.viewport(H),Me.scissor(G),Me.setScissorTest(he),Y){let Ae=Ve.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,K)}else if(Ce){let Ae=N;for(let Ie=0;Ie<S.textures.length;Ie++){let ke=Ve.get(S.textures[Ie]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ie,ke.__webglTexture,K,Ae)}}else if(S!==null&&K!==0){let Ae=Ve.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ae.__webglTexture,K)}L=-1};function tr(S){let N=Ve.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=ht.textureFormatReadable(S.format),N.__typeReadable=ht.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,K,V,Y,Ce,Fe,Ae=0){if(!(S&&S.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ve.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ie=Ie[Fe],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){Me.bindFramebuffer(B.FRAMEBUFFER,Ie);try{let ke=S.textures[Ae],tt=ke.format,ct=ke.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ae);let Oe=tr(ke);if(Oe.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&K>=0&&K<=S.height-Y&&B.readPixels(N,K,V,Y,ge.convert(tt),ge.convert(ct),Ce)}finally{let ke=J!==null?Ve.get(J).__webglFramebuffer:null;Me.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,N,K,V,Y,Ce,Fe,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ve.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ie=Ie[Fe],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(N>=0&&N<=S.width-V&&K>=0&&K<=S.height-Y){Me.bindFramebuffer(B.FRAMEBUFFER,Ie);let ke=S.textures[Ae],tt=ke.format,ct=ke.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ae);let Oe=tr(ke);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.bufferData(B.PIXEL_PACK_BUFFER,Ce.byteLength,B.STREAM_READ),B.readPixels(N,K,V,Y,ge.convert(tt),ge.convert(ct),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let St=J!==null?Ve.get(J).__webglFramebuffer:null;Me.bindFramebuffer(B.FRAMEBUFFER,St);let ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await sd(B,ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ce),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Xe),B.deleteSync(ft),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,K=0){let V=Math.pow(2,-K),Y=Math.floor(S.image.width*V),Ce=Math.floor(S.image.height*V),Fe=N!==null?N.x:0,Ae=N!==null?N.y:0;Ze.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Fe,Ae,Y,Ce),Me.unbindTexture()},this.copyTextureToTexture=function(S,N,K=null,V=null,Y=0,Ce=0){let Fe,Ae,Ie,ke,tt,ct,Oe,Xe,St,ft=S.isCompressedTexture?S.mipmaps[Ce]:S.image;if(K!==null)Fe=K.max.x-K.min.x,Ae=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,tt=K.min.y,ct=K.isBox3?K.min.z:0;else{let ut=Math.pow(2,-Y);Fe=Math.floor(ft.width*ut),Ae=Math.floor(ft.height*ut),S.isDataArrayTexture?Ie=ft.depth:S.isData3DTexture?Ie=Math.floor(ft.depth*ut):Ie=1,ke=0,tt=0,ct=0}V!==null?(Oe=V.x,Xe=V.y,St=V.z):(Oe=0,Xe=0,St=0);let yt=ge.convert(N.format),qt=ge.convert(N.type),Be;N.isData3DTexture?(Ze.setTexture3D(N,0),Be=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ze.setTexture2DArray(N,0),Be=B.TEXTURE_2D_ARRAY):(Ze.setTexture2D(N,0),Be=B.TEXTURE_2D),Me.activeTexture(B.TEXTURE0),Me.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),Me.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),Me.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let Ht=Me.getParameter(B.UNPACK_ROW_LENGTH),_t=Me.getParameter(B.UNPACK_IMAGE_HEIGHT),fn=Me.getParameter(B.UNPACK_SKIP_PIXELS),Gt=Me.getParameter(B.UNPACK_SKIP_ROWS),ps=Me.getParameter(B.UNPACK_SKIP_IMAGES);Me.pixelStorei(B.UNPACK_ROW_LENGTH,ft.width),Me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft.height),Me.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),Me.pixelStorei(B.UNPACK_SKIP_ROWS,tt),Me.pixelStorei(B.UNPACK_SKIP_IMAGES,ct);let Un=S.isDataArrayTexture||S.isData3DTexture,Yn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let ut=Ve.get(S),Ut=Ve.get(N),Fn=Ve.get(ut.__renderTarget),It=Ve.get(Ut.__renderTarget);Me.bindFramebuffer(B.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Yt=0;Yt<Ie;Yt++)Un&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(S).__webglTexture,Y,ct+Yt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(N).__webglTexture,Ce,St+Yt)),B.blitFramebuffer(ke,tt,ke+Fe,tt+Ae,Oe,Xe,Oe+Fe,Xe+Ae,B.DEPTH_BUFFER_BIT,B.NEAREST);Me.bindFramebuffer(B.READ_FRAMEBUFFER,null),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||S.isRenderTargetTexture||Ve.has(S)){let ut=Ve.get(S),Ut=Ve.get(N);Me.bindFramebuffer(B.READ_FRAMEBUFFER,I),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,W);for(let Fn=0;Fn<Ie;Fn++)Un?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ut.__webglTexture,Y,ct+Fn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ut.__webglTexture,Y),Yn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.__webglTexture,Ce,St+Fn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ut.__webglTexture,Ce),Y!==0?B.blitFramebuffer(ke,tt,ke+Fe,tt+Ae,Oe,Xe,Oe+Fe,Xe+Ae,B.COLOR_BUFFER_BIT,B.NEAREST):Yn?B.copyTexSubImage3D(Be,Ce,Oe,Xe,St+Fn,ke,tt,Fe,Ae):B.copyTexSubImage2D(Be,Ce,Oe,Xe,ke,tt,Fe,Ae);Me.bindFramebuffer(B.READ_FRAMEBUFFER,null),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Yn?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(Be,Ce,Oe,Xe,St,Fe,Ae,Ie,yt,qt,ft.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(Be,Ce,Oe,Xe,St,Fe,Ae,Ie,yt,ft.data):B.texSubImage3D(Be,Ce,Oe,Xe,St,Fe,Ae,Ie,yt,qt,ft):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ce,Oe,Xe,Fe,Ae,yt,qt,ft.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ce,Oe,Xe,ft.width,ft.height,yt,ft.data):B.texSubImage2D(B.TEXTURE_2D,Ce,Oe,Xe,Fe,Ae,yt,qt,ft);Me.pixelStorei(B.UNPACK_ROW_LENGTH,Ht),Me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),Me.pixelStorei(B.UNPACK_SKIP_PIXELS,fn),Me.pixelStorei(B.UNPACK_SKIP_ROWS,Gt),Me.pixelStorei(B.UNPACK_SKIP_IMAGES,ps),Ce===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&B.generateMipmap(Be),Me.unbindTexture()},this.initRenderTarget=function(S){Ve.get(S).__webglFramebuffer===void 0&&Ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ze.setTextureCube(S,0):S.isData3DTexture?Ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ze.setTexture2DArray(S,0):Ze.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){U=0,O=0,J=null,Me.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}});function Jd(){let n=new Dt,{board:e,tips:t}=Vx(n),i=new Dt;i.rotation.order="YXZ",n.add(i);let s=Rt(Gx(),gt.tee,i,[0,0,0],"oversized-tee");Rt(new $t(.445,.47,.055,8),gt.teeShade,i,[0,.025,0],"tee-hem");let r=Rt(new zs(.13,.02,4,8),gt.teeShade,i,[0,.75,0],"shirt-collar");r.rotation.x=Math.PI/2;let a=new ei;a.moveTo(0,.055),a.lineTo(.052,0),a.lineTo(0,-.055),a.lineTo(-.052,0),a.closePath();let o=Rt(new is(a),gt.board,i,[-.455,.56,-.17],"back-print");o.rotation.y=-Math.PI/2;let c=new Dt;c.position.set(0,1.12,0),i.add(c);let l=Rt(new $t(.1,.1,.16,8),gt.face,c,[0,-.3,0],"neck");l.castShadow=!1,Rt(new xi(.235,8,5),gt.face,c,[0,-.1,0],"face"),Rt(new xi(.29,10,5,0,Math.PI*2,0,Math.PI*.62),gt.helmet,c,[0,.065,0],"helmet-shell"),Rt(new $t(.273,.282,.047,10),gt.helmetRim,c,[0,-.04,0],"helmet-rim");let h=Rt(new zs(.258,.022,4,12),gt.helmetRim,c,[0,-.105,0],"goggle-strap");h.rotation.x=Math.PI/2,Rt(Zd(.265,.095,.32),gt.goggles,c,[0,0,0],"goggle-frame"),Rt(Zd(.235,.067,.329),gt.lens,c,[0,0,0],"goggle-lens");for(let R of[-1,1]){Rt(new xi(.12,7,4),gt.helmetRim,c,[.015,-.13,R*.23],"helmet-ear-pad").scale.set(.72,.85,.52);let z=Xi(c,.021,.021,gt.helmetRim,5,"chin-strap");Zs(z,new F(.04,-.15,R*.26),new F(-.04,-.3,R*.09))}let d=[],u=[],f=[],p=[],x=[];for(let R of[-1,1])d.push(Xi(i,.135,.12,gt.sleeve,7,"long-sleeve-upper")),u.push(Xi(i,.17,.15,gt.tee,7,"tee-sleeve")),f.push(Xi(i,.12,.105,gt.sleeveShade,7,"long-sleeve-forearm")),p.push(Rt(new _i(.125,0),gt.sleeve,i,[0,0,0],"elbow-fold")),x.push(Rt(new hn(.18,.18,.17),gt.mitt,i,[0,0,0],"mitten"));let g=[Xi(n,.23,.255,gt.pants,7,"baggy-pant-thigh"),Xi(n,.23,.255,gt.pants,7,"baggy-pant-thigh")],m=[Xi(n,.235,.25,gt.pants,7,"baggy-pant-leg"),Xi(n,.235,.25,gt.pants,7,"baggy-pant-leg")],y=[-1,1].map(()=>Rt(new _i(.205,0),gt.pantsFold,n,[0,0,0],"knee-fold")),b=[-1,1].map(()=>Rt(new $t(.245,.265,.11,7),gt.pantsShade,n,[0,0,0],"stacked-pant-cuff")),v=[-1,1].map(()=>Rt(new hn(.18,.18,.035),gt.pantsShade,n,[0,0,0],"cargo-pocket")),E=new Ot;E.position.set(.18,.12,.08),e.add(E);let T=new Bt(new Ir(.82,24),new En({color:3893368,transparent:!0,opacity:.2,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.scale.y=.48,n.add(T);let _=-.35,w=0,D=(R={},C={},z=0,$={x:0,y:1,z:-.35})=>{let I=mt(R.position?.across),W=mt(R.position?.downhill),U=Math.max(0,mt(R.air)),O=mt(C.boardYaw,mt(R.boardYaw,mt(R.heading))),J=U>.02?An(mt(C.boardTweak),-1.35,1.35):0,L=mt(C.bodyYaw,mt(R.torsoYaw,mt(R.heading))),k=An(mt(C.crouch,.3),0,1),H=An(mt(C.jumpStretch),0,1),G=An(mt(C.grab),0,1),he=An(mt(C.bodyTilt,mt(C.lean)*.55),-.8,.8),Z=An((mt(C.bob)-mt(C.boardBob))*.3,-.18,.18),ce=An(mt(C.snowResponse),0,1),_e=1.24-k*.72+H*.22+Z-ce*(U>0?0:.08),pe=z+U,ae=Math.atan2(mt($.z,-.35),mt($.y,1)),we=mt($.x)*.2;U<=.02&&(_=ae,w=we),n.position.set(I,0,-W),e.position.set(0,pe+.035,0),e.rotation.set(An((U>.02?_:ae)+mt(C.boardPitch)+mt(C.press)*.15,-.8,.55),-O-J,An(mt(C.boardRoll)+(U>.02?w:we),-1.1,1.1));let We=An(mt(C.boardFlex),0,1);t[0].rotation.x=-.12-We*.12,t[1].rotation.x=.12+We*.12,i.position.set(he*.32,pe+_e,mt(C.foreAft)*.13),i.rotation.set(-Math.max(0,k-.3)*.3+H*.12-G*.25+mt(C.stumble)*.07,.58-L+mt(C.upperBodyTwist)*.09,-he*.68+mt(C.fallRotation)*.6),s.scale.x=1+mt(C.clothFlutter)*.018,s.rotation.z=mt(C.clothLag)*.018,c.rotation.y=An(mt(C.headLook)*.25,-.25,.25),c.rotation.z=-he*.11,c.rotation.x=G*.13;for(let xe=0;xe<2;xe+=1){let De=xe===0?-1:1,Ne=new F(0,.2,De*.42).applyEuler(e.rotation).add(e.position),X=new F(0,0,De*.25).applyEuler(i.rotation).add(i.position),oe=new F((Ne.x+X.x)*.5+.08+k*.075+ce*.04,(Ne.y+X.y)*.5+.08,(Ne.z+X.z)*.5+De*.07);Zs(g[xe],oe,X),Zs(m[xe],Ne,oe),y[xe].position.copy(oe),y[xe].scale.set(1,.58,1),b[xe].position.copy(Ne).add(new F(0,.08,0)),v[xe].position.copy(X).lerp(oe,.55),v[xe].position.z+=De*.22;let le=new F(-.02,.66,De*.39),ue=new F(.035+mt(C.armLag)*.025,.35+k*.04-ce*.025,De*.51),me=le.clone().lerp(ue,.44),Ge=De===(Math.sign(he)||1)&&U<=.05?An(mt(C.handDrag),0,1):0,Te=new F(.09,.08-mt(C.stumble)*.1,De*(.55+mt(C.armLag)*.025));if(Ge>0){let Ke=new F(De*.7,z+.06,De*.25).sub(i.position).applyQuaternion(i.quaternion.clone().invert());Te.lerp(Ke,Ge),ue.lerp(le.clone().add(Te).multiplyScalar(.5),Ge*.5)}if(xe===1&&G>0){let Ke=E.position.clone().applyEuler(e.rotation).add(e.position).sub(i.position).applyQuaternion(i.quaternion.clone().invert());Te.lerp(Ke,G),ue.lerp(le.clone().add(Te).multiplyScalar(.5),G*.7),ue.x+=G*.13}Zs(d[xe],me,ue),Zs(u[xe],le,me),Zs(f[xe],ue,Te),p[xe].position.copy(ue),x[xe].position.copy(Te)}T.position.set(.13,z+.024,.13),T.scale.set(1+U*.18,.48+U*.08,1),T.material.opacity=.22/(1+U*.9)};return D(),Object.freeze({board:e,body:i,grabAnchor:E,grabHand:x[1],group:n,hands:Object.freeze([...x]),shadow:T,update:D})}var zt,gt,Hx,An,mt,Rt,Xi,Zs,Gx,Zd,Vx,$d=oi(()=>{_h();zt=(n,e=.92)=>new un({color:n,roughness:e,metalness:0}),gt=Object.freeze({board:zt(15165e3,.48),boardBase:zt(2635591,.58),boardGraphic:zt(15919316,.6),boardEdge:zt(12177620,.42),boot:zt(1911095,.94),binding:zt(3688536,.74),face:zt(12750704,.98),goggles:zt(1319725,.26),lens:zt(9160915,.2),helmet:zt(14378318,.65),helmetRim:zt(2701386,.78),helmetShade:zt(12079678,.74),mitt:zt(1911095,.97),pants:zt(5794690,1),pantsShade:zt(4676209,1),pantsFold:zt(6649741,1),sleeve:zt(14117202,.98),sleeveShade:zt(12079682,.98),tee:zt(15526108,.98),teeShade:zt(13223611,.98)}),Hx=new F(0,1,0),An=(n,e,t)=>Math.min(t,Math.max(e,n)),mt=(n,e=0)=>Number.isFinite(n)?n:e,Rt=(n,e,t,i=[0,0,0],s="")=>{let r=new Bt(n,e);return r.position.set(...i),r.castShadow=!["back-print","binding-strap","board-chevron","boot-sole","cargo-pocket","chin-strap","goggle-frame","goggle-lens","goggle-strap","helmet-vent","shirt-collar","shirt-fold","shirt-logo","topsheet-stripe"].includes(s),r.receiveShadow=!0,r.userData.part=s,t.add(r),r},Xi=(n,e,t,i,s=7,r="")=>Rt(new $t(e,t,1,s),i,n,[0,0,0],r),Zs=(n,e,t)=>{let i=new F().subVectors(t,e),s=Math.max(.01,i.length());n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(Hx,i.normalize()),n.scale.y=s},Gx=()=>{let n=[{y:.015,x:.46,z:.4},{y:.12,x:.47,z:.41},{y:.52,x:.44,z:.4},{y:.75,x:.42,z:.37}],e=[],t=8;for(let s=0;s<n.length-1;s+=1){let r=n[s],a=n[s+1];for(let o=0;o<t;o+=1){let c=o/t*Math.PI*2,l=(o+1)/t*Math.PI*2,h=[Math.cos(c)*r.x,r.y,Math.sin(c)*r.z],d=[Math.cos(l)*r.x,r.y,Math.sin(l)*r.z],u=[Math.cos(c)*a.x,a.y,Math.sin(c)*a.z],f=[Math.cos(l)*a.x,a.y,Math.sin(l)*a.z];e.push(...h,...u,...d,...d,...u,...f)}}let i=new bt;return i.setAttribute("position",new nt(e,3)),i.computeVertexNormals(),i},Zd=(n,e,t)=>{let i=[],a=(c,l)=>{let h=c/8*2-1,d=l/2*2-1;return[-t+Math.abs(h)**1.7*.064+d**2*.009,-.105+d*e,h*n]};for(let c=0;c<8;c+=1)for(let l=0;l<2;l+=1){let h=a(c,l),d=a(c+1,l),u=a(c,l+1),f=a(c+1,l+1);i.push(...h,...d,...u,...d,...f,...u)}let o=new bt;return o.setAttribute("position",new nt(i,3)),o.computeVertexNormals(),o},Vx=n=>{let e=new Dt;e.rotation.order="YXZ",n.add(e);let t=new ei;t.moveTo(-.12,-.97);for(let[r,a]of[[-.19,-.9],[-.2,-.68],[-.2,.68],[-.19,.9],[-.12,.97],[.12,.97],[.19,.9],[.2,.68],[.2,-.68],[.19,-.9],[.12,-.97]])t.lineTo(r,a);t.closePath();let i=new kr(t,{depth:.05,bevelEnabled:!1,curveSegments:1});i.rotateX(Math.PI/2),Rt(i,[gt.board,gt.boardEdge],e,[0,.095,0],"snowboard"),Rt(new hn(.075,.01,1.34),gt.boardGraphic,e,[0,.103,0],"topsheet-stripe");let s=[];for(let r of[-1,1]){let a=new Dt;a.position.z=r*.77,e.add(a),Rt(new hn(.31,.018,.27),gt.board,a,[0,.099,r*.065],"upturned-tip"),s.push(a),Rt(new hn(.23,.016,.2),gt.boardGraphic,e,[0,.111,r*.65],"board-chevron").rotation.y=r*.25,Rt(new $t(.13,.13,.025,12),gt.binding,e,[0,.128,r*.42],"binding-disc"),Rt(new hn(.33,.14,.18),gt.boot,e,[0,.21,r*.42],"boot"),Rt(new hn(.35,.025,.2),gt.boardBase,e,[0,.14,r*.42],"boot-sole"),Rt(new hn(.34,.028,.058),gt.boardGraphic,e,[0,.29,r*.42],"binding-strap")}return{board:e,tips:s}}});function nf(n={}){let e=At(Mt(n.crouch),0,1),t=At(Mt(n.airborne),0,1),i=At(Mt(n.foreAft),-1,1),s=At(Mt(n.jumpStretch),0,1),r=At(Mt(n.lean),-1,1),a=n.toeSide!==!1,o=At(Mt(n.upperBodyTwist),-1,1),c=At(Mt(n.boardRoll),-1.08,1.08),l=At(Mt(n.boardSwing),-1.8,1.8),h=At(Mt(n.bodyTilt),-.8,.8),d=At(Mt(n.hipTwist),-1.2,1.2),u=At(Mt(n.shoulderTwist,o),-.7,.7),f=At(Mt(n.headLook),-1,1),p=At(Mt(n.armLag),-1,1),x=At(Mt(n.clothLag),-1.5,1.5),g=At(Mt(n.clothFlutter),-1,1),m=At(Mt(n.handDrift),-1.5,1.5),y=At(Mt(n.breath),-1,1),b=At(Mt(n.stumble),0,1),v=At(Mt(n.crashCollapse),0,1),E=At(Mt(n.crashSit),0,1),T=At(Mt(n.boardFlex),0,1),_=At(Mt(n.boardPitch),-.6,.6),w=At(Mt(n.butter),0,1),D=At(Mt(n.press),-1,1),R=Math.max(0,D)*18,C=Math.max(0,-D)*18,z=At(Mt(n.handDrag),0,1),$=At(Mt(n.grab),0,1),I=At(Mt(n.scarfFlutter),-1,1),W=Mt(n.bob)*20,U=Mt(n.boardBob,Mt(n.bob))*20,O=Math.sign(c)||1,J=O*13,L=Math.cos(Math.abs(c)),k=t>.1?0:w>.5?D>=0?43:-43:n.switchRiding?24:-23,H=te(J+(0-J)*L,k+U),G=(at,ht)=>{let Me=J+(at-J)*L,Tt=ht<0?R*(-ht/58):C*(ht/55),Ve=Math.sin((ht+58)/113*Math.PI)*T*2,Ze=te(Me,ht+_*ht*.28-Tt+Ve+U);return Wx(Ze,H,l)},he=Math.sin(Math.abs(c))*9,Z=-O,ce=(n.stance==="goofy"?-1:1)*(n.switchRiding?-1:1),_e=ce,pe=te(r*(a?16:11)+h*4+d*2,-2+e*14-s*5-i*5+w*4+(a?0:Math.abs(r)*3)+W+v*12+E*7),ae=G(-6,-23),we=G(2,31),We=te(pe.x-7+d*2,pe.y-2-d*3),xe=te(pe.x+7+d*2,pe.y+2+d*3),De=tf(ae,We,e,a?1.08:.92),Ne=tf(we,xe,e,a?.94:1.12),X=te(pe.x+r*(a?13:7)+u*5,pe.y-29+e*14-s*8+(a?Math.abs(r)*2:0)+v*9+y),oe=te(X.x-15,X.y+3-u*5),le=te(X.x+15,X.y-3+u*5),ue=r<0?z:0,me=r>=0?z:0,Ge=te(pe.x-21+u*8+p*8-E*11+m,pe.y+12+e*9-t*3+ue*22-b*21+E*9+m*.6),Te=te(pe.x+21+u*8+p*11-$*10+E*5-m*.7,pe.y+12+e*9-t*3+me*22+$*9-b*28-E*4-m*.4),rt=te((oe.x+Ge.x)/2-3,(oe.y+Ge.y)/2-2),Ke=te((le.x+Te.x)/2+4,(le.y+Te.y)/2-1),lt=ef(oe,rt,.68),B=ef(le,Ke,.68),ie=te(X.x+r*4+f*5-h*2,X.y-15-s*3+v*4);return Object.freeze([st("board","board",[G(-8,-58),G(8,-58),G(12,-52),G(13,44),G(9,54),G(-9,54),G(-13,44),G(-12,-52)]),st("board-side","boardSide",[G(8,-58),te(G(8,-58).x+4,G(8,-58).y+4),te(G(13,44).x+4,G(13,44).y+4),G(13,44)]),st("board-tail-side","boardBase",[G(-9,54),G(9,54),te(G(9,54).x+3,G(9,54).y+4),te(G(-9,54).x+3,G(-9,54).y+4)]),st("board-underside","boardBase",[G(Z*(11+he/L),-49),G(Z*11,-49),G(Z*13,45),G(Z*(13+he/L),45)]),st("board-edge","boardEdge",[G(O*12.2,-48),G(O*13.2,-45),G(O*13.2,42),G(O*12.2,45)]),st("board-inset","boardShadow",[G(0,-46),G(5,-41),G(6,41),G(-6,41),G(-5,-41)]),st("board-nose-graphic","boardAccent",[G(-9,-47),G(6,-38),G(7,-34),G(-9,-43)]),st("board-tail-graphic","boardAccent",[G(9,38),G(-7,47),G(-9,51),G(9,42)]),st("board-mark","board",[G(-3,-15),G(3,-11),G(3,12),G(-3,16)]),st("left-leg","pantsShadow",jd(ae,De,We)),st("left-pant-side","pantsSide",[te(De.x-14,De.y-6),te(De.x-15,De.y+5),te(ae.x-10,ae.y),te(ae.x-4,ae.y-6)]),st("left-pant-fold","pantsFold",[te(De.x-9,De.y-4),te(De.x+4,De.y+2),te(ae.x-5,ae.y-8)]),st("right-leg","pants",jd(we,Ne,xe)),st("right-pant-side","pantsSide",[te(Ne.x+14,Ne.y-6),te(Ne.x+15,Ne.y+5),te(we.x+10,we.y),te(we.x+4,we.y-6)]),st("right-pant-fold","pantsFold",[te(Ne.x+9,Ne.y-5),te(Ne.x-2,Ne.y+3),te(we.x+6,we.y-8)]),st("left-boot","boots",ri(ae.x,ae.y,29,9,-.28*ce+l)),st("right-boot","boots",ri(we.x,we.y,29,9,.28*ce+l)),st("left-boot-top","bootsTop",ri(ae.x,ae.y-2,24,4,-.28*ce+l)),st("right-boot-top","bootsTop",ri(we.x,we.y-2,24,4,.28*ce+l)),st("left-pant-cuff","pantCuff",ri(ae.x,ae.y-5,25,7,-.28*ce+l)),st("right-pant-cuff","pantCuff",ri(we.x,we.y-5,25,7,.28*ce+l)),st("torso","tee",[te(oe.x-4,oe.y-2),te(le.x+4,le.y-2),te(xe.x+9,xe.y+2),te(We.x-9,We.y+2)]),st("shirt-light-panel","teeLight",[te(oe.x-4,oe.y-2),te(X.x+2,X.y-3),te(pe.x-2,pe.y+2),te(We.x-9,We.y+2)]),st("shirt-side-panel","teeShadow",[te(X.x+7,X.y),te(le.x+4,le.y-1),te(xe.x+9,xe.y+2),te(pe.x+8,pe.y+2)]),st("shirt-hem","tee",[te(We.x-9,We.y),te(xe.x+9,xe.y),te(xe.x+11+x*7,xe.y+5+g*3),te(pe.x+x*8,pe.y+7+g*3),te(We.x-10+x*5,We.y+5+g*2)]),st("shirt-graphic","board",[te(X.x-8,X.y+14),te(X.x-1,X.y+7),te(X.x+6,X.y+14),te(X.x+2,X.y+14),te(X.x-1,X.y+11),te(X.x-5,X.y+16)]),st("left-arm","sleeveShadow",Kd(Ge,rt,oe,5)),st("right-arm","sleeve",Kd(Te,Ke,le,5)),st("right-sleeve-light","sleeveLight",[te(Ke.x-2,Ke.y-1),te(Ke.x+2,Ke.y-1),te(Te.x+2,Te.y-5),te(Te.x-1,Te.y-5)]),st("left-tee-sleeve","teeShadow",Qd(oe,lt,8,7)),st("right-tee-sleeve","tee",Qd(le,B,8,7)),st("left-sleeve-cuff","sleeve",ri(Ge.x,Ge.y-5,11,5,-.2)),st("right-sleeve-cuff","sleeveShadow",ri(Te.x,Te.y-5,11,5,.2)),st("left-mitt","mitts",ri(Ge.x,Ge.y,8,10,-.18)),st("right-mitt","mitts",ri(Te.x,Te.y,8,10,.18)),st("head","helmet",[te(ie.x-9,ie.y-5),te(ie.x-5,ie.y-10),te(ie.x+5,ie.y-10),te(ie.x+10,ie.y-5),te(ie.x+10,ie.y+5),te(ie.x+5,ie.y+9),te(ie.x-5,ie.y+9),te(ie.x-10,ie.y+5)]),st("helmet-side","helmetSide",[te(ie.x+5,ie.y-10),te(ie.x+10,ie.y-5),te(ie.x+10,ie.y+5),te(ie.x+5,ie.y+9),te(ie.x+4,ie.y+2)]),st("helmet-panel","helmetShadow",[te(ie.x-8,ie.y-5),te(ie.x-4,ie.y-9),te(ie.x+5,ie.y-9),te(ie.x+8,ie.y-5),te(ie.x+3,ie.y-1),te(ie.x-5,ie.y-1)]),st("helmet-highlight","helmetHighlight",[te(ie.x-5,ie.y-5),te(ie.x,ie.y-9),te(ie.x+1,ie.y-6),te(ie.x-2,ie.y-3)]),st("face","skin",[te(ie.x-6,ie.y+2),te(ie.x+6,ie.y+2),te(ie.x+5,ie.y+8),te(ie.x,ie.y+10),te(ie.x-5,ie.y+8)]),st("helmet-band","helmetBand",[te(ie.x-9,ie.y-2),te(ie.x+9,ie.y-2),te(ie.x+9,ie.y+1),te(ie.x-9,ie.y+1)]),st("goggles","goggles",[te(ie.x+_e*1+f*2,ie.y-3),te(ie.x+_e*8+f*2,ie.y-2),te(ie.x+_e*8+f*2,ie.y+3),te(ie.x+_e*1+f*2,ie.y+3)]),st("goggle-lens","goggleLens",[te(ie.x+_e*3+f*2,ie.y-2),te(ie.x+_e*7+f*2,ie.y-1),te(ie.x+_e*7+f*2,ie.y+1),te(ie.x+_e*3+f*2,ie.y+1)]),st("goggle-strap","goggleStrap",[te(ie.x-9,ie.y-1),te(ie.x+9,ie.y-1),te(ie.x+8,ie.y+3),te(ie.x-8,ie.y+3)]),st("goggle-lens","goggleLens",[te(ie.x-6,ie.y-2),te(ie.x+7,ie.y-2),te(ie.x+5,ie.y+2),te(ie.x-5,ie.y+2)]),st("scarf","scarf",[te(X.x+7,X.y-10),te(X.x+15,X.y-8),te(X.x+21+r*4+I*5,X.y+10-t*5-Math.abs(I)*4),te(X.x+11,X.y+2)])])}var At,Mt,te,st,ri,Kd,jd,Qd,ef,Wx,tf,sf=oi(()=>{At=(n,e,t)=>Math.min(t,Math.max(e,n)),Mt=(n,e=0)=>Number.isFinite(n)?n:e,te=(n,e)=>Object.freeze({x:n,y:e}),st=(n,e,t)=>Object.freeze({part:n,points:Object.freeze(t),tone:e}),ri=(n,e,t,i,s)=>{let r=Math.cos(s),a=Math.sin(s);return[[-t/2,-i/2],[t/2,-i/2],[t/2,i/2],[-t/2,i/2]].map(([o,c])=>te(n+o*r-c*a,e+o*a+c*r))},Kd=(n,e,t,i)=>[te(n.x-i,n.y),te(e.x-i,e.y),te(t.x-i,t.y),te(t.x+i,t.y),te(e.x+i,e.y),te(n.x+i,n.y)],jd=(n,e,t)=>[te(n.x-10,n.y),te(n.x-12,n.y-6),te(e.x-15,e.y+5),te(e.x-14,e.y-6),te(t.x-12,t.y-4),te(t.x+12,t.y-4),te(e.x+14,e.y-6),te(e.x+15,e.y+5),te(n.x+12,n.y-6),te(n.x+10,n.y)],Qd=(n,e,t,i)=>[te(n.x-t,n.y-2),te(n.x+t,n.y-2),te(e.x+i,e.y+2),te(e.x-i,e.y+2)],ef=(n,e,t)=>te(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t),Wx=(n,e,t)=>{let i=n.x-e.x,s=n.y-e.y,r=Math.cos(t),a=Math.sin(t);return te(e.x+i*r-s*a,e.y+i*a+s*r)},tf=(n,e,t,i)=>{let s=e.x-n.x,r=e.y-n.y,a=Math.max(.001,Math.hypot(s,r)),o=Math.min(34,a),c=Math.sqrt(Math.max(0,18**2-(o/2)**2))*(.7+t*.13)*i;return te((n.x+e.x)/2-r/a*c,(n.y+e.y)/2+s/a*c)}});function qx(n,e=0){let t=n.getBoundingClientRect?.().height||n.height,i=Si(n.height/Math.max(1,t),1,2);return Math.max(0,e)*42*i}function xh(n=1500){let e=[],t=-1,i=-1/0,s=0;return Object.freeze({points(){return Object.freeze([...e])},reset(){e=[],t=-1,i=-1/0,s=0},update(r){let a=Number(r?.elapsed)||0,o=Number(r?.position?.downhill)||0;(a<t||o<i-1)&&(e=[],s=0),t=a,i=o;let c=Number(r?.edge)||0,l=Si(Number(r?.skid)||0,0,1),h=Number(r?.landingImpact)||0;if(r?.air>0||r?.crashed){s=h;return}let d=Number(r?.boardYaw)||0,u=Math.sign(c||r?.slipAngle||1),f=(Number(r?.position?.across)||0)+Math.cos(d)*u*.12,p=e.at(-1),x=h>1.5&&s<=1.5;if(s=h,p&&Math.hypot(f-p.across,o-p.downhill)<.1&&!x)return;let g=Si(Number(r?.carveQuality)||0,0,1),m=x?"landing":(Number(r?.butter)||0)>.55?"butter":Math.abs(Number(r?.pressAmount)||0)>.45&&l<.2?"press":g>=.45&&l<.36?"carve":l>=.12||Math.abs(c)>=.08?"skid":r?.surface==="powder"?"powder":"flat";e.push(Object.freeze({across:f,downhill:o,kind:m,width:m==="carve"?.9:m==="press"?.85:m==="flat"?1.5:m==="powder"?2.5:m==="landing"?4+h*.5:2.2+l*5.8})),e.length>n&&(e=e.slice(-n))}})}function Yx(n,e,t={}){let{cameraAcross:i=0,currentDownhill:s=0,groundY:r=0,palette:a=aa,scale:o=1,viewportCenter:c=0}=t;if(!Array.isArray(e)||e.length<2)return;let l=h=>({x:c+(h.across-i)*14,y:r+(s-h.downhill)*10*o});n.save(),n.lineCap="round";for(let h=1;h<e.length;h+=1){let d=e[h-1],u=e[h],f=s-d.downhill,p=s-u.downhill;if(f<-.2||p<-.2||f>22||p>22)continue;let x=l(d),g=l(u),m=1-Si(Math.max(f,p)/22,0,.82);if(n.globalAlpha=m,n.strokeStyle=u.kind==="carve"?a.carveTrace:u.kind==="flat"?a.flatTrace:u.kind==="powder"?a.powderTrace??a.flatTrace:u.kind==="press"?a.pressTrace??a.flatTrace:a.skidTrace,u.kind==="landing"){n.fillStyle=a.skidTrace,n.beginPath(),n.ellipse(g.x,g.y,u.width*o,u.width*o*.35,0,0,Math.PI*2),n.fill();continue}n.lineWidth=Math.max(.8,u.width*o),n.beginPath(),n.moveTo(x.x,x.y),n.lineTo(g.x,g.y),n.stroke()}n.restore()}function Zx(n,e={}){let{direction:t=1,intensity:i=0,palette:s=aa,scale:r=1,surface:a="groomed",x:o=0,y:c=0}=e;if(i<.05)return;n.save(),n.translate(o,c),n.scale(r,r),n.fillStyle=s.snowSpray;let l=a==="powder"?12:a==="ice"?4:7,h=a==="powder"?1.65:a==="slush"?1.3:1;for(let d=0;d<l;d+=1){let u=(d+1)/l,f=(7+d*5)*t;n.globalAlpha=i*(.72-u*.42),n.beginPath(),n.ellipse(f,8+d*2.4,(2.5+i*4*(1-u*.45))*h,(1.6+i*2.5*(1-u*.5))*h,t*-.28,0,Math.PI*2),n.fill()}n.restore()}function Jx(n,e={}){let{edge:t=0,palette:i=aa,quality:s=0,scale:r=1,x:a=0,y:o=0}=e;if(Math.abs(t)<.12||s<.35)return;let c=Math.sign(t)||1;n.save(),n.globalAlpha=Si(s,0,1)*.82,n.strokeStyle=i.carveTrace,n.lineWidth=Math.max(1,r*.9),n.beginPath(),n.moveTo(a-c*4*r,o+7*r),n.lineTo(a-c*15*r,o+54*r),n.stroke(),n.restore()}function $x(n,e,t={}){let{boardTweak:i=0,palette:s=aa,rotation:r=0,scale:a=1,x:o=0,y:c=0}=t;n.save(),n.translate(o,c),n.rotate(r),n.scale(a,a);for(let l of e){let h=l.part.startsWith("board")||l.part.endsWith("boot"),d=l.part.endsWith("leg"),u=h?i:d?i*.45:0,[f,...p]=l.points;n.save(),n.rotate(u),n.beginPath(),n.moveTo(f.x,f.y);for(let x of p)n.lineTo(x.x,x.y);n.closePath(),n.fillStyle=s[l.tone]??s.board,n.fill(),n.restore()}n.restore()}function rf(n,e=aa){let t=n.getContext("2d");if(!t)throw new Error("Rider rendering requires a 2D canvas context");let i=xh();return Object.freeze({beginFrame(){t.clearRect(0,0,n.width,n.height)},draw({camera:s,pose:r,state:a}){let o=Si(Number(s.zoom)||1,.82,1),c=Si(Math.min(n.width/700,n.height/500),1.1,2.4)*o,l=(a.position.across-s.position.across)*14*o,h=qx(n,a.air),d=n.width/2+l,u=n.height*.78+(Number(s.dip)||0)*9,f=1-Si((a.air??0)/3.5,0,.55);if(t.save(),t.translate(n.width/2,n.height/2),t.rotate(-(Number(s.roll)||0)),t.translate(-n.width/2,-n.height/2),i.update(a),Yx(t,i.points(),{cameraAcross:s.position.across,currentDownhill:a.position.downhill,groundY:u,palette:e,scale:c,surface:a.surface,viewportCenter:n.width/2}),r.handDrag>.55){let p=Math.sign(r.lean||a.edge||1);Jx(t,{edge:p,palette:e,quality:r.handDrag,scale:c,x:d+p*28*c,y:u+5*c})}Zx(t,{direction:-Math.sign(a.slipAngle||a.edge||1),intensity:r.spray,palette:e,scale:c,surface:a.surface,x:d,y:u+4*c}),t.save(),t.translate(d+9*c,u+11*c),t.rotate((Number(r.boardSwing)||0)*.7),t.scale(c*f,c*f),t.fillStyle="rgba(26, 65, 83, 0.13)",t.beginPath(),t.moveTo(-8,-51),t.lineTo(8,-51),t.lineTo(12,-44),t.lineTo(12,43),t.lineTo(8,51),t.lineTo(-8,51),t.lineTo(-12,43),t.lineTo(-12,-44),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=e.shadow,t.beginPath(),t.ellipse(d+9*c,u+14*c,28*c*f,9*c*f,0,0,Math.PI*2),t.fill(),t.restore(),$x(t,nf(r),{palette:e,rotation:(r.airborne>0?r.bodySpin:Si(Xx(r.bodyYaw)*.12+r.lean*.08,-.4,.4))+r.fallRotation,scale:c,x:d,y:u-h}),t.restore()}})}var aa,Si,Xx,yh=oi(()=>{sf();aa=Object.freeze({board:"#f16e50",boardAccent:"#f4e9d8",boardBase:"#a8453f",boardEdge:"#f8fafc",boardSide:"#a94b40",boardShadow:"#29354e",boots:"#202a40",bootsTop:"#46536d",carveTrace:"rgba(71, 125, 148, 0.58)",flatTrace:"rgba(116, 174, 194, 0.18)",goggles:"#182438",goggleLens:"#8ed4d9",goggleStrap:"#29354e",helmet:"#f16e50",helmetBand:"#29354e",helmetHighlight:"#ff9b78",helmetSide:"#d75b49",helmetShadow:"#b74840",mitts:"#202a40",pantCuff:"#26324b",pants:"#657391",pantsFold:"#35415c",pantsSide:"#3c4967",pantsShadow:"#4c5a78",powderTrace:"rgba(85, 159, 185, 0.24)",pressTrace:"rgba(71, 125, 148, 0.32)",scarf:"#f6cd75",shadow:"rgba(15, 42, 58, 0.24)",skidTrace:"rgba(116, 174, 194, 0.3)",skin:"#dca67f",sleeve:"#f16e50",sleeveLight:"#ff9d77",sleeveShadow:"#bc4d42",snowSpray:"#b9e9f5",tee:"#f4e9d8",teeLight:"#fff9ec",teeShadow:"#d7c8b9"}),Si=(n,e,t)=>Math.min(t,Math.max(e,n)),Xx=n=>Math.atan2(Math.sin(n),Math.cos(n))});function hs(n){let e=lf(n)*10;return Object.freeze({min:12+e,max:34+e})}function Mh(n){let e=be(n,0),i=.12*(Ue(e,0,1200)**2/(2*1200)+Math.max(0,e-1200));return-.36*e-i+.2/.024*(Math.cos(e*.024-.3)-Math.cos(-.3))+.03/.061*(Math.cos(e*.061)-1)}function bi(n={},e="groomed"){let t=be(n.across,0),i=be(n.downhill,0),s=af[e]??af.groomed,r=(h,d)=>jx(h,d)*s.amplitude,a=.08,o=r(t,i),c=(r(t,i+a)-r(t,i-a))/(a*2),l=(r(t+a,i)-r(t-a,i))/(a*2);return Object.freeze({height:o,roll:l,roughness:s.roughness*(.65+Ue((Math.abs(c)+Math.abs(l))*.9,0,.35)),slope:c})}function Js(n={}){let e=n.position??{},t=be(n.heading,0),i=Math.max(0,be(n.speed,8)),s=n.velocity,r=s?{across:be(s.across,0),downhill:be(s.downhill,i)}:Qx(i,t),a=Math.hypot(r.across,r.downhill),o=s?Math.atan2(r.across,r.downhill):t,c=!!n.switchRiding,l=be(n.boardYaw,o+(c?Math.PI:0)),h=vh[n.surface]?n.surface:"groomed",d=bi(e,h);return Rl({air:Math.max(0,be(n.air,0)),airtime:Math.max(0,be(n.airtime,0)),boardLightness:Ue(be(n.boardLightness,0),0,1),boardOffset:be(n.boardOffset,jt(l-o-(c?Math.PI:0))),boardRotation:be(n.boardRotation,l),boardYaw:l,bodyHeave:be(n.bodyHeave,d.height),bumpImpact:Ue(be(n.bumpImpact,0),0,1),butter:Ue(be(n.butter,0),0,1),carveQuality:Ue(be(n.carveQuality,0),0,1),chatter:Ue(be(n.chatter,0),0,1),compression:Ue(be(n.compression,0),0,1),crouchAmount:Ue(be(n.crouchAmount,0),0,1),crouchHeld:!!n.crouchHeld,crouchPressedAge:Math.max(0,be(n.crouchPressedAge,10)),crashed:!!n.crashed,crashReason:n.crashReason??null,crashSpin:be(n.crashSpin,0),crashTimer:Math.max(0,be(n.crashTimer,0)),edge:Ue(be(n.edge,0),-1,1),elapsed:Math.max(0,be(n.elapsed,0)),flickBrake:Math.max(0,be(n.flickBrake,0)),flickRecovery:Math.max(0,be(n.flickRecovery,0)),frontEdge:Ue(be(n.frontEdge,n.edge??0),-1,1),frontFootPressure:Ue(be(n.frontFootPressure,.58),0,1),gForce:Math.max(0,be(n.gForce,0)),grounded:n.grounded===void 0?be(n.air,0)<=0:!!n.grounded,heading:o,impactMeter:Ue(be(n.impactMeter,0),0,100),landingImpact:Math.max(0,be(n.landingImpact,0)),lean:Ue(be(n.lean,n.edge??0),-1,1),noseFloat:Ue(be(n.noseFloat,0),0,1),popCharge:Ue(be(n.preload,n.popCharge??0),0,1),popArcVelocity:Math.max(0,be(n.popArcVelocity,0)),popElapsed:Math.max(0,be(n.popElapsed,0)),popped:!!n.popped,position:{across:be(e.across,0),downhill:be(e.downhill,0)},pressAmount:Ue(be(n.pressAmount,0),-1,1),preload:Ue(be(n.preload,n.popCharge??0),0,1),preloadReleaseAge:Math.max(0,be(n.preloadReleaseAge,2)),rearEdge:Ue(be(n.rearEdge,n.edge??0),-1,1),skid:Ue(be(n.skid,0),0,1),slash:Ue(be(n.slash,0),0,1),slipAngle:be(n.slipAngle,jt(l-o)),slopeGrade:Ue(be(n.slopeGrade,.34),0,.78),speed:a,spinVelocity:be(n.spinVelocity,0),angularMomentum:be(n.angularMomentum,be(n.spinVelocity,0)*1),stanceHeight:Ue(be(n.stanceHeight,1-Ue(be(n.crouchAmount,0),0,1)*(1-.45)),0,1),stance:n.stance==="goofy"?"goofy":"regular",steer:Ue(be(n.steer,0),-1,1),steerHold:Math.max(0,be(n.steerHold,0)),surface:h,switchRiding:c,turnRate:be(n.turnRate,0),tweak:Ue(be(n.tweak,0),-1,1),terrainHeight:be(n.terrainHeight,d.height),terrainLaunchCooldown:Math.max(0,be(n.terrainLaunchCooldown,0)),terrainPitch:be(n.terrainPitch,d.slope),terrainRoll:be(n.terrainRoll,d.roll),torsoYaw:be(n.torsoYaw,o+(c?Math.PI:0)),torsoRotation:be(n.torsoRotation,o+(c?Math.PI:0)),velocity:r,verticalVelocity:be(n.verticalVelocity,0),worldHeight:be(n.worldHeight,cf({across:be(e.across,0),downhill:be(e.downhill,0)},h)+Math.max(0,be(n.air,0))),worldVerticalVelocity:be(n.worldVerticalVelocity,be(n.verticalVelocity,0)+r.downhill*(d.slope-uf(be(e.downhill,0)))+r.across*d.roll),washout:Ue(be(n.washout,0),0,1)})}function hf(n,e={}){if(n.crashed)return n;let t=Math.sign(n.velocity.across||e.x-n.position.across||n.edge||1);return Js({...n,air:0,angularMomentum:0,compression:1,crashed:!0,crashReason:"hazard",crashSpin:t,crashTimer:2,grounded:!0,popArcVelocity:0,popElapsed:0,popped:!1,velocity:{across:n.velocity.across*.45,downhill:n.velocity.downhill*.45}})}function df(n,e={},t=0,i={}){let s=Ue(be(t,0),0,.05),r=hs(n.position.downhill),a=Ue(be(i.slopeGrade,uf(n.position.downhill)),0,.78),o=vh[i.surface]?i.surface:n.surface,c=vh[o];if(n.crashed)return ey(n,s,a,o);let l=Ue(be(e.carve,0),-1,1),h=Ue(be(e.steer,0),-1,1),d=Ue(be(e.crouch,0),0,1),u=Ue(be(e.stretch,0),0,1),f=Ue(be(e.press,0),-1,1),p=n.grounded??n.air<=0,x=d>.5,g=x&&!n.crouchHeld?0:n.crouchPressedAge+s,m=x?0:n.crouchHeld?s:n.preloadReleaseAge+s,y=Kx(n.stanceHeight,p?1-(1-.45)*d:x?0:u>.5?1:n.stanceHeight,(p?1-.45:1)*s/.15),b=Ue((1-y)/(1-.45),0,1),v=p?Ue(n.preload+s*(x?1/.5:m<=1?0:-1/.15),0,1):n.preload,E=n.pressAmount+(f-n.pressAmount)*Rn(7,s),T=n.lean+(l-n.lean)*Rn(6.3,s),_=T*(.75+b*.25),w=_*(n.stance==="goofy"?-1:1)>=0,D=n.frontEdge+(_-n.frontEdge)*Rn(w?10.8:8.8,s),R=n.rearEdge+(_-n.rearEdge)*Rn(w?6.1:5.1,s),C=D*.58+R*.42,z=Math.abs(C),$=Math.sign(C)!==Math.sign(n.edge)&&Math.abs(n.edge)>.015&&z>.015,I={across:Math.cos(n.boardYaw),downhill:-Math.sin(n.boardYaw)},W=n.velocity.across*I.across+n.velocity.downhill*I.downhill,U=p&&o!=="powder"&&o!=="rail"&&($&&Math.sign(C)===Math.sign(W)||Math.sign(l)!==Math.sign(n.edge)&&Math.sign(l)===Math.sign(W)&&Math.abs(n.edge)>.15)&&Math.abs(W)>3.8&&n.speed>16&&Math.abs(h)<.05&&n.flickRecovery<=0,O=p&&o==="rail"&&z>.22;if(U||O){let Xe={across:n.velocity.across*.62,downhill:n.velocity.downhill*.62};return Rl({...n,compression:1,crashed:!0,crashReason:O?"rail-edge":"edge-catch",crashSpin:Math.sign(W||C)||1,crashTimer:2,edge:C,elapsed:n.elapsed+s,frontEdge:D,gForce:1.6,lean:T,position:{across:n.position.across+Xe.across*s,downhill:n.position.downhill+Xe.downhill*s},rearEdge:R,skid:1,slopeGrade:a,speed:Math.hypot(Xe.across,Xe.downhill),surface:o,velocity:Xe})}let J={across:n.position.across+n.velocity.across*s,downhill:n.position.downhill+n.velocity.downhill*s},L=bi(J,o),k=s>0?(L.height-n.terrainHeight)/s:0,H=p?Ue(Math.abs(k)*(.09+n.speed*.004)*L.roughness*(1-b*.8),0,1):0,G=n.bumpImpact+(H-n.bumpImpact)*Rn(H>n.bumpImpact?18:9,s),he=Ue(L.height,n.bodyHeave-.4,n.bodyHeave+.4),Z=n.bodyHeave+(he-n.bodyHeave)*Rn(3.4,s),ce=Ue((o==="powder"?.43:.54)-E*.24+Math.abs(l-n.lean)*.17,.16,.84),_e=o==="powder"&&p?Ue(n.speed/24*.7+(1-ce)*.9-.24,0,1):0,pe=Math.abs(h)>.05?Math.sign(h)===Math.sign(n.steer)?n.steerHold+s:s:0,ae=p&&d>.62&&Math.abs(h)>.3,we=n.butter>.5&&Math.abs(n.steer)>.3,We=ae?1:0,xe=n.butter+(We-n.butter)*Rn(We>n.butter?12:10,s),De=p&&!ae&&Math.abs(h)>.05&&Math.sign(h)!==Math.sign(n.steer),Ne=De?.1:n.flickBrake,X=Math.min(s,Ne);Ne=Math.max(0,Ne-s);let oe=De?1:n.boardLightness*Math.exp(-5*s),le=Math.max(0,n.flickRecovery-s);Math.abs(h)<.05&&Math.abs(n.steer)>.05&&(le=.3);let ue=n.boardOffset,me=n.switchRiding;if(p&&ae)ue+=h*(4.2+Math.abs(E)*.5)*s;else if(p&&we&&Math.abs(h)<.05){let Xe=Math.round(ue/Math.PI);Math.abs(Xe)%2===1&&(me=!me),ue-=Xe*Math.PI,ue-=Ue(ue,-9.2*s,9.2*s)}else if(p&&Math.abs(h)>.05){let Xe=Ue((pe-.08)/.22,0,1),St=h*(.92+Xe*.48),ft=2.1+7.1*oe*(1-z*.55-b*.35);ue+=Ue(St-ue,-ft*s,ft*s)}else p&&(ue-=Ue(ue,-9.2*s,9.2*s));let Ge=Math.max(n.speed,.001),Te={across:n.velocity.across/Ge,downhill:n.velocity.downhill/Ge},rt={across:Te.downhill,downhill:-Te.across},Ke=18-z*12,lt=z*Ge**2/Ke*(1+b*.3)*(n.impactMeter>70?.72:1),B=9.81*c.edgeGrip*(.6+z*1.6)*(1+b*.3),ie=p&&o!=="rail"&&lt>0?Ue((lt-B)/lt,0,1):0,at=1-Ue((Math.abs(n.heading)-1.05)/.38,0,1),ht=p&&o!=="rail"?Math.sign(C)*Math.min(lt,B)*at:0,Me=p&&!ae&&o!=="rail"?Ue(-W*c.baseGrip*(.12+Ue((pe-.16)/.32,0,1)*.08)*(1+b*.3),-2.6,2.6):0,Tt=Ue((pe-.14)/.3,0,1),Ve=p&&!ae?Tt*(1.4+Math.abs(ue)*1.5)*c.skid:0,Ze=o==="powder"?1-_e:0,A=p&&L.slope<-.05&&n.crouchAmount>b&&!ae?(n.crouchAmount-b)*1.4*Ue(-L.slope/.15,0,1):0,M=p?c.drag*(.22+Ze*.24+Math.abs(E)*.05):0,q=p?n.speed**2*.0032*(1-b*.35):0,de=p&&!ae&&X>0&&s>0?n.speed*.06*X/(.1*s):0,se=M+q+Ve+de,ye=p?{across:rt.across*ht+I.across*Me-Te.across*se-9.81*L.roll*.18,downhill:9.81*Math.sin(a)+rt.downhill*ht+I.downhill*Me-Te.downhill*se}:{across:0,downhill:0},re=p?{across:n.velocity.across+ye.across*s+Te.across*A,downhill:n.velocity.downhill+ye.downhill*s+Te.downhill*A}:{...n.velocity},j=Math.hypot(re.across,re.downhill);if(p&&(j<r.min||j>r.max*(1-b*.1))){let Xe=Ue(j,r.min,r.max*(1-b*.1)),St=Xe/Math.max(j,.001);re={across:re.across*St,downhill:re.downhill*St},j=Xe}let ee=Math.atan2(re.across,re.downhill),Se=p&&s>0?jt(ee-n.heading)/s:n.turnRate,P=p?jt(ee+(me?Math.PI:0)+ue):n.boardYaw,ne=p?0:n.angularMomentum,Q=p?0:n.spinVelocity,ge=be(e.jump,0)>0&&(p||n.airtime>0&&n.airtime<=.08&&!n.popped),ve=Math.max(0,n.terrainLaunchCooldown-s),ze=p&&o!=="rail"&&ve<=0&&n.speed>20&&(n.terrainPitch>.1&&L.slope<0||be(i.lipDistance,1/0)>=0&&be(i.lipDistance,1/0)<=n.velocity.downhill*s),Qe={across:n.position.across+re.across*s,downhill:n.position.downhill+re.downhill*s},fe=qi(n.position,o,i),He=qi(Qe,o,i),et=of(n.position,o,i),Pe=s>0?(He-fe)/s:0,xt={across:n.position.across+re.across*.1,downhill:n.position.downhill+re.downhill*.1},Nt=be(i.timeToLip,1/0),Ln=be(i.lipDistance,1/0),ua=ze||n.terrainPitch>.08&&bi(xt,o).slope<0||Nt>=0&&Nt<=.1||Ln>=0&&Ln<=j*.1,js=p&&ua?1.15:1,da=n.preload,Ci=ge?(3+3*da)*js*(p?1:.5):0,Yi=n.popped,dn=n.popArcVelocity,Dn=n.popElapsed,Pi=p?fe:n.worldHeight,Mn=p?Pe:n.worldVerticalVelocity,qn=n.verticalVelocity,fa=ze?.7:ve;if(ze&&!ge){let Xe={across:n.position.across-re.across*Math.max(s,.008333333333333333),downhill:n.position.downhill-re.downhill*Math.max(s,.008333333333333333)},St=(fe-qi(Xe,o,i))/Math.max(s,1/120);Mn=Pe+(St-Pe)*(1-b*.85)}ge&&(re={across:re.across+et.across*Ci,downhill:re.downhill+et.downhill*Ci},Qe={across:n.position.across+re.across*s,downhill:n.position.downhill+re.downhill*s},He=qi(Qe,o,i),Pe=s>0?(He-fe)/s:0,j=Math.hypot(re.across,re.downhill),ee=Math.atan2(re.across,re.downhill),P=p?jt(ee+(me?Math.PI:0)+ue):P,Mn+=et.up*Ci,qn=et.up*Ci,ne=Ue(p?h*(2.6+da*1.5)+Se*.12:ne+h*.18,-6,6),v=0,Yi=!0,dn=Ci*et.up,Dn=0);let Sn=n.air,Nn=n.airtime,Qs=Math.max(n.compression*Math.exp(-8*s),G*.72),Zi=n.landingImpact*Math.exp(-4*s),Ji=Math.max(0,n.impactMeter-(5+8*(1-Ue(j/34,0,1)))*s+(p?G*2.4*s:0)),er=!1,pa=null,ma=0,tr=0,S=n.skid;if(!p||ge||ze){!p&&Math.abs(h)>.05&&Math.sign(h)!==Math.sign(n.steer)&&(ne=Ue(ne+h*.22,-6,6)),p||(ne=Ue(ne+l*.08*s,-6,6));let Xe=.6+y*.4;Q=ne/Xe,P=jt(P+(Q+(p?0:l*.35))*s),Nn=p?s:Nn+s,dn>0&&(Dn+=s),Pi+=Mn*s,Mn-=9.81*s;let St=Math.max(0,dn*Dn-9.81*Dn**2*.5);Sn=Math.max(Pi-He,St);let ft=of(Qe,o,i),yt=-(ft.across*re.across+ft.downhill*re.downhill)/Math.max(ft.up,.1);if(qn=Mn-yt,Sn<=0){let qt=!p;if(Sn=0,Pi=He,qt){let Be=Math.max(0,-(re.across*ft.across+Mn*ft.up+re.downhill*ft.downhill)),Ht=Math.abs(jt(P+n.tweak*1.35-ee)),_t=Math.min(Ht,Math.PI-Ht),fn=Ue(_t+Math.abs(Q)*.04,0,Math.PI/2),Gt=x&&g<=.12,ps=Gt?.4:x?.15:0;if(Zi=Be*(1+1.5*Math.sin(fn))*(1-ps),Ji=Ue(Ji+Zi,0,100),Qs=Math.max(Qs,Ue(Zi/8,.5,1)),me=Ht>Math.PI/2,fn>Math.PI/4||Ji>=100)er=!0,pa=fn>Math.PI/4?"landing-edge":"impact-overload",ma=Math.sign(jt(P-ee))||1,tr=2;else if(fn>=Math.PI/12){let Un=Ue((fn-Math.PI/12)/(Math.PI/4-Math.PI/12),0,1);S=Math.max(S,.35+Un*.45),le=.3;let Yn=1-Un*.24;re={across:re.across*Yn,downhill:re.downhill*Yn},j=Math.hypot(re.across,re.downhill);let ut=hs(Qe.downhill).min;if(j<ut){let Ut=ut/Math.max(j,.001);re={across:re.across*Ut,downhill:re.downhill*Ut},j=ut}}!er&&fn<Math.PI/12&&Gt&&(v=.5),ue=jt(P-ee-(me?Math.PI:0))}Mn=yt,qn=0,ne=0,Q=0,Nn=0,Yi=!1,dn=0,Dn=0}}else Pi=He,Mn=Pe,qn=0,Sn=0,Nn=0,Yi=!1,dn=0,Dn=0;let N=jt(P-ee),K=p?Ue(Math.abs(ue)/1.5*(.3+Tt*.4)*(1-(Math.sign(C)===Math.sign(h)?z*.35:0))+ie*.6,0,.95):0;S=Math.max(S,n.skid+(K-n.skid)*Rn(10,s)),p&&K<n.skid&&(S=Math.max(0,n.skid+(K-n.skid)*Rn(10,s)));let V=p&&o!=="rail"?Ue(z*1.6*(1-ie*.7)*(1-Ue(Math.abs(ue)/.7,0,1)*.85),0,1):0,Y=p?Ue((De?1:0)+Math.abs(h)*S*.5,0,1):0,Ce=De?1:n.slash+(Y-n.slash)*Rn(Y>n.slash?28:11,s),Fe=p?Ue(L.roughness*(.12+j/34*.38)+z*(1-c.edgeGrip)*.55,0,1):0,Ae=jt(Sn>0?P-Q*.1:ee+(me?Math.PI:0)),Ie=jt(n.torsoYaw+jt(Ae-n.torsoYaw)*Rn(Sn>0?12:5,s)),ke=n.boardRotation+jt(P-n.boardYaw),tt=n.torsoRotation+jt(Ie-n.torsoYaw),ct=Sn>0?h:0,Oe=n.tweak+(ct-n.tweak)*Rn(Math.abs(ct)>Math.abs(n.tweak)?18:14,s);return Rl({air:Sn,airtime:Nn,boardLightness:oe,boardOffset:ue,boardRotation:ke,boardYaw:P,bodyHeave:Z,bumpImpact:G,butter:xe,carveQuality:V,chatter:Fe,compression:Qs,crouchAmount:b,crouchHeld:x,crouchPressedAge:g,crashed:er,crashReason:pa,crashSpin:ma,crashTimer:tr,edge:C,elapsed:n.elapsed+s,flickBrake:Ne,flickRecovery:le,frontEdge:D,frontFootPressure:ce,gForce:Ue(Math.abs(ht)/9.81,0,1.8),grounded:Sn<=0,heading:ee,impactMeter:Ji,landingImpact:Zi,lean:T,noseFloat:_e,popCharge:v,popArcVelocity:dn,popElapsed:Dn,popped:Yi,position:Qe,pressAmount:E,preload:v,preloadReleaseAge:m,rearEdge:R,skid:S,slash:Ce,slipAngle:N,slopeGrade:a,speed:j,angularMomentum:ne,spinVelocity:Q,stance:n.stance,stanceHeight:y,steer:h,steerHold:pe,surface:o,switchRiding:me,turnRate:Se,tweak:Oe,terrainHeight:L.height,terrainLaunchCooldown:fa,terrainPitch:L.slope,terrainRoll:L.roll,torsoYaw:Ie,torsoRotation:tt,velocity:re,verticalVelocity:qn,worldHeight:Pi,worldVerticalVelocity:Mn,washout:ie})}var vh,af,Ue,be,lf,jt,Rn,Kx,jx,Rl,Qx,cf,qi,of,uf,ey,Cl=oi(()=>{vh=Object.freeze({groomed:Object.freeze({baseGrip:1,drag:1,edgeGrip:1,skid:1}),ice:Object.freeze({baseGrip:.16,drag:.45,edgeGrip:.25,skid:.7}),powder:Object.freeze({baseGrip:.7,drag:1.85,edgeGrip:.76,skid:1.12}),slush:Object.freeze({baseGrip:.85,drag:1.8,edgeGrip:.74,skid:1.35}),chop:Object.freeze({baseGrip:.82,drag:1.3,edgeGrip:.82,skid:1.2}),rail:Object.freeze({baseGrip:.02,drag:.3,edgeGrip:.02,skid:.3})}),af=Object.freeze({groomed:Object.freeze({amplitude:.055,roughness:.2}),ice:Object.freeze({amplitude:.012,roughness:.07}),powder:Object.freeze({amplitude:.34,roughness:.95}),slush:Object.freeze({amplitude:.14,roughness:.55}),chop:Object.freeze({amplitude:.24,roughness:.9}),rail:Object.freeze({amplitude:0,roughness:0})}),Ue=(n,e,t)=>Math.min(t,Math.max(e,n)),be=(n,e)=>Number.isFinite(n)?n:e,lf=n=>Ue(Math.max(0,be(n,0))/1200,0,1);jt=n=>Math.atan2(Math.sin(n),Math.cos(n)),Rn=(n,e)=>1-Math.exp(-n*e),Kx=(n,e,t)=>n+Ue(e-n,-t,t),jx=(n,e)=>Math.sin(e*.38+n*.17)*.45+Math.sin(e*1.07-n*.42+.8)*.3+Math.sin(e*2.31+n*.77+1.7)*.15+Math.sin(e*.11+n*1.6)*.1;Rl=n=>Object.freeze({...n,position:Object.freeze({...n.position}),velocity:Object.freeze({...n.velocity})}),Qx=(n,e)=>({across:Math.sin(e)*n,downhill:Math.cos(e)*n}),cf=(n,e)=>{let t=n.downhill;return Mh(t)+bi(n,e).height},qi=(n,e,t)=>typeof t.surfaceHeight=="function"?t.surfaceHeight(n.across,n.downhill,e):cf(n,e),of=(n,e,t)=>{if(typeof t.surfaceNormal=="function"){let o=t.surfaceNormal(n.across,n.downhill,e);return{across:o.x,up:o.y,downhill:-o.z}}let i=.12,s=(qi({...n,across:n.across+i},e,t)-qi({...n,across:n.across-i},e,t))/(i*2),r=(qi({...n,downhill:n.downhill+i},e,t)-qi({...n,downhill:n.downhill-i},e,t))/(i*2),a=Math.hypot(s,1,r);return{across:-s/a,up:1/a,downhill:-r/a}};uf=n=>.36+.12*lf(n)+Math.sin(n*.024-.3)*.2+Math.sin(n*.061)*.03,ey=(n,e,t,i)=>{let r=Math.exp(-(i==="ice"?.5:i==="powder"?3.4:1.9)*e),a={across:n.velocity.across*r,downhill:n.velocity.downhill*r+9.81*Math.sin(t)*e},o={across:n.position.across+a.across*e,downhill:n.position.downhill+a.downhill*e},c=bi(o,i),l=Math.hypot(a.across,a.downhill),h=Math.atan2(a.across,a.downhill),d=Math.max(0,n.crashTimer-e),u=d<=0,f=u?h+(n.switchRiding?Math.PI:0):jt(n.boardYaw+n.crashSpin*2.3*e);return Rl({...n,boardRotation:n.boardRotation+jt(f-n.boardYaw),boardYaw:f,boardOffset:0,butter:n.butter*Math.exp(-9*e),bumpImpact:n.bumpImpact*Math.exp(-10*e),carveQuality:0,chatter:n.chatter*Math.exp(-8*e),compression:n.compression*Math.exp(-5*e),crashed:!u,crashReason:u?null:n.crashReason,crashSpin:u?0:n.crashSpin,crashTimer:d,edge:u?0:n.edge*Math.exp(-6*e),elapsed:n.elapsed+e,flickBrake:0,flickRecovery:0,gForce:0,grounded:!0,heading:h,impactMeter:Math.max(0,n.impactMeter-25*e),landingImpact:n.landingImpact*Math.exp(-3*e),lean:u?0:n.lean*Math.exp(-4*e),position:o,popArcVelocity:0,popElapsed:0,popped:!1,angularMomentum:0,pressAmount:0,skid:u?0:1,slash:n.slash*Math.exp(-8*e),slipAngle:u?0:jt(n.boardYaw-h),slopeGrade:t,speed:l,surface:i,terrainHeight:c.height,terrainPitch:c.slope,terrainRoll:c.roll,torsoYaw:n.torsoYaw,velocity:a,washout:0})}});function fs(n){let e=Math.max(0,Math.floor(ds(n)));if($s.has(e))return $s.get(e);let t=wi+e*Ti,i=e%2===0?-1:1,s=i*(6.9+Math.sin(e*1.7)*.25),r=1.2+Math.sin(e*1.7)*.14,a=Object.freeze({id:e,lip:t,start:t-us,landingEnd:t+Sh,centerX:s,side:i,height:r});return $s.set(e,a),$s.size>32&&$s.delete($s.keys().next().value),a}function bh(n,e=0,t=0){if(!Number.isFinite(n)||!Number.isFinite(e)||n<0)return null;let i=Math.max(0,Math.round((n-wi)/Ti)),s=fs(i);return Math.abs(n-s.lip)<=t&&Math.abs(e-s.centerX)<=2.4?s:null}function ff(n,e){let t=bh(e,n,12);return t&&e<=t.lip?t.lip-e:1/0}function wh(n,e){if(!Number.isFinite(n)||!Number.isFinite(e))return 0;let t=Math.max(0,Math.floor((e-wi+us)/Ti)),i=fs(t),s=e-i.lip,r=Math.abs(n-i.centerX);if(s<-us||s>=Sh||r>=Pl)return 0;let a=1-Ks((r-.9)/(Pl-.9)),o;return s<0?o=i.height*((s+us)/us)**2.35:s<6?o=i.height+(-.35-i.height)*Ks(s/6):s<18?o=-.35:o=-.35*(1-Ks((s-18)/12)),o*a}function pf(n,e,t,i){let s=Math.max(.05,ds(t,.5)),r=Math.max(0,ds(i,0)),a=Math.hypot(n,e*.55),o=s*.85,c=s*1.8;return a<=o?-r*(1-(a/o)**2):a>=c?0:r*.22*Math.sin(Math.PI*(a-o)/(c-o))}function iy(n,e,t="powder"){let i=ds(n),s=ds(e),r=Mh(s),a=Math.max(0,Math.abs(i)-9.5),o=a**1.8*.021+Math.sin(s*.065+i*.12)*a*.025,c=Math.sin(s*.075+i*.095)*.22+Math.sin(s*.19-i*.16)*.085,l=bi({across:i,downhill:s},t).height;return r+ga(s)*.48+o+c+l}function kt(n,e,t="powder"){let i=ds(n),s=ds(e),r=ny(i,s),a=r>0?(bi({across:i,downhill:s},"groomed").height-bi({across:i,downhill:s},t).height)*r:0;return iy(i,s,t)+a+wh(i,s)}function oa(n,e,t="powder"){let s=(kt(n+.25,e,t)-kt(n-.25,e,t))/.5,r=(kt(n,e-.25,t)-kt(n,e+.25,t))/(.25*2),a=Math.hypot(s,1,r);return Object.freeze({x:-s/a,y:1/a,z:-r/a})}var ds,ty,Ks,wi,Ti,us,Sh,Pl,$s,ny,la=oi(()=>{Cl();ya();ds=(n,e=0)=>Number.isFinite(n)?n:e,ty=(n,e,t)=>Math.min(t,Math.max(e,n)),Ks=n=>{let e=ty(n,0,1);return e*e*(3-2*e)},wi=90,Ti=82,us=28,Sh=30,Pl=3.6,$s=new Map;ny=(n,e)=>{let t=Math.max(0,Math.floor((e-wi+us+3)/Ti)),i=fs(t),s=Math.abs(n-i.centerX);if(s>=Pl)return 0;let r=e-i.lip;return(1-Ks((s-.9)/(Pl-.9)))*Ks((r+us+3)/4)*(1-Ks((r-Sh+5)/8))}});var xf={};zf(xf,{createMountainWorld:()=>vy});function vy(n){let e=new Tl({canvas:n,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=rn,e.toneMapping=Zr,e.toneMappingExposure=1.03,e.shadowMap.enabled=!0,e.shadowMap.type=ss,e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),n.dataset.renderMode="webgl",Eh.map=uy(),Eh.needsUpdate=!0;let t=new Sr;t.background=new Je(11193305),t.fog=new Mr(11849433,220,480);let i=xy();t.add(i);let s=yy();t.add(s),t.add(new Wr(15333375,8559787,1.25));let r=new Yr(16774629,2.15);r.position.set(-40,90,35),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.left=-48,r.shadow.camera.right=48,r.shadow.camera.top=62,r.shadow.camera.bottom=-30,r.shadow.camera.near=.5,r.shadow.camera.far=185,r.shadow.bias=-3e-4,r.target.position.set(0,0,-25),t.add(r,r.target);let a=new on(64,1,.08,980);a.rotation.order="YXZ";let o=Jd();t.add(o.group);let c=new Map,l=new Map,h=new Map,d=new Map,u=xh(750),f=new Bt(new bt,new En({color:7576491,transparent:!0,opacity:.18,depthWrite:!1,side:Kt}));f.renderOrder=1,t.add(f);let p=[],x=new bt,g=new Float32Array(420);x.setAttribute("position",new Tn(g,3)),x.setDrawRange(0,0);let m=new Er(x,new Fs({color:15399419,size:.16,transparent:!0,opacity:.8,depthWrite:!1,sizeAttenuation:!0}));t.add(m);let y={hazards:[],phase:"idle"},b=0,v=null,E=()=>{let U=Math.max(1,n.clientWidth||window.innerWidth),O=Math.max(1,n.clientHeight||window.innerHeight);e.setSize(U,O,!1),a.aspect=U/O,a.updateProjectionMatrix()};window.addEventListener("resize",E),E();let T=U=>{let O=Math.floor((U-sy)/Cn),J=Math.ceil((U+Th)/Cn);for(let L=O;L<=J;L+=1){if(c.has(L))continue;let k=dy(L),H=fy(L);t.add(k.mesh,H),c.set(L,{...k,grooves:H})}for(let[L,k]of c)L>=O&&L<=J||(t.remove(k.mesh,k.grooves),k.mesh.geometry.dispose(),k.grooves.geometry.dispose(),k.grooves.material.dispose(),c.delete(L))},_=U=>{let O=Math.max(0,Math.floor((U-50-wi)/Ti)),J=Math.max(0,Math.ceil((U+Th-wi)/Ti));for(let L=O;L<=J;L+=1){if(d.has(L))continue;let k=_y(fs(L));t.add(k),d.set(L,k)}for(let[L,k]of d)L>=O&&L<=J||(t.remove(k),k.traverse(H=>H.geometry?.dispose()),d.delete(L))},w=(U,O)=>{let J=Math.floor(O/Cn),L=c.get(J);if(!L)return 0;let k=L.acrossSamples,H=0;for(;H<k.length-2&&k[H+1]<U;)H+=1;let G=tn((U-k[H])/(k[H+1]-k[H]),0,1),he=tn((O-J*Cn)/Cn*L.rows,0,L.rows),Z=Math.min(L.rows-1,Math.floor(he)),ce=he-Z,_e=k.length,pe=(We,xe)=>L.rutOffsets[We*_e+xe],ae=pe(Z,H)*(1-G)+pe(Z,H+1)*G,we=pe(Z+1,H)*(1-G)+pe(Z+1,H+1)*G;return ae*(1-ce)+we*ce},D=()=>{v=null;for(let U of c.values()){let O=U.mesh.geometry.getAttribute("position"),J=U.mesh.geometry.getAttribute("color");for(let L=0;L<U.baseHeights.length;L+=1)U.rutOffsets[L]!==0&&(O.setY(L,U.baseHeights[L]),J.setXYZ(L,U.baseColors[L*3],U.baseColors[L*3+1],U.baseColors[L*3+2]));U.rutOffsets.fill(0),O.needsUpdate=!0,J.needsUpdate=!0,U.mesh.geometry.computeVertexNormals()}},R=U=>{if(y.phase!=="running"||U.air>.08||U.crashed)return;let O=U.position.across,J=U.position.downhill;if(v&&Math.hypot(O-v.across,J-v.downhill)<.34)return;v={across:O,downhill:J};let k=({powder:.16,chop:.095,slush:.075,groomed:.045,ice:.008,rail:0}[U.surface]??.08)*(.7+tn(U.compression||0,0,1)*.22+tn(U.gForce||0,0,1.5)*.12),H=.6+tn(U.skid||0,0,1)*.3;for(let[G,he]of c){if(J<G*Cn-2||J>(G+1)*Cn+2)continue;let Z=he.mesh.geometry.getAttribute("position"),ce=he.mesh.geometry.getAttribute("color"),_e=he.acrossSamples,pe=!1;for(let ae=0;ae<=he.rows;ae+=1){let we=G*Cn+ae/he.rows*Cn;if(!(Math.abs(we-J)>H*3.4))for(let We=0;We<_e.length;We+=1){let xe=_e[We];if(Math.abs(xe-O)>H*1.8)continue;let De=pf(xe-O,we-J,H,k),Ne=ae*_e.length+We,X=he.rutOffsets[Ne],oe=De<0?Math.min(X,De):X<0?X:Math.max(X,De);if(oe===X)continue;he.rutOffsets[Ne]=oe,Z.setY(Ne,he.baseHeights[Ne]+oe);let le=tn(-oe/.16,0,1),ue=tn(oe/.04,0,1);ce.setXYZ(Ne,he.baseColors[Ne*3]*(1-le*.13+ue*.035),he.baseColors[Ne*3+1]*(1-le*.08+ue*.025),he.baseColors[Ne*3+2]*(1-le*.04+ue*.02)),pe=!0}}pe&&(Z.needsUpdate=!0,ce.needsUpdate=!0,he.mesh.geometry.computeVertexNormals())}},C=U=>{let O=xa(Math.max(0,U-20),Th,{halfWidth:ry}),J=new Set(O.map(L=>L.index));for(let L of O){if(l.has(L.index))continue;let k=new Dt;for(let H of L.scenery){let G=H.kind==="rock"?_f(H.size):Ah(H.size);G.position.set(H.x,kt(H.x,H.z),-H.z),G.rotation.y=Il(H.z+H.x)*Math.PI*2,k.add(G)}t.add(k),l.set(L.index,k)}for(let[L,k]of l)J.has(L)||(t.remove(k),l.delete(L))},z=()=>{let U=new Set(y.hazards.map(O=>O.id));for(let O of y.hazards){if(h.has(O.id))continue;let J=gy(O);J.position.set(O.x,kt(O.x,O.worldDownhill),-O.worldDownhill),t.add(J),h.set(O.id,J)}for(let[O,J]of h)U.has(O)||(t.remove(J),h.delete(O))},$=U=>{u.update(U);let O=[],J=U.position.downhill,L=u.points();for(let H=1;H<L.length;H+=1){let G=L[H-1],he=L[H];if(J-G.downhill>5||he.downhill>J+.2||he.downhill-G.downhill>1.8)continue;let Z=he.kind==="carve"?.035:he.kind==="skid"?.14:.07,ce=G.across-Z,_e=G.across+Z,pe=he.across-Z,ae=he.across+Z,we=kt(G.across,G.downhill)+w(G.across,G.downhill)+.022,We=kt(he.across,he.downhill)+w(he.across,he.downhill)+.022;O.push(ce,we,-G.downhill,_e,we,-G.downhill,pe,We,-he.downhill,_e,we,-G.downhill,ae,We,-he.downhill,pe,We,-he.downhill)}let k=new bt;k.setAttribute("position",new nt(O,3)),f.geometry.dispose(),f.geometry=k},I=(U,O,J,L)=>{for(let H=p.length-1;H>=0;H-=1){let G=p[H];if(G.life-=L,G.life<=0){p.splice(H,1);continue}G.x+=G.vx*L,G.y+=G.vy*L,G.z+=G.vz*L,G.vy-=5.8*L}let k=tn(Number(O.spray)||0,0,1);if(y.phase==="running"&&U.air<.08&&k>.12){let H=Math.min(10,Math.ceil(k*7)),G=Math.sign(U.slipAngle||U.edge||1);for(let he=0;he<H&&p.length<140;he+=1){let Z=Il(U.elapsed*113+he*23);p.push({x:U.position.across+G*(.15+Z*.22),y:J+.09,z:-U.position.downhill+.2,vx:G*(.7+Z*2.9),vy:1.2+Z*2.9,vz:1.2+Il(Z*17)*3.5,life:.3+Z*.45})}}for(let H=0;H<p.length;H+=1){let G=p[H];g[H*3]=G.x,g[H*3+1]=G.y,g[H*3+2]=G.z}x.attributes.position.needsUpdate=!0,x.setDrawRange(0,p.length)};return Object.freeze({render:({camera:U={},pose:O={},state:J={}}={})=>{let L=J.position??{across:0,downhill:0},k=Number.isFinite(L.downhill)?L.downhill:0,H=Number.isFinite(L.across)?L.across:0,G=Number.isFinite(J.elapsed)?J.elapsed:0,he=G<b||G===0,Z=G<b?0:tn(G-b,0,.05);b=G,he&&(u.reset(),p.length=0,D()),T(k),_(k),C(k),z(),R(J);let ce=kt(H,k,J.surface)+w(H,k);o.update(J,O,ce,oa(H,k,J.surface)),$(J),I(J,O,ce,Z);let _e=Number.isFinite(U.position?.across)?U.position.across:H,pe=tn((Number(J.air)||0)/2,0,1),ae=6.2+pe*2.3,we=kt(_e-1.3,k-ae,J.surface),We=Number.isFinite(J.worldHeight)?J.worldHeight:ce+(Number(J.air)||0);a.position.set(_e-1.3,Math.max(we+2.55,We+pe*3.8)-tn(U.dip||0,0,1)*.25,-k+ae);let xe=Number.isFinite(J.heading)?J.heading:0,De=H+3+Math.sin(xe)*5.8,Ne=k+15+pe*20;a.lookAt(De,kt(De,Ne,J.surface)+3.7,-Ne),a.rotateZ(tn(U.roll||0,-.06,.06));let X=60+(1-tn(U.zoom||1,.8,1))*20;Math.abs(a.fov-X)>.04&&(a.fov=X,a.updateProjectionMatrix()),i.position.copy(a.position),s.position.set(H*.14,kt(0,k+315)+14,-k-315),r.position.set(H-42,ce+85,-k+38),r.target.position.set(H,ce-10,-k-28),r.target.updateMatrixWorld(),e.render(t,a)},setCourse(U={}){y={hazards:Array.isArray(U.hazards)?U.hazards:[],phase:U.phase??"idle"}}})}var Cn,Th,sy,ry,Eh,Ll,ay,oy,mf,ly,gf,cy,hy,tn,Il,Pn,uy,dy,fy,Ah,_f,py,my,gy,_y,xy,yy,yf=oi(()=>{_h();$d();yh();ya();la();Cn=36,Th=246,sy=24,ry=9.5,Eh=new un({vertexColors:!0,roughness:.98,metalness:0,side:Kt}),Ll=new un({color:6641737,roughness:1}),ay=new un({color:9533795,roughness:1}),oy=[1788994,2645070,3501400].map(n=>new un({color:n,roughness:1,flatShading:!0})),mf=new un({color:15397875,roughness:.98}),ly=new un({color:6912899,roughness:.98,flatShading:!0}),gf=new un({color:5137004,roughness:1,flatShading:!0}),cy=new un({color:14249040,roughness:.83,side:Kt,flatShading:!0}),hy=new un({color:4032403,roughness:.86,side:Kt,flatShading:!0}),tn=(n,e,t)=>Math.min(t,Math.max(e,n)),Il=n=>{let e=Math.sin(n*127.1+31.37)*43758.5453;return e-Math.floor(e)},Pn=(n,e,t,i=0,s=0,r=0)=>{let a=new Bt(n,e);return a.position.set(i,s,r),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a},uy=()=>{let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256),i=58291,s=()=>(i=Math.imul(i,1664525)+1013904223|0,(i>>>0)/4294967296);for(let a=0;a<t.data.length;a+=4){let o=Math.floor(236+s()*19);t.data[a]=o,t.data[a+1]=Math.min(255,o+3),t.data[a+2]=Math.min(255,o+5),t.data[a+3]=255}e.putImageData(t,0,0);for(let a=0;a<115;a+=1){let o=s()*256,c=s()*256;e.strokeStyle=`rgba(94, 139, 157, ${.025+s()*.055})`,e.lineWidth=.6+s()*1.3,e.beginPath(),e.moveTo(o,c),e.quadraticCurveTo(o+9,c-1,o+18+s()*18,c+1),e.stroke()}let r=new Rr(n);return r.wrapS=es,r.wrapT=es,r.colorSpace=rn,r.anisotropy=4,r},dy=n=>{let e=new bt,t=[],i=[],s=[],r=[],a=[];for(let g=-41;g<-10;g+=2.5)a.push(g);for(let g=-10;g<=10+1e-8;g+=.5)a.push(g);for(let g=12.5;g<41;g+=2.5)a.push(g);a.push(41);let o=a.length-1,c=48,l=new Je(15397361),h=new Je(13164002),d=new Je,u=new Je(13887977),f=new Je(12048095),p=[];for(let g=0;g<=c;g+=1){let m=n*Cn+g/c*Cn;for(let y=0;y<=o;y+=1){let b=a[y],v=kt(b,m);t.push(b,v,-m),p.push(v),s.push(b/8,m/8);let E=tn((Math.abs(b)-7.7)/8,0,1),T=(Math.sin(m*.33+b*.47)+Math.sin(m*.12-b*.81))*.019;d.copy(l).lerp(h,E).offsetHSL(0,0,T);let _=wh(b,m);_>.15&&d.lerp(u,tn(_/1.1,0,1)*.3),_<-.1&&d.lerp(f,tn(-_/.35,0,1)*.14),i.push(d.r,d.g,d.b)}}for(let g=0;g<c;g+=1)for(let m=0;m<o;m+=1){let y=g*(o+1)+m,b=y+1,v=y+o+1,E=v+1;r.push(y,b,v,b,E,v)}e.setIndex(r),e.setAttribute("position",new nt(t,3)),e.setAttribute("color",new nt(i,3)),e.setAttribute("uv",new nt(s,2)),e.computeVertexNormals();let x=new Bt(e,Eh);return x.receiveShadow=!0,x.frustumCulled=!1,{mesh:x,acrossSamples:a,baseHeights:Float32Array.from(p),baseColors:Float32Array.from(i),rutOffsets:new Float32Array(p.length),rows:c}},fy=n=>{let e=[];for(let s=-11;s<=11;s+=1){let r=s*.76;for(let a=0;a<12;a+=1){let o=n*Cn+a*3,c=o+3;e.push(r,kt(r,o)+.018,-o,r,kt(r,c)+.018,-c)}}let t=new bt;t.setAttribute("position",new nt(e,3));let i=new Tr(t,new Us({color:8826552,transparent:!0,opacity:.09,depthWrite:!1}));return i.frustumCulled=!1,i},Ah=(n=1)=>{let e=new Dt,t=3.9*n;Pn(new $t(.09*n,.17*n,t*.38,7),Ll,e,0,t*.19,0);for(let i=0;i<3;i+=1){let s=(1.15-i*.22)*n,r=(2.2-i*.15)*n,a=(1.5+i*.8)*n;Pn(new ts(s,r,7),oy[i],e,0,a,0);let o=Pn(new ts(s*.54,r*.42,7),mf,e,0,a+r*.3,0);o.castShadow=!1}return e},_f=(n=1)=>{let e=new Dt,t=Pn(new _i(.86*n,0),ly,e,0,.48*n,0);t.scale.set(1.2,.68,.92),t.rotation.set(.18,.47,-.11);let i=Pn(new _i(.47*n,0),gf,e,.52*n,.28*n,.2*n);i.scale.y=.66;let s=Pn(new ts(.52*n,.22*n,5),mf,e,-.1*n,.96*n,-.1*n);return s.rotation.z=-.18,e},py=()=>{let n=new Dt,e=Pn(new $t(.29,.39,14.5,10),Ll,n,0,.44,0);e.rotation.z=Math.PI/2;for(let t of[-1,1]){let i=Pn(new $t(.4,.4,.035,10),ay,n,t*7.27,.44,0);i.rotation.z=Math.PI/2}for(let t of[-4.2,-1.5,2.7,5.2]){let i=Pn(new $t(.055,.13,1.15,6),Ll,n,t,.7,-.23);i.rotation.z=-.7}return n},my=()=>{let n=new Dt,e=Pn(new $t(.16,.28,8,8),Ll,n,0,1.72,0);e.rotation.z=Math.PI/2;for(let t of[-1,1]){let i=Ah(.6);i.position.set(t*4.1,0,.15),n.add(i)}return n},gy=n=>n.kind==="jump"?py():n.kind==="duck"?my():n.variant==="rock"?_f(1.15):Ah(1.25),_y=n=>{let e=new Dt;for(let[t,i,s]of[[n.lip-3,cy,1.75],[n.lip+26,hy,1.2]]){let r=n.side*10.7,a=new Dt;a.position.set(r,kt(r,t),-t),Pn(new $t(.025,.035,s,6),gf,a,0,s*.5,0);let o=new ei;o.moveTo(0,0),o.lineTo(0,.35),o.lineTo(-n.side*.48,.22),o.closePath(),Pn(new is(o),i,a,0,s-.38,0),e.add(a)}return e},xy=()=>{let n=new xi(900,24,16),e=n.getAttribute("position"),t=[],i=new Je(13163749),s=new Je(6461626),r=new Je;for(let o=0;o<e.count;o+=1){let c=tn((e.getY(o)/900+.08)*1.45,0,1);r.copy(i).lerp(s,c),t.push(r.r,r.g,r.b)}n.setAttribute("color",new nt(t,3));let a=new Bt(n,new En({vertexColors:!0,side:en,fog:!1,depthWrite:!1,toneMapped:!1}));return a.renderOrder=-1,a},yy=()=>{let n=new Dt,e=[new En({color:8625834,side:Kt,fog:!0}),new En({color:10664900,side:Kt,fog:!0}),new En({color:14477802,side:Kt,fog:!0})];for(let t=0;t<2;t+=1){let i=[],s=[],r=[];for(let l=0;l<=22;l+=1)r.push({x:-480+l*44,y:28+Il(l*7+t*19)*43+Math.sin(l*.87+t)*20});let a=-t*80;for(let l=0;l<r.length-1;l+=1){let h=r[l],d=r[l+1];i.push(h.x,-70,a,h.x,h.y,a-8,d.x,d.y,a-8,h.x,-70,a,d.x,d.y,a-8,d.x,-70,a),s.push(h.x,h.y,a-8,d.x,d.y,a-8,h.x+7,h.y-13,a-5,d.x,d.y,a-8,d.x-8,d.y-16,a-5,h.x+7,h.y-13,a-5)}let o=new bt;o.setAttribute("position",new nt(i,3));let c=new bt;c.setAttribute("position",new nt(s,3)),n.add(new Bt(o,e[t])),n.add(new Bt(c,e[2]))}return n}});ya();var qe=Object.freeze({halfWidth:9.5,spawnDistance:44}),vn=(n,e,t)=>Math.min(t,Math.max(e,n)),ca=n=>vn(Math.min(n.width/1100,n.height/700),.72,1.75),My=(n,e)=>{let t=vn((e/n.height-.36)/(.78-.36),0,1),i=0,s=1;for(let r=0;r<12;r+=1){let a=(i+s)/2;a*a*(3-2*a)<t?i=a:s=a}return(i+s)/2},Ph=(n,e,t,i,s)=>{let r=(1-My(n,e))*qe.spawnDistance,a=1+.09*Math.sin((s+r)/34)*r/qe.spawnDistance,o=rr(n,e)*a,c=_a(s+r)-_a(s);return n.width/2+(i+(c-t)/qe.halfWidth)*o},Dl=(n,e,t,i,s)=>{for(let r=0;r<=48;r+=1){let a=e.height*(.36+(1-.36)*r/48),o=Ph(e,a,t,i,s);r===0?n.moveTo(o,a):n.lineTo(o,a)}},Sy=(n,e,t,i,s)=>{n.beginPath(),Dl(n,e,t,i,s);for(let r=48;r>=0;r-=1){let a=e.height*(.36+(1-.36)*r/48),o=r/48,c=Math.sin(r*.72+s*.12)*o*e.width*.002,l=e.width*(.003+o*o*.018)+c;n.lineTo(Ph(e,a,t,i,s)+i*l,a)}n.closePath(),n.fillStyle="#b9dbe8",n.fill(),n.beginPath(),Dl(n,e,t,i,s),n.strokeStyle="#f8ffff",n.lineWidth=Math.max(5,e.width*.006),n.stroke(),n.beginPath(),Dl(n,e,t,i,s),n.strokeStyle="#61cfe0",n.lineWidth=Math.max(1.5,e.width*.0013),n.stroke()},Ch=(n,e,t,i,s,r,a,o)=>{for(let[c,l,h,d]of t){let u=e.width*c+o,f=e.height*l,p=e.height*i,x=e.width*h*.5,g=u-x,m=u+x,y=(p-f)*.28;n.fillStyle=s,n.beginPath(),n.moveTo(g,p),n.lineTo(u-x*.53,f+y*1.4),n.lineTo(u-x*.22,f+y*.58),n.lineTo(u+d*x,f),n.lineTo(u+x*.27,f+y*.74),n.lineTo(u+x*.62,f+y*1.6),n.lineTo(m,p),n.closePath(),n.fill(),n.fillStyle=r,n.beginPath(),n.moveTo(u+d*x,f),n.lineTo(u+x*.27,f+y*.74),n.lineTo(m,p),n.lineTo(u+x*.1,p),n.lineTo(u-x*.09,f+y*1.6),n.closePath(),n.fill(),n.fillStyle=a,n.beginPath(),n.moveTo(u-x*.22,f+y*.58),n.lineTo(u+d*x,f),n.lineTo(u+x*.27,f+y*.74),n.lineTo(u+x*.08,f+y*.9),n.lineTo(u-x*.02,f+y*.72),n.lineTo(u-x*.11,f+y*1.05),n.closePath(),n.fill(),n.fillStyle="rgba(121, 177, 197, 0.2)",n.beginPath(),n.moveTo(u-x*.23,f+(p-f)*.23),n.lineTo(u,f),n.lineTo(u-x*.04,f+(p-f)*.23),n.closePath(),n.fill()}},by=(n,e,t,i)=>{let s=n.createLinearGradient(0,0,0,e.height*.6);s.addColorStop(0,"#58a7cc"),s.addColorStop(.62,"#b9e4ef"),s.addColorStop(1,"#effaff"),n.fillStyle=s,n.fillRect(0,0,e.width,e.height);let r=e.width*.76-t*4,a=e.height*.13,o=n.createRadialGradient(r,a,2,r,a,e.height*.28);o.addColorStop(0,"rgba(255,250,222,0.68)"),o.addColorStop(1,"rgba(255,250,222,0)"),n.fillStyle=o,n.fillRect(0,0,e.width,e.height*.48),n.fillStyle="#fff9e4",n.beginPath(),n.arc(r,a,e.height*.029,0,Math.PI*2),n.fill(),Ch(n,e,[[-.06,.17,.31,-.08],[.17,.08,.35,.04],[.43,.19,.34,-.1],[.7,.09,.37,.08],[1.04,.16,.36,-.06]],.42,"#c8dbe1","#a9c8d2","#f5fbfa",-t*2.5),Ch(n,e,[[-.07,.29,.27,.09],[.16,.2,.34,-.07],[.48,.27,.3,.06],[.78,.2,.35,-.08],[1.08,.27,.31,.07]],.51,"#9bbbc7","#739bac","#eff9fa",-t*5),Ch(n,e,[[-.11,.39,.33,.08],[.24,.32,.32,-.06],[.53,.38,.28,.07],[.87,.31,.34,-.08],[1.13,.4,.3,.04]],.59,"#6f9baa","#4c7d91","#d9eef1",-t*8);let c=n.createLinearGradient(0,e.height*.45,0,e.height);c.addColorStop(0,"#e3f5f6"),c.addColorStop(1,"#c3e0e8"),n.fillStyle=c,n.beginPath(),n.moveTo(0,e.height*.56),n.bezierCurveTo(e.width*.13,e.height*.46,e.width*.23,e.height*.56,e.width*.39,e.height*.5),n.bezierCurveTo(e.width*.57,e.height*.43,e.width*.65,e.height*.57,e.width*.79,e.height*.48),n.bezierCurveTo(e.width*.88,e.height*.44,e.width*.95,e.height*.54,e.width,e.height*.52),n.lineTo(e.width,e.height),n.lineTo(0,e.height),n.closePath(),n.fill();let l=n.createLinearGradient(0,e.height*.36,0,e.height);l.addColorStop(0,"#f6fcfc"),l.addColorStop(.55,"#ffffff"),l.addColorStop(1,"#f7fcff"),n.fillStyle=l,n.beginPath(),Dl(n,e,t,-1,i);for(let h=48;h>=0;h-=1){let d=e.height*(.36+(1-.36)*h/48);n.lineTo(Ph(e,d,t,1,i),d)}n.closePath(),n.fill();for(let h of[-1,1])Sy(n,e,t,h,i)},wy=(n,e,t,i,s,r)=>{let a=s==="powder"?4.8:2.8,o=Math.floor(i/a)*a,c=s==="ice"?.05:s==="powder"?.075:.11;n.save(),n.strokeStyle=s==="ice"?"#81c9d7":"#9bcbd4";for(let l=o;l<i+qe.spawnDistance;l+=a){let h=l-i;if(h<.5||h>qe.spawnDistance)continue;let d={...qe,travel:i},u=On(e,t,{x:-qe.halfWidth*.86,z:h},d),f=On(e,t,{x:qe.halfWidth*.86,z:h},d),p=Math.sin(l*.75)*5*u.scale;n.globalAlpha=c*u.alpha*(.65+Math.min(r/34,1)*.35),n.lineWidth=Math.max(.7,u.scale*(s==="powder"?2.5:1.4)),n.beginPath(),n.moveTo(u.x,u.y),n.quadraticCurveTo((u.x+f.x)/2,u.y-4*u.scale,f.x,f.y),n.stroke()}n.restore()},Ty=(n,e,t,i,s)=>{let r=.58+.42*Math.sin(i*.14+.8)**2,a=vn((s-14)/20,0,1)*r;if(!(a<.1)){n.save(),n.strokeStyle="#ffffff",n.lineCap="round";for(let o=0;o<14;o+=1){let c=(o*8+i*(.65+o%3*.09))%qe.spawnDistance,l=o%2?1:-1,h=On(e,t,{x:l*(qe.halfWidth+3.5+o%3*2),z:c},{...qe,travel:i}),d=(11+h.scale*42)*ca(e);n.globalAlpha=h.alpha*a*.28,n.lineWidth=Math.max(1,h.scale*2.2),n.beginPath(),n.moveTo(h.x-d*.5,h.y),n.quadraticCurveTo(h.x,h.y-4*h.scale,h.x+d,h.y-2*h.scale),n.stroke()}n.restore()}},Ey=(n,e,t,i)=>{let r=Math.floor(i/7.5)*7.5;n.save(),n.lineCap="round";for(let a=r;a<i+qe.spawnDistance;a+=7.5){let o=a-i;if(!(o<1||o>qe.spawnDistance))for(let c of[-1,1]){let l=On(e,t,{x:c*(qe.halfWidth+1.8),z:o},{...qe,travel:i}),h=On(e,t,{x:c*(qe.halfWidth+9),z:o},{...qe,travel:i});n.globalAlpha=l.alpha*.34,n.strokeStyle="#8bbac9",n.lineWidth=Math.max(1,l.scale*3.5),n.beginPath(),n.moveTo(l.x,l.y),n.quadraticCurveTo((l.x+h.x)/2,l.y-8*l.scale,h.x,h.y-3*l.scale),n.stroke()}}n.restore()},Ay=(n,e,t,i)=>{let s=Math.max(0,t-i.downhill),r=n.height*.78+s*Math.max(3.5,n.height*.006);return{x:n.width/2+(i.across-e)/qe.halfWidth*rr(n,r),y:r,behind:s}},Ry=(n,e,t,i,s)=>{if(s.length<2)return;let r=s.map(o=>({...Ay(e,t,i,o),speed:o.speed})).filter(o=>o.y<=e.height+25);if(r.length<2)return;let a=ca(e);n.lineCap="round",n.lineJoin="round";for(let[o,c,l]of[[-10,9,"rgba(85,150,166,0.32)"],[10,9,"rgba(85,150,166,0.32)"],[-10,4,"rgba(255,255,255,0.92)"],[10,4,"rgba(255,255,255,0.92)"]]){n.beginPath(),n.moveTo(r[0].x+o*a,r[0].y);for(let h of r.slice(1))n.lineTo(h.x+o*a,h.y);n.strokeStyle=l,n.lineWidth=c*a,n.stroke()}for(let o=0;o<r.length;o+=3){let c=r[o],l=vn(1-c.behind/28,0,1),h=vn((c.speed||16)/25,.7,1.45),d=(20+o%4*5)*a,u=(8+o%5*2.1)*a*l*h;if(!(u<.5))for(let f of[-1,1])n.globalAlpha=l,n.fillStyle="rgba(93,151,166,0.27)",n.beginPath(),n.ellipse(c.x+f*d,c.y+u*.55,u*1.65,u*.65,0,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(c.x+f*d,c.y,u*1.2,u*.8,0,0,Math.PI*2),n.fill()}n.globalAlpha=1},Cy=(n,e,t,i,s=0,r=16,a=e.width/2)=>{let o=ca(e),c=e.height*.78,l=vn(Math.abs(t),0,1),h=vn(s/8,0,1);if(l<.05&&h<.08)return;let d=vn(r/24,.75,1.5);for(let u of[-1,1]){let f=(.52+(u*t>0?l*1.1:l*.35)+h*.8)*d;for(let p=0;p<12;p+=1){let x=(i*2.7+p*.8)%11,g=a+u*(28+x*(5.2+l*3.4))*o,m=c+(x*2.3+Math.sin(p*2.1)*6)*o,y=(5+(11-x)*.95)*o*f;n.fillStyle="rgba(85,151,174,0.24)",n.beginPath(),n.ellipse(g,m+y*.45,y*1.42,y*.72,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.96)",n.beginPath(),n.ellipse(g,m,y*1.12,y*.8,0,0,Math.PI*2),n.fill()}}},Py=(n,e,t)=>{if(t<=0)return;let i=ca(e),s=1-vn(t/.8,0,1),r=e.width/2,a=e.height*.78;n.save(),n.globalAlpha=vn(t*1.2,0,1);for(let o=0;o<18;o+=1){let c=o*Math.PI*2/18,l=(18+s*110+o%3*11)*i,h=(6+o%4*2.4)*i*(1-s*.55);n.fillStyle=o%3===0?"#b5e3e9":"#ffffff",n.beginPath(),n.ellipse(r+Math.cos(c)*l,a+Math.sin(c)*l*.45,h*1.3,h*.8,0,0,Math.PI*2),n.fill()}n.restore()},Mf=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.28)":"rgba(45,104,114,0.16)",n.beginPath(),n.ellipse(e+i*.15,t+i*.06,i*.52,i*.13,0,0,Math.PI*2),n.fill(),n.fillStyle="#624535",n.fillRect(e-i*.06,t-i*.3,i*.12,i*.32);for(let r=0;r<3;r+=1){let a=t-i*(1-r*.24),o=t-i*(.32-r*.13),c=i*(.25+r*.105);n.fillStyle=s?r===1?"#17664e":"#0a463d":r===1?"#2a8b6b":"#176c57",n.beginPath(),n.moveTo(e,a),n.lineTo(e-c,o),n.lineTo(e+i*.04,o),n.closePath(),n.fill(),n.fillStyle=r===1?"#269976":"#1a856a",n.beginPath(),n.moveTo(e,a),n.lineTo(e+i*.04,o),n.lineTo(e+c,o),n.closePath(),n.fill(),n.fillStyle=s?"#0d4d43":"#1d765f",n.beginPath(),n.moveTo(e,a),n.lineTo(e+c,o),n.lineTo(e+c*.06,o),n.closePath(),n.fill(),n.strokeStyle="#e6f6f5",n.lineWidth=Math.max(1,i*.027),n.beginPath(),n.moveTo(e-c*.13,a+i*.08),n.lineTo(e-c*.45,a+(o-a)*.63),n.lineTo(e-c*.67,a+(o-a)*.68),n.stroke()}s&&(n.strokeStyle="rgba(229,106,65,0.8)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.ellipse(e,t+i*.02,i*.43,i*.1,0,0,Math.PI*2),n.stroke())},Sf=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.26)":"rgba(45,104,114,0.15)",n.beginPath(),n.ellipse(e+i*.14,t+i*.06,i*.59,i*.15,0,0,Math.PI*2),n.fill(),n.fillStyle=s?"#374859":"#627889",n.beginPath(),n.moveTo(e-i*.44,t),n.lineTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.39,t-i*.25),n.lineTo(e+i*.46,t),n.closePath(),n.fill(),n.strokeStyle=s?"#273746":"#536d7b",n.lineWidth=Math.max(1.5,i*.025),n.stroke(),n.fillStyle=s?"#708b99":"#9bb9c2",n.beginPath(),n.moveTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.16,t-i*.31),n.lineTo(e-i*.21,t-i*.23),n.closePath(),n.fill(),n.strokeStyle="#effbfb",n.lineWidth=Math.max(2,i*.055),n.beginPath(),n.moveTo(e-i*.21,t-i*.32),n.lineTo(e+i*.03,t-i*.42),n.lineTo(e+i*.16,t-i*.33),n.stroke(),s&&(n.strokeStyle="rgba(229,106,65,0.85)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.moveTo(e-i*.43,t+i*.02),n.quadraticCurveTo(e,t+i*.16,e+i*.43,t+i*.02),n.stroke())},Iy=(n,e,t,i)=>{let s=xa(i,qe.spawnDistance,{halfWidth:qe.halfWidth}),r=s.flatMap(a=>a.scenery);r.sort((a,o)=>o.z-a.z);for(let a of r){let o=a.z-i;if(o<0||o>qe.spawnDistance)continue;let c=On(e,t,{x:a.x,z:o},{...qe,travel:i}),l=c.pathHalf/qe.halfWidth*2.35*a.size;n.save(),n.globalAlpha=c.alpha*.92,Bl(a.z)==="glow"&&(n.fillStyle="rgba(54,218,225,0.18)",n.beginPath(),n.ellipse(c.x,c.y,l*.65,l*.13,0,0,Math.PI*2),n.fill()),a.kind==="rock"?Sf(n,c.x,c.y,l):Mf(n,c.x,c.y,l),n.restore()}for(let a of s){if(a.index%8!==3)continue;let o=a.index*36+36/2-i;if(o<0||o>qe.spawnDistance)continue;let c=a.index%16===3?-1:1,l=On(e,t,{x:c*(qe.halfWidth+10),z:o},{...qe,travel:i}),h=l.pathHalf/qe.halfWidth;n.save(),n.globalAlpha=l.alpha*.8,n.fillStyle="#284f61",n.fillRect(l.x-h*.7,l.y-h*2.5,h*1.4,h*2.5),n.fillStyle="#e6f5f6",n.beginPath(),n.moveTo(l.x-h,l.y-h*2.5),n.lineTo(l.x,l.y-h*3.5),n.lineTo(l.x+h,l.y-h*2.5),n.closePath(),n.fill(),n.fillStyle="#ef9d65",n.fillRect(l.x-h*.2,l.y-h*1.2,h*.4,h*1.2),n.restore()}for(let a of s){if(a.biome!=="glow"||a.index%4!==0)continue;let o=a.index*36+3-i;if(!(o<0||o>qe.spawnDistance))for(let c of[-1,1]){let l=On(e,t,{x:c*(qe.halfWidth+4.5),z:o},{...qe,travel:i}),h=l.pathHalf/qe.halfWidth;n.save(),n.globalAlpha=l.alpha,n.fillStyle="rgba(53,219,222,0.25)",n.beginPath(),n.ellipse(l.x,l.y,h*1.3,h*.32,0,0,Math.PI*2),n.fill(),n.fillStyle="#24485c",n.fillRect(l.x-h*.16,l.y-h*2.5,h*.32,h*2.5),n.fillStyle="#55e2df",n.beginPath(),n.arc(l.x,l.y-h*2.55,h*.45,0,Math.PI*2),n.fill(),n.restore()}}},Ly=(n,e,t,i)=>{let s=Math.floor(i/10)*10;for(let r=s;r<i+qe.spawnDistance;r+=10){let a=r-i;if(!(a<1||a>qe.spawnDistance-1))for(let o of[-1,1]){let c=On(e,t,{x:o*(qe.halfWidth+.55),z:a},{halfWidth:qe.halfWidth,viewDistance:qe.spawnDistance,travel:i}),l=ca(e)*c.scale,h=38*l,{x:d,y:u}=c;n.save(),n.globalAlpha=c.alpha,n.strokeStyle="rgba(55, 103, 123, 0.22)",n.lineWidth=Math.max(1,2*l),n.beginPath(),n.moveTo(d,u),n.lineTo(d+o*16*l,u+3*l),n.stroke(),n.strokeStyle="#e15f50",n.lineWidth=Math.max(1.5,3*l),n.beginPath(),n.moveTo(d,u),n.lineTo(d,u-h),n.stroke(),n.strokeStyle="#f58e71",n.lineWidth=Math.max(.8,l),n.beginPath(),n.moveTo(d-l*.75,u-2*l),n.lineTo(d-l*.75,u-h),n.stroke(),n.fillStyle="#c6b9aa",n.beginPath(),n.moveTo(d+2*l,u-h+l),n.lineTo(d-o*13*l+2*l,u-h+6*l),n.lineTo(d+2*l,u-h+11*l),n.closePath(),n.fill(),n.fillStyle="#f4e9d8",n.beginPath(),n.moveTo(d,u-h),n.lineTo(d-o*15*l,u-h+5*l),n.lineTo(d,u-h+10*l),n.closePath(),n.fill(),n.restore()}}},Dy=(n,e,t)=>{let i=t.pathHalf*2.08,s=Math.max(7,t.pathHalf/qe.halfWidth*.72),{x:r,y:a}=t;n.fillStyle="rgba(25,53,63,0.22)",n.beginPath(),n.ellipse(r,a+s*.7,i*.52,s*.7,0,0,Math.PI*2),n.fill(),n.fillStyle="#a9d7db",n.beginPath(),n.moveTo(r-i*.43,a+s*1.6),n.lineTo(r-i*.4,a-s*.6),n.lineTo(r+i*.4,a-s*.6),n.lineTo(r+i*.43,a+s*1.6),n.closePath(),n.fill(),n.fillStyle="#523929",n.fillRect(r-i/2,a-s,i,s*1.12),n.fillStyle="#ac7044",n.fillRect(r-i/2,a-s,i,s*.3),n.fillStyle="#f2f9f5",n.fillRect(r-i*.48,a-s*1.12,i*.96,s*.2),n.strokeStyle="#2d2928",n.lineWidth=Math.max(2,s*.12),n.strokeRect(r-i/2,a-s,i,s*1.12),n.strokeStyle="rgba(35,28,24,0.45)",n.lineWidth=Math.max(1,s*.07);for(let o of[-.32,-.08,.22])n.beginPath(),n.moveTo(r+i*o,a-s*.52),n.lineTo(r+i*(o+.12),a-s*.2),n.stroke();for(let o of[-1,1])n.fillStyle="#cf9c6f",n.beginPath(),n.ellipse(r+o*i*.49,a-s*.42,s*.35,s*.49,0,0,Math.PI*2),n.fill()},Ny=(n,e,t)=>{let i=t.pathHalf/qe.halfWidth/32,s=t.x,r=t.y-90*i,a=t.pathHalf*1.04;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(s,t.y+3*i,a*.6,8*i,0,0,Math.PI*2),n.fill(),n.fillStyle="#222b43",n.beginPath(),n.ellipse(s,r,22*i,13*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#222b43",n.lineCap="round",n.lineWidth=Math.max(3,10*i),n.beginPath(),n.moveTo(s-8*i,r),n.quadraticCurveTo(s-a*.58,r-45*i,s-a,r+5*i),n.moveTo(s+8*i,r),n.quadraticCurveTo(s+a*.58,r-45*i,s+a,r+5*i),n.stroke(),n.fillStyle="#f0a65c",n.beginPath(),n.moveTo(s,r+2*i),n.lineTo(s-4*i,r+10*i),n.lineTo(s+4*i,r+10*i),n.closePath(),n.fill()},Uy=(n,e,t)=>{let i=t.pathHalf/qe.halfWidth/32,s=t.y-83*i,r=t.pathHalf*1.04,a=t.x;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(a,t.y+3*i,r*.68,8*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#52382e",n.lineCap="round",n.lineWidth=Math.max(5,15*i),n.beginPath(),n.moveTo(a-r,s-9*i),n.quadraticCurveTo(a,s+9*i,a+r,s-9*i),n.stroke(),n.fillStyle="#1b624f";for(let o of[-.72,-.36,.08,.47,.77]){let c=a+r*o,l=s-10*i;n.fillStyle="#0b584e",n.beginPath(),n.moveTo(c-16*i,l+5*i),n.lineTo(c+2*i,l-12*i),n.lineTo(c+16*i,l+5*i),n.closePath(),n.fill(),n.fillStyle="#249575",n.beginPath(),n.moveTo(c+2*i,l-12*i),n.lineTo(c+16*i,l+5*i),n.lineTo(c+2*i,l+5*i),n.closePath(),n.fill()}},vf=(n,e,t)=>{let i=vn(e.pathHalf*.12,9,31),s=e.y-(t==="jump"?i*3:e.pathHalf/qe.halfWidth*3.5+i*1.5);n.globalAlpha=e.alpha,n.fillStyle=t==="jump"?"#dc754e":"#684f90",n.beginPath(),n.arc(e.x,s,i,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=Math.max(2,i*.16),n.lineCap="round",n.lineJoin="round",n.beginPath();let r=t==="jump"?-1:1;n.moveTo(e.x,s-r*i*.42),n.lineTo(e.x,s+r*i*.42),n.moveTo(e.x-i*.32,s+r*i*.1),n.lineTo(e.x,s+r*i*.42),n.lineTo(e.x+i*.32,s+r*i*.1),n.stroke()},Fy=(n,e,t,i,s)=>{for(let r of[...s].sort((a,o)=>o.z-a.z)){if(r.z<-2||r.z>qe.spawnDistance)continue;let a=On(e,t,r,{...qe,travel:i});if(n.save(),n.globalAlpha=a.alpha,r.kind==="jump")Dy(n,e,a),r.z>3&&vf(n,a,"jump");else if(r.kind==="duck")r.variant==="bird"?Ny(n,e,a):Uy(n,e,a),r.z>3&&vf(n,a,"duck");else{let o=a.pathHalf/qe.halfWidth*2.35;r.variant==="rock"?Sf(n,a.x,a.y,o,!0):Mf(n,a.x,a.y,o,!0)}n.restore()}};async function Ih(n){if(n.worldCanvas&&n.runtime)try{let{createMountainWorld:r}=await Promise.resolve().then(()=>(yf(),xf)),a=r(n.worldCanvas);n.runtime.world3d=a,n.canvas.style.visibility="hidden",n.events.addEventListener("course:update",o=>{a.setCourse(o.detail)}),n.events.addEventListener("rider:update",o=>{a.render(o.detail)});return}catch(r){console.warn("3D mountain renderer unavailable; using the canvas view",r),n.worldCanvas.style.display="none"}let e=n.canvas.getContext("2d");if(!e)throw new Error("Mountain rendering requires a 2D canvas context");let t=0,i=[],s={crashFx:0,distance:0,hazards:[],phase:"idle"};n.events.addEventListener("course:update",r=>{s={crashFx:Number(r.detail?.crashFx)||0,distance:Number(r.detail?.distance)||0,hazards:Array.isArray(r.detail?.hazards)?r.detail.hazards:[],phase:r.detail?.phase??"idle"}}),n.events.addEventListener("rider:update",r=>{let a=r.detail?.state,o=r.detail?.camera,c=Number(a?.position?.across)||0,l=Number(o?.position?.across)||0,h=vn(Number(o?.zoom)||1,.82,1),d=Hh(n.canvas,c,l,h,qe.halfWidth),u=s.phase==="idle"?0:Number(a?.position?.downhill)||s.distance;if(s.phase==="idle"?(t=0,i=[]):s.phase==="running"&&(t=Math.max(0,u),(a?.air??0)<.08&&(i.length===0||t-i.at(-1).downhill>=.45)&&i.push({across:c,downhill:t,speed:Number(a?.speed)||16}),i=i.filter(f=>t-f.downhill<42)),e.save(),e.translate(n.canvas.width/2,n.canvas.height/2),e.rotate(-(Number(o?.roll)||0)),e.translate(-n.canvas.width/2,-n.canvas.height/2),by(e,n.canvas,d,u),wy(e,n.canvas,d,u,a?.surface??"powder",Number(a?.speed)||0),Ey(e,n.canvas,d,u),Ry(e,n.canvas,d,t,i),s.phase==="running"&&(a?.air??0)<.08){let f=a?.surface==="ice"?0:vn((Number(a?.slash)||0)*.85+(Number(a?.skid)||0)*.5+(Number(a?.washout)||0)*.35,0,1),p=Math.sign(a?.slipAngle||a?.edge||r.detail?.input?.carve||1),x=n.canvas.width/2+(c-l)*14*h;a?.surface!=="ice"&&Cy(e,n.canvas,p*f,t,Number(a?.landingImpact)||0,Number(a?.speed)||16,x)}Ty(e,n.canvas,d,u,Number(a?.speed)||0),Iy(e,n.canvas,d,u),Ly(e,n.canvas,d,u),Fy(e,n.canvas,d,u,s.hazards),Py(e,n.canvas,s.crashFx),e.restore()})}la();Cl();la();var Ai=(n,e=0)=>Number.isFinite(n)?n:e,Lh=()=>Object.freeze({active:null});function bf(n,e,t,i={}){let s=!!(e?.grounded??e?.air<=0),r=!!(t?.grounded??t?.air<=0),a=n?.active??null,o=null;if(s&&!r){let c=bh(Ai(t?.position?.downhill),Ai(t?.position?.across),6);a=c?{featureId:c.id,takeoffRotation:Ai(t?.boardRotation),peakAir:Ai(t?.air),maxRotation:0,grabTime:0}:null}if(a&&!r){let c=Math.max(0,Math.min(.1,Ai(t?.elapsed)-Ai(e?.elapsed)));a={...a,peakAir:Math.max(a.peakAir,Ai(t?.air)),maxRotation:Math.max(a.maxRotation,Math.abs(Ai(t?.boardRotation)-a.takeoffRotation)),grabTime:a.grabTime+(Ai(i.grab)>.5?c:0)}}if(a&&!s&&r){if(!t.crashed&&a.peakAir>=.45){let c=Math.floor((a.maxRotation+.32)/Math.PI),l=a.grabTime>=.12,h=Math.round(150+c*140+(l?80:0)+Math.min(100,a.peakAir*15));o=Object.freeze({featureId:a.featureId,label:["SIDE HIT",c?`${c*180}\xB0`:null,l?"GRAB":null].filter(Boolean).join(" \xB7 "),points:h})}a=null}return t?.crashed&&(a=null),Object.freeze({tracker:Object.freeze({active:a}),award:o})}var wf="slopestyle.bestDistance",Dh="slopestyle.bestScore",Tf=16,Oy=44,Cf=1.25,Ul=(n,e,t)=>Math.min(t,Math.max(e,n)),By=n=>{let e=Number.isFinite(n?.velocity?.downhill)?n.velocity.downhill:Number(n?.speed)||0;return n?.crashed?Math.max(0,e):Math.max(hs(n?.position?.downhill).min,e)},Ef=(n,e)=>n.map(t=>({...t,z:t.worldDownhill-e})),zy=(n,e,t={})=>{if(n.passed||Math.abs(n.z)>Cf)return!1;let i=Math.abs(n.x-e.position.across),s=Number(e.air)||0;if(n.kind==="jump")return i<(n.radius??qe.halfWidth*.94)&&s<.5;if(n.kind==="duck"){let r=n.variant==="bird"?.86:.88;return i<(n.radius??qe.halfWidth*r)&&(Number(t.crouch)||0)<.75}return s<.35&&i<1.05},Pf=(n,e)=>n+Math.random()*(e-n),Af=n=>{try{return Math.max(0,Number(localStorage.getItem(n))||0)}catch{return 0}},Nh=(n,e)=>{try{localStorage.setItem(n,String(Math.floor(e)))}catch{}},ky=()=>{if(document.querySelector("[data-slopestyle-styles]"))return;let n=document.createElement("style");n.dataset.slopestyleStyles="true",n.textContent=`
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
  `,document.head.append(n)},Hy=()=>{let n,e,t,i=0,s=0,r=()=>(n||(n=new(window.AudioContext||window.webkitAudioContext)),n.state==="suspended"&&n.resume(),n),a=l=>{if(t)return t;let h=Math.floor(l.sampleRate*2);t=l.createBuffer(1,h,l.sampleRate);let d=t.getChannelData(0),u=19341;for(let f=0;f<h;f+=1)u=Math.imul(u,1664525)+1013904223|0,d[f]=u/2147483648*.5;return t},o=(l,h,d)=>{let u=r(),f=u.createBufferSource(),p=u.createBiquadFilter(),x=u.createGain();f.buffer=a(u),p.type="bandpass",p.frequency.value=h,p.Q.value=.5,x.gain.setValueAtTime(.001,u.currentTime),x.gain.linearRampToValueAtTime(d,u.currentTime+.012),x.gain.exponentialRampToValueAtTime(.001,u.currentTime+l),f.connect(p),p.connect(x),x.connect(u.destination),f.start(u.currentTime,0,l)},c=()=>{if(e)return;let l=r(),h=l.createBufferSource();h.buffer=a(l),h.loop=!0;let d=(u,f)=>{let p=l.createBiquadFilter();p.type=u,p.frequency.value=f;let x=l.createGain();return x.gain.value=0,h.connect(p),p.connect(x),x.connect(l.destination),{filter:p,gain:x}};e={source:h,snow:d("highpass",1600),skid:d("bandpass",900),wind:d("lowpass",420)},h.start()};return Object.freeze({startRide(){c(),i=0,s=0},stopRide(){if(!e)return;let l=r();if(e){for(let h of[e.snow,e.skid,e.wind])h.gain.gain.setTargetAtTime(1e-4,l.currentTime,.06);e.source.stop(l.currentTime+.2),e=void 0}},ride(l){if(!e)return;let h=r(),d=Ul(l.speed/Oy,0,1),u=l.air<=0&&!l.crashed?1:0,f={groomed:.034,powder:.014,ice:.048,slush:.036,chop:.042,rail:.02}[l.surface]??.03,p=l.surface==="ice"?2500:l.surface==="powder"?900:1600;e.snow.filter.frequency.setTargetAtTime(p+d*700,h.currentTime,.07),e.snow.gain.gain.setTargetAtTime(u*f*(.25+d*.75),h.currentTime,.04),e.skid.gain.gain.setTargetAtTime(u*(l.skid*.046+l.slash*.016),h.currentTime,.035),e.wind.gain.gain.setTargetAtTime((.005+d*d*.045)*(1-(l.crouchAmount??0)*.2),h.currentTime,.09),l.slash>.42&&i<=.42&&o(.14,750,.02),l.landingImpact>1.5&&s<=1.5&&o(.2,280,.04),i=l.slash,s=l.landingImpact},jump(){o(.09,1200,.015)},crash(){o(.32,220,.09)},fall(){o(.3,330,.035)}})},Gy=n=>(n.innerHTML=`
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
  `,Object.freeze({update({distance:e,score:t,speed:i,trickNotice:s,trickNoticeTimer:r}){n.querySelector("[data-distance]").textContent=`${Math.floor(e)} m`,n.querySelector("[data-speed]").innerHTML=`${Math.round(i*3.6)}<span class="hud-unit">km/h</span>`,n.querySelector("[data-score]").textContent=String(Math.floor(t));let a=n.querySelector("[data-trick]");if(a.classList.toggle("is-hidden",!s||r<=0),s&&r>0){a.textContent=s.label;let o=document.createElement("strong");o.textContent=`+${s.points}`,a.append(o)}}})),Vy=(n,e)=>{let t=Math.random(),i="steer",s=e+qe.spawnDistance,r=fs(Math.max(0,Math.round((s-wi)/Ti))),a=s>=r.start-4&&s<=r.lip+42;if(!a&&n.dodged>4&&t>.82?i="duck":!a&&n.dodged>2&&t>.64&&(i="jump"),i==="jump")return{id:n.nextHazardId,kind:i,passed:!1,variant:"fallen-log",radius:7.2,worldDownhill:s,x:0,z:qe.spawnDistance};if(i==="duck")return{id:n.nextHazardId,kind:i,passed:!1,variant:"branch",radius:3.9,worldDownhill:s,x:0,z:qe.spawnDistance};let o=[-.66,-.34,0,.34,.66],c=o.map((h,d)=>d).filter(h=>h!==n.lastLane&&(!a||Math.abs(o[h]*qe.halfWidth-r.centerX)>3.4)),l=c[Math.floor(Math.random()*c.length)];return n.lastLane=l,{id:n.nextHazardId,kind:i,passed:!1,variant:Math.random()>.38?"pine":"rock",worldDownhill:s,x:o[l]*qe.halfWidth+Pf(-.18,.18),z:qe.spawnDistance}},Wy=n=>Pf(Ul(40-n*.25,28,40),Ul(58-n*.35,37,55)),Rf=(n,e=0)=>({best:n,bestScore:e,crashFx:0,distance:0,score:0,trickPoints:0,trickNotice:null,trickNoticeTimer:0,dodged:0,fallTimer:0,finalDistance:0,hazards:[],lastLane:-1,lastRiderDownhill:0,nextHazardId:1,phase:"idle",spawnLeft:12,speed:0});async function Uh(n){ky();let e=Hy(),t=Gy(n.hudRoot),i=Rf(Af(wf),Af(Dh)),s,r=0,a,o=Lh(),c=()=>{let y=n.canvas.getBoundingClientRect(),b=Math.min(window.devicePixelRatio||1,2);n.canvas.width=Math.max(1,Math.floor(y.width*b)),n.canvas.height=Math.max(1,Math.floor(y.height*b))},l=()=>{n.events.dispatchEvent(new CustomEvent("course:update",{detail:Object.freeze({crashFx:i.crashFx,distance:i.distance,hazards:Object.freeze(i.hazards.map(y=>Object.freeze({...y}))),phase:i.phase})}))},h=()=>{n.overlayRoot.innerHTML=`
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
    `},f=()=>{i={...Rf(i.best,i.bestScore),phase:"running",spawnLeft:4,speed:Tf},s=void 0,r=0,a=void 0,o=Lh(),n.overlayRoot.innerHTML="",n.events.dispatchEvent(new CustomEvent("rider:reset",{detail:{speed:Tf}})),l(),e.startRide()},p=(y,b)=>{if(i.finalDistance=i.distance,i.crashFx=.8,i.best=Math.max(i.best,Math.floor(i.distance)),i.bestScore=Math.max(i.bestScore,Math.floor(i.score)),Nh(wf,i.best),Nh(Dh,i.bestScore),e.stopRide(),y==="cliff"){i.phase="falling",i.fallTimer=1.35,e.fall(),u();return}i.phase="crashed",y==="hazard"&&n.events.dispatchEvent(new CustomEvent("rider:impact",{detail:b})),e.crash(),d()},x=()=>{i.dodged+=1},g=(y,b)=>{let{input:v,state:E}=y,T=By(E),_=Number.isFinite(E.position.downhill)?E.position.downhill:i.lastRiderDownhill,w=Math.max(0,_-i.lastRiderDownhill);if(i.lastRiderDownhill=_,e.ride(E),Math.abs(E.position.across)>(n.runtime?.world3d?38:qe.halfWidth)){p("cliff");return}if(v.jump>0&&r<=0&&e.jump(),r=v.jump,i.speed=E.speed,i.distance+=Math.max(w,T*b),i.score=Math.floor(i.distance)+i.trickPoints,i.trickNoticeTimer=Math.max(0,i.trickNoticeTimer-b),i.spawnLeft-=w,i.spawnLeft<=0){let R=Vy(i,_);R&&(i.hazards.push(R),i.nextHazardId+=1),i.spawnLeft=Wy(i.speed)}i.hazards=Ef(i.hazards,_);for(let R of i.hazards){if(zy(R,E,v)){p("hazard",R);return}!R.passed&&R.z<-Cf&&(R.passed=!0,x())}i.hazards=i.hazards.filter(R=>R.z>-5);let D=bf(o,a??E,E,y.pose);o=D.tracker,a=E,D.award&&(i.trickPoints+=D.award.points,i.score=Math.floor(i.distance)+i.trickPoints,i.trickNotice=D.award,i.trickNoticeTimer=1.9,i.bestScore=Math.max(i.bestScore,i.score),Nh(Dh,i.bestScore))},m=y=>{i.fallTimer-=y,i.fallTimer<=0&&(i.phase="crashed",e.crash(),d())};n.events.addEventListener("rider:update",y=>{let b=performance.now(),v=s===void 0?0:Ul((b-s)/1e3,0,.05);s=b,i.crashFx=Math.max(0,i.crashFx-v),i.phase==="running"?g(y.detail,v):i.phase==="falling"&&m(v),i.phase!=="running"&&(i.hazards=Ef(i.hazards,Number(y.detail?.state?.position?.downhill)||0)),t.update(i),l()}),window.addEventListener("resize",c),c(),t.update(i),l(),h()}var $e=(n,e,t)=>Math.min(t,Math.max(e,n)),wt=(n,e=0)=>Number.isFinite(n)?n:e,Xy=n=>Math.atan2(Math.sin(n),Math.cos(n));function qy(n,e={}){let t=Math.abs(n.edge),i=$e((wt(n.speed,8)-8)/22,0,1),s=Math.sign(n.edge||n.lean||1),r=wt(n.elapsed),a=n.surface!=="rail"&&t<.12&&(n.air??0)<=0?(Math.sin(r*1.8+.15)*.05+Math.sin(r*.77+.8)*.02)*(1-t/.12):0,o=(Math.sin(r*1.3)+Math.sin(r*.47+.8)*.35)*.022*(1-i*.65)*(1-t),c=$e((n.air??0)/.25,0,1),l=$e((n.verticalVelocity??0)/7.8,-1,1),h=c*Math.max(0,l),d=c*(1-Math.abs(l)),u=l<0?c*$e((.8-wt(n.air))/.8,0,1):0,f=$e(n.compression??0,0,1),p=$e(n.gForce??0,0,1.6),x=$e(n.skid??0,0,1),g=$e(n.slash??0,0,1),m=$e(n.bumpImpact??0,0,1),y=$e(n.chatter??0,0,1),b=$e((wt(n.impactMeter)-70)/30,0,1),v=Math.sin(r*11.5)*b*.055,E=$e(Number.isFinite(e.crouch)?e.crouch:0,0,1),T=$e(Number.isFinite(e.stretch)?e.stretch:0,0,1),_=Number.isFinite(n.terrainHeight)?n.terrainHeight:0,w=n.elapsed*n.speed*1.7,D=$e(n.boardLightness??0,0,1),R=g*(1-D),C=$e(n.crouchAmount??0,0,1),z=$e(wt(n.lean,n.edge)*(.2+i*.58)*(1-c*.6)+s*p*.055+o+v,-.8,.8),$=Xy(wt(n.boardRotation,wt(n.boardYaw,n.heading))-wt(n.torsoRotation,wt(n.torsoYaw,n.heading)))+c*wt(n.tweak)*1.35,I=1+Math.sin(r*17.3+.4)*.08*g,W=n.air>0?$e(1-wt(n.airtime)/.18,0,1):0,U=(n.edge??0)*(n.stance==="goofy"?-1:1)>=0,O=c?0:_*1.35+Math.sin(w)*y*.045-D*.075,J=c?0:(Number.isFinite(n.bodyHeave)?n.bodyHeave:_)*1.35-D*.035,L=n.crashed&&wt(n.crashTimer)<=0?2:wt(n.crashTimer),k=n.crashed?$e(2-L,0,2):0,H=n.crashed?$e(k/.12,0,1)*(1-$e((k-1.15)/.85,0,1)):0,G=n.crashed?$e((k-.55)/.4,0,1)*(1-$e((k-1.35)/.5,0,1)):0,he=k<.4?1.1+k/.4*1.1:k<.75?2.2:k<1.3?2.2-(k-.75)/.55*1.3:.9*(1-$e((k-1.3)/.7,0,1));return Object.freeze({boardRoll:$e(wt(n.edge)*(.26+i*.79)*(n.surface==="rail"?.1:1-c*.7)+a+wt(n.terrainRoll)*.18+Math.sin(w*3.1)*y*.012+v*.5,-1.08,1.08),bodyTilt:z,boardSwing:$*I,boardFlex:$e(Math.abs(wt(n.pressAmount))*.55+p*.22+wt(n.popCharge)*.35+f*.45+m*.16,0,1),snowResponse:$e(f*.55+m*.5+y*.12,0,1),boardYaw:n.boardYaw??n.heading,bodyYaw:n.torsoYaw??n.heading,bodySpin:(n.torsoRotation??n.torsoYaw??n.heading)-(n.heading??0)-(n.switchRiding?Math.PI:0),boardBodyRotation:(n.boardRotation??n.boardYaw??n.heading)-(n.torsoRotation??n.torsoYaw??n.heading),bob:J,boardBob:O,airborne:c,airOpen:u,flickBite:R,boardPitch:c*l*.18+W*.34+(n.terrainPitch??0)*.6+(n.noseFloat??0)*.12+(n.pressAmount??0)*.15,boardSlip:$e(n.slipAngle??0,-.75,.75),boardTweak:$e(n.tweak??0,-1,1)*1.35,butter:$e(n.butter??0,0,1),press:$e((n.pressAmount??0)+(n.butter??0)*.7,-1,1),crouch:$e(.28+i*.08+t*.38+C*.52+E*.22+c*.34+d*.18-u*.2-h*.1+f*.5+m*.38+p*.08+R*.18,0,1),fallRotation:n.crashed?(Math.sign(n.crashSpin)||1)*he:0,crashCollapse:H,crashSit:G,crashRecovery:n.crashed?$e((1.25-L)/1.25,0,1):0,foreAft:$e(((n.frontFootPressure??.5)-.5)*2-(n.noseFloat??0)*.24,-1,1),handDrag:$e((Math.abs(n.lean??0)-.52)*2.1+E*.38+(n.washout??0)*.65,0,1),grab:c*E,jumpStretch:$e(h+W*.58+u*.33+c*T*.32,0,1),lean:$e(z/.78,-1.04,1.04),spray:c?0:$e((n.crashed?1:0)+g*.92+x*.24+t*.025+m*(n.surface==="powder"?.24:.08)+$e((n.landingImpact??0)/9,0,.35),0,1),scarfFlutter:$e((n.speed??0)/34,0,1)*Math.sin((Number(n.elapsed)||0)*(5+(n.speed??0)*.18)),stance:n.stance??"regular",switchRiding:!!n.switchRiding,toeSide:U,headLook:$e(wt(e.carve)*.7+wt(n.turnRate)*.08+Math.sin(r*.43+Math.sin(r*.19))*.05*(1-t),-1,1),handDrift:Math.sin(r*1.09)+Math.sin(r*.73+.8)*.4,clothFlutter:$e(wt(n.speed)/34,0,1)*(Math.sin(r*wt(n.speed)*1.7)*.6+Math.sin(r*wt(n.speed)*2.63+.5)*.25),breath:Math.sin(r*1.67)*.5,hipTwist:$e($*.68,-1,1),shoulderTwist:$e(-$*.16-wt(n.edge)*.08,-.45,.45),armLag:0,clothLag:0,stumble:$e(H+wt(n.washout)*.8+Math.max(0,wt(n.landingImpact)-3)*.1+wt(n.bumpImpact)*.2+b*.28,0,1),upperBodyTwist:n.edge*-.22-Math.sign(n.edge)*x*.08+$e(e.steer??0,-1,1)*.025})}var Qt=()=>({value:0,velocity:0}),Ri=(n,e,t,i,s=.74)=>{let r=Math.max(1,Math.ceil(i*120)),a=i/r,o=t*Math.PI*2;for(let c=0;c<r;c+=1){let l=(e-n.value)*o**2-2*s*o*n.velocity;n.velocity+=l*a,n.value+=n.velocity*a}return n.value};function If(){let n={arm:Qt(),cloth:Qt(),crouch:Qt(),grab:Qt(),head:Qt(),hips:Qt(),lean:Qt(),shoulders:Qt(),stumble:Qt()},e=!1,t=0,i=0,s=1/0,r=0;return Object.freeze({reset(){n={arm:Qt(),cloth:Qt(),crouch:Qt(),grab:Qt(),head:Qt(),hips:Qt(),lean:Qt(),shoulders:Qt(),stumble:Qt()},e=!1,t=0,i=0,s=1/0,r=0},step(a,o={},c=0){let l=qy(a,o),h=$e(wt(c),0,.1),d=$e(wt(o.steer),-1,1),u=Math.abs(d)>.05&&l.butter<.5?Math.sign(d):0;u!==0&&u!==t?(i=0,s=1/0):u!==0&&(i+=h),u===0&&t!==0&&(s=0,r=t),u===0&&s<.3&&(s+=h),t=u;let f=l.boardSwing;u!==0&&i<.05&&(f*=.45+i/.05*.55),u===0&&s<.3&&(f-=r*.12*Math.sin(Math.PI*s/.3)),e||(n.crouch.value=l.crouch,n.lean.value=l.bodyTilt,e=!0);let p=Ri(n.head,l.headLook,5.5,h),x=Ri(n.hips,f*.68,3.2,h),g=Ri(n.shoulders,l.shoulderTwist+x*.12,1.5,h),m=Ri(n.arm,-f*.23-g*.4,1.7,h),y=Ri(n.cloth,-f*.9-x*.22,1.8,h,.68),b=Ri(n.lean,l.bodyTilt,3,h),v=Ri(n.crouch,l.crouch,l.crouch>n.crouch.value?6.5:1.9,h,.7),E=Ri(n.stumble,l.stumble,2.4,h),T=Ri(n.grab,l.grab,l.grab>n.grab.value?5.5:4,h,.86);return Object.freeze({...l,armLag:m,bodyTilt:b,boardSwing:f,clothLag:y,crouch:$e(v,0,1),grab:$e(T,0,1),headLook:p,hipTwist:x,lean:$e(b/.78,-1.04,1.04),shoulderTwist:g,stumble:E,upperBodyTwist:g})}})}var ha=(n,e,t)=>Math.min(t,Math.max(e,n)),Xt=(n,e=0)=>Number.isFinite(n)?n:e,Lf=(n,e=0,t=1,i=0)=>Object.freeze({dip:i,position:Object.freeze(n),roll:e,zoom:t});function Fh(n={}){let e=n.position??{};return Lf({across:Xt(e.across),downhill:Xt(e.downhill)},Xt(n.roll),Xt(n.zoom,1),Xt(n.dip))}function Df(n,e,t=0){let i=ha(Xt(t),0,.05),s=1-Math.exp(-4*i),r=Xt(e.heading),a=Xt(e.position?.across)+Math.sin(r)*2,o=Xt(e.position?.downhill)+8;return Lf({across:n.position.across+(a-n.position.across)*s,downhill:n.position.downhill+(o+ha(Xt(e.air),0,2)*1.5-n.position.downhill)*s},Xt(n.roll)+(ha(Xt(e.lean)*.04,-.045,.045)-Xt(n.roll))*(1-Math.exp(-2.8*i)),Xt(n.zoom,1)+(1-ha(Xt(e.speed)/34,0,1)*.14-Xt(n.zoom,1))*(1-Math.exp(-2*i)),Xt(n.dip)+(ha(Xt(e.landingImpact)/9,0,1)-Xt(n.dip))*(1-Math.exp(-8*i)))}var Nf=new Set(["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","KeyA","KeyD","KeyS","KeyW","Space"]),Yy=new Set(["ArrowUp","Space"]);function Uf(n=window){let e=new Set,t=!1,i=a=>{Nf.has(a.code)&&(a.preventDefault(),Yy.has(a.code)&&!e.has(a.code)&&(t=!0),e.add(a.code))},s=a=>{Nf.has(a.code)&&(a.preventDefault(),e.delete(a.code))},r=()=>{t=!1,e.clear()};return n.addEventListener("keydown",i),n.addEventListener("keyup",s),n.addEventListener("blur",r),Object.freeze({destroy(){t=!1,e.clear(),n.removeEventListener("keydown",i),n.removeEventListener("keyup",s),n.removeEventListener("blur",r)},read(){let a=e.has("ArrowLeft"),o=e.has("ArrowRight"),c=e.has("KeyA"),l=e.has("KeyD"),h=e.has("ArrowDown"),d=e.has("KeyW"),u=e.has("KeyS"),f=e.has("ArrowUp"),p=t;return t=!1,Object.freeze({carve:Number(l)-Number(c),crouch:Number(h),jump:Number(p),press:Number(u)-Number(d),steer:Number(o)-Number(a),stretch:Number(f)})}})}Cl();yh();la();var Fl=1/120,In=(n,e,t)=>Math.min(t,Math.max(e,n)),Ff=(n,e)=>{if(!Number.isFinite(e)||e<=0||n.crashed)return n;let t=hs(n.position.downhill),i=In(e,t.min,t.max),s=Math.hypot(n.velocity.across,n.velocity.downhill),r=i/Math.max(s,.001);return Js({...n,velocity:{across:n.velocity.across*r,downhill:n.velocity.downhill*r}})};async function Oh(n){let e=Uf(window),t=n.runtime?.world3d?{beginFrame(){},draw(){}}:rf(n.canvas),i=If(),s=Object.freeze({surface:"powder",surfaceHeight:kt,surfaceNormal:oa}),r="regular",a=Fh(),o=Object.freeze({carve:0,crouch:0,press:0,steer:0,stretch:0}),c=!1,l=0,h,d=0,u=0,f=0,p,x=Js({surface:s.surface});n.events.addEventListener("rider:input",m=>{Number(m.detail?.jump)>0&&(c=!0),o=Object.freeze({carve:In(Number(m.detail?.carve)||0,-1,1),crouch:In(Number(m.detail?.crouch)||0,0,1),press:In(Number(m.detail?.press)||0,-1,1),steer:In(Number(m.detail?.steer)||0,-1,1),stretch:In(Number(m.detail?.stretch)||0,0,1)})}),n.events.addEventListener("rider:surface",m=>{s=Object.freeze({slopeGrade:Number.isFinite(m.detail?.slopeGrade)?m.detail.slopeGrade:void 0,surface:m.detail?.surface??s.surface,surfaceHeight:kt,surfaceNormal:oa})}),n.events.addEventListener("rider:pace",m=>{if(!Number.isFinite(m.detail?.targetSpeed))return;let y=hs(x.position.downhill);h={holdSeconds:Math.max(0,Number(m.detail?.holdSeconds)||0),targetSpeed:In(m.detail.targetSpeed,y.min,y.max)}}),n.events.addEventListener("rider:stance",m=>{r=m.detail?.stance==="goofy"?"goofy":"regular",x=Js({...x,stance:r})}),n.events.addEventListener("rider:reset",m=>{i.reset(),a=Fh(),p=void 0,c=!1,l=0,h=void 0,d=0,u=0,f=0,x=Js({speed:Number(m.detail?.speed)||16,stance:r,surface:s.surface})}),n.events.addEventListener("rider:impact",m=>{x=hf(x,m.detail),l=0,c=!1});let g=m=>{let y=e.read(),b=Object.freeze({carve:In(y.carve+o.carve,-1,1),crouch:Math.max(y.crouch,o.crouch),jump:Math.max(y.jump,Number(c)),press:In(y.press+o.press,-1,1),steer:In(y.steer+o.steer,-1,1),stretch:Math.max(y.stretch,o.stretch)});c=!1;let v=p===void 0?0:In((m-p)/1e3,0,.1);p=m,h&&x.air<=.08&&(x=Ff(x,h.targetSpeed),u=h.targetSpeed,d=h.holdSeconds,h=void 0);let E=x.crashed;l=Math.max(l,b.jump),f+=v;let T=0;for(;f+1e-9>=Fl;)T=Math.max(T,l),x=df(x,{...b,jump:l},Fl,{...s,lipDistance:ff(x.position.across,x.position.downhill)}),d>0&&x.speed>u&&(x=Ff(x,u)),d=Math.max(0,d-Fl),l=0,f-=Fl;let _=Object.freeze({...b,jump:T});!E&&x.crashed&&(n.events.dispatchEvent(new CustomEvent("rider:crash",{detail:x})),x.crashReason==="edge-catch"&&n.events.dispatchEvent(new CustomEvent("rider:edge-catch",{detail:x}))),a=Df(a,x,v);let w=i.step(x,_,v),D=In((x.impactMeter-70)/30,0,1),R=D>0?`saturate(${1-D*.78}) contrast(${1+D*.08})`:"";n.worldCanvas?.style&&(n.worldCanvas.style.filter=R),n.canvas?.style&&(n.canvas.style.filter=R),t.beginFrame();let C=x;n.events.dispatchEvent(new CustomEvent("rider:update",{detail:Object.freeze({camera:a,input:_,pose:w,state:x})})),x!==C&&(w=i.step(x,_,0)),t.draw({camera:a,pose:w,state:x}),requestAnimationFrame(g)};n.events.addEventListener("ready",()=>requestAnimationFrame(g),{once:!0})}var Ol=n=>{let e=document.querySelector(n);if(!e)throw new Error(`Shared game mount is missing: ${n}`);return e},Of=Object.freeze({canvas:Ol("#game-canvas"),worldCanvas:Ol("#world-canvas"),runtime:{world3d:null},events:new EventTarget,hudRoot:Ol("#hud-root"),overlayRoot:Ol("#overlay-root")}),Zy=async()=>{for(let n of[Uh,Ih,Oh])await n(Of);Of.events.dispatchEvent(new Event("ready"))};Zy();})();
