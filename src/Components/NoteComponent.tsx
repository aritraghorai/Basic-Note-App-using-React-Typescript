import React from "react";
import { Note } from "../Models/NotesModel";
type Props = {
  note: Note;
  key: string;
  handleDelete: (id: string) => void;
};

const NoteComponent = ({ note, handleDelete }: Props) => {
  return (
    <div
      className="p-3 rounded-xl   md:w-[50vw] my-2"
      style={{ backgroundColor: note.color }}
    >
      <div className="card flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold">{note.title}</h1>
        <p className="text-2xl">{note.text}</p>
        <p className="md:text-xl mt-1">{note.date}</p>
        <div className="w-[20vw] mt-3 md:w-[10vw]">
          <button
            type="submit"
            className="text-2xl border-1 rounded-lg w-full bg-red-600 text-white m-[0.5px] p-1"
            onClick={() => {
              handleDelete(note.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteComponent;
