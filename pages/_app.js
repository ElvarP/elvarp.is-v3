import "../styles/global.css"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function App({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
