
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

interface Todo {
  task: string;
  description: string;
  status: string;
  complete: boolean;
}

const TaskList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTaskValue, setEditTaskValue] = useState('');
  const [editDescriptionValue, setEditDescriptionValue] = useState('');
  const [editStatusValue, setEditStatusValue] = useState('');
  const [editStatussValue, setEditStatussValue] = useState('');

  const addTask = () => {
    if (task && description) {
      setTodos([...todos, { task, description, status: 'ToDo', complete: false }]);
      setTask('');
      setDescription('');
    }
  };

  const editTask = (index: number, newTask: string, newDescription: string, newStatus: string) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, task: newTask, description: newDescription, status: newStatus } : todo));
    setTodos(newTodos);
  };
  const startEditing = (index: number) => {
    setEditIndex(index);
    setEditTaskValue(todos[index].task);
    setEditDescriptionValue(todos[index].description);
    setEditStatusValue(todos[index].status);
    setEditStatussValue(todos[index].status);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditIndex(null);
    setEditTaskValue('');
    setEditDescriptionValue('');
    setEditStatusValue('');
    setEditStatussValue('');

  };

  const saveEdit = () => {
    if (editIndex !== null) {
      editTask(editIndex, editTaskValue, editDescriptionValue, editStatussValue);
      cancelEditing();
    }
  };

  const getStatusOptions = () => {
    const statusOptions: Record<string, JSX.Element[]> = {
      Blocked: [
        <option key="Blocked" value="Blocked">Blocked</option>,
        <option key="ToDo" value="ToDo">ToDo</option>
      ],
      ToDo: [
        <option key="ToDo" value="ToDo">ToDo</option>,
        <option key="InProgress" value="InProgress">InProgress</option>
      ],
      InProgress: [
        <option key="InProgress" value="InProgress">InProgress</option>,
        <option key="Blocked" value="Blocked">Blocked</option>,
        <option key="InQA" value="InQA">InQA</option>
      ],
      InQA: [
        <option key="InQA" value="InQA">InQA</option>,
        <option key="Done" value="Done">Done</option>,
        <option key="ToDo" value="ToDo">ToDo</option>
      ],
      Done: [
        <option key="Done" value="Done">Done</option>,
        <option key="Deployed" value="Deployed">Deployed</option>
      ],
      Deployed: [
        <option key="Deployed" value="Deployed">Deployed</option>
      ]
    };

    return statusOptions[editStatusValue] || [];
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditStatussValue(e.target.value);
    e.target.value === editStatusValue;
  };
  const renderTasks = () => {
    return todos.map((todo, index) => (
      <>
        {!todo ? (
          <div className='row'>
            <img className='' src="" alt="" />
          </div>
        ) : (
          <div key={index} className="col-6 col-md-2 p-2">
            <div className="sec_back_color p-3 ">
              <p className="font_15 semibold mb-1">{todo.task}</p>
              <p className="font_13">
                {todo.description}
              </p>
              <div className="d-flex justify-content-between align-content-center align-items-center">
                <p className="font_14 m-0 text-info semibold ">
                  {todo.status}
                </p>
                <button className="btn btn-sm  font_15 p-2 active_btn   text-white col-auto align-items-center d-flex justify-content-center" data-bs-dismiss="offcanvas"
                  aria-label="Close" onClick={() => startEditing(index)}>
                  <i className="fi fi-br-edit font_13 d-flex align-items-center m-1"></i>

                </button>

              </div>

            </div>
          </div>
        )}
      </>
    ));
  };

  return (
    <>
      <div className="center_menu">
        <div className="d-flex justify-content-center align-items-center col-12">
          <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4 px-0 px-md-5">
            <div className="sec_back_color bor_10">
              <div className="card-body p-4 text-center">
                {isEditing === true ? (
                  <div
                    className=" row justify-content-center px-3"
                  >
                    <p className="d-flex m-0 p-0 font_18 semibold  color_main">EDIT  <p className='text-black semibold mx-1  mb-0'>TASK</p> </p>
                    <div className='horiz_line mb-4 mt-1'>
                    </div>
                    <p className="d-flex mb-2 p-0 font_15 semibold color_sec_text">Task Title</p>
                    <Form.Group className="mb-3 p-0" controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" value={editTaskValue} onChange={(e) => setEditTaskValue(e.target.value)} placeholder="" />
                    </Form.Group>
                    <p className="d-flex mb-2 p-0 font_15 semibold color_sec_text">Description</p>
                    <Form.Group className="mb-3 p-0" controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" value={editDescriptionValue} onChange={(e) => setEditDescriptionValue(e.target.value)} rows={5} />
                    </Form.Group>
                    <Form.Select onChange={handleStatusChange}>
                      {getStatusOptions()}
                    </Form.Select>
                    <button
                      onClick={saveEdit}
                      className="btn btn-sm bor_6 font_15 py-2 active_btn border-0 mt-4 text-white col-12 align-items-center d-flex justify-content-center"
                    >
                      <i className="fi fi-br-check icon_15 d-flex align-items-center mx-1"></i>
                      <p className="mx-1 my-0 d-flex align-items-center">Apply</p>
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="btn btn-sm bor_6 bg-warning font_15 py-2  border-1 mt-4 text-black col-12 align-items-center d-flex justify-content-center"
                    >
                      <i className="fi fi-br-circle-xmark icon_15 d-flex align-items-center mx-1"></i>
                      <p className="mx-1 my-0 d-flex align-items-center">Cancel</p>
                    </button>
                  </div>
                ) : (
                  <div
                    className=" row justify-content-center px-3"
                  >
                    <p className="d-flex m-0 p-0 font_18 semibold  color_main">ADD  <p className='text-black semibold mx-1 mb-0 '>TASK</p> </p>
                    <div className='horiz_line mb-4 mt-1'>
                    </div>
                    <p className="d-flex mb-2 p-0 font_15 semibold color_sec_text">Task Title</p>
                    <Form.Group className="mb-3 p-0" controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="" />
                    </Form.Group>
                    <p className="d-flex mb-2 p-0 font_15 semibold color_sec_text">Description</p>
                    <Form.Group className="mb-3 p-0" controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
                    </Form.Group>
                    <button
                      onClick={addTask}
                      className="btn btn-sm bor_6 font_15 py-2 active_btn border-0 mt-4 text-white col-12 align-items-center d-flex justify-content-center"
                    >
                      <i className="fi fi-br-plus icon_15 d-flex align-items-center mx-1"></i>
                      <p className="mx-1 my-0 d-flex align-items-center">Apply</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center align-items-center col-12 mt-4">
        <div className="col-12 col-md-8 col-lg-6 col-xl-4 px-0 px-md-5 row justify-content-center">
          <button
            className="col-12  sec_back_color py-2 btn btn-sm bor_6 font_15 py-2    align-items-center d-flex justify-content-center"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            <i className="fi fi-br-time-past icon_15 d-flex align-items-center mx-1"></i>
            <p className="mx-1 my-0 d-flex">Recent Task</p>
          </button>
        </div>
        <div>
        </div>
        <div
          className="offcanvas offcanvas-bottom"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">
              Recent added todo task
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body small row ">
            {renderTasks()}
          </div>
        </div>
      </div>
    </>
  );
};
export default TaskList;



