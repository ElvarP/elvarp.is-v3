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
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto p-4 lg:px-0">
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
								<Link href={project.openLink}>
									<a className="flex flex-1 justify-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-4 rounded-b-lg">
										Open
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
// import { portfolio } from "../portfolio-data"
// import Image from "next/future/image"
// import Link from "next/link"
// import Card from "./Card"

// export default function Portfolio() {
// 	return (
// 		<>
// 			<div id="portfolio" className="mt-20 text-center ">
// 				<h1 className="text-3xl">Portfolio</h1>
// 			</div>
// 			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto p-4 lg:px-0">
// 				{portfolio.map((project) => (
// 					<div className="portfolio-item-wrapper ">
// 						<Card key={project.title}>
// 							<div className="project-image">
// 								<Image
// 									src={project.image}
// 									alt={project.title}
// 									width="1500"
// 									height="1500"
// 									className="rounded-t-lg"
// 								/>
// 							</div>
// 							<div className="project-info border-b  px-6 py-4">
// 								<h1 className="text-xl">{project.title}</h1>
// 								<p className="text-neutral-700">{project.subtitle}</p>
// 							</div>
// 							<div className="project-description  px-6 py-4">
// 								<p className=" text-neutral-700 ">{project.description}</p>
// 							</div>

// 							<div className="project-actions flex justify-around  border-t ">
// 								<Link href={project.infoLink}>
// 									<a className="flex flex-1 justify-center bg-blue-100 hover:bg-blue-200 active:bg-blue-300 border-r py-4 rounded-bl-lg">
// 										Info
// 									</a>
// 								</Link>
// 								<Link href={project.previewLink}>
// 									<a className="flex flex-1 justify-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-4 rounded-br-lg">
// 										Preview
// 									</a>
// 								</Link>
// 							</div>
// 						</Card>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	)
// }
