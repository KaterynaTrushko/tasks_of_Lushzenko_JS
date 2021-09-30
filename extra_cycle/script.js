/*	
Используя вложенные циклы создайте таблицу умножения от 1 до 10. 
Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. 
Оформить в виде столбцов где выводятся множители и результат.*/

function one() {
  let out = "";
  for (let i = 1; i < 11; i++) {
    for (let k = 1; k < 11; k++) {
      out += `${i} * ${k} = ${i*k}<br>`;
    }
    out += '<br>';
  }
  let div1 = document.createElement('div');
  div1.className = 'mult';
  cycle.append(div1);
  div1.innerHTML = out ;
}

//one();


