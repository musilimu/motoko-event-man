import List "mo:base/List";
import Bool "mo:base/Bool";
import Text "mo:base/Text";
module {
    public type List<T> = ?(T, List<T>);

    public type Event = {
        title : Text;
        location : Text;
        tickets : List<Nat>;
        owner : Principal;
        id: Nat;
    };

    public type Ticket = {
        owner : Principal;
        isCanceled : Bool;
        event : Text;
    };

};
