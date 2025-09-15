'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const navItems = [
  { name: 'Dashboard', icon: 'fas fa-chart-line', path: '/dashboard' },
  { name: 'Transactions', icon: 'fas fa-exchange-alt', path: '/transactions' },
  { name: 'Reports', icon: 'fas fa-file-alt', path: '/reports' },
  { name: 'Categories', icon: 'fas fa-tags', path: '/categories' },
  { name: 'Budgets', icon: 'fas fa-wallet', path: '/budgets' },
  { name: 'Settings', icon: 'fas fa-cog', path: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Fragment>
      <aside className="fixed left-0 top-0 hidden h-full w-64 flex-shrink-0 flex-col justify-between bg-white p-6 shadow-lg lg:flex">
        <div>
          <div className="logo mb-8 text-2xl font-extrabold text-gray-900">
            Expense Tracker
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-green-500 focus:ring-green-500"
            />
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"></i>
          </div>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="my-1">
                  <Link
                    href={item.path}
                    className={`flex items-center rounded-md p-3 text-gray-700 transition-colors duration-200 hover:bg-green-100 hover:text-green-600 ${
                      pathname === item.path ? 'bg-green-100 text-green-600' : ''
                    }`}
                  >
                    <i className={`${item.icon} mr-4 text-lg`}></i>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <Link
            href="/transactions/add"
            className="mb-6 flex items-center justify-center rounded-md bg-green-500 p-3 font-semibold text-white transition-colors duration-200 hover:bg-green-600"
          >
            <i className="fas fa-plus-circle mr-2"></i>
            Add Expense
          </Link>
          <div className="user-profile flex items-center border-t border-gray-200 pt-6">
            <div>
              <div className="font-medium text-gray-900">
                Alex Johnson
              </div>
              <div className="text-sm text-gray-500">
                alex@company.com
              </div>
            </div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
}