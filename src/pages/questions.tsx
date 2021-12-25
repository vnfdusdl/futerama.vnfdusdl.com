import type { NextPage } from 'next';
// import { Questions } from '../types/questions';
import { useFuteramaData } from '../../hooks/useFuteramaData';
import { Error, Loading } from '../components';
import { Question } from '../types/questions';

const QuestionsPage: NextPage = (page) => {
    const { data, error } = useFuteramaData('questions');
    
    if (error) return <Error />;
    if (!data) return <Loading />;
    console.log(`data`);
    return (
        <div>
            <h1>Questions</h1>
            <main>
                {data.map((QuestionsData: Question) => {
                    const { id, question, possibleAnswers, correctAnswer } =
                        QuestionsData;
                    return (
                        <div key={`question-list-${id}`}>
                        <main>
                            <h2>{question}</h2>
                            {possibleAnswers.map((possibleAnswer : string, index: number) => {
                                return (
                                    <div>
                                    <input id={`answer${id}-${index}`} type="radio" name={`answer${id}`} />
                                    <label htmlFor={`answer${id}-${index}`} >{possibleAnswer}</label>
                                    </div>
                                )
                            })}
                        </main>
                        </div>
                    );
                })}
            </main>
        </div>
    );
};

export default QuestionsPage;
