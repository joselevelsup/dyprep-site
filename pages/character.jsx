import Head from "next/head";
import Collapsible from "react-collapsible";
import characterContent from "../content/character.json";

export default function character(){
	return (
		<>
			<Head>
				<title>DYPrep - Character</title>
			</Head>
			<div className="character-container">
				<div className="words mb-5">
					<h2 className="lg:text-3xl sm:text-2xl underline text-center">At DYP, we strive to embrace the 6 components of Character:</h2>
					<br />
					<div className="mx-auto">
						<div className="grid lg:grid-cols-2 lg:gap-2 sm:grid-cols-1 sm:gap-3">
							{
								characterContent.words.map(word => (
									<Collapsible 
										className="bg-blue-dark text-center rounded sm:p-2" 
										openedClassName="bg-blue-light text-center rounded sm:p-2" 
										triggerClassName="wordTitle" 
										triggerOpenedClassName="wordTitle" 
										contentInnerClassName="p-3 text-left" 
										trigger={word.word}
									>
										{word.definition}
									</Collapsible>
								))
							}
						</div>
					</div>
				</div>
				
				<div className="traits mt-5">
					<h4 className="lg:text-2xl sm:text-xl sm:text-center">
						In order to embrace our components of Character, DYP offers various programs and resources that allow students a chance to experience and pass these traits forward:
					</h4>
					<div className="mx-auto">
						<div className="grid lg:grid-cols-2 lg:gap-2 sm:grid-cols-1 sm:gap-3 ">
							{
								characterContent.traits.map(trait => (
									<Collapsible 
										className="bg-blue-dark text-center rounded sm:p-2" 
										openedClassName="bg-blue-light text-center rounded sm:p-2" 
										triggerClassName="wordTitle" 
										triggerOpenedClassName="wordTitle" 
										contentInnerClassName="p-3 text-left" 
										trigger={trait}
										triggerDisabled={true}
									/>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
