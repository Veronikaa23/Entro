import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/events";

export const getAll = () => request.get(baseUrl);

export const getAllPagination = (offset, pageSize) => request.get(`${baseUrl}?&offset=${offset}&pageSize=${pageSize}`);

export const getOne = (eventId) => request.get(`${baseUrl}/${eventId}`);

export const create = (eventData) => request.post(baseUrl, eventData);

export const edit = (eventId, eventData) =>
  request.put(`${baseUrl}/${eventId}`, eventData);

export const remove = (eventId) => request.del(`${baseUrl}/${eventId}`);

export const getSortedEvents = () =>
  request.get(`${baseUrl}?sortBy=_createdOn%20desc`);


export const search = (searchText,offset,pageSize) => {
  const query = encodeURIComponent(`city LIKE "${searchText}"`);

  return request.get(`${baseUrl}?where=${query}&offset=${offset}&pageSize=${pageSize}`);
};

const baseUrlLikes = 'http://localhost:3030/data/likes';

export const likes = (eventId) =>
  request.post((baseUrlLikes), { eventId });

export const getLikes = (eventId) =>
  request.get(
    `http://localhost:3030/data/likes?where=eventId%3D%22${eventId}%22&count`
  );

export const getByEventId = (eventId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`gameId="${eventId}"`);

    return request.get(`${baseUrlLikes}?where=${search}&load=${relations}`);
}