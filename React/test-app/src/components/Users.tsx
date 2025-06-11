import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    username: number;
    email: string;
    city: string;

}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await response.json();
        setUsers(data);
    };

    return (
        <div>
            <h1 className="text-danger fw-bold">Users</h1>
            <div className="row g-3">
                {users.map((user) => (
                    <div className="col-md-4 ">
                        <div className="card vh-50" key={user.id}>

                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="text-info">Price: {user.username}</h6>
                                <p className="card-text">{user.email} - City: {user.city}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    );
};
export default Users;