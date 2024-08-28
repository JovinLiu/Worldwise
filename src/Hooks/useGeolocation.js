import { useState } from "react";

function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState([]);
  const [error, setError] = useState(undefined);

  if (isLoading === false) return [position, error, isLoading, setIsLoading];

  if (!navigator.geolocation)
    throw new Error("Your Browser does not support geolocation");

  const getPosition = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
  });

  getPosition
    .then((position) => {
      setPosition(position);
      setIsLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });

  return [position, error, isLoading, setIsLoading];
}

export { useGeolocation };
