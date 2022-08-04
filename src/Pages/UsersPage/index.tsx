import React from "react";
import UserCard from "../../Compontnts/UserCard";
import { ICard } from "../../Compontnts/UserCard";

function Index() {
  const [users, setUsers] = React.useState<ICard[]>([]);
  const getAllData = async () => {
    // const data = await getData();
    // setUsers(data);
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

export default Index;
