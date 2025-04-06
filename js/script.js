document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelector('.skills');
    const experience = document.querySelector('.experience');
    const skillsList = skills.querySelector('ul');
    const experienceList = experience.querySelector('ul');

    skills.addEventListener('click', function() {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
        } else {
            skillsList.style.display = 'none';
        }
    });

    experience.addEventListener('click', function() {
        if (experienceList.style.display === 'none') {
            experienceList.style.display = 'block';
        } else {
            experienceList.style.display = 'none';
        }
    });
});
