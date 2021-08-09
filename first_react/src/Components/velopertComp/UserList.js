import React, { useEffect, useState } from 'react';


const User = React.memo(function User ({ user, onRemove, onToggle }) {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    // deps에 user 만 추가되어 있어 number가 변할 경우에는 useEffect 실행 x 
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);



    return (
        <div>

            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}

                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>

            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>

            <span><b style={{
                marginLeft: 20
            }}>{number} </b></span>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <br></br>
        </div>
    );
})


function UserList ({ users, onRemove, onToggle }) {
    return (
        <div>

            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default React.memo(UserList);