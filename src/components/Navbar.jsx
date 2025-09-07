import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Mountain } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../lib/utills'

export const Navbar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const getCurrentActive = (path) => {
    return path === currentPath ? 'border-green-600 text-gray-900 ' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
  }
  return (
    <Disclosure as="nav" className="relative bg-white shadow-sm">
      <div className=" w-full mx-5 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-600 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            <Mountain className="h-10 w-10" />

            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-600 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <Link to="/"
                className={cn(getCurrentActive('/'), 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium')}
              >
                Home
              </Link>
              <Link to="/products"
                className={cn(getCurrentActive('/products'), 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium')}
              >
                Products
              </Link>
              <Link to="/about"
                className={cn(getCurrentActive('/about'), 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium')}
              >
                About Us
              </Link>
              <Link to="/contact"
                className={cn(getCurrentActive('/contact'), 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium')}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
          <Link to="/contact">
          <button
              type="button"
              className="relative rounded-lg p-2 px-4 bg-green-600 text-white hover:bg-black focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
            >
              Get A  Quote
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
            </button>
</Link>
      
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-4">
          {/* Current: "bg-indigo-50 border-indigo-600 text-indigo-700", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-600 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Calendar
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
