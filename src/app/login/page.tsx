import LoginForm from "@/components/forms/users/Login"



const LoginPage = () => {
    return (
        <div className="container mx-auto mt-10 max-w-md">
            <h1 className="text-2xl font-bold mb-5 text-center">Login to Your Account</h1>
            <LoginForm/>
        </div>
    )
}

export default LoginPage