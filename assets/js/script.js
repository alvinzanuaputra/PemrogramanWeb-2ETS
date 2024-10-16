'use strict';

$(document).ready(function() {
  let value = "";

  $("#find-article").on("keyup", function() {
    value = $(this).val().toLowerCase();
    
    // Tampilkan indikator loading
    $("#loading").show();

    setTimeout(function() {
      let found = false;
      
      // Filter artikel berdasarkan input pencarian
      $("#article-list li").filter(function() {
        const match = $(this).text().toLowerCase().indexOf(value) > -1;
        $(this).toggle(match); 
        if (match) {
          found = true; 
        }
      });

      // Sembunyikan indikator loading
      $("#loading").hide();

      if (!found) {
        $("#no-articles").show(
          setTimeout(function() {
            $("#no-articles").hide();
          }, 3000)
        );
      } else {
        $("#no-articles").hide();
      }
    }, 4000); 
  });

  // Mencegah tindakan ketika tombol Enter ditekan
  $("#find-article").on("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Mencegah aksi default (seperti submit form)
    }
  });
});




function toggleSearch() {
  const search = document.querySelector('.search');
  const input = document.querySelector('#find-article');
  const label = document.querySelector('.search-label');

  search.classList.toggle('active');

  if (search.classList.contains('active')) {
    input.focus();
    label.style.display = 'none';
  } else {
    input.blur();
    label.style.display = 'inline-block';
  }
}

function clearSearch() {
  const input = document.querySelector('#find-article');
  input.value = ''; // Clear the input field
  input.focus(); // Keep focus after clearing
}



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}


const hero = document.querySelector('.hero');
const hero_title = document.getElementById('hero_title');
const d_btn1 = document.getElementById('d_btn1');
const d_btn2 = document.getElementById('d_btn2');
const slider_btn = document.querySelectorAll('.dot');


const backimg = {
    fimg: './assets/images/backgroundgameimg.jpg',
    simg: './assets/images/sliderimg2.jpg',
    timg: './assets/images/gamesearchbg.jpg'
}


const slider_load = (index) =>{
    const images = [backimg.simg, backimg.fimg,  backimg.timg]
    const titles = [ "RISE OF THE TOMB RAIDER", "EGYPT AND WORLD", "SHADOW OF MORDOR"]

    hero.style.background = `url(${images[index]}) no-repeat center center/cover`;
    hero_title.innerText = titles[index];

    slider_btn.forEach((btn, i)=>{
        btn.style.background = i === index ? "#fff" : "rgb(184,184,184,0.1)"
    })

    d_btn1.href = "#jelajahi",
    d_btn2.href = "#trending"
};

let currentIndex = 0;

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slider_btn.length;
    slider_load(currentIndex);
};

slider_btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        slider_load(currentIndex);
    });
});

setInterval(nextSlide, 10000);
slider_load(currentIndex);
