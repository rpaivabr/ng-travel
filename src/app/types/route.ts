import { LatLngBounds, Layer, MapOptions } from "leaflet";

export type LatLng = [number, number]

export type Coordinate = {
    coordinates: LatLng;
    type: 'Point';
}

export type DrivingRoute = {
    resourceSets: ResourceSet[];
}

export type MapWithDrivingRoute = DrivingRoute & {
    options: MapOptions;
    layers: Layer[];
    bounds: LatLngBounds;
  };

export type ItineraryItem = {
    maneuverPoint: Coordinate
}

type RouteLeg = {
    actualStart: Coordinate;
    actualEnd: Coordinate;
    itineraryItems: ItineraryItem[]
}

type Resource = {
    travelMode: string;
    distanceUnit: string;
    durationUnit: string;
    travelDistance: number;
    travelDuration: number;
    routeLegs: RouteLeg[];
}

type ResourceSet = {
    resources: Resource[];
}
