import React from 'react';
export default function AuthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-sans text-gray-900">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
        {children}
      </div>
    </div>
  );
}