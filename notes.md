friday:
  -going through the devtools and postman to get info to display was fun to figure out. During this process, I did not know if anything I was doing was even on the right path but I guess it was because now my beers, breweries, and locations are displayed. Now I just have to figure out why I can't get the images to appear, even though I can clearly see where they are in the react devtools and postman... I assume I'm having a hard time because some of them don't have images.

saturday:
  -took a break, no coding. Researched about how to set something with missing keys to a default value. (my case: breweries with no images)
  Found a couple possible solutions, but did not test them yet.

sunday: 
  -Tried a couple solutions for images
  -tried to do a ternary to conditionally render but it kept saying it couldnt find the value of something that was 'undefined'. The propblem with my ternary was that it was searching for a 'true' or 'false', but I had 'true' or 'undefined'. Then, with some research, I found out I could use 'typeof' to return something if it was of type undefined. This was my breakthrough because thats how I finally got my images to appear!
  