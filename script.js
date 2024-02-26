const socialMedia = [
    {
        title: "Linkedin",
        social: "./assests/redes/linke.svg",
        link: "https://www.linkedin.com/in/vinicius-barbosa-44b0121b0"
    },
    {
        title: "Github",
        social: "./assests/redes/github.svg",
        link: "https://github.com/ViniciusB-Dev"
    },
    {
        title: "Portfolio",
        social: "./assests/redes/port.svg",
        link: "#https://#"
    },
    {
        title: "Youtube",
        social: "./assests/redes/you.svg",
        link: "#https://#"
    },

]

function createLink(media){
    const newLink = document.createElement("a")
    if(media.link.includes("https://") ) {
        newLink.href = media.link
        newLink.target = "_blank"
        newLink.innerHTML = `<img src="${media.social}" alt="${media.title}" style="width: 9%;  color: white; display: inline; position: relative; top: 5px; right: 6px;" > <p style="display: inline; position: relative; top: -4px; margin-bottom: 22px">${media.title}</p>` 
    }else if(media.link === "#"){
        newLink.classList.add("#")
        newLink.href = media.link
        newLink.textContent = media.title
    }
  

    return newLink
}

function setLinkDOM(link) {
    const mainElement = document.querySelector("main")
    mainElement.appendChild(link)

}

socialMedia.map(createLink).map(setLinkDOM)