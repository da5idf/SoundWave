export const getPostedDate = (track, fullDate) => {
    const today = (new Date()).toDateString().split(' ');

    const date = (new Date(track.updatedAt)).toDateString();
    const dateArray = date.split(' ');

    if (parseInt(today[3]) > parseInt(dateArray[3])) {
        return dateArray.slice(1, 4).join(' ');
    } else if (fullDate) {
        return dateArray.slice(1, 4).join(' ');
    } else {
        return dateArray.slice(1, 3).join(' ');
    }

}

// event listener to close a container when clicking outside its bounded area.
export const closeOnClickOut = (id, setter) => {

    // create closure over id and setter
    return function getPositions(e) {
        // e.stopImmediatePropagation();
        // get cursor location
        const cursX = e.clientX;
        const cursY = e.clientY;

        // get container boundries
        const box = document.getElementById(id);

        let boxTop, boxRight, boxBottom, boxLeft;
        if (box) {
            boxTop = box.getBoundingClientRect().top - 47; // 47px is height of search input
            boxRight = box.getBoundingClientRect().right;
            boxBottom = box.getBoundingClientRect().bottom;
            boxLeft = box.getBoundingClientRect().left;
        }

        if (clickOutsideContainer({ cursX, cursY, boxTop, boxBottom, boxRight, boxLeft })) {
            box.style.display = "none";
            setter("")
        }
    }
}

// determine if click is outside container
export const clickOutsideContainer = (positions) => {
    if (positions.cursX > positions.boxRight || positions.cursX < positions.boxLeft) {
        return true;
    }
    else if (positions.cursY < positions.boxTop || positions.cursY > positions.boxBottom) {
        return true;
    }
    else return false;
}
