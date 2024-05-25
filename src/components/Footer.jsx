import { DarkModeToggleButton } from "./DarkModeToggleButton";
import "../styles/footer.css"


export default function Footer(){

	return (
		<footer>
			<h6>Copyright 2024 ColourAcademy</h6>
			<a href="mailto:test@email.com">Email us!</a>

			<DarkModeToggleButton />
		</footer>
	)
}