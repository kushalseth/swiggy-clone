const RESCARD_MOCK_DATA = {
  id: "57686",
  name: "Subway",
  cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
  locality: "Saviour Mall",
  areaName: "La Gracia Mall",
  costForTwo: "₹350 for two",
  cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
  avgRating: 3.5,
  feeDetails: {
    restaurantId: "57686",
    fees: [
      {
        name: "BASE_DISTANCE",
        fee: 7700,
      },
      {
        name: "BASE_TIME",
      },
      {
        name: "ANCILLARY_SURGE_FEE",
      },
    ],
    totalFee: 7700,
  },
  parentId: "2",
  avgRatingString: "3.5",
  totalRatingsString: "5K+",
  sla: {
    deliveryTime: 37,
    lastMileTravel: 8.2,
    serviceability: "SERVICEABLE",
    slaString: "37 mins",
    lastMileTravelString: "8.2 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2023-09-26 07:51:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  loyaltyDiscoverPresentationInfo: {
    logoCtx: {
      text: "BENEFITS",
      logo: "v1634558776/swiggy_one/OneLogo_3x.png",
    },
    freedelMessage: "FREE DELIVERY",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

export default RESCARD_MOCK_DATA;
