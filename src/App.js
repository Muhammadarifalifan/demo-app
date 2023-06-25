import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./Routes/Home";
import AddStudent from "./Routes/AddStudent";
import Student from "./Routes/Student";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Footer from "./components/Footer";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddStudent />} />
        <Route exact path="/student" element={<Student />} />
        <Route exact path="/student/:id" element={<EditStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
