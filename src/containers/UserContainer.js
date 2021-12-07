import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { Preloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';

const UserContainer = ({ id }) => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if  (user && user.id === parseInt(id, 10)) return;
        dispatch(getUser(id));
    }, [dispatch, id, user]); // id 바뀔 때마다 새로 요청

    if (!user) {
        return <Preloader resolve={() => dispatch(getUser(id))} />;
    }
    return <User user={user} />;
};

export default UserContainer;