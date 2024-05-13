/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

const OutputFirstName = () => {
    const first_name = useSelector((state: any) => {
        return state.user.firstName;
    });

    return (
        <div className="input-field col s6">
            <div className="card-panel #757575 grey darken-1"> 
                <span>{first_name}</span>
            </div>
        </div>
    );
};

export default OutputFirstName;