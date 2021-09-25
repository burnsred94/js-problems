/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */

function sum(n) {
    let count = 0;
    if(n > 0){
             for(let i = 0; i < n; i++ ){
                count = count + i;
            };
        return count + n
    }else if(n === 0 || n <= 0 || n == NaN || n == undefined){
        return 1
    };

};

module.exports = sum;

