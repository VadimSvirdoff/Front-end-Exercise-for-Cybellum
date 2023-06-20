import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { getNotification } from "../../store/auth/api";
import { selectNotification, selectUser } from "../../store/auth/selectors";


const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector(selectUser);
    const notification = useSelector(selectNotification);


    useEffect(() => {
        if (user?.token && !notification) {
            dispatch(getNotification(user.token));
        }
    }, []);

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            {notification ?? null}
        </div>
    );
};

export default HomePage;