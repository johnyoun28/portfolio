const header = {
    title: 'JY.',
}

const about = {
    name: "John Youn",
    role: "Software Engineer",
    description: "I am a recent graduate from Lambda School, a coding bootcamp with a strong knowledge of Full Stack Web Development. Growing up, I have always been interested in tech and my dream was to have a career in the tech industry. I believe that I am fast learner and always ready to learn more!" ,
    socials: {
        resume: "https://docs.google.com/document/d/1eKs0LXm62QyqM2sxT15AAn9nFJQ9t_KCJ1u5nPKy2oA/edit",
        github: 'https://github.com/johnyoun28',  
        linkedin: "https://www.linkedin.com/in/john-youn/"
    }
}

const projects = [
    {
        name: "Nasa Picture of the Day",
        description: "An application that utilizes the NASA API to allow users to view NASAs picture of the day with a description.",
        stack: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/johnyoun28/shopify-challenge",
        live: "https://shopify-challenge-six.vercel.app/"
    },
    {
        name: "Weather App",
        description: "Weather application that allows users to view a 5-Day Weather Forecast on their desired location. I've built this project while learning/practicing the basics of Redux!",
        stack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        github: "https://github.com/johnyoun28/weather-app",
        live: "github.com/johnyoun28"
    },
    {
        name: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stack: ["HTML", "CSS", "React", "Redux"],
        github: "github.com/johnyoun28",
        live: "github.com/johnyoun28"
    },
]

const skills = [ "HTML", "CSS", "JavaScript", "React", "Redux", "React Testing Library", "Cypress", "Node.js", "Express", "PostgresSQL", "Python", "Git", "GitHub"]

const contact = {
    email: "johnyoun28@gmail.com"
}

export {
    header, about, projects, skills, contact
}