# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1
#### Add the ability for Facilities to save their own custom ids for each Agent they work with
- Update the current functionality that handles saving of Agents
- If a custom ID is provided as part of the post data to create an agent's account and this id is a valid id format, use this custom id as the agent's id to save to the Agents table instead of using the system generated id. Be sure to trim off the id value for extra white spaces.
- If no custom ID is provided in the post data to create an agent, use the system generated id as the agent's id to save to the Agents table.

### Ticket 2
#### Add the ability to pull in custom agent id provided by facility when generating reports
- Update the current functionality that generates report for each facility.
- If a custom id was provided by a facility when saving an agent to the Agents database table, pull in this saved custom id into the reports as the agent's id.
- If no custom id was provided by a facility when saving the agent to the Agents database table, pull in the saved system generated id into the reports as the agent's id.

### Ticket 3
#### Run Tests to make sure these updates work as intended
- Run unit tests for each task to make sure it's working as intended.
- Run integration tests to make sure the two updates work well when integrated as a whole system.
- Run general test to make sure these updates did not break any existing functionality in the system prior to the updates.