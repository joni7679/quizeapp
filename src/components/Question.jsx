import React, { useState } from "react";
// import 
import questions from '../questions.json'

const Question = ({ handleSubmit, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(false);

  const handleClick = (option) => {
    if (!selected) {
      if (option === questions[currentIndex].answer) {
        setScore(prev => prev + 1);
      }
      setSelected(true);
    }
    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setSelected(false);
      }, 50);
    }
  };

  // renderQuestion
  const renderQuestion = (id) => {
    setCurrentIndex(id)
  }

  return (
    <>
      <div className="flex items-start  gap-5">
        <div>
          <h2 className='mt-8 mb-4'>{questions[currentIndex].id}, {questions[currentIndex].question}</h2>
          <div className='flex flex-col gap-3 '>
            {
              questions[currentIndex].options.map((option) => {
                return <button key={option} disabled={selected} onClick={() => handleClick(option)} className={`${selected ? "bg-blue-600" : ""}`}>
                  {option}
                </button>
              })
            }
          </div>
          <div className="flex gap-4 mt-5">
            {
              currentIndex > 0 && (
                <button onClick={() => setCurrentIndex(currentIndex - 1)} className="mt-5">
                  Prev
                </button>
              )
            }
            {
              currentIndex === questions.length - 1 ? (
                <button onClick={handleSubmit} className="mt-5">
                  Submit
                </button>
              ) : (
                <button onClick={() => setCurrentIndex(currentIndex + 1)} className="mt-5">
                  Next
                </button>
              )
            }
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 flex-wrap max-w-md w-full bg-green-500 p-5 rounded-2xl  mt-5 ">
          {
            questions.map((que, i) => {
              return (
                <button onClick={() => renderQuestion(i)} key={i}>{que.id}</button>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Question;
