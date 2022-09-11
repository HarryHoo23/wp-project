import bookMarker from "../assests/img/icons/icon-marker.png";
import locationIcon from '../assests/img/icons/marker-2.png';

export const locationAccordion = {
    sunday_morning: [
        "The Stables of Com",
        "Hello James",
        "Abacus Bar & Kitche",
        "Kanteen",
        "Norman",
        "Lucky Penny",
        "Tivoli Road",
        "Darling Café",
        "Husband",
        "Lawson Grove",
    ],
    sunday_service: [
        "Matilda",
        "Omnia",
        "Bar Carolina",
        "Atlas Dining",
        "Gilson",
        "France-Soir",
        "Cucinetta",
        "The Botanical",
        "Entrecôte",
        "Bistro Thierry",
        "48h Pizza e Gnocchi",
        "Fratellino Pizzeria",
        "Bistro Gitan",
        "Mopho Canteen",
        "Thirty Eight Chairs",
    ],
    sunday_sweat: [
        "Como Park",
        "Fawkner Park",
        "Royal Botanical Gardens",
        "Rockly Gardens",
        "One Hot Yoga",
        "REVL Training ",
        "Prahran Aquatic Centre",
        "Humming Puppy",
        "F45 Toorak",
        "Body Fit Training",
        "GRIPT ",
        "Bodhi & Ride",
        "Rise Nation",
        "Barry’s",
        "KX Pilate",
    ],
    sunday_market: [
        "Tivoli Road Bakery",
        "LaManna & Sons",
        "Prahran Market",
        "Woolworths",
        "Toscano’s",
        "ALDI",
        "Coles",
        "Rocky’s Fruit & Veg",
        "Gum Tree Good Food",
        "Harvest",
        "The Essential Ingredient",
        "Simon Johnson Providore",
        "Peter Bouchier Toorak",
        "Stocked",
    ],
    sunday_best: [
        "Chapel Street Precinct",
        "The Como Centre",
        "The jam Factory",
        "Mecca Cosmetica",
        "Toorak Village",
        "GRACE",
        "Husk",
        "GANT",
        "Coco & Lola",
        "Feathers",
    ],
    sunday_school: [
        "Toorak Primary School",
        "Loreto Mandeville Hall",
        "St Catherine’s School",
        "St Kevin’s College",
        "Geelong Grammar Toorak",
        "Lauriston Girls’ School",
        "Armadale Primary School",
        "Christ Church Grammar School",
        "Scotch College",
    ],
};

const locationAddress = [
    "Viridian - 119 Chesterville Road, Cheltenham, Melbourne VIC 3190",
    "501 Highett Road, Highett VIC",
    "259-261 Bay Rd, Cheltenham VIC 3192",
    "312 New St, Brighton VIC 3186",
    "444 Hampton St, Hampton VIC 3188",
    "13 Station Rd, Cheltenham VIC 3192",
    "8 Arco Ln, Heatherton VIC 3202",
    "957 Centre Rd, Bentleigh East VIC 3165",
    "Kingston Rd, Cheltenham VIC 3192",
    "111 Chesterville Rd, Highett VIC 3190",
    "6/8 Highett Grove, Highett VIC 3190",
    " Highett Reserve, 33 Turner Rd, Highett VIC 3190"
];

const loactions_coordinates = [
    {
        position: { lat: -37.94971603444668, lng: 145.05853242892192 },
        type: bookMarker,
        show: false
    },
    {
        position: { lat: -37.94828954939102, lng: 145.04187565959361 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.95476986766875, lng: 145.03274637122962 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.904668671599424, lng: 144.99338268657394 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.936974722593234, lng: 145.0027096251918 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.966681606582306, lng: 145.05629099821124 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.947225209053244, lng: 145.08046934053792 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.92269913973572, lng: 145.07470772519153 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.95560487213563,  lng: 145.0859513154117 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.95144587921848, lng: 145.05722964239297 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.9521745618703,  lng: 145.04326291355676 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.950074741121135, lng:  145.05637804880197 },
        type: locationIcon,
        show: false
    },
    {
        position: { lat: -37.94168199565089, lng:  145.0618169693742},
        type: locationIcon,
        show: false
    },

];

const locationName = [
    "Viridian - 119 Chesterville Road, Cheltenham, Melbourne VIC 3190",
    "Abbiocco",
    "Mid Valleys",
    "Aromi",
    "Hampton Wine Co",
    "The Garden of Good & Evil",
    "arcobar",
    "Spring House Day Spa",
    "Kingston Heath Golf Club",
    "Waves Leisure Centre",
    "Highett Bowls Club",
    "Moorabbin Archery Club",
    "Stomping Ground"
];


const mapStyle = [
    {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
            {
                saturation: 36,
            },
            {
                color: "#333333",
            },
            {
                lightness: 40,
            },
        ],
    },
    {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
            {
                visibility: "on",
            },
            {
                color: "#ffffff",
            },
            {
                lightness: 16,
            },
        ],
    },
    {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#fefefe",
            },
            {
                lightness: 20,
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#fefefe",
            },
            {
                lightness: 17,
            },
            {
                weight: 1.2,
            },
        ],
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5",
            },
            {
                lightness: 20,
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5",
            },
            {
                lightness: 21,
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#dedede",
            },
            {
                lightness: 21,
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#ffffff",
            },
            {
                lightness: 17,
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#ffffff",
            },
            {
                lightness: 29,
            },
            {
                weight: 0.2,
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#ffffff",
            },
            {
                lightness: 18,
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                color: "#ffffff",
            },
            {
                lightness: 16,
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            {
                color: "#f2f2f2",
            },
            {
                lightness: 19,
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#e9e9e9",
            },
            {
                lightness: 17,
            },
        ],
    },
];

export const google_map_data = {
    locationAddress,
    locationName,
    loactions_coordinates,
    mapStyle,
};
