const rippleContainer = document.getElementById("ripple-container");

rippleContainer.addEventListener("click", (event) => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  // Get the click position relative to the container
  const rect = rippleContainer.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Set ripple position
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Append ripple to container
  rippleContainer.appendChild(ripple);

  // Remove the ripple after animation
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
});
