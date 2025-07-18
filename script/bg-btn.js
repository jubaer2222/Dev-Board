const bgBtn = document.getElementById('bg-btn');
const mainBody = document.getElementById('main-body');

const colors = [
    "#F4F7FF",
    "#FFEDD5",
    "#D1FAE5",
    "#E0E7FF",
    "#FEF3C7"
];

let colorIndex = 0;

bgBtn.addEventListener('click', function () {
    colorIndex = (colorIndex + 1) % colors.length;
    mainBody.style.backgroundColor = colors[colorIndex];
});
