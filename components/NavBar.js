import Link from "next/link"

export default function NavBar() {
	return (
		<nav className="bg-neutral-200 	">
			<ul className="bg-blue-500  max-w-xl mx-auto flex flex-row justify-around  px-4 shadow-2xl	rounded-b-full ">
				<li>
					<Link href="/">
						<a className="text-white inline-block p-2 hover:text-blue-200 active:text-blue-300">
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link href="/#about">
						<a className="text-white inline-block p-2 hover:text-blue-200 active:text-blue-300">
							About
						</a>
					</Link>
				</li>
				<li>
					<Link href="/#blog">
						<a className="text-white inline-block p-2 hover:text-blue-200 active:text-blue-300">
							Blog
						</a>
					</Link>
				</li>
				<li>
					<Link href="/#portfolio">
						<a className="text-white inline-block p-2 hover:text-blue-200 active:text-blue-300">
							Portfolio
						</a>
					</Link>
				</li>
				<li>
					<Link href="/#contact">
						<a className="text-white inline-block p-2 hover:text-blue-200 active:text-blue-300">
							Contact
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
