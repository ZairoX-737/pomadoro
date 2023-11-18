import React, { useState } from "react";
import "../App.css";
import uniqid from "uniqid";
import menu from "../images/menu2.png";
import check from "../images/check2.png";

const List = (props) => {
  const { tasks, setTasks } = props;
  const [isTaskVisible, setTaskVisible] = useState(true);
  const [values, setValues] = useState({
    title: "",
    note: "",
    pomos: "",
    actpomos: "",
  });

  const ClickToVisible = (id) => {
    setValues({ ...values, title: "", note: "", pomos: "", actpomos: "" });
    setTaskVisible(!isTaskVisible);
    let changeDiv = document.getElementById(`${id}`);
    if(changeDiv.style.display === "none"){
      changeDiv.style.display = "block"
    } else{
      changeDiv.style.display = "none"
    }
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };

  const handleChangeSubmit = (e) => {
    e.preventDefault()
    ChangeTask(values, e.target.parentNode.id);
    ClickToVisible(e.target.parentNode.id);
  };

  const ChangeTask = (values, id) => {
    const updatedTask = tasks.map((task) => {
      let title = values.title === "" ? task.title : values.title;
      let note = values.note === "" ? task.note : values.note;
      let pomos = values.pomos === "" ? task.pomos : values.pomos;
      let actpomos = values.actpomos === "" ? task.actpomos : values.actpomos;
      if(task.id === id){
        return { ...task, title: title, note: note, pomos: pomos, actpomos: actpomos }
      }
      return task;
    });
    setValues({ ...values, title: "", note: "", pomos: "", actpomos: ""});
    setTasks(updatedTask);
  };

  const handleClickFormDelete = (e) => {
    var result = window.confirm("Want to delete?");
    let task_id = e.target.parentNode.parentNode.parentNode.id;
    if (result) {
      const updatedTasks = tasks.filter((task) => {
        return task.id !== task_id;
      });
      setTasks(updatedTasks);
      ClickToVisible(task_id);
    }
  };

  return (
    
    <div className="task_list">
      {tasks.map((task) => {
        return (
          <>
            <div className="task_item" id={uniqid()}>
              <div key={task.id} className="task_main">
                <div className="task_title">
                  <img src={check} alt="" />
                  <span>{task.title}</span>
                </div>
                <div className="task_sets">
                  <div>
                    {task.actpomos}/{task.pomos}
                  </div>
                  <button
                    className="task_settings"
                    onClick={() => ClickToVisible(task.id)}
                  >
                    <img src={menu} alt=""></img>
                  </button>
                </div>
              </div>

              {task.note === "" ? (
                <div></div>
              ) : (
                <div className="task_note">{task.note}</div>
              )}
            </div>

            <div
              className="task_change"
              id={task.id}
              style={{ display: "none" }}
            >
              <form
                className="form change-form"
                spellCheck="false"
                onSubmit={handleChangeSubmit}
                autoComplete="off"
              >
                <input
                  className="form_text"
                  id="taskTitle"
                  name="title"
                  type="text"
                  placeholder="What are you working on?"
                  defaultValue={task.title}
                  onChange={handleChange}
                  required
                />
                <span>Act / Est Pomodoros</span>
                <div className="pomos">
                  <input
                    className="form_nums"
                    id="taskActPomos"
                    name="actpomos"
                    type="number"
                    min="0"
                    max={values.pomos === "" ? task.pomos : values.pomos}
                    defaultValue={task.actpomos}
                    placeholder="Act"
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="form_nums"
                    id="taskPomos"
                    name="pomos"
                    type="number"
                    min="1"
                    defaultValue={task.pomos}
                    placeholder="Est"
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  className="form_txtarea"
                  id="taskNote"
                  name="note"
                  placeholder="Some notes.."
                  defaultValue={task.note}
                  onChange={handleChange}
                />
                <div className="form_foot change-form-foot">
                  <button type="reset" onClick={handleClickFormDelete}>
                    Delete
                  </button>
                  <div>
                    <button
                      type="reset"
                      onClick={() => ClickToVisible(task.id)}
                    >
                      Cancel
                    </button>
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default List;
