// app.ts
const skillsSection = document.getElementById('skills-section');
const toggleSkillsButton = document.getElementById('toggle-skills');

if (skillsSection && toggleSkillsButton) {
    toggleSkillsButton.addEventListener('click', () => {
        skillsSection.classList.toggle('hidden');
        if (skillsSection.classList.contains('hidden')) {
            toggleSkillsButton.textContent = 'Show Skills';
        } else {
            toggleSkillsButton.textContent = 'Hide Skills';
        }
    });
}
