import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import Date from "../../components/Date"
import Card from "../../components/Card"

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	// Add the "await" keyword like this:
	const postData = await getPostData(params.id)

	return {
		props: {
			postData,
		},
	}
}

export default function Post({ postData }) {
	return (
		<>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<main className="max-w-xl mx-auto border rounded-lg shadow-lg my-4">
				<Card>
					<article className="prose p-4 ">
						<div className="">
							<Date dateString={postData.date} />
						</div>
						<h1 className="mb-0">{postData.title}</h1>
						<h4 className="mt-2 text-neutral-500">{postData.subtitle}</h4>

						<div
							className="  "
							dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
						/>
					</article>
				</Card>
			</main>
		</>
	)
}
