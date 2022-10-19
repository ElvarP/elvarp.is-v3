import Card from "./Card"

export default function ContactForm() {
	return (
		<>
			<div id="contact" className="max-w-lg mx-auto">
				<Card>
					<div className="p-4  my-4">
						<h1 className="text-3xl text-center my-4">Contact</h1>
						<p className="text-neutral-800 mb-8">
							You can contact me here. I will get back to you as soon as possible.
						</p>
						<form
							className="flex flex-col gap-4"
							action="https://formspree.io/f/mwkznnrp"
							method="POST">
							<div className="flex flex-col">
								<label className="text-blue-600" htmlFor="name">
									Name
								</label>
								<input
									className="bg-neutral-100 border rounded-md p-2 my-3"
									type="text"
									name="name"
									id="name"
									placeholder="John Doe"
									required
								/>
							</div>
							<div className="flex flex-col">
								<label className="text-blue-600" htmlFor="email">
									Email
								</label>
								<input
									className="bg-neutral-100 border rounded-md p-2 my-3"
									type="email"
									name="email"
									id="email"
									placeholder="johndoe@something.com"
									required
								/>
							</div>
							<div className="flex flex-col">
								<label className="text-blue-600" htmlFor="message">
									Message
								</label>
								<textarea
									className="bg-neutral-100 border rounded-md p-2 my-3"
									name="message"
									id="message"
									rows="3"
									placeholder="Your message here"
									required
								/>
							</div>
							<button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 p-4 text-white uppercase rounded-lg">
								Submit
							</button>
						</form>
					</div>
				</Card>
			</div>
		</>
	)
}
