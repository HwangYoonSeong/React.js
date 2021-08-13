import React, { useRef, useContext, useCallback } from 'react';
import { UserDispatch } from '../../App_velopert';
import useInputs from '../../Hooks/useInput';
function CreateUser () {
    const dispatch = useContext(UserDispatch);
    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
    const nextId = useRef(4);

    // dispatch 함수는 useCallback을 통한 재사용이 불필요한가? 
    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        reset();
        nextId.current += 1;
    }, [username, email, reset, dispatch]);

    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);