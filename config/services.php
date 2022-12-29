<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    "mailgun" => [
        "domain" => env("MAILGUN_DOMAIN"),
        "secret" => env("MAILGUN_SECRET"),
        "endpoint" => env("MAILGUN_ENDPOINT", "api.mailgun.net"),
    ],

    "postmark" => [
        "token" => env("POSTMARK_TOKEN"),
    ],

    "ses" => [
        "key" => env("AWS_ACCESS_KEY_ID"),
        "secret" => env("AWS_SECRET_ACCESS_KEY"),
        "region" => env("AWS_DEFAULT_REGION", "us-east-1"),
    ],

    "website" => [
        "base_uri" => env("BASE_URI", "https://api.cms-tool.net/webapps/api"),
        "insinc_api_id" => env("INSINC_API_ID"),
        "insinc_api_key" => env("INSINC_API_KEY"),

        "cafe_api_id" => env("CAFE_API_ID"),
        "cafe_api_key" => env("CAFE_API_KEY"),

        "car_api_id" => env("CAR_API_ID"),
        "car_api_key" => env("CAR_API_KEY"),

        "gloves_api_id" => env("GLOVES_API_ID"),
        "gloves_api_key" => env("GLOVES_API_KEY"),

        "hand_api_id" => env("HAND_API_ID"),
        "hand_api_key" => env("HAND_API_KEY"),

        "packnet_api_id" => env("PACKNET_API_ID"),
        "packnet_api_key" => env("PACKNET_API_KEY"),

        "rubbish_api_id" => env("RUBBISH_API_ID"),
        "rubbish_api_key" => env("RUBBISH_API_KEY"),
    ],
    "xero" => [
        "base_uri" => env('XERO_BASE_URI'),
        'client_id' => env('XERO_CLIENT_ID'),
        'client_secret' => env('XERO_CLIENT_SECRET'),
    ],
];
