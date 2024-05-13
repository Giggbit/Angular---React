import InputFirstName from "./InputFirstName";
import InputLastName from "./InputLastName";
import OutputFirstName from "./OutputFirstName";
import OutputLastName from "./OutputLastName";

const User = () => {
    return (
        <>
            <div className="row">
                <InputFirstName/>
                <InputLastName/>
            </div>
            <div className="row">
                <OutputFirstName/>
                <OutputLastName/>
            </div>
        </>
    );
};

export default User;