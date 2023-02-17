import { Button, Navbar } from "flowbite-react";
import React from "react";
import {
  COMPANY_LOGO,
  COMPANY_NAME,
  HEADER_ACTION_BUTTON,
  MENU_ITEMS,
} from "./Header.config";

const Header = () => {
  const goto = (link) => {
    document.getElementById(link).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow w-full backdrop-blur">
      <Navbar
        fluid={true}
        rounded={true}
        className="max-w-7xl mx-auto bg-white/5"
      >
        <Navbar.Brand
          onClick={() => goto("home")}
          className="cursor-pointer flex justify-center items-center"
        >
          <img src={COMPANY_LOGO} className="mr-2 h-10" alt="Bool Logo" />
          <span className="self-center text-2xl font-bold text-primary dark:text-white">
            {COMPANY_NAME}
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            className="bg-primary hover:bg-secondary duration-300 mr-2 md:mr-0"
            onClick={() => goto(HEADER_ACTION_BUTTON.link)}
          >
            {HEADER_ACTION_BUTTON.title}
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {MENU_ITEMS.map((item) => (
            <Navbar.Link
              key={item.id}
              className="cursor-pointer hover:!text-primary dark:hover:text-white duration-300 !border-b border-transparent hover:!border-primary"
              onClick={() => goto(item.link)}
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
