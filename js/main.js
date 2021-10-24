$(document).ready(function() {  
    var cardTemplate='';
    cardTemplate += '<div class="portfolio_new_item_withhover">';
    cardTemplate += '<div class="portfolio_item_img_withhover"><a href="@cardurl"><img src="@cardimg" alt="@cardimgdesc"></a></div>';
    cardTemplate += '<a href="@cardurl" class="portfolio_new_item_title_hover"><span span class="highlight_cont">@cardTitle</span></a>';
    cardTemplate += '<a href="@cardurl" class="portfolio_item_title_hover"></a>';
    cardTemplate += '</div>';

    var titleTemplate='<div><h3>@categorieTitle</h3></div><div id="@categoryDiv" class="portfolio_new"></div>';

    $.getJSON("./json/categories.json", 
        function (data) {
          var categories='';
          var categoriesTitle='';
        $.each(data, function (key, value) {
          categories += cardTemplate;
          categories = categories.replaceAll('@cardurl', ''+ value.url);
          categories = categories.replaceAll('@cardimg', ''+ value.img);
          categories = categories.replaceAll('@cardTitle', ''+ value.title);
          categories = categories.replaceAll('@cardimgdesc', ''+ value.imgdesc);

          categoriesTitle +=titleTemplate;
          categoriesTitle = categoriesTitle.replaceAll('@categorieTitle', ''+ value.title);
          categoriesTitle = categoriesTitle.replaceAll('@categoryDiv', 'div'+ value.id);

        });
        $('#categories').append(categories);
        $('#categories-desc').append(categoriesTitle);
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