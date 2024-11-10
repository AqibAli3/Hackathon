// app.ts
var skillsSection = document.getElementById('skills-section');
var toggleSkillsButton = document.getElementById('toggle-skills');
if (skillsSection && toggleSkillsButton) {
    toggleSkillsButton.addEventListener('click', function () {
        skillsSection.classList.toggle('hidden');
        if (skillsSection.classList.contains('hidden')) {
            toggleSkillsButton.textContent = 'Show Skills';
        }
        else {
            toggleSkillsButton.textContent = 'Hide Skills';
        }
    });
}
