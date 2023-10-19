var rhit = rhit || {};
rhit.FB_COLLECTION_MOVIEQUOTE = "MovieQuotes";
rhit.FB_KEY_QUOTE = "quote";
rhit.FB_KEY_MOVIE = "movie";
rhit.FB_KEY_LAST_TOUCHED = "lastTouched";
rhit.fbMovieQuotesManager = null;
rhit.fbSingleQuoteManager = null;

const db = firebase.firestore();
db.collection(cities);
rhit.FbSingleQuoteManager = class {
    constructor(movieQuoteId) {
    this._documentSnapshot = {};
    this._unsubscribe = null;
    this._ref = firebase.firestore().collection(rhit.FB_COLLECTION_MOVIEQUOTE).doc(movieQuoteId);
    }
    