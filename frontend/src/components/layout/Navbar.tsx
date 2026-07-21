import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">

      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between

          rounded-2xl

          border
          border-slate-200/70

          bg-white/80
          backdrop-blur-xl

          px-6

          shadow-xl

          transition-all
          duration-300

          dark:border-slate-800
          dark:bg-slate-950/80
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="group flex items-center gap-3"
        >

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              bg-linear-to-br
              from-violet-600
              via-indigo-600
              to-blue-600

              text-white

              shadow-lg

              transition-transform

              group-hover:scale-105
            "
          >
            <GraduationCap size={22}/>
          </div>


          <div>
            <h2
              className="
                text-xl
                font-bold
                text-slate-900

                dark:text-white
              "
            >
              Evalify
            </h2>

            <p
              className="
                text-xs
                text-slate-500

                dark:text-slate-400
              "
            >
              AI Academic Suite
            </p>
          </div>

        </Link>


        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          {links.map((item)=>(
            <a
              key={item.label}
              href={item.href}
              className="
                text-sm
                font-medium

                text-slate-600

                transition

                hover:text-violet-600

                dark:text-slate-300
                dark:hover:text-violet-400
              "
            >
              {item.label}
            </a>
          ))}

        </nav>


        {/* Actions */}

        <div
          className="
            hidden
            items-center
            gap-3

            lg:flex
          "
        >

          <DarkModeToggle />


          <NavLink to="/login">

            <Button
              variant="ghost"
              className="
                text-slate-700
                dark:text-slate-200
              "
            >
              Login
            </Button>

          </NavLink>


          <NavLink to="/register">

            <Button
              className="
                rounded-xl

                bg-linear-to-r
                from-violet-600
                to-indigo-600

                px-6

                text-white

                hover:from-violet-700
                hover:to-indigo-700
              "
            >
              Get Started
            </Button>

          </NavLink>

        </div>



        {/* Mobile Button */}

        <button
          onClick={()=>setOpen(!open)}
          aria-label="Toggle menu"
          className="
            rounded-xl
            p-2

            transition

            hover:bg-slate-100

            dark:hover:bg-slate-800

            lg:hidden
          "
        >

          {open ? (
            <X className="dark:text-white"/>
          ):(
            <Menu className="dark:text-white"/>
          )}

        </button>


      </div>



      {/* Mobile Menu */}

      {open && (

        <div
          className="
            mx-auto
            mt-3
            max-w-7xl

            rounded-2xl

            border

            border-slate-200

            bg-white/95

            p-5

            shadow-xl

            backdrop-blur-xl


            dark:border-slate-800
            dark:bg-slate-950/95


            lg:hidden
          "
        >

          <div className="space-y-2">

            {links.map((item)=>(
              <a
                key={item.label}
                href={item.href}
                onClick={()=>setOpen(false)}

                className="
                  block

                  rounded-xl

                  px-4
                  py-3

                  text-slate-700

                  transition

                  hover:bg-slate-100


                  dark:text-slate-200
                  dark:hover:bg-slate-800
                "
              >
                {item.label}
              </a>
            ))}

          </div>



          <div className="mt-5 flex flex-col gap-3">


            <DarkModeToggle />


            <NavLink to="/login">

              <Button
                variant="outline"
                className="w-full"
              >
                Login
              </Button>

            </NavLink>



            <NavLink to="/register">

              <Button
                className="
                  w-full
                  rounded-xl

                  bg-linear-to-r
                  from-violet-600
                  to-indigo-600
                "
              >
                Get Started
              </Button>

            </NavLink>


          </div>


        </div>

      )}

    </header>
  );
}