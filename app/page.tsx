import Link from "next/link";
import CardWrapper from "./cards";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col p-6 max-w-container mx-auto w-full sm:px-6 lg:px-8">
      <section className="my-6">
      <h1 className="max-w-6xl mt-8 text-6xl font-bold tracking-tight">
        Hello My name is Raymond Wu.
      </h1>

    <div className="text-4xl mt-6 mb-12">I'm a Front End Software Engineer. 
      
    </div>
      <Link className=" block rounded-md px-3 py-2 text-base font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white max-w-fit" href="https://drive.google.com/file/d/1zZWhwQX060Kl0AKuiyky-ouUp_B07XBf/view?usp=sharing">
        Resume  
      </Link>
    </section>


      <div className="mt-12">
        <h2 className="text-4xl mb-6">About me:</h2>
        <p className="text-2xl mb-6">
          I'm a software developer passionate in learning new technologies and solving novel problems.
        </p>
        
        <p className="text-2xl mb-6">
          After graduating university with a degree in Computer Science, I moved from the plains and mountains of Colorado to the desert sands of Las Vegas where I found a position at one of the leading deals websites, Slickdeals.
        </p>

        <p className="text-2xl mb-6">
          While working at Slickdeals, I took every opppurtunity available to learn new skills and hone existing ones as I solved every challenge presented to me. I learned search engine optimization techniques when 
          working on the team that built out Slickdeal's coupon subdomain. I've learned how an enterprise develops, reviews, tests, and deploys code then joined a team that optimized the build process of the front end tech stack. 
          Through working with a mature codebase I was able to grow as an engineer and learn a bit about what it's like to maintain and operate a website that serves millions of users. 
        </p>

      </div>

      <div className="mt-8">
        <h2 className="text-4xl mb-6">Professional Experience:</h2>
        <p className="text-2xl mb-6">Associate Frontend Engineer, Slickdeals</p>
        <p className="text-2xl">Develop, style, and modernize multiple components, services, web pages, and user interfaces (UI) for many parts of the Slickdeals website. Built UI for internal tooling, business customers, and regular users 
        such as Slickdeals's <Link href="https://coupons.slickdeals.net/" className="link">coupon subdomain</Link>, <Link href="https://slickdeals.net/deal-categories/" className="link">deal categories</Link>, and many others.</p>
      </div>

      <div className="mt-8">
        <h2 className="text-4xl mb-6">Projects</h2>
        <CardWrapper/>
      </div>
    </main>
    <footer>
      Contact me: 
    </footer>
    </>
  );
}
