import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/564x/3c/b2/4f/3cb24f7d0defcb91eb51b091325d5f47.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = props?.resData;
  console.log(props);

  return (
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
      + cloudinaryImageId } />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  )
}

const resData = [
  
    {
      "id": "57686",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Saviour Mall",
      "areaName": "La Gracia Mall",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.5,
      "feeDetails": {
        "restaurantId": "57686",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 7700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 7700
      },
      "parentId": "2",
      "avgRatingString": "3.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 8.2,
        "serviceability": "SERVICEABLE",
        "slaString": "37 mins",
        "lastMileTravelString": "8.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 07:51:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },

    {
      "id": "679748",
      "name": "SashMicks Bakery (Cake)",
      "cloudinaryImageId": "0cb9293ff7ec5559f898add049b547a7",
      "locality": "Astoria Boulevard RDC",
      "areaName": "Raj Nagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "679748",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3300
      },
      "parentId": "406201",
      "avgRatingString": "4.1",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },

    {
      "id": "346573",
      "name": "Apni Veg Rasoi",
      "cloudinaryImageId": "oimdnn8q65veuj9d3vx6",
      "locality": "RDC Concrete (India) Pvt Ltd",
      "areaName": "Raj Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "avgRating": 3.7,
      "veg": true,
      "feeDetails": {
        "restaurantId": "346573",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3300
      },
      "parentId": "22092",
      "avgRatingString": "3.7",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },  
    
    {
      "id": "306919",
      "name": "Ghar ka tadka",
      "cloudinaryImageId": "zoi1spzrb0htmaxzcckb",
      "locality": "sector 10",
      "areaName": "Raj Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Indian",
        "North Indian",
        "Chinese",
        "Home Food"
      ],
      "avgRating": 3.7,
      "veg": true,
      "feeDetails": {
        "restaurantId": "306919",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3300
      },
      "parentId": "8838",
      "avgRatingString": "3.7",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },

    {
      "id": "516337",
      "name": "Samosa Party",
      "cloudinaryImageId": "eywohwrrwky4rqmeyc3f",
      "locality": "High Street",
      "areaName": "crossing republic",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Chaat",
        "North Indian",
        "Street Food",
        "Sweets",
        "Desserts",
        "Punjabi",
        "Bakery"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "516337",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 7700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 7700
      },
      "parentId": "6364",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 8.9,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "8.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },

    {
      "id": "712135",
      "name": "Goli Vada Pav No.1",
      "cloudinaryImageId": "5bd0f232897bb15eae923593adcf80b4",
      "locality": "Panchsheel",
      "areaName": "Crossing Republic",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Snacks"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "712135",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6200
      },
      "parentId": "3998",
      "avgRatingString": "4.0",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 7.6,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "7.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 23:55:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {}
    },
    
    {
      "id": "57686",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Saviour Mall",
      "areaName": "La Gracia Mall",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.5,
      "feeDetails": {
        "restaurantId": "57686",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 7700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 7700
      },
      "parentId": "2",
      "avgRatingString": "3.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 8.2,
        "serviceability": "SERVICEABLE",
        "slaString": "39 mins",
        "lastMileTravelString": "8.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 07:51:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },

    {
      "id": "747649",
      "name": "Chinese Chaska",
      "cloudinaryImageId": "cf91af0ad62b20612678a67b324401b3",
      "locality": "Dunduhaida",
      "areaName": "Crossing Republic",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese"
      ],
      "feeDetails": {
        "restaurantId": "747649",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 7700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 7700
      },
      "parentId": "5152",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 8.3,
        "serviceability": "SERVICEABLE",
        "slaString": "42 mins",
        "lastMileTravelString": "8.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "ABOVE ₹700",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {}
    },

    {
      "id": "747663",
      "name": "Urban Tadka",
      "cloudinaryImageId": "87d7877e4ca8634bcf01b01ca4445061",
      "locality": "Dunduhaida",
      "areaName": "Crossing Republic",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Fast Food",
        "Pastas"
      ],
      "feeDetails": {
        "restaurantId": "747663",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 7700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 7700
      },
      "parentId": "1273",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 8.1,
        "serviceability": "SERVICEABLE",
        "slaString": "42 mins",
        "lastMileTravelString": "8.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-26 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "ABOVE ₹700",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {}
    },
  ]

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        {
          resData.map((restaurant) => <RestaurantCard key={restaurant.id} resData={restaurant} />)
        }       
      </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); // rendering functioncal component
