import React from "react";
import { Note } from "../Models/NotesModel";
import NoteComponent from "./NoteComponent";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const NotesList = (props: Props) => {
  const handleDelete = (id: string) => {
    props.setNotes(props.notes.filter((note) => note.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return props.notes.map((note) => {
      return (
        <NoteComponent key={note.id} note={note} handleDelete={handleDelete} />
      );
    });
  };
  return (
    <>
      <div className="m-3">
        <h2 className="mt-3 text-3xl font-bold ">Notes</h2>
        <div className="">{renderNotes()}</div>
      </div>
    </>
  );
};

export default NotesList;
