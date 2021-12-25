// export interface Questions {
//     [index: number]: {
//         id: number,
//         question: string,
//         possibleAnswers: [string, string, string, string],
//     };
// }

export interface Question {
    id: number,
    question: string,
    possibleAnswers: [string, string, string, string],
    correctAnswer: string,
}
