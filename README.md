# Peachtree Bank SPA

### Description:

Develop an SPA with Transfer Money and Transaction History user experiences.

### GitHub Repo

https://github.com/gatorisgreater/bb_fe_test

### Screenshot
![Peachtree Bank SPA](https://github.com/gatorisgreater/bb_fe_test/blob/master/assets/screenshot.PNG "Peachtree Bank SPA")

### UX - Transfer Money

As a user I should be able to transfer money using the Transfer Money form as shown in the UI Design. I should be able to:
1. Fill in the TO and AMOUNT fields of the form. Assume that the FROM field is pre-filled with the data shown in the UI Design and is DISABLED.
2. Press "Submit" and preview the entered data.
3. Press "Transfer" on the preview screen. When transfer is pressed assume that the transfer should now appear at the top of the transactions list, and the balance in the FROM field should have decreased by the amount of the transfer.

### UX - Transaction History

As a user I should be able to view recent transactions as shown in the UI Design. I should be able to:
1. Consume a list of recent transactions provided in the transactions.json file, and display them properly.
2. Update the transactions list when a new money transfer has taken place.

### Tech Stack:

* React - Front End Framework

* Redux - MVC Architectural Pattern

* Jest - React Testing Framework

	    ├ src
	    ├── client
	    │ └── app: React App
	    │ 	└── actions
	    │ 	└── components
	    │ 	└── reducers        
	    │ └── public: build folder   
	    │ └── index.html    
	    │ └── main.css: style-sheet
	    ├ test: unit-testing of each component

### Requirements/Installation

1. Install package dependencies using preferred package manager.
2. Run build script
3. Open in the browser on src/client/index.html

### ROADMAP TO THE FUTURE:

* Modal accessibility considerations (focus trap React).
* Responsive layout.
