friday:
  -going through the devtools and postman to get info to display was fun to figure out. During this process, I did not know if anything I was doing was even on the right path but I guess it was! now my beers, breweries, and locations are displayed. Now I just have to figure out why I can't get the images to appear, even though I can clearly see where they are in the react devtools and postman... I assume I'm having a hard time because some of them don't have images.

  -dps assessment says 'Most Beers and Breweries have an image or multiple images.'   but, looking through the data on postman, I can see that breweries have images but  I can't find any images on the beers. 

-----------------------------------------------------------------------------------

saturday:
  -took a break, no coding. Researched about how to set something with missing keys to a default value. (my case: breweries with no images)
  Found a couple possible solutions, but did not test them yet.

-----------------------------------------------------------------------------------

sunday: 
  -Tried a couple solutions for images

  -tried to do a ternary to conditionally render but it kept saying it couldnt find the value of something that was 'undefined'. The problem with my ternary was that it was searching for a 'true' or 'false', but I had 'true' or 'undefined'. Then, with some research, I found out I could use 'typeof' to return something if it was of type 'undefined'. This was my breakthrough because thats how I finally got my images to appear!

  -Still struggling with pagination. I can put api/all_beers?page=1&per_page=10 in the axios call but there's no point to doing that if I haven't figured out how to continue to the next page. I know the data on postman gives me 'total pages' and such, I just don't know how to put that to use. 

  -I styled a bit, but I can't seem to truncate the long description to the size of its container. When I used a custom style to truncate, it truncated to the width of the Card. I tried to custom add a height but it didn't work. So now I'm left with a varying size of cards in order to not let the text overflow

-----------------------------------------------------------------------------------

SUMMARY: 
  this was a super fun assessment. The data was really messy and I think that helped me learn how to use react better to get specific data.
  
     /\__/\
    /`    '\
  === 0  0 ===
    \  --  /
   /        \
  /          \
 |            |
  \  ||  ||  /
   \_oo__oo_/#######o
  