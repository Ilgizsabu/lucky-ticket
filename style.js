        const ticketNumber = +prompt('Введите 6 цифр номера вашего билета!');

        const ticketMoscowPartOne = Math.floor(ticketNumber / 1000);
        const ticketMoscowPartTwo = ticketNumber % 1000;

        const ticketPiterPartOne = ticketNumber % 10 + Math.floor(ticketNumber % 1000 / 100) + Math.floor(ticketNumber % 100000 / 10000);
        const ticketPiterPartTwo = Math.floor(ticketNumber % 100 / 10) + Math.floor(ticketNumber % 1000000 / 100000) + Math.floor(ticketNumber % 10000 / 1000);
        
        const ticketMoscow = ticketMoscowPartOne === ticketMoscowPartTwo;
        const ticketPiter = ticketPiterPartOne === ticketPiterPartTwo;
        const ticketSuper = ticketMoscow && ticketPiter;
        
        console.log('Билет по московской системе счастливый: ', ticketMoscow);
        console.log('Билет по питерской системе счастливый: ', ticketPiter);
        console.log('Билет супер-билет счастливый: ', ticketSuper);
        
        if (ticketNumber !== ticketNumber || ticketNumber < 100000 || ticketNumber > 999999) {
            alert('Не верные данные, попробуйте еще раз');
        }