/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let firstCommand = 0;
    let secondCommand = 0;
    for(let i = 0; i < points.length; i++){
        let fisrtCount = 0;
        let secondCount = 0;
        let commandMatch = points[i];
        fisrtCount = Number(commandMatch.slice(0, -3));
        secondCount = Number(commandMatch.slice(3));
        firstCommand = firstCommand + fisrtCount;
        secondCommand =  secondCommand + secondCount;
    };

        if(firstCommand > secondCommand){
                return 1
            }
        if(secondCommand > firstCommand){
                return 2
            }
        if(firstCommand === secondCommand) {
            let result = undefined
                return result
    }
}

module.exports = getWinner;
