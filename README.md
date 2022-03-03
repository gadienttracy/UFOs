# UFOs
## Project Overview
  The purpose of this project is to compile a website using JavaScript, HTML Bootstrap, and customization with CSS.  The resulting website takes information from a JavaScript list and transforms it into a filterable table.  The end user can then filter based on date, city, state, country and shape of UFO.
  
## Results
  The final product contains multiple search or filtering functions. Without any values entered into the filters all values will display on the webpage.
  ![chall11_2](https://user-images.githubusercontent.com/91269696/156595307-ec48c356-fae5-49bd-b4e8-cc0ba3611bbe.PNG)
  
### Search Functions
  To search for UFO sightings on a specific date the user can enter a date in the "Enter Date" dialog box and the table automatically filters based on that date.
  ![chall11_1](https://user-images.githubusercontent.com/91269696/156597770-069b19c9-2fe7-4d19-9281-7036395ec6db.PNG)

  Another filterable feature is the city.  The user could enter a city and the table will display only the UFO sightings and subsequent information for that city.
  ![chall11](https://user-images.githubusercontent.com/91269696/156598189-54406f13-4307-492d-b317-2e514a648fdc.PNG)

  Subsequent searches can be performed based on state (two letter identifier), country (two letter identifier), and shape of UFO.  Additionally, the user can search on multiple criteria, for instance sightings on 1/1/2010 in ca with the shape light.
  ![chall11_3](https://user-images.githubusercontent.com/91269696/156599086-9e2b99e0-9474-42eb-9ce7-f092d5efde10.PNG)
  
## Summary
### Drawbacks
  One drawback of this website is that there is not a "Search" button.  It is nice that the website searches automatically based on values, however if the user does not recognize that they must click outside the search box to execute the search they may get frustrated that their results are not returning.
### Recommendations
  If the user would like to be able to filter the data by duration it would be very difficult to do because the values are all in different formats.  In order to accomodate this request the programmer should clean the duration values to contain a uniform formatting and insert a filter search function for duration.  Another recommendation is to allow the user to insert information into the database.  If they observe a UFO sighting they can enter it on this webpage.  This could be done by making the searchable filters actual data entry fields and adding fields for duration and comments.
