import React from "react";
import ExerciseCard from "./ExerciseCard"; 

const ExerciseList = ({ exercises }) => {

  
  return (
    <>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <ExerciseCard key={exercise.id} exercise={exercise} />
        </div>
      ))}
    </>
  );
};

export default ExerciseList;
