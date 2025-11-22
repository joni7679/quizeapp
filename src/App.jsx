import React, { useEffect, useState } from 'react'
import Timer from './components/Timer'
import Question from './components/Question'

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(300)
  const [displayTime, setDisplayTime] = useState('')
  const [startExam, setStartExam] = useState(false)
  const handleStartExam = () => {
    setStartExam(true)
  }

  // handlesubmit
  const handleSubmit = () => {
    setSubmit(true)
    setStartExam(false);
    alert("Result submit successfully")
  }
  // left time logic
  useEffect(() => {
    let intervalId;
    if (startExam) {
      intervalId = setInterval(() => {
        setTimer(prev => {
          if (prev <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prev - 1;
        })
      }, 1000);
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [startExam])

  // time format logic
  useEffect(() => {
    if (timer === 0) {
      handleSubmit()
    }
    let formatedTime = (`${(Math.floor(timer / 60)).toString().padStart(2, 0)} : ${(timer % 60).toString().padStart(2, 0)} `)
    setDisplayTime(formatedTime)
  }, [timer])

  return (
    <>
      {submit ? (
        <div className=" p-8">
          <h1 className="text-4xl font-bold mb-4">Your Score: {score}</h1>
          <p className="text-xl text-gray-600">Thank you for completing the test!</p>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen flex-col bg-red-5000">
          <Timer startExam={startExam} timer={displayTime} submit={submit} handleSubmit={handleSubmit} score={score} />
          <Question startExam={startExam} handleStartExam={handleStartExam} score={score} setScore={setScore} submit={submit} handleSubmit={handleSubmit} />
        </div>
      )}
    </>
  )
}

export default App
