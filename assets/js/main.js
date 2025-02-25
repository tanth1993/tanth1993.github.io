
(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// ******************************** CUSTOM Content ************************************
const aboutMeDiv = document.getElementById('aboutMe');
(function renderAboutMe() {
  aboutMeDiv.innerHTML = aboutMe.join('');
})()

const metaDataUl = document.getElementById('metaData');
(function renderMetaData() {
  const metaDataLi = metaData.map(m => {
    return `<li><i class="bi bi-chevron-right"></i> <strong>${m.title}</strong> <span>${m.detail}</span></li>`
  })
  metaDataUl.innerHTML = metaDataLi.join('');
})()

const navmenuList = document.getElementById('navmenuList');
const sectionNames = document.querySelectorAll('[data-name]');

(function renderMenu() {
  const navmenuLi = menus.map(m => {
    return `<li><a href=${m.link}><i class="bi navicon ${m.icon}"></i><span>${m.name}</span></a></li>`
  })
  navmenuList.innerHTML = navmenuLi.join('');

  sectionNames.forEach((s, i) => {
    const indexItem = s.getAttribute('data-name').split('-').pop()
    s.innerHTML = menus[indexItem]?.name || ''
  })

})()

const resumeRow = document.getElementById('resume-row');

(function renderResume() {
  function renderItem(project) {
    return `<div class="resume-item">
    <h4>${project.name}</h4>
    <p><em>${project.description}</em></p>
    <ul>
    ${project.responsibilities.map(r => `<li>${r}</li>`).join('')}
    </ul>
    <p><b>Tech Stack: </b><em>${project.techStack}</em></p>
    </div>`
  }
  function renderSection(experience) {
    const { company, workDate, description, projects } = experience
    return `<div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">
      <div class='d-flex justify-content-between align-items-center'>
        <h3 class="resume-title">${company}</h3>
        <h6>${workDate}</h6>
      </div>
  
      ${projects.map(p => renderItem(p)).join('')}
    </div>`
  }
  resumeRow.innerHTML = experience.map(e => renderSection(e)).join('')
})()

const skillsRow = document.getElementById('SkillsRow');

(function renderSkills() {
  const skillSetList = skillSets.map(skill => {
    return `<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item item-cyan position-relative">
              <div class="icon">
                ${skill.icon}
              </div>
              <a href="#">
                <h3>${skill.title}</h3>
              </a>
              <ul class="text-start">
                ${skill.skills.map(s => `<li>${s.name}</li>`).join('')}
              </ul>
            </div>
          </div>`
  })
  skillsRow.innerHTML = skillSetList.join('');

  sectionNames.forEach((s, i) => {
    const indexItem = s.getAttribute('data-name').split('-').pop()
    s.innerHTML = menus[indexItem]?.name || ''
  })

})()

const projectRow = document.getElementById('projectRow');

(function renderSkills() {
  const projectItems = projects.map(p => {
    return `<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div class="service-item item-cyan position-relative">
        <div class="icon main-icon">
          ${p.icons?.[0]}
        </div>  
        <a href=${p.link} class="stretched-link">
          <h3>${p.name}</h3>
        </a>
        <div class="d-flex wrapper-icons">
          ${p.icons?.join('')}
        </div>
      </div>
    </div>`
  })
  projectRow.innerHTML = projectItems.join('');

})()

{/* <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
<div class="service-item item-cyan position-relative">
  <div class="icon">
    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <path stroke="none" stroke-width="0" fill="#f5f5f5"
        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174">
      </path>
    </svg>
    <i class="bi bi-activity"></i>
  </div>
  <a href="#" class="stretched-link">
    <h3>Nesciunt Mete</h3>
  </a>
  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis
    tempore et consequatur.</p>
</div>
</div><!-- End Service Item --> */}



