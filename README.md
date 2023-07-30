
https://github.com/MUHAMMAD-SHAHZAIB/MaxGo-Task/assets/90214531/b116c564-9908-4b8d-b18c-df0e8240b89f



## -------------Poject Introduction and Structure--------------

## -------------Introduction------------

I have successfully completed the Property Listing task. Initially, Angular Framework was required, but I decided to use React Library because I have more experience and a better understanding of React.

And Tailwind Css use for Better UI Design

I have completed the project by creating small components.

As per the given task requirements, I have implemented the main functionality of the project. The main functionality includes creating a property listing page using React, fetching data from a JSON server, displaying property cards, implementing pagination to show a limited number of properties per page, and showing relevant property details such as title, address, area, and price.

## ----------Code Structure---------------

## 1 App.jsx

In the "App" folder, I have created two main components: "Table" and "Card." Additionally, I have added a switch button that allows users to toggle between displaying the data in a tabular format (Table) or a card format (Card). When the user clicks the button, the view switches between the two options accordingly.

## 2 Pages Folder

In this folder, I have created two File
1:Card.jsx file
2:Table.jsx file

## 3 Card.jsx

In the "Card.js" file, I first defined the functionality for sorting, pagination, and filtering. These features allow users to organize and view the data in a more manageable way. After implementing these features, I used the useEffect hook to fetch data from the API. The useEffect hook helps to perform this data fetching operation when the component is mounted.

Card.js" more organized and modular, as each component handles a specific aspect of the functionality. The Pagination and Search components are now separate and reusable, making the code easier to maintain and understand.

## 3(a) CardView.jsx component

    I created a new component called "CardView" to encapsulate the design and structure of the card view. This component is now defined in a separate file called "CardView.js."

    By creating a separate "CardView" component, the code in "Card.js" is more organized and modular. The "CardView" component handles the presentation and layout of the cards, while the "Card" component manages the pagination, search, and data fetching functionalities.

## 4 Detail.jsx component

when a user clicks on a card in the card view, they are taken to a new page (detail page) where they can view all the specific details of that property. This provides a more comprehensive view of the property's information and enhances the user experience.

## 5 Table.jsx

The same process is used Table Component.

## 5 Api Folder

In this folder, I have create util.jsx for fetching the data from backend side.
Also define specific root.
And json-server used for backend to store the data in db.json file.

## ----------------Import module installed--------------------

1 --> npm install json server
1 --> npm install React Icon
1 --> npm install React router dom version 6
1 --> npm install prop-types

## ----------------Run Code -----------------------

First open terminal and run frontend side code.
npm run dev

Second open new terminal and run backend side code.
json-server db.json

## ----------------Note-----------------------

Run the thses command other wise not data fetch backend side
