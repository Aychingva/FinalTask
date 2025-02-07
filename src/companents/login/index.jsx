import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function Login({ open, setOpen }) {
  const [formdata, setformdata] = useState({
    email: "",
    pass: "",
  });

  const formsubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log(formdata);
    setformdata({ email: "", pass: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 w-screen h-[100vh] overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-8 pb-8 pt-5 sm:p-8">
                <form className="space-y-6" onSubmit={formsubmit}>
                  <h1 className="text-center text-[20px] font-bold">Sign Up</h1>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
                        required
                        className="block w-full rounded-lg border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) => setformdata({ ...formdata, pass: e.target.value })}
                        required
                        className="block w-full rounded-lg border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:ring-2 focus:ring-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Not an account?{' '}
                  <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
                  {/* <span
                    onClick={() => setOpen(false)}  // Option to close the modal if needed
                    className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Sign up
                  </span> */}
                </p>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
