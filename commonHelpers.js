import{a,i as c,S as u}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const m=(s,e)=>{const i=e.map(o=>`
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
  `).join("");s.insertAdjacentHTML("beforeend",i)},d="31511712-b53d42f48d96ff6235f6befd4";a.defaults.baseURL="https://pixabay.com/api/";async function p(s){try{return(await a.get(`?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`)).data.hits}catch(e){throw e}}const l=document.querySelector(".gallery"),f=document.querySelector(".search-form");f.addEventListener("submit",h);function h(s){s.preventDefault();let e=s.currentTarget.elements.searchQuery.value.trim();e===null||e===""?c.info({title:"Please type something in the search input",position:"topRight"}):(g(e),console.log(e),f.reset(),y())}async function g(s){try{const e=await p(s);e.length===0?c.error({title:"Sorry, there are no images matching your search query",position:"topRight"}):m(l,e),new u(".gallery a").refresh()}catch(e){console.log(e)}}function y(){l.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
