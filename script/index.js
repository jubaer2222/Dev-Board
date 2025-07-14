 let count = 0;

    const buttons = document.querySelectorAll('.complete-btn');
    const countDisplay = document.getElementById('count-display');
    const anotherCount = document.getElementById('another-count');

    for (const button of buttons) {
        button.addEventListener('click', function() {
            count++;
            countDisplay.textContent = count;

            // span এর মান বাড়ানো
            const currentAnotherCount = parseInt(anotherCount.textContent);
            anotherCount.textContent = currentAnotherCount + 1;

            button.disabled = true;
        });
    }