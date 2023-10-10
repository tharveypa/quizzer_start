import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizCard } from "./QuizCard";
import "./QuizList.css";
import { QuizView } from "./QuizView";
import { Button } from "react-bootstrap";

export function QuizList ({
    quizzes,
    editQuiz,
    deleteQuiz,
    handleShowModal
}: {
    quizzes: Quiz[],
    editQuiz: (qId: number, newQuiz: Quiz) => void,
    deleteQuiz: (qId: number) => void,
    handleShowModal: () => void
}): JSX.Element {
    const [displayId, setDisplayId] = useState<null | number>(null);

    const handleQuizView = (id: number) => {
        setDisplayId(id);
    };

    const resetQuizView = () => {
        setDisplayId(null);
    };
    
    return (
        <div className="quiz_list">
            {!displayId && (
                <>
                    {quizzes.map((quiz: Quiz) => (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            handleQuizView={handleQuizView}
                        ></QuizCard>
                    ))}
                    <Button className="add_btn" onClick={handleShowModal}>
                        Add New Quiz
                    </Button>
                </>
            )}
            {quizzes.map((quiz: Quiz) => (displayId === quiz.id ? 
                        <QuizView
                            key={quiz.id}
                            quiz={quiz}
                            editQuiz={editQuiz}
                            deleteQuiz={deleteQuiz}
                            resetQuizView={resetQuizView}
                        ></QuizView>
            : ""))}
        </div>
    );
};