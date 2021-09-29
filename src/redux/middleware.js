import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'dick', 'whore', 'php', 'spam'];

export function forbiddenWordsMiddleware({dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.post.title.includes(w));
                if (found.length !== 0) {
                    return dispatch(showAlert("Forbidden words found..."));
                }
            }
            return next(action);
        }
    }
}