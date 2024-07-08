import { Call, Email, LinkedIn, WhatsApp } from "@mui/icons-material";

export default function SocialLinks() {
    return <div className="SocialLinks">
        <a href="tel:0584006014" target="_self"><Call /></a>
        <a href="mailto: zoharerel@gmail.com" target="_self"><Email /> zoharerel@gmail.com</a>
        <a href="https://www.linkedin.com/in/erel-zohar-0a15b6216" target="blank"><LinkedIn /></a>
        <a href="https://wa.me/972584006014" target="blank"><WhatsApp /></a>
    </div>
}