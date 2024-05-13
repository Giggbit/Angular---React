import { setFirstName } from "../../slices/user/user-slice";
import { useDispatch } from "react-redux";

const InputFirstName = () => {
    const dispatch = useDispatch();
    return (
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" onChange={(e) => {
                dispatch(setFirstName(e.target.value))
            }} />
          <label htmlFor="first_name">First Name</label>
        </div>
    );
};

export default InputFirstName;