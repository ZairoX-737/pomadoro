import React from "react";
import "../App.css";
import menu from "../images/menu2.png";
import check from "../images/check2.png";

const List = (props) => {
  const { tasks, handleClickBacklog } = props;
  return (
    <div className="task_list" >
      {tasks.map((task) => {
        return (
          <div className="task_item">
            <div
              key={task.id}
              className="task_main"
              onClick={handleClickBacklog}
            >
              <div className="task_title">
                <img src={check} alt=""/>
                <span>{task.title}</span>
              </div>
              <div>
                0/{task.pomos}
                <button className="task_settings">
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
        );
      })}
    </div>
  );
};

export default List;
