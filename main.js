const copyButtons = document.querySelectorAll(".copyButton");
const copyStatuses = document.querySelectorAll(".copyStatus");

copyButtons.forEach((button, index) => {
  const textToCopy = button.getAttribute("data-text");

  button.addEventListener("click", () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        copyStatuses[index].textContent = "Text Copied";
      })
      .catch((error) => {
        copyStatuses[index].textContent = `Error while copying: ${error}`;
      });
  });
});

