import React from "react";

function NavBar() {
  return (
    <header class="shadow mb-2">
      <div class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <div class="flex items-center whitespace-nowrap text-2xl font-black">
          <div class="mr-4 mb-2 w-10 h-10 ">
          </div>
          <span class="text-black">MY CONTACT FORM</span>
        </div>
        <input type="checkbox" class="peer hidden" id="navbar-open" />
        <label
          class="absolute top-5 right-7 cursor-pointer md:hidden "
          for="navbar-open"
        >
          <span class="sr-only">Toggle Navigation</span>
        </label>
        <nav
          aria-label="Header Navigation"
          class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li class="text-gray-600 md:mr-12 hover:text-purple-600  font-bold">
              <div>Home</div>
            </li>
            <li class="text-gray-600 md:mr-12 hover:text-purple-600 font-bold">
              <div>Products</div>
            </li>
            <li class="text-gray-600 md:mr-12 hover:text-purple-600 font-bold">
              <div>About Us</div>
            </li>

            <li class="text-gray-600 md:mr-12 hover:text-purple-600">
              <button class="rounded-md border-2 border-purple-600 px-6 py-1 font-medium text-purple-600 transition-colors hover:bg-purple-600 hover:text-white">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;