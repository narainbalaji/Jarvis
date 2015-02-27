## Jarvis

Jarvis helps you keep track of your tickets.

###Bugs

1. The number of items on the All your tickets view is not getting updated after closing the ticket even though the ticket is not showing up.
2. Clicking on the item in the All your tickets view is not opening the ticket.

### Upcoming features

#### Functional

1. Keyboard navigation
2. Simliar resolved tickets by subject (for reference - helps for atleast autocuts)
3. Stop tracking tickets 
4. Mark as unread
5. Counts on the side nav also
6. Show updated time in the ticket listing
7. Show status in the ticket listing
8. Seperate out Sev-2 and Sev-3 and the rest and show them seperately
9. Seperate side-nav item for tickets Pending requester information
10. Integrate with pipeline API for tickets pending code push and alert once a new revision is in place
11. Integrate with CM tool for tickets pending CM and alert once a new revision is in place
12. Notify when a related item is updated or resolved
13. SIM integration

#### Non Functional

1. Delete older and obsolete entries using batch jobs
2. Compressing the entries stored in the database to reduce size
3. Refactoring and extracting out the correct models and structure with the above functional and non function requirements in mind

### V2 Features

Jarvis also has potential to become your personal assistant apart from just ticket tracking.

#### Functional

1. Quickly add and keep track of tasks
2. Have a couple of questions to ask someone and they are not online? Add the question and tag them. When they come online, I will remind you
