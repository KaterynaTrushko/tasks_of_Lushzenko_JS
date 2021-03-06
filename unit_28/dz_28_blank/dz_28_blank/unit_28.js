 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
 
 class Goods {
   constructor(name, amount) {
     this.name = name;
     this.amount = amount;
   }
 }
 let goods = new Goods("Dalmatians", 101);
 console.log(goods);

 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 class Goods {
   constructor(name, amount, image, count){
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
   }
 }

 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
//  https://i.pinimg.com/originals/98/6b/8a/986b8ac2b7f19f69b6621375a7e599ed.jpg
 class Goods {
   constructor(name, amount, image, price){
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.price = price;
        }
    drow(selectedClass) {
      document.querySelector(`${selectedClass}`).innerHTML = `<img src="${this.image}" alt="toys"><span>${this.name}</span><span>${this.price}</span>`;
    }
   }

 
 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
   let goods2 = new Goods("Dalmatians", 101, 'https://i.pinimg.com/originals/98/6b/8a/986b8ac2b7f19f69b6621375a7e599ed.jpg', '$30');
   goods2.drow(".out-4");

 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.


 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.


 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.


 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.


 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.


 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.


 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.


 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.