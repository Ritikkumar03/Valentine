let currentQuoteIndex = 0;

function changeLoveQuotes() {
    const loveQuotesElement = document.getElementById('loveQuotes');
    loveQuotesElement.textContent = loveQuotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % loveQuotes.length;
}

function showForm(answer) {
    if (answer === 'yes') {
        const place = prompt("Great! Please provide the place to make our date special:");
        if (place) {
            const confirmResult = confirm(`Whatsapp pr v bata do ki ${place} mai mil sakte hai`);
            if (confirmResult) {
                const whatsappMessage = encodeURIComponent(`I also love you not just as a friend but as a lover, and please accept me as your G.F. So, Let's meet at ${place}`);
                window.location.href = `https://wa.me/9310285633?text=${whatsappMessage}`;
            }
        }
    }
}

function showAlertLoop(answer) {
    if (answer === 'no') {
        let count = 0;
        const intervalId = setInterval(() => {
            if (count < 3) {
                alert("Why don't you want to be mine?");
                count++;
            } else {
                clearInterval(intervalId);
                const confirmResult = confirm("I know I have requested you a lot, but I really love you. Please become my Valentine.");
                if (confirmResult) {
                    const place = prompt("Great! Please provide the place to make our date special:");
                    if (place) {
                        const whatsappMessage = encodeURIComponent(`I also love you not just as a friend but as a lover, and please accept me as your G.F. So, Let's meet at ${place}`);
                        window.location.href = `https://wa.me/9310285633?text=${whatsappMessage}`;
                    }
                }
            }
        }, 200);
    }
}

function submitForm() {
    const place = document.getElementById('place').value;
    if (place) {
        const whatsappMessage = encodeURIComponent(`I love you too, and we can meet at ${place}`);
        window.location.href = `https://wa.me/9310285633?text=${whatsappMessage}`;
    }
}

setInterval(changeLoveQuotes, 5000); 
