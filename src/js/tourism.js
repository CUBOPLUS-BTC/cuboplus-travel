const address = "32ixEdVJWo3kmvJGMTZq5jAQVZZeuwnqzo";
const balanceElement = document.getElementById("balance-number");

const getBalance = async () => {
    const result = await fetch(`https://bitcoin.gob.sv/api/address/${address}`);
    const response = await result.json();
    const balance = Math.floor(response.chain_stats.funded_txo_sum / 100000000);
    return balance;
}

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", async (e) => {
    const balance = await getBalance();

    animateValue(balanceElement, 0, balance, 1500);
});