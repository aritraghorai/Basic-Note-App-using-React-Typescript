import React, { useRef, useState } from "react";
import { Note } from "../Models/NotesModel";

type Props = {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  notes: Note[];
};

const CreateNotes = ({ setNotes, notes }: Props) => {
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const texteRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || texteRef.current?.value === "") {
      return setError("All field are Mandatory");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (texteRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
    (titleRef.current as HTMLInputElement).value = "";
    (texteRef.current as HTMLTextAreaElement).value = "";
    color: (colorRef.current as HTMLInputElement).value = "#dfdfdf";
  };
  return (
    <form
      action="submit"
      className="bg-gray-300 p-3  rounded-xl w-full md:w-[50vw]"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label className="block text-3xl font-bold " htmlFor="title">
        Enter Notes Title
      </label>
      <input
        className="block my-3 p-1 text-xl rounded-md"
        type="text"
        name="title"
        id="title"
        required
        ref={titleRef}
      />
      <label className="block text-3xl font-bold " htmlFor="description">
        Enter Notes Description
      </label>
      <textarea
        className="block my-3 p-1 text-xl rounded-md"
        name="description"
        id="description"
        cols={30}
        required
        rows={3}
        ref={texteRef}
      ></textarea>
      <label className="block text-3xl font-bold rounded-md" htmlFor="favcolor">
        Select your favorite color:
      </label>
      <input
        className="block my-2 w-20 h-10 rounded-sm p-[1px] outline-white outline-none"
        type="color"
        id="favcolor"
        name="favcolor"
        defaultValue="#dfdfdf"
        ref={colorRef}
      ></input>
      <button
        type="submit"
        className="text-2xl border-1 rounded-lg w-[20vw] md:w-[10vw] bg-red-600 text-white mt-3 p-1"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateNotes;
