  let count = 6;

  

    const buttons = document.querySelectorAll('.complete-btn');
    const countDisplay = document.getElementById('count-display');
    const anotherCount = document.getElementById('another-count');
    const activityLog = document.getElementById('activity-log');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    for (const button of buttons) {
        button.addEventListener('click', function () {
            alert('board updated successfully')
            count--;
            countDisplay.textContent = count;

            const currentAnotherCount = parseInt(anotherCount.textContent);
            anotherCount.textContent = currentAnotherCount + 1;

          
            const remainingButtons = Array.from(buttons).filter(btn => btn !== button && !btn.disabled);
            if (remainingButtons.length === 0) {
                alert("All Task Complete");
            }

            button.disabled = true;
            

           
            const card = button.closest('.card');
            const cardTitle = card.querySelector('.card-title').textContent;

               
        const currentTime = new Date().toLocaleTimeString();

  
        const logItem = document.createElement('p');
        logItem.textContent = `You have Complete The Task${cardTitle} at ${currentTime}`;
        activityLog.appendChild(logItem);
        });
    }


    clearHistoryBtn.addEventListener('click', function () {
        activityLog.innerHTML = '';
    });