<?php

test('parsing an invalid email throws `InvalidJson`', function (string $body) {
    $parseEmail = resolve(ParseEmail::class);
    $parseEmail(build_email_data(body: $body));
})->with([
    ['Textual body'],
    ['{ "foo": "bar", }'],
])->throws(InvalidJson::class);
