import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dashboard",
  description: "This is a simple Next js app",
  keywords: ["next js", "app"],
};

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-600">This is the content of the page.</p>
            <p className="text-lg text-gray-600">This page uses Next js.</p>
            
            <div className="mt-6">
              <Link 
                href="/" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
