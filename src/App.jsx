import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
    <Toaster/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/chats" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
