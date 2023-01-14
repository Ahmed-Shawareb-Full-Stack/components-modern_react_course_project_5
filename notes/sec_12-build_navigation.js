//? ─── Modern React Course - Section 13  - Build Navigation

// Sections highlights

/*
1 - Navigation from scratch
2 - 
3 - 
*/

// * Build app navigation from scratch
/*
! get the location
>>> location : domain + path >>> "domain [knafklnsd.das]" + "path[/ , /nkfa, /dv/sdaf]"

>>> window.location >>> {...data , host , domain , pathname}

! changing the address bar

>> window.location = "domain" + "path" >>> full page refresh
>> window.history.pushState({} , "" , "path") >>> update the address bar without refreshing the page

! Detect the link click
>> create a component "Link" 
>>> Link : 
    return normal anchor element <a></a>
    prevent browser default 
    receive the href as a props
    handle the click by an event handler
    <a onClick = {handleClick} href={prop}>{children}</a>

>>> Back and Forward Clicks:
    "popState" >> when using pushState to update the URL in the browser the browser use popState event to go back and forward

    > we will listen for popState event to handle the page refreshing process

! Navigation Context

>>wrapping the app with context to share the navigation methods and info in the whole app
*/
