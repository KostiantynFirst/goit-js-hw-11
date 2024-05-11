import{a as c,i as l,S as u}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f=document.querySelector(".gallery"),d="31511712-b53d42f48d96ff6235f6befd4";c.defaults.baseURL="https://pixabay.com/api/";const a=document.querySelector(".search-form");a.addEventListener("submit",s=>{s.preventDefault();let e=s.currentTarget.elements.searchQuery.value.trim();e===null||e===""?l.info({title:"Please type something in the search input",position:"topRight"}):(m(e),console.log(e),a.reset(),h())});async function m(s){try{const e=await c.get(`?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);console.log(e.data.hits);const o=e.data.hits;o.length===0?l.error({title:"Sorry, there are no images matching your search query",position:"topRight"}):p(o),new u(".gallery a").refresh()}catch(e){console.log(e)}}function p(s){const e=s.map(o=>`
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
  `).join("");f.insertAdjacentHTML("beforeend",e)}function h(){f.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
