export default function controle() {
  let errors = {};

  if (!nom) {
    errors.pseudo = "Veuillez remplir le champ";
  }
  if (!details.prenom) {
    errors.pseudo = "Veuillez remplir le champ";
  }
  if (!details.dateNais) {
    errors.pseudo = "Veuillez remplir le champ";
  }

  return errors;
}
