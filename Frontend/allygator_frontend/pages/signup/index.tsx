import React from "react";
import Link from "next/link";
export default function Signup() {
  return (
    <>
      <div className="flex p-1 py-12 bg-white place-content-center">
        <div className="max-w-lg overflow-hidden border border-gray-200 rounded-lg">
          <form className="w-full max-w-lg">
            <div className="p-10 pb-6">
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 mb-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-email"
                  >
                    UF Email
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="janedoe@example.com"
                  />
                </div>
                <div className="w-full px-3 mb-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="***********"
                  />
                </div>
                <div className="w-full px-3 mb-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-number"
                  >
                    Major
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    placeholder="Computer Science"
                  />
                </div>
              </div>
              <label>
                <span className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                  Address
                </span>
                <textarea
                  className="block w-full px-4 py-3 mt-1 mb-3 text-gray-700 bg-gray-200 border border-gray-200 rounded form-textarea focus:outline-none"
                  rows={4}
                  placeholder
                  defaultValue={""}
                />
              </label>
              <div className="flex flex-wrap m-6 mb-2 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-city"
                  >
                    Specialization
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                  />
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-state"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-zip"
                  >
                    Zip
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder={90210}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 text-center bg-gray-200">
              <div className="relative flex flex-col items-start mr-1 text-sm">
                <span className="mr-1 text-gray-500">
                  Already have an account?
                </span>
                <a
                  href="#_"
                  className="block font-medium text-indigo-600 underline"
                >
                  Login Here
                </a>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
