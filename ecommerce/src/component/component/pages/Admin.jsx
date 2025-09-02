import { useState } from "react";
import { useFirst } from "../../Context/FIrstContext";
import UpdateUser from "../layout/UpdateUser";

const Admin = () => {
  const { alluser, deleteUser } = useFirst();
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  if (!alluser) return <p className="p-6">Loading users...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">👨‍💻 Admin Panel</h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((user, index) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{user.email}</td>
                <td className="px-4 py-3">{user.username}</td>
                <td className="px-4 py-3 text-center space-x-3">
                  <button
                    onClick={() => {
                      setUpdateData(user);
                      setShowUpdate(true);
                    }}
                    className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setShowDelete(true);
                    }}
                    className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showDelete && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete{" "}
              <span className="text-red-600">{selectedUser.email}</span>?
            </h2>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  deleteUser(selectedUser._id);
                  setShowDelete(false);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDelete(false)}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {showUpdate && updateData && (
        <UpdateUser data={updateData} hideFunction={() => setShowUpdate(false)} />
      )}
    </div>
  );
};

export default Admin;
