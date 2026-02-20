import React from 'react'
import { FiTrendingUp, FiUsers, FiShoppingCart, FiDollarSign } from 'react-icons/fi'

const Dashboard = () => {
    // Sample dashboard stats
    const stats = [
        { title: 'Total Users', value: '1,234', icon: <FiUsers />, color: 'bg-blue-100', iconColor: 'text-blue-600' },
        { title: 'Total Revenue', value: '$45,231', icon: <FiDollarSign />, color: 'bg-green-100', iconColor: 'text-green-600' },
        { title: 'Total Orders', value: '567', icon: <FiShoppingCart />, color: 'bg-purple-100', iconColor: 'text-purple-600' },
        { title: 'Growth', value: '+12.5%', icon: <FiTrendingUp />, color: 'bg-orange-100', iconColor: 'text-orange-600' },
    ]

    return (
        <div className='w-full md:w-[calc(100%-16rem)]'>
            {/* Header Section */}
            <div className='bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6'>
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>Welcome back!</h1>
                <p className='text-gray-600'>Here's what's happening with your business today.</p>
            </div>

            {/* Stats Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6'>
                {stats.map((stat, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-gray-600 text-sm font-medium mb-1'>{stat.title}</p>
                                <h3 className='text-2xl font-bold text-gray-900'>{stat.value}</h3>
                            </div>
                            <div className={`${stat.color} p-3 rounded-lg`}>
                                <div className={`${stat.iconColor} text-2xl`}>{stat.icon}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Chart 1 */}
                <div className='bg-white rounded-lg shadow-sm p-6'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4'>Monthly Revenue</h3>
                    <div className='h-64 flex items-center justify-center bg-gray-50 rounded-lg'>
                        <p className='text-gray-500'>Chart placeholder</p>
                    </div>
                </div>

                {/* Chart 2 */}
                <div className='bg-white rounded-lg shadow-sm p-6'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4'>User Activity</h3>
                    <div className='h-64 flex items-center justify-center bg-gray-50 rounded-lg'>
                        <p className='text-gray-500'>Chart placeholder</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className='bg-white rounded-lg shadow-sm p-6 mt-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>Recent Activity</h3>
                <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                        <thead className='bg-gray-50 border-b border-gray-200'>
                            <tr>
                                <th className='px-4 py-3 text-left font-medium text-gray-700'>User</th>
                                <th className='px-4 py-3 text-left font-medium text-gray-700'>Action</th>
                                <th className='px-4 py-3 text-left font-medium text-gray-700'>Time</th>
                                <th className='px-4 py-3 text-left font-medium text-gray-700'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <tr key={item} className='border-b border-gray-200 hover:bg-gray-50'>
                                    <td className='px-4 py-3 text-gray-900'>User {item}</td>
                                    <td className='px-4 py-3 text-gray-600'>Login</td>
                                    <td className='px-4 py-3 text-gray-600'>2 mins ago</td>
                                    <td className='px-4 py-3'>
                                        <span className='px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium'>Active</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
