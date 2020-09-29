import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import '../styles/globals.css'
import "react-responsive-modal/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

function MyApp({ Component, pageProps }) {
	const [ isOpen, toggleMenu ] = useState(false);
	const router = useRouter();
	useEffect(() => {
    const handleRouteChange = (url) => {
			toggleMenu(false);
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
		<>
			<nav className="flex items-center justify-between flex-wrap p-3 bg-orange">
				<Link href="/">
					<div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
						<img className="h-16" src="/dyp-logo.png" />
					</div>
				</Link>
				<div className="block xl:hidden lg:hidden">
					<button onClick={() => toggleMenu(!isOpen)} className="flex items-center px-3 py-2 outline-none text-blue-dark">
						<svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
				<div className={`w-full ${isOpen ? "block" : "hidden"} flex-grow lg:flex lg:items-center lg:w-auto xl:flex xl:items-center xl:w-auto text-sm`}>
					<div className="lg:flex-grow xl:flex-grow">
            <Link href="/scholarship">
							<a className="block mt-4 text-blue-dark hover:text-blue-light lg:inline-block lg:mt-0 xl:inline-block xl:mt-0 mr-4 uppercase">
								scholarship
							</a>
            </Link>
            <Link href="/artistry">
							<a className="block mt-4 text-blue-dark hover:text-blue-light lg:inline-block lg:mt-0 xl:inline-block xl:mt-0 mr-4 uppercase">
								artistry
							</a>
            </Link>
            <Link href="/character">
							<a className="text block mt-4 text-blue-dark hover:text-blue-light lg:inline-block lg:mt-0 xl:inline-block xl:mt-0 uppercase">
								character
							</a>
            </Link>
					</div>
					<div className="lg:flex-grow-1 xl:flex-grow-1">
						<Link href="/staff">
							<a className="text block mt-4 text-blue-dark hover:text-blue-light lg:inline-block lg:mt-0 xl:inline-block xl:mt-0 lg:mr-3 xl:mr-3 uppercase">
								staff
							</a>
						</Link>
						<Link href="/calendar">
							<a className="text block mt-4 text-blue-dark hover:text-blue-light lg:inline-block lg:mt-0 xl:inline-block xl:mt-0 uppercase">
								calendar
							</a>
						</Link>
					</div>
				</div>
			</nav>
			<Component {...pageProps} />
      <footer>
				<div className="flex justify-center">
          <div className="pt-3 pb-3">
            <span>© 2020 by Dreamyard Preparatory School</span>
          </div>
				</div>
      </footer>
		</>
	)
}

export default MyApp
