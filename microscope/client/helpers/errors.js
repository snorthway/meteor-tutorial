// Local (client-only) collection (but duh because it's in /client)
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};