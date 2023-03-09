const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132';

const emergencyTasksTitle = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksTitle.length; index += 1) {
    emergencyTasksTitle[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksTitle.length; index += 1) {
    noEmergencyTasksTitle[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';