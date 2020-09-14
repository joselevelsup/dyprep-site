import Link from "next/link";
import '../styles/globals.css'
import "react-big-calendar/lib/css/react-big-calendar.css";

function MyApp({ Component, pageProps }) {
  return (
		<>
			<nav className="flex items-center justify-between flex-wrap p-6 bg-orange">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
				</div>
				<div className="block md:hidden lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
				<div className="w-full block flex-grow md:flex md:items-center md:w-auto text-sm">
					<div className="md:flex-grow">
            <Link href="/scholarship">
							<a className="block mt-4 text-blue-dark hover:text-blue-light md:inline-block md:mt-0 mr-4 uppercase">
								scholarship
							</a>
            </Link>
            <Link href="/artistry">
							<a className="block mt-4 text-blue-dark hover:text-blue-light md:inline-block md:mt-0 mr-4 uppercase">
								artistry
							</a>
            </Link>
            <Link href="/character">
							<a className="text block mt-4 text-blue-dark hover:text-blue-light md:inline-block md:mt-0 uppercase">
								character
							</a>
            </Link>
					</div>
					<div className="md:flex-grow-1">
						<Link href="/calendar">
							<a className="text block mt-4 text-blue-dark hover:text-blue-light md:inline-block md:mt-0 uppercase">
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
