• SCSS FOLDER PACK BY WAW • 

I. GET STARTED
# Import app.scss to your global styles -> @import: "scss/app";

II. STRUCTURE
# atom 
	1. display
	2. margin
	3. padding
	4. size
	5. text
# common
# components
	1. buttons
	2. forms
	3. nav
	4. switch
	5. table
# layout
	1. base
	2. grid
	3. scroll
# pages
# utils
	1. fonts
	2. icons
	3. media
	4. vars
	5. angular
# vendors
	1. normalize

III. SETTINGS
# Go to app.scss and turn on/off imports scss files

IV. INFO
1. atom - include atomic classes.
2. common - include styles which appears on few pages.
3. components - include independent blocks
4. layout - include global layout settings
5. pages - include style for specifically page
6. utils - include abstract styles
7. vendors - include imports resets, normalize, libs

V. HOW TO USE COMPONENTS
# Go to scss/components/README.md - ready made html for components

VI. HTML/SCSS RULES
# We use BEM technology but changed a little for themselves (optional)
a. HTML
	1. block -> "header"
	2. element -> "header__link"
	3. modifier -> "_active"
b. SCSS
	1. block -> "header {}"
	2. element -> "&__link {}"
	3. modifier -> "&._active {}"