// Slopestyle source fingerprint: 1449b42f93281948f0518b1c8663b8b8aa2ab7734a6c1246dd8653dc1295c3fb
(()=>{var xd=Object.defineProperty;var Jn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var yd=(n,e)=>{for(var t in e)xd(n,t,{get:e[t],enumerable:!0})};function Uc(n){return Nr(n)}function Md(n,e){let t=Math.max(0,Number.isFinite(n)?n:0),i=Math.max(0,Number.isFinite(e)?e:0);return 1+.07*(Math.sin((t+i)*.046+.3)-Math.sin(t*.046+.3))}function Lr(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.11)*.45+Math.sin(e*.38)*.18}function bd(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.min(3,Math.floor(e/72))}function Yo(n){let e=Math.floor(Math.max(0,Number.isFinite(n)?n:0)/36);return Dc[Math.floor(e/4)%Dc.length]}function Nr(n){let e=Math.max(0,Number.isFinite(n)?n:0);return Math.sin(e*.035-.5)*2.8+Math.sin(e*.082+.7)}function wd(n,{halfWidth:e=9.5,seed:t=1}={}){if(!Number.isInteger(n)||n<0)throw new RangeError("Chunk index must be a non-negative integer");if(!Number.isFinite(e)||e<=0)throw new RangeError("Slope half-width must be positive and finite");let i=bd(n*36),s=Yo(n*36),a={summit:7,forest:15,rocky:10,glow:9}[s]+i*2,o=Array.from({length:a},(c,l)=>{let h=As(t,n,l,4)<.5?-1:1,f=36/a,u=n*36+(l+.3+As(t,n,l,0)*.4)*f,d=2.2+As(t,n,l,1)*17,g={summit:.46,forest:.1,rocky:.68,glow:.22}[s];return Object.freeze({kind:As(t,n,l,2)<g?"rock":"pine",size:.72+As(t,n,l,3)*.75,x:h*(e+d),z:u})});return Object.freeze({biome:s,index:n,tier:i,scenery:Object.freeze(o)})}function Dr(n,e,t={}){if(!Number.isFinite(e)||e<0)throw new RangeError("View distance must be non-negative and finite");let i=Math.max(0,Number.isFinite(n)?n:0),s=Math.floor(i/36),r=Math.floor((i+e)/36);return Array.from({length:r-s+1},(a,o)=>Sd(s+o,t))}function Ps(n,e){let t=Cs((e/n.height-.36)/.64,0,1);return n.width*(.058+.285*t**1.16)}function Fc(n,e,t,i=1,s=9.5){let r=(e-t)*14*Cs(i||1,.82,1),a=Math.max(1,Ps(n,n.height*.78));return e-r*s/a}function Tn(n,e,t,{halfWidth:i=9.5,travel:s=0,viewDistance:r=44}={}){let a=Cs(t.z,0,r),o=1-a/r,c=o*o*(3-2*o),l=n.height*(.36+c*(.78-.36)),h=.23+c*.77,f=Cs(a/7,0,1),u=f*f*(3-2*f),d=(Lr(s+a)-Lr(s))*u,g=l-d*h*n.height*.045,x=Ps(n,g)*(1+(Md(s,a)-1)*u),m=(Uc(s+a)-Uc(s))*u;return Object.freeze({alpha:Cs(c*1.6+.2,0,1),pathHalf:x,scale:h,x:n.width/2+(t.x-e+m)/i*x,y:g})}var Dc,Cs,vd,As,Rs,Sd,Ur=Jn(()=>{Dc=Object.freeze(["summit","forest","rocky","glow"]),Cs=(n,e,t)=>Math.min(t,Math.max(e,n)),vd=n=>{let e=n|0;return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),(e^e>>>16)>>>0},As=(n,e,t,i)=>vd(n^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507)^i)/4294967296;Rs=new Map,Sd=(n,e)=>{let t=[n,e.halfWidth??9.5,e.seed??1].join(":"),i=Rs.get(t);return i||(i=wd(n,e),Rs.set(t,i),Rs.size>32&&Rs.delete(Rs.keys().next().value)),i}});function Td(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ed(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xh(){let n=ks("canvas");return n.style.display="block",n}function Kl(...n){let e="THREE."+n.shift();ls?ls("log",e,...n):console.log(e,...n)}function qh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){n=qh(n);let e="THREE."+n.shift();if(ls)ls("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function He(...n){n=qh(n);let e="THREE."+n.shift();if(ls)ls("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Fs(...n){let e=n.join(" ");e in Oc||(Oc[e]=!0,Fe(...n))}function Yh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function mr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Ad(n,e){return(n%e+e)%e}function Jo(n,e,t){return(1-t)*n+t*e}function Jh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $l(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rd(n,e){if(e.constructor===Float32Array)return n;let t=$l(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Cd(n,e){if(e.constructor===Float32Array)return n;let t=$l(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}function Pd(){let n={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bs]:{primaries:e,whitePoint:i,transfer:zs,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}function tl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function cl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Li.fromArray(n,r);let o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=e.dot(Li),l=t.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function qd(n,e,t,i,s,r,a,o){let c;if(e.side===qt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Ti,o),c===null)return null;Kr.copy(o),Kr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Kr);return l<t.near||l>t.far?null:{distance:l,point:Kr.clone(),object:n}}function $r(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,qr),n.getVertexPosition(c,Yr),n.getVertexPosition(l,Zr);let h=qd(n,e,t,i,qr,Yr,Zr,$c);if(h){let f=new z;_i.getBarycoord($c,qr,Yr,Zr,f),s&&(h.uv=_i.getInterpolatedAttribute(s,o,c,l,f,new Ze)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,c,l,f,new Ze)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,c,l,f,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new z,materialIndex:0};_i.getNormal(qr,Yr,Zr,u.normal),h.face=u,h.barycoord=f}return h}function ea(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(ba.fromBufferAttribute(o,s),wa.fromBufferAttribute(o,r),t.distanceSqToSegment(ba,wa,ml,eh)>i)return;ml.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ml);if(!(l<e.near||l>e.far))return{distance:l,point:eh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}function sh(n,e,t,i,s,r,a){let o=Ml.distanceSqToPoint(n);if(o<t){let c=new z;Ml.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Gi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(rh(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=Gi(n[t]);for(let s in i)e[s]=i[s]}return e}function rh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Zd(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jl(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}function ns(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ia(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function jh(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function $d(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function jd(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=jh(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=$d(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function ah(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function oh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function tc(n,e,t,i){let s=lf(i);switch(t){case Vl:return n*e;case Xl:return n*e/s.components*s.byteLength;case Ja:return n*e/s.components*s.byteLength;case Ei:return n*e*2/s.components*s.byteLength;case Ka:return n*e*2/s.components*s.byteLength;case Wl:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case $a:return n*e*4/s.components*s.byteLength;case cr:case hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ur:case dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case to:return Math.max(n,16)*Math.max(e,8)/4;case ja:case eo:return Math.max(n,8)*Math.max(e,8)/2;case no:case io:case ro:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case so:case fr:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bo:case wo:case To:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eo:case Ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pr:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lf(n){switch(n){case hn:case zl:return{byteLength:1,components:1};case xs:case kl:case Ln:return{byteLength:2,components:1};case Ya:case Za:return{byteLength:2,components:4};case Pn:case qa:case In:return{byteLength:4,components:1};case Hl:case Gl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var dh,Tl,fh,Oi,ph,ms,Ti,qt,en,Bi,gs,El,Al,Rl,mh,zi,gh,_h,xh,yh,vh,Mh,Sh,bh,Cl,Pl,wh,Th,Eh,Ah,Rh,Ch,Ph,Ih,Lh,la,ca,ha,as,ua,da,fa,pa,Il,Nh,Dh,Hn,Ll,Nl,Dl,or,Ul,Fl,Ol,Bl,ki,_s,Va,Wa,Ui,Fn,ma,Ht,Uh,lr,ln,Xa,ai,hn,zl,kl,xs,qa,Pn,In,Ln,Ya,Za,Hi,Hl,Gl,Vl,Wl,Nn,ni,oi,Xl,Ja,Ei,Ka,$a,cr,hr,ur,dr,ja,Qa,eo,to,no,io,so,ro,ao,fr,oo,lo,co,ho,uo,fo,po,mo,go,_o,xo,yo,vo,Mo,So,bo,wo,To,Eo,Ao,pr,Ro,Os,ga,aa,_l,xl,yl,vl,Fh,Co,Oh,li,jt,Bs,zs,ct,oa,Bh,zh,kh,Hh,ql,Gh,Vh,Yl,Zl,Wh,Jl,yn,os,Oc,ls,Zh,On,Kt,Zo,_a,nc,Ze,Bn,ic,z,Ko,Bc,sc,Ve,$o,zc,kc,je,qi,xa,Id,cs,Ld,Qo,cn,rc,yt,ya,pn,Hs,va,Ga,_t,Yi,En,Nd,Dd,di,Fr,dn,Hc,Gc,ii,Gs,Ud,Vc,Zi,Kn,Or,Is,Fd,Od,Wc,Xc,qc,Yc,Bd,Ji,el,Gt,kt,zd,hs,Kh,fi,Br,ze,$t,Vs,Ws,An,$n,nl,jn,Ki,$i,Zc,il,sl,rl,al,ol,ll,_i,xi,Qn,Rn,zr,ji,Qi,es,pi,mi,Ii,Ls,kr,Hr,Li,It,Gr,kd,vn,Xs,qs,tt,Hd,Ns,hl,yi,Gd,xn,ul,ts,fn,Ds,zt,At,dl,Vd,Wd,Cn,Xd,zn,ei,fl,Vr,Wr,us,Mn,Jc,Ni,Xr,Kc,qr,Yr,Zr,pl,Jr,$c,Kr,Lt,Ma,Di,Yd,jr,vi,jc,Sa,ds,ba,wa,Qc,Us,Qr,ml,eh,Ta,th,nh,Ys,fs,ih,Ml,ta,na,Zs,Js,Ks,si,$s,js,Vt,Qs,Qt,ri,Ea,Mi,er,Fi,$h,Jd,Kd,kn,Aa,mn,Ra,Ca,Si,Pa,Ia,La,Na,gn,bi,Da,Ua,Fa,tr,wi,Oa,Ba,Qh,za,nr,ir,gl,lh,ch,ka,sa,ra,Un,sr,gi,hh,uh,on,rr,Sl,ar,is,ss,ps,Ha,Ql,Qd,ec,ef,tf,nf,sf,rf,af,of,bl,xt,tx,ac,wl,oc=Jn(()=>{dh=0,Tl=1,fh=2,Oi=1,ph=2,ms=3,Ti=0,qt=1,en=2,Bi=0,gs=1,El=2,Al=3,Rl=4,mh=5,zi=100,gh=101,_h=102,xh=103,yh=104,vh=200,Mh=201,Sh=202,bh=203,Cl=204,Pl=205,wh=206,Th=207,Eh=208,Ah=209,Rh=210,Ch=211,Ph=212,Ih=213,Lh=214,la=0,ca=1,ha=2,as=3,ua=4,da=5,fa=6,pa=7,Il=0,Nh=1,Dh=2,Hn=0,Ll=1,Nl=2,Dl=3,or=4,Ul=5,Fl=6,Ol=7,Bl=300,ki=301,_s=302,Va=303,Wa=304,Ui=1e3,Fn=1001,ma=1002,Ht=1003,Uh=1004,lr=1005,ln=1006,Xa=1007,ai=1008,hn=1009,zl=1010,kl=1011,xs=1012,qa=1013,Pn=1014,In=1015,Ln=1016,Ya=1017,Za=1018,Hi=1020,Hl=35902,Gl=35899,Vl=1021,Wl=1022,Nn=1023,ni=1026,oi=1027,Xl=1028,Ja=1029,Ei=1030,Ka=1031,$a=1033,cr=33776,hr=33777,ur=33778,dr=33779,ja=35840,Qa=35841,eo=35842,to=35843,no=36196,io=37492,so=37496,ro=37488,ao=37489,fr=37490,oo=37491,lo=37808,co=37809,ho=37810,uo=37811,fo=37812,po=37813,mo=37814,go=37815,_o=37816,xo=37817,yo=37818,vo=37819,Mo=37820,So=37821,bo=36492,wo=36494,To=36495,Eo=36283,Ao=36284,pr=36285,Ro=36286,Os=2300,ga=2301,aa=2302,_l=2303,xl=2400,yl=2401,vl=2402,Fh=3200,Co=0,Oh=1,li="",jt="srgb",Bs="srgb-linear",zs="linear",ct="srgb",oa=7680,Bh=519,zh=512,kh=513,Hh=514,ql=515,Gh=516,Vh=517,Yl=518,Zl=519,Wh=35044,Jl="300 es",yn=2e3,os=2001;Oc={},ls=null;Zh={[la]:la,[ha]:fa,[ua]:ua,[as]:da,[ca]:ca,[fa]:ha,[pa]:pa,[da]:as},On=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,_a=180/Math.PI;nc=class nc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nc.prototype.isVector2=!0;Ze=nc,Bn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||c!==u||l!==d||h!==g){let m=c*u+l*d+h*g+f*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,c=c*p+u*o,l=l*p+d*o,h=h*p+g*o,f=f*p+x*o}else{c=c*p+u*o,l=l*p+d*o,h=h*p+g*o,f=f*p+x*o;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+c*d-l*u,e[t+1]=c*g+h*u+l*f-o*d,e[t+2]=l*g+h*d+o*u-c*f,e[t+3]=h*g-o*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ic=class ic{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ic.prototype.isVector3=!0;z=ic,Ko=new z,Bc=new Bn,sc=class sc{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],v=s[1],E=s[4],b=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*x+o*v+c*A,r[3]=a*m+o*E+c*T,r[6]=a*p+o*b+c*_,r[1]=l*x+h*v+f*A,r[4]=l*m+h*E+f*T,r[7]=l*p+h*b+f*_,r[2]=u*x+d*v+g*A,r[5]=u*m+d*E+g*T,r[8]=u*p+d*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=t*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*l-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($o.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($o.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sc.prototype.isMatrix3=!0;Ve=sc,$o=new Ve,zc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je=Pd();xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qi===void 0&&(qi=ks("canvas")),qi.width=e.width,qi.height=e.height;let s=qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ti(t[i]/255)*255):t[i]=ti(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Id=0,cs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Ld=0,Qo=new z,cn=class n extends On{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fn,s=Fn,r=ln,a=ai,o=Nn,c=hn,l=n.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=mr(),this.name="",this.source=new cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qo).x}get height(){return this.source.getSize(Qo).y}get depth(){return this.source.getSize(Qo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Bl;cn.DEFAULT_ANISOTROPY=1;rc=class rc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,b=(d+1)/2,A=(p+1)/2,T=(h+u)/4,_=(f+x)/4,S=(g+m)/4;return E>b&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=_/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=S/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rc.prototype.isVector4=!0;yt=rc,ya=class extends On{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends ya{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Hs=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},va=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ga=class Ga{constructor(e,t,i,s,r,a,o,c,l,h,f,u,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,f,u,d,g,x,m)}set(e,t,i,s,r,a,o,c,l,h,f,u,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ga().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,g=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,g=l*h,x=l*f;t[0]=u+x*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,g=l*h,x=l*f;t[0]=u-x*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,d=a*f,g=o*h,x=o*f;t[0]=c*h,t[4]=g*l-d,t[8]=u*l+x,t[1]=c*f,t[5]=x*l+u,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*f+g,t[10]=u-x*f}else if(e.order==="XZY"){let u=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+x,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nd,e,Dd)}lookAt(e,t,i){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),di.crossVectors(i,dn),di.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),di.crossVectors(i,dn)),di.normalize(),Fr.crossVectors(dn,di),s[0]=di.x,s[4]=Fr.x,s[8]=dn.x,s[1]=di.y,s[5]=Fr.y,s[9]=dn.y,s[2]=di.z,s[6]=Fr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],E=i[7],b=i[11],A=i[15],T=s[0],_=s[4],S=s[8],L=s[12],C=s[1],I=s[5],N=s[9],U=s[13],R=s[2],F=s[6],B=s[10],k=s[14],J=s[3],W=s[7],ee=s[11],ne=s[15];return r[0]=a*T+o*C+c*R+l*J,r[4]=a*_+o*I+c*F+l*W,r[8]=a*S+o*N+c*B+l*ee,r[12]=a*L+o*U+c*k+l*ne,r[1]=h*T+f*C+u*R+d*J,r[5]=h*_+f*I+u*F+d*W,r[9]=h*S+f*N+u*B+d*ee,r[13]=h*L+f*U+u*k+d*ne,r[2]=g*T+x*C+m*R+p*J,r[6]=g*_+x*I+m*F+p*W,r[10]=g*S+x*N+m*B+p*ee,r[14]=g*L+x*U+m*k+p*ne,r[3]=v*T+E*C+b*R+A*J,r[7]=v*_+E*I+b*F+A*W,r[11]=v*S+E*N+b*B+A*ee,r[15]=v*L+E*U+b*k+A*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],v=c*d-l*u,E=o*d-l*f,b=o*u-c*f,A=a*d-l*h,T=a*u-c*h,_=a*f-o*h;return t*(x*v-m*E+p*b)-i*(g*v-m*A+p*T)+s*(g*E-x*A+p*_)-r*(g*b-x*T+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=t*o-i*a,E=t*c-s*a,b=t*l-r*a,A=i*c-s*o,T=i*l-r*o,_=s*l-r*c,S=h*x-f*g,L=h*m-u*g,C=h*p-d*g,I=f*m-u*x,N=f*p-d*x,U=u*p-d*m,R=v*U-E*N+b*I+A*C-T*L+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/R;return e[0]=(o*U-c*N+l*I)*F,e[1]=(s*N-i*U-r*I)*F,e[2]=(x*_-m*T+p*A)*F,e[3]=(u*T-f*_-d*A)*F,e[4]=(c*C-a*U-l*L)*F,e[5]=(t*U-s*C+r*L)*F,e[6]=(m*b-g*_-p*E)*F,e[7]=(h*_-u*b+d*E)*F,e[8]=(a*N-o*C+l*S)*F,e[9]=(i*C-t*N-r*S)*F,e[10]=(g*T-x*b+p*v)*F,e[11]=(f*b-h*T-d*v)*F,e[12]=(o*L-a*I-c*S)*F,e[13]=(t*I-i*L+s*S)*F,e[14]=(x*E-g*A-m*v)*F,e[15]=(h*A-f*E+u*v)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,x=a*h,m=a*f,p=o*f,v=c*l,E=c*h,b=c*f,A=i.x,T=i.y,_=i.z;return s[0]=(1-(x+p))*A,s[1]=(d+b)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(u+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+E)*_,s[9]=(m-v)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Yi.set(s[0],s[1],s[2]).length(),o=Yi.set(s[4],s[5],s[6]).length(),c=Yi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let l=1/a,h=1/o,f=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=yn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===os)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=yn,c=!1){let l=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===yn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===os)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ga.prototype.isMatrix4=!0;_t=Ga,Yi=new z,En=new _t,Nd=new z(0,0,0),Dd=new z(1,1,1),di=new z,Fr=new z,dn=new z,Hc=new _t,Gc=new Bn,ii=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";Gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ud=0,Vc=new z,Zi=new Bn,Kn=new _t,Or=new z,Is=new z,Fd=new z,Od=new Bn,Wc=new z(1,0,0),Xc=new z(0,1,0),qc=new z(0,0,1),Yc={type:"added"},Bd={type:"removed"},Ji={type:"childadded",child:null},el={type:"childremoved",child:null},Gt=class n extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new ii,i=new Bn,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ve}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Vc.copy(e).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Is,Or,this.up):Kn.lookAt(Or,Is,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bd),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;kt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zd={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Br={h:0,s:0,l:0};ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=Ad(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=tl(a,r,e+1/3),this.g=tl(a,r,e),this.b=tl(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let i=Kh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return je.workingToColorSpace($t.copy(this),e),Math.round(et($t.r*255,0,255))*65536+Math.round(et($t.g*255,0,255))*256+Math.round(et($t.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace($t.copy(this),t);let i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=jt){je.workingToColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,s=$t.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Br);let i=Jo(fi.h,Br.h,t),s=Jo(fi.s,Br.s,t),r=Jo(fi.l,Br.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new ze;ze.NAMES=Kh;Vs=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new z,$n=new z,nl=new z,jn=new z,Ki=new z,$i=new z,Zc=new z,il=new z,sl=new z,rl=new z,al=new yt,ol=new yt,ll=new yt,_i=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),$n.subVectors(i,t),nl.subVectors(e,t);let a=An.dot(An),o=An.dot($n),c=An.dot(nl),l=$n.dot($n),h=$n.dot(nl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return al.setScalar(0),ol.setScalar(0),ll.setScalar(0),al.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,i),ll.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(al,r.x),a.addScaledVector(ol,r.y),a.addScaledVector(ll,r.z),a}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),$n.subVectors(e,t),An.cross($n).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),An.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,i),$i.subVectors(r,i),il.subVectors(e,i);let c=Ki.dot(il),l=$i.dot(il);if(c<=0&&l<=0)return t.copy(i);sl.subVectors(e,s);let h=Ki.dot(sl),f=$i.dot(sl);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(i).addScaledVector(Ki,a);rl.subVectors(e,r);let d=Ki.dot(rl),g=$i.dot(rl);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector($i,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Zc.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Zc,o);let p=1/(m+x+u);return a=x*p,o=u*p,t.copy(i).addScaledVector(Ki,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zr.copy(i.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),kr.subVectors(this.max,Ls),ji.subVectors(e.a,Ls),Qi.subVectors(e.b,Ls),es.subVectors(e.c,Ls),pi.subVectors(Qi,ji),mi.subVectors(es,Qi),Ii.subVectors(ji,es);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ii.z,Ii.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ii.z,0,-Ii.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ii.y,Ii.x,0];return!cl(t,ji,Qi,es,kr)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,ji,Qi,es,kr))?!1:(Hr.crossVectors(pi,mi),t=[Hr.x,Hr.y,Hr.z],cl(t,ji,Qi,es,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new z,new z,new z,new z,new z,new z,new z,new z],Rn=new z,zr=new xi,ji=new z,Qi=new z,es=new z,pi=new z,mi=new z,Ii=new z,Ls=new z,kr=new z,Hr=new z,Li=new z;It=new z,Gr=new Ze,kd=0,vn=class extends On{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wh,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=e!==void 0?$l(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cd(e,this.array)}},Xs=class extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},qs=class extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},tt=class extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hd=new xi,Ns=new z,hl=new z,yi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Hd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);let t=Ns.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(hl)),this.expandByPoint(Ns.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gd=0,xn=new _t,ul=new Gt,ts=new z,fn=new xi,Ds=new xi,zt=new z,At=class n extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?qs:Xs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(fn.min,Ds.min),fn.expandByPoint(zt),zt.addVectors(fn.max,Ds.max),fn.expandByPoint(zt)):(fn.expandByPoint(Ds.min),fn.expandByPoint(Ds.max))}fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)zt.fromBufferAttribute(o,l),c&&(ts.fromBufferAttribute(e,l),zt.add(ts)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new vn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new z,c[L]=new z;let h=new z,f=new z,u=new z,d=new Ze,g=new Ze,x=new Ze,m=new z,p=new z;function v(L,C,I){l[L]=l[C]=l[I]=1,h.fromBufferAttribute(i,L),f.fromBufferAttribute(i,C),u.fromBufferAttribute(i,I),d.fromBufferAttribute(r,L),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,I),f.sub(h),u.sub(h),g.sub(d),x.sub(d);let N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(N),p.copy(u).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(N),o[L].add(m),o[C].add(m),o[I].add(m),c[L].add(p),c[C].add(p),c[I].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,C=E.length;L<C;++L){let I=E[L],N=I.start,U=I.count;for(let R=N,F=N+U;R<F;R+=3)v(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let b=new z,A=new z,T=new z,_=new z;function S(L){T.fromBufferAttribute(s,L),_.copy(T);let C=o[L];b.copy(C),b.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(_,C);let N=A.dot(c[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,N)}for(let L=0,C=i.count;L<C;++L)l[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,f=new z;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new vn(u,h,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},dl=new z,Vd=new z,Wd=new Ve,Cn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=dl.subVectors(i,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(dl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Wd.getNormalMatrix(e),s=this.coplanarPoint(dl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Xd=0,zn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=gs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Cn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ei=new z,fl=new z,Vr=new z,Wr=new z,us=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fl.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(fl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Wr.dot(this.direction),c=-Wr.dot(Vr),l=Wr.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fl).addScaledVector(Vr,u),d}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);let i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=i.x-a.x,v=i.y-a.y,E=i.z-a.z,b=Math.abs(c),A=Math.abs(l),T=Math.abs(h),_,S,L,C,I,N,U,R,F,B,k,J;if(b>=A&&b>=T?(L=c,N=f,F=g,J=p,c>=0?(_=l,S=h,C=u,I=d,U=x,R=m,B=v,k=E):(_=h,S=l,C=d,I=u,U=m,R=x,B=E,k=v)):A>=T?(L=l,N=u,F=x,J=v,l>=0?(_=h,S=c,C=d,I=f,U=m,R=g,B=E,k=p):(_=c,S=h,C=f,I=d,U=g,R=m,B=p,k=E)):(L=h,N=d,F=m,J=E,h>=0?(_=c,S=l,C=f,I=u,U=g,R=x,B=p,k=v):(_=l,S=c,C=u,I=f,U=x,R=g,B=v,k=p)),L===0)return null;let W=_/L,ee=S/L,ne=1/L,te=C-W*N,Le=I-ee*N,Y=U-W*F,fe=R-ee*F,_e=B-W*J,Se=k-ee*J,le=_e*fe-Se*Y,Re=te*Se-Le*_e,Qe=Y*Le-fe*te;if(s){if(le<0||Re<0||Qe<0)return null}else if((le<0||Re<0||Qe<0)&&(le>0||Re>0||Qe>0))return null;let ye=le+Re+Qe;if(ye===0)return null;let ke=ne*(le*N+Re*F+Qe*J);return(ye>0?ke<0:ke>0)?null:this.at(ke/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jc=new _t,Ni=new us,Xr=new yi,Kc=new z,qr=new z,Yr=new z,Zr=new z,pl=new z,Jr=new z,$c=new z,Kr=new z,Lt=class extends Gt{constructor(e=new At,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(pl.fromBufferAttribute(f,e),a?Jr.addScaledVector(pl,h):Jr.addScaledVector(pl.sub(t),h))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Xr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Xr,Kc)===null||Ni.origin.distanceToSquared(Kc)>(e.far-e.near)**2))&&(Jc.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,A=E;b<A;b+=3){let T=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=$r(this,p,e,i,l,h,f,T,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=$r(this,a,e,i,l,h,f,v,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,A=E;b<A;b+=3){let T=b,_=b+1,S=b+2;s=$r(this,p,e,i,l,h,f,T,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,E=m+1,b=m+2;s=$r(this,a,e,i,l,h,f,v,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ma=class extends cn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Ht,h=Ht,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Di=new yi,Yd=new Ze(.5,.5),jr=new z,vi=class{constructor(e=new Cn,t=new Cn,i=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,p-g,A-v).normalize(),s[1].setComponents(l+a,d+h,p+g,A+v).normalize(),s[2].setComponents(l+o,d+f,p+x,A+E).normalize(),s[3].setComponents(l-o,d-f,p-x,A-E).normalize(),i)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,d-u,p-m,A-b).normalize();else if(s[4].setComponents(l-c,d-u,p-m,A-b).normalize(),t===yn)s[5].setComponents(l+c,d+u,p+m,A+b).normalize();else if(t===os)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);let t=Yd.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(jr.x=s.normal.x>0?e.max.x:e.min.x,jr.y=s.normal.y>0?e.max.y:e.min.y,jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jc=new _t,Sa=class n{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];jc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new vi),i[s].setFromProjectionMatrix(jc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new vi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}},ds=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ba=new z,wa=new z,Qc=new _t,Us=new us,Qr=new yi,ml=new z,eh=new z,Ta=class extends Gt{constructor(e=new At,t=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ba.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ba.distanceTo(wa);e.setAttribute("lineDistance",new tt(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;Qc.copy(s).invert(),Us.copy(e.ray).applyMatrix4(Qc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=l){let p=h.getX(x),v=h.getX(x+1),E=ea(this,e,Us,c,p,v,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=ea(this,e,Us,c,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=l){let p=ea(this,e,Us,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=ea(this,e,Us,c,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};th=new z,nh=new z,Ys=class extends Ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)th.fromBufferAttribute(t,s),nh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+th.distanceTo(nh);e.setAttribute("lineDistance",new tt(i,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fs=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ih=new _t,Ml=new us,ta=new yi,na=new z,Zs=class extends Gt{constructor(e=new At,t=new fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;ih.copy(s).invert(),Ml.copy(e.ray).applyMatrix4(ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=u,x=d;g<x;g++){let m=l.getX(g);na.fromBufferAttribute(f,m),sh(na,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,x=d;g<x;g++)na.fromBufferAttribute(f,g),sh(na,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Js=class extends cn{constructor(e=[],t=ki,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ks=class extends cn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},si=class extends cn{constructor(e,t,i=Pn,s,r,a,o=Ht,c=Ht,l,h=ni,f=1){if(h!==ni&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$s=class extends si{constructor(e,t=Pn,i=ki,s,r,a=Ht,o=Ht,c,l=ni){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},js=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class n extends At{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function g(x,m,p,v,E,b,A,T,_,S,L){let C=b/_,I=A/S,N=b/2,U=A/2,R=T/2,F=_+1,B=S+1,k=0,J=0,W=new z;for(let ee=0;ee<B;ee++){let ne=ee*I-U;for(let te=0;te<F;te++){let Le=te*C-N;W[x]=Le*v,W[m]=ne*E,W[p]=R,l.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),f.push(te/_),f.push(1-ee/S),k+=1}}for(let ee=0;ee<S;ee++)for(let ne=0;ne<_;ne++){let te=u+ne+F*ee,Le=u+ne+F*(ee+1),Y=u+(ne+1)+F*(ee+1),fe=u+(ne+1)+F*ee;c.push(te,Le,fe),c.push(Le,Y,fe),J+=6}o.addGroup(d,J,L),d+=J,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Qs=class n extends At{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new z,h=new Ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qt=class n extends At{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],m=i/2,p=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2));function v(){let b=new z,A=new z,T=0,_=(t-e)/i;for(let S=0;S<=r;S++){let L=[],C=S/r,I=C*(t-e)+e;for(let N=0;N<=s;N++){let U=N/s,R=U*c+o,F=Math.sin(R),B=Math.cos(R);A.x=I*F,A.y=-C*i+m,A.z=I*B,f.push(A.x,A.y,A.z),b.set(F,_,B).normalize(),u.push(b.x,b.y,b.z),d.push(U,1-C),L.push(g++)}x.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let C=x[L][S],I=x[L+1][S],N=x[L+1][S+1],U=x[L][S+1];(e>0||L!==0)&&(h.push(C,I,U),T+=3),(t>0||L!==r-1)&&(h.push(I,N,U),T+=3)}l.addGroup(p,T,0),p+=T}function E(b){let A=g,T=new Ze,_=new z,S=0,L=b===!0?e:t,C=b===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*C,0),u.push(0,C,0),d.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let R=N/s*c+o,F=Math.cos(R),B=Math.sin(R);_.x=L*B,_.y=m*C,_.z=L*F,f.push(_.x,_.y,_.z),u.push(0,C,0),T.x=F*.5+.5,T.y=B*.5*C+.5,d.push(T.x,T.y),g++}for(let N=0;N<s;N++){let U=A+N,R=I+N;b===!0?h.push(R,R+1,U):h.push(R+1,R,U),S+=3}l.addGroup(p,S,b===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ri=class n extends Qt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ea=class n extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let E=new z,b=new z,A=new z;for(let T=0;T<t.length;T+=3)d(t[T+0],E),d(t[T+1],b),d(t[T+2],A),c(E,b,A,v)}function c(v,E,b,A){let T=A+1,_=[];for(let S=0;S<=T;S++){_[S]=[];let L=v.clone().lerp(b,S/T),C=E.clone().lerp(b,S/T),I=T-S;for(let N=0;N<=I;N++)N===0&&S===T?_[S][N]=L:_[S][N]=L.clone().lerp(C,N/I)}for(let S=0;S<T;S++)for(let L=0;L<2*(T-S)-1;L++){let C=Math.floor(L/2);L%2===0?(u(_[S][C+1]),u(_[S+1][C]),u(_[S][C])):(u(_[S][C+1]),u(_[S+1][C+1]),u(_[S+1][C]))}}function l(v){let E=new z;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(v),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){let v=new z;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];let b=m(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;a.push(b,1-A)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){let E=a[v+0],b=a[v+2],A=a[v+4],T=Math.max(E,b,A),_=Math.min(E,b,A);T>.9&&_<.1&&(E<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,E){let b=v*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function g(){let v=new z,E=new z,b=new z,A=new z,T=new Ze,_=new Ze,S=new Ze;for(let L=0,C=0;L<r.length;L+=9,C+=6){v.set(r[L+0],r[L+1],r[L+2]),E.set(r[L+3],r[L+4],r[L+5]),b.set(r[L+6],r[L+7],r[L+8]),T.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),A.copy(v).add(E).add(b).divideScalar(3);let I=m(A);x(T,C+0,v,I),x(_,C+2,E,I),x(S,C+4,b,I)}}function x(v,E,b,A){A<0&&v.x===1&&(a[E]=v.x-1),b.x===0&&b.z===0&&(a[E]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Mi=class n extends Ea{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},er=class n extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=e/o,u=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let E=0;E<l;E++){let b=E*f-r;g.push(b,-v,0),x.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let E=v+l*p,b=v+l*(p+1),A=v+1+l*(p+1),T=v+1+l*p;d.push(E,b,T),d.push(b,A,T)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Fi=class n extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new z,u=new z,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let v=[],E=p/i,b=a+E*o,A=e*Math.cos(b),T=Math.sqrt(e*e-A*A),_=0;p===0&&a===0?_=.5/t:p===i&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let L=S/t,C=s+L*r;f.x=-T*Math.cos(C),f.y=A,f.z=T*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(L+_,1-E),v.push(l++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let E=h[p][v+1],b=h[p][v],A=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&d.push(E,b,T),(p!==i-1||c<Math.PI)&&d.push(b,A,T)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};$h={clone:Gi,merge:tn},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Aa=class extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mn=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ra=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Si=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pa=class extends Si{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case yl:r=e,o=2*t-i;break;case vl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case yl:a=e,c=2*i-t;break;case vl:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,E=(-1-d)*m+(1.5+d)*x+.5*g,b=d*m-d*x;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+v*a[l+A]+E*a[c+A]+b*a[f+A];return r}},Ia=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},La=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Na=class extends Si{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=d*u+g*2,v=f[p],E=f[p+1],b=e*u+g*2,A=h[b],T=h[b+1],_=jd(i,t,v,A,s);r[g]=jh(_,x,E,T,m)}return r}};gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ia(e.settings)&&(i.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Na(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break;case _l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return aa;case this.InterpolantFactoryMethodBezier:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ia(this.settings)&&(ah(this.settings.inTangents,e),ah(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ia(this.settings)&&(oh(this.settings.inTangents,e),oh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Ed(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===aa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let x=t[f+g];if(x!==t[u+g]||x!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ia(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=ga;bi=class extends gn{constructor(e,t,i){super(e,t,i)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Os;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;Da=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};Da.prototype.ValueTypeName="color";Ua=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};Ua.prototype.ValueTypeName="number";Fa=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},tr=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}};tr.prototype.ValueTypeName="quaternion";tr.prototype.InterpolantFactoryMethodSmooth=void 0;wi=class extends gn{constructor(e,t,i){super(e,t,i)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Os;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;Oa=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};Oa.prototype.ValueTypeName="vector";Ba=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qh=new Ba,za=class{constructor(e){this.manager=e!==void 0?e:Qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";nr=class extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ir=class extends nr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},gl=new _t,lh=new z,ch=new z,ka=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(lh),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===os||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sa=new z,ra=new Bn,Un=new z,sr=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sa,ra,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sa,ra,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new z,hh=new Ze,uh=new Ze,on=class extends sr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,hh,uh),t.subVectors(uh,hh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rr=class extends sr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sl=class extends ka{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Sl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},is=-90,ss=1,ps=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(is,ss,e,t);s.layers=this.layers,this.add(s);let r=new on(is,ss,e,t);r.layers=this.layers,this.add(r);let a=new on(is,ss,e,t);a.layers=this.layers,this.add(a);let o=new on(is,ss,e,t);o.layers=this.layers,this.add(o);let c=new on(is,ss,e,t);c.layers=this.layers,this.add(c);let l=new on(is,ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===os)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ha=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ql="\\[\\]\\.:\\/",Qd=new RegExp("["+Ql+"]","g"),ec="[^"+Ql+"]",ef="[^"+Ql.replace("\\.","")+"]",tf=/((?:WC+[\/:])*)/.source.replace("WC",ec),nf=/(WCOD+)?/.source.replace("WCOD",ef),sf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),af=new RegExp("^"+tf+nf+sf+rf+"$"),of=["material","materials","bones","map"],bl=class{constructor(e,t,i){let s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qd,"")}static parseTrackName(e){let t=af.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);of.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;He("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=bl;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];tx=new Float32Array(1),ac=class ac{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};ac.prototype.isMatrix2=!0;wl=ac;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Mu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hf(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function Xm(n,e,t,i,s,r){let a=new ze(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let b=v.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(v){let E=!1,b=d(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,E){let b=d(E);b&&b.isCubeTexture?(l===void 0&&(l=new Lt(new Vt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Gi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Su),l.material.toneMapped=je.getTransfer(b.colorSpace)!==ct,(h!==b||f!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Lt(new er(2,2),new kn({name:"BackgroundMaterial",uniforms:Gi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=je.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,E){v.getRGB(Po,jl(n)),t.buffers.color.setClear(Po.r,Po.g,Po.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:x,dispose:p}}function qm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(I,N,U,R,F){let B=!1,k=f(I,R,U,N);r!==k&&(r=k,l(r.object)),B=d(I,R,U,F),B&&g(I,R,U,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,b(I,N,U,R),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function f(I,N,U,R){let F=R.wireframe===!0,B=i[N.id];B===void 0&&(B={},i[N.id]=B);let k=I.isInstancedMesh===!0?I.id:0,J=B[k];J===void 0&&(J={},B[k]=J);let W=J[U.id];W===void 0&&(W={},J[U.id]=W);let ee=W[F];return ee===void 0&&(ee=u(c()),W[F]=ee),ee}function u(I){let N=[],U=[],R=[];for(let F=0;F<t;F++)N[F]=0,U[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:R,object:I,attributes:{},index:null}}function d(I,N,U,R){let F=r.attributes,B=N.attributes,k=0,J=U.getAttributes();for(let W in J)if(J[W].location>=0){let ne=F[W],te=B[W];if(te===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),ne===void 0||ne.attribute!==te||te&&ne.data!==te.data)return!0;k++}return r.attributesNum!==k||r.index!==R}function g(I,N,U,R){let F={},B=N.attributes,k=0,J=U.getAttributes();for(let W in J)if(J[W].location>=0){let ne=B[W];ne===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));let te={};te.attribute=ne,ne&&ne.data&&(te.data=ne.data),F[W]=te,k++}r.attributes=F,r.attributesNum=k,r.index=R}function x(){let I=r.newAttributes;for(let N=0,U=I.length;N<U;N++)I[N]=0}function m(I){p(I,0)}function p(I,N){let U=r.newAttributes,R=r.enabledAttributes,F=r.attributeDivisors;U[I]=1,R[I]===0&&(n.enableVertexAttribArray(I),R[I]=1),F[I]!==N&&(n.vertexAttribDivisor(I,N),F[I]=N)}function v(){let I=r.newAttributes,N=r.enabledAttributes;for(let U=0,R=N.length;U<R;U++)N[U]!==I[U]&&(n.disableVertexAttribArray(U),N[U]=0)}function E(I,N,U,R,F,B,k){k===!0?n.vertexAttribIPointer(I,N,U,F,B):n.vertexAttribPointer(I,N,U,R,F,B)}function b(I,N,U,R){x();let F=R.attributes,B=U.getAttributes(),k=N.defaultAttributeValues;for(let J in B){let W=B[J];if(W.location>=0){let ee=F[J];if(ee===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){let ne=ee.normalized,te=ee.itemSize,Le=e.get(ee);if(Le===void 0)continue;let Y=Le.buffer,fe=Le.type,_e=Le.bytesPerElement,Se=fe===n.INT||fe===n.UNSIGNED_INT||ee.gpuType===qa;if(ee.isInterleavedBufferAttribute){let le=ee.data,Re=le.isInterleavedBuffer===!0?le.stride:le.itemSize,Qe=ee.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let ye=0;ye<W.locationSize;ye++)p(W.location+ye,le.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<W.locationSize;ye++)m(W.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let ye=0;ye<W.locationSize;ye++)E(W.location+ye,te/W.locationSize,fe,ne,Re*_e,(Qe+te/W.locationSize*ye)*_e,Se)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)p(W.location+le,ee.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let le=0;le<W.locationSize;le++)E(W.location+le,te/W.locationSize,fe,ne,te*_e,te/W.locationSize*le*_e,Se)}}else if(k!==void 0){let ne=k[J];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(W.location,ne);break;case 3:n.vertexAttrib3fv(W.location,ne);break;case 4:n.vertexAttrib4fv(W.location,ne);break;default:n.vertexAttrib1fv(W.location,ne)}}}}v()}function A(){L();for(let I in i){let N=i[I];for(let U in N){let R=N[U];for(let F in R){let B=R[F];for(let k in B)h(B[k].object),delete B[k];delete R[F]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let U in N){let R=N[U];for(let F in R){let B=R[F];for(let k in B)h(B[k].object),delete B[k];delete R[F]}}delete i[I.id]}function _(I){for(let N in i){let U=i[N];for(let R in U){let F=U[R];if(F[I.id]===void 0)continue;let B=F[I.id];for(let k in B)h(B[k].object),delete B[k];delete F[I.id]}}}function S(I){for(let N in i){let U=i[N],R=I.isInstancedMesh===!0?I.id:0,F=U[R];if(F!==void 0){for(let B in F){let k=F[B];for(let J in k)h(k[J].object),delete k[J];delete F[B]}delete U[R],Object.keys(U).length===0&&delete i[N]}}}function L(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Ym(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Nn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==hn&&_!==In&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Fe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:T}}function Jm(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Cn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:i,E=v*4,b=p.clippingState||null;c.value=b,b=h(g,u,E,d);for(let A=0;A!==E;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=d;E!==x;++E,b+=4)a.copy(f[E]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function tu(n,e,t){return new xr(n,{minFilter:ai,generateMipmaps:e,type:Ln,colorSpace:Bs,depthBuffer:t})}function yr(n,e,t){return new kn({name:n,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:qt,blending:Bi,depthTest:!1,depthWrite:!1})}function t0(){return yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bu}u

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
	`)}function n0(){return yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wu}},`

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
	`)}function i0(){return yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$m}
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
	`)}function nu(){return yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function iu(){return yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function s0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Va||d===Wa)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new xr(g.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===Va||d===Wa,x=d===ki||d===_s;if(g||x){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Lo(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new Lo(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Va?u.mapping=ki:d===Wa&&(u.mapping=_s),u}function c(u){let d=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function r0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Fs("WebGLRenderer: "+i+" extension not supported."),s}}}function a0(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function f(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?qs:Xs,b=new E(Math.ceil(v/3)*6,1),A=b.array;if(x!==null){let _=x.array;p=x.version;for(let S=0,L=0;S<v;S+=3){let C=_[S+0],I=_[S+1],N=_[S+2];A[L++]=C,A[L++]=I,A[L++]=I,A[L++]=N,A[L++]=N,A[L++]=C}}else{p=m.version;for(let _=0,S=0;_<v;_+=3){let L=_+0,C=_+1,I=_+2;A[S++]=L,A[S++]=C,A[S++]=C,A[S++]=I,A[S++]=I,A[S++]=L}}b.version=p;let T=r.get(g);T&&e.remove(T),r.set(g,b)}function u(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function o0(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function l0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function c0(n,e,t){let i=new WeakMap,s=new yt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let b=o.attributes.position.count*E,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*A*4*f),_=new Hs(T,b,A,f);_.type=In,_.needsUpdate=!0;let S=E*4;for(let C=0;C<f;C++){let I=m[C],N=p[C],U=v[C],R=b*A*4*C;for(let F=0;F<I.count;F++){let B=F*S;d===!0&&(s.fromBufferAttribute(I,F),T[R+B+0]=s.x,T[R+B+1]=s.y,T[R+B+2]=s.z,T[R+B+3]=0),g===!0&&(s.fromBufferAttribute(N,F),T[R+B+4]=s.x,T[R+B+5]=s.y,T[R+B+6]=s.z,T[R+B+7]=0),x===!0&&(s.fromBufferAttribute(U,F),T[R+B+8]=s.x,T[R+B+9]=s.y,T[R+B+10]=s.z,T[R+B+11]=U.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new Ze(b,A)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function h0(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function d0(n,e,t,i,s,r){let a=new pn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new At;h.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tt([0,2,0,0,2,0],2));let f=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Lt(h,f),d=new rr(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,v=null,E=[],b=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),c!==null&&c.setSize(A,T);for(let _=0;_<E.length;_++){let S=E[_];S.setSize&&S.setSize(A,T)}},this.setEffects=function(A){E=A,b=E.length>0&&E[0].isRenderPass===!0;let T=a.width,_=a.height;E.length>0&&o===null&&(o=new pn(T,_,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new pn(T,_,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&E.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new si(T,_),r===!0&&(l.format=oi,l.type=Hi)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<E.length;L++){let C=E[L];C.setSize&&C.setSize(T,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(A,T){if(m||A.toneMapping===Hn&&E.length===0)return!1;if(v=T,T!==null){let _=T.width,S=T.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Hn,!0},this.hasRenderPass=function(){return b},this.end=function(A,T){A.toneMapping=p,m=!0;let _=a,S=o;for(let L=0;L<E.length;L++){let C=E[L];C.enabled!==!1&&(C.render(A,S,_,T),C.needsSwap!==!1&&(_=S,S=S===o?c:o))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,f.defines={},je.getTransfer(g)===ct&&(f.defines.SRGB_TRANSFER="");let L=u0[x];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(v),A.render(u,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}function vs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Do(n,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function f0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function m0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function g0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function _0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;lu.set(i),n.uniformMatrix2fv(this.addr,!1,lu),Ut(t,i)}}function x0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;ou.set(i),n.uniformMatrix3fv(this.addr,!1,ou),Ut(t,i)}}function y0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;au.set(i),n.uniformMatrix4fv(this.addr,!1,au),Ut(t,i)}}function v0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function M0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function S0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function b0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function w0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function T0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function E0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function A0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Uo(n){return n.version===0&&(n.compareFunction=Zl,n.needsUpdate=!0),n}function R0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Uo(Eu):r=Tu,t.setTexture2D(e||r,s)}function C0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cu,s)}function P0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Uo(Au):r=Pu,t.setTextureCube(e||r,s)}function I0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ru,s)}function L0(n){switch(n){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return S0;case 35669:case 35673:return b0;case 5125:return w0;case 36294:return T0;case 36295:return E0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}function N0(n,e){n.uniform1fv(this.addr,e)}function D0(n,e){let t=vs(e,this.size,2);n.uniform2fv(this.addr,t)}function U0(n,e){let t=vs(e,this.size,3);n.uniform3fv(this.addr,t)}function F0(n,e){let t=vs(e,this.size,4);n.uniform4fv(this.addr,t)}function O0(n,e){let t=vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function B0(n,e){let t=vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function z0(n,e){let t=vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k0(n,e){n.uniform1iv(this.addr,e)}function H0(n,e){n.uniform2iv(this.addr,e)}function G0(n,e){n.uniform3iv(this.addr,e)}function V0(n,e){n.uniform4iv(this.addr,e)}function W0(n,e){n.uniform1uiv(this.addr,e)}function X0(n,e){n.uniform2uiv(this.addr,e)}function q0(n,e){n.uniform3uiv(this.addr,e)}function Y0(n,e){n.uniform4uiv(this.addr,e)}function Z0(n,e,t){let i=this.cache,s=e.length,r=Do(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Uo(Eu):a=Tu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function J0(n,e,t){let i=this.cache,s=e.length,r=Do(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cu,r[a])}function K0(n,e,t){let i=this.cache,s=e.length,r=Do(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Uo(Au):a=Pu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function $0(n,e,t){let i=this.cache,s=e.length,r=Do(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ru,r[a])}function j0(n){switch(n){case 5126:return N0;case 35664:return D0;case 35665:return U0;case 35666:return F0;case 35674:return O0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return k0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return $0}}function cu(n,e){n.seq.push(e),n.map[e.id]=e}function Q0(n,e,t){let i=n.name,s=i.length;for(lc.lastIndex=0;;){let r=lc.exec(i),a=lc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){cu(t,l===void 0?new hc(o,n,e):new uc(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new dc(o),cu(t,f)),t=f}}}function hu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function ng(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ig(n){je._getMatrix(uu,je.workingColorSpace,n);let e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case zs:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function du(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ng(n.getShaderSource(e),o)}else return r}function sg(n,e){let t=ig(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function ag(n,e){let t=rg[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function og(){je.getLuminanceCoefficients(Io);let n=Io.x.toFixed(4),e=Io.y.toFixed(4),t=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function cg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hg(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _r(n){return n!==""}function fu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function fc(n){return n.replace(ug,dg)}function dg(n,e){let t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fc(t)}function mu(n){return n.replace(fg,pg)}function pg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function gg(n){return mg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function xg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_g[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function vg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yg[n.combine]||"ENVMAP_BLENDING_NONE"}function Mg(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=gg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xg(t),f=vg(t),u=lg(t),d=cg(r),g=s.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(_r).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(_r).join(`
`),m.length>0&&(m+=`
`)):(x=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),m=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Hn?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,sg("linearToOutputTexel",t.outputColorSpace),og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=fc(a),a=fu(a,t),a=pu(a,t),o=fc(o),o=fu(o,t),o=pu(o,t),a=mu(a),o=mu(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=p+x+a,E=p+m+o,b=hu(s,s.VERTEX_SHADER,v),A=hu(s,s.FRAGMENT_SHADER,E);s.attachShader(g,b),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(A)||"",R=I.trim(),F=N.trim(),B=U.trim(),k=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,b,A);else{let W=du(s,b,"vertex"),ee=du(s,A,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+W+`
`+ee)}else R!==""?Fe("WebGLProgram: Program Info Log:",R):(F===""||B==="")&&(J=!1);J&&(C.diagnostics={runnable:k,programLog:R,vertexShader:{log:F,prefix:x},fragmentShader:{log:B,prefix:m}})}s.deleteShader(b),s.deleteShader(A),_=new ys(s,g),S=hg(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,eg)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}function bg(n){return n===Ei||n===fr||n===pr}function wg(n,e,t,i,s,r){let a=new Gs,o=new pc,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,L,C,I,N){let U=C.fog,R=I.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||F,B),J=u[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&Fe("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let ee=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ne=ee!==void 0?ee.length:0,te=0;R.morphAttributes.position!==void 0&&(te=1),R.morphAttributes.normal!==void 0&&(te=2),R.morphAttributes.color!==void 0&&(te=3);let Le,Y,fe,_e;if(J){let xe=Vn[J];Le=xe.vertexShader,Y=xe.fragmentShader}else{Le=_.vertexShader,Y=_.fragmentShader;let xe=o.getVertexShaderStage(_),it=o.getFragmentShaderStage(_);o.update(_,xe,it),fe=xe.id,_e=it.id}let Se=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Re=I.isInstancedMesh===!0,Qe=I.isBatchedMesh===!0,ye=!!_.map,ke=!!_.matcap,Ye=!!k,Me=Ye&&k.isPMREMTexture===!0,lt=!!_.aoMap,at=!!_.lightMap,Rt=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,Tt=!!_.displacementMap,rt=!!_.emissiveMap,Nt=!!_.metalnessMap,Et=!!_.roughnessMap,Wt=_.anisotropy>0,O=_.clearcoat>0,ie=_.diffuseRoughness>0,ut=_.dispersion>0,nt=_.retroreflectivity>0,pe=_.iridescence>0,Mt=_.sheen>0,Ne=_.transmission>0,Oe=Wt&&!!_.anisotropyMap,w=O&&!!_.clearcoatMap,y=O&&!!_.clearcoatNormalMap,H=O&&!!_.clearcoatRoughnessMap,se=ie&&!!_.diffuseRoughnessMap,$=pe&&!!_.iridescenceMap,ae=pe&&!!_.iridescenceThicknessMap,de=Mt&&!!_.sheenColorMap,K=Mt&&!!_.sheenRoughnessMap,j=!!_.specularMap,ue=!!_.specularColorMap,P=!!_.specularIntensityMap,Q=Ne&&!!_.transmissionMap,q=Ne&&!!_.thicknessMap,he=!!_.gradientMap,oe=!!_.alphaMap,ce=_.alphaTest>0,Ce=!!_.alphaHash,qe=!!_.extensions,re=Hn;_.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(re=n.toneMapping);let Ie=Me?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Be={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:Le,fragmentShader:Y,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Qe,batchingColor:Qe&&I._colorsTexture!==null,instancing:Re,instancingColor:Re&&I.instanceColor!==null,instancingMorph:Re&&I.morphTexture!==null,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ye,matcap:ke,envMap:Ye,envMapMode:Ye&&k.mapping,envMapPMREM:Me,envMapMaxLod:Me?Ie.length-1:null,envMapSize:Me?Ie[0].width:null,aoMap:lt,lightMap:at,bumpMap:Rt,normalMap:dt,displacementMap:Tt,emissiveMap:rt,normalMapObjectSpace:dt&&_.normalMapType===Oh,normalMapTangentSpace:dt&&_.normalMapType===Co,packedNormalMap:dt&&_.normalMapType===Co&&bg(_.normalMap.format),metalnessMap:Nt,roughnessMap:Et,anisotropy:Wt,anisotropyMap:Oe,clearcoat:O,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:H,diffuseRoughness:ie,diffuseRoughnessMap:se,dispersion:ut,retroreflection:nt,iridescence:pe,iridescenceMap:$,iridescenceThicknessMap:ae,sheen:Mt,sheenColorMap:de,sheenRoughnessMap:K,specularMap:j,specularColorMap:ue,specularIntensityMap:P,transmission:Ne,transmissionMap:Q,thicknessMap:q,gradientMap:he,opaque:_.transparent===!1&&_.blending===gs&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:ce,alphaHash:Ce,combine:_.combine,mapUv:ye&&d(_.map.channel),aoMapUv:lt&&d(_.aoMap.channel),lightMapUv:at&&d(_.lightMap.channel),bumpMapUv:Rt&&d(_.bumpMap.channel),normalMapUv:dt&&d(_.normalMap.channel),displacementMapUv:Tt&&d(_.displacementMap.channel),emissiveMapUv:rt&&d(_.emissiveMap.channel),metalnessMapUv:Nt&&d(_.metalnessMap.channel),roughnessMapUv:Et&&d(_.roughnessMap.channel),anisotropyMapUv:Oe&&d(_.anisotropyMap.channel),clearcoatMapUv:w&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(_.sheenRoughnessMap.channel),specularMapUv:j&&d(_.specularMap.channel),specularColorMapUv:ue&&d(_.specularColorMap.channel),specularIntensityMapUv:P&&d(_.specularIntensityMap.channel),transmissionMapUv:Q&&d(_.transmissionMap.channel),thicknessMapUv:q&&d(_.thicknessMap.channel),alphaMapUv:oe&&d(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(dt||Wt),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!R.attributes.uv&&(ye||oe),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:te,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:ye&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:rt&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&_.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(S,_),p(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let S=u[_.type],L;if(S){let C=Vn[S];L=$h.clone(C.uniforms)}else L=_.uniforms;return L}function E(_,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new Mg(n,S,_,s),l.push(L),h.set(S,L)),L}function b(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:T}}function Tg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,x,m,p){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},n[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=p),e++,v}function c(u,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let E=o(u,d,g,x,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(u,d,g,x,m,p){let v=o(u,d,g,x,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||Eg),i.length>1&&i.sort(d||_u),s.length>1&&s.sort(d||_u)}function f(){for(let u=e,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Ag(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new xu,n.set(i,[a])):s>=r.length?(a=new xu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Cg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Ig(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lg(n){let e=new Rg,t=Cg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);let s=new z,r=new _t,a=new _t;function o(l){let h=0,f=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,E=0,b=0,A=0,T=0,_=0,S=0,L=0,C=0;l.sort(Ig);for(let N=0,U=l.length;N<U;N++){let R=l[N],F=R.color,B=R.intensity,k=R.distance,J=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ei?J=R.shadow.map.texture:J=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*B,f+=F.g*B,u+=F.b*B;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],B);C++}else if(R.isSunLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,ne=t.get(R);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=J;let te=ee.getViewportCount();for(let Le=0;Le<te;Le++)i.sunShadowMatrix[x+Le]=ee.getMatrix(Le),i.sunShadowCascade[x+Le]=ee._cascadeData[Le];x+=te,g++}i.sun[d]=W,d++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,ne=t.get(R);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=W,m++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=k,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[v]=W;let ee=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,ee.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[v]=ee.matrix,R.castShadow){let ne=t.get(R);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=J,_++}v++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[E]=W,E++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let ee=R.shadow,ne=t.get(R);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=R.shadow.matrix,T++}i.point[p]=W,p++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(B),W.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[b]=W,b++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let I=i.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==E||I.hemiLength!==b||I.numSunShadows!==g||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==S||I.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=v,i.rectArea.length=E,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=E,I.hemiLength=b,I.numSunShadows=g,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=S,I.numLightProbes=C,i.version=Pg++)}function c(l,h){let f=0,u=0,d=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,E=l.length;v<E;v++){let b=l[v];if(b.isSunLight){let A=i.sun[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),f++}else if(b.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(b.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function yu(n){let e=new Lg(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ng(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new yu(n),e.set(s,[o])):r>=a.length?(o=new yu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Bg(n,e,t){let i=new vi,s=new Ze,r=new Ze,a=new yt,o=new Ra,c=new Ca,l={},h=t.maxTextureSize,f={[Ti]:qt,[qt]:Ti,[en]:en},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Dg,fragmentShader:Ug}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Lt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oi;let p=this.type;this.render=function(T,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===ph&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oi);let L=n.getRenderTarget(),C=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Bi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=p!==this.type;U&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(F=>F.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,F=T.length;R<F;R++){let B=T[R],k=B.shadow;if(k===void 0){Fe("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let J=k.getFrameExtents();s.multiply(J),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,k.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ms){if(B.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new pn(s.x,s.y,{format:Ei,type:Ln,minFilter:ln,magFilter:ln,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new si(s.x,s.y,In),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=ni,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht}else B.isPointLight?(k.map=new xr(s.x),k.map.depthTexture=new $s(s.x,Pn)):(k.map=new pn(s.x,s.y),k.map.depthTexture=new si(s.x,s.y,Pn)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=ni,this.type===Oi?(k.map.depthTexture.compareFunction=W?Yl:ql,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let ee=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();B.isPointLight!==!0&&k.updateMatrices(B,S);let ne=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:S.layers;for(let te=0;te<ee;te++){let Le=k.getCamera(te);if(B.isPointLight){let Y=k.camera,fe=k.matrix,_e=B.distance||Y.far;_e!==Y.far&&(Y.far=_e,Y.updateProjectionMatrix()),gr.setFromMatrixPosition(B.matrixWorld),Y.position.copy(gr),cc.copy(Y.position),cc.add(Fg[te]),Y.up.copy(Og[te]),Y.lookAt(cc),Y.updateMatrixWorld(),fe.makeTranslation(-gr.x,-gr.y,-gr.z),vu.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(vu,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,te),n.clear();else{te===0&&(n.setRenderTarget(k.map),n.clear());let Y=k.getViewport(te);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),N.viewport(a)}i=k.getFrustum(te),b(_,S,Le,B,ne,this.type)}k.isPointLightShadow!==!0&&this.type===ms&&v(k,S),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,C,I)};function v(T,_){let S=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new pn(s.x,s.y,{format:Ei,type:Ln}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,S,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,S,d,x,null)}function E(T,_,S,L){let C=null,I=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=S.isPointLight===!0?c:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=C.uuid,U=_.uuid,R=l[N];R===void 0&&(R={},l[N]=R);let F=R[U];F===void 0&&(F=C.clone(),R[U]=F,_.addEventListener("dispose",A)),C=F}if(C.visible=_.visible,C.wireframe=_.wireframe,L===ms?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=n.properties.get(C);N.light=S}return C}function b(T,_,S,L,C,I){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===ms)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let R=e.update(T),F=T.material;if(Array.isArray(F)){let B=R.groups;for(let k=0,J=B.length;k<J;k++){let W=B[k],ee=F[W.materialIndex];if(ee&&ee.visible){let ne=E(T,ee,L,I);T.onBeforeShadow(n,T,_,S,R,ne,W),n.renderBufferDirect(S,null,R,ne,T,W),T.onAfterShadow(n,T,_,S,R,ne,W)}}}else if(F.visible){let B=E(T,F,L,I);T.onBeforeShadow(n,T,_,S,R,B,null),n.renderBufferDirect(S,null,R,B,T,null),T.onAfterShadow(n,T,_,S,R,B,null)}}let U=T.children;for(let R=0,F=U.length;R<F;R++)b(U[R],_,S,L,C,I)}function A(T){T.target.removeEventListener("dispose",A);for(let S in l){let L=l[S],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function zg(n,e){function t(){let P=!1,Q=new yt,q=null,he=new yt(0,0,0,0);return{setMask:function(oe){q!==oe&&!P&&(n.colorMask(oe,oe,oe,oe),q=oe)},setLocked:function(oe){P=oe},setClear:function(oe,ce,Ce,qe,re){re===!0&&(oe*=qe,ce*=qe,Ce*=qe),Q.set(oe,ce,Ce,qe),he.equals(Q)===!1&&(n.clearColor(oe,ce,Ce,qe),he.copy(Q))},reset:function(){P=!1,q=null,he.set(-1,0,0,0)}}}function i(){let P=!1,Q=!1,q=null,he=null,oe=null;return{setReversed:function(ce){if(Q!==ce){let Ce=e.get("EXT_clip_control");ce?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Q=ce;let qe=oe;oe=null,this.setClear(qe)}},getReversed:function(){return Q},setTest:function(ce){ce?le(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ce){q!==ce&&!P&&(n.depthMask(ce),q=ce)},setFunc:function(ce){if(Q&&(ce=Zh[ce]),he!==ce){switch(ce){case la:n.depthFunc(n.NEVER);break;case ca:n.depthFunc(n.ALWAYS);break;case ha:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case ua:n.depthFunc(n.EQUAL);break;case da:n.depthFunc(n.GEQUAL);break;case fa:n.depthFunc(n.GREATER);break;case pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=ce}},setLocked:function(ce){P=ce},setClear:function(ce){oe!==ce&&(oe=ce,Q&&(ce=1-ce),n.clearDepth(ce))},reset:function(){P=!1,q=null,he=null,oe=null,Q=!1}}}function s(){let P=!1,Q=null,q=null,he=null,oe=null,ce=null,Ce=null,qe=null,re=null;return{setTest:function(Ie){P||(Ie?le(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Ie){Q!==Ie&&!P&&(n.stencilMask(Ie),Q=Ie)},setFunc:function(Ie,Be,xe){(q!==Ie||he!==Be||oe!==xe)&&(n.stencilFunc(Ie,Be,xe),q=Ie,he=Be,oe=xe)},setOp:function(Ie,Be,xe){(ce!==Ie||Ce!==Be||qe!==xe)&&(n.stencilOp(Ie,Be,xe),ce=Ie,Ce=Be,qe=xe)},setLocked:function(Ie){P=Ie},setClear:function(Ie){re!==Ie&&(n.clearStencil(Ie),re=Ie)},reset:function(){P=!1,Q=null,q=null,he=null,oe=null,ce=null,Ce=null,qe=null,re=null}}}let r=new t,a=new i,o=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,E=null,b=null,A=null,T=null,_=null,S=new ze(0,0,0),L=0,C=!1,I=null,N=null,U=null,R=null,F=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=J>=2);let ee=null,ne={},te=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Y=new yt().fromArray(te),fe=new yt().fromArray(Le);function _e(P,Q,q,he){let oe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(P,ce),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<q;Ce++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(Q+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return ce}let Se={};Se[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(as),Rt(!1),dt(Tl),le(n.CULL_FACE),lt(Bi);function le(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Re(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Qe(P,Q){return u[P]!==Q?(n.bindFramebuffer(P,Q),u[P]=Q,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function ye(P,Q){let q=g,he=!1;if(P){q=d.get(Q),q===void 0&&(q=[],d.set(Q,q));let oe=P.textures;if(q.length!==oe.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ce=oe.length;ce<Ce;ce++)q[ce]=n.COLOR_ATTACHMENT0+ce;q.length=oe.length,he=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,he=!0);he&&n.drawBuffers(q)}function ke(P){return x!==P?(n.useProgram(P),x=P,!0):!1}let Ye={[zi]:n.FUNC_ADD,[gh]:n.FUNC_SUBTRACT,[_h]:n.FUNC_REVERSE_SUBTRACT};Ye[xh]=n.MIN,Ye[yh]=n.MAX;let Me={[vh]:n.ZERO,[Mh]:n.ONE,[Sh]:n.SRC_COLOR,[Cl]:n.SRC_ALPHA,[Rh]:n.SRC_ALPHA_SATURATE,[Eh]:n.DST_COLOR,[wh]:n.DST_ALPHA,[bh]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[Ah]:n.ONE_MINUS_DST_COLOR,[Th]:n.ONE_MINUS_DST_ALPHA,[Ch]:n.CONSTANT_COLOR,[Ph]:n.ONE_MINUS_CONSTANT_COLOR,[Ih]:n.CONSTANT_ALPHA,[Lh]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(P,Q,q,he,oe,ce,Ce,qe,re,Ie){if(P===Bi){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(le(n.BLEND),m=!0),P!==mh){if(P!==p||Ie!==C){if((v!==zi||A!==zi)&&(n.blendEquation(n.FUNC_ADD),v=zi,A=zi),Ie)switch(P){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.ONE,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",P);break}else switch(P){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Al:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",P);break}E=null,b=null,T=null,_=null,S.set(0,0,0),L=0,p=P,C=Ie}return}oe=oe||Q,ce=ce||q,Ce=Ce||he,(Q!==v||oe!==A)&&(n.blendEquationSeparate(Ye[Q],Ye[oe]),v=Q,A=oe),(q!==E||he!==b||ce!==T||Ce!==_)&&(n.blendFuncSeparate(Me[q],Me[he],Me[ce],Me[Ce]),E=q,b=he,T=ce,_=Ce),(qe.equals(S)===!1||re!==L)&&(n.blendColor(qe.r,qe.g,qe.b,re),S.copy(qe),L=re),p=P,C=!1}function at(P,Q){P.side===en?Re(n.CULL_FACE):le(n.CULL_FACE);let q=P.side===qt;Q&&(q=!q),Rt(q),P.blending===gs&&P.transparent===!1?lt(Bi):lt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let he=P.stencilWrite;o.setTest(he),he&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),rt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(P){I!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),I=P)}function dt(P){P!==dh?(le(n.CULL_FACE),P!==N&&(P===Tl?n.cullFace(n.BACK):P===fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),N=P}function Tt(P){P!==U&&(k&&n.lineWidth(P),U=P)}function rt(P,Q,q){P?(le(n.POLYGON_OFFSET_FILL),(R!==Q||F!==q)&&(R=Q,F=q,a.getReversed()&&(Q=-Q,q=-q),n.polygonOffset(Q,q))):Re(n.POLYGON_OFFSET_FILL)}function Nt(P){P?le(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Et(P){P===void 0&&(P=n.TEXTURE0+B-1),ee!==P&&(n.activeTexture(P),ee=P)}function Wt(P,Q,q){q===void 0&&(ee===null?q=n.TEXTURE0+B-1:q=ee);let he=ne[q];he===void 0&&(he={type:void 0,texture:void 0},ne[q]=he),(he.type!==P||he.texture!==Q)&&(ee!==q&&(n.activeTexture(q),ee=q),n.bindTexture(P,Q||Se[P]),he.type=P,he.texture=Q)}function O(){let P=ne[ee];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ie(){try{n.compressedTexImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function ut(){try{n.compressedTexImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function nt(){try{n.texSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function pe(){try{n.texSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function Mt(){try{n.compressedTexSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function Ne(){try{n.compressedTexSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function Oe(){try{n.texStorage2D(...arguments)}catch(P){He("WebGLState:",P)}}function w(){try{n.texStorage3D(...arguments)}catch(P){He("WebGLState:",P)}}function y(){try{n.texImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function H(){try{n.texImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function se(P){return f[P]!==void 0?f[P]:n.getParameter(P)}function $(P,Q){f[P]!==Q&&(n.pixelStorei(P,Q),f[P]=Q)}function ae(P){Y.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Y.copy(P))}function de(P){fe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function K(P,Q){let q=l.get(Q);q===void 0&&(q=new WeakMap,l.set(Q,q));let he=q.get(P);he===void 0&&(he=n.getUniformBlockIndex(Q,P.name),n.uniformBlockBinding(Q,he,he),q.set(P,he))}function j(P,Q,q){let oe=l.get(Q).get(P);c[oe]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,oe,q),c[oe]=q)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,ne={},u={},c={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,E=null,b=null,A=null,T=null,_=null,S=new ze(0,0,0),L=0,C=!1,I=null,N=null,U=null,R=null,F=null,Y.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Re,bindFramebuffer:Qe,drawBuffers:ye,useProgram:ke,setBlending:lt,setMaterial:at,setFlipSided:Rt,setCullFace:dt,setLineWidth:Tt,setPolygonOffset:rt,setScissorTest:Nt,activeTexture:Et,bindTexture:Wt,unbindTexture:O,compressedTexImage2D:ie,compressedTexImage3D:ut,texImage2D:y,texImage3D:H,pixelStorei:$,getParameter:se,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Oe,texStorage3D:w,texSubImage2D:nt,texSubImage3D:pe,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Ne,scissor:ae,viewport:de,reset:ue}}function kg(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,x=new FinalizationRegistry(w=>g.delete(w)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,y){return m?new OffscreenCanvas(w,y):ks("canvas")}function v(w,y,H){let se=1,$=Oe(w);if(($.width>H||$.height>H)&&(se=H/Math.max($.width,$.height)),se<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ae=Math.floor(se*$.width),de=Math.floor(se*$.height);u===void 0&&(u=p(ae,de));let K=y?p(ae,de):u;return K.width=ae,K.height=de,K.getContext("2d").drawImage(w,0,0,ae,de),Fe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ae+"x"+de+")."),K}else return"data"in w&&Fe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function E(w){return w.generateMipmaps}function b(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,y,H,se,$,ae=!1){if(w!==null){if(n[w]!==void 0)return n[w];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de;se&&(de=e.get("EXT_texture_norm16"),de||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8),H===n.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),H===n.SHORT&&de&&(K=de.R16_SNORM_EXT)),y===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),y===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8),H===n.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),H===n.SHORT&&de&&(K=de.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),y===n.RGB&&(H===n.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),H===n.SHORT&&de&&(K=de.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),y===n.RGBA){let j=ae?zs:je.getTransfer($);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=j===ct?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),H===n.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(w,y){let H;return w?y===null||y===Pn||y===Hi?H=n.DEPTH24_STENCIL8:y===In?H=n.DEPTH32F_STENCIL8:y===xs&&(H=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Pn||y===Hi?H=n.DEPTH_COMPONENT24:y===In?H=n.DEPTH_COMPONENT32F:y===xs&&(H=n.DEPTH_COMPONENT16),H}function S(w,y){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ht&&w.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function L(w){let y=new WeakRef(w);i.get(w).__ref=y,g.add(y),x.register(w,y,y)}function C(w){let y=i.get(w).__ref;y!==void 0&&(g.delete(y),x.unregister(y))}function I(w){U(w.target)}function N(w){R(w.target)}function U(w){w.removeEventListener("dispose",I),C(w),B(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function R(w){w.removeEventListener("dispose",N),C(w),J(w)}function F(){for(let w of g){let y=w.deref();y!==void 0&&(y.isRenderTarget===!0?R(y):U(y))}g.clear(),f.clear()}function B(w){let y=i.get(w);if(y.__webglInit===void 0)return;let H=w.source,se=d.get(H);if(se){let $=se[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&k(w),Object.keys(se).length===0&&d.delete(H)}i.remove(w)}function k(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let H=w.source,se=d.get(H);delete se[y.__cacheKey],a.memory.textures--}function J(w){let y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();let H=w.depthTexture;if(H&&H.renderTarget===w&&U(H),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let ae=0;ae<y.__webglFramebuffer[$].length;ae++)n.deleteFramebuffer(y.__webglFramebuffer[$][ae]);else n.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)n.deleteFramebuffer(y.__webglFramebuffer[$]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let se=w.textures;for(let $=0,ae=se.length;$<ae;$++){let de=i.get(se[$]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(se[$])}i.remove(w)}let W=0;function ee(){W=0}function ne(){return W}function te(w){W=w}function Le(){let w=W;return w>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function Y(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function fe(w,y){let H=i.get(w);if(w.isVideoTexture&&Mt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let se=w.image;if(se===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{at(H,w,y);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+y)}function _e(w,y){let H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){at(H,w,y);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+y)}function Se(w,y){let H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){at(H,w,y);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+y)}function le(w,y){let H=i.get(w);if(w.version>0&&H.__version!==w.version){Rt(H,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+y)}let Re={[Ui]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},Qe={[Ht]:n.NEAREST,[Uh]:n.NEAREST_MIPMAP_NEAREST,[lr]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Xa]:n.LINEAR_MIPMAP_NEAREST,[ai]:n.LINEAR_MIPMAP_LINEAR},ye={[zh]:n.NEVER,[Zl]:n.ALWAYS,[kh]:n.LESS,[ql]:n.LEQUAL,[Hh]:n.EQUAL,[Yl]:n.GEQUAL,[Gh]:n.GREATER,[Vh]:n.NOTEQUAL};function ke(w,y){if(y.type===In&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ln||y.magFilter===Xa||y.magFilter===lr||y.magFilter===ai||y.minFilter===ln||y.minFilter===Xa||y.minFilter===lr||y.minFilter===ai)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Re[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Re[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Re[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Qe[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Qe[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ye[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ht||y.minFilter!==lr&&y.minFilter!==ai||y.type===In&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(w,y){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",I),L(y));let se=y.source,$=d.get(se);$===void 0&&($={},d.set(se,$));let ae=Y(y);if(ae!==w.__cacheKey){$[ae]===void 0&&($[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[ae].usedTimes++;let de=$[w.__cacheKey];de!==void 0&&($[w.__cacheKey].usedTimes--,de.usedTimes===0&&k(y)),w.__cacheKey=ae,w.__webglTexture=$[ae].texture}return H}function Me(w,y,H){return Math.floor(Math.floor(w/H)/y)}function lt(w,y,H,se){let ae=w.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,H,se,y.data);else{ae.sort((P,Q)=>P.start-Q.start);let de=0;for(let P=1;P<ae.length;P++){let Q=ae[de],q=ae[P],he=Q.start+Q.count,oe=Me(q.start,y.width,4),ce=Me(Q.start,y.width,4);q.start<=he+1&&oe===ce&&Me(q.start+q.count-1,y.width,4)===oe?Q.count=Math.max(Q.count,q.start+q.count-Q.start):(++de,ae[de]=q)}ae.length=de+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let P=0,Q=ae.length;P<Q;P++){let q=ae[P],he=Math.floor(q.start/4),oe=Math.ceil(q.count/4),ce=he%y.width,Ce=Math.floor(he/y.width),qe=oe,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(n.TEXTURE_2D,0,ce,Ce,qe,re,H,se,y.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function at(w,y,H){let se=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=n.TEXTURE_3D);let $=Ye(w,y),ae=y.source;t.bindTexture(se,w.__webglTexture,n.TEXTURE0+H);let de=i.get(ae);if(ae.version!==de.__version||$===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let re=je.getPrimaries(je.workingColorSpace),Ie=y.colorSpace===li?null:je.getPrimaries(y.colorSpace),Be=y.colorSpace===li||re===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let j=v(y.image,!1,s.maxTextureSize);j=Ne(y,j);let ue=r.convert(y.format,y.colorSpace),P=r.convert(y.type),Q=T(y.internalFormat,ue,P,y.normalized,y.colorSpace,y.isVideoTexture);ke(se,y);let q,he=y.mipmaps,oe=y.isVideoTexture!==!0,ce=de.__version===void 0||$===!0,Ce=ae.dataReady,qe=S(y,j);if(y.isDepthTexture)Q=_(y.format===oi,y.type),ce&&(oe?t.texStorage2D(n.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,Q,j.width,j.height,0,ue,P,null));else if(y.isDataTexture)if(he.length>0){oe&&ce&&t.texStorage2D(n.TEXTURE_2D,qe,Q,he[0].width,he[0].height);for(let re=0,Ie=he.length;re<Ie;re++)q=he[re],oe?Ce&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ue,P,q.data):t.texImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,ue,P,q.data);y.generateMipmaps=!1}else oe?(ce&&t.texStorage2D(n.TEXTURE_2D,qe,Q,j.width,j.height),Ce&&lt(y,j,ue,P)):t.texImage2D(n.TEXTURE_2D,0,Q,j.width,j.height,0,ue,P,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){oe&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,Q,he[0].width,he[0].height,j.depth);for(let re=0,Ie=he.length;re<Ie;re++)if(q=he[re],y.format!==Nn)if(ue!==null)if(oe){if(Ce)if(y.layerUpdates.size>0){let Be=tc(q.width,q.height,y.format,y.type);for(let xe of y.layerUpdates){let it=q.data.subarray(xe*Be/q.data.BYTES_PER_ELEMENT,(xe+1)*Be/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,xe,q.width,q.height,1,ue,it)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,q.width,q.height,j.depth,ue,q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Q,q.width,q.height,j.depth,0,q.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,q.width,q.height,j.depth,ue,P,q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Q,q.width,q.height,j.depth,0,ue,P,q.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{oe&&ce&&t.texStorage2D(n.TEXTURE_2D,qe,Q,he[0].width,he[0].height);for(let re=0,Ie=he.length;re<Ie;re++)q=he[re],y.format!==Nn?ue!==null?oe?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ue,q.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,q.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ce&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ue,P,q.data):t.texImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,ue,P,q.data)}else if(y.isDataArrayTexture)if(oe){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,Q,j.width,j.height,j.depth),Ce)if(y.layerUpdates.size>0){let re=tc(j.width,j.height,y.format,y.type);for(let Ie of y.layerUpdates){let Be=j.data.subarray(Ie*re/j.data.BYTES_PER_ELEMENT,(Ie+1)*re/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,j.width,j.height,1,ue,P,Be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ue,P,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ue,P,j.data);else if(y.isData3DTexture)oe?(ce&&t.texStorage3D(n.TEXTURE_3D,qe,Q,j.width,j.height,j.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ue,P,j.data)):t.texImage3D(n.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ue,P,j.data);else if(y.isFramebufferTexture){if(ce)if(oe)t.texStorage2D(n.TEXTURE_2D,qe,Q,j.width,j.height);else{let re=j.width,Ie=j.height;for(let Be=0;Be<qe;Be++)t.texImage2D(n.TEXTURE_2D,Be,Q,re,Ie,0,ue,P,null),re>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),j.parentNode!==re){re.appendChild(j),f.add(y),re.onpaint=Ie=>{let Be=Ie.changedElements;for(let xe of f)Be.includes(xe.image)&&(xe.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let Be=n.RGBA,xe=n.RGBA,it=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,xe,it,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(he.length>0){if(oe&&ce){let re=Oe(he[0]);t.texStorage2D(n.TEXTURE_2D,qe,Q,re.width,re.height)}for(let re=0,Ie=he.length;re<Ie;re++)q=he[re],oe?Ce&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ue,P,q):t.texImage2D(n.TEXTURE_2D,re,Q,ue,P,q);y.generateMipmaps=!1}else if(oe){if(ce){let re=Oe(j);t.texStorage2D(n.TEXTURE_2D,qe,Q,re.width,re.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,P,j)}else t.texImage2D(n.TEXTURE_2D,0,Q,ue,P,j);E(y)&&y.mipmapsAutoUpdate===!0&&b(se),de.__version=ae.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Rt(w,y,H){if(y.image.length!==6)return;let se=Ye(w,y),$=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+H);let ae=i.get($);if($.version!==ae.__version||se===!0){t.activeTexture(n.TEXTURE0+H);let de=je.getPrimaries(je.workingColorSpace),K=y.colorSpace===li?null:je.getPrimaries(y.colorSpace),j=y.colorSpace===li||de===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ue=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let xe=0;xe<6;xe++)!ue&&!P?Q[xe]=v(y.image[xe],!0,s.maxCubemapSize):Q[xe]=P?y.image[xe].image:y.image[xe],Q[xe]=Ne(y,Q[xe]);let q=Q[0],he=r.convert(y.format,y.colorSpace),oe=r.convert(y.type),ce=T(y.internalFormat,he,oe,y.normalized,y.colorSpace),Ce=y.isVideoTexture!==!0,qe=ae.__version===void 0||se===!0,re=$.dataReady,Ie=S(y,q);ke(n.TEXTURE_CUBE_MAP,y);let Be;if(y.isDepthTexture){if(ce=_(y.format===oi,y.type),qe)if(Ce)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ce,q.width,q.height);else for(let xe=0;xe<6;xe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,q.width,q.height,0,he,oe,null)}else if(ue){Ce&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ce,q.width,q.height);for(let xe=0;xe<6;xe++){Be=Q[xe].mipmaps;for(let it=0;it<Be.length;it++){let Ct=Be[it];y.format!==Nn?he!==null?Ce?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,0,0,Ct.width,Ct.height,he,Ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,ce,Ct.width,Ct.height,0,Ct.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,0,0,Ct.width,Ct.height,he,oe,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,ce,Ct.width,Ct.height,0,he,oe,Ct.data)}}}else{if(Be=y.mipmaps,Ce&&qe){Be.length>0&&Ie++;let xe=Oe(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ce,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(P){Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Q[xe].width,Q[xe].height,he,oe,Q[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,Q[xe].width,Q[xe].height,0,he,oe,Q[xe].data);for(let it=0;it<Be.length;it++){let Sn=Be[it].image[xe].image;Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,0,0,Sn.width,Sn.height,he,oe,Sn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,ce,Sn.width,Sn.height,0,he,oe,Sn.data)}}else{Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,he,oe,Q[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,he,oe,Q[xe]);for(let it=0;it<Be.length;it++){let Ct=Be[it];Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,0,0,he,oe,Ct.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,ce,he,oe,Ct.image[xe])}}}E(y)&&y.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),ae.__version=$.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function dt(w,y,H,se,$,ae){let de=r.convert(H.format,H.colorSpace),K=r.convert(H.type),j=T(H.internalFormat,de,K,H.normalized,H.colorSpace),ue=i.get(y),P=i.get(H);if(P.__renderTarget=y,!ue.__hasExternalTextures){let Q=Math.max(1,y.width>>ae),q=Math.max(1,y.height>>ae);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ae,j,Q,q,y.depth,0,de,K,null):t.texImage2D($,ae,j,Q,q,0,de,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),pe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,$,P.__webglTexture,0,nt(y)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,$,P.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(w,y,H){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let se=y.depthTexture,$=se&&se.isDepthTexture?se.type:null,ae=_(y.stencilBuffer,$),de=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt(y),ae,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt(y),ae,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ae,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,w)}else{let se=y.textures;for(let $=0;$<se.length;$++){let ae=se[$],de=r.convert(ae.format,ae.colorSpace),K=r.convert(ae.type),j=T(ae.internalFormat,de,K,ae.normalized,ae.colorSpace);pe(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt(y),j,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt(y),j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(w,y,H){let se=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(y.depthTexture);$.__renderTarget=y;let ae=se?y.depthTexture.image[0]:y.depthTexture.image;(!$.__webglTexture||ae.width!==y.width||ae.height!==y.height)&&(ae.width=y.width,ae.height=y.height,y.depthTexture.needsUpdate=!0),se?le(y.depthTexture,0):fe(y.depthTexture,0);let de=$.__webglTexture,K=nt(y),j=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ue=y.depthTexture.format===oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===ni)pe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,j,de,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ue,j,de,0);else if(y.depthTexture.format===oi)pe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,j,de,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ue,j,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(w){let y=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let se=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",$)};se.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=se}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let se=0;se<6;se++)rt(y.__webglFramebuffer[se],w,se);else w.texture.mipmaps.length>0?rt(y.__webglFramebuffer[0],w,0):rt(y.__webglFramebuffer,w,0);else if(H){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=n.createRenderbuffer(),Tt(y.__webglDepthbuffer[se],w,!1);else{let $=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ae)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Tt(y.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(w,y,H){let se=i.get(w);y!==void 0&&dt(se.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Nt(w)}function Wt(w){let y=w.texture,H=i.get(w),se=i.get(y);w.addEventListener("dispose",N),L(w);let $=w.textures,ae=w.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=y.version,a.memory.textures++),ae){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let j=0;j<y.mipmaps.length;j++)H.__webglFramebuffer[K][j]=n.createFramebuffer()}else H.__webglFramebuffer[K]=n.createFramebuffer()}else{if(y.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)H.__webglFramebuffer[K]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(de)for(let K=0,j=$.length;K<j;K++){let ue=i.get($[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&pe(w)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let j=$[K];H.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[K]);let ue=r.convert(j.format,j.colorSpace),P=r.convert(j.type),Q=T(j.internalFormat,ue,P,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),q=nt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,Q,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,H.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ke(n.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)dt(H.__webglFramebuffer[K][j],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else dt(H.__webglFramebuffer[K],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(y)?b(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(de){for(let K=0,j=$.length;K<j;K++){let ue=$[K],P=i.get(ue),Q=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,P.__webglTexture),ke(Q,ue),dt(H.__webglFramebuffer,w,ue,n.COLOR_ATTACHMENT0+K,Q,0),E(ue)&&b(Q)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,se.__webglTexture),ke(K,y),y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)dt(H.__webglFramebuffer[j],w,y,n.COLOR_ATTACHMENT0,K,j);else dt(H.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,K,0);E(y)?b(K):y.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Nt(w)}function O(w){let y=w.textures;for(let H=0,se=y.length;H<se;H++){let $=y[H];if(E($)&&$.mipmapsAutoUpdate===!0){let ae=A(w),de=i.get($).__webglTexture;t.bindTexture(ae,de),b(ae),t.unbindTexture()}}}let ie=[];function ut(w){if(w.samples>0){if(pe(w)===!1){let y=w.textures,H=w.width,se=w.height,$=n.COLOR_BUFFER_BIT,ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(w),K=y.length>1;if(K)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let P=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,H,se,0,0,H,se,$,n.NEAREST),c===!0&&(ie.length=0,ie.push(n.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&ie.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let P=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function nt(w){return Math.min(s.maxSamples,w.samples)}function pe(w){let y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(w){let y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Ne(w,y){let H=w.colorSpace,se=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Bs&&H!==li&&(je.getTransfer(H)===ct?(se!==Nn||$!==hn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",H)),y}function Oe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Le,this.resetTextureUnits=ee,this.getTextureUnits=ne,this.setTextureUnits=te,this.setTexture2D=fe,this.setTexture2DArray=_e,this.setTexture3D=Se,this.setTextureCube=le,this.rebindTextures=Et,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=pe,this.dispose=F}function Hg(n,e){function t(i,s=li){let r,a=je.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===Ya)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===zl)return n.BYTE;if(i===kl)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===qa)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===Vl)return n.ALPHA;if(i===Wl)return n.RGB;if(i===Nn)return n.RGBA;if(i===ni)return n.DEPTH_COMPONENT;if(i===oi)return n.DEPTH_STENCIL;if(i===Xl)return n.RED;if(i===Ja)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===Ka)return n.RG_INTEGER;if(i===$a)return n.RGBA_INTEGER;if(i===cr||i===hr||i===ur||i===dr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===Qa||i===eo||i===to)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===no||i===io||i===so||i===ro||i===ao||i===fr||i===oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===no||i===io)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===so)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ro)return r.COMPRESSED_R11_EAC;if(i===ao)return r.COMPRESSED_SIGNED_R11_EAC;if(i===fr)return r.COMPRESSED_RG11_EAC;if(i===oo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===yo||i===vo||i===Mo||i===So)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===co)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===po)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===So)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bo||i===wo||i===To)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===bo)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eo||i===Ao||i===pr||i===Ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function Xg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),E=v.envMap,b=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Iu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qg(n,e,t,i){let s={},r={};function a(v,E){let b=E.program;i.uniformBlockBinding(v,b,s[v.id])}function o(v,E){let b=s[v.id];b===void 0&&(g(v),b=c(v),s[v.id]=b,v.addEventListener("dispose",m));let A=E.program;i.updateUBOMapping(v,A);let T=e.render.frame;r[v.id]!==T&&(l(v),r[v.id]=T)}function c(v){let E=n.createBuffer(),b=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function l(v){let E=s[v.id],b=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,_=b.length;T<_;T++){let S=b[T];if(Array.isArray(S))for(let L=0,C=S.length;L<C;L++)h(S[L],T,L,A);else h(S,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,E,b,A){if(u(v,E,b,A)===!0){let T=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let C=_[L],I=x(C,!0);f(C,v.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function f(v,E,b){typeof v=="number"||typeof v=="boolean"?E[b]=v:v.isMatrix3?(E[b]=v.elements[0],E[b+1]=v.elements[1],E[b+2]=v.elements[2],E[b+3]=0,E[b+4]=v.elements[3],E[b+5]=v.elements[4],E[b+6]=v.elements[5],E[b+7]=0,E[b+8]=v.elements[6],E[b+9]=v.elements[7],E[b+10]=v.elements[8],E[b+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-b),b):v.toArray(E,b)}function u(v,E,b,A){let T=v.value,_=E+"_"+b;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);let S=A[_],L=!1;for(let C=0;C<T.length;C++)d(T[C],S,C)===!0&&(L=!0);return L}return d(T,A,_)}function d(v,E,b){if(E[b]===void 0)return typeof v=="number"||typeof v=="boolean"?E[b]=v:ArrayBuffer.isView(v)?E[b]=v.slice():E[b]=v.clone(),!0;{let A=E[b];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function g(v){let E=v.uniforms,b=0,A=16;for(let _=0,S=E.length;_<S;_++){let L=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,I=L.length;C<I;C++){let N=L[C],U=Array.isArray(N.value)?N.value:[N.value],R=Array.isArray(E[_])||Array.isArray(N.value),F=b;for(let k=0,J=U.length;k<J;k++){let W=U[k],ee=x(W,R),ne=b%A,te=ne%ee.boundary,Le=ne+te;b+=te,Le!==0&&A-Le<ee.storage&&(b+=A-Le),k===0&&(F=b),b+=ee.storage}let B=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new B((b-F)/Float32Array.BYTES_PER_ELEMENT),N.__offset=F}}let T=b%A;return T>0&&(b+=A-T),v.__size=b,v.__cache={},this}function x(v,E){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(v){let E=v.target;E.removeEventListener("dispose",m),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}function Zg(){return Gn===null&&(Gn=new Ma(Yg,16,16,Ei,Ln),Gn.name="DFG_LUT",Gn.minFilter=ln,Gn.magFilter=ln,Gn.wrapS=Fn,Gn.wrapT=Fn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var uf,df,ff,pf,mf,gf,_f,xf,yf,vf,Mf,Sf,bf,wf,Tf,Ef,Af,Rf,Cf,Pf,If,Lf,Nf,Df,Uf,Ff,Of,Bf,zf,kf,Hf,Gf,Vf,Wf,Xf,qf,Yf,Zf,Jf,Kf,$f,jf,Qf,ep,tp,np,ip,sp,rp,ap,op,lp,cp,hp,up,dp,fp,pp,mp,gp,_p,xp,yp,vp,Mp,Sp,bp,wp,Tp,Ep,Ap,Rp,Cp,Pp,Ip,Lp,Np,Dp,Up,Fp,Op,Bp,zp,kp,Hp,Gp,Vp,Wp,Xp,qp,Yp,Zp,Jp,Kp,$p,jp,Qp,em,tm,nm,im,sm,rm,am,om,lm,cm,hm,um,dm,fm,pm,mm,gm,_m,xm,ym,vm,Mm,Sm,bm,wm,Tm,Em,Am,Rm,Cm,Pm,Im,Lm,Nm,Dm,Um,Fm,Om,Bm,zm,km,Hm,Gm,Vm,Je,ve,Vn,Po,Wm,Su,xr,eu,Km,$m,bu,wu,jm,Qm,e0,Lo,u0,Tu,Eu,Au,Ru,Cu,Pu,su,ru,au,ou,lu,hc,uc,dc,lc,ys,eg,tg,uu,rg,Io,ug,fg,mg,_g,yg,Sg,pc,mc,Pg,Dg,Ug,Fg,Og,vu,gr,cc,Gg,Vg,gc,_c,Wg,Iu,Yg,Gn,No,xc=Jn(()=>{oc();oc();uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Df=`#define PI 3.141592653589793
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
} // validated`,Uf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
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
#endif`,lp=`uniform sampler2D dfgLUT;
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
}`,cp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform float backgroundBlurriness;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Um=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Om=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Gm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:uf,alphahash_pars_fragment:df,alphamap_fragment:ff,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:xf,batching_pars_vertex:yf,batching_vertex:vf,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:bf,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:Pf,color_pars_fragment:If,color_pars_vertex:Lf,color_vertex:Nf,common:Df,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Of,emissivemap_fragment:Bf,emissivemap_pars_fragment:zf,colorspace_fragment:kf,colorspace_pars_fragment:Hf,envmap_fragment:Gf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:np,envmap_vertex:qf,fog_vertex:Yf,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,lightprobes_pars_fragment:dp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:xp,map_particle_fragment:yp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:bp,morphcolor_vertex:wp,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Ip,normal_vertex:Lp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:zp,premultiplied_alpha_fragment:kp,project_vertex:Hp,dithering_fragment:Gp,dithering_pars_fragment:Vp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:Kp,skinning_pars_vertex:$p,skinning_vertex:jp,skinnormal_vertex:Qp,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:lm,worldpos_vertex:cm,background_vert:hm,background_frag:um,backgroundCube_vert:dm,backgroundCube_frag:fm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distance_vert:xm,distance_frag:ym,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:bm,meshbasic_vert:wm,meshbasic_frag:Tm,meshlambert_vert:Em,meshlambert_frag:Am,meshmatcap_vert:Rm,meshmatcap_frag:Cm,meshnormal_vert:Pm,meshnormal_frag:Im,meshphong_vert:Lm,meshphong_frag:Nm,meshphysical_vert:Dm,meshphysical_frag:Um,meshtoon_vert:Fm,meshtoon_frag:Om,points_vert:Bm,points_frag:zm,shadow_vert:km,shadow_frag:Hm,sprite_vert:Gm,sprite_frag:Vm},ve={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:tn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:tn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:tn([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:tn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:tn([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:tn([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:tn([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:tn([ve.lights,ve.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};Po={r:0,b:0,g:0},Wm=new _t,Su=new Ve;Su.set(-1,0,0,0,1,0,0,0,1);xr=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Bi});r.uniforms.tEquirect.value=t;let a=new Lt(s,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=ln),new ps(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},eu=256,Km=3,$m=20,bu=256,wu=16,jm=3,Qm=new z,e0=new ze,Lo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ps(1,10,null),this._boxMesh=new Lt(new Vt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Qm}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(e0));let m=new ps(i,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(eu,Jh(e))}_fromTexture(e,t){e.mapping===ki||e.mapping===_s?this._setSize(e.image.length===0?eu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=tu(e,!1,!1),i=Math.log2(e)-Km;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=tu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ki||e.mapping===_s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=t0(),this._integrationMaterial=n0());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/wu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-jm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(bu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=i0());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};u0={[Ll]:"LINEAR_TONE_MAPPING",[Nl]:"REINHARD_TONE_MAPPING",[Dl]:"CINEON_TONE_MAPPING",[or]:"ACES_FILMIC_TONE_MAPPING",[Fl]:"AGX_TONE_MAPPING",[Ol]:"NEUTRAL_TONE_MAPPING",[Ul]:"CUSTOM_TONE_MAPPING"};Tu=new cn,Eu=new si(1,1),Au=new $s(1),Ru=new Hs,Cu=new va,Pu=new Js,su=[],ru=[],au=new Float32Array(16),ou=new Float32Array(9),lu=new Float32Array(4);hc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=L0(t.type)}},uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j0(t.type)}},dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},lc=/(\w+)(\])?(\[|\.)?/g;ys=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Q0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};eg=37297,tg=0;uu=new Ve;rg={[Ll]:"Linear",[Nl]:"Reinhard",[Dl]:"Cineon",[or]:"ACESFilmic",[Fl]:"AgX",[Ol]:"Neutral",[Ul]:"Custom"};Io=new z;ug=/^[ \t]*#include +<([\w\d./]+)>/gm;fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;mg={[Oi]:"SHADOWMAP_TYPE_PCF",[ms]:"SHADOWMAP_TYPE_VSM"};_g={[_s]:"ENVMAP_MODE_REFRACTION"};yg={[Il]:"ENVMAP_BLENDING_MULTIPLY",[Nh]:"ENVMAP_BLENDING_MIX",[Dh]:"ENVMAP_BLENDING_ADD"};Sg=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mc(e),t.set(e,i)),i}},mc=class{constructor(e){this.id=Sg++,this.code=e,this.usedTimes=0}};Pg=0;Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
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
}`,Fg=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Og=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],vu=new _t,gr=new z,cc=new z;Gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
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

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new js(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new kn({vertexShader:Gg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_c=class extends On{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new gc,p={},v=t.getContextAttributes(),E=null,b=null,A=[],T=[],_=new Ze,S=null,L=null,C=new on;C.viewport=new yt;let I=new on;I.viewport=new yt;let N=[C,I],U=new Ha,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=A[Y];return fe===void 0&&(fe=new hs,A[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=A[Y];return fe===void 0&&(fe=new hs,A[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=A[Y];return fe===void 0&&(fe=new hs,A[Y]=fe),fe.getHandSpace()};function B(Y){let fe=T.indexOf(Y.inputSource);if(fe===-1)return;let _e=A[fe];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,l||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<A.length;Y++){let fe=T[Y];fe!==null&&(T[Y]=null,A[Y].disconnect(fe))}R=null,F=null,m.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(E),d=null,u=null,f=null,s=null,b=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),L!==null){let Y=L.camera;Y.fov=L.fov,Y.zoom=L.zoom,Y.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Se=null,le=null;v.depth&&(le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?oi:ni,Se=v.stencil?Hi:Pn);let Re={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new pn(u.textureWidth,u.textureHeight,{format:Nn,type:hn,depthTexture:new si(u.textureWidth,u.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new pn(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Y){for(let fe=0;fe<Y.removed.length;fe++){let _e=Y.removed[fe],Se=T.indexOf(_e);Se>=0&&(T[Se]=null,A[Se].disconnect(_e))}for(let fe=0;fe<Y.added.length;fe++){let _e=Y.added[fe],Se=T.indexOf(_e);if(Se===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push(_e),Se=Re;break}else if(T[Re]===null){T[Re]=_e,Se=Re;break}if(Se===-1)break}let le=A[Se];le&&le.connect(_e)}}function W(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let fe=Y.near,_e=Y.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),U.near=I.near=C.near=fe,U.far=I.far=C.far=_e,(R!==U.near||F!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),R=U.near,F=U.far),U.layers.mask=Y.layers.mask|6,C.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let Se=Y.parent,le=U.cameras;W(U,Se);for(let Re=0;Re<le.length;Re++)W(le[Re],Se);U.projectionMatrix.copy(C.projectionMatrix),U.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&Y.isPerspectiveCamera&&(L={camera:Y,fov:Y.fov,zoom:Y.zoom}),ee(Y,U,Se)};function ee(Y,fe,_e){_e===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_a*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let ne=null;function te(Y,fe){if(h=fe.getViewerPose(l||a),g=fe,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Se=!1;_e.length!==U.cameras.length&&(U.cameras.length=0,Se=!0);for(let ye=0;ye<_e.length;ye++){let ke=_e[ye],Ye=null;if(d!==null)Ye=d.getViewport(ke);else{let lt=f.getViewSubImage(u,ke);Ye=lt.viewport,ye===0&&(e.setRenderTargetTextures(b,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(b))}let Me=N[ye];Me===void 0&&(Me=new on,Me.layers.enable(ye),Me.viewport=new yt,N[ye]=Me),Me.matrix.fromArray(ke.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ke.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ye===0&&(U.matrix.copy(Me.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Se===!0&&U.cameras.push(Me)}let le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let ye=f.getDepthInformation(_e[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,s.renderState)}if(le&&le.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let ye=0;ye<_e.length;ye++){let ke=_e[ye].camera;if(ke){let Ye=p[ke];Ye||(Ye=new js,p[ke]=Ye);let Me=f.getCameraImage(ke);Ye.sourceTexture=Me}}}}for(let _e=0;_e<A.length;_e++){let Se=T[_e],le=A[_e];Se!==null&&le!==void 0&&le.update(Se,fe,l||a)}ne&&ne(Y,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Le=new Mu;Le.setAnimationLoop(te),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}},Wg=new _t,Iu=new Ve;Iu.set(-1,0,0,0,1,0,0,0,1);Yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;No=class{constructor(e={}){let{canvas:t=Xh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=hn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=d,m=new Set([$a,Ka,Ja]),p=new Set([hn,Pn,xs,Hi,Ya,Za]),v=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,T=null,_=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,N=null,U=null,R=null,F=null;this._outputColorSpace=jt;let B=0,k=0,J=null,W=-1,ee=null,ne=new yt,te=new yt,Le=null,Y=new ze(0),fe=0,_e=t.width,Se=t.height,le=1,Re=null,Qe=null,ye=new yt(0,0,_e,Se),ke=new yt(0,0,_e,Se),Ye=!1,Me=new vi,lt=new Sa,at=!1,Rt=!1,dt=new _t,Tt=new z,rt=new yt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Wt(){return J===null?le:1}let O=i;function ie(M,D){return t.getContext(M,D)}let ut,nt,pe,Mt,Ne,Oe,w,y,H,se,$,ae,de,K,j,ue,P,Q,q,he,oe,ce,Ce;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){let D="webgl2";if(O=ie(D,M),O===null)throw ie(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(M){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),He("WebGLRenderer: "+M.message),M}function qe(){ut=new r0(O),ut.init(),oe=new Hg(O,ut),nt=new Zm(O,ut,e,oe),pe=new zg(O,ut),nt.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),U=O.createFramebuffer(),R=O.createFramebuffer(),F=O.createFramebuffer(),Mt=new l0(O),Ne=new Tg,Oe=new kg(O,ut,pe,Ne,nt,oe,Mt),w=new s0(C),y=new hf(O),ce=new qm(O,y),H=new a0(O,y,Mt,ce),se=new h0(O,H,y,ce,Mt),Q=new c0(O,nt,Oe),j=new Jm(Ne),$=new wg(C,w,ut,nt,ce,j),ae=new Xg(C,Ne),de=new Ag,K=new Ng(ut),P=new Xm(C,w,pe,se,g,c),ue=new Bg(C,se,nt),Ce=new qg(O,Mt,nt,pe),q=new Ym(O,ut,Mt),he=new o0(O,ut,Mt),Mt.programs=$.programs,C.capabilities=nt,C.extensions=ut,C.properties=Ne,C.renderLists=de,C.shadowMap=ue,C.state=pe,C.info=Mt}x!==hn&&(L=new d0(x,t.width,t.height,o,s,r));let re=new _c(C,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=ut.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ut.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(M){M!==void 0&&(le=M,this.setSize(_e,Se,!1))},this.getSize=function(M){return M.set(_e,Se)},this.setSize=function(M,D,X=!0){if(re.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=M,Se=D,t.width=Math.floor(M*le),t.height=Math.floor(D*le),X===!0&&(t.style.width=M+"px",t.style.height=D+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(_e*le,Se*le).floor()},this.setDrawingBufferSize=function(M,D,X){_e=M,Se=D,le=X,t.width=Math.floor(M*X),t.height=Math.floor(D*X),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(x===hn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ne)},this.getViewport=function(M){return M.copy(ye)},this.setViewport=function(M,D,X,G){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,D,X,G),pe.viewport(ne.copy(ye).multiplyScalar(Wt()).round())},this.getScissor=function(M){return M.copy(ke)},this.setScissor=function(M,D,X,G){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,D,X,G),pe.scissor(te.copy(ke).multiplyScalar(Wt()).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(M){pe.setScissorTest(Ye=M)},this.setOpaqueSort=function(M){Re=M},this.setTransparentSort=function(M){Qe=M},this.getClearColor=function(M){return M.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,X=!0){let G=0;if(M){let V=!1;if(J!==null){let ge=J.texture.format;V=m.has(ge)}if(V){let ge=J.texture.type,we=p.has(ge),me=P.getClearColor(),be=P.getClearAlpha(),Pe=me.r,Xe=me.g,Ke=me.b;we?(v[0]=Pe,v[1]=Xe,v[2]=Ke,v[3]=be,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=Pe,E[1]=Xe,E[2]=Ke,E[3]=be,O.clearBufferiv(O.COLOR,0,E))}else G|=O.COLOR_BUFFER_BIT}D&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),P.dispose(),de.dispose(),K.dispose(),Oe.dispose(),Ne.dispose(),w.dispose(),se.dispose(),H.dispose(),ce.dispose(),Ce.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",ws),re.removeEventListener("sessionend",Er),Yn.stop()};function Ie(M){M.preventDefault(),Kl("WebGLRenderer: Context Lost."),I=!0}function Be(){Kl("WebGLRenderer: Context Restored."),I=!1;let M=Mt.autoReset,D=ue.enabled,X=ue.autoUpdate,G=ue.needsUpdate,V=ue.type;qe(),Mt.autoReset=M,ue.enabled=D,ue.autoUpdate=X,ue.needsUpdate=G,ue.type=V}function xe(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function it(M){let D=M.target;D.removeEventListener("dispose",it),Ct(D)}function Ct(M){Sn(M),Ne.remove(M)}function Sn(M){let D=Ne.get(M).programs;D!==void 0&&(D.forEach(function(X){$.releaseProgram(X)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,X,G,V,ge){D===null&&(D=Nt);let we=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=Cr(M,D,X,G,V);pe.setMaterial(G,we);let be=X.index,Pe=1;if(G.wireframe===!0){if(be=H.getWireframeAttribute(X),be===void 0)return;Pe=2}let Xe=X.drawRange,Ke=X.attributes.position,Te=Xe.start*Pe,$e=(Xe.start+Xe.count)*Pe;ge!==null&&(Te=Math.max(Te,ge.start*Pe),$e=Math.min($e,(ge.start+ge.count)*Pe)),be!==null?(Te=Math.max(Te,0),$e=Math.min($e,be.count)):Ke!=null&&(Te=Math.max(Te,0),$e=Math.min($e,Ke.count));let Pt=$e-Te;if(Pt<0||Pt===1/0)return;ce.setup(V,G,me,X,be);let gt,ft=q;if(be!==null&&(gt=y.get(be),ft=he,ft.setIndex(gt)),V.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*Wt()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(V.isLine){let Zt=G.linewidth;Zt===void 0&&(Zt=1),pe.setLineWidth(Zt*Wt()),V.isLineSegments?ft.setMode(O.LINES):V.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else V.isPoints?ft.setMode(O.POINTS):V.isSprite&&ft.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Zt=V._multiDrawStarts,Ee=V._multiDrawCounts,an=V._multiDrawCount,ot=be?y.get(be).bytesPerElement:1,Ci=Ne.get(G).currentProgram.getUniforms();for(let Jt=0;Jt<an;Jt++)Ci.setValue(O,"_gl_DrawID",Jt),ft.render(Zt[Jt]/ot,Ee[Jt])}else if(V.isInstancedMesh)ft.renderInstances(Te,Pt,V.count);else if(X.isInstancedBufferGeometry){let Zt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Zt);ft.renderInstances(Te,Pt,Ee)}else ft.render(Te,Pt)};function Tr(M,D,X,G){N!==null&&M.isNodeMaterial&&N.setObject(G,M),at===!0&&j.setState(M,X,!1),M.transparent===!0&&M.side===en&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,Dn(M,D,G),M.side=Ti,M.needsUpdate=!0,Dn(M,D,G),M.side=en):Dn(M,D,G)}this.compile=function(M,D,X=null){X===null&&(X=M),N!==null&&N.renderStart(M,D,X),T=K.get(X),T.init(D),S.push(T),X.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),M!==X&&M.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Rt=this.localClippingEnabled,at=j.init(this.clippingPlanes,Rt),at===!0&&j.setGlobalState(this.clippingPlanes,D),N!==null&&ue.render(T.state.shadowsArray,X,D);let G=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ge=V.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){let me=ge[we];Tr(me,X,D,V),G.add(me)}else Tr(ge,X,D,V),G.add(ge)}),T=S.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(M,D,X=null){let G=this.compile(M,D,X);return new Promise(V=>{function ge(){if(G.forEach(function(we){let be=Ne.get(we).currentProgram;(be===void 0||be.isReady())&&G.delete(we)}),G.size===0){V(M);return}setTimeout(ge,10)}ut.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let bs=null;function qo(M){bs&&bs(M)}function ws(){Yn.stop()}function Er(){Yn.start()}let Yn=new Mu;Yn.setAnimationLoop(qo),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(M){bs=M,re.setAnimationLoop(M),M===null?Yn.stop():Yn.start()},re.addEventListener("sessionstart",ws),re.addEventListener("sessionend",Er),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(M,D);let X=re.enabled===!0&&re.isPresenting===!0,G=L!==null&&(J===null||X)&&L.begin(C,J);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(D),D=re.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,D,J),T=K.get(M,S.length),T.init(D),T.state.textureUnits=Oe.getTextureUnits(),S.push(T),dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?lt.setFromArrayCamera(D):Me.setFromProjectionMatrix(dt,yn,D.reversedDepth),Rt=this.localClippingEnabled,at=j.init(this.clippingPlanes,Rt),A=de.get(M,_.length),A.init(),_.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let we=C.xr.getDepthSensingMesh();we!==null&&Wi(we,D,-1/0,C.sortObjects)}Wi(M,D,0,C.sortObjects),A.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(Re,Qe),Et=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Et&&P.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),at===!0&&j.beginShadows();let V=T.state.shadowsArray;if(ue.render(V,M,D),at===!0&&j.endShadows(),(G&&L.hasRenderPass())===!1){let we=A.opaque,me=A.transmissive;if(T.setupLights(),D.isArrayCamera){let be=D.cameras;if(me.length>0)for(let Pe=0,Xe=be.length;Pe<Xe;Pe++){let Ke=be[Pe];St(we,me,M,Ke)}Et&&P.render(M);for(let Pe=0,Xe=be.length;Pe<Xe;Pe++){let Ke=be[Pe];Ar(A,M,Ke,Ke.viewport)}}else me.length>0&&St(we,me,M,D),Et&&P.render(M),Ar(A,M,D)}J!==null&&k===0&&(Oe.updateMultisampleRenderTarget(J),Oe.updateRenderTargetMipmap(J)),G&&L.end(C),M.isScene===!0&&M.onAfterRender(C,M,D),ce.resetDefaultState(),W=-1,ee=null,S.pop(),S.length>0?(T=S[S.length-1],Oe.setTextureUnits(T.state.textureUnits),at===!0&&j.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,N!==null&&N.renderEnd()};function Wi(M,D,X,G){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let we=D.isArrayCamera?lt:Me;if(!M.frustumCulled||M.intersectsFrustum(we)){G&&rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(dt);let me=se.update(M),be=M.material;be.visible&&A.push(M,me,be,X,rt.z,null,D)}}else if(M.isMesh||M.isLine||M.isPoints){let we=D.isArrayCamera?lt:Me;if(!M.frustumCulled||M.intersectsFrustum(we)){let me=se.update(M),be=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),rt.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),rt.copy(me.boundingSphere.center)),rt.applyMatrix4(M.matrixWorld).applyMatrix4(dt)),Array.isArray(be)){let Pe=me.groups;for(let Xe=0,Ke=Pe.length;Xe<Ke;Xe++){let Te=Pe[Xe],$e=be[Te.materialIndex];$e&&$e.visible&&A.push(M,me,$e,X,rt.z,Te,D)}}else be.visible&&A.push(M,me,be,X,rt.z,null,D)}}}let ge=M.children;for(let we=0,me=ge.length;we<me;we++)Wi(ge[we],D,X,G)}function Ar(M,D,X,G){let{opaque:V,transmissive:ge,transparent:we}=M;T.setupLightsView(X),at===!0&&j.setGlobalState(C.clippingPlanes,X),G&&pe.viewport(ne.copy(G)),V.length>0&&bn(V,D,X),ge.length>0&&bn(ge,D,X),we.length>0&&bn(we,D,X),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function St(M,D,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Te=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new pn(1,1,{generateMipmaps:!0,type:Te?Ln:hn,minFilter:ai,samples:Math.max(4,nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let ge=T.state.transmissionRenderTarget[G.id],we=G.viewport||ne;ge.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);let me=C.getRenderTarget(),be=C.getActiveCubeFace(),Pe=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(Y),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),Et&&P.render(X);let Xe=C.toneMapping;C.toneMapping=Hn;let Ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),at===!0&&j.setGlobalState(C.clippingPlanes,G),bn(M,X,G),Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let $e=0,Pt=D.length;$e<Pt;$e++){let gt=D[$e],{object:ft,geometry:Zt,material:Ee,group:an}=gt;if(Ee.side===en&&ft.layers.test(G.layers)){let ot=Ee.side;Ee.side=qt,Ee.needsUpdate=!0,Ri(ft,X,G,Zt,Ee,an),Ee.side=ot,Ee.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,be,Pe),C.setClearColor(Y,fe),Ke!==void 0&&(G.viewport=Ke),C.toneMapping=Xe}function bn(M,D,X){let G=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ge=M.length;V<ge;V++){let we=M[V],{object:me,geometry:be,group:Pe}=we,Xe=we.material;Xe.allowOverride===!0&&G!==null&&(Xe=G),me.layers.test(X.layers)&&Ri(me,D,X,be,Xe,Pe)}}function Ri(M,D,X,G,V,ge){N!==null&&V.isNodeMaterial&&N.setObject(M,V),M.onBeforeRender(C,D,X,G,V,ge),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(C,D,X,G,M,ge),V.transparent===!0&&V.side===en&&V.forceSinglePass===!1?(V.side=qt,V.needsUpdate=!0,C.renderBufferDirect(X,D,G,V,M,ge),V.side=Ti,V.needsUpdate=!0,C.renderBufferDirect(X,D,G,V,M,ge),V.side=en):C.renderBufferDirect(X,D,G,V,M,ge),M.onAfterRender(C,D,X,G,V,ge)}function Xi(M){let D=0;for(let X of M)X.texture!==null&&D++;return D}function Dn(M,D,X){D.isScene!==!0&&(D=Nt);let G=Ne.get(M),V=T.state.lights,ge=T.state.shadowsArray,we=V.state.version,me=$.getParameters(M,V.state,ge,D,X,T.state.lightProbeGridArray),be=$.getProgramCacheKey(me),Pe=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;let Xe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=w.get(M.envMap||G.environment,Xe),G.envMapRotation=G.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",it),Pe=new Map,G.programs=Pe,G.programVariants=new Map);let Ke=Pe.get(be);if(Ke!==void 0){if(G.currentProgram===Ke&&G.lightsStateVersion===we)return Es(M,me),Ke}else me.uniforms=$.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,X,me),M.onBeforeCompile(me,C),Ke=$.acquireProgram(me,be),Pe.set(be,Ke),G.uniforms=me.uniforms;let Te=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=j.uniform),Es(M,me),G.needsLights=_d(M),G.lightsStateVersion=we,G.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.sunLights.value=V.state.sun,Te.sunLightShadows.value=V.state.sunShadow,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.sunShadowMatrix.value=V.state.sunShadowMatrix,Te.sunShadowCascade.value=V.state.sunShadowCascade,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),G.numLightProbeGrids=Xi(T.state.lightProbeGridArray),G.currentProgram=Ke,G.uniformsList=null,Ke}function Ts(M,D,X,G,V){let ge=Ne.get(M),we=ge.currentProgram.id+","+G+","+V,me=ge.programVariants.get(we);return me===void 0?(me=Dn(M,D,X),ge.programVariants.set(we,me)):(ge.currentProgram=me,ge.uniformsList=null,ge.outputColorSpace=G,ge.toneMapping=V),me}function Rr(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=ys.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Es(M,D){let X=Ne.get(M);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Cr(M,D,X,G,V){D.isScene!==!0&&(D=Nt),Oe.resetTextureUnits();let ge=D.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,me=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:je.workingColorSpace,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Pe=w.get(G.envMap||we,be),Xe=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,Pt=!!X.morphAttributes.color,gt=Hn;G.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(gt=C.toneMapping);let ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=ft!==void 0?ft.length:0,Ee=Ne.get(G),an=T.state.lights;if(at===!0&&(Rt===!0||M!==ee)){let bt=M===ee&&G.id===W;j.setState(G,M,bt)}let ot=!1,Ci=!1;G.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==an.state.version||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==Pe||G.fog===!0&&Ee.fog!==ge||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==j.numPlanes||Ee.numIntersection!==j.numIntersection)||Ee.vertexAlphas!==Xe||Ee.vertexTangents!==Ke||Ee.morphTargets!==Te||Ee.morphNormals!==$e||Ee.morphColors!==Pt||Ee.morphTargetsCount!==Zt||Ee.numLightProbeGrids!==Xi(T.state.lightProbeGridArray)?ot=!0:(Ee.outputColorSpace!==me||Ee.toneMapping!==gt)&&(Ci=!0):(ot=!0,Ee.__version=G.version);let Jt=Ee.currentProgram;(ot===!0||Ci===!0)&&(Jt=Ci===!0?Ts(G,D,V,me,gt):Dn(G,D,V),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Jt,Ee));let Ir=!1,ui=!1,Pi=!1,st=Jt.getUniforms(),Xt=Ee.uniforms;if(pe.useProgram(Jt.program)&&(Ir=!0,ui=!0,Pi=!0),G.id!==W&&(W=G.id,ui=!0),Ir||ee!==M){pe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),st.setValue(O,"projectionMatrix",M.projectionMatrix),st.setValue(O,"viewMatrix",M.matrixWorldInverse);let Bt=st.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,Tt.setFromMatrixPosition(M.matrixWorld)),nt.logarithmicDepthBuffer&&st.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&st.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),ee!==M&&(ee=M,ui=!0,Pi=!0)}if(Ee.needsLights&&(an.state.sunShadowMap.length>0&&st.setValue(O,"sunShadowMap",an.state.sunShadowMap,Oe),an.state.directionalShadowMap.length>0&&st.setValue(O,"directionalShadowMap",an.state.directionalShadowMap,Oe),an.state.spotShadowMap.length>0&&st.setValue(O,"spotShadowMap",an.state.spotShadowMap,Oe),an.state.pointShadowMap.length>0&&st.setValue(O,"pointShadowMap",an.state.pointShadowMap,Oe)),V.isSkinnedMesh){st.setOptional(O,V,"bindMatrix"),st.setOptional(O,V,"bindMatrixInverse");let bt=V.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),st.setValue(O,"boneTexture",bt.boneTexture,Oe))}V.isBatchedMesh&&(st.setOptional(O,V,"batchingTexture"),st.setValue(O,"batchingTexture",V._matricesTexture,Oe),st.setOptional(O,V,"batchingIdTexture"),st.setValue(O,"batchingIdTexture",V._indirectTexture,Oe),st.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(O,"batchingColorTexture",V._colorsTexture,Oe));let wn=X.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Q.update(V,X,Jt),(ui||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,st.setValue(O,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(Xt.envMapIntensity.value=D.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Zg()),ui){if(st.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&Pr(Xt,Pi),ge&&G.fog===!0&&ae.refreshFogUniforms(Xt,ge),ae.refreshMaterialUniforms(Xt,G,le,Se,T.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let bt=b,Bt=0;for(let Zn of T.state.lightProbeGridArray)Zn.texture!==null&&(bt.textures[Bt]=Zn.texture,bt.min[Bt]=Zn.boundingBox.min,bt.max[Bt]=Zn.boundingBox.max,bt.resolution[Bt]=Zn.resolution,Bt++);for(let Zn in bt)bt[Zn].length=Bt;Xt.probesSH.value=bt.textures,Xt.probesMin.value=bt.min,Xt.probesMax.value=bt.max,Xt.probesResolution.value=bt.resolution}ys.upload(O,Rr(Ee),Xt,Oe)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ys.upload(O,Rr(Ee),Xt,Oe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&st.setValue(O,"center",V.center),st.setValue(O,"modelViewMatrix",V.modelViewMatrix),st.setValue(O,"normalMatrix",V.normalMatrix),st.setValue(O,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let bt=G.uniformsGroups;for(let Bt=0,Zn=bt.length;Bt<Zn;Bt++){let Nc=bt[Bt];Ce.update(Nc,Jt),Ce.bind(Nc,Jt)}}return Jt}function Pr(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function _d(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(M,D,X){let G=Ne.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ne.get(M.texture).__webglTexture=D,Ne.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let X=Ne.get(M);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,X=0){J=M,B=D,k=X;let G=null,V=!1,ge=!1;if(M){let me=Ne.get(M);if(me.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(M.viewport),te.copy(M.scissor),Le=M.scissorTest,pe.viewport(ne),pe.scissor(te),pe.setScissorTest(Le),W=-1;return}else if(me.__webglFramebuffer===void 0)Oe.setupRenderTarget(M);else if(me.__hasExternalTextures)Oe.rebindTextures(M,Ne.get(M.texture).__webglTexture,Ne.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Xe=M.depthTexture;if(me.__boundDepthTexture!==Xe){if(Xe!==null&&Ne.has(Xe)&&(M.width!==Xe.image.width||M.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(M)}}let be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);let Pe=Ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?G=Pe[D][X]:G=Pe[D],V=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?G=Ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?G=Pe[X]:G=Pe,ne.copy(M.viewport),te.copy(M.scissor),Le=M.scissorTest}else ne.copy(ye).multiplyScalar(le).floor(),te.copy(ke).multiplyScalar(le).floor(),Le=Ye;if(X!==0&&(G=U),pe.bindFramebuffer(O.FRAMEBUFFER,G)&&pe.drawBuffers(M,G),pe.viewport(ne),pe.scissor(te),pe.setScissorTest(Le),V){let me=Ne.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,X)}else if(ge){let me=D;for(let be=0;be<M.textures.length;be++){let Pe=Ne.get(M.textures[be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+be,Pe.__webglTexture,X,me)}}else if(M!==null&&X!==0){let me=Ne.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,X)}W=-1};function Lc(M){let D=Ne.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=nt.textureFormatReadable(M.format),D.__typeReadable=nt.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,X,G,V,ge,we,me=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we],Array.isArray(be)&&(be=be[0])),be){pe.bindFramebuffer(O.FRAMEBUFFER,be);try{let Pe=M.textures[me],Xe=Pe.format,Ke=Pe.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Te=Lc(Pe);if(Te.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-G&&X>=0&&X<=M.height-V&&O.readPixels(D,X,G,V,oe.convert(Xe),oe.convert(Ke),ge)}finally{let Pe=J!==null?Ne.get(J).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,D,X,G,V,ge,we,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we],Array.isArray(be)&&(be=be[0])),be)if(D>=0&&D<=M.width-G&&X>=0&&X<=M.height-V){pe.bindFramebuffer(O.FRAMEBUFFER,be);let Pe=M.textures[me],Xe=Pe.format,Ke=Pe.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Te=Lc(Pe);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(D,X,G,V,oe.convert(Xe),oe.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Pt=J!==null?Ne.get(J).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,Pt);let gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Yh(O,gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer($e),O.deleteSync(gt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,X=0){let G=Math.pow(2,-X),V=Math.floor(M.image.width*G),ge=Math.floor(M.image.height*G),we=D!==null?D.x:0,me=D!==null?D.y:0;Oe.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,we,me,V,ge),pe.unbindTexture()},this.copyTextureToTexture=function(M,D,X=null,G=null,V=0,ge=0){let we,me,be,Pe,Xe,Ke,Te,$e,Pt,gt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(X!==null)we=X.max.x-X.min.x,me=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,Xe=X.min.y,Ke=X.isBox3?X.min.z:0;else{let st=Math.pow(2,-V);we=Math.floor(gt.width*st),me=Math.floor(gt.height*st),M.isDataArrayTexture?be=gt.depth:M.isData3DTexture?be=Math.floor(gt.depth*st):be=1,Pe=0,Xe=0,Ke=0}G!==null?(Te=G.x,$e=G.y,Pt=G.z):(Te=0,$e=0,Pt=0);let ft=oe.convert(D.format),Zt=oe.convert(D.type),Ee;D.isData3DTexture?(Oe.setTexture3D(D,0),Ee=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Oe.setTexture2DArray(D,0),Ee=O.TEXTURE_2D_ARRAY):(Oe.setTexture2D(D,0),Ee=O.TEXTURE_2D),pe.activeTexture(O.TEXTURE0),pe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),pe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),pe.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let an=pe.getParameter(O.UNPACK_ROW_LENGTH),ot=pe.getParameter(O.UNPACK_IMAGE_HEIGHT),Ci=pe.getParameter(O.UNPACK_SKIP_PIXELS),Jt=pe.getParameter(O.UNPACK_SKIP_ROWS),Ir=pe.getParameter(O.UNPACK_SKIP_IMAGES);pe.pixelStorei(O.UNPACK_ROW_LENGTH,gt.width),pe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt.height),pe.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),pe.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),pe.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);let ui=M.isDataArrayTexture||M.isData3DTexture,Pi=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let st=Ne.get(M),Xt=Ne.get(D),wn=Ne.get(st.__renderTarget),bt=Ne.get(Xt.__renderTarget);pe.bindFramebuffer(O.READ_FRAMEBUFFER,wn.__webglFramebuffer),pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Bt=0;Bt<be;Bt++)ui&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(M).__webglTexture,V,Ke+Bt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(D).__webglTexture,ge,Pt+Bt)),O.blitFramebuffer(Pe,Xe,Pe+we,Xe+me,Te,$e,Te+we,$e+me,O.DEPTH_BUFFER_BIT,O.NEAREST);pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||Ne.has(M)){let st=Ne.get(M),Xt=Ne.get(D);pe.bindFramebuffer(O.READ_FRAMEBUFFER,R),pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let wn=0;wn<be;wn++)ui?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,st.__webglTexture,V,Ke+wn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,st.__webglTexture,V),Pi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,ge,Pt+wn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,ge),V!==0?O.blitFramebuffer(Pe,Xe,Pe+we,Xe+me,Te,$e,Te+we,$e+me,O.COLOR_BUFFER_BIT,O.NEAREST):Pi?O.copyTexSubImage3D(Ee,ge,Te,$e,Pt+wn,Pe,Xe,we,me):O.copyTexSubImage2D(Ee,ge,Te,$e,Pe,Xe,we,me);pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pi?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Ee,ge,Te,$e,Pt,we,me,be,ft,Zt,gt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Ee,ge,Te,$e,Pt,we,me,be,ft,gt.data):O.texSubImage3D(Ee,ge,Te,$e,Pt,we,me,be,ft,Zt,gt):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Te,$e,we,me,ft,Zt,gt.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Te,$e,gt.width,gt.height,ft,gt.data):O.texSubImage2D(O.TEXTURE_2D,ge,Te,$e,we,me,ft,Zt,gt);pe.pixelStorei(O.UNPACK_ROW_LENGTH,an),pe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),pe.pixelStorei(O.UNPACK_SKIP_PIXELS,Ci),pe.pixelStorei(O.UNPACK_SKIP_ROWS,Jt),pe.pixelStorei(O.UNPACK_SKIP_IMAGES,Ir),ge===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(M){Ne.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){B=0,k=0,J=null,pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}});function Du(){let n=new kt,e=Jg(n),t=new kt;t.rotation.order="YXZ",n.add(t);let i=Ft(new Qt(.36,.43,.72,7),vt.tee,t,[0,.38,0]);Ft(new Qt(.43,.43,.12,7),vt.teeShade,t,[0,.06,0]);let s=Ft(new ri(.13,.19,3),vt.board,t,[.241,.43,0]);s.rotation.z=Math.PI/2,s.rotation.y=Math.PI/2;for(let x of[-1,1]){let m=Ft(new Vt(.018,.22,.055),vt.board,t,[-.35,.42,x*.085]);m.rotation.x=x*.58}let r=Ft(new Qt(.1,.1,.16,8),vt.face,t,[0,.82,0]);r.castShadow=!1,Ft(new Mi(.265,1),vt.helmet,t,[0,1.12,0]),Ft(new Vt(.46,.06,.43),vt.helmetRim,t,[.025,.99,0]),Ft(new Vt(.08,.18,.31),vt.face,t,[.255,1.03,0]),Ft(new Vt(.075,.12,.47),vt.goggles,t,[.285,1.14,0]),Ft(new Vt(.012,.085,.35),vt.lens,t,[.325,1.15,0]);let a=[],o=[],c=[];for(let x of[-1,1])a.push(Ms(t,.12,.105,vt.sleeve)),o.push(Ms(t,.15,.13,vt.tee)),c.push(Ft(new Vt(.18,.18,.17),vt.mitt,t));let l=[Ms(n,.21,.25,vt.pantsShade),Ms(n,.21,.25,vt.pants)],h=[Ms(n,.25,.21,vt.pantsShade),Ms(n,.25,.21,vt.pants)],f=new Lt(new Qs(.82,24),new Mn({color:3893368,transparent:!0,opacity:.2,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.scale.y=.48,n.add(f);let u=-.35,d=0,g=(x={},m={},p=0,v={x:0,y:1,z:-.35})=>{let E=wt(x.position?.across),b=wt(x.position?.downhill),A=Math.max(0,wt(x.air)),T=wt(m.boardYaw,wt(x.boardYaw,wt(x.heading))),_=wt(m.bodyYaw,wt(x.torsoYaw,wt(x.heading))),S=Fo(wt(m.crouch,.3),0,1),L=Fo(wt(m.bodyTilt,wt(m.lean)*.55),-.8,.8),C=1.2-S*.48,I=p+A,N=Math.atan2(wt(v.z,-.35),wt(v.y,1)),U=wt(v.x)*.2;A<=.02&&(u=N,d=U),n.position.set(E,0,-b),e.position.set(0,I+.035,0),e.rotation.set(Fo((A>.02?u:N)+wt(m.boardPitch)+wt(m.press)*.15,-.8,.55),-T,Fo(wt(m.boardRoll)+(A>.02?d:U),-1.1,1.1)),t.position.set(L*.32,I+C,0),t.rotation.set(0,.58-_,-L*.68+wt(m.fallRotation)*.6),i.scale.x=1+wt(m.clothFlutter)*.018;for(let R=0;R<2;R+=1){let F=R===0?-1:1,B=new z(0,.2,F*.42).applyEuler(e.rotation).add(e.position),k=new z(L*.32,I+C,F*.25).applyAxisAngle(Nu,-_);k.y=I+C;let J=new z((B.x+k.x)*.5+.15,I+C*.5+.12,(B.z+k.z)*.5+F*.07);Oo(l[R],J,k),Oo(h[R],B,J);let W=new z(-.02,.66,F*.39),ee=new z(.035,.35+S*.04,F*(.48+wt(m.armLag)*.035)),ne=new z(.09+wt(m.handDrag)*.12,.08-wt(m.handDrag)*.16,F*.55);Oo(a[R],ne,W),Oo(o[R],W,ee),o[R].scale.y*=.36,o[R].position.lerp(W,.45),c[R].position.copy(ne)}f.position.set(.13,p+.024,.13),f.scale.set(1+A*.18,.48+A*.08,1),f.material.opacity=.22/(1+A*.9)};return g(),Object.freeze({board:e,body:t,group:n,shadow:f,update:g})}var nn,vt,Nu,Fo,wt,Ft,Ms,Oo,Jg,Uu=Jn(()=>{xc();nn=(n,e=.92)=>new mn({color:n,roughness:e,metalness:0}),vt=Object.freeze({board:nn(15165e3,.48),boardBase:nn(2635591,.58),boardGraphic:nn(15919316,.6),boot:nn(1911095,.94),binding:nn(3688536,.74),face:nn(12750704,.98),goggles:nn(1319725,.26),lens:nn(9160915,.2),helmet:nn(14378318,.65),helmetRim:nn(2701386,.78),mitt:nn(1911095,.97),pants:nn(5859715,1),pantsShade:nn(4018024,1),sleeve:nn(14117202,.98),tee:nn(15526108,.98),teeShade:nn(13223611,.98)}),Nu=new z(0,1,0),Fo=(n,e,t)=>Math.min(t,Math.max(e,n)),wt=(n,e=0)=>Number.isFinite(n)?n:e,Ft=(n,e,t,i=[0,0,0])=>{let s=new Lt(n,e);return s.position.set(...i),s.castShadow=!0,s.receiveShadow=!0,t.add(s),s},Ms=(n,e,t,i,s=7)=>Ft(new Qt(e,t,1,s),i,n),Oo=(n,e,t)=>{let i=new z().subVectors(t,e),s=Math.max(.01,i.length());n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(Nu,i.normalize()),n.scale.y=s},Jg=n=>{let e=new kt;e.rotation.order="YXZ",n.add(e),Ft(new Vt(.37,.05,1.86),vt.boardBase,e,[0,.045,0]),Ft(new Vt(.34,.013,1.78),vt.board,e,[0,.076,0]);for(let t of[-1,1])Ft(new Fi(.18,9,5),vt.board,e,[0,.09,t*.91]).scale.set(1,.24,.68),Ft(new Vt(.23,.016,.2),vt.boardGraphic,e,[0,.088,t*.65]).rotation.y=t*.25,Ft(new Qt(.13,.13,.025,12),vt.binding,e,[0,.103,t*.42]),Ft(new Vt(.33,.14,.18),vt.boot,e,[0,.19,t*.42]);for(let t of[-1,1])Ft(new Vt(.018,.014,1.82),vt.boardGraphic,e,[t*.18,.053,0]);return e}});function Hu(n={}){let e=pt(ht(n.crouch),0,1),t=pt(ht(n.airborne),0,1),i=pt(ht(n.foreAft),-1,1),s=pt(ht(n.jumpStretch),0,1),r=pt(ht(n.lean),-1,1),a=n.toeSide!==!1,o=pt(ht(n.upperBodyTwist),-1,1),c=pt(ht(n.boardRoll),-1.08,1.08),l=pt(ht(n.boardSwing),-1.8,1.8),h=pt(ht(n.bodyTilt),-.8,.8),f=pt(ht(n.hipTwist),-1.2,1.2),u=pt(ht(n.shoulderTwist,o),-.7,.7),d=pt(ht(n.headLook),-1,1),g=pt(ht(n.armLag),-1,1),x=pt(ht(n.clothLag),-1.5,1.5),m=pt(ht(n.clothFlutter),-1,1),p=pt(ht(n.handDrift),-1.5,1.5),v=pt(ht(n.breath),-1,1),E=pt(ht(n.stumble),0,1),b=pt(ht(n.crashCollapse),0,1),A=pt(ht(n.crashSit),0,1),T=pt(ht(n.boardFlex),0,1),_=pt(ht(n.boardPitch),-.6,.6),S=pt(ht(n.butter),0,1),L=pt(ht(n.press),-1,1),C=Math.max(0,L)*18,I=Math.max(0,-L)*18,N=pt(ht(n.handDrag),0,1),U=pt(ht(n.grab),0,1),R=pt(ht(n.scarfFlutter),-1,1),F=ht(n.bob)*20,B=ht(n.boardBob,ht(n.bob))*20,k=Math.sign(c)||1,J=k*13,W=Math.cos(Math.abs(c)),ee=t>.1?0:S>.5?L>=0?43:-43:n.switchRiding?24:-23,ne=Z(J+(0-J)*W,ee+B),te=(ut,nt)=>{let pe=J+(ut-J)*W,Mt=nt<0?C*(-nt/58):I*(nt/55),Ne=Math.sin((nt+58)/113*Math.PI)*T*2,Oe=Z(pe,nt+_*nt*.28-Mt+Ne+B);return Kg(Oe,ne,l)},Le=Math.sin(Math.abs(c))*9,Y=-k,fe=(n.stance==="goofy"?-1:1)*(n.switchRiding?-1:1),_e=fe,Se=Z(r*(a?16:11)+h*4+f*2,-2+e*14-s*5-i*5+S*4+(a?0:Math.abs(r)*3)+F+b*12+A*7),le=te(-6,-23),Re=te(2,31),Qe=Z(Se.x-7+f*2,Se.y-2-f*3),ye=Z(Se.x+7+f*2,Se.y+2+f*3),ke=ku(le,Qe,e,a?1.08:.92),Ye=ku(Re,ye,e,a?.94:1.12),Me=Z(Se.x+r*(a?13:7)+u*5,Se.y-29+e*14-s*8+(a?Math.abs(r)*2:0)+b*9+v),lt=Z(Me.x-15,Me.y+3-u*5),at=Z(Me.x+15,Me.y-3+u*5),Rt=r<0?N:0,dt=r>=0?N:0,Tt=Z(Se.x-21+u*8+g*8-A*11+p,Se.y+12+e*9-t*3+Rt*22-E*21+A*9+p*.6),rt=Z(Se.x+21+u*8+g*11-U*10+A*5-p*.7,Se.y+12+e*9-t*3+dt*22+U*9-E*28-A*4-p*.4),Nt=Z((lt.x+Tt.x)/2-3,(lt.y+Tt.y)/2-2),Et=Z((at.x+rt.x)/2+4,(at.y+rt.y)/2-1),Wt=zu(lt,Nt,.68),O=zu(at,Et,.68),ie=Z(Me.x+r*4+d*5-h*2,Me.y-15-s*3+b*4);return Object.freeze([We("board","board",[te(-8,-58),te(8,-58),te(12,-52),te(13,44),te(9,54),te(-9,54),te(-13,44),te(-12,-52)]),We("board-side","boardSide",[te(8,-58),Z(te(8,-58).x+4,te(8,-58).y+4),Z(te(13,44).x+4,te(13,44).y+4),te(13,44)]),We("board-tail-side","boardBase",[te(-9,54),te(9,54),Z(te(9,54).x+3,te(9,54).y+4),Z(te(-9,54).x+3,te(-9,54).y+4)]),We("board-underside","boardBase",[te(Y*(11+Le/W),-49),te(Y*11,-49),te(Y*13,45),te(Y*(13+Le/W),45)]),We("board-edge","boardEdge",[te(k*12.2,-48),te(k*13.2,-45),te(k*13.2,42),te(k*12.2,45)]),We("board-inset","boardShadow",[te(0,-46),te(5,-41),te(6,41),te(-6,41),te(-5,-41)]),We("board-nose-graphic","boardAccent",[te(-9,-47),te(6,-38),te(7,-34),te(-9,-43)]),We("board-tail-graphic","boardAccent",[te(9,38),te(-7,47),te(-9,51),te(9,42)]),We("board-mark","board",[te(-3,-15),te(3,-11),te(3,12),te(-3,16)]),We("left-leg","pantsShadow",Ou(le,ke,Qe)),We("left-pant-side","pantsSide",[Z(ke.x-14,ke.y-6),Z(ke.x-15,ke.y+5),Z(le.x-10,le.y),Z(le.x-4,le.y-6)]),We("left-pant-fold","pantsFold",[Z(ke.x-9,ke.y-4),Z(ke.x+4,ke.y+2),Z(le.x-5,le.y-8)]),We("right-leg","pants",Ou(Re,Ye,ye)),We("right-pant-side","pantsSide",[Z(Ye.x+14,Ye.y-6),Z(Ye.x+15,Ye.y+5),Z(Re.x+10,Re.y),Z(Re.x+4,Re.y-6)]),We("right-pant-fold","pantsFold",[Z(Ye.x+9,Ye.y-5),Z(Ye.x-2,Ye.y+3),Z(Re.x+6,Re.y-8)]),We("left-boot","boots",Wn(le.x,le.y,29,9,-.28*fe+l)),We("right-boot","boots",Wn(Re.x,Re.y,29,9,.28*fe+l)),We("left-boot-top","bootsTop",Wn(le.x,le.y-2,24,4,-.28*fe+l)),We("right-boot-top","bootsTop",Wn(Re.x,Re.y-2,24,4,.28*fe+l)),We("left-pant-cuff","pantCuff",Wn(le.x,le.y-5,25,7,-.28*fe+l)),We("right-pant-cuff","pantCuff",Wn(Re.x,Re.y-5,25,7,.28*fe+l)),We("torso","tee",[Z(lt.x-4,lt.y-2),Z(at.x+4,at.y-2),Z(ye.x+9,ye.y+2),Z(Qe.x-9,Qe.y+2)]),We("shirt-light-panel","teeLight",[Z(lt.x-4,lt.y-2),Z(Me.x+2,Me.y-3),Z(Se.x-2,Se.y+2),Z(Qe.x-9,Qe.y+2)]),We("shirt-side-panel","teeShadow",[Z(Me.x+7,Me.y),Z(at.x+4,at.y-1),Z(ye.x+9,ye.y+2),Z(Se.x+8,Se.y+2)]),We("shirt-hem","tee",[Z(Qe.x-9,Qe.y),Z(ye.x+9,ye.y),Z(ye.x+11+x*7,ye.y+5+m*3),Z(Se.x+x*8,Se.y+7+m*3),Z(Qe.x-10+x*5,Qe.y+5+m*2)]),We("shirt-graphic","board",[Z(Me.x-8,Me.y+14),Z(Me.x-1,Me.y+7),Z(Me.x+6,Me.y+14),Z(Me.x+2,Me.y+14),Z(Me.x-1,Me.y+11),Z(Me.x-5,Me.y+16)]),We("left-arm","sleeveShadow",Fu(Tt,Nt,lt,5)),We("right-arm","sleeve",Fu(rt,Et,at,5)),We("right-sleeve-light","sleeveLight",[Z(Et.x-2,Et.y-1),Z(Et.x+2,Et.y-1),Z(rt.x+2,rt.y-5),Z(rt.x-1,rt.y-5)]),We("left-tee-sleeve","teeShadow",Bu(lt,Wt,8,7)),We("right-tee-sleeve","tee",Bu(at,O,8,7)),We("left-sleeve-cuff","sleeve",Wn(Tt.x,Tt.y-5,11,5,-.2)),We("right-sleeve-cuff","sleeveShadow",Wn(rt.x,rt.y-5,11,5,.2)),We("left-mitt","mitts",Wn(Tt.x,Tt.y,8,10,-.18)),We("right-mitt","mitts",Wn(rt.x,rt.y,8,10,.18)),We("head","helmet",[Z(ie.x-9,ie.y-5),Z(ie.x-5,ie.y-10),Z(ie.x+5,ie.y-10),Z(ie.x+10,ie.y-5),Z(ie.x+10,ie.y+5),Z(ie.x+5,ie.y+9),Z(ie.x-5,ie.y+9),Z(ie.x-10,ie.y+5)]),We("helmet-side","helmetSide",[Z(ie.x+5,ie.y-10),Z(ie.x+10,ie.y-5),Z(ie.x+10,ie.y+5),Z(ie.x+5,ie.y+9),Z(ie.x+4,ie.y+2)]),We("helmet-panel","helmetShadow",[Z(ie.x-8,ie.y-5),Z(ie.x-4,ie.y-9),Z(ie.x+5,ie.y-9),Z(ie.x+8,ie.y-5),Z(ie.x+3,ie.y-1),Z(ie.x-5,ie.y-1)]),We("helmet-highlight","helmetHighlight",[Z(ie.x-5,ie.y-5),Z(ie.x,ie.y-9),Z(ie.x+1,ie.y-6),Z(ie.x-2,ie.y-3)]),We("face","skin",[Z(ie.x-6,ie.y+2),Z(ie.x+6,ie.y+2),Z(ie.x+5,ie.y+8),Z(ie.x,ie.y+10),Z(ie.x-5,ie.y+8)]),We("helmet-band","helmetBand",[Z(ie.x-9,ie.y-2),Z(ie.x+9,ie.y-2),Z(ie.x+9,ie.y+1),Z(ie.x-9,ie.y+1)]),We("goggles","goggles",[Z(ie.x+_e*1+d*2,ie.y-3),Z(ie.x+_e*8+d*2,ie.y-2),Z(ie.x+_e*8+d*2,ie.y+3),Z(ie.x+_e*1+d*2,ie.y+3)]),We("goggle-lens","goggleLens",[Z(ie.x+_e*3+d*2,ie.y-2),Z(ie.x+_e*7+d*2,ie.y-1),Z(ie.x+_e*7+d*2,ie.y+1),Z(ie.x+_e*3+d*2,ie.y+1)]),We("goggle-strap","goggleStrap",[Z(ie.x-9,ie.y-1),Z(ie.x+9,ie.y-1),Z(ie.x+8,ie.y+3),Z(ie.x-8,ie.y+3)]),We("goggle-lens","goggleLens",[Z(ie.x-6,ie.y-2),Z(ie.x+7,ie.y-2),Z(ie.x+5,ie.y+2),Z(ie.x-5,ie.y+2)]),We("scarf","scarf",[Z(Me.x+7,Me.y-10),Z(Me.x+15,Me.y-8),Z(Me.x+21+r*4+R*5,Me.y+10-t*5-Math.abs(R)*4),Z(Me.x+11,Me.y+2)])])}var pt,ht,Z,We,Wn,Fu,Ou,Bu,zu,Kg,ku,Gu=Jn(()=>{pt=(n,e,t)=>Math.min(t,Math.max(e,n)),ht=(n,e=0)=>Number.isFinite(n)?n:e,Z=(n,e)=>Object.freeze({x:n,y:e}),We=(n,e,t)=>Object.freeze({part:n,points:Object.freeze(t),tone:e}),Wn=(n,e,t,i,s)=>{let r=Math.cos(s),a=Math.sin(s);return[[-t/2,-i/2],[t/2,-i/2],[t/2,i/2],[-t/2,i/2]].map(([o,c])=>Z(n+o*r-c*a,e+o*a+c*r))},Fu=(n,e,t,i)=>[Z(n.x-i,n.y),Z(e.x-i,e.y),Z(t.x-i,t.y),Z(t.x+i,t.y),Z(e.x+i,e.y),Z(n.x+i,n.y)],Ou=(n,e,t)=>[Z(n.x-10,n.y),Z(n.x-12,n.y-6),Z(e.x-15,e.y+5),Z(e.x-14,e.y-6),Z(t.x-12,t.y-4),Z(t.x+12,t.y-4),Z(e.x+14,e.y-6),Z(e.x+15,e.y+5),Z(n.x+12,n.y-6),Z(n.x+10,n.y)],Bu=(n,e,t,i)=>[Z(n.x-t,n.y-2),Z(n.x+t,n.y-2),Z(e.x+i,e.y+2),Z(e.x-i,e.y+2)],zu=(n,e,t)=>Z(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t),Kg=(n,e,t)=>{let i=n.x-e.x,s=n.y-e.y,r=Math.cos(t),a=Math.sin(t);return Z(e.x+i*r-s*a,e.y+i*a+s*r)},ku=(n,e,t,i)=>{let s=e.x-n.x,r=e.y-n.y,a=Math.max(.001,Math.hypot(s,r)),o=Math.min(34,a),c=Math.sqrt(Math.max(0,18**2-(o/2)**2))*(.7+t*.13)*i;return Z((n.x+e.x)/2-r/a*c,(n.y+e.y)/2+s/a*c)}});function jg(n,e=0){let t=n.getBoundingClientRect?.().height||n.height,i=ci(n.height/Math.max(1,t),1,2);return Math.max(0,e)*42*i}function yc(n=1500){let e=[],t=-1,i=-1/0,s=0;return Object.freeze({points(){return Object.freeze([...e])},reset(){e=[],t=-1,i=-1/0,s=0},update(r){let a=Number(r?.elapsed)||0,o=Number(r?.position?.downhill)||0;(a<t||o<i-1)&&(e=[],s=0),t=a,i=o;let c=Number(r?.edge)||0,l=ci(Number(r?.skid)||0,0,1),h=Number(r?.landingImpact)||0;if(r?.air>0||r?.crashed){s=h;return}let f=Number(r?.boardYaw)||0,u=Math.sign(c||r?.slipAngle||1),d=(Number(r?.position?.across)||0)+Math.cos(f)*u*.12,g=e.at(-1),x=h>1.5&&s<=1.5;if(s=h,g&&Math.hypot(d-g.across,o-g.downhill)<.1&&!x)return;let m=ci(Number(r?.carveQuality)||0,0,1),p=x?"landing":(Number(r?.butter)||0)>.55?"butter":Math.abs(Number(r?.pressAmount)||0)>.45&&l<.2?"press":m>=.45&&l<.36?"carve":l>=.12||Math.abs(c)>=.08?"skid":r?.surface==="powder"?"powder":"flat";e.push(Object.freeze({across:d,downhill:o,kind:p,width:p==="carve"?.9:p==="press"?.85:p==="flat"?1.5:p==="powder"?2.5:p==="landing"?4+h*.5:2.2+l*5.8})),e.length>n&&(e=e.slice(-n))}})}function Qg(n,e,t={}){let{cameraAcross:i=0,currentDownhill:s=0,groundY:r=0,palette:a=vr,scale:o=1,viewportCenter:c=0}=t;if(!Array.isArray(e)||e.length<2)return;let l=h=>({x:c+(h.across-i)*14,y:r+(s-h.downhill)*10*o});n.save(),n.lineCap="round";for(let h=1;h<e.length;h+=1){let f=e[h-1],u=e[h],d=s-f.downhill,g=s-u.downhill;if(d<-.2||g<-.2||d>22||g>22)continue;let x=l(f),m=l(u),p=1-ci(Math.max(d,g)/22,0,.82);if(n.globalAlpha=p,n.strokeStyle=u.kind==="carve"?a.carveTrace:u.kind==="flat"?a.flatTrace:u.kind==="powder"?a.powderTrace??a.flatTrace:u.kind==="press"?a.pressTrace??a.flatTrace:a.skidTrace,u.kind==="landing"){n.fillStyle=a.skidTrace,n.beginPath(),n.ellipse(m.x,m.y,u.width*o,u.width*o*.35,0,0,Math.PI*2),n.fill();continue}n.lineWidth=Math.max(.8,u.width*o),n.beginPath(),n.moveTo(x.x,x.y),n.lineTo(m.x,m.y),n.stroke()}n.restore()}function e_(n,e={}){let{direction:t=1,intensity:i=0,palette:s=vr,scale:r=1,surface:a="groomed",x:o=0,y:c=0}=e;if(i<.05)return;n.save(),n.translate(o,c),n.scale(r,r),n.fillStyle=s.snowSpray;let l=a==="powder"?12:a==="ice"?4:7,h=a==="powder"?1.65:a==="slush"?1.3:1;for(let f=0;f<l;f+=1){let u=(f+1)/l,d=(7+f*5)*t;n.globalAlpha=i*(.72-u*.42),n.beginPath(),n.ellipse(d,8+f*2.4,(2.5+i*4*(1-u*.45))*h,(1.6+i*2.5*(1-u*.5))*h,t*-.28,0,Math.PI*2),n.fill()}n.restore()}function t_(n,e={}){let{edge:t=0,palette:i=vr,quality:s=0,scale:r=1,x:a=0,y:o=0}=e;if(Math.abs(t)<.12||s<.35)return;let c=Math.sign(t)||1;n.save(),n.globalAlpha=ci(s,0,1)*.82,n.strokeStyle=i.carveTrace,n.lineWidth=Math.max(1,r*.9),n.beginPath(),n.moveTo(a-c*4*r,o+7*r),n.lineTo(a-c*15*r,o+54*r),n.stroke(),n.restore()}function n_(n,e,t={}){let{boardTweak:i=0,palette:s=vr,rotation:r=0,scale:a=1,x:o=0,y:c=0}=t;n.save(),n.translate(o,c),n.rotate(r),n.scale(a,a);for(let l of e){let h=l.part.startsWith("board")||l.part.endsWith("boot"),f=l.part.endsWith("leg"),u=h?i:f?i*.45:0,[d,...g]=l.points;n.save(),n.rotate(u),n.beginPath(),n.moveTo(d.x,d.y);for(let x of g)n.lineTo(x.x,x.y);n.closePath(),n.fillStyle=s[l.tone]??s.board,n.fill(),n.restore()}n.restore()}function Vu(n,e=vr){let t=n.getContext("2d");if(!t)throw new Error("Rider rendering requires a 2D canvas context");let i=yc();return Object.freeze({beginFrame(){t.clearRect(0,0,n.width,n.height)},draw({camera:s,pose:r,state:a}){let o=ci(Number(s.zoom)||1,.82,1),c=ci(Math.min(n.width/700,n.height/500),1.1,2.4)*o,l=(a.position.across-s.position.across)*14*o,h=jg(n,a.air),f=n.width/2+l,u=n.height*.78+(Number(s.dip)||0)*9,d=1-ci((a.air??0)/3.5,0,.55);if(t.save(),t.translate(n.width/2,n.height/2),t.rotate(-(Number(s.roll)||0)),t.translate(-n.width/2,-n.height/2),i.update(a),Qg(t,i.points(),{cameraAcross:s.position.across,currentDownhill:a.position.downhill,groundY:u,palette:e,scale:c,surface:a.surface,viewportCenter:n.width/2}),r.handDrag>.55){let g=Math.sign(r.lean||a.edge||1);t_(t,{edge:g,palette:e,quality:r.handDrag,scale:c,x:f+g*28*c,y:u+5*c})}e_(t,{direction:-Math.sign(a.slipAngle||a.edge||1),intensity:r.spray,palette:e,scale:c,surface:a.surface,x:f,y:u+4*c}),t.save(),t.translate(f+9*c,u+11*c),t.rotate((Number(r.boardSwing)||0)*.7),t.scale(c*d,c*d),t.fillStyle="rgba(26, 65, 83, 0.13)",t.beginPath(),t.moveTo(-8,-51),t.lineTo(8,-51),t.lineTo(12,-44),t.lineTo(12,43),t.lineTo(8,51),t.lineTo(-8,51),t.lineTo(-12,43),t.lineTo(-12,-44),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=e.shadow,t.beginPath(),t.ellipse(f+9*c,u+14*c,28*c*d,9*c*d,0,0,Math.PI*2),t.fill(),t.restore(),n_(t,Hu(r),{palette:e,rotation:(r.airborne>0?r.bodySpin:ci($g(r.bodyYaw)*.12+r.lean*.08,-.4,.4))+r.fallRotation,scale:c,x:f,y:u-h}),t.restore()}})}var vr,ci,$g,vc=Jn(()=>{Gu();vr=Object.freeze({board:"#f16e50",boardAccent:"#f4e9d8",boardBase:"#a8453f",boardEdge:"#f8fafc",boardSide:"#a94b40",boardShadow:"#29354e",boots:"#202a40",bootsTop:"#46536d",carveTrace:"rgba(71, 125, 148, 0.58)",flatTrace:"rgba(116, 174, 194, 0.18)",goggles:"#182438",goggleLens:"#8ed4d9",goggleStrap:"#29354e",helmet:"#f16e50",helmetBand:"#29354e",helmetHighlight:"#ff9b78",helmetSide:"#d75b49",helmetShadow:"#b74840",mitts:"#202a40",pantCuff:"#26324b",pants:"#657391",pantsFold:"#35415c",pantsSide:"#3c4967",pantsShadow:"#4c5a78",powderTrace:"rgba(85, 159, 185, 0.24)",pressTrace:"rgba(71, 125, 148, 0.32)",scarf:"#f6cd75",shadow:"rgba(15, 42, 58, 0.24)",skidTrace:"rgba(116, 174, 194, 0.3)",skin:"#dca67f",sleeve:"#f16e50",sleeveLight:"#ff9d77",sleeveShadow:"#bc4d42",snowSpray:"#b9e9f5",tee:"#f4e9d8",teeLight:"#fff9ec",teeShadow:"#d7c8b9"}),ci=(n,e,t)=>Math.min(t,Math.max(e,n)),$g=n=>Math.atan2(Math.sin(n),Math.cos(n))});function Mr(n={},e="groomed"){let t=Ae(n.across,0),i=Ae(n.downhill,0),s=Wu[e]??Wu.groomed,r=(h,f)=>i_(h,f)*s.amplitude,a=.08,o=r(t,i),c=(r(t,i+a)-r(t,i-a))/(a*2),l=(r(t+a,i)-r(t-a,i))/(a*2);return Object.freeze({height:o,roll:l,roughness:s.roughness*(.65+De((Math.abs(c)+Math.abs(l))*.9,0,.35)),slope:c})}function Ss(n={}){let e=n.position??{},t=Ae(n.heading,0),i=Math.max(0,Ae(n.speed,8)),s=n.velocity,r=s?{across:Ae(s.across,0),downhill:Ae(s.downhill,i)}:s_(i,t),a=Math.hypot(r.across,r.downhill),o=s?Math.atan2(r.across,r.downhill):t,c=!!n.switchRiding,l=Ae(n.boardYaw,o+(c?Math.PI:0)),h=Mc[n.surface]?n.surface:"groomed",f=Mr(e,h);return Bo({air:Math.max(0,Ae(n.air,0)),airtime:Math.max(0,Ae(n.airtime,0)),boardLightness:De(Ae(n.boardLightness,0),0,1),boardOffset:Ae(n.boardOffset,Yt(l-o-(c?Math.PI:0))),boardRotation:Ae(n.boardRotation,l),boardYaw:l,bodyHeave:Ae(n.bodyHeave,f.height),bumpImpact:De(Ae(n.bumpImpact,0),0,1),butter:De(Ae(n.butter,0),0,1),carveQuality:De(Ae(n.carveQuality,0),0,1),chatter:De(Ae(n.chatter,0),0,1),compression:De(Ae(n.compression,0),0,1),crouchAmount:De(Ae(n.crouchAmount,0),0,1),crashed:!!n.crashed,crashReason:n.crashReason??null,crashSpin:Ae(n.crashSpin,0),crashTimer:Math.max(0,Ae(n.crashTimer,0)),edge:De(Ae(n.edge,0),-1,1),elapsed:Math.max(0,Ae(n.elapsed,0)),flickBrake:Math.max(0,Ae(n.flickBrake,0)),flickRecovery:Math.max(0,Ae(n.flickRecovery,0)),frontEdge:De(Ae(n.frontEdge,n.edge??0),-1,1),frontFootPressure:De(Ae(n.frontFootPressure,.58),0,1),gForce:Math.max(0,Ae(n.gForce,0)),heading:o,landingImpact:Math.max(0,Ae(n.landingImpact,0)),lean:De(Ae(n.lean,n.edge??0),-1,1),noseFloat:De(Ae(n.noseFloat,0),0,1),popCharge:De(Ae(n.popCharge,0),0,1),position:{across:Ae(e.across,0),downhill:Ae(e.downhill,0)},pressAmount:De(Ae(n.pressAmount,0),-1,1),rearEdge:De(Ae(n.rearEdge,n.edge??0),-1,1),skid:De(Ae(n.skid,0),0,1),slash:De(Ae(n.slash,0),0,1),slipAngle:Ae(n.slipAngle,Yt(l-o)),slopeGrade:De(Ae(n.slopeGrade,.34),0,.65),speed:a,spinVelocity:Ae(n.spinVelocity,0),stance:n.stance==="goofy"?"goofy":"regular",steer:De(Ae(n.steer,0),-1,1),steerHold:Math.max(0,Ae(n.steerHold,0)),surface:h,switchRiding:c,turnRate:Ae(n.turnRate,0),tweak:De(Ae(n.tweak,0),-1,1),terrainHeight:Ae(n.terrainHeight,f.height),terrainLaunchCooldown:Math.max(0,Ae(n.terrainLaunchCooldown,0)),terrainPitch:Ae(n.terrainPitch,f.slope),terrainRoll:Ae(n.terrainRoll,f.roll),torsoYaw:Ae(n.torsoYaw,o+(c?Math.PI:0)),torsoRotation:Ae(n.torsoRotation,o+(c?Math.PI:0)),velocity:r,verticalVelocity:Ae(n.verticalVelocity,0),washout:De(Ae(n.washout,0),0,1)})}function Xu(n,e={}){if(n.crashed)return n;let t=Math.sign(n.velocity.across||e.x-n.position.across||n.edge||1);return Ss({...n,air:0,compression:1,crashed:!0,crashReason:"hazard",crashSpin:t,crashTimer:2,velocity:{across:n.velocity.across*.45,downhill:n.velocity.downhill*.45}})}function qu(n,e={},t=0,i={}){let s=De(Ae(t,0),0,.05),r=De(Ae(i.slopeGrade,r_(n.position.downhill)),0,.65),a=Mc[i.surface]?i.surface:n.surface,o=Mc[a];if(n.crashed)return a_(n,s,r,a);let c=De(Ae(e.carve,0),-1,1),l=De(Ae(e.steer,0),-1,1),h=De(Ae(e.crouch,0),0,1),f=De(Ae(e.stretch,0),0,1),u=De(Ae(e.press,0),-1,1),d=n.air<=0,g=n.crouchAmount+(h-n.crouchAmount)*un(5,s),x=n.pressAmount+(u-n.pressAmount)*un(7,s),m=n.lean+(c-n.lean)*un(6.3,s),p=m*(.75+g*.25),v=p*(n.stance==="goofy"?-1:1)>=0,E=n.frontEdge+(p-n.frontEdge)*un(v?10.8:8.8,s),b=n.rearEdge+(p-n.rearEdge)*un(v?6.1:5.1,s),A=E*.58+b*.42,T=Math.abs(A),_=Math.sign(A)!==Math.sign(n.edge)&&Math.abs(n.edge)>.015&&T>.015,S={across:Math.cos(n.boardYaw),downhill:-Math.sin(n.boardYaw)},L=n.velocity.across*S.across+n.velocity.downhill*S.downhill,C=d&&a!=="powder"&&a!=="rail"&&(_&&Math.sign(A)===Math.sign(L)||Math.sign(c)!==Math.sign(n.edge)&&Math.sign(c)===Math.sign(L)&&Math.abs(n.edge)>.15)&&Math.abs(L)>3.8&&n.speed>16&&Math.abs(l)<.05&&n.flickRecovery<=0,I=d&&a==="rail"&&T>.22;if(C||I){let St={across:n.velocity.across*.62,downhill:n.velocity.downhill*.62};return Bo({...n,compression:1,crashed:!0,crashReason:I?"rail-edge":"edge-catch",crashSpin:Math.sign(L||A)||1,crashTimer:2,edge:A,elapsed:n.elapsed+s,frontEdge:E,gForce:1.6,lean:m,position:{across:n.position.across+St.across*s,downhill:n.position.downhill+St.downhill*s},rearEdge:b,skid:1,slopeGrade:r,speed:Math.hypot(St.across,St.downhill),surface:a,velocity:St})}let N={across:n.position.across+n.velocity.across*s,downhill:n.position.downhill+n.velocity.downhill*s},U=Mr(N,a),R=s>0?(U.height-n.terrainHeight)/s:0,F=d?De(Math.abs(R)*(.09+n.speed*.004)*U.roughness*(1-h*.5),0,1):0,B=n.bumpImpact+(F-n.bumpImpact)*un(F>n.bumpImpact?18:9,s),k=De(U.height,n.bodyHeave-.4,n.bodyHeave+.4),J=n.bodyHeave+(k-n.bodyHeave)*un(3.4,s),W=De((a==="powder"?.43:.54)-x*.24+Math.abs(c-n.lean)*.17,.16,.84),ee=a==="powder"&&d?De(n.speed/24*.7+(1-W)*.9-.24,0,1):0,ne=Math.abs(l)>.05?Math.sign(l)===Math.sign(n.steer)?n.steerHold+s:s:0,te=d&&h>.62&&Math.abs(l)>.3,Le=n.butter>.5&&Math.abs(n.steer)>.3,Y=te?1:0,fe=n.butter+(Y-n.butter)*un(Y>n.butter?12:10,s),_e=d&&!te&&Math.abs(l)>.05&&Math.sign(l)!==Math.sign(n.steer),Se=_e?.1:n.flickBrake,le=Math.min(s,Se);Se=Math.max(0,Se-s);let Re=_e?1:n.boardLightness*Math.exp(-5*s),Qe=Math.max(0,n.flickRecovery-s);Math.abs(l)<.05&&Math.abs(n.steer)>.05&&(Qe=.3);let ye=n.boardOffset,ke=n.switchRiding;if(d&&te)ye+=l*(4.2+Math.abs(x)*.5)*s;else if(d&&Le&&Math.abs(l)<.05){let St=Math.round(ye/Math.PI);Math.abs(St)%2===1&&(ke=!ke),ye-=St*Math.PI,ye-=De(ye,-9.2*s,9.2*s)}else if(d&&Math.abs(l)>.05){let St=De((ne-.08)/.22,0,1),bn=l*(.92+St*.48),Ri=2.1+7.1*Re*(1-T*.55-g*.35);ye+=De(bn-ye,-Ri*s,Ri*s)}else d&&(ye-=De(ye,-9.2*s,9.2*s));let Ye=Math.max(n.speed,.001),Me={across:n.velocity.across/Ye,downhill:n.velocity.downhill/Ye},lt={across:Me.downhill,downhill:-Me.across},at=18-T*12,Rt=T*Ye**2/at,dt=9.81*o.edgeGrip*(.6+T*1.6)*(1+g*.16),Tt=d&&a!=="rail"&&Rt>0?De((Rt-dt)/Rt,0,1):0,rt=1-De((Math.abs(n.heading)-1.05)/.38,0,1),Nt=d&&a!=="rail"?Math.sign(A)*Math.min(Rt,dt)*rt:0,Et=d&&!te&&a!=="rail"?De(-L*o.baseGrip*(.12+De((ne-.16)/.32,0,1)*.08),-2,2):0,Wt=De((ne-.14)/.3,0,1),O=d&&!te?Wt*(1.4+Math.abs(ye)*1.5)*o.skid:0,ie=a==="powder"?1-ee:0,ut=d&&U.slope<-.05&&n.crouchAmount>g&&!te?(n.crouchAmount-g)*1.4*De(-U.slope/.15,0,1):0,nt=d?o.drag*(.22+ie*.24+Math.abs(x)*.05):0,pe=d?n.speed**2*.0032*(1-g*.35):0,Mt=d&&!te&&le>0&&s>0?n.speed*.06*le/(.1*s):0,Ne=nt+pe+O+Mt,Oe=d?{across:lt.across*Nt+S.across*Et-Me.across*Ne-9.81*U.roll*.18,downhill:9.81*Math.sin(r)+lt.downhill*Nt+S.downhill*Et-Me.downhill*Ne}:{across:0,downhill:0},w=d?{across:n.velocity.across+Oe.across*s+Me.across*ut,downhill:n.velocity.downhill+Oe.downhill*s+Me.downhill*ut}:{...n.velocity},y=Math.hypot(w.across,w.downhill);if(d&&(y<12||y>34)){let St=De(y,12,34),bn=St/Math.max(y,.001);w={across:w.across*bn,downhill:w.downhill*bn},y=St}let H=Math.atan2(w.across,w.downhill),se=d&&s>0?Yt(H-n.heading)/s:n.turnRate,$=d?Yt(H+(ke?Math.PI:0)+ye):n.boardYaw,ae=d?0:n.spinVelocity,de=d&&Ae(e.jump,0)>0,K=Math.max(0,n.terrainLaunchCooldown-s),j=d&&a!=="rail"&&K<=0&&n.speed>20&&(h<.65||de)&&n.terrainPitch>.1&&U.slope<0,ue=d?n.popCharge+(h-n.popCharge)*un(4.5,s):n.popCharge,P=de?2.67+ue*1.95+Math.max(0,Ae(i.lipVelocity,0)):n.verticalVelocity,Q=K;if(j){let St=De(n.speed*.055+B*.7,1.1,2.35);P=de?P+St*.4:Math.max(P,St),Q=.7}de&&(ae=De(c*6.7+se*.25,-7,7),ue=0);let q=n.air,he=n.airtime,oe=Math.max(n.compression*Math.exp(-8*s),B*.72),ce=n.landingImpact*Math.exp(-4*s),Ce=!1,qe=null,re=0,Ie=0,Be=n.skid;if(q>0||P>0){if(n.air>0){ae=De(ae+c*.75*s,-7,7);let St=1+h*.5-(he>.2?f*.35:0);$=Yt($+ae*St*s),he+=s}else he=0;if(q+=P*s-R*s,P-=8.6*s,q<=0){let St=n.air>0;if(q=0,St){let bn=Math.max(0,R-P)*Math.cos(r*.7),Ri=a==="powder"?.72:a==="ice"?1.2:1;ce=(1+bn**2/(2*9.81*.4))*Ri,oe=Math.max(oe,De(ce/6,.55,1));let Xi=Math.abs(Yt($-H)),Dn=Math.min(Xi,Math.abs(Math.PI-Xi));ke=Xi>Math.PI/2;let Ts=a==="powder"?.95:Math.PI/4,Rr=9+g*1.5;if(Dn>Ts||ce>Rr)Ce=!0,qe=Dn>Ts?"landing-edge":"landing-impact",re=Math.sign(Yt($-H))||1,Ie=2;else if(Dn>Math.PI/18||ce>3){let Es=De(Dn/Ts,0,1);Be=Math.max(Be,.35+Es*.4),Qe=.3;let Cr=1-Es*.08-De((ce-3)*.018,0,.1);if(w={across:w.across*Cr,downhill:w.downhill*Cr},y=Math.hypot(w.across,w.downhill),y<12){let Pr=12/Math.max(y,.001);w={across:w.across*Pr,downhill:w.downhill*Pr},y=12}}ye=Yt($-H-(ke?Math.PI:0))}P=0,ae=0,he=0}}j&&(Q=.7);let xe=Yt($-H),it=d?De(Math.abs(ye)/1.5*(.3+Wt*.4)*(1-(Math.sign(A)===Math.sign(l)?T*.35:0))+Tt*.6,0,.95):0;Be=Math.max(Be,n.skid+(it-n.skid)*un(10,s)),d&&it<n.skid&&(Be=Math.max(0,n.skid+(it-n.skid)*un(10,s)));let Ct=d&&a!=="rail"?De(T*1.6*(1-Tt*.7)*(1-De(Math.abs(ye)/.7,0,1)*.85),0,1):0,Sn=d?De((_e?1:0)+Math.abs(l)*Be*.5,0,1):0,Tr=_e?1:n.slash+(Sn-n.slash)*un(Sn>n.slash?28:11,s),bs=d?De(U.roughness*(.12+y/34*.38)+T*(1-o.edgeGrip)*.55,0,1):0,qo=Yt(q>0?$-ae*.1:H+(ke?Math.PI:0)),ws=Yt(n.torsoYaw+Yt(qo-n.torsoYaw)*un(q>0?12:5,s)),Er=n.boardRotation+Yt($-n.boardYaw),Yn=n.torsoRotation+Yt(ws-n.torsoYaw),Wi=q>0?l:0,Ar=n.tweak+(Wi-n.tweak)*un(Math.abs(Wi)>Math.abs(n.tweak)?18:14,s);return Bo({air:q,airtime:he,boardLightness:Re,boardOffset:ye,boardRotation:Er,boardYaw:$,bodyHeave:J,bumpImpact:B,butter:fe,carveQuality:Ct,chatter:bs,compression:oe,crouchAmount:g,crashed:Ce,crashReason:qe,crashSpin:re,crashTimer:Ie,edge:A,elapsed:n.elapsed+s,flickBrake:Se,flickRecovery:Qe,frontEdge:E,frontFootPressure:W,gForce:De(Math.abs(Nt)/9.81,0,1.8),heading:H,landingImpact:ce,lean:m,noseFloat:ee,popCharge:ue,position:{across:n.position.across+w.across*s,downhill:n.position.downhill+w.downhill*s},pressAmount:x,rearEdge:b,skid:Be,slash:Tr,slipAngle:xe,slopeGrade:r,speed:y,spinVelocity:ae,stance:n.stance,steer:l,steerHold:ne,surface:a,switchRiding:ke,turnRate:se,tweak:Ar,terrainHeight:U.height,terrainLaunchCooldown:Q,terrainPitch:U.slope,terrainRoll:U.roll,torsoYaw:ws,torsoRotation:Yn,velocity:w,verticalVelocity:P,washout:Tt})}var Mc,Wu,De,Ae,Yt,un,i_,Bo,s_,r_,a_,Sc=Jn(()=>{Mc=Object.freeze({groomed:Object.freeze({baseGrip:1,drag:1,edgeGrip:1,skid:1}),ice:Object.freeze({baseGrip:.16,drag:.45,edgeGrip:.25,skid:.7}),powder:Object.freeze({baseGrip:.7,drag:1.85,edgeGrip:.76,skid:1.12}),slush:Object.freeze({baseGrip:.85,drag:1.8,edgeGrip:.74,skid:1.35}),chop:Object.freeze({baseGrip:.82,drag:1.3,edgeGrip:.82,skid:1.2}),rail:Object.freeze({baseGrip:.02,drag:.3,edgeGrip:.02,skid:.3})}),Wu=Object.freeze({groomed:Object.freeze({amplitude:.055,roughness:.2}),ice:Object.freeze({amplitude:.012,roughness:.07}),powder:Object.freeze({amplitude:.34,roughness:.95}),slush:Object.freeze({amplitude:.14,roughness:.55}),chop:Object.freeze({amplitude:.24,roughness:.9}),rail:Object.freeze({amplitude:0,roughness:0})}),De=(n,e,t)=>Math.min(t,Math.max(e,n)),Ae=(n,e)=>Number.isFinite(n)?n:e,Yt=n=>Math.atan2(Math.sin(n),Math.cos(n)),un=(n,e)=>1-Math.exp(-n*e),i_=(n,e)=>Math.sin(e*.38+n*.17)*.45+Math.sin(e*1.07-n*.42+.8)*.3+Math.sin(e*2.31+n*.77+1.7)*.15+Math.sin(e*.11+n*1.6)*.1;Bo=n=>Object.freeze({...n,position:Object.freeze({...n.position}),velocity:Object.freeze({...n.velocity})}),s_=(n,e)=>({across:Math.sin(e)*n,downhill:Math.cos(e)*n});r_=n=>.36+Math.sin(n*.024-.3)*.2+Math.sin(n*.061)*.03,a_=(n,e,t,i)=>{let r=Math.exp(-(i==="ice"?.5:i==="powder"?3.4:1.9)*e),a={across:n.velocity.across*r,downhill:n.velocity.downhill*r+9.81*Math.sin(t)*e},o={across:n.position.across+a.across*e,downhill:n.position.downhill+a.downhill*e},c=Mr(o,i),l=Math.hypot(a.across,a.downhill),h=Math.atan2(a.across,a.downhill),f=Math.max(0,n.crashTimer-e),u=f<=0,d=u?h+(n.switchRiding?Math.PI:0):Yt(n.boardYaw+n.crashSpin*2.3*e);return Bo({...n,boardRotation:n.boardRotation+Yt(d-n.boardYaw),boardYaw:d,boardOffset:0,butter:n.butter*Math.exp(-9*e),bumpImpact:n.bumpImpact*Math.exp(-10*e),carveQuality:0,chatter:n.chatter*Math.exp(-8*e),compression:n.compression*Math.exp(-5*e),crashed:!u,crashReason:u?null:n.crashReason,crashSpin:u?0:n.crashSpin,crashTimer:f,edge:u?0:n.edge*Math.exp(-6*e),elapsed:n.elapsed+e,flickBrake:0,flickRecovery:0,gForce:0,heading:h,landingImpact:n.landingImpact*Math.exp(-3*e),lean:u?0:n.lean*Math.exp(-4*e),position:o,pressAmount:0,skid:u?0:1,slash:n.slash*Math.exp(-8*e),slipAngle:u?0:Yt(n.boardYaw-h),slopeGrade:t,speed:l,surface:i,terrainHeight:c.height,terrainPitch:c.slope,terrainRoll:c.roll,torsoYaw:n.torsoYaw,velocity:a,washout:0})}});function sn(n,e,t="powder"){let i=Yu(n),s=Yu(e),r=-.36*s+.2/.024*(Math.cos(s*.024-.3)-Math.cos(-.3))+.03/.061*(Math.cos(s*.061)-1),a=Math.max(0,Math.abs(i)-9.5),o=a**1.8*.021+Math.sin(s*.065+i*.12)*a*.025,c=Math.sin(s*.075+i*.095)*.22+Math.sin(s*.19-i*.16)*.085,l=Mr({across:i,downhill:s},t).height;return r+Lr(s)*.48+o+c+l}function Zu(n,e,t="powder"){let s=(sn(n+.25,e,t)-sn(n-.25,e,t))/.5,r=(sn(n,e-.25,t)-sn(n,e+.25,t))/(.25*2),a=Math.hypot(s,1,r);return Object.freeze({x:-s/a,y:1/a,z:-r/a})}var Yu,Ju=Jn(()=>{Sc();Ur();Yu=(n,e=0)=>Number.isFinite(n)?n:e});var Qu={};yd(Qu,{createMountainWorld:()=>M_});function M_(n){let e=new No({canvas:n,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=jt,e.toneMapping=or,e.toneMappingExposure=1.03,e.shadowMap.enabled=!0,e.shadowMap.type=Oi,e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),n.dataset.renderMode="webgl",bc.map=f_(),bc.needsUpdate=!0;let t=new Ws;t.background=new ze(11193305),t.fog=new Vs(11849433,220,480);let i=y_();t.add(i);let s=v_();t.add(s),t.add(new ir(15333375,8559787,1.25));let r=new ar(16774629,2.15);r.position.set(-40,90,35),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.left=-48,r.shadow.camera.right=48,r.shadow.camera.top=62,r.shadow.camera.bottom=-30,r.shadow.camera.near=.5,r.shadow.camera.far=185,r.shadow.bias=-3e-4,r.target.position.set(0,0,-25),t.add(r,r.target);let a=new on(64,1,.08,980);a.rotation.order="YXZ";let o=Du();t.add(o.group);let c=new Map,l=new Map,h=new Map,f=yc(750),u=new Lt(new At,new Mn({color:7576491,transparent:!0,opacity:.3,depthWrite:!1,side:en}));u.renderOrder=1,t.add(u);let d=[],g=new At,x=new Float32Array(420);g.setAttribute("position",new vn(x,3)),g.setDrawRange(0,0);let m=new Zs(g,new fs({color:15399419,size:.16,transparent:!0,opacity:.8,depthWrite:!1,sizeAttenuation:!0}));t.add(m);let p={hazards:[],phase:"idle"},v=0,E=()=>{let C=Math.max(1,n.clientWidth||window.innerWidth),I=Math.max(1,n.clientHeight||window.innerHeight);e.setSize(C,I,!1),a.aspect=C/I,a.updateProjectionMatrix()};window.addEventListener("resize",E),E();let b=C=>{let I=Math.floor((C-o_)/Sr),N=Math.ceil((C+Ku)/Sr);for(let U=I;U<=N;U+=1){if(c.has(U))continue;let R=p_(U),F=m_(U);t.add(R,F),c.set(U,{mesh:R,grooves:F})}for(let[U,R]of c)U>=I&&U<=N||(t.remove(R.mesh,R.grooves),R.mesh.geometry.dispose(),R.grooves.geometry.dispose(),R.grooves.material.dispose(),c.delete(U))},A=C=>{let I=Dr(Math.max(0,C-20),Ku,{halfWidth:l_}),N=new Set(I.map(U=>U.index));for(let U of I){if(l.has(U.index))continue;let R=new kt;for(let F of U.scenery){let B=F.kind==="rock"?ju(F.size):wc(F.size);B.position.set(F.x,sn(F.x,F.z),-F.z),B.rotation.y=zo(F.z+F.x)*Math.PI*2,R.add(B)}t.add(R),l.set(U.index,R)}for(let[U,R]of l)N.has(U)||(t.remove(R),l.delete(U))},T=()=>{let C=new Set(p.hazards.map(I=>I.id));for(let I of p.hazards){if(h.has(I.id))continue;let N=x_(I);N.position.set(I.x,sn(I.x,I.worldDownhill),-I.worldDownhill),t.add(N),h.set(I.id,N)}for(let[I,N]of h)C.has(I)||(t.remove(N),h.delete(I))},_=C=>{f.update(C);let I=[],N=C.position.downhill,U=f.points();for(let F=1;F<U.length;F+=1){let B=U[F-1],k=U[F];if(N-B.downhill>52||k.downhill>N+.2||k.downhill-B.downhill>1.8)continue;let J=k.kind==="carve"?.045:k.kind==="skid"?.2:.11,W=B.across-J,ee=B.across+J,ne=k.across-J,te=k.across+J,Le=sn(B.across,B.downhill)+.032,Y=sn(k.across,k.downhill)+.032;I.push(W,Le,-B.downhill,ee,Le,-B.downhill,ne,Y,-k.downhill,ee,Le,-B.downhill,te,Y,-k.downhill,ne,Y,-k.downhill)}let R=new At;R.setAttribute("position",new tt(I,3)),u.geometry.dispose(),u.geometry=R},S=(C,I,N,U)=>{for(let F=d.length-1;F>=0;F-=1){let B=d[F];if(B.life-=U,B.life<=0){d.splice(F,1);continue}B.x+=B.vx*U,B.y+=B.vy*U,B.z+=B.vz*U,B.vy-=5.8*U}let R=Vi(Number(I.spray)||0,0,1);if(p.phase==="running"&&C.air<.08&&R>.12){let F=Math.min(10,Math.ceil(R*7)),B=Math.sign(C.slipAngle||C.edge||1);for(let k=0;k<F&&d.length<140;k+=1){let J=zo(C.elapsed*113+k*23);d.push({x:C.position.across+B*(.15+J*.22),y:N+.09,z:-C.position.downhill+.2,vx:B*(.7+J*2.9),vy:1.2+J*2.9,vz:1.2+zo(J*17)*3.5,life:.3+J*.45})}}for(let F=0;F<d.length;F+=1){let B=d[F];x[F*3]=B.x,x[F*3+1]=B.y,x[F*3+2]=B.z}g.attributes.position.needsUpdate=!0,g.setDrawRange(0,d.length)};return Object.freeze({render:({camera:C={},pose:I={},state:N={}}={})=>{let U=N.position??{across:0,downhill:0},R=Number.isFinite(U.downhill)?U.downhill:0,F=Number.isFinite(U.across)?U.across:0,B=Number.isFinite(N.elapsed)?N.elapsed:0,k=B<v?0:Vi(B-v,0,.05);v=B,B===0&&(f.reset(),d.length=0),b(R),A(R),T();let J=sn(F,R,N.surface);o.update(N,I,J,Zu(F,R,N.surface)),_(N),S(N,I,J,k);let W=Number.isFinite(C.position?.across)?C.position.across:F,ee=sn(W-1.3,R-6.2,N.surface);a.position.set(W-1.3,ee+2.55+Math.max(0,N.air||0)*.2-Vi(C.dip||0,0,1)*.25,-R+6.2);let ne=Number.isFinite(N.heading)?N.heading:0,te=F+3+Math.sin(ne)*5.8,Le=R+15;a.lookAt(te,sn(te,Le,N.surface)+3.7,-Le),a.rotateZ(Vi(C.roll||0,-.06,.06));let Y=60+(1-Vi(C.zoom||1,.8,1))*20;Math.abs(a.fov-Y)>.04&&(a.fov=Y,a.updateProjectionMatrix()),i.position.copy(a.position),s.position.set(F*.14,sn(0,R+315)+14,-R-315),r.position.set(F-42,J+85,-R+38),r.target.position.set(F,J-10,-R-28),r.target.updateMatrixWorld(),e.render(t,a)},setCourse(C={}){p={hazards:Array.isArray(C.hazards)?C.hazards:[],phase:C.phase??"idle"}}})}var Sr,Ku,o_,l_,bc,ko,c_,h_,$u,u_,d_,Vi,zo,Xn,f_,p_,m_,wc,ju,g_,__,x_,y_,v_,ed=Jn(()=>{xc();Uu();vc();Ur();Ju();Sr=36,Ku=246,o_=24,l_=9.5,bc=new mn({vertexColors:!0,roughness:.98,metalness:0,side:en}),ko=new mn({color:6641737,roughness:1}),c_=new mn({color:9533795,roughness:1}),h_=[1788994,2645070,3501400].map(n=>new mn({color:n,roughness:1,flatShading:!0})),$u=new mn({color:15397875,roughness:.98}),u_=new mn({color:6912899,roughness:.98,flatShading:!0}),d_=new mn({color:5137004,roughness:1,flatShading:!0}),Vi=(n,e,t)=>Math.min(t,Math.max(e,n)),zo=n=>{let e=Math.sin(n*127.1+31.37)*43758.5453;return e-Math.floor(e)},Xn=(n,e,t,i=0,s=0,r=0)=>{let a=new Lt(n,e);return a.position.set(i,s,r),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a},f_=()=>{let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256),i=58291,s=()=>(i=Math.imul(i,1664525)+1013904223|0,(i>>>0)/4294967296);for(let a=0;a<t.data.length;a+=4){let o=Math.floor(236+s()*19);t.data[a]=o,t.data[a+1]=Math.min(255,o+3),t.data[a+2]=Math.min(255,o+5),t.data[a+3]=255}e.putImageData(t,0,0);for(let a=0;a<115;a+=1){let o=s()*256,c=s()*256;e.strokeStyle=`rgba(94, 139, 157, ${.025+s()*.055})`,e.lineWidth=.6+s()*1.3,e.beginPath(),e.moveTo(o,c),e.quadraticCurveTo(o+9,c-1,o+18+s()*18,c+1),e.stroke()}let r=new Ks(n);return r.wrapS=Ui,r.wrapT=Ui,r.colorSpace=jt,r.anisotropy=4,r},p_=n=>{let e=new At,t=[],i=[],s=[],r=[],a=42,o=12,c=82,l=new ze(15397361),h=new ze(13164002),f=new ze;for(let d=0;d<=o;d+=1){let g=n*Sr+d/o*Sr;for(let x=0;x<=a;x+=1){let m=-c/2+x/a*c;t.push(m,sn(m,g),-g),s.push(m/8,g/8);let p=Vi((Math.abs(m)-7.7)/8,0,1),v=(Math.sin(g*.33+m*.47)+Math.sin(g*.12-m*.81))*.019;f.copy(l).lerp(h,p).offsetHSL(0,0,v),i.push(f.r,f.g,f.b)}}for(let d=0;d<o;d+=1)for(let g=0;g<a;g+=1){let x=d*(a+1)+g,m=x+1,p=x+a+1,v=p+1;r.push(x,m,p,m,v,p)}e.setIndex(r),e.setAttribute("position",new tt(t,3)),e.setAttribute("color",new tt(i,3)),e.setAttribute("uv",new tt(s,2)),e.computeVertexNormals();let u=new Lt(e,bc);return u.receiveShadow=!0,u.frustumCulled=!1,u},m_=n=>{let e=[];for(let s=-11;s<=11;s+=1){let r=s*.76;for(let a=0;a<12;a+=1){let o=n*Sr+a*3,c=o+3;e.push(r,sn(r,o)+.018,-o,r,sn(r,c)+.018,-c)}}let t=new At;t.setAttribute("position",new tt(e,3));let i=new Ys(t,new ds({color:8826552,transparent:!0,opacity:.09,depthWrite:!1}));return i.frustumCulled=!1,i},wc=(n=1)=>{let e=new kt,t=3.9*n;Xn(new Qt(.09*n,.17*n,t*.38,7),ko,e,0,t*.19,0);for(let i=0;i<3;i+=1){let s=(1.15-i*.22)*n,r=(2.2-i*.15)*n,a=(1.5+i*.8)*n;Xn(new ri(s,r,7),h_[i],e,0,a,0);let o=Xn(new ri(s*.54,r*.42,7),$u,e,0,a+r*.3,0);o.castShadow=!1}return e},ju=(n=1)=>{let e=new kt,t=Xn(new Mi(.86*n,0),u_,e,0,.48*n,0);t.scale.set(1.2,.68,.92),t.rotation.set(.18,.47,-.11);let i=Xn(new Mi(.47*n,0),d_,e,.52*n,.28*n,.2*n);i.scale.y=.66;let s=Xn(new ri(.52*n,.22*n,5),$u,e,-.1*n,.96*n,-.1*n);return s.rotation.z=-.18,e},g_=()=>{let n=new kt,e=Xn(new Qt(.29,.39,14.5,10),ko,n,0,.44,0);e.rotation.z=Math.PI/2;for(let t of[-1,1]){let i=Xn(new Qt(.4,.4,.035,10),c_,n,t*7.27,.44,0);i.rotation.z=Math.PI/2}for(let t of[-4.2,-1.5,2.7,5.2]){let i=Xn(new Qt(.055,.13,1.15,6),ko,n,t,.7,-.23);i.rotation.z=-.7}return n},__=()=>{let n=new kt,e=Xn(new Qt(.16,.28,8,8),ko,n,0,1.72,0);e.rotation.z=Math.PI/2;for(let t of[-1,1]){let i=wc(.6);i.position.set(t*4.1,0,.15),n.add(i)}return n},x_=n=>n.kind==="jump"?g_():n.kind==="duck"?__():n.variant==="rock"?ju(1.15):wc(1.25),y_=()=>{let n=new Fi(900,24,16),e=n.getAttribute("position"),t=[],i=new ze(13163749),s=new ze(6461626),r=new ze;for(let o=0;o<e.count;o+=1){let c=Vi((e.getY(o)/900+.08)*1.45,0,1);r.copy(i).lerp(s,c),t.push(r.r,r.g,r.b)}n.setAttribute("color",new tt(t,3));let a=new Lt(n,new Mn({vertexColors:!0,side:qt,fog:!1,depthWrite:!1,toneMapped:!1}));return a.renderOrder=-1,a},v_=()=>{let n=new kt,e=[new Mn({color:8625834,side:en,fog:!0}),new Mn({color:10664900,side:en,fog:!0}),new Mn({color:14477802,side:en,fog:!0})];for(let t=0;t<2;t+=1){let i=[],s=[],r=[];for(let l=0;l<=22;l+=1)r.push({x:-480+l*44,y:28+zo(l*7+t*19)*43+Math.sin(l*.87+t)*20});let a=-t*80;for(let l=0;l<r.length-1;l+=1){let h=r[l],f=r[l+1];i.push(h.x,-70,a,h.x,h.y,a-8,f.x,f.y,a-8,h.x,-70,a,f.x,f.y,a-8,f.x,-70,a),s.push(h.x,h.y,a-8,f.x,f.y,a-8,h.x+7,h.y-13,a-5,f.x,f.y,a-8,f.x-8,f.y-16,a-5,h.x+7,h.y-13,a-5)}let o=new At;o.setAttribute("position",new tt(i,3));let c=new At;c.setAttribute("position",new tt(s,3)),n.add(new Lt(o,e[t])),n.add(new Lt(c,e[2]))}return n}});Ur();var Ue=Object.freeze({halfWidth:9.5,spawnDistance:44}),_n=(n,e,t)=>Math.min(t,Math.max(e,n)),br=n=>_n(Math.min(n.width/1100,n.height/700),.72,1.75),S_=(n,e)=>{let t=_n((e/n.height-.36)/(.78-.36),0,1),i=0,s=1;for(let r=0;r<12;r+=1){let a=(i+s)/2;a*a*(3-2*a)<t?i=a:s=a}return(i+s)/2},Ac=(n,e,t,i,s)=>{let r=(1-S_(n,e))*Ue.spawnDistance,a=1+.09*Math.sin((s+r)/34)*r/Ue.spawnDistance,o=Ps(n,e)*a,c=Nr(s+r)-Nr(s);return n.width/2+(i+(c-t)/Ue.halfWidth)*o},Ho=(n,e,t,i,s)=>{for(let r=0;r<=48;r+=1){let a=e.height*(.36+(1-.36)*r/48),o=Ac(e,a,t,i,s);r===0?n.moveTo(o,a):n.lineTo(o,a)}},b_=(n,e,t,i,s)=>{n.beginPath(),Ho(n,e,t,i,s);for(let r=48;r>=0;r-=1){let a=e.height*(.36+(1-.36)*r/48),o=r/48,c=Math.sin(r*.72+s*.12)*o*e.width*.002,l=e.width*(.003+o*o*.018)+c;n.lineTo(Ac(e,a,t,i,s)+i*l,a)}n.closePath(),n.fillStyle="#b9dbe8",n.fill(),n.beginPath(),Ho(n,e,t,i,s),n.strokeStyle="#f8ffff",n.lineWidth=Math.max(5,e.width*.006),n.stroke(),n.beginPath(),Ho(n,e,t,i,s),n.strokeStyle="#61cfe0",n.lineWidth=Math.max(1.5,e.width*.0013),n.stroke()},Ec=(n,e,t,i,s,r,a,o)=>{for(let[c,l,h,f]of t){let u=e.width*c+o,d=e.height*l,g=e.height*i,x=e.width*h*.5,m=u-x,p=u+x,v=(g-d)*.28;n.fillStyle=s,n.beginPath(),n.moveTo(m,g),n.lineTo(u-x*.53,d+v*1.4),n.lineTo(u-x*.22,d+v*.58),n.lineTo(u+f*x,d),n.lineTo(u+x*.27,d+v*.74),n.lineTo(u+x*.62,d+v*1.6),n.lineTo(p,g),n.closePath(),n.fill(),n.fillStyle=r,n.beginPath(),n.moveTo(u+f*x,d),n.lineTo(u+x*.27,d+v*.74),n.lineTo(p,g),n.lineTo(u+x*.1,g),n.lineTo(u-x*.09,d+v*1.6),n.closePath(),n.fill(),n.fillStyle=a,n.beginPath(),n.moveTo(u-x*.22,d+v*.58),n.lineTo(u+f*x,d),n.lineTo(u+x*.27,d+v*.74),n.lineTo(u+x*.08,d+v*.9),n.lineTo(u-x*.02,d+v*.72),n.lineTo(u-x*.11,d+v*1.05),n.closePath(),n.fill(),n.fillStyle="rgba(121, 177, 197, 0.2)",n.beginPath(),n.moveTo(u-x*.23,d+(g-d)*.23),n.lineTo(u,d),n.lineTo(u-x*.04,d+(g-d)*.23),n.closePath(),n.fill()}},w_=(n,e,t,i)=>{let s=n.createLinearGradient(0,0,0,e.height*.6);s.addColorStop(0,"#58a7cc"),s.addColorStop(.62,"#b9e4ef"),s.addColorStop(1,"#effaff"),n.fillStyle=s,n.fillRect(0,0,e.width,e.height);let r=e.width*.76-t*4,a=e.height*.13,o=n.createRadialGradient(r,a,2,r,a,e.height*.28);o.addColorStop(0,"rgba(255,250,222,0.68)"),o.addColorStop(1,"rgba(255,250,222,0)"),n.fillStyle=o,n.fillRect(0,0,e.width,e.height*.48),n.fillStyle="#fff9e4",n.beginPath(),n.arc(r,a,e.height*.029,0,Math.PI*2),n.fill(),Ec(n,e,[[-.06,.17,.31,-.08],[.17,.08,.35,.04],[.43,.19,.34,-.1],[.7,.09,.37,.08],[1.04,.16,.36,-.06]],.42,"#c8dbe1","#a9c8d2","#f5fbfa",-t*2.5),Ec(n,e,[[-.07,.29,.27,.09],[.16,.2,.34,-.07],[.48,.27,.3,.06],[.78,.2,.35,-.08],[1.08,.27,.31,.07]],.51,"#9bbbc7","#739bac","#eff9fa",-t*5),Ec(n,e,[[-.11,.39,.33,.08],[.24,.32,.32,-.06],[.53,.38,.28,.07],[.87,.31,.34,-.08],[1.13,.4,.3,.04]],.59,"#6f9baa","#4c7d91","#d9eef1",-t*8);let c=n.createLinearGradient(0,e.height*.45,0,e.height);c.addColorStop(0,"#e3f5f6"),c.addColorStop(1,"#c3e0e8"),n.fillStyle=c,n.beginPath(),n.moveTo(0,e.height*.56),n.bezierCurveTo(e.width*.13,e.height*.46,e.width*.23,e.height*.56,e.width*.39,e.height*.5),n.bezierCurveTo(e.width*.57,e.height*.43,e.width*.65,e.height*.57,e.width*.79,e.height*.48),n.bezierCurveTo(e.width*.88,e.height*.44,e.width*.95,e.height*.54,e.width,e.height*.52),n.lineTo(e.width,e.height),n.lineTo(0,e.height),n.closePath(),n.fill();let l=n.createLinearGradient(0,e.height*.36,0,e.height);l.addColorStop(0,"#f6fcfc"),l.addColorStop(.55,"#ffffff"),l.addColorStop(1,"#f7fcff"),n.fillStyle=l,n.beginPath(),Ho(n,e,t,-1,i);for(let h=48;h>=0;h-=1){let f=e.height*(.36+(1-.36)*h/48);n.lineTo(Ac(e,f,t,1,i),f)}n.closePath(),n.fill();for(let h of[-1,1])b_(n,e,t,h,i)},T_=(n,e,t,i,s,r)=>{let a=s==="powder"?4.8:2.8,o=Math.floor(i/a)*a,c=s==="ice"?.05:s==="powder"?.075:.11;n.save(),n.strokeStyle=s==="ice"?"#81c9d7":"#9bcbd4";for(let l=o;l<i+Ue.spawnDistance;l+=a){let h=l-i;if(h<.5||h>Ue.spawnDistance)continue;let f={...Ue,travel:i},u=Tn(e,t,{x:-Ue.halfWidth*.86,z:h},f),d=Tn(e,t,{x:Ue.halfWidth*.86,z:h},f),g=Math.sin(l*.75)*5*u.scale;n.globalAlpha=c*u.alpha*(.65+Math.min(r/34,1)*.35),n.lineWidth=Math.max(.7,u.scale*(s==="powder"?2.5:1.4)),n.beginPath(),n.moveTo(u.x,u.y),n.quadraticCurveTo((u.x+d.x)/2,u.y-4*u.scale,d.x,d.y),n.stroke()}n.restore()},E_=(n,e,t,i,s)=>{let r=.58+.42*Math.sin(i*.14+.8)**2,a=_n((s-14)/20,0,1)*r;if(!(a<.1)){n.save(),n.strokeStyle="#ffffff",n.lineCap="round";for(let o=0;o<14;o+=1){let c=(o*8+i*(.65+o%3*.09))%Ue.spawnDistance,l=o%2?1:-1,h=Tn(e,t,{x:l*(Ue.halfWidth+3.5+o%3*2),z:c},{...Ue,travel:i}),f=(11+h.scale*42)*br(e);n.globalAlpha=h.alpha*a*.28,n.lineWidth=Math.max(1,h.scale*2.2),n.beginPath(),n.moveTo(h.x-f*.5,h.y),n.quadraticCurveTo(h.x,h.y-4*h.scale,h.x+f,h.y-2*h.scale),n.stroke()}n.restore()}},A_=(n,e,t,i)=>{let r=Math.floor(i/7.5)*7.5;n.save(),n.lineCap="round";for(let a=r;a<i+Ue.spawnDistance;a+=7.5){let o=a-i;if(!(o<1||o>Ue.spawnDistance))for(let c of[-1,1]){let l=Tn(e,t,{x:c*(Ue.halfWidth+1.8),z:o},{...Ue,travel:i}),h=Tn(e,t,{x:c*(Ue.halfWidth+9),z:o},{...Ue,travel:i});n.globalAlpha=l.alpha*.34,n.strokeStyle="#8bbac9",n.lineWidth=Math.max(1,l.scale*3.5),n.beginPath(),n.moveTo(l.x,l.y),n.quadraticCurveTo((l.x+h.x)/2,l.y-8*l.scale,h.x,h.y-3*l.scale),n.stroke()}}n.restore()},R_=(n,e,t,i)=>{let s=Math.max(0,t-i.downhill),r=n.height*.78+s*Math.max(3.5,n.height*.006);return{x:n.width/2+(i.across-e)/Ue.halfWidth*Ps(n,r),y:r,behind:s}},C_=(n,e,t,i,s)=>{if(s.length<2)return;let r=s.map(o=>({...R_(e,t,i,o),speed:o.speed})).filter(o=>o.y<=e.height+25);if(r.length<2)return;let a=br(e);n.lineCap="round",n.lineJoin="round";for(let[o,c,l]of[[-10,9,"rgba(85,150,166,0.32)"],[10,9,"rgba(85,150,166,0.32)"],[-10,4,"rgba(255,255,255,0.92)"],[10,4,"rgba(255,255,255,0.92)"]]){n.beginPath(),n.moveTo(r[0].x+o*a,r[0].y);for(let h of r.slice(1))n.lineTo(h.x+o*a,h.y);n.strokeStyle=l,n.lineWidth=c*a,n.stroke()}for(let o=0;o<r.length;o+=3){let c=r[o],l=_n(1-c.behind/28,0,1),h=_n((c.speed||16)/25,.7,1.45),f=(20+o%4*5)*a,u=(8+o%5*2.1)*a*l*h;if(!(u<.5))for(let d of[-1,1])n.globalAlpha=l,n.fillStyle="rgba(93,151,166,0.27)",n.beginPath(),n.ellipse(c.x+d*f,c.y+u*.55,u*1.65,u*.65,0,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(c.x+d*f,c.y,u*1.2,u*.8,0,0,Math.PI*2),n.fill()}n.globalAlpha=1},P_=(n,e,t,i,s=0,r=16,a=e.width/2)=>{let o=br(e),c=e.height*.78,l=_n(Math.abs(t),0,1),h=_n(s/8,0,1);if(l<.05&&h<.08)return;let f=_n(r/24,.75,1.5);for(let u of[-1,1]){let d=(.52+(u*t>0?l*1.1:l*.35)+h*.8)*f;for(let g=0;g<12;g+=1){let x=(i*2.7+g*.8)%11,m=a+u*(28+x*(5.2+l*3.4))*o,p=c+(x*2.3+Math.sin(g*2.1)*6)*o,v=(5+(11-x)*.95)*o*d;n.fillStyle="rgba(85,151,174,0.24)",n.beginPath(),n.ellipse(m,p+v*.45,v*1.42,v*.72,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.96)",n.beginPath(),n.ellipse(m,p,v*1.12,v*.8,0,0,Math.PI*2),n.fill()}}},I_=(n,e,t)=>{if(t<=0)return;let i=br(e),s=1-_n(t/.8,0,1),r=e.width/2,a=e.height*.78;n.save(),n.globalAlpha=_n(t*1.2,0,1);for(let o=0;o<18;o+=1){let c=o*Math.PI*2/18,l=(18+s*110+o%3*11)*i,h=(6+o%4*2.4)*i*(1-s*.55);n.fillStyle=o%3===0?"#b5e3e9":"#ffffff",n.beginPath(),n.ellipse(r+Math.cos(c)*l,a+Math.sin(c)*l*.45,h*1.3,h*.8,0,0,Math.PI*2),n.fill()}n.restore()},nd=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.28)":"rgba(45,104,114,0.16)",n.beginPath(),n.ellipse(e+i*.15,t+i*.06,i*.52,i*.13,0,0,Math.PI*2),n.fill(),n.fillStyle="#624535",n.fillRect(e-i*.06,t-i*.3,i*.12,i*.32);for(let r=0;r<3;r+=1){let a=t-i*(1-r*.24),o=t-i*(.32-r*.13),c=i*(.25+r*.105);n.fillStyle=s?r===1?"#17664e":"#0a463d":r===1?"#2a8b6b":"#176c57",n.beginPath(),n.moveTo(e,a),n.lineTo(e-c,o),n.lineTo(e+i*.04,o),n.closePath(),n.fill(),n.fillStyle=r===1?"#269976":"#1a856a",n.beginPath(),n.moveTo(e,a),n.lineTo(e+i*.04,o),n.lineTo(e+c,o),n.closePath(),n.fill(),n.fillStyle=s?"#0d4d43":"#1d765f",n.beginPath(),n.moveTo(e,a),n.lineTo(e+c,o),n.lineTo(e+c*.06,o),n.closePath(),n.fill(),n.strokeStyle="#e6f6f5",n.lineWidth=Math.max(1,i*.027),n.beginPath(),n.moveTo(e-c*.13,a+i*.08),n.lineTo(e-c*.45,a+(o-a)*.63),n.lineTo(e-c*.67,a+(o-a)*.68),n.stroke()}s&&(n.strokeStyle="rgba(229,106,65,0.8)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.ellipse(e,t+i*.02,i*.43,i*.1,0,0,Math.PI*2),n.stroke())},id=(n,e,t,i,s=!1)=>{n.fillStyle=s?"rgba(21,48,61,0.26)":"rgba(45,104,114,0.15)",n.beginPath(),n.ellipse(e+i*.14,t+i*.06,i*.59,i*.15,0,0,Math.PI*2),n.fill(),n.fillStyle=s?"#374859":"#627889",n.beginPath(),n.moveTo(e-i*.44,t),n.lineTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.39,t-i*.25),n.lineTo(e+i*.46,t),n.closePath(),n.fill(),n.strokeStyle=s?"#273746":"#536d7b",n.lineWidth=Math.max(1.5,i*.025),n.stroke(),n.fillStyle=s?"#708b99":"#9bb9c2",n.beginPath(),n.moveTo(e-i*.34,t-i*.33),n.lineTo(e+i*.06,t-i*.47),n.lineTo(e+i*.16,t-i*.31),n.lineTo(e-i*.21,t-i*.23),n.closePath(),n.fill(),n.strokeStyle="#effbfb",n.lineWidth=Math.max(2,i*.055),n.beginPath(),n.moveTo(e-i*.21,t-i*.32),n.lineTo(e+i*.03,t-i*.42),n.lineTo(e+i*.16,t-i*.33),n.stroke(),s&&(n.strokeStyle="rgba(229,106,65,0.85)",n.lineWidth=Math.max(2,i*.035),n.beginPath(),n.moveTo(e-i*.43,t+i*.02),n.quadraticCurveTo(e,t+i*.16,e+i*.43,t+i*.02),n.stroke())},L_=(n,e,t,i)=>{let s=Dr(i,Ue.spawnDistance,{halfWidth:Ue.halfWidth}),r=s.flatMap(a=>a.scenery);r.sort((a,o)=>o.z-a.z);for(let a of r){let o=a.z-i;if(o<0||o>Ue.spawnDistance)continue;let c=Tn(e,t,{x:a.x,z:o},{...Ue,travel:i}),l=c.pathHalf/Ue.halfWidth*2.35*a.size;n.save(),n.globalAlpha=c.alpha*.92,Yo(a.z)==="glow"&&(n.fillStyle="rgba(54,218,225,0.18)",n.beginPath(),n.ellipse(c.x,c.y,l*.65,l*.13,0,0,Math.PI*2),n.fill()),a.kind==="rock"?id(n,c.x,c.y,l):nd(n,c.x,c.y,l),n.restore()}for(let a of s){if(a.index%8!==3)continue;let o=a.index*36+36/2-i;if(o<0||o>Ue.spawnDistance)continue;let c=a.index%16===3?-1:1,l=Tn(e,t,{x:c*(Ue.halfWidth+10),z:o},{...Ue,travel:i}),h=l.pathHalf/Ue.halfWidth;n.save(),n.globalAlpha=l.alpha*.8,n.fillStyle="#284f61",n.fillRect(l.x-h*.7,l.y-h*2.5,h*1.4,h*2.5),n.fillStyle="#e6f5f6",n.beginPath(),n.moveTo(l.x-h,l.y-h*2.5),n.lineTo(l.x,l.y-h*3.5),n.lineTo(l.x+h,l.y-h*2.5),n.closePath(),n.fill(),n.fillStyle="#ef9d65",n.fillRect(l.x-h*.2,l.y-h*1.2,h*.4,h*1.2),n.restore()}for(let a of s){if(a.biome!=="glow"||a.index%4!==0)continue;let o=a.index*36+3-i;if(!(o<0||o>Ue.spawnDistance))for(let c of[-1,1]){let l=Tn(e,t,{x:c*(Ue.halfWidth+4.5),z:o},{...Ue,travel:i}),h=l.pathHalf/Ue.halfWidth;n.save(),n.globalAlpha=l.alpha,n.fillStyle="rgba(53,219,222,0.25)",n.beginPath(),n.ellipse(l.x,l.y,h*1.3,h*.32,0,0,Math.PI*2),n.fill(),n.fillStyle="#24485c",n.fillRect(l.x-h*.16,l.y-h*2.5,h*.32,h*2.5),n.fillStyle="#55e2df",n.beginPath(),n.arc(l.x,l.y-h*2.55,h*.45,0,Math.PI*2),n.fill(),n.restore()}}},N_=(n,e,t,i)=>{let s=Math.floor(i/10)*10;for(let r=s;r<i+Ue.spawnDistance;r+=10){let a=r-i;if(!(a<1||a>Ue.spawnDistance-1))for(let o of[-1,1]){let c=Tn(e,t,{x:o*(Ue.halfWidth+.55),z:a},{halfWidth:Ue.halfWidth,viewDistance:Ue.spawnDistance,travel:i}),l=br(e)*c.scale,h=38*l,{x:f,y:u}=c;n.save(),n.globalAlpha=c.alpha,n.strokeStyle="rgba(55, 103, 123, 0.22)",n.lineWidth=Math.max(1,2*l),n.beginPath(),n.moveTo(f,u),n.lineTo(f+o*16*l,u+3*l),n.stroke(),n.strokeStyle="#e15f50",n.lineWidth=Math.max(1.5,3*l),n.beginPath(),n.moveTo(f,u),n.lineTo(f,u-h),n.stroke(),n.strokeStyle="#f58e71",n.lineWidth=Math.max(.8,l),n.beginPath(),n.moveTo(f-l*.75,u-2*l),n.lineTo(f-l*.75,u-h),n.stroke(),n.fillStyle="#c6b9aa",n.beginPath(),n.moveTo(f+2*l,u-h+l),n.lineTo(f-o*13*l+2*l,u-h+6*l),n.lineTo(f+2*l,u-h+11*l),n.closePath(),n.fill(),n.fillStyle="#f4e9d8",n.beginPath(),n.moveTo(f,u-h),n.lineTo(f-o*15*l,u-h+5*l),n.lineTo(f,u-h+10*l),n.closePath(),n.fill(),n.restore()}}},D_=(n,e,t)=>{let i=t.pathHalf*2.08,s=Math.max(7,t.pathHalf/Ue.halfWidth*.72),{x:r,y:a}=t;n.fillStyle="rgba(25,53,63,0.22)",n.beginPath(),n.ellipse(r,a+s*.7,i*.52,s*.7,0,0,Math.PI*2),n.fill(),n.fillStyle="#a9d7db",n.beginPath(),n.moveTo(r-i*.43,a+s*1.6),n.lineTo(r-i*.4,a-s*.6),n.lineTo(r+i*.4,a-s*.6),n.lineTo(r+i*.43,a+s*1.6),n.closePath(),n.fill(),n.fillStyle="#523929",n.fillRect(r-i/2,a-s,i,s*1.12),n.fillStyle="#ac7044",n.fillRect(r-i/2,a-s,i,s*.3),n.fillStyle="#f2f9f5",n.fillRect(r-i*.48,a-s*1.12,i*.96,s*.2),n.strokeStyle="#2d2928",n.lineWidth=Math.max(2,s*.12),n.strokeRect(r-i/2,a-s,i,s*1.12),n.strokeStyle="rgba(35,28,24,0.45)",n.lineWidth=Math.max(1,s*.07);for(let o of[-.32,-.08,.22])n.beginPath(),n.moveTo(r+i*o,a-s*.52),n.lineTo(r+i*(o+.12),a-s*.2),n.stroke();for(let o of[-1,1])n.fillStyle="#cf9c6f",n.beginPath(),n.ellipse(r+o*i*.49,a-s*.42,s*.35,s*.49,0,0,Math.PI*2),n.fill()},U_=(n,e,t)=>{let i=t.pathHalf/Ue.halfWidth/32,s=t.x,r=t.y-90*i,a=t.pathHalf*1.04;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(s,t.y+3*i,a*.6,8*i,0,0,Math.PI*2),n.fill(),n.fillStyle="#222b43",n.beginPath(),n.ellipse(s,r,22*i,13*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#222b43",n.lineCap="round",n.lineWidth=Math.max(3,10*i),n.beginPath(),n.moveTo(s-8*i,r),n.quadraticCurveTo(s-a*.58,r-45*i,s-a,r+5*i),n.moveTo(s+8*i,r),n.quadraticCurveTo(s+a*.58,r-45*i,s+a,r+5*i),n.stroke(),n.fillStyle="#f0a65c",n.beginPath(),n.moveTo(s,r+2*i),n.lineTo(s-4*i,r+10*i),n.lineTo(s+4*i,r+10*i),n.closePath(),n.fill()},F_=(n,e,t)=>{let i=t.pathHalf/Ue.halfWidth/32,s=t.y-83*i,r=t.pathHalf*1.04,a=t.x;n.fillStyle="rgba(29,47,65,0.16)",n.beginPath(),n.ellipse(a,t.y+3*i,r*.68,8*i,0,0,Math.PI*2),n.fill(),n.strokeStyle="#52382e",n.lineCap="round",n.lineWidth=Math.max(5,15*i),n.beginPath(),n.moveTo(a-r,s-9*i),n.quadraticCurveTo(a,s+9*i,a+r,s-9*i),n.stroke(),n.fillStyle="#1b624f";for(let o of[-.72,-.36,.08,.47,.77]){let c=a+r*o,l=s-10*i;n.fillStyle="#0b584e",n.beginPath(),n.moveTo(c-16*i,l+5*i),n.lineTo(c+2*i,l-12*i),n.lineTo(c+16*i,l+5*i),n.closePath(),n.fill(),n.fillStyle="#249575",n.beginPath(),n.moveTo(c+2*i,l-12*i),n.lineTo(c+16*i,l+5*i),n.lineTo(c+2*i,l+5*i),n.closePath(),n.fill()}},td=(n,e,t)=>{let i=_n(e.pathHalf*.12,9,31),s=e.y-(t==="jump"?i*3:e.pathHalf/Ue.halfWidth*3.5+i*1.5);n.globalAlpha=e.alpha,n.fillStyle=t==="jump"?"#dc754e":"#684f90",n.beginPath(),n.arc(e.x,s,i,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=Math.max(2,i*.16),n.lineCap="round",n.lineJoin="round",n.beginPath();let r=t==="jump"?-1:1;n.moveTo(e.x,s-r*i*.42),n.lineTo(e.x,s+r*i*.42),n.moveTo(e.x-i*.32,s+r*i*.1),n.lineTo(e.x,s+r*i*.42),n.lineTo(e.x+i*.32,s+r*i*.1),n.stroke()},O_=(n,e,t,i,s)=>{for(let r of[...s].sort((a,o)=>o.z-a.z)){if(r.z<-2||r.z>Ue.spawnDistance)continue;let a=Tn(e,t,r,{...Ue,travel:i});if(n.save(),n.globalAlpha=a.alpha,r.kind==="jump")D_(n,e,a),r.z>3&&td(n,a,"jump");else if(r.kind==="duck")r.variant==="bird"?U_(n,e,a):F_(n,e,a),r.z>3&&td(n,a,"duck");else{let o=a.pathHalf/Ue.halfWidth*2.35;r.variant==="rock"?id(n,a.x,a.y,o,!0):nd(n,a.x,a.y,o,!0)}n.restore()}};async function Rc(n){if(n.worldCanvas&&n.runtime)try{let{createMountainWorld:r}=await Promise.resolve().then(()=>(ed(),Qu)),a=r(n.worldCanvas);n.runtime.world3d=a,n.canvas.style.visibility="hidden",n.events.addEventListener("course:update",o=>{a.setCourse(o.detail)}),n.events.addEventListener("rider:update",o=>{a.render(o.detail)});return}catch(r){console.warn("3D mountain renderer unavailable; using the canvas view",r),n.worldCanvas.style.display="none"}let e=n.canvas.getContext("2d");if(!e)throw new Error("Mountain rendering requires a 2D canvas context");let t=0,i=[],s={crashFx:0,distance:0,hazards:[],phase:"idle"};n.events.addEventListener("course:update",r=>{s={crashFx:Number(r.detail?.crashFx)||0,distance:Number(r.detail?.distance)||0,hazards:Array.isArray(r.detail?.hazards)?r.detail.hazards:[],phase:r.detail?.phase??"idle"}}),n.events.addEventListener("rider:update",r=>{let a=r.detail?.state,o=r.detail?.camera,c=Number(a?.position?.across)||0,l=Number(o?.position?.across)||0,h=_n(Number(o?.zoom)||1,.82,1),f=Fc(n.canvas,c,l,h,Ue.halfWidth),u=s.phase==="idle"?0:Number(a?.position?.downhill)||s.distance;if(s.phase==="idle"?(t=0,i=[]):s.phase==="running"&&(t=Math.max(0,u),(a?.air??0)<.08&&(i.length===0||t-i.at(-1).downhill>=.45)&&i.push({across:c,downhill:t,speed:Number(a?.speed)||16}),i=i.filter(d=>t-d.downhill<42)),e.save(),e.translate(n.canvas.width/2,n.canvas.height/2),e.rotate(-(Number(o?.roll)||0)),e.translate(-n.canvas.width/2,-n.canvas.height/2),w_(e,n.canvas,f,u),T_(e,n.canvas,f,u,a?.surface??"powder",Number(a?.speed)||0),A_(e,n.canvas,f,u),C_(e,n.canvas,f,t,i),s.phase==="running"&&(a?.air??0)<.08){let d=a?.surface==="ice"?0:_n((Number(a?.slash)||0)*.85+(Number(a?.skid)||0)*.5+(Number(a?.washout)||0)*.35,0,1),g=Math.sign(a?.slipAngle||a?.edge||r.detail?.input?.carve||1),x=n.canvas.width/2+(c-l)*14*h;a?.surface!=="ice"&&P_(e,n.canvas,g*d,t,Number(a?.landingImpact)||0,Number(a?.speed)||16,x)}E_(e,n.canvas,f,u,Number(a?.speed)||0),L_(e,n.canvas,f,u),N_(e,n.canvas,f,u),O_(e,n.canvas,f,u,s.hazards),I_(e,n.canvas,s.crashFx),e.restore()})}var od="slopestyle.bestDistance",sd=16,B_=12,z_=34,ld=1.25,Vo=(n,e,t)=>Math.min(t,Math.max(e,n)),k_=n=>{let e=Number.isFinite(n?.velocity?.downhill)?n.velocity.downhill:Number(n?.speed)||0;return n?.crashed?Math.max(0,e):Math.max(B_,e)},rd=(n,e)=>n.map(t=>({...t,z:t.worldDownhill-e})),H_=(n,e,t={})=>{if(n.passed||Math.abs(n.z)>ld)return!1;let i=Math.abs(n.x-e.position.across),s=Number(e.air)||0;if(n.kind==="jump")return i<(n.radius??Ue.halfWidth*.94)&&s<.5;if(n.kind==="duck"){let r=n.variant==="bird"?.86:.88;return i<(n.radius??Ue.halfWidth*r)&&(Number(t.crouch)||0)<.75}return s<.35&&i<1.05},cd=(n,e)=>n+Math.random()*(e-n),G_=()=>{try{return Math.max(0,Number(localStorage.getItem(od))||0)}catch{return 0}},V_=n=>{try{localStorage.setItem(od,String(Math.floor(n)))}catch{}},W_=()=>{if(document.querySelector("[data-slopestyle-styles]"))return;let n=document.createElement("style");n.dataset.slopestyleStyles="true",n.textContent=`
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
    .fall-callout { border: 0; background: transparent; box-shadow: none; color: white; text-align: center; animation: fallaway 1.35s ease-in forwards; }
    .fall-callout h1 { font-size: clamp(2.6rem, 7vw, 5rem); }
    .is-hidden { display: none !important; }
    @media (max-width: 560px) { #hud-root { inset: 12px 12px auto 12px; } .hud-card { min-width: 100px; padding: 8px 10px; } .overlay-panel { padding: 25px; } }
    @keyframes fallaway {
      0% { opacity: 1; transform: translateY(-8vh) scale(1); }
      100% { opacity: 0; transform: translateY(28vh) scale(0.34); }
    }
  `,document.head.append(n)},X_=()=>{let n,e,t,i=0,s=0,r=()=>(n||(n=new(window.AudioContext||window.webkitAudioContext)),n.state==="suspended"&&n.resume(),n),a=l=>{if(t)return t;let h=Math.floor(l.sampleRate*2);t=l.createBuffer(1,h,l.sampleRate);let f=t.getChannelData(0),u=19341;for(let d=0;d<h;d+=1)u=Math.imul(u,1664525)+1013904223|0,f[d]=u/2147483648*.5;return t},o=(l,h,f)=>{let u=r(),d=u.createBufferSource(),g=u.createBiquadFilter(),x=u.createGain();d.buffer=a(u),g.type="bandpass",g.frequency.value=h,g.Q.value=.5,x.gain.setValueAtTime(.001,u.currentTime),x.gain.linearRampToValueAtTime(f,u.currentTime+.012),x.gain.exponentialRampToValueAtTime(.001,u.currentTime+l),d.connect(g),g.connect(x),x.connect(u.destination),d.start(u.currentTime,0,l)},c=()=>{if(e)return;let l=r(),h=l.createBufferSource();h.buffer=a(l),h.loop=!0;let f=(u,d)=>{let g=l.createBiquadFilter();g.type=u,g.frequency.value=d;let x=l.createGain();return x.gain.value=0,h.connect(g),g.connect(x),x.connect(l.destination),{filter:g,gain:x}};e={source:h,snow:f("highpass",1600),skid:f("bandpass",900),wind:f("lowpass",420)},h.start()};return Object.freeze({startRide(){c(),i=0,s=0},stopRide(){if(!e)return;let l=r();if(e){for(let h of[e.snow,e.skid,e.wind])h.gain.gain.setTargetAtTime(1e-4,l.currentTime,.06);e.source.stop(l.currentTime+.2),e=void 0}},ride(l){if(!e)return;let h=r(),f=Vo(l.speed/z_,0,1),u=l.air<=0&&!l.crashed?1:0,d={groomed:.034,powder:.014,ice:.048,slush:.036,chop:.042,rail:.02}[l.surface]??.03,g=l.surface==="ice"?2500:l.surface==="powder"?900:1600;e.snow.filter.frequency.setTargetAtTime(g+f*700,h.currentTime,.07),e.snow.gain.gain.setTargetAtTime(u*d*(.25+f*.75),h.currentTime,.04),e.skid.gain.gain.setTargetAtTime(u*(l.skid*.046+l.slash*.016),h.currentTime,.035),e.wind.gain.gain.setTargetAtTime((.005+f*f*.045)*(1-(l.crouchAmount??0)*.2),h.currentTime,.09),l.slash>.42&&i<=.42&&o(.14,750,.02),l.landingImpact>1.5&&s<=1.5&&o(.2,280,.04),i=l.slash,s=l.landingImpact},jump(){o(.09,1200,.015)},crash(){o(.32,220,.09)},fall(){o(.3,330,.035)}})},q_=n=>(n.innerHTML=`
    <div class="hud-card" aria-live="polite">
      <span class="hud-label">Distance</span>
      <strong class="hud-value" data-distance>0 m</strong>
    </div>
    <div class="hud-card" aria-live="polite">
      <span class="hud-label">Speed</span>
      <strong class="hud-value" data-speed>0<span class="hud-unit">km/h</span></strong>
    </div>
  `,Object.freeze({update({distance:e,speed:t}){n.querySelector("[data-distance]").textContent=`${Math.floor(e)} m`,n.querySelector("[data-speed]").innerHTML=`${Math.round(t*3.6)}<span class="hud-unit">km/h</span>`}})),Y_=(n,e)=>{let t=Math.random(),i="steer",s=e+Ue.spawnDistance;if(n.dodged>4&&t>.82?i="duck":n.dodged>2&&t>.64&&(i="jump"),i==="jump")return{id:n.nextHazardId,kind:i,passed:!1,variant:"fallen-log",radius:7.2,worldDownhill:s,x:0,z:Ue.spawnDistance};if(i==="duck")return{id:n.nextHazardId,kind:i,passed:!1,variant:"branch",radius:3.9,worldDownhill:s,x:0,z:Ue.spawnDistance};let r=[-.66,-.34,0,.34,.66],a=r.map((c,l)=>l).filter(c=>c!==n.lastLane),o=a[Math.floor(Math.random()*a.length)];return n.lastLane=o,{id:n.nextHazardId,kind:i,passed:!1,variant:Math.random()>.38?"pine":"rock",worldDownhill:s,x:r[o]*Ue.halfWidth+cd(-.18,.18),z:Ue.spawnDistance}},Z_=n=>cd(Vo(40-n*.25,28,40),Vo(58-n*.35,37,55)),ad=n=>({best:n,crashFx:0,distance:0,dodged:0,fallTimer:0,finalDistance:0,hazards:[],lastLane:-1,lastRiderDownhill:0,nextHazardId:1,phase:"idle",spawnLeft:12,speed:0});async function Cc(n){W_();let e=X_(),t=q_(n.hudRoot),i=ad(G_()),s,r=0,a=()=>{let m=n.canvas.getBoundingClientRect(),p=Math.min(window.devicePixelRatio||1,2);n.canvas.width=Math.max(1,Math.floor(m.width*p)),n.canvas.height=Math.max(1,Math.floor(m.height*p))},o=()=>{n.events.dispatchEvent(new CustomEvent("course:update",{detail:Object.freeze({crashFx:i.crashFx,distance:i.distance,hazards:Object.freeze(i.hazards.map(m=>Object.freeze({...m}))),phase:i.phase})}))},c=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel">
        <p class="overlay-kicker">An endless descent</p>
        <h1>Slopestyle</h1>
        <p>Read the terrain, set an edge, and find a line through the mountain.</p>
        <button class="primary-action" type="button" data-start>Drop in</button>
        <p class="run-note">A/D carve \xB7 \u2190/\u2192 flick or skid \xB7 \u2193 crouch \xB7 W/S shift weight \xB7 Space or \u2191 jump<br>Best run: ${Math.floor(i.best)} m</p>
      </div>
    `,n.overlayRoot.querySelector("[data-start]").addEventListener("click",f,{once:!0})},l=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel">
        <p class="overlay-kicker">Run ended</p>
        <h1>Back to the top</h1>
        <p class="run-stat">${Math.floor(i.finalDistance)} m</p>
        <p>Best run: ${Math.floor(i.best)} m</p>
        <button class="primary-action" type="button" data-restart>Ride again</button>
      </div>
    `,n.overlayRoot.querySelector("[data-restart]").addEventListener("click",f,{once:!0})},h=()=>{n.overlayRoot.innerHTML=`
      <div class="overlay-panel fall-callout">
        <h1>Off the mountain</h1>
      </div>
    `},f=()=>{i={...ad(i.best),phase:"running",spawnLeft:4,speed:sd},s=void 0,r=0,n.overlayRoot.innerHTML="",n.events.dispatchEvent(new CustomEvent("rider:reset",{detail:{speed:sd}})),o(),e.startRide()},u=(m,p)=>{if(i.finalDistance=i.distance,i.crashFx=.8,i.best=Math.max(i.best,Math.floor(i.distance)),V_(i.best),e.stopRide(),m==="cliff"){i.phase="falling",i.fallTimer=1.35,e.fall(),h();return}i.phase="crashed",m==="hazard"&&n.events.dispatchEvent(new CustomEvent("rider:impact",{detail:p})),e.crash(),l()},d=()=>{i.dodged+=1},g=(m,p)=>{let{input:v,state:E}=m,b=k_(E),A=Number.isFinite(E.position.downhill)?E.position.downhill:i.lastRiderDownhill,T=Math.max(0,A-i.lastRiderDownhill);if(i.lastRiderDownhill=A,e.ride(E),Math.abs(E.position.across)>(n.runtime?.world3d?38:Ue.halfWidth)){u("cliff");return}v.jump>0&&r<=0&&e.jump(),r=v.jump,i.speed=E.speed,i.distance+=b*p,i.spawnLeft-=T,i.spawnLeft<=0&&(i.hazards.push(Y_(i,A)),i.nextHazardId+=1,i.spawnLeft=Z_(i.speed)),i.hazards=rd(i.hazards,A);for(let _ of i.hazards){if(H_(_,E,v)){u("hazard",_);return}!_.passed&&_.z<-ld&&(_.passed=!0,d())}i.hazards=i.hazards.filter(_=>_.z>-5)},x=m=>{i.fallTimer-=m,i.fallTimer<=0&&(i.phase="crashed",e.crash(),l())};n.events.addEventListener("rider:update",m=>{let p=performance.now(),v=s===void 0?0:Vo((p-s)/1e3,0,.05);s=p,i.crashFx=Math.max(0,i.crashFx-v),i.phase==="running"?g(m.detail,v):i.phase==="falling"&&x(v),i.phase!=="running"&&(i.hazards=rd(i.hazards,Number(m.detail?.state?.position?.downhill)||0)),t.update(i),o()}),window.addEventListener("resize",a),a(),t.update(i),o(),c()}var Ge=(n,e,t)=>Math.min(t,Math.max(e,n)),mt=(n,e=0)=>Number.isFinite(n)?n:e,J_=n=>Math.atan2(Math.sin(n),Math.cos(n));function K_(n,e={}){let t=Math.abs(n.edge),i=Ge((mt(n.speed,8)-8)/22,0,1),s=Math.sign(n.edge||n.lean||1),r=mt(n.elapsed),a=n.surface!=="rail"&&t<.12&&(n.air??0)<=0?(Math.sin(r*1.8+.15)*.05+Math.sin(r*.77+.8)*.02)*(1-t/.12):0,o=(Math.sin(r*1.3)+Math.sin(r*.47+.8)*.35)*.022*(1-i*.65)*(1-t),c=Ge((n.air??0)/.25,0,1),l=Ge((n.verticalVelocity??0)/7.8,-1,1),h=c*Math.max(0,l),f=c*(1-Math.abs(l)),u=l<0?c*Ge((.8-mt(n.air))/.8,0,1):0,d=Ge(n.compression??0,0,1),g=Ge(n.gForce??0,0,1.6),x=Ge(n.skid??0,0,1),m=Ge(n.slash??0,0,1),p=Ge(n.bumpImpact??0,0,1),v=Ge(n.chatter??0,0,1),E=Ge(Number.isFinite(e.crouch)?e.crouch:0,0,1),b=Ge(Number.isFinite(e.stretch)?e.stretch:0,0,1),A=Number.isFinite(n.terrainHeight)?n.terrainHeight:0,T=n.elapsed*n.speed*1.7,_=Ge(n.boardLightness??0,0,1),S=m*(1-_),L=Ge(n.crouchAmount??0,0,1),C=Ge(mt(n.lean,n.edge)*(.2+i*.58)*(1-c*.6)+s*g*.055+o,-.8,.8),I=J_(mt(n.boardRotation,mt(n.boardYaw,n.heading))-mt(n.torsoRotation,mt(n.torsoYaw,n.heading)))+c*mt(n.tweak)*1.35,N=1+Math.sin(r*17.3+.4)*.08*m,U=n.air>0?Ge(1-mt(n.airtime)/.18,0,1):0,R=(n.edge??0)*(n.stance==="goofy"?-1:1)>=0,F=c?0:A*1.35+Math.sin(T)*v*.045-_*.075,B=c?0:(Number.isFinite(n.bodyHeave)?n.bodyHeave:A)*1.35-_*.035,k=n.crashed&&mt(n.crashTimer)<=0?2:mt(n.crashTimer),J=n.crashed?Ge(2-k,0,2):0,W=n.crashed?Ge(J/.12,0,1)*(1-Ge((J-1.15)/.85,0,1)):0,ee=n.crashed?Ge((J-.55)/.4,0,1)*(1-Ge((J-1.35)/.5,0,1)):0,ne=J<.4?1.1+J/.4*1.1:J<.75?2.2:J<1.3?2.2-(J-.75)/.55*1.3:.9*(1-Ge((J-1.3)/.7,0,1));return Object.freeze({boardRoll:Ge(mt(n.edge)*(.26+i*.79)*(n.surface==="rail"?.1:1-c*.7)+a+mt(n.terrainRoll)*.18+Math.sin(T*3.1)*v*.012,-1.08,1.08),bodyTilt:C,boardSwing:I*N,boardFlex:Ge(Math.abs(mt(n.pressAmount))*.55+g*.22+mt(n.popCharge)*.35+d*.3,0,1),boardYaw:n.boardYaw??n.heading,bodyYaw:n.torsoYaw??n.heading,bodySpin:(n.torsoRotation??n.torsoYaw??n.heading)-(n.heading??0)-(n.switchRiding?Math.PI:0),boardBodyRotation:(n.boardRotation??n.boardYaw??n.heading)-(n.torsoRotation??n.torsoYaw??n.heading),bob:B,boardBob:F,airborne:c,airOpen:u,flickBite:S,boardPitch:c*l*.18+U*.34+(n.terrainPitch??0)*.6+(n.noseFloat??0)*.12+(n.pressAmount??0)*.15,boardSlip:Ge(n.slipAngle??0,-.75,.75),boardTweak:Ge(n.tweak??0,-1,1)*1.55,butter:Ge(n.butter??0,0,1),press:Ge((n.pressAmount??0)+(n.butter??0)*.7,-1,1),crouch:Ge(.28+i*.08+t*.38+L*.48+E*.05+c*.34+f*.18-u*.2-h*.1+d*.5+p*.38+g*.08+S*.18,0,1),fallRotation:n.crashed?(Math.sign(n.crashSpin)||1)*ne:0,crashCollapse:W,crashSit:ee,crashRecovery:n.crashed?Ge((1.25-k)/1.25,0,1):0,foreAft:Ge(((n.frontFootPressure??.5)-.5)*2-(n.noseFloat??0)*.24,-1,1),handDrag:Ge((Math.abs(n.lean??0)-.52)*2.1+E*.38+(n.washout??0)*.65,0,1),grab:c*E,jumpStretch:Ge(h+U*.58+u*.33+c*b*.32,0,1),lean:Ge(C/.78,-1.04,1.04),spray:c?0:Ge((n.crashed?1:0)+m*.92+x*.24+t*.025+p*(n.surface==="powder"?.24:.08)+Ge((n.landingImpact??0)/9,0,.35),0,1),scarfFlutter:Ge((n.speed??0)/34,0,1)*Math.sin((Number(n.elapsed)||0)*(5+(n.speed??0)*.18)),stance:n.stance??"regular",switchRiding:!!n.switchRiding,toeSide:R,headLook:Ge(mt(e.carve)*.7+mt(n.turnRate)*.08+Math.sin(r*.43+Math.sin(r*.19))*.05*(1-t),-1,1),handDrift:Math.sin(r*1.09)+Math.sin(r*.73+.8)*.4,clothFlutter:Ge(mt(n.speed)/34,0,1)*(Math.sin(r*mt(n.speed)*1.7)*.6+Math.sin(r*mt(n.speed)*2.63+.5)*.25),breath:Math.sin(r*1.67)*.5,hipTwist:Ge(I*.68,-1,1),shoulderTwist:Ge(-I*.16-mt(n.edge)*.08,-.45,.45),armLag:0,clothLag:0,stumble:Ge(W+mt(n.washout)*.8+Math.max(0,mt(n.landingImpact)-3)*.1+mt(n.bumpImpact)*.2,0,1),upperBodyTwist:n.edge*-.22-Math.sign(n.edge)*x*.08+Ge(e.steer??0,-1,1)*.025})}var rn=()=>({value:0,velocity:0}),Ai=(n,e,t,i,s=.74)=>{let r=Math.max(1,Math.ceil(i*120)),a=i/r,o=t*Math.PI*2;for(let c=0;c<r;c+=1){let l=(e-n.value)*o**2-2*s*o*n.velocity;n.velocity+=l*a,n.value+=n.velocity*a}return n.value};function hd(){let n={arm:rn(),cloth:rn(),crouch:rn(),head:rn(),hips:rn(),lean:rn(),shoulders:rn(),stumble:rn()},e=!1,t=0,i=0,s=1/0,r=0;return Object.freeze({reset(){n={arm:rn(),cloth:rn(),crouch:rn(),head:rn(),hips:rn(),lean:rn(),shoulders:rn(),stumble:rn()},e=!1,t=0,i=0,s=1/0,r=0},step(a,o={},c=0){let l=K_(a,o),h=Ge(mt(c),0,.1),f=Ge(mt(o.steer),-1,1),u=Math.abs(f)>.05&&l.butter<.5?Math.sign(f):0;u!==0&&u!==t?(i=0,s=1/0):u!==0&&(i+=h),u===0&&t!==0&&(s=0,r=t),u===0&&s<.3&&(s+=h),t=u;let d=l.boardSwing;u!==0&&i<.05&&(d*=.45+i/.05*.55),u===0&&s<.3&&(d-=r*.12*Math.sin(Math.PI*s/.3)),e||(n.crouch.value=l.crouch,n.lean.value=l.bodyTilt,e=!0);let g=Ai(n.head,l.headLook,5.5,h),x=Ai(n.hips,d*.68,3.2,h),m=Ai(n.shoulders,l.shoulderTwist+x*.12,1.5,h),p=Ai(n.arm,-d*.23-m*.4,1.7,h),v=Ai(n.cloth,-d*.9-x*.22,1.8,h,.68),E=Ai(n.lean,l.bodyTilt,3,h),b=Ai(n.crouch,l.crouch,l.crouch>n.crouch.value?5:1.9,h,.7),A=Ai(n.stumble,l.stumble,2.4,h);return Object.freeze({...l,armLag:p,bodyTilt:E,boardSwing:d,clothLag:v,crouch:Ge(b,0,1),headLook:g,hipTwist:x,lean:Ge(E/.78,-1.04,1.04),shoulderTwist:m,stumble:A,upperBodyTwist:m})}})}var wr=(n,e,t)=>Math.min(t,Math.max(e,n)),Ot=(n,e=0)=>Number.isFinite(n)?n:e,ud=(n,e=0,t=1,i=0)=>Object.freeze({dip:i,position:Object.freeze(n),roll:e,zoom:t});function Pc(n={}){let e=n.position??{};return ud({across:Ot(e.across),downhill:Ot(e.downhill)},Ot(n.roll),Ot(n.zoom,1),Ot(n.dip))}function dd(n,e,t=0){let i=wr(Ot(t),0,.05),s=1-Math.exp(-4*i),r=Ot(e.heading),a=Ot(e.position?.across)+Math.sin(r)*2,o=Ot(e.position?.downhill)+8;return ud({across:n.position.across+(a-n.position.across)*s,downhill:n.position.downhill+(o+wr(Ot(e.air),0,2)*1.5-n.position.downhill)*s},Ot(n.roll)+(wr(Ot(e.lean)*.04,-.045,.045)-Ot(n.roll))*(1-Math.exp(-2.8*i)),Ot(n.zoom,1)+(1-wr(Ot(e.speed)/34,0,1)*.14-Ot(n.zoom,1))*(1-Math.exp(-2*i)),Ot(n.dip)+(wr(Ot(e.landingImpact)/9,0,1)-Ot(n.dip))*(1-Math.exp(-8*i)))}var fd=new Set(["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","KeyA","KeyD","KeyS","KeyW","Space"]),$_=new Set(["ArrowUp","Space"]);function pd(n=window){let e=new Set,t=!1,i=a=>{fd.has(a.code)&&(a.preventDefault(),$_.has(a.code)&&!e.has(a.code)&&(t=!0),e.add(a.code))},s=a=>{fd.has(a.code)&&(a.preventDefault(),e.delete(a.code))},r=()=>{t=!1,e.clear()};return n.addEventListener("keydown",i),n.addEventListener("keyup",s),n.addEventListener("blur",r),Object.freeze({destroy(){t=!1,e.clear(),n.removeEventListener("keydown",i),n.removeEventListener("keyup",s),n.removeEventListener("blur",r)},read(){let a=e.has("ArrowLeft"),o=e.has("ArrowRight"),c=e.has("KeyA"),l=e.has("KeyD"),h=e.has("ArrowDown"),f=e.has("KeyW"),u=e.has("KeyS"),d=e.has("ArrowUp"),g=t;return t=!1,Object.freeze({carve:Number(l)-Number(c),crouch:Number(h),jump:Number(g),press:Number(u)-Number(f),steer:Number(o)-Number(a),stretch:Number(d)})}})}Sc();vc();var Wo=1/120,qn=(n,e,t)=>Math.min(t,Math.max(e,n)),md=(n,e)=>{if(!Number.isFinite(e)||e<=0||n.crashed)return n;let t=Math.hypot(n.velocity.across,n.velocity.downhill),i=e/Math.max(t,.001);return Ss({...n,velocity:{across:n.velocity.across*i,downhill:n.velocity.downhill*i}})};async function Ic(n){let e=pd(window),t=n.runtime?.world3d?{beginFrame(){},draw(){}}:Vu(n.canvas),i=hd(),s=Object.freeze({surface:"powder"}),r="regular",a=Pc(),o=Object.freeze({carve:0,crouch:0,press:0,steer:0,stretch:0}),c=!1,l=0,h,f=0,u=0,d=0,g,x=Ss({surface:s.surface});n.events.addEventListener("rider:input",p=>{Number(p.detail?.jump)>0&&(c=!0),o=Object.freeze({carve:qn(Number(p.detail?.carve)||0,-1,1),crouch:qn(Number(p.detail?.crouch)||0,0,1),press:qn(Number(p.detail?.press)||0,-1,1),steer:qn(Number(p.detail?.steer)||0,-1,1),stretch:qn(Number(p.detail?.stretch)||0,0,1)})}),n.events.addEventListener("rider:surface",p=>{s=Object.freeze({slopeGrade:Number.isFinite(p.detail?.slopeGrade)?p.detail.slopeGrade:void 0,surface:p.detail?.surface??s.surface})}),n.events.addEventListener("rider:pace",p=>{Number.isFinite(p.detail?.targetSpeed)&&(h={holdSeconds:Math.max(0,Number(p.detail?.holdSeconds)||0),targetSpeed:qn(p.detail.targetSpeed,12,34)})}),n.events.addEventListener("rider:stance",p=>{r=p.detail?.stance==="goofy"?"goofy":"regular",x=Ss({...x,stance:r})}),n.events.addEventListener("rider:reset",p=>{i.reset(),a=Pc(),g=void 0,c=!1,l=0,h=void 0,f=0,u=0,d=0,x=Ss({speed:Number(p.detail?.speed)||16,stance:r,surface:s.surface})}),n.events.addEventListener("rider:impact",p=>{x=Xu(x,p.detail),l=0,c=!1});let m=p=>{let v=e.read(),E=Object.freeze({carve:qn(v.carve+o.carve,-1,1),crouch:Math.max(v.crouch,o.crouch),jump:Math.max(v.jump,Number(c)),press:qn(v.press+o.press,-1,1),steer:qn(v.steer+o.steer,-1,1),stretch:Math.max(v.stretch,o.stretch)});c=!1;let b=g===void 0?0:qn((p-g)/1e3,0,.1);g=p,h&&x.air<=.08&&(x=md(x,h.targetSpeed),u=h.targetSpeed,f=h.holdSeconds,h=void 0);let A=x.crashed;l=Math.max(l,E.jump),d+=b;let T=0;for(;d+1e-9>=Wo;)T=Math.max(T,l),x=qu(x,{...E,jump:l},Wo,s),f>0&&x.speed>u&&(x=md(x,u)),f=Math.max(0,f-Wo),l=0,d-=Wo;let _=Object.freeze({...E,jump:T});!A&&x.crashed&&(n.events.dispatchEvent(new CustomEvent("rider:crash",{detail:x})),x.crashReason==="edge-catch"&&n.events.dispatchEvent(new CustomEvent("rider:edge-catch",{detail:x}))),a=dd(a,x,b);let S=i.step(x,_,b);t.beginFrame();let L=x;n.events.dispatchEvent(new CustomEvent("rider:update",{detail:Object.freeze({camera:a,input:_,pose:S,state:x})})),x!==L&&(S=i.step(x,_,0)),t.draw({camera:a,pose:S,state:x}),requestAnimationFrame(m)};n.events.addEventListener("ready",()=>requestAnimationFrame(m),{once:!0})}var Xo=n=>{let e=document.querySelector(n);if(!e)throw new Error(`Shared game mount is missing: ${n}`);return e},gd=Object.freeze({canvas:Xo("#game-canvas"),worldCanvas:Xo("#world-canvas"),runtime:{world3d:null},events:new EventTarget,hudRoot:Xo("#hud-root"),overlayRoot:Xo("#overlay-root")}),j_=async()=>{for(let n of[Cc,Rc,Ic])await n(gd);gd.events.dispatchEvent(new Event("ready"))};j_();})();
