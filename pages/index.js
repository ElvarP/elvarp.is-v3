import Head from "next/head"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/Date"
import BlogList from "../components/BlogList"
import Portfolio from "../components/Portfolio"
import ContactForm from "../components/ContactForm"
export default function Home({ allPostsData }) {
	return (
		<>
			<Head>
				<title>ElvarP</title>
			</Head>
			<BlogList allPostsData={allPostsData} howManyBlogPostsToShow="2" />
			<Portfolio />
			<ContactForm />
		</>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()

	return {
		props: {
			allPostsData,
		},
	}
}
