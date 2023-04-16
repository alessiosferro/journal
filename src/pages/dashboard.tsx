import {Avatar, Badge, Box, Text, Flex, Center, VStack, Button} from "@chakra-ui/react";
import withProtectedRoute from "../hocs/withProtectedRoute";
import {ProtectedRouteProps} from "../types/protected-route-props";
import {auth} from "../firebase";

const Dashboard = ({ user }: ProtectedRouteProps) => {
  return (
    <Center minHeight="100vh">
      <VStack spacing={10}>
        <Flex>
          {user!.photoURL && <Avatar src={user!.photoURL} name={user!.displayName || ""} />}
          <Box ml='3'>
            <Text fontWeight='bold'>
              {user!.displayName}
              {user!.emailVerified && <Badge ml='1' colorScheme='green'>
                Email Verified
              </Badge>}
            </Text>
            <Text fontSize='sm'>{user!.uid}</Text>
          </Box>
        </Flex>
        <Button w="100%"
                colorScheme="red"
                onClick={() => auth.signOut()}
        >Logout</Button>
      </VStack>
    </Center>
  );
}

export default withProtectedRoute(Dashboard);
