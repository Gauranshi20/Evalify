import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Parent {
  _id: string;
  name: string;
  email: string;
}

interface Student {
  _id: string;
  name: string;
  rollNumber: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function LinkParentModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [parents, setParents] = useState<Parent[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  const [parentId, setParentId] = useState("");
  const [studentId, setStudentId] = useState("");

  const [loading, setLoading] = useState(false);
  const [linking, setLinking] = useState(false);


  useEffect(() => {
    if (!open) return;

    async function loadData() {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");


        const [parentResponse, studentResponse] =
          await Promise.all([
            fetch(
              "http://localhost:5000/api/admin/parents",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            ),

            fetch(
              "http://localhost:5000/api/admin/students",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            ),
          ]);


        const parentData =
          await parentResponse.json();

        const studentData =
          await studentResponse.json();


        setParents(
          parentData.data || []
        );

        setStudents(
          studentData.data || []
        );


      } catch (error) {
        console.error(
          "Failed to load users",
          error
        );

      } finally {
        setLoading(false);
      }
    }


    loadData();

  }, [open]);



  async function handleLink() {

    if (!parentId || !studentId) {
      alert(
        "Please select both parent and student."
      );
      return;
    }


    try {

      setLinking(true);

      const token =
        localStorage.getItem("token");


      const response =
        await fetch(
          "http://localhost:5000/api/admin/link-parent",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },


            body: JSON.stringify({
              parentId,
              studentId,
            }),
          }
        );



      if (response.ok) {

        onSuccess();

        onClose();


        setParentId("");
        setStudentId("");

      } else {

        alert(
          "Failed to link parent."
        );

      }


    } catch {

      alert(
        "Something went wrong."
      );


    } finally {

      setLinking(false);

    }

  }



  if (!open) return null;



  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
      "
    >


      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-2xl

          dark:border-slate-700
          dark:bg-slate-900
        "
      >


        <div
          className="
            mb-6
            flex
            items-center
            justify-between
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
              Link Parent
            </h2>


            <p
              className="
                mt-1
                text-sm
                text-slate-500

                dark:text-slate-400
              "
            >
              Connect parent account with student
            </p>

          </div>



          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              text-slate-500
              transition

              hover:bg-slate-100
              hover:text-slate-900

              dark:hover:bg-slate-800
              dark:hover:text-white
            "
          >

            <X size={20}/>

          </button>


        </div>




        <div className="space-y-5">


          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-slate-700

                dark:text-slate-300
              "
            >
              Parent
            </label>


            <select
              value={parentId}
              disabled={loading}
              onChange={(e)=>
                setParentId(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                outline-none
                transition

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-200

                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            >

              <option value="">
                Select Parent
              </option>


              {parents.map((parent)=>(

                <option
                  key={parent._id}
                  value={parent._id}
                >
                  {parent.name}
                </option>

              ))}


            </select>


          </div>




          <div>


            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-slate-700

                dark:text-slate-300
              "
            >
              Student
            </label>



            <select

              value={studentId}

              disabled={loading}

              onChange={(e)=>
                setStudentId(e.target.value)
              }

              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                outline-none
                transition

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-200

                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "

            >


              <option value="">
                Select Student
              </option>



              {students.map((student)=>(

                <option
                  key={student._id}
                  value={student._id}
                >
                  {student.name} ({student.rollNumber})
                </option>

              ))}



            </select>


          </div>





          <button

            onClick={handleLink}

            disabled={linking || loading}

            className="
              w-full
              rounded-xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition

              hover:bg-blue-700

              disabled:cursor-not-allowed
              disabled:opacity-60
            "

          >

            {
              linking
                ? "Linking..."
                : "Link Parent"
            }


          </button>




        </div>


      </div>


    </div>

  );
}