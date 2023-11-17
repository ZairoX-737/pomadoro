import React, { useState } from "react";
import '../App.css'


const FormAddNewTask = (props) => {
  const { addNewTask, handleClickBacklog } = props;
  const [values, setValues] = useState({
    title: "",
    note: "",
    pomos: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      addNewTask(values.title, values.note, values.pomos);
    }
    console.log(values)
    handleClickBacklog();
  };

  return (
    <form
      className="form"
      spellCheck="false"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className="form_text"
        id="taskTitle"
        name="title"
        type="text"
        placeholder="What are you working on?"
        value={values.title}
        onChange={handleChange}
        required
      />
      <span>Est Pomodoros</span>
      <div className="pomos">
        <input
          className="form_nums"
          id="taskPomos"
          name="pomos"
          type="number"
          min="0"
          value={values.pomos}
          placeholder="Pomos.."
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        className="form_txtarea"
        id="taskNote"
        name="note"
        placeholder="Some notes.."
        value={values.note}
        onChange={handleChange}
      />
      <div className="form_foot">
        <button className="" type="reset" onClick={handleClickBacklog}>
          Cancel
        </button>
        <button className="" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default FormAddNewTask;
