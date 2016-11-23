/**
 * Created by leluk on 22/11/2016.
 */
$(document).ready(function () {
    function dogeTitle(title) {
        $("main").prepend(`
           <p class="service-name animated bounceInRight">${title}</p>
           <p class="service-name shadow animated bounceInRight">${title}</p>
                <div class="logo">
                    <div class="inner-circle">
                        <div class="border"></div>
                        <img class="doge" src="images/doge-01.png" alt="">
                    </div>
                </div>`)
    }

    //rotinas para exibição do titulo de cada menu
    $('.menu-item').click(function () {
        if($(this).hasClass("tooltipped")){
            dogeTitle($(this).attr("data-tooltip"))
        }else{
            dogeTitle($(this).html())
        }
    });

    $('.modal').modal({
        ready: function () {
            $('.modal-close, .modal-overlay').click(function () {
                $('.service-name, .logo').animate({
                    opacity: 0
                }, 300, function () {
                    $('.service-name, .logo').remove()
                });
            });
        }
    });


    //inicializar checkboxes materialize
    $('select').material_select();

    $('.datepicker').pickadate({
        onStart: () => {
            $('.picker').appendTo('body');
        },
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    //nao me lembro pra q fiz isso
    $("label+i").click(function () {
        $(this).prev().prev().val("")
    });

    //exibição da imagem selecionada
    $("input[type=file]").change(function(event) {
        var reader = new FileReader();
        reader.onload = function(){
            var output = document.getElementById('output');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
        console.log(1)
    });

    VMasker(document.querySelector(".data-js-input")).maskMoney({
        // Decimal precision -> "90"
        precision: 2,
        // Decimal separator -> ",90"
        separator: ',',
        // Number delimiter -> "12.345.678"
        delimiter: '.',
        // Money unit -> "R$ 12.345.678,90"
        unit: 'R$',
        // Money unit -> "12.345.678,90 R$"
        zeroCents: false
    });
});
