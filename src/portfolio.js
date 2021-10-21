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
        name: "Crypto Tracker",
        description: "An application that displays the top 100 crypto  coins by market cap with live prices, volume, market cap, and the 24 hour price change percentage. This application also contains a search field if users want to filter coins by the coins keyword.",
        stack: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/johnyoun28/crypto-tracker",
        live: "crypto-tracker-johnyoun28.vercel.app"
    },
    {
        name: "Nasa Picture of the Day",
        description: "An application that utilizes the NASA API to allow users to view NASAs picture of the day with a description. Also implemented a calander to allow users to choose a date in order to view the NASA photo corresponding to that certain date.",
        stack: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/johnyoun28/NASA-Picture-of-the-Day",
        live: "https://nasa-apod-six.vercel.app/"
    },
    {
        name: "Weather App",
        description: "Weather application that allows users to view a 5-Day Weather Forecast of their desired location. I've built this project while learning/practicing the basics of Redux!",
        stack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        github: "https://github.com/johnyoun28/weather-app",
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