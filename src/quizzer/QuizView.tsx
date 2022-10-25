import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizExpanded } from "./QuizExpanded";
import { QuizEdit } from "./QuizEdit";

import "./QuizView.css";

export function QuizView ({
    quiz,
    editQuiz,
    deleteQuiz,
    resetQuizView
}: {
    quiz: Quiz,
    editQuiz: (qId: number, newQuiz: Quiz)=> void,
    deleteQuiz: (qId: number) => void,
    resetQuizView: () => void,
}): JSX.Element{
    const [edit, setEdit] = useState(false);

    const switchEdit = () => {
        setEdit(!edit);
    };

    return (
        <div className="quiz_card">
            {edit && (
                <QuizEdit
                    quiz={quiz}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                    switchEdit={switchEdit}
                    resetQuizView={resetQuizView}
                ></QuizEdit>
            )
}
            {!edit && (
                <QuizExpanded
                    quiz={quiz}
                    editQuiz={editQuiz}
                    resetQuizView={resetQuizView}
                    switchEdit={switchEdit}
                ></QuizExpanded>
            )
}
        </div>
    );
}
