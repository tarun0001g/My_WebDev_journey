import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateToPastes } from "../redux/pasteSlice";
import { addToPastes } from "../redux/pasteSlice";

const Home = () => {
  let [title, setTitle] = useState("");
  let [value, setValue] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch(); // we are using dispatcher to access reducer function(who performs state managements)

  //Onclick Handling fn for create/update
  //we want to add logic that will create/update paste(data) and forward it to the slice(where slice will store it in local storage)
  function handleCreatePaste() {
    //creating a paste(data) object
    const paste = {
      title: title, //paste title
      content: value, //actual content
      _id:
        pasteId || // pasteid
        Date.now().toString(36), //if pastid not exist then it will creates its own random id
      createdAt: new Date().toISOString(), // current Date & time of paste creation/updation
    };
    //for Storing a paste object

    if (pasteId) {
      //if pasteId is already exist
      // then, update the paste
      dispatch(updateToPastes(paste)); // we are sharing paste as a payload to slice
    } else {
      //Create a new paste
      dispatch(addToPastes(paste)); // we are sharing paste as a payload to slice
    }
    //after creation/updation of paste, set

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-4 mt-2 text-center place-content-between">
        {/* Title input */}
        <input
          className="bg-black p-1 pl-3 rounded-2xl mt-1 w-[67%]"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Create/Update Button */}
        <button
          className="bg-black  p-2 rounded-2xl mt-1 gap-6 w-[25%]"
          onClick={handleCreatePaste}
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      <div className="mt-5">
        {/* Content input */}
        <textarea
          className="bg-black mt-4 min-w-[500px] p-2 rounded-2xl"
          type="text"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
