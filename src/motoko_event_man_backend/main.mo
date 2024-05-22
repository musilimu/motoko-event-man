import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import List "mo:base/List";
import Bool "mo:base/Bool";
import Types "./Types";
actor {

  var events_size : Nat = 0;
  var tickets_size : Nat = 0;

  let events = Map.HashMap<Text, Types.Event>(0, Text.equal, Text.hash);
  let tickets = Map.HashMap<Text, Types.Ticket>(0, Text.equal, Text.hash);

  public shared (msg) func createEvent(_title : Text, _location : Text) : async Types.Event {
    events_size += 1;

    let event : Types.Event = {
      title = _title;
      location = _location;
      tickets = List.nil();
      owner = msg.caller;
      id = events_size;

    };

    events.put(Nat.toText(events_size), event);
    return event;
  };

  public shared (msg) func updateEvent(_id : Text, _title : Text, _location : Text) : async () {
    var event = events.get(_id);
    switch (event) {
      case (?event) {
        if (event.owner == msg.caller) {
          var event_ : Types.Event = {
            title = _title;
            location = _location;
            tickets = event.tickets;
            owner = event.owner;
            id = event.id;
          };

          ignore events.replace(_id, event_);
        };
      };
      case (null) {};
    };

  };

  public shared (msg) func bookEventTicket(_eventId : Text) : async Bool {
    var event = events.get(_eventId);
    switch (event) {
      case (?event) {
        tickets_size += 1;
        var eventTicketsList : Types.List<Nat> = event.tickets;
        eventTicketsList := List.push(tickets_size, eventTicketsList);

        var event_ : Types.Event = {
          title = event.title;
          location = event.location;
          tickets = eventTicketsList;
          owner = event.owner;
          id = event.id;
        };

        let ticket : Types.Ticket = {
          event = _eventId;
          owner = msg.caller;
          isCanceled = false;
        };

        tickets.put(Nat.toText(tickets_size), ticket);

        ignore events.replace(_eventId, event_);
        return true;
      };
      case (null) {
        return false;
      };
    };

  };

  public shared (msg) func deleteEvent(key : Text) : async Bool {
    let event = events.get(key);
    switch (event) {
      case (?event) {
        if (event.owner == msg.caller) {
          events.delete(key);
          return true;
        };
        return false;

      };
      case (null) {
        return false;
      };
    };
  };

  public query func getEvent(key : Text) : async ?Types.Event {
    return events.get(key);
  };

  public query func getEvents() : async Types.List<Types.Event> {
    var eventList : Types.List<Types.Event> = List.nil();
    for (event in events.vals()) {
      eventList := List.push(event, eventList);
    };
    return eventList;
  };

  public query func getTickets() : async Types.List<Types.Ticket> {
    var ticketsList : Types.List<Types.Ticket> = List.nil();
    for (ticket in tickets.vals()) {
      ticketsList := List.push(ticket, ticketsList);
    };
    return ticketsList;
  };

};
