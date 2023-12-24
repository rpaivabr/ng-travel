import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {
  Icon,
  Marker,
  Polyline,
  icon,
  latLng,
  latLngBounds,
  marker,
  polyline,
  tileLayer,
} from 'leaflet';
import { Coordinate, DrivingRoute, ItineraryItem, LatLng, MapWithDrivingRoute } from './route';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly http = inject(HttpClient);
  title = 'ng-travel';
  mapWithDrivingRoute!: MapWithDrivingRoute;
  origin: LatLng = [-12.870953931835821, -39.52701337549884];
  destination: LatLng = [-22.75009265272729, -47.3352230711642];

  // options = {
  //   layers: [
  //     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       maxZoom: 4,
  //       minZoom: 4
  //     }),
  //   ],
  //   zoom: 4,
  //   center: latLng(...this.destination),
  //   // center: latLng(46.879966, -121.726909)
  // };
  // layers: (Marker<any> | Polyline<any, any>)[] = [];

  ngOnInit(): void {
    const drivingRoutes: any = { resourceSets: [
      {
        "estimatedTotal": 1,
        "resources": [
          {
            "__type": "Route:http://schemas.microsoft.com/search/local/ws/rest/v1",
            "bbox": [
              -22.75029,
              -47.923769,
              -12.705189,
              -39.515033
            ],
            "id": "v70,h785760273,i0,a0,cen-US,dAAAAAAAAAAA1,y0,s1,m1,o1,t4,wbB17rO29KcA6KZ4sdcNDwA2~APFHKvMRLxFUAADgAdeNMT8C0~QkEtMTIwIC8gUnVhIDE1IGRlIG5vdmVtYnJv0~~~~~~~~v12,wAG90EgbANsDpwe-W6KpHwA2~APFHKvMZDb9OAADgAZ_lQD8A0~UnVhIGRhcyBBY8OhY2lhcw2~~~~~~~~v12,k1",
            "distanceUnit": "Kilometer",
            "durationUnit": "Second",
            "routeLegs": [
              {
                "actualEnd": {
                  "type": "Point",
                  "coordinates": [
                    -22.750041,
                    -47.335268
                  ]
                },
                "actualStart": {
                  "type": "Point",
                  "coordinates": [
                    -12.870821,
                    -39.525089
                  ]
                },
                "alternateVias": [],
                "description": "BR-116, BR-365",
                "endTime": "/Date(1703526431896-0800)/",
                "itineraryItems": [
                  {
                    "compassDirection": "north",
                    "details": [
                      {
                        "compassDegrees": 3,
                        "endPathIndices": [
                          55
                        ],
                        "maneuverType": "DepartStart",
                        "mode": "Driving",
                        "names": [
                          "Rua 15 de novembro"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131744,
                          "shields": [
                            {
                              "labels": [
                                "BA-120"
                              ],
                              "roadShieldType": 2
                            }
                          ]
                        },
                        "roadType": "Arterial",
                        "startPathIndices": [
                          0
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "DepartStart",
                      "text": "Head north on BA-120 / Rua 15 de novembro toward Estrada para Santa Terezinha"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -12.870821,
                        -39.525089
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "towardsRoadName": "Estrada para Santa Terezinha",
                    "transitTerminus": "",
                    "travelDistance": 13.531,
                    "travelDuration": 694,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 250,
                        "endPathIndices": [
                          57
                        ],
                        "maneuverType": "TurnToStayLeft",
                        "mode": "Driving",
                        "names": [
                          "Praça Apio Medrado"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BA-120"
                              ],
                              "roadShieldType": 2
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          55
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TurnToStayLeft",
                      "text": "Turn left to stay on BA-120 / Praça Apio Medrado"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -12.769914,
                        -39.524509
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.018,
                    "travelDuration": 7,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 260,
                        "endPathIndices": [
                          81
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "names": [
                          "Praça Apio Medrado"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BA-493"
                              ],
                              "roadShieldType": 2
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          57
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight to get onto BA-493 / Praça Apio Medrado"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -12.769966,
                        -39.524664
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 23.164,
                    "travelDuration": 1372,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 244,
                        "endPathIndices": [
                          347
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Santos Dumont"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-116"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          81
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-116 / Rodovia Santos Dumont"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -12.705816,
                        -39.723916
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 110.244,
                    "travelDuration": 5376,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "severity": "None",
                        "text": "Toll road",
                        "warningType": "TollRoad"
                      },
                      {
                        "origin": "-12.855772,-39.847514",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-12.855898,-39.847604",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 213,
                        "endPathIndices": [
                          350
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia B R 116"
                        ],
                        "roadType": "Highway",
                        "startPathIndices": [
                          347
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto Rodovia B R 116"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -13.508154,
                        -40.05423
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.065,
                    "travelDuration": 36,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-13.508309,-40.054331",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-13.508653,-40.054555",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 213,
                        "endPathIndices": [
                          352
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          350
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight, heading toward Avenida Presidente Medici"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -13.508653,
                        -40.054555
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.463,
                    "travelDuration": 56,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-13.508653,-40.054555",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-13.509078,-40.054809",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 203,
                        "endPathIndices": [
                          354
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "names": [
                          "Avenida Presidente Medici"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          352
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight to get onto Avenida Presidente Medici"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -13.512454,
                        -40.05628
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.182,
                    "travelDuration": 26,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 206,
                        "endPathIndices": [
                          357
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "names": [
                          "Avenida Presidente Medici"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          354
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight to get onto Avenida Presidente Medici"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -13.513961,
                        -40.056933
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.02,
                    "travelDuration": 4,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 203,
                        "endPathIndices": [
                          359
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          357
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight, heading toward Avenida Presidente Medici"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -13.514125,
                        -40.057011
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.58,
                    "travelDuration": 65,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 198,
                        "endPathIndices": [
                          360
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "names": [
                          "Avenida Presidente Medici"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          359
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight to get onto Avenida Presidente Medici"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -13.518908,
                        -40.059124
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.023,
                    "travelDuration": 1,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 203,
                        "endPathIndices": [
                          363
                        ],
                        "maneuverType": "KeepLeft",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          360
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepLeft",
                      "text": "Keep left, heading toward BR-116 / Rodovia Santos Dumont"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -13.519106,
                        -40.05919
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.317,
                    "travelDuration": 27,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 201,
                        "endPathIndices": [
                          538
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Santos Dumont"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-116"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          363
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-116 / Rodovia Santos Dumont"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -13.521764,
                        -40.060185
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 75.966,
                    "travelDuration": 3704,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "severity": "None",
                        "text": "Toll road",
                        "warningType": "TollRoad"
                      },
                      {
                        "origin": "-13.880437,-40.136178",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-13.880569,-40.136251",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 238,
                        "endPathIndices": [
                          541
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          538
                        ]
                      },
                      {
                        "compassDegrees": 210,
                        "endPathIndices": [
                          544
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "names": [
                          "Avenida Rio Bahia"
                        ],
                        "roadType": "Arterial",
                        "startPathIndices": [
                          541
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearThenKeep",
                      "text": "Bear right onto Avenida Rio Bahia"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -14.143566,
                        -40.241838
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 1.145,
                    "travelDuration": 160,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 208,
                        "endPathIndices": [
                          721
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Santos Dumont"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-116"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          544
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-116 / Rodovia Santos Dumont"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -14.152582,
                        -40.246769
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 184.562,
                    "travelDuration": 9487,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "severity": "None",
                        "text": "Toll road",
                        "warningType": "TollRoad"
                      },
                      {
                        "origin": "-14.350791,-40.334012",
                        "severity": "Serious",
                        "text": "Serious congestion",
                        "to": "-14.350992,-40.334124",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 221,
                        "endPathIndices": [
                          724
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          721
                        ]
                      },
                      {
                        "compassDegrees": 201,
                        "endPathIndices": [
                          787
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Santos Dumont"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-116"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          724
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRightThenBearRight",
                      "text": "Bear right,  then bear right onto BR-116 / Rodovia Santos Dumont"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.388428,
                        -41.20324
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 39.502,
                    "travelDuration": 2043,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-15.501436,-41.235416",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-15.501737,-41.235328",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 201,
                        "endPathIndices": [
                          802
                        ],
                        "maneuverType": "KeepToStayStraight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Santos Dumont"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-116"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          787
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepToStayStraight",
                      "text": "Keep straight to stay on BR-116 / Rodovia Santos Dumont"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.703756,
                        -41.335022
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 7.923,
                    "travelDuration": 500,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "severity": "None",
                        "text": "Entering Minas Gerais",
                        "warningType": "AdminDivisionChange"
                      },
                      {
                        "origin": "-15.719673,-41.341339",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-15.719829,-41.3414",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 221,
                        "endPathIndices": [
                          805
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          802
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right toward BR-116 / Rodovia Santos Dumont"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.769359,
                        -41.335224
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.382,
                    "travelDuration": 55,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-15.769359,-41.335224",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-15.769803,-41.33561",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 201,
                        "endPathIndices": [
                          846
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Santos Dumont"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-116"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          805
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-116 / Rodovia Santos Dumont"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.772484,
                        -41.336456
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 16.333,
                    "travelDuration": 843,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-15.810493,-41.378026",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-15.810545,-41.378139",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 212,
                        "endPathIndices": [
                          848
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Br 116"
                        ],
                        "roadType": "Highway",
                        "startPathIndices": [
                          846
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto Rodovia Br 116"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.872097,
                        -41.430492
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.103,
                    "travelDuration": 9,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-15.872097,-41.430492",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-15.872156,-41.430531",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 250,
                        "endPathIndices": [
                          877
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-251"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          848
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.872836,
                        -41.431056
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 15.098,
                    "travelDuration": 649,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-15.872855,-41.431112",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-15.872916,-41.431284",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 283,
                        "endPathIndices": [
                          879
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          877
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto road"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.90623,
                        -41.543488
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.075,
                    "travelDuration": 18,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-15.90623,-41.543488",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-15.906158,-41.543776",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "northwest",
                    "details": [
                      {
                        "compassDegrees": 294,
                        "endPathIndices": [
                          883
                        ],
                        "maneuverType": "KeepRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          879
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepRight",
                      "text": "Keep right, heading toward BR-251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.906148,
                        -41.544175
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.06,
                    "travelDuration": 17,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 283,
                        "endPathIndices": [
                          1167
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-251"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          883
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -15.906044,
                        -41.544714
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 103.866,
                    "travelDuration": 4430,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-16.007399,-41.920562",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-16.007348,-41.919752",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 221,
                        "endPathIndices": [
                          1170
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          1167
                        ]
                      },
                      {
                        "compassDegrees": 221,
                        "endPathIndices": [
                          1471
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-251"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          1170
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRightThenBearRight",
                      "text": "Bear right,  then bear right onto BR-251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.163941,
                        -42.314603
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 107.168,
                    "travelDuration": 4771,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-16.164622,-42.315044",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-16.165035,-42.315136",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 275,
                        "endPathIndices": [
                          1522
                        ],
                        "maneuverType": "KeepToStayLeft",
                        "mode": "Driving",
                        "names": [
                          "BR-251"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          1471
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepToStayLeft",
                      "text": "Keep left to stay on BR-251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.310082,
                        -43.105304
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 17.872,
                    "travelDuration": 790,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-16.358705,-43.164564",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-16.353507,-43.159138",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "northwest",
                    "details": [
                      {
                        "compassDegrees": 302,
                        "endPathIndices": [
                          1525
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Br251"
                        ],
                        "roadType": "Highway",
                        "startPathIndices": [
                          1522
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto Rodovia Br251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.406589,
                        -43.22797
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.089,
                    "travelDuration": 21,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-16.406589,-43.22797",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-16.406501,-43.228102",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 266,
                        "endPathIndices": [
                          1529
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Br251"
                        ],
                        "roadType": "Highway",
                        "startPathIndices": [
                          1525
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto Rodovia Br251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.406241,
                        -43.228657
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.037,
                    "travelDuration": 17,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-16.406241,-43.228657",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-16.406252,-43.228845",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 285,
                        "endPathIndices": [
                          1684
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-251"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          1529
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.40626,
                        -43.229005
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 61.173,
                    "travelDuration": 2895,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-16.406233,-43.2291",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-16.40626,-43.229005",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 233,
                        "endPathIndices": [
                          1717
                        ],
                        "maneuverType": "KeepLeft",
                        "mode": "Driving",
                        "names": [
                          "BR-251",
                          "BR-122"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          1684
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepLeft",
                      "text": "Keep left to get onto BR-251 / BR-122"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.607054,
                        -43.656621
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 9.301,
                    "travelDuration": 482,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-16.652807,-43.716285",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-16.652129,-43.715535",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 229,
                        "endPathIndices": [
                          1730
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Ápio Cardoso"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-122"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          1717
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-122 / BR-251 / Rodovia Ápio Cardoso"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.655071,
                        -43.718715
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 9.219,
                    "travelDuration": 538,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 255,
                        "endPathIndices": [
                          1733
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          1730
                        ]
                      },
                      {
                        "compassDegrees": 176,
                        "endPathIndices": [
                          1757
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "Avenida Governador Magalhães Pinto"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          1733
                        ]
                      }
                    ],
                    "exit": "2",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 2nd exit for BR-251 / Avenida Governador Magalhães Pinto"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.67644,
                        -43.799938
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 6.005,
                    "travelDuration": 408,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 248,
                        "endPathIndices": [
                          1763
                        ],
                        "maneuverType": "KeepToStayRight",
                        "mode": "Driving",
                        "names": [
                          "Avenida Governador Magalhães Pinto"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          1757
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepToStayRight",
                      "text": "Keep right to stay on BR-251 / Avenida Governador Magalhães Pinto"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.709099,
                        -43.842139
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 2.065,
                    "travelDuration": 207,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 287,
                        "endPathIndices": [
                          1800
                        ],
                        "maneuverType": "TurnToStayRight",
                        "mode": "Driving",
                        "names": [
                          "Avenida Deputado Esteves Rodrigues"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          1763
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TurnToStayRight",
                      "text": "Turn right to stay on BR-251 / Avenida Deputado Esteves Rodrigues"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.717506,
                        -43.859261
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 4.397,
                    "travelDuration": 432,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 165,
                        "endPathIndices": [
                          1802
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          1800
                        ]
                      },
                      {
                        "compassDegrees": 204,
                        "endPathIndices": [
                          1818
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "Avenida Mestra Fininha da Silveira"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          1802
                        ]
                      }
                    ],
                    "exit": "1",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "Pass through 3 roundabouts, staying on BR-251"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.735793,
                        -43.881179
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 3.555,
                    "travelDuration": 321,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 204,
                        "endPathIndices": [
                          1820
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          1818
                        ]
                      },
                      {
                        "compassDegrees": 148,
                        "endPathIndices": [
                          2091
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "BR-251",
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-251"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          1820
                        ]
                      }
                    ],
                    "exit": "1",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 1st exit for BR-251 / BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -16.764198,
                        -43.884192
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 130.62,
                    "travelDuration": 4927,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-16.766355,-43.883753",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-16.765973,-43.883788",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 249,
                        "endPathIndices": [
                          2094
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2091
                        ]
                      },
                      {
                        "compassDegrees": 224,
                        "endPathIndices": [
                          2108
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2094
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRightThenBearRight",
                      "text": "Bear right,  then bear right onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.140106,
                        -44.76409
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 9.712,
                    "travelDuration": 423,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-17.140843,-44.764892",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-17.140931,-44.764932",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 182,
                        "endPathIndices": [
                          2110
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2108
                        ]
                      },
                      {
                        "compassDegrees": 132,
                        "endPathIndices": [
                          2128
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2110
                        ]
                      }
                    ],
                    "exit": "2",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 2nd exit"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.202619,
                        -44.815334
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 6.276,
                    "travelDuration": 295,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-17.202619,-44.815334",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-17.202646,-44.815335",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 252,
                        "endPathIndices": [
                          2131
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2128
                        ]
                      },
                      {
                        "compassDegrees": 228,
                        "endPathIndices": [
                          2133
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2131
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRightThenBearRight",
                      "text": "Bear right,  then bear right onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.252313,
                        -44.839161
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 6.615,
                    "travelDuration": 298,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 252,
                        "endPathIndices": [
                          2137
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2133
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right toward BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.292607,
                        -44.884814
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.223,
                    "travelDuration": 42,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 228,
                        "endPathIndices": [
                          2152
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2137
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.293844,
                        -44.886209
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 6.609,
                    "travelDuration": 319,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 235,
                        "endPathIndices": [
                          2154
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia BR 365"
                        ],
                        "roadType": "Highway",
                        "startPathIndices": [
                          2152
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto Rodovia BR 365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.347275,
                        -44.906412
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.09,
                    "travelDuration": 8,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 233,
                        "endPathIndices": [
                          2156
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2154
                        ]
                      },
                      {
                        "compassDegrees": 191,
                        "endPathIndices": [
                          2170
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2156
                        ]
                      }
                    ],
                    "exit": "2",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 2nd exit for BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.347669,
                        -44.907141
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 4.486,
                    "travelDuration": 225,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 287,
                        "endPathIndices": [
                          2173
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2170
                        ]
                      },
                      {
                        "compassDegrees": 210,
                        "endPathIndices": [
                          2180
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2173
                        ]
                      }
                    ],
                    "exit": "2",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 2nd exit"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.367978,
                        -44.94139
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 2.853,
                    "travelDuration": 173,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 280,
                        "endPathIndices": [
                          2182
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia BR 365"
                        ],
                        "roadType": "Highway",
                        "startPathIndices": [
                          2180
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto Rodovia BR 365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.381546,
                        -44.963582
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.048,
                    "travelDuration": 5,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 280,
                        "endPathIndices": [
                          2187
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2182
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight, heading toward BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.381463,
                        -44.964024
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.549,
                    "travelDuration": 37,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-17.381366,-44.96494",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-17.381387,-44.965416",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 266,
                        "endPathIndices": [
                          2398
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2187
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.381924,
                        -44.969104
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 109.762,
                    "travelDuration": 4207,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-17.451833,-45.1815",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-17.449443,-45.175924",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 250,
                        "endPathIndices": [
                          2401
                        ],
                        "maneuverType": "KeepLeft",
                        "mode": "Driving",
                        "names": [
                          "BR-040"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-040"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2398
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepLeft",
                      "text": "Keep left to get onto BR-040"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.983166,
                        -45.612509
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.119,
                    "travelDuration": 24,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 191,
                        "endPathIndices": [
                          2511
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2401
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -17.983974,
                        -45.613051
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 58.497,
                    "travelDuration": 2221,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-17.986158,-45.614383",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-17.984956,-45.613384",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 273,
                        "endPathIndices": [
                          2517
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2511
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right toward BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.320428,
                        -46.001657
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.259,
                    "travelDuration": 36,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-18.320441,-46.001998",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-18.320348,-46.00232",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 252,
                        "endPathIndices": [
                          2641
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2517
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.321088,
                        -46.00382
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 54.032,
                    "travelDuration": 2143,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-18.37817,-46.033322",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-18.377243,-46.03291",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 273,
                        "endPathIndices": [
                          2643
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2641
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right toward BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.641048,
                        -46.333994
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.202,
                    "travelDuration": 15,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 283,
                        "endPathIndices": [
                          2682
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2643
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.640911,
                        -46.335897
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 14.675,
                    "travelDuration": 635,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "northwest",
                    "details": [
                      {
                        "compassDegrees": 294,
                        "endPathIndices": [
                          2687
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Br-365 Pista Lateral"
                        ],
                        "roadType": "Highway",
                        "startPathIndices": [
                          2682
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto Rodovia Br-365 Pista Lateral"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.634167,
                        -46.466543
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.767,
                    "travelDuration": 52,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 268,
                        "endPathIndices": [
                          2822
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2687
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight to get onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.632251,
                        -46.473459
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 65.115,
                    "travelDuration": 2885,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-18.66594,-46.530068",
                        "severity": "Moderate",
                        "text": "Moderate congestion",
                        "to": "-18.665824,-46.529875",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 239,
                        "endPathIndices": [
                          2845
                        ],
                        "maneuverType": "KeepToStayRight",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2822
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepToStayRight",
                      "text": "Keep right to stay on BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.920009,
                        -46.981802
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 5.475,
                    "travelDuration": 302,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-18.925161,-47.00229",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-18.925031,-47.001728",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "east",
                    "details": [
                      {
                        "compassDegrees": 254,
                        "endPathIndices": [
                          2848
                        ],
                        "maneuverType": "BearLeft",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          2845
                        ]
                      },
                      {
                        "compassDegrees": 108,
                        "endPathIndices": [
                          2850
                        ],
                        "maneuverType": "BearLeft",
                        "mode": "Driving",
                        "names": [
                          "BR-365"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-365"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          2848
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearLeftThenBearLeft",
                      "text": "Bear left,  then bear left onto BR-365"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.919723,
                        -47.028846
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.143,
                    "travelDuration": 40,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 137,
                        "endPathIndices": [
                          2857
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-462"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BR-462"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          2850
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-462"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.920324,
                        -47.028133
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 3.33,
                    "travelDuration": 152,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 218,
                        "endPathIndices": [
                          2860
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BR-462"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          2857
                        ]
                      },
                      {
                        "compassDegrees": 151,
                        "endPathIndices": [
                          3041
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "BR-462"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BR-462"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          2860
                        ]
                      }
                    ],
                    "exit": "1",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 1st exit"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -18.949131,
                        -47.020121
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "signs": [
                      "BR-462"
                    ],
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 60.11,
                    "travelDuration": 2459,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 174,
                        "endPathIndices": [
                          3044
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "names": [
                          "MGC-462"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3041
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight to get onto MGC-462"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.354328,
                        -47.300811
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.071,
                    "travelDuration": 5,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 175,
                        "endPathIndices": [
                          3057
                        ],
                        "maneuverType": "RoadNameChange",
                        "mode": "Driving",
                        "names": [
                          "BR-462"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131735,
                          "shields": [
                            {
                              "labels": [
                                "BR-462"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3044
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "RoadNameChange",
                      "text": "Road name changes to BR-462"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.354957,
                        -47.30075
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 5.575,
                    "travelDuration": 254,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "northwest",
                    "details": [
                      {
                        "compassDegrees": 220,
                        "endPathIndices": [
                          3059
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3057
                        ]
                      },
                      {
                        "compassDegrees": 304,
                        "endPathIndices": [
                          3061
                        ],
                        "maneuverType": "TurnRight",
                        "mode": "Driving",
                        "names": [
                          "BR-452"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-452"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          3059
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRightThenTurnRight",
                      "text": "Bear right, then turn right onto BR-452 / BR-452"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.399652,
                        -47.32109
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.245,
                    "travelDuration": 44,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 252,
                        "endPathIndices": [
                          3063
                        ],
                        "maneuverType": "BearLeft",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          3061
                        ]
                      },
                      {
                        "compassDegrees": 128,
                        "endPathIndices": [
                          3072
                        ],
                        "maneuverType": "TurnLeft",
                        "mode": "Driving",
                        "names": [
                          "BR-452"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131731,
                          "shields": [
                            {
                              "labels": [
                                "BR-452"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          3063
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearLeftThenTurnLeft",
                      "text": "Bear left, then turn left onto BR-452 / BR-452"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.399364,
                        -47.322785
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "signs": [
                      "Araxá",
                      "Belo Horizonte",
                      "BR-452"
                    ],
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 4.257,
                    "travelDuration": 210,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "endTime": {
                          "DateTime": "/Date(1703435460721)/",
                          "OffsetMinutes": 0
                        },
                        "origin": "-19.402388,-47.318412",
                        "severity": "None",
                        "startTime": {
                          "DateTime": "/Date(1701967478000)/",
                          "OffsetMinutes": 0
                        },
                        "text": "Roadwork on BR-452 at Minas Gerais.",
                        "to": "-19.410523,-47.306616",
                        "warningType": "ScheduledConstruction"
                      },
                      {
                        "origin": "-19.402896,-47.317674",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-19.403526,-47.316758",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 121,
                        "endPathIndices": [
                          3105
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-462"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131740,
                          "shields": [
                            {
                              "labels": [
                                "BR-462"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3072
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-462"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.418304,
                        -47.288667
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 24.077,
                    "travelDuration": 1103,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 276,
                        "endPathIndices": [
                          3143
                        ],
                        "maneuverType": "TurnRight",
                        "mode": "Driving",
                        "names": [
                          "BR-262"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-262"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          3105
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TurnRight",
                      "text": "Turn right onto BR-262"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.618082,
                        -47.341422
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 30.85,
                    "travelDuration": 1282,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "severity": "None",
                        "text": "Toll road",
                        "warningType": "TollRoad"
                      }
                    ]
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 268,
                        "endPathIndices": [
                          3147
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "Highway",
                        "startPathIndices": [
                          3143
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right toward BR-262"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.670522,
                        -47.620366
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.58,
                    "travelDuration": 44,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 258,
                        "endPathIndices": [
                          3196
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "BR-262"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131726,
                          "shields": [
                            {
                              "labels": [
                                "BR-262"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Highway",
                        "startPathIndices": [
                          3147
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto BR-262"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.67178,
                        -47.625703
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 35.256,
                    "travelDuration": 1439,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "origin": "-19.758843,-47.815497",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-19.757478,-47.822336",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 235,
                        "endPathIndices": [
                          3218
                        ],
                        "maneuverType": "TakeRampStraight",
                        "mode": "Driving",
                        "names": [
                          "BR-050",
                          "Rodovia Chico Xavier"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131713,
                          "shields": [
                            {
                              "labels": [
                                "BR-050"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Ramp",
                        "startPathIndices": [
                          3196
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TakeRampStraight",
                      "text": "Take the ramp for BR-050 / Rodovia Chico Xavier"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.776882,
                        -47.921592
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 26.594,
                    "travelDuration": 1007,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 186,
                        "endPathIndices": [
                          3224
                        ],
                        "maneuverType": "TakeRampRight",
                        "mode": "Driving",
                        "names": [
                          "BR-050",
                          "Rodovia Chico Xavier"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131713,
                          "shields": [
                            {
                              "labels": [
                                "BR-050"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "Ramp",
                        "startPathIndices": [
                          3218
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TakeRampRight",
                      "text": "Take the ramp on the right for BR-050 / Rodovia Chico Xavier"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.976926,
                        -47.789508
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 1.195,
                    "travelDuration": 52,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 174,
                        "endPathIndices": [
                          3394
                        ],
                        "maneuverType": "KeepToStayStraight",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Anhanguera"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131713,
                          "shields": [
                            {
                              "labels": [
                                "BR-050"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "LimitedAccessHighway",
                        "startPathIndices": [
                          3224
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepToStayStraight",
                      "text": "Keep straight to stay on BR-050 / SP-330 / Rodovia Anhanguera"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -19.987526,
                        -47.787887
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 168.539,
                    "travelDuration": 5777,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "severity": "None",
                        "text": "Entering São Paulo",
                        "warningType": "AdminDivisionChange"
                      },
                      {
                        "severity": "None",
                        "text": "Toll road",
                        "warningType": "TollRoad"
                      },
                      {
                        "origin": "-20.378146,-47.813897",
                        "severity": "Minor",
                        "text": "Minor congestion",
                        "to": "-20.37959,-47.81369",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 152,
                        "endPathIndices": [
                          3397
                        ],
                        "maneuverType": "TakeRampRight",
                        "mode": "Driving",
                        "names": [
                          "BR-050",
                          "SP-330",
                          "Rodovia Anhanguera"
                        ],
                        "roadType": "Ramp",
                        "startPathIndices": [
                          3394
                        ]
                      },
                      {
                        "compassDegrees": 140,
                        "endPathIndices": [
                          3560
                        ],
                        "maneuverType": "Merge",
                        "mode": "Driving",
                        "names": [
                          "Rodovia Anhanguera"
                        ],
                        "roadShieldRequestParameters": {
                          "bucket": 131712,
                          "shields": [
                            {
                              "labels": [
                                "BR-050"
                              ],
                              "roadShieldType": 1
                            }
                          ]
                        },
                        "roadType": "LimitedAccessHighway",
                        "startPathIndices": [
                          3397
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "RampThenHighwayRight",
                      "text": "Take the ramp on the right for BR-050 / SP-330 / Rodovia Anhanguera"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -21.41275,
                        -47.665749
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 152.942,
                    "travelDuration": 5276,
                    "travelMode": "Driving",
                    "warnings": [
                      {
                        "severity": "None",
                        "text": "Private Road",
                        "warningType": "PrivateRoad"
                      },
                      {
                        "severity": "None",
                        "text": "Toll road",
                        "warningType": "TollRoad"
                      },
                      {
                        "origin": "-21.657053,-47.609389",
                        "severity": "Serious",
                        "text": "Serious congestion",
                        "to": "-21.657254,-47.609361",
                        "warningType": "TrafficFlow"
                      }
                    ]
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 144,
                        "endPathIndices": [
                          3563
                        ],
                        "maneuverType": "TakeRampRight",
                        "mode": "Driving",
                        "names": [
                          "Avenida Affonso Pansan"
                        ],
                        "roadType": "Ramp",
                        "startPathIndices": [
                          3560
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TakeRampRight",
                      "text": "Take the ramp on the right for Avenida Affonso Pansan and head toward Bairro Antonio Zanaga"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.698136,
                        -47.308526
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "signs": [
                      "Bairro Antonio Zanaga"
                    ],
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.22,
                    "travelDuration": 10,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southeast",
                    "details": [
                      {
                        "compassDegrees": 139,
                        "endPathIndices": [
                          3566
                        ],
                        "maneuverType": "BearLeft",
                        "mode": "Driving",
                        "names": [
                          "Avenida Affonso Pansan"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3563
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearLeft",
                      "text": "Bear left onto Avenida Affonso Pansan"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.69985,
                        -47.307476
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.215,
                    "travelDuration": 35,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 245,
                        "endPathIndices": [
                          3585
                        ],
                        "maneuverType": "TurnRight",
                        "mode": "Driving",
                        "names": [
                          "Avenida Nicolau João Abdalla"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3566
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TurnRight",
                      "text": "Turn right onto Avenida Nicolau João Abdalla"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.701512,
                        -47.306457
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 2.905,
                    "travelDuration": 260,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 310,
                        "endPathIndices": [
                          3590
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3585
                        ]
                      },
                      {
                        "compassDegrees": 179,
                        "endPathIndices": [
                          3596
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "Avenida Carioba"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3590
                        ]
                      }
                    ],
                    "exit": "4",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 4th exit for Avenida Carioba"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.714679,
                        -47.324235
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.953,
                    "travelDuration": 82,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 182,
                        "endPathIndices": [
                          3597
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3596
                        ]
                      },
                      {
                        "compassDegrees": 215,
                        "endPathIndices": [
                          3602
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "Avenida Europa"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3597
                        ]
                      }
                    ],
                    "exit": "1",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 1st exit for Avenida Europa"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.722229,
                        -47.326116
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.218,
                    "travelDuration": 20,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 173,
                        "endPathIndices": [
                          3609
                        ],
                        "maneuverType": "TurnLeft",
                        "mode": "Driving",
                        "names": [
                          "Avenida Bandeirantes"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3602
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TurnLeft",
                      "text": "Turn left onto Avenida Bandeirantes"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.722069,
                        -47.32794
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 1.216,
                    "travelDuration": 90,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 181,
                        "endPathIndices": [
                          3616
                        ],
                        "maneuverType": "KeepToStayLeft",
                        "mode": "Driving",
                        "names": [
                          "Avenida Bandeirantes"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3609
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepToStayLeft",
                      "text": "Keep left to stay on Avenida Bandeirantes"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.732448,
                        -47.330118
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.341,
                    "travelDuration": 34,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 281,
                        "endPathIndices": [
                          3619
                        ],
                        "maneuverType": "KeepStraight",
                        "mode": "Driving",
                        "names": [
                          "Avenida São Jerônimo"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3616
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "KeepStraight",
                      "text": "Keep straight to get onto Avenida São Jerônimo"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.73461,
                        -47.33098
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.081,
                    "travelDuration": 8,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "north",
                    "details": [
                      {
                        "compassDegrees": 348,
                        "endPathIndices": [
                          3624
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3619
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto road"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.73433,
                        -47.331695
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.183,
                    "travelDuration": 24,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 219,
                        "endPathIndices": [
                          3627
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3624
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterRoundabout",
                      "text": "Enter the roundabout"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.734822,
                        -47.330587
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.039,
                    "travelDuration": 9,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "east",
                    "details": [
                      {
                        "compassDegrees": 96,
                        "endPathIndices": [
                          3632
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "Avenida Doutor Antônio Lobo"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3627
                        ]
                      }
                    ],
                    "exit": "2",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "ExitRoundabout",
                      "text": "Exit the roundabout at the 2nd exit, onto Avenida Doutor Antônio Lobo"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.735061,
                        -47.330463
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.747,
                    "travelDuration": 110,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 160,
                        "endPathIndices": [
                          3635
                        ],
                        "maneuverType": "RoadNameChange",
                        "mode": "Driving",
                        "names": [
                          "Rua Anhanguera"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3632
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "RoadNameChange",
                      "text": "Road name changes to Rua Anhanguera"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.740999,
                        -47.32759
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.126,
                    "travelDuration": 18,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 254,
                        "endPathIndices": [
                          3639
                        ],
                        "maneuverType": "BearRight",
                        "mode": "Driving",
                        "names": [
                          "Rua Marechal Deodoro"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3635
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "BearRight",
                      "text": "Bear right onto Rua Marechal Deodoro"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.742048,
                        -47.327238
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.219,
                    "travelDuration": 36,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "south",
                    "details": [
                      {
                        "compassDegrees": 320,
                        "endPathIndices": [
                          3642
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3639
                        ]
                      },
                      {
                        "compassDegrees": 165,
                        "endPathIndices": [
                          3644
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "Rua Fernando Camargo"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3642
                        ]
                      }
                    ],
                    "exit": "3",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 3rd exit for Rua Fernando Camargo"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.742646,
                        -47.329285
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.262,
                    "travelDuration": 36,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 256,
                        "endPathIndices": [
                          3648
                        ],
                        "maneuverType": "TurnRight",
                        "mode": "Driving",
                        "names": [
                          "Avenida de Cillo"
                        ],
                        "roadType": "MajorRoad",
                        "startPathIndices": [
                          3644
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TurnRight",
                      "text": "Turn right onto Avenida de Cillo"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.744833,
                        -47.329102
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.771,
                    "travelDuration": 102,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "west",
                    "details": [
                      {
                        "compassDegrees": 279,
                        "endPathIndices": [
                          3651
                        ],
                        "maneuverType": "TurnRight",
                        "mode": "Driving",
                        "names": [
                          "Rua Florindo Cibin"
                        ],
                        "roadType": "Arterial",
                        "startPathIndices": [
                          3648
                        ]
                      }
                    ],
                    "exit": "",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "TurnRight",
                      "text": "Turn right onto Rua Florindo Cibin"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.75029,
                        -47.333542
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.149,
                    "travelDuration": 28,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 350,
                        "endPathIndices": [
                          3653
                        ],
                        "maneuverType": "EnterRoundabout",
                        "mode": "Driving",
                        "roadType": "Arterial",
                        "startPathIndices": [
                          3651
                        ]
                      },
                      {
                        "compassDegrees": 228,
                        "endPathIndices": [
                          3654
                        ],
                        "maneuverType": "ExitRoundabout",
                        "mode": "Driving",
                        "names": [
                          "Rua das Acácias"
                        ],
                        "roadType": "Street",
                        "startPathIndices": [
                          3653
                        ]
                      }
                    ],
                    "exit": "2",
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "EnterThenExitRoundabout",
                      "text": "At the roundabout, take the 2nd exit for Rua das Acácias"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.749578,
                        -47.334685
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0.086,
                    "travelDuration": 15,
                    "travelMode": "Driving"
                  },
                  {
                    "compassDirection": "southwest",
                    "details": [
                      {
                        "compassDegrees": 228,
                        "endPathIndices": [
                          3654
                        ],
                        "maneuverType": "ArriveFinish",
                        "mode": "Driving",
                        "names": [
                          "Rua das Acácias"
                        ],
                        "roadType": "Street",
                        "startPathIndices": [
                          3654
                        ]
                      }
                    ],
                    "exit": "",
                    "hints": [
                      {
                        "hintType": "PreviousIntersection",
                        "text": "The last intersection before your destination is Rua Florindo Cibin"
                      },
                      {
                        "hintType": "NextIntersection",
                        "text": "If you reach Travessa Nardini, you've gone too far"
                      }
                    ],
                    "iconType": "Auto",
                    "instruction": {
                      "formattedText": null,
                      "maneuverType": "ArriveFinish",
                      "text": "Arrive at Rua das Acácias"
                    },
                    "isRealTimeTransit": false,
                    "maneuverPoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.750041,
                        -47.335268
                      ]
                    },
                    "realTimeTransitDelay": 0,
                    "sideOfStreet": "Unknown",
                    "tollZone": "",
                    "transitTerminus": "",
                    "travelDistance": 0,
                    "travelDuration": 0,
                    "travelMode": "Driving"
                  }
                ],
                "routeRegion": "WWMX",
                "routeSubLegs": [
                  {
                    "endWaypoint": {
                      "type": "Point",
                      "coordinates": [
                        -22.750041,
                        -47.335268
                      ],
                      "description": "Rua das Acácias",
                      "isVia": false,
                      "locationIdentifier": "0|241|71|42|243|25|13|191|78|0|0|224|1|159|229|64|63|0|-22.750041,-47.335268",
                      "routePathIndex": 3654
                    },
                    "startWaypoint": {
                      "type": "Point",
                      "coordinates": [
                        -12.870821,
                        -39.525089
                      ],
                      "description": "BA-120 / Rua 15 de novembro",
                      "isVia": false,
                      "locationIdentifier": "0|241|71|42|243|17|47|17|84|0|0|224|1|215|141|49|63|2|-12.870821,-39.525089",
                      "routePathIndex": 0
                    },
                    "travelDistance": 1813.982,
                    "travelDuration": 79858
                  }
                ],
                "startTime": "/Date(1703446573896-0800)/",
                "travelDistance": 1813.982,
                "travelDuration": 79858,
                "travelMode": "Driving"
              }
            ],
            "trafficCongestion": "None",
            "trafficDataUsed": "None",
            "travelDistance": 1813.982,
            "travelDuration": 79858,
            "travelDurationTraffic": 82884,
            "travelMode": "Driving"
          }
        ]
      }
    ]}
    // this.http
    //   .get<DrivingRoute>(
    //     `https://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=${this.origin[0]},${this.origin[1]}&wp.1=${this.destination[0]},${this.destination[1]}&key=AluAyimJUs8T8y8B6MiD872EamXF2dOmyJc5qBuqgV-OyT67ohl-HcVw8E69skyM`
    //   )
    //   .subscribe((data) => {
    //     console.log(data)
    //     this.drawMapAndRoute(data);
    //   });
    this.drawMapAndRoute(drivingRoutes)
  }

  private drawMapAndRoute(data: DrivingRoute): void {
    const { actualStart, actualEnd, itineraryItems } = data.resourceSets[0].resources[0].routeLegs[0];
    this.mapWithDrivingRoute = {
      ...data,
      options: {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 5,
            minZoom: 5
          }),
        ],
        zoom: 5,
        zoomControl: false,
        dragging: false
      },
      bounds: latLngBounds([this.origin, this.destination]),
      layers: []
    }
    this.setMarker(actualStart);
    this.setMarker(actualEnd);
    this.setPolyline(itineraryItems);
  }

  private setMarker(coordinate: Coordinate): void {
    this.mapWithDrivingRoute.layers.push(
      marker([...coordinate.coordinates], {
        icon: icon({
          ...Icon.Default.prototype.options,
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png',
        }),
      })
    );
  }

  private setPolyline(items: ItineraryItem[]): void {
    const coordinates: Coordinate[] = [];
    items.forEach((item) => {
      coordinates.push(item.maneuverPoint);
    });

    this.mapWithDrivingRoute.layers.push(
      polyline(
        coordinates.map((coordinate) => [...coordinate.coordinates]),
        { color: 'blue' }
      )
    );
  }

  // handleClick(e: any) {
  //   if (!this.origin) {
  //     this.origin = e.latlng;
  //     this.layers.push(
  //       marker([this.origin.lat, this.origin.lng], {
  //         icon: icon({
  //           ...Icon.Default.prototype.options,
  //           iconUrl: 'assets/marker-icon.png',
  //           iconRetinaUrl: 'assets/marker-icon-2x.png',
  //           shadowUrl: 'assets/marker-shadow.png',
  //         }),
  //       })
  //     );
  //   } else if (!this.destination) {
  //     this.destination = e.latlng;
  //     this.layers.push(
  //       marker([this.destination.lat, this.destination.lng], {
  //         icon: icon({
  //           ...Icon.Default.prototype.options,
  //           iconUrl: 'assets/marker-icon.png',
  //           iconRetinaUrl: 'assets/marker-icon-2x.png',
  //           shadowUrl: 'assets/marker-shadow.png',
  //         }),
  //       })
  //     );
  //     this.layers.push(
  //       polyline([this.origin, this.destination], { color: 'red' })
  //     );
  //   }
  // }
}
