function changeHeaderStyle() {
    hero.style.display = "block";
    header.style.top = "1rem";


}

function removeBodyBackground() {
    document.body.style.backgroundImage = "none";
}

function addGithubLogo() {
    document.querySelector("#github-logo").style.display = "block";
    document.querySelector("#github-img").style.display = "block";
}



function changeGithubLogo(){
    document.body.style.background = "url(./assets/GitHub_Logo_Black.png);"
        document.querySelector("#github-logo").src = "./assets/GitHub_Logo_Black.png";
        document.body.style.backgroundColor= "var(--light-color)";
        document.querySelector("#project__title").style.color = "var(--dark-font-color)";
        locationBox.style.color = "var(--dark-font-color)";
        realName.style.color = "var(--dark-font-color)";
        gitBio.style.color = "var(--dark-font-color)";
        
    }
    
    function changeGithubLogo2(){
        document.body.style.background = "url(./assets/GitHub_Logo_White.png);"
    document.querySelector("#github-logo").src = "./assets/GitHub_Logo_White.png";
    document.querySelector("#project__title").style.color = "var(--light-font-color)";
    document.body.style.backgroundColor= "var(--dark-color)";
    locationBox.style.color = "var(--light-font-color)";
    realName.style.color = "var(--light-font-color)";
    gitBio.style.color = "var(--light-font-color)";
}

    


const myInterval = setInterval(changeGithubLogo, 10000);
const myInterval2 = setInterval(changeGithubLogo2, 20000);
