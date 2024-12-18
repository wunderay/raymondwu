export default function CardWrapper() {
    return <div>
        <Card title="Chattr" 
              description="Social Media web app based off of Twitter." 
              techStack={["Javascript", "Bootstrap", "CSS", "HTML", "Express.js", "EJS", "Node.js", "MongoDB"]}
        />
    </div>
}
// TODO Style cards
export function Card({title, description, techStack}: {title: string, description: string, techStack: string[]}) {
    return <article className="">
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {techStack.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
            </article>
}