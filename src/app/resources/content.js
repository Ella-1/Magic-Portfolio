// import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Bata',
    lastName:  'Zoaka',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location: 'Africa/Lagos',
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:example@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer and Blockchain Developer</>,
    subline: <>Experienced software developer with 3+ years of expertise in C, JavaScript, Python, and
    Solidity. Skilled in building both web applications and decentralized apps (dApps), with a strong
    focus on problem-solving and delivering high-quality solutions. Passionate about continuous
    learning and contributing to the tech community through volunteer work. A collaborative team
    player eager to take on new challenges and drive innovation.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>My name is Bata Zoaka. I’m a  Blockchain developer and Software engineer with a passion for simplifying complex challenges through innovative solutions. My work bridges blockchain technology, software engineering, and the creation of efficient, impactful digital experiences.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Myron Groups',
                timeframe: '20 January, 2022 - Present',
                role: 'Blockchain Developer',
                achievements: [
                    <>Played a key role in blockchain development, assisting in the full project lifecycle from
concept to implementation.</>,
                    <>Collaborated with cross-functional teams to integrate blockchain solutions seamlessly into
existing systems.</>,
<>Shared insights and knowledge on blockchain technologies with team members, helping to
build a stronger, more informed team.</>,
<>Collaborate with other developers to update the website and create new features.</>

                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    
                ]
            },
            {
                company: 'Fiver',
                timeframe: 'June , 2023 - 10 December, 2023',
                role: 'Web Developer ',
                achievements: [
                    <>Delivered customised solutions for diffrent clients, using Python, React, Next.js, MERN
Stack, and various frameworks to meet specific project needs.</>,
                    <>Created and tested applications for websites.</>,
                    <>Showcased adaptability by working across multiple industries, ensuring that each solution
was tailored to align with clients’ unique objectives and requirements.</>
                ],
                images: [ ]
            },    
            
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Ahmadu Bello University',
                description: <>Bachelor of Engineering - Civil Engineering (Expected Graduation: September 2026)</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                   
                ]
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };