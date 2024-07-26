import LoginForm from "../../Layouts/LoginLayouts/LoginForm/LoginForm";
import LoginHeader from '../../Layouts/LoginLayouts/LoginHeader/LoginHeader'

export default function LoginPage() {
    return (
        <div className="bg-white h-screen w-full flex flex-col">
            <header className="h-[8vh]">
                <LoginHeader />
            </header>
            <main
                className="h-[92vh] w-full flex items-center justify-center">
                <LoginForm />
            </main>
        </div>
    )
}
