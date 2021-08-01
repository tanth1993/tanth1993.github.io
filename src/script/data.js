const hrv = require('../assets/images/hrv.png');
const allgrow = require('../assets/images/allgrow.png');

const childCenter = require('../assets/images/p-childcenter.JPG');
const housing = require('../assets/images/p-housing.JPG');
const taxi = require('../assets/images/p-taxi.JPG');
const games = require('../assets/images/p-games.jpg');
const lmht = require('../assets/images/p-lmht.jpg');
const petProject = require('../assets/images/pet-project.png');

const skillSets = [
    {
        title: 'front-end',
        skills: [
            { name: 'html', detail: 'UI/UX, tags, layout' },
            { name: 'css', detail: 'scss/sass, css3, animation, responsive' },
            { name: 'javascript', detail: 'ES5,ES6,ES7' },
            { name: 'typescript', detail: 'data type, class, enum, interfaces' },
            { name: 'reactJs', detail: 'class, hooks, life cycle, props, state, context API, redux, mobx, graphQL' },
            { name: 'other libraries', detail: 'charts, moment, lodash, apollo-graphQL' },
            { name: 'tools', detail: 'figma, photoshop' },
        ]
    },
    {
        title: 'back-end',
        skills: [
            { name: 'C#', detail: 'basic' },
            { name: 'mongoDB', detail: 'query, find, aggregate' },
        ]
    },
    {
        title: 'mobile',
        skills: [
            { name: 'react native', detail: 'javascript, typescript' },
        ]
    },
    {
        title: 'other skills',
        skills: [
            { name: 'git', detail: 'github, gitlab, bitbucket' },
            { name: 'webpack', detail: 'basic' },
        ]
    }

];
const goals = [
    'learn about other framworks such as <b>VueJs, Angular</b> ',
    'learn about  SSR such as <b>NextJs</b>',
    'learn more about Back-end such as <b>Node.js, rabbitMQ, kafka</b>'
]
const aboutMe = [
    'I am a <b>Front-End developer</b>',
    "I've worked for <b>2+ years</b>",

]
const companies = [
    {
        name: 'Haravan',
        workDate: 'July/2019 - now',
        image: hrv,
        link: 'https://www.haravan.com',
        details: [
            'module <b>IC</b>: develop screens, forums, layout, voting',
            'module <b>BMS</b>: develop tables, <b>intergrate</b> with E-form, use <b>mongodb aggregate to Charts Report</b>',
            'module <b>Tickets</b>: develop from scratch, admin page, reports, support <b>back-end with CRUD actions</b>',
        ]
    },
    {
        name: 'Allgrowlabo Co,Ltd',
        workDate: 'November/2018 - December/2018',
        image: allgrow,
        link: 'https://allgrow-labo.jp',
        details: [
            'Take <b>PSD file</b> from Japanese team',
            'Convert <b>PSD Design</b> to <b>HTML template</b>',
            'Make <b>Responsive Layout</b>',
            'Convert HTML template to <b>WordPress Theme</b>',
            'Use HTML5, CSS3, Jquery to make <b>animations/keyframes</b>',
        ]
    },
]
const projects = [
    {
        imgLink: petProject,
        link: 'https://pet-project-755dc.web.app/',
        detail: 'React, firebase',
    },
    {
        imgLink: childCenter,
        link: '../../projects/p-childcenter/',
        detail: 'HTML, CSS, JQUERY, Responsive',
    },
    {
        imgLink: housing,
        link: '../../projects/p-housing/',
        detail: 'HTML, CSS, JQUERY, Responsive',
    },
    {
        imgLink: taxi,
        link: '../../projects/p-taxi/',
        detail: 'HTML, CSS, JQUERY, Responsive',
    },
    {
        imgLink: games,
        link: '../../projects/p-games/',
        detail: 'HTML, CSS, JQUERY, Responsive',
    },
    {
        imgLink: lmht,
        link: '../../projects/p-lmht/',
        detail: 'HTML, CSS, JQUERY, Responsive',
    },
]
module.exports = { skillSets, goals, companies, aboutMe, projects }