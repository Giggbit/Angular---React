/* eslint-disable @typescript-eslint/no-explicit-any */
const Todo = ({props}: any) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>
                {props.isCompleted ? (
                    <i className="material-icons left green-text">directions_walk</i>
                ) : (
                    <i className="material-icons left red-text">clear</i>
                )}
            </td>
        </tr>
    );
};

export default Todo;