function Tournertout_droit () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 250)
}
function Tourner_à_gauche () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 250)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
}
function Tourner_à_droite () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
}
function index_suivant () {
    index += 1
}
let liste_des_virages = [
"G",
"G",
"D",
"D"
]
let index = 0
basic.forever(function () {
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) < 7) {
        if (liste_des_virages[index] == "G") {
            Tourner_à_droite()
            index_suivant()
        } else {
            Tourner_à_gauche()
            index_suivant()
        }
    } else {
        Tournertout_droit()
        if (index > liste_des_virages.length) {
            basic.pause(500)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    basic.showNumber(liste_des_virages.length)
})
