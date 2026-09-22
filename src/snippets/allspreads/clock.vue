dayparts.value.forEach((daypart): void => {
    daypart.titlePieces = splitWords(daypart.title, 10)
    // Calculate the angle of the daypart
    daypart.angle = (daypart.count / computedNumberOfPoints.value) * 360
    // Calculate the arc length of the daypart
    daypart.arc = calculateArcLength(radiusOfPieStroke, daypart.angle)
    // Base centers the pie on its daypart recipes
    let base: number = fullCircumferenceOfPieStroke / 4 + daypart.arc / daypart.count / 2
    // Set the dash offset of the daypart
    daypart.offset = base - offsetAccumulator
    // Calculate the angle bisector
    cumulativeAngle += daypart.angle;
    if (cumulativeAngle >= daypart.angle) {
        angleBisector = cumulativeAngle - daypart.angle / 2;
    }
    // Convert base back to degrees
    const angleOffset = 90 + (base * (Math.PI / 180))
    // Convert the angle from degrees to radians
    const angleRad = (angleBisector - angleOffset) * (Math.PI / 180);
    // Calculate the coordinates of the point
    const x = (centerX + 100) + radiusOfPieStroke * Math.cos(angleRad);
    daypart.labelX = x
    const y = (centerY + 100) + radiusOfPieStroke * Math.sin(angleRad);
    daypart.labelY = y

    offsetAccumulator = offsetAccumulator + daypart.arc
})
