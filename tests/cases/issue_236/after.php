<?php

$object = map([
    'nullableDateTimeImmutable' => '', // foo
    'dateTimeObject' => new DateTimeImmutable('2024-01-01 10:10:10'),
    'dateTimeImmutable' => '2024-01-01 10:10:10',
    'dateTime' => '2024-01-01 10:10:10',
    'dateTimeWithFormat' => '01/12/2024 10:10:10',
    'bool' => 'no',
    'float' => '0.1',
    'int' => '1',
])->to(ObjectWithBuiltInCasters::class);

model(User::class)->create(
    id: 10,
    name: 'Jon',
    settings: new Settings(Theme::DARK),
    posts: [
        new Post('hello', 'world'),
    ],
);
