import React from "react";
import UserCard from "../Compontnts/User";
import { getData } from "./services";
import { Card } from "../Compontnts/User";
function Users() {
  const [users, setUsers] = React.useState<Card[]>([]);
  const getAllData = async () => {
    const data = await getData();
    setUsers(data);
  };
  React.useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          family={user.family}
          src={user.src}
          balance={user.balance}
          wallet={user.wallet}
        />
      ))}
    </>
  );
}

export default Users;
