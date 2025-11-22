import React from 'react'

const Timer = ({ timer, startExam }) => {

    return (
        <>

            {
                startExam && <span className='font-semibold capitalize'>timer left  : {timer}s </span>
            }

        </>
    )
}

export default Timer
