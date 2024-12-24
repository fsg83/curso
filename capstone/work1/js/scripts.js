/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Add Go To Top of Page
configObj = {"buttonD":"M8 18.568L10.8 21.333 16 16.198 21.2 21.333 24 18.568 16 10.667z","buttonT":"translate(-1148 -172) translate(832 140) translate(32 32) translate(284)","shadowSize":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","roundnessSize":"12px","buttonDToBottom":"32px","buttonDToRight":"32px","selectedBackgroundColor":"#322330","selectedIconColor":"#ffffff","buttonWidth":"56px","buttonHeight":"56px","svgWidth":"48px","svgHeight":"48px"};function createButton(obj, pageSimulator) {    const body = document.querySelector("body");    backToTopButton = document.createElement("span");    backToTopButton.classList.add("softr-back-to-top-button");    backToTopButton.id = "softr-back-to-top-button";    pageSimulator      ? pageSimulator.appendChild(backToTopButton)      : body.appendChild(backToTopButton);    backToTopButton.style.width = obj.buttonWidth;    backToTopButton.style.height = obj.buttonHeight;    backToTopButton.style.marginRight = obj.buttonDToRight;    backToTopButton.style.marginBottom = obj.buttonDToBottom;    backToTopButton.style.borderRadius = obj.roundnessSize;    backToTopButton.style.boxShadow = obj.shadowSize;    backToTopButton.style.color = obj.selectedBackgroundColor;    backToTopButton.style.backgroundColor = obj.selectedBackgroundColor;    pageSimulator ? backToTopButton.style.position = "absolute" : backToTopButton.style.position = "fixed";    backToTopButton.style.outline = "none";    backToTopButton.style.bottom = "0px";    backToTopButton.style.right = "0px";    backToTopButton.style.cursor = "pointer";    backToTopButton.style.textAlign = "center";    backToTopButton.style.border = "solid 2px currentColor";    backToTopButton.innerHTML =      '<svg class="back-to-top-button-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" > <g fill="none" fill-rule="evenodd"> <path d="M0 0H32V32H0z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> <path class="back-to-top-button-img" fill-rule="nonzero" d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> </g> </svg>';    backToTopButtonSvg = document.querySelector(".back-to-top-button-svg");    backToTopButtonSvg.style.verticalAlign = "middle";    backToTopButtonSvg.style.margin = "auto";    backToTopButtonSvg.style.justifyContent = "center";    backToTopButtonSvg.style.width = obj.svgWidth;    backToTopButtonSvg.style.height = obj.svgHeight;    backToTopButton.appendChild(backToTopButtonSvg);    backToTopButtonImg = document.querySelector(".back-to-top-button-img");    backToTopButtonImg.style.fill = obj.selectedIconColor;    backToTopButtonSvg.appendChild(backToTopButtonImg);    backToTopButtonImg.setAttribute("d", obj.buttonD);    backToTopButtonImg.setAttribute("transform", obj.buttonT);        if(!pageSimulator) {      backToTopButton.style.display = "none";      window.onscroll = function() {        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {          backToTopButton.style.display = "block";        } else {          backToTopButton.style.display = "none";        }      };        backToTopButton.onclick = function() {        document.body.scrollTop = 0;        document.documentElement.scrollTop = 0;      };    }  };document.addEventListener("DOMContentLoaded", function() { createButton(configObj, null); });