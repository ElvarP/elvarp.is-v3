import { getSortedPostsData } from "../lib/posts"
import Head from "next/head"
import BlogList from "../components/BlogList"
export default function Blog({ allPostsData }) {
	return (
		<>
			<Head>
				<title>This is my blog</title>
			</Head>
			<BlogList allPostsData={allPostsData} />
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
