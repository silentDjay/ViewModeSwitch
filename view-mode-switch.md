##What does it do?##

###Interactive Elements:###
_Display selection icons_
The default color of the left (selected) icon (representing the 'row of 3 products' layout) is blue, while the default color of the right (not selected) icon (representing the linear product layout) is grey. When the non-selected icon is _mouseovered_, the color turns to blue, and then back to grey when _mouseouted_
When the unselected icon is clicked, it's color turns to blue, while the other icon's color turns to grey
also, more importantly, when the unselected icon is clicked, the css of pretty much the entire page is swapped out with a different css

_add to cart buttons_
When the buttons are _mouseovered_, they turn to dark blue, and upon _mouseouting_, they turn back to (the default) lighter blue
NOTHING happens when you click them

##How does it do it?##
The color of the icons when mouseover/outed or clicked will be changed with JavaScript
The background color of the buttons when mouseover/outed will be changed with JavaScript

In order to make these changes, we will need to use the following JavaScript things:

color
element.style.backgroundColor (for the button mouseover/out)
element.style.color (for the display selector icons)
