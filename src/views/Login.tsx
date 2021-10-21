import React from "react";

export function Login() {
  return (
    <div className="flex flex-col gap-5 items-center bg-no-repeat xl:bg-cover bg-contain w-full h-[100vh] bg-gradient-to-r from-[#f0405c] to-[#c20831]">
      <img className="w-48 absolute mt-4" src="assets/ram.png" alt="" />
      <div className="bg-white my-auto w-full h-full sm:h-auto sm:w-[400px] rounded-md shadow-lg flex flex-col justify-center items-center p-8 gap-8">
        <h1 className="text-[#C20831] text-4xl">Se Connecter</h1>
        <h3 className="text-gray-300">
          Welcome to Training management software, please enter your
          credentials, to be able to use the app.
        </h3>
        <form
          action=""
          className="w-full gap-4 flex flex-wrap justify-center items-center"
        >
          <input
            autoFocus
            required
            className="w-full h-10 border-b border-gray-300 pl-4"
            type="text"
            placeholder="Nom d'utilisateur"
          />
          <input
            required
            className="w-full h-10 border-b border-gray-300 pl-4"
            type="text"
            placeholder="Password"
          />
          <button className="bg-[#C20831] text-white rounded-full w-14 h-14 flex justify-center items-center shadow-md mt-10">
            <img className="w-6 h-6" src="assets/iconlogin.png" />
          </button>
        </form>
      </div>
    </div>
  );
}
