// import React from 'react';
// import Counter from './Components/velopertComp/Counter';

// function App () {
//     return (
//         <Counter />
//     );
// }

// export default App;

import React, { useRef, useState, useMemo } from 'react';
// import InputSample from './Components/velopertComp/InputSample';
import UserList from './Components/velopertComp/UserList';
import CreateUser from './Components/velopertComp/CreateUser';

function countActiveUsers (users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

function App () {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: false
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers([...users, user]);
        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;

    };

    const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };
    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        // <InputSample />
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App;