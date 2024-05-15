
# JustEatTakeAway Web Assessment(New Version)

This project fetch restaurant data from a provided API https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/{postcode}, filter the data received,
leaving and displaying only with the name, addresss, cuisines, and rating of the restaurants. 

{postcode} can be replaced by a valid UK postcode. 
This project consists of a front end and a back end. The front end is written in react and the back end is constructed with java springboot framework and maven.


## Prerequisites
1. Node.js: Download & Install Node.js and the npm package manager.
2. Java Development Kit (JDK): You need JDK 17 or above to run the backend service. Download JDK 17+. Here is a address that you can download suitable JDK:
https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
3. If you are a Unix system user, please check if the front end files are executable. Here is what you can possibly do :chmod +x ./node_modules/.bin/react-scripts

# Getting Started
These instructions will get your copy of the project up and running on your local machine for development and testing purposes.
## Installing
First, clone the repository to your local machine:
git clone https://github.com/goumaoxiaomusi/process_restaurant_data2.git
cd where-you-store-this-project

### Setting up the Front-End
Navigate to the front-end directory:
cd web-frontend/vite-project

Install the necessary packages:

npm install


### Setting up the Back-End
Ensure the backend.jar file is in your directory.


## Running the Application
### Starting the Back-End
To start the back-end service, use the following command:

java -jar backend.jar
This will start the back-end service, typically accessible on http://localhost:8080/restaurant

### Starting the Front-End
Befoer you start to run the front end, ensure that the back end is running.
In the front-end directory, run the following command to start the front-end service:

cd web-frontend/front-end
npm run dev

This will compile and start the front-end part of the application on http://localhost:5137/

If your web browser does not automatically start, then after you type in npm run start and see "successfully compiled" in your terminal,
please open your browser and type in http://localhost:5137 or http://localhost:5137/ This will lead you to the page that allow you to enter a postcode

After entering a valid postcode, the corresponding data will be displayed

Entering any other path can lead to 404 not found page such as http://localhost:5137/a.


