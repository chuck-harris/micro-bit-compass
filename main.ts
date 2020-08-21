let heading = 0
basic.forever(function () {
    heading = input.compassHeading()
    if (heading < 23) {
        basic.showArrow(ArrowNames.North)
    } else if (heading < 68) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (heading < 113) {
        basic.showArrow(ArrowNames.West)
    } else if (heading < 158) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (heading < 203) {
        basic.showArrow(ArrowNames.South)
    } else if (heading < 248) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (heading < 293) {
        basic.showArrow(ArrowNames.East)
    } else if (heading < 338) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
