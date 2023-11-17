import React, { useState } from "react";
import "../App.css";
import uniqid from "uniqid";

import menu from "../images/menu.png"
import add from "../images/add.png"
import FormAddNewTask from "./FormAddNewTask";
import List from './List'

const Footer = props =>{
    const {tasks, setTasks} = props;
    const [isFormVisible, setFormVisible] = useState(false);
    const [isSelectVisible, setSelectVisible] = useState(true);

    const addNewTask = (title, note, pomos) => {
        const newTask = {
          id: uniqid(),
          title: title,
          note: note,
          pomos: pomos,
        };
        setTasks([...tasks, newTask])
    }

    const handleClickBacklog = () => {
      setFormVisible(!isFormVisible);
      setSelectVisible(!isSelectVisible);
    };
    console.log(tasks);
    return (
      <>
        <div className="footer">
          <div className="footer_btns">
            <span>Tasks</span>
            <button className="footer_settings">
              <img src={menu} alt=""/>
            </button>
          </div>
          <hr></hr>
          <List
            tasks={tasks}
            setTasks={setTasks}
            handleClickBacklog={handleClickBacklog}
          />
          {isFormVisible && (
            <FormAddNewTask
              addNewTask={addNewTask}
              setFormVisible={setFormVisible}
              handleClickBacklog={handleClickBacklog}
            />
          )}
          {isSelectVisible && (
            <button className="addTask" onClick={handleClickBacklog}>
              <img src={add} alt=""/> Add Task
            </button>
          )}
        </div>
      </>
    );
}

export default Footer