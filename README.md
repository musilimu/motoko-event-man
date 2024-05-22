# Event Management Platform - ON ICP [ THIS IS A WORK IN PROGRESS PROJECT feel free to contribute]

Hey there! Welcome to our Event Management Platform project! This is a fantastic opportunity for us to showcase our skills in web3 development using ICP. Our goal is to create a web application for managing events organized by ICP Rwanda. Here's what we need to build:

## Project Features

### Event Listing and Details:
- Let's display a list of upcoming events organized by our company.
- Each event should show important details like title, date, location, and ticket availability.

### Booking Tickets:
- We want users to be able to select the number of tickets they want for an event.
- Implement a straightforward booking process to make it easy for users.

### User Dashboard:
- Users should have their own dashboard where they can see the events they've booked.
- They should also be able to cancel their bookings if necessary.

### Admin Dashboard:
- Create a special dashboard accessible only to company administrators.
- Admins should be able to manage events, including creating new ones, editing details, and even deleting events if needed.
- Also, admins should have access to view all bookings and manage them, like canceling bookings or viewing attendee details.

### Basic Styling and UI/UX:
- Let's keep the design simple and clean using Tailwind CSS for a consistent look and feel.
- Our focus should be on making the platform easy to use with intuitive navigation.

### Error Handling and Validation:
- It's important to handle errors gracefully and validate user inputs.
- Provide clear and informative error messages to guide users if they make mistakes.

## Tech Stack
We have the option to use either the Motoko or React stack for this project.

## Project Requirements
- Let's implement all the features mentioned above using our chosen stack.
- Our aim is to create clean, readable, and well-organized code.
- We'll also need to provide documentation for setup and usage as needed.


## Running the project locally

If you want to test the project locally, follow these commands:

remeber `dfx` is a must have tool.

```bash
# clone a project localy
git clone https://github.com/musllim/motoko-event-man.git

cd motoko-event-man

npm i

# Start the replica, running in the background
dfx start --background

# Deploy your canisters to the replica and generate your candid interface
dfx deploy
```