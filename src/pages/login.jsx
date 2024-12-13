import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginData from "../login.json";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk toggle password visibility
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validasi username dan password
    if (username === loginData.username && password === loginData.password) {
      alert("Login berhasil!");
      // Redirect ke halaman dashboard admin
      navigate("/dashboard");
    } else {
      setError("Username atau password salah.");
    }
  };

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
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <Input
                  htmlfor="username"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Masukkan username anda"
                  value={username} // Nilai diambil dari state
                  onChange={(e) => setUsername(e.target.value)} // Memperbarui state
                >
                  Username
                </Input>

                <div className="relative">
                  <Input
                    htmlfor="password"
                    type={showPassword ? "text" : "password"} // Tipe berubah berdasarkan state
                    name="password"
                    id="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                    Password
                  </Input>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle state
                    className="absolute top-1/2 translate-y-1/2 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-300"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button width="w-full" type="submit">
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
