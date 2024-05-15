import { Box } from "@chakra-ui/layout";
// import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../../Context/ChatProvider";

const ChatArea = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      backgroundColor="rgba( 1, 1, 1 ,.4)"
      backdropBlur={"blur(20px) saturate(180%)"}
      boxShadow={"dark-lg"}
      w={{ base: "100%" }}
      borderRadius="2xl"
      border={"1px"}
      borderColor={"black"}
      zIndex={10}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatArea;