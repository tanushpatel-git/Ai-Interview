import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { userLogin, createUser } from "../services/user.service";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function GamingAuthUI() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [formForCreateAccount, setFormForCreateAccount] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormForCreateAccount({ ...formForCreateAccount, [e.target.name]: e.target.value });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleValidation = () => {
        let errors = [];

        const { firstName, lastName, email, password } = formForCreateAccount;

        if (!email.trim()) {
            errors.push("Email is required");
        } else if (!emailRegex.test(email)) {
            errors.push("Invalid Email format");
        }

        if (!password.trim()) {
            errors.push("Password is required");
        } else if (!passwordRegex.test(password)) {
            errors.push(
                "Password must be 8+ chars, include uppercase, lowercase, number & special character"
            );
        }

        if (!isLogin) {
            if (!firstName.trim()) errors.push("First name is required");
            if (!lastName.trim()) errors.push("Last name is required");
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = handleValidation();

        if (errors.length > 0) {
            setError(errors.join(", "));
            return;
        }

        setError("");

        try {
            if (isLogin) {
                const response = await userLogin({
                    email: formForCreateAccount.email,
                    password: formForCreateAccount.password,
                });
                console.log(response);
                toast.success("Login successful");
                navigate("/");
            } else {
                const response = await createUser(formForCreateAccount);
                console.log(response);
                toast.success("Account created successfully");
                navigate("/");
            }

            // Reset form after success
            setFormForCreateAccount({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });

        } catch (err) {
            setError("Something went wrong. Try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-200 to-green-300 flex items-center justify-center p-6">
            <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl relative">

                <div className="grid md:grid-cols-2">

                    {/* FORM SECTION */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? "login-form" : "register-form"}
                            initial={{ x: isLogin ? -200 : 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: isLogin ? 200 : -200, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`p-10 flex flex-col justify-center bg-lime-300/80 backdrop-blur-xl ${isLogin ? "md:order-1" : "md:order-2"
                                }`}
                        >
                            {/* LOGO */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-lime-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    AI
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-green-900 leading-tight">AI Interview</h2>
                                    <p className="text-xs text-green-800">Smart Practice Platform</p>
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold text-green-900 mb-4">
                                {isLogin ? "SIGN IN" : "CREATE NEW ACCOUNT"}
                            </h1>

                            <p className="text-sm text-green-800 mb-6">
                                {isLogin
                                    ? "Don't have an account?"
                                    : "Already a member?"}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="ml-2 text-orange-600 font-semibold"
                                >
                                    {isLogin ? "Create Account" : "Sign In"}
                                </button>
                            </p>

                            <form className="space-y-4">
                                {!isLogin && (
                                    <div className="grid grid-cols-2 gap-3">
                                        <input type="text" onChange={handleChange} name="firstName" value={formForCreateAccount.firstName} placeholder="First Name" className="input" />
                                        <input type="text" onChange={handleChange} name="lastName" value={formForCreateAccount.lastName} placeholder="Last Name" className="input" />
                                    </div>
                                )}

                                <input onChange={handleChange} value={formForCreateAccount.email} name="email" type="email" placeholder="Email" className="input" />
                                <input onChange={handleChange} value={formForCreateAccount.password} name="password" type="password" placeholder="Password" className="input" />

                                <motion.button
                                    onClick={handleSubmit}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold shadow-lg"
                                >
                                    {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
                                </motion.button>
                                {/* ERROR HERE */}
                                {error && (
                                    <p className="text-red-600 text-sm mt-2">
                                        {error}
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    </AnimatePresence>

                    {/* IMAGE SECTION */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? "login-image" : "register-image"}
                            initial={{ x: isLogin ? 200 : -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: isLogin ? -200 : 200, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`hidden md:flex items-center justify-center bg-gradient-to-br from-green-400 to-lime-500 ${isLogin ? "md:order-2" : "md:order-1"
                                }`}
                        >
                            <motion.img
                                src={
                                    isLogin
                                        ? "https://i.pinimg.com/736x/0c/82/75/0c8275ba087ddfbee1c2eebb46ad5806.jpg"
                                        : "https://i.pinimg.com/736x/5f/4a/c0/5f4ac06e15593dd3ef60d492a43e565f.jpg"
                                }
                                alt="character"
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className={`${!isLogin ? "h-190 object-cover" : "h-170 object-cover"}`}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            <style>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.6);
          outline: none;
          border: 1px solid rgba(0,0,0,0.1);
        }
        .input:focus {
          border: 1px solid #16a34a;
          box-shadow: 0 0 0 2px rgba(34,197,94,0.3);
        }
      `}</style>
        </div>
    );
}
