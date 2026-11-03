/* Interaction locale uniquement : aucun appel réseau, cookie ou stockage. */
"use strict";

const form = document.getElementById("confirmation-form");
const checkbox = document.getElementById("accept-change");
const confirmButton = document.getElementById("confirm-button");
const debrief = document.getElementById("debrief");
const debriefTitle = document.getElementById("debrief-title");
const documentStatus = document.getElementById("document-status");

// La confirmation reste locale, y compris en cas de soumission au clavier.
form.addEventListener("submit", (event) => event.preventDefault());

confirmButton.addEventListener("click", () => {
  if (!checkbox.reportValidity()) return;

  form.hidden = true;
  debrief.hidden = false;
  documentStatus.textContent = "Simulation terminée";
  documentStatus.classList.add("pill--complete");
  debriefTitle.focus();
});

