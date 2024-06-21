export const guardarRespuestas = (numIndex, correctAnswer, selectedValue, levelSubject) => {
    // Obtener las respuestas anteriores del localStorage
    const previousAnswers = JSON.parse(localStorage.getItem(`${levelSubject}`)) || {};
    // Guardar la respuesta del usuario en el localStorage
    previousAnswers[numIndex] = {
        respuestaUser: selectedValue,
        respuestaCorrecta: correctAnswer,
        isCorrect: selectedValue === correctAnswer ? true : false,
    };
    localStorage.setItem(`${levelSubject}`, JSON.stringify(previousAnswers));
}