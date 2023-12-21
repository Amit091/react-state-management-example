// MyComponent.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApiData,
  selectData,
  selectLoading,
  selectError,
} from "../redux/thunkSlice";
import { UnknownAction } from "@reduxjs/toolkit";

export const MyComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchApiData() as unknown as UnknownAction);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <ol>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default MyComponent;
