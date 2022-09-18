let memberBox = document.getElementById("team-member");
let teamSocials = document.getElementById("team-socials");

memberBox.addEventListener('mouseover', (event) => {
    teamSocials.classList.add('t-s-active');
})

memberBox.addEventListener('mouseout', (event) => {
    teamSocials.classList.remove('t-s-active');
})
