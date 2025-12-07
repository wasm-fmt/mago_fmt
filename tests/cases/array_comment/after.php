<?php

function foo(): void
{
    $a = [
        'a' => 1, // foo
        'b' => "bar {$baz}",
        'c' => "qux $quxx",
    ];
}
