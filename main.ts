function Tournertout_droit () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
}
function Tourner_à_gauche () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 255)
}
function Tourner_à_droite () {
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 255)
}
let liste_des_virages = [
"G",
"G",
"D",
"D"
]
let index = 0
basic.forever(function () {
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P0, PIN.P0) < 5) {
        if (liste_des_virages[index] == "G") {
            Tourner_à_gauche()
        } else {
            Tourner_à_droite()
        }
        index += 1
    } else {
        Tournertout_droit()
        if (index > liste_des_virages.length) {
            basic.pause(500)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
        }
    }
})
