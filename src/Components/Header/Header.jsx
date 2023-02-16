import { Button, Navbar } from "flowbite-react";
import React from "react";
import { COMPANY_LOGO, COMPANY_NAME, MENU_ITEMS } from "./Header.config";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow">
      <Navbar fluid={true} rounded={true} className="max-w-7xl mx-auto">
        <Navbar.Brand
          onClick={() => console.log("Clicked on " + COMPANY_NAME)}
          className="cursor-pointer"
        >
          <img src={COMPANY_LOGO} className="mr-3 h-6 sm:h-9" alt="Bool Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-primary dark:text-white">
            {COMPANY_NAME}
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-primary hover:bg-secondary duration-300">
            Get Started
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {MENU_ITEMS.map((item) => (
            <Navbar.Link
              key={item.id}
              //   href={item.link}
              className="cursor-pointer hover:!text-primary dark:hover:text-white duration-300"
              onClick={() => console.log("Clicked on " + item.title)}
            >
              {item.title}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
