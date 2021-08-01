import '../styles/index.scss';
import { skillSets, aboutMe, companies, projects } from './data';
const leftBtn = document.getElementsByClassName('fa-angle-left')[0];
const rightBtn = document.getElementsByClassName('fa-angle-right')[0];

const sliders = document.getElementsByClassName('content__slider');
let indexShow = 0

document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") { // arrow left
        if (indexShow === 0) return
        goBack()
    }
    if (event.key === "ArrowRight" || event.key === "ArrowUp") { // arrow right
        if (indexShow === (sliders.length - 1)) return
        goNext()
    }
})
//#region 
function addClassHide() { // call when click Back or Next or default
    let index = -1;
    leftBtn.classList.remove('is-hidden');
    rightBtn.classList.remove('is-hidden');
    for (let i = 0; i < sliders.length; i++) {
        const element = sliders[i];
        if (element.classList.contains('is-show')) {
            const child = element.firstElementChild;
            index = i
            setTimeOutClass(child, 'is-opa')
        };
    }

    if (index === 0) leftBtn.classList.add('is-hidden');
    if (index === (sliders.length - 1)) rightBtn.classList.add('is-hidden');
}

function addClassShow(index) {
    for (let i = 0; i < sliders.length; i++) {
        const element = sliders[i];
        element.classList.remove('is-show');
        element.firstElementChild.classList.remove('is-opa');
        if (index === i) element.classList.add('is-show');

        if (element.classList.contains('is-show')) {
            const child = element.firstElementChild;

            setTimeOutClass(child, 'is-opa')
        }
    }
}
function setTimeOutClass(child, className, timing = 100) {
    if (child != null) {
        setTimeout(function () { child.classList.add(className) }, timing);
    }
}
function addListener() {
    if (leftBtn) leftBtn.addEventListener('click', goBack)
    if (rightBtn) rightBtn.addEventListener('click', goNext)
}
function goBack() {
    indexShow--
    addClassShow(indexShow)
    addClassHide()
}

function goNext() {
    indexShow++
    addClassShow(indexShow)
    addClassHide()
}

addClassHide();
addListener();
//#endregion

// **************************************** render Data *************************************
const contentDiv = document.getElementById('content__about');
const aboutMeDiv = document.getElementById('about__me');
const companyDiv = document.getElementById('content__company__wrapper');
const projectDiv = document.getElementById('content__grid');

function renderSkills() {
    const mainSkill = []
    const otherSkills = []

    skillSets.forEach((skill, i) => {
        let div = `<div class="content__detail">
            <h4 class="content__skill__title"><span>${skill.title}</span></h4>
            ${skill.skills.map(s => (`<p><b>${s.name}</b>: ${s.detail}</p>`)).join('')}
        </div>`;
        i === 0 ? mainSkill.push(div) : otherSkills.push(div);
    });
    contentDiv.innerHTML = `<div class="content__detail_left">${mainSkill.join('')}</div><div class="content__detail_right">${otherSkills.join('')}</div>`;
}

function renderAboutMe() {
    let aboutDivs = aboutMe.map(a => {
        return `<p>${a}</p>`;
    });
    aboutMeDiv.innerHTML = aboutDivs.join('');
}

function renderCompanies() {
    const companyDivs = companies.map(renderCompanyDiv);

    companyDiv.innerHTML = companyDivs.join('');
}

function renderProjects() {
    const projectDivs = projects.map(renderProjectDiv)

    projectDiv.innerHTML = projectDivs.join('');
}

renderCompanies();
renderSkills();
renderAboutMe();
renderProjects();

function renderProjectDiv(d) {
    const { imgLink, link, detail } = d

    return `<div class="content__grid__img">
        <a class="content__grid__img__link" href="${link}" target="_blank">
            <img src="${imgLink}" alt="${detail}">
        </a>
        <h6 class="content__grid__img__detail">
            ${detail}
        </h6>
    </div> `
}
function renderCompanyDiv(c) {
    const { details, image, link, name, workDate } = c
    return `<div class="content__company">
                <div class="content__company__upper d-f">
                    <h2 class="content__company__brand">${name}</h2>
                    <h4 class="content__company__date">${workDate}</h4>
                </div>
                <div class="content__company__under d-f">
                    <div class="content__company__under__left">
                        <a href="${link}" target="_blank"><img src="${image}" alt=""></a>
                    </div>
                    <div class="content__company__under__right">
                        ${details.map(d => (`<p>${d}</p>`)).join('')}
                    </div>
                </div>
            </div>`
}