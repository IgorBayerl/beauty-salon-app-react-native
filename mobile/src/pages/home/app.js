const array = [1, 2, 3]

const stringModified = array.map(selecionar)

console.log(stringModified);


function selecionar(value) {
    return value * 2
};

const UserList = ({ isLoading, results }) => {
    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <ul>
            {result.map((user) => (
                <li>{user.name}</li>
            ))}
        </ul>
    )
};