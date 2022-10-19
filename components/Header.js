import ProfilePicture from "/public/images/avatar-transparent.svg"
import Image from "next/future/image"
import Link from "next/link"
import Card from "./Card"
const css = `
.bubble:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 16px solid #d4d4d4;
  border-bottom: 16px solid transparent;
  right: 47%;
  bottom: -20%;
}

.bubble:after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 16px solid #fff;
  border-bottom: 16px solid transparent;
  right: 47%;
  bottom: -19%;
}
@media (min-width: 768px) {

.bubble:after
{
content: '';
position: absolute;
border-width: 1px 20px 16px 0;
border-color: transparent #FFFFFF;
z-index: 1;
left: -6%;
top: 50%;
}

.bubble:before
{
content: '';
position: absolute;
border-width: 1px 21px 17px 0;
border-color: transparent #d4d4d4;
z-index: 0;
left: -7%;
top: 49.5%;
}
}
`
export default function Header() {
	return (
		<>
			<style>{css}</style>
			<header className=" bg-neutral-200">
				<div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2">
					<div className="hero-image flex justify-center">
						<Image priority src={ProfilePicture} alt="ElvarP" className="	" />
					</div>
					<div className="order-first md:order-none flex items-center mt-8 mx-4 md:mx-0">
						<Card>
							<div className="bubble p-6 md:p-4 relative">
								<p class="text-neutral-800">
									Hello, my screen name is <b>ElvarP.</b> Based in{" "}
									<b>Reykjavík, Iceland.</b> Looking for <b>work.</b>
								</p>
								<div className="bubble-action mt-4 flex justify-center  flex-1">
									<Link href="/#blog">
										<a className="flex flex-1 justify-center items-center border border-neutral-400 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 rounded-lg p-2  m-1">
											Read my blog
										</a>
									</Link>
									<Link href="/#contact">
										<a className="flex flex-1 justify-center items-center  text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg p-2 m-1">
											Contact me
										</a>
									</Link>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</header>
		</>
	)
}

// const css = `
// .bubble:after
// {
// content: '';
// position: absolute;
// border-width: 1px 20px 16px 0;
// border-color: transparent #FFFFFF;
// z-index: 1;
// left: -6%;
// top: 64%;
// }

// .bubble:before
// {
// content: '';
// position: absolute;
// border-width: 1px 21px 17px 0;
// border-color: transparent #d4d4d4;
// z-index: 0;
// left: -7%;
// top: 63.5%;
// }
// `
