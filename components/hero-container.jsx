import React from "react";
import Link from "next/link";

export default ({ heroClassName, heroTitle, heroSubtitle, heroPicture, heroBody, flip = false, children, learnMore }) => (
  <div className={`${heroClassName} container mx-auto`}>
		<div className="pt-5">
			<h2 className="text-4xl text-center">
				{heroTitle}
			</h2>
			<h4 className="text-2xl text-center">
				{heroSubtitle}
			</h4>
			<div className="grid grid-cols-2 gap-4 pt-3">
        {
        flip ?
					<>
						<div className="info mt-auto mb-auto">
							{heroBody}
						</div>
						<div>
							<img src={heroPicture}/>
						</div>
          </>
          :
					<>
						<div>
							<img src={heroPicture}/>
						</div>
						<div className="info mt-auto mb-auto">
							{heroBody}
              <br />
							<Link href={learnMore.link}>
								<a className="text-blue-dark hover:text-blue-light">{learnMore.text}</a>
							</Link>
						</div>
          </>
        }
			</div>
      {children}
		</div>
	</div>
);
