import { Fragment } from 'react';

const mockTransactions = [
  { id: 1, date: 'Sep 08', merchant: 'Starbucks', category: 'Food & Drink', amount: '-₹6.80' },
  { id: 2, date: 'Sep 07', merchant: 'Uber', category: 'Transport', amount: '-₹18.20' },
  { id: 3, date: 'Sep 07', merchant: 'Whole Foods', category: 'Groceries', amount: '-₹74.10' },
  { id: 4, date: 'Sep 06', merchant: 'Netflix', category: 'Subscriptions', amount: '-₹15.99' },
];

const mockCategories = [
  { name: 'Food & Drink', amount: '₹820', icon: 'fas fa-utensils' },
  { name: 'Groceries', amount: '₹1,120', icon: 'fas fa-shopping-basket' },
  { name: 'Transport', amount: '₹340', icon: 'fas fa-bus' },
  { name: 'Utilities', amount: '₹210', icon: 'fas fa-lightbulb' },
  { name: 'Housing', amount: '₹1,150', icon: 'fas fa-home' },
];

export default function DashboardPage() {
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-100 lg:ml-64 p-8 pt-4">
        <div className="header flex justify-between items-center mb-8">
          <div className="left-section flex items-center">
            <h1 className="page-title text-2xl font-bold mr-6">Dashboard</h1>
            <div className="date-filter flex items-center rounded-lg border border-gray-300 bg-white p-2 text-sm">
              <i className="fas fa-calendar-alt mr-2 text-gray-500"></i>
              <span>Last 30 days</span>
            </div>
          </div>
          <div className="right-section flex items-center gap-4">
            <button className="icon-btn rounded-lg border border-gray-300 bg-white p-2.5 text-gray-700 transition-colors duration-200 hover:bg-gray-200">
              <i className="far fa-bell text-lg"></i>
            </button>
            <button className="icon-btn rounded-lg border border-gray-300 bg-white p-2.5 text-gray-700 transition-colors duration-200 hover:bg-gray-200">
              <i className="fas fa-sliders-h text-lg"></i>
            </button>
            <a href="#" className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-green-600">
              <i className="fas fa-robot"></i>
              Ask AI
            </a>
          </div>
        </div>

        <div className="grid-container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="title text-sm text-gray-500">Total Spending</div>
            <div className="value mt-2 text-2xl font-bold">
              ₹3,840
              <span className="ml-2 text-sm font-semibold text-green-500">
                <i className="fas fa-arrow-up mr-1"></i>+8.2%
              </span>
            </div>
            <div className="subtitle text-sm text-gray-500">vs last month</div>
          </div>
          <div className="card rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="title text-sm text-gray-500">Monthly Budget Used</div>
            <div className="value mt-2 text-2xl font-bold">62%</div>
            <div className="subtitle text-sm text-gray-500">of ₹6,200</div>
          </div>
          <div className="card rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="title text-sm text-gray-500">Average Daily Spend</div>
            <div className="value mt-2 text-2xl font-bold">₹128</div>
            <div className="subtitle text-sm text-gray-500">vs ₹114 last month</div>
          </div>
          <div className="card rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="title text-sm text-gray-500">Upcoming Bills</div>
            <div className="value mt-2 text-2xl font-bold">4</div>
            <div className="subtitle text-sm text-gray-500">Due in next 14 days</div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Transactions</h2>
              <div className="tabs flex rounded-md border border-gray-300 bg-gray-100 p-1 text-sm">
                <button className="rounded-md px-3 py-1 transition-colors duration-200 hover:bg-white hover:shadow-sm">All</button>
                <button className="rounded-md px-3 py-1 transition-colors duration-200 hover:bg-white hover:shadow-sm">Food</button>
                <button className="rounded-md px-3 py-1 transition-colors duration-200 hover:bg-white hover:shadow-sm">Transport</button>
                <button className="rounded-md px-3 py-1 transition-colors duration-200 hover:bg-white hover:shadow-sm">Utilities</button>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 text-left text-sm font-medium text-gray-500">Date</th>
                  <th className="py-2 text-left text-sm font-medium text-gray-500">Merchant</th>
                  <th className="py-2 text-left text-sm font-medium text-gray-500">Category</th>
                  <th className="py-2 text-left text-sm font-medium text-gray-500">Amount</th>
                  <th className="py-2 text-left text-sm font-medium text-gray-500"></th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-2 text-sm text-gray-700">{tx.date}</td>
                    <td className="py-2 text-sm text-gray-700">{tx.merchant}</td>
                    <td className="py-2">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
                        {tx.category}
                      </span>
                    </td>
                    <td className="py-2 text-sm font-medium text-red-500">{tx.amount}</td>
                    <td className="py-2">
                      <button className="rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-xs text-gray-700">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Spending by Category</h2>
            <ul>
              {mockCategories.map((cat) => (
                <li key={cat.name} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center">
                    <i className={`${cat.icon} mr-3 text-lg text-gray-500`}></i>
                    <span className="font-medium">{cat.name}</span>
                  </div>
                  <span className="font-semibold">{cat.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Upcoming Bills</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-medium text-gray-900">Rent</div>
                <div className="text-sm text-gray-500">Due Sep 15</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-medium text-gray-900">Electricity</div>
                <div className="text-sm text-gray-500">Due Sep 12</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-medium text-gray-900">Internet</div>
                <div className="text-sm text-gray-500">Due Sep 10</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-medium text-gray-900">Gym</div>
                <div className="text-sm text-gray-500">Due Sep 09</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}