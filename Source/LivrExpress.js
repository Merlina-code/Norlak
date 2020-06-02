/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Fonction pour calculer la prime distance 
 * @param {integer} platFond
 * @param {float} nbKilometres
 * @returns {float} 
 */
function calculPrimeDistance(platFond,nbKilometres)
{
    return nbKilometres*0.01 <=platFond ? nbKilometres*0.01 :platFond;
}
/**
 * Fonction pour calculer la prime anciennete
 * @param {integer} nbanciennete
 * @param {float} fixe
 * @returns {float}
 */
function calculPrimeanciennete(nbanciennete,fixe)
{
    return nbanciennete>=4 ? fixe+(nbanciennete>4?30*(nbanciennete-4):0):0;
}
/**
 * Fonction pour calculer la prime annuel des employés
 * @param {integer} platFond
 * @param {float} nbKilometres
 * @param {integer} nbanciennete
 * @param {float} fixe
 * @param {integer} nbAccidents
 * @returns {float}
 */
function calculPrimeAnnuel(platFond,nbKilometres,nbanciennete,fixe,nbAccidents)
{
    return nbAccidents<=3?(calculPrimeDistance(platFond,nbKilometres)+calculPrimeanciennete(nbanciennete,fixe))/ (nbAccidents+1):0;
}