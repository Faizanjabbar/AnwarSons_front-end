import React from "react";
import { useNavigate } from "react-router-dom";

function CreateJob() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/jobs");
  };

  return (
    <form>
      {/* Main div */}
      <div>
        <div className="font-bold text-2xl text-left w-11/12 mx-auto ">
          Electric Motor Rebuilding Job Card
        </div>
        <div className="border-2 border-black w-11/12 mx-auto p-4">
          {/* main div for rows */}
          <div className="flex flex-col gap-y-4">
            {/* Row1 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Date
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Job No.
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>

            {/* Row2 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Client Job No.
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Client
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row3 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-56 text-left font-semibold">
                  Client Asset Location
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-72 text-left font-semibold">
                  Client TON/KKS/ASS/NO.
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row4 */}
            <div className="flex justify-left items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Previous JOb No.(if any)
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row5 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Data Received
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Data Delivered
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* table 2 */}

        <div className="border-2  border-black w-11/12 mx-auto p-4 mt-2">
          {/* main div for rows */}
          <div className="flex flex-col gap-y-4">
            {/* Row1 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Make
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Frame No.
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>

            {/* Row2 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Type
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Ser. No.
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>

            {/* Row3 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  HP
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  KW
                </label>
                <input className="border border-black w-full" />
                <label className="border border-black border-x-0  w-48 text-left font-semibold">
                  Hertz
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row4 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  RPM
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Volts
                </label>
                <input className="border border-black w-full" />
                <label className="border border-black border-x-0  w-48 text-left font-semibold">
                  Ins. Class
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row5 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Phase
                </label>
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-40 text-left font-semibold">
                  Amps
                </label>
                <input className="border border-black w-full" />
                <label className="border border-black border-x-0  w-48 text-left font-semibold">
                  Duty
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
           
          </div>
        </div>

        {/* Table3 */}

        <div className="font-bold text-2xl text-left w-11/12 mx-auto ">
          Winding Data
        </div>
        <div className="border-2 border-black w-11/12 mx-auto p-4">
          {/* main div for rows */}
          <div className="flex flex-col gap-y-4">
            {/* Row1 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Winding
                </label>
                <label className="border border-black border-r-0 w-full text-left font-semibold">
                  Orignal
                </label>
                <label className="border border-black  w-full text-left font-semibold">
                  Modified
                </label>
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Core length
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row2 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Poles
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Core I.D
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row3 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Pitch
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Back Iron
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row4 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Total Coils
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Slot Depth
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row5 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Total Sets
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Tooth Width
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row6 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Coils Per Set
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Rotor Dia
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row7 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Wire Size
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Calculated Gap
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row8 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  No. of Wires
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Rotor Slots
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row9 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Connection
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3 items-center">
                <label className="border border-black border-r-0 w-52 text-left font-semibold">
                  Slots of Set Angle
                </label>
                <input className="border border-black w-full" />
              </div>
            </div>
            {/* Row10 */}
            <div className="flex justify-around items-center  gap-4">
              <div className="flex w-1/2  items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Jumper
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3"></div>
            </div>
            {/* Row11 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Wt Per Set
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3"></div>
            </div>
            {/* Row12 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Total Wire Wt
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3"></div>
            </div>
            {/* Row13 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Winding Type
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3"></div>
            </div>
            {/* Row14 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Lead Length
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3"></div>
            </div>
            {/* Row15 */}
            <div className="flex justify-around items-center gap-4">
              <div className="flex w-1/2 items-center">
                <label className="border border-black border-r-0 w-64 text-left font-semibold">
                  Lead Size
                </label>
                <input className="border border-black w-full" />
                <input className="border border-black w-full" />
              </div>
              <div className="flex w-1/3"></div>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <button className="bg-gray-500 hover:bg-gray-700 text-white semi-bold py-2 px-4 rounded items-center">
                Submit
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white semi-bold py-2 px-4 rounded items-center"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateJob;
