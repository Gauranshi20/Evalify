import { useEffect, useMemo, useState } from "react";

import {
  fetchAdminUsers,
  type AdminUser,
} from "@/services/api";

import UserRow from "./UserRow";
import CreateUserModal from "./CreateUserModal";
import LinkParentModal from "./LinkParentModal";

import { Skeleton } from "@/components/ui/skeleton";


export default function UsersTable() {


  const [users, setUsers] = useState<AdminUser[]>([]);

  const [loading, setLoading] = useState(true);


  const [
    showCreateModal,
    setShowCreateModal,
  ] = useState(false);


  const [
    showLinkModal,
    setShowLinkModal,
  ] = useState(false);



  const [search, setSearch] = useState("");

  const [roleFilter, setRoleFilter] = useState("all");

  const [statusFilter, setStatusFilter] = useState("all");




  async function loadUsers() {

    try {

      setLoading(true);

      const data = await fetchAdminUsers();

      setUsers(data);


    } catch (error) {

      console.error(error);


    } finally {

      setLoading(false);

    }

  }




  useEffect(() => {

    loadUsers();

  }, []);





  const filteredUsers = useMemo(() => {


    return users.filter((user) => {


      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        user.email
          .toLowerCase()
          .includes(search.toLowerCase());



      const matchesRole =
        roleFilter === "all" ||
        user.role === roleFilter;



      const matchesStatus =
        statusFilter === "all" ||
        user.status === statusFilter;



      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );


    });


  }, [
    users,
    search,
    roleFilter,
    statusFilter,
  ]);






  if (loading) {


    return (

      <div
        className="
          rounded-3xl

          border
          border-slate-200

          bg-white

          p-8

          shadow-sm


          dark:border-slate-700
          dark:bg-slate-900
        "
      >

        <Skeleton
          className="
            h-8
            w-52
          "
        />


        <div className="mt-6 space-y-4">

          {[1,2,3,4].map((item)=>(

            <Skeleton
              key={item}
              className="
                h-12
                w-full
                rounded-xl
              "
            />

          ))}

        </div>


      </div>

    );

  }







  return (

    <>

      <section className="mb-6 space-y-6">


        {/* Header */}


        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between

            gap-4
          "
        >


          <div>


            <h2
              className="
                text-2xl

                font-bold

                text-slate-900

                dark:text-white
              "
            >
              User Management
            </h2>



            <p
              className="
                mt-2

                text-sm

                text-slate-500

                dark:text-slate-400
              "
            >

              Showing{" "}

              <span className="font-semibold">

                {filteredUsers.length}

              </span>

              {" "}of{" "}

              <span className="font-semibold">

                {users.length}

              </span>

              {" "}users

            </p>



          </div>





          <div className="flex gap-3">


            <button

              onClick={() =>
                setShowLinkModal(true)
              }

              className="
                rounded-xl

                bg-emerald-600

                px-5
                py-3

                font-medium

                text-white

                shadow-sm

                transition-all
                duration-300

                hover:bg-emerald-700

                hover:shadow-lg
              "
            >

              Link Parent

            </button>





            <button

              onClick={() =>
                setShowCreateModal(true)
              }

              className="
                rounded-xl

                bg-blue-600

                px-5
                py-3

                font-medium

                text-white

                shadow-sm

                transition-all
                duration-300

                hover:bg-blue-700

                hover:shadow-lg
              "
            >

              + Create User

            </button>



          </div>



        </div>






        {/* Filters */}



        <div
          className="
            flex
            flex-wrap

            gap-3
          "
        >



          <input

            type="text"

            placeholder="Search by name or email..."

            value={search}

            onChange={(e)=>
              setSearch(e.target.value)
            }

            className="
              w-80

              rounded-xl

              border
              border-slate-300

              bg-white

              px-4
              py-2

              text-slate-900

              shadow-sm

              outline-none

              transition


              placeholder:text-slate-400


              focus:border-blue-500

              focus:ring-2

              focus:ring-blue-200



              dark:border-slate-700

              dark:bg-slate-800

              dark:text-white

              dark:placeholder:text-slate-500

              dark:focus:ring-blue-900
            "

          />




          <select

            value={roleFilter}

            onChange={(e)=>
              setRoleFilter(e.target.value)
            }

            className="
              rounded-xl

              border
              border-slate-300

              bg-white

              px-4
              py-2

              text-slate-900

              shadow-sm


              dark:border-slate-700

              dark:bg-slate-800

              dark:text-white
            "

          >

            <option value="all">
              All Roles
            </option>

            <option value="student">
              Student
            </option>

            <option value="teacher">
              Teacher
            </option>

            <option value="parent">
              Parent
            </option>

            <option value="admin">
              Admin
            </option>


          </select>





          <select

            value={statusFilter}

            onChange={(e)=>
              setStatusFilter(e.target.value)
            }

            className="
              rounded-xl

              border
              border-slate-300

              bg-white

              px-4
              py-2

              text-slate-900

              shadow-sm


              dark:border-slate-700

              dark:bg-slate-800

              dark:text-white
            "

          >

            <option value="all">
              All Status
            </option>

            <option value="active">
              Active
            </option>

            <option value="suspended">
              Suspended
            </option>

            <option value="inactive">
              Inactive
            </option>


          </select>



        </div>



      </section>
            {/* Users Table */}


      <div
        className="
          overflow-hidden

          rounded-3xl

          border
          border-slate-200

          bg-white

          shadow-sm


          dark:border-slate-700

          dark:bg-slate-900
        "
      >


        <div className="overflow-x-auto">


          <table className="w-full">



            <thead
              className="
                border-b

                border-slate-200

                bg-slate-50

                text-sm

                uppercase

                tracking-wide

                text-slate-600


                dark:border-slate-700

                dark:bg-slate-800

                dark:text-slate-300
              "
            >


              <tr>


                <th className="p-5 text-left">
                  Name
                </th>


                <th className="p-5 text-left">
                  Email
                </th>


                <th className="p-5 text-left">
                  Role
                </th>


                <th className="p-5 text-left">
                  Status
                </th>


                <th className="p-5 text-left">
                  Action
                </th>


              </tr>


            </thead>





            <tbody>


              {filteredUsers.length === 0 ? (


                <tr>


                  <td
                    colSpan={5}
                    className="
                      py-12

                      text-center

                      text-slate-500


                      dark:text-slate-400
                    "
                  >

                    No users match the selected filters.


                  </td>


                </tr>



              ) : (


                filteredUsers.map((user) => (


                  <UserRow

                    key={user._id}

                    user={user}

                    refresh={loadUsers}

                  />


                ))


              )}



            </tbody>



          </table>


        </div>


      </div>






      {/* Modals */}




      <CreateUserModal

        open={showCreateModal}

        onClose={() =>
          setShowCreateModal(false)
        }

        onSuccess={loadUsers}

      />





      <LinkParentModal

        open={showLinkModal}

        onClose={() =>
          setShowLinkModal(false)
        }

        onSuccess={loadUsers}

      />



    </>

  );

}