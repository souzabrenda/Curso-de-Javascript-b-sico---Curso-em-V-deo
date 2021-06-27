function removeActiveLink(tags = []) {
  for(const tag of tags){
    tag.classList.remove('active')
  }

}

function addActiveLink(tags = []) {
  const currentUrl = window.location.pathname
  
  tags.forEach(tag => {
    const tagHref = tag
      .getAttribute('href')

       
    if(tagHref !== currentUrl) return

    tag.classList.add('active')
  })

}

function markAsActiveLink() {
  const AnchorTags = document.querySelectorAll('.link')
  
  removeActiveLink(AnchorTags)
  addActiveLink(AnchorTags)
}


markAsActiveLink()