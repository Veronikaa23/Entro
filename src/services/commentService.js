
import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const create = (eventId, comment) =>
    request.post(baseUrl, { eventId, text: comment });

export const getByEventId = (eventId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`eventId="${eventId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}