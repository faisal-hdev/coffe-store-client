import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const Users2 = () => {
  const {
    isPending,
    data: users,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user");
      return res.json();
    },
  });
  //   const [users, setUsers] = useState();
  //   useEffect(() => {
  //     fetch("http://localhost:5000/user")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUsers(data);
  //       });
  //   });

  const handleDelete = (id) => {
    // make sure user is confirmed to delete
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log("deleted successfully");
          // remove the user form the ui
          //   const remainingUsers = users.filter((user) => user._id !== id);
          //   setUsers(remainingUsers);
        }
      });
  };

  if (isPending) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {/* <h2>Users : {loadedUsers.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last logged in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx * 1}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
