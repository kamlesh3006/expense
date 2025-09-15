import Link from 'next/link';
import React from 'react';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Your Expense Tracker
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Take control of your finances.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/auth/login"
            className="rounded-md bg-green-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-600"
          >
            Log In
          </Link>
          <Link
            href="/auth/signup"
            className="rounded-md bg-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-400"
          >
            Sign Up
          </Link>
          <Link
            href="/dashboard"
            className="rounded-md bg-blue-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-600"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}