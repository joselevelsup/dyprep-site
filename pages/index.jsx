import Head from 'next/head'
import Flickity from "react-flickity-component";
import HeroContainer from "../components/hero-container";

import styles from '../styles/Home.module.css'

export default function Home() {
  const flickityOpts = {
    autoPlay: 3000,
    wrapAround: true,
		pageDots: false
  }
  return (
    <>
      <Head>
        <title>DYPrep - Home</title>
				<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
      </Head>
      <div className="pb-5">
				<Flickity options={flickityOpts} className="carousel">
					<div>
						<img src="https://placehold.it/1920x1080"/>
						<div className={styles.imageBanner}>
							<h3>Hello world</h3>
							<p>this is a subtitle</p>
						</div>
					</div>
					<img src="https://placehold.it/1920x1080"/>
					<img src="https://placehold.it/1920x1080"/>
				</Flickity>
      </div>

      <HeroContainer
        heroClassName="scholarship"
        heroPicture="https://placehold.it/500x500"
        heroTitle="Scholarship"
        heroSubtitle="The commitment to the life-long acquisition of knowledge"
        heroBody="Students must be encouraged to see their high school education as part of a continuum of learning; providing a foundation in skills, concepts and behaviors that will last for their entire lives. We strive to make our students life-ready and curious about the world. . DY Prep will focus students on achieving desired academic outcomes by teaching a Common Core-Aligned Curriculum that fosters independent thinking."
        learnMore={{
          link: "/scholarship",
          text: "Learn about our process"
        }}
			>

      </HeroContainer>

      <HeroContainer
        flip={true}
        heroClassName="artistry"
        heroPicture="https://placehold.it/500x500"
        heroTitle="Artistry"
        heroSubtitle="The ability to consciously use the skill of creative imagination to achieve a goal"
        heroBody="Fluency in the arts will empower youth with the ability to understand and impact the world around them by developing essential critical thinking, creative problem solving and communication skills. The arts programming at DY Prep will also serve as an excellent foundation for arts-based and other compelling careers."
        learnMore={{
          link: "/artistry",
          text: "Learn more about our arts"
        }}
      >

      </HeroContainer>

    </>
  );
}
