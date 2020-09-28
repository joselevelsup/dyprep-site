import React from "react";
import Link from "next/link";

export default ({ heroClassName, heroTitle, heroSubtitle, heroPicture, heroBody, flip = false, children, learnMore}) => (
  <div className={`${heroClassName} container mx-auto`}>
		<div className="heroContainer">
			<h2 className="text-4xl text-center">
				{heroTitle}
			</h2>
			<h4 className="text-2xl text-center">
				{heroSubtitle}
			</h4>
			<div className="lg:grid lg:grid-cols-2 lg:gap-4 pt-3 sm:px-3">
				<div className={`mx-auto sm:pb-3 ${flip ? "order-last" : "order-first"}`}>
					<img src={heroPicture}/>
				</div>
				<div className="info m-auto">
					{heroBody &&
						<>
							{heroBody}
							<br />
							<div className="w-full sm:flex sm:justify-center mt-2">
								<Link href={learnMore.link}>
									<button className="bg-blue-dark text-white p-2 rounded hover:text-orange">{learnMore.text}</button>
								</Link>
							</div>
						</>
					}
				</div>
			</div>
		</div>
	</div>
);
