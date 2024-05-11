export const renderGallery = (articleContainer, images) => {
  const createMarkupPage = images.map(article => {
    return `
    <div class="photo-card">
        <a class ="thumb" href="${article.largeImageURL}"><img class="img" src="${article.webformatURL}" alt="${article.tags}" loading="lazy" /> </a> 
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${article.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${article.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${article.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${article.downloads}
        </p>
      </div>
    </div>
  `;
})
.join('');

   articleContainer.insertAdjacentHTML('beforeend', createMarkupPage);

}