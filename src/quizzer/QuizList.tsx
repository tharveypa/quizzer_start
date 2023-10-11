import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizCard } from "./QuizCard";
import "./QuizList.css";
import { QuizView } from "./QuizView";

interface quizListProps {
    quizzes: Quiz[],
    editQuiz: (quizId: number, quiz: Quiz) => void,
    deleteQuiz: (qId: number) => void,
    showModal: () => void
}

export const QuizList = ({
    quizzes,
    editQuiz,
    deleteQuiz,
    showModal
}: quizListProps) => {
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
                            handleClick={handleQuizView}
                        ></QuizCard>
                    ))}
                    <Button className="add_btn" onClick={showModal}>
                        Add New Quiz
                    </Button>
                </>
            )}
            {quizzes.map((quiz: Quiz) => {
                if (displayId === quiz.id) {
                    return (
                        <QuizView
                            key={quiz.id}
                            quiz={quiz}
                            editQuiz={editQuiz}
                            deleteQuiz={deleteQuiz}
                            resetView={resetQuizView}
                        ></QuizView>
                    );
                }
                else{
                    return(
                        <div></div>
                    )
                }
            })}
        </div>
    );
};