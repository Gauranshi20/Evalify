import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineAcademicCap as GraduationCap,
  HiOutlineMail as Mail,
} from "react-icons/hi";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        border-t
        border-slate-200

        bg-white

        dark:border-slate-800
        dark:bg-slate-950
      "
    >

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


          {/* Brand */}

          <div>

            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <div
                className="
                  rounded-2xl

                  bg-linear-to-br
                  from-violet-600
                  to-indigo-600

                  p-3

                  shadow-lg

                  transition-transform

                  hover:scale-105
                "
              >

                <GraduationCap
                  size={22}
                  className="text-white"
                />

              </div>


              <div>

                <h2
                  className="
                    text-2xl
                    font-bold

                    text-slate-900

                    dark:text-white
                  "
                >
                  Evalify
                </h2>


                <p
                  className="
                    text-sm

                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  AI Evaluation Platform
                </p>


              </div>


            </Link>


            <p
              className="
                mt-6

                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              AI powered academic evaluation platform that automates
              answer sheet assessment, analytics and performance tracking
              for students, teachers and parents.
            </p>


          </div>



          {/* Product */}

          <div>

            <h3
              className="
                font-semibold

                text-slate-900

                dark:text-white
              "
            >
              Product
            </h3>


            <ul
              className="
                mt-5
                space-y-3

                text-slate-600

                dark:text-slate-400
              "
            >

              <li className="hover:text-violet-600">
                AI Evaluation
              </li>

              <li className="hover:text-violet-600">
                Analytics
              </li>

              <li className="hover:text-violet-600">
                Reports
              </li>

              <li className="hover:text-violet-600">
                Dashboard
              </li>

            </ul>

          </div>




          {/* Company */}

          <div>

            <h3
              className="
                font-semibold

                text-slate-900

                dark:text-white
              "
            >
              Company
            </h3>


            <ul
              className="
                mt-5
                space-y-3

                text-slate-600

                dark:text-slate-400
              "
            >

              <li className="hover:text-violet-600">
                About
              </li>

              <li className="hover:text-violet-600">
                Privacy
              </li>

              <li className="hover:text-violet-600">
                Terms
              </li>

              <li className="hover:text-violet-600">
                Support
              </li>

            </ul>


          </div>




          {/* Connect */}

          <div>

            <h3
              className="
                font-semibold

                text-slate-900

                dark:text-white
              "
            >
              Connect
            </h3>



            <div className="mt-5 flex gap-3">


              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl

                  border
                  border-slate-200

                  p-3

                  transition

                  hover:scale-110
                  hover:bg-slate-100


                  dark:border-slate-700
                  dark:hover:bg-slate-800
                "
              >
                <FaGithub size={18}/>
              </a>



              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl

                  border
                  border-slate-200

                  p-3

                  transition

                  hover:scale-110
                  hover:bg-slate-100


                  dark:border-slate-700
                  dark:hover:bg-slate-800
                "
              >
                <FaLinkedin size={18}/>
              </a>



              <a
                href="mailto:support@evalify.com"
                className="
                  rounded-xl

                  border
                  border-slate-200

                  p-3

                  transition

                  hover:scale-110
                  hover:bg-slate-100


                  dark:border-slate-700
                  dark:hover:bg-slate-800
                "
              >
                <Mail size={18}/>
              </a>


            </div>


            <p
              className="
                mt-6
                text-sm

                text-slate-500

                dark:text-slate-400
              "
            >
              Building the future of AI assisted education.
            </p>


          </div>


        </div>



        {/* Bottom */}

        <div
          className="
            mt-14

            border-t
            border-slate-200

            pt-8

            text-sm

            text-slate-500


            dark:border-slate-800
            dark:text-slate-400

            md:flex
            md:items-center
            md:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} Evalify AI. All rights reserved.
          </p>


        </div>


      </div>

    </footer>
  );
}