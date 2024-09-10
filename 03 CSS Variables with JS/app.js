const inputs = document.querySelectorAll(".controls input");

const handleUpdates = function () {
  // Note: Get the property value from 'data-sizing' to be able to add to style when updating the value in range inputs. Also make sure it returns '' if there's no dataset and only a value so it doesn't apply to the base color which doesn't have a 'data-' property:
  const measurement = this.dataset.sizing || "";

  // Get the root element (documentElement) to update style properties for changed inputs and update styles:
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + measurement
  );
};

// Loop through inputs nodelist and add event listeners. Call handleUpdates on event listeners:
inputs.forEach((input) => input.addEventListener("change", handleUpdates));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdates));
inputs.forEach((input) => input.addEventListener("input", handleUpdates));
