const announcements = document.querySelectorAll(".announcement");

// Truncate the announcement text to 90 characters max;
announcements.forEach(curr => {
    let para = curr.querySelector("p");
    let text = para.textContent;

    if(text.length > 90) {
        let truncate = text.slice(0, 90) + "...";

        para.textContent = truncate;
    }
})