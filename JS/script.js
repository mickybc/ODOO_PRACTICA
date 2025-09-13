document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".sidebar li");
    const sections = document.querySelectorAll(".content-section");
    const infoPanel = document.getElementById("infoPanel");
    const closePanelButton = document.getElementById("closePanel");
    const helpIcons = document.querySelectorAll(".help-icon");

    // Function to show a specific section
    const showSection = (targetId) => {
        sections.forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(targetId)?.classList.add("active");
    };

    // Function to toggle the info panel
    const toggleInfoPanel = (show) => {
        infoPanel.classList.toggle("visible", show);
    };

    // Handle menu clicks to switch sections
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(li => li.classList.remove("active"));
            item.classList.add("active");
            
            const targetId = item.getAttribute("data-target");
            showSection(targetId);
        });
    });

    // Handle help icon clicks to open the info panel
    helpIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            toggleInfoPanel(true);
        });
    });

    // Handle closing the info panel
    closePanelButton.addEventListener("click", () => {
        toggleInfoPanel(false);
    });
    
    // Initial display based on the active menu item
    const activeMenuItem = document.querySelector(".sidebar li.active");
    if (activeMenuItem) {
        showSection(activeMenuItem.getAttribute("data-target"));
    }
});


