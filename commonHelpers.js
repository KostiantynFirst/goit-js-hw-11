import{a as c,i as l,S as d}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const u=(s,e)=>{const i=e.map(r=>`
    <div class="photo-card">
        <a class ="thumb" href="${r.largeImageURL}"><img class="img" src="${r.webformatURL}" alt="${r.tags}" loading="lazy" /> </a> 
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${r.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${r.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${r.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${r.downloads}
        </p>
      </div>
    </div>
  `).join("");s.insertAdjacentHTML("beforeend",i)},m="31511712-b53d42f48d96ff6235f6befd4";c.defaults.baseURL="https://pixabay.com/api/";async function p(s){try{return(await c.get(`?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`)).data.hits}catch(e){throw e}}const a=document.querySelector(".gallery"),h='<div id="loader" class="loader"></div>',f=document.querySelector(".search-form");f.addEventListener("submit",g);function g(s){s.preventDefault();let e=s.currentTarget.elements.searchQuery.value.trim();e===null||e===""?l.info({title:"Please type something in the search input",position:"topRight"}):(y(e),f.reset())}async function y(s){try{a.insertAdjacentHTML("beforebegin",h),b();const e=await p(s),i=document.querySelector("#loader");i&&i.remove(),e.length===0?l.error({title:"Sorry, there are no images matching your search query",position:"topRight"}):u(a,e),new d(".gallery a").refresh()}catch(e){console.log(e)}}function b(){a.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
