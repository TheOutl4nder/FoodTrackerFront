import React, { useState, useEffect, useCallback } from "react";
import Card from "../components/Card/Card";
import CardContainer from "../components/CardContainer/CardContainer";
import Search from "../components/search/Search";

export default function HomePage() {
  const FakeDevices = [
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Prado de los Laureles 188, Prados Tepeyac, 45050 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6550776,
                "lng" : -103.4125849
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.65643017989272,
                   "lng" : -103.4111896201073
                },
                "southwest" : {
                   "lat" : 20.65373052010727,
                   "lng" : -103.4138892798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Healthy Town",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 4160,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/107148657742364828989\"\u003eA Google User\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEDah_9JYXlfml5ss0zBuwWpS9FhA0piZ60IMIDnPGi7us-99qPiQALGdUl3kbuAtof_ACEE2f7qjoj9Fx8MQJxYtlXng2YpF81G7xWeNXB_lf6IMl5WZdd58WB06caEJBc2YHxonzjlrO8E-jVaZths-I73ogrMZfS7nx0dcu73rgQ",
                "width" : 3120
             }
          ],
          "place_id" : "ChIJwQwqP8utKIQRO772y0AYR1I",
          "plus_code" : {
             "compound_code" : "MH4P+2X Zapopan, Jalisco",
             "global_code" : "75GRMH4P+2X"
          },
          "rating" : 5,
          "reference" : "ChIJwQwqP8utKIQRO772y0AYR1I",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 14
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Calle Quetzalcoatl 4406, Jardines del Sol, 45050 Guadalajara, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.649144,
                "lng" : -103.414169
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.65049382989272,
                   "lng" : -103.4128191701073
                },
                "southwest" : {
                   "lat" : 20.64779417010728,
                   "lng" : -103.4155188298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "BRISKET HOUSE GDL",
          "opening_hours" : {
             "open_now" : false
          },
          "photos" : [
             {
                "height" : 3024,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/102174183510506541158\"\u003eAdolfo Guzman\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEA-QDQ60hRGJ0W2djriDVEQGZG1jLAazVawqQv4jHbYCv6LYl2K6IgNbdWQsEDQezVwl3Vkh0PkuZ8sbeAqv2TlDDbUOOdumSL-KuixadrT8w9Bl0tgNgnMBKkOFoOIhU-wsdGLrbThsrgqyCYbdjfbDoAO4NYNuyxFwIfOq2tT8X0J",
                "width" : 4032
             }
          ],
          "place_id" : "ChIJd4CKyy-sKIQRDmaQ13SP6Os",
          "plus_code" : {
             "compound_code" : "JHXP+M8 Guadalajara, Jalisco",
             "global_code" : "75GRJHXP+M8"
          },
          "price_level" : 2,
          "rating" : 4.8,
          "reference" : "ChIJd4CKyy-sKIQRDmaQ13SP6Os",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 711
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Moctezuma 464, Jardines del Sol, 45050 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6507158,
                "lng" : -103.416817
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.65194657989273,
                   "lng" : -103.4154599701073
                },
                "southwest" : {
                   "lat" : 20.64924692010728,
                   "lng" : -103.4181596298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Blooming ONION",
          "opening_hours" : {
             "open_now" : false
          },
          "photos" : [
             {
                "height" : 1024,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/104036430543774560594\"\u003eSaul Flores Mancera\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEDs4ObE2PYb-EmQoJqdrJkGWJBbLeKgnxZls4Suq7WlnO9ueKg_80jkni_Dsgp_12Xkop2aVHPe2ct485BZ_n7H5iaU6wRQN3pnHQuTDPkYQUTLl_t7jOrHbHrq_43htJd7VTTg8QhWvI2fybUPCq9AZWDW2HxXqOAuorUK749yQW5B",
                "width" : 768
             }
          ],
          "place_id" : "ChIJ4b8Au1CtKIQRP4z5lYOvxOI",
          "plus_code" : {
             "compound_code" : "MH2M+77 Zapopan, Jalisco",
             "global_code" : "75GRMH2M+77"
          },
          "price_level" : 2,
          "rating" : 4.8,
          "reference" : "ChIJ4b8Au1CtKIQRP4z5lYOvxOI",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 198
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Calle Volcán Cofre de Perote, Colli Urbano, 45070 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6436052,
                "lng" : -103.4169456
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.64494747989272,
                   "lng" : -103.4155969701073
                },
                "southwest" : {
                   "lat" : 20.64224782010728,
                   "lng" : -103.4182966298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Foodtruck tacos de asada",
          "opening_hours" : {
             "open_now" : false
          },
          "place_id" : "ChIJqzS2gFCtKIQR33Bsmbx_Xyo",
          "plus_code" : {
             "compound_code" : "JHVM+C6 Zapopan, Jalisco",
             "global_code" : "75GRJHVM+C6"
          },
          "rating" : 4.9,
          "reference" : "ChIJqzS2gFCtKIQR33Bsmbx_Xyo",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 11
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Moctezuma 4844, Mirador del Sol, 45054 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6504739,
                "lng" : -103.4200241
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.65173582989272,
                   "lng" : -103.4186681201073
                },
                "southwest" : {
                   "lat" : 20.64903617010728,
                   "lng" : -103.4213677798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Delhi 6 Restaurante De La India",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 3456,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/118358832584674703854\"\u003eDouglas McLaurin-Moreno\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uED63kcB60elav980C5Zkv6qEL8lzpC6K0GIIBUw_0hF1SMIBaCvjYnbUzoulnA_gvOtbBi8RPYQb03Ey3ewHh2BpgoMxSVibHe3Y3M-Q1iwPgx3Cs3YPTTz4eQEGjHUJGol23bEPWQmnZp4gXbJmvRRyrAPIR7QkcMAo_7JyBd6TepR",
                "width" : 4608
             }
          ],
          "place_id" : "ChIJy6p-NtKtKIQR9H2pZkToQ40",
          "plus_code" : {
             "compound_code" : "MH2H+5X Zapopan, Jalisco",
             "global_code" : "75GRMH2H+5X"
          },
          "rating" : 4.4,
          "reference" : "ChIJy6p-NtKtKIQR9H2pZkToQ40",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 353
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Mariano Otero 1985, Victoria, 45088 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6474459,
                "lng" : -103.403962
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.64880882989272,
                   "lng" : -103.4025126701073
                },
                "southwest" : {
                   "lat" : 20.64610917010728,
                   "lng" : -103.4052123298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Mr. Pampas Guadalajara",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 4608,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/114611339313321053839\"\u003eJohn Thomas\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAzhI2Q00fD2SUcsxk-dXjkwA2s8drqy8-tJHYAWfX3fDdQDkaS3nwOIMk7k5TGl7NIS1BfLwVc8EGGiqlUm0DSu7bHiadfJxwdOR5CyBYklckFTvLN89OBgwukMGwkoPLc9XEf0l6nyEf0tU3AtOo40-AGAGJPhpFA31_izy0s6qxp",
                "width" : 3456
             }
          ],
          "place_id" : "ChIJjaVkO82tKIQR2g4VieL2RX0",
          "plus_code" : {
             "compound_code" : "JHWW+XC Zapopan, Jalisco",
             "global_code" : "75GRJHWW+XC"
          },
          "price_level" : 3,
          "rating" : 4.6,
          "reference" : "ChIJjaVkO82tKIQR2g4VieL2RX0",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 10951
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Moctezuma 3515, Cd del Sol, 45050 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6504572,
                "lng" : -103.4036155
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.65186742989272,
                   "lng" : -103.4022139701073
                },
                "southwest" : {
                   "lat" : 20.64916777010728,
                   "lng" : -103.4049136298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Bistro La Bastille",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 3024,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/115705290137959259103\"\u003eJaime de la Parra\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uECA5_xaTlh4Wupczj9BOsmX6Yp4Mm640UFdj6JczDhmft8vxJ0XLUyE9-4ij3d7KgjkbuM2-9CEeJVUZm6x_R94qzCf4rZ_b0EBBCl9ysjZ68iJVmzjkCKvDlJlAGNZuuqJAsdWguJCkf5KywAkm50SUCSPZDqvuRnS8IUFIMci_9Gh",
                "width" : 4032
             }
          ],
          "place_id" : "ChIJHzC5sdKtKIQR1y_wQEsjQyE",
          "plus_code" : {
             "compound_code" : "MH2W+5H Zapopan, Jalisco",
             "global_code" : "75GRMH2W+5H"
          },
          "rating" : 4.6,
          "reference" : "ChIJHzC5sdKtKIQR1y_wQEsjQyE",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 175
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Calz. Lázaro Cárdenas 3549, Jardín de San Ignacio, 45040 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6701682,
                "lng" : -103.4047195
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.67156157989272,
                   "lng" : -103.4033429201073
                },
                "southwest" : {
                   "lat" : 20.66886192010728,
                   "lng" : -103.4060425798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Los Arcos",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 844,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/101950686415384495556\"\u003eRestaurante Los Arcos\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAq1L-R2e4EaUNYluMtvKB1E8wQ5F_eFM5coQVvXRNWNAYM4vop79k6735BaquE3zBPyj71Cnc5dCn_qOQ8CK21qeQxP8OOR-de8eiXaCnA-5GYyDA1eIV06klLT0IkIfQygrVMAt8drz7FUx385TVmIKRlsg_2chKwrt1D_hOr9Lk",
                "width" : 844
             }
          ],
          "place_id" : "ChIJZwSxf32uKIQRrGCXIAyW48w",
          "plus_code" : {
             "compound_code" : "MHCW+34 Zapopan, Jalisco",
             "global_code" : "75GRMHCW+34"
          },
          "price_level" : 2,
          "rating" : 4.7,
          "reference" : "ChIJZwSxf32uKIQRrGCXIAyW48w",
          "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 3584
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av. Adolfo López Mateos Sur 2375, Cd del Sol, 45050 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.65074,
                "lng" : -103.402482
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.65210832989272,
                   "lng" : -103.4012585201073
                },
                "southwest" : {
                   "lat" : 20.64940867010728,
                   "lng" : -103.4039581798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Chai Plaza del Sol",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 3024,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/111277900410003711535\"\u003eMartín León Preciado\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAjDKQT8WKkPytVn3MiUPeObbZvgb9jazILGbO1J1HMPN2DNwAQhYxRAJNOdUZ1k5LUhuyU-z70EP2XkzDGG26_fmDDZumntJlEkSzzOqwX2cHRVR-gkEhMgvQxVCeBJyut5xpmy3qjXd9iba6mSzEb7ScHyBp9x5O2kMHGEjy0E7cI",
                "width" : 4032
             }
          ],
          "place_id" : "ChIJEcEjidKtKIQRj4tjXdca3UY",
          "plus_code" : {
             "compound_code" : "MH2X+72 Zapopan, Jalisco",
             "global_code" : "75GRMH2X+72"
          },
          "price_level" : 2,
          "rating" : 4.4,
          "reference" : "ChIJEcEjidKtKIQRj4tjXdca3UY",
          "types" : [
             "restaurant",
             "cafe",
             "bar",
             "food",
             "point_of_interest",
             "store",
             "establishment"
          ],
          "user_ratings_total" : 4711
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "San Dionisio 33, Jardín de San Ignacio, 45040 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6676577,
                "lng" : -103.4029445
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66897722989272,
                   "lng" : -103.4014940201073
                },
                "southwest" : {
                   "lat" : 20.66627757010728,
                   "lng" : -103.4041936798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Campomar",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 3024,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/102339312302588304408\"\u003eM. Y.\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEDAvxNk8sG4vuOibKjnxgSkambnwJo6CBlxI0fgXgS_DLF3IYPNl7Hq28BebO0eQXfnvjSm5gtnuxN6qVGbaKcY3nN6AVXpR18q3Y96-vuvsTKwszpCVdRb8aFziEsgk8kL_9kDuxVTLGxJf_mnAUW5sxb1T1pSDsL0Ac3ae7JFpzC3",
                "width" : 4032
             }
          ],
          "place_id" : "ChIJUW6b2X2uKIQRoKmuOZiqJVs",
          "plus_code" : {
             "compound_code" : "MH9W+3R Zapopan, Jalisco",
             "global_code" : "75GRMH9W+3R"
          },
          "price_level" : 2,
          "rating" : 4.8,
          "reference" : "ChIJUW6b2X2uKIQRoKmuOZiqJVs",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 3464
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av. Adolfo López Mateos Sur 2198, Cd del Sol, 45050 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6543439,
                "lng" : -103.4012831
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.65560897989272,
                   "lng" : -103.3997733201073
                },
                "southwest" : {
                   "lat" : 20.65290932010727,
                   "lng" : -103.4024729798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Hacienda Canelos",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 3096,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/117343455546499408826\"\u003eA Google User\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEBpBurE8Tajmf7w0Rn94nScbrGrikwE8qAY93KZwjAV4u4ZrjRPtqomrNwTehrlKfNxW_X1a-7JZl8TjYpnhqx7jOsjJf8Y0jMuE-nlfppBTCbA7pYvn5oBk_bde1v4dkVFgqWB-T2NVMmdvhMWk-Dnbcbt4PjnXTHa-rU6maglJpbf",
                "width" : 4128
             }
          ],
          "place_id" : "ChIJgcD0ltOtKIQRM6celgv1DFA",
          "plus_code" : {
             "compound_code" : "MH3X+PF Zapopan, Jalisco",
             "global_code" : "75GRMH3X+PF"
          },
          "price_level" : 2,
          "rating" : 4.4,
          "reference" : "ChIJgcD0ltOtKIQRM6celgv1DFA",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 3197
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Guadalupe 1000, Jardín de San Ignacio, 45040 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6670704,
                "lng" : -103.4031524
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66832687989272,
                   "lng" : -103.4017510701073
                },
                "southwest" : {
                   "lat" : 20.66562722010728,
                   "lng" : -103.4044507298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "La Cabotina",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 12000,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/112885180224685803917\"\u003eDaniel Rivera\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEC8vzfP_GVFcQjJ6crZ326tNU45zdVxrhuaCqxACnks0CqWJ2AY61IwpAan563Fzk6zRtlkURyKc5IsqZUK_gOeLNux2XTauZZWiVf_lRzvSm9U1tQqQDlitbwfQyaFphlacrkJD4_H7DBxe7Osk5bGcr78rJXNdcoPdEXfw1-R0trs",
                "width" : 9000
             }
          ],
          "place_id" : "ChIJB1hQdn6uKIQRJpcESttqLaE",
          "plus_code" : {
             "compound_code" : "MH8W+RP Zapopan, Jalisco",
             "global_code" : "75GRMH8W+RP"
          },
          "price_level" : 2,
          "rating" : 4.7,
          "reference" : "ChIJB1hQdn6uKIQRJpcESttqLaE",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 3700
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Guadalupe 1144, Chapalita, 44500 Guadalajara, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6668558,
                "lng" : -103.4019851
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66810492989272,
                   "lng" : -103.4007427701073
                },
                "southwest" : {
                   "lat" : 20.66540527010728,
                   "lng" : -103.4034424298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "La Bocha Chapalita",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 2988,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/107306667895017802077\"\u003eJuan Manuel Moreno Padilla\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEBmADj4ajDhAoJlx8seG3l4Cg1j5Bjnh9qYgIG71gUSOyqknhEFDAmJwTvCy7qgnFRiiOCjzFvyOei8Y4e4bDTWDhxCGgYLyWG7U60w6CSPx03SRTWICvoIhF-UtnR7TXjKu1LSKELiT3Bb_eP9lwShHE_tKPyI3umjYuJp4PGqHw-8",
                "width" : 5312
             }
          ],
          "place_id" : "ChIJWYNjfX6uKIQR5tqcBXvvqO8",
          "plus_code" : {
             "compound_code" : "MH8X+P6 Guadalajara, Jalisco",
             "global_code" : "75GRMH8X+P6"
          },
          "price_level" : 3,
          "rating" : 4.5,
          "reference" : "ChIJWYNjfX6uKIQR5tqcBXvvqO8",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 1954
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Guadalupe 1269, Chapalita Oriente, 45040 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6657267,
                "lng" : -103.4041249
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66719607989273,
                   "lng" : -103.4028248701073
                },
                "southwest" : {
                   "lat" : 20.66449642010728,
                   "lng" : -103.4055245298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Fornino",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 4000,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/102415984593205614896\"\u003eFelipe Valle\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEDPr3L-LLS9zm9wuBsyCYigTOwthrpa35AF9qM_h2yvYz3LVE1DbDqMGA4iekn6hvAbeSYfY5zpECVimZfet5QZFx3lJrI_KuyZ16rADIqvVWxmhZkL8rrqZBSTfS_iSrWD4P9oh1iSkfoDkj72Zz1Yb6Z2DQFdq6x5wQe66tcWu5qI",
                "width" : 3000
             }
          ],
          "place_id" : "ChIJKzOKgfqrKIQR8EAo8xwPmCg",
          "plus_code" : {
             "compound_code" : "MH8W+79 Zapopan, Jalisco",
             "global_code" : "75GRMH8W+79"
          },
          "price_level" : 2,
          "rating" : 4.7,
          "reference" : "ChIJKzOKgfqrKIQR8EAo8xwPmCg",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 3662
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av. Adolfo López Mateos Sur 1280, Chapalita, 45040 Guadalajara, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6612247,
                "lng" : -103.3964291
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66254322989272,
                   "lng" : -103.3950270201073
                },
                "southwest" : {
                   "lat" : 20.65984357010728,
                   "lng" : -103.3977266798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "JAL Cocina de Raíz",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 2592,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/109944701816230063505\"\u003eJulian T.\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEDBBNvQLxVitY_lv-saHQ1v3dwVGV5vnqciafxPTKSIwX6pOwXxQdEZXDQgdkrEOEZmD28QEFgiH8iQZG8vA34qO6mvNUK80tBb5kmSp8G3dDmXmn7-S0bWNAtPStYEF0j5vISKOEx9fCOICMMtgCbickwgQfEIEW4EZCmnJUgZxVlg",
                "width" : 4608
             }
          ],
          "place_id" : "ChIJWRLDzDKtKIQRYfwzAeGvHcA",
          "plus_code" : {
             "compound_code" : "MJ63+FC Guadalajara, Jalisco",
             "global_code" : "75GRMJ63+FC"
          },
          "rating" : 4.5,
          "reference" : "ChIJWRLDzDKtKIQRYfwzAeGvHcA",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 96
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av. Patria 574, Jardines de Guadalupe, 44030 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6664128,
                "lng" : -103.4245736
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66777732989272,
                   "lng" : -103.4230918701073
                },
                "southwest" : {
                   "lat" : 20.66507767010728,
                   "lng" : -103.4257915298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Save",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 3024,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/117458534739798415917\"\u003eOmar Flores\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uECnHz29FzkqGOcQRCXEVDd-7EbHwxBMkx3NosjdAmZ_f8IYWUdiHULEKiGsYNlHRWGS9rVdlJK-XEaIEFbyV8xacSh_-EzJJ9Kjhr_Rb4Anm9a2Tb0h09A-o98tZfNn91S74P4J1pM_TBUXgPmSRhxN8lZwsHObpGSkIFVFdQ59gtc",
                "width" : 4032
             }
          ],
          "place_id" : "ChIJg8V8dO6uKIQRAutDX2HiAs8",
          "plus_code" : {
             "compound_code" : "MH8G+H5 Zapopan, Jalisco",
             "global_code" : "75GRMH8G+H5"
          },
          "price_level" : 2,
          "rating" : 4.7,
          "reference" : "ChIJg8V8dO6uKIQRAutDX2HiAs8",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 4269
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av de Las Rosas 730, Chapalita Oriente, 45040 Guadalajara, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6641667,
                "lng" : -103.4016667
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66548692989272,
                   "lng" : -103.4003877701073
                },
                "southwest" : {
                   "lat" : 20.66278727010728,
                   "lng" : -103.4030874298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "LA PASTERIA CHAPALITA",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 1951,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/105723440463434613217\"\u003eJesús Bernal\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEC9IzP6B-Ok4u65h5YDKMBWjpZyO2LDVrNoDgJv4CV2ga-GPSog3t2LiMiOk6CH1Fs0b7l0EFOzywqxc0JwiG1_ZkpwB5G9gY1x50ujbdNdNUJfWayABif77TlE3V452na0Fjs57v9UlYRQYEFiuyR9U8hiYp7UEfZZ5_PMY4GpdaKl",
                "width" : 3028
             }
          ],
          "place_id" : "ChIJX2QDBH-uKIQRoeDcmnm5yZw",
          "plus_code" : {
             "compound_code" : "MH7X+M8 Guadalajara, Jalisco",
             "global_code" : "75GRMH7X+M8"
          },
          "price_level" : 2,
          "rating" : 4.6,
          "reference" : "ChIJX2QDBH-uKIQRoeDcmnm5yZw",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 2030
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Guadalupe 1258, Jardín de San Ignacio, 45040 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.666491,
                "lng" : -103.4035948
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66770812989273,
                   "lng" : -103.4022181201073
                },
                "southwest" : {
                   "lat" : 20.66500847010728,
                   "lng" : -103.4049177798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "New York New York Restaurant",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 3840,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/109534633282757974363\"\u003eLaura Morales\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEDwoFY_8ujZGMeQ4Sk2tlopkQrCxPGvI046b079KL6aIghFyPZYMRGZ053vLNqNHgt60mMahm-tX_iDPquxmQbyUfLGlbhYigvVXnrG7wAw2xdvy3g42E9N8FZBwe7LNh3JLzY81IzlYZxCIAIwBN0AveZWORR9QwuI8kJBi2GL382A",
                "width" : 5120
             }
          ],
          "place_id" : "ChIJo8yCEH6uKIQR-0DCUwL9NFA",
          "plus_code" : {
             "compound_code" : "MH8W+HH Zapopan, Jalisco",
             "global_code" : "75GRMH8W+HH"
          },
          "price_level" : 2,
          "rating" : 4.2,
          "reference" : "ChIJo8yCEH6uKIQR-0DCUwL9NFA",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 993
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av Manuel J. Clouthier 777, Jardines de Guadalupe, 45030 Zapopan, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6639936,
                "lng" : -103.4204423
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66534342989272,
                   "lng" : -103.4190924701073
                },
                "southwest" : {
                   "lat" : 20.66264377010727,
                   "lng" : -103.4217921298927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "Tita´sfresa",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 4618,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/103722999626718625334\"\u003eMeli Reyes\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uECDXyqv_1Vus5-rOHYqnkmFh5HsGxa0Q4Dfngh3eJySYuLSylwY3_TYWkTclxwnfLPO27UjOn5hNzsFE_eMFlc70D1_o_76jXfxLmNTM_QkUlfiDo94UREKBJrOFxdFvUgBtenJcba5dSiEbTPC3jSQZ6ZO1WmExz2rwiBCRioyOLtg",
                "width" : 3464
             }
          ],
          "place_id" : "ChIJXeKXQ5yuKIQR_69c4_sxFso",
          "plus_code" : {
             "compound_code" : "MH7H+HR Zapopan, Jalisco",
             "global_code" : "75GRMH7H+HR"
          },
          "price_level" : 2,
          "rating" : 4.6,
          "reference" : "ChIJXeKXQ5yuKIQR_69c4_sxFso",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 325
       },
       {
          "business_status" : "OPERATIONAL",
          "formatted_address" : "Av de Las Rosas 741-A, Chapalita, 45040 Guadalajara, Jal., Mexico",
          "geometry" : {
             "location" : {
                "lat" : 20.6641613,
                "lng" : -103.402148
             },
             "viewport" : {
                "northeast" : {
                   "lat" : 20.66552737989272,
                   "lng" : -103.4007073201073
                },
                "southwest" : {
                   "lat" : 20.66282772010728,
                   "lng" : -103.4034069798927
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
          "icon_background_color" : "#FF9E67",
          "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
          "name" : "La Moresca Chapalita",
          "opening_hours" : {
             "open_now" : true
          },
          "photos" : [
             {
                "height" : 2988,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/102698468357888810506\"\u003eJacob C.\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEA95UZKxxJo2ZAszOtQ4MNJjvZVZdumWEVRU63KC8OstTSbWIBvDq99a9jbgxfMhFwYEhOA6DwDzOz7VALiBsaGwBmLY0MX-tZNpwZZElYi3OHHTRoH0g46Lc1E-sIQ-sdNiRrkw4K30N69uJvmJjeoE27vv1OwY-IyoFiBM7xCf5YB",
                "width" : 5312
             }
          ],
          "place_id" : "ChIJAbjtAH-uKIQRBWBi-u7YlsI",
          "plus_code" : {
             "compound_code" : "MH7X+M4 Guadalajara, Jalisco",
             "global_code" : "75GRMH7X+M4"
          },
          "price_level" : 2,
          "rating" : 4.6,
          "reference" : "ChIJAbjtAH-uKIQRBWBi-u7YlsI",
          "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
          "user_ratings_total" : 2384
       }
    ]
  //const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [devices, setDevices] = useState(FakeDevices);
  const [filtered, setFiltered] = useState(FakeDevices);


  const getRestaurants = useCallback(async (query) => {
   //  try {
   //    const response = await fetch(
   //      `${process.env.REACT_APP_BACKEND_URL}/textsearch/json?query=${query}&key=${process.env.REACT_APP_API_KEY}`,
   //      {
   //        method: "GET",
   //        headers: {
   //        },
   //      }
   //    );

   //    const data = await response.json();
   //    console.log(data);

   //    if (!response.ok) {
   //      throw new Error(data.message || "Could not get restaurants");
   //    }
   //    console.log(data);
   //    setTimeout(() => {
   //      setIsLoading(false);
   //    }, 200);
   //  } catch {
   //    alert("Something went wrong while getting restaurants");
   //    setError(true);
   //  }
   console.log('REQUEST TO GET RESTAURANTS')
  }, []);

  useEffect(() => {
    getRestaurants('restaurants');
  }, [getRestaurants]);

  let filterRestaurants = (query) => {
    // setQuery(query);
    if (query === "") {
      setFiltered(FakeDevices);
    } else {
      let filtered = devices.filter((obj) => {
        return obj.name.includes(query);
      });
      setFiltered(filtered);
    }
  };


  return (
    <div>
      HomePage
      <Search onEnterKey={filterRestaurants} />
      <CardContainer isLoading={isLoading}>
        {filtered.map((device) => (
          <Card key={device.name} element={device}></Card>
        ))}
      </CardContainer>
    </div>
  );
}
