//Write a program that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz", instead of the number. For multiples of 5, print "Buzz", instead of the number. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


let box = document.getElementById("text");


        for (let i = 1; i < 101; i++){
            if (i % 3 == 0 && i % 5 == 0) {
                print("FizzBuzz");
            } else if (i % 3 == 0) {
                print("Fizz");
            } else if (i % 5 == 0) {
                print("Buzz");
            } else {
                print(i);
            } 
        }




        function print(msg) {
            let p = document.createElement('p');
            p.innerText = msg;
        
            box.appendChild(p);
        }

















