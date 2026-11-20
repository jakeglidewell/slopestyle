// Slopestyle source fingerprint: 0f3b871de93adfd3a859cff401d58bd43b275b83e4d87a0d94f29d86114f2bd3
(()=>{var Sp=Object.defineProperty;var Un=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var bp=(n,e)=>{for(var t in e)Sp(n,t,{get:e[t],enumerable:!0})};function cu(n){return To(n)}function Tp(n,e){let t=Math.max(0,Number.isFinite(n)?n:0),i=Math.max(0,Number.isFinite(e)?e:0);return 1+.07*(Math.sin((t+i)*.046+.3)-Math.sin(t*.046+.3))}function wo(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.11)*.45+Math.sin(e*.38)*.18}function Ap(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.min(3,Math.floor(e/72))}function $l(n){let e=Math.floor(Math.max(0,Number.isFinite(n)?n:0)/36);return lu[Math.floor(e/4)%lu.length]}function To(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.035-.5)*2.8+Math.sin(e*.082+.7)}function Rp(n,{halfWidth:e=9.5,seed:t=1}={}){if(!Number.isInteger(n)||n<0)throw new RangeError("Chunk index must be a non-negative integer");if(!Number.isFinite(e)||e<=0)throw new RangeError("Slope half-width must be positive and finite");let i=Ap(n*36),s=$l(n*36),o={summit:7,forest:15,rocky:10,glow:9}[s]+i*2,a=Array.from({length:o},(l,c)=>{let h=ur(t,n,c,4)<.5?-1:1,d=36/o,u=n*36+(c+.3+ur(t,n,c,0)*.4)*d,f=2.2+ur(t,n,c,1)*17,p={summit:.46,forest:.1,rocky:.68,glow:.22}[s];return Object.freeze({kind:ur(t,n,c,2)<p?"rock":"pine",size:.72+ur(t,n,c,3)*.75,x:h*(e+f),z:u})});return Object.freeze({biome:s,index:n,tier:i,scenery:Object.freeze(a)})}function Eo(n,e,t={}){if(!Number.isFinite(e)||e<0)throw new RangeError("View distance must be non-negative and finite");let i=Math.max(0,Number.isFinite(n)?n:0),s=Math.floor(i/36),r=Math.floor((i+e)/36);return Array.from({length:r-s+1},(o,a)=>Ep(s+a,t))}function pr(n,e){let t=fr((e/n.height-.36)/.64,0,1);return n.width*(.058+.285*t**1.16)}function hu(n,e,t,i=1,s=9.5){let r=(e-t)*14*fr(i||1,.82,1),o=Math.max(1,pr(n,n.height*.78));return e-r*s/o}function On(n,e,t,{halfWidth:i=9.5,travel:s=0,viewDistance:r=44}={}){let o=fr(t.z,0,r),a=1-o/r,l=a*a*(3-2*a),c=n.height*(.36+l*(.78-.36)),h=.23+l*.77,d=fr(o/7,0,1),u=d*d*(3-2*d),f=(wo(s+o)-wo(s))*u,p=c-f*h*n.height*.045,_=pr(n,p)*(1+(Tp(s,o)-1)*u),g=(cu(s+o)-cu(s))*u;return Object.freeze({alpha:fr(l*1.6+.2,0,1),pathHalf:_,scale:h,x:n.width/2+(t.x-e+g)/i*_,y:p})}var lu,fr,wp,ur,dr,Ep,Ao=Un(()=>{lu=Object.freeze(["summit","forest","rocky","glow"]),fr=(n,e,t)=>Math.min(t,Math.max(e,n)),wp=n=>{let e=n|0;return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),(e^e>>>16)>>>0},ur=(n,e,t,i)=>wp(n^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507)^i)/4294967296;dr=new Map,Ep=(n,e)=>{let t=[n,e.halfWidth??9.5,e.seed??1].join(":"),i=dr.get(t);return i||(i=Rp(n,e),dr.set(t,i),dr.size>32&&dr.delete(dr.keys().next().value)),i}});function Cp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Td(){let n=Ar("canvas");return n.style.display="block",n}function ah(...n){let e="THREE."+n.shift();ks?ks("log",e,...n):console.log(e,...n)}function Ed(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Ed(n);let e="THREE."+n.shift();if(ks)ks("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=Ed(n);let e="THREE."+n.shift();if(ks)ks("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Mr(...n){let e=n.join(" ");e in uu||(uu[e]=!0,Ze(...n))}function Ad(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function er(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Ip(n,e){return(n%e+e)%e}function Ql(n,e,t){return(1-t)*n+t*e}function Cd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Lp(n,e){if(e.constructor===Float32Array)return n;let t=lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Np(n,e){if(e.constructor===Float32Array)return n;let t=lh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}function Dp(){let n={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Tr]:{primaries:e,whitePoint:i,transfer:Er,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?da.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}function rc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function fc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),h=i.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Kp(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===qi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:n}}function Vo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Bo),n.getVertexPosition(l,zo),n.getVertexPosition(c,ko);let h=Kp(n,e,t,i,Bo,zo,ko,Tu);if(h){let d=new U;zi.getBarycoord(Tu,Bo,zo,ko,d),s&&(h.uv=zi.getInterpolatedAttribute(s,a,l,c,d,new Te)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,l,c,d,new Te)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};zi.getNormal(Bo,zo,ko,u.normal),h.face=u,h.barycoord=d}return h}function qo(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(_a.fromBufferAttribute(a,s),xa.fromBufferAttribute(a,r),t.distanceSqToSegment(_a,xa,yc,Ru)>i)return;yc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(yc);if(!(c<e.near||c>e.far))return{distance:c,point:Ru.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}function Lu(n,e,t,i,s,r,o){let a=Rc.distanceSqToPoint(n);if(a<t){let l=new U;Rc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function ch(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Fu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function jp(n,e){let t=1-n;return t*t*e}function Qp(n,e){return 2*(1-n)*n*e}function em(n,e){return n*n*e}function Sr(n,e,t,i){return jp(n,e)+Qp(n,t)+em(n,i)}function tm(n,e){let t=1-n;return t*t*t*e}function nm(n,e){let t=1-n;return 3*t*t*n*e}function im(n,e){return 3*(1-n)*n*n*e}function sm(n,e){return n*n*n*e}function br(n,e,t,i,s){return tm(n,e)+nm(n,t)+im(n,i)+sm(n,s)}function rm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Id(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=hm(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=n[u],p=n[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return qr(r,o,t,a,l,c,0),o}function Id(n,e,t,i,s){let r;if(s===Mm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Uu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Uu(o/i|0,n[o],n[o+1],r);return r&&Ys(r,r.next)&&(Zr(r),r=r.next),r}function os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ys(t,t.next)||Ft(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function qr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&mm(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?am(n,i,s,r):om(n)){e.push(l.i,n.i,c.i),Zr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=lm(os(n),e),qr(n,e,t,i,s,r,2)):o===2&&cm(n,e,t,i,s,r):qr(os(n),e,t,i,s,r,1);break}}}function om(n){let e=n.prev,t=n,i=n.next;if(Ft(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&vr(s,a,r,l,o,c,p.x,p.y)&&Ft(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function am(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ft(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),g=Math.max(h,d,u),m=Pc(f,p,e,t,i),y=Pc(_,g,e,t,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=m&&v&&v.z<=y;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&vr(a,h,l,d,c,u,S.x,S.y)&&Ft(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&vr(a,h,l,d,c,u,v.x,v.y)&&Ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&vr(a,h,l,d,c,u,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&vr(a,h,l,d,c,u,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Ys(i,s)&&Nd(i,t,t.next,s)&&Yr(i,s)&&Yr(s,i)&&(e.push(i.i,t.i,s.i),Zr(t),Zr(t.next),t=n=s),t=t.next}while(t!==n);return os(t)}function cm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xm(o,a)){let l=Dd(o,a);o=os(o,o.next),l=os(l,l.next),qr(o,e,t,i,s,r,0),qr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function hm(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Id(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(_m(c))}s.sort(um);for(let r=0;r<s.length;r++)t=dm(s[r],t);return t}function um(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function dm(n,e){let t=fm(n,e);if(!t)return e;let i=Dd(t,n);return os(i,i.next),os(t,t.next)}function fm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Ys(n,t))return t;do{if(Ys(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Ld(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Yr(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&pm(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function pm(n,e){return Ft(n.prev,n,e.prev)<0&&Ft(e.next,n,n.next)<0}function mm(n,e,t,i){let s=n;do s.z===0&&(s.z=Pc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gm(s)}function gm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Pc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function _m(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ld(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function vr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Ld(n,e,t,i,s,r,o,a)}function xm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ym(n,e)&&(Yr(n,e)&&Yr(e,n)&&vm(n,e)&&(Ft(n.prev,n,e.prev)||Ft(n,e.prev,e))||Ys(n,e)&&Ft(n.prev,n,n.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ys(n,e){return n.x===e.x&&n.y===e.y}function Nd(n,e,t,i){let s=Ko(Ft(n,e,t)),r=Ko(Ft(n,e,i)),o=Ko(Ft(t,i,n)),a=Ko(Ft(t,i,e));return!!(s!==r&&o!==a||s===0&&Jo(n,t,e)||r===0&&Jo(n,i,e)||o===0&&Jo(t,n,i)||a===0&&Jo(t,e,i))}function Jo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ko(n){return n>0?1:n<0?-1:0}function ym(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Nd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Yr(n,e){return Ft(n.prev,n,n.next)<0?Ft(n,e,n.next)>=0&&Ft(n,n.prev,e)>=0:Ft(n,e,n.prev)<0||Ft(n,n.next,e)<0}function vm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Dd(n,e){let t=Ic(n.i,n.x,n.y),i=Ic(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Uu(n,e,t,i){let s=Ic(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ic(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function Ou(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function bm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function wm(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function fs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(zu(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(zu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function cn(n){let e={};for(let t=0;t<n.length;t++){let i=fs(n[t]);for(let s in i)e[s]=i[s]}return e}function zu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Tm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}function Ds(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $o(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Ud(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Rm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Cm(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Ud(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Rm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function ku(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Hu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function fh(n,e,t,i){let s=Bm(i);switch(t){case eh:return n*e;case nh:return n*e/s.components*s.byteLength;case Ja:return n*e/s.components*s.byteLength;case Yi:return n*e*2/s.components*s.byteLength;case Ka:return n*e*2/s.components*s.byteLength;case th:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case $a:return n*e*4/s.components*s.byteLength;case ro:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case tl:return Math.max(n,16)*Math.max(e,8)/4;case ja:case el:return Math.max(n,8)*Math.max(e,8)/2;case nl:case il:case rl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:case co:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sl:case bl:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ho:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bm(n){switch(n){case mn:case Kc:return{byteLength:1,components:1};case Qs:case $c:case Wn:return{byteLength:2,components:1};case Ya:case Za:return{byteLength:2,components:4};case Gn:case qa:case Vn:return{byteLength:4,components:1};case jc:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var qu,Uc,Yu,ls,Zu,Ks,qi,sn,Qt,cs,$s,Oc,Bc,zc,Ju,hs,Ku,$u,ju,Qu,ed,td,nd,id,kc,Hc,sd,rd,od,ad,ld,cd,hd,ud,dd,na,ia,sa,Bs,ra,oa,aa,la,Gc,fd,pd,ni,Vc,Wc,Xc,io,qc,Yc,Zc,Jc,us,js,Va,Wa,ss,Jn,ca,$t,md,so,un,Xa,Si,mn,Kc,$c,Qs,qa,Gn,Vn,Wn,Ya,Za,ds,jc,Qc,eh,th,Xn,_i,bi,nh,Ja,Yi,Ka,$a,ro,oo,ao,lo,ja,Qa,el,tl,nl,il,sl,rl,ol,co,al,ll,cl,hl,ul,dl,fl,pl,ml,gl,_l,xl,yl,vl,Ml,Sl,bl,wl,Tl,El,ho,Al,wr,ha,ea,wc,Tc,Ec,Ac,gd,Rl,_d,wi,ln,Tr,Er,vt,ta,xd,yd,vd,Md,ih,Sd,bd,sh,rh,wd,oh,Cn,zs,uu,ks,Rd,$n,on,jl,ua,ph,Te,jn,mh,U,ec,du,gh,it,tc,fu,pu,ft,ws,da,Fp,Hs,Up,ic,dn,_h,Lt,fa,vn,Rr,pa,Ga,At,Ts,Bn,Op,Bp,Di,Ro,xn,mu,gu,xi,Cr,zp,_u,Es,ui,Co,mr,kp,Hp,xu,yu,vu,Mu,Gp,As,sc,Ht,Ut,Vp,Gs,Pd,Fi,Po,je,an,Pr,Ir,zn,di,oc,fi,Rs,Cs,Su,ac,lc,cc,hc,uc,dc,zi,ki,pi,kn,Io,Ps,Is,Ls,Ui,Oi,es,gr,Lo,No,ts,kt,Do,Wp,Pn,Lr,Nr,nt,Xp,_r,pc,Hi,qp,Rn,mc,Ns,yn,xr,Kt,Et,gc,Yp,Zp,Hn,Jp,Qn,mi,_c,Fo,Uo,Vs,In,bu,ns,Oo,wu,Bo,zo,ko,xc,Ho,Tu,Go,Gt,ma,is,$p,Wo,Gi,Eu,ga,Ws,_a,xa,Au,yr,Xo,yc,Ru,ya,Cu,Pu,Dr,Xs,Iu,Rc,Yo,Zo,Fr,Ur,Or,yi,Br,zr,fn,kr,jt,rs,va,vi,Mn,qs,Ma,Nu,Du,vc,Mc,Sc,Sa,Hr,ba,Gr,wa,Vr,Ta,Wr,Cc,Ea,Xr,ei,Lc,Kn,Jr,Sm,Kr,as,Mi,Zs,Fd,Em,Am,ti,Aa,pn,Ra,Ca,Vi,Pa,Ia,La,Na,Sn,Wi,Da,Fa,Ua,$r,Xi,Oa,Ba,Od,za,jr,Qr,bc,Gu,Vu,ka,jo,Qo,Zn,eo,Bi,Wu,Xu,hn,to,Nc,no,Fs,Us,Js,Ha,uh,Pm,dh,Im,Lm,Nm,Dm,Fm,Um,Om,Dc,It,PM,xh,Fc,yh=Un(()=>{qu=0,Uc=1,Yu=2,ls=1,Zu=2,Ks=3,qi=0,sn=1,Qt=2,cs=0,$s=1,Oc=2,Bc=3,zc=4,Ju=5,hs=100,Ku=101,$u=102,ju=103,Qu=104,ed=200,td=201,nd=202,id=203,kc=204,Hc=205,sd=206,rd=207,od=208,ad=209,ld=210,cd=211,hd=212,ud=213,dd=214,na=0,ia=1,sa=2,Bs=3,ra=4,oa=5,aa=6,la=7,Gc=0,fd=1,pd=2,ni=0,Vc=1,Wc=2,Xc=3,io=4,qc=5,Yc=6,Zc=7,Jc=300,us=301,js=302,Va=303,Wa=304,ss=1e3,Jn=1001,ca=1002,$t=1003,md=1004,so=1005,un=1006,Xa=1007,Si=1008,mn=1009,Kc=1010,$c=1011,Qs=1012,qa=1013,Gn=1014,Vn=1015,Wn=1016,Ya=1017,Za=1018,ds=1020,jc=35902,Qc=35899,eh=1021,th=1022,Xn=1023,_i=1026,bi=1027,nh=1028,Ja=1029,Yi=1030,Ka=1031,$a=1033,ro=33776,oo=33777,ao=33778,lo=33779,ja=35840,Qa=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37488,ol=37489,co=37490,al=37491,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,xl=37818,yl=37819,vl=37820,Ml=37821,Sl=36492,bl=36494,wl=36495,Tl=36283,El=36284,ho=36285,Al=36286,wr=2300,ha=2301,ea=2302,wc=2303,Tc=2400,Ec=2401,Ac=2402,gd=3200,Rl=0,_d=1,wi="",ln="srgb",Tr="srgb-linear",Er="linear",vt="srgb",ta=7680,xd=519,yd=512,vd=513,Md=514,ih=515,Sd=516,bd=517,sh=518,rh=519,wd=35044,oh="300 es",Cn=2e3,zs=2001;uu={},ks=null;Rd={[na]:na,[sa]:aa,[ra]:ra,[Bs]:oa,[ia]:ia,[aa]:sa,[la]:la,[oa]:Bs},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jl=Math.PI/180,ua=180/Math.PI;ph=class ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;Te=ph,jn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);m=Math.sin(m*y)/S,a=Math.sin(a*y)/S,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mh=class mh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;U=mh,ec=new U,du=new jn,gh=class gh{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],y=s[1],S=s[4],v=s[7],E=s[2],T=s[5],x=s[8];return r[0]=o*_+a*y+l*E,r[3]=o*g+a*S+l*T,r[6]=o*m+a*v+l*x,r[1]=c*_+h*y+d*E,r[4]=c*g+h*S+d*T,r[7]=c*m+h*v+d*x,r[2]=u*_+f*y+p*E,r[5]=u*g+f*S+p*T,r[8]=u*m+f*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tc.makeScale(e,t)),this}rotate(e){return Mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return Mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;it=gh,tc=new it,fu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft=Dp();da=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=Ar("canvas")),ws.width=e.width,ws.height=e.height;let s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,Hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Up=0,ic=new U,dn=class n extends $n{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=un,o=Si,a=Xn,l=mn,c=n.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=er(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Jc;dn.DEFAULT_ANISOTROPY=1;_h=class _h{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,E=(m+1)/2,T=(h+u)/4,x=(d+_)/4,w=(p+g)/4;return S>v&&S>E?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=x/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=x/r,s=w/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;Lt=_h,fa=class extends $n{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new dn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends fa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Rr=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},pa=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ga=class Ga{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,p,_,g)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ga().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,Bp)}lookAt(e,t,i){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Di.crossVectors(i,xn),Di.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Di.crossVectors(i,xn)),Di.normalize(),Ro.crossVectors(xn,Di),s[0]=Di.x,s[4]=Ro.x,s[8]=xn.x,s[1]=Di.y,s[5]=Ro.y,s[9]=xn.y,s[2]=Di.z,s[6]=Ro.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],y=i[3],S=i[7],v=i[11],E=i[15],T=s[0],x=s[4],w=s[8],L=s[12],R=s[1],C=s[5],z=s[9],W=s[13],I=s[2],q=s[6],N=s[10],O=s[14],K=s[3],D=s[7],k=s[11],H=s[15];return r[0]=o*T+a*R+l*I+c*K,r[4]=o*x+a*C+l*q+c*D,r[8]=o*w+a*z+l*N+c*k,r[12]=o*L+a*W+l*O+c*H,r[1]=h*T+d*R+u*I+f*K,r[5]=h*x+d*C+u*q+f*D,r[9]=h*w+d*z+u*N+f*k,r[13]=h*L+d*W+u*O+f*H,r[2]=p*T+_*R+g*I+m*K,r[6]=p*x+_*C+g*q+m*D,r[10]=p*w+_*z+g*N+m*k,r[14]=p*L+_*W+g*O+m*H,r[3]=y*T+S*R+v*I+E*K,r[7]=y*x+S*C+v*q+E*D,r[11]=y*w+S*z+v*N+E*k,r[15]=y*L+S*W+v*O+E*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],y=l*f-c*u,S=a*f-c*d,v=a*u-l*d,E=o*f-c*h,T=o*u-l*h,x=o*d-a*h;return t*(_*y-g*S+m*v)-i*(p*y-g*E+m*T)+s*(p*S-_*E+m*x)-r*(p*v-_*T+g*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=t*a-i*o,S=t*l-s*o,v=t*c-r*o,E=i*l-s*a,T=i*c-r*a,x=s*c-r*l,w=h*_-d*p,L=h*g-u*p,R=h*m-f*p,C=d*g-u*_,z=d*m-f*_,W=u*m-f*g,I=y*W-S*z+v*C+E*R-T*L+x*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return e[0]=(a*W-l*z+c*C)*q,e[1]=(s*z-i*W-r*C)*q,e[2]=(_*x-g*T+m*E)*q,e[3]=(u*T-d*x-f*E)*q,e[4]=(l*R-o*W-c*L)*q,e[5]=(t*W-s*R+r*L)*q,e[6]=(g*v-p*x-m*S)*q,e[7]=(h*x-u*v+f*S)*q,e[8]=(o*z-a*R+c*w)*q,e[9]=(i*R-t*z-r*w)*q,e[10]=(p*T-_*v+m*y)*q,e[11]=(d*v-h*T-f*y)*q,e[12]=(a*L-o*C-l*w)*q,e[13]=(t*C-i*L+s*w)*q,e[14]=(_*S-p*E-g*y)*q,e[15]=(h*E-d*S+u*y)*q,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,g=o*d,m=a*d,y=l*c,S=l*h,v=l*d,E=i.x,T=i.y,x=i.z;return s[0]=(1-(_+m))*E,s[1]=(f+v)*E,s[2]=(p-S)*E,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+S)*x,s[9]=(g-y)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ts.set(s[0],s[1],s[2]).length(),a=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Bn.copy(this);let c=1/o,h=1/a,d=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Cn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Cn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===zs)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Cn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Cn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===zs)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ga.prototype.isMatrix4=!0;At=Ga,Ts=new U,Bn=new At,Op=new U(0,0,0),Bp=new U(1,1,1),Di=new U,Ro=new U,xn=new U,mu=new At,gu=new jn,xi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zp=0,_u=new U,Es=new jn,ui=new At,Co=new U,mr=new U,kp=new U,Hp=new jn,xu=new U(1,0,0),yu=new U(0,1,0),vu=new U(0,0,1),Mu={type:"added"},Gp={type:"removed"},As={type:"childadded",child:null},sc={type:"childremoved",child:null},Ht=class n extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new xi,i=new jn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new it}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Co.copy(e):Co.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(mr,Co,this.up):ui.lookAt(Co,mr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ui),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),As.child=e,this.dispatchEvent(As),As.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gp),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new U(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ut=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vp={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Po={h:0,s:0,l:0};je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Ip(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=rc(o,r,e+1/3),this.g=rc(o,r,e),this.b=rc(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return ft.workingToColorSpace(an.copy(this),e),Math.round(dt(an.r*255,0,255))*65536+Math.round(dt(an.g*255,0,255))*256+Math.round(dt(an.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(an.copy(this),t);let i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=ln){ft.workingToColorSpace(an.copy(this),e);let t=an.r,i=an.g,s=an.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Po);let i=Ql(Fi.h,Po.h,t),s=Ql(Fi.s,Po.s,t),r=Ql(Fi.l,Po.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new je;je.NAMES=Pd;Pr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ir=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new U,di=new U,oc=new U,fi=new U,Rs=new U,Cs=new U,Su=new U,ac=new U,lc=new U,cc=new U,hc=new Lt,uc=new Lt,dc=new Lt,zi=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),di.subVectors(i,t),oc.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(di),l=zn.dot(oc),c=di.dot(di),h=di.dot(oc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return hc.setScalar(0),uc.setScalar(0),dc.setScalar(0),hc.fromBufferAttribute(e,t),uc.fromBufferAttribute(e,i),dc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hc,r.x),o.addScaledVector(uc,r.y),o.addScaledVector(dc,r.z),o}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),di.subVectors(e,t),zn.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,i),Cs.subVectors(r,i),ac.subVectors(e,i);let l=Rs.dot(ac),c=Cs.dot(ac);if(l<=0&&c<=0)return t.copy(i);lc.subVectors(e,s);let h=Rs.dot(lc),d=Cs.dot(lc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Rs,o);cc.subVectors(e,r);let f=Rs.dot(cc),p=Cs.dot(cc);if(p>=0&&f<=p)return t.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Cs,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Su.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Su,a);let m=1/(g+_+u);return o=_*m,a=u*m,t.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ki=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Lo.subVectors(this.max,gr),Ps.subVectors(e.a,gr),Is.subVectors(e.b,gr),Ls.subVectors(e.c,gr),Ui.subVectors(Is,Ps),Oi.subVectors(Ls,Is),es.subVectors(Ps,Ls);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-es.z,es.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,es.z,0,-es.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-es.y,es.x,0];return!fc(t,Ps,Is,Ls,Lo)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,Ps,Is,Ls,Lo))?!1:(No.crossVectors(Ui,Oi),t=[No.x,No.y,No.z],fc(t,Ps,Is,Ls,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new U,new U,new U,new U,new U,new U,new U,new U],kn=new U,Io=new ki,Ps=new U,Is=new U,Ls=new U,Ui=new U,Oi=new U,es=new U,gr=new U,Lo=new U,No=new U,ts=new U;kt=new U,Do=new Te,Wp=0,Pn=class extends $n{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wd,this.updateRanges=[],this.gpuType=Vn,this.version=0,this._normalizationScale=e!==void 0?lh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Np(e,this.array)}},Lr=class extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Nr=class extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},nt=class extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Xp=new ki,_r=new U,pc=new U,Hi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Xp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(pc)),this.expandByPoint(_r.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qp=0,Rn=new At,mc=new Ht,Ns=new U,yn=new ki,xr=new ki,Kt=new U,Et=class n extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?Nr:Lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(yn.min,xr.min),yn.expandByPoint(Kt),Kt.addVectors(yn.max,xr.max),yn.expandByPoint(Kt)):(yn.expandByPoint(xr.min),yn.expandByPoint(xr.max))}yn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Kt.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),Kt.add(Ns)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new U,l[L]=new U;let h=new U,d=new U,u=new U,f=new Te,p=new Te,_=new Te,g=new U,m=new U;function y(L,R,C){c[L]=c[R]=c[C]=1,h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,C),d.sub(h),u.sub(h),p.sub(f),_.sub(f);let z=1/(p.x*_.y-_.x*p.y);isFinite(z)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(z),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(z),a[L].add(g),a[R].add(g),a[C].add(g),l[L].add(m),l[R].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,R=S.length;L<R;++L){let C=S[L],z=C.start,W=C.count;for(let I=z,q=z+W;I<q;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new U,E=new U,T=new U,x=new U;function w(L){T.fromBufferAttribute(s,L),x.copy(T);let R=a[L];v.copy(R),v.sub(T.multiplyScalar(T.dot(R))).normalize(),E.crossVectors(x,R);let z=E.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,z)}for(let L=0,R=i.count;L<R;++L)c[L]&&w(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Pn(u,h,d)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gc=new U,Yp=new U,Zp=new it,Hn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=gc.subVectors(i,t).cross(Yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zp.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jp=0,Qn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=er(),this.name="",this.type="Material",this.blending=$s,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Hc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Hn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mi=new U,_c=new U,Fo=new U,Uo=new U,Vs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_c.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Uo.copy(this.origin).sub(_c);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Uo.dot(this.direction),l=-Uo.dot(Fo),c=Uo.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_c).addScaledVector(Fo,u),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,_=t.y-o.y,g=t.z-o.z,m=i.x-o.x,y=i.y-o.y,S=i.z-o.z,v=Math.abs(l),E=Math.abs(c),T=Math.abs(h),x,w,L,R,C,z,W,I,q,N,O,K;if(v>=E&&v>=T?(L=l,z=d,q=p,K=m,l>=0?(x=c,w=h,R=u,C=f,W=_,I=g,N=y,O=S):(x=h,w=c,R=f,C=u,W=g,I=_,N=S,O=y)):E>=T?(L=c,z=u,q=_,K=y,c>=0?(x=h,w=l,R=f,C=d,W=g,I=p,N=S,O=m):(x=l,w=h,R=d,C=f,W=p,I=g,N=m,O=S)):(L=h,z=f,q=g,K=S,h>=0?(x=l,w=c,R=d,C=u,W=p,I=_,N=m,O=y):(x=c,w=l,R=u,C=d,W=_,I=p,N=y,O=m)),L===0)return null;let D=x/L,k=w/L,H=1/L,G=R-D*z,he=C-k*z,J=W-D*q,ce=I-k*q,me=N-D*K,_e=O-k*K,re=me*ce-_e*J,xe=G*_e-he*me,We=J*he-ce*G;if(s){if(re<0||xe<0||We<0)return null}else if((re<0||xe<0||We<0)&&(re>0||xe>0||We>0))return null;let Le=re+xe+We;if(Le===0)return null;let Ne=H*(re*z+xe*q+We*K);return(Le>0?Ne<0:Ne>0)?null:this.at(Ne/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bu=new At,ns=new Vs,Oo=new Hi,wu=new U,Bo=new U,zo=new U,ko=new U,xc=new U,Ho=new U,Tu=new U,Go=new U,Gt=class extends Ht{constructor(e=new Et,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(xc.fromBufferAttribute(d,e),o?Ho.addScaledVector(xc,h):Ho.addScaledVector(xc.sub(t),h))}t.add(Ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Oo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Oo,wu)===null||ns.origin.distanceToSquared(wu)>(e.far-e.near)**2))&&(bu.copy(r).invert(),ns.copy(e.ray).applyMatrix4(bu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,E=S;v<E;v+=3){let T=a.getX(v),x=a.getX(v+1),w=a.getX(v+2);s=Vo(this,m,e,i,c,h,d,T,x,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let y=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);s=Vo(this,o,e,i,c,h,d,y,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,E=S;v<E;v+=3){let T=v,x=v+1,w=v+2;s=Vo(this,m,e,i,c,h,d,T,x,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let y=g,S=g+1,v=g+2;s=Vo(this,o,e,i,c,h,d,y,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};ma=class extends dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=$t,h=$t,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},is=new Hi,$p=new Te(.5,.5),Wo=new U,Gi=class{constructor(e=new Hn,t=new Hn,i=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],y=r[12],S=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,m-p,E-y).normalize(),s[1].setComponents(c+o,f+h,m+p,E+y).normalize(),s[2].setComponents(c+a,f+d,m+_,E+S).normalize(),s[3].setComponents(c-a,f-d,m-_,E-S).normalize(),i)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,f-u,m-g,E-v).normalize();else if(s[4].setComponents(c-l,f-u,m-g,E-v).normalize(),t===Cn)s[5].setComponents(c+l,f+u,m+g,E+v).normalize();else if(t===zs)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);let t=$p.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eu=new At,ga=class n{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Eu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Gi),i[s].setFromProjectionMatrix(Eu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Gi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}},Ws=class extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_a=new U,xa=new U,Au=new At,yr=new Vs,Xo=new Hi,yc=new U,Ru=new U,ya=class extends Ht{constructor(e=new Et,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_a.fromBufferAttribute(t,s-1),xa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_a.distanceTo(xa);e.setAttribute("lineDistance",new nt(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Au.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=h.getX(_),y=h.getX(_+1),S=qo(this,e,yr,l,m,y,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=qo(this,e,yr,l,_,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=qo(this,e,yr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=qo(this,e,yr,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Cu=new U,Pu=new U,Dr=class extends ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cu.fromBufferAttribute(t,s),Pu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cu.distanceTo(Pu);e.setAttribute("lineDistance",new nt(i,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xs=class extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Iu=new At,Rc=new Vs,Yo=new Hi,Zo=new U,Fr=class extends Ht{constructor(e=new Et,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Iu.copy(s).invert(),Rc.copy(e.ray).applyMatrix4(Iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let g=c.getX(p);Zo.fromBufferAttribute(d,g),Lu(Zo,g,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)Zo.fromBufferAttribute(d,p),Lu(Zo,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Ur=class extends dn{constructor(e=[],t=us,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class extends dn{constructor(e,t,i=Gn,s,r,o,a=$t,l=$t,c,h=_i,d=1){if(h!==_i&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Br=class extends yi{constructor(e,t=Gn,i=us,s,r,o=$t,a=$t,l,c=_i){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zr=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fn=class n extends Et{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function p(_,g,m,y,S,v,E,T,x,w,L){let R=v/x,C=E/w,z=v/2,W=E/2,I=T/2,q=x+1,N=w+1,O=0,K=0,D=new U;for(let k=0;k<N;k++){let H=k*C-W;for(let G=0;G<q;G++){let he=G*R-z;D[_]=he*y,D[g]=H*S,D[m]=I,c.push(D.x,D.y,D.z),D[_]=0,D[g]=0,D[m]=T>0?1:-1,h.push(D.x,D.y,D.z),d.push(G/x),d.push(1-k/w),O+=1}}for(let k=0;k<w;k++)for(let H=0;H<x;H++){let G=u+H+q*k,he=u+H+q*(k+1),J=u+(H+1)+q*(k+1),ce=u+(H+1)+q*k;l.push(G,he,ce),l.push(he,J,ce),K+=6}a.addGroup(f,K,L),f+=K,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},kr=class n extends Et{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},jt=class n extends Et{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],g=i/2,m=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function y(){let v=new U,E=new U,T=0,x=(t-e)/i;for(let w=0;w<=r;w++){let L=[],R=w/r,C=R*(t-e)+e;for(let z=0;z<=s;z++){let W=z/s,I=W*l+a,q=Math.sin(I),N=Math.cos(I);E.x=C*q,E.y=-R*i+g,E.z=C*N,d.push(E.x,E.y,E.z),v.set(q,x,N).normalize(),u.push(v.x,v.y,v.z),f.push(W,1-R),L.push(p++)}_.push(L)}for(let w=0;w<s;w++)for(let L=0;L<r;L++){let R=_[L][w],C=_[L+1][w],z=_[L+1][w+1],W=_[L][w+1];(e>0||L!==0)&&(h.push(R,C,W),T+=3),(t>0||L!==r-1)&&(h.push(C,z,W),T+=3)}c.addGroup(m,T,0),m+=T}function S(v){let E=p,T=new Te,x=new U,w=0,L=v===!0?e:t,R=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;let C=p;for(let z=0;z<=s;z++){let I=z/s*l+a,q=Math.cos(I),N=Math.sin(I);x.x=L*N,x.y=g*R,x.z=L*q,d.push(x.x,x.y,x.z),u.push(0,R,0),T.x=q*.5+.5,T.y=N*.5*R+.5,f.push(T.x,T.y),p++}for(let z=0;z<s;z++){let W=E+z,I=C+z;v===!0?h.push(I,I+1,W):h.push(I+1,I,W),w+=3}c.addGroup(m,w,v===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rs=class n extends jt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},va=class n extends Et{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new U,v=new U,E=new U;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],v),f(t[T+2],E),l(S,v,E,y)}function l(y,S,v,E){let T=E+1,x=[];for(let w=0;w<=T;w++){x[w]=[];let L=y.clone().lerp(v,w/T),R=S.clone().lerp(v,w/T),C=T-w;for(let z=0;z<=C;z++)z===0&&w===T?x[w][z]=L:x[w][z]=L.clone().lerp(R,z/C)}for(let w=0;w<T;w++)for(let L=0;L<2*(T-w)-1;L++){let R=Math.floor(L/2);L%2===0?(u(x[w][R+1]),u(x[w+1][R]),u(x[w][R])):(u(x[w][R+1]),u(x[w+1][R+1]),u(x[w+1][R]))}}function c(y){let S=new U;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(y),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let y=new U;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let v=g(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;o.push(v,1-E)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let S=o[y+0],v=o[y+2],E=o[y+4],T=Math.max(S,v,E),x=Math.min(S,v,E);T>.9&&x<.1&&(S<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){let v=y*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function p(){let y=new U,S=new U,v=new U,E=new U,T=new Te,x=new Te,w=new Te;for(let L=0,R=0;L<r.length;L+=9,R+=6){y.set(r[L+0],r[L+1],r[L+2]),S.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),T.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),w.set(o[R+4],o[R+5]),E.copy(y).add(S).add(v).divideScalar(3);let C=g(E);_(T,R+0,y,C),_(x,R+2,S,C),_(w,R+4,v,C)}}function _(y,S,v,E){E<0&&y.x===1&&(o[S]=y.x-1),v.x===0&&v.z===0&&(o[S]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},vi=class n extends va{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Te:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new U,s=[],r=[],o=[],a=new U,l=new At;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},qs=class extends Mn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Te){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ma=class extends qs{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Nu=new U,Du=new U,vc=new ch,Mc=new ch,Sc=new ch,Sa=class extends Mn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Du.subVectors(s[0],s[1]).add(s[0]),c=Du);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Nu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),vc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),Mc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),Sc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Mc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Sc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(vc.calc(l),Mc.calc(l),Sc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Hr=class extends Mn{constructor(e=new Te,t=new Te,i=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Te){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends Mn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y),br(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends Mn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends Mn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends Mn{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends Mn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y),Sr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Fu(a,l.x,c.x,h.x,d.x),Fu(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},Cc=Object.freeze({__proto__:null,ArcCurve:Ma,CatmullRomCurve3:Sa,CubicBezierCurve:Hr,CubicBezierCurve3:ba,EllipseCurve:qs,LineCurve:Gr,LineCurve3:wa,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:Ta,SplineCurve:Wr}),Ea=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Cc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Xr=class extends Ea{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Gr(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Vr(this.currentPoint.clone(),new Te(e,t),new Te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Hr(this.currentPoint.clone(),new Te(e,t),new Te(i,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Wr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new qs(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ei=class extends Xr{constructor(e){super(e),this.uuid=er(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Xr().fromJSON(s))}return this}};Lc=class{static triangulate(e,t,i=2){return rm(e,t,i)}},Kn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ou(e),Bu(i,e);let o=e.length;t.forEach(Ou);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bu(i,t[l]);let a=Lc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Jr=class n extends Et{constructor(e=new ei([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Sm,S,v=!1,E,T,x,w;if(m){S=m.getSpacedPoints(h),v=!0,u=!1;let V=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,V),T=new U,x=new U,w=new U}u||(g=0,f=0,p=0,_=0);let L=a.extractPoints(c),R=L.shape,C=L.holes;if(!Kn.isClockWise(R)){R=R.reverse();for(let V=0,oe=C.length;V<oe;V++){let ae=C[V];Kn.isClockWise(ae)&&(C[V]=ae.reverse())}}function W(V){let ae=10000000000000001e-36,Ee=V[0];for(let le=1;le<=V.length;le++){let He=le%V.length,Pe=V[He],$e=Pe.x-Ee.x,Qe=Pe.y-Ee.y,rt=$e*$e+Qe*Qe,B=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(Ee.x),Math.abs(Ee.y)),se=ae*B*B;if(rt<=se){V.splice(He,1),le--;continue}Ee=Pe}}W(R),C.forEach(W);let I=C.length,q=R;for(let V=0;V<I;V++){let oe=C[V];R=R.concat(oe)}function N(V,oe,ae){return oe||tt("ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(oe,ae)}let O=R.length;function K(V,oe,ae){let Ee,le,He,Pe=V.x-oe.x,$e=V.y-oe.y,Qe=ae.x-V.x,rt=ae.y-V.y,B=Pe*Pe+$e*$e,se=Pe*rt-$e*Qe;if(Math.abs(se)>Number.EPSILON){let ot=Math.sqrt(B),ut=Math.sqrt(Qe*Qe+rt*rt),ye=oe.x-$e/ot,Tt=oe.y+Pe/ot,Ve=ae.x-rt/ut,qe=ae.y+Qe/ut,A=((Ve-ye)*rt-(qe-Tt)*Qe)/(Pe*rt-$e*Qe);Ee=ye+Pe*A-V.x,le=Tt+$e*A-V.y;let M=Ee*Ee+le*le;if(M<=2)return new Te(Ee,le);He=Math.sqrt(M/2)}else{let ot=!1;Pe>Number.EPSILON?Qe>Number.EPSILON&&(ot=!0):Pe<-Number.EPSILON?Qe<-Number.EPSILON&&(ot=!0):Math.sign($e)===Math.sign(rt)&&(ot=!0),ot?(Ee=-$e,le=Pe,He=Math.sqrt(B)):(Ee=Pe,le=$e,He=Math.sqrt(B/2))}return new Te(Ee/He,le/He)}let D=[];for(let V=0,oe=q.length,ae=oe-1,Ee=V+1;V<oe;V++,ae++,Ee++)ae===oe&&(ae=0),Ee===oe&&(Ee=0),D[V]=K(q[V],q[ae],q[Ee]);let k=[],H,G=D.concat();for(let V=0,oe=I;V<oe;V++){let ae=C[V];H=[];for(let Ee=0,le=ae.length,He=le-1,Pe=Ee+1;Ee<le;Ee++,He++,Pe++)He===le&&(He=0),Pe===le&&(Pe=0),H[Ee]=K(ae[Ee],ae[He],ae[Pe]);k.push(H),G=G.concat(H)}let he;if(g===0)he=Kn.triangulateShape(q,C);else{let V=[],oe=[];for(let ae=0;ae<g;ae++){let Ee=ae/g,le=f*Math.cos(Ee*Math.PI/2),He=p*Math.sin(Ee*Math.PI/2)+_;for(let Pe=0,$e=q.length;Pe<$e;Pe++){let Qe=N(q[Pe],D[Pe],He);xe(Qe.x,Qe.y,-le),Ee===0&&V.push(Qe)}for(let Pe=0,$e=I;Pe<$e;Pe++){let Qe=C[Pe];H=k[Pe];let rt=[];for(let B=0,se=Qe.length;B<se;B++){let ot=N(Qe[B],H[B],He);xe(ot.x,ot.y,-le),Ee===0&&rt.push(ot)}Ee===0&&oe.push(rt)}}he=Kn.triangulateShape(V,oe)}let J=he.length,ce=p+_;for(let V=0;V<O;V++){let oe=u?N(R[V],G[V],ce):R[V];v?(x.copy(E.normals[0]).multiplyScalar(oe.x),T.copy(E.binormals[0]).multiplyScalar(oe.y),w.copy(S[0]).add(x).add(T),xe(w.x,w.y,w.z)):xe(oe.x,oe.y,0)}for(let V=1;V<=h;V++)for(let oe=0;oe<O;oe++){let ae=u?N(R[oe],G[oe],ce):R[oe];v?(x.copy(E.normals[V]).multiplyScalar(ae.x),T.copy(E.binormals[V]).multiplyScalar(ae.y),w.copy(S[V]).add(x).add(T),xe(w.x,w.y,w.z)):xe(ae.x,ae.y,d/h*V)}for(let V=g-1;V>=0;V--){let oe=V/g,ae=f*Math.cos(oe*Math.PI/2),Ee=p*Math.sin(oe*Math.PI/2)+_;for(let le=0,He=q.length;le<He;le++){let Pe=N(q[le],D[le],Ee);xe(Pe.x,Pe.y,d+ae)}for(let le=0,He=C.length;le<He;le++){let Pe=C[le];H=k[le];for(let $e=0,Qe=Pe.length;$e<Qe;$e++){let rt=N(Pe[$e],H[$e],Ee);v?xe(rt.x,rt.y+S[h-1].y,S[h-1].x+ae):xe(rt.x,rt.y,d+ae)}}}me(),_e();function me(){let V=s.length/3;if(u){let oe=0,ae=O*oe;for(let Ee=0;Ee<J;Ee++){let le=he[Ee];We(le[2]+ae,le[1]+ae,le[0]+ae)}oe=h+g*2,ae=O*oe;for(let Ee=0;Ee<J;Ee++){let le=he[Ee];We(le[0]+ae,le[1]+ae,le[2]+ae)}}else{for(let oe=0;oe<J;oe++){let ae=he[oe];We(ae[2],ae[1],ae[0])}for(let oe=0;oe<J;oe++){let ae=he[oe];We(ae[0]+O*h,ae[1]+O*h,ae[2]+O*h)}}i.addGroup(V,s.length/3-V,0)}function _e(){let V=s.length/3,oe=0;re(q,oe),oe+=q.length;for(let ae=0,Ee=C.length;ae<Ee;ae++){let le=C[ae];re(le,oe),oe+=le.length}i.addGroup(V,s.length/3-V,1)}function re(V,oe){let ae=V.length;for(;--ae>=0;){let Ee=ae,le=ae-1;le<0&&(le=V.length-1);for(let He=0,Pe=h+g*2;He<Pe;He++){let $e=O*He,Qe=O*(He+1),rt=oe+Ee+$e,B=oe+le+$e,se=oe+le+Qe,ot=oe+Ee+Qe;Le(rt,B,se,ot)}}}function xe(V,oe,ae){l.push(V),l.push(oe),l.push(ae)}function We(V,oe,ae){Ne(V),Ne(oe),Ne(ae);let Ee=s.length/3,le=y.generateTopUV(i,s,Ee-3,Ee-2,Ee-1);De(le[0]),De(le[1]),De(le[2])}function Le(V,oe,ae,Ee){Ne(V),Ne(oe),Ne(Ee),Ne(oe),Ne(ae),Ne(Ee);let le=s.length/3,He=y.generateSideWallUV(i,s,le-6,le-3,le-2,le-1);De(He[0]),De(He[1]),De(He[3]),De(He[1]),De(He[2]),De(He[3])}function Ne(V){s.push(l[V*3+0]),s.push(l[V*3+1]),s.push(l[V*3+2])}function De(V){r.push(V.x),r.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return bm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Cc[s.type]().fromJSON(s)),new n(i,e.options)}},Sm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Te(r,o),new Te(a,l),new Te(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Te(o,1-l),new Te(c,1-d),new Te(u,1-p),new Te(_,1-m)]:[new Te(a,1-l),new Te(h,1-d),new Te(f,1-p),new Te(g,1-m)]}};Kr=class n extends Et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let y=m*u-o;for(let S=0;S<c;S++){let v=S*d-r;p.push(v,-y,0),_.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let S=y+c*m,v=y+c*(m+1),E=y+1+c*(m+1),T=y+1+c*m;f.push(S,v,T),f.push(v,E,T)}this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},as=class n extends Et{constructor(e=new ei([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;Kn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];Kn.isClockWise(y)===!0&&(p[g]=y.reverse())}let _=Kn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){let y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){let y=_[g],S=y[0]+d,v=y[1]+d,E=y[2]+d;i.push(S,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return wm(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};Mi=class n extends Et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new U,u=new U,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){let y=[],S=m/i,v=o+S*a,E=e*Math.cos(v),T=Math.sqrt(e*e-E*E),x=0;m===0&&o===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let L=w/t,R=s+L*r;d.x=-T*Math.cos(R),d.y=E,d.z=T*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(L+x,1-S),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let S=h[m][y+1],v=h[m][y],E=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&f.push(S,v,T),(m!==i-1||l<Math.PI)&&f.push(v,E,T)}this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Zs=class n extends Et{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new U,f=new U,p=new U;for(let _=0;_<=i;_++){let g=o+_/i*a;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,y=(s+1)*(_-1)+g-1,S=(s+1)*(_-1)+g,v=(s+1)*_+g;l.push(m,y,v),l.push(y,S,v)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};Fd={clone:fs,merge:cn},Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(s.value);break;case"v2":this.uniforms[i].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new it().fromArray(s.value);break;case"m4":this.uniforms[i].value=new At().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Aa=class extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ra=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Vi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pa=class extends Vi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=e,a=2*t-i;break;case Ac:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=e,l=2*i-t;break;case Ac:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*_+.5*p,v=f*g-f*_;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+y*o[c+E]+S*o[l+E]+v*o[d+E];return r}},Ia=class extends Vi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},La=class extends Vi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Na=class extends Vi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-t)/(s-t),_=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=f*u+p*2,y=d[m],S=d[m+1],v=e*u+p*2,E=h[v],T=h[v+1],x=Cm(i,t,y,E,s);r[p]=Ud(x,_,S,T,g)}return r}};Sn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),$o(e.settings)&&(i.settings={inTangents:Ds(e.settings.inTangents,Array),outTangents:Ds(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Na(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case ha:t=this.InterpolantFactoryMethodLinear;break;case ea:t=this.InterpolantFactoryMethodSmooth;break;case wc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;$o(this.settings)&&(ku(this.settings.inTangents,e),ku(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;$o(this.settings)&&(Hu(this.settings.inTangents,e),Hu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){tt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Pp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ea,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let _=t[d+p];if(_!==t[u+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,$o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=ha;Wi=class extends Sn{constructor(e,t,i){super(e,t,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=wr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;Da=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};Da.prototype.ValueTypeName="color";Fa=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};Fa.prototype.ValueTypeName="number";Ua=class extends Vi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)jn.slerpFlat(r,0,o,c-a,o,c,l);return r}},$r=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;Xi=class extends Sn{constructor(e,t,i){super(e,t,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=wr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;Oa=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};Oa.prototype.ValueTypeName="vector";Ba=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Od=new Ba,za=class{constructor(e){this.manager=e!==void 0?e:Od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";jr=class extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qr=class extends jr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bc=new At,Gu=new U,Vu=new U,ka=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(bc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===zs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jo=new U,Qo=new jn,Zn=new U,eo=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jo,Qo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Qo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(jo,Qo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Qo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new U,Wu=new Te,Xu=new Te,hn=class extends eo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Xu),t.subVectors(Xu,Wu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},to=class extends eo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nc=class extends ka{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},no=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fs=-90,Us=1,Js=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Fs,Us,e,t);s.layers=this.layers,this.add(s);let r=new hn(Fs,Us,e,t);r.layers=this.layers,this.add(r);let o=new hn(Fs,Us,e,t);o.layers=this.layers,this.add(o);let a=new hn(Fs,Us,e,t);a.layers=this.layers,this.add(a);let l=new hn(Fs,Us,e,t);l.layers=this.layers,this.add(l);let c=new hn(Fs,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ha=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},uh="\\[\\]\\.:\\/",Pm=new RegExp("["+uh+"]","g"),dh="[^"+uh+"]",Im="[^"+uh.replace("\\.","")+"]",Lm=/((?:WC+[\/:])*)/.source.replace("WC",dh),Nm=/(WCOD+)?/.source.replace("WCOD",Im),Dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),Fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),Um=new RegExp("^"+Lm+Nm+Dm+Fm+"$"),Om=["material","materials","bones","map"],Dc=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pm,"")}static parseTrackName(e){let t=Um.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Om.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Dc;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];PM=new Float32Array(1),xh=class xh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};xh.prototype.isMatrix2=!0;Fc=xh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function of(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function km(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function M_(n,e,t,i,s,r){let o=new je(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=e.get(S,v)}return S}function p(y){let S=!1,v=f(y);v===null?g(o,a):v&&v.isColor&&(g(v,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new Gt(new fn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:fs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=ft.getTransfer(v.colorSpace)!==vt,(h!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Gt(new Kr(2,2),new ti({name:"BackgroundMaterial",uniforms:fs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ft.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(Cl,hh(n)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p,addToRenderList:_,dispose:m}}function S_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(C,z,W,I,q){let N=!1,O=d(C,I,W,z);r!==O&&(r=O,c(r.object)),N=f(C,I,W,q),N&&p(C,I,W,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(C,z,W,I),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function d(C,z,W,I){let q=I.wireframe===!0,N=i[z.id];N===void 0&&(N={},i[z.id]=N);let O=C.isInstancedMesh===!0?C.id:0,K=N[O];K===void 0&&(K={},N[O]=K);let D=K[W.id];D===void 0&&(D={},K[W.id]=D);let k=D[q];return k===void 0&&(k=u(l()),D[q]=k),k}function u(C){let z=[],W=[],I=[];for(let q=0;q<t;q++)z[q]=0,W[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:I,object:C,attributes:{},index:null}}function f(C,z,W,I){let q=r.attributes,N=z.attributes,O=0,K=W.getAttributes();for(let D in K)if(K[D].location>=0){let H=q[D],G=N[D];if(G===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(G=C.instanceColor)),H===void 0||H.attribute!==G||G&&H.data!==G.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function p(C,z,W,I){let q={},N=z.attributes,O=0,K=W.getAttributes();for(let D in K)if(K[D].location>=0){let H=N[D];H===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(H=C.instanceColor));let G={};G.attribute=H,H&&H.data&&(G.data=H.data),q[D]=G,O++}r.attributes=q,r.attributesNum=O,r.index=I}function _(){let C=r.newAttributes;for(let z=0,W=C.length;z<W;z++)C[z]=0}function g(C){m(C,0)}function m(C,z){let W=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;W[C]=1,I[C]===0&&(n.enableVertexAttribArray(C),I[C]=1),q[C]!==z&&(n.vertexAttribDivisor(C,z),q[C]=z)}function y(){let C=r.newAttributes,z=r.enabledAttributes;for(let W=0,I=z.length;W<I;W++)z[W]!==C[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function S(C,z,W,I,q,N,O){O===!0?n.vertexAttribIPointer(C,z,W,q,N):n.vertexAttribPointer(C,z,W,I,q,N)}function v(C,z,W,I){_();let q=I.attributes,N=W.getAttributes(),O=z.defaultAttributeValues;for(let K in N){let D=N[K];if(D.location>=0){let k=q[K];if(k===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){let H=k.normalized,G=k.itemSize,he=e.get(k);if(he===void 0)continue;let J=he.buffer,ce=he.type,me=he.bytesPerElement,_e=ce===n.INT||ce===n.UNSIGNED_INT||k.gpuType===qa;if(k.isInterleavedBufferAttribute){let re=k.data,xe=re.isInterleavedBuffer===!0?re.stride:re.itemSize,We=k.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Le=0;Le<D.locationSize;Le++)m(D.location+Le,re.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<D.locationSize;Le++)g(D.location+Le);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Le=0;Le<D.locationSize;Le++)S(D.location+Le,G/D.locationSize,ce,H,xe*me,(We+G/D.locationSize*Le)*me,_e)}else{if(k.isInstancedBufferAttribute){for(let re=0;re<D.locationSize;re++)m(D.location+re,k.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let re=0;re<D.locationSize;re++)g(D.location+re);n.bindBuffer(n.ARRAY_BUFFER,J);for(let re=0;re<D.locationSize;re++)S(D.location+re,G/D.locationSize,ce,H,G*me,G/D.locationSize*re*me,_e)}}else if(O!==void 0){let H=O[K];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(D.location,H);break;case 3:n.vertexAttrib3fv(D.location,H);break;case 4:n.vertexAttrib4fv(D.location,H);break;default:n.vertexAttrib1fv(D.location,H)}}}}y()}function E(){L();for(let C in i){let z=i[C];for(let W in z){let I=z[W];for(let q in I){let N=I[q];for(let O in N)h(N[O].object),delete N[O];delete I[q]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;let z=i[C.id];for(let W in z){let I=z[W];for(let q in I){let N=I[q];for(let O in N)h(N[O].object),delete N[O];delete I[q]}}delete i[C.id]}function x(C){for(let z in i){let W=i[z];for(let I in W){let q=W[I];if(q[C.id]===void 0)continue;let N=q[C.id];for(let O in N)h(N[O].object),delete N[O];delete q[C.id]}}}function w(C){for(let z in i){let W=i[z],I=C.isInstancedMesh===!0?C.id:0,q=W[I];if(q!==void 0){for(let N in q){let O=q[N];for(let K in O)h(O[K].object),delete O[K];delete q[N]}delete W[I],Object.keys(W).length===0&&delete i[z]}}}function L(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function b_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function w_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Xn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==mn&&x!==Vn&&!w&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:T}}function T_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Hn,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:i,S=y*4,v=m.clippingState||null;l.value=v,v=h(p,u,S,f);for(let E=0;E!==S;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function zd(n,e,t){return new po(n,{minFilter:Si,generateMipmaps:e,type:Wn,colorSpace:Tr,depthBuffer:t})}function mo(n,e,t){return new ti({name:n,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:sn,blending:cs,depthTest:!1,depthWrite:!1})}function I_(){return mo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lf}u

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
	`)}function L_(){return mo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cf}},`

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
	`)}function N_(){return mo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${A_}
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
	`)}function kd(){return mo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Hd(){return mo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function D_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Va||f===Wa)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new po(p.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Va||f===Wa,_=f===us||f===js;if(p||_){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Il(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Il(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Va?u.mapping=us:f===Wa&&(u.mapping=js),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function F_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Mr("WebGLRenderer: "+i+" extension not supported."),s}}}function U_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let g in _)e.update(_[g],n.ARRAY_BUFFER)}function d(p){let _=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=_!==null?_.array.length:g.array.length/3-1,S=g.count>=65535?Nr:Lr,v=new S(Math.ceil(y/3)*6,1),E=v.array;if(_!==null){let x=_.array;m=_.version;for(let w=0,L=0;w<y;w+=3){let R=x[w+0],C=x[w+1],z=x[w+2];E[L++]=R,E[L++]=C,E[L++]=C,E[L++]=z,E[L++]=z,E[L++]=R}}else{m=g.version;for(let x=0,w=0;x<y;x+=3){let L=x+0,R=x+1,C=x+2;E[w++]=L,E[w++]=R,E[w++]=R,E[w++]=C,E[w++]=C,E[w++]=L}}v.version=m;let T=r.get(p);T&&e.remove(T),r.set(p,v)}function u(p){let _=r.get(p);if(_){let g=p.index;g!==null&&_.version<g.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function O_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function B_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function z_(n,e,t){let i=new WeakMap,s=new Lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*d),x=new Rr(T,v,E,d);x.type=Vn,x.needsUpdate=!0;let w=S*4;for(let R=0;R<d;R++){let C=g[R],z=m[R],W=y[R],I=v*E*4*R;for(let q=0;q<C.count;q++){let N=q*w;f===!0&&(s.fromBufferAttribute(C,q),T[I+N+0]=s.x,T[I+N+1]=s.y,T[I+N+2]=s.z,T[I+N+3]=0),p===!0&&(s.fromBufferAttribute(z,q),T[I+N+4]=s.x,T[I+N+5]=s.y,T[I+N+6]=s.z,T[I+N+7]=0),_===!0&&(s.fromBufferAttribute(W,q),T[I+N+8]=s.x,T[I+N+9]=s.y,T[I+N+10]=s.z,T[I+N+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Te(v,E)},i.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function k_(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function G_(n,e,t,i,s,r){let o=new vn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Et;h.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new nt([0,2,0,0,2,0],2));let d=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Gt(h,d),f=new to(-1,1,1,-1,0,1),p=null,_=null,g=!1,m,y=null,S=[],v=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),l!==null&&l.setSize(E,T);for(let x=0;x<S.length;x++){let w=S[x];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){S=E,v=S.length>0&&S[0].isRenderPass===!0;let T=o.width,x=o.height;S.length>0&&a===null&&(a=new vn(T,x,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new vn(T,x,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&S.some(L=>L.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new yi(T,x),r===!0&&(c.format=bi,c.type=ds)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let L=0;L<S.length;L++){let R=S[L];R.setSize&&R.setSize(T,x),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,T){if(g||E.toneMapping===ni&&S.length===0)return!1;if(y=T,T!==null){let x=T.width,w=T.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return v===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=ni,!0},this.hasRenderPass=function(){return v},this.end=function(E,T){E.toneMapping=m,g=!0;let x=o,w=a;for(let L=0;L<S.length;L++){let R=S[L];R.enabled!==!1&&(R.render(E,w,x,T),R.needsSwap!==!1&&(x=w,w=w===a?l:a))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,d.defines={},ft.getTransfer(p)===vt&&(d.defines.SRGB_TRANSFER="");let L=H_[_];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(y),E.render(u,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function nr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nl(n,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function V_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function X_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Y_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;qd.set(i),n.uniformMatrix2fv(this.addr,!1,qd),qt(t,i)}}function Z_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Xd.set(i),n.uniformMatrix3fv(this.addr,!1,Xd),qt(t,i)}}function J_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),qt(t,i)}}function K_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function j_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function ex(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Dl(n){return n.version===0&&(n.compareFunction=rh,n.needsUpdate=!0),n}function sx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Dl(uf):r=hf,t.setTexture2D(e||r,s)}function rx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pf,s)}function ox(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Dl(df):r=mf,t.setTextureCube(e||r,s)}function ax(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ff,s)}function lx(n){switch(n){case 5126:return V_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return K_;case 35667:case 35671:return $_;case 35668:case 35672:return j_;case 35669:case 35673:return Q_;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(n,e){n.uniform1fv(this.addr,e)}function hx(n,e){let t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function ux(n,e){let t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function dx(n,e){let t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function fx(n,e){let t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function px(n,e){let t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mx(n,e){let t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gx(n,e){n.uniform1iv(this.addr,e)}function _x(n,e){n.uniform2iv(this.addr,e)}function xx(n,e){n.uniform3iv(this.addr,e)}function yx(n,e){n.uniform4iv(this.addr,e)}function vx(n,e){n.uniform1uiv(this.addr,e)}function Mx(n,e){n.uniform2uiv(this.addr,e)}function Sx(n,e){n.uniform3uiv(this.addr,e)}function bx(n,e){n.uniform4uiv(this.addr,e)}function wx(n,e,t){let i=this.cache,s=e.length,r=Nl(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Dl(uf):o=hf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Tx(n,e,t){let i=this.cache,s=e.length,r=Nl(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pf,r[o])}function Ex(n,e,t){let i=this.cache,s=e.length,r=Nl(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Dl(df):o=mf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Ax(n,e,t){let i=this.cache,s=e.length,r=Nl(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ff,r[o])}function Rx(n){switch(n){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return xx;case 35669:case 35673:return yx;case 5125:return vx;case 36294:return Mx;case 36295:return Sx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Ax}}function Yd(n,e){n.seq.push(e),n.map[e.id]=e}function Cx(n,e,t){let i=n.name,s=i.length;for(vh.lastIndex=0;;){let r=vh.exec(i),o=vh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yd(t,c===void 0?new Sh(a,n,e):new bh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new wh(a),Yd(t,d)),t=d}}}function Zd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Lx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Nx(n){ft._getMatrix(Jd,ft.workingColorSpace,n);let e=`mat3( ${Jd.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Er:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Kd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Lx(n.getShaderSource(e),a)}else return r}function Dx(n,e){let t=Nx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Ux(n,e){let t=Fx[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ox(){ft.getLuminanceCoefficients(Pl);let n=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function zx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fo(n){return n!==""}function $d(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Th(n){return n.replace(Hx,Gx)}function Gx(n,e){let t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Th(t)}function Qd(n){return n.replace(Vx,Wx)}function Wx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function qx(n){return Xx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Zx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Yx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Kx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Jx[n.combine]||"ENVMAP_BLENDING_NONE"}function $x(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=qx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Zx(t),d=Kx(t),u=Bx(t),f=zx(r),p=s.createProgram(),_,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(fo).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(fo).join(`
`),g.length>0&&(g+=`
`)):(_=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),g=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ct.tonemapping_pars_fragment:"",t.toneMapping!==ni?Ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Dx("linearToOutputTexel",t.outputColorSpace),Ox(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),o=Th(o),o=$d(o,t),o=jd(o,t),a=Th(a),a=$d(a,t),a=jd(a,t),o=Qd(o),a=Qd(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+_+o,S=m+g+a,v=Zd(s,s.VERTEX_SHADER,y),E=Zd(s,s.FRAGMENT_SHADER,S);s.attachShader(p,v),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(R){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(v)||"",W=s.getShaderInfoLog(E)||"",I=C.trim(),q=z.trim(),N=W.trim(),O=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,E);else{let D=Kd(s,v,"vertex"),k=Kd(s,E,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+D+`
`+k)}else I!==""?Ze("WebGLProgram: Program Info Log:",I):(q===""||N==="")&&(K=!1);K&&(R.diagnostics={runnable:O,programLog:I,vertexShader:{log:q,prefix:_},fragmentShader:{log:N,prefix:g}})}s.deleteShader(v),s.deleteShader(E),x=new tr(s,p),w=kx(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,Px)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ix++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}function Qx(n){return n===Yi||n===co||n===ho}function ey(n,e,t,i,s,r){let o=new Cr,a=new Eh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,w,L,R,C,z){let W=R.fog,I=C.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||q,N),K=u[x.type],D=i.precision;x.precision!==null&&(D=i.getMaxPrecision(x.precision),D!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",D,"instead."));let k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,H=k!==void 0?k.length:0,G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let he,J,ce,me;if(K){let Re=si[K];he=Re.vertexShader,J=Re.fragmentShader}else{he=x.vertexShader,J=x.fragmentShader;let Re=a.getVertexShaderStage(x),_t=a.getFragmentShaderStage(x);a.update(x,Re,_t),ce=Re.id,me=_t.id}let _e=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),xe=C.isInstancedMesh===!0,We=C.isBatchedMesh===!0,Le=!!x.map,Ne=!!x.matcap,De=!!O,V=De&&O.isPMREMTexture===!0,oe=!!x.aoMap,ae=!!x.lightMap,Ee=!!x.bumpMap&&x.wireframe===!1,le=!!x.normalMap,He=!!x.displacementMap,Pe=!!x.emissiveMap,$e=!!x.metalnessMap,Qe=!!x.roughnessMap,rt=x.anisotropy>0,B=x.clearcoat>0,se=x.diffuseRoughness>0,ot=x.dispersion>0,ut=x.retroreflectivity>0,ye=x.iridescence>0,Tt=x.sheen>0,Ve=x.transmission>0,qe=rt&&!!x.anisotropyMap,A=B&&!!x.clearcoatMap,M=B&&!!x.clearcoatNormalMap,Y=B&&!!x.clearcoatRoughnessMap,de=se&&!!x.diffuseRoughnessMap,ie=ye&&!!x.iridescenceMap,ve=ye&&!!x.iridescenceThicknessMap,Ae=Tt&&!!x.sheenColorMap,te=Tt&&!!x.sheenRoughnessMap,ne=!!x.specularMap,Me=!!x.specularColorMap,P=!!x.specularIntensityMap,Q=Ve&&!!x.transmissionMap,j=Ve&&!!x.thicknessMap,Se=!!x.gradientMap,ue=!!x.alphaMap,fe=x.alphaTest>0,ze=!!x.alphaHash,at=!!x.extensions,pe=ni;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(pe=n.toneMapping);let Ge=V?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,et={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:he,fragmentShader:J,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:D,batching:We,batchingColor:We&&C._colorsTexture!==null,instancing:xe,instancingColor:xe&&C.instanceColor!==null,instancingMorph:xe&&C.morphTexture!==null,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:Ne,envMap:De,envMapMode:De&&O.mapping,envMapPMREM:V,envMapMaxLod:V?Ge.length-1:null,envMapSize:V?Ge[0].width:null,aoMap:oe,lightMap:ae,bumpMap:Ee,normalMap:le,displacementMap:He,emissiveMap:Pe,normalMapObjectSpace:le&&x.normalMapType===_d,normalMapTangentSpace:le&&x.normalMapType===Rl,packedNormalMap:le&&x.normalMapType===Rl&&Qx(x.normalMap.format),metalnessMap:$e,roughnessMap:Qe,anisotropy:rt,anisotropyMap:qe,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:Y,diffuseRoughness:se,diffuseRoughnessMap:de,dispersion:ot,retroreflection:ut,iridescence:ye,iridescenceMap:ie,iridescenceThicknessMap:ve,sheen:Tt,sheenColorMap:Ae,sheenRoughnessMap:te,specularMap:ne,specularColorMap:Me,specularIntensityMap:P,transmission:Ve,transmissionMap:Q,thicknessMap:j,gradientMap:Se,opaque:x.transparent===!1&&x.blending===$s&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:ze,combine:x.combine,mapUv:Le&&f(x.map.channel),aoMapUv:oe&&f(x.aoMap.channel),lightMapUv:ae&&f(x.lightMap.channel),bumpMapUv:Ee&&f(x.bumpMap.channel),normalMapUv:le&&f(x.normalMap.channel),displacementMapUv:He&&f(x.displacementMap.channel),emissiveMapUv:Pe&&f(x.emissiveMap.channel),metalnessMapUv:$e&&f(x.metalnessMap.channel),roughnessMapUv:Qe&&f(x.roughnessMap.channel),anisotropyMapUv:qe&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&f(x.sheenRoughnessMap.channel),specularMapUv:ne&&f(x.specularMap.channel),specularColorMapUv:Me&&f(x.specularColorMap.channel),specularIntensityMapUv:P&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:ue&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(le||rt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(Le||ue),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&le===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:G,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Pe&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function _(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(w,x),m(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function m(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let w=u[x.type],L;if(w){let R=si[w];L=Fd.clone(R.uniforms)}else L=x.uniforms;return L}function S(x,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new $x(n,w,x,s),c.push(L),h.set(w,L)),L}function v(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:T}}function ty(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ny(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function tf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,g,m){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},n[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=g,y.group=m),e++,y}function l(u,f,p,_,g,m,y){y.reversedDepth===!0&&(g=-g);let S=a(u,f,p,_,g,m);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(u,f,p,_,g,m){let y=a(u,f,p,_,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||ny),i.length>1&&i.sort(f||tf),s.length>1&&s.sort(f||tf)}function d(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function iy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new nf,n.set(i,[o])):s>=r.length?(o=new nf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new je};break;case"SpotLight":t={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function ry(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function ay(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ly(n){let e=new sy,t=ry(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new At,o=new At;function a(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,S=0,v=0,E=0,T=0,x=0,w=0,L=0,R=0;c.sort(ay);for(let z=0,W=c.length;z<W;z++){let I=c[z],q=I.color,N=I.intensity,O=I.distance,K=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Yi?K=I.shadow.map.texture:K=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=q.r*N,d+=q.g*N,u+=q.b*N;else if(I.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(I.sh.coefficients[D],N);R++}else if(I.isSunLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,H=t.get(I);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[p]=H,i.sunShadowMap[p]=K;let G=k.getViewportCount();for(let he=0;he<G;he++)i.sunShadowMatrix[_+he]=k.getMatrix(he),i.sunShadowCascade[_+he]=k._cascadeData[he];_+=G,p++}i.sun[f]=D,f++}else if(I.isDirectionalLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,H=t.get(I);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=I.shadow.matrix,E++}i.directional[g]=D,g++}else if(I.isSpotLight){let D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(q).multiplyScalar(N),D.distance=O,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,i.spot[y]=D;let k=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,k.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[y]=k.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=K,x++}y++}else if(I.isRectAreaLight){let D=e.get(I);D.color.copy(q).multiplyScalar(N),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=D,S++}else if(I.isPointLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){let k=I.shadow,H=t.get(I);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=I.shadow.matrix,T++}i.point[m]=D,m++}else if(I.isHemisphereLight){let D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(N),D.groundColor.copy(I.groundColor).multiplyScalar(N),i.hemi[v]=D,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;(C.sunLength!==f||C.directionalLength!==g||C.pointLength!==m||C.spotLength!==y||C.rectAreaLength!==S||C.hemiLength!==v||C.numSunShadows!==p||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==x||C.numSpotMaps!==w||C.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=y,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,C.sunLength=f,C.directionalLength=g,C.pointLength=m,C.spotLength=y,C.rectAreaLength=S,C.hemiLength=v,C.numSunShadows=p,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=x,C.numSpotMaps=w,C.numLightProbes=R,i.version=oy++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(v.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function sf(n){let e=new ly(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cy(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new sf(n),e.set(s,[a])):r>=o.length?(a=new sf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function py(n,e,t){let i=new Gi,s=new Te,r=new Te,o=new Lt,a=new Ra,l=new Ca,c={},h=t.maxTextureSize,d={[qi]:sn,[sn]:qi,[Qt]:Qt},u=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:hy,fragmentShader:uy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Et;p.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Gt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ls;let m=this.type;this.render=function(T,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Zu&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ls);let L=n.getRenderTarget(),R=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(cs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=m!==this.type;W&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=T.length;I<q;I++){let N=T[I],O=N.shadow;if(O===void 0){Ze("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let K=O.getFrameExtents();s.multiply(K),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,O.mapSize.y=r.y));let D=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=D,O.map===null||W===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ks){if(N.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new vn(s.x,s.y,{format:Yi,type:Wn,minFilter:un,magFilter:un,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new yi(s.x,s.y,Vn),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=_i,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t}else N.isPointLight?(O.map=new po(s.x),O.map.depthTexture=new Br(s.x,Gn)):(O.map=new vn(s.x,s.y),O.map.depthTexture=new yi(s.x,s.y,Gn)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=_i,this.type===ls?(O.map.depthTexture.compareFunction=D?sh:ih,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let k=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();N.isPointLight!==!0&&O.updateMatrices(N,w);let H=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:w.layers;for(let G=0;G<k;G++){let he=O.getCamera(G);if(N.isPointLight){let J=O.camera,ce=O.matrix,me=N.distance||J.far;me!==J.far&&(J.far=me,J.updateProjectionMatrix()),uo.setFromMatrixPosition(N.matrixWorld),J.position.copy(uo),Mh.copy(J.position),Mh.add(dy[G]),J.up.copy(fy[G]),J.lookAt(Mh),J.updateMatrixWorld(),ce.makeTranslation(-uo.x,-uo.y,-uo.z),rf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),O._frustum.setFromProjectionMatrix(rf,J.coordinateSystem,J.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,G),n.clear();else{G===0&&(n.setRenderTarget(O.map),n.clear());let J=O.getViewport(G);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),z.viewport(o)}i=O.getFrustum(G),v(x,w,he,N,H,this.type)}O.isPointLightShadow!==!0&&this.type===Ks&&y(O,w),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(L,R,C)};function y(T,x){let w=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new vn(s.x,s.y,{format:Yi,type:Wn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,w,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,w,f,_,null)}function S(T,x,w,L){let R=null,C=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)R=C;else if(R=w.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=R.uuid,W=x.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let q=I[W];q===void 0&&(q=R.clone(),I[W]=q,x.addEventListener("dispose",E)),R=q}if(R.visible=x.visible,R.wireframe=x.wireframe,L===Ks?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=n.properties.get(R);z.light=w}return R}function v(T,x,w,L,R,C){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Ks)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let I=e.update(T),q=T.material;if(Array.isArray(q)){let N=I.groups;for(let O=0,K=N.length;O<K;O++){let D=N[O],k=q[D.materialIndex];if(k&&k.visible){let H=S(T,k,L,C);T.onBeforeShadow(n,T,x,w,I,H,D),n.renderBufferDirect(w,null,I,H,T,D),T.onAfterShadow(n,T,x,w,I,H,D)}}}else if(q.visible){let N=S(T,q,L,C);T.onBeforeShadow(n,T,x,w,I,N,null),n.renderBufferDirect(w,null,I,N,T,null),T.onAfterShadow(n,T,x,w,I,N,null)}}let W=T.children;for(let I=0,q=W.length;I<q;I++)v(W[I],x,w,L,R,C)}function E(T){T.target.removeEventListener("dispose",E);for(let w in c){let L=c[w],R=T.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function my(n,e){function t(){let P=!1,Q=new Lt,j=null,Se=new Lt(0,0,0,0);return{setMask:function(ue){j!==ue&&!P&&(n.colorMask(ue,ue,ue,ue),j=ue)},setLocked:function(ue){P=ue},setClear:function(ue,fe,ze,at,pe){pe===!0&&(ue*=at,fe*=at,ze*=at),Q.set(ue,fe,ze,at),Se.equals(Q)===!1&&(n.clearColor(ue,fe,ze,at),Se.copy(Q))},reset:function(){P=!1,j=null,Se.set(-1,0,0,0)}}}function i(){let P=!1,Q=!1,j=null,Se=null,ue=null;return{setReversed:function(fe){if(Q!==fe){let ze=e.get("EXT_clip_control");fe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Q=fe;let at=ue;ue=null,this.setClear(at)}},getReversed:function(){return Q},setTest:function(fe){fe?re(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(fe){j!==fe&&!P&&(n.depthMask(fe),j=fe)},setFunc:function(fe){if(Q&&(fe=Rd[fe]),Se!==fe){switch(fe){case na:n.depthFunc(n.NEVER);break;case ia:n.depthFunc(n.ALWAYS);break;case sa:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case ra:n.depthFunc(n.EQUAL);break;case oa:n.depthFunc(n.GEQUAL);break;case aa:n.depthFunc(n.GREATER);break;case la:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ue!==fe&&(ue=fe,Q&&(fe=1-fe),n.clearDepth(fe))},reset:function(){P=!1,j=null,Se=null,ue=null,Q=!1}}}function s(){let P=!1,Q=null,j=null,Se=null,ue=null,fe=null,ze=null,at=null,pe=null;return{setTest:function(Ge){P||(Ge?re(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Ge){Q!==Ge&&!P&&(n.stencilMask(Ge),Q=Ge)},setFunc:function(Ge,et,Re){(j!==Ge||Se!==et||ue!==Re)&&(n.stencilFunc(Ge,et,Re),j=Ge,Se=et,ue=Re)},setOp:function(Ge,et,Re){(fe!==Ge||ze!==et||at!==Re)&&(n.stencilOp(Ge,et,Re),fe=Ge,ze=et,at=Re)},setLocked:function(Ge){P=Ge},setClear:function(Ge){pe!==Ge&&(n.clearStencil(Ge),pe=Ge)},reset:function(){P=!1,Q=null,j=null,Se=null,ue=null,fe=null,ze=null,at=null,pe=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,y=null,S=null,v=null,E=null,T=null,x=null,w=new je(0,0,0),L=0,R=!1,C=null,z=null,W=null,I=null,q=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,K=0,D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),O=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),O=K>=2);let k=null,H={},G=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),J=new Lt().fromArray(G),ce=new Lt().fromArray(he);function me(P,Q,j,Se){let ue=new Uint8Array(4),fe=n.createTexture();n.bindTexture(P,fe),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<j;ze++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(Q+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return fe}let _e={};_e[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(Bs),Ee(!1),le(Uc),re(n.CULL_FACE),oe(cs);function re(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function xe(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function We(P,Q){return u[P]!==Q?(n.bindFramebuffer(P,Q),u[P]=Q,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Le(P,Q){let j=p,Se=!1;if(P){j=f.get(Q),j===void 0&&(j=[],f.set(Q,j));let ue=P.textures;if(j.length!==ue.length||j[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,ze=ue.length;fe<ze;fe++)j[fe]=n.COLOR_ATTACHMENT0+fe;j.length=ue.length,Se=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Se=!0);Se&&n.drawBuffers(j)}function Ne(P){return _!==P?(n.useProgram(P),_=P,!0):!1}let De={[hs]:n.FUNC_ADD,[Ku]:n.FUNC_SUBTRACT,[$u]:n.FUNC_REVERSE_SUBTRACT};De[ju]=n.MIN,De[Qu]=n.MAX;let V={[ed]:n.ZERO,[td]:n.ONE,[nd]:n.SRC_COLOR,[kc]:n.SRC_ALPHA,[ld]:n.SRC_ALPHA_SATURATE,[od]:n.DST_COLOR,[sd]:n.DST_ALPHA,[id]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[ad]:n.ONE_MINUS_DST_COLOR,[rd]:n.ONE_MINUS_DST_ALPHA,[cd]:n.CONSTANT_COLOR,[hd]:n.ONE_MINUS_CONSTANT_COLOR,[ud]:n.CONSTANT_ALPHA,[dd]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(P,Q,j,Se,ue,fe,ze,at,pe,Ge){if(P===cs){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(re(n.BLEND),g=!0),P!==Ju){if(P!==m||Ge!==R){if((y!==hs||E!==hs)&&(n.blendEquation(n.FUNC_ADD),y=hs,E=hs),Ge)switch(P){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oc:n.blendFunc(n.ONE,n.ONE);break;case Bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",P);break}else switch(P){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bc:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",P);break}S=null,v=null,T=null,x=null,w.set(0,0,0),L=0,m=P,R=Ge}return}ue=ue||Q,fe=fe||j,ze=ze||Se,(Q!==y||ue!==E)&&(n.blendEquationSeparate(De[Q],De[ue]),y=Q,E=ue),(j!==S||Se!==v||fe!==T||ze!==x)&&(n.blendFuncSeparate(V[j],V[Se],V[fe],V[ze]),S=j,v=Se,T=fe,x=ze),(at.equals(w)===!1||pe!==L)&&(n.blendColor(at.r,at.g,at.b,pe),w.copy(at),L=pe),m=P,R=!1}function ae(P,Q){P.side===Qt?xe(n.CULL_FACE):re(n.CULL_FACE);let j=P.side===sn;Q&&(j=!j),Ee(j),P.blending===$s&&P.transparent===!1?oe(cs):oe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let Se=P.stencilWrite;a.setTest(Se),Se&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(P){C!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),C=P)}function le(P){P!==qu?(re(n.CULL_FACE),P!==z&&(P===Uc?n.cullFace(n.BACK):P===Yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),z=P}function He(P){P!==W&&(O&&n.lineWidth(P),W=P)}function Pe(P,Q,j){P?(re(n.POLYGON_OFFSET_FILL),(I!==Q||q!==j)&&(I=Q,q=j,o.getReversed()&&(Q=-Q,j=-j),n.polygonOffset(Q,j))):xe(n.POLYGON_OFFSET_FILL)}function $e(P){P?re(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Qe(P){P===void 0&&(P=n.TEXTURE0+N-1),k!==P&&(n.activeTexture(P),k=P)}function rt(P,Q,j){j===void 0&&(k===null?j=n.TEXTURE0+N-1:j=k);let Se=H[j];Se===void 0&&(Se={type:void 0,texture:void 0},H[j]=Se),(Se.type!==P||Se.texture!==Q)&&(k!==j&&(n.activeTexture(j),k=j),n.bindTexture(P,Q||_e[P]),Se.type=P,Se.texture=Q)}function B(){let P=H[k];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function se(){try{n.compressedTexImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function ot(){try{n.compressedTexImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function ut(){try{n.texSubImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function ye(){try{n.texSubImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function Tt(){try{n.compressedTexSubImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function qe(){try{n.texStorage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function A(){try{n.texStorage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function M(){try{n.texImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function Y(){try{n.texImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function de(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function ie(P,Q){d[P]!==Q&&(n.pixelStorei(P,Q),d[P]=Q)}function ve(P){J.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function Ae(P){ce.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function te(P,Q){let j=c.get(Q);j===void 0&&(j=new WeakMap,c.set(Q,j));let Se=j.get(P);Se===void 0&&(Se=n.getUniformBlockIndex(Q,P.name),n.uniformBlockBinding(Q,Se,Se),j.set(P,Se))}function ne(P,Q,j){let ue=c.get(Q).get(P);l[ue]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,ue,j),l[ue]=j)}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},k=null,H={},u={},l={},f=new WeakMap,p=[],_=null,g=!1,m=null,y=null,S=null,v=null,E=null,T=null,x=null,w=new je(0,0,0),L=0,R=!1,C=null,z=null,W=null,I=null,q=null,J.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:xe,bindFramebuffer:We,drawBuffers:Le,useProgram:Ne,setBlending:oe,setMaterial:ae,setFlipSided:Ee,setCullFace:le,setLineWidth:He,setPolygonOffset:Pe,setScissorTest:$e,activeTexture:Qe,bindTexture:rt,unbindTexture:B,compressedTexImage2D:se,compressedTexImage3D:ot,texImage2D:M,texImage3D:Y,pixelStorei:ie,getParameter:de,updateUBOMapping:te,uniformBlockBinding:ne,texStorage2D:qe,texStorage3D:A,texSubImage2D:ut,texSubImage3D:ye,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Ve,scissor:ve,viewport:Ae,reset:Me}}function gy(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return g?new OffscreenCanvas(A,M):Ar("canvas")}function y(A,M,Y){let de=1,ie=qe(A);if((ie.width>Y||ie.height>Y)&&(de=Y/Math.max(ie.width,ie.height)),de<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ve=Math.floor(de*ie.width),Ae=Math.floor(de*ie.height);u===void 0&&(u=m(ve,Ae));let te=M?m(ve,Ae):u;return te.width=ve,te.height=Ae,te.getContext("2d").drawImage(A,0,0,ve,Ae),Ze("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ve+"x"+Ae+")."),te}else return"data"in A&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function S(A){return A.generateMipmaps}function v(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,M,Y,de,ie,ve=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Ae;de&&(Ae=e.get("EXT_texture_norm16"),Ae||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=M;if(M===n.RED&&(Y===n.FLOAT&&(te=n.R32F),Y===n.HALF_FLOAT&&(te=n.R16F),Y===n.UNSIGNED_BYTE&&(te=n.R8),Y===n.UNSIGNED_SHORT&&Ae&&(te=Ae.R16_EXT),Y===n.SHORT&&Ae&&(te=Ae.R16_SNORM_EXT)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.R8UI),Y===n.UNSIGNED_SHORT&&(te=n.R16UI),Y===n.UNSIGNED_INT&&(te=n.R32UI),Y===n.BYTE&&(te=n.R8I),Y===n.SHORT&&(te=n.R16I),Y===n.INT&&(te=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(te=n.RG32F),Y===n.HALF_FLOAT&&(te=n.RG16F),Y===n.UNSIGNED_BYTE&&(te=n.RG8),Y===n.UNSIGNED_SHORT&&Ae&&(te=Ae.RG16_EXT),Y===n.SHORT&&Ae&&(te=Ae.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RG8UI),Y===n.UNSIGNED_SHORT&&(te=n.RG16UI),Y===n.UNSIGNED_INT&&(te=n.RG32UI),Y===n.BYTE&&(te=n.RG8I),Y===n.SHORT&&(te=n.RG16I),Y===n.INT&&(te=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGB16UI),Y===n.UNSIGNED_INT&&(te=n.RGB32UI),Y===n.BYTE&&(te=n.RGB8I),Y===n.SHORT&&(te=n.RGB16I),Y===n.INT&&(te=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),Y===n.UNSIGNED_INT&&(te=n.RGBA32UI),Y===n.BYTE&&(te=n.RGBA8I),Y===n.SHORT&&(te=n.RGBA16I),Y===n.INT&&(te=n.RGBA32I)),M===n.RGB&&(Y===n.UNSIGNED_SHORT&&Ae&&(te=Ae.RGB16_EXT),Y===n.SHORT&&Ae&&(te=Ae.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),M===n.RGBA){let ne=ve?Er:ft.getTransfer(ie);Y===n.FLOAT&&(te=n.RGBA32F),Y===n.HALF_FLOAT&&(te=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(te=ne===vt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Ae&&(te=Ae.RGBA16_EXT),Y===n.SHORT&&Ae&&(te=Ae.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(A,M){let Y;return A?M===null||M===Gn||M===ds?Y=n.DEPTH24_STENCIL8:M===Vn?Y=n.DEPTH32F_STENCIL8:M===Qs&&(Y=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===ds?Y=n.DEPTH_COMPONENT24:M===Vn?Y=n.DEPTH_COMPONENT32F:M===Qs&&(Y=n.DEPTH_COMPONENT16),Y}function w(A,M){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function L(A){let M=new WeakRef(A);i.get(A).__ref=M,p.add(M),_.register(A,M,M)}function R(A){let M=i.get(A).__ref;M!==void 0&&(p.delete(M),_.unregister(M))}function C(A){W(A.target)}function z(A){I(A.target)}function W(A){A.removeEventListener("dispose",C),R(A),N(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",z),R(A),K(A)}function q(){for(let A of p){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):W(M))}p.clear(),d.clear()}function N(A){let M=i.get(A);if(M.__webglInit===void 0)return;let Y=A.source,de=f.get(Y);if(de){let ie=de[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&O(A),Object.keys(de).length===0&&f.delete(Y)}i.remove(A)}function O(A){let M=i.get(A);n.deleteTexture(M.__webglTexture);let Y=A.source,de=f.get(Y);delete de[M.__cacheKey],o.memory.textures--}function K(A){let M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let Y=A.depthTexture;if(Y&&Y.renderTarget===A&&W(Y),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let ve=0;ve<M.__webglFramebuffer[ie].length;ve++)n.deleteFramebuffer(M.__webglFramebuffer[ie][ve]);else n.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)n.deleteFramebuffer(M.__webglFramebuffer[ie]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let de=A.textures;for(let ie=0,ve=de.length;ie<ve;ie++){let Ae=i.get(de[ie]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(de[ie])}i.remove(A)}let D=0;function k(){D=0}function H(){return D}function G(A){D=A}function he(){let A=D;return A>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function J(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ce(A,M){let Y=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&Y.__version!==A.version){let de=A.image;if(de===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Y,A,M);return}}else A.isExternalTexture&&(Y.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function me(A,M){let Y=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){ae(Y,A,M);return}else A.isExternalTexture&&(Y.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function _e(A,M){let Y=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){ae(Y,A,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function re(A,M){let Y=i.get(A);if(A.version>0&&Y.__version!==A.version){Ee(Y,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let xe={[ss]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[ca]:n.MIRRORED_REPEAT},We={[$t]:n.NEAREST,[md]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Xa]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},Le={[yd]:n.NEVER,[rh]:n.ALWAYS,[vd]:n.LESS,[ih]:n.LEQUAL,[Md]:n.EQUAL,[sh]:n.GEQUAL,[Sd]:n.GREATER,[bd]:n.NOTEQUAL};function Ne(A,M){if(M.type===Vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===Xa||M.magFilter===so||M.magFilter===Si||M.minFilter===un||M.minFilter===Xa||M.minFilter===so||M.minFilter===Si)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,xe[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,xe[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,xe[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,We[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,We[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==so&&M.minFilter!==Si||M.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function De(A,M){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C),L(M));let de=M.source,ie=f.get(de);ie===void 0&&(ie={},f.set(de,ie));let ve=J(M);if(ve!==A.__cacheKey){ie[ve]===void 0&&(ie[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ie[ve].usedTimes++;let Ae=ie[A.__cacheKey];Ae!==void 0&&(ie[A.__cacheKey].usedTimes--,Ae.usedTimes===0&&O(M)),A.__cacheKey=ve,A.__webglTexture=ie[ve].texture}return Y}function V(A,M,Y){return Math.floor(Math.floor(A/Y)/M)}function oe(A,M,Y,de){let ve=A.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Y,de,M.data);else{ve.sort((P,Q)=>P.start-Q.start);let Ae=0;for(let P=1;P<ve.length;P++){let Q=ve[Ae],j=ve[P],Se=Q.start+Q.count,ue=V(j.start,M.width,4),fe=V(Q.start,M.width,4);j.start<=Se+1&&ue===fe&&V(j.start+j.count-1,M.width,4)===ue?Q.count=Math.max(Q.count,j.start+j.count-Q.start):(++Ae,ve[Ae]=j)}ve.length=Ae+1;let te=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let P=0,Q=ve.length;P<Q;P++){let j=ve[P],Se=Math.floor(j.start/4),ue=Math.ceil(j.count/4),fe=Se%M.width,ze=Math.floor(Se/M.width),at=ue,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(n.TEXTURE_2D,0,fe,ze,at,pe,Y,de,M.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function ae(A,M,Y){let de=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=n.TEXTURE_3D);let ie=De(A,M),ve=M.source;t.bindTexture(de,A.__webglTexture,n.TEXTURE0+Y);let Ae=i.get(ve);if(ve.version!==Ae.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let pe=ft.getPrimaries(ft.workingColorSpace),Ge=M.colorSpace===wi?null:ft.getPrimaries(M.colorSpace),et=M.colorSpace===wi||pe===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=y(M.image,!1,s.maxTextureSize);ne=Ve(M,ne);let Me=r.convert(M.format,M.colorSpace),P=r.convert(M.type),Q=T(M.internalFormat,Me,P,M.normalized,M.colorSpace,M.isVideoTexture);Ne(de,M);let j,Se=M.mipmaps,ue=M.isVideoTexture!==!0,fe=Ae.__version===void 0||ie===!0,ze=ve.dataReady,at=w(M,ne);if(M.isDepthTexture)Q=x(M.format===bi,M.type),fe&&(ue?t.texStorage2D(n.TEXTURE_2D,1,Q,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Q,ne.width,ne.height,0,Me,P,null));else if(M.isDataTexture)if(Se.length>0){ue&&fe&&t.texStorage2D(n.TEXTURE_2D,at,Q,Se[0].width,Se[0].height);for(let pe=0,Ge=Se.length;pe<Ge;pe++)j=Se[pe],ue?ze&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,j.width,j.height,Me,P,j.data):t.texImage2D(n.TEXTURE_2D,pe,Q,j.width,j.height,0,Me,P,j.data);M.generateMipmaps=!1}else ue?(fe&&t.texStorage2D(n.TEXTURE_2D,at,Q,ne.width,ne.height),ze&&oe(M,ne,Me,P)):t.texImage2D(n.TEXTURE_2D,0,Q,ne.width,ne.height,0,Me,P,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ue&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,Q,Se[0].width,Se[0].height,ne.depth);for(let pe=0,Ge=Se.length;pe<Ge;pe++)if(j=Se[pe],M.format!==Xn)if(Me!==null)if(ue){if(ze)if(M.layerUpdates.size>0){let et=fh(j.width,j.height,M.format,M.type);for(let Re of M.layerUpdates){let _t=j.data.subarray(Re*et/j.data.BYTES_PER_ELEMENT,(Re+1)*et/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Re,j.width,j.height,1,Me,_t)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,j.width,j.height,ne.depth,Me,j.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Q,j.width,j.height,ne.depth,0,j.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,j.width,j.height,ne.depth,Me,P,j.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Q,j.width,j.height,ne.depth,0,Me,P,j.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ue&&fe&&t.texStorage2D(n.TEXTURE_2D,at,Q,Se[0].width,Se[0].height);for(let pe=0,Ge=Se.length;pe<Ge;pe++)j=Se[pe],M.format!==Xn?Me!==null?ue?ze&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,j.width,j.height,Me,j.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Q,j.width,j.height,0,j.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?ze&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,j.width,j.height,Me,P,j.data):t.texImage2D(n.TEXTURE_2D,pe,Q,j.width,j.height,0,Me,P,j.data)}else if(M.isDataArrayTexture)if(ue){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,Q,ne.width,ne.height,ne.depth),ze)if(M.layerUpdates.size>0){let pe=fh(ne.width,ne.height,M.format,M.type);for(let Ge of M.layerUpdates){let et=ne.data.subarray(Ge*pe/ne.data.BYTES_PER_ELEMENT,(Ge+1)*pe/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ge,ne.width,ne.height,1,Me,P,et)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Me,P,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,ne.width,ne.height,ne.depth,0,Me,P,ne.data);else if(M.isData3DTexture)ue?(fe&&t.texStorage3D(n.TEXTURE_3D,at,Q,ne.width,ne.height,ne.depth),ze&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Me,P,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Q,ne.width,ne.height,ne.depth,0,Me,P,ne.data);else if(M.isFramebufferTexture){if(fe)if(ue)t.texStorage2D(n.TEXTURE_2D,at,Q,ne.width,ne.height);else{let pe=ne.width,Ge=ne.height;for(let et=0;et<at;et++)t.texImage2D(n.TEXTURE_2D,et,Q,pe,Ge,0,Me,P,null),pe>>=1,Ge>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ne.parentNode!==pe){pe.appendChild(ne),d.add(M),pe.onpaint=Ge=>{let et=Ge.changedElements;for(let Re of d)et.includes(Re.image)&&(Re.needsUpdate=!0)},pe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{let et=n.RGBA,Re=n.RGBA,_t=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,et,Re,_t,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Se.length>0){if(ue&&fe){let pe=qe(Se[0]);t.texStorage2D(n.TEXTURE_2D,at,Q,pe.width,pe.height)}for(let pe=0,Ge=Se.length;pe<Ge;pe++)j=Se[pe],ue?ze&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Me,P,j):t.texImage2D(n.TEXTURE_2D,pe,Q,Me,P,j);M.generateMipmaps=!1}else if(ue){if(fe){let pe=qe(ne);t.texStorage2D(n.TEXTURE_2D,at,Q,pe.width,pe.height)}ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,P,ne)}else t.texImage2D(n.TEXTURE_2D,0,Q,Me,P,ne);S(M)&&M.mipmapsAutoUpdate===!0&&v(de),Ae.__version=ve.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ee(A,M,Y){if(M.image.length!==6)return;let de=De(A,M),ie=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+Y);let ve=i.get(ie);if(ie.version!==ve.__version||de===!0){t.activeTexture(n.TEXTURE0+Y);let Ae=ft.getPrimaries(ft.workingColorSpace),te=M.colorSpace===wi?null:ft.getPrimaries(M.colorSpace),ne=M.colorSpace===wi||Ae===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Me=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let Re=0;Re<6;Re++)!Me&&!P?Q[Re]=y(M.image[Re],!0,s.maxCubemapSize):Q[Re]=P?M.image[Re].image:M.image[Re],Q[Re]=Ve(M,Q[Re]);let j=Q[0],Se=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),fe=T(M.internalFormat,Se,ue,M.normalized,M.colorSpace),ze=M.isVideoTexture!==!0,at=ve.__version===void 0||de===!0,pe=ie.dataReady,Ge=w(M,j);Ne(n.TEXTURE_CUBE_MAP,M);let et;if(M.isDepthTexture){if(fe=x(M.format===bi,M.type),at)if(ze)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,fe,j.width,j.height);else for(let Re=0;Re<6;Re++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,fe,j.width,j.height,0,Se,ue,null)}else if(Me){ze&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,fe,j.width,j.height);for(let Re=0;Re<6;Re++){et=Q[Re].mipmaps;for(let _t=0;_t<et.length;_t++){let Bt=et[_t];M.format!==Xn?Se!==null?ze?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_t,0,0,Bt.width,Bt.height,Se,Bt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_t,fe,Bt.width,Bt.height,0,Bt.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_t,0,0,Bt.width,Bt.height,Se,ue,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_t,fe,Bt.width,Bt.height,0,Se,ue,Bt.data)}}}else{if(et=M.mipmaps,ze&&at){et.length>0&&Ge++;let Re=qe(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,fe,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(P){ze?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Q[Re].width,Q[Re].height,Se,ue,Q[Re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,fe,Q[Re].width,Q[Re].height,0,Se,ue,Q[Re].data);for(let _t=0;_t<et.length;_t++){let En=et[_t].image[Re].image;ze?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_t+1,0,0,En.width,En.height,Se,ue,En.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_t+1,fe,En.width,En.height,0,Se,ue,En.data)}}else{ze?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Se,ue,Q[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,fe,Se,ue,Q[Re]);for(let _t=0;_t<et.length;_t++){let Bt=et[_t];ze?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_t+1,0,0,Se,ue,Bt.image[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_t+1,fe,Se,ue,Bt.image[Re])}}}S(M)&&M.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),ve.__version=ie.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function le(A,M,Y,de,ie,ve){let Ae=r.convert(Y.format,Y.colorSpace),te=r.convert(Y.type),ne=T(Y.internalFormat,Ae,te,Y.normalized,Y.colorSpace),Me=i.get(M),P=i.get(Y);if(P.__renderTarget=M,!Me.__hasExternalTextures){let Q=Math.max(1,M.width>>ve),j=Math.max(1,M.height>>ve);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ve,ne,Q,j,M.depth,0,Ae,te,null):t.texImage2D(ie,ve,ne,Q,j,0,Ae,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ie,P.__webglTexture,0,ut(M)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,ie,P.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(A,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){let de=M.depthTexture,ie=de&&de.isDepthTexture?de.type:null,ve=x(M.stencilBuffer,ie),Ae=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(M),ve,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(M),ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,A)}else{let de=M.textures;for(let ie=0;ie<de.length;ie++){let ve=de[ie],Ae=r.convert(ve.format,ve.colorSpace),te=r.convert(ve.type),ne=T(ve.internalFormat,Ae,te,ve.normalized,ve.colorSpace);ye(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(M),ne,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(M),ne,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ne,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(A,M,Y){let de=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(M.depthTexture);ie.__renderTarget=M;let ve=de?M.depthTexture.image[0]:M.depthTexture.image;(!ie.__webglTexture||ve.width!==M.width||ve.height!==M.height)&&(ve.width=M.width,ve.height=M.height,M.depthTexture.needsUpdate=!0),de?re(M.depthTexture,0):ce(M.depthTexture,0);let Ae=ie.__webglTexture,te=ut(M),ne=de?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,Me=M.depthTexture.format===bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===_i)ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,ne,Ae,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,Me,ne,Ae,0);else if(M.depthTexture.format===bi)ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,ne,Ae,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,Me,ne,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(A){let M=i.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let de=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){let ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",ie)};de.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=de}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let de=0;de<6;de++)Pe(M.__webglFramebuffer[de],A,de);else A.texture.mipmaps.length>0?Pe(M.__webglFramebuffer[0],A,0):Pe(M.__webglFramebuffer,A,0);else if(Y){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=n.createRenderbuffer(),He(M.__webglDepthbuffer[de],A,!1);else{let ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=M.__webglDepthbuffer[de];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ve)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),He(M.__webglDepthbuffer,A,!1);else{let ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(A,M,Y){let de=i.get(A);M!==void 0&&le(de.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&$e(A)}function rt(A){let M=A.texture,Y=i.get(A),de=i.get(M);A.addEventListener("dispose",z),L(A);let ie=A.textures,ve=A.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=M.version,o.memory.textures++),ve){Y.__webglFramebuffer=[];for(let te=0;te<6;te++)if(M.mipmaps.length>0){Y.__webglFramebuffer[te]=[];for(let ne=0;ne<M.mipmaps.length;ne++)Y.__webglFramebuffer[te][ne]=n.createFramebuffer()}else Y.__webglFramebuffer[te]=n.createFramebuffer()}else{if(M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let te=0;te<M.mipmaps.length;te++)Y.__webglFramebuffer[te]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let te=0,ne=ie.length;te<ne;te++){let Me=i.get(ie[te]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ye(A)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let te=0;te<ie.length;te++){let ne=ie[te];Y.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[te]);let Me=r.convert(ne.format,ne.colorSpace),P=r.convert(ne.type),Q=T(ne.internalFormat,Me,P,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),j=ut(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,Q,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,Y.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),He(Y.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,M);for(let te=0;te<6;te++)if(M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)le(Y.__webglFramebuffer[te][ne],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne);else le(Y.__webglFramebuffer[te],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);S(M)?v(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let te=0,ne=ie.length;te<ne;te++){let Me=ie[te],P=i.get(Me),Q=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,P.__webglTexture),Ne(Q,Me),le(Y.__webglFramebuffer,A,Me,n.COLOR_ATTACHMENT0+te,Q,0),S(Me)&&v(Q)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,de.__webglTexture),Ne(te,M),M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)le(Y.__webglFramebuffer[ne],A,M,n.COLOR_ATTACHMENT0,te,ne);else le(Y.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,te,0);S(M)?v(te):M.mipmaps.length>0&&n.texParameteri(te,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&$e(A)}function B(A){let M=A.textures;for(let Y=0,de=M.length;Y<de;Y++){let ie=M[Y];if(S(ie)&&ie.mipmapsAutoUpdate===!0){let ve=E(A),Ae=i.get(ie).__webglTexture;t.bindTexture(ve,Ae),v(ve),t.unbindTexture()}}}let se=[];function ot(A){if(A.samples>0){if(ye(A)===!1){let M=A.textures,Y=A.width,de=A.height,ie=n.COLOR_BUFFER_BIT,ve=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(A),te=M.length>1;if(te)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);let P=i.get(M[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,Y,de,0,0,Y,de,ie,n.NEAREST),l===!0&&(se.length=0,se.push(n.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&se.push(ve),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);let P=i.get(M[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ut(A){return Math.min(s.maxSamples,A.samples)}function ye(A){let M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ve(A,M){let Y=A.colorSpace,de=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Y!==Tr&&Y!==wi&&(ft.getTransfer(Y)===vt?(de!==Xn||ie!==mn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",Y)),M}function qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=he,this.resetTextureUnits=k,this.getTextureUnits=H,this.setTextureUnits=G,this.setTexture2D=ce,this.setTexture2DArray=me,this.setTexture3D=_e,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ye,this.dispose=q}function _y(n,e){function t(i,s=wi){let r,o=ft.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===Ya)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kc)return n.BYTE;if(i===$c)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===qa)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===eh)return n.ALPHA;if(i===th)return n.RGB;if(i===Xn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===nh)return n.RED;if(i===Ja)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===Ka)return n.RG_INTEGER;if(i===$a)return n.RGBA_INTEGER;if(i===ro||i===oo||i===ao||i===lo)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===Qa||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===il||i===sl||i===rl||i===ol||i===co||i===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nl||i===il)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rl)return r.COMPRESSED_R11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===co)return r.COMPRESSED_RG11_EAC;if(i===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===yl||i===vl||i===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ll)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===bl||i===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sl)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tl||i===El||i===ho||i===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function My(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,hh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),S=y.envMap,v=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(vy.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sy(n,e,t,i){let s={},r={};function o(y,S){let v=S.program;i.uniformBlockBinding(y,v,s[y.id])}function a(y,S){let v=s[y.id];v===void 0&&(p(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",g));let E=S.program;i.updateUBOMapping(y,E);let T=e.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let S=n.createBuffer(),v=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,E),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],v=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,x=v.length;T<x;T++){let w=v[T];if(Array.isArray(w))for(let L=0,R=w.length;L<R;L++)h(w[L],T,L,E);else h(w,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,v,E){if(u(y,S,v,E)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let w=0;for(let L=0;L<x.length;L++){let R=x[L],C=_(R,!0);d(R,y.__data,w),w+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}function d(y,S,v){typeof y=="number"||typeof y=="boolean"?S[v]=y:y.isMatrix3?(S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-v),v):y.toArray(S,v)}function u(y,S,v,E){let T=y.value,x=S+"_"+v;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);let w=E[x],L=!1;for(let R=0;R<T.length;R++)f(T[R],w,R)===!0&&(L=!0);return L}return f(T,E,x)}function f(y,S,v){if(S[v]===void 0)return typeof y=="number"||typeof y=="boolean"?S[v]=y:ArrayBuffer.isView(y)?S[v]=y.slice():S[v]=y.clone(),!0;{let E=S[v];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return S[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let S=y.uniforms,v=0,E=16;for(let x=0,w=S.length;x<w;x++){let L=Array.isArray(S[x])?S[x]:[S[x]];for(let R=0,C=L.length;R<C;R++){let z=L[R],W=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(S[x])||Array.isArray(z.value),q=v;for(let O=0,K=W.length;O<K;O++){let D=W[O],k=_(D,I),H=v%E,G=H%k.boundary,he=H+G;v+=G,he!==0&&E-he<k.storage&&(v+=E-he),O===0&&(q=v),v+=k.storage}let N=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new N((v-q)/Float32Array.BYTES_PER_ELEMENT),z.__offset=q}}let T=v%E;return T>0&&(v+=E-T),y.__size=v,y.__cache={},this}function _(y,S){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(y){let S=y.target;S.removeEventListener("dispose",g),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:m}}function wy(){return ii===null&&(ii=new ma(by,16,16,Yi,Wn),ii.name="DFG_LUT",ii.minFilter=un,ii.magFilter=un,ii.wrapS=Jn,ii.wrapT=Jn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var Hm,Gm,Vm,Wm,Xm,qm,Ym,Zm,Jm,Km,$m,jm,Qm,e0,t0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,d0,f0,p0,m0,g0,_0,x0,y0,v0,M0,S0,b0,w0,T0,E0,A0,R0,C0,P0,I0,L0,N0,D0,F0,U0,O0,B0,z0,k0,H0,G0,V0,W0,X0,q0,Y0,Z0,J0,K0,$0,j0,Q0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,yg,vg,Mg,Sg,bg,wg,Tg,Eg,Ag,Rg,Cg,Pg,Ig,Lg,Ng,Dg,Fg,Ug,Og,Bg,zg,kg,Hg,Gg,Vg,Wg,Xg,qg,Yg,Zg,Jg,Kg,$g,jg,Qg,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,x_,y_,ct,Fe,si,Cl,v_,af,po,Bd,E_,A_,lf,cf,R_,C_,P_,Il,H_,hf,uf,df,ff,pf,mf,Gd,Vd,Wd,Xd,qd,Sh,bh,wh,vh,tr,Px,Ix,Jd,Fx,Pl,Hx,Vx,Xx,Yx,Jx,jx,Eh,Ah,oy,hy,uy,dy,fy,rf,uo,Mh,xy,yy,Rh,Ch,vy,gf,by,ii,Ll,Ph=Un(()=>{yh();yh();Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
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
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
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
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,Km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e0=`#ifdef USE_IRIDESCENCE
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
#endif`,t0=`#ifdef USE_BUMPMAP
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,L0=`#ifdef USE_ENVMAP
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
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
#endif`,B0=`uniform sampler2D dfgLUT;
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
}`,z0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K0=`#if defined( USE_POINTS_UV )
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
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
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
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tg=`float getShadowMask() {
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
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform float backgroundBlurriness;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Yg=`#if DEPTH_PACKING == 3200
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
}`,Zg=`#define DISTANCE
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
}`,Jg=`#define DISTANCE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#define LAMBERT
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
}`,i_=`#define LAMBERT
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
}`,s_=`#define MATCAP
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
}`,r_=`#define MATCAP
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
}`,o_=`#define NORMAL
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
}`,a_=`#define NORMAL
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
}`,l_=`#define PHONG
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
}`,c_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,u_=`#define STANDARD
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
}`,d_=`#define TOON
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
}`,f_=`#define TOON
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
}`,p_=`uniform float size;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,__=`uniform vec3 color;
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
}`,x_=`uniform float rotation;
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
}`,y_=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Hm,alphahash_pars_fragment:Gm,alphamap_fragment:Vm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:qm,aomap_fragment:Ym,aomap_pars_fragment:Zm,batching_pars_vertex:Jm,batching_vertex:Km,begin_vertex:$m,beginnormal_vertex:jm,bsdfs:Qm,iridescence_fragment:e0,bumpmap_pars_fragment:t0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:r0,color_fragment:o0,color_pars_fragment:a0,color_pars_vertex:l0,color_vertex:c0,common:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:f0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:x0,envmap_common_pars_fragment:y0,envmap_pars_fragment:v0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:L0,envmap_vertex:S0,fog_vertex:b0,fog_pars_vertex:w0,fog_fragment:T0,fog_pars_fragment:E0,gradientmap_pars_fragment:A0,lightmap_pars_fragment:R0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:I0,lights_toon_fragment:N0,lights_toon_pars_fragment:D0,lights_phong_fragment:F0,lights_phong_pars_fragment:U0,lights_physical_fragment:O0,lights_physical_pars_fragment:B0,lights_fragment_begin:z0,lights_fragment_maps:k0,lights_fragment_end:H0,lightprobes_pars_fragment:G0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:Z0,map_particle_fragment:J0,map_particle_pars_fragment:K0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:j0,morphinstance_vertex:Q0,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:og,normal_pars_vertex:ag,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:dg,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:_g,dithering_fragment:xg,dithering_pars_fragment:yg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:bg,shadowmap_vertex:wg,shadowmask_pars_fragment:Tg,skinbase_vertex:Eg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Ig,tonemapping_fragment:Lg,tonemapping_pars_fragment:Ng,transmission_fragment:Dg,transmission_pars_fragment:Fg,uv_pars_fragment:Ug,uv_pars_vertex:Og,uv_vertex:Bg,worldpos_vertex:zg,background_vert:kg,background_frag:Hg,backgroundCube_vert:Gg,backgroundCube_frag:Vg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distance_vert:Zg,distance_frag:Jg,equirect_vert:Kg,equirect_frag:$g,linedashed_vert:jg,linedashed_frag:Qg,meshbasic_vert:e_,meshbasic_frag:t_,meshlambert_vert:n_,meshlambert_frag:i_,meshmatcap_vert:s_,meshmatcap_frag:r_,meshnormal_vert:o_,meshnormal_frag:a_,meshphong_vert:l_,meshphong_frag:c_,meshphysical_vert:h_,meshphysical_frag:u_,meshtoon_vert:d_,meshtoon_frag:f_,points_vert:p_,points_frag:m_,shadow_vert:g_,shadow_frag:__,sprite_vert:x_,sprite_frag:y_},Fe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},si={basic:{uniforms:cn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:cn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:cn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:cn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:cn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new je(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:cn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:cn([Fe.points,Fe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:cn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:cn([Fe.common,Fe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:cn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:cn([Fe.sprite,Fe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:cn([Fe.common,Fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:cn([Fe.lights,Fe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};si.physical={uniforms:cn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};Cl={r:0,b:0,g:0},v_=new At,af=new it;af.set(-1,0,0,0,1,0,0,0,1);po=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:cs});r.uniforms.tEquirect.value=t;let o=new Gt(s,r),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=un),new Js(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Bd=256,E_=3,A_=20,lf=256,cf=16,R_=3,C_=new U,P_=new je,Il=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Js(1,10,null),this._boxMesh=new Gt(new fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=C_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(P_));let g=new Js(i,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Bd,Cd(e))}_fromTexture(e,t){e.mapping===us||e.mapping===js?this._setSize(e.image.length===0?Bd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=zd(e,!1,!1),i=Math.log2(e)-E_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===us||e.mapping===js?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=I_(),this._integrationMaterial=L_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-R_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(lf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=N_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};H_={[Vc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[Xc]:"CINEON_TONE_MAPPING",[io]:"ACES_FILMIC_TONE_MAPPING",[Yc]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[qc]:"CUSTOM_TONE_MAPPING"};hf=new dn,uf=new yi(1,1),df=new Br(1),ff=new Rr,pf=new pa,mf=new Ur,Gd=[],Vd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);Sh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lx(t.type)}},bh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rx(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},vh=/(\w+)(\])?(\[|\.)?/g;tr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Cx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};Px=37297,Ix=0;Jd=new it;Fx={[Vc]:"Linear",[Wc]:"Reinhard",[Xc]:"Cineon",[io]:"ACESFilmic",[Yc]:"AgX",[Zc]:"Neutral",[qc]:"Custom"};Pl=new U;Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Xx={[ls]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};Yx={[js]:"ENVMAP_MODE_REFRACTION"};Jx={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[fd]:"ENVMAP_BLENDING_MIX",[pd]:"ENVMAP_BLENDING_ADD"};jx=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ah(e),t.set(e,i)),i}},Ah=class{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}};oy=0;hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
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
}`,dy=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],fy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],rf=new At,uo=new U,Mh=new U;xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
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

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ti({vertexShader:xy,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends $n{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Rh,m={},y=t.getContextAttributes(),S=null,v=null,E=[],T=[],x=new Te,w=null,L=null,R=new hn;R.viewport=new Lt;let C=new hn;C.viewport=new Lt;let z=[R,C],W=new Ha,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=E[J];return ce===void 0&&(ce=new Gs,E[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=E[J];return ce===void 0&&(ce=new Gs,E[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=E[J];return ce===void 0&&(ce=new Gs,E[J]=ce),ce.getHandSpace()};function N(J){let ce=T.indexOf(J.inputSource);if(ce===-1)return;let me=E[ce];me!==void 0&&(me.update(J.inputSource,J.frame,c||o),me.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",K);for(let J=0;J<E.length;J++){let ce=T[J];ce!==null&&(T[J]=null,E[J].disconnect(ce))}I=null,q=null,g.reset();for(let J in m)delete m[J];if(e.setRenderTarget(S),f=null,u=null,d=null,s=null,v=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),L!==null){let J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,_e=null,re=null;y.depth&&(re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?bi:_i,_e=y.stencil?ds:Gn);let xe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new vn(u.textureWidth,u.textureHeight,{format:Xn,type:mn,depthTexture:new yi(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new vn(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(J){for(let ce=0;ce<J.removed.length;ce++){let me=J.removed[ce],_e=T.indexOf(me);_e>=0&&(T[_e]=null,E[_e].disconnect(me))}for(let ce=0;ce<J.added.length;ce++){let me=J.added[ce],_e=T.indexOf(me);if(_e===-1){for(let xe=0;xe<E.length;xe++)if(xe>=T.length){T.push(me),_e=xe;break}else if(T[xe]===null){T[xe]=me,_e=xe;break}if(_e===-1)break}let re=E[_e];re&&re.connect(me)}}function D(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ce=J.near,me=J.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(me=g.depthFar)),W.near=C.near=R.near=ce,W.far=C.far=R.far=me,(I!==W.near||q!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,q=W.far),W.layers.mask=J.layers.mask|6,R.layers.mask=W.layers.mask&-5,C.layers.mask=W.layers.mask&-3;let _e=J.parent,re=W.cameras;D(W,_e);for(let xe=0;xe<re.length;xe++)D(re[xe],_e);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),k(J,W,_e)};function k(J,ce,me){me===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(me.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ua*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(J){return m[J]};let H=null;function G(J,ce){if(h=ce.getViewerPose(c||o),p=ce,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let _e=!1;me.length!==W.cameras.length&&(W.cameras.length=0,_e=!0);for(let Le=0;Le<me.length;Le++){let Ne=me[Le],De=null;if(f!==null)De=f.getViewport(Ne);else{let oe=d.getViewSubImage(u,Ne);De=oe.viewport,Le===0&&(e.setRenderTargetTextures(v,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(v))}let V=z[Le];V===void 0&&(V=new hn,V.layers.enable(Le),V.viewport=new Lt,z[Le]=V),V.matrix.fromArray(Ne.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Ne.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(De.x,De.y,De.width,De.height),Le===0&&(W.matrix.copy(V.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),_e===!0&&W.cameras.push(V)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Le=d.getDepthInformation(me[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,s.renderState)}if(re&&re.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Le=0;Le<me.length;Le++){let Ne=me[Le].camera;if(Ne){let De=m[Ne];De||(De=new zr,m[Ne]=De);let V=d.getCameraImage(Ne);De.sourceTexture=V}}}}for(let me=0;me<E.length;me++){let _e=T[me],re=E[me];_e!==null&&re!==void 0&&re.update(_e,ce,c||o)}H&&H(J,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),p=null}let he=new of;he.setAnimationLoop(G),this.setAnimationLoop=function(J){H=J},this.dispose=function(){}}},vy=new At,gf=new it;gf.set(-1,0,0,0,1,0,0,0,1);by=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;Ll=class{constructor(e={}){let{canvas:t=Td(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=f,g=new Set([$a,Ka,Ja]),m=new Set([mn,Gn,Qs,ds,Ya,Za]),y=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,T=null,x=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,z=null,W=null,I=null,q=null;this._outputColorSpace=ln;let N=0,O=0,K=null,D=-1,k=null,H=new Lt,G=new Lt,he=null,J=new je(0),ce=0,me=t.width,_e=t.height,re=1,xe=null,We=null,Le=new Lt(0,0,me,_e),Ne=new Lt(0,0,me,_e),De=!1,V=new Gi,oe=new ga,ae=!1,Ee=!1,le=new At,He=new U,Pe=new Lt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function rt(){return K===null?re:1}let B=i;function se(b,F){return t.getContext(b,F)}let ot,ut,ye,Tt,Ve,qe,A,M,Y,de,ie,ve,Ae,te,ne,Me,P,Q,j,Se,ue,fe,ze;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Re,!1),B===null){let F="webgl2";if(B=se(F,b),B===null)throw se(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(b){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),tt("WebGLRenderer: "+b.message),b}function at(){ot=new F_(B),ot.init(),ue=new _y(B,ot),ut=new w_(B,ot,e,ue),ye=new my(B,ot),ut.reversedDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),W=B.createFramebuffer(),I=B.createFramebuffer(),q=B.createFramebuffer(),Tt=new B_(B),Ve=new ty,qe=new gy(B,ot,ye,Ve,ut,ue,Tt),A=new D_(R),M=new km(B),fe=new S_(B,M),Y=new U_(B,M,Tt,fe),de=new k_(B,Y,M,fe,Tt),Q=new z_(B,ut,qe),ne=new T_(Ve),ie=new ey(R,A,ot,ut,fe,ne),ve=new My(R,Ve),Ae=new iy,te=new cy(ot),P=new M_(R,A,ye,de,p,l),Me=new py(R,de,ut),ze=new Sy(B,Tt,ut,ye),j=new b_(B,ot,Tt),Se=new O_(B,ot,Tt),Tt.programs=ie.programs,R.capabilities=ut,R.extensions=ot,R.properties=Ve,R.renderLists=Ae,R.shadowMap=Me,R.state=ye,R.info=Tt}_!==mn&&(L=new G_(_,t.width,t.height,a,s,r));let pe=new Ch(R,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(b){b!==void 0&&(re=b,this.setSize(me,_e,!1))},this.getSize=function(b){return b.set(me,_e)},this.setSize=function(b,F,$=!0){if(pe.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}me=b,_e=F,t.width=Math.floor(b*re),t.height=Math.floor(F*re),$===!0&&(t.style.width=b+"px",t.style.height=F+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(me*re,_e*re).floor()},this.setDrawingBufferSize=function(b,F,$){me=b,_e=F,re=$,t.width=Math.floor(b*$),t.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(_===mn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Le)},this.setViewport=function(b,F,$,X){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,F,$,X),ye.viewport(H.copy(Le).multiplyScalar(rt()).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,F,$,X){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,F,$,X),ye.scissor(G.copy(Ne).multiplyScalar(rt()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){ye.setScissorTest(De=b)},this.setOpaqueSort=function(b){xe=b},this.setTransparentSort=function(b){We=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,$=!0){let X=0;if(b){let Z=!1;if(K!==null){let be=K.texture.format;Z=g.has(be)}if(Z){let be=K.texture.type,Ue=m.has(be),we=P.getClearColor(),Ie=P.getClearAlpha(),ke=we.r,Ye=we.g,ht=we.b;Ue?(y[0]=ke,y[1]=Ye,y[2]=ht,y[3]=Ie,B.clearBufferuiv(B.COLOR,0,y)):(S[0]=ke,S[1]=Ye,S[2]=ht,S[3]=Ie,B.clearBufferiv(B.COLOR,0,S))}else X|=B.COLOR_BUFFER_BIT}F&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),P.dispose(),Ae.dispose(),te.dispose(),qe.dispose(),Ve.dispose(),A.dispose(),de.dispose(),Y.dispose(),fe.dispose(),ze.dispose(),ie.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ji),pe.removeEventListener("sessionend",Qi),oi.stop()};function Ge(b){b.preventDefault(),ah("WebGLRenderer: Context Lost."),C=!0}function et(){ah("WebGLRenderer: Context Restored."),C=!1;let b=Tt.autoReset,F=Me.enabled,$=Me.autoUpdate,X=Me.needsUpdate,Z=Me.type;at(),Tt.autoReset=b,Me.enabled=F,Me.autoUpdate=$,Me.needsUpdate=X,Me.type=Z}function Re(b){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _t(b){let F=b.target;F.removeEventListener("dispose",_t),Bt(F)}function Bt(b){En(b),Ve.remove(b)}function En(b){let F=Ve.get(b).programs;F!==void 0&&(F.forEach(function($){ie.releaseProgram($)}),b.isShaderMaterial&&ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,X,Z,be){F===null&&(F=$e);let Ue=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,we=Yn(b,F,$,X,Z);ye.setMaterial(X,Ue);let Ie=$.index,ke=1;if(X.wireframe===!0){if(Ie=Y.getWireframeAttribute($),Ie===void 0)return;ke=2}let Ye=$.drawRange,ht=$.attributes.position,Be=Ye.start*ke,lt=(Ye.start+Ye.count)*ke;be!==null&&(Be=Math.max(Be,be.start*ke),lt=Math.min(lt,(be.start+be.count)*ke)),Ie!==null?(Be=Math.max(Be,0),lt=Math.min(lt,Ie.count)):ht!=null&&(Be=Math.max(Be,0),lt=Math.min(lt,ht.count));let Dt=lt-Be;if(Dt<0||Dt===1/0)return;fe.setup(Z,X,we,$,Ie);let bt,wt=j;if(Ie!==null&&(bt=M.get(Ie),wt=Se,wt.setIndex(bt)),Z.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*rt()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if(Z.isLine){let Zt=X.linewidth;Zt===void 0&&(Zt=1),ye.setLineWidth(Zt*rt()),Z.isLineSegments?wt.setMode(B.LINES):Z.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else Z.isPoints?wt.setMode(B.POINTS):Z.isSprite&&wt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))wt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Zt=Z._multiDrawStarts,Oe=Z._multiDrawCounts,nn=Z._multiDrawCount,xt=Ie?M.get(Ie).bytesPerElement:1,ci=Ve.get(X).currentProgram.getUniforms();for(let Jt=0;Jt<nn;Jt++)ci.setValue(B,"_gl_DrawID",Jt),wt.render(Zt[Jt]/xt,Oe[Jt])}else if(Z.isInstancedMesh)wt.renderInstances(Be,Dt,Z.count);else if($.isInstancedBufferGeometry){let Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Oe=Math.min($.instanceCount,Zt);wt.renderInstances(Be,Dt,Oe)}else wt.render(Be,Dt)};function ar(b,F,$,X){z!==null&&b.isNodeMaterial&&z.setObject(X,b),ae===!0&&ne.setState(b,$,!1),b.transparent===!0&&b.side===Qt&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,Ni(b,F,X),b.side=qi,b.needsUpdate=!0,Ni(b,F,X),b.side=Qt):Ni(b,F,X)}this.compile=function(b,F,$=null){$===null&&($=b),z!==null&&z.renderStart(b,F,$),T=te.get($),T.init(F),w.push(T),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),b!==$&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),Ee=this.localClippingEnabled,ae=ne.init(this.clippingPlanes,Ee),ae===!0&&ne.setGlobalState(this.clippingPlanes,F),z!==null&&Me.render(T.state.shadowsArray,$,F);let X=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let be=Z.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){let we=be[Ue];ar(we,$,F,Z),X.add(we)}else ar(be,$,F,Z),X.add(be)}),T=w.pop(),z!==null&&z.renderEnd(),X},this.compileAsync=function(b,F,$=null){let X=this.compile(b,F,$);return new Promise(Z=>{function be(){if(X.forEach(function(Ue){let Ie=Ve.get(Ue).currentProgram;(Ie===void 0||Ie.isReady())&&X.delete(Ue)}),X.size===0){Z(b);return}setTimeout(be,10)}ot.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let qn=null;function Jl(b){qn&&qn(b)}function ji(){oi.stop()}function Qi(){oi.start()}let oi=new of;oi.setAnimationLoop(Jl),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(b){qn=b,pe.setAnimationLoop(b),b===null?oi.stop():oi.start()},pe.addEventListener("sessionstart",ji),pe.addEventListener("sessionend",Qi),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;z!==null&&z.renderStart(b,F);let $=pe.enabled===!0&&pe.isPresenting===!0,X=L!==null&&(K===null||$)&&L.begin(R,K);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,F,K),T=te.get(b,w.length),T.init(F),T.state.textureUnits=qe.getTextureUnits(),w.push(T),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?oe.setFromArrayCamera(F):V.setFromProjectionMatrix(le,Cn,F.reversedDepth),Ee=this.localClippingEnabled,ae=ne.init(this.clippingPlanes,Ee),E=Ae.get(b,x.length),E.init(),x.push(E),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ue=R.xr.getDepthSensingMesh();Ue!==null&&lr(Ue,F,-1/0,R.sortObjects)}lr(b,F,0,R.sortObjects),E.finish(),z!==null&&z.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(xe,We),Qe=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Qe&&P.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),ae===!0&&ne.beginShadows();let Z=T.state.shadowsArray;if(Me.render(Z,b,F),ae===!0&&ne.endShadows(),(X&&L.hasRenderPass())===!1){let Ue=E.opaque,we=E.transmissive;if(T.setupLights(),F.isArrayCamera){let Ie=F.cameras;if(we.length>0)for(let ke=0,Ye=Ie.length;ke<Ye;ke++){let ht=Ie[ke];cr(Ue,we,b,ht)}Qe&&P.render(b);for(let ke=0,Ye=Ie.length;ke<Ye;ke++){let ht=Ie[ke];vo(E,b,ht,ht.viewport)}}else we.length>0&&cr(Ue,we,b,F),Qe&&P.render(b),vo(E,b,F)}K!==null&&O===0&&(qe.updateMultisampleRenderTarget(K),qe.updateRenderTargetMipmap(K)),X&&L.end(R),b.isScene===!0&&b.onAfterRender(R,b,F),fe.resetDefaultState(),D=-1,k=null,w.pop(),w.length>0?(T=w[w.length-1],qe.setTextureUnits(T.state.textureUnits),ae===!0&&ne.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,z!==null&&z.renderEnd()};function lr(b,F,$,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let Ue=F.isArrayCamera?oe:V;if(!b.frustumCulled||b.intersectsFrustum(Ue)){X&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);let we=de.update(b),Ie=b.material;Ie.visible&&E.push(b,we,Ie,$,Pe.z,null,F)}}else if(b.isMesh||b.isLine||b.isPoints){let Ue=F.isArrayCamera?oe:V;if(!b.frustumCulled||b.intersectsFrustum(Ue)){let we=de.update(b),Ie=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Pe.copy(we.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(le)),Array.isArray(Ie)){let ke=we.groups;for(let Ye=0,ht=ke.length;Ye<ht;Ye++){let Be=ke[Ye],lt=Ie[Be.materialIndex];lt&&lt.visible&&E.push(b,we,lt,$,Pe.z,Be,F)}}else Ie.visible&&E.push(b,we,Ie,$,Pe.z,null,F)}}}let be=b.children;for(let Ue=0,we=be.length;Ue<we;Ue++)lr(be[Ue],F,$,X)}function vo(b,F,$,X){let{opaque:Z,transmissive:be,transparent:Ue}=b;T.setupLightsView($),ae===!0&&ne.setGlobalState(R.clippingPlanes,$),X&&ye.viewport(H.copy(X)),Z.length>0&&ai(Z,F,$),be.length>0&&ai(be,F,$),Ue.length>0&&ai(Ue,F,$),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function cr(b,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Be=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new vn(1,1,{generateMipmaps:!0,type:Be?Wn:mn,minFilter:Si,samples:Math.max(4,ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let be=T.state.transmissionRenderTarget[X.id],Ue=X.viewport||H;be.setSize(Ue.z*R.transmissionResolutionScale,Ue.w*R.transmissionResolutionScale);let we=R.getRenderTarget(),Ie=R.getActiveCubeFace(),ke=R.getActiveMipmapLevel();R.setRenderTarget(be),R.getClearColor(J),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),Qe&&P.render($);let Ye=R.toneMapping;R.toneMapping=ni;let ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),ae===!0&&ne.setGlobalState(R.clippingPlanes,X),ai(b,$,X),qe.updateMultisampleRenderTarget(be),qe.updateRenderTargetMipmap(be),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let lt=0,Dt=F.length;lt<Dt;lt++){let bt=F[lt],{object:wt,geometry:Zt,material:Oe,group:nn}=bt;if(Oe.side===Qt&&wt.layers.test(X.layers)){let xt=Oe.side;Oe.side=sn,Oe.needsUpdate=!0,Li(wt,$,X,Zt,Oe,nn),Oe.side=xt,Oe.needsUpdate=!0,Be=!0}}Be===!0&&(qe.updateMultisampleRenderTarget(be),qe.updateRenderTargetMipmap(be))}R.setRenderTarget(we,Ie,ke),R.setClearColor(J,ce),ht!==void 0&&(X.viewport=ht),R.toneMapping=Ye}function ai(b,F,$){let X=F.isScene===!0?F.overrideMaterial:null;for(let Z=0,be=b.length;Z<be;Z++){let Ue=b[Z],{object:we,geometry:Ie,group:ke}=Ue,Ye=Ue.material;Ye.allowOverride===!0&&X!==null&&(Ye=X),we.layers.test($.layers)&&Li(we,F,$,Ie,Ye,ke)}}function Li(b,F,$,X,Z,be){z!==null&&Z.isNodeMaterial&&z.setObject(b,Z),b.onBeforeRender(R,F,$,X,Z,be),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(R,F,$,X,b,be),Z.transparent===!0&&Z.side===Qt&&Z.forceSinglePass===!1?(Z.side=sn,Z.needsUpdate=!0,R.renderBufferDirect($,F,X,Z,b,be),Z.side=qi,Z.needsUpdate=!0,R.renderBufferDirect($,F,X,Z,b,be),Z.side=Qt):R.renderBufferDirect($,F,X,Z,b,be),b.onAfterRender(R,F,$,X,Z,be)}function li(b){let F=0;for(let $ of b)$.texture!==null&&F++;return F}function Ni(b,F,$){F.isScene!==!0&&(F=$e);let X=Ve.get(b),Z=T.state.lights,be=T.state.shadowsArray,Ue=Z.state.version,we=ie.getParameters(b,Z.state,be,F,$,T.state.lightProbeGridArray),Ie=ie.getProgramCacheKey(we),ke=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let Ye=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=A.get(b.envMap||X.environment,Ye),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",_t),ke=new Map,X.programs=ke,X.programVariants=new Map);let ht=ke.get(Ie);if(ht!==void 0){if(X.currentProgram===ht&&X.lightsStateVersion===Ue)return Pt(b,we),ht}else we.uniforms=ie.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,$,we),b.onBeforeCompile(we,R),ht=ie.acquireProgram(we,Ie),ke.set(Ie,ht),X.uniforms=we.uniforms;let Be=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=ne.uniform),Pt(b,we),X.needsLights=Ms(b),X.lightsStateVersion=Ue,X.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.sunLights.value=Z.state.sun,Be.sunLightShadows.value=Z.state.sunShadow,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.sunShadowMatrix.value=Z.state.sunShadowMatrix,Be.sunShadowCascade.value=Z.state.sunShadowCascade,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix),X.numLightProbeGrids=li(T.state.lightProbeGridArray),X.currentProgram=ht,X.uniformsList=null,ht}function Kl(b,F,$,X,Z){let be=Ve.get(b),Ue=be.currentProgram.id+","+X+","+Z,we=be.programVariants.get(Ue);return we===void 0?(we=Ni(b,F,$),be.programVariants.set(Ue,we)):(be.currentProgram=we,be.uniformsList=null,be.outputColorSpace=X,be.toneMapping=Z),we}function Mo(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=tr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Pt(b,F){let $=Ve.get(b);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Yn(b,F,$,X,Z){F.isScene!==!0&&(F=$e),qe.resetTextureUnits();let be=F.fog,Ue=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,we=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ft.workingColorSpace,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,ke=A.get(X.envMap||Ue,Ie),Ye=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ht=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,Dt=!!$.morphAttributes.color,bt=ni;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(bt=R.toneMapping);let wt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=wt!==void 0?wt.length:0,Oe=Ve.get(X),nn=T.state.lights;if(ae===!0&&(Ee===!0||b!==k)){let Ke=b===k&&X.id===D;ne.setState(X,b,Ke)}let xt=!1,ci=!1;X.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==nn.state.version||Z.isBatchedMesh&&Oe.batching===!1||!Z.isBatchedMesh&&Oe.batching===!0||Z.isBatchedMesh&&Oe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Oe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Oe.instancing===!1||!Z.isInstancedMesh&&Oe.instancing===!0||Z.isSkinnedMesh&&Oe.skinning===!1||!Z.isSkinnedMesh&&Oe.skinning===!0||Z.isInstancedMesh&&Oe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Oe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Oe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Oe.instancingMorph===!1&&Z.morphTexture!==null||Oe.envMap!==ke||X.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ne.numPlanes||Oe.numIntersection!==ne.numIntersection)||Oe.vertexAlphas!==Ye||Oe.vertexTangents!==ht||Oe.morphTargets!==Be||Oe.morphNormals!==lt||Oe.morphColors!==Dt||Oe.morphTargetsCount!==Zt||Oe.numLightProbeGrids!==li(T.state.lightProbeGridArray)?xt=!0:(Oe.outputColorSpace!==we||Oe.toneMapping!==bt)&&(ci=!0):(xt=!0,Oe.__version=X.version);let Jt=Oe.currentProgram;(xt===!0||ci===!0)&&(Jt=ci===!0?Kl(X,F,Z,we,bt):Ni(X,F,Z),z&&X.isNodeMaterial&&z.onUpdateProgram(X,Jt,Oe));let Ss=!1,Fn=!1,hi=!1,pt=Jt.getUniforms(),zt=Oe.uniforms;if(ye.useProgram(Jt.program)&&(Ss=!0,Fn=!0,hi=!0),X.id!==D&&(D=X.id,Fn=!0),Ss||k!==b){ye.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pt.setValue(B,"projectionMatrix",b.projectionMatrix),pt.setValue(B,"viewMatrix",b.matrixWorldInverse);let mt=pt.map.cameraPosition;mt!==void 0&&mt.setValue(B,He.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&pt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,Fn=!0,hi=!0)}if(Oe.needsLights&&(nn.state.sunShadowMap.length>0&&pt.setValue(B,"sunShadowMap",nn.state.sunShadowMap,qe),nn.state.directionalShadowMap.length>0&&pt.setValue(B,"directionalShadowMap",nn.state.directionalShadowMap,qe),nn.state.spotShadowMap.length>0&&pt.setValue(B,"spotShadowMap",nn.state.spotShadowMap,qe),nn.state.pointShadowMap.length>0&&pt.setValue(B,"pointShadowMap",nn.state.pointShadowMap,qe)),Z.isSkinnedMesh){pt.setOptional(B,Z,"bindMatrix"),pt.setOptional(B,Z,"bindMatrixInverse");let Ke=Z.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),pt.setValue(B,"boneTexture",Ke.boneTexture,qe))}Z.isBatchedMesh&&(pt.setOptional(B,Z,"batchingTexture"),pt.setValue(B,"batchingTexture",Z._matricesTexture,qe),pt.setOptional(B,Z,"batchingIdTexture"),pt.setValue(B,"batchingIdTexture",Z._indirectTexture,qe),pt.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&pt.setValue(B,"batchingColorTexture",Z._colorsTexture,qe));let _n=$.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Q.update(Z,$,Jt),(Fn||Oe.receiveShadow!==Z.receiveShadow)&&(Oe.receiveShadow=Z.receiveShadow,pt.setValue(B,"receiveShadow",Z.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(zt.envMapIntensity.value=F.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=wy()),Fn){if(pt.setValue(B,"toneMappingExposure",R.toneMappingExposure),Oe.needsLights&&vs(zt,hi),be&&X.fog===!0&&ve.refreshFogUniforms(zt,be),ve.refreshMaterialUniforms(zt,X,re,_e,T.state.transmissionRenderTarget[b.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Ke=v,mt=0;for(let Wt of T.state.lightProbeGridArray)Wt.texture!==null&&(Ke.textures[mt]=Wt.texture,Ke.min[mt]=Wt.boundingBox.min,Ke.max[mt]=Wt.boundingBox.max,Ke.resolution[mt]=Wt.resolution,mt++);for(let Wt in Ke)Ke[Wt].length=mt;zt.probesSH.value=Ke.textures,zt.probesMin.value=Ke.min,zt.probesMax.value=Ke.max,zt.probesResolution.value=Ke.resolution}tr.upload(B,Mo(Oe),zt,qe)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tr.upload(B,Mo(Oe),zt,qe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(B,"center",Z.center),pt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),pt.setValue(B,"normalMatrix",Z.normalMatrix),pt.setValue(B,"modelMatrix",Z.matrixWorld),X.uniformsGroups!==void 0){let Ke=X.uniformsGroups;for(let mt=0,Wt=Ke.length;mt<Wt;mt++){let An=Ke[mt];ze.update(An,Jt),ze.bind(An,Jt)}}return Jt}function vs(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Ms(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,F,$){let X=Ve.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ve.get(b.texture).__webglTexture=F,Ve.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let $=Ve.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,$=0){K=b,N=F,O=$;let X=null,Z=!1,be=!1;if(b){let we=Ve.get(b);if(we.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(B.FRAMEBUFFER,we.__webglFramebuffer),H.copy(b.viewport),G.copy(b.scissor),he=b.scissorTest,ye.viewport(H),ye.scissor(G),ye.setScissorTest(he),D=-1;return}else if(we.__webglFramebuffer===void 0)qe.setupRenderTarget(b);else if(we.__hasExternalTextures)qe.rebindTextures(b,Ve.get(b.texture).__webglTexture,Ve.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ye=b.depthTexture;if(we.__boundDepthTexture!==Ye){if(Ye!==null&&Ve.has(Ye)&&(b.width!==Ye.image.width||b.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(b)}}let Ie=b.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);let ke=Ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?X=ke[F][$]:X=ke[F],Z=!0):b.samples>0&&qe.useMultisampledRTT(b)===!1?X=Ve.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[$]:X=ke,H.copy(b.viewport),G.copy(b.scissor),he=b.scissorTest}else H.copy(Le).multiplyScalar(re).floor(),G.copy(Ne).multiplyScalar(re).floor(),he=De;if($!==0&&(X=W),ye.bindFramebuffer(B.FRAMEBUFFER,X)&&ye.drawBuffers(b,X),ye.viewport(H),ye.scissor(G),ye.setScissorTest(he),Z){let we=Ve.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,$)}else if(be){let we=F;for(let Ie=0;Ie<b.textures.length;Ie++){let ke=Ve.get(b.textures[Ie]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ie,ke.__webglTexture,$,we)}}else if(b!==null&&$!==0){let we=Ve.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,$)}D=-1};function hr(b){let F=Ve.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=ut.textureFormatReadable(b.format),F.__typeReadable=ut.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,$,X,Z,be,Ue,we=0){if(!(b&&b.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){ye.bindFramebuffer(B.FRAMEBUFFER,Ie);try{let ke=b.textures[we],Ye=ke.format,ht=ke.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we);let Be=hr(ke);if(Be.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&$>=0&&$<=b.height-Z&&B.readPixels(F,$,X,Z,ue.convert(Ye),ue.convert(ht),be)}finally{let ke=K!==null?Ve.get(K).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,F,$,X,Z,be,Ue,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(F>=0&&F<=b.width-X&&$>=0&&$<=b.height-Z){ye.bindFramebuffer(B.FRAMEBUFFER,Ie);let ke=b.textures[we],Ye=ke.format,ht=ke.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we);let Be=hr(ke);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,lt),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),B.readPixels(F,$,X,Z,ue.convert(Ye),ue.convert(ht),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Dt=K!==null?Ve.get(K).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,Dt);let bt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ad(B,bt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,lt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(lt),B.deleteSync(bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,$=0){let X=Math.pow(2,-$),Z=Math.floor(b.image.width*X),be=Math.floor(b.image.height*X),Ue=F!==null?F.x:0,we=F!==null?F.y:0;qe.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Ue,we,Z,be),ye.unbindTexture()},this.copyTextureToTexture=function(b,F,$=null,X=null,Z=0,be=0){let Ue,we,Ie,ke,Ye,ht,Be,lt,Dt,bt=b.isCompressedTexture?b.mipmaps[be]:b.image;if($!==null)Ue=$.max.x-$.min.x,we=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,Ye=$.min.y,ht=$.isBox3?$.min.z:0;else{let pt=Math.pow(2,-Z);Ue=Math.floor(bt.width*pt),we=Math.floor(bt.height*pt),b.isDataArrayTexture?Ie=bt.depth:b.isData3DTexture?Ie=Math.floor(bt.depth*pt):Ie=1,ke=0,Ye=0,ht=0}X!==null?(Be=X.x,lt=X.y,Dt=X.z):(Be=0,lt=0,Dt=0);let wt=ue.convert(F.format),Zt=ue.convert(F.type),Oe;F.isData3DTexture?(qe.setTexture3D(F,0),Oe=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(qe.setTexture2DArray(F,0),Oe=B.TEXTURE_2D_ARRAY):(qe.setTexture2D(F,0),Oe=B.TEXTURE_2D),ye.activeTexture(B.TEXTURE0),ye.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),ye.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ye.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let nn=ye.getParameter(B.UNPACK_ROW_LENGTH),xt=ye.getParameter(B.UNPACK_IMAGE_HEIGHT),ci=ye.getParameter(B.UNPACK_SKIP_PIXELS),Jt=ye.getParameter(B.UNPACK_SKIP_ROWS),Ss=ye.getParameter(B.UNPACK_SKIP_IMAGES);ye.pixelStorei(B.UNPACK_ROW_LENGTH,bt.width),ye.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt.height),ye.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),ye.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),ye.pixelStorei(B.UNPACK_SKIP_IMAGES,ht);let Fn=b.isDataArrayTexture||b.isData3DTexture,hi=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let pt=Ve.get(b),zt=Ve.get(F),_n=Ve.get(pt.__renderTarget),Ke=Ve.get(zt.__renderTarget);ye.bindFramebuffer(B.READ_FRAMEBUFFER,_n.__webglFramebuffer),ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let mt=0;mt<Ie;mt++)Fn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(b).__webglTexture,Z,ht+mt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(F).__webglTexture,be,Dt+mt)),B.blitFramebuffer(ke,Ye,ke+Ue,Ye+we,Be,lt,Be+Ue,lt+we,B.DEPTH_BUFFER_BIT,B.NEAREST);ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||Ve.has(b)){let pt=Ve.get(b),zt=Ve.get(F);ye.bindFramebuffer(B.READ_FRAMEBUFFER,I),ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,q);for(let _n=0;_n<Ie;_n++)Fn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pt.__webglTexture,Z,ht+_n):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pt.__webglTexture,Z),hi?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,zt.__webglTexture,be,Dt+_n):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,zt.__webglTexture,be),Z!==0?B.blitFramebuffer(ke,Ye,ke+Ue,Ye+we,Be,lt,Be+Ue,lt+we,B.COLOR_BUFFER_BIT,B.NEAREST):hi?B.copyTexSubImage3D(Oe,be,Be,lt,Dt+_n,ke,Ye,Ue,we):B.copyTexSubImage2D(Oe,be,Be,lt,ke,Ye,Ue,we);ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else hi?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Oe,be,Be,lt,Dt,Ue,we,Ie,wt,Zt,bt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,be,Be,lt,Dt,Ue,we,Ie,wt,bt.data):B.texSubImage3D(Oe,be,Be,lt,Dt,Ue,we,Ie,wt,Zt,bt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,be,Be,lt,Ue,we,wt,Zt,bt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,be,Be,lt,bt.width,bt.height,wt,bt.data):B.texSubImage2D(B.TEXTURE_2D,be,Be,lt,Ue,we,wt,Zt,bt);ye.pixelStorei(B.UNPACK_ROW_LENGTH,nn),ye.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt),ye.pixelStorei(B.UNPACK_SKIP_PIXELS,ci),ye.pixelStorei(B.UNPACK_SKIP_ROWS,Jt),ye.pixelStorei(B.UNPACK_SKIP_IMAGES,Ss),be===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(Oe),ye.unbindTexture()},this.initRenderTarget=function(b){Ve.get(b).__webglFramebuffer===void 0&&qe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?qe.setTextureCube(b,0):b.isData3DTexture?qe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?qe.setTexture2DArray(b,0):qe.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){N=0,O=0,K=null,ye.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}});function Ti(n,e,t){let i=0;for(let s=0;s<Ih;s+=1)i+=n(e,t+((s+.5)/Ih-.5)*Ey);return i/Ih}function yf(n,e,t={},i=0){let s=Math.max(0,ps(i,0)),r=Zi(ps(t.soak,0),0,1),o=Zi(ps(t.airTarget,Lh),-en,bn),a=!!n.onSnow,l=ps(n.velocity,0),c=Zi(ps(n.leg,0),-en,bn),h=a?Zi(e.carryFrom+ps(n.ride,0),e.snowFrom-en,e.snowFrom+bn):ps(n.height,e.snowFrom),d=e.snowFrom,u=e.carryFrom,f=0,p=!1,_=null,g=s>0?Math.max(1,Math.ceil(s/Ty-1e-9)):0,m=g>0?s/g:0,y=s>0?(e.snowTo-e.snowFrom)/s:0,S=s>0?(e.carryTo-e.carryFrom)/s:0,v=T=>Math.min(T,S+Py),E=(T,x)=>Zi(x,T-Ay,T+Ry);for(let T=0;T<g;T+=1){let x=E(d,u),w=(T+1)/g;if(d=e.snowFrom+(e.snowTo-e.snowFrom)*w,u=e.carryFrom+(e.carryTo-e.carryFrom)*w,a){let L=E(d,u),R=v((L-x)/m),C=xf**2*(x-h)+2*Iy*xf*(R-l),z=C<=-9.81;C=Math.max(C,-9.81),l+=C*m,h+=l*m;let W=C+9.81;if(h-d<-en){let q=l;h=d-en,l=Math.max(l,v(y)),W+=(l-q)/m}f+=Math.max(0,W)/9.81;let I=z&&l>R&&h-L>Cy;(h-d>bn||I)&&(a=!1,p=!0,c=Zi(h-d,-en,bn),l>S&&(l=S+(l-S)*(1-Ly*r)))}else{l-=9.81*m,h+=l*m,c=Dy(c,o,Ny*m);let L=h-d<-en;(L||h-c<=d&&l<=S)&&(a=!0,_??(_={closing:Math.max(0,S-l)}),L&&(h=d-en,l=Math.max(l,v(y))))}}return{air:a?0:Math.max(0,h-c-d),height:h,leg:a?Zi(h-d,-en,bn):c,liftoff:p,load:g>0?f/g:a?1:0,onSnow:a,ride:h-u,touchdown:_,velocity:l}}var Ty,en,bn,Ey,Ih,Ay,Ry,Cy,Py,xf,Iy,Ly,Ny,Lh,Zi,ps,Dy,go=Un(()=>{Ty=.008333333333333333,en=.42,bn=.45,Ey=16.5,Ih=12,Ay=.32,Ry=.38,Cy=.25,Py=3.5,xf=9,Iy=.7,Ly=.85,Ny=2.5,Lh=-.12,Zi=(n,e,t)=>Math.min(t,Math.max(e,n)),ps=(n,e)=>Number.isFinite(n)?n:e,Dy=(n,e,t)=>n+Zi(e-n,-t,t)});function Mf(){let n=new Ut,{board:e,tips:t}=zy(n),i=new Ut;i.rotation.order="YXZ",n.add(i);let s=Ct(By(),yt.tee,i,[0,0,0],"oversized-tee");Ct(new jt(.445,.47,.055,8),yt.teeShade,i,[0,.025,0],"tee-hem");let r=Ct(new Zs(.13,.02,4,8),yt.teeShade,i,[0,.75,0],"shirt-collar");r.rotation.x=Math.PI/2;let o=new ei;o.moveTo(0,.055),o.lineTo(.052,0),o.lineTo(0,-.055),o.lineTo(-.052,0),o.closePath();let a=Ct(new as(o),yt.board,i,[-.455,.56,-.17],"back-print");a.rotation.y=-Math.PI/2;let l=new Ut;l.position.set(0,1.12,0),i.add(l);let c=Ct(new jt(.1,.1,.16,8),yt.face,l,[0,-.3,0],"neck");c.castShadow=!1,Ct(new Mi(.235,8,5),yt.face,l,[0,-.1,0],"face"),Ct(new Mi(.29,10,5,0,Math.PI*2,0,Math.PI*.62),yt.helmet,l,[0,.065,0],"helmet-shell"),Ct(new jt(.273,.282,.047,10),yt.helmetRim,l,[0,-.04,0],"helmet-rim");let h=Ct(new Zs(.258,.022,4,12),yt.helmetRim,l,[0,-.105,0],"goggle-strap");h.rotation.x=Math.PI/2,Ct(vf(.265,.095,.32),yt.goggles,l,[0,0,0],"goggle-frame"),Ct(vf(.235,.067,.329),yt.lens,l,[0,0,0],"goggle-lens");for(let R of[-1,1]){Ct(new Mi(.12,7,4),yt.helmetRim,l,[.015,-.13,R*.23],"helmet-ear-pad").scale.set(.72,.85,.52);let z=Ji(l,.021,.021,yt.helmetRim,5,"chin-strap");ir(z,new U(.04,-.15,R*.26),new U(-.04,-.3,R*.09))}let d=[],u=[],f=[],p=[],_=[];for(let R of[-1,1])d.push(Ji(i,.135,.12,yt.sleeve,7,"long-sleeve-upper")),u.push(Ji(i,.17,.15,yt.tee,7,"tee-sleeve")),f.push(Ji(i,.12,.105,yt.sleeveShade,7,"long-sleeve-forearm")),p.push(Ct(new vi(.125,0),yt.sleeve,i,[0,0,0],"elbow-fold")),_.push(Ct(new fn(.18,.18,.17),yt.mitt,i,[0,0,0],"mitten"));let g=[Ji(n,.23,.255,yt.pants,7,"baggy-pant-thigh"),Ji(n,.23,.255,yt.pants,7,"baggy-pant-thigh")],m=[Ji(n,.235,.25,yt.pants,7,"baggy-pant-leg"),Ji(n,.235,.25,yt.pants,7,"baggy-pant-leg")],y=[-1,1].map(()=>Ct(new vi(.205,0),yt.pantsFold,n,[0,0,0],"knee-fold")),S=[-1,1].map(()=>Ct(new jt(.245,.265,.11,7),yt.pantsShade,n,[0,0,0],"stacked-pant-cuff")),v=[-1,1].map(()=>Ct(new fn(.18,.18,.035),yt.pantsShade,n,[0,0,0],"cargo-pocket")),E=new Ht;E.position.set(.18,.12,.08),e.add(E);let T=new Gt(new kr(.82,24),new In({color:3893368,transparent:!0,opacity:.2,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.scale.y=.48,n.add(T);let x=-.35,w=0,L=(R={},C={},z=0,W={x:0,y:1,z:-.35})=>{let I=gt(R.position?.across),q=gt(R.position?.downhill),N=Math.max(0,gt(R.air)),O=gt(C.boardYaw,gt(R.boardYaw,gt(R.heading))),K=N>.02?gn(gt(C.boardTweak),-1.35,1.35):0,D=gt(C.bodyYaw,gt(R.torsoYaw,gt(R.heading))),k=gn(gt(C.crouch,.3),0,1),H=gn(gt(C.jumpStretch),0,1),G=gn(gt(C.grab),0,1),he=gn(gt(C.bodyTilt,gt(C.lean)*.55),-.8,.8),J=gn(gt(C.legOffset),-en,bn),ce=gn(-J/en,0,1),me=gn(gt(C.snowResponse),0,1),_e=gn(1.24-k*.72+H*.22+J-me*(N>0?0:.08),Uy,Oy),re=z+N,xe=Math.atan2(gt(W.z,-.35),gt(W.y,1)),We=gt(W.x)*.2;N<=.02&&(x=xe,w=We),n.position.set(I,0,-q),e.position.set(0,re+.035,0),e.rotation.set(gn((N>.02?x:xe)+gt(C.boardPitch)+gt(C.press)*.15,-.8,.55),-O-K,gn(gt(C.boardRoll)+(N>.02?w:We),-1.1,1.1));let Le=gn(gt(C.boardFlex),0,1);t[0].rotation.x=-.12-Le*.12,t[1].rotation.x=.12+Le*.12,i.position.set(he*.32,re+_e,gt(C.foreAft)*.13),i.rotation.set(-Math.max(0,k+ce*.35-.3)*.3+H*.12-G*.25+gt(C.stumble)*.07,.58-D+gt(C.upperBodyTwist)*.09,-he*.68+gt(C.fallRotation)*.6),s.scale.x=1+gt(C.clothFlutter)*.018,s.rotation.z=gt(C.clothLag)*.018,l.rotation.y=gn(gt(C.headLook)*.25,-.25,.25),l.rotation.z=-he*.11,l.rotation.x=G*.13;for(let Ne=0;Ne<2;Ne+=1){let De=Ne===0?-1:1,V=new U(0,.2,De*.42).applyEuler(e.rotation).add(e.position),oe=new U(0,0,De*.25).applyEuler(i.rotation).add(i.position),ae=new U((V.x+oe.x)*.5+.08+(k+ce*.5)*.075+me*.04,(V.y+oe.y)*.5+.08,(V.z+oe.z)*.5+De*.07);ir(g[Ne],ae,oe),ir(m[Ne],V,ae),y[Ne].position.copy(ae),y[Ne].scale.set(1,.58,1),S[Ne].position.copy(V).add(new U(0,.08,0)),v[Ne].position.copy(oe).lerp(ae,.55),v[Ne].position.z+=De*.22;let Ee=new U(-.02,.66,De*.39),le=new U(.035+gt(C.armLag)*.025,.35+k*.04-me*.025,De*.51),He=Ee.clone().lerp(le,.44),Pe=De===(Math.sign(he)||1)&&N<=.05?gn(gt(C.handDrag),0,1):0,$e=new U(.09,.08-gt(C.stumble)*.1,De*(.55+gt(C.armLag)*.025));if(Pe>0){let rt=new U(De*.7,z+.06,De*.25).sub(i.position).applyQuaternion(i.quaternion.clone().invert());$e.lerp(rt,Pe),le.lerp(Ee.clone().add($e).multiplyScalar(.5),Pe*.5)}if(Ne===1&&G>0){let rt=E.position.clone().applyEuler(e.rotation).add(e.position).sub(i.position).applyQuaternion(i.quaternion.clone().invert());$e.lerp(rt,G),le.lerp(Ee.clone().add($e).multiplyScalar(.5),G*.7),le.x+=G*.13}ir(d[Ne],He,le),ir(u[Ne],Ee,He),ir(f[Ne],le,$e),p[Ne].position.copy(le),_[Ne].position.copy($e)}T.position.set(.13,z+.024,.13),T.scale.set(1+N*.18,.48+N*.08,1),T.material.opacity=.22/(1+N*.9)};return L(),Object.freeze({board:e,body:i,grabAnchor:E,grabHand:_[1],group:n,hands:Object.freeze([..._]),shadow:T,update:L})}var Vt,yt,Fy,Uy,Oy,gn,gt,Ct,Ji,ir,By,vf,zy,Sf=Un(()=>{Ph();go();Vt=(n,e=.92)=>new pn({color:n,roughness:e,metalness:0}),yt=Object.freeze({board:Vt(15165e3,.48),boardBase:Vt(2635591,.58),boardGraphic:Vt(15919316,.6),boardEdge:Vt(12177620,.42),boot:Vt(1911095,.94),binding:Vt(3688536,.74),face:Vt(12750704,.98),goggles:Vt(1319725,.26),lens:Vt(9160915,.2),helmet:Vt(14378318,.65),helmetRim:Vt(2701386,.78),helmetShade:Vt(12079678,.74),mitt:Vt(1911095,.97),pants:Vt(5794690,1),pantsShade:Vt(4676209,1),pantsFold:Vt(6649741,1),sleeve:Vt(14117202,.98),sleeveShade:Vt(12079682,.98),tee:Vt(15526108,.98),teeShade:Vt(13223611,.98)}),Fy=new U(0,1,0),Uy=.46,Oy=1.46,gn=(n,e,t)=>Math.min(t,Math.max(e,n)),gt=(n,e=0)=>Number.isFinite(n)?n:e,Ct=(n,e,t,i=[0,0,0],s="")=>{let r=new Gt(n,e);return r.position.set(...i),r.castShadow=!["back-print","binding-strap","board-chevron","boot-sole","cargo-pocket","chin-strap","goggle-frame","goggle-lens","goggle-strap","helmet-vent","shirt-collar","shirt-fold","shirt-logo","topsheet-stripe"].includes(s),r.receiveShadow=!0,r.userData.part=s,t.add(r),r},Ji=(n,e,t,i,s=7,r="")=>Ct(new jt(e,t,1,s),i,n,[0,0,0],r),ir=(n,e,t)=>{let i=new U().subVectors(t,e),s=Math.max(.01,i.length());n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(Fy,i.normalize()),n.scale.y=s},By=()=>{let n=[{y:.015,x:.46,z:.4},{y:.12,x:.47,z:.41},{y:.52,x:.44,z:.4},{y:.75,x:.42,z:.37}],e=[],t=8;for(let s=0;s<n.length-1;s+=1){let r=n[s],o=n[s+1];for(let a=0;a<t;a+=1){let l=a/t*Math.PI*2,c=(a+1)/t*Math.PI*2,h=[Math.cos(l)*r.x,r.y,Math.sin(l)*r.z],d=[Math.cos(c)*r.x,r.y,Math.sin(c)*r.z],u=[Math.cos(l)*o.x,o.y,Math.sin(l)*o.z],f=[Math.cos(c)*o.x,o.y,Math.sin(c)*o.z];e.push(...h,...u,...d,...d,...u,...f)}}let i=new Et;return i.setAttribute("position",new nt(e,3)),i.computeVertexNormals(),i},vf=(n,e,t)=>{let i=[],o=(l,c)=>{let h=l/8*2-1,d=c/2*2-1;return[-t+Math.abs(h)**1.7*.064+d**2*.009,-.105+d*e,h*n]};for(let l=0;l<8;l+=1)for(let c=0;c<2;c+=1){let h=o(l,c),d=o(l+1,c),u=o(l,c+1),f=o(l+1,c+1);i.push(...h,...d,...u,...d,...f,...u)}let a=new Et;return a.setAttribute("position",new nt(i,3)),a.computeVertexNormals(),a},zy=n=>{let e=new Ut;e.rotation.order="YXZ",n.add(e);let t=new ei;t.moveTo(-.12,-.97);for(let[r,o]of[[-.19,-.9],[-.2,-.68],[-.2,.68],[-.19,.9],[-.12,.97],[.12,.97],[.19,.9],[.2,.68],[.2,-.68],[.19,-.9],[.12,-.97]])t.lineTo(r,o);t.closePath();let i=new Jr(t,{depth:.05,bevelEnabled:!1,curveSegments:1});i.rotateX(Math.PI/2),Ct(i,[yt.board,yt.boardEdge],e,[0,.095,0],"snowboard"),Ct(new fn(.075,.01,1.34),yt.boardGraphic,e,[0,.103,0],"topsheet-stripe");let s=[];for(let r of[-1,1]){let o=new Ut;o.position.z=r*.77,e.add(o),Ct(new fn(.31,.018,.27),yt.board,o,[0,.099,r*.065],"upturned-tip"),s.push(o),Ct(new fn(.23,.016,.2),yt.boardGraphic,e,[0,.111,r*.65],"board-chevron").rotation.y=r*.25,Ct(new jt(.13,.13,.025,12),yt.binding,e,[0,.128,r*.42],"binding-disc"),Ct(new fn(.33,.14,.18),yt.boot,e,[0,.21,r*.42],"boot"),Ct(new fn(.35,.025,.2),yt.boardBase,e,[0,.14,r*.42],"boot-sole"),Ct(new fn(.34,.028,.058),yt.boardGraphic,e,[0,.29,r*.42],"binding-strap")}return{board:e,tips:s}}});function Rf(n={}){let e=Rt(Mt(n.crouch),0,1),t=Rt(Mt(n.airborne),0,1),i=Rt(Mt(n.foreAft),-1,1),s=Rt(Mt(n.jumpStretch),0,1),r=Rt(Mt(n.lean),-1,1),o=n.toeSide!==!1,a=Rt(Mt(n.upperBodyTwist),-1,1),l=Rt(Mt(n.boardRoll),-1.08,1.08),c=Rt(Mt(n.boardSwing),-1.8,1.8),h=Rt(Mt(n.bodyTilt),-.8,.8),d=Rt(Mt(n.hipTwist),-1.2,1.2),u=Rt(Mt(n.shoulderTwist,a),-.7,.7),f=Rt(Mt(n.headLook),-1,1),p=Rt(Mt(n.armLag),-1,1),_=Rt(Mt(n.clothLag),-1.5,1.5),g=Rt(Mt(n.clothFlutter),-1,1),m=Rt(Mt(n.handDrift),-1.5,1.5),y=Rt(Mt(n.breath),-1,1),S=Rt(Mt(n.stumble),0,1),v=Rt(Mt(n.crashCollapse),0,1),E=Rt(Mt(n.crashSit),0,1),T=Rt(Mt(n.boardFlex),0,1),x=Rt(Mt(n.boardPitch),-.6,.6),w=Rt(Mt(n.butter),0,1),L=Rt(Mt(n.press),-1,1),R=Math.max(0,L)*18,C=Math.max(0,-L)*18,z=Rt(Mt(n.handDrag),0,1),W=Rt(Mt(n.grab),0,1),I=Rt(Mt(n.scarfFlutter),-1,1),q=Mt(n.bob)*20,N=Mt(n.boardBob,Mt(n.bob))*20,O=Math.sign(l)||1,K=O*13,D=Math.cos(Math.abs(l)),k=t>.1?0:w>.5?L>=0?43:-43:n.switchRiding?24:-23,H=ee(K+(0-K)*D,k+N),G=(ot,ut)=>{let ye=K+(ot-K)*D,Tt=ut<0?R*(-ut/58):C*(ut/55),Ve=Math.sin((ut+58)/113*Math.PI)*T*2,qe=ee(ye,ut+x*ut*.28-Tt+Ve+N);return ky(qe,H,c)},he=Math.sin(Math.abs(l))*9,J=-O,ce=(n.stance==="goofy"?-1:1)*(n.switchRiding?-1:1),me=ce,_e=ee(r*(o?16:11)+h*4+d*2,-2+e*14-s*5-i*5+w*4+(o?0:Math.abs(r)*3)+q+v*12+E*7),re=G(-6,-23),xe=G(2,31),We=ee(_e.x-7+d*2,_e.y-2-d*3),Le=ee(_e.x+7+d*2,_e.y+2+d*3),Ne=Af(re,We,e,o?1.08:.92),De=Af(xe,Le,e,o?.94:1.12),V=ee(_e.x+r*(o?13:7)+u*5,_e.y-29+e*14-s*8+(o?Math.abs(r)*2:0)+v*9+y),oe=ee(V.x-15,V.y+3-u*5),ae=ee(V.x+15,V.y-3+u*5),Ee=r<0?z:0,le=r>=0?z:0,He=ee(_e.x-21+u*8+p*8-E*11+m,_e.y+12+e*9-t*3+Ee*22-S*21+E*9+m*.6),Pe=ee(_e.x+21+u*8+p*11-W*10+E*5-m*.7,_e.y+12+e*9-t*3+le*22+W*9-S*28-E*4-m*.4),$e=ee((oe.x+He.x)/2-3,(oe.y+He.y)/2-2),Qe=ee((ae.x+Pe.x)/2+4,(ae.y+Pe.y)/2-1),rt=Ef(oe,$e,.68),B=Ef(ae,Qe,.68),se=ee(V.x+r*4+f*5-h*2,V.y-15-s*3+v*4);return Object.freeze([st("board","board",[G(-8,-58),G(8,-58),G(12,-52),G(13,44),G(9,54),G(-9,54),G(-13,44),G(-12,-52)]),st("board-side","boardSide",[G(8,-58),ee(G(8,-58).x+4,G(8,-58).y+4),ee(G(13,44).x+4,G(13,44).y+4),G(13,44)]),st("board-tail-side","boardBase",[G(-9,54),G(9,54),ee(G(9,54).x+3,G(9,54).y+4),ee(G(-9,54).x+3,G(-9,54).y+4)]),st("board-underside","boardBase",[G(J*(11+he/D),-49),G(J*11,-49),G(J*13,45),G(J*(13+he/D),45)]),st("board-edge","boardEdge",[G(O*12.2,-48),G(O*13.2,-45),G(O*13.2,42),G(O*12.2,45)]),st("board-inset","boardShadow",[G(0,-46),G(5,-41),G(6,41),G(-6,41),G(-5,-41)]),st("board-nose-graphic","boardAccent",[G(-9,-47),G(6,-38),G(7,-34),G(-9,-43)]),st("board-tail-graphic","boardAccent",[G(9,38),G(-7,47),G(-9,51),G(9,42)]),st("board-mark","board",[G(-3,-15),G(3,-11),G(3,12),G(-3,16)]),st("left-leg","pantsShadow",wf(re,Ne,We)),st("left-pant-side","pantsSide",[ee(Ne.x-14,Ne.y-6),ee(Ne.x-15,Ne.y+5),ee(re.x-10,re.y),ee(re.x-4,re.y-6)]),st("left-pant-fold","pantsFold",[ee(Ne.x-9,Ne.y-4),ee(Ne.x+4,Ne.y+2),ee(re.x-5,re.y-8)]),st("right-leg","pants",wf(xe,De,Le)),st("right-pant-side","pantsSide",[ee(De.x+14,De.y-6),ee(De.x+15,De.y+5),ee(xe.x+10,xe.y),ee(xe.x+4,xe.y-6)]),st("right-pant-fold","pantsFold",[ee(De.x+9,De.y-5),ee(De.x-2,De.y+3),ee(xe.x+6,xe.y-8)]),st("left-boot","boots",ri(re.x,re.y,29,9,-.28*ce+c)),st("right-boot","boots",ri(xe.x,xe.y,29,9,.28*ce+c)),st("left-boot-top","bootsTop",ri(re.x,re.y-2,24,4,-.28*ce+c)),st("right-boot-top","bootsTop",ri(xe.x,xe.y-2,24,4,.28*ce+c)),st("left-pant-cuff","pantCuff",ri(re.x,re.y-5,25,7,-.28*ce+c)),st("right-pant-cuff","pantCuff",ri(xe.x,xe.y-5,25,7,.28*ce+c)),st("torso","tee",[ee(oe.x-4,oe.y-2),ee(ae.x+4,ae.y-2),ee(Le.x+9,Le.y+2),ee(We.x-9,We.y+2)]),st("shirt-light-panel","teeLight",[ee(oe.x-4,oe.y-2),ee(V.x+2,V.y-3),ee(_e.x-2,_e.y+2),ee(We.x-9,We.y+2)]),st("shirt-side-panel","teeShadow",[ee(V.x+7,V.y),ee(ae.x+4,ae.y-1),ee(Le.x+9,Le.y+2),ee(_e.x+8,_e.y+2)]),st("shirt-hem","tee",[ee(We.x-9,We.y),ee(Le.x+9,Le.y),ee(Le.x+11+_*7,Le.y+5+g*3),ee(_e.x+_*8,_e.y+7+g*3),ee(We.x-10+_*5,We.y+5+g*2)]),st("shirt-graphic","board",[ee(V.x-8,V.y+14),ee(V.x-1,V.y+7),ee(V.x+6,V.y+14),ee(V.x+2,V.y+14),ee(V.x-1,V.y+11),ee(V.x-5,V.y+16)]),st("left-arm","sleeveShadow",bf(He,$e,oe,5)),st("right-arm","sleeve",bf(Pe,Qe,ae,5)),st("right-sleeve-light","sleeveLight",[ee(Qe.x-2,Qe.y-1),ee(Qe.x+2,Qe.y-1),ee(Pe.x+2,Pe.y-5),ee(Pe.x-1,Pe.y-5)]),st("left-tee-sleeve","teeShadow",Tf(oe,rt,8,7)),st("right-tee-sleeve","tee",Tf(ae,B,8,7)),st("left-sleeve-cuff","sleeve",ri(He.x,He.y-5,11,5,-.2)),st("right-sleeve-cuff","sleeveShadow",ri(Pe.x,Pe.y-5,11,5,.2)),st("left-mitt","mitts",ri(He.x,He.y,8,10,-.18)),st("right-mitt","mitts",ri(Pe.x,Pe.y,8,10,.18)),st("head","helmet",[ee(se.x-9,se.y-5),ee(se.x-5,se.y-10),ee(se.x+5,se.y-10),ee(se.x+10,se.y-5),ee(se.x+10,se.y+5),ee(se.x+5,se.y+9),ee(se.x-5,se.y+9),ee(se.x-10,se.y+5)]),st("helmet-side","helmetSide",[ee(se.x+5,se.y-10),ee(se.x+10,se.y-5),ee(se.x+10,se.y+5),ee(se.x+5,se.y+9),ee(se.x+4,se.y+2)]),st("helmet-panel","helmetShadow",[ee(se.x-8,se.y-5),ee(se.x-4,se.y-9),ee(se.x+5,se.y-9),ee(se.x+8,se.y-5),ee(se.x+3,se.y-1),ee(se.x-5,se.y-1)]),st("helmet-highlight","helmetHighlight",[ee(se.x-5,se.y-5),ee(se.x,se.y-9),ee(se.x+1,se.y-6),ee(se.x-2,se.y-3)]),st("face","skin",[ee(se.x-6,se.y+2),ee(se.x+6,se.y+2),ee(se.x+5,se.y+8),ee(se.x,se.y+10),ee(se.x-5,se.y+8)]),st("helmet-band","helmetBand",[ee(se.x-9,se.y-2),ee(se.x+9,se.y-2),ee(se.x+9,se.y+1),ee(se.x-9,se.y+1)]),st("goggles","goggles",[ee(se.x+me*1+f*2,se.y-3),ee(se.x+me*8+f*2,se.y-2),ee(se.x+me*8+f*2,se.y+3),ee(se.x+me*1+f*2,se.y+3)]),st("goggle-lens","goggleLens",[ee(se.x+me*3+f*2,se.y-2),ee(se.x+me*7+f*2,se.y-1),ee(se.x+me*7+f*2,se.y+1),ee(se.x+me*3+f*2,se.y+1)]),st("goggle-strap","goggleStrap",[ee(se.x-9,se.y-1),ee(se.x+9,se.y-1),ee(se.x+8,se.y+3),ee(se.x-8,se.y+3)]),st("goggle-lens","goggleLens",[ee(se.x-6,se.y-2),ee(se.x+7,se.y-2),ee(se.x+5,se.y+2),ee(se.x-5,se.y+2)]),st("scarf","scarf",[ee(V.x+7,V.y-10),ee(V.x+15,V.y-8),ee(V.x+21+r*4+I*5,V.y+10-t*5-Math.abs(I)*4),ee(V.x+11,V.y+2)])])}var Rt,Mt,ee,st,ri,bf,wf,Tf,Ef,ky,Af,Cf=Un(()=>{Rt=(n,e,t)=>Math.min(t,Math.max(e,n)),Mt=(n,e=0)=>Number.isFinite(n)?n:e,ee=(n,e)=>Object.freeze({x:n,y:e}),st=(n,e,t)=>Object.freeze({part:n,points:Object.freeze(t),tone:e}),ri=(n,e,t,i,s)=>{let r=Math.cos(s),o=Math.sin(s);return[[-t/2,-i/2],[t/2,-i/2],[t/2,i/2],[-t/2,i/2]].map(([a,l])=>ee(n+a*r-l*o,e+a*o+l*r))},bf=(n,e,t,i)=>[ee(n.x-i,n.y),ee(e.x-i,e.y),ee(t.x-i,t.y),ee(t.x+i,t.y),ee(e.x+i,e.y),ee(n.x+i,n.y)],wf=(n,e,t)=>[ee(n.x-10,n.y),ee(n.x-12,n.y-6),ee(e.x-15,e.y+5),ee(e.x-14,e.y-6),ee(t.x-12,t.y-4),ee(t.x+12,t.y-4),ee(e.x+14,e.y-6),ee(e.x+15,e.y+5),ee(n.x+12,n.y-6),ee(n.x+10,n.y)],Tf=(n,e,t,i)=>[ee(n.x-t,n.y-2),ee(n.x+t,n.y-2),ee(e.x+i,e.y+2),ee(e.x-i,e.y+2)],Ef=(n,e,t)=>ee(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t),ky=(n,e,t)=>{let i=n.x-e.x,s=n.y-e.y,r=Math.cos(t),o=Math.sin(t);return ee(e.x+i*r-s*o,e.y+i*o+s*r)},Af=(n,e,t,i)=>{let s=e.x-n.x,r=e.y-n.y,o=Math.max(.001,Math.hypot(s,r)),a=Math.min(34,o),l=Math.sqrt(Math.max(0,18**2-(a/2)**2))*(.7+t*.13)*i;return ee((n.x+e.x)/2-r/o*l,(n.y+e.y)/2+s/o*l)}});function Gy(n,e=0){let t=n.getBoundingClientRect?.().height||n.height,i=Ei(n.height/Math.max(1,t),1,2);return Math.max(0,e)*42*i}function Nh(n=1500){let e=[],t=-1,i=-1/0,s=0;return Object.freeze({points(){return Object.freeze([...e])},reset(){e=[],t=-1,i=-1/0,s=0},update(r){let o=Number(r?.elapsed)||0,a=Number(r?.position?.downhill)||0;(o<t||a<i-1)&&(e=[],s=0),t=o,i=a;let l=Number(r?.edge)||0,c=Ei(Number(r?.skid)||0,0,1),h=Number(r?.landingImpact)||0;if(r?.air>0||r?.crashed){s=h;return}let d=Number(r?.boardYaw)||0,u=Math.sign(l||r?.slipAngle||1),f=(Number(r?.position?.across)||0)+Math.cos(d)*u*.12,p=e.at(-1),_=h>1.5&&s<=1.5;if(s=h,p&&Math.hypot(f-p.across,a-p.downhill)<.1&&!_)return;let g=Ei(Number(r?.carveQuality)||0,0,1),m=_?"landing":(Number(r?.butter)||0)>.55?"butter":Math.abs(Number(r?.pressAmount)||0)>.45&&c<.2?"press":g>=.45&&c<.36?"carve":c>=.12||Math.abs(l)>=.08?"skid":r?.surface==="powder"?"powder":"flat";e.push(Object.freeze({across:f,downhill:a,kind:m,width:m==="carve"?.9:m==="press"?.85:m==="flat"?1.5:m==="powder"?2.5:m==="landing"?4+h*.5:2.2+c*5.8})),e.length>n&&(e=e.slice(-n))}})}function Vy(n,e,t={}){let{cameraAcross:i=0,currentDownhill:s=0,groundY:r=0,palette:o=_o,scale:a=1,viewportCenter:l=0}=t;if(!Array.isArray(e)||e.length<2)return;let c=h=>({x:l+(h.across-i)*14,y:r+(s-h.downhill)*10*a});n.save(),n.lineCap="round";for(let h=1;h<e.length;h+=1){let d=e[h-1],u=e[h],f=s-d.downhill,p=s-u.downhill;if(f<-.2||p<-.2||f>22||p>22)continue;let _=c(d),g=c(u),m=1-Ei(Math.max(f,p)/22,0,.82);if(n.globalAlpha=m,n.strokeStyle=u.kind==="carve"?o.carveTrace:u.kind==="flat"?o.flatTrace:u.kind==="powder"?o.powderTrace??o.flatTrace:u.kind==="press"?o.pressTrace??o.flatTrace:o.skidTrace,u.kind==="landing"){n.fillStyle=o.skidTrace,n.beginPath(),n.ellipse(g.x,g.y,u.width*a,u.width*a*.35,0,0,Math.PI*2),n.fill();continue}n.lineWidth=Math.max(.8,u.width*a),n.beginPath(),n.moveTo(_.x,_.y),n.lineTo(g.x,g.y),n.stroke()}n.restore()}function Wy(n,e={}){let{direction:t=1,intensity:i=0,palette:s=_o,scale:r=1,surface:o="groomed",x:a=0,y:l=0}=e;if(i<.05)return;n.save(),n.translate(a,l),n.scale(r,r),n.fillStyle=s.snowSpray;let c=o==="powder"?12:o==="ice"?4:7,h=o==="powder"?1.65:o==="slush"?1.3:1;for(let d=0;d<c;d+=1){let u=(d+1)/c,f=(7+d*5)*t;n.globalAlpha=i*(.72-u*.42),n.beginPath(),n.ellipse(f,8+d*2.4,(2.5+i*4*(1-u*.45))*h,(1.6+i*2.5*(1-u*.5))*h,t*-.28,0,Math.PI*2),n.fill()}n.restore()}function Xy(n,e={}){let{edge:t=0,palette:i=_o,quality:s=0,scale:r=1,x:o=0,y:a=0}=e;if(Math.abs(t)<.12||s<.35)return;let l=Math.sign(t)||1;n.save(),n.globalAlpha=Ei(s,0,1)*.82,n.strokeStyle=i.carveTrace,n.lineWidth=Math.max(1,r*.9),n.beginPath(),n.moveTo(o-l*4*r,a+7*r),n.lineTo(o-l*15*r,a+54*r),n.stroke(),n.restore()}function qy(n,e,t={}){let{boardTweak:i=0,palette:s=_o,rotation:r=0,scale:o=1,x:a=0,y:l=0}=t;n.save(),n.translate(a,l),n.rotate(r),n.scale(o,o);for(let c of e){let h=c.part.startsWith("board")||c.part.endsWith("boot"),d=c.part.endsWith("leg"),u=h?i:d?i*.45:0,[f,...p]=c.points;n.save(),n.rotate(u),n.beginPath(),n.moveTo(f.x,f.y);for(let _ of p)n.lineTo(_.x,_.y);n.closePath(),n.fillStyle=s[c.tone]??s.board,n.fill(),n.restore()}n.restore()}function Pf(n,e=_o){let t=n.getContext("2d");if(!t)throw new Error("Rider rendering requires a 2D canvas context");let i=Nh();return Object.freeze({beginFrame(){t.clearRect(0,0,n.width,n.height)},draw({camera:s,pose:r,state:o}){let a=Ei(Number(s.zoom)||1,.82,1),l=Ei(Math.min(n.width/700,n.height/500),1.1,2.4)*a,c=(o.position.across-s.position.across)*14*a,h=Gy(n,o.air),d=n.width/2+c,u=n.height*.78+(Number(s.dip)||0)*9,f=1-Ei((o.air??0)/3.5,0,.55);if(t.save(),t.translate(n.width/2,n.height/2),t.rotate(-(Number(s.roll)||0)),t.translate(-n.width/2,-n.height/2),i.update(o),Vy(t,i.points(),{cameraAcross:s.position.across,currentDownhill:o.position.downhill,groundY:u,palette:e,scale:l,surface:o.surface,viewportCenter:n.width/2}),r.handDrag>.55){let p=Math.sign(r.lean||o.edge||1);Xy(t,{edge:p,palette:e,quality:r.handDrag,scale:l,x:d+p*28*l,y:u+5*l})}Wy(t,{direction:-Math.sign(o.slipAngle||o.edge||1),intensity:r.spray,palette:e,scale:l,surface:o.surface,x:d,y:u+4*l}),t.save(),t.translate(d+9*l,u+11*l),t.rotate((Number(r.boardSwing)||0)*.7),t.scale(l*f,l*f),t.fillStyle="rgba(26, 65, 83, 0.13)",t.beginPath(),t.moveTo(-8,-51),t.lineTo(8,-51),t.lineTo(12,-44),t.lineTo(12,43),t.lineTo(8,51),t.lineTo(-8,51),t.lineTo(-12,43),t.lineTo(-12,-44),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=e.shadow,t.beginPath(),t.ellipse(d+9*l,u+14*l,28*l*f,9*l*f,0,0,Math.PI*2),t.fill(),t.restore(),qy(t,Rf(r),{palette:e,rotation:(r.airborne>0?r.bodySpin:Ei(Hy(r.bodyYaw)*.12+r.lean*.08,-.4,.4))+r.fallRotation,scale:l,x:d,y:u-h}),t.restore()}})}var _o,Ei,Hy,Dh=Un(()=>{Cf();_o=Object.freeze({board:"#f16e50",boardAccent:"#f4e9d8",boardBase:"#a8453f",boardEdge:"#f8fafc",boardSide:"#a94b40",boardShadow:"#29354e",boots:"#202a40",bootsTop:"#46536d",carveTrace:"rgba(71, 125, 148, 0.58)",flatTrace:"rgba(116, 174, 194, 0.18)",goggles:"#182438",goggleLens:"#8ed4d9",goggleStrap:"#29354e",helmet:"#f16e50",helmetBand:"#29354e",helmetHighlight:"#ff9b78",helmetSide:"#d75b49",helmetShadow:"#b74840",mitts:"#202a40",pantCuff:"#26324b",pants:"#657391",pantsFold:"#35415c",pantsSide:"#3c4967",pantsShadow:"#4c5a78",powderTrace:"rgba(85, 159, 185, 0.24)",pressTrace:"rgba(71, 125, 148, 0.32)",scarf:"#f6cd75",shadow:"rgba(15, 42, 58, 0.24)",skidTrace:"rgba(116, 174, 194, 0.3)",skin:"#dca67f",sleeve:"#f16e50",sleeveLight:"#ff9d77",sleeveShadow:"#bc4d42",snowSpray:"#b9e9f5",tee:"#f4e9d8",teeLight:"#fff9ec",teeShadow:"#d7c8b9"}),Ei=(n,e,t)=>Math.min(t,Math.max(e,n)),Hy=n=>Math.atan2(Math.sin(n),Math.cos(n))});function If({misalign:n,impact:e,meter:t}){return t>=100||n>Ul&&e>Yy?"crash":n>=Fl&&e>Fh?"sketchy":"clean"}var Fl,Ul,Fh,Yy,Ol,Uh=Un(()=>{Fl=Math.PI/9,Ul=Math.PI/3,Fh=1.2,Yy=2.5,Ol=.45});function ms(n){let e=Vf(n)*Jy;return Object.freeze({min:Zy+e,max:Bh+e})}function Hh(n){let e=ge(n,0),t=Ce(e,0,Bl),i=zf*(t**2/(2*Bl)+Math.max(0,e-Bl));return-.36*e-i+.2/.024*(Math.cos(e*.024-.3)-Math.cos(-.3))+.03/.061*(Math.cos(e*.061)-1)}function $i(n={},e="groomed"){let t=ge(n.across,0),i=ge(n.downhill,0),s=Of[e]??Of.groomed,r=(h,d)=>fv(h,d)*s.amplitude,o=.08,a=r(t,i),l=(r(t,i+o)-r(t,i-o))/(o*2),c=(r(t+o,i)-r(t-o,i))/(o*2);return Object.freeze({height:a,roll:c,roughness:s.roughness*(.65+Ce((Math.abs(l)+Math.abs(c))*.9,0,.35)),slope:l})}function sr(n={}){let e=n.position??{},t=ge(n.heading,0),i=Math.max(0,ge(n.speed,8)),s=n.velocity,r=s?{across:ge(s.across,0),downhill:ge(s.downhill,i)}:pv(i,t),o=Math.hypot(r.across,r.downhill),a=s?Math.atan2(r.across,r.downhill):t,l=!!n.switchRiding,c=ge(n.boardYaw,a+(l?Math.PI:0)),h=kh[n.surface]?n.surface:"groomed",d=$i(e,h),u=n.grounded===void 0?ge(n.air,0)<=0:!!n.grounded;return kl({air:Math.max(0,ge(n.air,0)),airtime:Math.max(0,ge(n.airtime,0)),boardLightness:Ce(ge(n.boardLightness,0),0,1),boardOffset:ge(n.boardOffset,Yt(c-a-(l?Math.PI:0))),boardRotation:ge(n.boardRotation,c),boardYaw:c,bodyHeave:ge(n.bodyHeave,d.height),bumpImpact:Ce(ge(n.bumpImpact,0),0,1),butter:Ce(ge(n.butter,0),0,1),carveQuality:Ce(ge(n.carveQuality,0),0,1),chatter:Ce(ge(n.chatter,0),0,1),compression:Ce(ge(n.compression,0),0,1),crouchAmount:Ce(ge(n.crouchAmount,0),0,1),crouchHeld:!!n.crouchHeld,crouchPressedAge:Math.max(0,ge(n.crouchPressedAge,10)),crashed:!!n.crashed,crashReason:n.crashReason??null,crashSpin:ge(n.crashSpin,0),crashTimer:Math.max(0,ge(n.crashTimer,0)),edge:Ce(ge(n.edge,0),-1,1),elapsed:Math.max(0,ge(n.elapsed,0)),flickBrake:Math.max(0,ge(n.flickBrake,0)),flickRecovery:Math.max(0,ge(n.flickRecovery,0)),frontEdge:Ce(ge(n.frontEdge,n.edge??0),-1,1),frontFootPressure:Ce(ge(n.frontFootPressure,.58),0,1),gForce:Math.max(0,ge(n.gForce,0)),gripLoad:Ce(ge(n.gripLoad,1),Hf,Gf),grounded:u,heading:a,hillRate:Number.isFinite(n.hillRate)?n.hillRate:null,impactMeter:Ce(ge(n.impactMeter,0),0,100),landingImpact:Math.max(0,ge(n.landingImpact,0)),lean:Ce(ge(n.lean,n.edge??0),-1,1),legOffset:Ce(ge(n.legOffset,0),-en,bn),load:Math.max(0,ge(n.load,u?1:0)),noseFloat:Ce(ge(n.noseFloat,0),0,1),popCharge:Ce(ge(n.preload,n.popCharge??0),0,1),popArcVelocity:Math.max(0,ge(n.popArcVelocity,0)),popElapsed:Math.max(0,ge(n.popElapsed,0)),popped:!!n.popped,position:{across:ge(e.across,0),downhill:ge(e.downhill,0)},pressAmount:Ce(ge(n.pressAmount,0),-1,1),preload:Ce(ge(n.preload,n.popCharge??0),0,1),preloadReleaseAge:Math.max(0,ge(n.preloadReleaseAge,kf+1)),rearEdge:Ce(ge(n.rearEdge,n.edge??0),-1,1),ride:ge(n.ride,0),skid:Ce(ge(n.skid,0),0,1),slash:Ce(ge(n.slash,0),0,1),slideSpin:ge(n.slideSpin,0),slipAngle:ge(n.slipAngle,Yt(c-a)),slopeGrade:Ce(ge(n.slopeGrade,$y),0,.78),speed:o,spinVelocity:ge(n.spinVelocity,0),angularMomentum:ge(n.angularMomentum,ge(n.spinVelocity,0)*1),stanceHeight:Ce(ge(n.stanceHeight,1-Ce(ge(n.crouchAmount,0),0,1)*(1-zl)),0,1),stance:n.stance==="goofy"?"goofy":"regular",steer:Ce(ge(n.steer,0),-1,1),steerHold:Math.max(0,ge(n.steerHold,0)),stumble:Math.max(0,ge(n.stumble,0)),surface:h,switchRiding:l,takeoffSlip:Ce(ge(n.takeoffSlip,0),0,Math.PI/2),turnRate:ge(n.turnRate,0),tweak:Ce(ge(n.tweak,0),-1,1),terrainHeight:ge(n.terrainHeight,d.height),terrainLaunchCooldown:Math.max(0,ge(n.terrainLaunchCooldown,0)),terrainPitch:ge(n.terrainPitch,d.slope),terrainRoll:ge(n.terrainRoll,d.roll),torsoYaw:ge(n.torsoYaw,a+(l?Math.PI:0)),torsoRotation:ge(n.torsoRotation,a+(l?Math.PI:0)),velocity:r,verticalVelocity:ge(n.verticalVelocity,0),worldHeight:ge(n.worldHeight,Wf({across:ge(e.across,0),downhill:ge(e.downhill,0)},h)+Math.max(0,ge(n.air,0))),worldVerticalVelocity:ge(n.worldVerticalVelocity,ge(n.verticalVelocity,0)+r.downhill*(d.slope-Yf(ge(e.downhill,0)))+r.across*d.roll),washout:Ce(ge(n.washout,0),0,1)})}function qf(n,e={}){if(n.crashed)return n;let t=Math.sign(n.velocity.across||e.x-n.position.across||n.edge||1);return sr({...n,air:0,angularMomentum:0,compression:1,crashed:!0,crashReason:"hazard",crashSpin:t,crashTimer:zh,grounded:!0,hillRate:null,legOffset:0,load:1,popArcVelocity:0,popElapsed:0,popped:!1,ride:0,slideSpin:0,stumble:0,takeoffSlip:0,velocity:{across:n.velocity.across*.45,downhill:n.velocity.downhill*.45}})}function Zf(n,e={},t=0,i={}){let s=Ce(ge(t,0),0,Ky),r=ms(n.position.downhill),o=Ce(ge(i.slopeGrade,Yf(n.position.downhill)),0,.78),a=kh[i.surface]?i.surface:n.surface,l=kh[a];if(n.crashed)return mv(n,s,o,a,i);let c=Ce(ge(e.carve,0),-1,1),h=Ce(ge(e.steer,0),-1,1),d=Ce(ge(e.crouch,0),0,1),u=Ce(ge(e.stretch,0),0,1),f=Ce(ge(e.press,0),-1,1),p=n.grounded??n.air<=0,_=d>.5,g=_&&!n.crouchHeld?0:n.crouchPressedAge+s,m=_?0:n.crouchHeld?s:n.preloadReleaseAge+s,y=Bf(n.stanceHeight,p?1-(1-zl)*d:_?0:u>.5?1:n.stanceHeight,(p?1-zl:1)*s/jy),S=Ce((1-y)/(1-zl),0,1),v=p?Ce(n.preload+s*(_?1/Qy:m<=kf?0:-1/ev),0,1):n.preload,E=n.pressAmount+(f-n.pressAmount)*wn(7,s),T=p&&n.stumble>0,x=n.lean+(c-n.lean)*wn(T?3.15:6.3,s),w=x*(.75+S*.25),L=w*(n.stance==="goofy"?-1:1)>=0,R=n.frontEdge+(w-n.frontEdge)*wn(L?10.8:8.8,s),C=n.rearEdge+(w-n.rearEdge)*wn(L?6.1:5.1,s),z=R*.58+C*.42,W=Math.abs(z),I=Math.sign(z)!==Math.sign(n.edge)&&Math.abs(n.edge)>.015&&W>.015,q={across:Math.cos(n.boardYaw),downhill:-Math.sin(n.boardYaw)},N=n.velocity.across*q.across+n.velocity.downhill*q.downhill,O=p&&a!=="powder"&&a!=="rail"&&(I&&Math.sign(z)===Math.sign(N)||Math.sign(c)!==Math.sign(n.edge)&&Math.sign(c)===Math.sign(N)&&Math.abs(n.edge)>.15)&&Math.abs(N)>3.8&&n.speed>16&&Math.abs(h)<.05&&n.flickRecovery<=0,K=p&&a==="rail"&&W>.22;if(O||K){let Ke={across:n.velocity.across*.62,downhill:n.velocity.downhill*.62};return kl({...n,compression:1,crashed:!0,crashReason:K?"rail-edge":"edge-catch",crashSpin:Math.sign(N||z)||1,crashTimer:zh,edge:z,elapsed:n.elapsed+s,frontEdge:R,gForce:1.6,lean:x,position:{across:n.position.across+Ke.across*s,downhill:n.position.downhill+Ke.downhill*s},rearEdge:C,skid:1,slopeGrade:o,speed:Math.hypot(Ke.across,Ke.downhill),surface:a,velocity:Ke})}let D={across:n.position.across+n.velocity.across*s,downhill:n.position.downhill+n.velocity.downhill*s},k=$i(D,a),H=s>0?(k.height-n.terrainHeight)/s:0,G=p?Ce(Math.abs(H)*(.09+n.speed*.004)*k.roughness*(1-S*.8),0,1):0,he=n.bumpImpact+(G-n.bumpImpact)*wn(G>n.bumpImpact?18:9,s),J=Ce(k.height,n.bodyHeave-.4,n.bodyHeave+.4),ce=n.bodyHeave+(J-n.bodyHeave)*wn(3.4,s),me=Ce((a==="powder"?.43:.54)-E*.24+Math.abs(c-n.lean)*.17,.16,.84),_e=a==="powder"&&p?Ce(n.speed/24*.7+(1-me)*.9-.24,0,1):0,re=Math.abs(h)>.05?Math.sign(h)===Math.sign(n.steer)?n.steerHold+s:s:0,xe=p&&d>.62&&Math.abs(h)>.3,We=n.butter>.5&&Math.abs(n.steer)>.3,Le=xe?1:0,Ne=n.butter+(Le-n.butter)*wn(Le>n.butter?12:10,s),De=p&&!xe&&Math.abs(h)>.05&&Math.sign(h)!==Math.sign(n.steer),V=De?.1:n.flickBrake,oe=Math.min(s,V);V=Math.max(0,V-s);let ae=De?1:n.boardLightness*Math.exp(-5*s),Ee=Math.max(0,n.flickRecovery-s);Math.abs(h)<.05&&Math.abs(n.steer)>.05&&(Ee=.3);let le=n.boardOffset,He=n.switchRiding,Pe=p?n.slideSpin*Math.exp(-uv*s):0;p&&(le+=n.slideSpin*s);let $e=(T?cv:lv)*(1-Ce(Math.abs(n.slideSpin),0,1))*s;if(p&&xe)le+=h*(4.2+Math.abs(E)*.5)*s;else if(p&&We&&Math.abs(h)<.05){let Ke=Math.round(le/Math.PI);Math.abs(Ke)%2===1&&(He=!He),le-=Ke*Math.PI,le-=Ce(le,-9.2*s,9.2*s)}else if(p&&Math.abs(h)>.05){let Ke=Ce((re-.08)/.22,0,1),mt=h*(.92+Ke*.48),Wt=2.1+7.1*ae*(1-W*.55-S*.35);le+=Ce(mt-le,-Wt*s,Wt*s)}else p&&(le-=Ce(le,-$e,$e));let Qe=Math.max(n.speed,.001),rt={across:n.velocity.across/Qe,downhill:n.velocity.downhill/Qe},B={across:rt.downhill,downhill:-rt.across},se=18-W*12,ot=W*Qe**2/se*(1+S*.3)*(n.impactMeter>70?.72:1),ut=p?n.gripLoad:1,ye=Ki*l.edgeGrip*(.6+W*1.6)*(1+S*.3)*Math.max(1,ut),Tt=p&&a!=="rail"&&ot>0?Ce((ot-ye)/ot,0,1):0,Ve=1-Ce((Math.abs(n.heading)-1.05)/.38,0,1),qe=p&&a!=="rail"?Math.sign(z)*Math.min(ot,ye)*Ve:0,A=p&&!xe&&a!=="rail"?Ce(-N*l.baseGrip*(.12+Ce((re-.16)/.32,0,1)*.08)*(1+S*.3),-2.6,2.6):0,M=Ce((re-.14)/.3,0,1),Y=p&&!xe?M*(1.4+Math.abs(le)*1.5)*l.skid:0,de=a==="powder"?1-_e:0,ie=p&&k.slope<-.05&&n.crouchAmount>S&&!xe?(n.crouchAmount-S)*1.4*Ce(-k.slope/.15,0,1):0,ve=p?l.drag*(.22+de*.24+Math.abs(E)*.05)*ut:0,Ae=p?n.speed**2*.0032*(1-S*.35):0,te=p&&!xe&&oe>0&&s>0?n.speed*.06*oe/(.1*s):0,ne=ve+Ae+Y+te,Me=p?{across:B.across*qe+q.across*A-rt.across*ne-Ki*k.roll*.18,downhill:Ki*Math.sin(o)+B.downhill*qe+q.downhill*A-rt.downhill*ne}:{across:0,downhill:0},P=p?{across:n.velocity.across+Me.across*s+rt.across*ie,downhill:n.velocity.downhill+Me.downhill*s+rt.downhill*ie}:{...n.velocity},Q=Math.hypot(P.across,P.downhill);if(p&&(Q<r.min||Q>r.max*(1-S*.1))){let Ke=Ce(Q,r.min,r.max*(1-S*.1)),mt=Ke/Math.max(Q,.001);P={across:P.across*mt,downhill:P.downhill*mt},Q=Ke}let j=Math.atan2(P.across,P.downhill),Se=p&&s>0?Yt(j-n.heading)/s:n.turnRate,ue=p?Yt(j+(He?Math.PI:0)+le):n.boardYaw,fe=p?0:n.angularMomentum,ze=p?0:n.spinVelocity,at=ge(e.jump,0)>0,pe=!p&&!n.popped&&n.airtime>0&&n.airtime<Oh,Ge=at&&(p||pe),et={across:n.position.across+P.across*s,downhill:n.position.downhill+P.downhill*s},Re=(Ke,mt)=>Xf({across:Ke,downhill:mt},a,i),_t=Re(n.position.across,n.position.downhill),Bt=Re(et.across,et.downhill),En=Ti(Re,n.position.across,n.position.downhill),ar=Ti(Re,et.across,et.downhill),qn=s>0?(ar-En)/s:ge(n.hillRate,0),Jl=qn/Math.max(Q,.001),ji=ge(i.timeToLip,1/0),Qi=ge(i.lipDistance,1/0),oi=ji>=0&&ji<=.1||Qi>=0&&Qi<=Q*.1,lr=ji>=0&&ji<1/0||Qi>=0&&Qi<1/0,vo=p&&oi?1.15:1,cr=n.preload,ai=Ge?(Lf+(nv-Lf)*cr)*vo:0,Li=n.popped,li=p?{leg:n.legOffset,onSnow:!0,ride:n.ride,velocity:Number.isFinite(n.hillRate)?n.worldVerticalVelocity:qn}:{height:n.worldHeight,leg:n.legOffset,onSnow:!1,velocity:n.worldVerticalVelocity};if(Ge){let Ke=p?Ce(En+ge(n.ride,0),_t-en,_t+bn):n.worldHeight,mt=iv*2*ai/Ki,Wt=(Ti(Re,n.position.across+P.across*mt,n.position.downhill+P.downhill*mt)-Ke)/mt,An=p?lr?ai:0:n.airtime<=tv?ai*.5:0;li={height:Ke,leg:p?Ke-_t:n.legOffset,onSnow:!1,velocity:Math.max(Wt+ai,li.velocity+An)},fe=Ce(h*(2.6+cr*1.5)+Se*.12,-6,6),v=0,Li=!0}let Ni=qn-li.velocity,Kl=!li.onSnow&&!_&&Ni>.5&&n.air<Ni*dv,Mo=Li||n.airtime>=Oh,Pt=yf(li,{carryFrom:En,carryTo:ar,snowFrom:_t,snowTo:Bt},{airTarget:Kl?.2:Mo?_?av:Lh:li.leg,soak:_?1:0},s),Yn=!p,vs=Yn&&!!Pt.touchdown,Ms=Pt.air,hr=Pt.onSnow?0:Yn?n.airtime+s:s,b=Pt.height,F=Pt.velocity,$=Pt.onSnow?0:Pt.velocity-qn,X=Bf(n.compression,Pt.onSnow?Ce(-Pt.leg/en,0,1):0,rv*s),Z=n.landingImpact*Math.exp(-4*s),be=Math.max(0,n.impactMeter-(5+8*(1-Ce(Q/Bh,0,1)))*s+(p?he*2.4*s:0)),Ue=!1,we=null,Ie=0,ke=0,Ye=n.skid;if(Yn||Ge||Pt.liftoff){Yn&&Math.abs(h)>.05&&Math.sign(h)!==Math.sign(n.steer)&&(fe=Ce(fe+h*.22,-6,6)),Yn&&(fe=Ce(fe+c*.08*s,-6,6));let Ke=.6+y*.4,mt=qn-n.worldVerticalVelocity,Wt=(Math.sqrt(mt**2+2*Ki*n.air)-mt)/Ki;if(Yn&&mt>0&&Wt<sv&&Math.abs(h)<.05){let An=Math.max(Wt,.05),So=fe/Ke+c*Uf,bs=Yt(ue+So*An-j),bo=Math.abs(bs)>Math.PI/2?bs-Math.sign(bs)*Math.PI:bs;fe=Ce(fe+Ce(-bo/An,-Nf*s,Nf*s)*Ke,-6,6)}ze=fe/Ke,ue=Yt(ue+(ze+(Yn?c*Uf:0))*s)}let ht=Pt.onSnow?Math.max(0,n.stumble-s):0,Be=0,lt=vs?Pt.touchdown.closing/Math.hypot(1,Jl):0,Dt=vs&&!n.popped&&n.airtime<Oh&&lt<Fh;if(vs&&!Dt){let Ke=Math.abs(Yt(ue+n.tweak*1.35-j)),mt=Math.min(Ke,Math.PI-Ke),Wt=n.popped?0:n.takeoffSlip,An=Ce(Math.max(0,mt-Wt)+Math.abs(ze)*.04,0,Math.PI/2),So=_&&g<=.12,bs=So?.4:_?.15:0;Z=lt*Ff*(1+1.5*Math.sin(An))*(1-bs),be=Ce(be+Math.max(0,Z-Df*Ff),0,100),He=Ke>Math.PI/2;let bo=If({impact:lt,meter:be,misalign:An});if(bo==="crash")Ue=!0,we=An>Ul?"landing-edge":"impact-overload",Ie=Math.sign(Yt(ue-j))||1,ke=zh;else{let su=1-Ce(ov*l.drag*Math.max(0,lt-Df)/Math.max(Q,.001),0,.5);if(bo==="sketchy"){let au=Ce((An-Fl)/(Ul-Fl),0,1);Ye=Math.max(Ye,.35+au*.45),Ee=.3,ht=Ol,su*=1-au*.24}else So&&(v=.5);let Mp=ms(et.downhill).min,ru=Math.max(Math.min(Q,Mp),Q*su),ou=ru/Math.max(Q,.001);P={across:P.across*ou,downhill:P.downhill*ou},Q=ru,Be=Ce(ze*hv,-1.5,1.5)}le=Yt(ue-j-(He?Math.PI:0))}let bt=Math.abs(Yt(ue-j)),wt=Pt.onSnow?0:Yn?n.takeoffSlip:Math.min(bt,Math.PI-bt);Pt.onSnow&&(fe=0,ze=0,Li=!1);let Zt=Yt(ue-j),Oe=p?Ce(Math.abs(le)/1.5*(.3+M*.4)*(1-(Math.sign(z)===Math.sign(h)?W*.35:0))+Tt*.6,0,.95):0;Ye=Math.max(Ye,n.skid+(Oe-n.skid)*wn(10,s)),p&&Oe<n.skid&&(Ye=Math.max(0,n.skid+(Oe-n.skid)*wn(10,s)));let nn=p&&a!=="rail"?Ce(W*1.6*(1-Tt*.7)*(1-Ce(Math.abs(le)/.7,0,1)*.85),0,1):0,xt=p?Ce((De?1:0)+Math.abs(h)*Ye*.5,0,1):0,ci=De?1:n.slash+(xt-n.slash)*wn(xt>n.slash?28:11,s),Jt=p?Ce(k.roughness*(.12+Q/Bh*.38)+W*(1-l.edgeGrip)*.55,0,1):0,Ss=Yt(Ms>0?ue-ze*.1:j+(He?Math.PI:0)),Fn=Yt(n.torsoYaw+Yt(Ss-n.torsoYaw)*wn(Ms>0?12:5,s)),hi=n.boardRotation+Yt(ue-n.boardYaw),pt=n.torsoRotation+Yt(Fn-n.torsoYaw),zt=Ms>0&&(Li||re<=hr+1e-9)?h:0,_n=n.tweak+(zt-n.tweak)*wn(Math.abs(zt)>Math.abs(n.tweak)?18:14,s);return kl({air:Ms,airtime:hr,boardLightness:ae,boardOffset:le,boardRotation:hi,boardYaw:ue,bodyHeave:ce,bumpImpact:he,butter:Ne,carveQuality:nn,chatter:Jt,compression:X,crouchAmount:S,crouchHeld:_,crouchPressedAge:g,crashed:Ue,crashReason:we,crashSpin:Ie,crashTimer:ke,edge:z,elapsed:n.elapsed+s,flickBrake:V,flickRecovery:Ee,frontEdge:R,frontFootPressure:me,gForce:Ce(Math.abs(qe)/Ki,0,1.8),gripLoad:Pt.onSnow?Ce(n.gripLoad+(Pt.load-n.gripLoad)*wn(10,s),Hf,Gf):1,grounded:Pt.onSnow,heading:j,hillRate:Pt.onSnow?s>0?qn:n.hillRate:null,impactMeter:be,landingImpact:Z,lean:x,legOffset:Pt.leg,load:Pt.load,noseFloat:_e,popCharge:v,popArcVelocity:0,popElapsed:0,popped:Li,position:et,pressAmount:E,preload:v,preloadReleaseAge:m,rearEdge:C,ride:Pt.onSnow?Pt.ride:0,skid:Ye,slash:ci,slideSpin:vs&&!Dt?Be:Pe,slipAngle:Zt,slopeGrade:o,speed:Q,angularMomentum:fe,spinVelocity:ze,stance:n.stance,stanceHeight:y,steer:h,steerHold:re,stumble:ht,surface:a,switchRiding:He,takeoffSlip:wt,turnRate:Se,tweak:_n,terrainHeight:k.height,terrainLaunchCooldown:0,terrainPitch:k.slope,terrainRoll:k.roll,torsoYaw:Fn,torsoRotation:pt,velocity:P,verticalVelocity:$,worldHeight:b,worldVerticalVelocity:F,washout:Tt})}var Zy,Bh,Bl,Jy,zf,Ky,Ki,$y,zh,zl,jy,Qy,ev,kf,tv,Lf,nv,iv,Oh,sv,Nf,rv,Hf,Gf,Df,ov,Ff,av,Uf,lv,cv,hv,uv,dv,kh,Of,Ce,ge,Vf,Yt,wn,Bf,fv,kl,pv,Wf,Xf,Yf,mv,Hl=Un(()=>{Uh();go();Zy=12,Bh=34,Bl=1200,Jy=10,zf=.12,Ky=1/20,Ki=9.81,$y=.34,zh=2,zl=.45,jy=.15,Qy=.5,ev=.15,kf=1,tv=.08,Lf=4,nv=6.4,iv=.7,Oh=.25,sv=.4,Nf=10,rv=12,Hf=.6,Gf=1.6,Df=4.5,ov=.08,Ff=2.5,av=-.3,Uf=.35,lv=9.2,cv=3.2,hv=.5,uv=8,dv=.28,kh=Object.freeze({groomed:Object.freeze({baseGrip:1,drag:1,edgeGrip:1,skid:1}),ice:Object.freeze({baseGrip:.16,drag:.45,edgeGrip:.25,skid:.7}),powder:Object.freeze({baseGrip:.7,drag:1.85,edgeGrip:.76,skid:1.12}),slush:Object.freeze({baseGrip:.85,drag:1.8,edgeGrip:.74,skid:1.35}),chop:Object.freeze({baseGrip:.82,drag:1.3,edgeGrip:.82,skid:1.2}),rail:Object.freeze({baseGrip:.02,drag:.3,edgeGrip:.02,skid:.3})}),Of=Object.freeze({groomed:Object.freeze({amplitude:.055,roughness:.2}),ice:Object.freeze({amplitude:.012,roughness:.07}),powder:Object.freeze({amplitude:.34,roughness:.95}),slush:Object.freeze({amplitude:.14,roughness:.55}),chop:Object.freeze({amplitude:.24,roughness:.9}),rail:Object.freeze({amplitude:0,roughness:0})}),Ce=(n,e,t)=>Math.min(t,Math.max(e,n)),ge=(n,e)=>Number.isFinite(n)?n:e,Vf=n=>Ce(Math.max(0,ge(n,0))/Bl,0,1);Yt=n=>Math.atan2(Math.sin(n),Math.cos(n)),wn=(n,e)=>1-Math.exp(-n*e),Bf=(n,e,t)=>n+Ce(e-n,-t,t),fv=(n,e)=>Math.sin(e*.38+n*.17)*.45+Math.sin(e*1.07-n*.42+.8)*.3+Math.sin(e*2.31+n*.77+1.7)*.15+Math.sin(e*.11+n*1.6)*.1;kl=n=>Object.freeze({...n,position:Object.freeze({...n.position}),velocity:Object.freeze({...n.velocity})}),pv=(n,e)=>({across:Math.sin(e)*n,downhill:Math.cos(e)*n}),Wf=(n,e)=>{let t=n.downhill;return Hh(t)+$i(n,e).height},Xf=(n,e,t)=>typeof t.surfaceHeight=="function"?t.surfaceHeight(n.across,n.downhill,e):Wf(n,e);Yf=n=>.36+zf*Vf(n)+Math.sin(n*.024-.3)*.2+Math.sin(n*.061)*.03,mv=(n,e,t,i,s)=>{let o=Math.exp(-(i==="ice"?.5:i==="powder"?3.4:1.9)*e),a={across:n.velocity.across*o,downhill:n.velocity.downhill*o+Ki*Math.sin(t)*e},l={across:n.position.across+a.across*e,downhill:n.position.downhill+a.downhill*e},c=$i(l,i),h=(m,y)=>Xf({across:m,downhill:y},i,s),d=h(l.across,l.downhill),u=Math.hypot(a.across,a.downhill),f=Math.atan2(a.across,a.downhill),p=Math.max(0,n.crashTimer-e),_=p<=0,g=_?f+(n.switchRiding?Math.PI:0):Yt(n.boardYaw+n.crashSpin*2.3*e);return kl({...n,air:0,airtime:0,boardRotation:n.boardRotation+Yt(g-n.boardYaw),boardYaw:g,boardOffset:0,butter:n.butter*Math.exp(-9*e),bumpImpact:n.bumpImpact*Math.exp(-10*e),carveQuality:0,chatter:n.chatter*Math.exp(-8*e),compression:n.compression*Math.exp(-5*e),crashed:!_,crashReason:_?null:n.crashReason,crashSpin:_?0:n.crashSpin,crashTimer:p,edge:_?0:n.edge*Math.exp(-6*e),elapsed:n.elapsed+e,flickBrake:0,flickRecovery:0,gForce:0,gripLoad:1,grounded:!0,heading:f,hillRate:null,impactMeter:Math.max(0,n.impactMeter-25*e),landingImpact:n.landingImpact*Math.exp(-3*e),lean:_?0:n.lean*Math.exp(-4*e),legOffset:0,load:1,position:l,popArcVelocity:0,popElapsed:0,popped:!1,angularMomentum:0,pressAmount:0,ride:d-Ti(h,l.across,l.downhill),skid:_?0:1,slash:n.slash*Math.exp(-8*e),slideSpin:0,slipAngle:_?0:Yt(n.boardYaw-f),slopeGrade:t,speed:u,stumble:0,surface:i,takeoffSlip:0,terrainHeight:c.height,terrainPitch:c.slope,terrainRoll:c.roll,torsoYaw:n.torsoYaw,velocity:a,verticalVelocity:0,washout:0,worldHeight:d,worldVerticalVelocity:0})}});function xs(n){let e=Math.max(0,Math.floor(_s(n)));if(rr.has(e))return rr.get(e);let t=Ai+e*Ri,i=e%2===0?-1:1,s=i*(6.9+Math.sin(e*1.7)*.25),r=1.2+Math.sin(e*1.7)*.14,o=Object.freeze({id:e,lip:t,start:t-gs,landingEnd:t+Gh,centerX:s,side:i,height:r});return rr.set(e,o),rr.size>32&&rr.delete(rr.keys().next().value),o}function Vh(n,e=0,t=0){if(!Number.isFinite(n)||!Number.isFinite(e)||n<0)return null;let i=Math.max(0,Math.round((n-Ai)/Ri)),s=xs(i);return Math.abs(n-s.lip)<=t&&Math.abs(e-s.centerX)<=2.4?s:null}function Jf(n,e){let t=Vh(e,n,12);return t&&e<=t.lip?t.lip-e:1/0}function Wh(n,e){if(!Number.isFinite(n)||!Number.isFinite(e))return 0;let t=Math.max(0,Math.floor((e-Ai+gs)/Ri)),i=xs(t),s=e-i.lip,r=Math.abs(n-i.centerX);if(s<-gs||s>=Gh||r>=Gl)return 0;let o=1-or((r-.9)/(Gl-.9)),a;return s<0?a=i.height*((s+gs)/gs)**2.35:s<6?a=i.height+(-.35-i.height)*or(s/6):s<18?a=-.35:a=-.35*(1-or((s-18)/12)),a*o}function Kf(n,e,t,i){let s=Math.max(.05,_s(t,.5)),r=Math.max(0,_s(i,0)),o=Math.hypot(n,e*.55),a=s*.85,l=s*1.8;return o<=a?-r*(1-(o/a)**2):o>=l?0:r*.22*Math.sin(Math.PI*(o-a)/(l-a))}function xv(n,e,t="powder"){let i=_s(n),s=_s(e),r=Hh(s),o=Math.max(0,Math.abs(i)-9.5),a=o**1.8*.021+Math.sin(s*.065+i*.12)*o*.025,l=Math.sin(s*.075+i*.095)*.22+Math.sin(s*.19-i*.16)*.085,c=$i({across:i,downhill:s},t).height;return r+wo(s)*.48+a+l+c}function Ot(n,e,t="powder"){let i=_s(n),s=_s(e),r=_v(i,s),o=r>0?($i({across:i,downhill:s},"groomed").height-$i({across:i,downhill:s},t).height)*r:0;return xv(i,s,t)+o+Wh(i,s)}function $f(n,e,t="powder"){let s=(Ot(n+.25,e,t)-Ot(n-.25,e,t))/.5,r=(Ot(n,e-.25,t)-Ot(n,e+.25,t))/(.25*2),o=Math.hypot(s,1,r);return Object.freeze({x:-s/o,y:1/o,z:-r/o})}var _s,gv,or,Ai,Ri,gs,Gh,Gl,rr,_v,xo=Un(()=>{Hl();Ao();_s=(n,e=0)=>Number.isFinite(n)?n:e,gv=(n,e,t)=>Math.min(t,Math.max(e,n)),or=n=>{let e=gv(n,0,1);return e*e*(3-2*e)},Ai=90,Ri=82,gs=28,Gh=30,Gl=3.6,rr=new Map;_v=(n,e)=>{let t=Math.max(0,Math.floor((e-Ai+gs+3)/Ri)),i=xs(t),s=Math.abs(n-i.centerX);if(s>=Gl)return 0;let r=e-i.lip;return(1-or((s-.9)/(Gl-.9)))*or((r+gs+3)/4)*(1-or((r-Gh+5)/8))}});var tp={};bp(tp,{createMountainWorld:()=>Fv});function Fv(n){let e=new Ll({canvas:n,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=ln,e.toneMapping=io,e.toneMappingExposure=1.03,e.shadowMap.enabled=!0,e.shadowMap.type=ls,e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),n.dataset.renderMode="webgl",qh.map=Ev(),qh.needsUpdate=!0;let t=new Ir;t.background=new je(11193305),t.fog=new Pr(11849433,220,480);let i=Nv();t.add(i);let s=Dv();t.add(s),t.add(new Qr(15333375,8559787,1.25));let r=new no(16774629,2.15);r.position.set(-40,90,35),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.left=-48,r.shadow.camera.right=48,r.shadow.camera.top=62,r.shadow.camera.bottom=-30,r.shadow.camera.near=.5,r.shadow.camera.far=185,r.shadow.bias=-3e-4,r.target.position.set(0,0,-25),t.add(r,r.target);let o=new hn(64,1,.08,980);o.rotation.order="YXZ";let a=Mf();t.add(a.group);let l=new Map,c=new Map,h=new Map,d=new Map,u=Nh(750),f=new Gt(new Et,new In({color:7576491,transparent:!0,opacity:.18,depthWrite:!1,side:Qt}));f.renderOrder=1,t.add(f);let p=[],_=new Et,g=new Float32Array(420);_.setAttribute("position",new Pn(g,3)),_.setDrawRange(0,0);let m=new Fr(_,new Xs({color:15399419,size:.16,transparent:!0,opacity:.8,depthWrite:!1,sizeAttenuation:!0}));t.add(m);let y={hazards:[],phase:"idle"},S=0,v=null,E=()=>{let N=Math.max(1,n.clientWidth||window.innerWidth),O=Math.max(1,n.clientHeight||window.innerHeight);e.setSize(N,O,!1),o.aspect=N/O,o.updateProjectionMatrix()};window.addEventListener("resize",E),E();let T=N=>{let O=Math.floor((N-yv)/Ln),K=Math.ceil((N+Xh)/Ln);for(let D=O;D<=K;D+=1){if(l.has(D))continue;let k=Av(D),H=Rv(D);t.add(k.mesh,H),l.set(D,{...k,grooves:H})}for(let[D,k]of l)D>=O&&D<=K||(t.remove(k.mesh,k.grooves),k.mesh.geometry.dispose(),k.grooves.geometry.dispose(),k.grooves.material.dispose(),l.delete(D))},x=N=>{let O=Math.max(0,Math.floor((N-50-Ai)/Ri)),K=Math.max(0,Math.ceil((N+Xh-Ai)/Ri));for(let D=O;D<=K;D+=1){if(d.has(D))continue;let k=Lv(xs(D));t.add(k),d.set(D,k)}for(let[D,k]of d)D>=O&&D<=K||(t.remove(k),k.traverse(H=>H.geometry?.dispose()),d.delete(D))},w=(N,O)=>{let K=Math.floor(O/Ln),D=l.get(K);if(!D)return 0;let k=D.acrossSamples,H=0;for(;H<k.length-2&&k[H+1]<N;)H+=1;let G=rn((N-k[H])/(k[H+1]-k[H]),0,1),he=rn((O-K*Ln)/Ln*D.rows,0,D.rows),J=Math.min(D.rows-1,Math.floor(he)),ce=he-J,me=k.length,_e=(We,Le)=>D.rutOffsets[We*me+Le],re=_e(J,H)*(1-G)+_e(J,H+1)*G,xe=_e(J+1,H)*(1-G)+_e(J+1,H+1)*G;return re*(1-ce)+xe*ce},L=()=>{v=null;for(let N of l.values()){let O=N.mesh.geometry.getAttribute("position"),K=N.mesh.geometry.getAttribute("color");for(let D=0;D<N.baseHeights.length;D+=1)N.rutOffsets[D]!==0&&(O.setY(D,N.baseHeights[D]),K.setXYZ(D,N.baseColors[D*3],N.baseColors[D*3+1],N.baseColors[D*3+2]));N.rutOffsets.fill(0),O.needsUpdate=!0,K.needsUpdate=!0,N.mesh.geometry.computeVertexNormals()}},R=N=>{if(y.phase!=="running"||N.air>.08||N.crashed)return;let O=N.position.across,K=N.position.downhill;if(v&&Math.hypot(O-v.across,K-v.downhill)<.34)return;v={across:O,downhill:K};let k=({powder:.16,chop:.095,slush:.075,groomed:.045,ice:.008,rail:0}[N.surface]??.08)*(.7+rn(N.compression||0,0,1)*.22+rn(N.gForce||0,0,1.5)*.12),H=.6+rn(N.skid||0,0,1)*.3;for(let[G,he]of l){if(K<G*Ln-2||K>(G+1)*Ln+2)continue;let J=he.mesh.geometry.getAttribute("position"),ce=he.mesh.geometry.getAttribute("color"),me=he.acrossSamples,_e=!1;for(let re=0;re<=he.rows;re+=1){let xe=G*Ln+re/he.rows*Ln;if(!(Math.abs(xe-K)>H*3.4))for(let We=0;We<me.length;We+=1){let Le=me[We];if(Math.abs(Le-O)>H*1.8)continue;let Ne=Kf(Le-O,xe-K,H,k),De=re*me.length+We,V=he.rutOffsets[De],oe=Ne<0?Math.min(V,Ne):V<0?V:Math.max(V,Ne);if(oe===V)continue;he.rutOffsets[De]=oe,J.setY(De,he.baseHeights[De]+oe);let ae=rn(-oe/.16,0,1),Ee=rn(oe/.04,0,1);ce.setXYZ(De,he.baseColors[De*3]*(1-ae*.13+Ee*.035),he.baseColors[De*3+1]*(1-ae*.08+Ee*.025),he.baseColors[De*3+2]*(1-ae*.04+Ee*.02)),_e=!0}}_e&&(J.needsUpdate=!0,ce.needsUpdate=!0,he.mesh.geometry.computeVertexNormals())}},C=N=>{let O=Eo(Math.max(0,N-20),Xh,{halfWidth:vv}),K=new Set(O.map(D=>D.index));for(let D of O){if(c.has(D.index))continue;let k=new Ut;for(let H of D.scenery){let G=H.kind==="rock"?ep(H.size):Yh(H.size);G.position.set(H.x,Ot(H.x,H.z),-H.z),G.rotation.y=Vl(H.z+H.x)*Math.PI*2,k.add(G)}t.add(k),c.set(D.index,k)}for(let[D,k]of c)K.has(D)||(t.remove(k),c.delete(D))},z=()=>{let N=new Set(y.hazards.map(O=>O.id));for(let O of y.hazards){if(h.has(O.id))continue;let K=Iv(O);K.position.set(O.x,Ot(O.x,O.worldDownhill),-O.worldDownhill),t.add(K),h.set(O.id,K)}for(let[O,K]of h)N.has(O)||(t.remove(K),h.delete(O))},W=N=>{u.update(N);let O=[],K=N.position.downhill,D=u.points();for(let H=1;H<D.length;H+=1){let G=D[H-1],he=D[H];if(K-G.downhill>5||he.downhill>K+.2||he.downhill-G.downhill>1.8)continue;let J=he.kind==="carve"?.035:he.kind==="skid"?.14:.07,ce=G.across-J,me=G.across+J,_e=he.across-J,re=he.across+J,xe=Ot(G.across,G.downhill)+w(G.across,G.downhill)+.022,We=Ot(he.across,he.downhill)+w(he.across,he.downhill)+.022;O.push(ce,xe,-G.downhill,me,xe,-G.downhill,_e,We,-he.downhill,me,xe,-G.downhill,re,We,-he.downhill,_e,We,-he.downhill)}let k=new Et;k.setAttribute("position",new nt(O,3)),f.geometry.dispose(),f.geometry=k},I=(N,O,K,D)=>{for(let H=p.length-1;H>=0;H-=1){let G=p[H];if(G.life-=D,G.life<=0){p.splice(H,1);continue}G.x+=G.vx*D,G.y+=G.vy*D,G.z+=G.vz*D,G.vy-=5.8*D}let k=rn(Number(O.spray)||0,0,1);if(y.phase==="running"&&N.air<.08&&k>.12){let H=Math.min(10,Math.ceil(k*7)),G=Math.sign(N.slipAngle||N.edge||1);for(let he=0;he<H&&p.length<140;he+=1){let J=Vl(N.elapsed*113+he*23);p.push({x:N.position.across+G*(.15+J*.22),y:K+.09,z:-N.position.downhill+.2,vx:G*(.7+J*2.9),vy:1.2+J*2.9,vz:1.2+Vl(J*17)*3.5,life:.3+J*.45})}}for(let H=0;H<p.length;H+=1){let G=p[H];g[H*3]=G.x,g[H*3+1]=G.y,g[H*3+2]=G.z}_.attributes.position.needsUpdate=!0,_.setDrawRange(0,p.length)};return Object.freeze({render:({camera:N={},pose:O={},state:K={}}={})=>{let D=K.position??{across:0,downhill:0},k=Number.isFinite(D.downhill)?D.downhill:0,H=Number.isFinite(D.across)?D.across:0,G=Number.isFinite(K.elapsed)?K.elapsed:0,he=G<S||G===0,J=G<S?0:rn(G-S,0,.05);S=G,he&&(u.reset(),p.length=0,L()),T(k),x(k),C(k),z(),R(K);let ce=Ot(H,k,K.surface)+w(H,k);a.update(K,O,ce,$f(H,k,K.surface)),W(K),I(K,O,ce,J);let me=Number.isFinite(N.position?.across)?N.position.across:H,_e=rn((Number(K.air)||0)/2,0,1),re=6.2+_e*2.3,xe=Ot(me-1.3,k-re,K.surface),We=Number.isFinite(K.worldHeight)?K.worldHeight:ce+(Number(K.air)||0),Le=Number.isFinite(K.heading)?K.heading:0,Ne=H+3+Math.sin(Le)*5.8,De=k+15+_e*20,V=N.rig;V?(o.position.set(V.position.x,V.position.y,V.position.z),o.lookAt(V.target.x,V.target.y,V.target.z)):(o.position.set(me-1.3,Math.max(xe+2.55,We+_e*3.8)-rn(N.dip||0,0,1)*.25,-k+re),o.lookAt(Ne,Ot(Ne,De,K.surface)+3.7,-De)),o.rotateZ(rn(N.roll||0,-.06,.06));let oe=60+(1-rn(N.zoom||1,.8,1))*20;Math.abs(o.fov-oe)>.04&&(o.fov=oe,o.updateProjectionMatrix()),i.position.copy(o.position),s.position.set(H*.14,Ot(0,k+315)+14,-k-315),r.position.set(H-42,ce+85,-k+38),r.target.position.set(H,ce-10,-k-28),r.target.updateMatrixWorld(),e.render(t,o)},setCourse(N={}){y={hazards:Array.isArray(N.hazards)?N.hazards:[],phase:N.phase??"idle"}}})}var Ln,Xh,yv,vv,qh,Wl,Mv,Sv,jf,bv,Qf,wv,Tv,rn,Vl,Nn,Ev,Av,Rv,Yh,ep,Cv,Pv,Iv,Lv,Nv,Dv,np=Un(()=>{Ph();Sf();Dh();Ao();xo();Ln=36,Xh=246,yv=24,vv=9.5,qh=new pn({vertexColors:!0,roughness:.98,metalness:0,side:Qt}),Wl=new pn({color:6641737,roughness:1}),Mv=new pn({color:9533795,roughness:1}),Sv=[1788994,2645070,3501400].map(n=>new pn({color:n,roughness:1,flatShading:!0})),jf=new pn({color:15397875,roughness:.98}),bv=new pn({color:6912899,roughness:.98,flatShading:!0}),Qf=new pn({color:5137004,roughness:1,flatShading:!0}),wv=new pn({color:14249040,roughness:.83,side:Qt,flatShading:!0}),Tv=new pn({color:4032403,roughness:.86,side:Qt,flatShading:!0}),rn=(n,e,t)=>Math.min(t,Math.max(e,n)),Vl=n=>{let e=Math.sin(n*127.1+31.37)*43758.5453;return e-Math.floor(e)},Nn=(n,e,t,i=0,s=0,r=0)=>{let o=new Gt(n,e);return o.position.set(i,s,r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o},Ev=()=>{let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256),i=58291,s=()=>(i=Math.imul(i,1664525)+1013904223|0,(i>>>0)/4294967296);for(let o=0;o<t.data.length;o+=4){let a=Math.floor(236+s()*19);t.data[o]=a,t.data[o+1]=Math.min(255,a+3),t.data[o+2]=Math.min(255,a+5),t.data[o+3]=255}e.putImageData(t,0,0);for(let o=0;o<115;o+=1){let a=s()*256,l=s()*256;e.strokeStyle=`rgba(94, 139, 157, ${.025+s()*.055})`,e.lineWidth=.6+s()*1.3,e.beginPath(),e.moveTo(a,l),e.quadraticCurveTo(a+9,l-1,a+18+s()*18,l+1),e.stroke()}let r=new Or(n);return r.wrapS=ss,r.wrapT=ss,r.colorSpace=ln,r.anisotropy=4,r},Av=n=>{let e=new Et,t=[],i=[],s=[],r=[],o=[];for(let g=-41;g<-10;g+=2.5)o.push(g);for(let g=-10;g<=10+1e-8;g+=.5)o.push(g);for(let g=12.5;g<41;g+=2.5)o.push(g);o.push(41);let a=o.length-1,l=48,c=new je(15397361),h=new je(13164002),d=new je,u=new je(13887977),f=new je(12048095),p=[];for(let g=0;g<=l;g+=1){let m=n*Ln+g/l*Ln;for(let y=0;y<=a;y+=1){let S=o[y],v=Ot(S,m);t.push(S,v,-m),p.push(v),s.push(S/8,m/8);let E=rn((Math.abs(S)-7.7)/8,0,1),T=(Math.sin(m*.33+S*.47)+Math.sin(m*.12-S*.81))*.019;d.copy(c).lerp(h,E).offsetHSL(0,0,T);let x=Wh(S,m);x>.15&&d.lerp(u,rn(x/1.1,0,1)*.3),x<-.1&&d.lerp(f,rn(-x/.35,0,1)*.14),i.push(d.r,d.g,d.b)}}for(let g=0;g<l;g+=1)for(let m=0;m<a;m+=1){let y=g*(a+1)+m,S=y+1,v=y+a+1,E=v+1;r.push(y,S,v,S,E,v)}e.setIndex(r),e.setAttribute("position",new nt(t,3)),e.setAttribute("color",new nt(i,3)),e.setAttribute("uv",new nt(s,2)),e.computeVertexNormals();let _=new Gt(e,qh);return _.receiveShadow=!0,_.frustumCulled=!1,{mesh:_,acrossSamples:o,baseHeights:Float32Array.from(p),baseColors:Float32Array.from(i),rutOffsets:new Float32Array(p.length),rows:l}},Rv=n=>{let e=[];for(let s=-11;s<=11;s+=1){let r=s*.76;for(let o=0;o<12;o+=1){let a=n*Ln+o*3,l=a+3;e.push(r,Ot(r,a)+.018,-a,r,Ot(r,l)+.018,-l)}}let t=new Et;t.setAttribute("position",new nt(e,3));let i=new Dr(t,new Ws({color:8826552,transparent:!0,opacity:.09,depthWrite:!1}));return i.frustumCulled=!1,i},Yh=(n=1)=>{let e=new Ut,t=3.9*n;Nn(new jt(.09*n,.17*n,t*.38,7),Wl,e,0,t*.19,0);for(let i=0;i<3;i+=1){let s=(1.15-i*.22)*n,r=(2.2-i*.15)*n,o=(1.5+i*.8)*n;Nn(new rs(s,r,7),Sv[i],e,0,o,0);let a=Nn(new rs(s*.54,r*.42,7),jf,e,0,o+r*.3,0);a.castShadow=!1}return e},ep=(n=1)=>{let e=new Ut,t=Nn(new vi(.86*n,0),bv,e,0,.48*n,0);t.scale.set(1.2,.68,.92),t.rotation.set(.18,.47,-.11);let i=Nn(new vi(.47*n,0),Qf,e,.52*n,.28*n,.2*n);i.scale.y=.66;let s=Nn(new rs(.52*n,.22*n,5),jf,e,-.1*n,.96*n,-.1*n);return s.rotation.z=-.18,e},Cv=()=>{let n=new Ut,e=Nn(new jt(.29,.39,14.5,10),Wl,n,0,.44,0);e.rotation.z=Math.PI/2;for(let t of[-1,1]){let i=Nn(new jt(.4,.4,.035,10),Mv,n,t*7.27,.44,0);i.rotation.z=Math.PI/2}for(let t of[-4.2,-1.5,2.7,5.2]){let i=Nn(new jt(.055,.13,1.15,6),Wl,n,t,.7,-.23);i.rotation.z=-.7}return n},Pv=()=>{let n=new Ut,e=Nn(new jt(.16,.28,8,8),Wl,n,0,1.72,0);e.rotation.z=Math.PI/2;for(let t of[-1,1]){let i=Yh(.6);i.position.set(t*4.1,0,.15),n.add(i)}return n},Iv=n=>n.kind==="jump"?Cv():n.kind==="duck"?Pv():n.variant==="rock"?ep(1.15):Yh(1.25),Lv=n=>{let e=new Ut;for(let[t,i,s]of[[n.lip-3,wv,1.75],[n.lip+26,Tv,1.2]]){let r=n.side*10.7,o=new Ut;o.position.set(r,Ot(r,t),-t),Nn(new jt(.025,.035,s,6),Qf,o,0,s*.5,0);let a=new ei;a.moveTo(0,0),a.lineTo(0,.35),a.lineTo(-n.side*.48,.22),a.closePath(),Nn(new as(a),i,o,0,s-.38,0),e.add(o)}return e},Nv=()=>{let n=new Mi(900,24,16),e=n.getAttribute("position"),t=[],i=new je(13163749),s=new je(6461626),r=new je;for(let a=0;a<e.count;a+=1){let l=rn((e.getY(a)/900+.08)*1.45,0,1);r.copy(i).lerp(s,l),t.push(r.r,r.g,r.b)}n.setAttribute("color",new nt(t,3));let o=new Gt(n,new In({vertexColors:!0,side:sn,fog:!1,depthWrite:!1,toneMapped:!1}));return o.renderOrder=-1,o},Dv=()=>{let n=new Ut,e=[new In({color:8625834,side:Qt,fog:!0}),new In({color:10664900,side:Qt,fog:!0}),new In({color:14477802,side:Qt,fog:!0})];for(let t=0;t<2;t+=1){let i=[],s=[],r=[];for(let c=0;c<=22;c+=1)r.push({x:-480+c*44,y:28+Vl(c*7+t*19)*43+Math.sin(c*.87+t)*20});let o=-t*80;for(let c=0;c<r.length-1;c+=1){let h=r[c],d=r[c+1];i.push(h.x,-70,o,h.x,h.y,o-8,d.x,d.y,o-8,h.x,-70,o,d.x,d.y,o-8,d.x,-70,o),s.push(h.x,h.y,o-8,d.x,d.y,o-8,h.x+7,h.y-13,o-5,d.x,d.y,o-8,d.x-8,d.y-16,o-5,h.x+7,h.y-13,o-5)}let a=new Et;a.setAttribute("position",new nt(i,3));let l=new Et;l.setAttribute("position",new nt(s,3)),n.add(new Gt(a,e[t])),n.add(new Gt(l,e[2]))}return n}});Ao();var Xe=Object.freeze({halfWidth:9.5,spawnDistance:44}),Tn=(n,e,t)=>Math.min(t,Math.max(e,n)),yo=n=>Tn(Math.min(n.width/1100,n.height/700),.72,1.75),Uv=(n,e)=>{let t=Tn((e/n.height-.36)/(.78-.36),0,1),i=0,s=1;for(let r=0;r<12;r+=1){let o=(i+s)/2;o*o*(3-2*o)<t?i=o:s=o}return(i+s)/2},Kh=(n,e,t,i,s)=>{let r=(1-Uv(n,e))*Xe.spawnDistance,o=1+.09*Math.sin((s+r)/34)*r/Xe.spawnDistance,a=pr(n,e)*o,l=To(s+r)-To(s);return n.width/2+(i+(l-t)/Xe.halfWidth)*a},Xl=(n,e,t,i,s)=>{for(let r=0;r<=48;r+=1){let o=e.height*(.36+(1-.36)*r/48),a=Kh(e,o,t,i,s);r===0?n.moveTo(a,o):n.lineTo(a,o)}},Ov=(n,e,t,i,s)=>{n.beginPath(),Xl(n,e,t,i,s);for(let r=48;r>=0;r-=1){let o=e.height*(.36+(1-.36)*r/48),a=r/48,l=Math.sin(r*.72+s*.12)*a*e.width*.002,c=e.width*(.003+a*a*.018)+l;n.lineTo(Kh(e,o,t,i,s)+i*c,o)}n.closePath(),n.fillStyle="#b9dbe8",n.fill(),n.beginPath(),Xl(n,e,t,i,s),n.strokeStyle="#f8ffff",n.lineWidth=Math.max(5,e.width*.006),n.stroke(),n.beginPath(),Xl(n,e,t,i,s),n.strokeStyle="#61cfe0",n.lineWidth=Math.max(1.5,e.width*.0013),n.stroke()},Jh=(n,e,t,i,s,r,o,a)=>{for(let[l,c,h,d]of t){let u=e.width*l+a,f=e.height*c,p=e.height*i,_=e.width*h*.5,g=u-_,m=u+_,y=(p-f)*.28;n.fillStyle=s,n.beginPath(),n.moveTo(g,p),n.lineTo(u-_*.53,f+y*1.4),n.lineTo(u-_*.22,f+y*.58),n.lineTo(u+d*_,f),n.lineTo(u+_*.27,f+y*.74),n.lineTo(u+_*.62,f+y*1.6),n.lineTo(m,p),n.closePath(),n.fill(),n.fillStyle=r,n.beginPath(),n.moveTo(u+d*_,f),n.lineTo(u+_*.27,f+y*.74),n.lineTo(m,p),n.lineTo(u+_*.1,p),n.lineTo(u-_*.09,f+y*1.6),n.closePath(),n.fill(),n.fillStyle=o,n.beginPath(),n.moveTo(u-_*.22,f+y*.58),n.lineTo(u+d*_,f),n.lineTo(u+_*.27,f+y*.74),n.lineTo(u+_*.08,f+y*.9),n.lineTo(u-_*.02,f+y*.72),n.lineTo(u-_*.11,f+y*1.05),n.closePath(),n.fill(),n.fillStyle="rgba(121, 177, 197, 0.2)",n.beginPath(),n.moveTo(u-_*.23,f+(p-f)*.23),n.lineTo(u,f),n.lineTo(u-_*.04,f+(p-f)*.23),n.closePath(),n.fill()}},Bv=(n,e,t,i)=>{let s=n.createLinearGradient(0,0,0,e.height*.6);s.addColorStop(0,"#58a7cc"),s.addColorStop(.62,"#b9e4ef"),s.addColorStop(1,"#effaff"),n.fillStyle=s,n.fillRect(0,0,e.width,e.height);let r=e.width*.76-t*4,o=e.height*.13,a=n.createRadialGradient(r,o,2,r,o,e.height*.28);a.addColorStop(0,"rgba(255,250,222,0.68)"),a.addColorStop(1,"rgba(255,250,222,0)"),n.fillStyle=a,n.fillRect(0,0,e.width,e.height*.48),n.fillStyle="#fff9e4",n.beginPath(),n.arc(r,o,e.height*.029,0,Math.PI*2),n.fill(),Jh(n,e,[[-.06,.17,.31,-.08],[.17,.08,.35,.04],[.43,.19,.34,-.1],[.7,.09,.37,.08],[1.04,.16,.36,-.06]],.42,"#c8dbe1","#a9c8d2","#f5fbfa",-t*2.5),Jh(n,e,[[-.07,.29,.27,.09],[.16,.2,.34,-.07],[.48,.27,.3,.06],[.78,.2,.35,-.08],[1.08,.27,.31,.07]],.51,"#9bbbc7","#739bac","#eff9fa",-t*5),Jh(n,e,[[-.11,.39,.33,.08],[.24,.32,.32,-.06],[.53,.38,.28,.07],[.87,.31,.34,-.08],[1.13,.4,.3,.04]],.59,"#6f9baa","#4c7d91","#d9eef1",-t*8);let l=n.createLinearGradient(0,e.height*.45,0,e.height);l.addColorStop(0,"#e3f5f6"),l.addColorStop(1,"#c3e0e8"),n.fillStyle=l,n.beginPath(),n.moveTo(0,e.height*.56),n.bezierCurveTo(e.width*.13,e.height*.46,e.width*.23,e.height*.56,e.width*.39,e.height*.5),n.bezierCurveTo(e.width*.57,e.height*.43,e.width*.65,e.height*.57,e.width*.79,e.height*.48),n.bezierCurveTo(e.width*.88,e.height*.44,e.width*.95,e.height*.54,e.width,e.height*.52),n.lineTo(e.width,e.height),n.lineTo(0,e.height),n.closePath(),n.fill();let c=n.createLinearGradient(0,e.height*.36,0,e.height);c.addColorStop(0,"#f6fcfc"),c.addColorStop(.55,"#ffffff"),c.addColorStop(1,"#f7fcff"),n.fillStyle=c,n.beginPath(),Xl(n,e,t,-1,i);for(let h=48;h>=0;h-=1){let d=e.height*(.36+(1-.36)*h/48);n.lineTo(Kh(e,d,t,1,i),d)}n.closePath(),n.fill();for(let h of[-1,1])Ov(n,e,t,h,i)},zv=(n,e,t,i,s,r)=>{let o=s==="powder"?4.8:2.8,a=Math.floor(i/o)*o,l=s==="ice"?.05:s==="powder"?.075:.11;n.save(),n.strokeStyle=s==="ice"?"#81c9d7":"#9bcbd4";for(let c=a;c<i+Xe.spawnDistance;c+=o){let h=c-i;if(h<.5||h>Xe.spawnDistance)continue;let d={...Xe,travel:i},u=On(e,t,{x:-Xe.halfWidth*.86,z:h},d),f=On(e,t,{x:Xe.halfWidth*.86,z:h},d),p=Math.sin(c*.75)*5*u.scale;n.globalAlpha=l*u.alpha*(.65+Math.min(r/34,1)*.35),n.lineWidth=Math.max(.7,u.scale*(s==="powder"?2.5:1.4)),n.beginPath(),n.moveTo(u.x,u.y),n.quadraticCurveTo((u.x+f.x)/2,u.y-4*u.scale,f.x,f.y),n.stroke()}n.restore()},kv=(n,e,t,i,s)=>{let r=.58+.42*Math.sin(i*.14+.8)**2,o=Tn((s-14)/20,0,1)*r;if(!(o<.1)){n.save(),n.strokeStyle="#ffffff",n.lineCap="round";for(let a=0;a<14;a+=1){let l=(a*8+i*(.65+a%3*.09))%Xe.spawnDistance,c=a%2?1:-1,h=On(e,t,{x:c*(Xe.halfWidth+3.5+a%3*2),z:l},{...Xe,travel:i}),d=(11+h.scale*42)*yo(e);n.globalAlpha=h.alpha*o*.28,n.lineWidth=Math.max(1,h.scale*2.2),n.beginPath(),n.moveTo(h.x-d*.5,h.y),n.quadraticCurveTo(h.x,h.y-4*h.scale,h.x+d,h.y-2*h.scale),n.stroke()}n.restore()}},Hv=(n,e,t,i)=>{let r=Math.floor(i/7.5)*7.5;n.save(),n.lineCap="round";for(let o=r;o<i+Xe.spawnDistance;o+=7.5){let a=o-i;if(!(a<1||a>Xe.spawnDistance))for(let l of[-1,1]){let c=On(e,t,{x:l*(Xe.halfWidth+1.8),z:a},{...Xe,travel:i}),h=On(e,t,{x:l*(Xe.halfWidth+9),z:a},{...Xe,travel:i});n.globalAlpha=c.alpha*.34,n.strokeStyle="#8bbac9",n.lineWidth=Math.max(1,c.scale*3.5),n.beginPath(),n.moveTo(c.x,c.y),n.quadraticCurveTo((c.x+h.x)/2,c.y-8*c.scale,h.x,h.y-3*c.scale),n.stroke()}}n.restore()},Gv=(n,e,t,i)=>{let s=Math.max(0,t-i.downhill),r=n.height*.78+s*Math.max(3.5,n.height*.006);return{x:n.width/2+(i.across-e)/Xe.halfWidth*pr(n,r),y:r,behind:s}},Vv=(n,e,t,i,s)=>{if(s.length<2)return;let r=s.map(a=>({...Gv(e,t,i,a),speed:a.speed})).filter(a=>a.y<=e.height+25);if(r.length<2)return;let o=yo(e);n.lineCap="round",n.lineJoin="round";for(let[a,l,c]of[[-10,9,"rgba(85,150,166,0.32)"],[10,9,"rgba(85,150,166,0.32)"],[-10,4,"rgba(255,255,255,0.92)"],[10,4,"rgba(255,255,255,0.92)"]]){n.beginPath(),n.moveTo(r[0].x+a*o,r[0].y);for(let h of r.slice(1))n.lineTo(h.x+a*o,h.y);n.strokeStyle=c,n.lineWidth=l*o,n.stroke()}for(let a=0;a<r.length;a+=3){let l=r[a],c=Tn(1-l.behind/28,0,1),h=Tn((l.speed||16)/25,.7,1.45),d=(20+a%4*5)*o,u=(8+a%5*2.1)*o*c*h;if(!(u<.5))for(let f of[-1,1])n.globalAlpha=c,n.fillStyle="rgba(93,151,166,0.27)",n.beginPath(),n.ellipse(l.x+f*d,l.y+u*.55,u*1.65,u*.65,0,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(l.x+f*d,l.y,u*1.2,u*.8,0,0,Math.PI*2),n.fill()}n.globalAlpha=1},Wv=(n,e,t,i,s=0,r=16,o=e.width/2)=>{let a=yo(e),l=e.height*.78,c=Tn(Math.abs(t),0,1),h=Tn(s/8,0,1);if(c<.05&&h<.08)return;let d=Tn(r/24,.75,1.5);for(let u of[-1,1]){let f=(.52+(u*t>0?c*1.1:c*.35)+h*.8)*d;for(let p=0;p<12;p+=1){let _=(i*2.7+p*.8)%11,g=o+u*(28+_*(5.2+c*3.4))*a,m=l+(_*2.3+Math.sin(p*2.1)*6)*a,y=(5+(11-_)*.95)*a*f;n.fillStyle="rgba(85,151,174,0.24)",n.beginPath(),n.ellipse(g,m+y*.45,y*1.42,y*.72,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.96)",n.beginPath(),n.ellipse(g,m,y*1.12,y*.8,0,0,Math.PI*2),n.fill()}}},Xv=(n,e,t)=>{if(t<=0)return;let i=yo(e),s=1-Tn(t/.8,0,1),r=e.width/2,o=e.height*.78;n.save(),n.globalAlpha=Tn(t*1.2,0,1);for(let a=0;a<18;a+=1){let l=a*Math.PI*2/18,c=(18+s*110+a%3*11)*i,h=(6+a%4*2.4)*i*(1-s*.55);n.fillStyle=a%3===0?"#b5e3e9":"#ffffff",n.beginPath(),n.ellipse(r+Math.cos(l)*c,o+Math.sin(l)*c*.45,h*1.3,h*.8,0,0,Math.PI*2),n.fill()}n.restore()},sp=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.28)":"rgba(45,104,114,0.16)",n.beginPath(),n.ellipse(e+i*.15,t+i*.06,i*.52,i*.13,0,0,Math.PI*2),n.fill(),n.fillStyle="#624535",n.fillRect(e-i*.06,t-i*.3,i*.12,i*.32);for(let r=0;r<3;r+=1){let o=t-i*(1-r*.24),a=t-i*(.32-r*.13),l=i*(.25+r*.105);n.fillStyle=s?r===1?"#17664e":"#0a463d":r===1?"#2a8b6b":"#176c57",n.beginPath(),n.moveTo(e,o),n.lineTo(e-l,a),n.lineTo(e+i*.04,a),n.closePath(),n.fill(),n.fillStyle=r===1?"#269976":"#1a856a",n.beginPath(),n.moveTo(e,o),n.lineTo(e+i*.04,a),n.lineTo(e+l,a),n.closePath(),n.fill(),n.fillStyle=s?"#0d4d43":"#1d765f",n.beginPath(),n.moveTo(e,o),n.lineTo(e+l,a),n.lineTo(e+l*.06,a),n.closePath(),n.fill(),n.strokeStyle="#e6f6f5",n.lineWidth=Math.max(1,i*.027),n.beginPath(),n.moveTo(e-l*.13,o+i*.08),n.lineTo(e-l*.45,o+(a-o)*.63),n.lineTo(e-l*.67,o+(a-o)*.68),n.stroke()}s&&(n.strokeStyle="rgba(229,106,65,0.8)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.ellipse(e,t+i*.02,i*.43,i*.1,0,0,Math.PI*2),n.stroke())},rp=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.26)":"rgba(45,104,114,0.15)",n.beginPath(),n.ellipse(e+i*.14,t+i*.06,i*.59,i*.15,0,0,Math.PI*2),n.fill(),n.fillStyle=s?"#374859":"#627889",n.beginPath(),n.moveTo(e-i*.44,t),n.lineTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.39,t-i*.25),n.lineTo(e+i*.46,t),n.closePath(),n.fill(),n.strokeStyle=s?"#273746":"#536d7b",n.lineWidth=Math.max(1.5,i*.025),n.stroke(),n.fillStyle=s?"#708b99":"#9bb9c2",n.beginPath(),n.moveTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.16,t-i*.31),n.lineTo(e-i*.21,t-i*.23),n.closePath(),n.fill(),n.strokeStyle="#effbfb",n.lineWidth=Math.max(2,i*.055),n.beginPath(),n.moveTo(e-i*.21,t-i*.32),n.lineTo(e+i*.03,t-i*.42),n.lineTo(e+i*.16,t-i*.33),n.stroke(),s&&(n.strokeStyle="rgba(229,106,65,0.85)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.moveTo(e-i*.43,t+i*.02),n.quadraticCurveTo(e,t+i*.16,e+i*.43,t+i*.02),n.stroke())},qv=(n,e,t,i)=>{let s=Eo(i,Xe.spawnDistance,{halfWidth:Xe.halfWidth}),r=s.flatMap(o=>o.scenery);r.sort((o,a)=>a.z-o.z);for(let o of r){let a=o.z-i;if(a<0||a>Xe.spawnDistance)continue;let l=On(e,t,{x:o.x,z:a},{...Xe,travel:i}),c=l.pathHalf/Xe.halfWidth*2.35*o.size;n.save(),n.globalAlpha=l.alpha*.92,$l(o.z)==="glow"&&(n.fillStyle="rgba(54,218,225,0.18)",n.beginPath(),n.ellipse(l.x,l.y,c*.65,c*.13,0,0,Math.PI*2),n.fill()),o.kind==="rock"?rp(n,l.x,l.y,c):sp(n,l.x,l.y,c),n.restore()}for(let o of s){if(o.index%8!==3)continue;let a=o.index*36+36/2-i;if(a<0||a>Xe.spawnDistance)continue;let l=o.index%16===3?-1:1,c=On(e,t,{x:l*(Xe.halfWidth+10),z:a},{...Xe,travel:i}),h=c.pathHalf/Xe.halfWidth;n.save(),n.globalAlpha=c.alpha*.8,n.fillStyle="#284f61",n.fillRect(c.x-h*.7,c.y-h*2.5,h*1.4,h*2.5),n.fillStyle="#e6f5f6",n.beginPath(),n.moveTo(c.x-h,c.y-h*2.5),n.lineTo(c.x,c.y-h*3.5),n.lineTo(c.x+h,c.y-h*2.5),n.closePath(),n.fill(),n.fillStyle="#ef9d65",n.fillRect(c.x-h*.2,c.y-h*1.2,h*.4,h*1.2),n.restore()}for(let o of s){if(o.biome!=="glow"||o.index%4!==0)continue;let a=o.index*36+3-i;if(!(a<0||a>Xe.spawnDistance))for(let l of[-1,1]){let c=On(e,t,{x:l*(Xe.halfWidth+4.5),z:a},{...Xe,travel:i}),h=c.pathHalf/Xe.halfWidth;n.save(),n.globalAlpha=c.alpha,n.fillStyle="rgba(53,219,222,0.25)",n.beginPath(),n.ellipse(c.x,c.y,h*1.3,h*.32,0,0,Math.PI*2),n.fill(),n.fillStyle="#24485c",n.fillRect(c.x-h*.16,c.y-h*2.5,h*.32,h*2.5),n.fillStyle="#55e2df",n.beginPath(),n.arc(c.x,c.y-h*2.55,h*.45,0,Math.PI*2),n.fill(),n.restore()}}},Yv=(n,e,t,i)=>{let s=Math.floor(i/10)*10;for(let r=s;r<i+Xe.spawnDistance;r+=10){let o=r-i;if(!(o<1||o>Xe.spawnDistance-1))for(let a of[-1,1]){let l=On(e,t,{x:a*(Xe.halfWidth+.55),z:o},{halfWidth:Xe.halfWidth,viewDistance:Xe.spawnDistance,travel:i}),c=yo(e)*l.scale,h=38*c,{x:d,y:u}=l;n.save(),n.globalAlpha=l.alpha,n.strokeStyle="rgba(55, 103, 123, 0.22)",n.lineWidth=Math.max(1,2*c),n.beginPath(),n.moveTo(d,u),n.lineTo(d+a*16*c,u+3*c),n.stroke(),n.strokeStyle="#e15f50",n.lineWidth=Math.max(1.5,3*c),n.beginPath(),n.moveTo(d,u),n.lineTo(d,u-h),n.stroke(),n.strokeStyle="#f58e71",n.lineWidth=Math.max(.8,c),n.beginPath(),n.moveTo(d-c*.75,u-2*c),n.lineTo(d-c*.75,u-h),n.stroke(),n.fillStyle="#c6b9aa",n.beginPath(),n.moveTo(d+2*c,u-h+c),n.lineTo(d-a*13*c+2*c,u-h+6*c),n.lineTo(d+2*c,u-h+11*c),n.closePath(),n.fill(),n.fillStyle="#f4e9d8",n.beginPath(),n.moveTo(d,u-h),n.lineTo(d-a*15*c,u-h+5*c),n.lineTo(d,u-h+10*c),n.closePath(),n.fill(),n.restore()}}},Zv=(n,e,t)=>{let i=t.pathHalf*2.08,s=Math.max(7,t.pathHalf/Xe.halfWidth*.72),{x:r,y:o}=t;n.fillStyle="rgba(25,53,63,0.22)",n.beginPath(),n.ellipse(r,o+s*.7,i*.52,s*.7,0,0,Math.PI*2),n.fill(),n.fillStyle="#a9d7db",n.beginPath(),n.moveTo(r-i*.43,o+s*1.6),n.lineTo(r-i*.4,o-s*.6),n.lineTo(r+i*.4,o-s*.6),n.lineTo(r+i*.43,o+s*1.6),n.closePath(),n.fill(),n.fillStyle="#523929",n.fillRect(r-i/2,o-s,i,s*1.12),n.fillStyle="#ac7044",n.fillRect(r-i/2,o-s,i,s*.3),n.fillStyle="#f2f9f5",n.fillRect(r-i*.48,o-s*1.12,i*.96,s*.2),n.strokeStyle="#2d2928",n.lineWidth=Math.max(2,s*.12),n.strokeRect(r-i/2,o-s,i,s*1.12),n.strokeStyle="rgba(35,28,24,0.45)",n.lineWidth=Math.max(1,s*.07);for(let a of[-.32,-.08,.22])n.beginPath(),n.moveTo(r+i*a,o-s*.52),n.lineTo(r+i*(a+.12),o-s*.2),n.stroke();for(let a of[-1,1])n.fillStyle="#cf9c6f",n.beginPath(),n.ellipse(r+a*i*.49,o-s*.42,s*.35,s*.49,0,0,Math.PI*2),n.fill()},Jv=(n,e,t)=>{let i=t.pathHalf/Xe.halfWidth/32,s=t.x,r=t.y-90*i,o=t.pathHalf*1.04;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(s,t.y+3*i,o*.6,8*i,0,0,Math.PI*2),n.fill(),n.fillStyle="#222b43",n.beginPath(),n.ellipse(s,r,22*i,13*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#222b43",n.lineCap="round",n.lineWidth=Math.max(3,10*i),n.beginPath(),n.moveTo(s-8*i,r),n.quadraticCurveTo(s-o*.58,r-45*i,s-o,r+5*i),n.moveTo(s+8*i,r),n.quadraticCurveTo(s+o*.58,r-45*i,s+o,r+5*i),n.stroke(),n.fillStyle="#f0a65c",n.beginPath(),n.moveTo(s,r+2*i),n.lineTo(s-4*i,r+10*i),n.lineTo(s+4*i,r+10*i),n.closePath(),n.fill()},Kv=(n,e,t)=>{let i=t.pathHalf/Xe.halfWidth/32,s=t.y-83*i,r=t.pathHalf*1.04,o=t.x;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(o,t.y+3*i,r*.68,8*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#52382e",n.lineCap="round",n.lineWidth=Math.max(5,15*i),n.beginPath(),n.moveTo(o-r,s-9*i),n.quadraticCurveTo(o,s+9*i,o+r,s-9*i),n.stroke(),n.fillStyle="#1b624f";for(let a of[-.72,-.36,.08,.47,.77]){let l=o+r*a,c=s-10*i;n.fillStyle="#0b584e",n.beginPath(),n.moveTo(l-16*i,c+5*i),n.lineTo(l+2*i,c-12*i),n.lineTo(l+16*i,c+5*i),n.closePath(),n.fill(),n.fillStyle="#249575",n.beginPath(),n.moveTo(l+2*i,c-12*i),n.lineTo(l+16*i,c+5*i),n.lineTo(l+2*i,c+5*i),n.closePath(),n.fill()}},ip=(n,e,t)=>{let i=Tn(e.pathHalf*.12,9,31),s=e.y-(t==="jump"?i*3:e.pathHalf/Xe.halfWidth*3.5+i*1.5);n.globalAlpha=e.alpha,n.fillStyle=t==="jump"?"#dc754e":"#684f90",n.beginPath(),n.arc(e.x,s,i,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=Math.max(2,i*.16),n.lineCap="round",n.lineJoin="round",n.beginPath();let r=t==="jump"?-1:1;n.moveTo(e.x,s-r*i*.42),n.lineTo(e.x,s+r*i*.42),n.moveTo(e.x-i*.32,s+r*i*.1),n.lineTo(e.x,s+r*i*.42),n.lineTo(e.x+i*.32,s+r*i*.1),n.stroke()},$v=(n,e,t,i,s)=>{for(let r of[...s].sort((o,a)=>a.z-o.z)){if(r.z<-2||r.z>Xe.spawnDistance)continue;let o=On(e,t,r,{...Xe,travel:i});if(n.save(),n.globalAlpha=o.alpha,r.kind==="jump")Zv(n,e,o),r.z>3&&ip(n,o,"jump");else if(r.kind==="duck")r.variant==="bird"?Jv(n,e,o):Kv(n,e,o),r.z>3&&ip(n,o,"duck");else{let a=o.pathHalf/Xe.halfWidth*2.35;r.variant==="rock"?rp(n,o.x,o.y,a,!0):sp(n,o.x,o.y,a,!0)}n.restore()}};async function $h(n){if(n.worldCanvas&&n.runtime)try{let{createMountainWorld:r}=await Promise.resolve().then(()=>(np(),tp)),o=r(n.worldCanvas);n.runtime.world3d=o,n.canvas.style.visibility="hidden",n.events.addEventListener("course:update",a=>{o.setCourse(a.detail)}),n.events.addEventListener("rider:update",a=>{o.render(a.detail)});return}catch(r){console.warn("3D mountain renderer unavailable; using the canvas view",r),n.worldCanvas.style.display="none"}let e=n.canvas.getContext("2d");if(!e)throw new Error("Mountain rendering requires a 2D canvas context");let t=0,i=[],s={crashFx:0,distance:0,hazards:[],phase:"idle"};n.events.addEventListener("course:update",r=>{s={crashFx:Number(r.detail?.crashFx)||0,distance:Number(r.detail?.distance)||0,hazards:Array.isArray(r.detail?.hazards)?r.detail.hazards:[],phase:r.detail?.phase??"idle"}}),n.events.addEventListener("rider:update",r=>{let o=r.detail?.state,a=r.detail?.camera,l=Number(o?.position?.across)||0,c=Number(a?.position?.across)||0,h=Tn(Number(a?.zoom)||1,.82,1),d=hu(n.canvas,l,c,h,Xe.halfWidth),u=s.phase==="idle"?0:Number(o?.position?.downhill)||s.distance;if(s.phase==="idle"?(t=0,i=[]):s.phase==="running"&&(t=Math.max(0,u),(o?.air??0)<.08&&(i.length===0||t-i.at(-1).downhill>=.45)&&i.push({across:l,downhill:t,speed:Number(o?.speed)||16}),i=i.filter(f=>t-f.downhill<42)),e.save(),e.translate(n.canvas.width/2,n.canvas.height/2),e.rotate(-(Number(a?.roll)||0)),e.translate(-n.canvas.width/2,-n.canvas.height/2),Bv(e,n.canvas,d,u),zv(e,n.canvas,d,u,o?.surface??"powder",Number(o?.speed)||0),Hv(e,n.canvas,d,u),Vv(e,n.canvas,d,t,i),s.phase==="running"&&(o?.air??0)<.08){let f=o?.surface==="ice"?0:Tn((Number(o?.slash)||0)*.85+(Number(o?.skid)||0)*.5+(Number(o?.washout)||0)*.35,0,1),p=Math.sign(o?.slipAngle||o?.edge||r.detail?.input?.carve||1),_=n.canvas.width/2+(l-c)*14*h;o?.surface!=="ice"&&Wv(e,n.canvas,p*f,t,Number(o?.landingImpact)||0,Number(o?.speed)||16,_)}kv(e,n.canvas,d,u,Number(o?.speed)||0),qv(e,n.canvas,d,u),Yv(e,n.canvas,d,u),$v(e,n.canvas,d,u,s.hazards),Xv(e,n.canvas,s.crashFx),e.restore()})}xo();Hl();xo();var Pi=(n,e=0)=>Number.isFinite(n)?n:e,jh=()=>Object.freeze({active:null});function op(n,e,t,i={}){let s=!!(e?.grounded??e?.air<=0),r=!!(t?.grounded??t?.air<=0),o=n?.active??null,a=null;if(s&&!r){let l=Vh(Pi(t?.position?.downhill),Pi(t?.position?.across),6);o=l?{featureId:l.id,takeoffRotation:Pi(t?.boardRotation),peakAir:Pi(t?.air),maxRotation:0,grabTime:0}:null}if(o&&!r){let l=Math.max(0,Math.min(.1,Pi(t?.elapsed)-Pi(e?.elapsed)));o={...o,peakAir:Math.max(o.peakAir,Pi(t?.air)),maxRotation:Math.max(o.maxRotation,Math.abs(Pi(t?.boardRotation)-o.takeoffRotation)),grabTime:o.grabTime+(Pi(i.grab)>.5?l:0)}}if(o&&!s&&r){if(!t.crashed&&o.peakAir>=.45){let l=Math.floor((o.maxRotation+.32)/Math.PI),c=o.grabTime>=.12,h=Math.round(150+l*140+(c?80:0)+Math.min(100,o.peakAir*15));a=Object.freeze({featureId:o.featureId,label:["SIDE HIT",l?`${l*180}\xB0`:null,c?"GRAB":null].filter(Boolean).join(" \xB7 "),points:h})}o=null}return t?.crashed&&(o=null),Object.freeze({tracker:Object.freeze({active:o}),award:a})}var ap="slopestyle.bestDistance",Qh="slopestyle.bestScore",lp=16,jv=44,dp=1.25,Yl=(n,e,t)=>Math.min(t,Math.max(e,n)),Qv=n=>{let e=Number.isFinite(n?.velocity?.downhill)?n.velocity.downhill:Number(n?.speed)||0;return n?.crashed?Math.max(0,e):Math.max(ms(n?.position?.downhill).min,e)},cp=(n,e)=>n.map(t=>({...t,z:t.worldDownhill-e})),eM=(n,e,t={})=>{if(n.passed||Math.abs(n.z)>dp)return!1;let i=Math.abs(n.x-e.position.across),s=Number(e.air)||0;if(n.kind==="jump")return i<(n.radius??Xe.halfWidth*.94)&&s<.5;if(n.kind==="duck"){let r=n.variant==="bird"?.86:.88;return i<(n.radius??Xe.halfWidth*r)&&(Number(t.crouch)||0)<.75}return s<.35&&i<1.05},fp=(n,e)=>n+Math.random()*(e-n),hp=n=>{try{return Math.max(0,Number(localStorage.getItem(n))||0)}catch{return 0}},eu=(n,e)=>{try{localStorage.setItem(n,String(Math.floor(e)))}catch{}},tM=()=>{if(document.querySelector("[data-slopestyle-styles]"))return;let n=document.createElement("style");n.dataset.slopestyleStyles="true",n.textContent=`
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
  `,document.head.append(n)},nM=()=>{let n,e,t,i=0,s=0,r=()=>(n||(n=new(window.AudioContext||window.webkitAudioContext)),n.state==="suspended"&&n.resume(),n),o=c=>{if(t)return t;let h=Math.floor(c.sampleRate*2);t=c.createBuffer(1,h,c.sampleRate);let d=t.getChannelData(0),u=19341;for(let f=0;f<h;f+=1)u=Math.imul(u,1664525)+1013904223|0,d[f]=u/2147483648*.5;return t},a=(c,h,d)=>{let u=r(),f=u.createBufferSource(),p=u.createBiquadFilter(),_=u.createGain();f.buffer=o(u),p.type="bandpass",p.frequency.value=h,p.Q.value=.5,_.gain.setValueAtTime(.001,u.currentTime),_.gain.linearRampToValueAtTime(d,u.currentTime+.012),_.gain.exponentialRampToValueAtTime(.001,u.currentTime+c),f.connect(p),p.connect(_),_.connect(u.destination),f.start(u.currentTime,0,c)},l=()=>{if(e)return;let c=r(),h=c.createBufferSource();h.buffer=o(c),h.loop=!0;let d=(u,f)=>{let p=c.createBiquadFilter();p.type=u,p.frequency.value=f;let _=c.createGain();return _.gain.value=0,h.connect(p),p.connect(_),_.connect(c.destination),{filter:p,gain:_}};e={source:h,snow:d("highpass",1600),skid:d("bandpass",900),wind:d("lowpass",420)},h.start()};return Object.freeze({startRide(){l(),i=0,s=0},stopRide(){if(!e)return;let c=r();if(e){for(let h of[e.snow,e.skid,e.wind])h.gain.gain.setTargetAtTime(1e-4,c.currentTime,.06);e.source.stop(c.currentTime+.2),e=void 0}},ride(c){if(!e)return;let h=r(),d=Yl(c.speed/jv,0,1),u=c.air<=0&&!c.crashed?1:0,f={groomed:.034,powder:.014,ice:.048,slush:.036,chop:.042,rail:.02}[c.surface]??.03,p=c.surface==="ice"?2500:c.surface==="powder"?900:1600;e.snow.filter.frequency.setTargetAtTime(p+d*700,h.currentTime,.07),e.snow.gain.gain.setTargetAtTime(u*f*(.25+d*.75),h.currentTime,.04),e.skid.gain.gain.setTargetAtTime(u*(c.skid*.046+c.slash*.016),h.currentTime,.035),e.wind.gain.gain.setTargetAtTime((.005+d*d*.045)*(1-(c.crouchAmount??0)*.2),h.currentTime,.09),c.slash>.42&&i<=.42&&a(.14,750,.02),c.landingImpact>1.5&&s<=1.5&&a(.2,280,.04),i=c.slash,s=c.landingImpact},jump(){a(.09,1200,.015)},crash(){a(.32,220,.09)},fall(){a(.3,330,.035)}})},iM=n=>(n.innerHTML=`
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
  `,Object.freeze({update({distance:e,score:t,speed:i,trickNotice:s,trickNoticeTimer:r}){n.querySelector("[data-distance]").textContent=`${Math.floor(e)} m`,n.querySelector("[data-speed]").innerHTML=`${Math.round(i*3.6)}<span class="hud-unit">km/h</span>`,n.querySelector("[data-score]").textContent=String(Math.floor(t));let o=n.querySelector("[data-trick]");if(o.classList.toggle("is-hidden",!s||r<=0),s&&r>0){o.textContent=s.label;let a=document.createElement("strong");a.textContent=`+${s.points}`,o.append(a)}}})),sM=(n,e)=>{let t=Math.random(),i="steer",s=e+Xe.spawnDistance,r=xs(Math.max(0,Math.round((s-Ai)/Ri))),o=s>=r.start-4&&s<=r.lip+42;if(!o&&n.dodged>4&&t>.82?i="duck":!o&&n.dodged>2&&t>.64&&(i="jump"),i==="jump")return{id:n.nextHazardId,kind:i,passed:!1,variant:"fallen-log",radius:7.2,worldDownhill:s,x:0,z:Xe.spawnDistance};if(i==="duck")return{id:n.nextHazardId,kind:i,passed:!1,variant:"branch",radius:3.9,worldDownhill:s,x:0,z:Xe.spawnDistance};let a=[-.66,-.34,0,.34,.66],l=a.map((h,d)=>d).filter(h=>h!==n.lastLane&&(!o||Math.abs(a[h]*Xe.halfWidth-r.centerX)>3.4)),c=l[Math.floor(Math.random()*l.length)];return n.lastLane=c,{id:n.nextHazardId,kind:i,passed:!1,variant:Math.random()>.38?"pine":"rock",worldDownhill:s,x:a[c]*Xe.halfWidth+fp(-.18,.18),z:Xe.spawnDistance}},rM=n=>fp(Yl(40-n*.25,28,40),Yl(58-n*.35,37,55)),up=(n,e=0)=>({best:n,bestScore:e,crashFx:0,distance:0,score:0,trickPoints:0,trickNotice:null,trickNoticeTimer:0,dodged:0,fallTimer:0,finalDistance:0,hazards:[],lastLane:-1,lastRiderDownhill:0,nextHazardId:1,phase:"idle",spawnLeft:12,speed:0});async function tu(n){tM();let e=nM(),t=iM(n.hudRoot),i=up(hp(ap),hp(Qh)),s,r=0,o,a=jh(),l=()=>{let y=n.canvas.getBoundingClientRect(),S=Math.min(window.devicePixelRatio||1,2);n.canvas.width=Math.max(1,Math.floor(y.width*S)),n.canvas.height=Math.max(1,Math.floor(y.height*S))},c=()=>{n.events.dispatchEvent(new CustomEvent("course:update",{detail:Object.freeze({crashFx:i.crashFx,distance:i.distance,hazards:Object.freeze(i.hazards.map(y=>Object.freeze({...y}))),phase:i.phase})}))},h=()=>{n.overlayRoot.innerHTML=`
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
    `},f=()=>{i={...up(i.best,i.bestScore),phase:"running",spawnLeft:4,speed:lp},s=void 0,r=0,o=void 0,a=jh(),n.overlayRoot.innerHTML="",n.events.dispatchEvent(new CustomEvent("rider:reset",{detail:{speed:lp}})),c(),e.startRide()},p=(y,S)=>{if(i.finalDistance=i.distance,i.crashFx=.8,i.best=Math.max(i.best,Math.floor(i.distance)),i.bestScore=Math.max(i.bestScore,Math.floor(i.score)),eu(ap,i.best),eu(Qh,i.bestScore),e.stopRide(),y==="cliff"){i.phase="falling",i.fallTimer=1.35,e.fall(),u();return}i.phase="crashed",y==="hazard"&&n.events.dispatchEvent(new CustomEvent("rider:impact",{detail:S})),e.crash(),d()},_=()=>{i.dodged+=1},g=(y,S)=>{let{input:v,state:E}=y,T=Qv(E),x=Number.isFinite(E.position.downhill)?E.position.downhill:i.lastRiderDownhill,w=Math.max(0,x-i.lastRiderDownhill);if(i.lastRiderDownhill=x,e.ride(E),Math.abs(E.position.across)>(n.runtime?.world3d?38:Xe.halfWidth)){p("cliff");return}if(v.jump>0&&r<=0&&e.jump(),r=v.jump,i.speed=E.speed,i.distance+=Math.max(w,T*S),i.score=Math.floor(i.distance)+i.trickPoints,i.trickNoticeTimer=Math.max(0,i.trickNoticeTimer-S),i.spawnLeft-=w,i.spawnLeft<=0){let R=sM(i,x);R&&(i.hazards.push(R),i.nextHazardId+=1),i.spawnLeft=rM(i.speed)}i.hazards=cp(i.hazards,x);for(let R of i.hazards){if(eM(R,E,v)){p("hazard",R);return}!R.passed&&R.z<-dp&&(R.passed=!0,_())}i.hazards=i.hazards.filter(R=>R.z>-5);let L=op(a,o??E,E,y.pose);a=L.tracker,o=E,L.award&&(i.trickPoints+=L.award.points,i.score=Math.floor(i.distance)+i.trickPoints,i.trickNotice=L.award,i.trickNoticeTimer=1.9,i.bestScore=Math.max(i.bestScore,i.score),eu(Qh,i.bestScore))},m=y=>{i.fallTimer-=y,i.fallTimer<=0&&(i.phase="crashed",e.crash(),d())};n.events.addEventListener("rider:update",y=>{let S=performance.now(),v=s===void 0?0:Yl((S-s)/1e3,0,.05);s=S,i.crashFx=Math.max(0,i.crashFx-v),i.phase==="running"?g(y.detail,v):i.phase==="falling"&&m(v),i.phase!=="running"&&(i.hazards=cp(i.hazards,Number(y.detail?.state?.position?.downhill)||0)),t.update(i),c()}),window.addEventListener("resize",l),l(),t.update(i),c(),h()}Uh();go();var Je=(n,e,t)=>Math.min(t,Math.max(e,n)),St=(n,e=0)=>Number.isFinite(n)?n:e,oM=n=>Math.atan2(Math.sin(n),Math.cos(n));function aM(n,e={}){let t=Math.abs(n.edge),i=Je((St(n.speed,8)-8)/22,0,1),s=Math.sign(n.edge||n.lean||1),r=St(n.elapsed),o=n.surface!=="rail"&&t<.12&&(n.air??0)<=0?(Math.sin(r*1.8+.15)*.05+Math.sin(r*.77+.8)*.02)*(1-t/.12):0,a=(Math.sin(r*1.3)+Math.sin(r*.47+.8)*.35)*.022*(1-i*.65)*(1-t),l=Je((n.air??0)/.25,0,1),c=Je((n.verticalVelocity??0)/7.8,-1,1),h=l*Math.max(0,c),d=l*(1-Math.abs(c)),u=c<0?l*Je((.8-St(n.air))/.8,0,1):0,f=Je(n.compression??0,0,1),p=Je(n.gForce??0,0,1.6),_=Je(n.skid??0,0,1),g=Je(n.slash??0,0,1),m=Je(n.bumpImpact??0,0,1),y=Je(n.chatter??0,0,1),S=Je((St(n.impactMeter)-70)/30,0,1),v=Math.sin(r*11.5)*S*.055,E=Je(Number.isFinite(e.crouch)?e.crouch:0,0,1),T=Je(Number.isFinite(e.stretch)?e.stretch:0,0,1),x=Number.isFinite(n.terrainHeight)?n.terrainHeight:0,w=n.elapsed*n.speed*1.7,L=Je(n.boardLightness??0,0,1),R=g*(1-L),C=Je(n.crouchAmount??0,0,1),z=Je(St(n.lean,n.edge)*(.2+i*.58)*(1-l*.6)+s*p*.055+a+v,-.8,.8),W=oM(St(n.boardRotation,St(n.boardYaw,n.heading))-St(n.torsoRotation,St(n.torsoYaw,n.heading)))+l*St(n.tweak)*1.35,I=1+Math.sin(r*17.3+.4)*.08*g,q=n.air>0?Je(1-St(n.airtime)/.18,0,1):0,N=(n.edge??0)*(n.stance==="goofy"?-1:1)>=0,O=l?0:x*1.35+Math.sin(w)*y*.045-L*.075,K=l?0:(Number.isFinite(n.bodyHeave)?n.bodyHeave:x)*1.35-L*.035,D=n.crashed&&St(n.crashTimer)<=0?2:St(n.crashTimer),k=n.crashed?Je(2-D,0,2):0,H=n.crashed?Je(k/.12,0,1)*(1-Je((k-1.15)/.85,0,1)):0,G=n.crashed?Je((k-.55)/.4,0,1)*(1-Je((k-1.35)/.5,0,1)):0,he=k<.4?1.1+k/.4*1.1:k<.75?2.2:k<1.3?2.2-(k-.75)/.55*1.3:.9*(1-Je((k-1.3)/.7,0,1));return Object.freeze({boardRoll:Je(St(n.edge)*(.26+i*.79)*(n.surface==="rail"?.1:1-l*.7)+o+St(n.terrainRoll)*.18+Math.sin(w*3.1)*y*.012+v*.5,-1.08,1.08),bodyTilt:z,boardSwing:W*I,boardFlex:Je(Math.abs(St(n.pressAmount))*.55+p*.22+St(n.popCharge)*.35+f*.45+m*.16,0,1),snowResponse:Je(f*.55+m*.5+y*.12,0,1),boardYaw:n.boardYaw??n.heading,bodyYaw:n.torsoYaw??n.heading,bodySpin:(n.torsoRotation??n.torsoYaw??n.heading)-(n.heading??0)-(n.switchRiding?Math.PI:0),boardBodyRotation:(n.boardRotation??n.boardYaw??n.heading)-(n.torsoRotation??n.torsoYaw??n.heading),bob:K,boardBob:O,airborne:l,airOpen:u,flickBite:R,boardPitch:l*c*.18+q*.34+(n.terrainPitch??0)*.6+(n.noseFloat??0)*.12+(n.pressAmount??0)*.15,boardSlip:Je(n.slipAngle??0,-.75,.75),boardTweak:Je(n.tweak??0,-1,1)*1.35,butter:Je(n.butter??0,0,1),press:Je((n.pressAmount??0)+(n.butter??0)*.7,-1,1),crouch:Je(.28+i*.08+t*.38+C*.52+E*.22+l*.34+d*.18-u*.2-h*.1+m*.38+p*.08+R*.18,0,1),fallRotation:n.crashed?(Math.sign(n.crashSpin)||1)*he:0,crashCollapse:H,crashSit:G,crashRecovery:n.crashed?Je((1.25-D)/1.25,0,1):0,foreAft:Je(((n.frontFootPressure??.5)-.5)*2-(n.noseFloat??0)*.24,-1,1),handDrag:Je((Math.abs(n.lean??0)-.52)*2.1+E*.38+(n.washout??0)*.65,0,1),grab:l*E,jumpStretch:Je(h+q*.58+u*.33+l*T*.32,0,1),lean:Je(z/.78,-1.04,1.04),legOffset:Je(St(n.legOffset),-en,bn),spray:l?0:Je((n.crashed?1:0)+g*.92+_*.24+t*.025+m*(n.surface==="powder"?.24:.08)+Je((n.landingImpact??0)/9,0,.35),0,1),scarfFlutter:Je((n.speed??0)/34,0,1)*Math.sin((Number(n.elapsed)||0)*(5+(n.speed??0)*.18)),stance:n.stance??"regular",switchRiding:!!n.switchRiding,toeSide:N,headLook:Je(St(e.carve)*.7+St(n.turnRate)*.08+Math.sin(r*.43+Math.sin(r*.19))*.05*(1-t),-1,1),handDrift:Math.sin(r*1.09)+Math.sin(r*.73+.8)*.4,clothFlutter:Je(St(n.speed)/34,0,1)*(Math.sin(r*St(n.speed)*1.7)*.6+Math.sin(r*St(n.speed)*2.63+.5)*.25),breath:Math.sin(r*1.67)*.5,hipTwist:Je(W*.68,-1,1),shoulderTwist:Je(-W*.16-St(n.edge)*.08,-.45,.45),armLag:0,clothLag:0,stumble:Je(H+St(n.washout)*.8+Je(St(n.stumble)/Ol,0,1)*.6+Math.max(0,St(n.landingImpact)-3)*.1+St(n.bumpImpact)*.2+S*.28,0,1),upperBodyTwist:n.edge*-.22-Math.sign(n.edge)*_*.08+Je(e.steer??0,-1,1)*.025})}var tn=()=>({value:0,velocity:0}),Ii=(n,e,t,i,s=.74)=>{let r=Math.max(1,Math.ceil(i*120)),o=i/r,a=t*Math.PI*2;for(let l=0;l<r;l+=1){let c=(e-n.value)*a**2-2*s*a*n.velocity;n.velocity+=c*o,n.value+=n.velocity*o}return n.value};function pp(){let n={arm:tn(),cloth:tn(),crouch:tn(),grab:tn(),head:tn(),hips:tn(),lean:tn(),shoulders:tn(),stumble:tn()},e=!1,t=0,i=0,s=1/0,r=0;return Object.freeze({reset(){n={arm:tn(),cloth:tn(),crouch:tn(),grab:tn(),head:tn(),hips:tn(),lean:tn(),shoulders:tn(),stumble:tn()},e=!1,t=0,i=0,s=1/0,r=0},step(o,a={},l=0){let c=aM(o,a),h=Je(St(l),0,.1),d=Je(St(a.steer),-1,1),u=Math.abs(d)>.05&&c.butter<.5?Math.sign(d):0;u!==0&&u!==t?(i=0,s=1/0):u!==0&&(i+=h),u===0&&t!==0&&(s=0,r=t),u===0&&s<.3&&(s+=h),t=u;let f=c.boardSwing;u!==0&&i<.05&&(f*=.45+i/.05*.55),u===0&&s<.3&&(f-=r*.12*Math.sin(Math.PI*s/.3)),e||(n.crouch.value=c.crouch,n.lean.value=c.bodyTilt,e=!0);let p=Ii(n.head,c.headLook,5.5,h),_=Ii(n.hips,f*.68,3.2,h),g=Ii(n.shoulders,c.shoulderTwist+_*.12,1.5,h),m=Ii(n.arm,-f*.23-g*.4,1.7,h),y=Ii(n.cloth,-f*.9-_*.22,1.8,h,.68),S=Ii(n.lean,c.bodyTilt,3,h),v=Ii(n.crouch,c.crouch,c.crouch>n.crouch.value?6.5:1.9,h,.7),E=Ii(n.stumble,c.stumble,2.4,h),T=Ii(n.grab,c.grab,c.grab>n.grab.value?5.5:4,h,.86);return Object.freeze({...c,armLag:m,bodyTilt:S,boardSwing:f,clothLag:y,crouch:Je(v,0,1),grab:Je(T,0,1),headLook:p,hipTwist:_,lean:Je(S/.78,-1.04,1.04),shoulderTwist:g,stumble:E,upperBodyTwist:g})}})}go();var lM=1/20,cM=4,hM=8,uM=6.2,dM=2.3,fM=1.3,pM=2.55,mM=3.8,gM=1,_M=.25,xM=15,yM=20,vM=3,MM=5.8,SM=3.7,bM=.35,ys=(n,e,t)=>Math.min(t,Math.max(e,n)),Nt=(n,e=0)=>Number.isFinite(n)?n:e,mp=(n,e=0,t=1,i=0)=>Object.freeze({dip:i,position:Object.freeze(n),roll:e,zoom:t});function nu(n={}){let e=n.position??{};return mp({across:Nt(e.across),downhill:Nt(e.downhill)},Nt(n.roll),Nt(n.zoom,1),Nt(n.dip))}function gp(n,e,t=0,i=void 0){let s=ys(Nt(t),0,lM),r=1-Math.exp(-cM*s),o=Nt(e.heading),a=Nt(e.position?.across)+Math.sin(o)*2,l=Nt(e.position?.downhill)+hM,c=mp({across:n.position.across+(a-n.position.across)*r,downhill:n.position.downhill+(l+ys(Nt(e.air),0,2)*1.5-n.position.downhill)*r},Nt(n.roll)+(ys(Nt(e.lean)*.04,-.045,.045)-Nt(n.roll))*(1-Math.exp(-2.8*s)),Nt(n.zoom,1)+(1-ys(Nt(e.speed)/34,0,1)*.14-Nt(n.zoom,1))*(1-Math.exp(-2*s)),Nt(n.dip)+(ys(Nt(e.landingImpact)/9,0,1)-Nt(n.dip))*(1-Math.exp(-8*s)));if(typeof i?.height!="function")return c;let h=Nt(e.position?.across),d=Nt(e.position?.downhill),u=(C,z)=>i.height(C,z),f=Ti(u,h,d),p=ys(Nt(e.air)/2,0,1),_=c.position.across-fM,g=d-uM-p*dM,m=h+vM+Math.sin(o)*MM,y=d+xM+p*yM,S=Nt(e.worldHeight,f+Nt(e.air)),v=Math.max(Ti(u,_,g)+pM,S+p*mM)-f,E=Ti(u,m,y)+SM-f,T=1-Math.exp(-s/bM),x=Number.isFinite(n.rise)?n.rise+(v-n.rise)*T:v,w=Number.isFinite(n.lookRise)?n.lookRise+(E-n.lookRise)*T:E,L=Math.max(f+x-ys(c.dip,0,1)*_M,i.height(_,g)+gM),R=f+w;return Object.freeze({...c,height:L,lookHeight:R,lookRise:w,rig:Object.freeze({position:Object.freeze({x:_,y:L,z:-g}),target:Object.freeze({x:m,y:R,z:-y})}),rise:x})}var _p=new Set(["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","KeyA","KeyD","KeyS","KeyW","Space"]),wM=new Set(["ArrowUp","Space"]);function xp(n=window){let e=new Set,t=!1,i=o=>{_p.has(o.code)&&(o.preventDefault(),wM.has(o.code)&&!e.has(o.code)&&(t=!0),e.add(o.code))},s=o=>{_p.has(o.code)&&(o.preventDefault(),e.delete(o.code))},r=()=>{t=!1,e.clear()};return n.addEventListener("keydown",i),n.addEventListener("keyup",s),n.addEventListener("blur",r),Object.freeze({destroy(){t=!1,e.clear(),n.removeEventListener("keydown",i),n.removeEventListener("keyup",s),n.removeEventListener("blur",r)},read(){let o=e.has("ArrowLeft"),a=e.has("ArrowRight"),l=e.has("KeyA"),c=e.has("KeyD"),h=e.has("ArrowDown"),d=e.has("KeyW"),u=e.has("KeyS"),f=e.has("ArrowUp"),p=t;return t=!1,Object.freeze({carve:Number(c)-Number(l),crouch:Number(h),jump:Number(p),press:Number(u)-Number(d),steer:Number(a)-Number(o),stretch:Number(f)})}})}Hl();Dh();xo();var TM=1/120,Dn=(n,e,t)=>Math.min(t,Math.max(e,n)),EM=n=>{if(!(n>0))return Object.freeze({count:0,step:0});let e=Math.ceil(n/TM-1e-6);return Object.freeze({count:e,step:n/e})},yp=(n,e)=>{if(!Number.isFinite(e)||e<=0||n.crashed)return n;let t=ms(n.position.downhill),i=Dn(e,t.min,t.max),s=Math.hypot(n.velocity.across,n.velocity.downhill),r=i/Math.max(s,.001),o=n.grounded&&Number.isFinite(n.hillRate);return sr({...n,hillRate:o?n.hillRate*r:null,worldVerticalVelocity:o?n.worldVerticalVelocity+n.hillRate*(r-1):n.worldVerticalVelocity,velocity:{across:n.velocity.across*r,downhill:n.velocity.downhill*r}})};async function iu(n){let e=xp(window),t=n.runtime?.world3d?{beginFrame(){},draw(){}}:Pf(n.canvas),i=pp(),s=Object.freeze({surface:"powder",surfaceHeight:Ot}),r=Object.freeze({height:(m,y)=>Ot(m,y,s.surface)}),o="regular",a=nu(),l=Object.freeze({carve:0,crouch:0,press:0,steer:0,stretch:0}),c=!1,h=0,d,u=0,f=0,p,_=sr({surface:s.surface});n.events.addEventListener("rider:input",m=>{Number(m.detail?.jump)>0&&(c=!0),l=Object.freeze({carve:Dn(Number(m.detail?.carve)||0,-1,1),crouch:Dn(Number(m.detail?.crouch)||0,0,1),press:Dn(Number(m.detail?.press)||0,-1,1),steer:Dn(Number(m.detail?.steer)||0,-1,1),stretch:Dn(Number(m.detail?.stretch)||0,0,1)})}),n.events.addEventListener("rider:surface",m=>{s=Object.freeze({slopeGrade:Number.isFinite(m.detail?.slopeGrade)?m.detail.slopeGrade:void 0,surface:m.detail?.surface??s.surface,surfaceHeight:Ot})}),n.events.addEventListener("rider:pace",m=>{if(!Number.isFinite(m.detail?.targetSpeed))return;let y=ms(_.position.downhill);d={holdSeconds:Math.max(0,Number(m.detail?.holdSeconds)||0),targetSpeed:Dn(m.detail.targetSpeed,y.min,y.max)}}),n.events.addEventListener("rider:stance",m=>{o=m.detail?.stance==="goofy"?"goofy":"regular",_=sr({..._,stance:o})}),n.events.addEventListener("rider:reset",m=>{i.reset(),a=nu(),p=void 0,c=!1,h=0,d=void 0,u=0,f=0,_=sr({speed:Number(m.detail?.speed)||16,stance:o,surface:s.surface})}),n.events.addEventListener("rider:impact",m=>{_=qf(_,m.detail),h=0,c=!1});let g=m=>{let y=e.read(),S=Object.freeze({carve:Dn(y.carve+l.carve,-1,1),crouch:Math.max(y.crouch,l.crouch),jump:Math.max(y.jump,Number(c)),press:Dn(y.press+l.press,-1,1),steer:Dn(y.steer+l.steer,-1,1),stretch:Math.max(y.stretch,l.stretch)});c=!1;let v=p===void 0?0:Dn((m-p)/1e3,0,.1);p=m,d&&_.air<=.08&&(_=yp(_,d.targetSpeed),f=d.targetSpeed,u=d.holdSeconds,d=void 0);let E=_.crashed;h=Math.max(h,S.jump);let T=EM(v),x=0;for(let W=0;W<T.count;W+=1)x=Math.max(x,h),_=Zf(_,{...S,jump:h},T.step,{...s,lipDistance:Jf(_.position.across,_.position.downhill)}),u>0&&_.speed>f&&(_=yp(_,f)),u=Math.max(0,u-T.step),h=0;let w=Object.freeze({...S,jump:x});!E&&_.crashed&&(n.events.dispatchEvent(new CustomEvent("rider:crash",{detail:_})),_.crashReason==="edge-catch"&&n.events.dispatchEvent(new CustomEvent("rider:edge-catch",{detail:_}))),a=gp(a,_,v,r);let L=i.step(_,w,v),R=Dn((_.impactMeter-70)/30,0,1),C=R>0?`saturate(${1-R*.78}) contrast(${1+R*.08})`:"";n.worldCanvas?.style&&(n.worldCanvas.style.filter=C),n.canvas?.style&&(n.canvas.style.filter=C),t.beginFrame();let z=_;n.events.dispatchEvent(new CustomEvent("rider:update",{detail:Object.freeze({camera:a,input:w,pose:L,state:_})})),_!==z&&(L=i.step(_,w,0)),t.draw({camera:a,pose:L,state:_}),requestAnimationFrame(g)};n.events.addEventListener("ready",()=>requestAnimationFrame(g),{once:!0})}var Zl=n=>{let e=document.querySelector(n);if(!e)throw new Error(`Shared game mount is missing: ${n}`);return e},vp=Object.freeze({canvas:Zl("#game-canvas"),worldCanvas:Zl("#world-canvas"),runtime:{world3d:null},events:new EventTarget,hudRoot:Zl("#hud-root"),overlayRoot:Zl("#overlay-root")}),AM=async()=>{for(let n of[tu,$h,iu])await n(vp);vp.events.dispatchEvent(new Event("ready"))};AM();})();
