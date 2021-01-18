import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { upsert, selectTrails } from "./trailsSlice";
import { useParams } from "react-router-dom";

export function EditTrail() {
  const trails = useSelector(selectTrails);
  const dispatch = useDispatch();
  const { trailId } = useParams();

  const trail = trails.find((trail) => trail.id === trailId);

  return (
    <>
      <h2>{trail.name}</h2>
      <p>
        {trail.id} - {trail.location}
      </p>
    </>
  );
}
