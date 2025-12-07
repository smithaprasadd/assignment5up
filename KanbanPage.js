import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable
} from "@hello-pangea/dnd";

const KanbanPage = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Movie poster design" },
    { id: "2", text: "Backend API setup" },
    { id: "3", text: "Payment integration" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setTasks(items);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-xl">
      <h2 className="text-xl mb-4 text-gray-700 dark:text-white">Kanban Board</h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="kanban">
          {(provided) => (
            <div
              className="space-y-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.text}
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default KanbanPage;
