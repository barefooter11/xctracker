import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { upsert, selectTrails } from "./trailsSlice";
import styles from "./Trails.module.css";

import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";

import { EditTrail } from "./EditTrail";

export function Trails() {
  let { path, url } = useRouteMatch();

  const trails = useSelector(selectTrails);
  const dispatch = useDispatch();

  const trailItems = trails.map((trail) => (
    <LinkContainer key={trail.id} to={`${url}/${trail.id}`}>
      <ListGroup.Item action>
        {trail.id} - {trail.name} - {trail.location}
      </ListGroup.Item>
    </LinkContainer>
  ));

  return (
    <Switch>
      <Route exact path={path}>
        <div className={styles.trailsContainer}>
          <h2>Trails</h2>
          <ListGroup>{trailItems}</ListGroup>
        </div>
      </Route>
      <Route path={`${path}/:trailId`}>
        <EditTrail />
      </Route>
    </Switch>
  );
}
