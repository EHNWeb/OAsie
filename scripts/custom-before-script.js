function affichage_copyright(depuis) {
    var maintenant = new Date();
    var annee = maintenant.getFullYear();
    document.write(depuis + '-' + annee);
}