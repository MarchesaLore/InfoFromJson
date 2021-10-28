
Reused the html and css on my previous example https://github.com/MarchesaLore/SimplePortfolio

![image](https://user-images.githubusercontent.com/22336407/139302797-240eb0c9-0220-4336-98e2-f3549c3a4050.png)

But I stored the info in json files!
Categoeries types and then all the categories details are generated getting the data from jsons and injecting them into the same card template html

```rb
    ...
    var cardTemplate='';
    cardTemplate += '<div class="portfolio_new_item_withhover">';
    cardTemplate += '<div class="portfolio_item_img_withhover"><a href="@cardurl"><img src="@cardimg" alt="@cardimgdesc"></a></div>';
    cardTemplate += '<a href="@cardurl" class="portfolio_new_item_title_hover"><span span class="highlight_cont">@cardTitle</span></a>';
    cardTemplate += '<a href="@cardurl" class="portfolio_item_title_hover"></a>';
    cardTemplate += '</div>';
    ...
    $.getJSON("./json/categories.json", 
        function (data) {
          var categoriesHTML='';
         ...
        $.each(data, function (key, value) {
          categoriesHTML += cardTemplate;
          categoriesHTML = categoriesHTML.replaceAll('@cardurl', ''+ value.url);
          categoriesHTML = categoriesHTML.replaceAll('@cardimg', ''+ value.img);
          categoriesHTML = categoriesHTML.replaceAll('@cardTitle', ''+ value.title);
          categoriesHTML = categoriesHTML.replaceAll('@cardimgdesc', ''+ value.imgdesc);
          ...
        });
        $('#categories').append(categoriesHTML);
        ...
    });
```

Also I reversed the oder of image and text for mobile using flex 

![image](https://user-images.githubusercontent.com/22336407/139302204-f4858766-0f36-4aad-b94b-b43f91b8834f.png)

```rb
@media (max-width: 800px) {    
    .art-description{
        display: flex;
        /*when on mobile I want the image to be before the description*/
        flex-direction: column-reverse;
    }
}
```

P.S. I made the artwork and I am actually selling the items on Redbubble
NumbLock.redbubble.com
