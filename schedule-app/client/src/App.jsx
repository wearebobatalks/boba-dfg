import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import React, { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div>
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Log In
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
