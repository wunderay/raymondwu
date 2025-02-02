import Link from "next/link";
import CardWrapper from "./cards";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col p-6 max-w-7xl mx-auto w-full">
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
    <footer className="mx-auto w-full footer flex gap-8">
      <Link href="https://www.linkedin.com/in/raymond-wu-85b3b097/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className="linkedin" width="50" height="50" focusable="true">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      </Link>
      <Link href="https://github.com/wunderay">
        <svg aria-hidden="false" viewBox="0 0 24 24" version="1.1" data-view-component="true" className="github" widths="50" height="50">
          <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
        </svg>
     </Link>
      <Link href="mailto:RaymondWu2017@gmail.com">
        <svg viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg" height="50" width="50" className="email">
          <path d="M58 0a6 6 0 0 1 3.6 10.8L34.4 31.2a4.012 4.012 0 0 1-4.8 0L2.4 10.8A6 6 0 0 1 6 0h52ZM27.2 34.4a7.988 7.988 0 0 0 9.6 0L64 14v26c0 4.413-3.587 8-8 8H8c-4.419 0-8-3.587-8-8V14l27.2 20.4Z" fill="currentColor"></path>
        </svg>
      </Link>
    </footer>
    </>
  );
}
