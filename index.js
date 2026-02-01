document.getElementById('no').addEventListener('mouseenter', function (event) {
    const button = this;
    const container = document.querySelector('.btnsctn');
    const containerRect = container.getBoundingClientRect();

    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left - containerRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top - containerRect.top + buttonRect.height / 2;

    const deltaX = mouseX - buttonCenterX;
    const deltaY = mouseY - buttonCenterY;

    const distance = 300;
    const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (length > 0) {
        const moveX = (deltaX / length) * distance;
        const moveY = (deltaY / length) * distance;

        const maxMoveX = Math.max(0, Math.min(containerRect.width - buttonRect.width, buttonRect.left - containerRect.left - moveX));
        const maxMoveY = Math.max(0, Math.min(containerRect.height - buttonRect.height, buttonRect.top - containerRect.top - moveY));

        button.style.transition = 'transform 0.5s ease';
        button.style.transform = `translate(${maxMoveX - (buttonRect.left - containerRect.left)}px, ${maxMoveY - (buttonRect.top - containerRect.top)}px)`;
    }
});

const h1 = document.querySelector('h1');
const noMessages = ["Bruh Ayaw?", "Wag naman :<", "May iba kalang ka date eh!", "Ayaw mo talaga! :<", "Sana mag yes na sya"];

document.getElementById('yes').addEventListener('click', function () {
    h1.textContent = "Yayyy!! Date tayo February 15, Sunday @ SM Sta Rosa!~";
    confetti(); 
});

document.getElementById('no').addEventListener('click', function () {
    const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
    h1.textContent = randomMessage;
});