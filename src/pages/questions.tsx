import type { NextPage } from 'next';
// import { Questions } from '../types/questions';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';
import { Question } from '../types/questions';
import styled from '@emotion/styled';


const QuestionsPage: NextPage = (page) => {
    const { data, error } = useFuteramaData('questions');
    
    if (error) return <Error />;
    if (!data) return <Loading />;
    console.log(`data`);
    return (
            <QuestionContainer>
                {data.map((QuestionsData: Question) => {
                    const { id, question, possibleAnswers, correctAnswer } =
                        QuestionsData;
                    return (
                        <div key={`question-list-${id}`}>
                        <QusetionCard>
                            <QuestionTitle>Q{id}. {question}</QuestionTitle>
                            {possibleAnswers.map((possibleAnswer : string, index: number) => {
                                return (
                                    <div key={`answer-list-${id}`}>
                                    <input id={`answer${id}-${index}`} type="radio" name={`answer${id}`} />
                                    <label htmlFor={`answer${id}-${index}`} >{possibleAnswer}</label>
                                    </div>
                                )
                            })}
                        </QusetionCard>
                        </div>
                    );
                })}
            </QuestionContainer>
    );
};

const QuestionContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(1fr, 1);
    padding-top: 170px;
    background-color: #BFA2DB;

`
const QusetionCard = styled.article`
    padding: 0px 20px 15px;
    border: 3px solid #6155a6;
    background-color: #fff;
    border-radius: 10px;
    margin: 15px; 
`

const QuestionTitle = styled.h2`
    font-size: 1.2rem;
`

export default QuestionsPage;
