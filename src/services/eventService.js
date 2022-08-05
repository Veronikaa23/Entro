import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/events";

export const getAll = () => request.get(baseUrl);

export const getOne = (eventId) => request.get(`${baseUrl}/${eventId}`);

export const create = (eventData) => request.post(baseUrl, eventData);

export const edit = (eventId, eventData) =>
  request.put(`${baseUrl}/${eventId}`, eventData);

export const remove = (eventId) => request.del(`${baseUrl}/${eventId}`);

export const getSortedEvents = () =>
  request.get(`${baseUrl}?sortBy=_createdOn%20desc`);
