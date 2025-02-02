export default function CardWrapper() {
    return <div className="@container projects">
        <Card title="Chattr" 
              description="Social Media web app based off of Twitter." 
              techStack={["Javascript", "Bootstrap", "CSS", "HTML", "Express.js", "EJS", "Node.js", "MongoDB"]}
              link="https://github.com/wunderay/chattr"
        />
        <Card title="Stop The Spread" 
              description="Contact Tracing Mobile Application" 
              techStack={["React Native", "Python", "Java", "Firebase"]}
              link="https://github.com/ContactTracingCU/StopTheSpread"
        />
        <Card title="What's the Weather Over Here" 
              description="Simple Realtime Weather Website" 
              techStack={["Javascript", "EJS", "CSS3"]}
              link="https://github.com/wunderay/WWOH"
        />
    </div>
}

export function Card({title, description, techStack, link}: {title: string, description: string, techStack: string[], link: string}) {
    return <a className="projectLink" href={link}>
             <article className="projectCard  max-w-2xl inline-block">
              <h3 className="title">{title}</h3>
              <p className="description">{description}</p>
              <ul className="techstack text-wrap">
                {techStack.map((tech) => <li key={tech} className="tech">{tech}</li>)}
              </ul>
            </article>
          </a> 
}