$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Book search",
  "description": "To allow a customer to find his favourite books quickly, the library must offer multiple ways to search for a book.",
  "id": "book-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search books by publication year",
  "description": "",
  "id": "book-search;search-books-by-publication-year",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a book with the title \u0027One good book\u0027, written by \u0027Anonymous\u0027, published in 14 March 2013",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "another book with the title \u0027Some other book\u0027, written by \u0027Tim Tomson\u0027, published in 23 August 2014",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "another book with the title \u0027How to cook a dino\u0027, written by \u0027Fred Flintstone\u0027, published in 01 January 2012",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the customer searches for books published between 2013 and 2014",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "2 books should have been found",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Book 1 should have the title \u0027Some other book\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Book 2 should have the title \u0027One good book\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "One good book",
      "offset": 23
    },
    {
      "val": "Anonymous",
      "offset": 51
    },
    {
      "val": "14 March 2013",
      "offset": 76
    }
  ],
  "location": "SearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 114901648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some other book",
      "offset": 29
    },
    {
      "val": "Tim Tomson",
      "offset": 59
    },
    {
      "val": "23 August 2014",
      "offset": 85
    }
  ],
  "location": "SearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 503758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How to cook a dino",
      "offset": 29
    },
    {
      "val": "Fred Flintstone",
      "offset": 62
    },
    {
      "val": "01 January 2012",
      "offset": 93
    }
  ],
  "location": "SearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 505041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2013",
      "offset": 50
    },
    {
      "val": "2014",
      "offset": 59
    }
  ],
  "location": "SearchSteps.setSearchParameters(Date,Date)"
});
formatter.result({
  "duration": 53072023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 0
    }
  ],
  "location": "SearchSteps.verifyAmountOfBooksFound(int)"
});
formatter.result({
  "duration": 1700717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "Some other book",
      "offset": 30
    }
  ],
  "location": "SearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "duration": 91087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "One good book",
      "offset": 30
    }
  ],
  "location": "SearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "duration": 70988,
  "status": "passed"
});
});