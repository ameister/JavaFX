package ch.bbv.fxtest;


import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import ch.bbv.fxtest.model.Book;
import ch.bbv.fxtest.model.Library;
import cucumber.api.Format;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java8.En;

public class SearchSteps implements En{
	
	Library library = new Library();
	List<Book> result = new ArrayList<>();
	
	public SearchSteps() {
		/*Given(".+book with the title '(.+)', written by '(.+)', published in (.+)", (final String title, final String author, @Format("dd MMMMM yyyy") final Date published) -> {
			Book book = new Book(title, author, published);
			library.addBook(book);
		});
		When("^the customer searches for books published between (\\d+) and (\\d+)$", (@Format("yyyy") final Date from, @Format("yyyy") final Date to) -> {
			result = library.findBooks(from, to);
		});
		Then("(\\d+) books should have been found$", (final Integer booksFound) -> {
			assertEquals(Integer.valueOf(result.size()), booksFound);
		});
		Then("(\\d+) books should have been found$", (final Integer position, final String title) -> {
			assertEquals(result.get(position - 1).getTitle(), title);
		});*/
	}
 
	@Given(".+book with the title '(.+)', written by '(.+)', published in (.+)")
	public void addNewBook(final String title, final String author, @Format("dd MMMMM yyyy") final Date published) {
		Book book = new Book(title, author, published);
		library.addBook(book);
	}
 
	@When("^the customer searches for books published between (\\d+) and (\\d+)$")
	public void setSearchParameters(@Format("yyyy") final Date from, @Format("yyyy") final Date to) {
		result = library.findBooks(from, to);
	}
 
	@Then("(\\d+) books should have been found$")
	public void verifyAmountOfBooksFound(final int booksFound) {
		assertEquals(result.size(),booksFound);
	}
 
	@Then("Book (\\d+) should have the title '(.+)'$")
	public void verifyBookAtPosition(final int position, final String title) {
		assertEquals(result.get(position - 1).getTitle(), title);
	}
	
}
