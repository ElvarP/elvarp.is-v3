import Link from "next/link"

export default function Footer() {
	return (
		<footer className="bg-neutral-100 py-3 mt-24 border-t flex justify-center">
			<Link href="/">
				<a className="text-neutral-700 hover:underline">© elvarp.is</a>
			</Link>
		</footer>
	)
}
