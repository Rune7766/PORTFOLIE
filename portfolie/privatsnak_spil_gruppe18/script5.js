window.addEventListener("load", startScreen);

let liv;
let imageCount;

function startScreen() {
    console.log("startScreen");


    document.querySelector("#kons_del_1").classList.add("hide");
    document.querySelector("#kons_slet_1").classList.add("hide");

    document.querySelector("#kons_del_2").classList.add("hide");
    document.querySelector("#kons_slet_2").classList.add("hide");

    document.querySelector("#kons_del_3").classList.add("hide");
    document.querySelector("#kons_slet_3").classList.add("hide");

    document.querySelector("#kons_del_4").classList.add("hide");
    document.querySelector("#kons_slet_4").classList.add("hide");

    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#restart_knap1").classList.add("hide");
    document.querySelector("#restart_knap").classList.add("hide");

    document.querySelector("#restart_knap").removeEventListener("click", startGame);
    document.querySelector("#restart_knap1").removeEventListener("click", startGame);

    //Vis startskærm
    document.querySelector("#start_screen").classList.remove("hide");

    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#restart_knap1").classList.add("hide");
    document.querySelector("#restart_knap").classList.add("hide");

    //Gør start knap klikbar
    document.querySelector("#play_knap").addEventListener("click", startGame);
}

function startGame() {
    console.log("startGame");
    this.removeEventListener("click", startGame);

    document.querySelector("#start_screen").classList.add("hide");

    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#game_ui").classList.remove("hide");



    document.querySelector("#billede_1_sprite").classList.add("hide");
    document.querySelector("#billede_2_sprite").classList.add("hide");
    document.querySelector("#billede_3_sprite").classList.add("hide");
    document.querySelector("#billede_4_sprite").classList.add("hide");

    //Skjul startskærm
    //Nulstil liv
    liv = 0;
    imageCount = 4;
    //Gør de 4 billeder klikbare
    document.querySelector("#billede_1_container").addEventListener("click", clickImage1);

    document.querySelector("#billede_2_container").addEventListener("click", clickImage2);

    document.querySelector("#billede_3_container").addEventListener("click", clickImage3);

    document.querySelector("#billede_4_container").addEventListener("click", clickImage4);
}



function clickImage1() {
    console.log("clickImage1");

    //RYDDER OP
    document.querySelector("#billede_1_container").removeEventListener("click", clickImage1);

    //Start animation der gør billedet større
    document.querySelector("#billede_1_container").classList.add("enlarge");

    //Sørger for at billede ligger forrest
    document.querySelector("#billede_1_container").classList.add("z_index");


    //TODO: Vis beskrivelse af scenarie
    document.querySelector("#billede_1_sprite").classList.remove("hide");


    //Vis del og slet knap, og gør dem klikbare
    document.querySelector("#share_button").addEventListener("click", clickShare1);

    document.querySelector("#delete_button").addEventListener("click", clickDelete1);
}


function clickShare1() {
    console.log("clickShare1");

    //image count tæller ned
    imageCount--;

    //RYDDER OP
    document.querySelector("#delete_button").removeEventListener("click", clickDelete1);
    document.querySelector("#share_button").removeEventListener("click", clickShare1);


    document.querySelector("#billede_1_sprite").classList.add("hide");

    document.querySelector("#billede_1_container").classList.add("share");

    document.querySelector("#del_lyd").play();


    //Indikation på at det var det rigtige valg vises
    document.querySelector("#kons_del_1").classList.remove("hide");
    document.querySelector("#kons_del_1").classList.add("konsekvens_popup");


    document.querySelector("#game_background").classList.add("blur");

    document.querySelector("#kon_arrow1").addEventListener("click", kons1Ud);
}

function kons1Ud() {
    console.log("kons1Ud");

    document.querySelector("#kon_arrow1").removeEventListener("click", kons1Ud);

    document.querySelector("#kons_del_1").classList.remove("konsekvens_popup");
    document.querySelector("#kons_del_1").classList.add("konsekvens_popup_reverse");

    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#game_background").classList.add("blur_reverse");

    document.querySelector("#kons_del_1").addEventListener("animationend", imageCounter);
}


function clickDelete1() {
    console.log("clickDelete1");
    imageCount--;

    document.querySelector("#delete_button").removeEventListener("click", clickDelete1);
    document.querySelector("#share_button").removeEventListener("click", clickShare1);

    document.querySelector("#billede_1_sprite").classList.add("hide");

    document.querySelector("#billede_1_container").classList.add("delete");
    document.querySelector("#slet_lyd").play();


    //Indikation på at det var det rigtige valg vises
    document.querySelector("#kons_slet_1").classList.remove("hide");
    document.querySelector("#kons_slet_1").classList.add("konsekvens_popup");

    document.querySelector("#game_background").classList.add("blur");

    document.querySelector("#kon_arrow2").addEventListener("click", kons2Ud);
}

function kons2Ud() {
    console.log("kons2Ud");
    this.removeEventListener("click", kons2Ud);
    document.querySelector("#kons_slet_1").classList.remove("konsekvens_popup");
    document.querySelector("#kons_slet_1").classList.add("konsekvens_popup_reverse");

    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#game_background").classList.add("blur_reverse");

    document.querySelector("#kons_slet_1").addEventListener("animationend", imageCounter);
}



function clickImage2() {
    console.log("clickImage2");

    //RYDDER OP
    document.querySelector("#billede_2_container").removeEventListener("click", clickImage2);

    //Start animation der gør billedet større
    document.querySelector("#billede_2_container").classList.add("enlarge");

    //Sørger for at billede ligger forrest
    document.querySelector("#billede_2_container").classList.add("z_index");


    //TODO: Vis beskrivelse af scenarie
    document.querySelector("#billede_2_sprite").classList.remove("hide");


    //Vis del og slet knap, og gør dem klikbare
    document.querySelector("#share_button").addEventListener("click", clickShare2);

    document.querySelector("#delete_button").addEventListener("click", clickDelete2);
}


function clickShare2() {
    console.log("clickShare2");

    document.querySelector("#delete_button").removeEventListener("click", clickDelete2);
    document.querySelector("#share_button").removeEventListener("click", clickShare2);

    document.querySelector("#billede_2_sprite").classList.add("hide");


    document.querySelector("#billede_2_container").classList.add("share");
    document.querySelector("#del_lyd").play();


    //Indikation på at det var det rigtige valg vises
    document.querySelector("#kons_del_2").classList.remove("hide");
    document.querySelector("#kons_del_2").classList.add("konsekvens_popup");

    document.querySelector("#game_background").classList.add("blur");

    document.querySelector("#kon_arrow3").addEventListener("click", kons3Ud);
}

function kons3Ud() {
    console.log("kons3Ud");
    this.removeEventListener("click", kons3Ud);

    document.querySelector("#kons_del_2").classList.remove("konsekvens_popup");
    document.querySelector("#kons_del_2").classList.add("konsekvens_popup_reverse");

    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#game_background").classList.add("blur_reverse");

    document.querySelector("#kons_del_2").addEventListener("animationend", gameover);
}


function clickDelete2() {
    console.log("clickDelete2");
    imageCount--;
    //Indikation på at det havde været okay at dele billedet, men det ikke er forkert at slette det vises

    document.querySelector("#delete_button").removeEventListener("click", clickDelete2);
    document.querySelector("#share_button").removeEventListener("click", clickShare2);

    document.querySelector("#billede_2_sprite").classList.add("hide");

    document.querySelector("#billede_2_container").classList.add("delete");
    document.querySelector("#slet_lyd").play();


    //Indikation på at det var det rigtige valg vises
    document.querySelector("#kons_slet_2").classList.remove("hide");
    document.querySelector("#kons_slet_2").classList.add("konsekvens_popup");

    document.querySelector("#game_background").classList.add("blur");

    document.querySelector("#kon_arrow4").addEventListener("click", kons4Ud);
}

function kons4Ud() {
    console.log("kons4Ud");

    this.removeEventListener("click", kons4Ud);

    document.querySelector("#kons_slet_2").classList.remove("konsekvens_popup");
    document.querySelector("#kons_slet_2").classList.add("konsekvens_popup_reverse");

    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#game_background").classList.add("blur_reverse");

    document.querySelector("#kons_slet_2").addEventListener("animationend", imageCounter);
}



function clickImage3() {
    console.log("clickImage3");

    //RYDDER OP
    document.querySelector("#billede_3_container").removeEventListener("click", clickImage3);

    //Start animation der gør billedet større
    document.querySelector("#billede_3_container").classList.add("enlarge");

    //Sørger for at billede ligger forrest
    document.querySelector("#billede_3_container").classList.add("z_index");


    //TODO: Vis beskrivelse af scenarie
    document.querySelector("#billede_3_sprite").classList.remove("hide");

    //Vis del og slet knap, og gør dem klikbare
    document.querySelector("#share_button").addEventListener("click", clickShare3);

    document.querySelector("#delete_button").addEventListener("click", clickDelete3);
}


function clickShare3() {
    console.log("clickShare3");

    document.querySelector("#delete_button").removeEventListener("click", clickDelete3);
    document.querySelector("#share_button").removeEventListener("click", clickShare3);

    document.querySelector("#billede_3_sprite").classList.add("hide");


    document.querySelector("#billede_3_container").classList.add("share");
    document.querySelector("#del_lyd").play();


    //Indikation på at det var det rigtige valg vises
    document.querySelector("#kons_del_3").classList.remove("hide");
    document.querySelector("#kons_del_3").classList.add("konsekvens_popup");

    document.querySelector("#game_background").classList.add("blur");

    document.querySelector("#kon_arrow5").addEventListener("click", kons5Ud);
}

function kons5Ud() {
    console.log("kons5Ud");

    this.removeEventListener("click", kons5Ud);

    document.querySelector("#kons_del_3").classList.remove("konsekvens_popup");
    document.querySelector("#kons_del_3").classList.add("konsekvens_popup_reverse");

    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#game_background").classList.add("blur_reverse");

    document.querySelector("#kons_del_3").addEventListener("animationend", gameover);
}


function clickDelete3() {
    console.log("clickDelete3");
    imageCount--;
    //Indikation på at det havde været okay at dele billedet, men det ikke er forkert at slette det vises

    document.querySelector("#delete_button").removeEventListener("click", clickDelete3);
    document.querySelector("#share_button").removeEventListener("click", clickShare3);

    document.querySelector("#billede_3_sprite").classList.add("hide");


    document.querySelector("#billede_3_container").classList.add("delete");
    document.querySelector("#slet_lyd").play();


    //Indikation på at det var det rigtige valg vises
    document.querySelector("#kons_slet_3").classList.remove("hide");
    document.querySelector("#kons_slet_3").classList.add("konsekvens_popup");

    document.querySelector("#game_background").classList.add("blur");

    document.querySelector("#kon_arrow6").addEventListener("click", kons6Ud);
}

function kons6Ud() {
    console.log("kons6Ud");

    this.removeEventListener("click", kons6Ud);

    document.querySelector("#kons_slet_3").classList.remove("konsekvens_popup");
    document.querySelector("#kons_slet_3").classList.add("konsekvens_popup_reverse");

    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#game_background").classList.add("blur_reverse");

    document.querySelector("#kons_slet_3").addEventListener("animationend", imageCounter);
}



function clickImage4() {
    console.log("clickImage4");

    //RYDDER OP
    document.querySelector("#billede_4_container").removeEventListener("click", clickImage4);

    //Start animation der gør billedet større
    document.querySelector("#billede_4_container").classList.add("enlarge");

    //Sørger for at billede ligger forrest
    document.querySelector("#billede_4_container").classList.add("z_index");


    //TODO: Vis beskrivelse af scenarie
    document.querySelector("#billede_4_sprite").classList.remove("hide");


    //Vis del og slet knap, og gør dem klikbare
    document.querySelector("#share_button").addEventListener("click", clickShare4);

    document.querySelector("#delete_button").addEventListener("click", clickDelete4);
}


function clickShare4() {
    console.log("clickShare4");

    document.querySelector("#delete_button").removeEventListener("click", clickDelete4);
    document.querySelector("#share_button").removeEventListener("click", clickShare4);

    document.querySelector("#billede_4_sprite").classList.add("hide");


    document.querySelector("#billede_4_container").classList.add("share");
    document.querySelector("#del_lyd").play();


    //Indikation på at det var det rigtige valg vises
    document.querySelector("#kons_del_4").classList.remove("hide");
    document.querySelector("#kons_del_4").classList.add("konsekvens_popup");

    document.querySelector("#game_background").classList.add("blur");

    document.querySelector("#kon_arrow7").addEventListener("click", kons7Ud);
}

function kons7Ud() {
    console.log("kons7Ud");

    this.removeEventListener("click", kons7Ud);

    document.querySelector("#kons_del_4").classList.remove("konsekvens_popup");
    document.querySelector("#kons_del_4").classList.add("konsekvens_popup_reverse");

    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#game_background").classList.add("blur_reverse");

    document.querySelector("#kons_del_4").addEventListener("animationend", gameover);
}


function clickDelete4() {
    console.log("clickDelete4");
    imageCount--;
    //Indikation på at det havde været okay at dele billedet, men det ikke er forkert at slette det vises

    document.querySelector("#delete_button").removeEventListener("click", clickDelete4);
    document.querySelector("#share_button").removeEventListener("click", clickShare4);

    document.querySelector("#billede_4_sprite").classList.add("hide");


    document.querySelector("#billede_4_container").classList.add("delete");
    document.querySelector("#slet_lyd").play();


    //Indikation på at det var det rigtige valg vises
    document.querySelector("#kons_slet_4").classList.remove("hide");
    document.querySelector("#kons_slet_4").classList.add("konsekvens_popup");

    document.querySelector("#game_background").classList.add("blur");

    document.querySelector("#kon_arrow8").addEventListener("click", kons8Ud);
}

function kons8Ud() {
    console.log("kons8Ud");

    this.removeEventListener("click", kons8Ud);

    document.querySelector("#kons_slet_4").classList.remove("konsekvens_popup");
    document.querySelector("#kons_slet_4").classList.add("konsekvens_popup_reverse");

    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#game_background").classList.add("blur_reverse");

    document.querySelector("#kons_slet_4").addEventListener("animationend", imageCounter);
}



function imageCounter() {
    console.log("imageCounter");
    console.log(imageCount);

    document.querySelector("#billede_1_container").classList.remove("z_index");

    document.querySelector("#game_background").className = '';


    document.querySelector("#kons_del_1").removeEventListener("animationend", imageCounter);
    document.querySelector("#kons_slet_1").removeEventListener("animationend", imageCounter);
    document.querySelector("#kons_slet_2").removeEventListener("animationend", imageCounter);
    document.querySelector("#kons_slet_3").removeEventListener("animationend", imageCounter);
    document.querySelector("#kons_slet_4").removeEventListener("animationend", imageCounter);

    //Billedet ryger i skraldespanden
    if (imageCount > 0) {
        console.log("flere billeder tilbage");
    } else {
        levelcomplete();
    }

}



function levelcomplete() {
    console.log("levelcomplete");

    document.querySelector("#game_background").className = '';

    //fjern klasser fra billeder
    document.querySelector("#game").classList.add("hide");

    document.querySelector("#delete_button").className = '';
    document.querySelector("#share_button").className = '';

    document.querySelector("#billede_1_container").className = '';
    document.querySelector("#billede_1_sprite").className = '';

    document.querySelector("#billede_2_container").className = '';
    document.querySelector("#billede_2_sprite").className = '';

    document.querySelector("#billede_3_container").className = '';
    document.querySelector("#billede_3_sprite").className = '';

    document.querySelector("#billede_4_container").className = '';
    document.querySelector("#billede_4_sprite").className = '';

    document.querySelector("#kons_del_1").className = '';
    document.querySelector("#kons_del_2").className = '';
    document.querySelector("#kons_del_3").className = '';
    document.querySelector("#kons_del_4").className = '';

    document.querySelector("#kons_slet_1").className = '';
    document.querySelector("#kons_slet_2").className = '';
    document.querySelector("#kons_slet_3").className = '';
    document.querySelector("#kons_slet_4").className = '';


    //Level complete skærm vises
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#game_ui").classList.add("hide");
    document.querySelector("#restart_knap").classList.remove("hide");

    document.querySelector("#restart_knap").addEventListener("click", startScreen);
}

function gameover() {
    console.log("gameover");

    document.querySelector("#kons_del_2").removeEventListener("animationend", gameover);
    document.querySelector("#kons_del_3").removeEventListener("animationend", gameover);
    document.querySelector("#kons_del_4").removeEventListener("animationend", gameover);

    document.querySelector("#game_background").className = '';

    //fjern klasser fra billeder
    document.querySelector("#game").classList.add("hide");

    document.querySelector("#delete_button").className = '';
    document.querySelector("#share_button").className = '';

    document.querySelector("#billede_1_container").className = '';
    document.querySelector("#billede_1_sprite").className = '';

    document.querySelector("#billede_2_container").className = '';
    document.querySelector("#billede_2_sprite").className = '';

    document.querySelector("#billede_3_container").className = '';
    document.querySelector("#billede_3_sprite").className = '';

    document.querySelector("#billede_4_container").className = '';
    document.querySelector("#billede_4_sprite").className = '';

    document.querySelector("#kons_del_1").className = '';
    document.querySelector("#kons_del_2").className = '';
    document.querySelector("#kons_del_3").className = '';
    document.querySelector("#kons_del_4").className = '';

    document.querySelector("#kons_slet_1").className = '';
    document.querySelector("#kons_slet_2").className = '';
    document.querySelector("#kons_slet_3").className = '';
    document.querySelector("#kons_slet_4").className = '';

    //Gameover skærm vises
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#game_ui").classList.add("hide");
    document.querySelector("#restart_knap1").classList.remove("hide");

    document.querySelector("#restart_knap1").addEventListener("click", startScreen);
}
