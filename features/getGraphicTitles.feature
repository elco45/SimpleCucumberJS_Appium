Feature: As an android app user, I want to view the Graphics elements title.

#view graphics
@android
Scenario Outline:: Verify Graphics elements title
	Given A user that wants to see "Graphics" elements
  	When I navigate to "<element>" tab
  	Then I should see the "Graphics/<element>" title

Examples:
	|	element		|
	|	Arcs		|
	|	AlphaBitmap	|