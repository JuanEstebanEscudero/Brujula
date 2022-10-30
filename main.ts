let Grados = 0
basic.forever(function () {
    Grados = input.compassHeading()
    if (Grados < 30 || Grados > 337) {
        basic.showString("N")
    } else if (Grados > 157 && Grados <= 202) {
        basic.showString("S")
    } else if (Grados > 67 && Grados < 112) {
        basic.showString("E")
    } else if (Grados < 292 && Grados > 247) {
        basic.showString("O")
    } else if (Grados > 292 && Grados < 337) {
        basic.showString("NO")
    } else if (Grados > 202 && Grados < 247) {
        basic.showString("SO")
    } else if (Grados < 157 && Grados > 112) {
        basic.showString("SE")
    } else if (Grados > 30 && Grados < 67) {
        basic.showString("NE")
    } else if (Grados < 30 || Grados > 337) {
        basic.showString("N")
    } else {
    	
    }
})
