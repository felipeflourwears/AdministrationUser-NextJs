import Users from '@/components/users'

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data.data); //Imprimir data del json
  console.log("Hello");
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();
  console.log(users)
  return(
    <div>
      <h1>Index Page</h1>
      {/* {JSON.stringify(users)} */}
      <Users users={users}/>
    </div>
  );
}

export default IndexPage;
