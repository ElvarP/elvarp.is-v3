export default function Card({ className, children }) {
	return (
		<div className="bg-white rounded-lg shadow-lg  outline outline-1 outline-neutral-300">
			{children}
		</div>
	)
}
