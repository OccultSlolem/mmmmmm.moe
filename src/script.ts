function moeText(): string {
    const num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            return "この瞳が好きだよ。";
        case 2:
            return "君が好きだよ。";
        case 3:
            return "あなたが最高だよ。";
        default:
            return "あなたが最高だよ。";
    }
}

export function setupEventListeners(button: HTMLButtonElement, url: string) {
    button.addEventListener('click', () => { new Audio(url).play()});

    const textContainer = document.querySelector('#text-container') as Element;
    button.addEventListener("click", (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const text = document.createElement("div");
        text.innerText = moeText();
        text.style.position = "absolute";
        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
        text.style.transition = "all 2s";
        text.style.color = "hotpink";
        textContainer.appendChild(text);
        setTimeout(() => {
            text.style.top = "-100px";
            text.style.opacity = "0";
        }, 100);
        setTimeout(() => {
            textContainer.removeChild(text);
        }, 1000);
    });
}
