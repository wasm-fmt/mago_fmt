<?php

$this->assertSame(
    ['a', 'b', 'c'],
    $array
        ->sortByCallback(
            callback: fn($a, $b) => $a <=> $b,
            preserveKeys: false,
        )
        ->toArray(),
);
