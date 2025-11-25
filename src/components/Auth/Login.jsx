import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmiHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(`Email is:${email}`);
    console.log(`And password is:${password}`);
  };

  return (
<div className="min-h-screen w-full bg-linear-to-br from-black via-slate-900 to-emerald-900 flex items-center justify-center px-4">

      <div className=" border border-emerald-500/60 rounded-2xl bg-black/60 backdrop-blur-xl shadow-2xl max-w-md w-full p-8
  
  transition-all duration-500
  hover:shadow-emerald-500/40
  hover:-translate-y-1
  hover:scale-[1.02]
">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-emerald-400 tracking-tight">
            Employee Management
          </h1>
          <p className="text-sm text-emerald-100/70 mt-2">
            Log in to access your dashboard
          </p>
        </div>

        <form
          onSubmit={(e) => {
            onSubmiHandler(e);
          }}
          className="flex flex-col gap-6"
        >
          {/* Email */}
          <div className="w-full">
            <label className="block text-xs font-medium text-emerald-100 mb-2 tracking-wide">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="w-full rounded-full border border-emerald-500/70 bg-black/50 px-5 py-3 text-sm text-emerald-50 placeholder:text-emerald-100/40 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>

          {/* Password */}
          <div className="w-full">
            <label className="block text-xs font-medium text-emerald-100 mb-2 tracking-wide">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="w-full rounded-full border border-emerald-500/70 bg-black/50 px-5 py-3 text-sm text-emerald-50 placeholder:text-emerald-100/40 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
              placeholder="Enter password"
              required
              type="password"
            />
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 transition rounded-full text-white px-5 py-3 text-sm font-semibold tracking-wide shadow-lg shadow-emerald-500/30"
            >
              Log In
            </button>

            <p className="text-[11px] text-center text-emerald-100/60">
              Having trouble logging in? Contact your administrator.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
