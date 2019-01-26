Top Reddit App
==============

This is a web application with React to read top news on reddit

## Features

- Pagination support
- Saving pictures in the picture gallery
- App state-preservation/restoration
- Indicator of unread/read post (updated status, after post it’s selected)
- Dismiss Post Button (remove the cell from list. Animations required)
- Dismiss All Button (remove all posts. Animations required)
- Support split layout (left side: all posts / right side: detail post)
- Responsive design

## What you get with the application 

The app show a list of news with these information:

- Title (at its full length, so take this into account when sizing your cells)
- Author
- entry date, following a format like “x hours ago” 
- A thumbnail for those who have a picture.
- Number of comments
- Unread status

In addition, for those having a picture (besides the thumbnail), please allow the user to tap on the thumbnail to be sent to the full sized picture.

And if you click the news you can read the detail of the news

## Tools used

- Parcel bundler to build and development the application
- Jest suite to test the application
- React@next in order to use the new Hooks and Context API
- eslint with standard configuration
- Axios to do services
- And is gonna be deploy on Github Pages