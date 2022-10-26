import Head from "next/head"
import Link from "next/link"
import Date from "./../components/Date"
import Image from "next/image"
import ProfilePicture from "/public/images/avatar.svg"
import Card from "./Card"

export default function BlogList({ allPostsData, howManyBlogPostsToShow }) {
	if (howManyBlogPostsToShow) allPostsData = allPostsData.slice(0, howManyBlogPostsToShow)
	console.log(allPostsData)
	return (
		<>
			<div className="max-w-xl mx-auto px-4 md:px-0">
				<Card>
					<div
						id="about"
						className="my-4 bg-blue-50 px-6 py-6 md:py-2 flex items-center ">
						<Image src={ProfilePicture} width="128" height="160" alt="ElvarP" />
						<div className="ml-4 ">
							<h1>
								<strong className="uppercase">Elvar Pétur Indriðason</strong>
							</h1>
							<p>
								I'm just a guy that codes and sometimes write about it. Here's a
								sample of my posts
							</p>
						</div>
					</div>
				</Card>

				<ul id="blog" className="">
					{allPostsData.map(({ id, date, title, subtitle }) => (
						<li className="" key={id}>
							<Card>
								<div className="flex flex-col mb-4 gap-1 p-4 capitalize">
									<small className="leading-3 text-neutral-600	">
										<Date dateString={date} />
									</small>
									<Link href={`/posts/${id}`}>
										<a className=" no-underline hover:underline text-lg">
											{title}
										</a>
									</Link>
									<p className="text-neutral-800	">{subtitle}</p>
									<Link href={`/posts/${id}`}>
										<a className="text-blue-700 no-underline hover:underline ">
											Read
										</a>
									</Link>
								</div>
							</Card>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
