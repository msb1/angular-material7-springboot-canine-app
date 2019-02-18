## angular-material7-springboot-canine-app

### Test application for Angular Material 7

1. canine-app uses Spring Boot 2.10 with Gradle build and MySQL database for the backend.
2. data scraped from website(s) with Python code using requests and lxml
3. create-canine-db is basic Spring Boot app to create MySQL db table from scraped data stored as json strings
4. canine-app use Angular Material 7 for frontend
  * implements top tool bar with collapable search box (with suggestions). (search function uses matInput and mat-autocomplete)
  * has custom theming
  * uses Giphy icons on canine pages (for fun)
  * has collapsable alphabet side menu to display canines by letter of alphabet
  
