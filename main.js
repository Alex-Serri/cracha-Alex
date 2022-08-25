const linksSocialMedia = {
    github: "Alex-Serri",
    facebook: "alex.serri.520",
    instagram: "alex.kazem",
  }
  
  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
        
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
  }
      
  changeSocialMediaLinks()
  
  function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url) 
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url 
      UserImage.src = data.avatar_url
      
    })
  }
  getGitHubProfileInfos()