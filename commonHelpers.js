import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();document.querySelector(".loader");function f(s){const o="https://pixabay.com/api/",t="45322930-bdaa0e26907d60cc8a145e4be",n=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${n}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const c=document.querySelector(".gallery"),h=new m(".gallery a",{});function y(s){c.innerHTML="";const o=s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:d,downloads:p})=>`
    <div class="card">
    <a href="${n}" >
      <img src="${t}" alt="${e}" /> </a>
      <div class="info">
<ul> 
           <li > <p class="info-name"> Likes: </p> <p>${r}</p></li>
           <li ><p class="info-name"> Views: </p> <p>${i}</p></li>
          <li > <p class="info-name"> Comments: </p> <p>${d}</p></li>
           <li ><p class="info-name"> Downloads: </p> <p>${p}</p></li>
      </ul>
          </div>
          </div>
`);c.insertAdjacentHTML("beforeend",o.join("")),h.refresh()}const u=document.querySelector("#search-form"),g=document.querySelector('input[name="query"]'),l=document.querySelector(".loader");u.addEventListener("submit",s=>{s.preventDefault();const o=g.value.trim();if(!o)return a.show({position:"center",backgroundColor:"orange",message:"Please fill in a search field."});l.style.display="block",f(o).then(t=>{if(l.style.display="none",t.hits.length===0)return a.show({position:"topRight",backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"});a.show({position:"topRight",backgroundColor:"green",messageColor:"white",message:`Found ${t.totalHits} results.`}),console.log(t.hits),y(t.hits),u.reset()}).catch(t=>{l.style.display="none",a.show({position:"topRight",backgroundColor:"red",message:"Error during the request. Please try again later."})}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
