$(document).ready(function () {

    $(`input[type=submit]`).attr(`disabled`, true);
    $(`body`).keyup(function () {
        if ($(`input[type=text]`).val().length === 0) {
            $(`input[type=submit]`).attr(`disabled`, true);
        } else {
            $(`input[type=submit]`).attr(`disabled`, false);
        }
    });


    $(`#btnSubmit`).click(function (e) {

        e.preventDefault();
        alert('Clicked!');
        let getValue = $(`input[type=text]`).val();
        alert(getValue);

        /*let $myH2 = $(`<h2></h2>`);
        $(`div`).append($myH2);
        $myH2.append($(`input[type=text]`).val());
        
        $myH2.mouseover(function () {
            $myH2.css({
                "background-color": "red",
                "border-radius": "25px"
            });
        });*/

    });

    $(`body`).append(`<div></div>`);
});