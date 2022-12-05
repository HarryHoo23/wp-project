import john from "../assests/img/john.jpg";
import tim from "../assests/img/tim.jpg";
import logo1 from '../assests/logo/ikos_group-popup.svg';
import logo2 from '../assests/logo/cva-colour.svg';
import logo3 from '../assests/logo/tag-colour.svg'
import logo4 from '../assests/logo/species-colour.svg';
import hybrid from '../assests/img/floorplan/A-siteplan.png';

export const modalData = [
    {
        bgImg: logo1,
        title: "Ikos Group",
        // href: "https://www.ikosconsulting.com",
        // link: "www.ikosconsulting.com",
        content: ``,
        quote: `"Viridian is meticulously responding to the industrial ,office and storage needs in the immediate and surrounding area. <br /> It has raised the standard of industrial development  by adopting generous design appointments in form and materials."`,
        video: "",
        videoSource: "",
        name: "Peter Kalimnakis",
        jobTitle: "Ikos Group Planning & Design",
    },
    {
        bgImg: logo2,
        title: "CVA Property",
        href: "https://www.cva.melbourne/",
        link: "www.cva.melbourne/",
        content: ``,
        quote: `“Never before have we seen or will we likely see again a commercial estate where literally every property features an uninterrupted park view from their first or second floor office. Truly a unique attribute that has occupiers, investors and tenants alike excited about basing themselves in these stunning workspaces at Viridian.”`,
        video: "",
        videoSource: "",
        name: "John Nockles",
        jobTitle: "CVA Property Consultants",
    },
    {
        bgImg: logo3,
        title: "TAG",
        href: "http://taginteriors.com.au/",
        link: "taginteriors.com.au/",
        content: ``,
        quote: `"Viridian takes its name from the Latin viridis, meaning "green". The selection of materials for Viridian highlights the transitional nature of the space, by juxtaposing industrial finishes and fittings with the natural elements from surrounding parklands. <br /> All nominated finishes, symbolise the colours & textures reflected in the neighbouring flora. Sophisticated muted greens, soft greys, accents of rust, replicating the colours and textures of the native eucalyptus tree. <br />Through the application of these finishes, Viridian will be integrated harmoniously with the existing natural surrounds."`,
        video: "",
        videoSource: "",
        name: "Tracy Goudsblom",
        jobTitle: "TAG Interiors",
    },
    {
        bgImg: logo4,
        title: "Species",
        href: "",
        link: "",
        content: ``,
        quote: `“The landscape proposal provides enhanced views through canopy vegetation into the adjoining landscaped reserve. <br /> The reserve is brought into the estate with the retention of a mature eucalypt that provides a passive seating area for the occupants as well as  access to the reserve."`,
        video: "",
        videoSource: "",
        name: "Tony Aravidis",
        jobTitle: "Species Landscape Architecture",
    }
];

export const tabContent = [
    {
        position: "first",
        title: "Showroom",
        subtitle: "Time to show off",
        first_half_title: "Showroom",
        second_half_title: "",
        content: `With complete exposure to Chesterville Road, this exceptional fit out takes full advantage of the front of the complex on the ground floor. Bulky goods can be stored and serviced by the rear roller door.`,
        list: [
            'Exposure to Chesterville Road.',
            'Front of complex position.',
            'Ground floor advantage.',
            'Exceptional baseline fit-out.',
            'Bulky goods storage serviced by rear roller door.',
            'Ideal for retail users.'            
        ],
        link: "units/showroom",
        img: "https://viridian-highett.com.au/images/site-plans/showroom-siteplan.png"
    },
    {
        position: "second",
        title: "Strata Office Suites",
        subtitle: "The suite office life",
        first_half_title: "Strata office",
        second_half_title: "Suites",
        content: `The first thing you’ll notice is the impressive entry foyer, the second thing is the uninterrupted and raised views over the parkland through the floor-to-ceiling glass. Disability lift access, undercover car parking, and shared staff amenities.`,
        list: [
            'Uninterrupted and raised views over the parklands.',
            'Shared staff amenities.',
            'Lift access for disability compliance and ease.',
            'Stunning entry foyer on the ground floor.',
            'Stunning fit-out with floor-to-ceiling glass.',
            'Undercover car parking in the basement.'

        ],
        link: "units/strata-office-suites",
        img: "https://viridian-highett.com.au/images/site-plans/MAIN-BUILDING/officeA-siteplan.png",
    },
    {
        position: "third",
        title: "Walk-up offices",
        first_half_title: "Walk-up",
        second_half_title: "offices",
        subtitle: "Working across two levels",
        content: `Situated on the ground and first floor, you’ll get the floor-to-ceiling glazed windows with parkland views and private amenities like bathrooms and kitchenettes. Parking at the front and signage showcased on the first-floor. `,
        list: [
            'Ground and first-floor office design.',
            'Walk up buildings with front parking.',
            'Uninterrupted and raised views over the parklands.',
            'Private staff amenities.',
            'Floor-to-ceiling glazing on both ground and first floor.',
            'Signage positioned on the first floor.',
            'Buffed concrete ground floor, carpeted first floor.',
            'Black fixtures and fittings, black ceiling grid.',
            'Ducted air-conditioning.'
        ],
        link: "units/walk-up-office",
        img: "https://viridian-highett.com.au/images/site-plans/C/C-siteplan.png"
    },
    {
        position: "forth",
        title: "Two-level hybrid",
        first_half_title: "Two-level",
        second_half_title: "hybrid",
        subtitle: "Everything you need spread across two levels",
        content: `Designed for all purposes, these dual-level office and storage hybrids feature a glass Smartech roller door system with a 4.1 m* clearance and an 8 m* atrium-style rear storage area. Enjoy the view of the parklands from your first-floor ancillary office.`,
        list: [
            'Ground and first-floor design.',
            'Walk up buildings with front parking.',
            'Uninterrupted and raised views over the parklands.',
            'Private staff amenities.',
            'Floor-to-ceiling glazing on both ground and first floor',
            'Signage positioned on the first floor.',
            'Glasstech remote door systems.',
            '4.1 m* height under mezzanine out to 8 m* atrium style ceiling.',
            'First-floor office overlooking the parklands.',
            'Black fixtures and fittings, black ceiling grid.'
        ],
        link: "units/two-level-hybrid",
        img: hybrid
    },
    {
        position: "fifth",
        title: "Triple-level hybrid",
        first_half_title: "Triple-level",
        second_half_title: "hybrid",
        subtitle: "Everything but the kitchen sink (it has that, too)",
        content: `A floor above the rest, this is a three-level design with premium office and storage space. Featuring a glass Smartech roller door system, it also includes a 4.1 m* clearance and an 8 m* atrium-style rear storage area. Elevate above the treetops with two levels of glass-to-ceiling ancillary office space and amenities to match.`,
        list: [
            'Three-level design with ground floor warehousing and two levels of office space above.',
            'Walk up buildings with front parking.',
            'Uninterrupted and raised views over the parklands.',
            'Private staff amenities.',
            'Floor-to-ceiling glazing on all floors.',
            'Signage positioned on the first floor.',
            'Glasstech remote door systems.',
            '4.1 m* height under mezzanine out to 8 m* atrium style ceiling',
            'Black fixtures and fittings, black ceiling grid'
        ],
        link: "units/three-level-hybrid",
        img: "https://viridian-highett.com.au/images/site-plans/B/B-siteplan.png"
    },
    {
        position: "sixth",
        title: "Two-level office warehouses",
        first_half_title: "Two-level",
        second_half_title: "office warehouses",
        subtitle: "Best of both worlds",
        content: `Adding to the triple-level hybrid asset, you’ll also enjoy a container height roller door and a uniquely consistent 6.8 m* internal height throughout the ground floor warehouse area. Two-level offices with stylistic varying ceiling heights, unrivalled parkland views from the front and rear of the property, floor-to-ceiling glazing, individual staff amenities and front-of-house parking are also included.`,
        list: [
            'Triple level design.',
            'Walk up buildings with front parking.',
            'First-floor & second floor offices overlooking the rear parklands.',
            'Private staff amenities.',
            'Floor-to-ceiling glazing',
            'Excellent Signage position',
            'Container height roller door facilitating excellent loading.',
            '6.8 m* warehouse height front warehouse area.',
            'Black fixtures and fittings, black ceiling grid.'
        ],
        link: "units/working-storage",
        img: "https://viridian-highett.com.au/images/site-plans/E/E-siteplan.png"
    },
    {
        position: "seventh",
        title: "Micro warehouses",
        first_half_title: "Micro",
        second_half_title: "warehouse",
        subtitle: "Underground micro-warehousing",
        content: `Perfect for business or pleasure and sitting securely in the basement, the 4.5 m* internal height gives flexibility for storage with the ability to add car hoists and mezzanine areas. The 24-hour security keeps watch, there are automatic motion sensors for lighting, and users can book the communal meeting room. Occupiers also have access to the kitchen and bathroom amenities, providing the perfect addition for a unit above ground.`,
        link: "units/storage-complex",
        list: [
            'Ideal for personal or business use.',
            'Communal modern meeting room.',
            'Shared pristine bathrooms and kitchen.',
            'Roller door access to each unit.',
            '4.5 m* internal height.',
            'Mobile phone reception booster network.',
            'Communal WI-FI.',
            'Ability to fit mezzanines and car hoists into your unit.',
            'Automatic motion sensor lighting in common driveways and inside units.',
            '24-hour CCTV and security system.'
        ],
        img: "https://viridian-highett.com.au/images/site-plans/STORAGE-UNITS/storage-siteplan.png"
    },
];

export const fixtures_type = [
    {
        id: 1,
        type: "General",
    },
    {
        id: 2,
        type: "Kitchen",
    },
    {
        id: 3,
        type: "Bathroom",
    },
];

export const building_construction_details = [
    {
        type: "general",
        items: [
            {
                item: "Stainless Steel Sink",
                description: "Stainless Steel Sink",
                colour: "ANX110-34 Single Bowl Undermount Sink Only Stainless Steel",
                notes: "Product code: 2400799",
                img: "https://viridian-highett.com.au/images/fixtures/sink.jpg",
            },
            { // not find
                item: "Sink Mixer",
                description:
                    "Black",
                colour: "Posh Solus MK2 Gooseneck Sink Mixer Tap Chrome (4 star)*",
                notes: "Product code: 9502640",
                img: "https://viridian-highett.com.au/images/fixtures/basin.jpg",
            },
            {
                item: "Splashback Porcelain Tiles ",
                description: "Pressed Edge White Gloss ",
                colour: "300 x 100",
                notes: "Product code: BELWP200",
                img: "https://viridian-highett.com.au/images/fixtures/splashback.jpg",
            },
            {
                item: "Vanity Basin",
                description:
                    "Chrome Sink Mixer with extended Lever ",
                colour: "Posh Bristol MK2 Basin Mixer Tap with Extended Lever Chrome (4 star) *",
                notes: "Product code: 9505250",
                img: "https://viridian-highett.com.au/images/fixtures/Wall-Basin.jpg",
            },
            {
                item: "Mirror",
                description: "ADP Oasis Polished edge Mirror",
                colour: "600mm x 800mm",
                notes: "Product Code: 2304685",
                img: "https://viridian-highett.com.au/images/fixtures/mirror.jpg",
            },
            {
                item: "Toilet",
                description:
                    "Vitreous China Pan with Dual Flush Cistern ",
                colour: "Posh Solus Square Closed Coupled Back to Wall Back Inlet Toilet Suite",
                notes: "Product code: 9505481",
                img: "https://viridian-highett.com.au/images/fixtures/toilet.jpg",
            },
            {
                item: "Grabrails",
                description: "Chrome with concealed fixings ",
                colour: "Mobi 840 x 700mm x 140 ",
                notes: "Product code: 9502627",
                img: "https://viridian-highett.com.au/images/fixtures/grabrail.jpg",
            },
            {
                item: "Toilet Roll Holder",
                description:
                    "Chrome",
                colour: "Caroma Cosmo Toilet Roll Holder (Metal) Chrome *",
                notes: "Product code: 146573",
                img: "https://viridian-highett.com.au/images/fixtures/toilet-holder.jpg",
            },
            {
                //not found
                item: "Hand Towel Holder", 
                description: "Chrome",
                colour: "Phoenix Gen X Guest Towel Holder Chrome*",
                notes: "Product Code: 274283",
                img: "https://viridian-highett.com.au/images/fixtures/toilet-holder.jpg",
            },
            {
                item: "Porcelain Tiles",
                description:
                    "Floor - Tech Lab Mono Gunmetal Natural",
                colour: "300 x 600",
                notes: "Product code: NT17-4302FL",
                img: "https://viridian-highett.com.au/images/fixtures/porcelain.jpg",
            },
            {
                item: "Ceramic Tiles ",
                description:
                    "Walls - Baseline Ivory Matt*",
                colour: "",
                notes: "Product code: NT19-2965FL",
                img: "https://viridian-highett.com.au/images/fixtures/ceramic.jpg",
            },
            {
                item: "LED Panel Lights ",
                description:
                    "1200*300",
                colour: "White",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/1200x300-LED-Panel-Lights.jpg",
            },
            {
                item: "Lexicon Paint",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Lexicon-Paint.jpg",
            },
            {
                item: "Back To Wall Toilet Suite",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Back-to-Wall-Toilet-Suite.jpg",
            },
            {
                item: "Benchtop Mottle Grey",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Benchtop--Mottle-Grey.jpg",
            },
            {
                item: "Black Aluminium Skirting",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/black-aluminium-skirting.jpg",
            },
            {
                item: "Carpet Tiles",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Carpet-Tiles.jpg",
            },
            {
                item: "High Bay Warehouse LED",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/High-Bay-Warehouse-LED.jpg",
            },
            {
                item: "LED Downlight",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/LED-Downlight.jpg",
            },
            {
                item: "Shower Head Matte Black",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Shower-Head--Matte-Black.jpg",
            },
            {
                item: "Shower Mixer Tap Matte Black",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/shower-mixer.jpg",
            },
            {
                item: "White Ceiling Black Tracks",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/white-ceiling--black-tracks.jpg",
            },
        ],
    },
    {
        type: "kitchen",
        items: [
            {
                item: "Stainless Steel Sink",
                description: "Stainless Steel Sink",
                colour: "ANX110-34 Single Bowl Undermount Sink Only Stainless Steel",
                notes: "Product code: 2400799",
                img: "https://viridian-highett.com.au/images/fixtures/sink.jpg",
            },
            { // not find
                item: "Sink Mixer",
                description:
                    "Black",
                colour: "Posh Solus MK2 Gooseneck Sink Mixer Tap Chrome (4 star)*",
                notes: "Product code: 9502640",
                img: "https://viridian-highett.com.au/images/fixtures/basin.jpg",
            },
            {
                item: "Splashback Porcelain Tiles ",
                description: "Pressed Edge White Gloss ",
                colour: "300 x 100",
                notes: "Product code: BELWP200",
                img: "https://viridian-highett.com.au/images/fixtures/splashback.jpg",
            },
            {
                item: "Vanity Basin",
                description:
                    "Chrome Sink Mixer with extended Lever ",
                colour: "Posh Bristol MK2 Basin Mixer Tap with Extended Lever Chrome (4 star) *",
                notes: "Product code: 9505250",
                img: "https://viridian-highett.com.au/images/fixtures/Wall-Basin.jpg",
            },
            {
                item: "Mirror",
                description: "ADP Oasis Polished edge Mirror",
                colour: "600mm x 800mm",
                notes: "Product Code: 2304685",
                img: "https://viridian-highett.com.au/images/fixtures/mirror.jpg",
            },
            {
                item: "Toilet",
                description:
                    "Vitreous China Pan with Dual Flush Cistern ",
                colour: "Posh Solus Square Closed Coupled Back to Wall Back Inlet Toilet Suite",
                notes: "Product code: 9505481",
                img: "https://viridian-highett.com.au/images/fixtures/toilet.jpg",
            },
            {
                item: "Grabrails",
                description: "Chrome with concealed fixings ",
                colour: "Mobi 840 x 700mm x 140 ",
                notes: "Product code: 9502627",
                img: "https://viridian-highett.com.au/images/fixtures/grabrail.jpg",
            },
            {
                item: "Toilet Roll Holder",
                description:
                    "Chrome",
                colour: "Caroma Cosmo Toilet Roll Holder (Metal) Chrome *",
                notes: "Product code: 146573",
                img: "https://viridian-highett.com.au/images/fixtures/toilet-holder.jpg",
            },
            {
                //not found
                item: "Hand Towel Holder", 
                description: "Chrome",
                colour: "Phoenix Gen X Guest Towel Holder Chrome*",
                notes: "Product Code: 274283",
                img: "https://viridian-highett.com.au/images/fixtures/toilet-holder.jpg",
            },
            {
                item: "Porcelain Tiles",
                description:
                    "Floor - Tech Lab Mono Gunmetal Natural",
                colour: "300 x 600",
                notes: "Product code: NT17-4302FL",
                img: "https://viridian-highett.com.au/images/fixtures/porcelain.jpg",
            },
            {
                item: "Ceramic Tiles ",
                description:
                    "Walls - Baseline Ivory Matt*",
                colour: "",
                notes: "Product code: NT19-2965FL",
                img: "https://viridian-highett.com.au/images/fixtures/ceramic.jpg",
            },
            {
                item: "LED Panel Lights ",
                description:
                    "1200*300",
                colour: "White",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/1200x300-LED-Panel-Lights.jpg",
            },
            {
                item: "Lexicon Paint",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Lexicon-Paint.jpg",
            },
            {
                item: "Back To Wall Toilet Suite",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Back-to-Wall-Toilet-Suite.jpg",
            },
            {
                item: "Benchtop Mottle Grey",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Benchtop--Mottle-Grey.jpg",
            },
            {
                item: "Black Aluminium Skirting",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/black-aluminium-skirting.jpg",
            },
            {
                item: "Carpet Tiles",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Carpet-Tiles.jpg",
            },
            {
                item: "High Bay Warehouse LED",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/High-Bay-Warehouse-LED.jpg",
            },
            {
                item: "LED Downlight",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/LED-Downlight.jpg",
            },
            {
                item: "Shower Head Matte Black",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Shower-Head--Matte-Black.jpg",
            },
            {
                item: "Shower Mixer Tap Matte Black",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/shower-mixer.jpg",
            },
            {
                item: "White Ceiling Black Tracks",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/white-ceiling--black-tracks.jpg",
            },
        ],
    },
    {
        type: "bathroom",
        items: [
            {
                item: "Stainless Steel Sink",
                description: "Stainless Steel Sink",
                colour: "ANX110-34 Single Bowl Undermount Sink Only Stainless Steel",
                notes: "Product code: 2400799",
                img: "https://viridian-highett.com.au/images/fixtures/sink.jpg",
            },
            { // not find
                item: "Sink Mixer",
                description:
                    "Black",
                colour: "Posh Solus MK2 Gooseneck Sink Mixer Tap Chrome (4 star)*",
                notes: "Product code: 9502640",
                img: "https://viridian-highett.com.au/images/fixtures/basin.jpg",
            },
            {
                item: "Splashback Porcelain Tiles ",
                description: "Pressed Edge White Gloss ",
                colour: "300 x 100",
                notes: "Product code: BELWP200",
                img: "https://viridian-highett.com.au/images/fixtures/splashback.jpg",
            },
            {
                item: "Vanity Basin",
                description:
                    "Chrome Sink Mixer with extended Lever ",
                colour: "Posh Bristol MK2 Basin Mixer Tap with Extended Lever Chrome (4 star) *",
                notes: "Product code: 9505250",
                img: "https://viridian-highett.com.au/images/fixtures/Wall-Basin.jpg",
            },
            {
                item: "Mirror",
                description: "ADP Oasis Polished edge Mirror",
                colour: "600mm x 800mm",
                notes: "Product Code: 2304685",
                img: "https://viridian-highett.com.au/images/fixtures/mirror.jpg",
            },
            {
                item: "Toilet",
                description:
                    "Vitreous China Pan with Dual Flush Cistern ",
                colour: "Posh Solus Square Closed Coupled Back to Wall Back Inlet Toilet Suite",
                notes: "Product code: 9505481",
                img: "https://viridian-highett.com.au/images/fixtures/toilet.jpg",
            },
            {
                item: "Grabrails",
                description: "Chrome with concealed fixings ",
                colour: "Mobi 840 x 700mm x 140 ",
                notes: "Product code: 9502627",
                img: "https://viridian-highett.com.au/images/fixtures/grabrail.jpg",
            },
            {
                item: "Toilet Roll Holder",
                description:
                    "Chrome",
                colour: "Caroma Cosmo Toilet Roll Holder (Metal) Chrome *",
                notes: "Product code: 146573",
                img: "https://viridian-highett.com.au/images/fixtures/toilet-holder.jpg",
            },
            {
                //not found
                item: "Hand Towel Holder", 
                description: "Chrome",
                colour: "Phoenix Gen X Guest Towel Holder Chrome*",
                notes: "Product Code: 274283",
                img: "https://viridian-highett.com.au/images/fixtures/toilet-holder.jpg",
            },
            {
                item: "Porcelain Tiles",
                description:
                    "Floor - Tech Lab Mono Gunmetal Natural",
                colour: "300 x 600",
                notes: "Product code: NT17-4302FL",
                img: "https://viridian-highett.com.au/images/fixtures/porcelain.jpg",
            },
            {
                item: "Ceramic Tiles ",
                description:
                    "Walls - Baseline Ivory Matt*",
                colour: "",
                notes: "Product code: NT19-2965FL",
                img: "https://viridian-highett.com.au/images/fixtures/ceramic.jpg",
            },
            {
                item: "LED Panel Lights ",
                description:
                    "1200*300",
                colour: "White",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/1200x300-LED-Panel-Lights.jpg",
            },
            {
                item: "Lexicon Paint",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Lexicon-Paint.jpg",
            },
            {
                item: "Back To Wall Toilet Suite",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Back-to-Wall-Toilet-Suite.jpg",
            },
            {
                item: "Benchtop Mottle Grey",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Benchtop--Mottle-Grey.jpg",
            },
            {
                item: "Black Aluminium Skirting",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/black-aluminium-skirting.jpg",
            },
            {
                item: "Carpet Tiles",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Carpet-Tiles.jpg",
            },
            {
                item: "High Bay Warehouse LED",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/High-Bay-Warehouse-LED.jpg",
            },
            {
                item: "LED Downlight",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/LED-Downlight.jpg",
            },
            {
                item: "Shower Head Matte Black",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/Shower-Head--Matte-Black.jpg",
            },
            {
                item: "Shower Mixer Tap Matte Black",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/shower-mixer.jpg",
            },
            {
                item: "White Ceiling Black Tracks",
                description:
                    "White",
                colour: "",
                notes: "",
                img: "https://viridian-highett.com.au/images/fixtures/white-ceiling--black-tracks.jpg",
            },
        ],
    },
];

export const sale_contacts = [
    {
        id: 1,
        name: "John Nockles",
        title: "Director - Agency Southern/Western Regions",
        sale_intro:
            "POINT OF INTEREST <br />John’s experience in commercial real estate is now pushing a decade and over that time he’s proud to see change when it comes to property in Melbourne. By adopting a lateral approach within a linear industry, John understands success within Melbourne’s commercial real estate market occurs by looking beyond what has been done, to what can be. It’s an approach that mirrors this city’s originality, commercially—and with it, creativity that extends beyond St Kilda Road.",
        phone: "0404 530 393",
        tel: "(03) 9623 2591",
        email: "john.nockles@cva.melbourne",
        img: john,
    },
    {
        id: 2,
        name: "Tim Cooney",
        title: "Senior Property Executive - Southern Region",
        sale_intro:
            "POINT OF INTEREST <br />After five years spent working in commercial real estate in London, Tim is home in 2021. Melbourne born and bred with more than 5 years’ experience locally, there aren’t many who are better suited to this business. Diligent. Proactive. An honest communicator. Tim knows it’s in the face-to-face where deals are won and lost for all parties. Because of this, he takes great care in building rapport and learning the long-term strategy of his clients to enable the best advice not just short-term, but for life. Meticulously detailed and across all of the numbers, you’ll be glad you have Tim’s on hand – plus his support across all points of your deal.",
        phone: "0468 860 737",
        tel: "(03) 9623 2582",
        email: "tim.cooney@cva.melbourne",        
        img: tim,
    },
];

export const financialContent = [
    {
        position: "first",
        name: "Price List",
    },
    {
        position: "second",
        name: "Estimated Outgoings",
    },
    {
        position: "third",
        name: "Owners Corporation",
    },
    {
        position: "forth",
        name: "Depreciation Schedule",
    },
];