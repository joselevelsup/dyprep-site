import Link from "next/link";
import '../styles/globals.css'
import "react-responsive-modal/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

function MyApp({ Component, pageProps }) {
  return (
		<>
			<nav className="flex items-center justify-between flex-wrap p-3 bg-orange">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<img className="h-16" src="/dyp-logo.png" />
				</div>
				<div className="block xl:hidden lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto xl:flex xl:items-center xl:w-auto text-sm">
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
