'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthContainer from '../AuthContainer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <AuthContainer>
      <h1 className="mb-2 text-center text-3xl font-bold">Log In</h1>
      <p className="mb-6 text-center text-sm text-gray-600">
        Welcome back! Log in to your account.
      </p>
      <form onSubmit={handleLogin} className="space-y-4">
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
        <button
          type="submit"
          className="w-full rounded-md bg-green-500 p-3 font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Dont have an account?{' '}
        <Link href="/auth/signup" className="font-medium text-green-500 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthContainer>
  );
}