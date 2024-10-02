import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurant/component-restaurant-info";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} isMap />
);
