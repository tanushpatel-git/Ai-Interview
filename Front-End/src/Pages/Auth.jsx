import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import {useEffect, useState} from "react";
import {provider,auth} from "../utils/firebase.js";
import {signInWithPopup} from 'firebase/auth'


export default function Auth() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        window.document.title = "Ai Interview - Auth (By Tanush)";
    },[])

    const handleGoogleAuth = async () => {
        try{
            const response = await signInWithPopup(auth,provider);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div
            className={`min-h-screen flex items-center justify-center p-6 overflow-hidden transition-all duration-500 ${
                dark ? "bg-black" : "bg-gray-100"
            }`}
        >
            {/* Background Glow */}
            <div
                className={`absolute inset-0 transition-all duration-500 ${
                    dark
                        ? "bg-[radial-gradient(circle_at_top,_#1f2937,_#000)] opacity-80"
                        : "bg-[radial-gradient(circle_at_top,_#e5e7eb,_#ffffff)] opacity-100"
                }`}
            />

            {/* Theme Toggle */}
            <button
                onClick={() => setDark(!dark)}
                className={`absolute top-6 hover:scale-[1.1] cursor-pointer transition-all duration-75 right-6 px-4 py-2 rounded-xl text-sm font-medium ${dark ? "bg-white/10 text-white backdrop-blur border border-white/20" : "bg-black/10 text-black backdrop-blur border border-black/20`"}`}
            >
                Toggle Theme
            </button>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative max-w-2xl w-full backdrop-blur-2xl border rounded-3xl shadow-2xl p-10 text-center transition-all duration-500 ${
                    dark
                        ? "bg-white/5 border-white/10 text-white"
                        : "bg-white border-gray-200 text-black"
                }`}
            >
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${
                        dark ? "from-white to-gray-400" : "from-black to-gray-500"
                    }`}
                >
                    Crack Your Next Interview 🚀
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`text-lg mb-8 leading-relaxed max-w-xl mx-auto ${
                        dark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    Practice real interview questions, track your growth, and get
                    AI-powered insights to level up faster. Built to simulate real
                    interview pressure so you walk in confident.
                </motion.p>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
                >
                    {["Real Questions", "AI Feedback", "Track Progress"].map(
                        (item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, scale: 1.03 }}
                                className={`p-4 rounded-xl border transition ${
                                    dark
                                        ? "bg-white/5 border-white/10 hover:border-white/20"
                                        : "bg-gray-50 border-gray-200 hover:border-gray-300"
                                }`}
                            >
                                <p className="font-medium">{item}</p>
                            </motion.div>
                        )
                    )}
                </motion.div>

                {/* Google Login Button */}
                <motion.button
                    onClick={handleGoogleAuth}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative w-full flex hover:scale-[1.1] cursor-pointer duration-75 items-center justify-center gap-3 text-lg py-4 rounded-2xl font-semibold overflow-hidden group transition ${
                        dark
                            ? "bg-white text-black"
                            : "bg-black text-white"
                    }`}
                >
          <span className="relative flex items-center gap-3">
            <FcGoogle size={24} />
            Continue with Google
          </span>
                </motion.button>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className={`text-sm mt-6 ${
                        dark ? "text-gray-500" : "text-gray-400"
                    }`}
                >
                    No spam. No clutter. Just results.
                </motion.p>
            </motion.div>
        </div>
    );
}
