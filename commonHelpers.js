import{a as c,i as l}from"./assets/vendor-db34b893.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const f=document.querySelector(".gallery"),u="31511712-b53d42f48d96ff6235f6befd4";c.defaults.baseURL="https://pixabay.com/api/";const a=document.querySelector(".search-form");a.addEventListener("submit",r=>{r.preventDefault();let t=r.currentTarget.elements.searchQuery.value.trim();t===null||t===""?l.info({title:"Please type something in the search input",position:"topRight"}):(d(t),console.log(t),a.reset())});async function d(r){const t=await c.get(`?key=${u}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`);console.log(t.data.hits);const o=t.data.hits;o.length===0?l.error({title:"Sorry, there are no images matching your search query",position:"topRight"}):m(o)}function m(r){const t=r.map(o=>`
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
  `).join("");f.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
