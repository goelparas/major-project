import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, ChakraProvider } from "@chakra-ui/react";
import SideDrawer from "../components/Miscellaneous/SideDrawer";
import MyChats from "../components/Miscellaneous/MyChats";
import ChatArea from "../components/Miscellaneous/ChatArea";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <ChakraProvider>
      <div className="w-full border-2 border-white z-10">
        {user && <SideDrawer />}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91vh"
          p="10px"
        >
          {user && (
            <>
              <MyChats fetchAgain={fetchAgain} />
              <ChatArea fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            </>
          )}
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default ChatPage;
