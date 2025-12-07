<?php

yield [
    $this->getType(),
    "array{'name': string, 'articles': vec<array{" .
    "'title': string, " .
    "'content': string, " .
    "'likes': int, " .
    "'comments'?: vec<array{'user': string, 'comment': string}>" .
    "}>}",
];
