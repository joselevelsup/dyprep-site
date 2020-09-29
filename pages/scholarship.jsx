import Head from "next/head";
import Emoji from "../components/emoji";

export default function scholarship(){
	return (
		<>
			<Head>
				<title>DYPrep - Scholarship</title>
			</Head>
			<div className="scholarship-container">
				<h2 className="text-3xl text-center">
					All of our Scholars <Emoji symbol="📖" /> will take classes in the following areas:
				</h2>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-1 mt-3">
					<div className="core-subjects mx-auto">
						<h3 className="text-2xl text-center"> Sciences, Technology, Mathematics</h3>
						<div className="grid grid-cols-3 gaps-1">
							<div>
								<p className="text-xl underline">Sciences</p>
								<ul>
									<li>Biology</li>
									<li>Chemistry</li>
									<li>Anatomy</li>
									<li>Earth Science</li>
								</ul>
							</div>
							<div>
								<p className="text-xl underline">Mathematics</p>
								<ul>
									<li>Integrated Algebra</li>
									<li>Analytical Geometry</li>
									<li>Trigonometry</li>
								</ul>
							</div>
							<div>
								<p className="text-xl underline">Technology</p>
								<ul>
									<li>Digital Media</li>
									<li>Introduction to Digital Learning</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="majors">
						<h3 className="text-2xl text-center">Marjors offered in:</h3>
						<ul className="text-center">
							<li>Visual Arts</li>
							<li>Theater</li>
							<li>Dance</li>
							<li>Musical Theater</li>
						</ul>
					</div>
				</div>
				<div className="mt-3 sm:w-full md:w-2/3 lg:w-2/3">
					<div>
						<h3 className="text-2xl text-center">Humanities in the Arts</h3>
						<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-1 md:gap-2 lg:gap-3">
							<div>
								<p className="text-xl underline">English Language Arts</p>
								<ul>
									<li>
										First Year: ELA 1 & 2
									</li>
									<li>
										Second Year: ELA 3 & 4
									</li>
									<li>
										Third Year: ELA 5 & 6
									</li>
									<li>
										Fourth Year: ELA 7 & 8
									</li>
								</ul>
								<br />
								<p>Offered: </p>
								<ul>
									<li>
										AP English Literature
									</li>
									<li>
										AP English Language
									</li>
								</ul>
							</div>
							<div>
								<p className="text-xl underline">The Arts</p>
								<ul>
									<li>
										Visual Arts
									</li>
									<li>
										Theater
									</li>
									<li>
										Dance
									</li>
									<li>
										Musical Theater
									</li>
									<li>
										Music
									</li>
									<li>
										Digital Media Arts
									</li>
								</ul>
							</div>
							<div>
								<p className="text-xl underline">Social Studies</p>
								<ul>
									<li>
										First Year: Global History 1 & 2
									</li>
									<li>
										Second Year: Global History 3 & 4
									</li>
									<li>
										Third Year: American History 1 & 2
									</li>
									<li>
										Fourth Year: Participation in Government
									</li>
									<li>
										Economics
									</li>
								</ul>
								<br />
								<p>Offered: </p>
								<ul>
									<li>
										AP American History
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
