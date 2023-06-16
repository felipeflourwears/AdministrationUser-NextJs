"use client";
import { useRouter } from "next/navigation";


function Users({ users }) {

  const router = useRouter()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}
          onClick={() => {
           /*  console.log(user.id); */
           router.push(`/users/${user.id}`)
          }}
        >
          <div>
            <h5>{user.id} {user.first_name} {user.last_name}</h5>
            <p>{user.email}</p>
            <img src={user.avatar} alt={user.email} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Users;

