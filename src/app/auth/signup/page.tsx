'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthContainer from '../AuthContainer';

export default function SignupPage() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing up with:', { email, password, confirmPassword });
  };

  return (
    <AuthContainer>
      <h1 className="mb-2 text-center text-3xl font-bold">Create an Account</h1>
      <p className="mb-6 text-center text-sm text-gray-600">
        Join us and take control of your finances.
      </p>
      <form onSubmit={handleSignup} className="space-y-4">
        <div className="flex gap-4">
            <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="w-1/2 rounded-md border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
            required
            />
            <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="w-1/2 rounded-md border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
            required
            />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="w-full rounded-md bg-green-500 p-3 font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/auth/login" className="font-medium text-green-500 hover:underline">
          Log In
        </Link>
      </p>
    </AuthContainer>
  );
}