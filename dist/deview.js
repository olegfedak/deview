(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.deview-grid{display:block;position:fixed;height:100%;width:100%;top:0;left:0;right:0;bottom:0;z-index:1;pointer-events:none}.deview-grid-columns{inset-inline-start:0;inset-inline-end:0;height:100%;margin:0 auto;background:repeating-linear-gradient(90deg,var(--grid-column-bg, rgba(128, 201, 255, .25)),var(--grid-column-bg, rgba(128, 201, 255, .25)) calc((100% - (((var(--grid-columns, 12) - 1) * var(--inner-gutter, 20px)))) / var(--grid-columns, 12)),rgba(0,0,0,0) calc((100% - (((var(--grid-columns, 12) - 1) * var(--inner-gutter, 20px)))) / var(--grid-columns, 12)),rgba(0,0,0,0) calc((100% - (((var(--grid-columns, 12) - 1) * var(--inner-gutter, 20px)))) / var(--grid-columns, 12) + var(--inner-gutter, 20px)));pointer-events:none}.deview-grid>*[is-hidden]{visibility:hidden;opacity:0;transition:ease-out .25s}.deview-grid>*[is-visible]{visibility:visible;opacity:1;transition:ease-in-out .25s}[dev-scale="1.0"]{transform:scale(1)}[dev-scale="0.8"]{transform:scale(.8)}[dev-scale="0.6"]{transform:scale(.6)}[dev-scale="0.4"]{transform:scale(.4)}[dev-scale]{transition:transform .3s cubic-bezier(.59,.01,.28,1)}html[dev]{background-color:#ececec;height:auto}html[dev]>[dev-scale]{max-width:var(--artboard-max-width, 1200px);margin-inline:auto;background-color:#fff;min-height:100vh}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
/*!
 * Deview - A developer tool for visualizing page layout with a grid overlay and artboard view mode.
 * (c) 2024 Oleg Fedak
 * Released under the MIT License.
 */window.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("html"),t=document.querySelector("body");let d=!1;if(!n||!t)return;(()=>{const i=`
        <!-- Artboard View. Use hotkeys: '-', '+', '0' -->
        <!-- Columns Grid. Use hotkeys '1' or 'G' -->
        <div class="deview-grid container">
            <div class="deview-grid-columns" is-hidden></div>
        </div>
    `,e=document.createElement("div");e.innerHTML=i,document.body.appendChild(e)})(),t.setAttribute("dev-scale",1);const c=i=>{const e=parseFloat(t.getAttribute("dev-scale")),o=e-.2,s=e+.2;if(!d)switch(i.key){case"-":e>.4&&(t.setAttribute("dev-scale",o.toFixed(1)),n.setAttribute("dev",""));break;case"=":e>=.4&&e<1?t.setAttribute("dev-scale",s.toFixed(1)):e===1&&n.removeAttribute("dev");break;case"0":e<=1&&(t.setAttribute("dev-scale",1),n.removeAttribute("dev"));break}},r=i=>{parseFloat(t.getAttribute("dev-scale"))>=1||(d=t.getAttribute("contenteditable")==="true",i.type==="click"&&(i.target!==n?t.setAttribute("contenteditable","true"):t.removeAttribute("contenteditable")),i.type==="keydown"&&i.key==="Escape"&&t.removeAttribute("contenteditable"))},l=i=>{const e=o=>{const s=document.querySelector(o);s&&(s.toggleAttribute("is-hidden"),s.toggleAttribute("is-visible"))};if(!d)switch(i.key){case"1":case"g":e(".deview-grid-columns");break}};n.addEventListener("keydown",c,!1),n.addEventListener("click",r,!1),n.addEventListener("keydown",r,!1),n.addEventListener("keydown",l,!1)});