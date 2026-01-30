import { Github, MessageCircle, Linkedin } from "lucide-react"

const footerSections = [
    {
        title: "Product",
        links: ["Features", "Pricing", "Security", "Blog"],
    },
    {
        title: "Community",
        links: ["Forum", "Discord", "Tournaments", "Players"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Press", "Contact"],
    },
]

export default function Footer() {
    return (
        <footer className="bg-card/50 border-t border-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Branding */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm">
                    🏓
                </div>
                <span className="font-bold text-foreground">PingPong Arena</span>
                </div>
                <p className="text-muted-foreground text-sm">The ultimate competitive ping pong platform.</p>
            </div>

            {/* Links */}
            {footerSections.map((section) => (
                <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-foreground">{section.title}</h4>
                <ul className="space-y-2">
                    {section.links.map((link) => (
                    <li key={link}>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {link}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>

            {/* Divider */}
            <div className="border-t border-primary/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-sm">© 2025 PingPong Arena. All rights reserved.</p>

                {/* Social Links */}
                <div className="flex gap-4">
                <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
                >
                    <Github size={20} className="text-foreground" />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
                >
                    <MessageCircle size={20} className="text-foreground" />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
                >
                    <Linkedin size={20} className="text-foreground" />
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
}
