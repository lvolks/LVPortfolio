import library from "../assets/library.png"
import petshop from "../assets/petshop.png"
import ebank from "../assets/ebank.png"
import portfolio from "../assets/portfolio.png"


export const content = [
    "I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on experience, I have honed my skills in front-end technologies like React, HTML, CSS, Tailwind, as well as back-end technologies like Node.js, SQL, MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences."
]

export const aboutme = [
    "I’m a developer with 4 years of experience in programming, focused on building efficient and scalable solutions. Throughout my career, I’ve worked with various technologies, including React, Node.js, MongoDB, and SQL, which has given me a strong foundation in both front-end and back-end development. I have a deep interest in learning new technologies and I’m always looking to enhance my skills, especially in web development. I’m also passionate about contributing to open-source projects, as I believe technology has the power to transform the world, and I’m excited to continue playing a part in that change."
]

export const academic = [
    "I am currently studying at Positive University, located in Curitiba, at the moment I am in the eighth period of the bachelor's degree in software engineering, I intend to carry out several other activities involving programming after finishing college."
]


export const projects = [
    {
        name: "Petshop",
        bg: petshop,
        link: "https://github.com/lvolks/petshop-front-back",
    },

    {
        name: "Library",
        bg: library,
        link: "https://github.com/lvolks/bibliotequinha",
    },

    {
        name: "Ebank",
        bg: ebank,
        link: "https://github.com/lvolks/EBank",
    },

    {
        name: "Portfolio",
        bg: portfolio,
        link: "https://github.com/lvolks/Prestige-Garage",
    },
]

export const skills = [
    {
        category: 'Programming',
        items: [
            { name: 'JavaScript', percentage: '10', classname: 'stroke-current text-orange-600', text: "text-center text-1xl font-bold text-orange-600 " },
            { name: 'HTML', percentage: '15', classname: 'stroke-current text-red-600', text: "text-center text-1xl font-bold text-red-600 " },
            { name: 'TypeScript', percentage: '40', classname: 'stroke-current text-pink-400', text: "text-center text-1xl font-bold text-pink-400 " },
            { name: 'Java', percentage: '40', classname: 'stroke-current text-yellow-400', text: "text-center text-1xl font-bold text-yellow-400 " },
            { name: 'Node.js', percentage: '50', classname: 'stroke-current text-purple-300', text: "text-center text-1xl font-bold text-purple-300 " },
            { name: 'Python', percentage: '80', classname: 'stroke-current text-blue-400', text: "text-center text-1xl font-bold text-blue-400" },
        ],
    },
    {
        category: 'Databases',
        items: [
            { name: 'SQL', percentage: '25', classname: 'stroke-current text-violet-500 ', text: "text-center text-1xl font-bold text-violet-500 " },
            { name: 'MongoDB', percentage: '35', classname: 'stroke-current text-green-400 ', text: "text-center text-1xl font-bold text-green-400 " },
            { name: 'Firebase', percentage: '40', classname: 'stroke-current text-red-700 ', text: "text-center text-1xl font-bold text-red-700 " },
        ],
    },
    {
        category: 'Design',
        items: [
            { name: 'Tailwind', percentage: '15', classname: 'stroke-current text-cyan-300 ', text: "text-center text-1xl font-bold text-cyan-300" },
            { name: 'CSS', percentage: '10', classname: 'stroke-current text-amber-700 ', text: "text-center text-1xl font-bold text-amber-700" },
            { name: 'Chakra', percentage: '50', classname: 'stroke-current text-blue-200 ', text: "text-center text-1xl font-bold text-blue-200" },
        ],
    },
];

