let count = 0;
manOnBoat1 = 0;
manOnBoat2 = 0;
function shift(id) {
    const i = document.getElementById(id);        //get man id and position
    let pos = i.offsetLeft;

    const boatId = document.getElementById('boat');         //get boat position
    let posOfBoat = boatId.offsetLeft;


    if ((i == manOnBoat1 || i == manOnBoat2) && posOfBoat == 260) {       //boat to left move

        if (i.id == 'man1') {
            i.style.left = '10px';
            count--;
        }
        else if (i.id == 'man2') {
            i.style.left = '50px';
            count--;
        }
        else if (i.id == 'man3') {
            i.style.left = '90px';
            count--;
        }
        else if (i.id == 'man4') {
            i.style.left = '130px';
            count--;
        }
        else if (i.id == 'man5') {
            i.style.left = '170px';
            count--;
        }
        else if (i.id == 'man6') {
            i.style.left = '210px';
            count--;
        }
        if (i == manOnBoat1)
            manOnBoat1 = 0;
        else
            manOnBoat2 = 0;
    }

    else if ((i == manOnBoat1 || i == manOnBoat2) && posOfBoat == 640 && count > 0)  //boat to right
    {
        if (i.id == 'man1') {
            i.style.left = '750px';
            count--;
        }
        else if (i.id == 'man2') {
            i.style.left = '790px';
            count--;
        }
        else if (i.id == 'man3') {
            i.style.left = '830px';
            count--;
        }
        else if (i.id == 'man4') {
            i.style.left = '870px';
            count--;
        }
        else if (i.id == 'man5') {
            i.style.left = '910px';
            count--;
        }
        else if (i.id == 'man6') {

            i.style.left = '950px';
            count--;
        }
        if (i == manOnBoat1)
            manOnBoat1 = 0;
        else
            manOnBoat2 = 0;
    }
    else if (posOfBoat == 640 && count < 2 && manOnBoat1 == 0 && i.offsetLeft >= 640)       //right to boat move on position 1
    {
        i.style.left = '640px';
        count++;
        manOnBoat1 = i;

    } else if (count < 2 && posOfBoat == 640 && manOnBoat2 == 0 && i.offsetLeft >= 640)    //right to boat move on position 2
    {
        i.style.left = '690px';
        count++;
        manOnBoat2 = i;
    }
    else if (count < 2 && posOfBoat == 260 && manOnBoat1 == 0 && i.offsetLeft <= 260)    //left to boat on position 1
    {
        i.style.left = '260px';
        count++;
        manOnBoat1 = i

    }
    else if (count < 2 && posOfBoat == 260 && manOnBoat2 == 0 && i.offsetLeft <= 260)    //left to boat on position 2
    {
        i.style.left = '300px';
        count++;
        manOnBoat2 = i

    } else {
        console.log(i.offsetLeft);
        console.log('invalid');
    }


}
function boatmove() {
    const i = document.getElementById('boat');
    let pos = i.offsetLeft;
    let posOfMan1 = manOnBoat1.offsetLeft;
    let posOfMan2 = manOnBoat2.offsetLeft;

    //     console.log(" manOnBoat 1 "+manOnBoat1)
    //    console.log("manOnBoat 2 "+manOnBoat2)
    //    console.log(" posOfMan 1 "+posOfMan1)
    //    console.log("posOfMan 2 "+posOfMan2)

    if (pos == 260 && count != 0)                      //for left to right move
    {

        let a = setInterval(move, 5);
        function move() {
            if (pos == 640) {
                gameover(pos);
                clearInterval(a);
            } else {

                pos++;
                if (pos == 261) {
                    gameover(pos);
                }
                if (manOnBoat1 == 0) {
                    posOfMan2++;
                    manOnBoat2.style.left = posOfMan2 + 'px'
                }
                else if (manOnBoat2 == 0) {
                    posOfMan1++;
                    manOnBoat1.style.left = posOfMan1 + 'px';
                }
                else {
                    posOfMan1++;
                    posOfMan2++;
                    manOnBoat1.style.left = posOfMan1 + 'px';
                    manOnBoat2.style.left = posOfMan2 + 'px';
                }

                i.style.left = pos + "px";


            }

        }

    }
    else if (pos == 640 && count != 0) {
        gameover(pos);
        let a = setInterval(move, 5);      //for right to left move
        function move() {
            if (pos == 260) {
                gameover(pos);
                clearInterval(a);
            }
            else {

                pos--;
                if (pos == 639) {
                    gameover(pos);
                }
                if (manOnBoat1 == 0) {
                    posOfMan2--;
                    manOnBoat2.style.left = posOfMan2 + 'px';
                }
                else if (manOnBoat2 == 0) {
                    posOfMan1--;
                    manOnBoat1.style.left = posOfMan1 + 'px';
                }
                else {
                    posOfMan1--;
                    posOfMan2--;
                    manOnBoat1.style.left = posOfMan1 + 'px';
                    manOnBoat2.style.left = posOfMan2 + 'px';
                }

                i.style.left = pos + "px";
                // manOnBoat1.style.left=posOfMan1+'px';
                // manOnBoat2.style.left=posOfMan2+'px';
            }

        }

    }
    else {
        console.log('boat tera baap chlayega')
    }

}
function gameover(pos) {
    console.log("gameover function");
    let positionOfBoat = pos;   //left =410 and right = 790
    let posOfMan1 = document.getElementById('man1').offsetLeft;
    let posOfMan2 = document.getElementById('man2').offsetLeft;
    let posOfMan3 = document.getElementById('man3').offsetLeft;
    let posOfMan4 = document.getElementById('man4').offsetLeft;
    let posOfMan5 = document.getElementById('man5').offsetLeft;
    let posOfMan6 = document.getElementById('man6').offsetLeft;
    console.log(`pos ${pos}`);
    console.log(`posOfMan1  ${posOfMan1}`);
    console.log(`posOfMan2  ${posOfMan2}`);
    console.log(`posOfMan3  ${posOfMan3}`);
    console.log(`posOfMan4  ${posOfMan4}`);
    console.log(`posOfMan5  ${posOfMan5}`);
    console.log(`posOfMan6  ${posOfMan6}`);

    let noOfEvil = 0;
    let noOfGod = 0;
    if (pos == 261)  //left to right boatmove check left side
    {
        if (posOfMan6 < 211)
            noOfEvil++;
        if (posOfMan5 < 211)
            noOfEvil++;
        if (posOfMan4 < 211)
            noOfEvil++;
        if (posOfMan3 < 211)
            noOfGod++;
        if (posOfMan2 < 211)
            noOfGod++;
        if (posOfMan1 < 211)
            noOfGod++;

    }
    else if (pos == 639) {   //right to left boatmove check right side

        if (posOfMan6 > 690)
            noOfEvil++;
        if (posOfMan5 > 690)
            noOfEvil++;
        if (posOfMan4 > 690)
            noOfEvil++;
        if (posOfMan3 > 690)
            noOfGod++;
        if (posOfMan2 > 690)
            noOfGod++;
        if (posOfMan1 > 690)
            noOfGod++;
    }
    else if (pos == 260) {

        if (posOfMan6 <= 310)
            noOfEvil++;
        if (posOfMan5 <= 310)
            noOfEvil++;
        if (posOfMan4 <= 310)
            noOfEvil++;
        if (posOfMan3 <= 310)
            noOfGod++;
        if (posOfMan2 <= 310)
            noOfGod++;
        if (posOfMan1 <= 310)
            noOfGod++;
    }
    else if (pos == 640) {

        if (posOfMan6 >= 640)
            noOfEvil++;
        if (posOfMan5 >= 640)
            noOfEvil++;
        if (posOfMan4 >= 640)
            noOfEvil++;
        if (posOfMan3 >= 640)
            noOfGod++;
        if (posOfMan2 >= 640)
            noOfGod++;
        if (posOfMan1 >= 640)
            noOfGod++;
        if (noOfGod + noOfEvil == 6) {
            alert("Game Win");
            location.reload();
        }
    }
    if (noOfEvil > noOfGod && noOfGod > 0)
    // alert("Game Over"+noOfGod+" "+noOfEvil);
    {
        alert("Game Over");
        location.reload();
    }
    else {
        console.log("bach gya");
        console.log(`evil ${noOfEvil}`);
        console.log(`god  ${noOfGod}`);

        noOfGod = 0;
        noOfEvil = 0;
    }

}