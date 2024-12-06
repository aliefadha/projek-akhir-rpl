import Button from "../components/Button";
import Input from "../components/Input/Index";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
          <h1 className="font-bold text-white text-2xl mb-4">LENTERA MINANG</h1>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login sebagai Admin
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <Input
                  htmlfor="username"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Masukkan username anda"
                >
                  Username
                </Input>
                <Input
                  htmlfor="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                >
                  Password
                </Input>
                <Button width="w-full">Login</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
