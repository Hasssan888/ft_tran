import AuthLayout from "@/components/auth/auth-layout"
import SignupForm from "@/components/auth/signup-form"
import AuthIllustration from "@/components/auth/auth-illustration"

export default function SignupPage() {
    return (
        <AuthLayout>
        <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-background via-background/80 to-primary/10">
            <AuthIllustration />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8">
            <SignupForm />
        </div>
        </AuthLayout>
    )
}
