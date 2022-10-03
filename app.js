

/*   Responsive Menu   ************** */
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.home-menu');
const details = document.querySelector('.details');
const welcome = document.querySelector('.welcome');
//    const slider = document.querySelector('.slider');
const navLinks = Array.from(document.querySelectorAll('.nav-links'));
const innerCont = document.querySelector('.inner-container');
const progCont = document.querySelector('.programming-container');
const aboutCont = document.querySelector('.about-container');
const cntctCont = document.querySelector('.contact-container');
const logo = document.querySelector('.logo');


hamburger.addEventListener('click', () => {
    // Menu appears + certain elements blurred 
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    details.classList.toggle('active');
    welcome.classList.toggle('active');
  //  slider.classList.toggle('active');
    innerCont.classList.toggle('active');
    progCont.classList.toggle('active');
    aboutCont.classList.toggle('active');
    cntctCont.classList.toggle('active');

    // Menu disappears + blurred elements cleared by clicking LOGO
    logo.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        details.classList.remove('active');
        welcome.classList.remove('active');
     //   slider.classList.remove('active');
        innerCont.classList.remove('active');
        progCont.classList.remove('active');
        aboutCont.classList.remove('active');
        cntctCont.classList.remove('active');
    })

    // Menu disappears + blurred elements cleared by clicking MENU OPTIONS
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
            details.classList.remove('active');
            welcome.classList.remove('active');
         //   slider.classList.remove('active');
            innerCont.classList.remove('active');
            progCont.classList.remove('active');
            aboutCont.classList.remove('active');
            cntctCont.classList.remove('active');
        })
    }
});

//assigning classlist to menu option of the page user is on
// Logo already assigned above
const menuHome = document.getElementById('menu-home');
for (let navLink of navLinks) {
    navLink.addEventListener('click', () => {
        for (let navLink of navLinks) {
            navLink.classList.remove('active');
        }
        navLink.classList.add('active');
    })
    // logo onClick gives classlist to menuHome
    logo.addEventListener('click', () => {
        menuHome.classList.add('active');
        navLink.classList.remove('active');
    })
}




/*  */
// show project on click

/*
const projects = Array.from(document.querySelectorAll('.project'));

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    project.addEventListener('click', () => {
        project.classList.toggle('view');
        project.querySelector('div .project-more').classList.toggle('view');
    })
}   */



const allProjectBtns = Array.from(document.querySelectorAll('.design-project'));
for (let projectBtn of allProjectBtns) {
    projectBtn.addEventListener('click', () => {
        for (let projectBtn of allProjectBtns) {
            projectBtn.classList.remove('btn-view');
        }
        projectBtn.classList.toggle('btn-view');
    });
}


const voiceArtistbtn = document.getElementById('voice-artist-btn');
const voiceArtistProject = document.getElementById('voice-artist-project');

voiceArtistbtn.addEventListener('click', () => {
   voiceArtistProject.classList.toggle('view');

   portfolioProject.classList.remove('view');
   kawhiProject.classList.remove('view');
   streetFoodProject.classList.remove('view');
   yonexProject.classList.remove('view');
   pTProject.classList.remove('view');
   logoProject.classList.remove('view');
});



const portfolioBtn = document.getElementById('portfolio-project-btn');
const portfolioProject = document.getElementById('portfolio-project');

portfolioBtn.addEventListener('click', () => {
    portfolioProject.classList.toggle('view');

    voiceArtistProject.classList.remove('view');
    kawhiProject.classList.remove('view');
    streetFoodProject.classList.remove('view');
    yonexProject.classList.remove('view');
    pTProject.classList.remove('view');
    logoProject.classList.remove('view');
});


const kawhiBtn = document.getElementById('kawhi-btn');
const kawhiProject = document.getElementById('kawhi-project');

kawhiBtn.addEventListener('click', () => {
   kawhiProject.classList.toggle('view');
 
   voiceArtistProject.classList.remove('view');
   portfolioProject.classList.remove('view');
   streetFoodProject.classList.remove('view');
   yonexProject.classList.remove('view');
   pTProject.classList.remove('view');
   logoProject.classList.remove('view');
});


const streetFoodBtn = document.getElementById('street-food-btn');
const streetFoodProject = document.getElementById('street-food-project')

streetFoodBtn.addEventListener('click', () => {
    streetFoodProject.classList.toggle('view');
  
    voiceArtistProject.classList.remove('view');
    portfolioProject.classList.remove('view');
    kawhiProject.classList.remove('view');
    yonexProject.classList.remove('view');
    pTProject.classList.remove('view');
    logoProject.classList.remove('view');
});


const yonexBtn = document.getElementById('yonex-btn');
const yonexProject = document.getElementById('yonex-project');

yonexBtn.addEventListener('click', () => {
    yonexProject.classList.toggle('view');
  
    voiceArtistProject.classList.remove('view');
    portfolioProject.classList.remove('view');
    kawhiProject.classList.remove('view');

    streetFoodProject.classList.remove('view');
    pTProject.classList.remove('view');
    logoProject.classList.remove('view');
});


const personalTBtn = document.getElementById('p-t-btn');
const pTProject = document.getElementById('p-t-project');

personalTBtn.addEventListener('click', () => {
    pTProject.classList.toggle('view');
  
    voiceArtistProject.classList.remove('view');
    portfolioProject.classList.remove('view');
    kawhiProject.classList.remove('view');
    streetFoodProject.classList.remove('view');
    yonexProject.classList.remove('view');
    logoProject.classList.remove('view');
});


const logoDesignBtn = document.getElementById('logo-design-btn');
const logoProject = document.getElementById('logo-design-project');

logoDesignBtn.addEventListener('click', () => {
    logoProject.classList.toggle('view');
  
    voiceArtistProject.classList.remove('view');
    portfolioProject.classList.remove('view');
    kawhiProject.classList.remove('view');
    streetFoodProject.classList.remove('view');
    yonexProject.classList.remove('view');
    pTProject.classList.remove('view');
});

