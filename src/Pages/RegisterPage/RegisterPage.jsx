import RegisterForm from "../../Layouts/RegisterLayout/RegisterForm/RegisterForm";
import RegisterHeader from "../../Layouts/RegisterLayout/RegisterHeader/RegisterHeader";

export default function RegisterPage () {
  return (
    <div className="bg-white h-screen w-full flex flex-col">
        <header className="h-[8vh]">
          <RegisterHeader />
        </header>
        <main
          className="h-[92vh] w-full flex flex-wrap items-center justify-center">
          <RegisterForm />
        </main>
    </div>
)
}
