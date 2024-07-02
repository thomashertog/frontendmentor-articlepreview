function toggleShareLinks(e){
    let shareContainer = document.querySelector('.share-container');
    shareContainer.classList.toggle('share-links-hidden');
    
    let currentExpandedValue = shareButton.getAttribute('aria-expanded') === "true";
    shareButton.setAttribute('aria-expanded', !currentExpandedValue);
}

let shareButton = document.getElementById('js-share-button');
shareButton.addEventListener('click', toggleShareLinks);