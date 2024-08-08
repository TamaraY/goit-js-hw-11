import{S as f,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.querySelector(".loader");function h(s){const t="https://pixabay.com/api/",o="45322930-bdaa0e26907d60cc8a145e4be",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}let l;function g(s){const t=document.querySelector(".gallery");t.innerHTML="";const o=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:d,comments:p,downloads:m})=>`
    <div class="card">
    <a href="${e}" >
      <img src="${i}" alt="${r}" /> </a>
      <div class="info">
<ul> 
           <li > <p class="info-name"> Likes: </p> <p>${n}</p></li>
           <li ><p class="info-name"> Views: </p> <p>${d}</p></li>
          <li > <p class="info-name"> Comments: </p> <p>${p}</p></li>
           <li ><p class="info-name"> Downloads: </p> <p>${m}</p></li>
      </ul>
          </div>
          </div>
`);t.insertAdjacentHTML("beforeend",o.join("")),l?l.refresh():l=new f(".gallery a",{})}const u=document.querySelector("#search-form"),y=document.querySelector('input[name="query"]'),c=document.querySelector(".loader");u.addEventListener("submit",s=>{s.preventDefault();const t=y.value.trim();if(!t)return a.show({position:"center",backgroundColor:"orange",message:"Please fill in a search field."});c.style.display="block",h(t).then(o=>{if(c.style.display="none",o.hits.length===0)return a.show({position:"topRight",backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"});a.show({position:"topRight",backgroundColor:"green",messageColor:"white",message:`Found ${o.totalHits} results.`}),console.log(o.hits),g(o.hits),u.reset()}).catch(o=>{c.style.display="none",a.show({position:"topRight",backgroundColor:"red",message:"Error during the request. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
