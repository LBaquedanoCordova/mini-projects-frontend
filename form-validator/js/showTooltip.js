//showTooltip.js

let tooltipVisible = false;
let tooltipTimeout = null;
let currentTooltip = null;

function showTooltip(message, type = "info") {
  // Si ya hay un tooltip visible y es de error, no mostramos otro de error
  if (tooltipVisible && type === "error") return;

  // Si hay un tooltip visible y es de tipo error, eliminamos ese tooltip
  if (tooltipVisible && type === "success") {
    currentTooltip.remove();
    tooltipVisible = false;
  }

  // Crear el nuevo tooltip
  const tooltip = document.createElement("div");
  tooltip.textContent = message;
  tooltip.className = `tooltip-message ${type}`;
  document.body.append(tooltip);

  currentTooltip = tooltip;  // Guardamos el tooltip actual
  tooltipVisible = true;

  // Establecer un tiempo para eliminar el tooltip después de 3 segundos
  clearTimeout(tooltipTimeout);
  tooltipTimeout = setTimeout(() => {
    tooltip.remove();
    tooltipVisible = false;
  }, 2500);
}

export { showTooltip };

