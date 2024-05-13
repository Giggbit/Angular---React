/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

const OutputLastName = () => {
    const last_name = useSelector((state: any) => {
        return state.user.lastName;
    });

    return (
        <div className="input-field col s6">
            <div className="card-panel #757575 grey darken-1"> 
                <span>{last_name}</span>
            </div>
        </div>
    );
};

export default OutputLastName;