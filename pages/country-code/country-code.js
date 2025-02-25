$("#toISO2").click(function () {
    let areaOutput = $("#cc_output");
    areaOutput.val("");

    let inText = $("#cc_input").val();

    let newText = "";
    let countrys = inText.split("\n");
    for (let i in countrys) {
        if (i > 0) {
            newText += "\n";
        }
        newText += to_iso2[countrys[i]];

    }
    areaOutput.val(newText);
});

$("#toISO3").click(function () {
    let areaOutput = $("#cc_output");
    areaOutput.val("");

    let inText = $("#cc_input").val();

    let newText = "";
    let countrys = inText.split("\n");
    for (let i in countrys) {
        if (i > 0) {
            newText += "\n";
        }
        newText += to_iso3[countrys[i]];

    }
    areaOutput.val(newText);
});


$("#2to3").click(function () {
    let areaOutput = $("#cc_output");
    areaOutput.val("");

    let inText = $("#cc_input").val();

    let map_2to3 = {};
    for (let i = 0; i < iso_number_list.length; i++) {
        map_2to3[iso_number_list[i][0]] = iso_number_list[i][1];
    }
    let newText = "";
    let data_list = inText.split("\n");
    for (let i in data_list) {
        if (i > 0) {
            newText += "\n";
        }
        newText += map_2to3[data_list[i].toUpperCase()];
    }
    areaOutput.val(newText);
});

$("#3to2").click(function () {
    let areaOutput = $("#cc_output");
    areaOutput.val("");

    let inText = $("#cc_input").val();

    let map_3to2 = {};
    for (let i = 0; i < iso_number_list.length; i++) {
        map_3to2[iso_number_list[i][1]] = iso_number_list[i][0];
    }

    let newText = "";
    let countrys = inText.split("\n");
    for (let i in countrys) {
        if (i > 0) {
            newText += "\n";
        }
        newText += map_3to2[countrys[i]];

    }
    areaOutput.val(newText);
});

// data from : https://www.iban.com/country-codes
var to_iso3 = {
    "Afghanistan": "AFG",
    "Åland Islands": "ALA",
    "Albania": "ALB",
    "Algeria": "DZA",
    "American Samoa": "ASM",
    "Andorra": "AND",
    "Angola": "AGO",
    "Anguilla": "AIA",
    "Antarctica": "ATA",
    "Antigua and Barbuda": "ATG",
    "Argentina": "ARG",
    "Armenia": "ARM",
    "Aruba": "ABW",
    "Australia": "AUS",
    "Austria": "AUT",
    "Azerbaijan": "AZE",
    "Bahamas": "BHS",
    "Bahrain": "BHR",
    "Bangladesh": "BGD",
    "Barbados": "BRB",
    "Belarus": "BLR",
    "Belgium": "BEL",
    "Belize": "BLZ",
    "Benin": "BEN",
    "Bermuda": "BMU",
    "Bhutan": "BTN",
    "Bolivia (Plurinational State of)": "BOL",
    "Bonaire, Sint Eustatius and Saba": "BES",
    "Bosnia and Herzegovina": "BIH",
    "Botswana": "BWA",
    "Bouvet Island": "BVT",
    "Brazil": "BRA",
    "British Indian Ocean Territory": "IOT",
    "Brunei Darussalam": "BRN",
    "Bulgaria": "BGR",
    "Burkina Faso": "BFA",
    "Burundi": "BDI",
    "Cabo Verde": "CPV",
    "Cambodia": "KHM",
    "Cameroon": "CMR",
    "Canada": "CAN",
    "Cayman Islands": "CYM",
    "Central African Republic": "CAF",
    "Chad": "TCD",
    "Chile": "CHL",
    "China": "CHN",
    "Christmas Island": "CXR",
    "Cocos (Keeling) Islands": "CCK",
    "Colombia": "COL",
    "Comoros": "COM",
    "Congo": "COG",
    "Congo, Democratic Republic of the": "COD",
    "Cook Islands": "COK",
    "Costa Rica": "CRI",
    "Côte d\'Ivoire": "CIV",
    "Croatia": "HRV",
    "Cuba": "CUB",
    "Curaçao": "CUW",
    "Cyprus": "CYP",
    "Czechia": "CZE",
    "Denmark": "DNK",
    "Djibouti": "DJI",
    "Dominica": "DMA",
    "Dominican Republic": "DOM",
    "Ecuador": "ECU",
    "Egypt": "EGY",
    "El Salvador": "SLV",
    "Equatorial Guinea": "GNQ",
    "Eritrea": "ERI",
    "Estonia": "EST",
    "Eswatini": "SWZ",
    "Ethiopia": "ETH",
    "Falkland Islands (Malvinas)": "FLK",
    "Faroe Islands": "FRO",
    "Fiji": "FJI",
    "Finland": "FIN",
    "France": "FRA",
    "French Guiana": "GUF",
    "French Polynesia": "PYF",
    "French Southern Territories": "ATF",
    "Gabon": "GAB",
    "Gambia": "GMB",
    "Georgia": "GEO",
    "Germany": "DEU",
    "Ghana": "GHA",
    "Gibraltar": "GIB",
    "Greece": "GRC",
    "Greenland": "GRL",
    "Grenada": "GRD",
    "Guadeloupe": "GLP",
    "Guam": "GUM",
    "Guatemala": "GTM",
    "Guernsey": "GGY",
    "Guinea": "GIN",
    "Guinea-Bissau": "GNB",
    "Guyana": "GUY",
    "Haiti": "HTI",
    "Heard Island and McDonald Islands": "HMD",
    "Holy See": "VAT",
    "Honduras": "HND",
    "Hong Kong": "HKG",
    "Hungary": "HUN",
    "Iceland": "ISL",
    "India": "IND",
    "Indonesia": "IDN",
    "Iran (Islamic Republic of)": "IRN",
    "Iraq": "IRQ",
    "Ireland": "IRL",
    "Isle of Man": "IMN",
    "Israel": "ISR",
    "Italy": "ITA",
    "Jamaica": "JAM",
    "Japan": "JPN",
    "Jersey": "JEY",
    "Jordan": "JOR",
    "Kazakhstan": "KAZ",
    "Kenya": "KEN",
    "Kiribati": "KIR",
    "Korea (Democratic People\'s Republic of)": "PRK",
    "Korea, Republic of": "KOR",
    "Kuwait": "KWT",
    "Kyrgyzstan": "KGZ",
    "Lao People\'s Democratic Republic": "LAO",
    "Latvia": "LVA",
    "Lebanon": "LBN",
    "Lesotho": "LSO",
    "Liberia": "LBR",
    "Libya": "LBY",
    "Liechtenstein": "LIE",
    "Lithuania": "LTU",
    "Luxembourg": "LUX",
    "Macao": "MAC",
    "Madagascar": "MDG",
    "Malawi": "MWI",
    "Malaysia": "MYS",
    "Maldives": "MDV",
    "Mali": "MLI",
    "Malta": "MLT",
    "Marshall Islands": "MHL",
    "Martinique": "MTQ",
    "Mauritania": "MRT",
    "Mauritius": "MUS",
    "Mayotte": "MYT",
    "Mexico": "MEX",
    "Micronesia (Federated States of)": "FSM",
    "Moldova, Republic of": "MDA",
    "Monaco": "MCO",
    "Mongolia": "MNG",
    "Montenegro": "MNE",
    "Montserrat": "MSR",
    "Morocco": "MAR",
    "Mozambique": "MOZ",
    "Myanmar": "MMR",
    "Namibia": "NAM",
    "Nauru": "NRU",
    "Nepal": "NPL",
    "Netherlands": "NLD",
    "New Caledonia": "NCL",
    "New Zealand": "NZL",
    "Nicaragua": "NIC",
    "Niger": "NER",
    "Nigeria": "NGA",
    "Niue": "NIU",
    "Norfolk Island": "NFK",
    "North Macedonia": "MKD",
    "Northern Mariana Islands": "MNP",
    "Norway": "NOR",
    "Oman": "OMN",
    "Pakistan": "PAK",
    "Palau": "PLW",
    "Palestine, State of": "PSE",
    "Panama": "PAN",
    "Papua New Guinea": "PNG",
    "Paraguay": "PRY",
    "Peru": "PER",
    "Philippines": "PHL",
    "Pitcairn": "PCN",
    "Poland": "POL",
    "Portugal": "PRT",
    "Puerto Rico": "PRI",
    "Qatar": "QAT",
    "Réunion": "REU",
    "Romania": "ROU",
    "Russian Federation": "RUS",
    "Rwanda": "RWA",
    "Saint Barthélemy": "BLM",
    "Saint Helena, Ascension and Tristan da Cunha": "SHN",
    "Saint Kitts and Nevis": "KNA",
    "Saint Lucia": "LCA",
    "Saint Martin (French part)": "MAF",
    "Saint Pierre and Miquelon": "SPM",
    "Saint Vincent and the Grenadines": "VCT",
    "Samoa": "WSM",
    "San Marino": "SMR",
    "Sao Tome and Principe": "STP",
    "Saudi Arabia": "SAU",
    "Senegal": "SEN",
    "Serbia": "SRB",
    "Seychelles": "SYC",
    "Sierra Leone": "SLE",
    "Singapore": "SGP",
    "Sint Maarten (Dutch part)": "SXM",
    "Slovakia": "SVK",
    "Slovenia": "SVN",
    "Solomon Islands": "SLB",
    "Somalia": "SOM",
    "South Africa": "ZAF",
    "South Georgia and the South Sandwich Islands": "SGS",
    "South Sudan": "SSD",
    "Spain": "ESP",
    "Sri Lanka": "LKA",
    "Sudan": "SDN",
    "Suriname": "SUR",
    "Svalbard and Jan Mayen": "SJM",
    "Sweden": "SWE",
    "Switzerland": "CHE",
    "Syrian Arab Republic": "SYR",
    "Taiwan, Province of China": "TWN",
    "Tajikistan": "TJK",
    "Tanzania, United Republic of": "TZA",
    "Thailand": "THA",
    "Timor-Leste": "TLS",
    "Togo": "TGO",
    "Tokelau": "TKL",
    "Tonga": "TON",
    "Trinidad and Tobago": "TTO",
    "Tunisia": "TUN",
    "Turkey": "TUR",
    "Turkmenistan": "TKM",
    "Turks and Caicos Islands": "TCA",
    "Tuvalu": "TUV",
    "Uganda": "UGA",
    "Ukraine": "UKR",
    "United Arab Emirates": "ARE",
    "United Kingdom of Great Britain and Northern Ireland": "GBR",
    "United States of America": "USA",
    "United States Minor Outlying Islands": "UMI",
    "Uruguay": "URY",
    "Uzbekistan": "UZB",
    "Vanuatu": "VUT",
    "Venezuela (Bolivarian Republic of)": "VEN",
    "Viet Nam": "VNM",
    "Virgin Islands (British)": "VGB",
    "Virgin Islands (U.S.)": "VIR",
    "Wallis and Futuna": "WLF",
    "Western Sahara": "ESH",
    "Yemen": "YEM",
    "Zambia": "ZMB",
    "Zimbabwe": "ZWE",
    /* ----------------- additional ----------------- */
    "Cape Verde": "CPV",
    "Democratic Republic of Congo": "COD",
    "Hongkong": "HKG",
    "Iran": "IRN",
    "Luxemburg": "LUX",
    "Netherland": "NLD",
    "Russia": "RUS",
    "South Korea": "KOR",
    "Taiwan": "TWN",
    "Tanzania": "TZA",
    "UAE": "ARE",
    "United Kingdom (UK)": "GBR",
    "United States of America (USA)": "USA",
    "Vietnam": "VNM",
    /* ----------------- Transitional reservations ----------------- */
    "Netherlands Antilles": "ANT"
};

var to_iso2 = {
    "Andorra": "AD",
    "United Arab Emirates": "AE",
    "Afghanistan": "AF",
    "Antigua and Barbuda": "AG",
    "Anguilla": "AI",
    "Albania": "AL",
    "Armenia": "AM",
    "Angola": "AO",
    "Antarctica": "AQ",
    "Argentina": "AR",
    "American Samoa": "AS",
    "Austria": "AT",
    "Australia": "AU",
    "Aruba": "AW",
    "Åland Islands": "AX",
    "Azerbaijan": "AZ",
    "Bosnia and Herzegovina": "BA",
    "Barbados": "BB",
    "Bangladesh": "BD",
    "Belgium": "BE",
    "Burkina Faso": "BF",
    "Bulgaria": "BG",
    "Bahrain": "BH",
    "Burundi": "BI",
    "Benin": "BJ",
    "Saint Barthélemy": "BL",
    "Bermuda": "BM",
    "Brunei Darussalam": "BN",
    "Bolivia (Plurinational State of)": "BO",
    "Bonaire, Sint Eustatius and Saba": "BQ",
    "Brazil": "BR",
    "Bahamas": "BS",
    "Bhutan": "BT",
    "Bouvet Island": "BV",
    "Botswana": "BW",
    "Belarus": "BY",
    "Belize": "BZ",
    "Canada": "CA",
    "Cocos (Keeling) Islands": "CC",
    "Congo, Democratic Republic of the": "CD",
    "Central African Republic": "CF",
    "Congo": "CG",
    "Switzerland": "CH",
    "Côte d'Ivoire": "CI",
    "Cook Islands": "CK",
    "Chile": "CL",
    "Cameroon": "CM",
    "China": "CN",
    "Colombia": "CO",
    "Costa Rica": "CR",
    "Cuba": "CU",
    "Cabo Verde": "CV",
    "Curaçao": "CW",
    "Christmas Island": "CX",
    "Cyprus": "CY",
    "Czechia": "CZ",
    "Germany": "DE",
    "Djibouti": "DJ",
    "Denmark": "DK",
    "Dominica": "DM",
    "Dominican Republic": "DO",
    "Algeria": "DZ",
    "Ecuador": "EC",
    "Estonia": "EE",
    "Egypt": "EG",
    "Western Sahara": "EH",
    "Eritrea": "ER",
    "Spain": "ES",
    "Ethiopia": "ET",
    "Finland": "FI",
    "Fiji": "FJ",
    "Falkland Islands (Malvinas)": "FK",
    "Micronesia (Federated States of)": "FM",
    "Faroe Islands": "FO",
    "France": "FR",
    "Gabon": "GA",
    "United Kingdom of Great Britain and Northern Ireland": "GB",
    "Grenada": "GD",
    "Georgia": "GE",
    "French Guiana": "GF",
    "Guernsey": "GG",
    "Ghana": "GH",
    "Gibraltar": "GI",
    "Greenland": "GL",
    "Gambia": "GM",
    "Guinea": "GN",
    "Guadeloupe": "GP",
    "Equatorial Guinea": "GQ",
    "Greece": "GR",
    "South Georgia and the South Sandwich Islands": "GS",
    "Guatemala": "GT",
    "Guam": "GU",
    "Guinea-Bissau": "GW",
    "Guyana": "GY",
    "Hong Kong": "HK",
    "Heard Island and McDonald Islands": "HM",
    "Honduras": "HN",
    "Croatia": "HR",
    "Haiti": "HT",
    "Hungary": "HU",
    "Indonesia": "ID",
    "Ireland": "IE",
    "Israel": "IL",
    "Isle of Man": "IM",
    "India": "IN",
    "British Indian Ocean Territory": "IO",
    "Iraq": "IQ",
    "Iran (Islamic Republic of)": "IR",
    "Iceland": "IS",
    "Italy": "IT",
    "Jersey": "JE",
    "Jamaica": "JM",
    "Jordan": "JO",
    "Japan": "JP",
    "Kenya": "KE",
    "Kyrgyzstan": "KG",
    "Cambodia": "KH",
    "Kiribati": "KI",
    "Comoros": "KM",
    "Saint Kitts and Nevis": "KN",
    "Korea (Democratic People's Republic of)": "KP",
    "Korea, Republic of": "KR",
    "Kuwait": "KW",
    "Cayman Islands": "KY",
    "Kazakhstan": "KZ",
    "Lao People's Democratic Republic": "LA",
    "Lebanon": "LB",
    "Saint Lucia": "LC",
    "Liechtenstein": "LI",
    "Sri Lanka": "LK",
    "Liberia": "LR",
    "Lesotho": "LS",
    "Lithuania": "LT",
    "Luxembourg": "LU",
    "Latvia": "LV",
    "Libya": "LY",
    "Morocco": "MA",
    "Monaco": "MC",
    "Moldova, Republic of": "MD",
    "Montenegro": "ME",
    "Saint Martin (French part)": "MF",
    "Madagascar": "MG",
    "Marshall Islands": "MH",
    "North Macedonia": "MK",
    "Mali": "ML",
    "Myanmar": "MM",
    "Mongolia": "MN",
    "Macao": "MO",
    "Northern Mariana Islands": "MP",
    "Martinique": "MQ",
    "Mauritania": "MR",
    "Montserrat": "MS",
    "Malta": "MT",
    "Mauritius": "MU",
    "Maldives": "MV",
    "Malawi": "MW",
    "Mexico": "MX",
    "Malaysia": "MY",
    "Mozambique": "MZ",
    "Namibia": "NA",
    "New Caledonia": "NC",
    "Niger": "NE",
    "Norfolk Island": "NF",
    "Nigeria": "NG",
    "Nicaragua": "NI",
    "Netherlands, Kingdom of the": "NL",
    "Norway": "NO",
    "Nepal": "NP",
    "Nauru": "NR",
    "Niue": "NU",
    "New Zealand": "NZ",
    "Oman": "OM",
    "Panama": "PA",
    "Peru": "PE",
    "French Polynesia": "PF",
    "Papua New Guinea": "PG",
    "Philippines": "PH",
    "Pakistan": "PK",
    "Poland": "PL",
    "Saint Pierre and Miquelon": "PM",
    "Pitcairn": "PN",
    "Puerto Rico": "PR",
    "Palestine, State of": "PS",
    "Portugal": "PT",
    "Palau": "PW",
    "Paraguay": "PY",
    "Qatar": "QA",
    "Réunion": "RE",
    "Romania": "RO",
    "Serbia": "RS",
    "Russian Federation": "RU",
    "Rwanda": "RW",
    "Saudi Arabia": "SA",
    "Solomon Islands": "SB",
    "Seychelles": "SC",
    "Sudan": "SD",
    "Sweden": "SE",
    "Singapore": "SG",
    "Saint Helena, Ascension and Tristan da Cunha": "SH",
    "Slovenia": "SI",
    "Svalbard and Jan Mayen": "SJ",
    "Slovakia": "SK",
    "Sierra Leone": "SL",
    "San Marino": "SM",
    "Senegal": "SN",
    "Somalia": "SO",
    "Suriname": "SR",
    "South Sudan": "SS",
    "Sao Tome and Principe": "ST",
    "El Salvador": "SV",
    "Sint Maarten (Dutch part)": "SX",
    "Syrian Arab Republic": "SY",
    "Eswatini": "SZ",
    "Turks and Caicos Islands": "TC",
    "Chad": "TD",
    "French Southern Territories": "TF",
    "Togo": "TG",
    "Thailand": "TH",
    "Tajikistan": "TJ",
    "Tokelau": "TK",
    "Timor-Leste": "TL",
    "Turkmenistan": "TM",
    "Tunisia": "TN",
    "Tonga": "TO",
    "Türkiye": "TR",
    "Trinidad and Tobago": "TT",
    "Tuvalu": "TV",
    "Taiwan, Province of China": "TW",
    "Tanzania, United Republic of": "TZ",
    "Ukraine": "UA",
    "Uganda": "UG",
    "United States Minor Outlying Islands": "UM",
    "United States of America": "US",
    "Uruguay": "UY",
    "Uzbekistan": "UZ",
    "Holy See": "VA",
    "Saint Vincent and the Grenadines": "VC",
    "Venezuela (Bolivarian Republic of)": "VE",
    "Virgin Islands (British)": "VG",
    "Virgin Islands (U.S.)": "VI",
    "Viet Nam": "VN",
    "Vanuatu": "VU",
    "Wallis and Futuna": "WF",
    "Samoa": "WS",
    "Yemen": "YE",
    "Mayotte": "YT",
    "South Africa": "ZA",
    "Zambia": "ZM",
    "Zimbabwe": "ZW",

    /* ----------------- additional ----------------- */
    "Hong Kong, China": "HK",
    "Macao, China": "MO",
    "Democratic People's Republic of Korea": "KP",
    "Indonesia": "ID",
    "Republic of Korea": "KR",
    "Timor Leste": "TL",

    /* ----------------- Transitional reservations ----------------- */
    "Netherlands Antilles": "AN"
}

var iso_number_list = [
    ["AF", "AFG", "4"],
    ["AL", "ALB", "8"],
    ["DZ", "DZA", "12"],
    ["AS", "ASM", "16"],
    ["AD", "AND", "20"],
    ["AO", "AGO", "24"],
    ["AI", "AIA", "660"],
    ["AQ", "ATA", "10"],
    ["AG", "ATG", "28"],
    ["AR", "ARG", "32"],
    ["AM", "ARM", "51"],
    ["AW", "ABW", "533"],
    ["AU", "AUS", "36"],
    ["AT", "AUT", "40"],
    ["AZ", "AZE", "31"],
    ["BS", "BHS", "44"],
    ["BH", "BHR", "48"],
    ["BD", "BGD", "50"],
    ["BB", "BRB", "52"],
    ["BY", "BLR", "112"],
    ["BE", "BEL", "56"],
    ["BZ", "BLZ", "84"],
    ["BJ", "BEN", "204"],
    ["BM", "BMU", "60"],
    ["BT", "BTN", "64"],
    ["BO", "BOL", "68"],
    ["BQ", "BES", "535"],
    ["BA", "BIH", "70"],
    ["BW", "BWA", "72"],
    ["BV", "BVT", "74"],
    ["BR", "BRA", "76"],
    ["IO", "IOT", "86"],
    ["BN", "BRN", "96"],
    ["BG", "BGR", "100"],
    ["BF", "BFA", "854"],
    ["BI", "BDI", "108"],
    ["CV", "CPV", "132"],
    ["KH", "KHM", "116"],
    ["CM", "CMR", "120"],
    ["CA", "CAN", "124"],
    ["KY", "CYM", "136"],
    ["CF", "CAF", "140"],
    ["TD", "TCD", "148"],
    ["CL", "CHL", "152"],
    ["CN", "CHN", "156"],
    ["CX", "CXR", "162"],
    ["CC", "CCK", "166"],
    ["CO", "COL", "170"],
    ["KM", "COM", "174"],
    ["CD", "COD", "180"],
    ["CG", "COG", "178"],
    ["CK", "COK", "184"],
    ["CR", "CRI", "188"],
    ["HR", "HRV", "191"],
    ["CU", "CUB", "192"],
    ["CW", "CUW", "531"],
    ["CY", "CYP", "196"],
    ["CZ", "CZE", "203"],
    ["CI", "CIV", "384"],
    ["DK", "DNK", "208"],
    ["DJ", "DJI", "262"],
    ["DM", "DMA", "212"],
    ["DO", "DOM", "214"],
    ["EC", "ECU", "218"],
    ["EG", "EGY", "818"],
    ["SV", "SLV", "222"],
    ["GQ", "GNQ", "226"],
    ["ER", "ERI", "232"],
    ["EE", "EST", "233"],
    ["SZ", "SWZ", "748"],
    ["ET", "ETH", "231"],
    ["FK", "FLK", "238"],
    ["FO", "FRO", "234"],
    ["FJ", "FJI", "242"],
    ["FI", "FIN", "246"],
    ["FR", "FRA", "250"],
    ["GF", "GUF", "254"],
    ["PF", "PYF", "258"],
    ["TF", "ATF", "260"],
    ["GA", "GAB", "266"],
    ["GM", "GMB", "270"],
    ["GE", "GEO", "268"],
    ["DE", "DEU", "276"],
    ["GH", "GHA", "288"],
    ["GI", "GIB", "292"],
    ["GR", "GRC", "300"],
    ["GL", "GRL", "304"],
    ["GD", "GRD", "308"],
    ["GP", "GLP", "312"],
    ["GU", "GUM", "316"],
    ["GT", "GTM", "320"],
    ["GG", "GGY", "831"],
    ["GN", "GIN", "324"],
    ["GW", "GNB", "624"],
    ["GY", "GUY", "328"],
    ["HT", "HTI", "332"],
    ["HM", "HMD", "334"],
    ["VA", "VAT", "336"],
    ["HN", "HND", "340"],
    ["HK", "HKG", "344"],
    ["HU", "HUN", "348"],
    ["IS", "ISL", "352"],
    ["IN", "IND", "356"],
    ["ID", "IDN", "360"],
    ["IR", "IRN", "364"],
    ["IQ", "IRQ", "368"],
    ["IE", "IRL", "372"],
    ["IM", "IMN", "833"],
    ["IL", "ISR", "376"],
    ["IT", "ITA", "380"],
    ["JM", "JAM", "388"],
    ["JP", "JPN", "392"],
    ["JE", "JEY", "832"],
    ["JO", "JOR", "400"],
    ["KZ", "KAZ", "398"],
    ["KE", "KEN", "404"],
    ["KI", "KIR", "296"],
    ["KP", "PRK", "408"],
    ["KR", "KOR", "410"],
    ["KW", "KWT", "414"],
    ["KG", "KGZ", "417"],
    ["LA", "LAO", "418"],
    ["LV", "LVA", "428"],
    ["LB", "LBN", "422"],
    ["LS", "LSO", "426"],
    ["LR", "LBR", "430"],
    ["LY", "LBY", "434"],
    ["LI", "LIE", "438"],
    ["LT", "LTU", "440"],
    ["LU", "LUX", "442"],
    ["MO", "MAC", "446"],
    ["MG", "MDG", "450"],
    ["MW", "MWI", "454"],
    ["MY", "MYS", "458"],
    ["MV", "MDV", "462"],
    ["ML", "MLI", "466"],
    ["MT", "MLT", "470"],
    ["MH", "MHL", "584"],
    ["MQ", "MTQ", "474"],
    ["MR", "MRT", "478"],
    ["MU", "MUS", "480"],
    ["YT", "MYT", "175"],
    ["MX", "MEX", "484"],
    ["FM", "FSM", "583"],
    ["MD", "MDA", "498"],
    ["MC", "MCO", "492"],
    ["MN", "MNG", "496"],
    ["ME", "MNE", "499"],
    ["MS", "MSR", "500"],
    ["MA", "MAR", "504"],
    ["MZ", "MOZ", "508"],
    ["MM", "MMR", "104"],
    ["NA", "NAM", "516"],
    ["NR", "NRU", "520"],
    ["NP", "NPL", "524"],
    ["NL", "NLD", "528"],
    ["NC", "NCL", "540"],
    ["NZ", "NZL", "554"],
    ["NI", "NIC", "558"],
    ["NE", "NER", "562"],
    ["NG", "NGA", "566"],
    ["NU", "NIU", "570"],
    ["NF", "NFK", "574"],
    ["MP", "MNP", "580"],
    ["NO", "NOR", "578"],
    ["OM", "OMN", "512"],
    ["PK", "PAK", "586"],
    ["PW", "PLW", "585"],
    ["PS", "PSE", "275"],
    ["PA", "PAN", "591"],
    ["PG", "PNG", "598"],
    ["PY", "PRY", "600"],
    ["PE", "PER", "604"],
    ["PH", "PHL", "608"],
    ["PN", "PCN", "612"],
    ["PL", "POL", "616"],
    ["PT", "PRT", "620"],
    ["PR", "PRI", "630"],
    ["QA", "QAT", "634"],
    ["MK", "MKD", "807"],
    ["RO", "ROU", "642"],
    ["RU", "RUS", "643"],
    ["RW", "RWA", "646"],
    ["RE", "REU", "638"],
    ["BL", "BLM", "652"],
    ["SH", "SHN", "654"],
    ["KN", "KNA", "659"],
    ["LC", "LCA", "662"],
    ["MF", "MAF", "663"],
    ["PM", "SPM", "666"],
    ["VC", "VCT", "670"],
    ["WS", "WSM", "882"],
    ["SM", "SMR", "674"],
    ["ST", "STP", "678"],
    ["SA", "SAU", "682"],
    ["SN", "SEN", "686"],
    ["RS", "SRB", "688"],
    ["SC", "SYC", "690"],
    ["SL", "SLE", "694"],
    ["SG", "SGP", "702"],
    ["SX", "SXM", "534"],
    ["SK", "SVK", "703"],
    ["SI", "SVN", "705"],
    ["SB", "SLB", "90"],
    ["SO", "SOM", "706"],
    ["ZA", "ZAF", "710"],
    ["GS", "SGS", "239"],
    ["SS", "SSD", "728"],
    ["ES", "ESP", "724"],
    ["LK", "LKA", "144"],
    ["SD", "SDN", "729"],
    ["SR", "SUR", "740"],
    ["SJ", "SJM", "744"],
    ["SE", "SWE", "752"],
    ["CH", "CHE", "756"],
    ["SY", "SYR", "760"],
    ["TW", "TWN", "158"],
    ["TJ", "TJK", "762"],
    ["TZ", "TZA", "834"],
    ["TH", "THA", "764"],
    ["TL", "TLS", "626"],
    ["TG", "TGO", "768"],
    ["TK", "TKL", "772"],
    ["TO", "TON", "776"],
    ["TT", "TTO", "780"],
    ["TN", "TUN", "788"],
    ["TR", "TUR", "792"],
    ["TM", "TKM", "795"],
    ["TC", "TCA", "796"],
    ["TV", "TUV", "798"],
    ["UG", "UGA", "800"],
    ["UA", "UKR", "804"],
    ["AE", "ARE", "784"],
    ["GB", "GBR", "826"],
    ["UM", "UMI", "581"],
    ["US", "USA", "840"],
    ["UY", "URY", "858"],
    ["UZ", "UZB", "860"],
    ["VU", "VUT", "548"],
    ["VE", "VEN", "862"],
    ["VN", "VNM", "704"],
    ["VG", "VGB", "92"],
    ["VI", "VIR", "850"],
    ["WF", "WLF", "876"],
    ["EH", "ESH", "732"],
    ["YE", "YEM", "887"],
    ["ZM", "ZMB", "894"],
    ["ZW", "ZWE", "716"],
    ["AX", "ALA", "248"],

    /* ----------------- Transitional reservations ----------------- */
    ["AN", "ANT", "9202"]
]