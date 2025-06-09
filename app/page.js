"use client";

import Image from "next/image";
import Script from 'next/script'
import { useState } from 'react';
import Lottie from "lottie-react";
import animationData from './assets/Animation.json';

export default function Home() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function reset() {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsSubmitting(true); 

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log("Form Data:", object); // Debugging: Log form data
    console.log("JSON Payload:", json); // Debugging: Log JSON payload

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });
      const result = await response.json();
      if (result.success) {
          console.log("Form submission successful:", result);
          event.target.reset();  // Reset the form fields
          reset();
      }
      else{
        console.error("Form submission failed:", result)
      }
    } catch (error) {
      console.error("Error submitting the form: ", error);
    } finally {
      setIsSubmitting(false); // Reset loading state after submission is done
    }
  };


  return (
    // <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div classNameName="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p classNameName="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code classNameName="font-mono font-bold">app/page.js</code>
    //     </p>
    //     <div classNameName="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         classNameName="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           classNameName="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div classNameName="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       classNameName="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div classNameName="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>

    <>
    {/* <link rel="preload" href="/_next/static/media/730e8169368baf37-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/media/f1f0c35b32161446-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/media/d593a8df799d4ab1-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/media/dc792b508e6f91c7-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/media/84d3493a9fd22f1c-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/media/fcb100c7607696fd-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/media/d90f295d0c348006-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/media/579e0f95cacfae57-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/media/828a494e04a45cbd-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"/>
    <link rel="preload" href="/_next/static/css/b822cfde573c2504.css" as="style"/>
    <link rel="stylesheet" href="/_next/static/css/b822cfde573c2504.css" data-n-g=""/>
    <noscript data-n-css=""></noscript>
    <script defer="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
    <script src="/_next/static/chunks/webpack-5146130448d8adf7.js" defer=""></script>
    <script src="/_next/static/chunks/framework-2c79e2a64abdb08b.js" defer=""></script>
    <script src="/_next/static/chunks/main-342b3f0888afe918.js" defer=""></script>
    <script src="/_next/static/chunks/pages/_app-5531e5a306da5e32.js" defer=""></script>
    <script src="/_next/static/chunks/664-09cd891ecc3af1d0.js" defer=""></script>
    <script src="/_next/static/chunks/506-95c309a4d817bb8b.js" defer=""></script>
    <script src="/_next/static/chunks/pages/index-f96aa925e82cd3c9.js" defer=""></script>
    <script src="/_next/static/eL2DSZNilqLaXtmcGMP2M/_buildManifest.js" defer=""></script>
    <script src="/_next/static/eL2DSZNilqLaXtmcGMP2M/_ssgManifest.js" defer=""></script> */}

    {/* // <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"> */}
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
    <div id="__next">
        <div className="__variable_20b187 group/spotlight relative">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{
              background: 'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)'}}>
            </div>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <div className="flex items-center space-x-4">
                              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                                  <a href="/">Vedant Patel</a>
                              </h1>
                              <Lottie animationData={animationData} className="w-16 h-16"/>
                            </div>
                            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">AI/ML Engineer; Full-Stack Developer</h2>
                            <p className="mt-4 max-w-lg leading-normal">Aspiring engineer with a passion for tech and a knack for 
                            problem-solving. Experienced in Artificial Intelligence, Machine Learning,
                            Data Science, and Full-Stack development. Committed to innovation and 
                            community collaboration. Let's connect and create something extraordinary together.</p>

                            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                                <ul className="mt-16 w-max">
                                    <li>
                                        <a className="group flex items-center py-3 active" href="#about">
                                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="group flex items-center py-3 " href="#experience">
                                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="group flex items-center py-3 " href="#projects">
                                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <ul className="ml-1 mt-8 flex items-center" aria-label="Social-Media">
                            <li className="mr-5 text-xs shrink-0">
                                <a className="block hover:text-slate-200" href="https://github.com/Programmer7129" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                    <span className="sr-only">GitHub</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-5 text-xs shrink-0">
                                <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/vedant-patel-44b30520b/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-5 text-xs shrink-0">
                                <a className="block hover:text-slate-200" href="https://instagram.com/vedantspatel33" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram">
                                    <span className="sr-only">Instagram</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                        <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </header>
                    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About Me</h2>
                            </div>
                            <div>
                                <p>I'm a student at <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">University of California Davis</span>, studying <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Computer Science and Engineering</span>. 
                                Machine Learning and Artificial Intelligence enthusiast with a proven track record in developing innovative 
                                AI solutions and optimizing system efficiency in industry and research settings. Currently interning in a 
                                dynamic ML role where I apply automation and advanced pattern recognition techniques, achieving measurable 
                                improvements in workflow efficiency. As a Research Assistant at UC Davis, I led the design and deployment 
                                of a cutting-edge TinyML project, achieving high accuracy for ECG signal classification and significantly 
                                enhancing device efficiency for wearable technology. With a diverse portfolio of projects and strong technical 
                                skills in Python, SQL, Next.js, and AWS, I am passionate about harnessing AI to drive meaningful outcomes 
                                and advance solutions in real-world applications. I am eager to contribute my expertise and innovative 
                                approach to the fast-evolving tech landscape.</p>

                            </div>
                        </section>

                        <div className="mt-12 mb-12">
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/Vedant Patel CV Latest.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                                    <span>
                                        View Full
                                        <span className="inline-block">
                                            Résumé
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>

                        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                            </div>
                            <div>
                                <ol className="group/list">
                                    <li className="mb-12">
                                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                                Feb 2024 — Present
                                            </header>
                                            <div className="z-10 sm:col-span-6">
                                                <h3 className="font-medium leading-snug text-slate-200">
                                                    <div>
                                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="">
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                            <span>Software Engineering Intern (AI/ML) • Drevol</span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Developed and deployed AI solutions using image recognition and NLP (Natural Language Processing), reducing manual effort by 25%
                                                </p>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Integrated machine learning algorithms into enterprise systems, boosting predictive accuracy by 30%
                                                </p>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Engineered and refined automation solutions in C#, .NET, and SQL, increasing task efficiency by 20%
                                                </p>
                                                <ul className="mt-2 flex flex-wrap">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Machine Learning</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Data Science</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Software Engineering</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Full-Stack Development</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                        
                                </ol>
                            </div>
                            <div>
                                <ol className="group/list">
                                    <li className="mb-12">
                                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                                Feb 2024 — Present
                                            </header>
                                            <div className="z-10 sm:col-span-6">
                                                <h3 className="font-medium leading-snug text-slate-200">
                                                    <div>
                                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="">
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                            <span>Machine Learning Research Assistant • UC Davis</span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Engineered energy-efficient ECG classification using a quantized TinyML Random Forest (92.8% accuracy) and an event-driven architecture with adaptive burst-mode data collection, extending wearable battery life from 14 days to over a month.
                                                </p>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Enhanced anomaly detection to 93.6% accuracy via advanced feature engineering and strategic hyperparameter tuning with GridSearchCV on resource-constrained devices.
                                                </p>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Optimized deep learning for time-series data using SHAP and LIME, achieving a 7% accuracy boost and enabling hybrid offloading of complex multilabel classification to server-side CNN and XGBoost models for comprehensive health monitoring.
                                                </p>
                                                <ul className="mt-2 flex flex-wrap">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Machine Learning</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Deep Learning</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                        
                                </ol>
                            </div>
                            <div>
                                <ol className="group/list">
                                    <li className="mb-12">
                                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                                Oct — Dec 2021
                                            </header>
                                            <div className="z-10 sm:col-span-6">
                                                <h3 className="font-medium leading-snug text-slate-200">
                                                    <div>
                                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="">
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                            <span>Machine Learning Intern • ArtifIntel Pvt. Ltd.</span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Executed comprehensive data preprocessing and transformation on inconsistent datasets, employed classNameification and regression techniques for training supervised learning models to achieve an impressive 98% accuracy.
                                                </p>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Leveraged Matplotlib and Seaborn for advanced data visualization, facilitating data-driven decision-making.
                                                </p>
                                                <ul className="mt-2 flex flex-wrap">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Machine Learning</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                        
                                </ol>
                            </div>
                            <div>
                                <ol className="group/list">
                                    <li className="mb-12">
                                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                                Jan — Apr 2024
                                            </header>
                                            <div className="z-10 sm:col-span-6">
                                                <h3 className="font-medium leading-snug text-slate-200">
                                                    <div>
                                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.codelabdavis.com" target="_blank">
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                            <span>Project Manager ·
                                                                <span>
                                                                    CodeLab
                                                                    <svg className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
                                                                    </svg>                                                              
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Led the Summarizit project team to develop an innovative web application that analyzes and summarizes extensive video content, resulting in a 40% increase in user productivity and information accessibility.
                                                </p>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Leveraged NextJS (Typescript) for the frontend, Express (Typescript) for the backend, and MongoDB for database management, implementing CRUD routes to ensure robust, scalable, and efficient data management.
                                                </p>
                                                <ul className="mt-2 flex flex-wrap">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Typescript</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">NodeJs</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">MongoDB</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">ExpressJs</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">NextJS</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                        
                                </ol>
                            </div>
                            <div>
                                <ol className="group/list">
                                    <li className="mb-12">
                                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                                Sep 2023 — Present
                                            </header>
                                            <div className="z-10 sm:col-span-6">
                                                <h3 className="font-medium text-lg leading-snug text-slate-200">
                                                    <div>
                                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-xl" href="https://gdscucdavis.com" target="_blank">
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                            <span>Technology Director ·
                                                                <span className="text-base">
                                                                GDSC
                                                                    <svg className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
                                                                    </svg>                                                              
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Led AI/ML project initiatives, including the development of an advanced music recommendation system that improved user engagement by 35%, a medical chatbot for injury diagnosis that achieved 90% accuracy in providing preliminary assessments, and a strategic poker bot that outperformed human players in 70% of simulated games.
                                                </p>
                                                <ul className="mt-2 flex flex-wrap">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Javascript</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">NodeJs</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">MongoDB</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">ExpressJs</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">NextJS</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                        
                                </ol>
                            </div> 

                        </section>
                        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
                            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                            </div>
                            <div>
                                <ul className="group/list">
                                    <li className="mb-12">
                                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <div className="z-10 sm:order-2 sm:col-span-6">
                                                <h3>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://corpcred.vercel.app" target="_blank" rel="noreferrer noopener" aria-label="Built a Corporate Credit Rating Calculator (opens in a new tab)">
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            CorpCred
                                                            <span className="inline-block">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">CorpCred is an AI-powered Corporate Credit Rating Calculator that predicts a company's credit rating based on its financial ratios. This project applies machine learning to financial analysis, helping businesses, investors, and analysts make informed credit decisions.</p>
                                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Neural Networks</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Next.js</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Vercel</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Render</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TailwindCSS</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color:"transparent"}} srcSet="/Launch Page CorpCred.png, /Launch Page CorpCred.png" src="/Launch Page CorpCred.png"/>
                                        </div>
                                    </li>
                                    <li className="mb-12">
                                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <div className="z-10 sm:order-2 sm:col-span-6">
                                                <h3>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/Programmer7129/EduParse-Final-Project" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            EduParse 
                                                            <span className="inline-block">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">Created a chrome extension which provides users with practice exams with a variety of questiosn including short and long answer questions, multiple-choice questions, nuemricals, etc. based on provided lecture notes from users.</p>
                                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Django</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">ChatGPT API</div>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            {/* <!-- <img alt="Build a Spotify Connected App Newline course marketing card" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75"/> --> */}
                                        </div>
                                    </li>
                                    <li className="mb-12">
                                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <div className="z-10 sm:order-2 sm:col-span-6">
                                                <h3>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/Programmer7129/Scream_Detection_AI-ML_Model" target="_blank" rel="noreferrer noopener" aria-label="Spotify Profile (opens in a new tab)">
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            Scream Detection Deep Neural Network
                                                            <span className="inline-block">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">The Scream Detection AI/ML Model is an innovative system developed to enhance the safety and security of our college community. The project aims to detect distress calls and screams in real-time, enabling immediate response and providing assistance to individuals in danger.</p>
                                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TensorFlow</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SciPy</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Sklearn</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <img alt="Spotify Profile app homepage" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75"/> */}
                                        </div>
                                    </li>
                                    <li className="mb-12">
                                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <div className="z-10 sm:order-2 sm:col-span-6">
                                                <h3>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://vedantpatel.vercel.app" target="_blank" rel="noreferrer noopener" aria-label="Halcyon Theme (opens in a new tab)">
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            Portfolio Website
                                                            <span className="inline-block">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">Personal Website for showcasing my experience, projects and my jounrey as a software developer.</p>
                                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TailwindCSS</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Javascript</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Vercel</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color:"transparent"}} srcSet="/Homepage personal website screenshot.png, /Homepage personal website screenshot.png" src="/Homepage personal website screenshot.png"/>
                                        </div>
                                    </li>
                                    <li className="mb-12">
                                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <div className="z-10 sm:order-2 sm:col-span-6">
                                                <h3>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/Programmer7129/Breast-Cancer-Prediction-Machine-Learning-Model" target="_blank" rel="noreferrer noopener" aria-label="brittanychiang.com (v4) (opens in a new tab)">
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            Breast Cancer Detection
                                                            <span className="inline-block">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </h3>

                                                <p className="mt-2 text-sm leading-normal">Developed Breast Cancer Detection machine learning models leveraging six different ML models, including Logistic Regression and Decision Tree classNameifier
                                                    to accurately classNameify breast cancer as benign or malignant with an average accuracy rate of 98%.</p>
                                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Gatsby</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Styled Components</div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Netlify</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"/> */}
                                        </div>
                                    </li>
                                </ul>
                                {/* <div className="mt-12">
                                    <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Project Archive" href="/archive">
                                        <span>
                                            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                                View Full Project
                                            </span>
                                            <span className="whitespace-nowrap">
                                                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div> */}
                            </div>
                        </section>
                        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="w-full max-w-lg shadow-md rounded-lg p-6 text-white">
                                <h2 className="text-2xl font-bold text-white text-center mb-6">Get in Touch</h2>
                                <form method="POST" className="space-y-4" onSubmit={(event) => { handleSubmit(event); reset(); }}>
                                  <div className="flex space-x-4">
                                    <div className="w-1/2">
                                      <label htmlFor="firstName" className="block text-sm font-medium text-white-700">First Name</label>
                                      <input type="text" id="firstName" name="firstName" onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div className="w-1/2">
                                      <label htmlFor="lastName" className="block text-sm font-medium text-white-700">Last Name</label>
                                      <input type="text" id="lastName" name="lastName" onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                  </div>
                                  <div>
                                    <label htmlFor="email" className="text-sm font-medium text-white-700">Email Address</label>
                                    <svg className="inline-block w-2 h-2 -translate-x-1/3 -translate-y-full text-red-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                    </svg>
                                    <input required type="email" id="email" name="email" onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500" />
                                  </div>
                                  <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white-700">Message</label>
                                    <textarea id="message" name="message" rows="4" onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                                  </div>
                                  <div className="text-center">
                                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={isSubmitting}>
                                      {isSubmitting ? 'Submitting...' : 'Send Message'}
                                    </button>
                                  </div>
                                </form>
                              </div>
                        </section>
                                  
                        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                            <p>
                                Loosely designed in 
                                <a href="https://www.figma.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Figma (opens in a new tab)"> Figma </a>
                                and coded in 
                                <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)"> Visual Studio Code </a>
                                by yours truly. Built with 
                                <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in a new tab)"> Next.js </a>
                                and 
                                <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)"> Tailwind CSS </a>
                                , deployed with 
                                <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Vercel (opens in a new tab)"> Vercel </a>
                                . All text is set in the 
                                <a href="https://rsms.me/inter/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Inter (opens in a new tab)"> Inter </a>
                                typeface.
                            </p>
                        </footer>

                    </main>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>

  );
}
