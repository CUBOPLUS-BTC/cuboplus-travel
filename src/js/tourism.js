const address = "32ixEdVJWo3kmvJGMTZq5jAQVZZeuwnqzo";
const balanceElement = document.getElementById("balance-number");

const getBalance = async () => {
    const result = await fetch(`https://mempool.space/api/address/${address}`);
    const response = await result.json();
    const balance = Math.floor(response.chain_stats.funded_txo_sum / 100000000);
    return balance;
}

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;

    // Función de easing personalizada con potencia mayor para un ease-out más fuerte
    const easeOutPower = (t) => 1 - Math.pow(1 - t, 5);

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = (timestamp - startTimestamp) / duration;
        const progress = Math.min(easeOutPower(elapsed), 1);
        const currentValue = Math.round(progress * (end - start) + start);

        element.innerHTML = currentValue;

        if (elapsed < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.innerHTML = end;
        }
    };

    window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", async (e) => {
    const balance = await getBalance();

    animateValue(balanceElement, 0, balance, 1500);
});