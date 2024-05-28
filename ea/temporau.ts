// Assuming 'year' is an HTML element and 'thisYear' is a number representing the current year.
// This TypeScript code ensures that 'year' and 'thisYear' are correctly typed and assigns 'thisYear' to 'year.textContent'.

// Define the type for 'year' as HTMLElement, which is the type for general HTML elements.
const year: HTMLElement = document.getElementById('year') as HTMLElement;

// Define 'thisYear' as a number and obtain the current year using the Date object.
const thisYear: number = new Date().getFullYear();

// Check if 'year' is not null to avoid runtime errors before assigning text content.
if (year) {
  year.textContent = thisYear.toString();
}
