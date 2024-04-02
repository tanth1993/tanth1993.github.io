const hrv = require('../assets/images/hrv.png');
const allgrow = require('../assets/images/allgrow.png');

const childCenter = require('../assets/images/p-childcenter.JPG');
const housing = require('../assets/images/p-housing.JPG');
const taxi = require('../assets/images/p-taxi.JPG');
const games = require('../assets/images/p-games.jpg');
const lmht = require('../assets/images/p-lmht.jpg');
const petProject = require('../assets/images/pet-project.png');
const chartJs = require('../assets/images/chartjs.png');
const nextJs = require('../assets/images/nextjs.png');

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
{/* <b></b> */ }
const aboutMe = [
    'I has been working as Frontend developer since 2019. I develop not only UI/UX on <b>web application</b> but also on the <b>mobile app</b>. Besides, I enjoy supporting build some <b>APIs</b> for Backend team. I am eager to learn and share new things to other members.',
]
const companies = [
    {
        name: 'Haravan',
        workDate: 'May/2019 - now',
        image: hrv,
        link: 'https://www.haravan.com',
        details: [
            'Projects are microservices and based on <b>C#</b>, <b>Typescript</b> and <b>MongoDB</b>',
            `<b>Customer Tickets</b>: Managing tickets and records from internal and external resources 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Optimise source code to reduce build time
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Implement real-time messages
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Refactor class component to react hook and create custom hooks
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Develop the module in mobile app
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Create basic APIs and apply graphQL
            `,

            `<b>BMS (budget management system)</b>: Allocating money by months, quarters or year
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Render the tree view company
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Refactor nested loop to hash map flow
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Handle data in server side and visualize data by charts(bar,line,pie)
            `,

            `<b>Eform (Electric form)</b>: Managing flows, processing forms
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Create drag-drog page builder 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- Support BE team for developing RESTful API 
            `,

            `<b>Report Analytics</b>: Supporting to build report builders
            <br>&nbsp;&nbsp;&nbsp;&nbsp;- query data from clickhouse and export excel on client 
            `
            ,
        ]
    },
]
const projects = [
    {
        imgLink: chartJs,
        link: 'https://report-client.vercel.app/overview',
        detail: 'chart.js, @visx/visx, victory, Recharts, Nodejs, MongoDB Atlas',
    },
    {
        imgLink: petProject,
        link: 'https://pet-project-755dc.web.app/',
        detail: 'React, firebase',
    },
    {
        imgLink: nextJs,
        link: 'https://demo-nextjs-rouge.vercel.app/',
        detail: 'Nextjs, Nodejs, MongoDB Atlas, tailwindCSS, daisyUI',
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