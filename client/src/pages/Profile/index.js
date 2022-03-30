import { useAuth } from "../../contexts/AuthContext";
import { Text, Button } from "@chakra-ui/react";

function Profile({ history }) {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        logout(() => {
            history.push("/")
        });
    };

    return (
        <div>
            <code>
                <Text fontSize={22}>Profile</Text>
                {JSON.stringify(user)}
            </code>
            <br />
            <br />
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Profile