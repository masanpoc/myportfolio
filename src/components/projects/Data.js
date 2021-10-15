import img_recipes from './images/img_recipes.png'
import img_swimming from './images/img_swimming.png';
import img_website from './images/img_website.png';

export const data = [
    {
        appTitle: 'RECIPES & NUTRIENTS APP',
        appParagraphs: [
            'Responsive web app aimed for curious minds that love cooking but that also want to be aware of their nutrients intake. ',
            'Using this web app, you can search for any recipe you can imagine, using as many filters as you want.',
            'Once you find your recipe you can have a look at its nutrient analysis which shows valuable nutrition information through charts.'
        ],
        stackItems: ['React', 'TypeScript', 'Framer Motion', 'Git', 'Recharts', 'Styled Components', 'Google Analytics', 'PostCSS', 'Babel', 'ESLint', 'Webpack', 'Figma' ],
        screenShot: img_recipes,
        ghLink: 'https://github.com/masanpoc/recipes',
        demoLink: 'https://mystifying-nobel-8d134d.netlify.app/',
        opacity: 0.6
    },
    {
        appTitle: 'SWIMMING APP',
        appParagraphs: [
            'Mobile web app built for swimmers. The app generates custom swimming workouts in less than a second.',
            'The user fills a form according to his/her preferences. Swimming blocks are generated and swimming drills are selected based on user input.',
            'Once you generated your training, you can write it down on paper and carry it with you to the pool.'
        ],
        stackItems: ['React', 'Redux', 'Tailwind CSS', 'Git', 'React Testing Library', 'Ramda', 'PostCSS', 'Babel', 'ESLint', 'Webpack', 'Figma'],
        screenShot: img_swimming,
        ghLink: 'https://github.com/masanpoc/swimming',
        demoLink: 'https://zen-goldberg-d89423.netlify.app/',
        opacity: 0.7,
    },
    {
        appTitle: 'RESPONSIVE WEBSITE',
        appParagraphs: [
            'Responsive web app built for the purpose of learning.',
            'Designed and built from scratch, it includes common web sections, e.g.: home, articles, about us, gallery.'
        ],
        stackItems: ['React', 'SCSS', 'GSAP', 'Git', 'Figma', 'use sound'],
        screenShot: img_website,
        ghLink: 'https://github.com/masanpoc/proyecto',
        demoLink: 'https://frosty-poitras-47b88e.netlify.app/',
        opacity: 1
    }
]