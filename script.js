document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const langContents = document.querySelectorAll('.language-content');

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');

            // Hide all content sections
            langContents.forEach(content => {
                content.style.display = 'none';
            });

            // Deactivate all buttons
            langButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the selected content section
            const activeContent = document.getElementById(`lang-${selectedLang}`);
            if (activeContent) {
                activeContent.style.display = 'block';
            }

            // Activate the clicked button
            this.classList.add('active');

            // Optional: Update page title or lang attribute if needed
            // document.documentElement.lang = selectedLang;
            // document.title = `CV - Kenny Branco de Matos Santana (${selectedLang.toUpperCase()})`;
        });
    });

    // Ensure the default language (DE) is shown initially
    const defaultContent = document.getElementById('lang-de');
    if (defaultContent) {
        defaultContent.style.display = 'block';
    }
    const defaultButton = document.querySelector('.lang-btn[data-lang="de"]');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }
});

