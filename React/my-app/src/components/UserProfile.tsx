import { useState } from 'react';

const UserProfile = () => {

    const [user, setUser] = useState({ name: "", age: "" });

    return (
        <div>
            <input type="text"
                placeholder='Enter Name'
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />

            <input type="number"
                placeholder='Enter Age'
                value={user.age}
                onChange={(e) => setUser({ ...user, age: e.target.value })} />
            <p>Name: {user.name}, Age: {user.age}</p>
        </div>

    );
}

export default UserProfile;