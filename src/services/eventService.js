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

export const likes = (eventId) =>
  request.post(`http://localhost:3030/data/likes`, { eventId });

export const getLikes = (eventId) =>
  request.get(
    `http://localhost:3030/data/likes?where=eventId%3D%22${eventId}%22&count`
  );

export const search = (searchText,offset,pageSize) => {
  const query = encodeURIComponent(`city LIKE "${searchText}"`);
  // console.log(query,"query");
  return request.get(`${baseUrl}?where=${query}&offset=${offset}&pageSize=${pageSize}`);
};

// export const getPage = (offset, pageSize) => {
//   request.get(
//     `http://localhost:3030/data/events?offset=${offset}&pageSize=${pageSize}`
//   );
// };
