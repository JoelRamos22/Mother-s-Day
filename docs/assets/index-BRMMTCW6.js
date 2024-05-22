var dt=Object.defineProperty;var pt=(o,t,e)=>t in o?dt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var N=(o,t,e)=>(pt(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,D=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),q=new WeakMap;let et=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(D&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&q.set(e,t))}return t}toString(){return this.cssText}};const ut=o=>new et(typeof o=="string"?o:o+"",void 0,I),st=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new et(e,o,I)},$t=(o,t)=>{if(D)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=R.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},W=D?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ut(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:_t,getOwnPropertyDescriptor:yt,getOwnPropertyNames:gt,getOwnPropertySymbols:mt,getPrototypeOf:At}=Object,_=globalThis,V=_.trustedTypes,vt=V?V.emptyScript:"",L=_.reactiveElementPolyfillSupport,C=(o,t)=>o,j={toAttribute(o,t){switch(t){case Boolean:o=o?vt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},it=(o,t)=>!ft(o,t),J={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&_t(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=yt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const h=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,i=[...gt(e),...mt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(W(s))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:j).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:j;this._$Em=s,this[s]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??it)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,L==null||L({ReactiveElement:A}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,T=x.trustedTypes,K=T?T.createPolicy("lit-html",{createHTML:o=>o}):void 0,ot="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,rt="?"+f,bt=`<${rt}>`,m=document,w=()=>m.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",nt=Array.isArray,St=o=>nt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",k=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Z=/>/g,y=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,lt=/^(?:script|style|textarea|title)$/i,Et=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),at=Et(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Y=new WeakMap,g=m.createTreeWalker(m,129);function ht(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(t):t}const Ct=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=E;for(let h=0;h<e;h++){const l=o[h];let c,p,a=-1,u=0;for(;u<l.length&&(n.lastIndex=u,p=n.exec(l),p!==null);)u=n.lastIndex,n===E?p[1]==="!--"?n=G:p[1]!==void 0?n=Z:p[2]!==void 0?(lt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=y):p[3]!==void 0&&(n=y):n===y?p[0]===">"?(n=s??E,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?y:p[3]==='"'?X:Q):n===X||n===Q?n=y:n===G||n===Z?n=E:(n=y,s=void 0);const $=n===y&&o[h+1].startsWith("/>")?" ":"";r+=n===E?l+bt:a>=0?(i.push(c),l.slice(0,a)+ot+l.slice(a)+f+$):l+f+(a===-2?h:$)}return[ht(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const h=t.length-1,l=this.parts,[c,p]=Ct(t,e);if(this.el=U.createElement(c,i),g.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=g.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(ot)){const u=p[n++],$=s.getAttribute(a).split(f),H=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:H[2],strings:$,ctor:H[1]==="."?wt:H[1]==="?"?Pt:H[1]==="@"?Ut:M}),s.removeAttribute(a)}else a.startsWith(f)&&(l.push({type:6,index:r}),s.removeAttribute(a));if(lt.test(s.tagName)){const a=s.textContent.split(f),u=a.length-1;if(u>0){s.textContent=T?T.emptyScript:"";for(let $=0;$<u;$++)s.append(a[$],w()),g.nextNode(),l.push({type:2,index:++r});s.append(a[u],w())}}}else if(s.nodeType===8)if(s.data===rt)l.push({type:2,index:r});else{let a=-1;for(;(a=s.data.indexOf(f,a+1))!==-1;)l.push({type:7,index:r}),a+=f.length-1}r++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function S(o,t,e=o,i){var n,h;if(t===b)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const r=P(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=S(o,s._$AS(o,t.values),s,i)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??m).importNode(e,!0);g.currentNode=s;let r=g.nextNode(),n=0,h=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new O(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Ot(r,this,t)),this._$AV.push(c),l=i[++h]}n!==(l==null?void 0:l.index)&&(r=g.nextNode(),n++)}return g.currentNode=m,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):St(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(ht(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const n=new xt(s,this),h=n.u(this.options);n.p(e),this.T(h),this._$AH=n}}_$AC(t){let e=Y.get(t.strings);return e===void 0&&Y.set(t.strings,e=new U(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new O(this.S(w()),this.S(w()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=S(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const h=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=S(this,h[i+l],e,l),c===b&&(c=this._$AH[l]),n||(n=!P(c)||c!==this._$AH[l]),c===d?t=d:t!==d&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Pt extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ut extends M{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??d)===b)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const B=x.litHtmlPolyfillSupport;B==null||B(U,O),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.1.3");const Ht=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new O(t.insertBefore(w(),r),r,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var tt;v._$litElement$=!0,v.finalized=!0,(tt=globalThis.litElementHydrateSupport)==null||tt.call(globalThis,{LitElement:v});const F=globalThis.litElementPolyfillSupport;F==null||F({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");class ct extends v{constructor(){super()}render(){return at`
            <div class="container_text">
                <h4>©️ Copyright by German Joel Ramos </h4>
            </div>
        `}}N(ct,"styles",st`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .container_text {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `);customElements.define("my-copyright",ct);class z extends v{constructor(){super(),this.containerClass="container",this.letterClass="letter",this.paperClass="paper",this.coverClass="cover",this.classContainer="container_options",this.classButonClose="buton_close",this.classButonOpen="buton_open",this.classCupon="cupon"}openLetter(){const t=this.shadowRoot.querySelector(`.${this.coverClass}`),e=this.shadowRoot.querySelector(`.${this.paperClass}`);t.style.transform="rotate(180deg)",e.style.top="-150px",e.style.visibility="visible"}closeLetter(){const t=this.shadowRoot.querySelector(`.${this.coverClass}`),e=this.shadowRoot.querySelector(`.${this.paperClass}`);t.style.transform="rotate(0deg)",e.style.top="0",e.style.visibility="hidden"}render(){return at`
            <div class="${this.containerClass}">
                <div class="${this.coverClass}"></div>
                <div class="${this.paperClass}">
                    <h2>¡Feliz dia de la madre ❤️!</h2>
                    <h3>Te amo mami</h3>
                    <h3>🍔 Con cupon incluido para ir a comer 🍔</h3>
                </div>
                <div class="${this.letterClass}"></div>
            </div>
            <div class="${this.classContainer}">
                <button class="${this.classButonOpen}" @click="${this.openLetter}">Abrir</button>
                <button class="${this.classButonClose}" @click="${this.closeLetter}">Cerrar</button>
            </div>
        `}}N(z,"properties",{containerClass:{typeof:String},letterClass:{typeof:String},paperClass:{typeof:String},coverClass:{typeof:String},classContainer:{typeof:String},classButonOpen:{typeof:String},classButonClose:{typeof:String},classCupon:{typeof:String}}),N(z,"styles",st`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        :host {
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            align-items: center;
            gap: 30px
        }
        :root {
            --color-background: #FAD6DF;
            --color-left-right-side: #FF989F;
            --color-bottom: #FF858B;
            --color-page: #FFFDFF;
            --color-top: #FF3335;
            --color-font: #000000dd;
        }
        .container {
            position: relative; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 40%;
        }
        .letter {
            position: absolute;
            border-top: 125px solid transparent;
            border-left: 200px solid var(--color-left-right-side);
            border-bottom: 125px solid var(--color-bottom);
            border-right: 200px solid var(--color-left-right-side);
        }
        .cover {
            position: absolute;
            border-top: 125px solid var(--color-top);
            border-left: 200px solid transparent;
            border-bottom: 125px solid transparent;
            border-right: 200px solid transparent;
            transform-origin: top;
            transform: rotate(180deg);
            transition: transform 0.001s
        }
        .paper {
            display: flex;  
            align-items: center;
            flex-direction: column;
            position: absolute;
            height: 250px;
            width: 400px; 
            background-color: var(--color-page);
            transition: transform 0.1s
        }
        
        .container_options {
            position: relative;
            display: flex;
            flex-direction: row; 
            justify-content: space-around;
            gap: 30px; 
            width: 400px;
        }
        .buton_open {
            background-color: var(--color-top);
            border: none;
            border-radius: 10px;
            padding: 7px;
            width: 120px;
            color: var(--color-page);
            font-size: 1.2em;
            font-weight: 700;
            cursor: pointer;
        }
        .buton_close {
            border: none;
            border-radius: 10px;
            padding: 7px;
            width: 120px;
            color: var(--color-font);
            font-size: 1.2em;
            font-weight: 700;
            cursor: pointer;
        }
    `);customElements.define("my-letter",z);
