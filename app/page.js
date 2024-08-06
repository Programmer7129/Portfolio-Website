"use client";

import Image from "next/image";
import Script from 'next/script'
import { useState } from 'react';

export default function Home() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
        console.log(result);
    }
  }

  function reset() {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  }


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
      <Script src="https://smtpjs.com/v3/smtp.js" />
      {/* <Script 
        function sendEmail(){
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
          }).then(
            message => alert(message)
        );
        }
      /> */}


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
                            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                                <a href="/">Vedant Patel</a>
                            </h1>
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
                                <a className="block hover:text-slate-200" target="_blank" href="https://github.com/Programmer7129" aria-label="GitHub" title="GitHub">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-5 text-xs shrink-0">
                                <a className="block hover:text-slate-200" target="_blank" href="https://www.linkedin.com/in/vedant-patel-44b30520b/" aria-label="GitHub" title="GitHub">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                    </svg>                              
                                </a>
                            </li>
                        </ul>
                    </header>
                    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About Me</h2>
                            </div>
                            <div>
                                <p>I'm a student at University of California Davis, studying Computer Science and Engineering. 
                                I am an aspiring engineer with a passion for tech and a knack for problem-solving. Experienced
                                in Artificial Intelligence, Machine Learning, Data Science, and Full-Stack development. 
                                Committed to innovation and community collaboration. Let's connect and create something 
                                extraordinary together.</p>

                            </div>
                        </section>
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
                                                            <span>Undergraduate Research Assistant</span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Achieved efficient binary classNameification of ECG signals with 92.8% accuracy by ensemble Random Forest classNameifier (TinyML) while significantly enhancing battery life through efficient low-power algorithms. 
                                                </p>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Employed advanced feature engineering and XGBoost ensemble modeling, achieving a remarkable 93.6% accuracy in predictive analysis through fine-tuning and strategic hyper-parameter optimization with GridSearchCV, enhancing the robustness of anomaly detection.
                                                </p>
                                                <p className="mt-2 text-sm leading-normal">
                                                    Optimized hyper-parameters in advanced ML models such as Multi-layer Perceptron, Deep Neural Network, and Recurrent Neural Network by implementing SHAP and LIME techniques, achieving a 7% increase in accuracy while minimizing performance overhead in constrained wearable device environments.
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
                                                            <span>ArtifIntel Pvt. Ltd.</span>
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

                            <div className="mt-12">
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
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
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
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
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://spotify-profile.herokuapp.com/" target="_blank" rel="noreferrer noopener" aria-label="Spotify Profile (opens in a new tab)">
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
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://halcyon-theme.netlify.app/" target="_blank" rel="noreferrer noopener" aria-label="Halcyon Theme (opens in a new tab)">
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
                                            {/* <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75"/> */}
                                        </div>
                                    </li>
                                    <li className="mb-12">
                                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <div className="z-10 sm:order-2 sm:col-span-6">
                                                <h3>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://v4.brittanychiang.com/" target="_blank" rel="noreferrer noopener" aria-label="brittanychiang.com (v4) (opens in a new tab)">
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
                                <form id="" action="your-email-endpoint" method="POST" className="space-y-4" onSubmit={(event) => { handleSubmit(event); reset(); }}>
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
                                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      Send Message
                                    </button>
                                  </div>
                                </form>
                              </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>

  );
}
