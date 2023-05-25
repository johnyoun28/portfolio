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
        description: "An application that displays the top 100 crypto coins by market cap with live prices, market cap, and the 24 hour price change percentage. Users may click on their desired coin on the carousel or coin list to see more details with a chart that displays the coin price change within the year. This application also contains a search field for users who want to filter coins by the coins keyword.",
        stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","TypeScript" ],
        github: "https://github.com/johnyoun28/crypto-track",
        live: "https://crypto-track-hhxu.vercel.app/"
    },

    {
        name: "Entertainment Zone",
        description: "An application that displays the current trending movies or tv series with a rating. Users may also filter by genre or use the search bar in order to find their desired movie or tv series.",
        stack: ["HTML", "CSS", "JavaScript", "React", "Material UI"],
        github: "https://github.com/johnyoun28/entertainmentzone",
        live: "entertainmentzone.vercel.app"
    },
    
    {
        name: "Nasa Picture of the Day",
        description: "An application that utilizes the NASA API to allow users to view NASAs picture of the day with a description. Also implemented a calander to allow users to choose a date in order to view the NASA photo corresponding to that certain date.",
        stack: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/johnyoun28/NASA-Picture-of-the-Day",
        live: "https://nasa-apod-six.vercel.app/"
    },

    {
        name: "Secret Family Recipes",
        description: "An application that allows users to store their own recipes, or view recipes that others have shared. I contributed on the front end UI marketing page with HTML and CSS to inform new users on what the application does",
        stack: ["HTML", "CSS"],
        github: "https://github.com/Secret-Family-Recipes-2-BW/SFR2-UI",
        live: "https://secret-family-recipes2-ui.netlify.app/index.html"
    },

    {
        name: "Expat Journal",
        description: "An application that allows users to share posts or photos for others to view and interact with. I contributed to the back end of this project and used Node.js to implement authentication for users to sign in and sign up.",
        stack: ["Node.js", "Express", "PostgresSQL"],
        github: "https://github.com/BW-Expat-Journal-Project/backend",
        live: "https://github.com/BW-Expat-Journal-Project/backend"
    },
    

    

]

const skills = [ "HTML", "CSS", "JavaScript", "Tailwind CSS", "TypeScript", "React", "Redux", "React Testing Library", "Cypress", "Node.js", "Express", "PostgresSQL", "Python", "Git", "GitHub"]

const contact = {
    email: "johnyoun28@gmail.com"
}

export {
    header, about, projects, skills, contact
}