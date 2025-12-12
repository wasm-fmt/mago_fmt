<?php

$result = ($fib = function ($n) use (&$fib) {
    return $n <= 1 ? $n : $fib($n - 1) + $fib($n - 2);
})(10);
