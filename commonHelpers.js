import{a as c,i as l,S as u}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=document.querySelector(".gallery"),d="31511712-b53d42f48d96ff6235f6befd4";c.defaults.baseURL="https://pixabay.com/api/";const a=document.querySelector(".search-form");a.addEventListener("submit",s=>{s.preventDefault();let t=s.currentTarget.elements.searchQuery.value.trim();t===null||t===""?l.info({title:"Please type something in the search input",position:"topRight"}):(m(t),console.log(t),a.reset(),h())});async function m(s){const t=await c.get(`?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);console.log(t.data.hits);const o=t.data.hits;o.length===0?l.error({title:"Sorry, there are no images matching your search query",position:"topRight"}):p(o),new u(".gallery a").refresh()}function p(s){const t=s.map(o=>`
    <div class="photo-card">
        <a class ="thumb" href="${o.largeImageURL}"><img class="img" src="${o.webformatURL}" alt="${o.tags}" loading="lazy" /> </a> 
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${o.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${o.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${o.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${o.downloads}
        </p>
      </div>
    </div>
  `).join("");f.insertAdjacentHTML("beforeend",t)}function h(){f.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
