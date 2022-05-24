import { useState } from "react";
import CreateNotes from "./Components/CreateNotes";
import Header from "./Components/Header";
import NotesList from "./Components/NotesList";
import { Note } from "./Models/NotesModel";

function App() {
  const [Notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Metting",
      text: "Scdule Meeting for Ui And UX",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <div className="">
      <Header />
      <div className="container flex flex-col justify-center items-center w-full">
        <NotesList notes={Notes} setNotes={setNotes} />
        <CreateNotes notes={Notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
