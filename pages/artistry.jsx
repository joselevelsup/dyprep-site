import React, { useState } from "react";
import Head from "next/head";
import FsLightbox from "fslightbox-react";
import Flickity from "react-flickity-component";

export default function artistry(){
	const [ galleryOne, toggleGalleryOne ] = useState(false);
	const [ galleryTwo, toggleGalleryTwo ] = useState(false);
	const [ galleryThree, toggleGalleryThree ] = useState(false);
	const [ galleryFour, toggleGalleryFour ] = useState(false);
	const [ galleryFive, toggleGalleryFive ] = useState(false);

	const [ galleryOneIndex, setGalleryOneIndex ] = useState(0);
	const [ galleryTwoIndex, setGalleryTwoIndex ] = useState(0);
	const [ galleryThreeIndex, setGalleryThreeIndex ] = useState(0);
	const [ galleryFourIndex, setGalleryFourIndex ] = useState(0);
	const [ galleryFiveIndex, setGalleryFiveIndex ] = useState(0);

	const toggleFirstGallery = (index = 0) => {
		setGalleryOneIndex(index);
		toggleGalleryOne(!galleryOne);
	}

	const flickityOpts = {
    autoPlay: 3000,
    wrapAround: true,
	}


	return (
		<>
			<Head>
				<title>DYPrep - Artistry</title>
				<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
			</Head>
			<div className="artistry-container">
				<FsLightbox 
					toggler={galleryOne}
					slide={galleryOneIndex}
					customSources={[
						<img src="https://placehold.it/500x500" />,
						<img src="https://placehold.it/700x500" />
					]}
				/>
				<FsLightbox 
					toggler={galleryTwo}
					sources={[
						"https://placehold.it/500x500",
						"https://placehold.it/500x500",
						"https://placehold.it/500x500"
					]}
				/>
				<FsLightbox 
					toggler={galleryThree}
					sources={[
						"https://placehold.it/500x500",
						"https://placehold.it/500x500",
						"https://placehold.it/500x500"
					]}
				/>
				<FsLightbox 
					toggler={galleryFour}
					sources={[
						"https://placehold.it/500x500",
						"https://placehold.it/500x500",
						"https://placehold.it/500x500"
					]}
				/>
				<FsLightbox 
					toggler={galleryFive}
					sources={[
						"https://placehold.it/500x500",
						"https://placehold.it/500x500",
						"https://placehold.it/500x500"
					]}
				/>
				<h3 className="text-2xl text-center">All of our Scholars will take classes in the following areas...</h3>
				<h5 className="text-xl text-center">One picture is worth a thousand words...</h5>
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mb-16">
					<div className="gallery sm:mb-8">
						<h4 className="text-2xl text-center underline">Visual Arts:</h4>
						<Flickity className="carousel">
							<div onClick={() => toggleFirstGallery(1)} className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
							<div onClick={() => toggleFirstGallery(2)} className="carousel-cell flex justify-center">
								<img src="https://placehold.it/700x500" />
							</div>
							<div className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
							<div className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
							<div className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
						</Flickity>
					</div>
					<div className="gallery">
						<h4 className="text-2xl text-center underline">Examples of our student's works:</h4>
						<Flickity options={flickityOpts} className="carousel">
							<div onClick={() => toggleGalleryTwo(!galleryTwo)} className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
							<div className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
							<div className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
							<div className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
							<div className="carousel-cell flex justify-center">
								<img src="https://placehold.it/500x500" />
							</div>
						</Flickity>
					</div>
				</div>
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-1 mb-16">
					<div className="gallery">
						<h4 className="text-2xl text-center underline">Dance:</h4>
						<div className="grid grid-cols-2 sm:gap-2 lg:gap-1 p-2">
							<div>
								<img src="https://placehold.it/500x500" />
							</div>
							<div>
								<img src="https://placehold.it/500x500" />
							</div>
							<div>
								<img src="https://placehold.it/500x500" />
							</div>
							<div>
								<img src="https://placehold.it/500x500" />
							</div>
						</div>
					</div>
					<div className="gallery">
						<h4 className="text-2xl text-center underline">Student Performance: </h4>
						<div className="grid grid-cols-2 sm:gap-2 lg:gap-1 p-2">
							<div>
								<img src="https://placehold.it/500x500" />
							</div>
							<div>
								<img src="https://placehold.it/500x500" />
							</div>
							<div>
								<img src="https://placehold.it/500x500" />
							</div>
							<div>
								<img src="https://placehold.it/500x500" />
							</div>
						</div>
					</div>
				</div>
				<div className="gallery">
					<h4 className="text-2xl text-center underline">Music and Theater </h4>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
						<div>
							<img src="https://placehold.it/500x500" />
						</div>
						<div>
							<img src="https://placehold.it/500x500" />
						</div>
						<div>
							<img src="https://placehold.it/500x500" />
						</div>
						<div>
							<img src="https://placehold.it/500x500" />
						</div>
					</div>
				</div>
				
			</div>
		</>
	)
}
