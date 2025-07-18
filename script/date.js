    const date = new Date();

    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const monthDayYear = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        .replace(",", ""); 

    document.getElementById("today-date").innerHTML = `${dayName},<br>
     <span class="font-bold text-xl">${monthDayYear}`;