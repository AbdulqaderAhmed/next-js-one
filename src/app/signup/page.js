"use client";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

async function createUser(prevState, formData) {
  const email = formData.get("email");
  if (!email || !email.includes("@")) {
    return { message: "Please enter a valid email" };
  }
  return { message: "User created successfully!" };
}

export default function Signup() {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>
        <form action={formAction} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">
              Email:
              <input 
                type="email" 
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
            </label>
          </div>
          <p aria-live="polite" className={`text-sm ${state?.message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {state?.message}
          </p>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
