const NameTyping = document.querySelector('.name-typing');

const typing = () => {
    const TimeOut = (content, time) => {
        setTimeout(() => {
            NameTyping.textContent = `${content}`;
        }, time);
    };
    TimeOut('Aleshin Stanislav|', 250);
    TimeOut('Aleshin Stanisla|', 500);
    TimeOut('Aleshin Stanisl|', 750);
    TimeOut('Aleshin Stanis|', 1000);
    TimeOut('Aleshin Stani|', 1250);
    TimeOut('Aleshin Stan|', 1500);
    TimeOut('Aleshin Sta|', 1750);
    TimeOut('Aleshin St|a', 2000);
    TimeOut('Aleshin S|ta', 2250);
    TimeOut('Aleshin |ta', 2500);
    TimeOut('Aleshin |sta', 2750);
    TimeOut('Aleshin| sta', 3000);
    TimeOut('Aleshi| sta', 3250);
    TimeOut('Alesh|i sta', 3500);
    TimeOut('Ales|hi sta', 3750);
    TimeOut('Ale|shi sta', 4000);
    TimeOut('Al|eshi sta', 4250);
    TimeOut('A|leshi sta', 4500);
    TimeOut('|leshi| sta', 4750);
    TimeOut('l|eshi sta', 5000);
    TimeOut('|eshi sta', 5250);
    TimeOut('L|eshi sta', 5500);
    TimeOut('Le|shi sta', 5750);
    TimeOut('Les|hi sta', 6000);
    TimeOut('Lesh|i sta', 6250);
    TimeOut('Leshi| sta', 6500);
    TimeOut('Leshi |sta', 6750);
    TimeOut('Leshi|sta', 7000);
    TimeOut('Leshista', 7250);
    TimeOut('<Leshista', 7500);
    TimeOut('<Leshista>', 7750);
    TimeOut('<Leshista/>', 8000);
};

setTimeout(() => {
    typing();
}, 2000);
