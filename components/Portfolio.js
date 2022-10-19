import { portfolio } from "../portfolio-data"
import Image from "next/future/image"
import Link from "next/link"
import Card from "./Card"

export default function Portfolio() {
	return (
		<>
			<div id="portfolio" className="mt-20 text-center ">
				<h1 className="text-3xl">Portfolio</h1>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto p-4 lg:px-0">
				{portfolio.map((project) => (
					<div className="portfolio-item-wrapper ">
						<Card key={project.title}>
							<div className="project-image">
								<Image
									src={project.image}
									alt={project.title}
									width="1500"
									height="1500"
									className="rounded-t-lg"
								/>
							</div>
							<div className="project-info border-b  px-6 py-4">
								<h1 className="text-xl">{project.title}</h1>
								<p className="text-neutral-700">{project.subtitle}</p>
							</div>
							<div className="project-description  px-6 py-4">
								<p className=" text-neutral-700 ">{project.description}</p>
							</div>

							<div className="project-actions flex justify-around  border-t ">
								<Link href={project.infoLink}>
									<a className="flex flex-1 justify-center bg-blue-100 hover:bg-blue-200 active:bg-blue-300 border-r py-4 rounded-bl-lg">
										Info
									</a>
								</Link>
								<Link href={project.previewLink}>
									<a className="flex flex-1 justify-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-4 rounded-br-lg">
										Preview
									</a>
								</Link>
							</div>
						</Card>
					</div>
				))}
			</div>
		</>
	)
}
// } Backup because i'm high and i don't know what i'm doing
// import { portfolio } from "../portfolio-data"
// import Image from "next/future/image"
// import Link from "next/link"

// export default function Portfolio() {
// 	return (
// 		<>
// 			<div className="my-24">
// 				<h1>Portfolio</h1>
// 				<p>Here you can see my portfolio</p>
// 			</div>
// 			<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
// 				{portfolio.map((project) => (
// 					<div
// 						key={project.title}
// 						className="project card   shadow-md	rounded-md outline-black">
// 						<div className="project-title flex justify-between rounded-t-md bg-blue-500  text-white border-b border-blue-800">
// 							<h1 className="p-2">{project.title}</h1>
// 							<Link href="/">
// 								<a className="border-l self-center">
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										strokeWidth="1"
// 										stroke="currentColor"
// 										className="w-8 h-8">
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
// 										/>
// 									</svg>
// 								</a>
// 							</Link>
// 						</div>
// 						<div className="project-image  relative">
// 							<Image
// 								src={project.image}
// 								alt={project.title}
// 								width="1500"
// 								height="1500"
// 							/>
// 						</div>
// 						<div className="project-info rounded-b-md border-t p-2 border-blue-800 flex justify-between">
// 							<h1 className="bg-blue-100 text-black rounded-md px-2 py-1">Info</h1>
// 							<Link href={project.link}>
// 								<a className="bg-blue-600 text-white rounded-md px-2 py-1">
// 									Preview
// 								</a>
// 							</Link>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	)
// }
