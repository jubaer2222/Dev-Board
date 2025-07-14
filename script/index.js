  let count = 0;

    const buttons = document.querySelectorAll('.complete-btn');
    const countDisplay = document.getElementById('count-display');
    const anotherCount = document.getElementById('another-count');
    const activityLog = document.getElementById('activity-log');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    for (const button of buttons) {
        button.addEventListener('click', function () {
            count++;
            countDisplay.textContent = count;

            const currentAnotherCount = parseInt(anotherCount.textContent);
            anotherCount.textContent = currentAnotherCount + 1;

            button.disabled = true;

            // Card title খুঁজে বের করে Activity Log এ দেখানো
            const card = button.closest('.card');
            const cardTitle = card.querySelector('.card-title').textContent;

                // সময় নেওয়া
        const currentTime = new Date().toLocaleTimeString();

        // Activity Log এ দেখানো
        const logItem = document.createElement('p');
        logItem.textContent = `Completed: ${cardTitle} at ${currentTime}`;
        activityLog.appendChild(logItem);
        });
    }

    // Clear History বাটন
    clearHistoryBtn.addEventListener('click', function () {
        activityLog.innerHTML = '';
    });