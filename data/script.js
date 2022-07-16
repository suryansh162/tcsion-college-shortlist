        // console.log(College_Data);  
        var College_Name_Array = [];
        for (var i = 0; i < College_Data.length; i++) {
            var value = College_Data[i];
            if (College_Name_Array.includes(value.College_Name)) {
                // console.log("True")
                continue;
            } else {
                // console.log(value.College_Name);
                var college_name = document.getElementById("College_Name_Menu")
                college_name.innerHTML += "<option>" + value.College_Name + "</option>"
                $(college_name).on('change', function () {
                    college_name.classList.add("is-valid")
                });
                // college_name.classList.add("is-valid")
                College_Name_Array.push(value.College_Name)
            }
        }
        $("#College_Name_Menu").on('change', function () { //add a change event handler to gender select
            var value = $(this).val(); //get its selected value
            // console.log(value)
            result = "";
            var College_Name_CATEGORY = [];
            for (var i = 0; i < College_Data.length; i++) {
                if (College_Data[i].College_Name === (value) && !College_Name_CATEGORY.includes(College_Data[i]
                        .CATEGORY)) {
                    // console.log("True")
                    College_Name_CATEGORY.push(College_Data[i].CATEGORY);
                    result += "<option>" + College_Data[i].CATEGORY + "</option>"
                } else {
                    continue;
                }
            }
            var college_CATEGORY = document.getElementById("CATEGORY_Menu")
            college_CATEGORY.classList.add("is-valid")
            college_CATEGORY.innerHTML = result;
        });

        function validate() {
            var formdata = document.getElementsByClassName("College_Search_Form")
            var This_id = $(this);
            // console.log(This_id);s
            // console.log(formdata[0].checkValidity())
            if (formdata[0].checkValidity()) {
                document.getElementById('College_submit').removeAttribute("disabled");
            } else {
                document.getElementById('College_submit').disabled = true
            }
            let value = (This_id[0].checkValidity()) ? "" : This_id[0].validationMessage;
            let classname = (This_id[0].checkValidity()) ? "is-valid" : "is-invalid";
            let removename = (!This_id[0].checkValidity()) ? "is-valid" : "is-invalid";
            This_id.siblings("div")[0].innerHTML = value;
            This_id[0].classList.remove(removename)
            This_id[0].classList.add(classname);
        }

        function Filter_College_Data() {
            var CollegeArray = [];
            var name = document.getElementById("College_Name_Menu").value
            var CATEGORY = document.getElementById("CATEGORY_Menu").value
            var income = document.getElementById("Family_Income").value
            var percent = document.getElementById("12th_Standard_Percentage").value
            console.log("Hi")
            if (document.getElementById("output_display")) {
                document.getElementById("output_display").remove();
                console.log("new element")
            }
            var size = window.matchMedia("(max-width: 768px)");
            var college_card =
                '<div id="output_display"><h3 style="font-family: Baloo Bhai 2, cursive;" class = "college_find_text">Congrats . . . these are the colleges available as per your requirements</h3>'
            for (var i = 0; i < College_Data.length; i++) {
                var value = College_Data[i];
                // console.log(value)
                if (value.College_Name == name && value.CATEGORY == CATEGORY && 0.7 * parseInt(value.Annual_Fee) <=
                    income) {
                    if (size.matches) {
                        college_card +=
                            '<div class="card" id="college_cards"><div class="card-header border-0"><img style = "max-width:100%;max-height:100%;" ></div><div class="card-block px-2"><h2 style = "font-weight:bold;" class="card_title">' +
                            value.College_Name + '</h2><p style="zoom:1.4;" class="card-text">Course : ' + value
                            .Course + '</p><p style="zoom:1.4;" class="card-text">Fees : ' + value.Annual_Fee +
                            '</p><div style="text-align:center;"><a href="#" style="margin:10px;" class="btn" id="College_submit">Wishlist</a><a href="#" style="margin:10px;" class="btn" id="College_submit">Apply</a></div></div><div style = "margin-left: auto; margin-right: 0;"><img class="information_icon" src="../information_icon.png" alt="information_icon"></div></div>';
                    } else {
                        college_card +=
                            '<div class="card flex-row flex-wrap" id="college_cards"><div class="card-header border-0"><img style = "max-height:20vh;max-width:auto;></div><div class="card-block px-2"><h2 style = "font-weight:bold;" class="card_title">' +
                            value.College_Name + '</h2><p style="zoom:1.4;" class="card-text">Course : ' + value
                            .Course + '</p><p style="zoom:1.4;" class="card-text">Fees : ' + value.Annual_Fee +
                            '</p><div style="text-align:center;"><a href="#" style="margin:10px;" class="btn" id="College_submit">Wishlist</a><a href="#" style="margin:10px;" class="btn" id="College_submit">Apply</a></div></div><div style = "margin-left: auto; margin-right: 0;"><img class="information_icon" src="../information_icon.png" alt="information_icon"></div></div>';
                    }
                    CollegeArray.push(value)
                    console.log(value)
                }
            }
            console.log(CollegeArray)
            // if(CollegeArray.length){
            //     documzoom:0.3ent.getElementById("instruction").style.display ="none";
            //     var result_section = document.getElementById("result_section");
            //     result_section.classList.remove('instructions_part');
            //     result_section.innerHTML += college_card
            // }
            if (CollegeArray.length == 0) {
                var college_card =
                    '<div id="output_display"><h3 class="college_find_text">These are the scholarships available for colleges of your preferences</h3>'
                for (var i = 0; i < College_Data.length; i++) {
                    var value = College_Data[i];
                    // console.log(value)
                    if (value.CATEGORY == CATEGORY && parseInt(value.Scholarship_Marks) <= percent) {
                        if (size.matches) {
                            college_card +=
                                '<div class="card" id="college_cards"><div class="card-header border-0"><img style = "max-width:100%;max-height:100%;></div><div class="card-block px-2"><h2 style = "font-weight:bold;" class="card_title">' +
                                value.College_Name + '</h2><p style="zoom:1.4;" class="card-text">Course : ' + value
                                .Course + '</p><p style="zoom:1.4;" class="card-text">Fees : ' + value.Annual_Fee +
                                '</p><div style="text-align:center;"><a href="#" style="margin:10px;" class="btn" id="College_submit">Wishlist</a><a href="#" style="margin:10px;" class="btn" id="College_submit">Apply</a></div></div><div style = "margin-left: auto; margin-right: 0;"><img class="information_icon" src="../images/information_icon.png" alt="information_icon"></div></div>';
                        } else {
                            college_card +=
                                '<div class="card flex-row flex-wrap" id="college_cards"><div class="card-header border-0"><img style = "max-height:20vh;max-width:auto;></div><div class="card-block px-2"><h2 style = "font-weight:bold;" class="card_title">' +
                                value.College_Name + '</h2><p style="zoom:1.4;" class="card-text">Course : ' + value
                                .Course + '</p><p style="zoom:1.4;" class="card-text">Fees : ' + value.Annual_Fee +
                                '</p><div style="text-align:center;"><a href="#" style="margin:10px;" class="btn" id="College_submit">Wishlist</a><a href="#" style="margin:10px;" class="btn" id="College_submit">Apply</a></div></div><div style = "margin-left: auto; margin-right: 0;"><img class="information_icon" src="../images/information_icon.png" alt="information_icon"></div></div>';
                        }
                        CollegeArray.push(value)
                    }
                }
                console.log(CollegeArray)
            }
            college_card += '</div>'
            document.getElementById("instruction").style.display = "none";
            var result_section = document.getElementById("result_section");
            result_section.classList.remove('instructions_part');
            result_section.innerHTML += college_card
        }
        $(".form-control").keyup(validate);

        function openNav() {
            document.getElementById("mySidebar").style.width = "70%";
            document.getElementById("phone_menu_button").style.visibility = "hidden";
            //document.getElementById("main").style.marginLeft = "250px";
        }

        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("phone_menu_button").style.visibility = "visible";
            // document.getElementById("main").style.marginLeft= "0";
        }


        $(document).ready(function () {

//window and animation items
var animation_elements = [$.find('.Wishlist_Content'), $.find('.About_Us_Content')];
var web_window = $(window);

//check to see if any animation containers are currently in view
function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function () {

        //get the element sinformation
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if ((element_bottom_position >= window_top_position) && (element_top_position *
                1.01 <= window_bottom_position)) {
            element.addClass('in-view');
        } else {
            element.removeClass('in-view');
        }
    });

}

//on or scroll, detect elements in view
$(window).on('scroll resize', function () {
    check_if_in_view()
})
//trigger our scroll event on initial load
$(window).trigger('scroll');

});

