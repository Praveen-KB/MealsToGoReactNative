import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((res, rej) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      rej("not Found");
    }

    res(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.result[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
