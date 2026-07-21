import {
  Pencil,
  Trash2,
  UserCheck,
  UserX,
} from "lucide-react";

import type { AdminUser } from "@/services/api";

import {
  updateUser,
  toggleUserStatus,
  deleteUser,
} from "@/services/api";


interface Props {
  user: AdminUser;
  refresh: () => void;
}



export default function UserRow({
  user,
  refresh,
}: Props) {



  async function handleEdit() {

    const name = window.prompt(
      "Update user name",
      user.name
    );


    if (!name || name.trim() === user.name) {
      return;
    }


    try {

      await updateUser(user._id, {
        name: name.trim(),
      });

      refresh();


    } catch {

      alert("Failed to update user.");

    }

  }






  async function handleStatus() {


    const action =
      user.status === "active"
        ? "Suspend"
        : "Activate";



    const ok = window.confirm(
      `${action} ${user.name}?`
    );



    if (!ok) return;



    try {

      await toggleUserStatus(user._id);

      refresh();


    } catch {

      alert("Failed to update status.");

    }

  }







  async function handleDelete() {


    const ok = window.confirm(
      `Delete ${user.name} permanently?\n\nThis action cannot be undone.`
    );



    if (!ok) return;



    try {

      await deleteUser(user._id);

      refresh();


    } catch {

      alert("Failed to delete user.");

    }


  }






  return (


    <tr

      className="
        border-b

        border-slate-100

        transition-all
        duration-200

        hover:bg-slate-50


        dark:border-slate-800

        dark:hover:bg-slate-800/60
      "

    >



      <td className="px-5 py-5">


        <div
          className="
            font-semibold

            text-slate-800

            dark:text-slate-200
          "
        >

          {user.name}

        </div>


      </td>






      <td
        className="
          px-5
          py-5

          text-slate-600

          dark:text-slate-400
        "
      >

        {user.email}

      </td>








      <td className="px-5 py-5">


        <span

          className="
            rounded-full

            bg-blue-100

            px-3
            py-1

            text-sm

            font-medium

            capitalize

            text-blue-700


            dark:bg-blue-900/30

            dark:text-blue-300
          "

        >

          {user.role}

        </span>


      </td>








      <td className="px-5 py-5">


        <span

          className={`

            rounded-full

            px-3

            py-1

            text-sm

            font-semibold


            ${
              user.status === "active"

                ? `

                  bg-emerald-100

                  text-emerald-700


                  dark:bg-emerald-900/30

                  dark:text-emerald-300

                `


                : user.status === "suspended"

                ? `

                  bg-red-100

                  text-red-700


                  dark:bg-red-900/30

                  dark:text-red-300

                `


                : `

                  bg-yellow-100

                  text-yellow-700


                  dark:bg-yellow-900/30

                  dark:text-yellow-300

                `

            }

          `}

        >

          {user.status}

        </span>


      </td>









      <td className="px-5 py-5">


        <div className="flex items-center gap-2">





          <button

            onClick={handleEdit}

            className="
              rounded-xl

              border

              border-blue-200

              p-2

              text-blue-600

              transition-all

              hover:bg-blue-50


              dark:border-blue-900

              dark:text-blue-400

              dark:hover:bg-blue-900/30
            "

            title="Edit"

          >

            <Pencil size={16} />

          </button>








          <button

            onClick={handleStatus}

            className={`

              rounded-xl

              p-2

              text-white

              transition-all


              ${
                user.status === "active"

                ? `

                  bg-amber-500

                  hover:bg-amber-600

                `

                : `

                  bg-emerald-600

                  hover:bg-emerald-700

                `

              }

            `}

            title={
              user.status === "active"
                ? "Suspend"
                : "Activate"
            }

          >

            {
              user.status === "active"

              ?

              <UserX size={16}/>

              :

              <UserCheck size={16}/>

            }


          </button>









          <button

            onClick={handleDelete}

            className="
              rounded-xl

              bg-red-600

              p-2

              text-white

              transition-all

              hover:bg-red-700

              hover:shadow-lg
            "

            title="Delete"

          >

            <Trash2 size={16}/>


          </button>





        </div>


      </td>



    </tr>


  );

}