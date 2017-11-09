
var startTime;
var endTime;

// Part 1 of finding how much time spent on page
$(window).on('load', function(event){
    startTime = event.timeStamp;
});


$(document).ready(function(){


   // What percentage of the page was viewed
    var scrollPercent = 0;
    $(window).on('scroll',function(event){
        scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()) ;

    });



    // Time spent hovering over each element on the page


    // Time spent hovering over Heading
    var startTimeHeading;
    var endTimeHeading;
    $("h1").on('mouseenter', function(event){
        startTimeHeading = event.timeStamp;
    });
    $("h1").on('mouseleave', function(event){
        endTimeHeading = event.timeStamp;
    });

    // Time spent hovering over Horizon Image
    var startTimeHorizon;
    var endTimeHorizon;
    $(".horizonImg").on('mouseenter', function(event){
        startTimeHorizon = event.timeStamp;
    });
    $(".horizonImg").on('mouseleave', function(event){
        endTimeHorizon = event.timeStamp;
    });


    // Time spent hovering over Text Area
    var startTimeTA;
    var endTimeTA;
    $(".textarea").on('mouseenter', function(event){
        startTimeTA = event.timeStamp;
    });
    $(".textarea").on('mouseleave', function(event){
        endTimeTA = event.timeStamp;
    });

    // Time spent hovering over xkcd link element 
    var startTimeXkcd;
    var endTimeXkcd;
    $(".xkcd").on('mouseenter', function(event){
        startTimeXkcd = event.timeStamp;
    });
    $(".xkcd").on('mouseleave', function(event){
        endTimeXkcd = event.timeStamp;
    });

    // Time spent hovering over YouTube link element
    var startTimeYouTube;
    var endTimeYouTube;
    $(".youtube").on('mouseenter', function(event){
        startTimeYouTube = event.timeStamp;
    });
    $(".youtube").on('mouseleave', function(event){
        endTimeYouTube = event.timeStamp;
    });

    // Time spent hovering over Porcupine Image
    var startTimePorcupine;
    var endTimePorcupine;
    $(".porcupine").on('mouseenter', function(event){
        startTimePorcupine = event.timeStamp;
    });
    $(".porcupine").on('mouseleave', function(event){
        endTimePorcupine = event.timeStamp;
    });

    // Time spent hovering over Text Box
    var startTimeTextBox;
    var endTimeTextBox;
    $(".boxOfText").on('mouseenter', function(event){
        startTimeTextBox = event.timeStamp;
    });
    $(".boxOfText").on('mouseleave', function(event){
        endTimeTextBox = event.timeStamp;
    });

    // Time spent hovering over Giant Button
    var startTimeButton;
    var endTimeButton;
    $(".giantButton").on('mouseenter', function(event){
        startTimeButton = event.timeStamp;
    });
    $(".giantButton").on('mouseleave', function(event){
        endTimeButton = event.timeStamp;
    });

    // Time spent hovering over Check Box element
    var startTimeCheckBox;
    var endTimeCheckBox;
    $(".checkBox").on('mouseenter', function(event){
        startTimeCheckBox = event.timeStamp;
    });
    $(".checkBox").on('mouseleave', function(event){
        endTimeCheckBox = event.timeStamp;
    });




    // How many vowels were typed into the text area
    var numVowelsPressed = 0;
    $('.textarea').on('keypress', function(event){
        //console.log(typeof event.key);
        if((event.key === 'A') || (event.key === 'a') || (event.key === 'I') || (event.key === 'i') || (event.key === 'u') || (event.key === 'U') || (event.key === 'o') || (event.key === 'O') || (event.key === 'E') || (event.key === 'e')){
            numVowelsPressed++;
        }
    });



    // If they left the page by clicking a link, record the link they clicked
    var clickedYouTubeLink = false;
    var clickedxkcdLink = false;
    $('.youtubeText').on('click', function(event){
        clickedYouTubeLink = true;
    });
    $('.xkcdText').on('click', function(event){
        clickedxkcdLink = true;
    });



    // Stuff to be printed when leaving page

    $(window).on('unload',function(event){
        endTime = event.timeStamp;

        // Finalizing total time spent on page
        var totTime = endTime - startTime;

        // Finalizing total time hovering over elements
        var totTimeHeading = endTimeHeading - startTimeHeading;
        var totTimeHorizon = endTimeHorizon - startTimeHorizon;
        var totTimeTextArea = endTimeTA - startTimeTA;
        var totTimeXkcd = endTimeXkcd - startTimeXkcd;
        var totTimeYouTube = endTimeYouTube - startTimeYouTube;
        var totTimeTextBox = endTimeTextBox - startTimeTextBox;
        var totTimePorcupine = endTimePorcupine - startTimePorcupine;
        var totTimeButton = endTimeButton - startTimeButton;
        var totTimeCheckBox = endTimeCheckBox - startTimeCheckBox;

        // Printing total time spent on page and percentage of page viewed
        console.log(`Total time spent on page: ${totTime} (ms)`);
        console.log(`Percentage of the page viewed: ${scrollPercent}%`);

        // Printing total time spent hovering over elements
        console.log(`Total time spend hovering over Heading: ${totTimeHeading} (ms)`);
        console.log(`Total time spend hovering over Horizon image: ${totTimeHorizon} (ms)`);
        console.log(`Total time spend hovering over Text Area: ${totTimeTextArea} (ms)`);
        console.log(`Total time spend hovering over xkcd.com element: ${totTimeXkcd} (ms)`);
        console.log(`Total time spend hovering over YouTube.com element: ${totTimeYouTube} (ms)`);
        console.log(`Total time spend hovering over Text Box: ${totTimeTextBox} (ms)`);
        console.log(`Total time spend hovering over Porcupine image: ${totTimePorcupine} (ms)`);
        console.log(`Total time spend hovering over Button: ${totTimeButton} (ms)`);
        console.log(`Total time spend hovering over Check Box: ${totTimeCheckBox} (ms)`);

        // Printing number of vowels entered in text area
        console.log(`Total Vowels entered in text area: ${numVowelsPressed}`);

        // Printing whether user left by clicking a link
        if(clickedYouTubeLink){
            console.log('Left the page to www.YouTube.com');
        }
        if (clickedxkcdLink){
            console.log('Left the page to www.xkcd.com');
        }

    });
});







// $('.giantButton').on('click',function(event){

//     console.log(event);

//     console.log('relative to the window');
//     console.log('event.clientX, event.clientY');
//     console.log(event.clientX, event.clientY);

//     console.log('relative to the HTML document');
//     console.log('event.pageX, event.pageY');
//     console.log(event.pageX, event.pageY);

//     console.log('relative to the target element');
//     console.log('event.offsetX, event.offsetY');
//     console.log(event.offsetX, event.offsetY);

//     console.log('relative to the computer\'s screen');
//     console.log('event.screenX, event.screenY');
//     console.log(event.screenX, event.screenY);
// });
// $(document).on('click', function(event){
//     console.log(event);
// });
