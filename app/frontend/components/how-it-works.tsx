import { ArrowRight } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Create your account",
        description: "Sign up in seconds and personalize your gaming profile.",
    },
    {
        number: "02",
        title: "Play your first match",
        description: "Jump into a real-time match and experience competitive play.",
    },
    {
        number: "03",
        title: "Join tournaments & climb ranks",
        description: "Compete in tournaments and rise through the global rankings.",
    },
]

export default function HowItWorks() {
    return (
        <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">How It Works</h2>
            <p className="text-muted-foreground text-lg">Get started in three simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
                <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-foreground">
                    {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 -mx-4">
                    <ArrowRight className="absolute -right-2 -top-1.5 text-primary" size={20} />
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}
