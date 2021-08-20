// // ***********SCROLL AWARENESS******************
// function selectElementByClass(className) {
//   return document.querySelector(`.${className}`);
// }


// const sections = [
//   document.querySelector('.home'),
//   document.querySelector('.about'),
//   document.querySelector('.projects'),
//   document.querySelector('.skills'),
//   document.querySelector('.contact'),
// ];

// const navItems = {
//   home: document.querySelector('.homeNavItem'),
//   about: document.querySelectors('.aboutNavItem'),
//   projects: document.querySelector('.projectsNavItem'),
//   skills: document.querySelector('.skillsNavItem'),
//   contact: document.querySelector('.contactNavItem'),
// };

// const observerOptions = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.7,
// };

// function observerCallback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // get the nav item corresponding to the id of the section
//       // that is currently in view
//       const navItem = navItems[entry.target.id];
//       // add 'active' class on the navItem
//       navItem.classList.add('active');
//       // remove 'active' class from any navItem that is not
//       // same as 'navItem' defined above
//       Object.values(navItems).forEach((item) => {
//         if (item != navItem) {
//           item.classList.remove('active');
//         }
//       });
//     }
//   });
// }
// const observer = new IntersectionObserver(observerCallback, observerOptions);

// sections.forEach((sec) => observer.observe(sec));



















// Activar Scroll Animation
// ***********Seccion Home Scroll************
const observerH1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const h1= entry.target.querySelector('h1');

    if (entry.isIntersecting) {
      h1.classList.add('animation1');
      return; 
    }

    
    h1.classList.remove('animation1');
  });
});
                                       // Seccion
observerH1.observe(document.querySelector('.cover'));



  
// Seccion About Scroll
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const about= entry.target.querySelector('.about-me');

    if (entry.isIntersecting) {
      about.classList.add('animation2');
      return; 
    }

    
    about.classList.remove('animation2');
  });
});
                                       // Seccion
observer1.observe(document.querySelector('.about'));;


//   Seccion Projects Scroll**********
// Card  1   *******
const observerC1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const C1= entry.target.querySelector('.card:first-child' );

    if (entry.isIntersecting) {
      C1.classList.add('animation3');
      return; 
    }

    
    C1.classList.remove('animation3');
  });
});
                                       // Seccion
observerC1.observe(document.querySelector('.projects'));

// *****************Card 2***********************
const observerC2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const C2= entry.target.querySelector('.card:nth-child(2)' );

    if (entry.isIntersecting) {
      C2.classList.add('animation3');
      return; 
    }

    
    C2.classList.remove('animation3');
  });
});
                                       // Seccion
observerC2.observe(document.querySelector('.projects'));

//   Card 3 ***************
const observerC3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const C3= entry.target.querySelector('.card:nth-child(3)' );

    if (entry.isIntersecting) {
      C3.classList.add('animation1');
      return; 
    }

    
    C3.classList.remove('animation1');
  });
});
                                       // Seccion
observerC3.observe(document.querySelector('.projects'));

// ***************card 4***************
const observerC4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const C4= entry.target.querySelector('.card:nth-child(4)' );

    if (entry.isIntersecting) {
      C4.classList.add('animation1');
      return; 
    }

    
    C4.classList.remove('animation1');
  });
});
                                       // Seccion
observerC4.observe(document.querySelector('.projects'));

//   Seccion Skills Scroll ********

        // Skills Intro***********
const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
                                                //    div
      const icons= entry.target.querySelector('.icons');
  
      if (entry.isIntersecting) {
        icons.classList.add('icons-animation');
        return; 
      }
  
      
      icons.classList.remove('icons-animation');
    });
  });
                                         // Seccion
  observer4.observe(document.querySelector('.skills'));  

//   Skills Icons**************

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
                                                //    div
      const skillsIntro = entry.target.querySelector('.skillsIntro');
  
      if (entry.isIntersecting) {
        skillsIntro.classList.add('skillsIntro-animation');
        return; 
      }
  
      
      skillsIntro.classList.remove('skillsIntro-animation');
    });
  });
                                         // Seccion
  observer5.observe(document.querySelector('.skills'));  





//   Seccion Contact **********

const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
                                                //    div
      const skillsIntro = entry.target.querySelector('.contactIntro');
  
      if (entry.isIntersecting) {
        skillsIntro.classList.add('contactIntro-animation');
        return; 
      }
  
      
      skillsIntro.classList.remove('contactIntro-animation');
    });
  });
                                         // Seccion
  observer6.observe(document.querySelector('.contact'));  


//   ***Icons****
// ICON 1

const observerI1= new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const I1= entry.target.querySelector('.linkedin' );

    if (entry.isIntersecting) {
      I1.classList.add('icon1-animation');
      return; 
    }

    
    I1.classList.remove('icon1-animation');
  });
});
                                       // Seccion
observerI1.observe(document.querySelector('.contact'));

// *****************ICON 2****************

const observerI2= new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const I2= entry.target.querySelector('.gmail' );

    if (entry.isIntersecting) {
      I2.classList.add('icon2-animation');
      return; 
    }

    
    I2.classList.remove('icon2-animation');
  });
});
                                       // Seccion
observerI2.observe(document.querySelector('.contact'));

// **********************ICONO 3***********************

const observerI3= new IntersectionObserver(entries => {
  entries.forEach(entry => {
                                              //    div
    const I3= entry.target.querySelector('.wsap' );

    if (entry.isIntersecting) {
      I3.classList.add('icon3-animation');
      return; 
    }

    
    I3.classList.remove('icon3-animation');
  });
});
                                       // Seccion
observerI3.observe(document.querySelector('.contact'));