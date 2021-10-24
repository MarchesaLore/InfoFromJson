$(document).ready(function() {  
  /* I am using the same card html  for all the different types so I write it once and use it for all */
    var cardTemplate='';
    cardTemplate += '<div class="portfolio_new_item_withhover">';
    cardTemplate += '<div class="portfolio_item_img_withhover"><a href="@cardurl"><img src="@cardimg" alt="@cardimgdesc"></a></div>';
    cardTemplate += '<a href="@cardurl" class="portfolio_new_item_title_hover"><span span class="highlight_cont">@cardTitle</span></a>';
    cardTemplate += '<a href="@cardurl" class="portfolio_item_title_hover"></a>';
    cardTemplate += '</div>';

    var titleTemplate='<div><h3>@categorieTitle</h3></div><div id="@categoryDiv" class="portfolio_new"></div>';

    $.getJSON("./json/categories.json", 
        function (data) {
          var categoriesHTML='';
          var categoriesTitleHTML='';
        $.each(data, function (key, value) {
          categoriesHTML += cardTemplate;
          categoriesHTML = categoriesHTML.replaceAll('@cardurl', ''+ value.url);
          categoriesHTML = categoriesHTML.replaceAll('@cardimg', ''+ value.img);
          categoriesHTML = categoriesHTML.replaceAll('@cardTitle', ''+ value.title);
          categoriesHTML = categoriesHTML.replaceAll('@cardimgdesc', ''+ value.imgdesc);

          /* I am also creating the titles + div for the 4 categories details here that I am going to use below*/
          categoriesTitleHTML +=titleTemplate;
          categoriesTitleHTML = categoriesTitleHTML.replaceAll('@categorieTitle', ''+ value.title);
          categoriesTitleHTML = categoriesTitleHTML.replaceAll('@categoryDiv', 'div'+ value.id);

        });
        $('#categories').append(categoriesHTML);
        $('#categories-desc').append(categoriesTitleHTML);
    });


    $.getJSON("./json/clothing.json", 
        function (data) {
          var outcomeHTML='';
        $.each(data, function (key, value) {
          outcomeHTML += cardTemplate;
          outcomeHTML = outcomeHTML.replaceAll('@cardurl', ''+ value.url);
          outcomeHTML = outcomeHTML.replaceAll('@cardimg', ''+ value.img);
          outcomeHTML = outcomeHTML.replaceAll('@cardTitle', ''+ value.title);
          outcomeHTML = outcomeHTML.replaceAll('@cardimgdesc', ''+ value.imgdesc);
        });
        /* div1 to div4 has been created in the previous foreach */
        $('#div1').append(outcomeHTML);
    });
    $.getJSON("./json/computer.json", 
      function (data) {
        var outcomeHTML='';
      $.each(data, function (key, value) {
        outcomeHTML += cardTemplate;
        outcomeHTML = outcomeHTML.replaceAll('@cardurl', ''+ value.url);
        outcomeHTML = outcomeHTML.replaceAll('@cardimg', ''+ value.img);
        outcomeHTML = outcomeHTML.replaceAll('@cardTitle', ''+ value.title);
        outcomeHTML = outcomeHTML.replaceAll('@cardimgdesc', ''+ value.imgdesc);
      });
      $('#div2').append(outcomeHTML);
    });
    $.getJSON("./json/stationery.json", 
      function (data) {
        var outcomeHTML='';
      $.each(data, function (key, value) {
        outcomeHTML += cardTemplate;
        outcomeHTML = outcomeHTML.replaceAll('@cardurl', ''+ value.url);
        outcomeHTML = outcomeHTML.replaceAll('@cardimg', ''+ value.img);
        outcomeHTML = outcomeHTML.replaceAll('@cardTitle', ''+ value.title);
        outcomeHTML = outcomeHTML.replaceAll('@cardimgdesc', ''+ value.imgdesc);
      });
      $('#div3').append(outcomeHTML);
    });
    $.getJSON("./json/home.json", 
      function (data) {
        var outcomeHTML='';
      $.each(data, function (key, value) {
        outcomeHTML += cardTemplate;
        outcomeHTML = outcomeHTML.replaceAll('@cardurl', ''+ value.url);
        outcomeHTML = outcomeHTML.replaceAll('@cardimg', ''+ value.img);
        outcomeHTML = outcomeHTML.replaceAll('@cardTitle', ''+ value.title);
        outcomeHTML = outcomeHTML.replaceAll('@cardimgdesc', ''+ value.imgdesc);
      });
      $('#div4').append(outcomeHTML);
    });

});